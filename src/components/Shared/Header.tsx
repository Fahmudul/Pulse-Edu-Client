"use client";
import Link from "next/link";
import Navbar from "../Navbar";
import { Button } from "../ui/button";
import { DropdownMenuDemo } from "../ui/DropDown";
import MobileStatusBar from "../MobileStatusBar";
import { Input } from "../ui/input";
import hat from "../../../public/assets/Adobe Express - file.png";
import Image from "next/image";
import { useUser } from "@/Context/UserContext";
import { useAppSelector } from "@/Redux/hooks";
import { useSession } from "next-auth/react";
import { IStudent } from "@/types/global";
import { User } from "next-auth";
const Header = () => {
  let user;
  const userFromRedux = useAppSelector((state) => state.auth);
  const sessionUser = useSession();
  console.log(sessionUser);
  if (sessionUser?.status === "authenticated") {
    console.log("hitting from session user");
    user = sessionUser?.data?.user as User;
  } else if (userFromRedux.email) {
    console.log("hitting from redux ");
    user = userFromRedux as IStudent;
  }
  console.log("from session", user);
  return (
    <header className=" text-white  min-h-[70px] pt-3  bg-none 0">
      <div className="w-[85%] mx-auto flex justify-between items-center">
        <Link href={"/"} className="flex items-center  ">
          <Image
            src={hat}
            alt="logo"
            width={50}
            height={50}
            className=" -rotate-12"
          />
          <h1 className="text-primary text-3xl font-bold">PulseEdu</h1>
        </Link>
        <Input
          placeholder="Search by tutor, course "
          className="bg-white text-primary w-[45%] mx-10"
        />
        <div className="hidden xl:flex items-center gap-7 ">
          <Navbar />
          {user ? (
            <>
              <DropdownMenuDemo role={user?.role!} />
            </>
          ) : (
            <>
              <Link href={"/login"}>
                <Button className="">Login</Button>
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
