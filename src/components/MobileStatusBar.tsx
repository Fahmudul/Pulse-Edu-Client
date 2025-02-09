"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
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
const MobileStatusBar = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 text-center text-2xl">
          <Link href="/">
            <h1 className="text-3xl font-semibold">
              Fahmudul
              <br /> Hassan<span className="text-blue-500">_</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {NavItems.map((item, idx) => (
            <Link
              href={item.path}
              key={idx}
              className={`${
                pathName === item.path && "text-accent border-b-2 px-1 border-accent"
              } font-medium hover:text-accent transition-all duration-300 text-xl`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileStatusBar;
