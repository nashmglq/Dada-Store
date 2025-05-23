import { useState } from "react";
import { createPortal } from "react-dom";
import { Data } from "../data/data";
import clickSound from "../sound/click.mp3";

export const ModalProj = ({ id, onClose }) => {
  const [remove, setRemove] = useState(true);

  const removeButton = (e) => {
    setRemove(false);

    onClose(false);
    const audio = new Audio(clickSound);
    audio.play();
  };

  const soundClick = (e) => {
    const audio = new Audio(clickSound);
    audio.play();
  }

  return createPortal(
    remove ? (
      <div className="fixed inset-0 bg-black bg-opacity-40 font-pixelify text-white flex justify-center items-center tracking-widest">
        <div className="border-8 p-4 w-full md:w-1/2 h-auto bg-yellow-500 border-yellow-800 rounded-lg drop-shadow-[0_2px_2px_black] ">
          {Data && Data.projects
            ? Data.projects.map((proj) => (
                <div key={proj.id}>
                  {proj.id === id ? (
                    <div className="drop-shadow-[2px_2px_2px_black]">
                      <div className="flex justify-end">
                        {" "}
                        <button onClick={removeButton} className="text-lg">
                          close
                        </button>
                      </div>
                      <h1 className="text-xl mb-4 font-bold md:text-4xl">
                        {proj.name}
                      </h1>
                      <h1 className="text-lg md:text-2xl">
                        {proj.storyBehind}
                      </h1>
                      <h1 className="text-lg my-4 md:text-2xl">
                        Check out the repository and the project!
                      </h1>
                      <div className="flex w-full md:w-1/2 gap-x-10">
                       <button onClick={soundClick}>
                          <a href={`${proj.githubLink}`} target="_blank">
                            <img
                              src="images/github.png"
                              className="w-full h-auto duration-300 hover:scale-105"
                            />
                          </a>
                        </button>
                        <button onClick={soundClick}>
                          <a href={`${proj.directLink}`} target="_blank">
                            <img
                              src="images/link.png"
                              className="w-full h-auto duration-300 hover:scale-105"
                            />
                          </a>
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))
            : null}
        </div>
      </div>
    ) : null,
    document.body
  );
};
