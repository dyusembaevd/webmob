import { Provider } from "@/app/[locale]/provider";
import { queryClient } from "@/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import clsx from "clsx";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Red_Hat_Display } from "next/font/google";

import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Bloggers",
  description: "Bloggers next app",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages(locale as any);

  return (
    <html lang={locale}>
      <body
        className={clsx(
          redHatDisplay.className,
          "flex min-h-[100dvh] flex-col antialiased",
        )}
      >
        <Provider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </Provider>
      </body>
    </html>
  );
}
