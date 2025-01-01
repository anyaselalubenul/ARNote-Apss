import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-center p-4 text-white">
      <h3>
        develop by <span className="font-bold">Rio Agustian Fauzi</span>
      </h3>
      <div className="flex justify-center mt-1 gap-2">
        <a href="https://github.com/Rioagustianf">
          <FaGithub className="text-2xl transition-transform duration-200 transform hover:scale-125" />
        </a>
        <a href="https://www.instagram.com/rioagustian.f">
          <FaInstagram className="text-2xl transition-transform duration-200 transform hover:scale-125" />
        </a>
        <a href="https://www.linkedin.com/in/rio-agustian/">
          <FaLinkedin className="text-2xl transition-transform duration-200 transform hover:scale-125" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
