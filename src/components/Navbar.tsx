"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Link as LinkScroll } from "react-scroll";
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
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-9  ">
      {NavItems.map((item) => {
        if (item.name === "Blogs" || item.name === "Home") {
          return (
            <Link
              href={item.path}
              key={item.name}
              className={`${
                pathname === item.path &&
                "text-accent border-b-2 border-accent px-2"
              } font-medium hover:text-accent transition-all duration-300`}
            >
              {item.name}
            </Link>
          );
        }

        return (
          <LinkScroll
            to={item.name}
            key={item.name}
            smooth={true}
            className={`${
              pathname === item.path &&
              "text-accent border-b-2 border-accent px-2"
            } font-medium hover:text-accent transition-all duration-300 cursor-pointer`}
            duration={500}
            offset={-100}
          >
            {item.name}
          </LinkScroll>
        );
      })}
    </nav>
  );
};

export default Navbar;
