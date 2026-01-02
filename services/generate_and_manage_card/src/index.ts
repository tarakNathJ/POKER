import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import {
  status,
  type ServerUnaryCall,
  type sendUnaryData,
} from "@grpc/grpc-js";
import cards_suffle_algo from "./component/cards_Shuffle.js";
import { card_selection_round } from "./component/round_card.js";
import { generate_number_one_to_Three } from "./component/generate_random_number.js";

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

// init  cards shuffle class
const cards = new cards_suffle_algo();

const server = new grpc.Server();
server.addService(cardsProto.UserCardDetails.service, {
  async CreateUser(
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>
  ) {
    try {
      const { table_id } = call.request;

      // chack table are exist or not
      // generate rendom number for Randomized Algorithm Selection
      // shuffle cards
      // then chack cards proper shuffel or not
      //  then cards selection round for this table
      // then structure user responce
      // then send responce

      if (!table_id) {
        callback(
          {
            code: status.UNAVAILABLE,
            message: " table id are not present  ",
          },
          null
        );
      }

      const current_generated_number: number = generate_number_one_to_Three();

      const shuffle_cards:
        | {
            cards: string[];
            algo_name: string;
          }
        | any = await cards.directions(current_generated_number);

      if (!shuffle_cards || shuffle_cards.cards.length === 0) {
        callback(
          {
            code: status.DATA_LOSS,
            message: " cards shuffle  ",
          },
          null
        );
      }

      const { Card, flop_round, trun_round, river_round } =
        card_selection_round(shuffle_cards.cards);

      const response = {
        game_id: table_id,
        flop_round: flop_round,
        turn_round_card: trun_round,
        river_round_card: river_round,
        total_shuffled_deck: {
          shuffle_name: shuffle_cards.algo_name,
          cards: Card,
        },
      };

      callback(null, response);
    } catch (error) {
      callback(
        {
          code: status.INTERNAL,
          message: "Failed to create user game",
        },
        null
      );
    }
  },
});
server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), () =>
  server.start()
);
