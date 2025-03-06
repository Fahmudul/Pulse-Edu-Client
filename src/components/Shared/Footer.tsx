import { FaXTwitter, FaInstagram, FaPinterestP } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import hat from "../../app/hat.svg";
const Footer = () => {
  return (
    <div className="h-[60%]  md:h-[100%] bg-primary   flex justify-center items-center w-full mx-auto">
      <div className="w-[85%]  my-10 mx-auto text-primaryPro flex flex-col gap-10">
        <div className="flex gap-8 justify-between lg:flex-row flex-col items-center md:items-start md:text-start text-center [&>div>p:not(:first-child)]:cursor-pointer  [&>div>p:not(:first-child)]:hover:text-primaryPro  [&>div>p:not(:first-child)]:mb-2">
          <div>
            <Link
              href={"/"}
              className="flex items-center  relative -left-3 gap-1 mb-3"
            >
              <Image
                src={hat}
                alt="logo"
                width={50}
                height={50}
                className=" -rotate-12"
              />
              <h1 className="text-primaryPro text-3xl font-bold">PulseEdu</h1>
            </Link>
            <p>1203 Town Center Dr</p>
            <p>Arlington, VA 22201</p>
            <p>+0000 123 456 789</p>
            <p>info@example.com</p>
          </div>
          <div>
            <p className="text-2xl font-bold mb-5">Help</p>
            <p>Seach</p>
            <p>Help</p>
            <p>Information</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p className="text-2xl font-bold mb-5">Support</p>
            <p>Seach Terms</p>
            <p>Advanced Search</p>
            <p>Helps & Faqs</p>
            <p>Store Location</p>
          </div>
          <div>
            <p className="text-2xl font-bold mb-5">Information</p>
            <p>Contact</p>
            <p>About</p>
            <p>Careers</p>
            <p>Refund & Returns</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          {/* Social Icons */}
          <FaXTwitter className="text-2xl hover:text-primaryPro/50 transition-all duration-300" />
          <FaInstagram className="text-2xl hover:text-primaryPro/50 transition-all duration-300" />
          <FaPinterestP className="text-2xl hover:text-primaryPro/50 transition-all duration-300" />
          <CiFacebook className="text-2xl hover:text-primaryPro/50 transition-all duration-300" />
        </div>

        <div className="text-center flex flex-col gap-3">
          <hr />
          <span className="p-5">All Right Reserved © 2025 Pulse Edu</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
