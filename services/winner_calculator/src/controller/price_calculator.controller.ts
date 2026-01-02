import PokerEvaluator from "poker-evaluator";
import type { poker_table_data_for_Cash_Game } from "@poker/types";
import type { Tplayer_details } from "../types/index.js";

class price_calculator {
  //....................................... normal Game ....................

  public Cash_Game_logic(data: poker_table_data_for_Cash_Game) {
    const player_list: Tplayer_details[] = [];
    // add all player in this  object
    for (let player of Object.entries(data.players)) {
      const player_details: Tplayer_details = {
        cards: player[1] as [],
        player_email: player[0],
        hand: [],
        result: null,
      };
      player_list.push(player_details);
    }

    // calculate player hand
    player_list.forEach((player) => {
      const cards = player.hand.concat(data.communityCards as []);
      player.result = PokerEvaluator.evalHand(cards);
    });

    // Find best hand
    const bestValue = Math.max(
      ...player_list.map((player) => player.result.value)
    );

    //  Find winner
    const winners = player_list.filter(
      (player) => player.result.value === bestValue
    );

    return {
        tablename:data.tablename,
        game_type:data.game_type,
        winners:winners.forEach(w => [w.player_email , w.result.handName]);
        chips:data.total_chips
    }
  }



}
