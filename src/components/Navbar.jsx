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
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-9">
      {NavItems.map((item, idx) => (
        <Link
          href={item.path}
          key={item.item}
          className={`${
            pathname === item.path &&
            "text-accent border-b-2 border-accent px-2 "
          } font-medium hover:text-accent transition-all duration-300`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
