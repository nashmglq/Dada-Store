import React from "react";
import { ReactTyped } from "react-typed";

export const Places = () => {
  return (
    <div className="h-screen font-pixelify text-white tracking-widest flex flex-col justify-center items-center font-bold drop-shadow-[0_2px_2px_black]">
      <h1 className="text-4xl font-bold ">
        <ReactTyped
          strings={["Places I've been for the past months...  "]}
          typeSpeed={50}
        />
      </h1>
      {/* Div for places/content */}
      <div className="flex justify-center items-center gap-x-2 my-4 w-1/2 h-1/2">
        <button>
          <img src="images/left.png" className="w-10 h-10" />
        </button>
        <div className="border-8 p-4 w-full h-full rounded-lg border-yellow-800 bg-yellow-500">
          <h1 className="drop-shadow-[0_2px_2px_black]">
            <ReactTyped
              strings={[
                `   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`,
              ]}
              typeSpeed={10}
            />
          </h1>
        </div>
        <button>
          {" "}
          <img src="images/right.png" className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};
