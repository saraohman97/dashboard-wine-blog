"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import User from "./user";

const Navbar = () => {
  const pathname = usePathname();
  const routes = [
    {
      href: `/wines`,
      label: "Vin- & matblogg",
      active: pathname === `/wines`,
    },
  ];

  return (
    <div className="h-20 border-b">
      <div className="flex items-center gap-10 justify-between h-full max-w-screen-xl mx-auto px-4">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="text-2xl font-bold uppercase cursor-pointer"
          >
            Dashboard
          </Link>
          {routes &&
            routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`hover:opacity-70 cursor-pointer ${
                  route.active && "underline underline-offset-4"
                }`}
              >
                {route.label}
              </Link>
            ))}
        </div>

        <User />
      </div>
    </div>
  );
};

export default Navbar;
