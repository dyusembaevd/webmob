import { Pathnames } from "next-intl/routing";

export const locales = ["ru", "kz", "en"] as const;

export const pathnames = {
  "/": "/",
  "/support": "/support",
  "/nda": "/nda",
  "/user-agreement": "/user-agreement",
  "/bloggers/[id]": "/bloggers/[id]",
  "/project": "/project",
  "/project/[guid]": "/project/[guid]",
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export const defaultLanguage: (typeof locales)[number] = "ru";

type ApiConfig = {
  API_BASE?: string;
  BASE_URL?: string;
};

export const config: ApiConfig = {
  API_BASE: process.env.NEXT_PUBLIC_API_BASE,
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
};

export type AppPathnames = keyof typeof pathnames;

// Type for params

type ParamValue = string | number | boolean;
type ReadFrom<Path> = Path extends `${string}[${infer Rest}`
  ? ReadUntil<Rest>
  : [];
type ReadUntil<Path> = Path extends `${infer Match}]${infer Rest}`
  ? [Match, ...ReadFrom<Rest>]
  : [];
type RemovePrefixes<Key> = Key extends `[...${infer Name}`
  ? Name
  : Key extends `...${infer Name}`
    ? Name
    : Key;
type StrictParams<Pathname> = Pathname extends `${string}[${string}`
  ? {
      [Key in ReadFrom<Pathname>[number] as RemovePrefixes<Key>]: Key extends `[...${string}`
        ? Array<ParamValue> | undefined
        : Key extends `...${string}`
          ? Array<ParamValue>
          : ParamValue;
    }
  : never;

export type Params = StrictParams<AppPathnames>;
