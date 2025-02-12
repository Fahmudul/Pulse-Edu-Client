"use client";
import Link from "next/link";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import MobileStatusBar from "./MobileStatusBar";
import Image from "next/image";
import "animate.css";
import { useSession } from "next-auth/react";
import { DropdownMenuDemo } from "./DropDown";
const Header = () => {
  const { data: session } = useSession();
  console.log("from session", session);
  return (
    <header className="py-8 xl:py-5 text-white  sticky top-0 bg-[#17262b] z-30 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <Image src={"/assets/flogo.png"} width={50} height={50} alt="" />
        </Link>
        <div className="hidden xl:flex items-center gap-7 ">
          <Navbar />
          {session?.user ? (
            <>
              <DropdownMenuDemo role={session.user.role} />
            </>
          ) : (
            <>
              <Link href={"/login"}>
                <Button className="active:scale-95 transition-all duration-300 hover:text-[#fee5b5] hover:bg-[#131f22]">
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
