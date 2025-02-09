import Link from "next/link";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import MobileStatusBar from "./MobileStatusBar";
import Image from "next/image";
import Footer from "./Footer";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <Image src={"/assets/flogo.png"} width={50} height={50} alt="" />
        </Link>
        <div className="hidden xl:flex items-center gap-7">
          <Navbar />
          <Link href={"/contact"}>
            <Button className="active:scale-95 transition-all duration-300">
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
