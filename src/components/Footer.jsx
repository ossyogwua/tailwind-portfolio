/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Github from "../assets/assets/github.png";
import Facebook from "../assets/assets/facebook.svg";
import Linkedin from "../assets/assets/linkedin.svg";
import Twitter from "../assets/assets/twitter.svg";
import Medium from "../assets/assets/medium.png";

const Footer = () => {
  return (
    <div className="max-w-[1200px] sm:h-[150px] p-12 flex justify-between mx-auto">
      <span className="primary-color">Osinachi Ogwua</span>
      <p className="text-gray-600">
        ossyogwua@gmail.com <br /> #webDev2024
      </p>
      className="max-w-[1200px] sm:h-[150px] p-12 flex justify-between mx-auto"
      <span className="primary-color">social-media</span>
      <p className="text-gray-600">
        <a href="https://www.facebook.com/ossyoguike.ogwua/">
          <img src={Facebook} layout="fill" objectfit="cover" alt="" />
        </a>
      </p>
      <p className="text-gray-600">
        <a href="https://medium.com/@ossyogwua">
          <img
            src={Medium}
            layout="fill"
            objectfit="cover"
            alt=""
            //   className="w-10 h-10"
          />
        </a>
      </p>
      <p className="text-gray-600">
        <a href="https://github.com/ossyogwua">
          <img src={Github} layout="fill" objectfit="cover" alt="" />
        </a>
      </p>
      <p className="text-gray-600">
        <a href="https://linkedin.com/in/osinachiogwua/">
          <img src={Linkedin} layout="fill" objectfit="cover" alt="" />
        </a>
      </p>
      <p className="text-gray-600">
        <a href="https://twitter.com/f89adc109f6446d">
          <img src={Twitter} layout="fill" objectfit="cover" alt="" />
        </a>
      </p>
    </div>
  );
};

export default Footer;
