import { useEffect, useState } from "react";
import { Data } from "../data/data";
import { ModalProj } from "./modalProj";
import clickSound from "../sound/click.mp3";

export const Projects = ({id}) => {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);

  const prevHandler = (e) => {
    e.preventDefault();

    setCount(count <= 1 ? Data.projects.length : count - 1);
    const audio = new Audio(clickSound);
    audio.play();
  };

  const nextHandler = (e) => {
    e.preventDefault();
    setCount(count < 3 ? count + 1 : 1);
    const audio = new Audio(clickSound);
    audio.play();
  };

  const showHandler = (e) => {
    setShow(show ? false : true);
    const audio = new Audio(clickSound);
    audio.play();
  };


  return (
    <div id = {id} className="min-h-screen flex flex-col justify-center items-center font-pixelify tracking-widest text-white font-bold drop-shadow-[2px_2px_2px_black] p-4">
      <h1 className="text-2xl font-bold text-center sm:text-4xl  drop-shadow-[2px_2px_2px_black]">
        Projects that I created this summer...
      </h1>

      <div className="flex flex-wrap gap-y-4 gap-x-2 md:flex-nowrap w-5/6 h-auto justify-center items-center my-2 drop-shadow-[0_2px_2px_black]">
        <img
          src={count > 1 ? "images/coding.png" : "images/talk.png"}
          className="w-auto md:w-1/2 lg:w-auto h-auto"
        />
        <button onClick={prevHandler} className="hidden lg:block ">
          <img src="images/left.png" className="w-10 h-10" />
        </button>
        <div className="border-8 p-4 w-full md:w-1/2  h-auto rounded-lg border-yellow-800 bg-yellow-500 ">
          {Data &&
            Data.projects.map((proj) => (
              <div key={proj.id}>
                {count === proj.id ? (
                  <div className="flex flex-row justify-center items-center drop-shadow-[2px_2px_2px_black] ">
                    <div className="flex flex-col justify-center items-center">
                      <h1 className="text-xl sm:text-3xl lg:text-2xl xl:text-3xl">{proj.name}</h1>
                      {Data.projects[count - 1].image ? (
                        <img
                          src={`${Data.projects[count - 1].image}`}
                          className="border-8 rounded-lg border-yellow-800 h-auto w-auto my-2"
                        />
                      ) : null}
                      <h1 className="my-2 text-md tracking-widest md:text-xl">
                        {proj.description}
                      </h1>

                      {count > 1 ? (
                        <button
                          className="block w-auto h-auto p-2 border-4 border-yellow-800 rounded-lg transition-all duration-300 hover:scale-105"
                          onClick={showHandler}
                        >
                          Learn more
                        </button>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          <div className="block lg:hidden flex justify-center items-center">
            <button onClick={prevHandler}>
              <img src="images/left.png" className="w-10 h-10 mx-2" />
            </button>
            <button onClick={nextHandler}>
              <img src="images/right.png" className="w-10 h-10 mx-2" />
            </button>
          </div>
        </div>
        <button onClick={nextHandler} className="hidden lg:block">
          <img src="images/right.png" className="w-10 h-10" />
        </button>
        {show ? <ModalProj id={count} onClose={showHandler} /> : null}
      </div>
    </div>
  );
};
