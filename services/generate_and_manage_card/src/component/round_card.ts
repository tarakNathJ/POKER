export const card_selection_round = (cards: string[]) => {
  if (!cards || cards.length != 52) {
    throw new Error("52  card are not exit ");
  }
  const all_cards = cards;
  const flop_round = all_cards.splice(0, 3);
  const trun_round = all_cards.splice(2, 3);
  const river_round = all_cards.splice(1, 2);

  return { Card: all_cards, flop_round, trun_round, river_round };
};
