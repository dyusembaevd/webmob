import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Documentation",
};

export default function DocumentationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
