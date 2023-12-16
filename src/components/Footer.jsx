import {
  FaFacebook,
  FaGithub,
  FaEnvelope,
  FaFacebookMessenger,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="dark:bg-black bg-slate-300">
      <div className="dark:text-slate-100">
        <div className="container mx-auto py-8 sm:py-12">
          <div className="flex justify-between items-center mb-5">
            <div className="w-20">
              <a target="_blank" rel="noreferrer" href="#home">
                <span className="gradientText text-4xl italic pr-2">
                  Nazmul
                </span>
              </a>
            </div>
            <div className="flex gap-5 text-xl">
              <div className="footer-icon">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nazmul1582">
                  <FaLinkedin />
                </a>
              </div>
              <div className="footer-icon">
                <a target="_blank" rel="noreferrer" href="https://github.com/nazmul1582">
                  <FaGithub />
                </a>
              </div>
              <div className="footer-icon">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/nazmulhasan1582">
                  <FaFacebook />
                </a>
              </div>
              <div className="footer-icon">
                <a href="mailto: nazmulhasan1582@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
              <div className="footer-icon">
                <a target="_blank" rel="noreferrer" href="https://www.messenger.com/t/nazmulhasan1582">
                  <FaFacebookMessenger />
                </a>
              </div>
            </div>
          </div>
          <p className="text-center">
            Copyright &copy; 2023, Md. Nazmul Hasan. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;