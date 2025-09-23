import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaEnvelope } from "react-icons/fa";

// const socialLinks = [
//   { href: "https://discord.com", icon: <FaDiscord /> },
//   { href: "https://twitter.com", icon: <FaTwitter /> },
//   { href: "https://youtube.com", icon: <FaYoutube /> },
//   { href: "https://medium.com", icon: <FaMedium /> },
//    { href: "sourya722000@gmail.com", icon: <FaEnvelope/> },
// ];

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-4 text-white mt-20">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Kalavidaa 2024. All rights reserved
        </p>

        {/* <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-[#5542ff]"
            >
              {link.icon}
            </a>
          ))}
        </div> */}
        <p className="text-center text-sm font-light hover:underline md:text-right">sourya722000@gmail.com</p>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;