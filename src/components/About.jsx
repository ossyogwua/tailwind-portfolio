import React from "react";
import aboutImg from "../assets/assets/about.jpg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto mt-6 mb-3" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              My journery as a web developer. As a former cabin crew and
              caregiver turned web developer, specializing in front-end and
              back-end web development with proficiency in HTML, CSS,
              Javascript, React, Node.js and Express, successfully built three
              responsive apps from scratch including my portfolio website which
              includes developing, testing, debugging, and launching. As a
              professional, I bring a diverse skillset to the table,
              encompassing teamwork, brainstorming, detail oriented, customer
              service, all driven by a commitment to practical problem-solving.
              My journey is a continues quest for growth as a web developer.
            </p>
          </div>
        </div>
        <imag
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={aboutImg}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
