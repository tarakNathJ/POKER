import { config } from "dotenv";
import { init_express_server } from "./app.js";
config({
  path: "./.env",
});

const port = process.env.PORT;

new init_express_server().app.listen(port!, () => {
  console.log(`server running at ${port}`);
});
