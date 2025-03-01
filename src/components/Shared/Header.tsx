"use client";
import Link from "next/link";
import Navbar from "../Navbar";
import { Button } from "../ui/button";

// import Image from "next/image";
import "animate.css";
import { useSession } from "next-auth/react";
import { DropdownMenuDemo } from "../ui/DropDown";
import MobileStatusBar from "../MobileStatusBar";
import { Input } from "../ui/input";
import hat from "../../../public/assets/Adobe Express - file.png";
import Image from "next/image";
const Header = () => {
  const { data: session } = useSession();
  console.log("from session", session);
  return (
    <header className=" text-white  min-h-[70px] pt-3 sticky top-0 bg-none 0">
      <div className="w-[85%] mx-auto flex justify-between items-center">
        <Link href={"/"} className="flex items-center  ">
          <Image src={hat} alt="logo" width={50} height={50} className=" -rotate-12" />
          <h1 className="text-primary text-3xl font-bold">PulseEdu</h1>
        </Link>
        <Input
          placeholder="Search by tutor, course "
          className="bg-white w-[50%] mx-10"
        />
        <div className="hidden xl:flex items-center gap-7 ">
          <Navbar />
          {session?.user ? (
            <>
              <DropdownMenuDemo role={session.user.role} />
            </>
          ) : (
            <>
              <Link href={"/login"}>
                <Button className="bg-[#136E61] text-white active:scale-95 transition-all duration-300  hover:bg-[#083832]">
                  Login
                </Button>
              </Link>
            </>
          )}
        </div>
        <div className="xl:hidden">
          <MobileStatusBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
