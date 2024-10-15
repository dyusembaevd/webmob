import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blogger",
  description: "Blogger Page",
};

export default async function EventLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: {
    id: string;
  };
}) {
  return children;
}
