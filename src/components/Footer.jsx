import React from "react";

import facebookLogo from "../assets/icons/facebook_logo.svg";
import instagramLogo from "../assets/icons/instagram_logo.svg";
import linkedinLogo from "../assets/icons/linkedin_logo.svg";
import whatsappLogo from "../assets/icons/whatsapp_logo.svg";

const Footer = () => {
  return (
    <footer className="bg-bg-primary text-text-primary flex justify-between items-center p-10 sm:flex-col gap-y-5">
      <div>© Prima Putra Agusantara - 2024</div>
      <div className="flex gap-10 sm:w-full justify-center">
        <a href="https://www.facebook.com/putra.prima2" target="_blank">
          <img
            src={facebookLogo}
            alt=""
            className="w-10 hover:scale-125 ease-in-out duration-75"
          />
        </a>
        <a
          href="https://www.instagram.com/prima_putraagusantara/"
          target="_blank"
        >
          <img src={instagramLogo} alt="" className="w-10 hover:scale-125 ease-in-out duration-75" />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/prima-putra-agusantara-014140176"
          target="_blank"
        >
          {" "}
          <img src={linkedinLogo} alt="" className="w-10 hover:scale-125 ease-in-out duration-75" />{" "}
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=6281958305632&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          {" "}
          <img src={whatsappLogo} alt="" className="w-10 hover:scale-125 ease-in-out duration-75" />{" "}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
