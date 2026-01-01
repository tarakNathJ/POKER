import type { Request, Response, NextFunction } from "express";
import type { type_of_asyncFunction } from "@poker/types";


export const asyncFunction =
  (func: type_of_asyncFunction) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next);
    } catch (error: any) {
      // Handle invalid JSON body
      if (error instanceof SyntaxError && "body" in error) {
        return res.status(400).json({
          success: false,
          message: "Invalid JSON format. Please check your request body.",
        });
      }
      return res.status(error.status || error.statusCode || 500).json({
        success: false,
        message: error.message,
      });
    }
  };
