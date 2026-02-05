"use client";

import {
  ChartNoAxesCombined,
  DoorClosed,
  LucideIcon,
  Store,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItems {
  text: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItems[] = [
  {
    text: "Asosiy",
    href: "/dashboard",
    icon: ChartNoAxesCombined,
  },
  {
    text: "Rooms",
    href: "/dashboard/rooms",
    icon: DoorClosed,
  },
  {
    text: "Bar",
    href: "/dashboard/bar",
    icon: Store,
  },
];
function SidebarMenu() {
  const pathName = usePathname();

  return (
    <ul className="flex flex-col gap-2">
      {navItems.map((item) => {
        return (
          <li key={item.href} className="py-1 border-gray-200 border-b">
            <Link
              href={item.href}
              className={`px-2 py-1 flex items-center gap-2 ${pathName === item.href ? "bg-gray-300 rounded-md transition-all duration-75 ease-linear" : "bg-none transition-all duration-300 ease-linear"}`}
            >
              {
                <item.icon
                  size={20}
                  className={` ${pathName === item.href ? "text-blue-400" : "text-gray-500"}`}
                />
              }
              <span
                className={`font-medium ${pathName === item.href ? "text-blue-400" : "text-gray-600"}`}
              >
                {item.text}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SidebarMenu;
