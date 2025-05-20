import { Places, Welcome } from "../component/places";
import { ReactTyped } from "react-typed";
import { Projects } from "../component/projects";
import { useState } from "react";
import sound from "../music.mp3"
export const Home = () => {
  useState(() => {
    new Audio(sound)
  })
  
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center font-pixelify tracking-widest text-white font-bold drop-shadow-[0_2px_2px_black] p-4">
        {/* Container */}
        <div className="flex w-5/11 md:w-5/6 lg:w-4/6 flex-wrap justify-center items-center">
          {/* Div of image */}
          <div className="flex w-full md:w-1/2 items-center justify-center ">
            <img src="images/hello.png" className="h-auto drop-shadow-[0_2px_2px_black]" />
          </div>
          {/* Div of image */}

          {/* Div of Content */}
          <div className="flex flex-col sm:w-full md:w-1/2  md:justify-start md:items-start drop-shadow-[0_2px_2px_black]">
            <h1 className="text-2xl sm:text-3xl ">Hi! I am Nash Maglaqui</h1>
            <div className="flex h-40">
              <h1 className="text-xl">
                <ReactTyped
                  strings={[
                    `I’m a Computer Engineering student, and this website is a way for me
            to share what I did this vacation, like places I visited, and projects I've made.`,
                  ]}
                  typeSpeed={10}
                />
              </h1>
            </div>
          </div>
          {/* Div of Content */}
        </div>
      </div>
      <Places />
      <Projects/>
    </div>
  );
};
