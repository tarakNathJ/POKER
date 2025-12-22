
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model balance
 * 
 */
export type balance = $Result.DefaultSelection<Prisma.$balancePayload>
/**
 * Model total_winning
 * 
 */
export type total_winning = $Result.DefaultSelection<Prisma.$total_winningPayload>
/**
 * Model chip
 * 
 */
export type chip = $Result.DefaultSelection<Prisma.$chipPayload>
/**
 * Model table
 * 
 */
export type table = $Result.DefaultSelection<Prisma.$tablePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.balance`: Exposes CRUD operations for the **balance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Balances
    * const balances = await prisma.balance.findMany()
    * ```
    */
  get balance(): Prisma.balanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.total_winning`: Exposes CRUD operations for the **total_winning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Total_winnings
    * const total_winnings = await prisma.total_winning.findMany()
    * ```
    */
  get total_winning(): Prisma.total_winningDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chip`: Exposes CRUD operations for the **chip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chips
    * const chips = await prisma.chip.findMany()
    * ```
    */
  get chip(): Prisma.chipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.table`: Exposes CRUD operations for the **table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.table.findMany()
    * ```
    */
  get table(): Prisma.tableDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    balance: 'balance',
    total_winning: 'total_winning',
    chip: 'chip',
    table: 'table'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "balance" | "total_winning" | "chip" | "table"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      balance: {
        payload: Prisma.$balancePayload<ExtArgs>
        fields: Prisma.balanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.balanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.balanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          findFirst: {
            args: Prisma.balanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.balanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          findMany: {
            args: Prisma.balanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>[]
          }
          create: {
            args: Prisma.balanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          createMany: {
            args: Prisma.balanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.balanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>[]
          }
          delete: {
            args: Prisma.balanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          update: {
            args: Prisma.balanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          deleteMany: {
            args: Prisma.balanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.balanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.balanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>[]
          }
          upsert: {
            args: Prisma.balanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancePayload>
          }
          aggregate: {
            args: Prisma.BalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalance>
          }
          groupBy: {
            args: Prisma.balanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.balanceCountArgs<ExtArgs>
            result: $Utils.Optional<BalanceCountAggregateOutputType> | number
          }
        }
      }
      total_winning: {
        payload: Prisma.$total_winningPayload<ExtArgs>
        fields: Prisma.total_winningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.total_winningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$total_winningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.total_winningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$total_winningPayload>
          }
          findFirst: {
            args: Prisma.total_winningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$total_winningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.total_winningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$total_winningPayload>
          }
          findMany: {
            args: Prisma.total_winningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$total_winningPayload>[]
          }
          create: {
            args: Prisma.total_winningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$total_winningPayload>
          }
          createMany: {
            args: Prisma.total_winningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.total_winningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$total_winningPayload>[]
          }
          delete: {
            args: Prisma.total_winningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$total_winningPayload>
          }
          update: {
            args: Prisma.total_winningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$total_winningPayload>
          }
          deleteMany: {
            args: Prisma.total_winningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.total_winningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.total_winningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$total_winningPayload>[]
          }
          upsert: {
            args: Prisma.total_winningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$total_winningPayload>
          }
          aggregate: {
            args: Prisma.Total_winningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTotal_winning>
          }
          groupBy: {
            args: Prisma.total_winningGroupByArgs<ExtArgs>
            result: $Utils.Optional<Total_winningGroupByOutputType>[]
          }
          count: {
            args: Prisma.total_winningCountArgs<ExtArgs>
            result: $Utils.Optional<Total_winningCountAggregateOutputType> | number
          }
        }
      }
      chip: {
        payload: Prisma.$chipPayload<ExtArgs>
        fields: Prisma.chipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chipPayload>
          }
          findFirst: {
            args: Prisma.chipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chipPayload>
          }
          findMany: {
            args: Prisma.chipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chipPayload>[]
          }
          create: {
            args: Prisma.chipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chipPayload>
          }
          createMany: {
            args: Prisma.chipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chipPayload>[]
          }
          delete: {
            args: Prisma.chipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chipPayload>
          }
          update: {
            args: Prisma.chipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chipPayload>
          }
          deleteMany: {
            args: Prisma.chipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chipPayload>[]
          }
          upsert: {
            args: Prisma.chipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chipPayload>
          }
          aggregate: {
            args: Prisma.ChipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChip>
          }
          groupBy: {
            args: Prisma.chipGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChipGroupByOutputType>[]
          }
          count: {
            args: Prisma.chipCountArgs<ExtArgs>
            result: $Utils.Optional<ChipCountAggregateOutputType> | number
          }
        }
      }
      table: {
        payload: Prisma.$tablePayload<ExtArgs>
        fields: Prisma.tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload>
          }
          findFirst: {
            args: Prisma.tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload>
          }
          findMany: {
            args: Prisma.tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload>[]
          }
          create: {
            args: Prisma.tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload>
          }
          createMany: {
            args: Prisma.tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload>[]
          }
          delete: {
            args: Prisma.tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload>
          }
          update: {
            args: Prisma.tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload>
          }
          deleteMany: {
            args: Prisma.tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload>[]
          }
          upsert: {
            args: Prisma.tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload>
          }
          aggregate: {
            args: Prisma.TableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTable>
          }
          groupBy: {
            args: Prisma.tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableGroupByOutputType>[]
          }
          count: {
            args: Prisma.tableCountArgs<ExtArgs>
            result: $Utils.Optional<TableCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    balance?: balanceOmit
    total_winning?: total_winningOmit
    chip?: chipOmit
    table?: tableOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    balances: number
    total_winnings: number
    chips: number
    total_Tables: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balances?: boolean | UserCountOutputTypeCountBalancesArgs
    total_winnings?: boolean | UserCountOutputTypeCountTotal_winningsArgs
    chips?: boolean | UserCountOutputTypeCountChipsArgs
    total_Tables?: boolean | UserCountOutputTypeCountTotal_TablesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: balanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTotal_winningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: total_winningWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTotal_TablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tableWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    isActive: boolean | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    isActive: boolean | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    isActive: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    isActive?: true
    createAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    isActive?: true
    createAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    isActive?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    isActive: boolean
    createAt: Date
    updateAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    isActive?: boolean
    createAt?: boolean
    updateAt?: boolean
    balances?: boolean | user$balancesArgs<ExtArgs>
    total_winnings?: boolean | user$total_winningsArgs<ExtArgs>
    chips?: boolean | user$chipsArgs<ExtArgs>
    total_Tables?: boolean | user$total_TablesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    isActive?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    isActive?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    isActive?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "isActive" | "createAt" | "updateAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balances?: boolean | user$balancesArgs<ExtArgs>
    total_winnings?: boolean | user$total_winningsArgs<ExtArgs>
    chips?: boolean | user$chipsArgs<ExtArgs>
    total_Tables?: boolean | user$total_TablesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      balances: Prisma.$balancePayload<ExtArgs>[]
      total_winnings: Prisma.$total_winningPayload<ExtArgs>[]
      chips: Prisma.$chipPayload<ExtArgs>[]
      total_Tables: Prisma.$tablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      isActive: boolean
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    balances<T extends user$balancesArgs<ExtArgs> = {}>(args?: Subset<T, user$balancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    total_winnings<T extends user$total_winningsArgs<ExtArgs> = {}>(args?: Subset<T, user$total_winningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$total_winningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chips<T extends user$chipsArgs<ExtArgs> = {}>(args?: Subset<T, user$chipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    total_Tables<T extends user$total_TablesArgs<ExtArgs> = {}>(args?: Subset<T, user$total_TablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly isActive: FieldRef<"user", 'Boolean'>
    readonly createAt: FieldRef<"user", 'DateTime'>
    readonly updateAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.balances
   */
  export type user$balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    where?: balanceWhereInput
    orderBy?: balanceOrderByWithRelationInput | balanceOrderByWithRelationInput[]
    cursor?: balanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * user.total_winnings
   */
  export type user$total_winningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the total_winning
     */
    select?: total_winningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the total_winning
     */
    omit?: total_winningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: total_winningInclude<ExtArgs> | null
    where?: total_winningWhereInput
    orderBy?: total_winningOrderByWithRelationInput | total_winningOrderByWithRelationInput[]
    cursor?: total_winningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Total_winningScalarFieldEnum | Total_winningScalarFieldEnum[]
  }

  /**
   * user.chips
   */
  export type user$chipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chip
     */
    select?: chipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chip
     */
    omit?: chipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chipInclude<ExtArgs> | null
    where?: chipWhereInput
    orderBy?: chipOrderByWithRelationInput | chipOrderByWithRelationInput[]
    cursor?: chipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChipScalarFieldEnum | ChipScalarFieldEnum[]
  }

  /**
   * user.total_Tables
   */
  export type user$total_TablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table
     */
    omit?: tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    where?: tableWhereInput
    orderBy?: tableOrderByWithRelationInput | tableOrderByWithRelationInput[]
    cursor?: tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model balance
   */

  export type AggregateBalance = {
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  export type BalanceAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    user_id: number | null
  }

  export type BalanceSumAggregateOutputType = {
    id: number | null
    amount: number | null
    user_id: number | null
  }

  export type BalanceMinAggregateOutputType = {
    id: number | null
    amount: number | null
    user_id: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type BalanceMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    user_id: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type BalanceCountAggregateOutputType = {
    id: number
    amount: number
    user_id: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type BalanceAvgAggregateInputType = {
    id?: true
    amount?: true
    user_id?: true
  }

  export type BalanceSumAggregateInputType = {
    id?: true
    amount?: true
    user_id?: true
  }

  export type BalanceMinAggregateInputType = {
    id?: true
    amount?: true
    user_id?: true
    createAt?: true
    updateAt?: true
  }

  export type BalanceMaxAggregateInputType = {
    id?: true
    amount?: true
    user_id?: true
    createAt?: true
    updateAt?: true
  }

  export type BalanceCountAggregateInputType = {
    id?: true
    amount?: true
    user_id?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type BalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which balance to aggregate.
     */
    where?: balanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balanceOrderByWithRelationInput | balanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: balanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned balances
    **/
    _count?: true | BalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalanceMaxAggregateInputType
  }

  export type GetBalanceAggregateType<T extends BalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalance[P]>
      : GetScalarType<T[P], AggregateBalance[P]>
  }




  export type balanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: balanceWhereInput
    orderBy?: balanceOrderByWithAggregationInput | balanceOrderByWithAggregationInput[]
    by: BalanceScalarFieldEnum[] | BalanceScalarFieldEnum
    having?: balanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalanceCountAggregateInputType | true
    _avg?: BalanceAvgAggregateInputType
    _sum?: BalanceSumAggregateInputType
    _min?: BalanceMinAggregateInputType
    _max?: BalanceMaxAggregateInputType
  }

  export type BalanceGroupByOutputType = {
    id: number
    amount: number
    user_id: number
    createAt: Date
    updateAt: Date
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  type GetBalanceGroupByPayload<T extends balanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalanceGroupByOutputType[P]>
            : GetScalarType<T[P], BalanceGroupByOutputType[P]>
        }
      >
    >


  export type balanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    user_id?: boolean
    createAt?: boolean
    updateAt?: boolean
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type balanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    user_id?: boolean
    createAt?: boolean
    updateAt?: boolean
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type balanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    user_id?: boolean
    createAt?: boolean
    updateAt?: boolean
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type balanceSelectScalar = {
    id?: boolean
    amount?: boolean
    user_id?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type balanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "user_id" | "createAt" | "updateAt", ExtArgs["result"]["balance"]>
  export type balanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }
  export type balanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }
  export type balanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $balancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "balance"
    objects: {
      user_ids: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      user_id: number
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["balance"]>
    composites: {}
  }

  type balanceGetPayload<S extends boolean | null | undefined | balanceDefaultArgs> = $Result.GetResult<Prisma.$balancePayload, S>

  type balanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<balanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BalanceCountAggregateInputType | true
    }

  export interface balanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['balance'], meta: { name: 'balance' } }
    /**
     * Find zero or one Balance that matches the filter.
     * @param {balanceFindUniqueArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends balanceFindUniqueArgs>(args: SelectSubset<T, balanceFindUniqueArgs<ExtArgs>>): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Balance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {balanceFindUniqueOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends balanceFindUniqueOrThrowArgs>(args: SelectSubset<T, balanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceFindFirstArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends balanceFindFirstArgs>(args?: SelectSubset<T, balanceFindFirstArgs<ExtArgs>>): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceFindFirstOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends balanceFindFirstOrThrowArgs>(args?: SelectSubset<T, balanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Balances
     * const balances = await prisma.balance.findMany()
     * 
     * // Get first 10 Balances
     * const balances = await prisma.balance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const balanceWithIdOnly = await prisma.balance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends balanceFindManyArgs>(args?: SelectSubset<T, balanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Balance.
     * @param {balanceCreateArgs} args - Arguments to create a Balance.
     * @example
     * // Create one Balance
     * const Balance = await prisma.balance.create({
     *   data: {
     *     // ... data to create a Balance
     *   }
     * })
     * 
     */
    create<T extends balanceCreateArgs>(args: SelectSubset<T, balanceCreateArgs<ExtArgs>>): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Balances.
     * @param {balanceCreateManyArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends balanceCreateManyArgs>(args?: SelectSubset<T, balanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Balances and returns the data saved in the database.
     * @param {balanceCreateManyAndReturnArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Balances and only return the `id`
     * const balanceWithIdOnly = await prisma.balance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends balanceCreateManyAndReturnArgs>(args?: SelectSubset<T, balanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Balance.
     * @param {balanceDeleteArgs} args - Arguments to delete one Balance.
     * @example
     * // Delete one Balance
     * const Balance = await prisma.balance.delete({
     *   where: {
     *     // ... filter to delete one Balance
     *   }
     * })
     * 
     */
    delete<T extends balanceDeleteArgs>(args: SelectSubset<T, balanceDeleteArgs<ExtArgs>>): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Balance.
     * @param {balanceUpdateArgs} args - Arguments to update one Balance.
     * @example
     * // Update one Balance
     * const balance = await prisma.balance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends balanceUpdateArgs>(args: SelectSubset<T, balanceUpdateArgs<ExtArgs>>): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Balances.
     * @param {balanceDeleteManyArgs} args - Arguments to filter Balances to delete.
     * @example
     * // Delete a few Balances
     * const { count } = await prisma.balance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends balanceDeleteManyArgs>(args?: SelectSubset<T, balanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends balanceUpdateManyArgs>(args: SelectSubset<T, balanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances and returns the data updated in the database.
     * @param {balanceUpdateManyAndReturnArgs} args - Arguments to update many Balances.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Balances and only return the `id`
     * const balanceWithIdOnly = await prisma.balance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends balanceUpdateManyAndReturnArgs>(args: SelectSubset<T, balanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Balance.
     * @param {balanceUpsertArgs} args - Arguments to update or create a Balance.
     * @example
     * // Update or create a Balance
     * const balance = await prisma.balance.upsert({
     *   create: {
     *     // ... data to create a Balance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Balance we want to update
     *   }
     * })
     */
    upsert<T extends balanceUpsertArgs>(args: SelectSubset<T, balanceUpsertArgs<ExtArgs>>): Prisma__balanceClient<$Result.GetResult<Prisma.$balancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceCountArgs} args - Arguments to filter Balances to count.
     * @example
     * // Count the number of Balances
     * const count = await prisma.balance.count({
     *   where: {
     *     // ... the filter for the Balances we want to count
     *   }
     * })
    **/
    count<T extends balanceCountArgs>(
      args?: Subset<T, balanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BalanceAggregateArgs>(args: Subset<T, BalanceAggregateArgs>): Prisma.PrismaPromise<GetBalanceAggregateType<T>>

    /**
     * Group by Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends balanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: balanceGroupByArgs['orderBy'] }
        : { orderBy?: balanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, balanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the balance model
   */
  readonly fields: balanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for balance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__balanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_ids<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the balance model
   */
  interface balanceFieldRefs {
    readonly id: FieldRef<"balance", 'Int'>
    readonly amount: FieldRef<"balance", 'Int'>
    readonly user_id: FieldRef<"balance", 'Int'>
    readonly createAt: FieldRef<"balance", 'DateTime'>
    readonly updateAt: FieldRef<"balance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * balance findUnique
   */
  export type balanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * Filter, which balance to fetch.
     */
    where: balanceWhereUniqueInput
  }

  /**
   * balance findUniqueOrThrow
   */
  export type balanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * Filter, which balance to fetch.
     */
    where: balanceWhereUniqueInput
  }

  /**
   * balance findFirst
   */
  export type balanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * Filter, which balance to fetch.
     */
    where?: balanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balanceOrderByWithRelationInput | balanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for balances.
     */
    cursor?: balanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * balance findFirstOrThrow
   */
  export type balanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * Filter, which balance to fetch.
     */
    where?: balanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balanceOrderByWithRelationInput | balanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for balances.
     */
    cursor?: balanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * balance findMany
   */
  export type balanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * Filter, which balances to fetch.
     */
    where?: balanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balanceOrderByWithRelationInput | balanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing balances.
     */
    cursor?: balanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * balance create
   */
  export type balanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * The data needed to create a balance.
     */
    data: XOR<balanceCreateInput, balanceUncheckedCreateInput>
  }

  /**
   * balance createMany
   */
  export type balanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many balances.
     */
    data: balanceCreateManyInput | balanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * balance createManyAndReturn
   */
  export type balanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * The data used to create many balances.
     */
    data: balanceCreateManyInput | balanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * balance update
   */
  export type balanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * The data needed to update a balance.
     */
    data: XOR<balanceUpdateInput, balanceUncheckedUpdateInput>
    /**
     * Choose, which balance to update.
     */
    where: balanceWhereUniqueInput
  }

  /**
   * balance updateMany
   */
  export type balanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update balances.
     */
    data: XOR<balanceUpdateManyMutationInput, balanceUncheckedUpdateManyInput>
    /**
     * Filter which balances to update
     */
    where?: balanceWhereInput
    /**
     * Limit how many balances to update.
     */
    limit?: number
  }

  /**
   * balance updateManyAndReturn
   */
  export type balanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * The data used to update balances.
     */
    data: XOR<balanceUpdateManyMutationInput, balanceUncheckedUpdateManyInput>
    /**
     * Filter which balances to update
     */
    where?: balanceWhereInput
    /**
     * Limit how many balances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * balance upsert
   */
  export type balanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * The filter to search for the balance to update in case it exists.
     */
    where: balanceWhereUniqueInput
    /**
     * In case the balance found by the `where` argument doesn't exist, create a new balance with this data.
     */
    create: XOR<balanceCreateInput, balanceUncheckedCreateInput>
    /**
     * In case the balance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<balanceUpdateInput, balanceUncheckedUpdateInput>
  }

  /**
   * balance delete
   */
  export type balanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
    /**
     * Filter which balance to delete.
     */
    where: balanceWhereUniqueInput
  }

  /**
   * balance deleteMany
   */
  export type balanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which balances to delete
     */
    where?: balanceWhereInput
    /**
     * Limit how many balances to delete.
     */
    limit?: number
  }

  /**
   * balance without action
   */
  export type balanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balance
     */
    select?: balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the balance
     */
    omit?: balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balanceInclude<ExtArgs> | null
  }


  /**
   * Model total_winning
   */

  export type AggregateTotal_winning = {
    _count: Total_winningCountAggregateOutputType | null
    _avg: Total_winningAvgAggregateOutputType | null
    _sum: Total_winningSumAggregateOutputType | null
    _min: Total_winningMinAggregateOutputType | null
    _max: Total_winningMaxAggregateOutputType | null
  }

  export type Total_winningAvgAggregateOutputType = {
    id: number | null
    count: number | null
    user_id: number | null
  }

  export type Total_winningSumAggregateOutputType = {
    id: number | null
    count: number | null
    user_id: number | null
  }

  export type Total_winningMinAggregateOutputType = {
    id: number | null
    count: number | null
    user_id: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type Total_winningMaxAggregateOutputType = {
    id: number | null
    count: number | null
    user_id: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type Total_winningCountAggregateOutputType = {
    id: number
    count: number
    user_id: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type Total_winningAvgAggregateInputType = {
    id?: true
    count?: true
    user_id?: true
  }

  export type Total_winningSumAggregateInputType = {
    id?: true
    count?: true
    user_id?: true
  }

  export type Total_winningMinAggregateInputType = {
    id?: true
    count?: true
    user_id?: true
    createAt?: true
    updateAt?: true
  }

  export type Total_winningMaxAggregateInputType = {
    id?: true
    count?: true
    user_id?: true
    createAt?: true
    updateAt?: true
  }

  export type Total_winningCountAggregateInputType = {
    id?: true
    count?: true
    user_id?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type Total_winningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which total_winning to aggregate.
     */
    where?: total_winningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of total_winnings to fetch.
     */
    orderBy?: total_winningOrderByWithRelationInput | total_winningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: total_winningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` total_winnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` total_winnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned total_winnings
    **/
    _count?: true | Total_winningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Total_winningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Total_winningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Total_winningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Total_winningMaxAggregateInputType
  }

  export type GetTotal_winningAggregateType<T extends Total_winningAggregateArgs> = {
        [P in keyof T & keyof AggregateTotal_winning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTotal_winning[P]>
      : GetScalarType<T[P], AggregateTotal_winning[P]>
  }




  export type total_winningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: total_winningWhereInput
    orderBy?: total_winningOrderByWithAggregationInput | total_winningOrderByWithAggregationInput[]
    by: Total_winningScalarFieldEnum[] | Total_winningScalarFieldEnum
    having?: total_winningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Total_winningCountAggregateInputType | true
    _avg?: Total_winningAvgAggregateInputType
    _sum?: Total_winningSumAggregateInputType
    _min?: Total_winningMinAggregateInputType
    _max?: Total_winningMaxAggregateInputType
  }

  export type Total_winningGroupByOutputType = {
    id: number
    count: number
    user_id: number
    createAt: Date
    updateAt: Date
    _count: Total_winningCountAggregateOutputType | null
    _avg: Total_winningAvgAggregateOutputType | null
    _sum: Total_winningSumAggregateOutputType | null
    _min: Total_winningMinAggregateOutputType | null
    _max: Total_winningMaxAggregateOutputType | null
  }

  type GetTotal_winningGroupByPayload<T extends total_winningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Total_winningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Total_winningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Total_winningGroupByOutputType[P]>
            : GetScalarType<T[P], Total_winningGroupByOutputType[P]>
        }
      >
    >


  export type total_winningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
    user_id?: boolean
    createAt?: boolean
    updateAt?: boolean
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["total_winning"]>

  export type total_winningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
    user_id?: boolean
    createAt?: boolean
    updateAt?: boolean
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["total_winning"]>

  export type total_winningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
    user_id?: boolean
    createAt?: boolean
    updateAt?: boolean
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["total_winning"]>

  export type total_winningSelectScalar = {
    id?: boolean
    count?: boolean
    user_id?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type total_winningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "count" | "user_id" | "createAt" | "updateAt", ExtArgs["result"]["total_winning"]>
  export type total_winningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }
  export type total_winningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }
  export type total_winningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $total_winningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "total_winning"
    objects: {
      user_ids: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      count: number
      user_id: number
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["total_winning"]>
    composites: {}
  }

  type total_winningGetPayload<S extends boolean | null | undefined | total_winningDefaultArgs> = $Result.GetResult<Prisma.$total_winningPayload, S>

  type total_winningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<total_winningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Total_winningCountAggregateInputType | true
    }

  export interface total_winningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['total_winning'], meta: { name: 'total_winning' } }
    /**
     * Find zero or one Total_winning that matches the filter.
     * @param {total_winningFindUniqueArgs} args - Arguments to find a Total_winning
     * @example
     * // Get one Total_winning
     * const total_winning = await prisma.total_winning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends total_winningFindUniqueArgs>(args: SelectSubset<T, total_winningFindUniqueArgs<ExtArgs>>): Prisma__total_winningClient<$Result.GetResult<Prisma.$total_winningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Total_winning that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {total_winningFindUniqueOrThrowArgs} args - Arguments to find a Total_winning
     * @example
     * // Get one Total_winning
     * const total_winning = await prisma.total_winning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends total_winningFindUniqueOrThrowArgs>(args: SelectSubset<T, total_winningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__total_winningClient<$Result.GetResult<Prisma.$total_winningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Total_winning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {total_winningFindFirstArgs} args - Arguments to find a Total_winning
     * @example
     * // Get one Total_winning
     * const total_winning = await prisma.total_winning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends total_winningFindFirstArgs>(args?: SelectSubset<T, total_winningFindFirstArgs<ExtArgs>>): Prisma__total_winningClient<$Result.GetResult<Prisma.$total_winningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Total_winning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {total_winningFindFirstOrThrowArgs} args - Arguments to find a Total_winning
     * @example
     * // Get one Total_winning
     * const total_winning = await prisma.total_winning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends total_winningFindFirstOrThrowArgs>(args?: SelectSubset<T, total_winningFindFirstOrThrowArgs<ExtArgs>>): Prisma__total_winningClient<$Result.GetResult<Prisma.$total_winningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Total_winnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {total_winningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Total_winnings
     * const total_winnings = await prisma.total_winning.findMany()
     * 
     * // Get first 10 Total_winnings
     * const total_winnings = await prisma.total_winning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const total_winningWithIdOnly = await prisma.total_winning.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends total_winningFindManyArgs>(args?: SelectSubset<T, total_winningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$total_winningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Total_winning.
     * @param {total_winningCreateArgs} args - Arguments to create a Total_winning.
     * @example
     * // Create one Total_winning
     * const Total_winning = await prisma.total_winning.create({
     *   data: {
     *     // ... data to create a Total_winning
     *   }
     * })
     * 
     */
    create<T extends total_winningCreateArgs>(args: SelectSubset<T, total_winningCreateArgs<ExtArgs>>): Prisma__total_winningClient<$Result.GetResult<Prisma.$total_winningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Total_winnings.
     * @param {total_winningCreateManyArgs} args - Arguments to create many Total_winnings.
     * @example
     * // Create many Total_winnings
     * const total_winning = await prisma.total_winning.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends total_winningCreateManyArgs>(args?: SelectSubset<T, total_winningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Total_winnings and returns the data saved in the database.
     * @param {total_winningCreateManyAndReturnArgs} args - Arguments to create many Total_winnings.
     * @example
     * // Create many Total_winnings
     * const total_winning = await prisma.total_winning.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Total_winnings and only return the `id`
     * const total_winningWithIdOnly = await prisma.total_winning.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends total_winningCreateManyAndReturnArgs>(args?: SelectSubset<T, total_winningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$total_winningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Total_winning.
     * @param {total_winningDeleteArgs} args - Arguments to delete one Total_winning.
     * @example
     * // Delete one Total_winning
     * const Total_winning = await prisma.total_winning.delete({
     *   where: {
     *     // ... filter to delete one Total_winning
     *   }
     * })
     * 
     */
    delete<T extends total_winningDeleteArgs>(args: SelectSubset<T, total_winningDeleteArgs<ExtArgs>>): Prisma__total_winningClient<$Result.GetResult<Prisma.$total_winningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Total_winning.
     * @param {total_winningUpdateArgs} args - Arguments to update one Total_winning.
     * @example
     * // Update one Total_winning
     * const total_winning = await prisma.total_winning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends total_winningUpdateArgs>(args: SelectSubset<T, total_winningUpdateArgs<ExtArgs>>): Prisma__total_winningClient<$Result.GetResult<Prisma.$total_winningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Total_winnings.
     * @param {total_winningDeleteManyArgs} args - Arguments to filter Total_winnings to delete.
     * @example
     * // Delete a few Total_winnings
     * const { count } = await prisma.total_winning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends total_winningDeleteManyArgs>(args?: SelectSubset<T, total_winningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Total_winnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {total_winningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Total_winnings
     * const total_winning = await prisma.total_winning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends total_winningUpdateManyArgs>(args: SelectSubset<T, total_winningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Total_winnings and returns the data updated in the database.
     * @param {total_winningUpdateManyAndReturnArgs} args - Arguments to update many Total_winnings.
     * @example
     * // Update many Total_winnings
     * const total_winning = await prisma.total_winning.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Total_winnings and only return the `id`
     * const total_winningWithIdOnly = await prisma.total_winning.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends total_winningUpdateManyAndReturnArgs>(args: SelectSubset<T, total_winningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$total_winningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Total_winning.
     * @param {total_winningUpsertArgs} args - Arguments to update or create a Total_winning.
     * @example
     * // Update or create a Total_winning
     * const total_winning = await prisma.total_winning.upsert({
     *   create: {
     *     // ... data to create a Total_winning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Total_winning we want to update
     *   }
     * })
     */
    upsert<T extends total_winningUpsertArgs>(args: SelectSubset<T, total_winningUpsertArgs<ExtArgs>>): Prisma__total_winningClient<$Result.GetResult<Prisma.$total_winningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Total_winnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {total_winningCountArgs} args - Arguments to filter Total_winnings to count.
     * @example
     * // Count the number of Total_winnings
     * const count = await prisma.total_winning.count({
     *   where: {
     *     // ... the filter for the Total_winnings we want to count
     *   }
     * })
    **/
    count<T extends total_winningCountArgs>(
      args?: Subset<T, total_winningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Total_winningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Total_winning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Total_winningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Total_winningAggregateArgs>(args: Subset<T, Total_winningAggregateArgs>): Prisma.PrismaPromise<GetTotal_winningAggregateType<T>>

    /**
     * Group by Total_winning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {total_winningGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends total_winningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: total_winningGroupByArgs['orderBy'] }
        : { orderBy?: total_winningGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, total_winningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTotal_winningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the total_winning model
   */
  readonly fields: total_winningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for total_winning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__total_winningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_ids<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the total_winning model
   */
  interface total_winningFieldRefs {
    readonly id: FieldRef<"total_winning", 'Int'>
    readonly count: FieldRef<"total_winning", 'Int'>
    readonly user_id: FieldRef<"total_winning", 'Int'>
    readonly createAt: FieldRef<"total_winning", 'DateTime'>
    readonly updateAt: FieldRef<"total_winning", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * total_winning findUnique
   */
  export type total_winningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the total_winning
     */
    select?: total_winningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the total_winning
     */
    omit?: total_winningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: total_winningInclude<ExtArgs> | null
    /**
     * Filter, which total_winning to fetch.
     */
    where: total_winningWhereUniqueInput
  }

  /**
   * total_winning findUniqueOrThrow
   */
  export type total_winningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the total_winning
     */
    select?: total_winningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the total_winning
     */
    omit?: total_winningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: total_winningInclude<ExtArgs> | null
    /**
     * Filter, which total_winning to fetch.
     */
    where: total_winningWhereUniqueInput
  }

  /**
   * total_winning findFirst
   */
  export type total_winningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the total_winning
     */
    select?: total_winningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the total_winning
     */
    omit?: total_winningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: total_winningInclude<ExtArgs> | null
    /**
     * Filter, which total_winning to fetch.
     */
    where?: total_winningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of total_winnings to fetch.
     */
    orderBy?: total_winningOrderByWithRelationInput | total_winningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for total_winnings.
     */
    cursor?: total_winningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` total_winnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` total_winnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of total_winnings.
     */
    distinct?: Total_winningScalarFieldEnum | Total_winningScalarFieldEnum[]
  }

  /**
   * total_winning findFirstOrThrow
   */
  export type total_winningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the total_winning
     */
    select?: total_winningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the total_winning
     */
    omit?: total_winningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: total_winningInclude<ExtArgs> | null
    /**
     * Filter, which total_winning to fetch.
     */
    where?: total_winningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of total_winnings to fetch.
     */
    orderBy?: total_winningOrderByWithRelationInput | total_winningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for total_winnings.
     */
    cursor?: total_winningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` total_winnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` total_winnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of total_winnings.
     */
    distinct?: Total_winningScalarFieldEnum | Total_winningScalarFieldEnum[]
  }

  /**
   * total_winning findMany
   */
  export type total_winningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the total_winning
     */
    select?: total_winningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the total_winning
     */
    omit?: total_winningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: total_winningInclude<ExtArgs> | null
    /**
     * Filter, which total_winnings to fetch.
     */
    where?: total_winningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of total_winnings to fetch.
     */
    orderBy?: total_winningOrderByWithRelationInput | total_winningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing total_winnings.
     */
    cursor?: total_winningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` total_winnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` total_winnings.
     */
    skip?: number
    distinct?: Total_winningScalarFieldEnum | Total_winningScalarFieldEnum[]
  }

  /**
   * total_winning create
   */
  export type total_winningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the total_winning
     */
    select?: total_winningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the total_winning
     */
    omit?: total_winningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: total_winningInclude<ExtArgs> | null
    /**
     * The data needed to create a total_winning.
     */
    data: XOR<total_winningCreateInput, total_winningUncheckedCreateInput>
  }

  /**
   * total_winning createMany
   */
  export type total_winningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many total_winnings.
     */
    data: total_winningCreateManyInput | total_winningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * total_winning createManyAndReturn
   */
  export type total_winningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the total_winning
     */
    select?: total_winningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the total_winning
     */
    omit?: total_winningOmit<ExtArgs> | null
    /**
     * The data used to create many total_winnings.
     */
    data: total_winningCreateManyInput | total_winningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: total_winningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * total_winning update
   */
  export type total_winningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the total_winning
     */
    select?: total_winningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the total_winning
     */
    omit?: total_winningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: total_winningInclude<ExtArgs> | null
    /**
     * The data needed to update a total_winning.
     */
    data: XOR<total_winningUpdateInput, total_winningUncheckedUpdateInput>
    /**
     * Choose, which total_winning to update.
     */
    where: total_winningWhereUniqueInput
  }

  /**
   * total_winning updateMany
   */
  export type total_winningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update total_winnings.
     */
    data: XOR<total_winningUpdateManyMutationInput, total_winningUncheckedUpdateManyInput>
    /**
     * Filter which total_winnings to update
     */
    where?: total_winningWhereInput
    /**
     * Limit how many total_winnings to update.
     */
    limit?: number
  }

  /**
   * total_winning updateManyAndReturn
   */
  export type total_winningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the total_winning
     */
    select?: total_winningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the total_winning
     */
    omit?: total_winningOmit<ExtArgs> | null
    /**
     * The data used to update total_winnings.
     */
    data: XOR<total_winningUpdateManyMutationInput, total_winningUncheckedUpdateManyInput>
    /**
     * Filter which total_winnings to update
     */
    where?: total_winningWhereInput
    /**
     * Limit how many total_winnings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: total_winningIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * total_winning upsert
   */
  export type total_winningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the total_winning
     */
    select?: total_winningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the total_winning
     */
    omit?: total_winningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: total_winningInclude<ExtArgs> | null
    /**
     * The filter to search for the total_winning to update in case it exists.
     */
    where: total_winningWhereUniqueInput
    /**
     * In case the total_winning found by the `where` argument doesn't exist, create a new total_winning with this data.
     */
    create: XOR<total_winningCreateInput, total_winningUncheckedCreateInput>
    /**
     * In case the total_winning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<total_winningUpdateInput, total_winningUncheckedUpdateInput>
  }

  /**
   * total_winning delete
   */
  export type total_winningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the total_winning
     */
    select?: total_winningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the total_winning
     */
    omit?: total_winningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: total_winningInclude<ExtArgs> | null
    /**
     * Filter which total_winning to delete.
     */
    where: total_winningWhereUniqueInput
  }

  /**
   * total_winning deleteMany
   */
  export type total_winningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which total_winnings to delete
     */
    where?: total_winningWhereInput
    /**
     * Limit how many total_winnings to delete.
     */
    limit?: number
  }

  /**
   * total_winning without action
   */
  export type total_winningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the total_winning
     */
    select?: total_winningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the total_winning
     */
    omit?: total_winningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: total_winningInclude<ExtArgs> | null
  }


  /**
   * Model chip
   */

  export type AggregateChip = {
    _count: ChipCountAggregateOutputType | null
    _avg: ChipAvgAggregateOutputType | null
    _sum: ChipSumAggregateOutputType | null
    _min: ChipMinAggregateOutputType | null
    _max: ChipMaxAggregateOutputType | null
  }

  export type ChipAvgAggregateOutputType = {
    id: number | null
    count: number | null
    user_id: number | null
  }

  export type ChipSumAggregateOutputType = {
    id: number | null
    count: number | null
    user_id: number | null
  }

  export type ChipMinAggregateOutputType = {
    id: number | null
    count: number | null
    user_id: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ChipMaxAggregateOutputType = {
    id: number | null
    count: number | null
    user_id: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type ChipCountAggregateOutputType = {
    id: number
    count: number
    user_id: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type ChipAvgAggregateInputType = {
    id?: true
    count?: true
    user_id?: true
  }

  export type ChipSumAggregateInputType = {
    id?: true
    count?: true
    user_id?: true
  }

  export type ChipMinAggregateInputType = {
    id?: true
    count?: true
    user_id?: true
    createAt?: true
    updateAt?: true
  }

  export type ChipMaxAggregateInputType = {
    id?: true
    count?: true
    user_id?: true
    createAt?: true
    updateAt?: true
  }

  export type ChipCountAggregateInputType = {
    id?: true
    count?: true
    user_id?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type ChipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chip to aggregate.
     */
    where?: chipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chips to fetch.
     */
    orderBy?: chipOrderByWithRelationInput | chipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chips
    **/
    _count?: true | ChipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChipMaxAggregateInputType
  }

  export type GetChipAggregateType<T extends ChipAggregateArgs> = {
        [P in keyof T & keyof AggregateChip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChip[P]>
      : GetScalarType<T[P], AggregateChip[P]>
  }




  export type chipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chipWhereInput
    orderBy?: chipOrderByWithAggregationInput | chipOrderByWithAggregationInput[]
    by: ChipScalarFieldEnum[] | ChipScalarFieldEnum
    having?: chipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChipCountAggregateInputType | true
    _avg?: ChipAvgAggregateInputType
    _sum?: ChipSumAggregateInputType
    _min?: ChipMinAggregateInputType
    _max?: ChipMaxAggregateInputType
  }

  export type ChipGroupByOutputType = {
    id: number
    count: number
    user_id: number
    createAt: Date
    updateAt: Date
    _count: ChipCountAggregateOutputType | null
    _avg: ChipAvgAggregateOutputType | null
    _sum: ChipSumAggregateOutputType | null
    _min: ChipMinAggregateOutputType | null
    _max: ChipMaxAggregateOutputType | null
  }

  type GetChipGroupByPayload<T extends chipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChipGroupByOutputType[P]>
            : GetScalarType<T[P], ChipGroupByOutputType[P]>
        }
      >
    >


  export type chipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
    user_id?: boolean
    createAt?: boolean
    updateAt?: boolean
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chip"]>

  export type chipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
    user_id?: boolean
    createAt?: boolean
    updateAt?: boolean
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chip"]>

  export type chipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    count?: boolean
    user_id?: boolean
    createAt?: boolean
    updateAt?: boolean
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chip"]>

  export type chipSelectScalar = {
    id?: boolean
    count?: boolean
    user_id?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type chipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "count" | "user_id" | "createAt" | "updateAt", ExtArgs["result"]["chip"]>
  export type chipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }
  export type chipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }
  export type chipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $chipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chip"
    objects: {
      user_ids: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      count: number
      user_id: number
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["chip"]>
    composites: {}
  }

  type chipGetPayload<S extends boolean | null | undefined | chipDefaultArgs> = $Result.GetResult<Prisma.$chipPayload, S>

  type chipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChipCountAggregateInputType | true
    }

  export interface chipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chip'], meta: { name: 'chip' } }
    /**
     * Find zero or one Chip that matches the filter.
     * @param {chipFindUniqueArgs} args - Arguments to find a Chip
     * @example
     * // Get one Chip
     * const chip = await prisma.chip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chipFindUniqueArgs>(args: SelectSubset<T, chipFindUniqueArgs<ExtArgs>>): Prisma__chipClient<$Result.GetResult<Prisma.$chipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chipFindUniqueOrThrowArgs} args - Arguments to find a Chip
     * @example
     * // Get one Chip
     * const chip = await prisma.chip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chipFindUniqueOrThrowArgs>(args: SelectSubset<T, chipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chipClient<$Result.GetResult<Prisma.$chipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chipFindFirstArgs} args - Arguments to find a Chip
     * @example
     * // Get one Chip
     * const chip = await prisma.chip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chipFindFirstArgs>(args?: SelectSubset<T, chipFindFirstArgs<ExtArgs>>): Prisma__chipClient<$Result.GetResult<Prisma.$chipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chipFindFirstOrThrowArgs} args - Arguments to find a Chip
     * @example
     * // Get one Chip
     * const chip = await prisma.chip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chipFindFirstOrThrowArgs>(args?: SelectSubset<T, chipFindFirstOrThrowArgs<ExtArgs>>): Prisma__chipClient<$Result.GetResult<Prisma.$chipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chips
     * const chips = await prisma.chip.findMany()
     * 
     * // Get first 10 Chips
     * const chips = await prisma.chip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chipWithIdOnly = await prisma.chip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chipFindManyArgs>(args?: SelectSubset<T, chipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chip.
     * @param {chipCreateArgs} args - Arguments to create a Chip.
     * @example
     * // Create one Chip
     * const Chip = await prisma.chip.create({
     *   data: {
     *     // ... data to create a Chip
     *   }
     * })
     * 
     */
    create<T extends chipCreateArgs>(args: SelectSubset<T, chipCreateArgs<ExtArgs>>): Prisma__chipClient<$Result.GetResult<Prisma.$chipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chips.
     * @param {chipCreateManyArgs} args - Arguments to create many Chips.
     * @example
     * // Create many Chips
     * const chip = await prisma.chip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chipCreateManyArgs>(args?: SelectSubset<T, chipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chips and returns the data saved in the database.
     * @param {chipCreateManyAndReturnArgs} args - Arguments to create many Chips.
     * @example
     * // Create many Chips
     * const chip = await prisma.chip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chips and only return the `id`
     * const chipWithIdOnly = await prisma.chip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chipCreateManyAndReturnArgs>(args?: SelectSubset<T, chipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chip.
     * @param {chipDeleteArgs} args - Arguments to delete one Chip.
     * @example
     * // Delete one Chip
     * const Chip = await prisma.chip.delete({
     *   where: {
     *     // ... filter to delete one Chip
     *   }
     * })
     * 
     */
    delete<T extends chipDeleteArgs>(args: SelectSubset<T, chipDeleteArgs<ExtArgs>>): Prisma__chipClient<$Result.GetResult<Prisma.$chipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chip.
     * @param {chipUpdateArgs} args - Arguments to update one Chip.
     * @example
     * // Update one Chip
     * const chip = await prisma.chip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chipUpdateArgs>(args: SelectSubset<T, chipUpdateArgs<ExtArgs>>): Prisma__chipClient<$Result.GetResult<Prisma.$chipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chips.
     * @param {chipDeleteManyArgs} args - Arguments to filter Chips to delete.
     * @example
     * // Delete a few Chips
     * const { count } = await prisma.chip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chipDeleteManyArgs>(args?: SelectSubset<T, chipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chips
     * const chip = await prisma.chip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chipUpdateManyArgs>(args: SelectSubset<T, chipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chips and returns the data updated in the database.
     * @param {chipUpdateManyAndReturnArgs} args - Arguments to update many Chips.
     * @example
     * // Update many Chips
     * const chip = await prisma.chip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chips and only return the `id`
     * const chipWithIdOnly = await prisma.chip.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chipUpdateManyAndReturnArgs>(args: SelectSubset<T, chipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chip.
     * @param {chipUpsertArgs} args - Arguments to update or create a Chip.
     * @example
     * // Update or create a Chip
     * const chip = await prisma.chip.upsert({
     *   create: {
     *     // ... data to create a Chip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chip we want to update
     *   }
     * })
     */
    upsert<T extends chipUpsertArgs>(args: SelectSubset<T, chipUpsertArgs<ExtArgs>>): Prisma__chipClient<$Result.GetResult<Prisma.$chipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chipCountArgs} args - Arguments to filter Chips to count.
     * @example
     * // Count the number of Chips
     * const count = await prisma.chip.count({
     *   where: {
     *     // ... the filter for the Chips we want to count
     *   }
     * })
    **/
    count<T extends chipCountArgs>(
      args?: Subset<T, chipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChipAggregateArgs>(args: Subset<T, ChipAggregateArgs>): Prisma.PrismaPromise<GetChipAggregateType<T>>

    /**
     * Group by Chip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chipGroupByArgs['orderBy'] }
        : { orderBy?: chipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chip model
   */
  readonly fields: chipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_ids<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chip model
   */
  interface chipFieldRefs {
    readonly id: FieldRef<"chip", 'Int'>
    readonly count: FieldRef<"chip", 'Int'>
    readonly user_id: FieldRef<"chip", 'Int'>
    readonly createAt: FieldRef<"chip", 'DateTime'>
    readonly updateAt: FieldRef<"chip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chip findUnique
   */
  export type chipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chip
     */
    select?: chipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chip
     */
    omit?: chipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chipInclude<ExtArgs> | null
    /**
     * Filter, which chip to fetch.
     */
    where: chipWhereUniqueInput
  }

  /**
   * chip findUniqueOrThrow
   */
  export type chipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chip
     */
    select?: chipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chip
     */
    omit?: chipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chipInclude<ExtArgs> | null
    /**
     * Filter, which chip to fetch.
     */
    where: chipWhereUniqueInput
  }

  /**
   * chip findFirst
   */
  export type chipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chip
     */
    select?: chipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chip
     */
    omit?: chipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chipInclude<ExtArgs> | null
    /**
     * Filter, which chip to fetch.
     */
    where?: chipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chips to fetch.
     */
    orderBy?: chipOrderByWithRelationInput | chipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chips.
     */
    cursor?: chipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chips.
     */
    distinct?: ChipScalarFieldEnum | ChipScalarFieldEnum[]
  }

  /**
   * chip findFirstOrThrow
   */
  export type chipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chip
     */
    select?: chipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chip
     */
    omit?: chipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chipInclude<ExtArgs> | null
    /**
     * Filter, which chip to fetch.
     */
    where?: chipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chips to fetch.
     */
    orderBy?: chipOrderByWithRelationInput | chipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chips.
     */
    cursor?: chipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chips.
     */
    distinct?: ChipScalarFieldEnum | ChipScalarFieldEnum[]
  }

  /**
   * chip findMany
   */
  export type chipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chip
     */
    select?: chipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chip
     */
    omit?: chipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chipInclude<ExtArgs> | null
    /**
     * Filter, which chips to fetch.
     */
    where?: chipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chips to fetch.
     */
    orderBy?: chipOrderByWithRelationInput | chipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chips.
     */
    cursor?: chipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chips.
     */
    skip?: number
    distinct?: ChipScalarFieldEnum | ChipScalarFieldEnum[]
  }

  /**
   * chip create
   */
  export type chipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chip
     */
    select?: chipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chip
     */
    omit?: chipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chipInclude<ExtArgs> | null
    /**
     * The data needed to create a chip.
     */
    data: XOR<chipCreateInput, chipUncheckedCreateInput>
  }

  /**
   * chip createMany
   */
  export type chipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chips.
     */
    data: chipCreateManyInput | chipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chip createManyAndReturn
   */
  export type chipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chip
     */
    select?: chipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chip
     */
    omit?: chipOmit<ExtArgs> | null
    /**
     * The data used to create many chips.
     */
    data: chipCreateManyInput | chipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chip update
   */
  export type chipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chip
     */
    select?: chipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chip
     */
    omit?: chipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chipInclude<ExtArgs> | null
    /**
     * The data needed to update a chip.
     */
    data: XOR<chipUpdateInput, chipUncheckedUpdateInput>
    /**
     * Choose, which chip to update.
     */
    where: chipWhereUniqueInput
  }

  /**
   * chip updateMany
   */
  export type chipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chips.
     */
    data: XOR<chipUpdateManyMutationInput, chipUncheckedUpdateManyInput>
    /**
     * Filter which chips to update
     */
    where?: chipWhereInput
    /**
     * Limit how many chips to update.
     */
    limit?: number
  }

  /**
   * chip updateManyAndReturn
   */
  export type chipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chip
     */
    select?: chipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chip
     */
    omit?: chipOmit<ExtArgs> | null
    /**
     * The data used to update chips.
     */
    data: XOR<chipUpdateManyMutationInput, chipUncheckedUpdateManyInput>
    /**
     * Filter which chips to update
     */
    where?: chipWhereInput
    /**
     * Limit how many chips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chip upsert
   */
  export type chipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chip
     */
    select?: chipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chip
     */
    omit?: chipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chipInclude<ExtArgs> | null
    /**
     * The filter to search for the chip to update in case it exists.
     */
    where: chipWhereUniqueInput
    /**
     * In case the chip found by the `where` argument doesn't exist, create a new chip with this data.
     */
    create: XOR<chipCreateInput, chipUncheckedCreateInput>
    /**
     * In case the chip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chipUpdateInput, chipUncheckedUpdateInput>
  }

  /**
   * chip delete
   */
  export type chipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chip
     */
    select?: chipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chip
     */
    omit?: chipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chipInclude<ExtArgs> | null
    /**
     * Filter which chip to delete.
     */
    where: chipWhereUniqueInput
  }

  /**
   * chip deleteMany
   */
  export type chipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chips to delete
     */
    where?: chipWhereInput
    /**
     * Limit how many chips to delete.
     */
    limit?: number
  }

  /**
   * chip without action
   */
  export type chipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chip
     */
    select?: chipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chip
     */
    omit?: chipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chipInclude<ExtArgs> | null
  }


  /**
   * Model table
   */

  export type AggregateTable = {
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  export type TableAvgAggregateOutputType = {
    id: number | null
    winning_count: number | null
    lose_count: number | null
    user_id: number | null
  }

  export type TableSumAggregateOutputType = {
    id: number | null
    winning_count: number | null
    lose_count: number | null
    user_id: number | null
  }

  export type TableMinAggregateOutputType = {
    id: number | null
    winning_count: number | null
    lose_count: number | null
    user_id: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type TableMaxAggregateOutputType = {
    id: number | null
    winning_count: number | null
    lose_count: number | null
    user_id: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type TableCountAggregateOutputType = {
    id: number
    winning_count: number
    lose_count: number
    user_id: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type TableAvgAggregateInputType = {
    id?: true
    winning_count?: true
    lose_count?: true
    user_id?: true
  }

  export type TableSumAggregateInputType = {
    id?: true
    winning_count?: true
    lose_count?: true
    user_id?: true
  }

  export type TableMinAggregateInputType = {
    id?: true
    winning_count?: true
    lose_count?: true
    user_id?: true
    createAt?: true
    updateAt?: true
  }

  export type TableMaxAggregateInputType = {
    id?: true
    winning_count?: true
    lose_count?: true
    user_id?: true
    createAt?: true
    updateAt?: true
  }

  export type TableCountAggregateInputType = {
    id?: true
    winning_count?: true
    lose_count?: true
    user_id?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which table to aggregate.
     */
    where?: tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tableOrderByWithRelationInput | tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tables
    **/
    _count?: true | TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableMaxAggregateInputType
  }

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
        [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>
  }




  export type tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tableWhereInput
    orderBy?: tableOrderByWithAggregationInput | tableOrderByWithAggregationInput[]
    by: TableScalarFieldEnum[] | TableScalarFieldEnum
    having?: tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableCountAggregateInputType | true
    _avg?: TableAvgAggregateInputType
    _sum?: TableSumAggregateInputType
    _min?: TableMinAggregateInputType
    _max?: TableMaxAggregateInputType
  }

  export type TableGroupByOutputType = {
    id: number
    winning_count: number
    lose_count: number
    user_id: number
    createAt: Date
    updateAt: Date
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  type GetTableGroupByPayload<T extends tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableGroupByOutputType[P]>
            : GetScalarType<T[P], TableGroupByOutputType[P]>
        }
      >
    >


  export type tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    winning_count?: boolean
    lose_count?: boolean
    user_id?: boolean
    createAt?: boolean
    updateAt?: boolean
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    winning_count?: boolean
    lose_count?: boolean
    user_id?: boolean
    createAt?: boolean
    updateAt?: boolean
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type tableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    winning_count?: boolean
    lose_count?: boolean
    user_id?: boolean
    createAt?: boolean
    updateAt?: boolean
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type tableSelectScalar = {
    id?: boolean
    winning_count?: boolean
    lose_count?: boolean
    user_id?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "winning_count" | "lose_count" | "user_id" | "createAt" | "updateAt", ExtArgs["result"]["table"]>
  export type tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }
  export type tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }
  export type tableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_ids?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "table"
    objects: {
      user_ids: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      winning_count: number
      lose_count: number
      user_id: number
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["table"]>
    composites: {}
  }

  type tableGetPayload<S extends boolean | null | undefined | tableDefaultArgs> = $Result.GetResult<Prisma.$tablePayload, S>

  type tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableCountAggregateInputType | true
    }

  export interface tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['table'], meta: { name: 'table' } }
    /**
     * Find zero or one Table that matches the filter.
     * @param {tableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tableFindUniqueArgs>(args: SelectSubset<T, tableFindUniqueArgs<ExtArgs>>): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tableFindUniqueOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tableFindUniqueOrThrowArgs>(args: SelectSubset<T, tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tableFindFirstArgs>(args?: SelectSubset<T, tableFindFirstArgs<ExtArgs>>): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableFindFirstOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tableFindFirstOrThrowArgs>(args?: SelectSubset<T, tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableWithIdOnly = await prisma.table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tableFindManyArgs>(args?: SelectSubset<T, tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Table.
     * @param {tableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     * 
     */
    create<T extends tableCreateArgs>(args: SelectSubset<T, tableCreateArgs<ExtArgs>>): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tables.
     * @param {tableCreateManyArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tableCreateManyArgs>(args?: SelectSubset<T, tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tables and returns the data saved in the database.
     * @param {tableCreateManyAndReturnArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tableCreateManyAndReturnArgs>(args?: SelectSubset<T, tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Table.
     * @param {tableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     * 
     */
    delete<T extends tableDeleteArgs>(args: SelectSubset<T, tableDeleteArgs<ExtArgs>>): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Table.
     * @param {tableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tableUpdateArgs>(args: SelectSubset<T, tableUpdateArgs<ExtArgs>>): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tables.
     * @param {tableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tableDeleteManyArgs>(args?: SelectSubset<T, tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tableUpdateManyArgs>(args: SelectSubset<T, tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables and returns the data updated in the database.
     * @param {tableUpdateManyAndReturnArgs} args - Arguments to update many Tables.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tableUpdateManyAndReturnArgs>(args: SelectSubset<T, tableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Table.
     * @param {tableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
     */
    upsert<T extends tableUpsertArgs>(args: SelectSubset<T, tableUpsertArgs<ExtArgs>>): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends tableCountArgs>(
      args?: Subset<T, tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): Prisma.PrismaPromise<GetTableAggregateType<T>>

    /**
     * Group by Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tableGroupByArgs['orderBy'] }
        : { orderBy?: tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the table model
   */
  readonly fields: tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_ids<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the table model
   */
  interface tableFieldRefs {
    readonly id: FieldRef<"table", 'Int'>
    readonly winning_count: FieldRef<"table", 'Int'>
    readonly lose_count: FieldRef<"table", 'Int'>
    readonly user_id: FieldRef<"table", 'Int'>
    readonly createAt: FieldRef<"table", 'DateTime'>
    readonly updateAt: FieldRef<"table", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * table findUnique
   */
  export type tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table
     */
    omit?: tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * Filter, which table to fetch.
     */
    where: tableWhereUniqueInput
  }

  /**
   * table findUniqueOrThrow
   */
  export type tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table
     */
    omit?: tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * Filter, which table to fetch.
     */
    where: tableWhereUniqueInput
  }

  /**
   * table findFirst
   */
  export type tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table
     */
    omit?: tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * Filter, which table to fetch.
     */
    where?: tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tableOrderByWithRelationInput | tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tables.
     */
    cursor?: tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * table findFirstOrThrow
   */
  export type tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table
     */
    omit?: tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * Filter, which table to fetch.
     */
    where?: tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tableOrderByWithRelationInput | tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tables.
     */
    cursor?: tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * table findMany
   */
  export type tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table
     */
    omit?: tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * Filter, which tables to fetch.
     */
    where?: tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tableOrderByWithRelationInput | tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tables.
     */
    cursor?: tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * table create
   */
  export type tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table
     */
    omit?: tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * The data needed to create a table.
     */
    data: XOR<tableCreateInput, tableUncheckedCreateInput>
  }

  /**
   * table createMany
   */
  export type tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tables.
     */
    data: tableCreateManyInput | tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * table createManyAndReturn
   */
  export type tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the table
     */
    omit?: tableOmit<ExtArgs> | null
    /**
     * The data used to create many tables.
     */
    data: tableCreateManyInput | tableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * table update
   */
  export type tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table
     */
    omit?: tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * The data needed to update a table.
     */
    data: XOR<tableUpdateInput, tableUncheckedUpdateInput>
    /**
     * Choose, which table to update.
     */
    where: tableWhereUniqueInput
  }

  /**
   * table updateMany
   */
  export type tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tables.
     */
    data: XOR<tableUpdateManyMutationInput, tableUncheckedUpdateManyInput>
    /**
     * Filter which tables to update
     */
    where?: tableWhereInput
    /**
     * Limit how many tables to update.
     */
    limit?: number
  }

  /**
   * table updateManyAndReturn
   */
  export type tableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the table
     */
    omit?: tableOmit<ExtArgs> | null
    /**
     * The data used to update tables.
     */
    data: XOR<tableUpdateManyMutationInput, tableUncheckedUpdateManyInput>
    /**
     * Filter which tables to update
     */
    where?: tableWhereInput
    /**
     * Limit how many tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * table upsert
   */
  export type tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table
     */
    omit?: tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * The filter to search for the table to update in case it exists.
     */
    where: tableWhereUniqueInput
    /**
     * In case the table found by the `where` argument doesn't exist, create a new table with this data.
     */
    create: XOR<tableCreateInput, tableUncheckedCreateInput>
    /**
     * In case the table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tableUpdateInput, tableUncheckedUpdateInput>
  }

  /**
   * table delete
   */
  export type tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table
     */
    omit?: tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * Filter which table to delete.
     */
    where: tableWhereUniqueInput
  }

  /**
   * table deleteMany
   */
  export type tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tables to delete
     */
    where?: tableWhereInput
    /**
     * Limit how many tables to delete.
     */
    limit?: number
  }

  /**
   * table without action
   */
  export type tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the table
     */
    omit?: tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    isActive: 'isActive',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BalanceScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    user_id: 'user_id',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type BalanceScalarFieldEnum = (typeof BalanceScalarFieldEnum)[keyof typeof BalanceScalarFieldEnum]


  export const Total_winningScalarFieldEnum: {
    id: 'id',
    count: 'count',
    user_id: 'user_id',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type Total_winningScalarFieldEnum = (typeof Total_winningScalarFieldEnum)[keyof typeof Total_winningScalarFieldEnum]


  export const ChipScalarFieldEnum: {
    id: 'id',
    count: 'count',
    user_id: 'user_id',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type ChipScalarFieldEnum = (typeof ChipScalarFieldEnum)[keyof typeof ChipScalarFieldEnum]


  export const TableScalarFieldEnum: {
    id: 'id',
    winning_count: 'winning_count',
    lose_count: 'lose_count',
    user_id: 'user_id',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    isActive?: BoolFilter<"user"> | boolean
    createAt?: DateTimeFilter<"user"> | Date | string
    updateAt?: DateTimeFilter<"user"> | Date | string
    balances?: BalanceListRelationFilter
    total_winnings?: Total_winningListRelationFilter
    chips?: ChipListRelationFilter
    total_Tables?: TableListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    balances?: balanceOrderByRelationAggregateInput
    total_winnings?: total_winningOrderByRelationAggregateInput
    chips?: chipOrderByRelationAggregateInput
    total_Tables?: tableOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    isActive?: BoolFilter<"user"> | boolean
    createAt?: DateTimeFilter<"user"> | Date | string
    updateAt?: DateTimeFilter<"user"> | Date | string
    balances?: BalanceListRelationFilter
    total_winnings?: Total_winningListRelationFilter
    chips?: ChipListRelationFilter
    total_Tables?: TableListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    isActive?: BoolWithAggregatesFilter<"user"> | boolean
    createAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type balanceWhereInput = {
    AND?: balanceWhereInput | balanceWhereInput[]
    OR?: balanceWhereInput[]
    NOT?: balanceWhereInput | balanceWhereInput[]
    id?: IntFilter<"balance"> | number
    amount?: IntFilter<"balance"> | number
    user_id?: IntFilter<"balance"> | number
    createAt?: DateTimeFilter<"balance"> | Date | string
    updateAt?: DateTimeFilter<"balance"> | Date | string
    user_ids?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type balanceOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    user_ids?: userOrderByWithRelationInput
  }

  export type balanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: balanceWhereInput | balanceWhereInput[]
    OR?: balanceWhereInput[]
    NOT?: balanceWhereInput | balanceWhereInput[]
    amount?: IntFilter<"balance"> | number
    user_id?: IntFilter<"balance"> | number
    createAt?: DateTimeFilter<"balance"> | Date | string
    updateAt?: DateTimeFilter<"balance"> | Date | string
    user_ids?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type balanceOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: balanceCountOrderByAggregateInput
    _avg?: balanceAvgOrderByAggregateInput
    _max?: balanceMaxOrderByAggregateInput
    _min?: balanceMinOrderByAggregateInput
    _sum?: balanceSumOrderByAggregateInput
  }

  export type balanceScalarWhereWithAggregatesInput = {
    AND?: balanceScalarWhereWithAggregatesInput | balanceScalarWhereWithAggregatesInput[]
    OR?: balanceScalarWhereWithAggregatesInput[]
    NOT?: balanceScalarWhereWithAggregatesInput | balanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"balance"> | number
    amount?: IntWithAggregatesFilter<"balance"> | number
    user_id?: IntWithAggregatesFilter<"balance"> | number
    createAt?: DateTimeWithAggregatesFilter<"balance"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"balance"> | Date | string
  }

  export type total_winningWhereInput = {
    AND?: total_winningWhereInput | total_winningWhereInput[]
    OR?: total_winningWhereInput[]
    NOT?: total_winningWhereInput | total_winningWhereInput[]
    id?: IntFilter<"total_winning"> | number
    count?: IntFilter<"total_winning"> | number
    user_id?: IntFilter<"total_winning"> | number
    createAt?: DateTimeFilter<"total_winning"> | Date | string
    updateAt?: DateTimeFilter<"total_winning"> | Date | string
    user_ids?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type total_winningOrderByWithRelationInput = {
    id?: SortOrder
    count?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    user_ids?: userOrderByWithRelationInput
  }

  export type total_winningWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: total_winningWhereInput | total_winningWhereInput[]
    OR?: total_winningWhereInput[]
    NOT?: total_winningWhereInput | total_winningWhereInput[]
    count?: IntFilter<"total_winning"> | number
    user_id?: IntFilter<"total_winning"> | number
    createAt?: DateTimeFilter<"total_winning"> | Date | string
    updateAt?: DateTimeFilter<"total_winning"> | Date | string
    user_ids?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type total_winningOrderByWithAggregationInput = {
    id?: SortOrder
    count?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: total_winningCountOrderByAggregateInput
    _avg?: total_winningAvgOrderByAggregateInput
    _max?: total_winningMaxOrderByAggregateInput
    _min?: total_winningMinOrderByAggregateInput
    _sum?: total_winningSumOrderByAggregateInput
  }

  export type total_winningScalarWhereWithAggregatesInput = {
    AND?: total_winningScalarWhereWithAggregatesInput | total_winningScalarWhereWithAggregatesInput[]
    OR?: total_winningScalarWhereWithAggregatesInput[]
    NOT?: total_winningScalarWhereWithAggregatesInput | total_winningScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"total_winning"> | number
    count?: IntWithAggregatesFilter<"total_winning"> | number
    user_id?: IntWithAggregatesFilter<"total_winning"> | number
    createAt?: DateTimeWithAggregatesFilter<"total_winning"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"total_winning"> | Date | string
  }

  export type chipWhereInput = {
    AND?: chipWhereInput | chipWhereInput[]
    OR?: chipWhereInput[]
    NOT?: chipWhereInput | chipWhereInput[]
    id?: IntFilter<"chip"> | number
    count?: IntFilter<"chip"> | number
    user_id?: IntFilter<"chip"> | number
    createAt?: DateTimeFilter<"chip"> | Date | string
    updateAt?: DateTimeFilter<"chip"> | Date | string
    user_ids?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type chipOrderByWithRelationInput = {
    id?: SortOrder
    count?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    user_ids?: userOrderByWithRelationInput
  }

  export type chipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chipWhereInput | chipWhereInput[]
    OR?: chipWhereInput[]
    NOT?: chipWhereInput | chipWhereInput[]
    count?: IntFilter<"chip"> | number
    user_id?: IntFilter<"chip"> | number
    createAt?: DateTimeFilter<"chip"> | Date | string
    updateAt?: DateTimeFilter<"chip"> | Date | string
    user_ids?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type chipOrderByWithAggregationInput = {
    id?: SortOrder
    count?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: chipCountOrderByAggregateInput
    _avg?: chipAvgOrderByAggregateInput
    _max?: chipMaxOrderByAggregateInput
    _min?: chipMinOrderByAggregateInput
    _sum?: chipSumOrderByAggregateInput
  }

  export type chipScalarWhereWithAggregatesInput = {
    AND?: chipScalarWhereWithAggregatesInput | chipScalarWhereWithAggregatesInput[]
    OR?: chipScalarWhereWithAggregatesInput[]
    NOT?: chipScalarWhereWithAggregatesInput | chipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chip"> | number
    count?: IntWithAggregatesFilter<"chip"> | number
    user_id?: IntWithAggregatesFilter<"chip"> | number
    createAt?: DateTimeWithAggregatesFilter<"chip"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"chip"> | Date | string
  }

  export type tableWhereInput = {
    AND?: tableWhereInput | tableWhereInput[]
    OR?: tableWhereInput[]
    NOT?: tableWhereInput | tableWhereInput[]
    id?: IntFilter<"table"> | number
    winning_count?: IntFilter<"table"> | number
    lose_count?: IntFilter<"table"> | number
    user_id?: IntFilter<"table"> | number
    createAt?: DateTimeFilter<"table"> | Date | string
    updateAt?: DateTimeFilter<"table"> | Date | string
    user_ids?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type tableOrderByWithRelationInput = {
    id?: SortOrder
    winning_count?: SortOrder
    lose_count?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    user_ids?: userOrderByWithRelationInput
  }

  export type tableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tableWhereInput | tableWhereInput[]
    OR?: tableWhereInput[]
    NOT?: tableWhereInput | tableWhereInput[]
    winning_count?: IntFilter<"table"> | number
    lose_count?: IntFilter<"table"> | number
    user_id?: IntFilter<"table"> | number
    createAt?: DateTimeFilter<"table"> | Date | string
    updateAt?: DateTimeFilter<"table"> | Date | string
    user_ids?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type tableOrderByWithAggregationInput = {
    id?: SortOrder
    winning_count?: SortOrder
    lose_count?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: tableCountOrderByAggregateInput
    _avg?: tableAvgOrderByAggregateInput
    _max?: tableMaxOrderByAggregateInput
    _min?: tableMinOrderByAggregateInput
    _sum?: tableSumOrderByAggregateInput
  }

  export type tableScalarWhereWithAggregatesInput = {
    AND?: tableScalarWhereWithAggregatesInput | tableScalarWhereWithAggregatesInput[]
    OR?: tableScalarWhereWithAggregatesInput[]
    NOT?: tableScalarWhereWithAggregatesInput | tableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"table"> | number
    winning_count?: IntWithAggregatesFilter<"table"> | number
    lose_count?: IntWithAggregatesFilter<"table"> | number
    user_id?: IntWithAggregatesFilter<"table"> | number
    createAt?: DateTimeWithAggregatesFilter<"table"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"table"> | Date | string
  }

  export type userCreateInput = {
    name: string
    email: string
    isActive?: boolean
    createAt: Date | string
    updateAt?: Date | string
    balances?: balanceCreateNestedManyWithoutUser_idsInput
    total_winnings?: total_winningCreateNestedManyWithoutUser_idsInput
    chips?: chipCreateNestedManyWithoutUser_idsInput
    total_Tables?: tableCreateNestedManyWithoutUser_idsInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    isActive?: boolean
    createAt: Date | string
    updateAt?: Date | string
    balances?: balanceUncheckedCreateNestedManyWithoutUser_idsInput
    total_winnings?: total_winningUncheckedCreateNestedManyWithoutUser_idsInput
    chips?: chipUncheckedCreateNestedManyWithoutUser_idsInput
    total_Tables?: tableUncheckedCreateNestedManyWithoutUser_idsInput
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: balanceUpdateManyWithoutUser_idsNestedInput
    total_winnings?: total_winningUpdateManyWithoutUser_idsNestedInput
    chips?: chipUpdateManyWithoutUser_idsNestedInput
    total_Tables?: tableUpdateManyWithoutUser_idsNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: balanceUncheckedUpdateManyWithoutUser_idsNestedInput
    total_winnings?: total_winningUncheckedUpdateManyWithoutUser_idsNestedInput
    chips?: chipUncheckedUpdateManyWithoutUser_idsNestedInput
    total_Tables?: tableUncheckedUpdateManyWithoutUser_idsNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    email: string
    isActive?: boolean
    createAt: Date | string
    updateAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type balanceCreateInput = {
    amount: number
    createAt: Date | string
    updateAt?: Date | string
    user_ids: userCreateNestedOneWithoutBalancesInput
  }

  export type balanceUncheckedCreateInput = {
    id?: number
    amount: number
    user_id: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type balanceUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_ids?: userUpdateOneRequiredWithoutBalancesNestedInput
  }

  export type balanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type balanceCreateManyInput = {
    id?: number
    amount: number
    user_id: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type balanceUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type balanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type total_winningCreateInput = {
    count: number
    createAt: Date | string
    updateAt?: Date | string
    user_ids: userCreateNestedOneWithoutTotal_winningsInput
  }

  export type total_winningUncheckedCreateInput = {
    id?: number
    count: number
    user_id: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type total_winningUpdateInput = {
    count?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_ids?: userUpdateOneRequiredWithoutTotal_winningsNestedInput
  }

  export type total_winningUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type total_winningCreateManyInput = {
    id?: number
    count: number
    user_id: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type total_winningUpdateManyMutationInput = {
    count?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type total_winningUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chipCreateInput = {
    count: number
    createAt: Date | string
    updateAt?: Date | string
    user_ids: userCreateNestedOneWithoutChipsInput
  }

  export type chipUncheckedCreateInput = {
    id?: number
    count: number
    user_id: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type chipUpdateInput = {
    count?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_ids?: userUpdateOneRequiredWithoutChipsNestedInput
  }

  export type chipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chipCreateManyInput = {
    id?: number
    count: number
    user_id: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type chipUpdateManyMutationInput = {
    count?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tableCreateInput = {
    winning_count: number
    lose_count: number
    createAt: Date | string
    updateAt?: Date | string
    user_ids: userCreateNestedOneWithoutTotal_TablesInput
  }

  export type tableUncheckedCreateInput = {
    id?: number
    winning_count: number
    lose_count: number
    user_id: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type tableUpdateInput = {
    winning_count?: IntFieldUpdateOperationsInput | number
    lose_count?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_ids?: userUpdateOneRequiredWithoutTotal_TablesNestedInput
  }

  export type tableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    winning_count?: IntFieldUpdateOperationsInput | number
    lose_count?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tableCreateManyInput = {
    id?: number
    winning_count: number
    lose_count: number
    user_id: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type tableUpdateManyMutationInput = {
    winning_count?: IntFieldUpdateOperationsInput | number
    lose_count?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    winning_count?: IntFieldUpdateOperationsInput | number
    lose_count?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BalanceListRelationFilter = {
    every?: balanceWhereInput
    some?: balanceWhereInput
    none?: balanceWhereInput
  }

  export type Total_winningListRelationFilter = {
    every?: total_winningWhereInput
    some?: total_winningWhereInput
    none?: total_winningWhereInput
  }

  export type ChipListRelationFilter = {
    every?: chipWhereInput
    some?: chipWhereInput
    none?: chipWhereInput
  }

  export type TableListRelationFilter = {
    every?: tableWhereInput
    some?: tableWhereInput
    none?: tableWhereInput
  }

  export type balanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type total_winningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type balanceCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type balanceAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
  }

  export type balanceMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type balanceMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type balanceSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
  }

  export type total_winningCountOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type total_winningAvgOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    user_id?: SortOrder
  }

  export type total_winningMaxOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type total_winningMinOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type total_winningSumOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    user_id?: SortOrder
  }

  export type chipCountOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type chipAvgOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    user_id?: SortOrder
  }

  export type chipMaxOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type chipMinOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type chipSumOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    user_id?: SortOrder
  }

  export type tableCountOrderByAggregateInput = {
    id?: SortOrder
    winning_count?: SortOrder
    lose_count?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type tableAvgOrderByAggregateInput = {
    id?: SortOrder
    winning_count?: SortOrder
    lose_count?: SortOrder
    user_id?: SortOrder
  }

  export type tableMaxOrderByAggregateInput = {
    id?: SortOrder
    winning_count?: SortOrder
    lose_count?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type tableMinOrderByAggregateInput = {
    id?: SortOrder
    winning_count?: SortOrder
    lose_count?: SortOrder
    user_id?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type tableSumOrderByAggregateInput = {
    id?: SortOrder
    winning_count?: SortOrder
    lose_count?: SortOrder
    user_id?: SortOrder
  }

  export type balanceCreateNestedManyWithoutUser_idsInput = {
    create?: XOR<balanceCreateWithoutUser_idsInput, balanceUncheckedCreateWithoutUser_idsInput> | balanceCreateWithoutUser_idsInput[] | balanceUncheckedCreateWithoutUser_idsInput[]
    connectOrCreate?: balanceCreateOrConnectWithoutUser_idsInput | balanceCreateOrConnectWithoutUser_idsInput[]
    createMany?: balanceCreateManyUser_idsInputEnvelope
    connect?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
  }

  export type total_winningCreateNestedManyWithoutUser_idsInput = {
    create?: XOR<total_winningCreateWithoutUser_idsInput, total_winningUncheckedCreateWithoutUser_idsInput> | total_winningCreateWithoutUser_idsInput[] | total_winningUncheckedCreateWithoutUser_idsInput[]
    connectOrCreate?: total_winningCreateOrConnectWithoutUser_idsInput | total_winningCreateOrConnectWithoutUser_idsInput[]
    createMany?: total_winningCreateManyUser_idsInputEnvelope
    connect?: total_winningWhereUniqueInput | total_winningWhereUniqueInput[]
  }

  export type chipCreateNestedManyWithoutUser_idsInput = {
    create?: XOR<chipCreateWithoutUser_idsInput, chipUncheckedCreateWithoutUser_idsInput> | chipCreateWithoutUser_idsInput[] | chipUncheckedCreateWithoutUser_idsInput[]
    connectOrCreate?: chipCreateOrConnectWithoutUser_idsInput | chipCreateOrConnectWithoutUser_idsInput[]
    createMany?: chipCreateManyUser_idsInputEnvelope
    connect?: chipWhereUniqueInput | chipWhereUniqueInput[]
  }

  export type tableCreateNestedManyWithoutUser_idsInput = {
    create?: XOR<tableCreateWithoutUser_idsInput, tableUncheckedCreateWithoutUser_idsInput> | tableCreateWithoutUser_idsInput[] | tableUncheckedCreateWithoutUser_idsInput[]
    connectOrCreate?: tableCreateOrConnectWithoutUser_idsInput | tableCreateOrConnectWithoutUser_idsInput[]
    createMany?: tableCreateManyUser_idsInputEnvelope
    connect?: tableWhereUniqueInput | tableWhereUniqueInput[]
  }

  export type balanceUncheckedCreateNestedManyWithoutUser_idsInput = {
    create?: XOR<balanceCreateWithoutUser_idsInput, balanceUncheckedCreateWithoutUser_idsInput> | balanceCreateWithoutUser_idsInput[] | balanceUncheckedCreateWithoutUser_idsInput[]
    connectOrCreate?: balanceCreateOrConnectWithoutUser_idsInput | balanceCreateOrConnectWithoutUser_idsInput[]
    createMany?: balanceCreateManyUser_idsInputEnvelope
    connect?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
  }

  export type total_winningUncheckedCreateNestedManyWithoutUser_idsInput = {
    create?: XOR<total_winningCreateWithoutUser_idsInput, total_winningUncheckedCreateWithoutUser_idsInput> | total_winningCreateWithoutUser_idsInput[] | total_winningUncheckedCreateWithoutUser_idsInput[]
    connectOrCreate?: total_winningCreateOrConnectWithoutUser_idsInput | total_winningCreateOrConnectWithoutUser_idsInput[]
    createMany?: total_winningCreateManyUser_idsInputEnvelope
    connect?: total_winningWhereUniqueInput | total_winningWhereUniqueInput[]
  }

  export type chipUncheckedCreateNestedManyWithoutUser_idsInput = {
    create?: XOR<chipCreateWithoutUser_idsInput, chipUncheckedCreateWithoutUser_idsInput> | chipCreateWithoutUser_idsInput[] | chipUncheckedCreateWithoutUser_idsInput[]
    connectOrCreate?: chipCreateOrConnectWithoutUser_idsInput | chipCreateOrConnectWithoutUser_idsInput[]
    createMany?: chipCreateManyUser_idsInputEnvelope
    connect?: chipWhereUniqueInput | chipWhereUniqueInput[]
  }

  export type tableUncheckedCreateNestedManyWithoutUser_idsInput = {
    create?: XOR<tableCreateWithoutUser_idsInput, tableUncheckedCreateWithoutUser_idsInput> | tableCreateWithoutUser_idsInput[] | tableUncheckedCreateWithoutUser_idsInput[]
    connectOrCreate?: tableCreateOrConnectWithoutUser_idsInput | tableCreateOrConnectWithoutUser_idsInput[]
    createMany?: tableCreateManyUser_idsInputEnvelope
    connect?: tableWhereUniqueInput | tableWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type balanceUpdateManyWithoutUser_idsNestedInput = {
    create?: XOR<balanceCreateWithoutUser_idsInput, balanceUncheckedCreateWithoutUser_idsInput> | balanceCreateWithoutUser_idsInput[] | balanceUncheckedCreateWithoutUser_idsInput[]
    connectOrCreate?: balanceCreateOrConnectWithoutUser_idsInput | balanceCreateOrConnectWithoutUser_idsInput[]
    upsert?: balanceUpsertWithWhereUniqueWithoutUser_idsInput | balanceUpsertWithWhereUniqueWithoutUser_idsInput[]
    createMany?: balanceCreateManyUser_idsInputEnvelope
    set?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
    disconnect?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
    delete?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
    connect?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
    update?: balanceUpdateWithWhereUniqueWithoutUser_idsInput | balanceUpdateWithWhereUniqueWithoutUser_idsInput[]
    updateMany?: balanceUpdateManyWithWhereWithoutUser_idsInput | balanceUpdateManyWithWhereWithoutUser_idsInput[]
    deleteMany?: balanceScalarWhereInput | balanceScalarWhereInput[]
  }

  export type total_winningUpdateManyWithoutUser_idsNestedInput = {
    create?: XOR<total_winningCreateWithoutUser_idsInput, total_winningUncheckedCreateWithoutUser_idsInput> | total_winningCreateWithoutUser_idsInput[] | total_winningUncheckedCreateWithoutUser_idsInput[]
    connectOrCreate?: total_winningCreateOrConnectWithoutUser_idsInput | total_winningCreateOrConnectWithoutUser_idsInput[]
    upsert?: total_winningUpsertWithWhereUniqueWithoutUser_idsInput | total_winningUpsertWithWhereUniqueWithoutUser_idsInput[]
    createMany?: total_winningCreateManyUser_idsInputEnvelope
    set?: total_winningWhereUniqueInput | total_winningWhereUniqueInput[]
    disconnect?: total_winningWhereUniqueInput | total_winningWhereUniqueInput[]
    delete?: total_winningWhereUniqueInput | total_winningWhereUniqueInput[]
    connect?: total_winningWhereUniqueInput | total_winningWhereUniqueInput[]
    update?: total_winningUpdateWithWhereUniqueWithoutUser_idsInput | total_winningUpdateWithWhereUniqueWithoutUser_idsInput[]
    updateMany?: total_winningUpdateManyWithWhereWithoutUser_idsInput | total_winningUpdateManyWithWhereWithoutUser_idsInput[]
    deleteMany?: total_winningScalarWhereInput | total_winningScalarWhereInput[]
  }

  export type chipUpdateManyWithoutUser_idsNestedInput = {
    create?: XOR<chipCreateWithoutUser_idsInput, chipUncheckedCreateWithoutUser_idsInput> | chipCreateWithoutUser_idsInput[] | chipUncheckedCreateWithoutUser_idsInput[]
    connectOrCreate?: chipCreateOrConnectWithoutUser_idsInput | chipCreateOrConnectWithoutUser_idsInput[]
    upsert?: chipUpsertWithWhereUniqueWithoutUser_idsInput | chipUpsertWithWhereUniqueWithoutUser_idsInput[]
    createMany?: chipCreateManyUser_idsInputEnvelope
    set?: chipWhereUniqueInput | chipWhereUniqueInput[]
    disconnect?: chipWhereUniqueInput | chipWhereUniqueInput[]
    delete?: chipWhereUniqueInput | chipWhereUniqueInput[]
    connect?: chipWhereUniqueInput | chipWhereUniqueInput[]
    update?: chipUpdateWithWhereUniqueWithoutUser_idsInput | chipUpdateWithWhereUniqueWithoutUser_idsInput[]
    updateMany?: chipUpdateManyWithWhereWithoutUser_idsInput | chipUpdateManyWithWhereWithoutUser_idsInput[]
    deleteMany?: chipScalarWhereInput | chipScalarWhereInput[]
  }

  export type tableUpdateManyWithoutUser_idsNestedInput = {
    create?: XOR<tableCreateWithoutUser_idsInput, tableUncheckedCreateWithoutUser_idsInput> | tableCreateWithoutUser_idsInput[] | tableUncheckedCreateWithoutUser_idsInput[]
    connectOrCreate?: tableCreateOrConnectWithoutUser_idsInput | tableCreateOrConnectWithoutUser_idsInput[]
    upsert?: tableUpsertWithWhereUniqueWithoutUser_idsInput | tableUpsertWithWhereUniqueWithoutUser_idsInput[]
    createMany?: tableCreateManyUser_idsInputEnvelope
    set?: tableWhereUniqueInput | tableWhereUniqueInput[]
    disconnect?: tableWhereUniqueInput | tableWhereUniqueInput[]
    delete?: tableWhereUniqueInput | tableWhereUniqueInput[]
    connect?: tableWhereUniqueInput | tableWhereUniqueInput[]
    update?: tableUpdateWithWhereUniqueWithoutUser_idsInput | tableUpdateWithWhereUniqueWithoutUser_idsInput[]
    updateMany?: tableUpdateManyWithWhereWithoutUser_idsInput | tableUpdateManyWithWhereWithoutUser_idsInput[]
    deleteMany?: tableScalarWhereInput | tableScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type balanceUncheckedUpdateManyWithoutUser_idsNestedInput = {
    create?: XOR<balanceCreateWithoutUser_idsInput, balanceUncheckedCreateWithoutUser_idsInput> | balanceCreateWithoutUser_idsInput[] | balanceUncheckedCreateWithoutUser_idsInput[]
    connectOrCreate?: balanceCreateOrConnectWithoutUser_idsInput | balanceCreateOrConnectWithoutUser_idsInput[]
    upsert?: balanceUpsertWithWhereUniqueWithoutUser_idsInput | balanceUpsertWithWhereUniqueWithoutUser_idsInput[]
    createMany?: balanceCreateManyUser_idsInputEnvelope
    set?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
    disconnect?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
    delete?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
    connect?: balanceWhereUniqueInput | balanceWhereUniqueInput[]
    update?: balanceUpdateWithWhereUniqueWithoutUser_idsInput | balanceUpdateWithWhereUniqueWithoutUser_idsInput[]
    updateMany?: balanceUpdateManyWithWhereWithoutUser_idsInput | balanceUpdateManyWithWhereWithoutUser_idsInput[]
    deleteMany?: balanceScalarWhereInput | balanceScalarWhereInput[]
  }

  export type total_winningUncheckedUpdateManyWithoutUser_idsNestedInput = {
    create?: XOR<total_winningCreateWithoutUser_idsInput, total_winningUncheckedCreateWithoutUser_idsInput> | total_winningCreateWithoutUser_idsInput[] | total_winningUncheckedCreateWithoutUser_idsInput[]
    connectOrCreate?: total_winningCreateOrConnectWithoutUser_idsInput | total_winningCreateOrConnectWithoutUser_idsInput[]
    upsert?: total_winningUpsertWithWhereUniqueWithoutUser_idsInput | total_winningUpsertWithWhereUniqueWithoutUser_idsInput[]
    createMany?: total_winningCreateManyUser_idsInputEnvelope
    set?: total_winningWhereUniqueInput | total_winningWhereUniqueInput[]
    disconnect?: total_winningWhereUniqueInput | total_winningWhereUniqueInput[]
    delete?: total_winningWhereUniqueInput | total_winningWhereUniqueInput[]
    connect?: total_winningWhereUniqueInput | total_winningWhereUniqueInput[]
    update?: total_winningUpdateWithWhereUniqueWithoutUser_idsInput | total_winningUpdateWithWhereUniqueWithoutUser_idsInput[]
    updateMany?: total_winningUpdateManyWithWhereWithoutUser_idsInput | total_winningUpdateManyWithWhereWithoutUser_idsInput[]
    deleteMany?: total_winningScalarWhereInput | total_winningScalarWhereInput[]
  }

  export type chipUncheckedUpdateManyWithoutUser_idsNestedInput = {
    create?: XOR<chipCreateWithoutUser_idsInput, chipUncheckedCreateWithoutUser_idsInput> | chipCreateWithoutUser_idsInput[] | chipUncheckedCreateWithoutUser_idsInput[]
    connectOrCreate?: chipCreateOrConnectWithoutUser_idsInput | chipCreateOrConnectWithoutUser_idsInput[]
    upsert?: chipUpsertWithWhereUniqueWithoutUser_idsInput | chipUpsertWithWhereUniqueWithoutUser_idsInput[]
    createMany?: chipCreateManyUser_idsInputEnvelope
    set?: chipWhereUniqueInput | chipWhereUniqueInput[]
    disconnect?: chipWhereUniqueInput | chipWhereUniqueInput[]
    delete?: chipWhereUniqueInput | chipWhereUniqueInput[]
    connect?: chipWhereUniqueInput | chipWhereUniqueInput[]
    update?: chipUpdateWithWhereUniqueWithoutUser_idsInput | chipUpdateWithWhereUniqueWithoutUser_idsInput[]
    updateMany?: chipUpdateManyWithWhereWithoutUser_idsInput | chipUpdateManyWithWhereWithoutUser_idsInput[]
    deleteMany?: chipScalarWhereInput | chipScalarWhereInput[]
  }

  export type tableUncheckedUpdateManyWithoutUser_idsNestedInput = {
    create?: XOR<tableCreateWithoutUser_idsInput, tableUncheckedCreateWithoutUser_idsInput> | tableCreateWithoutUser_idsInput[] | tableUncheckedCreateWithoutUser_idsInput[]
    connectOrCreate?: tableCreateOrConnectWithoutUser_idsInput | tableCreateOrConnectWithoutUser_idsInput[]
    upsert?: tableUpsertWithWhereUniqueWithoutUser_idsInput | tableUpsertWithWhereUniqueWithoutUser_idsInput[]
    createMany?: tableCreateManyUser_idsInputEnvelope
    set?: tableWhereUniqueInput | tableWhereUniqueInput[]
    disconnect?: tableWhereUniqueInput | tableWhereUniqueInput[]
    delete?: tableWhereUniqueInput | tableWhereUniqueInput[]
    connect?: tableWhereUniqueInput | tableWhereUniqueInput[]
    update?: tableUpdateWithWhereUniqueWithoutUser_idsInput | tableUpdateWithWhereUniqueWithoutUser_idsInput[]
    updateMany?: tableUpdateManyWithWhereWithoutUser_idsInput | tableUpdateManyWithWhereWithoutUser_idsInput[]
    deleteMany?: tableScalarWhereInput | tableScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutBalancesInput = {
    create?: XOR<userCreateWithoutBalancesInput, userUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: userCreateOrConnectWithoutBalancesInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutBalancesNestedInput = {
    create?: XOR<userCreateWithoutBalancesInput, userUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: userCreateOrConnectWithoutBalancesInput
    upsert?: userUpsertWithoutBalancesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutBalancesInput, userUpdateWithoutBalancesInput>, userUncheckedUpdateWithoutBalancesInput>
  }

  export type userCreateNestedOneWithoutTotal_winningsInput = {
    create?: XOR<userCreateWithoutTotal_winningsInput, userUncheckedCreateWithoutTotal_winningsInput>
    connectOrCreate?: userCreateOrConnectWithoutTotal_winningsInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutTotal_winningsNestedInput = {
    create?: XOR<userCreateWithoutTotal_winningsInput, userUncheckedCreateWithoutTotal_winningsInput>
    connectOrCreate?: userCreateOrConnectWithoutTotal_winningsInput
    upsert?: userUpsertWithoutTotal_winningsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutTotal_winningsInput, userUpdateWithoutTotal_winningsInput>, userUncheckedUpdateWithoutTotal_winningsInput>
  }

  export type userCreateNestedOneWithoutChipsInput = {
    create?: XOR<userCreateWithoutChipsInput, userUncheckedCreateWithoutChipsInput>
    connectOrCreate?: userCreateOrConnectWithoutChipsInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutChipsNestedInput = {
    create?: XOR<userCreateWithoutChipsInput, userUncheckedCreateWithoutChipsInput>
    connectOrCreate?: userCreateOrConnectWithoutChipsInput
    upsert?: userUpsertWithoutChipsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutChipsInput, userUpdateWithoutChipsInput>, userUncheckedUpdateWithoutChipsInput>
  }

  export type userCreateNestedOneWithoutTotal_TablesInput = {
    create?: XOR<userCreateWithoutTotal_TablesInput, userUncheckedCreateWithoutTotal_TablesInput>
    connectOrCreate?: userCreateOrConnectWithoutTotal_TablesInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutTotal_TablesNestedInput = {
    create?: XOR<userCreateWithoutTotal_TablesInput, userUncheckedCreateWithoutTotal_TablesInput>
    connectOrCreate?: userCreateOrConnectWithoutTotal_TablesInput
    upsert?: userUpsertWithoutTotal_TablesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutTotal_TablesInput, userUpdateWithoutTotal_TablesInput>, userUncheckedUpdateWithoutTotal_TablesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type balanceCreateWithoutUser_idsInput = {
    amount: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type balanceUncheckedCreateWithoutUser_idsInput = {
    id?: number
    amount: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type balanceCreateOrConnectWithoutUser_idsInput = {
    where: balanceWhereUniqueInput
    create: XOR<balanceCreateWithoutUser_idsInput, balanceUncheckedCreateWithoutUser_idsInput>
  }

  export type balanceCreateManyUser_idsInputEnvelope = {
    data: balanceCreateManyUser_idsInput | balanceCreateManyUser_idsInput[]
    skipDuplicates?: boolean
  }

  export type total_winningCreateWithoutUser_idsInput = {
    count: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type total_winningUncheckedCreateWithoutUser_idsInput = {
    id?: number
    count: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type total_winningCreateOrConnectWithoutUser_idsInput = {
    where: total_winningWhereUniqueInput
    create: XOR<total_winningCreateWithoutUser_idsInput, total_winningUncheckedCreateWithoutUser_idsInput>
  }

  export type total_winningCreateManyUser_idsInputEnvelope = {
    data: total_winningCreateManyUser_idsInput | total_winningCreateManyUser_idsInput[]
    skipDuplicates?: boolean
  }

  export type chipCreateWithoutUser_idsInput = {
    count: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type chipUncheckedCreateWithoutUser_idsInput = {
    id?: number
    count: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type chipCreateOrConnectWithoutUser_idsInput = {
    where: chipWhereUniqueInput
    create: XOR<chipCreateWithoutUser_idsInput, chipUncheckedCreateWithoutUser_idsInput>
  }

  export type chipCreateManyUser_idsInputEnvelope = {
    data: chipCreateManyUser_idsInput | chipCreateManyUser_idsInput[]
    skipDuplicates?: boolean
  }

  export type tableCreateWithoutUser_idsInput = {
    winning_count: number
    lose_count: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type tableUncheckedCreateWithoutUser_idsInput = {
    id?: number
    winning_count: number
    lose_count: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type tableCreateOrConnectWithoutUser_idsInput = {
    where: tableWhereUniqueInput
    create: XOR<tableCreateWithoutUser_idsInput, tableUncheckedCreateWithoutUser_idsInput>
  }

  export type tableCreateManyUser_idsInputEnvelope = {
    data: tableCreateManyUser_idsInput | tableCreateManyUser_idsInput[]
    skipDuplicates?: boolean
  }

  export type balanceUpsertWithWhereUniqueWithoutUser_idsInput = {
    where: balanceWhereUniqueInput
    update: XOR<balanceUpdateWithoutUser_idsInput, balanceUncheckedUpdateWithoutUser_idsInput>
    create: XOR<balanceCreateWithoutUser_idsInput, balanceUncheckedCreateWithoutUser_idsInput>
  }

  export type balanceUpdateWithWhereUniqueWithoutUser_idsInput = {
    where: balanceWhereUniqueInput
    data: XOR<balanceUpdateWithoutUser_idsInput, balanceUncheckedUpdateWithoutUser_idsInput>
  }

  export type balanceUpdateManyWithWhereWithoutUser_idsInput = {
    where: balanceScalarWhereInput
    data: XOR<balanceUpdateManyMutationInput, balanceUncheckedUpdateManyWithoutUser_idsInput>
  }

  export type balanceScalarWhereInput = {
    AND?: balanceScalarWhereInput | balanceScalarWhereInput[]
    OR?: balanceScalarWhereInput[]
    NOT?: balanceScalarWhereInput | balanceScalarWhereInput[]
    id?: IntFilter<"balance"> | number
    amount?: IntFilter<"balance"> | number
    user_id?: IntFilter<"balance"> | number
    createAt?: DateTimeFilter<"balance"> | Date | string
    updateAt?: DateTimeFilter<"balance"> | Date | string
  }

  export type total_winningUpsertWithWhereUniqueWithoutUser_idsInput = {
    where: total_winningWhereUniqueInput
    update: XOR<total_winningUpdateWithoutUser_idsInput, total_winningUncheckedUpdateWithoutUser_idsInput>
    create: XOR<total_winningCreateWithoutUser_idsInput, total_winningUncheckedCreateWithoutUser_idsInput>
  }

  export type total_winningUpdateWithWhereUniqueWithoutUser_idsInput = {
    where: total_winningWhereUniqueInput
    data: XOR<total_winningUpdateWithoutUser_idsInput, total_winningUncheckedUpdateWithoutUser_idsInput>
  }

  export type total_winningUpdateManyWithWhereWithoutUser_idsInput = {
    where: total_winningScalarWhereInput
    data: XOR<total_winningUpdateManyMutationInput, total_winningUncheckedUpdateManyWithoutUser_idsInput>
  }

  export type total_winningScalarWhereInput = {
    AND?: total_winningScalarWhereInput | total_winningScalarWhereInput[]
    OR?: total_winningScalarWhereInput[]
    NOT?: total_winningScalarWhereInput | total_winningScalarWhereInput[]
    id?: IntFilter<"total_winning"> | number
    count?: IntFilter<"total_winning"> | number
    user_id?: IntFilter<"total_winning"> | number
    createAt?: DateTimeFilter<"total_winning"> | Date | string
    updateAt?: DateTimeFilter<"total_winning"> | Date | string
  }

  export type chipUpsertWithWhereUniqueWithoutUser_idsInput = {
    where: chipWhereUniqueInput
    update: XOR<chipUpdateWithoutUser_idsInput, chipUncheckedUpdateWithoutUser_idsInput>
    create: XOR<chipCreateWithoutUser_idsInput, chipUncheckedCreateWithoutUser_idsInput>
  }

  export type chipUpdateWithWhereUniqueWithoutUser_idsInput = {
    where: chipWhereUniqueInput
    data: XOR<chipUpdateWithoutUser_idsInput, chipUncheckedUpdateWithoutUser_idsInput>
  }

  export type chipUpdateManyWithWhereWithoutUser_idsInput = {
    where: chipScalarWhereInput
    data: XOR<chipUpdateManyMutationInput, chipUncheckedUpdateManyWithoutUser_idsInput>
  }

  export type chipScalarWhereInput = {
    AND?: chipScalarWhereInput | chipScalarWhereInput[]
    OR?: chipScalarWhereInput[]
    NOT?: chipScalarWhereInput | chipScalarWhereInput[]
    id?: IntFilter<"chip"> | number
    count?: IntFilter<"chip"> | number
    user_id?: IntFilter<"chip"> | number
    createAt?: DateTimeFilter<"chip"> | Date | string
    updateAt?: DateTimeFilter<"chip"> | Date | string
  }

  export type tableUpsertWithWhereUniqueWithoutUser_idsInput = {
    where: tableWhereUniqueInput
    update: XOR<tableUpdateWithoutUser_idsInput, tableUncheckedUpdateWithoutUser_idsInput>
    create: XOR<tableCreateWithoutUser_idsInput, tableUncheckedCreateWithoutUser_idsInput>
  }

  export type tableUpdateWithWhereUniqueWithoutUser_idsInput = {
    where: tableWhereUniqueInput
    data: XOR<tableUpdateWithoutUser_idsInput, tableUncheckedUpdateWithoutUser_idsInput>
  }

  export type tableUpdateManyWithWhereWithoutUser_idsInput = {
    where: tableScalarWhereInput
    data: XOR<tableUpdateManyMutationInput, tableUncheckedUpdateManyWithoutUser_idsInput>
  }

  export type tableScalarWhereInput = {
    AND?: tableScalarWhereInput | tableScalarWhereInput[]
    OR?: tableScalarWhereInput[]
    NOT?: tableScalarWhereInput | tableScalarWhereInput[]
    id?: IntFilter<"table"> | number
    winning_count?: IntFilter<"table"> | number
    lose_count?: IntFilter<"table"> | number
    user_id?: IntFilter<"table"> | number
    createAt?: DateTimeFilter<"table"> | Date | string
    updateAt?: DateTimeFilter<"table"> | Date | string
  }

  export type userCreateWithoutBalancesInput = {
    name: string
    email: string
    isActive?: boolean
    createAt: Date | string
    updateAt?: Date | string
    total_winnings?: total_winningCreateNestedManyWithoutUser_idsInput
    chips?: chipCreateNestedManyWithoutUser_idsInput
    total_Tables?: tableCreateNestedManyWithoutUser_idsInput
  }

  export type userUncheckedCreateWithoutBalancesInput = {
    id?: number
    name: string
    email: string
    isActive?: boolean
    createAt: Date | string
    updateAt?: Date | string
    total_winnings?: total_winningUncheckedCreateNestedManyWithoutUser_idsInput
    chips?: chipUncheckedCreateNestedManyWithoutUser_idsInput
    total_Tables?: tableUncheckedCreateNestedManyWithoutUser_idsInput
  }

  export type userCreateOrConnectWithoutBalancesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutBalancesInput, userUncheckedCreateWithoutBalancesInput>
  }

  export type userUpsertWithoutBalancesInput = {
    update: XOR<userUpdateWithoutBalancesInput, userUncheckedUpdateWithoutBalancesInput>
    create: XOR<userCreateWithoutBalancesInput, userUncheckedCreateWithoutBalancesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutBalancesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutBalancesInput, userUncheckedUpdateWithoutBalancesInput>
  }

  export type userUpdateWithoutBalancesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    total_winnings?: total_winningUpdateManyWithoutUser_idsNestedInput
    chips?: chipUpdateManyWithoutUser_idsNestedInput
    total_Tables?: tableUpdateManyWithoutUser_idsNestedInput
  }

  export type userUncheckedUpdateWithoutBalancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    total_winnings?: total_winningUncheckedUpdateManyWithoutUser_idsNestedInput
    chips?: chipUncheckedUpdateManyWithoutUser_idsNestedInput
    total_Tables?: tableUncheckedUpdateManyWithoutUser_idsNestedInput
  }

  export type userCreateWithoutTotal_winningsInput = {
    name: string
    email: string
    isActive?: boolean
    createAt: Date | string
    updateAt?: Date | string
    balances?: balanceCreateNestedManyWithoutUser_idsInput
    chips?: chipCreateNestedManyWithoutUser_idsInput
    total_Tables?: tableCreateNestedManyWithoutUser_idsInput
  }

  export type userUncheckedCreateWithoutTotal_winningsInput = {
    id?: number
    name: string
    email: string
    isActive?: boolean
    createAt: Date | string
    updateAt?: Date | string
    balances?: balanceUncheckedCreateNestedManyWithoutUser_idsInput
    chips?: chipUncheckedCreateNestedManyWithoutUser_idsInput
    total_Tables?: tableUncheckedCreateNestedManyWithoutUser_idsInput
  }

  export type userCreateOrConnectWithoutTotal_winningsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutTotal_winningsInput, userUncheckedCreateWithoutTotal_winningsInput>
  }

  export type userUpsertWithoutTotal_winningsInput = {
    update: XOR<userUpdateWithoutTotal_winningsInput, userUncheckedUpdateWithoutTotal_winningsInput>
    create: XOR<userCreateWithoutTotal_winningsInput, userUncheckedCreateWithoutTotal_winningsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutTotal_winningsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutTotal_winningsInput, userUncheckedUpdateWithoutTotal_winningsInput>
  }

  export type userUpdateWithoutTotal_winningsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: balanceUpdateManyWithoutUser_idsNestedInput
    chips?: chipUpdateManyWithoutUser_idsNestedInput
    total_Tables?: tableUpdateManyWithoutUser_idsNestedInput
  }

  export type userUncheckedUpdateWithoutTotal_winningsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: balanceUncheckedUpdateManyWithoutUser_idsNestedInput
    chips?: chipUncheckedUpdateManyWithoutUser_idsNestedInput
    total_Tables?: tableUncheckedUpdateManyWithoutUser_idsNestedInput
  }

  export type userCreateWithoutChipsInput = {
    name: string
    email: string
    isActive?: boolean
    createAt: Date | string
    updateAt?: Date | string
    balances?: balanceCreateNestedManyWithoutUser_idsInput
    total_winnings?: total_winningCreateNestedManyWithoutUser_idsInput
    total_Tables?: tableCreateNestedManyWithoutUser_idsInput
  }

  export type userUncheckedCreateWithoutChipsInput = {
    id?: number
    name: string
    email: string
    isActive?: boolean
    createAt: Date | string
    updateAt?: Date | string
    balances?: balanceUncheckedCreateNestedManyWithoutUser_idsInput
    total_winnings?: total_winningUncheckedCreateNestedManyWithoutUser_idsInput
    total_Tables?: tableUncheckedCreateNestedManyWithoutUser_idsInput
  }

  export type userCreateOrConnectWithoutChipsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutChipsInput, userUncheckedCreateWithoutChipsInput>
  }

  export type userUpsertWithoutChipsInput = {
    update: XOR<userUpdateWithoutChipsInput, userUncheckedUpdateWithoutChipsInput>
    create: XOR<userCreateWithoutChipsInput, userUncheckedCreateWithoutChipsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutChipsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutChipsInput, userUncheckedUpdateWithoutChipsInput>
  }

  export type userUpdateWithoutChipsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: balanceUpdateManyWithoutUser_idsNestedInput
    total_winnings?: total_winningUpdateManyWithoutUser_idsNestedInput
    total_Tables?: tableUpdateManyWithoutUser_idsNestedInput
  }

  export type userUncheckedUpdateWithoutChipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: balanceUncheckedUpdateManyWithoutUser_idsNestedInput
    total_winnings?: total_winningUncheckedUpdateManyWithoutUser_idsNestedInput
    total_Tables?: tableUncheckedUpdateManyWithoutUser_idsNestedInput
  }

  export type userCreateWithoutTotal_TablesInput = {
    name: string
    email: string
    isActive?: boolean
    createAt: Date | string
    updateAt?: Date | string
    balances?: balanceCreateNestedManyWithoutUser_idsInput
    total_winnings?: total_winningCreateNestedManyWithoutUser_idsInput
    chips?: chipCreateNestedManyWithoutUser_idsInput
  }

  export type userUncheckedCreateWithoutTotal_TablesInput = {
    id?: number
    name: string
    email: string
    isActive?: boolean
    createAt: Date | string
    updateAt?: Date | string
    balances?: balanceUncheckedCreateNestedManyWithoutUser_idsInput
    total_winnings?: total_winningUncheckedCreateNestedManyWithoutUser_idsInput
    chips?: chipUncheckedCreateNestedManyWithoutUser_idsInput
  }

  export type userCreateOrConnectWithoutTotal_TablesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutTotal_TablesInput, userUncheckedCreateWithoutTotal_TablesInput>
  }

  export type userUpsertWithoutTotal_TablesInput = {
    update: XOR<userUpdateWithoutTotal_TablesInput, userUncheckedUpdateWithoutTotal_TablesInput>
    create: XOR<userCreateWithoutTotal_TablesInput, userUncheckedCreateWithoutTotal_TablesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutTotal_TablesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutTotal_TablesInput, userUncheckedUpdateWithoutTotal_TablesInput>
  }

  export type userUpdateWithoutTotal_TablesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: balanceUpdateManyWithoutUser_idsNestedInput
    total_winnings?: total_winningUpdateManyWithoutUser_idsNestedInput
    chips?: chipUpdateManyWithoutUser_idsNestedInput
  }

  export type userUncheckedUpdateWithoutTotal_TablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: balanceUncheckedUpdateManyWithoutUser_idsNestedInput
    total_winnings?: total_winningUncheckedUpdateManyWithoutUser_idsNestedInput
    chips?: chipUncheckedUpdateManyWithoutUser_idsNestedInput
  }

  export type balanceCreateManyUser_idsInput = {
    id?: number
    amount: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type total_winningCreateManyUser_idsInput = {
    id?: number
    count: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type chipCreateManyUser_idsInput = {
    id?: number
    count: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type tableCreateManyUser_idsInput = {
    id?: number
    winning_count: number
    lose_count: number
    createAt: Date | string
    updateAt?: Date | string
  }

  export type balanceUpdateWithoutUser_idsInput = {
    amount?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type balanceUncheckedUpdateWithoutUser_idsInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type balanceUncheckedUpdateManyWithoutUser_idsInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type total_winningUpdateWithoutUser_idsInput = {
    count?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type total_winningUncheckedUpdateWithoutUser_idsInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type total_winningUncheckedUpdateManyWithoutUser_idsInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chipUpdateWithoutUser_idsInput = {
    count?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chipUncheckedUpdateWithoutUser_idsInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chipUncheckedUpdateManyWithoutUser_idsInput = {
    id?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tableUpdateWithoutUser_idsInput = {
    winning_count?: IntFieldUpdateOperationsInput | number
    lose_count?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tableUncheckedUpdateWithoutUser_idsInput = {
    id?: IntFieldUpdateOperationsInput | number
    winning_count?: IntFieldUpdateOperationsInput | number
    lose_count?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tableUncheckedUpdateManyWithoutUser_idsInput = {
    id?: IntFieldUpdateOperationsInput | number
    winning_count?: IntFieldUpdateOperationsInput | number
    lose_count?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}