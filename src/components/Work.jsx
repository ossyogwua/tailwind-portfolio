import React from "react";
import proj1 from "../assets/assets/proj1.png";
import proj2 from "../assets/assets/proj2.png";
import proj3 from "../assets/assets/proj3.png";
import proj4 from "../assets/assets/proj4.png";
import proj5 from "../assets/assets/proj5.png";
import proj6 from "../assets/assets/proj6.mp4";

const Work = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">work</p>
        <p className="terxt-gray-400">Check out some of my recent work</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                 h-[200px] bg-cover relative"
        >
          <img src={proj1} layout="fill" objectfit="cover" alt="" />
          <div className="opacity-o group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Movie-API
            </span>
            <div className="pt-8 text-center">
              <a href="https://myflix.922o.onrender.com">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                 h-[200px] bg-cover relative"
        >
          <img src={proj2} layout="fill" objectfit="cover" alt="" />
          <div className="opacity-o group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              MyFlix-Client
            </span>
            <div className="pt-8 text-center">
              <a href="https://ossyogwua.github.io/myFlix-client/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                 h-[200px] bg-cover relative"
        >
          <img src={proj3} layout="fill" objectfit="cover" alt="" />
          <div className="opacity-o group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              MyFlix-Angular-App
            </span>
            <div className="pt-8 text-center">
              <a href="https://ossyogwua.github.io/myflix-angular-app/welcome">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                 h-[200px] bg-cover relative"
        >
          <img src={proj4} layout="fill" objectfit="cover" alt="" />
          <div className="opacity-o group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Meet App
            </span>
            <div className="pt-8 text-center">
              <a href="https://ossyogwua.github.io/meet/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                 h-[200px] bg-cover relative"
        >
          <img src={proj5} layout="fill" objectfit="cover" alt="" />
          <div className="opacity-o group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Pokedex-App
            </span>
            <div className="pt-8 text-center">
              <a href="https://ossyogwua.github.io/pokedex-app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                 h-[200px] bg-cover relative"
        >
          <video
            src={proj6}
            autoPlay
            loop
            muted
            playsinline-="true"
            layout="fill"
            objectfit="cover"
            alt=""
          />
          <div className="opacity-o group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Chat App
            </span>
            <div className="pt-8 text-center">
              <a href="https://github.com/ossyogwua/chat">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;