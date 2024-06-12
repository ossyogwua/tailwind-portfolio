/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import heroimage from "../assets/assets/profilepic7.jpg";
import resumeURL from "../assets/assets/resume.pdf";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md: h-[70vh] mx-auto py-8 bg-black">
      <div className=" col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={heroimage} alt="hero image" />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <hi className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I'm a</span> <br />
          <TypeAnimation
            sequence={[
              "Frontend dev",
              1000,
              "Backend dev",
              1000,
              "Webdesigner",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </hi>

        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My name is Osinachi Ogwua. I am a full stack web developer from
          Niebüll Germany with excellent teamwork and customer service skill.
          Over the past 10 months, I've built three websites from scratch
          including my portfolio website with React, Node.js and Express, React,
          Bootstrap, jQuery ReactDom, JavaScript. My greatest goal is an
          opportunity to explore and pursue a new career in the tech industry,
          where I can exhibit my new knowledge and my teamwork, brainstorming
          and problem-solving skills. With the experiences from my previous jobs
          as cabin crew and caregiver where I have exhibited a high level of
          compassion, empathy, attention to detail and exceedance of targets to
          be an added advantage to my new career as a web developer.
        </p>

        <div className="my-8">
          <a
            href={resumeURL}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 w-full rounded-xl mr-4
                  bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Download cv
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl mr-4
            bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/osinachiogwua/"
            className="px-6 py-3 w-full rounded-xl mr-4
            bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
