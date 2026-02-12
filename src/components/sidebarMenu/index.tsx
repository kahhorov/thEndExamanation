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
type Props = {
  isOpen: boolean;
};
function SidebarMenu({ isOpen }: Props) {
  const pathName = usePathname();

  return (
    <ul className="flex flex-col gap-2">
      {navItems.map((item) => {
        return (
          <li
            key={item.href}
            className={`${isOpen ? "flex flex-col justify-start" : "flex justify-end px-3"} py-1  ${pathName === item.href ? "bg-linear-to-r from-cyan-500 to-purple-500 rounded-md transition-all duration-75 ease-linear" : "bg-gray-50 rounded-md transition-all duration-300 ease-linear"}`}
          >
            <Link
              href={item.href}
              className={`px-2 py-1 flex items-center gap-2`}
            >
              {
                <item.icon
                  size={20}
                  className={` ${pathName === item.href ? "text-white" : "text-gray-500"}`}
                />
              }
              <span
                className={`font-medium ${pathName === item.href ? "text-white" : "text-gray-600"}`}
              >
                {isOpen && item.text}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SidebarMenu;
