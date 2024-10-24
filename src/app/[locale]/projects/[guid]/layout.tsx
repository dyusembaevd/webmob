import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Project",
  description: "Project Page",
};

export default async function ProjectLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: {
    id: string;
  };
}) {
  return <>{children}</>;
}
