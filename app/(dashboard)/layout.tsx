import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
    <div className="relative flex h-screen w-full flex-col">
        <Navbar />
      <div className="w-full">{children}</div>
    </div>
    </ClerkProvider>
  );
}

export default layout;
