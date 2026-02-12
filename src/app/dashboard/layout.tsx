"use client";
import Navbar from "@/components/Navbar";
import SidebarMenu from "@/components/sidebarMenu";
import { Gamepad2 } from "lucide-react";
import React, { ReactNode, useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

function DashboardLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  // const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen">
      <div
        className={`${isOpen ? "min-w-64 translate-x-0 transition-all duration-300" : "min-w-14 transition-all duration-300"} h-screen sticky top-0 shadow-md`}
      >
        <div
          className={`${isOpen ? "justify-center" : "justify-end pr-5"} flex gap-2 items-center py-3.5 select-none`}
        >
          <Gamepad2
            size={30}
            className="text-cyan-400 drop-shadow-[0_10px_8px_rgba(34,211,238,0.8)]"
          />
          {isOpen && (
            <span className="font-black text-lg text-purple-950">
              Game <span className="text-purple-600">club</span>
            </span>
          )}
        </div>
        <nav>
          <SidebarMenu isOpen={isOpen} />
        </nav>
      </div>

      <div className="grow">
        <header className="px-8 py-2 flex justify-between bg-white shadow-sm z-10 sticky top-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink>{pathname.slice(1, 10)}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{pathname.slice(11)}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
        </header>

        <div className="px-4 py-5 min-h-screen">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
