import LeftSidebar from "@/components/LeftSidebar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />
        {children}
        <p className="text-white-1">RIGHT SIDEBAR</p>
      </main>
    </div>
  );
}
