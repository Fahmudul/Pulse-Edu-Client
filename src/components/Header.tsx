import Link from "next/link";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import MobileStatusBar from "./MobileStatusBar";
import Image from "next/image";
import 'animate.css';
const Header = () => {
  return (
    <header className="py-8 xl:py-5 text-white  sticky top-0 bg-[#17262b] z-30 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <Image src={"/assets/flogo.png"} width={50} height={50} alt="" />
        </Link>
        <div className="hidden xl:flex items-center gap-7 ">
          <Navbar />
          <Link href={"/contact"}>
            <Button className="active:scale-95 transition-all duration-300 hover:text-[#fee5b5] hover:bg-[#131f22]">
              HIRE ME
            </Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileStatusBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
