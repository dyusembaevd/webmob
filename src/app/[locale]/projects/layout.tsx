import { MainLayout } from "@/shared/layouts";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Project Page",
  description: "Create Project page",
};

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
