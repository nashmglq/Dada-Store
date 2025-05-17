import React, { use, useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { Data } from "../data/data";

export const Places = () => {
  const [count, setCount] = useState(0);
  const [imageCount, setImageCount] = useState(0);

  const nextButton = (e) => {
    e.preventDefault();
    setCount(count === Data.places.length - 1 ? 0 : count + 1);
    setImageCount(0);
  };
  const prevButton = (e) => {
    e.preventDefault();
    setCount(count < 1 ? 2 : count - 1);
    setImageCount(0);
  };

  const nextImage = (e) => {
    e.preventDefault();
    setImageCount(imageCount > Data.places[count].image.length - 2 ? 0 : imageCount + 1);
  };
  const prevImage = (e) => {
    e.preventDefault();
    setImageCount(imageCount < 1 ? 2 : imageCount - 1);
  };

  return (
    <div className="h-screen font-pixelify text-white tracking-widest flex flex-col justify-center items-center font-bold drop-shadow-[0_2px_2px_black]">
      <h1 className="text-4xl font-bold ">
        {/* <ReactTyped
          strings={["Places I've been for the past months...  "]}
          typeSpeed={50}
        /> */}
        Places I've been for the past months...
      </h1>
      {/* Div for places/content */}
      <div className="flex justify-center items-center gap-x-2 my-4 sm:w-full md:w-1/2 h-auto ">
        <button onClick={prevButton}>
          <img src="images/left.png" className="w-10 h-10" />
        </button>

        <div className="border-8 p-4 w-full h-full rounded-lg border-yellow-800 bg-yellow-500">
          {Data.places
            ? Data.places.map((place, index) => (
                <div key={index}>
                  {index === count ? (
                    <div className="flex flex-col justify-center items-center">
                      <h1 className="text-2xl drop-shadow-[0_0_2px_black]">
                        {" "}
                        {place.name}
                      </h1>
                      <div className="flex flex-col md:flex-row justify-center items-center">
                          <button onClick={prevImage}>
                            {" "}
                            <img
                              src="images/leftImage.png"
                              className="w-10 h-10"
                            />
                          </button>
                          <img
                            src={place.image[imageCount]}
                            className="w-64 h-64"
                          />
                          <button className="block" onClick={nextImage}>
                            {" "}
                            <img
                              src="images/rightImage.png"
                              className="w-10 h-10"
                            />{" "}
                          </button>
                        <h1 className="text-xl drop-shadow-[0_0_2px_black] m-7">
                          {" "}
                          {place.description}
                        </h1>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))
            : null}
        </div>

        <button onClick={nextButton}>
          {" "}
          <img src="images/right.png" className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};
