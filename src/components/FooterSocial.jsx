import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebook } from "react-icons/fa";

const socialLink = [
  { icon: <FaGithub />, link: "https://github.com/Fahmudul" },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/fahmudul-hassa%C3%B1-b87939248",
  },
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/profile.php?id=100032109636929",
  },
];
const FooterSocials = ({ containerClass, iconClass }) => {
  return (
    <div className={containerClass}>
      {socialLink.map((item, idx) => (
        <Link key={idx} href={item.link} className={iconClass}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default FooterSocials;
