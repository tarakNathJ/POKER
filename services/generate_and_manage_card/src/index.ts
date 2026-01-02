import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
// get path for your .proto file
// const PROTO_PATH = require.resolve("@proto/pocker/generate_and_manage.proto");
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
  CreateUser: (call: any, callback: any) => {
    const deck = [
      "2h",
      "3h",
      "4h",
      "5h",
      "6h",
      "7h",
      "8h",
      "9h",
      "Th",
      "Jh",
      "Qh",
      "Kh",
      "Ah",
      "2d",
      "3d",
      "4d",
      "5d",
      "6d",
      "7d",
      "8d",
      "9d",
      "Td",
      "Jd",
      "Qd",
      "Kd",
      "Ad",
      "2c",
      "3c",
      "4c",
      "5c",
      "6c",
      "7c",
      "8c",
      "9c",
      "Tc",
      "Jc",
      "Qc",
      "Kc",
      "Ac",
      "2s",
      "3s",
      "4s",
      "5s",
      "6s",
      "7s",
      "8s",
      "9s",
      "Ts",
      "Js",
      "Qs",
      "Ks",
      "As",
    ];
    callback(null, {
      game_id: "game-123",
      flop_round: ["AS", "KD", "QH"],
      turn_round_card: "JC",
      river_round_card: "10S",
      total_shuffled_deck: {
        shuffle_name: "standard_52",
        cards: deck,
      },
    });
  },
});

server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), () =>
  server.start()
);
