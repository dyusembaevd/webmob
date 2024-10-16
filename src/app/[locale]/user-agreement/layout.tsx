import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "User agreement",
  description: "User agreement",
};

export default function UserAgreementLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
