"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const NavItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Teachers",
    path: "/teacher",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "News",
    path: "/news",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
];
const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-7  ">
      {NavItems.map((item) => {
        return (
          <Link
            href={item.path}
            key={item.name}
            className={`${
              pathname === item.path &&
              "text-primary border-b-2 border-primary px-2"
            } font-medium hover:text-accent transition-all duration-300 text-primary`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
