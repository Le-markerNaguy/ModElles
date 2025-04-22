
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Annonce
 * 
 */
export type Annonce = $Result.DefaultSelection<Prisma.$AnnoncePayload>
/**
 * Model Candidature
 * 
 */
export type Candidature = $Result.DefaultSelection<Prisma.$CandidaturePayload>
/**
 * Model Rdv
 * 
 */
export type Rdv = $Result.DefaultSelection<Prisma.$RdvPayload>
/**
 * Model Groupe
 * 
 */
export type Groupe = $Result.DefaultSelection<Prisma.$GroupePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model ContactUrgence
 * 
 */
export type ContactUrgence = $Result.DefaultSelection<Prisma.$ContactUrgencePayload>
/**
 * Model Ressource
 * 
 */
export type Ressource = $Result.DefaultSelection<Prisma.$RessourcePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  PARTNER: 'PARTNER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AnnonceType: {
  FORMATION: 'FORMATION',
  EMPLOI: 'EMPLOI',
  EVENEMENT: 'EVENEMENT'
};

export type AnnonceType = (typeof AnnonceType)[keyof typeof AnnonceType]


export const CandidatureStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type CandidatureStatus = (typeof CandidatureStatus)[keyof typeof CandidatureStatus]


export const RdvStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type RdvStatus = (typeof RdvStatus)[keyof typeof RdvStatus]


export const AnnonceStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type AnnonceStatus = (typeof AnnonceStatus)[keyof typeof AnnonceStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AnnonceType = $Enums.AnnonceType

export const AnnonceType: typeof $Enums.AnnonceType

export type CandidatureStatus = $Enums.CandidatureStatus

export const CandidatureStatus: typeof $Enums.CandidatureStatus

export type RdvStatus = $Enums.RdvStatus

export const RdvStatus: typeof $Enums.RdvStatus

export type AnnonceStatus = $Enums.AnnonceStatus

export const AnnonceStatus: typeof $Enums.AnnonceStatus

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
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.annonce`: Exposes CRUD operations for the **Annonce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Annonces
    * const annonces = await prisma.annonce.findMany()
    * ```
    */
  get annonce(): Prisma.AnnonceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidature`: Exposes CRUD operations for the **Candidature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidatures
    * const candidatures = await prisma.candidature.findMany()
    * ```
    */
  get candidature(): Prisma.CandidatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rdv`: Exposes CRUD operations for the **Rdv** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rdvs
    * const rdvs = await prisma.rdv.findMany()
    * ```
    */
  get rdv(): Prisma.RdvDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupe`: Exposes CRUD operations for the **Groupe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groupes
    * const groupes = await prisma.groupe.findMany()
    * ```
    */
  get groupe(): Prisma.GroupeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactUrgence`: Exposes CRUD operations for the **ContactUrgence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactUrgences
    * const contactUrgences = await prisma.contactUrgence.findMany()
    * ```
    */
  get contactUrgence(): Prisma.ContactUrgenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ressource`: Exposes CRUD operations for the **Ressource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ressources
    * const ressources = await prisma.ressource.findMany()
    * ```
    */
  get ressource(): Prisma.RessourceDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Annonce: 'Annonce',
    Candidature: 'Candidature',
    Rdv: 'Rdv',
    Groupe: 'Groupe',
    Notification: 'Notification',
    ContactUrgence: 'ContactUrgence',
    Ressource: 'Ressource'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "annonce" | "candidature" | "rdv" | "groupe" | "notification" | "contactUrgence" | "ressource"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Annonce: {
        payload: Prisma.$AnnoncePayload<ExtArgs>
        fields: Prisma.AnnonceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnonceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnonceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          findFirst: {
            args: Prisma.AnnonceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnonceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          findMany: {
            args: Prisma.AnnonceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>[]
          }
          create: {
            args: Prisma.AnnonceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          createMany: {
            args: Prisma.AnnonceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnonceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>[]
          }
          delete: {
            args: Prisma.AnnonceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          update: {
            args: Prisma.AnnonceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          deleteMany: {
            args: Prisma.AnnonceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnonceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnonceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>[]
          }
          upsert: {
            args: Prisma.AnnonceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          aggregate: {
            args: Prisma.AnnonceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnonce>
          }
          groupBy: {
            args: Prisma.AnnonceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnonceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnonceCountArgs<ExtArgs>
            result: $Utils.Optional<AnnonceCountAggregateOutputType> | number
          }
        }
      }
      Candidature: {
        payload: Prisma.$CandidaturePayload<ExtArgs>
        fields: Prisma.CandidatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload>
          }
          findFirst: {
            args: Prisma.CandidatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload>
          }
          findMany: {
            args: Prisma.CandidatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload>[]
          }
          create: {
            args: Prisma.CandidatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload>
          }
          createMany: {
            args: Prisma.CandidatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidatureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload>[]
          }
          delete: {
            args: Prisma.CandidatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload>
          }
          update: {
            args: Prisma.CandidatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload>
          }
          deleteMany: {
            args: Prisma.CandidatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidatureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload>[]
          }
          upsert: {
            args: Prisma.CandidatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload>
          }
          aggregate: {
            args: Prisma.CandidatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidature>
          }
          groupBy: {
            args: Prisma.CandidatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidatureCountArgs<ExtArgs>
            result: $Utils.Optional<CandidatureCountAggregateOutputType> | number
          }
        }
      }
      Rdv: {
        payload: Prisma.$RdvPayload<ExtArgs>
        fields: Prisma.RdvFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RdvFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RdvPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RdvFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RdvPayload>
          }
          findFirst: {
            args: Prisma.RdvFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RdvPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RdvFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RdvPayload>
          }
          findMany: {
            args: Prisma.RdvFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RdvPayload>[]
          }
          create: {
            args: Prisma.RdvCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RdvPayload>
          }
          createMany: {
            args: Prisma.RdvCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RdvCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RdvPayload>[]
          }
          delete: {
            args: Prisma.RdvDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RdvPayload>
          }
          update: {
            args: Prisma.RdvUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RdvPayload>
          }
          deleteMany: {
            args: Prisma.RdvDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RdvUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RdvUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RdvPayload>[]
          }
          upsert: {
            args: Prisma.RdvUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RdvPayload>
          }
          aggregate: {
            args: Prisma.RdvAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRdv>
          }
          groupBy: {
            args: Prisma.RdvGroupByArgs<ExtArgs>
            result: $Utils.Optional<RdvGroupByOutputType>[]
          }
          count: {
            args: Prisma.RdvCountArgs<ExtArgs>
            result: $Utils.Optional<RdvCountAggregateOutputType> | number
          }
        }
      }
      Groupe: {
        payload: Prisma.$GroupePayload<ExtArgs>
        fields: Prisma.GroupeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          findFirst: {
            args: Prisma.GroupeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          findMany: {
            args: Prisma.GroupeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>[]
          }
          create: {
            args: Prisma.GroupeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          createMany: {
            args: Prisma.GroupeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>[]
          }
          delete: {
            args: Prisma.GroupeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          update: {
            args: Prisma.GroupeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          deleteMany: {
            args: Prisma.GroupeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>[]
          }
          upsert: {
            args: Prisma.GroupeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          aggregate: {
            args: Prisma.GroupeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupe>
          }
          groupBy: {
            args: Prisma.GroupeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupeCountArgs<ExtArgs>
            result: $Utils.Optional<GroupeCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      ContactUrgence: {
        payload: Prisma.$ContactUrgencePayload<ExtArgs>
        fields: Prisma.ContactUrgenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactUrgenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUrgencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactUrgenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUrgencePayload>
          }
          findFirst: {
            args: Prisma.ContactUrgenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUrgencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactUrgenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUrgencePayload>
          }
          findMany: {
            args: Prisma.ContactUrgenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUrgencePayload>[]
          }
          create: {
            args: Prisma.ContactUrgenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUrgencePayload>
          }
          createMany: {
            args: Prisma.ContactUrgenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactUrgenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUrgencePayload>[]
          }
          delete: {
            args: Prisma.ContactUrgenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUrgencePayload>
          }
          update: {
            args: Prisma.ContactUrgenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUrgencePayload>
          }
          deleteMany: {
            args: Prisma.ContactUrgenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUrgenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUrgenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUrgencePayload>[]
          }
          upsert: {
            args: Prisma.ContactUrgenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUrgencePayload>
          }
          aggregate: {
            args: Prisma.ContactUrgenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactUrgence>
          }
          groupBy: {
            args: Prisma.ContactUrgenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactUrgenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactUrgenceCountArgs<ExtArgs>
            result: $Utils.Optional<ContactUrgenceCountAggregateOutputType> | number
          }
        }
      }
      Ressource: {
        payload: Prisma.$RessourcePayload<ExtArgs>
        fields: Prisma.RessourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RessourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RessourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          findFirst: {
            args: Prisma.RessourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RessourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          findMany: {
            args: Prisma.RessourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>[]
          }
          create: {
            args: Prisma.RessourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          createMany: {
            args: Prisma.RessourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RessourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>[]
          }
          delete: {
            args: Prisma.RessourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          update: {
            args: Prisma.RessourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          deleteMany: {
            args: Prisma.RessourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RessourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RessourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>[]
          }
          upsert: {
            args: Prisma.RessourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RessourcePayload>
          }
          aggregate: {
            args: Prisma.RessourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRessource>
          }
          groupBy: {
            args: Prisma.RessourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RessourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RessourceCountArgs<ExtArgs>
            result: $Utils.Optional<RessourceCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    annonce?: AnnonceOmit
    candidature?: CandidatureOmit
    rdv?: RdvOmit
    groupe?: GroupeOmit
    notification?: NotificationOmit
    contactUrgence?: ContactUrgenceOmit
    ressource?: RessourceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    annonces: number
    candidatures: number
    rendezVous: number
    contactsUrgence: number
    notifications: number
    groupes: number
    rdvPro: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonces?: boolean | UserCountOutputTypeCountAnnoncesArgs
    candidatures?: boolean | UserCountOutputTypeCountCandidaturesArgs
    rendezVous?: boolean | UserCountOutputTypeCountRendezVousArgs
    contactsUrgence?: boolean | UserCountOutputTypeCountContactsUrgenceArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    groupes?: boolean | UserCountOutputTypeCountGroupesArgs
    rdvPro?: boolean | UserCountOutputTypeCountRdvProArgs
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
  export type UserCountOutputTypeCountAnnoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnonceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCandidaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidatureWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRendezVousArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RdvWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContactsUrgenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactUrgenceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRdvProArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RdvWhereInput
  }


  /**
   * Count Type AnnonceCountOutputType
   */

  export type AnnonceCountOutputType = {
    candidatures: number
  }

  export type AnnonceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidatures?: boolean | AnnonceCountOutputTypeCountCandidaturesArgs
  }

  // Custom InputTypes
  /**
   * AnnonceCountOutputType without action
   */
  export type AnnonceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnonceCountOutputType
     */
    select?: AnnonceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnnonceCountOutputType without action
   */
  export type AnnonceCountOutputTypeCountCandidaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidatureWhereInput
  }


  /**
   * Count Type GroupeCountOutputType
   */

  export type GroupeCountOutputType = {
    membres: number
  }

  export type GroupeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membres?: boolean | GroupeCountOutputTypeCountMembresArgs
  }

  // Custom InputTypes
  /**
   * GroupeCountOutputType without action
   */
  export type GroupeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupeCountOutputType
     */
    select?: GroupeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupeCountOutputType without action
   */
  export type GroupeCountOutputTypeCountMembresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
    telephone: string | null
    role: $Enums.Role | null
    avatar: string | null
    dateInscription: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
    telephone: string | null
    role: $Enums.Role | null
    avatar: string | null
    dateInscription: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    email: number
    password: number
    telephone: number
    role: number
    avatar: number
    dateInscription: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    telephone?: true
    role?: true
    avatar?: true
    dateInscription?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    telephone?: true
    role?: true
    avatar?: true
    dateInscription?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    telephone?: true
    role?: true
    avatar?: true
    dateInscription?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone: string | null
    role: $Enums.Role
    avatar: string | null
    dateInscription: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    telephone?: boolean
    role?: boolean
    avatar?: boolean
    dateInscription?: boolean
    annonces?: boolean | User$annoncesArgs<ExtArgs>
    candidatures?: boolean | User$candidaturesArgs<ExtArgs>
    rendezVous?: boolean | User$rendezVousArgs<ExtArgs>
    contactsUrgence?: boolean | User$contactsUrgenceArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    groupes?: boolean | User$groupesArgs<ExtArgs>
    rdvPro?: boolean | User$rdvProArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    telephone?: boolean
    role?: boolean
    avatar?: boolean
    dateInscription?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    telephone?: boolean
    role?: boolean
    avatar?: boolean
    dateInscription?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    telephone?: boolean
    role?: boolean
    avatar?: boolean
    dateInscription?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "email" | "password" | "telephone" | "role" | "avatar" | "dateInscription", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonces?: boolean | User$annoncesArgs<ExtArgs>
    candidatures?: boolean | User$candidaturesArgs<ExtArgs>
    rendezVous?: boolean | User$rendezVousArgs<ExtArgs>
    contactsUrgence?: boolean | User$contactsUrgenceArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    groupes?: boolean | User$groupesArgs<ExtArgs>
    rdvPro?: boolean | User$rdvProArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      annonces: Prisma.$AnnoncePayload<ExtArgs>[]
      candidatures: Prisma.$CandidaturePayload<ExtArgs>[]
      rendezVous: Prisma.$RdvPayload<ExtArgs>[]
      contactsUrgence: Prisma.$ContactUrgencePayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      groupes: Prisma.$GroupePayload<ExtArgs>[]
      rdvPro: Prisma.$RdvPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      prenom: string
      email: string
      password: string
      telephone: string | null
      role: $Enums.Role
      avatar: string | null
      dateInscription: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    annonces<T extends User$annoncesArgs<ExtArgs> = {}>(args?: Subset<T, User$annoncesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    candidatures<T extends User$candidaturesArgs<ExtArgs> = {}>(args?: Subset<T, User$candidaturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rendezVous<T extends User$rendezVousArgs<ExtArgs> = {}>(args?: Subset<T, User$rendezVousArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RdvPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contactsUrgence<T extends User$contactsUrgenceArgs<ExtArgs> = {}>(args?: Subset<T, User$contactsUrgenceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupes<T extends User$groupesArgs<ExtArgs> = {}>(args?: Subset<T, User$groupesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rdvPro<T extends User$rdvProArgs<ExtArgs> = {}>(args?: Subset<T, User$rdvProArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RdvPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nom: FieldRef<"User", 'String'>
    readonly prenom: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly telephone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly dateInscription: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.annonces
   */
  export type User$annoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    where?: AnnonceWhereInput
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    cursor?: AnnonceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * User.candidatures
   */
  export type User$candidaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    where?: CandidatureWhereInput
    orderBy?: CandidatureOrderByWithRelationInput | CandidatureOrderByWithRelationInput[]
    cursor?: CandidatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidatureScalarFieldEnum | CandidatureScalarFieldEnum[]
  }

  /**
   * User.rendezVous
   */
  export type User$rendezVousArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rdv
     */
    select?: RdvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rdv
     */
    omit?: RdvOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RdvInclude<ExtArgs> | null
    where?: RdvWhereInput
    orderBy?: RdvOrderByWithRelationInput | RdvOrderByWithRelationInput[]
    cursor?: RdvWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RdvScalarFieldEnum | RdvScalarFieldEnum[]
  }

  /**
   * User.contactsUrgence
   */
  export type User$contactsUrgenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUrgence
     */
    select?: ContactUrgenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUrgence
     */
    omit?: ContactUrgenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactUrgenceInclude<ExtArgs> | null
    where?: ContactUrgenceWhereInput
    orderBy?: ContactUrgenceOrderByWithRelationInput | ContactUrgenceOrderByWithRelationInput[]
    cursor?: ContactUrgenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactUrgenceScalarFieldEnum | ContactUrgenceScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.groupes
   */
  export type User$groupesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    where?: GroupeWhereInput
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    cursor?: GroupeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupeScalarFieldEnum | GroupeScalarFieldEnum[]
  }

  /**
   * User.rdvPro
   */
  export type User$rdvProArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rdv
     */
    select?: RdvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rdv
     */
    omit?: RdvOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RdvInclude<ExtArgs> | null
    where?: RdvWhereInput
    orderBy?: RdvOrderByWithRelationInput | RdvOrderByWithRelationInput[]
    cursor?: RdvWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RdvScalarFieldEnum | RdvScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Annonce
   */

  export type AggregateAnnonce = {
    _count: AnnonceCountAggregateOutputType | null
    _avg: AnnonceAvgAggregateOutputType | null
    _sum: AnnonceSumAggregateOutputType | null
    _min: AnnonceMinAggregateOutputType | null
    _max: AnnonceMaxAggregateOutputType | null
  }

  export type AnnonceAvgAggregateOutputType = {
    vues: number | null
  }

  export type AnnonceSumAggregateOutputType = {
    vues: number | null
  }

  export type AnnonceMinAggregateOutputType = {
    id: string | null
    titre: string | null
    type: $Enums.AnnonceType | null
    description: string | null
    contenu: string | null
    organisation: string | null
    organisationId: string | null
    lieu: string | null
    date: Date | null
    dateFin: Date | null
    deadline: Date | null
    image: string | null
    categories: string | null
    status: $Enums.AnnonceStatus | null
    vues: number | null
    auteurId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnonceMaxAggregateOutputType = {
    id: string | null
    titre: string | null
    type: $Enums.AnnonceType | null
    description: string | null
    contenu: string | null
    organisation: string | null
    organisationId: string | null
    lieu: string | null
    date: Date | null
    dateFin: Date | null
    deadline: Date | null
    image: string | null
    categories: string | null
    status: $Enums.AnnonceStatus | null
    vues: number | null
    auteurId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnonceCountAggregateOutputType = {
    id: number
    titre: number
    type: number
    description: number
    contenu: number
    organisation: number
    organisationId: number
    lieu: number
    date: number
    dateFin: number
    deadline: number
    image: number
    categories: number
    status: number
    vues: number
    details: number
    auteurId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnnonceAvgAggregateInputType = {
    vues?: true
  }

  export type AnnonceSumAggregateInputType = {
    vues?: true
  }

  export type AnnonceMinAggregateInputType = {
    id?: true
    titre?: true
    type?: true
    description?: true
    contenu?: true
    organisation?: true
    organisationId?: true
    lieu?: true
    date?: true
    dateFin?: true
    deadline?: true
    image?: true
    categories?: true
    status?: true
    vues?: true
    auteurId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnonceMaxAggregateInputType = {
    id?: true
    titre?: true
    type?: true
    description?: true
    contenu?: true
    organisation?: true
    organisationId?: true
    lieu?: true
    date?: true
    dateFin?: true
    deadline?: true
    image?: true
    categories?: true
    status?: true
    vues?: true
    auteurId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnonceCountAggregateInputType = {
    id?: true
    titre?: true
    type?: true
    description?: true
    contenu?: true
    organisation?: true
    organisationId?: true
    lieu?: true
    date?: true
    dateFin?: true
    deadline?: true
    image?: true
    categories?: true
    status?: true
    vues?: true
    details?: true
    auteurId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnnonceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annonce to aggregate.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Annonces
    **/
    _count?: true | AnnonceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnonceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnonceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnonceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnonceMaxAggregateInputType
  }

  export type GetAnnonceAggregateType<T extends AnnonceAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnonce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnonce[P]>
      : GetScalarType<T[P], AggregateAnnonce[P]>
  }




  export type AnnonceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnonceWhereInput
    orderBy?: AnnonceOrderByWithAggregationInput | AnnonceOrderByWithAggregationInput[]
    by: AnnonceScalarFieldEnum[] | AnnonceScalarFieldEnum
    having?: AnnonceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnonceCountAggregateInputType | true
    _avg?: AnnonceAvgAggregateInputType
    _sum?: AnnonceSumAggregateInputType
    _min?: AnnonceMinAggregateInputType
    _max?: AnnonceMaxAggregateInputType
  }

  export type AnnonceGroupByOutputType = {
    id: string
    titre: string
    type: $Enums.AnnonceType
    description: string
    contenu: string | null
    organisation: string
    organisationId: string | null
    lieu: string
    date: Date
    dateFin: Date | null
    deadline: Date | null
    image: string | null
    categories: string
    status: $Enums.AnnonceStatus
    vues: number
    details: JsonValue | null
    auteurId: string
    createdAt: Date
    updatedAt: Date
    _count: AnnonceCountAggregateOutputType | null
    _avg: AnnonceAvgAggregateOutputType | null
    _sum: AnnonceSumAggregateOutputType | null
    _min: AnnonceMinAggregateOutputType | null
    _max: AnnonceMaxAggregateOutputType | null
  }

  type GetAnnonceGroupByPayload<T extends AnnonceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnonceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnonceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnonceGroupByOutputType[P]>
            : GetScalarType<T[P], AnnonceGroupByOutputType[P]>
        }
      >
    >


  export type AnnonceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    type?: boolean
    description?: boolean
    contenu?: boolean
    organisation?: boolean
    organisationId?: boolean
    lieu?: boolean
    date?: boolean
    dateFin?: boolean
    deadline?: boolean
    image?: boolean
    categories?: boolean
    status?: boolean
    vues?: boolean
    details?: boolean
    auteurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auteur?: boolean | UserDefaultArgs<ExtArgs>
    candidatures?: boolean | Annonce$candidaturesArgs<ExtArgs>
    _count?: boolean | AnnonceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annonce"]>

  export type AnnonceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    type?: boolean
    description?: boolean
    contenu?: boolean
    organisation?: boolean
    organisationId?: boolean
    lieu?: boolean
    date?: boolean
    dateFin?: boolean
    deadline?: boolean
    image?: boolean
    categories?: boolean
    status?: boolean
    vues?: boolean
    details?: boolean
    auteurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auteur?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annonce"]>

  export type AnnonceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    type?: boolean
    description?: boolean
    contenu?: boolean
    organisation?: boolean
    organisationId?: boolean
    lieu?: boolean
    date?: boolean
    dateFin?: boolean
    deadline?: boolean
    image?: boolean
    categories?: boolean
    status?: boolean
    vues?: boolean
    details?: boolean
    auteurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auteur?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annonce"]>

  export type AnnonceSelectScalar = {
    id?: boolean
    titre?: boolean
    type?: boolean
    description?: boolean
    contenu?: boolean
    organisation?: boolean
    organisationId?: boolean
    lieu?: boolean
    date?: boolean
    dateFin?: boolean
    deadline?: boolean
    image?: boolean
    categories?: boolean
    status?: boolean
    vues?: boolean
    details?: boolean
    auteurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnnonceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "type" | "description" | "contenu" | "organisation" | "organisationId" | "lieu" | "date" | "dateFin" | "deadline" | "image" | "categories" | "status" | "vues" | "details" | "auteurId" | "createdAt" | "updatedAt", ExtArgs["result"]["annonce"]>
  export type AnnonceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | UserDefaultArgs<ExtArgs>
    candidatures?: boolean | Annonce$candidaturesArgs<ExtArgs>
    _count?: boolean | AnnonceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnnonceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnnonceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnnoncePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Annonce"
    objects: {
      auteur: Prisma.$UserPayload<ExtArgs>
      candidatures: Prisma.$CandidaturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titre: string
      type: $Enums.AnnonceType
      description: string
      contenu: string | null
      organisation: string
      organisationId: string | null
      lieu: string
      date: Date
      dateFin: Date | null
      deadline: Date | null
      image: string | null
      categories: string
      status: $Enums.AnnonceStatus
      vues: number
      details: Prisma.JsonValue | null
      auteurId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["annonce"]>
    composites: {}
  }

  type AnnonceGetPayload<S extends boolean | null | undefined | AnnonceDefaultArgs> = $Result.GetResult<Prisma.$AnnoncePayload, S>

  type AnnonceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnonceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnonceCountAggregateInputType | true
    }

  export interface AnnonceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Annonce'], meta: { name: 'Annonce' } }
    /**
     * Find zero or one Annonce that matches the filter.
     * @param {AnnonceFindUniqueArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnonceFindUniqueArgs>(args: SelectSubset<T, AnnonceFindUniqueArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Annonce that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnonceFindUniqueOrThrowArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnonceFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnonceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Annonce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindFirstArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnonceFindFirstArgs>(args?: SelectSubset<T, AnnonceFindFirstArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Annonce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindFirstOrThrowArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnonceFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnonceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Annonces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Annonces
     * const annonces = await prisma.annonce.findMany()
     * 
     * // Get first 10 Annonces
     * const annonces = await prisma.annonce.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const annonceWithIdOnly = await prisma.annonce.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnonceFindManyArgs>(args?: SelectSubset<T, AnnonceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Annonce.
     * @param {AnnonceCreateArgs} args - Arguments to create a Annonce.
     * @example
     * // Create one Annonce
     * const Annonce = await prisma.annonce.create({
     *   data: {
     *     // ... data to create a Annonce
     *   }
     * })
     * 
     */
    create<T extends AnnonceCreateArgs>(args: SelectSubset<T, AnnonceCreateArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Annonces.
     * @param {AnnonceCreateManyArgs} args - Arguments to create many Annonces.
     * @example
     * // Create many Annonces
     * const annonce = await prisma.annonce.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnonceCreateManyArgs>(args?: SelectSubset<T, AnnonceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Annonces and returns the data saved in the database.
     * @param {AnnonceCreateManyAndReturnArgs} args - Arguments to create many Annonces.
     * @example
     * // Create many Annonces
     * const annonce = await prisma.annonce.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Annonces and only return the `id`
     * const annonceWithIdOnly = await prisma.annonce.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnonceCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnonceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Annonce.
     * @param {AnnonceDeleteArgs} args - Arguments to delete one Annonce.
     * @example
     * // Delete one Annonce
     * const Annonce = await prisma.annonce.delete({
     *   where: {
     *     // ... filter to delete one Annonce
     *   }
     * })
     * 
     */
    delete<T extends AnnonceDeleteArgs>(args: SelectSubset<T, AnnonceDeleteArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Annonce.
     * @param {AnnonceUpdateArgs} args - Arguments to update one Annonce.
     * @example
     * // Update one Annonce
     * const annonce = await prisma.annonce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnonceUpdateArgs>(args: SelectSubset<T, AnnonceUpdateArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Annonces.
     * @param {AnnonceDeleteManyArgs} args - Arguments to filter Annonces to delete.
     * @example
     * // Delete a few Annonces
     * const { count } = await prisma.annonce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnonceDeleteManyArgs>(args?: SelectSubset<T, AnnonceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Annonces
     * const annonce = await prisma.annonce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnonceUpdateManyArgs>(args: SelectSubset<T, AnnonceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annonces and returns the data updated in the database.
     * @param {AnnonceUpdateManyAndReturnArgs} args - Arguments to update many Annonces.
     * @example
     * // Update many Annonces
     * const annonce = await prisma.annonce.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Annonces and only return the `id`
     * const annonceWithIdOnly = await prisma.annonce.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnnonceUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnonceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Annonce.
     * @param {AnnonceUpsertArgs} args - Arguments to update or create a Annonce.
     * @example
     * // Update or create a Annonce
     * const annonce = await prisma.annonce.upsert({
     *   create: {
     *     // ... data to create a Annonce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Annonce we want to update
     *   }
     * })
     */
    upsert<T extends AnnonceUpsertArgs>(args: SelectSubset<T, AnnonceUpsertArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Annonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceCountArgs} args - Arguments to filter Annonces to count.
     * @example
     * // Count the number of Annonces
     * const count = await prisma.annonce.count({
     *   where: {
     *     // ... the filter for the Annonces we want to count
     *   }
     * })
    **/
    count<T extends AnnonceCountArgs>(
      args?: Subset<T, AnnonceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnonceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Annonce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnonceAggregateArgs>(args: Subset<T, AnnonceAggregateArgs>): Prisma.PrismaPromise<GetAnnonceAggregateType<T>>

    /**
     * Group by Annonce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceGroupByArgs} args - Group by arguments.
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
      T extends AnnonceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnonceGroupByArgs['orderBy'] }
        : { orderBy?: AnnonceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnonceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnonceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Annonce model
   */
  readonly fields: AnnonceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Annonce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnonceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auteur<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidatures<T extends Annonce$candidaturesArgs<ExtArgs> = {}>(args?: Subset<T, Annonce$candidaturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Annonce model
   */
  interface AnnonceFieldRefs {
    readonly id: FieldRef<"Annonce", 'String'>
    readonly titre: FieldRef<"Annonce", 'String'>
    readonly type: FieldRef<"Annonce", 'AnnonceType'>
    readonly description: FieldRef<"Annonce", 'String'>
    readonly contenu: FieldRef<"Annonce", 'String'>
    readonly organisation: FieldRef<"Annonce", 'String'>
    readonly organisationId: FieldRef<"Annonce", 'String'>
    readonly lieu: FieldRef<"Annonce", 'String'>
    readonly date: FieldRef<"Annonce", 'DateTime'>
    readonly dateFin: FieldRef<"Annonce", 'DateTime'>
    readonly deadline: FieldRef<"Annonce", 'DateTime'>
    readonly image: FieldRef<"Annonce", 'String'>
    readonly categories: FieldRef<"Annonce", 'String'>
    readonly status: FieldRef<"Annonce", 'AnnonceStatus'>
    readonly vues: FieldRef<"Annonce", 'Int'>
    readonly details: FieldRef<"Annonce", 'Json'>
    readonly auteurId: FieldRef<"Annonce", 'String'>
    readonly createdAt: FieldRef<"Annonce", 'DateTime'>
    readonly updatedAt: FieldRef<"Annonce", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Annonce findUnique
   */
  export type AnnonceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where: AnnonceWhereUniqueInput
  }

  /**
   * Annonce findUniqueOrThrow
   */
  export type AnnonceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where: AnnonceWhereUniqueInput
  }

  /**
   * Annonce findFirst
   */
  export type AnnonceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annonces.
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annonces.
     */
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * Annonce findFirstOrThrow
   */
  export type AnnonceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annonces.
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annonces.
     */
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * Annonce findMany
   */
  export type AnnonceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonces to fetch.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Annonces.
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }

  /**
   * Annonce create
   */
  export type AnnonceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * The data needed to create a Annonce.
     */
    data: XOR<AnnonceCreateInput, AnnonceUncheckedCreateInput>
  }

  /**
   * Annonce createMany
   */
  export type AnnonceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Annonces.
     */
    data: AnnonceCreateManyInput | AnnonceCreateManyInput[]
  }

  /**
   * Annonce createManyAndReturn
   */
  export type AnnonceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * The data used to create many Annonces.
     */
    data: AnnonceCreateManyInput | AnnonceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Annonce update
   */
  export type AnnonceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * The data needed to update a Annonce.
     */
    data: XOR<AnnonceUpdateInput, AnnonceUncheckedUpdateInput>
    /**
     * Choose, which Annonce to update.
     */
    where: AnnonceWhereUniqueInput
  }

  /**
   * Annonce updateMany
   */
  export type AnnonceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Annonces.
     */
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyInput>
    /**
     * Filter which Annonces to update
     */
    where?: AnnonceWhereInput
    /**
     * Limit how many Annonces to update.
     */
    limit?: number
  }

  /**
   * Annonce updateManyAndReturn
   */
  export type AnnonceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * The data used to update Annonces.
     */
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyInput>
    /**
     * Filter which Annonces to update
     */
    where?: AnnonceWhereInput
    /**
     * Limit how many Annonces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Annonce upsert
   */
  export type AnnonceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * The filter to search for the Annonce to update in case it exists.
     */
    where: AnnonceWhereUniqueInput
    /**
     * In case the Annonce found by the `where` argument doesn't exist, create a new Annonce with this data.
     */
    create: XOR<AnnonceCreateInput, AnnonceUncheckedCreateInput>
    /**
     * In case the Annonce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnonceUpdateInput, AnnonceUncheckedUpdateInput>
  }

  /**
   * Annonce delete
   */
  export type AnnonceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter which Annonce to delete.
     */
    where: AnnonceWhereUniqueInput
  }

  /**
   * Annonce deleteMany
   */
  export type AnnonceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annonces to delete
     */
    where?: AnnonceWhereInput
    /**
     * Limit how many Annonces to delete.
     */
    limit?: number
  }

  /**
   * Annonce.candidatures
   */
  export type Annonce$candidaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    where?: CandidatureWhereInput
    orderBy?: CandidatureOrderByWithRelationInput | CandidatureOrderByWithRelationInput[]
    cursor?: CandidatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidatureScalarFieldEnum | CandidatureScalarFieldEnum[]
  }

  /**
   * Annonce without action
   */
  export type AnnonceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonce
     */
    omit?: AnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceInclude<ExtArgs> | null
  }


  /**
   * Model Candidature
   */

  export type AggregateCandidature = {
    _count: CandidatureCountAggregateOutputType | null
    _min: CandidatureMinAggregateOutputType | null
    _max: CandidatureMaxAggregateOutputType | null
  }

  export type CandidatureMinAggregateOutputType = {
    id: string | null
    annonceId: string | null
    candidatId: string | null
    message: string | null
    cv: string | null
    status: $Enums.CandidatureStatus | null
    createdAt: Date | null
  }

  export type CandidatureMaxAggregateOutputType = {
    id: string | null
    annonceId: string | null
    candidatId: string | null
    message: string | null
    cv: string | null
    status: $Enums.CandidatureStatus | null
    createdAt: Date | null
  }

  export type CandidatureCountAggregateOutputType = {
    id: number
    annonceId: number
    candidatId: number
    message: number
    cv: number
    status: number
    createdAt: number
    _all: number
  }


  export type CandidatureMinAggregateInputType = {
    id?: true
    annonceId?: true
    candidatId?: true
    message?: true
    cv?: true
    status?: true
    createdAt?: true
  }

  export type CandidatureMaxAggregateInputType = {
    id?: true
    annonceId?: true
    candidatId?: true
    message?: true
    cv?: true
    status?: true
    createdAt?: true
  }

  export type CandidatureCountAggregateInputType = {
    id?: true
    annonceId?: true
    candidatId?: true
    message?: true
    cv?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type CandidatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidature to aggregate.
     */
    where?: CandidatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidatures to fetch.
     */
    orderBy?: CandidatureOrderByWithRelationInput | CandidatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidatures
    **/
    _count?: true | CandidatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidatureMaxAggregateInputType
  }

  export type GetCandidatureAggregateType<T extends CandidatureAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidature[P]>
      : GetScalarType<T[P], AggregateCandidature[P]>
  }




  export type CandidatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidatureWhereInput
    orderBy?: CandidatureOrderByWithAggregationInput | CandidatureOrderByWithAggregationInput[]
    by: CandidatureScalarFieldEnum[] | CandidatureScalarFieldEnum
    having?: CandidatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidatureCountAggregateInputType | true
    _min?: CandidatureMinAggregateInputType
    _max?: CandidatureMaxAggregateInputType
  }

  export type CandidatureGroupByOutputType = {
    id: string
    annonceId: string
    candidatId: string
    message: string | null
    cv: string | null
    status: $Enums.CandidatureStatus
    createdAt: Date
    _count: CandidatureCountAggregateOutputType | null
    _min: CandidatureMinAggregateOutputType | null
    _max: CandidatureMaxAggregateOutputType | null
  }

  type GetCandidatureGroupByPayload<T extends CandidatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidatureGroupByOutputType[P]>
            : GetScalarType<T[P], CandidatureGroupByOutputType[P]>
        }
      >
    >


  export type CandidatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    annonceId?: boolean
    candidatId?: boolean
    message?: boolean
    cv?: boolean
    status?: boolean
    createdAt?: boolean
    annonce?: boolean | AnnonceDefaultArgs<ExtArgs>
    candidat?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidature"]>

  export type CandidatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    annonceId?: boolean
    candidatId?: boolean
    message?: boolean
    cv?: boolean
    status?: boolean
    createdAt?: boolean
    annonce?: boolean | AnnonceDefaultArgs<ExtArgs>
    candidat?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidature"]>

  export type CandidatureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    annonceId?: boolean
    candidatId?: boolean
    message?: boolean
    cv?: boolean
    status?: boolean
    createdAt?: boolean
    annonce?: boolean | AnnonceDefaultArgs<ExtArgs>
    candidat?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidature"]>

  export type CandidatureSelectScalar = {
    id?: boolean
    annonceId?: boolean
    candidatId?: boolean
    message?: boolean
    cv?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type CandidatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "annonceId" | "candidatId" | "message" | "cv" | "status" | "createdAt", ExtArgs["result"]["candidature"]>
  export type CandidatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonce?: boolean | AnnonceDefaultArgs<ExtArgs>
    candidat?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CandidatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonce?: boolean | AnnonceDefaultArgs<ExtArgs>
    candidat?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CandidatureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonce?: boolean | AnnonceDefaultArgs<ExtArgs>
    candidat?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CandidaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidature"
    objects: {
      annonce: Prisma.$AnnoncePayload<ExtArgs>
      candidat: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      annonceId: string
      candidatId: string
      message: string | null
      cv: string | null
      status: $Enums.CandidatureStatus
      createdAt: Date
    }, ExtArgs["result"]["candidature"]>
    composites: {}
  }

  type CandidatureGetPayload<S extends boolean | null | undefined | CandidatureDefaultArgs> = $Result.GetResult<Prisma.$CandidaturePayload, S>

  type CandidatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidatureCountAggregateInputType | true
    }

  export interface CandidatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidature'], meta: { name: 'Candidature' } }
    /**
     * Find zero or one Candidature that matches the filter.
     * @param {CandidatureFindUniqueArgs} args - Arguments to find a Candidature
     * @example
     * // Get one Candidature
     * const candidature = await prisma.candidature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidatureFindUniqueArgs>(args: SelectSubset<T, CandidatureFindUniqueArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidatureFindUniqueOrThrowArgs} args - Arguments to find a Candidature
     * @example
     * // Get one Candidature
     * const candidature = await prisma.candidature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidatureFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatureFindFirstArgs} args - Arguments to find a Candidature
     * @example
     * // Get one Candidature
     * const candidature = await prisma.candidature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidatureFindFirstArgs>(args?: SelectSubset<T, CandidatureFindFirstArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatureFindFirstOrThrowArgs} args - Arguments to find a Candidature
     * @example
     * // Get one Candidature
     * const candidature = await prisma.candidature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidatureFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidatures
     * const candidatures = await prisma.candidature.findMany()
     * 
     * // Get first 10 Candidatures
     * const candidatures = await prisma.candidature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidatureWithIdOnly = await prisma.candidature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidatureFindManyArgs>(args?: SelectSubset<T, CandidatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidature.
     * @param {CandidatureCreateArgs} args - Arguments to create a Candidature.
     * @example
     * // Create one Candidature
     * const Candidature = await prisma.candidature.create({
     *   data: {
     *     // ... data to create a Candidature
     *   }
     * })
     * 
     */
    create<T extends CandidatureCreateArgs>(args: SelectSubset<T, CandidatureCreateArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidatures.
     * @param {CandidatureCreateManyArgs} args - Arguments to create many Candidatures.
     * @example
     * // Create many Candidatures
     * const candidature = await prisma.candidature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidatureCreateManyArgs>(args?: SelectSubset<T, CandidatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidatures and returns the data saved in the database.
     * @param {CandidatureCreateManyAndReturnArgs} args - Arguments to create many Candidatures.
     * @example
     * // Create many Candidatures
     * const candidature = await prisma.candidature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidatures and only return the `id`
     * const candidatureWithIdOnly = await prisma.candidature.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidatureCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidature.
     * @param {CandidatureDeleteArgs} args - Arguments to delete one Candidature.
     * @example
     * // Delete one Candidature
     * const Candidature = await prisma.candidature.delete({
     *   where: {
     *     // ... filter to delete one Candidature
     *   }
     * })
     * 
     */
    delete<T extends CandidatureDeleteArgs>(args: SelectSubset<T, CandidatureDeleteArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidature.
     * @param {CandidatureUpdateArgs} args - Arguments to update one Candidature.
     * @example
     * // Update one Candidature
     * const candidature = await prisma.candidature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidatureUpdateArgs>(args: SelectSubset<T, CandidatureUpdateArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidatures.
     * @param {CandidatureDeleteManyArgs} args - Arguments to filter Candidatures to delete.
     * @example
     * // Delete a few Candidatures
     * const { count } = await prisma.candidature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidatureDeleteManyArgs>(args?: SelectSubset<T, CandidatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidatures
     * const candidature = await prisma.candidature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidatureUpdateManyArgs>(args: SelectSubset<T, CandidatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidatures and returns the data updated in the database.
     * @param {CandidatureUpdateManyAndReturnArgs} args - Arguments to update many Candidatures.
     * @example
     * // Update many Candidatures
     * const candidature = await prisma.candidature.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidatures and only return the `id`
     * const candidatureWithIdOnly = await prisma.candidature.updateManyAndReturn({
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
    updateManyAndReturn<T extends CandidatureUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidature.
     * @param {CandidatureUpsertArgs} args - Arguments to update or create a Candidature.
     * @example
     * // Update or create a Candidature
     * const candidature = await prisma.candidature.upsert({
     *   create: {
     *     // ... data to create a Candidature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidature we want to update
     *   }
     * })
     */
    upsert<T extends CandidatureUpsertArgs>(args: SelectSubset<T, CandidatureUpsertArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatureCountArgs} args - Arguments to filter Candidatures to count.
     * @example
     * // Count the number of Candidatures
     * const count = await prisma.candidature.count({
     *   where: {
     *     // ... the filter for the Candidatures we want to count
     *   }
     * })
    **/
    count<T extends CandidatureCountArgs>(
      args?: Subset<T, CandidatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CandidatureAggregateArgs>(args: Subset<T, CandidatureAggregateArgs>): Prisma.PrismaPromise<GetCandidatureAggregateType<T>>

    /**
     * Group by Candidature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatureGroupByArgs} args - Group by arguments.
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
      T extends CandidatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidatureGroupByArgs['orderBy'] }
        : { orderBy?: CandidatureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CandidatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidature model
   */
  readonly fields: CandidatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    annonce<T extends AnnonceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnonceDefaultArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidat<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Candidature model
   */
  interface CandidatureFieldRefs {
    readonly id: FieldRef<"Candidature", 'String'>
    readonly annonceId: FieldRef<"Candidature", 'String'>
    readonly candidatId: FieldRef<"Candidature", 'String'>
    readonly message: FieldRef<"Candidature", 'String'>
    readonly cv: FieldRef<"Candidature", 'String'>
    readonly status: FieldRef<"Candidature", 'CandidatureStatus'>
    readonly createdAt: FieldRef<"Candidature", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Candidature findUnique
   */
  export type CandidatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * Filter, which Candidature to fetch.
     */
    where: CandidatureWhereUniqueInput
  }

  /**
   * Candidature findUniqueOrThrow
   */
  export type CandidatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * Filter, which Candidature to fetch.
     */
    where: CandidatureWhereUniqueInput
  }

  /**
   * Candidature findFirst
   */
  export type CandidatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * Filter, which Candidature to fetch.
     */
    where?: CandidatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidatures to fetch.
     */
    orderBy?: CandidatureOrderByWithRelationInput | CandidatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidatures.
     */
    cursor?: CandidatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidatures.
     */
    distinct?: CandidatureScalarFieldEnum | CandidatureScalarFieldEnum[]
  }

  /**
   * Candidature findFirstOrThrow
   */
  export type CandidatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * Filter, which Candidature to fetch.
     */
    where?: CandidatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidatures to fetch.
     */
    orderBy?: CandidatureOrderByWithRelationInput | CandidatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidatures.
     */
    cursor?: CandidatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidatures.
     */
    distinct?: CandidatureScalarFieldEnum | CandidatureScalarFieldEnum[]
  }

  /**
   * Candidature findMany
   */
  export type CandidatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * Filter, which Candidatures to fetch.
     */
    where?: CandidatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidatures to fetch.
     */
    orderBy?: CandidatureOrderByWithRelationInput | CandidatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidatures.
     */
    cursor?: CandidatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidatures.
     */
    skip?: number
    distinct?: CandidatureScalarFieldEnum | CandidatureScalarFieldEnum[]
  }

  /**
   * Candidature create
   */
  export type CandidatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidature.
     */
    data: XOR<CandidatureCreateInput, CandidatureUncheckedCreateInput>
  }

  /**
   * Candidature createMany
   */
  export type CandidatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidatures.
     */
    data: CandidatureCreateManyInput | CandidatureCreateManyInput[]
  }

  /**
   * Candidature createManyAndReturn
   */
  export type CandidatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * The data used to create many Candidatures.
     */
    data: CandidatureCreateManyInput | CandidatureCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidature update
   */
  export type CandidatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidature.
     */
    data: XOR<CandidatureUpdateInput, CandidatureUncheckedUpdateInput>
    /**
     * Choose, which Candidature to update.
     */
    where: CandidatureWhereUniqueInput
  }

  /**
   * Candidature updateMany
   */
  export type CandidatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidatures.
     */
    data: XOR<CandidatureUpdateManyMutationInput, CandidatureUncheckedUpdateManyInput>
    /**
     * Filter which Candidatures to update
     */
    where?: CandidatureWhereInput
    /**
     * Limit how many Candidatures to update.
     */
    limit?: number
  }

  /**
   * Candidature updateManyAndReturn
   */
  export type CandidatureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * The data used to update Candidatures.
     */
    data: XOR<CandidatureUpdateManyMutationInput, CandidatureUncheckedUpdateManyInput>
    /**
     * Filter which Candidatures to update
     */
    where?: CandidatureWhereInput
    /**
     * Limit how many Candidatures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Candidature upsert
   */
  export type CandidatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidature to update in case it exists.
     */
    where: CandidatureWhereUniqueInput
    /**
     * In case the Candidature found by the `where` argument doesn't exist, create a new Candidature with this data.
     */
    create: XOR<CandidatureCreateInput, CandidatureUncheckedCreateInput>
    /**
     * In case the Candidature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidatureUpdateInput, CandidatureUncheckedUpdateInput>
  }

  /**
   * Candidature delete
   */
  export type CandidatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * Filter which Candidature to delete.
     */
    where: CandidatureWhereUniqueInput
  }

  /**
   * Candidature deleteMany
   */
  export type CandidatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidatures to delete
     */
    where?: CandidatureWhereInput
    /**
     * Limit how many Candidatures to delete.
     */
    limit?: number
  }

  /**
   * Candidature without action
   */
  export type CandidatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
  }


  /**
   * Model Rdv
   */

  export type AggregateRdv = {
    _count: RdvCountAggregateOutputType | null
    _min: RdvMinAggregateOutputType | null
    _max: RdvMaxAggregateOutputType | null
  }

  export type RdvMinAggregateOutputType = {
    id: string | null
    type: string | null
    professionnelId: string | null
    date: Date | null
    heure: string | null
    motif: string | null
    status: $Enums.RdvStatus | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RdvMaxAggregateOutputType = {
    id: string | null
    type: string | null
    professionnelId: string | null
    date: Date | null
    heure: string | null
    motif: string | null
    status: $Enums.RdvStatus | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RdvCountAggregateOutputType = {
    id: number
    type: number
    professionnelId: number
    date: number
    heure: number
    motif: number
    status: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RdvMinAggregateInputType = {
    id?: true
    type?: true
    professionnelId?: true
    date?: true
    heure?: true
    motif?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RdvMaxAggregateInputType = {
    id?: true
    type?: true
    professionnelId?: true
    date?: true
    heure?: true
    motif?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RdvCountAggregateInputType = {
    id?: true
    type?: true
    professionnelId?: true
    date?: true
    heure?: true
    motif?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RdvAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rdv to aggregate.
     */
    where?: RdvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rdvs to fetch.
     */
    orderBy?: RdvOrderByWithRelationInput | RdvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RdvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rdvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rdvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rdvs
    **/
    _count?: true | RdvCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RdvMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RdvMaxAggregateInputType
  }

  export type GetRdvAggregateType<T extends RdvAggregateArgs> = {
        [P in keyof T & keyof AggregateRdv]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRdv[P]>
      : GetScalarType<T[P], AggregateRdv[P]>
  }




  export type RdvGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RdvWhereInput
    orderBy?: RdvOrderByWithAggregationInput | RdvOrderByWithAggregationInput[]
    by: RdvScalarFieldEnum[] | RdvScalarFieldEnum
    having?: RdvScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RdvCountAggregateInputType | true
    _min?: RdvMinAggregateInputType
    _max?: RdvMaxAggregateInputType
  }

  export type RdvGroupByOutputType = {
    id: string
    type: string
    professionnelId: string | null
    date: Date
    heure: string
    motif: string
    status: $Enums.RdvStatus
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: RdvCountAggregateOutputType | null
    _min: RdvMinAggregateOutputType | null
    _max: RdvMaxAggregateOutputType | null
  }

  type GetRdvGroupByPayload<T extends RdvGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RdvGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RdvGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RdvGroupByOutputType[P]>
            : GetScalarType<T[P], RdvGroupByOutputType[P]>
        }
      >
    >


  export type RdvSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    professionnelId?: boolean
    date?: boolean
    heure?: boolean
    motif?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professionnel?: boolean | Rdv$professionnelArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rdv"]>

  export type RdvSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    professionnelId?: boolean
    date?: boolean
    heure?: boolean
    motif?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professionnel?: boolean | Rdv$professionnelArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rdv"]>

  export type RdvSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    professionnelId?: boolean
    date?: boolean
    heure?: boolean
    motif?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professionnel?: boolean | Rdv$professionnelArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rdv"]>

  export type RdvSelectScalar = {
    id?: boolean
    type?: boolean
    professionnelId?: boolean
    date?: boolean
    heure?: boolean
    motif?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RdvOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "professionnelId" | "date" | "heure" | "motif" | "status" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["rdv"]>
  export type RdvInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionnel?: boolean | Rdv$professionnelArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RdvIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionnel?: boolean | Rdv$professionnelArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RdvIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professionnel?: boolean | Rdv$professionnelArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RdvPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rdv"
    objects: {
      professionnel: Prisma.$UserPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      professionnelId: string | null
      date: Date
      heure: string
      motif: string
      status: $Enums.RdvStatus
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rdv"]>
    composites: {}
  }

  type RdvGetPayload<S extends boolean | null | undefined | RdvDefaultArgs> = $Result.GetResult<Prisma.$RdvPayload, S>

  type RdvCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RdvFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RdvCountAggregateInputType | true
    }

  export interface RdvDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rdv'], meta: { name: 'Rdv' } }
    /**
     * Find zero or one Rdv that matches the filter.
     * @param {RdvFindUniqueArgs} args - Arguments to find a Rdv
     * @example
     * // Get one Rdv
     * const rdv = await prisma.rdv.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RdvFindUniqueArgs>(args: SelectSubset<T, RdvFindUniqueArgs<ExtArgs>>): Prisma__RdvClient<$Result.GetResult<Prisma.$RdvPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rdv that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RdvFindUniqueOrThrowArgs} args - Arguments to find a Rdv
     * @example
     * // Get one Rdv
     * const rdv = await prisma.rdv.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RdvFindUniqueOrThrowArgs>(args: SelectSubset<T, RdvFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RdvClient<$Result.GetResult<Prisma.$RdvPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rdv that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RdvFindFirstArgs} args - Arguments to find a Rdv
     * @example
     * // Get one Rdv
     * const rdv = await prisma.rdv.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RdvFindFirstArgs>(args?: SelectSubset<T, RdvFindFirstArgs<ExtArgs>>): Prisma__RdvClient<$Result.GetResult<Prisma.$RdvPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rdv that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RdvFindFirstOrThrowArgs} args - Arguments to find a Rdv
     * @example
     * // Get one Rdv
     * const rdv = await prisma.rdv.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RdvFindFirstOrThrowArgs>(args?: SelectSubset<T, RdvFindFirstOrThrowArgs<ExtArgs>>): Prisma__RdvClient<$Result.GetResult<Prisma.$RdvPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rdvs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RdvFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rdvs
     * const rdvs = await prisma.rdv.findMany()
     * 
     * // Get first 10 Rdvs
     * const rdvs = await prisma.rdv.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rdvWithIdOnly = await prisma.rdv.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RdvFindManyArgs>(args?: SelectSubset<T, RdvFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RdvPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rdv.
     * @param {RdvCreateArgs} args - Arguments to create a Rdv.
     * @example
     * // Create one Rdv
     * const Rdv = await prisma.rdv.create({
     *   data: {
     *     // ... data to create a Rdv
     *   }
     * })
     * 
     */
    create<T extends RdvCreateArgs>(args: SelectSubset<T, RdvCreateArgs<ExtArgs>>): Prisma__RdvClient<$Result.GetResult<Prisma.$RdvPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rdvs.
     * @param {RdvCreateManyArgs} args - Arguments to create many Rdvs.
     * @example
     * // Create many Rdvs
     * const rdv = await prisma.rdv.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RdvCreateManyArgs>(args?: SelectSubset<T, RdvCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rdvs and returns the data saved in the database.
     * @param {RdvCreateManyAndReturnArgs} args - Arguments to create many Rdvs.
     * @example
     * // Create many Rdvs
     * const rdv = await prisma.rdv.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rdvs and only return the `id`
     * const rdvWithIdOnly = await prisma.rdv.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RdvCreateManyAndReturnArgs>(args?: SelectSubset<T, RdvCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RdvPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rdv.
     * @param {RdvDeleteArgs} args - Arguments to delete one Rdv.
     * @example
     * // Delete one Rdv
     * const Rdv = await prisma.rdv.delete({
     *   where: {
     *     // ... filter to delete one Rdv
     *   }
     * })
     * 
     */
    delete<T extends RdvDeleteArgs>(args: SelectSubset<T, RdvDeleteArgs<ExtArgs>>): Prisma__RdvClient<$Result.GetResult<Prisma.$RdvPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rdv.
     * @param {RdvUpdateArgs} args - Arguments to update one Rdv.
     * @example
     * // Update one Rdv
     * const rdv = await prisma.rdv.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RdvUpdateArgs>(args: SelectSubset<T, RdvUpdateArgs<ExtArgs>>): Prisma__RdvClient<$Result.GetResult<Prisma.$RdvPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rdvs.
     * @param {RdvDeleteManyArgs} args - Arguments to filter Rdvs to delete.
     * @example
     * // Delete a few Rdvs
     * const { count } = await prisma.rdv.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RdvDeleteManyArgs>(args?: SelectSubset<T, RdvDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rdvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RdvUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rdvs
     * const rdv = await prisma.rdv.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RdvUpdateManyArgs>(args: SelectSubset<T, RdvUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rdvs and returns the data updated in the database.
     * @param {RdvUpdateManyAndReturnArgs} args - Arguments to update many Rdvs.
     * @example
     * // Update many Rdvs
     * const rdv = await prisma.rdv.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rdvs and only return the `id`
     * const rdvWithIdOnly = await prisma.rdv.updateManyAndReturn({
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
    updateManyAndReturn<T extends RdvUpdateManyAndReturnArgs>(args: SelectSubset<T, RdvUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RdvPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rdv.
     * @param {RdvUpsertArgs} args - Arguments to update or create a Rdv.
     * @example
     * // Update or create a Rdv
     * const rdv = await prisma.rdv.upsert({
     *   create: {
     *     // ... data to create a Rdv
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rdv we want to update
     *   }
     * })
     */
    upsert<T extends RdvUpsertArgs>(args: SelectSubset<T, RdvUpsertArgs<ExtArgs>>): Prisma__RdvClient<$Result.GetResult<Prisma.$RdvPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rdvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RdvCountArgs} args - Arguments to filter Rdvs to count.
     * @example
     * // Count the number of Rdvs
     * const count = await prisma.rdv.count({
     *   where: {
     *     // ... the filter for the Rdvs we want to count
     *   }
     * })
    **/
    count<T extends RdvCountArgs>(
      args?: Subset<T, RdvCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RdvCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rdv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RdvAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RdvAggregateArgs>(args: Subset<T, RdvAggregateArgs>): Prisma.PrismaPromise<GetRdvAggregateType<T>>

    /**
     * Group by Rdv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RdvGroupByArgs} args - Group by arguments.
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
      T extends RdvGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RdvGroupByArgs['orderBy'] }
        : { orderBy?: RdvGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RdvGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRdvGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rdv model
   */
  readonly fields: RdvFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rdv.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RdvClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professionnel<T extends Rdv$professionnelArgs<ExtArgs> = {}>(args?: Subset<T, Rdv$professionnelArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rdv model
   */
  interface RdvFieldRefs {
    readonly id: FieldRef<"Rdv", 'String'>
    readonly type: FieldRef<"Rdv", 'String'>
    readonly professionnelId: FieldRef<"Rdv", 'String'>
    readonly date: FieldRef<"Rdv", 'DateTime'>
    readonly heure: FieldRef<"Rdv", 'String'>
    readonly motif: FieldRef<"Rdv", 'String'>
    readonly status: FieldRef<"Rdv", 'RdvStatus'>
    readonly userId: FieldRef<"Rdv", 'String'>
    readonly createdAt: FieldRef<"Rdv", 'DateTime'>
    readonly updatedAt: FieldRef<"Rdv", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rdv findUnique
   */
  export type RdvFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rdv
     */
    select?: RdvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rdv
     */
    omit?: RdvOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RdvInclude<ExtArgs> | null
    /**
     * Filter, which Rdv to fetch.
     */
    where: RdvWhereUniqueInput
  }

  /**
   * Rdv findUniqueOrThrow
   */
  export type RdvFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rdv
     */
    select?: RdvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rdv
     */
    omit?: RdvOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RdvInclude<ExtArgs> | null
    /**
     * Filter, which Rdv to fetch.
     */
    where: RdvWhereUniqueInput
  }

  /**
   * Rdv findFirst
   */
  export type RdvFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rdv
     */
    select?: RdvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rdv
     */
    omit?: RdvOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RdvInclude<ExtArgs> | null
    /**
     * Filter, which Rdv to fetch.
     */
    where?: RdvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rdvs to fetch.
     */
    orderBy?: RdvOrderByWithRelationInput | RdvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rdvs.
     */
    cursor?: RdvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rdvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rdvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rdvs.
     */
    distinct?: RdvScalarFieldEnum | RdvScalarFieldEnum[]
  }

  /**
   * Rdv findFirstOrThrow
   */
  export type RdvFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rdv
     */
    select?: RdvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rdv
     */
    omit?: RdvOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RdvInclude<ExtArgs> | null
    /**
     * Filter, which Rdv to fetch.
     */
    where?: RdvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rdvs to fetch.
     */
    orderBy?: RdvOrderByWithRelationInput | RdvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rdvs.
     */
    cursor?: RdvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rdvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rdvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rdvs.
     */
    distinct?: RdvScalarFieldEnum | RdvScalarFieldEnum[]
  }

  /**
   * Rdv findMany
   */
  export type RdvFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rdv
     */
    select?: RdvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rdv
     */
    omit?: RdvOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RdvInclude<ExtArgs> | null
    /**
     * Filter, which Rdvs to fetch.
     */
    where?: RdvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rdvs to fetch.
     */
    orderBy?: RdvOrderByWithRelationInput | RdvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rdvs.
     */
    cursor?: RdvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rdvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rdvs.
     */
    skip?: number
    distinct?: RdvScalarFieldEnum | RdvScalarFieldEnum[]
  }

  /**
   * Rdv create
   */
  export type RdvCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rdv
     */
    select?: RdvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rdv
     */
    omit?: RdvOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RdvInclude<ExtArgs> | null
    /**
     * The data needed to create a Rdv.
     */
    data: XOR<RdvCreateInput, RdvUncheckedCreateInput>
  }

  /**
   * Rdv createMany
   */
  export type RdvCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rdvs.
     */
    data: RdvCreateManyInput | RdvCreateManyInput[]
  }

  /**
   * Rdv createManyAndReturn
   */
  export type RdvCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rdv
     */
    select?: RdvSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rdv
     */
    omit?: RdvOmit<ExtArgs> | null
    /**
     * The data used to create many Rdvs.
     */
    data: RdvCreateManyInput | RdvCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RdvIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rdv update
   */
  export type RdvUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rdv
     */
    select?: RdvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rdv
     */
    omit?: RdvOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RdvInclude<ExtArgs> | null
    /**
     * The data needed to update a Rdv.
     */
    data: XOR<RdvUpdateInput, RdvUncheckedUpdateInput>
    /**
     * Choose, which Rdv to update.
     */
    where: RdvWhereUniqueInput
  }

  /**
   * Rdv updateMany
   */
  export type RdvUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rdvs.
     */
    data: XOR<RdvUpdateManyMutationInput, RdvUncheckedUpdateManyInput>
    /**
     * Filter which Rdvs to update
     */
    where?: RdvWhereInput
    /**
     * Limit how many Rdvs to update.
     */
    limit?: number
  }

  /**
   * Rdv updateManyAndReturn
   */
  export type RdvUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rdv
     */
    select?: RdvSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rdv
     */
    omit?: RdvOmit<ExtArgs> | null
    /**
     * The data used to update Rdvs.
     */
    data: XOR<RdvUpdateManyMutationInput, RdvUncheckedUpdateManyInput>
    /**
     * Filter which Rdvs to update
     */
    where?: RdvWhereInput
    /**
     * Limit how many Rdvs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RdvIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rdv upsert
   */
  export type RdvUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rdv
     */
    select?: RdvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rdv
     */
    omit?: RdvOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RdvInclude<ExtArgs> | null
    /**
     * The filter to search for the Rdv to update in case it exists.
     */
    where: RdvWhereUniqueInput
    /**
     * In case the Rdv found by the `where` argument doesn't exist, create a new Rdv with this data.
     */
    create: XOR<RdvCreateInput, RdvUncheckedCreateInput>
    /**
     * In case the Rdv was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RdvUpdateInput, RdvUncheckedUpdateInput>
  }

  /**
   * Rdv delete
   */
  export type RdvDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rdv
     */
    select?: RdvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rdv
     */
    omit?: RdvOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RdvInclude<ExtArgs> | null
    /**
     * Filter which Rdv to delete.
     */
    where: RdvWhereUniqueInput
  }

  /**
   * Rdv deleteMany
   */
  export type RdvDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rdvs to delete
     */
    where?: RdvWhereInput
    /**
     * Limit how many Rdvs to delete.
     */
    limit?: number
  }

  /**
   * Rdv.professionnel
   */
  export type Rdv$professionnelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Rdv without action
   */
  export type RdvDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rdv
     */
    select?: RdvSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rdv
     */
    omit?: RdvOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RdvInclude<ExtArgs> | null
  }


  /**
   * Model Groupe
   */

  export type AggregateGroupe = {
    _count: GroupeCountAggregateOutputType | null
    _avg: GroupeAvgAggregateOutputType | null
    _sum: GroupeSumAggregateOutputType | null
    _min: GroupeMinAggregateOutputType | null
    _max: GroupeMaxAggregateOutputType | null
  }

  export type GroupeAvgAggregateOutputType = {
    placesMax: number | null
    placesDisponibles: number | null
  }

  export type GroupeSumAggregateOutputType = {
    placesMax: number | null
    placesDisponibles: number | null
  }

  export type GroupeMinAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    horaire: string | null
    lieu: string | null
    placesMax: number | null
    placesDisponibles: number | null
    animateur: string | null
    image: string | null
    thematiques: string | null
    createdAt: Date | null
  }

  export type GroupeMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    horaire: string | null
    lieu: string | null
    placesMax: number | null
    placesDisponibles: number | null
    animateur: string | null
    image: string | null
    thematiques: string | null
    createdAt: Date | null
  }

  export type GroupeCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    horaire: number
    lieu: number
    placesMax: number
    placesDisponibles: number
    animateur: number
    image: number
    thematiques: number
    createdAt: number
    _all: number
  }


  export type GroupeAvgAggregateInputType = {
    placesMax?: true
    placesDisponibles?: true
  }

  export type GroupeSumAggregateInputType = {
    placesMax?: true
    placesDisponibles?: true
  }

  export type GroupeMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    horaire?: true
    lieu?: true
    placesMax?: true
    placesDisponibles?: true
    animateur?: true
    image?: true
    thematiques?: true
    createdAt?: true
  }

  export type GroupeMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    horaire?: true
    lieu?: true
    placesMax?: true
    placesDisponibles?: true
    animateur?: true
    image?: true
    thematiques?: true
    createdAt?: true
  }

  export type GroupeCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    horaire?: true
    lieu?: true
    placesMax?: true
    placesDisponibles?: true
    animateur?: true
    image?: true
    thematiques?: true
    createdAt?: true
    _all?: true
  }

  export type GroupeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groupe to aggregate.
     */
    where?: GroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groupes to fetch.
     */
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groupes
    **/
    _count?: true | GroupeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupeMaxAggregateInputType
  }

  export type GetGroupeAggregateType<T extends GroupeAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupe[P]>
      : GetScalarType<T[P], AggregateGroupe[P]>
  }




  export type GroupeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupeWhereInput
    orderBy?: GroupeOrderByWithAggregationInput | GroupeOrderByWithAggregationInput[]
    by: GroupeScalarFieldEnum[] | GroupeScalarFieldEnum
    having?: GroupeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupeCountAggregateInputType | true
    _avg?: GroupeAvgAggregateInputType
    _sum?: GroupeSumAggregateInputType
    _min?: GroupeMinAggregateInputType
    _max?: GroupeMaxAggregateInputType
  }

  export type GroupeGroupByOutputType = {
    id: string
    nom: string
    description: string
    horaire: string
    lieu: string
    placesMax: number
    placesDisponibles: number
    animateur: string
    image: string | null
    thematiques: string
    createdAt: Date
    _count: GroupeCountAggregateOutputType | null
    _avg: GroupeAvgAggregateOutputType | null
    _sum: GroupeSumAggregateOutputType | null
    _min: GroupeMinAggregateOutputType | null
    _max: GroupeMaxAggregateOutputType | null
  }

  type GetGroupeGroupByPayload<T extends GroupeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupeGroupByOutputType[P]>
            : GetScalarType<T[P], GroupeGroupByOutputType[P]>
        }
      >
    >


  export type GroupeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    horaire?: boolean
    lieu?: boolean
    placesMax?: boolean
    placesDisponibles?: boolean
    animateur?: boolean
    image?: boolean
    thematiques?: boolean
    createdAt?: boolean
    membres?: boolean | Groupe$membresArgs<ExtArgs>
    _count?: boolean | GroupeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupe"]>

  export type GroupeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    horaire?: boolean
    lieu?: boolean
    placesMax?: boolean
    placesDisponibles?: boolean
    animateur?: boolean
    image?: boolean
    thematiques?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["groupe"]>

  export type GroupeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    horaire?: boolean
    lieu?: boolean
    placesMax?: boolean
    placesDisponibles?: boolean
    animateur?: boolean
    image?: boolean
    thematiques?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["groupe"]>

  export type GroupeSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
    horaire?: boolean
    lieu?: boolean
    placesMax?: boolean
    placesDisponibles?: boolean
    animateur?: boolean
    image?: boolean
    thematiques?: boolean
    createdAt?: boolean
  }

  export type GroupeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "description" | "horaire" | "lieu" | "placesMax" | "placesDisponibles" | "animateur" | "image" | "thematiques" | "createdAt", ExtArgs["result"]["groupe"]>
  export type GroupeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membres?: boolean | Groupe$membresArgs<ExtArgs>
    _count?: boolean | GroupeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroupeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Groupe"
    objects: {
      membres: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      description: string
      horaire: string
      lieu: string
      placesMax: number
      placesDisponibles: number
      animateur: string
      image: string | null
      thematiques: string
      createdAt: Date
    }, ExtArgs["result"]["groupe"]>
    composites: {}
  }

  type GroupeGetPayload<S extends boolean | null | undefined | GroupeDefaultArgs> = $Result.GetResult<Prisma.$GroupePayload, S>

  type GroupeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupeCountAggregateInputType | true
    }

  export interface GroupeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Groupe'], meta: { name: 'Groupe' } }
    /**
     * Find zero or one Groupe that matches the filter.
     * @param {GroupeFindUniqueArgs} args - Arguments to find a Groupe
     * @example
     * // Get one Groupe
     * const groupe = await prisma.groupe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupeFindUniqueArgs>(args: SelectSubset<T, GroupeFindUniqueArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Groupe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupeFindUniqueOrThrowArgs} args - Arguments to find a Groupe
     * @example
     * // Get one Groupe
     * const groupe = await prisma.groupe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupeFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groupe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeFindFirstArgs} args - Arguments to find a Groupe
     * @example
     * // Get one Groupe
     * const groupe = await prisma.groupe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupeFindFirstArgs>(args?: SelectSubset<T, GroupeFindFirstArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groupe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeFindFirstOrThrowArgs} args - Arguments to find a Groupe
     * @example
     * // Get one Groupe
     * const groupe = await prisma.groupe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupeFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groupes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groupes
     * const groupes = await prisma.groupe.findMany()
     * 
     * // Get first 10 Groupes
     * const groupes = await prisma.groupe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupeWithIdOnly = await prisma.groupe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupeFindManyArgs>(args?: SelectSubset<T, GroupeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Groupe.
     * @param {GroupeCreateArgs} args - Arguments to create a Groupe.
     * @example
     * // Create one Groupe
     * const Groupe = await prisma.groupe.create({
     *   data: {
     *     // ... data to create a Groupe
     *   }
     * })
     * 
     */
    create<T extends GroupeCreateArgs>(args: SelectSubset<T, GroupeCreateArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groupes.
     * @param {GroupeCreateManyArgs} args - Arguments to create many Groupes.
     * @example
     * // Create many Groupes
     * const groupe = await prisma.groupe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupeCreateManyArgs>(args?: SelectSubset<T, GroupeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groupes and returns the data saved in the database.
     * @param {GroupeCreateManyAndReturnArgs} args - Arguments to create many Groupes.
     * @example
     * // Create many Groupes
     * const groupe = await prisma.groupe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groupes and only return the `id`
     * const groupeWithIdOnly = await prisma.groupe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupeCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Groupe.
     * @param {GroupeDeleteArgs} args - Arguments to delete one Groupe.
     * @example
     * // Delete one Groupe
     * const Groupe = await prisma.groupe.delete({
     *   where: {
     *     // ... filter to delete one Groupe
     *   }
     * })
     * 
     */
    delete<T extends GroupeDeleteArgs>(args: SelectSubset<T, GroupeDeleteArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Groupe.
     * @param {GroupeUpdateArgs} args - Arguments to update one Groupe.
     * @example
     * // Update one Groupe
     * const groupe = await prisma.groupe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupeUpdateArgs>(args: SelectSubset<T, GroupeUpdateArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groupes.
     * @param {GroupeDeleteManyArgs} args - Arguments to filter Groupes to delete.
     * @example
     * // Delete a few Groupes
     * const { count } = await prisma.groupe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupeDeleteManyArgs>(args?: SelectSubset<T, GroupeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groupes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groupes
     * const groupe = await prisma.groupe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupeUpdateManyArgs>(args: SelectSubset<T, GroupeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groupes and returns the data updated in the database.
     * @param {GroupeUpdateManyAndReturnArgs} args - Arguments to update many Groupes.
     * @example
     * // Update many Groupes
     * const groupe = await prisma.groupe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groupes and only return the `id`
     * const groupeWithIdOnly = await prisma.groupe.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupeUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Groupe.
     * @param {GroupeUpsertArgs} args - Arguments to update or create a Groupe.
     * @example
     * // Update or create a Groupe
     * const groupe = await prisma.groupe.upsert({
     *   create: {
     *     // ... data to create a Groupe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Groupe we want to update
     *   }
     * })
     */
    upsert<T extends GroupeUpsertArgs>(args: SelectSubset<T, GroupeUpsertArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groupes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeCountArgs} args - Arguments to filter Groupes to count.
     * @example
     * // Count the number of Groupes
     * const count = await prisma.groupe.count({
     *   where: {
     *     // ... the filter for the Groupes we want to count
     *   }
     * })
    **/
    count<T extends GroupeCountArgs>(
      args?: Subset<T, GroupeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Groupe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupeAggregateArgs>(args: Subset<T, GroupeAggregateArgs>): Prisma.PrismaPromise<GetGroupeAggregateType<T>>

    /**
     * Group by Groupe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeGroupByArgs} args - Group by arguments.
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
      T extends GroupeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupeGroupByArgs['orderBy'] }
        : { orderBy?: GroupeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Groupe model
   */
  readonly fields: GroupeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Groupe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    membres<T extends Groupe$membresArgs<ExtArgs> = {}>(args?: Subset<T, Groupe$membresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Groupe model
   */
  interface GroupeFieldRefs {
    readonly id: FieldRef<"Groupe", 'String'>
    readonly nom: FieldRef<"Groupe", 'String'>
    readonly description: FieldRef<"Groupe", 'String'>
    readonly horaire: FieldRef<"Groupe", 'String'>
    readonly lieu: FieldRef<"Groupe", 'String'>
    readonly placesMax: FieldRef<"Groupe", 'Int'>
    readonly placesDisponibles: FieldRef<"Groupe", 'Int'>
    readonly animateur: FieldRef<"Groupe", 'String'>
    readonly image: FieldRef<"Groupe", 'String'>
    readonly thematiques: FieldRef<"Groupe", 'String'>
    readonly createdAt: FieldRef<"Groupe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Groupe findUnique
   */
  export type GroupeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter, which Groupe to fetch.
     */
    where: GroupeWhereUniqueInput
  }

  /**
   * Groupe findUniqueOrThrow
   */
  export type GroupeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter, which Groupe to fetch.
     */
    where: GroupeWhereUniqueInput
  }

  /**
   * Groupe findFirst
   */
  export type GroupeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter, which Groupe to fetch.
     */
    where?: GroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groupes to fetch.
     */
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groupes.
     */
    cursor?: GroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groupes.
     */
    distinct?: GroupeScalarFieldEnum | GroupeScalarFieldEnum[]
  }

  /**
   * Groupe findFirstOrThrow
   */
  export type GroupeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter, which Groupe to fetch.
     */
    where?: GroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groupes to fetch.
     */
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groupes.
     */
    cursor?: GroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groupes.
     */
    distinct?: GroupeScalarFieldEnum | GroupeScalarFieldEnum[]
  }

  /**
   * Groupe findMany
   */
  export type GroupeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter, which Groupes to fetch.
     */
    where?: GroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groupes to fetch.
     */
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groupes.
     */
    cursor?: GroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groupes.
     */
    skip?: number
    distinct?: GroupeScalarFieldEnum | GroupeScalarFieldEnum[]
  }

  /**
   * Groupe create
   */
  export type GroupeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * The data needed to create a Groupe.
     */
    data: XOR<GroupeCreateInput, GroupeUncheckedCreateInput>
  }

  /**
   * Groupe createMany
   */
  export type GroupeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groupes.
     */
    data: GroupeCreateManyInput | GroupeCreateManyInput[]
  }

  /**
   * Groupe createManyAndReturn
   */
  export type GroupeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * The data used to create many Groupes.
     */
    data: GroupeCreateManyInput | GroupeCreateManyInput[]
  }

  /**
   * Groupe update
   */
  export type GroupeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * The data needed to update a Groupe.
     */
    data: XOR<GroupeUpdateInput, GroupeUncheckedUpdateInput>
    /**
     * Choose, which Groupe to update.
     */
    where: GroupeWhereUniqueInput
  }

  /**
   * Groupe updateMany
   */
  export type GroupeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groupes.
     */
    data: XOR<GroupeUpdateManyMutationInput, GroupeUncheckedUpdateManyInput>
    /**
     * Filter which Groupes to update
     */
    where?: GroupeWhereInput
    /**
     * Limit how many Groupes to update.
     */
    limit?: number
  }

  /**
   * Groupe updateManyAndReturn
   */
  export type GroupeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * The data used to update Groupes.
     */
    data: XOR<GroupeUpdateManyMutationInput, GroupeUncheckedUpdateManyInput>
    /**
     * Filter which Groupes to update
     */
    where?: GroupeWhereInput
    /**
     * Limit how many Groupes to update.
     */
    limit?: number
  }

  /**
   * Groupe upsert
   */
  export type GroupeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * The filter to search for the Groupe to update in case it exists.
     */
    where: GroupeWhereUniqueInput
    /**
     * In case the Groupe found by the `where` argument doesn't exist, create a new Groupe with this data.
     */
    create: XOR<GroupeCreateInput, GroupeUncheckedCreateInput>
    /**
     * In case the Groupe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupeUpdateInput, GroupeUncheckedUpdateInput>
  }

  /**
   * Groupe delete
   */
  export type GroupeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter which Groupe to delete.
     */
    where: GroupeWhereUniqueInput
  }

  /**
   * Groupe deleteMany
   */
  export type GroupeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groupes to delete
     */
    where?: GroupeWhereInput
    /**
     * Limit how many Groupes to delete.
     */
    limit?: number
  }

  /**
   * Groupe.membres
   */
  export type Groupe$membresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Groupe without action
   */
  export type GroupeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Groupe
     */
    omit?: GroupeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupeInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    type: string | null
    read: boolean | null
    link: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    type: string | null
    read: boolean | null
    link: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    title: number
    message: number
    type: number
    read: number
    link: number
    userId: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    title?: true
    message?: true
    type?: true
    read?: true
    link?: true
    userId?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    title?: true
    message?: true
    type?: true
    read?: true
    link?: true
    userId?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    title?: true
    message?: true
    type?: true
    read?: true
    link?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    title: string
    message: string
    type: string
    read: boolean
    link: string | null
    userId: string
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    read?: boolean
    link?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    read?: boolean
    link?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    read?: boolean
    link?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    read?: boolean
    link?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "message" | "type" | "read" | "link" | "userId" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      message: string
      type: string
      read: boolean
      link: string | null
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly link: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model ContactUrgence
   */

  export type AggregateContactUrgence = {
    _count: ContactUrgenceCountAggregateOutputType | null
    _min: ContactUrgenceMinAggregateOutputType | null
    _max: ContactUrgenceMaxAggregateOutputType | null
  }

  export type ContactUrgenceMinAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    relation: string | null
    userId: string | null
  }

  export type ContactUrgenceMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    relation: string | null
    userId: string | null
  }

  export type ContactUrgenceCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    telephone: number
    relation: number
    userId: number
    _all: number
  }


  export type ContactUrgenceMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    telephone?: true
    relation?: true
    userId?: true
  }

  export type ContactUrgenceMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    telephone?: true
    relation?: true
    userId?: true
  }

  export type ContactUrgenceCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    telephone?: true
    relation?: true
    userId?: true
    _all?: true
  }

  export type ContactUrgenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactUrgence to aggregate.
     */
    where?: ContactUrgenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactUrgences to fetch.
     */
    orderBy?: ContactUrgenceOrderByWithRelationInput | ContactUrgenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactUrgenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactUrgences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactUrgences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactUrgences
    **/
    _count?: true | ContactUrgenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactUrgenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactUrgenceMaxAggregateInputType
  }

  export type GetContactUrgenceAggregateType<T extends ContactUrgenceAggregateArgs> = {
        [P in keyof T & keyof AggregateContactUrgence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactUrgence[P]>
      : GetScalarType<T[P], AggregateContactUrgence[P]>
  }




  export type ContactUrgenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactUrgenceWhereInput
    orderBy?: ContactUrgenceOrderByWithAggregationInput | ContactUrgenceOrderByWithAggregationInput[]
    by: ContactUrgenceScalarFieldEnum[] | ContactUrgenceScalarFieldEnum
    having?: ContactUrgenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactUrgenceCountAggregateInputType | true
    _min?: ContactUrgenceMinAggregateInputType
    _max?: ContactUrgenceMaxAggregateInputType
  }

  export type ContactUrgenceGroupByOutputType = {
    id: string
    nom: string
    prenom: string
    telephone: string
    relation: string
    userId: string
    _count: ContactUrgenceCountAggregateOutputType | null
    _min: ContactUrgenceMinAggregateOutputType | null
    _max: ContactUrgenceMaxAggregateOutputType | null
  }

  type GetContactUrgenceGroupByPayload<T extends ContactUrgenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactUrgenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactUrgenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactUrgenceGroupByOutputType[P]>
            : GetScalarType<T[P], ContactUrgenceGroupByOutputType[P]>
        }
      >
    >


  export type ContactUrgenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    relation?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactUrgence"]>

  export type ContactUrgenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    relation?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactUrgence"]>

  export type ContactUrgenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    relation?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactUrgence"]>

  export type ContactUrgenceSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    relation?: boolean
    userId?: boolean
  }

  export type ContactUrgenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "telephone" | "relation" | "userId", ExtArgs["result"]["contactUrgence"]>
  export type ContactUrgenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContactUrgenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContactUrgenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContactUrgencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactUrgence"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      prenom: string
      telephone: string
      relation: string
      userId: string
    }, ExtArgs["result"]["contactUrgence"]>
    composites: {}
  }

  type ContactUrgenceGetPayload<S extends boolean | null | undefined | ContactUrgenceDefaultArgs> = $Result.GetResult<Prisma.$ContactUrgencePayload, S>

  type ContactUrgenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactUrgenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactUrgenceCountAggregateInputType | true
    }

  export interface ContactUrgenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactUrgence'], meta: { name: 'ContactUrgence' } }
    /**
     * Find zero or one ContactUrgence that matches the filter.
     * @param {ContactUrgenceFindUniqueArgs} args - Arguments to find a ContactUrgence
     * @example
     * // Get one ContactUrgence
     * const contactUrgence = await prisma.contactUrgence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactUrgenceFindUniqueArgs>(args: SelectSubset<T, ContactUrgenceFindUniqueArgs<ExtArgs>>): Prisma__ContactUrgenceClient<$Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactUrgence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactUrgenceFindUniqueOrThrowArgs} args - Arguments to find a ContactUrgence
     * @example
     * // Get one ContactUrgence
     * const contactUrgence = await prisma.contactUrgence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactUrgenceFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactUrgenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactUrgenceClient<$Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactUrgence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUrgenceFindFirstArgs} args - Arguments to find a ContactUrgence
     * @example
     * // Get one ContactUrgence
     * const contactUrgence = await prisma.contactUrgence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactUrgenceFindFirstArgs>(args?: SelectSubset<T, ContactUrgenceFindFirstArgs<ExtArgs>>): Prisma__ContactUrgenceClient<$Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactUrgence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUrgenceFindFirstOrThrowArgs} args - Arguments to find a ContactUrgence
     * @example
     * // Get one ContactUrgence
     * const contactUrgence = await prisma.contactUrgence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactUrgenceFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactUrgenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactUrgenceClient<$Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactUrgences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUrgenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactUrgences
     * const contactUrgences = await prisma.contactUrgence.findMany()
     * 
     * // Get first 10 ContactUrgences
     * const contactUrgences = await prisma.contactUrgence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactUrgenceWithIdOnly = await prisma.contactUrgence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactUrgenceFindManyArgs>(args?: SelectSubset<T, ContactUrgenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactUrgence.
     * @param {ContactUrgenceCreateArgs} args - Arguments to create a ContactUrgence.
     * @example
     * // Create one ContactUrgence
     * const ContactUrgence = await prisma.contactUrgence.create({
     *   data: {
     *     // ... data to create a ContactUrgence
     *   }
     * })
     * 
     */
    create<T extends ContactUrgenceCreateArgs>(args: SelectSubset<T, ContactUrgenceCreateArgs<ExtArgs>>): Prisma__ContactUrgenceClient<$Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactUrgences.
     * @param {ContactUrgenceCreateManyArgs} args - Arguments to create many ContactUrgences.
     * @example
     * // Create many ContactUrgences
     * const contactUrgence = await prisma.contactUrgence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactUrgenceCreateManyArgs>(args?: SelectSubset<T, ContactUrgenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactUrgences and returns the data saved in the database.
     * @param {ContactUrgenceCreateManyAndReturnArgs} args - Arguments to create many ContactUrgences.
     * @example
     * // Create many ContactUrgences
     * const contactUrgence = await prisma.contactUrgence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactUrgences and only return the `id`
     * const contactUrgenceWithIdOnly = await prisma.contactUrgence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactUrgenceCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactUrgenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactUrgence.
     * @param {ContactUrgenceDeleteArgs} args - Arguments to delete one ContactUrgence.
     * @example
     * // Delete one ContactUrgence
     * const ContactUrgence = await prisma.contactUrgence.delete({
     *   where: {
     *     // ... filter to delete one ContactUrgence
     *   }
     * })
     * 
     */
    delete<T extends ContactUrgenceDeleteArgs>(args: SelectSubset<T, ContactUrgenceDeleteArgs<ExtArgs>>): Prisma__ContactUrgenceClient<$Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactUrgence.
     * @param {ContactUrgenceUpdateArgs} args - Arguments to update one ContactUrgence.
     * @example
     * // Update one ContactUrgence
     * const contactUrgence = await prisma.contactUrgence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUrgenceUpdateArgs>(args: SelectSubset<T, ContactUrgenceUpdateArgs<ExtArgs>>): Prisma__ContactUrgenceClient<$Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactUrgences.
     * @param {ContactUrgenceDeleteManyArgs} args - Arguments to filter ContactUrgences to delete.
     * @example
     * // Delete a few ContactUrgences
     * const { count } = await prisma.contactUrgence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactUrgenceDeleteManyArgs>(args?: SelectSubset<T, ContactUrgenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactUrgences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUrgenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactUrgences
     * const contactUrgence = await prisma.contactUrgence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUrgenceUpdateManyArgs>(args: SelectSubset<T, ContactUrgenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactUrgences and returns the data updated in the database.
     * @param {ContactUrgenceUpdateManyAndReturnArgs} args - Arguments to update many ContactUrgences.
     * @example
     * // Update many ContactUrgences
     * const contactUrgence = await prisma.contactUrgence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactUrgences and only return the `id`
     * const contactUrgenceWithIdOnly = await prisma.contactUrgence.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactUrgenceUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUrgenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactUrgence.
     * @param {ContactUrgenceUpsertArgs} args - Arguments to update or create a ContactUrgence.
     * @example
     * // Update or create a ContactUrgence
     * const contactUrgence = await prisma.contactUrgence.upsert({
     *   create: {
     *     // ... data to create a ContactUrgence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactUrgence we want to update
     *   }
     * })
     */
    upsert<T extends ContactUrgenceUpsertArgs>(args: SelectSubset<T, ContactUrgenceUpsertArgs<ExtArgs>>): Prisma__ContactUrgenceClient<$Result.GetResult<Prisma.$ContactUrgencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactUrgences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUrgenceCountArgs} args - Arguments to filter ContactUrgences to count.
     * @example
     * // Count the number of ContactUrgences
     * const count = await prisma.contactUrgence.count({
     *   where: {
     *     // ... the filter for the ContactUrgences we want to count
     *   }
     * })
    **/
    count<T extends ContactUrgenceCountArgs>(
      args?: Subset<T, ContactUrgenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactUrgenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactUrgence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUrgenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactUrgenceAggregateArgs>(args: Subset<T, ContactUrgenceAggregateArgs>): Prisma.PrismaPromise<GetContactUrgenceAggregateType<T>>

    /**
     * Group by ContactUrgence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUrgenceGroupByArgs} args - Group by arguments.
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
      T extends ContactUrgenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactUrgenceGroupByArgs['orderBy'] }
        : { orderBy?: ContactUrgenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactUrgenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactUrgenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactUrgence model
   */
  readonly fields: ContactUrgenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactUrgence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactUrgenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ContactUrgence model
   */
  interface ContactUrgenceFieldRefs {
    readonly id: FieldRef<"ContactUrgence", 'String'>
    readonly nom: FieldRef<"ContactUrgence", 'String'>
    readonly prenom: FieldRef<"ContactUrgence", 'String'>
    readonly telephone: FieldRef<"ContactUrgence", 'String'>
    readonly relation: FieldRef<"ContactUrgence", 'String'>
    readonly userId: FieldRef<"ContactUrgence", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContactUrgence findUnique
   */
  export type ContactUrgenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUrgence
     */
    select?: ContactUrgenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUrgence
     */
    omit?: ContactUrgenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactUrgenceInclude<ExtArgs> | null
    /**
     * Filter, which ContactUrgence to fetch.
     */
    where: ContactUrgenceWhereUniqueInput
  }

  /**
   * ContactUrgence findUniqueOrThrow
   */
  export type ContactUrgenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUrgence
     */
    select?: ContactUrgenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUrgence
     */
    omit?: ContactUrgenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactUrgenceInclude<ExtArgs> | null
    /**
     * Filter, which ContactUrgence to fetch.
     */
    where: ContactUrgenceWhereUniqueInput
  }

  /**
   * ContactUrgence findFirst
   */
  export type ContactUrgenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUrgence
     */
    select?: ContactUrgenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUrgence
     */
    omit?: ContactUrgenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactUrgenceInclude<ExtArgs> | null
    /**
     * Filter, which ContactUrgence to fetch.
     */
    where?: ContactUrgenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactUrgences to fetch.
     */
    orderBy?: ContactUrgenceOrderByWithRelationInput | ContactUrgenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactUrgences.
     */
    cursor?: ContactUrgenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactUrgences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactUrgences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactUrgences.
     */
    distinct?: ContactUrgenceScalarFieldEnum | ContactUrgenceScalarFieldEnum[]
  }

  /**
   * ContactUrgence findFirstOrThrow
   */
  export type ContactUrgenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUrgence
     */
    select?: ContactUrgenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUrgence
     */
    omit?: ContactUrgenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactUrgenceInclude<ExtArgs> | null
    /**
     * Filter, which ContactUrgence to fetch.
     */
    where?: ContactUrgenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactUrgences to fetch.
     */
    orderBy?: ContactUrgenceOrderByWithRelationInput | ContactUrgenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactUrgences.
     */
    cursor?: ContactUrgenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactUrgences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactUrgences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactUrgences.
     */
    distinct?: ContactUrgenceScalarFieldEnum | ContactUrgenceScalarFieldEnum[]
  }

  /**
   * ContactUrgence findMany
   */
  export type ContactUrgenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUrgence
     */
    select?: ContactUrgenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUrgence
     */
    omit?: ContactUrgenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactUrgenceInclude<ExtArgs> | null
    /**
     * Filter, which ContactUrgences to fetch.
     */
    where?: ContactUrgenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactUrgences to fetch.
     */
    orderBy?: ContactUrgenceOrderByWithRelationInput | ContactUrgenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactUrgences.
     */
    cursor?: ContactUrgenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactUrgences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactUrgences.
     */
    skip?: number
    distinct?: ContactUrgenceScalarFieldEnum | ContactUrgenceScalarFieldEnum[]
  }

  /**
   * ContactUrgence create
   */
  export type ContactUrgenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUrgence
     */
    select?: ContactUrgenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUrgence
     */
    omit?: ContactUrgenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactUrgenceInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactUrgence.
     */
    data: XOR<ContactUrgenceCreateInput, ContactUrgenceUncheckedCreateInput>
  }

  /**
   * ContactUrgence createMany
   */
  export type ContactUrgenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactUrgences.
     */
    data: ContactUrgenceCreateManyInput | ContactUrgenceCreateManyInput[]
  }

  /**
   * ContactUrgence createManyAndReturn
   */
  export type ContactUrgenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUrgence
     */
    select?: ContactUrgenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUrgence
     */
    omit?: ContactUrgenceOmit<ExtArgs> | null
    /**
     * The data used to create many ContactUrgences.
     */
    data: ContactUrgenceCreateManyInput | ContactUrgenceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactUrgenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactUrgence update
   */
  export type ContactUrgenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUrgence
     */
    select?: ContactUrgenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUrgence
     */
    omit?: ContactUrgenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactUrgenceInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactUrgence.
     */
    data: XOR<ContactUrgenceUpdateInput, ContactUrgenceUncheckedUpdateInput>
    /**
     * Choose, which ContactUrgence to update.
     */
    where: ContactUrgenceWhereUniqueInput
  }

  /**
   * ContactUrgence updateMany
   */
  export type ContactUrgenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactUrgences.
     */
    data: XOR<ContactUrgenceUpdateManyMutationInput, ContactUrgenceUncheckedUpdateManyInput>
    /**
     * Filter which ContactUrgences to update
     */
    where?: ContactUrgenceWhereInput
    /**
     * Limit how many ContactUrgences to update.
     */
    limit?: number
  }

  /**
   * ContactUrgence updateManyAndReturn
   */
  export type ContactUrgenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUrgence
     */
    select?: ContactUrgenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUrgence
     */
    omit?: ContactUrgenceOmit<ExtArgs> | null
    /**
     * The data used to update ContactUrgences.
     */
    data: XOR<ContactUrgenceUpdateManyMutationInput, ContactUrgenceUncheckedUpdateManyInput>
    /**
     * Filter which ContactUrgences to update
     */
    where?: ContactUrgenceWhereInput
    /**
     * Limit how many ContactUrgences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactUrgenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactUrgence upsert
   */
  export type ContactUrgenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUrgence
     */
    select?: ContactUrgenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUrgence
     */
    omit?: ContactUrgenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactUrgenceInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactUrgence to update in case it exists.
     */
    where: ContactUrgenceWhereUniqueInput
    /**
     * In case the ContactUrgence found by the `where` argument doesn't exist, create a new ContactUrgence with this data.
     */
    create: XOR<ContactUrgenceCreateInput, ContactUrgenceUncheckedCreateInput>
    /**
     * In case the ContactUrgence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUrgenceUpdateInput, ContactUrgenceUncheckedUpdateInput>
  }

  /**
   * ContactUrgence delete
   */
  export type ContactUrgenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUrgence
     */
    select?: ContactUrgenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUrgence
     */
    omit?: ContactUrgenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactUrgenceInclude<ExtArgs> | null
    /**
     * Filter which ContactUrgence to delete.
     */
    where: ContactUrgenceWhereUniqueInput
  }

  /**
   * ContactUrgence deleteMany
   */
  export type ContactUrgenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactUrgences to delete
     */
    where?: ContactUrgenceWhereInput
    /**
     * Limit how many ContactUrgences to delete.
     */
    limit?: number
  }

  /**
   * ContactUrgence without action
   */
  export type ContactUrgenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUrgence
     */
    select?: ContactUrgenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUrgence
     */
    omit?: ContactUrgenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactUrgenceInclude<ExtArgs> | null
  }


  /**
   * Model Ressource
   */

  export type AggregateRessource = {
    _count: RessourceCountAggregateOutputType | null
    _min: RessourceMinAggregateOutputType | null
    _max: RessourceMaxAggregateOutputType | null
  }

  export type RessourceMinAggregateOutputType = {
    id: string | null
    titre: string | null
    description: string | null
    categorie: string | null
    type: string | null
    url: string | null
    image: string | null
    createdAt: Date | null
  }

  export type RessourceMaxAggregateOutputType = {
    id: string | null
    titre: string | null
    description: string | null
    categorie: string | null
    type: string | null
    url: string | null
    image: string | null
    createdAt: Date | null
  }

  export type RessourceCountAggregateOutputType = {
    id: number
    titre: number
    description: number
    categorie: number
    type: number
    url: number
    image: number
    createdAt: number
    _all: number
  }


  export type RessourceMinAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    categorie?: true
    type?: true
    url?: true
    image?: true
    createdAt?: true
  }

  export type RessourceMaxAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    categorie?: true
    type?: true
    url?: true
    image?: true
    createdAt?: true
  }

  export type RessourceCountAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    categorie?: true
    type?: true
    url?: true
    image?: true
    createdAt?: true
    _all?: true
  }

  export type RessourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ressource to aggregate.
     */
    where?: RessourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ressources to fetch.
     */
    orderBy?: RessourceOrderByWithRelationInput | RessourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RessourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ressources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ressources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ressources
    **/
    _count?: true | RessourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RessourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RessourceMaxAggregateInputType
  }

  export type GetRessourceAggregateType<T extends RessourceAggregateArgs> = {
        [P in keyof T & keyof AggregateRessource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRessource[P]>
      : GetScalarType<T[P], AggregateRessource[P]>
  }




  export type RessourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RessourceWhereInput
    orderBy?: RessourceOrderByWithAggregationInput | RessourceOrderByWithAggregationInput[]
    by: RessourceScalarFieldEnum[] | RessourceScalarFieldEnum
    having?: RessourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RessourceCountAggregateInputType | true
    _min?: RessourceMinAggregateInputType
    _max?: RessourceMaxAggregateInputType
  }

  export type RessourceGroupByOutputType = {
    id: string
    titre: string
    description: string
    categorie: string
    type: string
    url: string
    image: string | null
    createdAt: Date
    _count: RessourceCountAggregateOutputType | null
    _min: RessourceMinAggregateOutputType | null
    _max: RessourceMaxAggregateOutputType | null
  }

  type GetRessourceGroupByPayload<T extends RessourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RessourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RessourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RessourceGroupByOutputType[P]>
            : GetScalarType<T[P], RessourceGroupByOutputType[P]>
        }
      >
    >


  export type RessourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    categorie?: boolean
    type?: boolean
    url?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ressource"]>

  export type RessourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    categorie?: boolean
    type?: boolean
    url?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ressource"]>

  export type RessourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    categorie?: boolean
    type?: boolean
    url?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ressource"]>

  export type RessourceSelectScalar = {
    id?: boolean
    titre?: boolean
    description?: boolean
    categorie?: boolean
    type?: boolean
    url?: boolean
    image?: boolean
    createdAt?: boolean
  }

  export type RessourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "description" | "categorie" | "type" | "url" | "image" | "createdAt", ExtArgs["result"]["ressource"]>

  export type $RessourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ressource"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titre: string
      description: string
      categorie: string
      type: string
      url: string
      image: string | null
      createdAt: Date
    }, ExtArgs["result"]["ressource"]>
    composites: {}
  }

  type RessourceGetPayload<S extends boolean | null | undefined | RessourceDefaultArgs> = $Result.GetResult<Prisma.$RessourcePayload, S>

  type RessourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RessourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RessourceCountAggregateInputType | true
    }

  export interface RessourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ressource'], meta: { name: 'Ressource' } }
    /**
     * Find zero or one Ressource that matches the filter.
     * @param {RessourceFindUniqueArgs} args - Arguments to find a Ressource
     * @example
     * // Get one Ressource
     * const ressource = await prisma.ressource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RessourceFindUniqueArgs>(args: SelectSubset<T, RessourceFindUniqueArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ressource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RessourceFindUniqueOrThrowArgs} args - Arguments to find a Ressource
     * @example
     * // Get one Ressource
     * const ressource = await prisma.ressource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RessourceFindUniqueOrThrowArgs>(args: SelectSubset<T, RessourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ressource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceFindFirstArgs} args - Arguments to find a Ressource
     * @example
     * // Get one Ressource
     * const ressource = await prisma.ressource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RessourceFindFirstArgs>(args?: SelectSubset<T, RessourceFindFirstArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ressource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceFindFirstOrThrowArgs} args - Arguments to find a Ressource
     * @example
     * // Get one Ressource
     * const ressource = await prisma.ressource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RessourceFindFirstOrThrowArgs>(args?: SelectSubset<T, RessourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ressources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ressources
     * const ressources = await prisma.ressource.findMany()
     * 
     * // Get first 10 Ressources
     * const ressources = await prisma.ressource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ressourceWithIdOnly = await prisma.ressource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RessourceFindManyArgs>(args?: SelectSubset<T, RessourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ressource.
     * @param {RessourceCreateArgs} args - Arguments to create a Ressource.
     * @example
     * // Create one Ressource
     * const Ressource = await prisma.ressource.create({
     *   data: {
     *     // ... data to create a Ressource
     *   }
     * })
     * 
     */
    create<T extends RessourceCreateArgs>(args: SelectSubset<T, RessourceCreateArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ressources.
     * @param {RessourceCreateManyArgs} args - Arguments to create many Ressources.
     * @example
     * // Create many Ressources
     * const ressource = await prisma.ressource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RessourceCreateManyArgs>(args?: SelectSubset<T, RessourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ressources and returns the data saved in the database.
     * @param {RessourceCreateManyAndReturnArgs} args - Arguments to create many Ressources.
     * @example
     * // Create many Ressources
     * const ressource = await prisma.ressource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ressources and only return the `id`
     * const ressourceWithIdOnly = await prisma.ressource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RessourceCreateManyAndReturnArgs>(args?: SelectSubset<T, RessourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ressource.
     * @param {RessourceDeleteArgs} args - Arguments to delete one Ressource.
     * @example
     * // Delete one Ressource
     * const Ressource = await prisma.ressource.delete({
     *   where: {
     *     // ... filter to delete one Ressource
     *   }
     * })
     * 
     */
    delete<T extends RessourceDeleteArgs>(args: SelectSubset<T, RessourceDeleteArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ressource.
     * @param {RessourceUpdateArgs} args - Arguments to update one Ressource.
     * @example
     * // Update one Ressource
     * const ressource = await prisma.ressource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RessourceUpdateArgs>(args: SelectSubset<T, RessourceUpdateArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ressources.
     * @param {RessourceDeleteManyArgs} args - Arguments to filter Ressources to delete.
     * @example
     * // Delete a few Ressources
     * const { count } = await prisma.ressource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RessourceDeleteManyArgs>(args?: SelectSubset<T, RessourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ressources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ressources
     * const ressource = await prisma.ressource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RessourceUpdateManyArgs>(args: SelectSubset<T, RessourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ressources and returns the data updated in the database.
     * @param {RessourceUpdateManyAndReturnArgs} args - Arguments to update many Ressources.
     * @example
     * // Update many Ressources
     * const ressource = await prisma.ressource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ressources and only return the `id`
     * const ressourceWithIdOnly = await prisma.ressource.updateManyAndReturn({
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
    updateManyAndReturn<T extends RessourceUpdateManyAndReturnArgs>(args: SelectSubset<T, RessourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ressource.
     * @param {RessourceUpsertArgs} args - Arguments to update or create a Ressource.
     * @example
     * // Update or create a Ressource
     * const ressource = await prisma.ressource.upsert({
     *   create: {
     *     // ... data to create a Ressource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ressource we want to update
     *   }
     * })
     */
    upsert<T extends RessourceUpsertArgs>(args: SelectSubset<T, RessourceUpsertArgs<ExtArgs>>): Prisma__RessourceClient<$Result.GetResult<Prisma.$RessourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ressources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceCountArgs} args - Arguments to filter Ressources to count.
     * @example
     * // Count the number of Ressources
     * const count = await prisma.ressource.count({
     *   where: {
     *     // ... the filter for the Ressources we want to count
     *   }
     * })
    **/
    count<T extends RessourceCountArgs>(
      args?: Subset<T, RessourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RessourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ressource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RessourceAggregateArgs>(args: Subset<T, RessourceAggregateArgs>): Prisma.PrismaPromise<GetRessourceAggregateType<T>>

    /**
     * Group by Ressource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessourceGroupByArgs} args - Group by arguments.
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
      T extends RessourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RessourceGroupByArgs['orderBy'] }
        : { orderBy?: RessourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RessourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRessourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ressource model
   */
  readonly fields: RessourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ressource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RessourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Ressource model
   */
  interface RessourceFieldRefs {
    readonly id: FieldRef<"Ressource", 'String'>
    readonly titre: FieldRef<"Ressource", 'String'>
    readonly description: FieldRef<"Ressource", 'String'>
    readonly categorie: FieldRef<"Ressource", 'String'>
    readonly type: FieldRef<"Ressource", 'String'>
    readonly url: FieldRef<"Ressource", 'String'>
    readonly image: FieldRef<"Ressource", 'String'>
    readonly createdAt: FieldRef<"Ressource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ressource findUnique
   */
  export type RessourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Filter, which Ressource to fetch.
     */
    where: RessourceWhereUniqueInput
  }

  /**
   * Ressource findUniqueOrThrow
   */
  export type RessourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Filter, which Ressource to fetch.
     */
    where: RessourceWhereUniqueInput
  }

  /**
   * Ressource findFirst
   */
  export type RessourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Filter, which Ressource to fetch.
     */
    where?: RessourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ressources to fetch.
     */
    orderBy?: RessourceOrderByWithRelationInput | RessourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ressources.
     */
    cursor?: RessourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ressources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ressources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ressources.
     */
    distinct?: RessourceScalarFieldEnum | RessourceScalarFieldEnum[]
  }

  /**
   * Ressource findFirstOrThrow
   */
  export type RessourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Filter, which Ressource to fetch.
     */
    where?: RessourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ressources to fetch.
     */
    orderBy?: RessourceOrderByWithRelationInput | RessourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ressources.
     */
    cursor?: RessourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ressources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ressources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ressources.
     */
    distinct?: RessourceScalarFieldEnum | RessourceScalarFieldEnum[]
  }

  /**
   * Ressource findMany
   */
  export type RessourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Filter, which Ressources to fetch.
     */
    where?: RessourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ressources to fetch.
     */
    orderBy?: RessourceOrderByWithRelationInput | RessourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ressources.
     */
    cursor?: RessourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ressources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ressources.
     */
    skip?: number
    distinct?: RessourceScalarFieldEnum | RessourceScalarFieldEnum[]
  }

  /**
   * Ressource create
   */
  export type RessourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * The data needed to create a Ressource.
     */
    data: XOR<RessourceCreateInput, RessourceUncheckedCreateInput>
  }

  /**
   * Ressource createMany
   */
  export type RessourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ressources.
     */
    data: RessourceCreateManyInput | RessourceCreateManyInput[]
  }

  /**
   * Ressource createManyAndReturn
   */
  export type RessourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * The data used to create many Ressources.
     */
    data: RessourceCreateManyInput | RessourceCreateManyInput[]
  }

  /**
   * Ressource update
   */
  export type RessourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * The data needed to update a Ressource.
     */
    data: XOR<RessourceUpdateInput, RessourceUncheckedUpdateInput>
    /**
     * Choose, which Ressource to update.
     */
    where: RessourceWhereUniqueInput
  }

  /**
   * Ressource updateMany
   */
  export type RessourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ressources.
     */
    data: XOR<RessourceUpdateManyMutationInput, RessourceUncheckedUpdateManyInput>
    /**
     * Filter which Ressources to update
     */
    where?: RessourceWhereInput
    /**
     * Limit how many Ressources to update.
     */
    limit?: number
  }

  /**
   * Ressource updateManyAndReturn
   */
  export type RessourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * The data used to update Ressources.
     */
    data: XOR<RessourceUpdateManyMutationInput, RessourceUncheckedUpdateManyInput>
    /**
     * Filter which Ressources to update
     */
    where?: RessourceWhereInput
    /**
     * Limit how many Ressources to update.
     */
    limit?: number
  }

  /**
   * Ressource upsert
   */
  export type RessourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * The filter to search for the Ressource to update in case it exists.
     */
    where: RessourceWhereUniqueInput
    /**
     * In case the Ressource found by the `where` argument doesn't exist, create a new Ressource with this data.
     */
    create: XOR<RessourceCreateInput, RessourceUncheckedCreateInput>
    /**
     * In case the Ressource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RessourceUpdateInput, RessourceUncheckedUpdateInput>
  }

  /**
   * Ressource delete
   */
  export type RessourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
    /**
     * Filter which Ressource to delete.
     */
    where: RessourceWhereUniqueInput
  }

  /**
   * Ressource deleteMany
   */
  export type RessourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ressources to delete
     */
    where?: RessourceWhereInput
    /**
     * Limit how many Ressources to delete.
     */
    limit?: number
  }

  /**
   * Ressource without action
   */
  export type RessourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ressource
     */
    select?: RessourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ressource
     */
    omit?: RessourceOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    password: 'password',
    telephone: 'telephone',
    role: 'role',
    avatar: 'avatar',
    dateInscription: 'dateInscription'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AnnonceScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    type: 'type',
    description: 'description',
    contenu: 'contenu',
    organisation: 'organisation',
    organisationId: 'organisationId',
    lieu: 'lieu',
    date: 'date',
    dateFin: 'dateFin',
    deadline: 'deadline',
    image: 'image',
    categories: 'categories',
    status: 'status',
    vues: 'vues',
    details: 'details',
    auteurId: 'auteurId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnnonceScalarFieldEnum = (typeof AnnonceScalarFieldEnum)[keyof typeof AnnonceScalarFieldEnum]


  export const CandidatureScalarFieldEnum: {
    id: 'id',
    annonceId: 'annonceId',
    candidatId: 'candidatId',
    message: 'message',
    cv: 'cv',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type CandidatureScalarFieldEnum = (typeof CandidatureScalarFieldEnum)[keyof typeof CandidatureScalarFieldEnum]


  export const RdvScalarFieldEnum: {
    id: 'id',
    type: 'type',
    professionnelId: 'professionnelId',
    date: 'date',
    heure: 'heure',
    motif: 'motif',
    status: 'status',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RdvScalarFieldEnum = (typeof RdvScalarFieldEnum)[keyof typeof RdvScalarFieldEnum]


  export const GroupeScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description',
    horaire: 'horaire',
    lieu: 'lieu',
    placesMax: 'placesMax',
    placesDisponibles: 'placesDisponibles',
    animateur: 'animateur',
    image: 'image',
    thematiques: 'thematiques',
    createdAt: 'createdAt'
  };

  export type GroupeScalarFieldEnum = (typeof GroupeScalarFieldEnum)[keyof typeof GroupeScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    message: 'message',
    type: 'type',
    read: 'read',
    link: 'link',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ContactUrgenceScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    telephone: 'telephone',
    relation: 'relation',
    userId: 'userId'
  };

  export type ContactUrgenceScalarFieldEnum = (typeof ContactUrgenceScalarFieldEnum)[keyof typeof ContactUrgenceScalarFieldEnum]


  export const RessourceScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    description: 'description',
    categorie: 'categorie',
    type: 'type',
    url: 'url',
    image: 'image',
    createdAt: 'createdAt'
  };

  export type RessourceScalarFieldEnum = (typeof RessourceScalarFieldEnum)[keyof typeof RessourceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'AnnonceType'
   */
  export type EnumAnnonceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnonceType'>
    


  /**
   * Reference to a field of type 'AnnonceStatus'
   */
  export type EnumAnnonceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnonceStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'CandidatureStatus'
   */
  export type EnumCandidatureStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CandidatureStatus'>
    


  /**
   * Reference to a field of type 'RdvStatus'
   */
  export type EnumRdvStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RdvStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    telephone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    dateInscription?: DateTimeFilter<"User"> | Date | string
    annonces?: AnnonceListRelationFilter
    candidatures?: CandidatureListRelationFilter
    rendezVous?: RdvListRelationFilter
    contactsUrgence?: ContactUrgenceListRelationFilter
    notifications?: NotificationListRelationFilter
    groupes?: GroupeListRelationFilter
    rdvPro?: RdvListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    telephone?: SortOrderInput | SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    dateInscription?: SortOrder
    annonces?: AnnonceOrderByRelationAggregateInput
    candidatures?: CandidatureOrderByRelationAggregateInput
    rendezVous?: RdvOrderByRelationAggregateInput
    contactsUrgence?: ContactUrgenceOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    groupes?: GroupeOrderByRelationAggregateInput
    rdvPro?: RdvOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    telephone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    dateInscription?: DateTimeFilter<"User"> | Date | string
    annonces?: AnnonceListRelationFilter
    candidatures?: CandidatureListRelationFilter
    rendezVous?: RdvListRelationFilter
    contactsUrgence?: ContactUrgenceListRelationFilter
    notifications?: NotificationListRelationFilter
    groupes?: GroupeListRelationFilter
    rdvPro?: RdvListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    telephone?: SortOrderInput | SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    dateInscription?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nom?: StringWithAggregatesFilter<"User"> | string
    prenom?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    telephone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    dateInscription?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AnnonceWhereInput = {
    AND?: AnnonceWhereInput | AnnonceWhereInput[]
    OR?: AnnonceWhereInput[]
    NOT?: AnnonceWhereInput | AnnonceWhereInput[]
    id?: StringFilter<"Annonce"> | string
    titre?: StringFilter<"Annonce"> | string
    type?: EnumAnnonceTypeFilter<"Annonce"> | $Enums.AnnonceType
    description?: StringFilter<"Annonce"> | string
    contenu?: StringNullableFilter<"Annonce"> | string | null
    organisation?: StringFilter<"Annonce"> | string
    organisationId?: StringNullableFilter<"Annonce"> | string | null
    lieu?: StringFilter<"Annonce"> | string
    date?: DateTimeFilter<"Annonce"> | Date | string
    dateFin?: DateTimeNullableFilter<"Annonce"> | Date | string | null
    deadline?: DateTimeNullableFilter<"Annonce"> | Date | string | null
    image?: StringNullableFilter<"Annonce"> | string | null
    categories?: StringFilter<"Annonce"> | string
    status?: EnumAnnonceStatusFilter<"Annonce"> | $Enums.AnnonceStatus
    vues?: IntFilter<"Annonce"> | number
    details?: JsonNullableFilter<"Annonce">
    auteurId?: StringFilter<"Annonce"> | string
    createdAt?: DateTimeFilter<"Annonce"> | Date | string
    updatedAt?: DateTimeFilter<"Annonce"> | Date | string
    auteur?: XOR<UserScalarRelationFilter, UserWhereInput>
    candidatures?: CandidatureListRelationFilter
  }

  export type AnnonceOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    type?: SortOrder
    description?: SortOrder
    contenu?: SortOrderInput | SortOrder
    organisation?: SortOrder
    organisationId?: SortOrderInput | SortOrder
    lieu?: SortOrder
    date?: SortOrder
    dateFin?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    categories?: SortOrder
    status?: SortOrder
    vues?: SortOrder
    details?: SortOrderInput | SortOrder
    auteurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auteur?: UserOrderByWithRelationInput
    candidatures?: CandidatureOrderByRelationAggregateInput
  }

  export type AnnonceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnonceWhereInput | AnnonceWhereInput[]
    OR?: AnnonceWhereInput[]
    NOT?: AnnonceWhereInput | AnnonceWhereInput[]
    titre?: StringFilter<"Annonce"> | string
    type?: EnumAnnonceTypeFilter<"Annonce"> | $Enums.AnnonceType
    description?: StringFilter<"Annonce"> | string
    contenu?: StringNullableFilter<"Annonce"> | string | null
    organisation?: StringFilter<"Annonce"> | string
    organisationId?: StringNullableFilter<"Annonce"> | string | null
    lieu?: StringFilter<"Annonce"> | string
    date?: DateTimeFilter<"Annonce"> | Date | string
    dateFin?: DateTimeNullableFilter<"Annonce"> | Date | string | null
    deadline?: DateTimeNullableFilter<"Annonce"> | Date | string | null
    image?: StringNullableFilter<"Annonce"> | string | null
    categories?: StringFilter<"Annonce"> | string
    status?: EnumAnnonceStatusFilter<"Annonce"> | $Enums.AnnonceStatus
    vues?: IntFilter<"Annonce"> | number
    details?: JsonNullableFilter<"Annonce">
    auteurId?: StringFilter<"Annonce"> | string
    createdAt?: DateTimeFilter<"Annonce"> | Date | string
    updatedAt?: DateTimeFilter<"Annonce"> | Date | string
    auteur?: XOR<UserScalarRelationFilter, UserWhereInput>
    candidatures?: CandidatureListRelationFilter
  }, "id">

  export type AnnonceOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    type?: SortOrder
    description?: SortOrder
    contenu?: SortOrderInput | SortOrder
    organisation?: SortOrder
    organisationId?: SortOrderInput | SortOrder
    lieu?: SortOrder
    date?: SortOrder
    dateFin?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    categories?: SortOrder
    status?: SortOrder
    vues?: SortOrder
    details?: SortOrderInput | SortOrder
    auteurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnnonceCountOrderByAggregateInput
    _avg?: AnnonceAvgOrderByAggregateInput
    _max?: AnnonceMaxOrderByAggregateInput
    _min?: AnnonceMinOrderByAggregateInput
    _sum?: AnnonceSumOrderByAggregateInput
  }

  export type AnnonceScalarWhereWithAggregatesInput = {
    AND?: AnnonceScalarWhereWithAggregatesInput | AnnonceScalarWhereWithAggregatesInput[]
    OR?: AnnonceScalarWhereWithAggregatesInput[]
    NOT?: AnnonceScalarWhereWithAggregatesInput | AnnonceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Annonce"> | string
    titre?: StringWithAggregatesFilter<"Annonce"> | string
    type?: EnumAnnonceTypeWithAggregatesFilter<"Annonce"> | $Enums.AnnonceType
    description?: StringWithAggregatesFilter<"Annonce"> | string
    contenu?: StringNullableWithAggregatesFilter<"Annonce"> | string | null
    organisation?: StringWithAggregatesFilter<"Annonce"> | string
    organisationId?: StringNullableWithAggregatesFilter<"Annonce"> | string | null
    lieu?: StringWithAggregatesFilter<"Annonce"> | string
    date?: DateTimeWithAggregatesFilter<"Annonce"> | Date | string
    dateFin?: DateTimeNullableWithAggregatesFilter<"Annonce"> | Date | string | null
    deadline?: DateTimeNullableWithAggregatesFilter<"Annonce"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"Annonce"> | string | null
    categories?: StringWithAggregatesFilter<"Annonce"> | string
    status?: EnumAnnonceStatusWithAggregatesFilter<"Annonce"> | $Enums.AnnonceStatus
    vues?: IntWithAggregatesFilter<"Annonce"> | number
    details?: JsonNullableWithAggregatesFilter<"Annonce">
    auteurId?: StringWithAggregatesFilter<"Annonce"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Annonce"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Annonce"> | Date | string
  }

  export type CandidatureWhereInput = {
    AND?: CandidatureWhereInput | CandidatureWhereInput[]
    OR?: CandidatureWhereInput[]
    NOT?: CandidatureWhereInput | CandidatureWhereInput[]
    id?: StringFilter<"Candidature"> | string
    annonceId?: StringFilter<"Candidature"> | string
    candidatId?: StringFilter<"Candidature"> | string
    message?: StringNullableFilter<"Candidature"> | string | null
    cv?: StringNullableFilter<"Candidature"> | string | null
    status?: EnumCandidatureStatusFilter<"Candidature"> | $Enums.CandidatureStatus
    createdAt?: DateTimeFilter<"Candidature"> | Date | string
    annonce?: XOR<AnnonceScalarRelationFilter, AnnonceWhereInput>
    candidat?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CandidatureOrderByWithRelationInput = {
    id?: SortOrder
    annonceId?: SortOrder
    candidatId?: SortOrder
    message?: SortOrderInput | SortOrder
    cv?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    annonce?: AnnonceOrderByWithRelationInput
    candidat?: UserOrderByWithRelationInput
  }

  export type CandidatureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CandidatureWhereInput | CandidatureWhereInput[]
    OR?: CandidatureWhereInput[]
    NOT?: CandidatureWhereInput | CandidatureWhereInput[]
    annonceId?: StringFilter<"Candidature"> | string
    candidatId?: StringFilter<"Candidature"> | string
    message?: StringNullableFilter<"Candidature"> | string | null
    cv?: StringNullableFilter<"Candidature"> | string | null
    status?: EnumCandidatureStatusFilter<"Candidature"> | $Enums.CandidatureStatus
    createdAt?: DateTimeFilter<"Candidature"> | Date | string
    annonce?: XOR<AnnonceScalarRelationFilter, AnnonceWhereInput>
    candidat?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CandidatureOrderByWithAggregationInput = {
    id?: SortOrder
    annonceId?: SortOrder
    candidatId?: SortOrder
    message?: SortOrderInput | SortOrder
    cv?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: CandidatureCountOrderByAggregateInput
    _max?: CandidatureMaxOrderByAggregateInput
    _min?: CandidatureMinOrderByAggregateInput
  }

  export type CandidatureScalarWhereWithAggregatesInput = {
    AND?: CandidatureScalarWhereWithAggregatesInput | CandidatureScalarWhereWithAggregatesInput[]
    OR?: CandidatureScalarWhereWithAggregatesInput[]
    NOT?: CandidatureScalarWhereWithAggregatesInput | CandidatureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Candidature"> | string
    annonceId?: StringWithAggregatesFilter<"Candidature"> | string
    candidatId?: StringWithAggregatesFilter<"Candidature"> | string
    message?: StringNullableWithAggregatesFilter<"Candidature"> | string | null
    cv?: StringNullableWithAggregatesFilter<"Candidature"> | string | null
    status?: EnumCandidatureStatusWithAggregatesFilter<"Candidature"> | $Enums.CandidatureStatus
    createdAt?: DateTimeWithAggregatesFilter<"Candidature"> | Date | string
  }

  export type RdvWhereInput = {
    AND?: RdvWhereInput | RdvWhereInput[]
    OR?: RdvWhereInput[]
    NOT?: RdvWhereInput | RdvWhereInput[]
    id?: StringFilter<"Rdv"> | string
    type?: StringFilter<"Rdv"> | string
    professionnelId?: StringNullableFilter<"Rdv"> | string | null
    date?: DateTimeFilter<"Rdv"> | Date | string
    heure?: StringFilter<"Rdv"> | string
    motif?: StringFilter<"Rdv"> | string
    status?: EnumRdvStatusFilter<"Rdv"> | $Enums.RdvStatus
    userId?: StringFilter<"Rdv"> | string
    createdAt?: DateTimeFilter<"Rdv"> | Date | string
    updatedAt?: DateTimeFilter<"Rdv"> | Date | string
    professionnel?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RdvOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    professionnelId?: SortOrderInput | SortOrder
    date?: SortOrder
    heure?: SortOrder
    motif?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professionnel?: UserOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RdvWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RdvWhereInput | RdvWhereInput[]
    OR?: RdvWhereInput[]
    NOT?: RdvWhereInput | RdvWhereInput[]
    type?: StringFilter<"Rdv"> | string
    professionnelId?: StringNullableFilter<"Rdv"> | string | null
    date?: DateTimeFilter<"Rdv"> | Date | string
    heure?: StringFilter<"Rdv"> | string
    motif?: StringFilter<"Rdv"> | string
    status?: EnumRdvStatusFilter<"Rdv"> | $Enums.RdvStatus
    userId?: StringFilter<"Rdv"> | string
    createdAt?: DateTimeFilter<"Rdv"> | Date | string
    updatedAt?: DateTimeFilter<"Rdv"> | Date | string
    professionnel?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RdvOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    professionnelId?: SortOrderInput | SortOrder
    date?: SortOrder
    heure?: SortOrder
    motif?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RdvCountOrderByAggregateInput
    _max?: RdvMaxOrderByAggregateInput
    _min?: RdvMinOrderByAggregateInput
  }

  export type RdvScalarWhereWithAggregatesInput = {
    AND?: RdvScalarWhereWithAggregatesInput | RdvScalarWhereWithAggregatesInput[]
    OR?: RdvScalarWhereWithAggregatesInput[]
    NOT?: RdvScalarWhereWithAggregatesInput | RdvScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rdv"> | string
    type?: StringWithAggregatesFilter<"Rdv"> | string
    professionnelId?: StringNullableWithAggregatesFilter<"Rdv"> | string | null
    date?: DateTimeWithAggregatesFilter<"Rdv"> | Date | string
    heure?: StringWithAggregatesFilter<"Rdv"> | string
    motif?: StringWithAggregatesFilter<"Rdv"> | string
    status?: EnumRdvStatusWithAggregatesFilter<"Rdv"> | $Enums.RdvStatus
    userId?: StringWithAggregatesFilter<"Rdv"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Rdv"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rdv"> | Date | string
  }

  export type GroupeWhereInput = {
    AND?: GroupeWhereInput | GroupeWhereInput[]
    OR?: GroupeWhereInput[]
    NOT?: GroupeWhereInput | GroupeWhereInput[]
    id?: StringFilter<"Groupe"> | string
    nom?: StringFilter<"Groupe"> | string
    description?: StringFilter<"Groupe"> | string
    horaire?: StringFilter<"Groupe"> | string
    lieu?: StringFilter<"Groupe"> | string
    placesMax?: IntFilter<"Groupe"> | number
    placesDisponibles?: IntFilter<"Groupe"> | number
    animateur?: StringFilter<"Groupe"> | string
    image?: StringNullableFilter<"Groupe"> | string | null
    thematiques?: StringFilter<"Groupe"> | string
    createdAt?: DateTimeFilter<"Groupe"> | Date | string
    membres?: UserListRelationFilter
  }

  export type GroupeOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    horaire?: SortOrder
    lieu?: SortOrder
    placesMax?: SortOrder
    placesDisponibles?: SortOrder
    animateur?: SortOrder
    image?: SortOrderInput | SortOrder
    thematiques?: SortOrder
    createdAt?: SortOrder
    membres?: UserOrderByRelationAggregateInput
  }

  export type GroupeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupeWhereInput | GroupeWhereInput[]
    OR?: GroupeWhereInput[]
    NOT?: GroupeWhereInput | GroupeWhereInput[]
    nom?: StringFilter<"Groupe"> | string
    description?: StringFilter<"Groupe"> | string
    horaire?: StringFilter<"Groupe"> | string
    lieu?: StringFilter<"Groupe"> | string
    placesMax?: IntFilter<"Groupe"> | number
    placesDisponibles?: IntFilter<"Groupe"> | number
    animateur?: StringFilter<"Groupe"> | string
    image?: StringNullableFilter<"Groupe"> | string | null
    thematiques?: StringFilter<"Groupe"> | string
    createdAt?: DateTimeFilter<"Groupe"> | Date | string
    membres?: UserListRelationFilter
  }, "id">

  export type GroupeOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    horaire?: SortOrder
    lieu?: SortOrder
    placesMax?: SortOrder
    placesDisponibles?: SortOrder
    animateur?: SortOrder
    image?: SortOrderInput | SortOrder
    thematiques?: SortOrder
    createdAt?: SortOrder
    _count?: GroupeCountOrderByAggregateInput
    _avg?: GroupeAvgOrderByAggregateInput
    _max?: GroupeMaxOrderByAggregateInput
    _min?: GroupeMinOrderByAggregateInput
    _sum?: GroupeSumOrderByAggregateInput
  }

  export type GroupeScalarWhereWithAggregatesInput = {
    AND?: GroupeScalarWhereWithAggregatesInput | GroupeScalarWhereWithAggregatesInput[]
    OR?: GroupeScalarWhereWithAggregatesInput[]
    NOT?: GroupeScalarWhereWithAggregatesInput | GroupeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Groupe"> | string
    nom?: StringWithAggregatesFilter<"Groupe"> | string
    description?: StringWithAggregatesFilter<"Groupe"> | string
    horaire?: StringWithAggregatesFilter<"Groupe"> | string
    lieu?: StringWithAggregatesFilter<"Groupe"> | string
    placesMax?: IntWithAggregatesFilter<"Groupe"> | number
    placesDisponibles?: IntWithAggregatesFilter<"Groupe"> | number
    animateur?: StringWithAggregatesFilter<"Groupe"> | string
    image?: StringNullableWithAggregatesFilter<"Groupe"> | string | null
    thematiques?: StringWithAggregatesFilter<"Groupe"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Groupe"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    link?: StringNullableFilter<"Notification"> | string | null
    userId?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    read?: SortOrder
    link?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    link?: StringNullableFilter<"Notification"> | string | null
    userId?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    read?: SortOrder
    link?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    link?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    userId?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type ContactUrgenceWhereInput = {
    AND?: ContactUrgenceWhereInput | ContactUrgenceWhereInput[]
    OR?: ContactUrgenceWhereInput[]
    NOT?: ContactUrgenceWhereInput | ContactUrgenceWhereInput[]
    id?: StringFilter<"ContactUrgence"> | string
    nom?: StringFilter<"ContactUrgence"> | string
    prenom?: StringFilter<"ContactUrgence"> | string
    telephone?: StringFilter<"ContactUrgence"> | string
    relation?: StringFilter<"ContactUrgence"> | string
    userId?: StringFilter<"ContactUrgence"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ContactUrgenceOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    relation?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ContactUrgenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactUrgenceWhereInput | ContactUrgenceWhereInput[]
    OR?: ContactUrgenceWhereInput[]
    NOT?: ContactUrgenceWhereInput | ContactUrgenceWhereInput[]
    nom?: StringFilter<"ContactUrgence"> | string
    prenom?: StringFilter<"ContactUrgence"> | string
    telephone?: StringFilter<"ContactUrgence"> | string
    relation?: StringFilter<"ContactUrgence"> | string
    userId?: StringFilter<"ContactUrgence"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ContactUrgenceOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    relation?: SortOrder
    userId?: SortOrder
    _count?: ContactUrgenceCountOrderByAggregateInput
    _max?: ContactUrgenceMaxOrderByAggregateInput
    _min?: ContactUrgenceMinOrderByAggregateInput
  }

  export type ContactUrgenceScalarWhereWithAggregatesInput = {
    AND?: ContactUrgenceScalarWhereWithAggregatesInput | ContactUrgenceScalarWhereWithAggregatesInput[]
    OR?: ContactUrgenceScalarWhereWithAggregatesInput[]
    NOT?: ContactUrgenceScalarWhereWithAggregatesInput | ContactUrgenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactUrgence"> | string
    nom?: StringWithAggregatesFilter<"ContactUrgence"> | string
    prenom?: StringWithAggregatesFilter<"ContactUrgence"> | string
    telephone?: StringWithAggregatesFilter<"ContactUrgence"> | string
    relation?: StringWithAggregatesFilter<"ContactUrgence"> | string
    userId?: StringWithAggregatesFilter<"ContactUrgence"> | string
  }

  export type RessourceWhereInput = {
    AND?: RessourceWhereInput | RessourceWhereInput[]
    OR?: RessourceWhereInput[]
    NOT?: RessourceWhereInput | RessourceWhereInput[]
    id?: StringFilter<"Ressource"> | string
    titre?: StringFilter<"Ressource"> | string
    description?: StringFilter<"Ressource"> | string
    categorie?: StringFilter<"Ressource"> | string
    type?: StringFilter<"Ressource"> | string
    url?: StringFilter<"Ressource"> | string
    image?: StringNullableFilter<"Ressource"> | string | null
    createdAt?: DateTimeFilter<"Ressource"> | Date | string
  }

  export type RessourceOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    categorie?: SortOrder
    type?: SortOrder
    url?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type RessourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RessourceWhereInput | RessourceWhereInput[]
    OR?: RessourceWhereInput[]
    NOT?: RessourceWhereInput | RessourceWhereInput[]
    titre?: StringFilter<"Ressource"> | string
    description?: StringFilter<"Ressource"> | string
    categorie?: StringFilter<"Ressource"> | string
    type?: StringFilter<"Ressource"> | string
    url?: StringFilter<"Ressource"> | string
    image?: StringNullableFilter<"Ressource"> | string | null
    createdAt?: DateTimeFilter<"Ressource"> | Date | string
  }, "id">

  export type RessourceOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    categorie?: SortOrder
    type?: SortOrder
    url?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RessourceCountOrderByAggregateInput
    _max?: RessourceMaxOrderByAggregateInput
    _min?: RessourceMinOrderByAggregateInput
  }

  export type RessourceScalarWhereWithAggregatesInput = {
    AND?: RessourceScalarWhereWithAggregatesInput | RessourceScalarWhereWithAggregatesInput[]
    OR?: RessourceScalarWhereWithAggregatesInput[]
    NOT?: RessourceScalarWhereWithAggregatesInput | RessourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ressource"> | string
    titre?: StringWithAggregatesFilter<"Ressource"> | string
    description?: StringWithAggregatesFilter<"Ressource"> | string
    categorie?: StringWithAggregatesFilter<"Ressource"> | string
    type?: StringWithAggregatesFilter<"Ressource"> | string
    url?: StringWithAggregatesFilter<"Ressource"> | string
    image?: StringNullableWithAggregatesFilter<"Ressource"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ressource"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    dateInscription?: Date | string
    annonces?: AnnonceCreateNestedManyWithoutAuteurInput
    candidatures?: CandidatureCreateNestedManyWithoutCandidatInput
    rendezVous?: RdvCreateNestedManyWithoutUserInput
    contactsUrgence?: ContactUrgenceCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    groupes?: GroupeCreateNestedManyWithoutMembresInput
    rdvPro?: RdvCreateNestedManyWithoutProfessionnelInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    dateInscription?: Date | string
    annonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    candidatures?: CandidatureUncheckedCreateNestedManyWithoutCandidatInput
    rendezVous?: RdvUncheckedCreateNestedManyWithoutUserInput
    contactsUrgence?: ContactUrgenceUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    groupes?: GroupeUncheckedCreateNestedManyWithoutMembresInput
    rdvPro?: RdvUncheckedCreateNestedManyWithoutProfessionnelInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    candidatures?: CandidatureUpdateManyWithoutCandidatNestedInput
    rendezVous?: RdvUpdateManyWithoutUserNestedInput
    contactsUrgence?: ContactUrgenceUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    groupes?: GroupeUpdateManyWithoutMembresNestedInput
    rdvPro?: RdvUpdateManyWithoutProfessionnelNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    candidatures?: CandidatureUncheckedUpdateManyWithoutCandidatNestedInput
    rendezVous?: RdvUncheckedUpdateManyWithoutUserNestedInput
    contactsUrgence?: ContactUrgenceUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    groupes?: GroupeUncheckedUpdateManyWithoutMembresNestedInput
    rdvPro?: RdvUncheckedUpdateManyWithoutProfessionnelNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    dateInscription?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceCreateInput = {
    id?: string
    titre: string
    type: $Enums.AnnonceType
    description: string
    contenu?: string | null
    organisation: string
    organisationId?: string | null
    lieu: string
    date: Date | string
    dateFin?: Date | string | null
    deadline?: Date | string | null
    image?: string | null
    categories: string
    status?: $Enums.AnnonceStatus
    vues?: number
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    auteur: UserCreateNestedOneWithoutAnnoncesInput
    candidatures?: CandidatureCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceUncheckedCreateInput = {
    id?: string
    titre: string
    type: $Enums.AnnonceType
    description: string
    contenu?: string | null
    organisation: string
    organisationId?: string | null
    lieu: string
    date: Date | string
    dateFin?: Date | string | null
    deadline?: Date | string | null
    image?: string | null
    categories: string
    status?: $Enums.AnnonceStatus
    vues?: number
    details?: NullableJsonNullValueInput | InputJsonValue
    auteurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    candidatures?: CandidatureUncheckedCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnonceTypeFieldUpdateOperationsInput | $Enums.AnnonceType
    description?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    organisation?: StringFieldUpdateOperationsInput | string
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    lieu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: StringFieldUpdateOperationsInput | string
    status?: EnumAnnonceStatusFieldUpdateOperationsInput | $Enums.AnnonceStatus
    vues?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: UserUpdateOneRequiredWithoutAnnoncesNestedInput
    candidatures?: CandidatureUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnonceTypeFieldUpdateOperationsInput | $Enums.AnnonceType
    description?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    organisation?: StringFieldUpdateOperationsInput | string
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    lieu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: StringFieldUpdateOperationsInput | string
    status?: EnumAnnonceStatusFieldUpdateOperationsInput | $Enums.AnnonceStatus
    vues?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    auteurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidatures?: CandidatureUncheckedUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceCreateManyInput = {
    id?: string
    titre: string
    type: $Enums.AnnonceType
    description: string
    contenu?: string | null
    organisation: string
    organisationId?: string | null
    lieu: string
    date: Date | string
    dateFin?: Date | string | null
    deadline?: Date | string | null
    image?: string | null
    categories: string
    status?: $Enums.AnnonceStatus
    vues?: number
    details?: NullableJsonNullValueInput | InputJsonValue
    auteurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnonceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnonceTypeFieldUpdateOperationsInput | $Enums.AnnonceType
    description?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    organisation?: StringFieldUpdateOperationsInput | string
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    lieu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: StringFieldUpdateOperationsInput | string
    status?: EnumAnnonceStatusFieldUpdateOperationsInput | $Enums.AnnonceStatus
    vues?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnonceTypeFieldUpdateOperationsInput | $Enums.AnnonceType
    description?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    organisation?: StringFieldUpdateOperationsInput | string
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    lieu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: StringFieldUpdateOperationsInput | string
    status?: EnumAnnonceStatusFieldUpdateOperationsInput | $Enums.AnnonceStatus
    vues?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    auteurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatureCreateInput = {
    id?: string
    message?: string | null
    cv?: string | null
    status?: $Enums.CandidatureStatus
    createdAt?: Date | string
    annonce: AnnonceCreateNestedOneWithoutCandidaturesInput
    candidat: UserCreateNestedOneWithoutCandidaturesInput
  }

  export type CandidatureUncheckedCreateInput = {
    id?: string
    annonceId: string
    candidatId: string
    message?: string | null
    cv?: string | null
    status?: $Enums.CandidatureStatus
    createdAt?: Date | string
  }

  export type CandidatureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    cv?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidatureStatusFieldUpdateOperationsInput | $Enums.CandidatureStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    annonce?: AnnonceUpdateOneRequiredWithoutCandidaturesNestedInput
    candidat?: UserUpdateOneRequiredWithoutCandidaturesNestedInput
  }

  export type CandidatureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    annonceId?: StringFieldUpdateOperationsInput | string
    candidatId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    cv?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidatureStatusFieldUpdateOperationsInput | $Enums.CandidatureStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatureCreateManyInput = {
    id?: string
    annonceId: string
    candidatId: string
    message?: string | null
    cv?: string | null
    status?: $Enums.CandidatureStatus
    createdAt?: Date | string
  }

  export type CandidatureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    cv?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidatureStatusFieldUpdateOperationsInput | $Enums.CandidatureStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    annonceId?: StringFieldUpdateOperationsInput | string
    candidatId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    cv?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidatureStatusFieldUpdateOperationsInput | $Enums.CandidatureStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RdvCreateInput = {
    id?: string
    type: string
    date: Date | string
    heure: string
    motif: string
    status?: $Enums.RdvStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    professionnel?: UserCreateNestedOneWithoutRdvProInput
    user: UserCreateNestedOneWithoutRendezVousInput
  }

  export type RdvUncheckedCreateInput = {
    id?: string
    type: string
    professionnelId?: string | null
    date: Date | string
    heure: string
    motif: string
    status?: $Enums.RdvStatus
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RdvUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    status?: EnumRdvStatusFieldUpdateOperationsInput | $Enums.RdvStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionnel?: UserUpdateOneWithoutRdvProNestedInput
    user?: UserUpdateOneRequiredWithoutRendezVousNestedInput
  }

  export type RdvUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    professionnelId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    status?: EnumRdvStatusFieldUpdateOperationsInput | $Enums.RdvStatus
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RdvCreateManyInput = {
    id?: string
    type: string
    professionnelId?: string | null
    date: Date | string
    heure: string
    motif: string
    status?: $Enums.RdvStatus
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RdvUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    status?: EnumRdvStatusFieldUpdateOperationsInput | $Enums.RdvStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RdvUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    professionnelId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    status?: EnumRdvStatusFieldUpdateOperationsInput | $Enums.RdvStatus
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupeCreateInput = {
    id?: string
    nom: string
    description: string
    horaire: string
    lieu: string
    placesMax: number
    placesDisponibles: number
    animateur: string
    image?: string | null
    thematiques: string
    createdAt?: Date | string
    membres?: UserCreateNestedManyWithoutGroupesInput
  }

  export type GroupeUncheckedCreateInput = {
    id?: string
    nom: string
    description: string
    horaire: string
    lieu: string
    placesMax: number
    placesDisponibles: number
    animateur: string
    image?: string | null
    thematiques: string
    createdAt?: Date | string
    membres?: UserUncheckedCreateNestedManyWithoutGroupesInput
  }

  export type GroupeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    horaire?: StringFieldUpdateOperationsInput | string
    lieu?: StringFieldUpdateOperationsInput | string
    placesMax?: IntFieldUpdateOperationsInput | number
    placesDisponibles?: IntFieldUpdateOperationsInput | number
    animateur?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    thematiques?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membres?: UserUpdateManyWithoutGroupesNestedInput
  }

  export type GroupeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    horaire?: StringFieldUpdateOperationsInput | string
    lieu?: StringFieldUpdateOperationsInput | string
    placesMax?: IntFieldUpdateOperationsInput | number
    placesDisponibles?: IntFieldUpdateOperationsInput | number
    animateur?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    thematiques?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membres?: UserUncheckedUpdateManyWithoutGroupesNestedInput
  }

  export type GroupeCreateManyInput = {
    id?: string
    nom: string
    description: string
    horaire: string
    lieu: string
    placesMax: number
    placesDisponibles: number
    animateur: string
    image?: string | null
    thematiques: string
    createdAt?: Date | string
  }

  export type GroupeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    horaire?: StringFieldUpdateOperationsInput | string
    lieu?: StringFieldUpdateOperationsInput | string
    placesMax?: IntFieldUpdateOperationsInput | number
    placesDisponibles?: IntFieldUpdateOperationsInput | number
    animateur?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    thematiques?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    horaire?: StringFieldUpdateOperationsInput | string
    lieu?: StringFieldUpdateOperationsInput | string
    placesMax?: IntFieldUpdateOperationsInput | number
    placesDisponibles?: IntFieldUpdateOperationsInput | number
    animateur?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    thematiques?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    type: string
    read?: boolean
    link?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    title: string
    message: string
    type: string
    read?: boolean
    link?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    title: string
    message: string
    type: string
    read?: boolean
    link?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUrgenceCreateInput = {
    id?: string
    nom: string
    prenom: string
    telephone: string
    relation: string
    user: UserCreateNestedOneWithoutContactsUrgenceInput
  }

  export type ContactUrgenceUncheckedCreateInput = {
    id?: string
    nom: string
    prenom: string
    telephone: string
    relation: string
    userId: string
  }

  export type ContactUrgenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutContactsUrgenceNestedInput
  }

  export type ContactUrgenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactUrgenceCreateManyInput = {
    id?: string
    nom: string
    prenom: string
    telephone: string
    relation: string
    userId: string
  }

  export type ContactUrgenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
  }

  export type ContactUrgenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RessourceCreateInput = {
    id?: string
    titre: string
    description: string
    categorie: string
    type: string
    url: string
    image?: string | null
    createdAt?: Date | string
  }

  export type RessourceUncheckedCreateInput = {
    id?: string
    titre: string
    description: string
    categorie: string
    type: string
    url: string
    image?: string | null
    createdAt?: Date | string
  }

  export type RessourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RessourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RessourceCreateManyInput = {
    id?: string
    titre: string
    description: string
    categorie: string
    type: string
    url: string
    image?: string | null
    createdAt?: Date | string
  }

  export type RessourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RessourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categorie?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AnnonceListRelationFilter = {
    every?: AnnonceWhereInput
    some?: AnnonceWhereInput
    none?: AnnonceWhereInput
  }

  export type CandidatureListRelationFilter = {
    every?: CandidatureWhereInput
    some?: CandidatureWhereInput
    none?: CandidatureWhereInput
  }

  export type RdvListRelationFilter = {
    every?: RdvWhereInput
    some?: RdvWhereInput
    none?: RdvWhereInput
  }

  export type ContactUrgenceListRelationFilter = {
    every?: ContactUrgenceWhereInput
    some?: ContactUrgenceWhereInput
    none?: ContactUrgenceWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type GroupeListRelationFilter = {
    every?: GroupeWhereInput
    some?: GroupeWhereInput
    none?: GroupeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnnonceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RdvOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactUrgenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    dateInscription?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    dateInscription?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    dateInscription?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAnnonceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnonceType | EnumAnnonceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnnonceType[]
    notIn?: $Enums.AnnonceType[]
    not?: NestedEnumAnnonceTypeFilter<$PrismaModel> | $Enums.AnnonceType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumAnnonceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnonceStatus | EnumAnnonceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnnonceStatus[]
    notIn?: $Enums.AnnonceStatus[]
    not?: NestedEnumAnnonceStatusFilter<$PrismaModel> | $Enums.AnnonceStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AnnonceCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    type?: SortOrder
    description?: SortOrder
    contenu?: SortOrder
    organisation?: SortOrder
    organisationId?: SortOrder
    lieu?: SortOrder
    date?: SortOrder
    dateFin?: SortOrder
    deadline?: SortOrder
    image?: SortOrder
    categories?: SortOrder
    status?: SortOrder
    vues?: SortOrder
    details?: SortOrder
    auteurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnonceAvgOrderByAggregateInput = {
    vues?: SortOrder
  }

  export type AnnonceMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    type?: SortOrder
    description?: SortOrder
    contenu?: SortOrder
    organisation?: SortOrder
    organisationId?: SortOrder
    lieu?: SortOrder
    date?: SortOrder
    dateFin?: SortOrder
    deadline?: SortOrder
    image?: SortOrder
    categories?: SortOrder
    status?: SortOrder
    vues?: SortOrder
    auteurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnonceMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    type?: SortOrder
    description?: SortOrder
    contenu?: SortOrder
    organisation?: SortOrder
    organisationId?: SortOrder
    lieu?: SortOrder
    date?: SortOrder
    dateFin?: SortOrder
    deadline?: SortOrder
    image?: SortOrder
    categories?: SortOrder
    status?: SortOrder
    vues?: SortOrder
    auteurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnonceSumOrderByAggregateInput = {
    vues?: SortOrder
  }

  export type EnumAnnonceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnonceType | EnumAnnonceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnnonceType[]
    notIn?: $Enums.AnnonceType[]
    not?: NestedEnumAnnonceTypeWithAggregatesFilter<$PrismaModel> | $Enums.AnnonceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnnonceTypeFilter<$PrismaModel>
    _max?: NestedEnumAnnonceTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAnnonceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnonceStatus | EnumAnnonceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnnonceStatus[]
    notIn?: $Enums.AnnonceStatus[]
    not?: NestedEnumAnnonceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnnonceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnnonceStatusFilter<$PrismaModel>
    _max?: NestedEnumAnnonceStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumCandidatureStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CandidatureStatus | EnumCandidatureStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CandidatureStatus[]
    notIn?: $Enums.CandidatureStatus[]
    not?: NestedEnumCandidatureStatusFilter<$PrismaModel> | $Enums.CandidatureStatus
  }

  export type AnnonceScalarRelationFilter = {
    is?: AnnonceWhereInput
    isNot?: AnnonceWhereInput
  }

  export type CandidatureCountOrderByAggregateInput = {
    id?: SortOrder
    annonceId?: SortOrder
    candidatId?: SortOrder
    message?: SortOrder
    cv?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CandidatureMaxOrderByAggregateInput = {
    id?: SortOrder
    annonceId?: SortOrder
    candidatId?: SortOrder
    message?: SortOrder
    cv?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CandidatureMinOrderByAggregateInput = {
    id?: SortOrder
    annonceId?: SortOrder
    candidatId?: SortOrder
    message?: SortOrder
    cv?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumCandidatureStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CandidatureStatus | EnumCandidatureStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CandidatureStatus[]
    notIn?: $Enums.CandidatureStatus[]
    not?: NestedEnumCandidatureStatusWithAggregatesFilter<$PrismaModel> | $Enums.CandidatureStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCandidatureStatusFilter<$PrismaModel>
    _max?: NestedEnumCandidatureStatusFilter<$PrismaModel>
  }

  export type EnumRdvStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RdvStatus | EnumRdvStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RdvStatus[]
    notIn?: $Enums.RdvStatus[]
    not?: NestedEnumRdvStatusFilter<$PrismaModel> | $Enums.RdvStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type RdvCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    professionnelId?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    motif?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RdvMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    professionnelId?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    motif?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RdvMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    professionnelId?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    motif?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRdvStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RdvStatus | EnumRdvStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RdvStatus[]
    notIn?: $Enums.RdvStatus[]
    not?: NestedEnumRdvStatusWithAggregatesFilter<$PrismaModel> | $Enums.RdvStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRdvStatusFilter<$PrismaModel>
    _max?: NestedEnumRdvStatusFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupeCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    horaire?: SortOrder
    lieu?: SortOrder
    placesMax?: SortOrder
    placesDisponibles?: SortOrder
    animateur?: SortOrder
    image?: SortOrder
    thematiques?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupeAvgOrderByAggregateInput = {
    placesMax?: SortOrder
    placesDisponibles?: SortOrder
  }

  export type GroupeMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    horaire?: SortOrder
    lieu?: SortOrder
    placesMax?: SortOrder
    placesDisponibles?: SortOrder
    animateur?: SortOrder
    image?: SortOrder
    thematiques?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupeMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    horaire?: SortOrder
    lieu?: SortOrder
    placesMax?: SortOrder
    placesDisponibles?: SortOrder
    animateur?: SortOrder
    image?: SortOrder
    thematiques?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupeSumOrderByAggregateInput = {
    placesMax?: SortOrder
    placesDisponibles?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    read?: SortOrder
    link?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    read?: SortOrder
    link?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    read?: SortOrder
    link?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ContactUrgenceCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    relation?: SortOrder
    userId?: SortOrder
  }

  export type ContactUrgenceMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    relation?: SortOrder
    userId?: SortOrder
  }

  export type ContactUrgenceMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    relation?: SortOrder
    userId?: SortOrder
  }

  export type RessourceCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    categorie?: SortOrder
    type?: SortOrder
    url?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type RessourceMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    categorie?: SortOrder
    type?: SortOrder
    url?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type RessourceMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    categorie?: SortOrder
    type?: SortOrder
    url?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnonceCreateNestedManyWithoutAuteurInput = {
    create?: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput> | AnnonceCreateWithoutAuteurInput[] | AnnonceUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutAuteurInput | AnnonceCreateOrConnectWithoutAuteurInput[]
    createMany?: AnnonceCreateManyAuteurInputEnvelope
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type CandidatureCreateNestedManyWithoutCandidatInput = {
    create?: XOR<CandidatureCreateWithoutCandidatInput, CandidatureUncheckedCreateWithoutCandidatInput> | CandidatureCreateWithoutCandidatInput[] | CandidatureUncheckedCreateWithoutCandidatInput[]
    connectOrCreate?: CandidatureCreateOrConnectWithoutCandidatInput | CandidatureCreateOrConnectWithoutCandidatInput[]
    createMany?: CandidatureCreateManyCandidatInputEnvelope
    connect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
  }

  export type RdvCreateNestedManyWithoutUserInput = {
    create?: XOR<RdvCreateWithoutUserInput, RdvUncheckedCreateWithoutUserInput> | RdvCreateWithoutUserInput[] | RdvUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RdvCreateOrConnectWithoutUserInput | RdvCreateOrConnectWithoutUserInput[]
    createMany?: RdvCreateManyUserInputEnvelope
    connect?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
  }

  export type ContactUrgenceCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactUrgenceCreateWithoutUserInput, ContactUrgenceUncheckedCreateWithoutUserInput> | ContactUrgenceCreateWithoutUserInput[] | ContactUrgenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactUrgenceCreateOrConnectWithoutUserInput | ContactUrgenceCreateOrConnectWithoutUserInput[]
    createMany?: ContactUrgenceCreateManyUserInputEnvelope
    connect?: ContactUrgenceWhereUniqueInput | ContactUrgenceWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type GroupeCreateNestedManyWithoutMembresInput = {
    create?: XOR<GroupeCreateWithoutMembresInput, GroupeUncheckedCreateWithoutMembresInput> | GroupeCreateWithoutMembresInput[] | GroupeUncheckedCreateWithoutMembresInput[]
    connectOrCreate?: GroupeCreateOrConnectWithoutMembresInput | GroupeCreateOrConnectWithoutMembresInput[]
    connect?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
  }

  export type RdvCreateNestedManyWithoutProfessionnelInput = {
    create?: XOR<RdvCreateWithoutProfessionnelInput, RdvUncheckedCreateWithoutProfessionnelInput> | RdvCreateWithoutProfessionnelInput[] | RdvUncheckedCreateWithoutProfessionnelInput[]
    connectOrCreate?: RdvCreateOrConnectWithoutProfessionnelInput | RdvCreateOrConnectWithoutProfessionnelInput[]
    createMany?: RdvCreateManyProfessionnelInputEnvelope
    connect?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
  }

  export type AnnonceUncheckedCreateNestedManyWithoutAuteurInput = {
    create?: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput> | AnnonceCreateWithoutAuteurInput[] | AnnonceUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutAuteurInput | AnnonceCreateOrConnectWithoutAuteurInput[]
    createMany?: AnnonceCreateManyAuteurInputEnvelope
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type CandidatureUncheckedCreateNestedManyWithoutCandidatInput = {
    create?: XOR<CandidatureCreateWithoutCandidatInput, CandidatureUncheckedCreateWithoutCandidatInput> | CandidatureCreateWithoutCandidatInput[] | CandidatureUncheckedCreateWithoutCandidatInput[]
    connectOrCreate?: CandidatureCreateOrConnectWithoutCandidatInput | CandidatureCreateOrConnectWithoutCandidatInput[]
    createMany?: CandidatureCreateManyCandidatInputEnvelope
    connect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
  }

  export type RdvUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RdvCreateWithoutUserInput, RdvUncheckedCreateWithoutUserInput> | RdvCreateWithoutUserInput[] | RdvUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RdvCreateOrConnectWithoutUserInput | RdvCreateOrConnectWithoutUserInput[]
    createMany?: RdvCreateManyUserInputEnvelope
    connect?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
  }

  export type ContactUrgenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactUrgenceCreateWithoutUserInput, ContactUrgenceUncheckedCreateWithoutUserInput> | ContactUrgenceCreateWithoutUserInput[] | ContactUrgenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactUrgenceCreateOrConnectWithoutUserInput | ContactUrgenceCreateOrConnectWithoutUserInput[]
    createMany?: ContactUrgenceCreateManyUserInputEnvelope
    connect?: ContactUrgenceWhereUniqueInput | ContactUrgenceWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type GroupeUncheckedCreateNestedManyWithoutMembresInput = {
    create?: XOR<GroupeCreateWithoutMembresInput, GroupeUncheckedCreateWithoutMembresInput> | GroupeCreateWithoutMembresInput[] | GroupeUncheckedCreateWithoutMembresInput[]
    connectOrCreate?: GroupeCreateOrConnectWithoutMembresInput | GroupeCreateOrConnectWithoutMembresInput[]
    connect?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
  }

  export type RdvUncheckedCreateNestedManyWithoutProfessionnelInput = {
    create?: XOR<RdvCreateWithoutProfessionnelInput, RdvUncheckedCreateWithoutProfessionnelInput> | RdvCreateWithoutProfessionnelInput[] | RdvUncheckedCreateWithoutProfessionnelInput[]
    connectOrCreate?: RdvCreateOrConnectWithoutProfessionnelInput | RdvCreateOrConnectWithoutProfessionnelInput[]
    createMany?: RdvCreateManyProfessionnelInputEnvelope
    connect?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AnnonceUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput> | AnnonceCreateWithoutAuteurInput[] | AnnonceUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutAuteurInput | AnnonceCreateOrConnectWithoutAuteurInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutAuteurInput | AnnonceUpsertWithWhereUniqueWithoutAuteurInput[]
    createMany?: AnnonceCreateManyAuteurInputEnvelope
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutAuteurInput | AnnonceUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutAuteurInput | AnnonceUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type CandidatureUpdateManyWithoutCandidatNestedInput = {
    create?: XOR<CandidatureCreateWithoutCandidatInput, CandidatureUncheckedCreateWithoutCandidatInput> | CandidatureCreateWithoutCandidatInput[] | CandidatureUncheckedCreateWithoutCandidatInput[]
    connectOrCreate?: CandidatureCreateOrConnectWithoutCandidatInput | CandidatureCreateOrConnectWithoutCandidatInput[]
    upsert?: CandidatureUpsertWithWhereUniqueWithoutCandidatInput | CandidatureUpsertWithWhereUniqueWithoutCandidatInput[]
    createMany?: CandidatureCreateManyCandidatInputEnvelope
    set?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    disconnect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    delete?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    connect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    update?: CandidatureUpdateWithWhereUniqueWithoutCandidatInput | CandidatureUpdateWithWhereUniqueWithoutCandidatInput[]
    updateMany?: CandidatureUpdateManyWithWhereWithoutCandidatInput | CandidatureUpdateManyWithWhereWithoutCandidatInput[]
    deleteMany?: CandidatureScalarWhereInput | CandidatureScalarWhereInput[]
  }

  export type RdvUpdateManyWithoutUserNestedInput = {
    create?: XOR<RdvCreateWithoutUserInput, RdvUncheckedCreateWithoutUserInput> | RdvCreateWithoutUserInput[] | RdvUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RdvCreateOrConnectWithoutUserInput | RdvCreateOrConnectWithoutUserInput[]
    upsert?: RdvUpsertWithWhereUniqueWithoutUserInput | RdvUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RdvCreateManyUserInputEnvelope
    set?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
    disconnect?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
    delete?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
    connect?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
    update?: RdvUpdateWithWhereUniqueWithoutUserInput | RdvUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RdvUpdateManyWithWhereWithoutUserInput | RdvUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RdvScalarWhereInput | RdvScalarWhereInput[]
  }

  export type ContactUrgenceUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactUrgenceCreateWithoutUserInput, ContactUrgenceUncheckedCreateWithoutUserInput> | ContactUrgenceCreateWithoutUserInput[] | ContactUrgenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactUrgenceCreateOrConnectWithoutUserInput | ContactUrgenceCreateOrConnectWithoutUserInput[]
    upsert?: ContactUrgenceUpsertWithWhereUniqueWithoutUserInput | ContactUrgenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactUrgenceCreateManyUserInputEnvelope
    set?: ContactUrgenceWhereUniqueInput | ContactUrgenceWhereUniqueInput[]
    disconnect?: ContactUrgenceWhereUniqueInput | ContactUrgenceWhereUniqueInput[]
    delete?: ContactUrgenceWhereUniqueInput | ContactUrgenceWhereUniqueInput[]
    connect?: ContactUrgenceWhereUniqueInput | ContactUrgenceWhereUniqueInput[]
    update?: ContactUrgenceUpdateWithWhereUniqueWithoutUserInput | ContactUrgenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactUrgenceUpdateManyWithWhereWithoutUserInput | ContactUrgenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactUrgenceScalarWhereInput | ContactUrgenceScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type GroupeUpdateManyWithoutMembresNestedInput = {
    create?: XOR<GroupeCreateWithoutMembresInput, GroupeUncheckedCreateWithoutMembresInput> | GroupeCreateWithoutMembresInput[] | GroupeUncheckedCreateWithoutMembresInput[]
    connectOrCreate?: GroupeCreateOrConnectWithoutMembresInput | GroupeCreateOrConnectWithoutMembresInput[]
    upsert?: GroupeUpsertWithWhereUniqueWithoutMembresInput | GroupeUpsertWithWhereUniqueWithoutMembresInput[]
    set?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
    disconnect?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
    delete?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
    connect?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
    update?: GroupeUpdateWithWhereUniqueWithoutMembresInput | GroupeUpdateWithWhereUniqueWithoutMembresInput[]
    updateMany?: GroupeUpdateManyWithWhereWithoutMembresInput | GroupeUpdateManyWithWhereWithoutMembresInput[]
    deleteMany?: GroupeScalarWhereInput | GroupeScalarWhereInput[]
  }

  export type RdvUpdateManyWithoutProfessionnelNestedInput = {
    create?: XOR<RdvCreateWithoutProfessionnelInput, RdvUncheckedCreateWithoutProfessionnelInput> | RdvCreateWithoutProfessionnelInput[] | RdvUncheckedCreateWithoutProfessionnelInput[]
    connectOrCreate?: RdvCreateOrConnectWithoutProfessionnelInput | RdvCreateOrConnectWithoutProfessionnelInput[]
    upsert?: RdvUpsertWithWhereUniqueWithoutProfessionnelInput | RdvUpsertWithWhereUniqueWithoutProfessionnelInput[]
    createMany?: RdvCreateManyProfessionnelInputEnvelope
    set?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
    disconnect?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
    delete?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
    connect?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
    update?: RdvUpdateWithWhereUniqueWithoutProfessionnelInput | RdvUpdateWithWhereUniqueWithoutProfessionnelInput[]
    updateMany?: RdvUpdateManyWithWhereWithoutProfessionnelInput | RdvUpdateManyWithWhereWithoutProfessionnelInput[]
    deleteMany?: RdvScalarWhereInput | RdvScalarWhereInput[]
  }

  export type AnnonceUncheckedUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput> | AnnonceCreateWithoutAuteurInput[] | AnnonceUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutAuteurInput | AnnonceCreateOrConnectWithoutAuteurInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutAuteurInput | AnnonceUpsertWithWhereUniqueWithoutAuteurInput[]
    createMany?: AnnonceCreateManyAuteurInputEnvelope
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutAuteurInput | AnnonceUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutAuteurInput | AnnonceUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type CandidatureUncheckedUpdateManyWithoutCandidatNestedInput = {
    create?: XOR<CandidatureCreateWithoutCandidatInput, CandidatureUncheckedCreateWithoutCandidatInput> | CandidatureCreateWithoutCandidatInput[] | CandidatureUncheckedCreateWithoutCandidatInput[]
    connectOrCreate?: CandidatureCreateOrConnectWithoutCandidatInput | CandidatureCreateOrConnectWithoutCandidatInput[]
    upsert?: CandidatureUpsertWithWhereUniqueWithoutCandidatInput | CandidatureUpsertWithWhereUniqueWithoutCandidatInput[]
    createMany?: CandidatureCreateManyCandidatInputEnvelope
    set?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    disconnect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    delete?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    connect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    update?: CandidatureUpdateWithWhereUniqueWithoutCandidatInput | CandidatureUpdateWithWhereUniqueWithoutCandidatInput[]
    updateMany?: CandidatureUpdateManyWithWhereWithoutCandidatInput | CandidatureUpdateManyWithWhereWithoutCandidatInput[]
    deleteMany?: CandidatureScalarWhereInput | CandidatureScalarWhereInput[]
  }

  export type RdvUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RdvCreateWithoutUserInput, RdvUncheckedCreateWithoutUserInput> | RdvCreateWithoutUserInput[] | RdvUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RdvCreateOrConnectWithoutUserInput | RdvCreateOrConnectWithoutUserInput[]
    upsert?: RdvUpsertWithWhereUniqueWithoutUserInput | RdvUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RdvCreateManyUserInputEnvelope
    set?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
    disconnect?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
    delete?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
    connect?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
    update?: RdvUpdateWithWhereUniqueWithoutUserInput | RdvUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RdvUpdateManyWithWhereWithoutUserInput | RdvUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RdvScalarWhereInput | RdvScalarWhereInput[]
  }

  export type ContactUrgenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactUrgenceCreateWithoutUserInput, ContactUrgenceUncheckedCreateWithoutUserInput> | ContactUrgenceCreateWithoutUserInput[] | ContactUrgenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactUrgenceCreateOrConnectWithoutUserInput | ContactUrgenceCreateOrConnectWithoutUserInput[]
    upsert?: ContactUrgenceUpsertWithWhereUniqueWithoutUserInput | ContactUrgenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactUrgenceCreateManyUserInputEnvelope
    set?: ContactUrgenceWhereUniqueInput | ContactUrgenceWhereUniqueInput[]
    disconnect?: ContactUrgenceWhereUniqueInput | ContactUrgenceWhereUniqueInput[]
    delete?: ContactUrgenceWhereUniqueInput | ContactUrgenceWhereUniqueInput[]
    connect?: ContactUrgenceWhereUniqueInput | ContactUrgenceWhereUniqueInput[]
    update?: ContactUrgenceUpdateWithWhereUniqueWithoutUserInput | ContactUrgenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactUrgenceUpdateManyWithWhereWithoutUserInput | ContactUrgenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactUrgenceScalarWhereInput | ContactUrgenceScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type GroupeUncheckedUpdateManyWithoutMembresNestedInput = {
    create?: XOR<GroupeCreateWithoutMembresInput, GroupeUncheckedCreateWithoutMembresInput> | GroupeCreateWithoutMembresInput[] | GroupeUncheckedCreateWithoutMembresInput[]
    connectOrCreate?: GroupeCreateOrConnectWithoutMembresInput | GroupeCreateOrConnectWithoutMembresInput[]
    upsert?: GroupeUpsertWithWhereUniqueWithoutMembresInput | GroupeUpsertWithWhereUniqueWithoutMembresInput[]
    set?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
    disconnect?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
    delete?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
    connect?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
    update?: GroupeUpdateWithWhereUniqueWithoutMembresInput | GroupeUpdateWithWhereUniqueWithoutMembresInput[]
    updateMany?: GroupeUpdateManyWithWhereWithoutMembresInput | GroupeUpdateManyWithWhereWithoutMembresInput[]
    deleteMany?: GroupeScalarWhereInput | GroupeScalarWhereInput[]
  }

  export type RdvUncheckedUpdateManyWithoutProfessionnelNestedInput = {
    create?: XOR<RdvCreateWithoutProfessionnelInput, RdvUncheckedCreateWithoutProfessionnelInput> | RdvCreateWithoutProfessionnelInput[] | RdvUncheckedCreateWithoutProfessionnelInput[]
    connectOrCreate?: RdvCreateOrConnectWithoutProfessionnelInput | RdvCreateOrConnectWithoutProfessionnelInput[]
    upsert?: RdvUpsertWithWhereUniqueWithoutProfessionnelInput | RdvUpsertWithWhereUniqueWithoutProfessionnelInput[]
    createMany?: RdvCreateManyProfessionnelInputEnvelope
    set?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
    disconnect?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
    delete?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
    connect?: RdvWhereUniqueInput | RdvWhereUniqueInput[]
    update?: RdvUpdateWithWhereUniqueWithoutProfessionnelInput | RdvUpdateWithWhereUniqueWithoutProfessionnelInput[]
    updateMany?: RdvUpdateManyWithWhereWithoutProfessionnelInput | RdvUpdateManyWithWhereWithoutProfessionnelInput[]
    deleteMany?: RdvScalarWhereInput | RdvScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAnnoncesInput = {
    create?: XOR<UserCreateWithoutAnnoncesInput, UserUncheckedCreateWithoutAnnoncesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnoncesInput
    connect?: UserWhereUniqueInput
  }

  export type CandidatureCreateNestedManyWithoutAnnonceInput = {
    create?: XOR<CandidatureCreateWithoutAnnonceInput, CandidatureUncheckedCreateWithoutAnnonceInput> | CandidatureCreateWithoutAnnonceInput[] | CandidatureUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: CandidatureCreateOrConnectWithoutAnnonceInput | CandidatureCreateOrConnectWithoutAnnonceInput[]
    createMany?: CandidatureCreateManyAnnonceInputEnvelope
    connect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
  }

  export type CandidatureUncheckedCreateNestedManyWithoutAnnonceInput = {
    create?: XOR<CandidatureCreateWithoutAnnonceInput, CandidatureUncheckedCreateWithoutAnnonceInput> | CandidatureCreateWithoutAnnonceInput[] | CandidatureUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: CandidatureCreateOrConnectWithoutAnnonceInput | CandidatureCreateOrConnectWithoutAnnonceInput[]
    createMany?: CandidatureCreateManyAnnonceInputEnvelope
    connect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
  }

  export type EnumAnnonceTypeFieldUpdateOperationsInput = {
    set?: $Enums.AnnonceType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumAnnonceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnnonceStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAnnoncesNestedInput = {
    create?: XOR<UserCreateWithoutAnnoncesInput, UserUncheckedCreateWithoutAnnoncesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnoncesInput
    upsert?: UserUpsertWithoutAnnoncesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnnoncesInput, UserUpdateWithoutAnnoncesInput>, UserUncheckedUpdateWithoutAnnoncesInput>
  }

  export type CandidatureUpdateManyWithoutAnnonceNestedInput = {
    create?: XOR<CandidatureCreateWithoutAnnonceInput, CandidatureUncheckedCreateWithoutAnnonceInput> | CandidatureCreateWithoutAnnonceInput[] | CandidatureUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: CandidatureCreateOrConnectWithoutAnnonceInput | CandidatureCreateOrConnectWithoutAnnonceInput[]
    upsert?: CandidatureUpsertWithWhereUniqueWithoutAnnonceInput | CandidatureUpsertWithWhereUniqueWithoutAnnonceInput[]
    createMany?: CandidatureCreateManyAnnonceInputEnvelope
    set?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    disconnect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    delete?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    connect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    update?: CandidatureUpdateWithWhereUniqueWithoutAnnonceInput | CandidatureUpdateWithWhereUniqueWithoutAnnonceInput[]
    updateMany?: CandidatureUpdateManyWithWhereWithoutAnnonceInput | CandidatureUpdateManyWithWhereWithoutAnnonceInput[]
    deleteMany?: CandidatureScalarWhereInput | CandidatureScalarWhereInput[]
  }

  export type CandidatureUncheckedUpdateManyWithoutAnnonceNestedInput = {
    create?: XOR<CandidatureCreateWithoutAnnonceInput, CandidatureUncheckedCreateWithoutAnnonceInput> | CandidatureCreateWithoutAnnonceInput[] | CandidatureUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: CandidatureCreateOrConnectWithoutAnnonceInput | CandidatureCreateOrConnectWithoutAnnonceInput[]
    upsert?: CandidatureUpsertWithWhereUniqueWithoutAnnonceInput | CandidatureUpsertWithWhereUniqueWithoutAnnonceInput[]
    createMany?: CandidatureCreateManyAnnonceInputEnvelope
    set?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    disconnect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    delete?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    connect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    update?: CandidatureUpdateWithWhereUniqueWithoutAnnonceInput | CandidatureUpdateWithWhereUniqueWithoutAnnonceInput[]
    updateMany?: CandidatureUpdateManyWithWhereWithoutAnnonceInput | CandidatureUpdateManyWithWhereWithoutAnnonceInput[]
    deleteMany?: CandidatureScalarWhereInput | CandidatureScalarWhereInput[]
  }

  export type AnnonceCreateNestedOneWithoutCandidaturesInput = {
    create?: XOR<AnnonceCreateWithoutCandidaturesInput, AnnonceUncheckedCreateWithoutCandidaturesInput>
    connectOrCreate?: AnnonceCreateOrConnectWithoutCandidaturesInput
    connect?: AnnonceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCandidaturesInput = {
    create?: XOR<UserCreateWithoutCandidaturesInput, UserUncheckedCreateWithoutCandidaturesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidaturesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumCandidatureStatusFieldUpdateOperationsInput = {
    set?: $Enums.CandidatureStatus
  }

  export type AnnonceUpdateOneRequiredWithoutCandidaturesNestedInput = {
    create?: XOR<AnnonceCreateWithoutCandidaturesInput, AnnonceUncheckedCreateWithoutCandidaturesInput>
    connectOrCreate?: AnnonceCreateOrConnectWithoutCandidaturesInput
    upsert?: AnnonceUpsertWithoutCandidaturesInput
    connect?: AnnonceWhereUniqueInput
    update?: XOR<XOR<AnnonceUpdateToOneWithWhereWithoutCandidaturesInput, AnnonceUpdateWithoutCandidaturesInput>, AnnonceUncheckedUpdateWithoutCandidaturesInput>
  }

  export type UserUpdateOneRequiredWithoutCandidaturesNestedInput = {
    create?: XOR<UserCreateWithoutCandidaturesInput, UserUncheckedCreateWithoutCandidaturesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidaturesInput
    upsert?: UserUpsertWithoutCandidaturesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCandidaturesInput, UserUpdateWithoutCandidaturesInput>, UserUncheckedUpdateWithoutCandidaturesInput>
  }

  export type UserCreateNestedOneWithoutRdvProInput = {
    create?: XOR<UserCreateWithoutRdvProInput, UserUncheckedCreateWithoutRdvProInput>
    connectOrCreate?: UserCreateOrConnectWithoutRdvProInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRendezVousInput = {
    create?: XOR<UserCreateWithoutRendezVousInput, UserUncheckedCreateWithoutRendezVousInput>
    connectOrCreate?: UserCreateOrConnectWithoutRendezVousInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRdvStatusFieldUpdateOperationsInput = {
    set?: $Enums.RdvStatus
  }

  export type UserUpdateOneWithoutRdvProNestedInput = {
    create?: XOR<UserCreateWithoutRdvProInput, UserUncheckedCreateWithoutRdvProInput>
    connectOrCreate?: UserCreateOrConnectWithoutRdvProInput
    upsert?: UserUpsertWithoutRdvProInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRdvProInput, UserUpdateWithoutRdvProInput>, UserUncheckedUpdateWithoutRdvProInput>
  }

  export type UserUpdateOneRequiredWithoutRendezVousNestedInput = {
    create?: XOR<UserCreateWithoutRendezVousInput, UserUncheckedCreateWithoutRendezVousInput>
    connectOrCreate?: UserCreateOrConnectWithoutRendezVousInput
    upsert?: UserUpsertWithoutRendezVousInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRendezVousInput, UserUpdateWithoutRendezVousInput>, UserUncheckedUpdateWithoutRendezVousInput>
  }

  export type UserCreateNestedManyWithoutGroupesInput = {
    create?: XOR<UserCreateWithoutGroupesInput, UserUncheckedCreateWithoutGroupesInput> | UserCreateWithoutGroupesInput[] | UserUncheckedCreateWithoutGroupesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupesInput | UserCreateOrConnectWithoutGroupesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutGroupesInput = {
    create?: XOR<UserCreateWithoutGroupesInput, UserUncheckedCreateWithoutGroupesInput> | UserCreateWithoutGroupesInput[] | UserUncheckedCreateWithoutGroupesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupesInput | UserCreateOrConnectWithoutGroupesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutGroupesNestedInput = {
    create?: XOR<UserCreateWithoutGroupesInput, UserUncheckedCreateWithoutGroupesInput> | UserCreateWithoutGroupesInput[] | UserUncheckedCreateWithoutGroupesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupesInput | UserCreateOrConnectWithoutGroupesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupesInput | UserUpsertWithWhereUniqueWithoutGroupesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupesInput | UserUpdateWithWhereUniqueWithoutGroupesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupesInput | UserUpdateManyWithWhereWithoutGroupesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutGroupesNestedInput = {
    create?: XOR<UserCreateWithoutGroupesInput, UserUncheckedCreateWithoutGroupesInput> | UserCreateWithoutGroupesInput[] | UserUncheckedCreateWithoutGroupesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupesInput | UserCreateOrConnectWithoutGroupesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupesInput | UserUpsertWithWhereUniqueWithoutGroupesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupesInput | UserUpdateWithWhereUniqueWithoutGroupesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupesInput | UserUpdateManyWithWhereWithoutGroupesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutContactsUrgenceInput = {
    create?: XOR<UserCreateWithoutContactsUrgenceInput, UserUncheckedCreateWithoutContactsUrgenceInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactsUrgenceInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutContactsUrgenceNestedInput = {
    create?: XOR<UserCreateWithoutContactsUrgenceInput, UserUncheckedCreateWithoutContactsUrgenceInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactsUrgenceInput
    upsert?: UserUpsertWithoutContactsUrgenceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContactsUrgenceInput, UserUpdateWithoutContactsUrgenceInput>, UserUncheckedUpdateWithoutContactsUrgenceInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAnnonceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnonceType | EnumAnnonceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnnonceType[]
    notIn?: $Enums.AnnonceType[]
    not?: NestedEnumAnnonceTypeFilter<$PrismaModel> | $Enums.AnnonceType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAnnonceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnonceStatus | EnumAnnonceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnnonceStatus[]
    notIn?: $Enums.AnnonceStatus[]
    not?: NestedEnumAnnonceStatusFilter<$PrismaModel> | $Enums.AnnonceStatus
  }

  export type NestedEnumAnnonceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnonceType | EnumAnnonceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnnonceType[]
    notIn?: $Enums.AnnonceType[]
    not?: NestedEnumAnnonceTypeWithAggregatesFilter<$PrismaModel> | $Enums.AnnonceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnnonceTypeFilter<$PrismaModel>
    _max?: NestedEnumAnnonceTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAnnonceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnonceStatus | EnumAnnonceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnnonceStatus[]
    notIn?: $Enums.AnnonceStatus[]
    not?: NestedEnumAnnonceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnnonceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnnonceStatusFilter<$PrismaModel>
    _max?: NestedEnumAnnonceStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumCandidatureStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CandidatureStatus | EnumCandidatureStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CandidatureStatus[]
    notIn?: $Enums.CandidatureStatus[]
    not?: NestedEnumCandidatureStatusFilter<$PrismaModel> | $Enums.CandidatureStatus
  }

  export type NestedEnumCandidatureStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CandidatureStatus | EnumCandidatureStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CandidatureStatus[]
    notIn?: $Enums.CandidatureStatus[]
    not?: NestedEnumCandidatureStatusWithAggregatesFilter<$PrismaModel> | $Enums.CandidatureStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCandidatureStatusFilter<$PrismaModel>
    _max?: NestedEnumCandidatureStatusFilter<$PrismaModel>
  }

  export type NestedEnumRdvStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RdvStatus | EnumRdvStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RdvStatus[]
    notIn?: $Enums.RdvStatus[]
    not?: NestedEnumRdvStatusFilter<$PrismaModel> | $Enums.RdvStatus
  }

  export type NestedEnumRdvStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RdvStatus | EnumRdvStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RdvStatus[]
    notIn?: $Enums.RdvStatus[]
    not?: NestedEnumRdvStatusWithAggregatesFilter<$PrismaModel> | $Enums.RdvStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRdvStatusFilter<$PrismaModel>
    _max?: NestedEnumRdvStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AnnonceCreateWithoutAuteurInput = {
    id?: string
    titre: string
    type: $Enums.AnnonceType
    description: string
    contenu?: string | null
    organisation: string
    organisationId?: string | null
    lieu: string
    date: Date | string
    dateFin?: Date | string | null
    deadline?: Date | string | null
    image?: string | null
    categories: string
    status?: $Enums.AnnonceStatus
    vues?: number
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    candidatures?: CandidatureCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceUncheckedCreateWithoutAuteurInput = {
    id?: string
    titre: string
    type: $Enums.AnnonceType
    description: string
    contenu?: string | null
    organisation: string
    organisationId?: string | null
    lieu: string
    date: Date | string
    dateFin?: Date | string | null
    deadline?: Date | string | null
    image?: string | null
    categories: string
    status?: $Enums.AnnonceStatus
    vues?: number
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    candidatures?: CandidatureUncheckedCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceCreateOrConnectWithoutAuteurInput = {
    where: AnnonceWhereUniqueInput
    create: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput>
  }

  export type AnnonceCreateManyAuteurInputEnvelope = {
    data: AnnonceCreateManyAuteurInput | AnnonceCreateManyAuteurInput[]
  }

  export type CandidatureCreateWithoutCandidatInput = {
    id?: string
    message?: string | null
    cv?: string | null
    status?: $Enums.CandidatureStatus
    createdAt?: Date | string
    annonce: AnnonceCreateNestedOneWithoutCandidaturesInput
  }

  export type CandidatureUncheckedCreateWithoutCandidatInput = {
    id?: string
    annonceId: string
    message?: string | null
    cv?: string | null
    status?: $Enums.CandidatureStatus
    createdAt?: Date | string
  }

  export type CandidatureCreateOrConnectWithoutCandidatInput = {
    where: CandidatureWhereUniqueInput
    create: XOR<CandidatureCreateWithoutCandidatInput, CandidatureUncheckedCreateWithoutCandidatInput>
  }

  export type CandidatureCreateManyCandidatInputEnvelope = {
    data: CandidatureCreateManyCandidatInput | CandidatureCreateManyCandidatInput[]
  }

  export type RdvCreateWithoutUserInput = {
    id?: string
    type: string
    date: Date | string
    heure: string
    motif: string
    status?: $Enums.RdvStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    professionnel?: UserCreateNestedOneWithoutRdvProInput
  }

  export type RdvUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    professionnelId?: string | null
    date: Date | string
    heure: string
    motif: string
    status?: $Enums.RdvStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RdvCreateOrConnectWithoutUserInput = {
    where: RdvWhereUniqueInput
    create: XOR<RdvCreateWithoutUserInput, RdvUncheckedCreateWithoutUserInput>
  }

  export type RdvCreateManyUserInputEnvelope = {
    data: RdvCreateManyUserInput | RdvCreateManyUserInput[]
  }

  export type ContactUrgenceCreateWithoutUserInput = {
    id?: string
    nom: string
    prenom: string
    telephone: string
    relation: string
  }

  export type ContactUrgenceUncheckedCreateWithoutUserInput = {
    id?: string
    nom: string
    prenom: string
    telephone: string
    relation: string
  }

  export type ContactUrgenceCreateOrConnectWithoutUserInput = {
    where: ContactUrgenceWhereUniqueInput
    create: XOR<ContactUrgenceCreateWithoutUserInput, ContactUrgenceUncheckedCreateWithoutUserInput>
  }

  export type ContactUrgenceCreateManyUserInputEnvelope = {
    data: ContactUrgenceCreateManyUserInput | ContactUrgenceCreateManyUserInput[]
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type: string
    read?: boolean
    link?: string | null
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    type: string
    read?: boolean
    link?: string | null
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type GroupeCreateWithoutMembresInput = {
    id?: string
    nom: string
    description: string
    horaire: string
    lieu: string
    placesMax: number
    placesDisponibles: number
    animateur: string
    image?: string | null
    thematiques: string
    createdAt?: Date | string
  }

  export type GroupeUncheckedCreateWithoutMembresInput = {
    id?: string
    nom: string
    description: string
    horaire: string
    lieu: string
    placesMax: number
    placesDisponibles: number
    animateur: string
    image?: string | null
    thematiques: string
    createdAt?: Date | string
  }

  export type GroupeCreateOrConnectWithoutMembresInput = {
    where: GroupeWhereUniqueInput
    create: XOR<GroupeCreateWithoutMembresInput, GroupeUncheckedCreateWithoutMembresInput>
  }

  export type RdvCreateWithoutProfessionnelInput = {
    id?: string
    type: string
    date: Date | string
    heure: string
    motif: string
    status?: $Enums.RdvStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRendezVousInput
  }

  export type RdvUncheckedCreateWithoutProfessionnelInput = {
    id?: string
    type: string
    date: Date | string
    heure: string
    motif: string
    status?: $Enums.RdvStatus
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RdvCreateOrConnectWithoutProfessionnelInput = {
    where: RdvWhereUniqueInput
    create: XOR<RdvCreateWithoutProfessionnelInput, RdvUncheckedCreateWithoutProfessionnelInput>
  }

  export type RdvCreateManyProfessionnelInputEnvelope = {
    data: RdvCreateManyProfessionnelInput | RdvCreateManyProfessionnelInput[]
  }

  export type AnnonceUpsertWithWhereUniqueWithoutAuteurInput = {
    where: AnnonceWhereUniqueInput
    update: XOR<AnnonceUpdateWithoutAuteurInput, AnnonceUncheckedUpdateWithoutAuteurInput>
    create: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput>
  }

  export type AnnonceUpdateWithWhereUniqueWithoutAuteurInput = {
    where: AnnonceWhereUniqueInput
    data: XOR<AnnonceUpdateWithoutAuteurInput, AnnonceUncheckedUpdateWithoutAuteurInput>
  }

  export type AnnonceUpdateManyWithWhereWithoutAuteurInput = {
    where: AnnonceScalarWhereInput
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyWithoutAuteurInput>
  }

  export type AnnonceScalarWhereInput = {
    AND?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
    OR?: AnnonceScalarWhereInput[]
    NOT?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
    id?: StringFilter<"Annonce"> | string
    titre?: StringFilter<"Annonce"> | string
    type?: EnumAnnonceTypeFilter<"Annonce"> | $Enums.AnnonceType
    description?: StringFilter<"Annonce"> | string
    contenu?: StringNullableFilter<"Annonce"> | string | null
    organisation?: StringFilter<"Annonce"> | string
    organisationId?: StringNullableFilter<"Annonce"> | string | null
    lieu?: StringFilter<"Annonce"> | string
    date?: DateTimeFilter<"Annonce"> | Date | string
    dateFin?: DateTimeNullableFilter<"Annonce"> | Date | string | null
    deadline?: DateTimeNullableFilter<"Annonce"> | Date | string | null
    image?: StringNullableFilter<"Annonce"> | string | null
    categories?: StringFilter<"Annonce"> | string
    status?: EnumAnnonceStatusFilter<"Annonce"> | $Enums.AnnonceStatus
    vues?: IntFilter<"Annonce"> | number
    details?: JsonNullableFilter<"Annonce">
    auteurId?: StringFilter<"Annonce"> | string
    createdAt?: DateTimeFilter<"Annonce"> | Date | string
    updatedAt?: DateTimeFilter<"Annonce"> | Date | string
  }

  export type CandidatureUpsertWithWhereUniqueWithoutCandidatInput = {
    where: CandidatureWhereUniqueInput
    update: XOR<CandidatureUpdateWithoutCandidatInput, CandidatureUncheckedUpdateWithoutCandidatInput>
    create: XOR<CandidatureCreateWithoutCandidatInput, CandidatureUncheckedCreateWithoutCandidatInput>
  }

  export type CandidatureUpdateWithWhereUniqueWithoutCandidatInput = {
    where: CandidatureWhereUniqueInput
    data: XOR<CandidatureUpdateWithoutCandidatInput, CandidatureUncheckedUpdateWithoutCandidatInput>
  }

  export type CandidatureUpdateManyWithWhereWithoutCandidatInput = {
    where: CandidatureScalarWhereInput
    data: XOR<CandidatureUpdateManyMutationInput, CandidatureUncheckedUpdateManyWithoutCandidatInput>
  }

  export type CandidatureScalarWhereInput = {
    AND?: CandidatureScalarWhereInput | CandidatureScalarWhereInput[]
    OR?: CandidatureScalarWhereInput[]
    NOT?: CandidatureScalarWhereInput | CandidatureScalarWhereInput[]
    id?: StringFilter<"Candidature"> | string
    annonceId?: StringFilter<"Candidature"> | string
    candidatId?: StringFilter<"Candidature"> | string
    message?: StringNullableFilter<"Candidature"> | string | null
    cv?: StringNullableFilter<"Candidature"> | string | null
    status?: EnumCandidatureStatusFilter<"Candidature"> | $Enums.CandidatureStatus
    createdAt?: DateTimeFilter<"Candidature"> | Date | string
  }

  export type RdvUpsertWithWhereUniqueWithoutUserInput = {
    where: RdvWhereUniqueInput
    update: XOR<RdvUpdateWithoutUserInput, RdvUncheckedUpdateWithoutUserInput>
    create: XOR<RdvCreateWithoutUserInput, RdvUncheckedCreateWithoutUserInput>
  }

  export type RdvUpdateWithWhereUniqueWithoutUserInput = {
    where: RdvWhereUniqueInput
    data: XOR<RdvUpdateWithoutUserInput, RdvUncheckedUpdateWithoutUserInput>
  }

  export type RdvUpdateManyWithWhereWithoutUserInput = {
    where: RdvScalarWhereInput
    data: XOR<RdvUpdateManyMutationInput, RdvUncheckedUpdateManyWithoutUserInput>
  }

  export type RdvScalarWhereInput = {
    AND?: RdvScalarWhereInput | RdvScalarWhereInput[]
    OR?: RdvScalarWhereInput[]
    NOT?: RdvScalarWhereInput | RdvScalarWhereInput[]
    id?: StringFilter<"Rdv"> | string
    type?: StringFilter<"Rdv"> | string
    professionnelId?: StringNullableFilter<"Rdv"> | string | null
    date?: DateTimeFilter<"Rdv"> | Date | string
    heure?: StringFilter<"Rdv"> | string
    motif?: StringFilter<"Rdv"> | string
    status?: EnumRdvStatusFilter<"Rdv"> | $Enums.RdvStatus
    userId?: StringFilter<"Rdv"> | string
    createdAt?: DateTimeFilter<"Rdv"> | Date | string
    updatedAt?: DateTimeFilter<"Rdv"> | Date | string
  }

  export type ContactUrgenceUpsertWithWhereUniqueWithoutUserInput = {
    where: ContactUrgenceWhereUniqueInput
    update: XOR<ContactUrgenceUpdateWithoutUserInput, ContactUrgenceUncheckedUpdateWithoutUserInput>
    create: XOR<ContactUrgenceCreateWithoutUserInput, ContactUrgenceUncheckedCreateWithoutUserInput>
  }

  export type ContactUrgenceUpdateWithWhereUniqueWithoutUserInput = {
    where: ContactUrgenceWhereUniqueInput
    data: XOR<ContactUrgenceUpdateWithoutUserInput, ContactUrgenceUncheckedUpdateWithoutUserInput>
  }

  export type ContactUrgenceUpdateManyWithWhereWithoutUserInput = {
    where: ContactUrgenceScalarWhereInput
    data: XOR<ContactUrgenceUpdateManyMutationInput, ContactUrgenceUncheckedUpdateManyWithoutUserInput>
  }

  export type ContactUrgenceScalarWhereInput = {
    AND?: ContactUrgenceScalarWhereInput | ContactUrgenceScalarWhereInput[]
    OR?: ContactUrgenceScalarWhereInput[]
    NOT?: ContactUrgenceScalarWhereInput | ContactUrgenceScalarWhereInput[]
    id?: StringFilter<"ContactUrgence"> | string
    nom?: StringFilter<"ContactUrgence"> | string
    prenom?: StringFilter<"ContactUrgence"> | string
    telephone?: StringFilter<"ContactUrgence"> | string
    relation?: StringFilter<"ContactUrgence"> | string
    userId?: StringFilter<"ContactUrgence"> | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    link?: StringNullableFilter<"Notification"> | string | null
    userId?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type GroupeUpsertWithWhereUniqueWithoutMembresInput = {
    where: GroupeWhereUniqueInput
    update: XOR<GroupeUpdateWithoutMembresInput, GroupeUncheckedUpdateWithoutMembresInput>
    create: XOR<GroupeCreateWithoutMembresInput, GroupeUncheckedCreateWithoutMembresInput>
  }

  export type GroupeUpdateWithWhereUniqueWithoutMembresInput = {
    where: GroupeWhereUniqueInput
    data: XOR<GroupeUpdateWithoutMembresInput, GroupeUncheckedUpdateWithoutMembresInput>
  }

  export type GroupeUpdateManyWithWhereWithoutMembresInput = {
    where: GroupeScalarWhereInput
    data: XOR<GroupeUpdateManyMutationInput, GroupeUncheckedUpdateManyWithoutMembresInput>
  }

  export type GroupeScalarWhereInput = {
    AND?: GroupeScalarWhereInput | GroupeScalarWhereInput[]
    OR?: GroupeScalarWhereInput[]
    NOT?: GroupeScalarWhereInput | GroupeScalarWhereInput[]
    id?: StringFilter<"Groupe"> | string
    nom?: StringFilter<"Groupe"> | string
    description?: StringFilter<"Groupe"> | string
    horaire?: StringFilter<"Groupe"> | string
    lieu?: StringFilter<"Groupe"> | string
    placesMax?: IntFilter<"Groupe"> | number
    placesDisponibles?: IntFilter<"Groupe"> | number
    animateur?: StringFilter<"Groupe"> | string
    image?: StringNullableFilter<"Groupe"> | string | null
    thematiques?: StringFilter<"Groupe"> | string
    createdAt?: DateTimeFilter<"Groupe"> | Date | string
  }

  export type RdvUpsertWithWhereUniqueWithoutProfessionnelInput = {
    where: RdvWhereUniqueInput
    update: XOR<RdvUpdateWithoutProfessionnelInput, RdvUncheckedUpdateWithoutProfessionnelInput>
    create: XOR<RdvCreateWithoutProfessionnelInput, RdvUncheckedCreateWithoutProfessionnelInput>
  }

  export type RdvUpdateWithWhereUniqueWithoutProfessionnelInput = {
    where: RdvWhereUniqueInput
    data: XOR<RdvUpdateWithoutProfessionnelInput, RdvUncheckedUpdateWithoutProfessionnelInput>
  }

  export type RdvUpdateManyWithWhereWithoutProfessionnelInput = {
    where: RdvScalarWhereInput
    data: XOR<RdvUpdateManyMutationInput, RdvUncheckedUpdateManyWithoutProfessionnelInput>
  }

  export type UserCreateWithoutAnnoncesInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    dateInscription?: Date | string
    candidatures?: CandidatureCreateNestedManyWithoutCandidatInput
    rendezVous?: RdvCreateNestedManyWithoutUserInput
    contactsUrgence?: ContactUrgenceCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    groupes?: GroupeCreateNestedManyWithoutMembresInput
    rdvPro?: RdvCreateNestedManyWithoutProfessionnelInput
  }

  export type UserUncheckedCreateWithoutAnnoncesInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    dateInscription?: Date | string
    candidatures?: CandidatureUncheckedCreateNestedManyWithoutCandidatInput
    rendezVous?: RdvUncheckedCreateNestedManyWithoutUserInput
    contactsUrgence?: ContactUrgenceUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    groupes?: GroupeUncheckedCreateNestedManyWithoutMembresInput
    rdvPro?: RdvUncheckedCreateNestedManyWithoutProfessionnelInput
  }

  export type UserCreateOrConnectWithoutAnnoncesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnnoncesInput, UserUncheckedCreateWithoutAnnoncesInput>
  }

  export type CandidatureCreateWithoutAnnonceInput = {
    id?: string
    message?: string | null
    cv?: string | null
    status?: $Enums.CandidatureStatus
    createdAt?: Date | string
    candidat: UserCreateNestedOneWithoutCandidaturesInput
  }

  export type CandidatureUncheckedCreateWithoutAnnonceInput = {
    id?: string
    candidatId: string
    message?: string | null
    cv?: string | null
    status?: $Enums.CandidatureStatus
    createdAt?: Date | string
  }

  export type CandidatureCreateOrConnectWithoutAnnonceInput = {
    where: CandidatureWhereUniqueInput
    create: XOR<CandidatureCreateWithoutAnnonceInput, CandidatureUncheckedCreateWithoutAnnonceInput>
  }

  export type CandidatureCreateManyAnnonceInputEnvelope = {
    data: CandidatureCreateManyAnnonceInput | CandidatureCreateManyAnnonceInput[]
  }

  export type UserUpsertWithoutAnnoncesInput = {
    update: XOR<UserUpdateWithoutAnnoncesInput, UserUncheckedUpdateWithoutAnnoncesInput>
    create: XOR<UserCreateWithoutAnnoncesInput, UserUncheckedCreateWithoutAnnoncesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnnoncesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnnoncesInput, UserUncheckedUpdateWithoutAnnoncesInput>
  }

  export type UserUpdateWithoutAnnoncesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    candidatures?: CandidatureUpdateManyWithoutCandidatNestedInput
    rendezVous?: RdvUpdateManyWithoutUserNestedInput
    contactsUrgence?: ContactUrgenceUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    groupes?: GroupeUpdateManyWithoutMembresNestedInput
    rdvPro?: RdvUpdateManyWithoutProfessionnelNestedInput
  }

  export type UserUncheckedUpdateWithoutAnnoncesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    candidatures?: CandidatureUncheckedUpdateManyWithoutCandidatNestedInput
    rendezVous?: RdvUncheckedUpdateManyWithoutUserNestedInput
    contactsUrgence?: ContactUrgenceUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    groupes?: GroupeUncheckedUpdateManyWithoutMembresNestedInput
    rdvPro?: RdvUncheckedUpdateManyWithoutProfessionnelNestedInput
  }

  export type CandidatureUpsertWithWhereUniqueWithoutAnnonceInput = {
    where: CandidatureWhereUniqueInput
    update: XOR<CandidatureUpdateWithoutAnnonceInput, CandidatureUncheckedUpdateWithoutAnnonceInput>
    create: XOR<CandidatureCreateWithoutAnnonceInput, CandidatureUncheckedCreateWithoutAnnonceInput>
  }

  export type CandidatureUpdateWithWhereUniqueWithoutAnnonceInput = {
    where: CandidatureWhereUniqueInput
    data: XOR<CandidatureUpdateWithoutAnnonceInput, CandidatureUncheckedUpdateWithoutAnnonceInput>
  }

  export type CandidatureUpdateManyWithWhereWithoutAnnonceInput = {
    where: CandidatureScalarWhereInput
    data: XOR<CandidatureUpdateManyMutationInput, CandidatureUncheckedUpdateManyWithoutAnnonceInput>
  }

  export type AnnonceCreateWithoutCandidaturesInput = {
    id?: string
    titre: string
    type: $Enums.AnnonceType
    description: string
    contenu?: string | null
    organisation: string
    organisationId?: string | null
    lieu: string
    date: Date | string
    dateFin?: Date | string | null
    deadline?: Date | string | null
    image?: string | null
    categories: string
    status?: $Enums.AnnonceStatus
    vues?: number
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    auteur: UserCreateNestedOneWithoutAnnoncesInput
  }

  export type AnnonceUncheckedCreateWithoutCandidaturesInput = {
    id?: string
    titre: string
    type: $Enums.AnnonceType
    description: string
    contenu?: string | null
    organisation: string
    organisationId?: string | null
    lieu: string
    date: Date | string
    dateFin?: Date | string | null
    deadline?: Date | string | null
    image?: string | null
    categories: string
    status?: $Enums.AnnonceStatus
    vues?: number
    details?: NullableJsonNullValueInput | InputJsonValue
    auteurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnonceCreateOrConnectWithoutCandidaturesInput = {
    where: AnnonceWhereUniqueInput
    create: XOR<AnnonceCreateWithoutCandidaturesInput, AnnonceUncheckedCreateWithoutCandidaturesInput>
  }

  export type UserCreateWithoutCandidaturesInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    dateInscription?: Date | string
    annonces?: AnnonceCreateNestedManyWithoutAuteurInput
    rendezVous?: RdvCreateNestedManyWithoutUserInput
    contactsUrgence?: ContactUrgenceCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    groupes?: GroupeCreateNestedManyWithoutMembresInput
    rdvPro?: RdvCreateNestedManyWithoutProfessionnelInput
  }

  export type UserUncheckedCreateWithoutCandidaturesInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    dateInscription?: Date | string
    annonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    rendezVous?: RdvUncheckedCreateNestedManyWithoutUserInput
    contactsUrgence?: ContactUrgenceUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    groupes?: GroupeUncheckedCreateNestedManyWithoutMembresInput
    rdvPro?: RdvUncheckedCreateNestedManyWithoutProfessionnelInput
  }

  export type UserCreateOrConnectWithoutCandidaturesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCandidaturesInput, UserUncheckedCreateWithoutCandidaturesInput>
  }

  export type AnnonceUpsertWithoutCandidaturesInput = {
    update: XOR<AnnonceUpdateWithoutCandidaturesInput, AnnonceUncheckedUpdateWithoutCandidaturesInput>
    create: XOR<AnnonceCreateWithoutCandidaturesInput, AnnonceUncheckedCreateWithoutCandidaturesInput>
    where?: AnnonceWhereInput
  }

  export type AnnonceUpdateToOneWithWhereWithoutCandidaturesInput = {
    where?: AnnonceWhereInput
    data: XOR<AnnonceUpdateWithoutCandidaturesInput, AnnonceUncheckedUpdateWithoutCandidaturesInput>
  }

  export type AnnonceUpdateWithoutCandidaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnonceTypeFieldUpdateOperationsInput | $Enums.AnnonceType
    description?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    organisation?: StringFieldUpdateOperationsInput | string
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    lieu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: StringFieldUpdateOperationsInput | string
    status?: EnumAnnonceStatusFieldUpdateOperationsInput | $Enums.AnnonceStatus
    vues?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: UserUpdateOneRequiredWithoutAnnoncesNestedInput
  }

  export type AnnonceUncheckedUpdateWithoutCandidaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnonceTypeFieldUpdateOperationsInput | $Enums.AnnonceType
    description?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    organisation?: StringFieldUpdateOperationsInput | string
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    lieu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: StringFieldUpdateOperationsInput | string
    status?: EnumAnnonceStatusFieldUpdateOperationsInput | $Enums.AnnonceStatus
    vues?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    auteurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutCandidaturesInput = {
    update: XOR<UserUpdateWithoutCandidaturesInput, UserUncheckedUpdateWithoutCandidaturesInput>
    create: XOR<UserCreateWithoutCandidaturesInput, UserUncheckedCreateWithoutCandidaturesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCandidaturesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCandidaturesInput, UserUncheckedUpdateWithoutCandidaturesInput>
  }

  export type UserUpdateWithoutCandidaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    rendezVous?: RdvUpdateManyWithoutUserNestedInput
    contactsUrgence?: ContactUrgenceUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    groupes?: GroupeUpdateManyWithoutMembresNestedInput
    rdvPro?: RdvUpdateManyWithoutProfessionnelNestedInput
  }

  export type UserUncheckedUpdateWithoutCandidaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    rendezVous?: RdvUncheckedUpdateManyWithoutUserNestedInput
    contactsUrgence?: ContactUrgenceUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    groupes?: GroupeUncheckedUpdateManyWithoutMembresNestedInput
    rdvPro?: RdvUncheckedUpdateManyWithoutProfessionnelNestedInput
  }

  export type UserCreateWithoutRdvProInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    dateInscription?: Date | string
    annonces?: AnnonceCreateNestedManyWithoutAuteurInput
    candidatures?: CandidatureCreateNestedManyWithoutCandidatInput
    rendezVous?: RdvCreateNestedManyWithoutUserInput
    contactsUrgence?: ContactUrgenceCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    groupes?: GroupeCreateNestedManyWithoutMembresInput
  }

  export type UserUncheckedCreateWithoutRdvProInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    dateInscription?: Date | string
    annonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    candidatures?: CandidatureUncheckedCreateNestedManyWithoutCandidatInput
    rendezVous?: RdvUncheckedCreateNestedManyWithoutUserInput
    contactsUrgence?: ContactUrgenceUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    groupes?: GroupeUncheckedCreateNestedManyWithoutMembresInput
  }

  export type UserCreateOrConnectWithoutRdvProInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRdvProInput, UserUncheckedCreateWithoutRdvProInput>
  }

  export type UserCreateWithoutRendezVousInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    dateInscription?: Date | string
    annonces?: AnnonceCreateNestedManyWithoutAuteurInput
    candidatures?: CandidatureCreateNestedManyWithoutCandidatInput
    contactsUrgence?: ContactUrgenceCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    groupes?: GroupeCreateNestedManyWithoutMembresInput
    rdvPro?: RdvCreateNestedManyWithoutProfessionnelInput
  }

  export type UserUncheckedCreateWithoutRendezVousInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    dateInscription?: Date | string
    annonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    candidatures?: CandidatureUncheckedCreateNestedManyWithoutCandidatInput
    contactsUrgence?: ContactUrgenceUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    groupes?: GroupeUncheckedCreateNestedManyWithoutMembresInput
    rdvPro?: RdvUncheckedCreateNestedManyWithoutProfessionnelInput
  }

  export type UserCreateOrConnectWithoutRendezVousInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRendezVousInput, UserUncheckedCreateWithoutRendezVousInput>
  }

  export type UserUpsertWithoutRdvProInput = {
    update: XOR<UserUpdateWithoutRdvProInput, UserUncheckedUpdateWithoutRdvProInput>
    create: XOR<UserCreateWithoutRdvProInput, UserUncheckedCreateWithoutRdvProInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRdvProInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRdvProInput, UserUncheckedUpdateWithoutRdvProInput>
  }

  export type UserUpdateWithoutRdvProInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    candidatures?: CandidatureUpdateManyWithoutCandidatNestedInput
    rendezVous?: RdvUpdateManyWithoutUserNestedInput
    contactsUrgence?: ContactUrgenceUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    groupes?: GroupeUpdateManyWithoutMembresNestedInput
  }

  export type UserUncheckedUpdateWithoutRdvProInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    candidatures?: CandidatureUncheckedUpdateManyWithoutCandidatNestedInput
    rendezVous?: RdvUncheckedUpdateManyWithoutUserNestedInput
    contactsUrgence?: ContactUrgenceUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    groupes?: GroupeUncheckedUpdateManyWithoutMembresNestedInput
  }

  export type UserUpsertWithoutRendezVousInput = {
    update: XOR<UserUpdateWithoutRendezVousInput, UserUncheckedUpdateWithoutRendezVousInput>
    create: XOR<UserCreateWithoutRendezVousInput, UserUncheckedCreateWithoutRendezVousInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRendezVousInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRendezVousInput, UserUncheckedUpdateWithoutRendezVousInput>
  }

  export type UserUpdateWithoutRendezVousInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    candidatures?: CandidatureUpdateManyWithoutCandidatNestedInput
    contactsUrgence?: ContactUrgenceUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    groupes?: GroupeUpdateManyWithoutMembresNestedInput
    rdvPro?: RdvUpdateManyWithoutProfessionnelNestedInput
  }

  export type UserUncheckedUpdateWithoutRendezVousInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    candidatures?: CandidatureUncheckedUpdateManyWithoutCandidatNestedInput
    contactsUrgence?: ContactUrgenceUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    groupes?: GroupeUncheckedUpdateManyWithoutMembresNestedInput
    rdvPro?: RdvUncheckedUpdateManyWithoutProfessionnelNestedInput
  }

  export type UserCreateWithoutGroupesInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    dateInscription?: Date | string
    annonces?: AnnonceCreateNestedManyWithoutAuteurInput
    candidatures?: CandidatureCreateNestedManyWithoutCandidatInput
    rendezVous?: RdvCreateNestedManyWithoutUserInput
    contactsUrgence?: ContactUrgenceCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    rdvPro?: RdvCreateNestedManyWithoutProfessionnelInput
  }

  export type UserUncheckedCreateWithoutGroupesInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    dateInscription?: Date | string
    annonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    candidatures?: CandidatureUncheckedCreateNestedManyWithoutCandidatInput
    rendezVous?: RdvUncheckedCreateNestedManyWithoutUserInput
    contactsUrgence?: ContactUrgenceUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    rdvPro?: RdvUncheckedCreateNestedManyWithoutProfessionnelInput
  }

  export type UserCreateOrConnectWithoutGroupesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupesInput, UserUncheckedCreateWithoutGroupesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutGroupesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutGroupesInput, UserUncheckedUpdateWithoutGroupesInput>
    create: XOR<UserCreateWithoutGroupesInput, UserUncheckedCreateWithoutGroupesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutGroupesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutGroupesInput, UserUncheckedUpdateWithoutGroupesInput>
  }

  export type UserUpdateManyWithWhereWithoutGroupesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutGroupesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    telephone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    dateInscription?: DateTimeFilter<"User"> | Date | string
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    dateInscription?: Date | string
    annonces?: AnnonceCreateNestedManyWithoutAuteurInput
    candidatures?: CandidatureCreateNestedManyWithoutCandidatInput
    rendezVous?: RdvCreateNestedManyWithoutUserInput
    contactsUrgence?: ContactUrgenceCreateNestedManyWithoutUserInput
    groupes?: GroupeCreateNestedManyWithoutMembresInput
    rdvPro?: RdvCreateNestedManyWithoutProfessionnelInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    dateInscription?: Date | string
    annonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    candidatures?: CandidatureUncheckedCreateNestedManyWithoutCandidatInput
    rendezVous?: RdvUncheckedCreateNestedManyWithoutUserInput
    contactsUrgence?: ContactUrgenceUncheckedCreateNestedManyWithoutUserInput
    groupes?: GroupeUncheckedCreateNestedManyWithoutMembresInput
    rdvPro?: RdvUncheckedCreateNestedManyWithoutProfessionnelInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    candidatures?: CandidatureUpdateManyWithoutCandidatNestedInput
    rendezVous?: RdvUpdateManyWithoutUserNestedInput
    contactsUrgence?: ContactUrgenceUpdateManyWithoutUserNestedInput
    groupes?: GroupeUpdateManyWithoutMembresNestedInput
    rdvPro?: RdvUpdateManyWithoutProfessionnelNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    candidatures?: CandidatureUncheckedUpdateManyWithoutCandidatNestedInput
    rendezVous?: RdvUncheckedUpdateManyWithoutUserNestedInput
    contactsUrgence?: ContactUrgenceUncheckedUpdateManyWithoutUserNestedInput
    groupes?: GroupeUncheckedUpdateManyWithoutMembresNestedInput
    rdvPro?: RdvUncheckedUpdateManyWithoutProfessionnelNestedInput
  }

  export type UserCreateWithoutContactsUrgenceInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    dateInscription?: Date | string
    annonces?: AnnonceCreateNestedManyWithoutAuteurInput
    candidatures?: CandidatureCreateNestedManyWithoutCandidatInput
    rendezVous?: RdvCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    groupes?: GroupeCreateNestedManyWithoutMembresInput
    rdvPro?: RdvCreateNestedManyWithoutProfessionnelInput
  }

  export type UserUncheckedCreateWithoutContactsUrgenceInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    password: string
    telephone?: string | null
    role?: $Enums.Role
    avatar?: string | null
    dateInscription?: Date | string
    annonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    candidatures?: CandidatureUncheckedCreateNestedManyWithoutCandidatInput
    rendezVous?: RdvUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    groupes?: GroupeUncheckedCreateNestedManyWithoutMembresInput
    rdvPro?: RdvUncheckedCreateNestedManyWithoutProfessionnelInput
  }

  export type UserCreateOrConnectWithoutContactsUrgenceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContactsUrgenceInput, UserUncheckedCreateWithoutContactsUrgenceInput>
  }

  export type UserUpsertWithoutContactsUrgenceInput = {
    update: XOR<UserUpdateWithoutContactsUrgenceInput, UserUncheckedUpdateWithoutContactsUrgenceInput>
    create: XOR<UserCreateWithoutContactsUrgenceInput, UserUncheckedCreateWithoutContactsUrgenceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContactsUrgenceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContactsUrgenceInput, UserUncheckedUpdateWithoutContactsUrgenceInput>
  }

  export type UserUpdateWithoutContactsUrgenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    candidatures?: CandidatureUpdateManyWithoutCandidatNestedInput
    rendezVous?: RdvUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    groupes?: GroupeUpdateManyWithoutMembresNestedInput
    rdvPro?: RdvUpdateManyWithoutProfessionnelNestedInput
  }

  export type UserUncheckedUpdateWithoutContactsUrgenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    candidatures?: CandidatureUncheckedUpdateManyWithoutCandidatNestedInput
    rendezVous?: RdvUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    groupes?: GroupeUncheckedUpdateManyWithoutMembresNestedInput
    rdvPro?: RdvUncheckedUpdateManyWithoutProfessionnelNestedInput
  }

  export type AnnonceCreateManyAuteurInput = {
    id?: string
    titre: string
    type: $Enums.AnnonceType
    description: string
    contenu?: string | null
    organisation: string
    organisationId?: string | null
    lieu: string
    date: Date | string
    dateFin?: Date | string | null
    deadline?: Date | string | null
    image?: string | null
    categories: string
    status?: $Enums.AnnonceStatus
    vues?: number
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CandidatureCreateManyCandidatInput = {
    id?: string
    annonceId: string
    message?: string | null
    cv?: string | null
    status?: $Enums.CandidatureStatus
    createdAt?: Date | string
  }

  export type RdvCreateManyUserInput = {
    id?: string
    type: string
    professionnelId?: string | null
    date: Date | string
    heure: string
    motif: string
    status?: $Enums.RdvStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUrgenceCreateManyUserInput = {
    id?: string
    nom: string
    prenom: string
    telephone: string
    relation: string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    message: string
    type: string
    read?: boolean
    link?: string | null
    createdAt?: Date | string
  }

  export type RdvCreateManyProfessionnelInput = {
    id?: string
    type: string
    date: Date | string
    heure: string
    motif: string
    status?: $Enums.RdvStatus
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnonceUpdateWithoutAuteurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnonceTypeFieldUpdateOperationsInput | $Enums.AnnonceType
    description?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    organisation?: StringFieldUpdateOperationsInput | string
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    lieu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: StringFieldUpdateOperationsInput | string
    status?: EnumAnnonceStatusFieldUpdateOperationsInput | $Enums.AnnonceStatus
    vues?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidatures?: CandidatureUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceUncheckedUpdateWithoutAuteurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnonceTypeFieldUpdateOperationsInput | $Enums.AnnonceType
    description?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    organisation?: StringFieldUpdateOperationsInput | string
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    lieu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: StringFieldUpdateOperationsInput | string
    status?: EnumAnnonceStatusFieldUpdateOperationsInput | $Enums.AnnonceStatus
    vues?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidatures?: CandidatureUncheckedUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceUncheckedUpdateManyWithoutAuteurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnonceTypeFieldUpdateOperationsInput | $Enums.AnnonceType
    description?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    organisation?: StringFieldUpdateOperationsInput | string
    organisationId?: NullableStringFieldUpdateOperationsInput | string | null
    lieu?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: StringFieldUpdateOperationsInput | string
    status?: EnumAnnonceStatusFieldUpdateOperationsInput | $Enums.AnnonceStatus
    vues?: IntFieldUpdateOperationsInput | number
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatureUpdateWithoutCandidatInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    cv?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidatureStatusFieldUpdateOperationsInput | $Enums.CandidatureStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    annonce?: AnnonceUpdateOneRequiredWithoutCandidaturesNestedInput
  }

  export type CandidatureUncheckedUpdateWithoutCandidatInput = {
    id?: StringFieldUpdateOperationsInput | string
    annonceId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    cv?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidatureStatusFieldUpdateOperationsInput | $Enums.CandidatureStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatureUncheckedUpdateManyWithoutCandidatInput = {
    id?: StringFieldUpdateOperationsInput | string
    annonceId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    cv?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidatureStatusFieldUpdateOperationsInput | $Enums.CandidatureStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RdvUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    status?: EnumRdvStatusFieldUpdateOperationsInput | $Enums.RdvStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionnel?: UserUpdateOneWithoutRdvProNestedInput
  }

  export type RdvUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    professionnelId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    status?: EnumRdvStatusFieldUpdateOperationsInput | $Enums.RdvStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RdvUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    professionnelId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    status?: EnumRdvStatusFieldUpdateOperationsInput | $Enums.RdvStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUrgenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
  }

  export type ContactUrgenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
  }

  export type ContactUrgenceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupeUpdateWithoutMembresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    horaire?: StringFieldUpdateOperationsInput | string
    lieu?: StringFieldUpdateOperationsInput | string
    placesMax?: IntFieldUpdateOperationsInput | number
    placesDisponibles?: IntFieldUpdateOperationsInput | number
    animateur?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    thematiques?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupeUncheckedUpdateWithoutMembresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    horaire?: StringFieldUpdateOperationsInput | string
    lieu?: StringFieldUpdateOperationsInput | string
    placesMax?: IntFieldUpdateOperationsInput | number
    placesDisponibles?: IntFieldUpdateOperationsInput | number
    animateur?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    thematiques?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupeUncheckedUpdateManyWithoutMembresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    horaire?: StringFieldUpdateOperationsInput | string
    lieu?: StringFieldUpdateOperationsInput | string
    placesMax?: IntFieldUpdateOperationsInput | number
    placesDisponibles?: IntFieldUpdateOperationsInput | number
    animateur?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    thematiques?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RdvUpdateWithoutProfessionnelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    status?: EnumRdvStatusFieldUpdateOperationsInput | $Enums.RdvStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRendezVousNestedInput
  }

  export type RdvUncheckedUpdateWithoutProfessionnelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    status?: EnumRdvStatusFieldUpdateOperationsInput | $Enums.RdvStatus
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RdvUncheckedUpdateManyWithoutProfessionnelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    heure?: StringFieldUpdateOperationsInput | string
    motif?: StringFieldUpdateOperationsInput | string
    status?: EnumRdvStatusFieldUpdateOperationsInput | $Enums.RdvStatus
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatureCreateManyAnnonceInput = {
    id?: string
    candidatId: string
    message?: string | null
    cv?: string | null
    status?: $Enums.CandidatureStatus
    createdAt?: Date | string
  }

  export type CandidatureUpdateWithoutAnnonceInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    cv?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidatureStatusFieldUpdateOperationsInput | $Enums.CandidatureStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    candidat?: UserUpdateOneRequiredWithoutCandidaturesNestedInput
  }

  export type CandidatureUncheckedUpdateWithoutAnnonceInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidatId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    cv?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidatureStatusFieldUpdateOperationsInput | $Enums.CandidatureStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatureUncheckedUpdateManyWithoutAnnonceInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidatId?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    cv?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCandidatureStatusFieldUpdateOperationsInput | $Enums.CandidatureStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutGroupesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    candidatures?: CandidatureUpdateManyWithoutCandidatNestedInput
    rendezVous?: RdvUpdateManyWithoutUserNestedInput
    contactsUrgence?: ContactUrgenceUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    rdvPro?: RdvUpdateManyWithoutProfessionnelNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    annonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    candidatures?: CandidatureUncheckedUpdateManyWithoutCandidatNestedInput
    rendezVous?: RdvUncheckedUpdateManyWithoutUserNestedInput
    contactsUrgence?: ContactUrgenceUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    rdvPro?: RdvUncheckedUpdateManyWithoutProfessionnelNestedInput
  }

  export type UserUncheckedUpdateManyWithoutGroupesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
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