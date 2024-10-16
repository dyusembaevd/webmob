import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "NDA",
  description: "NDA",
};

export default function NDALayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
