import type { Request, Response, NextFunction } from "express";

export type type_of_asyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<type_for_responce | any>;

export type type_for_responce = {
  statuscode: number;
  data: object | null;
  message: string;
  success?: boolean;
  error?: Error | [];
  stack?: string | null;
};


type Card = string;

type PlayerCards = Card[];
 
export  type poker_table_data_for_Cash_Game  = {
  tablename: string;
  communityCards: Card[];          // exactly 5 cards in real game
  players: {
    player1: PlayerCards;
    player2: PlayerCards;
    player3: PlayerCards;
    player4: PlayerCards;
  };
  total_chips: number;
  game_type: "Cash Game" | "Tournament";
};
