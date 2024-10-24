"use client";

import { BottomNavbar } from "@/widgets/BottomNavbar";
import { Footer } from "@/widgets/Footer";
import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  hasFooter?: boolean;
}

export const MainLayout = ({ children, hasFooter = true }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Main content area */}
      <div className="flex-1">{children}</div>

      {/* Bottom Navbar */}
      <div className="fixed bottom-5 flex w-full items-center justify-center px-5">
        <BottomNavbar />
      </div>

      {/* Footer - Visible only when hasFooter is true */}
      {hasFooter && <Footer />}
    </div>
  );
};
