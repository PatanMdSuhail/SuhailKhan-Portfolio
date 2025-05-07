import logo from "../assets/projects/SKLogo.webp";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-10" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/mohammed-suhail-khan-b6b6822ab/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/PatanMdSuhail">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/p_md_suhail/">
          <FaInstagram />
        </a>
        <a href="https://x.com/Mdsuhail_Khan">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
