import type { Request, Response, NextFunction } from "express";

export type type_of_asyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<type_for_responce >;

export type type_for_responce = {
  statuscode: number;
  data: object | null;
  message: string;
  success?: boolean;
  error?: Error | [];
  stack ?: string | null
};