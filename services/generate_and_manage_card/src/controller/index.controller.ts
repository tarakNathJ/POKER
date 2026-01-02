import { status } from "@grpc/grpc-js";
import cards_suffle_algo from "../utils/cards_Shuffle.js"
import { card_selection_round } from "../utils/round_card.js";
import { generate_number_one_to_Three } from "../utils/generate_random_number.js";

const cards = new cards_suffle_algo();

export async function manage_user_logic(call: any) {
  const { table_id } = call.request;

  
  if (!table_id) {
    const err: any = new Error("table_id is required");
    err.code = status.INVALID_ARGUMENT;
    throw err;
  }

  // Randomized Algorithm Selection
  const algoNumber = generate_number_one_to_Three();

  const shuffleCards = await cards.directions(algoNumber);

  if (!shuffleCards || shuffleCards.cards.length === 0) {
    const err: any = new Error("Card shuffle failed");
    err.code = status.DATA_LOSS;
    throw err;
  }

  const { Card, flop_round, trun_round, river_round } =
    card_selection_round(shuffleCards.cards);

  return {
    game_id: table_id,
    flop_round,
    turn_round_card: trun_round,
    river_round_card: river_round,
    total_shuffled_deck: {
      shuffle_name: shuffleCards.algo_name,
      cards: Card,
    },
  };
}
