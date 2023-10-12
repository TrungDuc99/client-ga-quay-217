import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-6 justify-center">
          {/** logo */}
          <Link href={"#"}>
            <Image src={"logo.svg"} width={180} height={180} alt="" />
          </Link>
          {/** social icon */}
          <div className="flex gap-x-6 text-xl text-white">
            <Link href={"#"}>
              <FaYoutube />
            </Link>
            <Link href={"#"}>
              <FaFacebook />
            </Link>
            <Link href={"#"}>
              <FaInstagram />
            </Link>
            <Link href={"#"}>
              <FaTiktok />
            </Link>
          </div>
          {/** copyRight */}
          <div className="text-white font-medium">
            CopyRight &copy; Gà quay 217
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
