import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ro", "en", "fr"],
  defaultLocale: "ro",
  localePrefix: "as-needed",
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
