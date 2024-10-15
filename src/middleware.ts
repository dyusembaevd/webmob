import createMiddleware from "next-intl/middleware";

import { localePrefix, locales, pathnames } from "./config";

export default createMiddleware({
  defaultLocale: "ru",
  locales,
  pathnames,
  localePrefix,
});

export const config = {
  matcher: ["/", "/(ru|kz|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
