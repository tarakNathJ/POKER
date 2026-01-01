import type{type_for_responce} from "@poker/types"

class api_error extends Error {
  statuscode!: type_for_responce["statuscode"];
  errors: type_for_responce["error"];
  override stack!: string;
  message: type_for_responce["message"];
  data: any[];

  constructor(
    statusCode: type_for_responce["statuscode"],
    message: type_for_responce["message"] = "something  went Wrong",
    errors: type_for_responce["error"] = [],
    stack = ""
  ) {
    super(message);
    this.statuscode = statusCode;
    this.message = message;
    this.data = [];
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export {api_error}