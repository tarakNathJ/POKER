import { asyncFunction, api_error } from "@handler/pocker";
import { prisma } from "@poker/database";
import JWT from "jsonwebtoken"
import { config } from "dotenv";
config()

export const verify_JWT = asyncFunction(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    // console.log(token);
    if (!token) {
      throw new api_error(401, "Unauthorized request",Error.prototype);
    }
    const  ACCESS_TOKEN =   process.env.JWT_SECRET;
    if(!ACCESS_TOKEN){
        throw new api_error(401, "env not exist",Error.prototype);
    }


    const decodedToken = JWT.verify(token,ACCESS_TOKEN);

    const user = await prisma.user.findFirst({
        where:{
            //@ts-ignore
            email:decodedToken?.email
        },
        select:{
            id:true
        }
    })

    if (!user) {
      throw new api_error(401, "Invalid Access Token",Error.prototype);
    }
   
    // @ts-ignore
    req.user =user

    next();
  } catch (error :any) {
    throw new api_error(401, error?.message || "Invalid access token",Error.prototype);
  }
});