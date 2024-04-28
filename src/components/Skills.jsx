import React from "react";
import html from "../assets/assets/html.png";
import css from "../assets/assets/css.png";
import javascript from "../assets/assets/javascript.png";
import tailwind from "../assets/assets/tailwind.png";
import reactjs from "../assets/assets/react.png";
import express from "../assets/assets/express.png";
import Nodejs from "../assets/assets/nodejs.png";
import bootstrap from "../assets/assets/bootstrap.png";
import reactnative from "../assets/assets/react.png";
import jquery from "../assets/assets/jquery.png";
import mongodb from "../assets/assets/mongodb.png";
import sql from "../assets/assets/sql.png";
import powershell from "../assets/assets/powershell.png";
import angular from "../assets/assets/angular.png";
import firebase from "../assets/assets/firebase.png";

const Skills = () => {
  return (
    <div
      className="border border-gray-600 bg-black-300 mt-32 text-gray-400 md:h-[150px] max-w-[1400px] mx-auto grid grid-cols-3
       place-items-center md:flex md:justify-between md:items-center"
    >
      <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
        my <br /> Tech <br /> Stack
      </h2>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[1000px]">
        <nav></nav>
        <img src={html} alt="" />
        <p className="mt-2">HTML</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[1000px]">
        <img src={css} alt="" />
        <p className="mt-2">CSS</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[1000px]">
        <img src={javascript} alt="" />
        <p className="mt-2">JavaScript</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[1000px]">
        <img src={reactjs} alt="" />
        <p className="mt-2">React</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[1000px]">
        <img src={tailwind} alt="" />
        <p className="mt-2">TailWind</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[1000px]">
        <img src={express} alt="" />
        <p className="mt-2">Express</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[1000px]">
        <img src={Nodejs} alt="" />
        <p className="mt-2">Node.js"</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[1000px]">
        <img src={bootstrap} alt="" />
        <p className="mt-2">BootStrap</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[1000px]">
        <img src={reactnative} alt="" />
        <p className="mt-2">React-Native</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[1000px]">
        <img src={jquery} alt="" className="bg-white" />
        <p className="mt-2">JQuery</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[1000px]">
        <img src={mongodb} alt="" />
        <p className="mt-2">MongoDb</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[1000px]">
        <img src={sql} alt="" />
        <p className="mt-2">SQL</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[1000px]">
        <img src={powershell} alt="" />
        <p className="mt-2">Powershell</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[1000px]">
        <img src={angular} alt="" />
        <p className="mt-2">Angular</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[1000px]">
        <img src={firebase} alt="" />
        <p className="mt-2">Firebase</p>
      </div>
    </div>
  );
};

export default Skills;
