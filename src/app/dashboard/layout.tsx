import { Gamepad2 } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

interface NavItems {
  text: string;
  href: string;
  icon?: React.HTMLElementType;
}

const navItems: NavItems[] = [
  {
    text: "Asosiy",
    href: "/dashboard",
  },
  {
    text: "Rooms",
    href: "/rooms",
  },
  {
    text: "Bar",
    href: "/bar",
  },
];

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
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              return (
                <li key={item.href} className="px-2 py-1 shadow-sm rounded-md">
                  <Link href={item.href} className="flex">
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="grow">
        <header className="px-4 py-4 border-gray-100 border-b sticky top-0">
          header
        </header>

        <div className="px-4 py-5">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
