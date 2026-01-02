import PokerEvaluator from "poker-evaluator";
import type { poker_table_data_for_Cash_Game } from "@poker/types";
import type { Tplayer_details } from "../types/index.js";

// const datam = {
//   tablename: "table name",
//   communityCards: ["ye", "iu", "ru", "ei", "jo"],
//   players: {
//     player1: ["yi", "oi"],
//     player2: ["yi", "oi"],
//     player3: ["yi", "oi"],
//     player4: ["yi", "oi"],
//   },
//   total_chips: 1234,
//   game_type: "Cash Game",
// };

class price_calculator {
  // calculate player hand
  private calculate_player_hand(
    player_list: Tplayer_details[],
    communityCards: []
  ) {
    player_list.forEach((player) => {
      const cards = player.hand.concat(communityCards);
      player.result = PokerEvaluator.evalHand(cards);
    });

    return player_list;
  }

  //....................................... normal Game ....................

  public normal_Game_logic(data: poker_table_data_for_Cash_Game) {
    let player_list: Tplayer_details[] = [];
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

    player_list = this.calculate_player_hand(
      player_list,
      data.communityCards as []
    );
    // Find best hand
    const bestValue = Math.max(
      ...player_list.map((player) => player.result.value)
    );

    //  Find winner
    const winners = player_list.filter(
      (player) => player.result.value === bestValue
    );

    return {
      tablename: data.tablename,
      game_type: data.game_type,
      winners: winners.forEach((w) => [w.player_email, w.result.handName]),
      chips: data.total_chips,
    };
  }

  //............................Tournament Game 1st 50%  2nd 30% 3rd 20% ..........................//
  public Tournament_Game_logic(data: poker_table_data_for_Cash_Game) {
    let player_list: Tplayer_details[] = [];
    // add all player in this  object
    for (let player of Object.entries(data.players)) {
      const player_details: Tplayer_details = {
        cards: player[1] as [],
        player_email: player[0],
        hand: [],
        rank: NaN,
        result: null,
      };
      player_list.push(player_details);
    }

    //  function for calculate player hand
    player_list = this.calculate_player_hand(
      player_list,
      data.communityCards as []
    );

    // sort player by
    player_list.sort((a, b) => b.result.value - a.result.value);

    //@ts-ignore
    player_list[0]?.rank = 1;
    //@ts-ignore
    player_list[1]?.rank = 2;
    //@ts-ignore
    player_list[2]?.rank = 3;

    return {
      table_name:data.tablename,
      game_type:data.game_type,
      winners:{
        first : player_list[0],
        second:player_list[1],
        third:player_list[2]
      },
      chips:data.total_chips 
    }
  }
}
