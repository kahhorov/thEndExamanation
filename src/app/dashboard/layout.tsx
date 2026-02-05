import Navbar from "@/components/Navbar";
import SidebarMenu from "@/components/sidebarMenu";
import { Gamepad2 } from "lucide-react";
import React, { ReactNode } from "react";

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 h-screen sticky top-0 shadow-md">
        <div className="flex gap-2 justify-center items-center py-3.5 shadow-sm select-none">
          <Gamepad2 size={30} />
          <span className="font-black text-lg text-purple-950">
            Game <span className="text-purple-600">club</span>
          </span>
        </div>
        <nav className="py-3">
          <SidebarMenu />
        </nav>
      </div>

      <div className="grow">
        <header className="px-8 py-3 flex justify-between border-gray-100 border-b sticky top-0">
          <span className="font-black text-lg">Logo</span>
          <Navbar />
        </header>

        <div className="px-4 py-5">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
