import { Router } from "express";
import {
  sign_up_controller,
  login_controller,
  change_user_password,
  addBalance,
  addChips,
  convert_chips_to_balance,
} from "../controller/index.controller.js";

import {verify_JWT} from "../middleware/index.middleware.js"



const routes = Router();
routes.route("/sign-up").post(sign_up_controller);
routes.route("/log-in").post(login_controller);
routes.route("/change-password").put(verify_JWT , change_user_password);
routes.route("/add-balance").post(verify_JWT, addBalance);
routes.route("/add-chips").post(verify_JWT, addChips);
routes.route("/convert-chips-to-money").post(verify_JWT,convert_chips_to_balance)
