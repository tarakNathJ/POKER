import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import { grpcAsyncHandler } from "@handler/pocker";

import { manage_user_logic } from "./controller/index.controller.js";

// get path for your .proto file

const PROTO_PATH = new URL(
  import.meta.resolve("@proto/pocker/generate_and_manage.proto")
).pathname;

// Load proto
const package_definition = protoLoader.loadSync(PROTO_PATH, {
  defaults: true,
  keepCase: true,
  oneofs: true,
});

// Load gRPC package
const grpcObject = grpc.loadPackageDefinition(package_definition) as any;
// Access proto package
const cardsProto = grpcObject.cards;

const server = new grpc.Server();



server.addService(cardsProto.UserCardDetails.service, {
  ManageCard: grpcAsyncHandler(manage_user_logic),
});

server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("gRPC server running on 0.0.0.0:50051");
    server.start();
  }
);
