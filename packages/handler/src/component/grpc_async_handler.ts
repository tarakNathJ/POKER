import { status } from "@grpc/grpc-js";

export function grpcAsyncHandler<TReq, TRes>(
  handler: (call: { request: TReq }) => Promise<TRes>
) {
  return async (call: any, callback: any) => {
    try {
      const result = await handler(call);
      callback(null, result);
    } catch (err: any) {
      callback(
        {
          code: status.INTERNAL,
          message: err.message ?? "Internal server error",
        },
        null
      );
    }
  };
}
