import express, { type Express } from "express";
import route from "./router/index.route.js";
import cors from "cors";

class init_express_server {
  public app: Express = express();
  constructor() {
    this.app.use(
      cors({
        origin: "*",
      })
    );

    this.app.use(express.json());
    this.app.use("/api/v1", route);
  }
}

export { init_express_server };
