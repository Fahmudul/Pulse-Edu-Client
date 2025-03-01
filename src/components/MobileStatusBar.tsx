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
    name: "Tutors",
    path: "/tutor",
  },
  {
    name: "About Us",
    path: "/work",
  },
  {
    name: "Courses",
    path: "/courses",
  },
];
const MobileStatusBar = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-primary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-primaryPro min-h-10 border border-red-500">
        <div className="mt-32 mb-8 text-center text-2xl">
          <Link href="/">
            <h1 className="text-3xl font-bold text-primary">PulseEdu</h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {NavItems.map((item, idx) => (
            <Link
              href={item.path}
              key={idx}
              className={`${
                pathName === item.path &&
                "text-primary border-b-2 px-1 border-primary"
              } font-medium text-primary transition-all duration-300 text-xl`}
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
