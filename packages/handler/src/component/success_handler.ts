import type{type_for_responce} from "../type/index.js"
class api_responce {
  statuscode: type_for_responce["statuscode"];
  data: type_for_responce["data"];
  message: type_for_responce["message"];
  success: type_for_responce["success"];

  constructor(
    statuscode: type_for_responce["statuscode"],
    data: type_for_responce["data"],
    message: type_for_responce["message"] = "success"
  ) {
    this.statuscode = statuscode;
    this.data = data;
    this.message = message;
    this.success = statuscode < 400;
  }
}

export {api_responce}