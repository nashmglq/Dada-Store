import { Places, Welcome } from "../component/places";
import { ReactTyped } from "react-typed";
import { Projects } from "../component/projects";
import { useEffect, useState, useRef } from "react";
import sound from "../sound/music.mp3";
import clickSound from "../sound/click.mp3";
import nightSound from "../sound/nightMusic.mp3";

export const Home = () => {
  const audioRef = useRef(null);
  const [play, isPlay] = useState(false);
  const [darkMode, isDarkMode] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(darkMode ? nightSound : sound);
    const playSound = () => {
      audioRef.current
        .play()
        .then(() => {
          isPlay(true);
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    };

    playSound();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleButton = () => {
    const audio = new Audio(clickSound);
    audio.play();

    if (play) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    isPlay(!play);
  };

  const darkModeButton = () => {
    isDarkMode(darkMode ? false : true);
  };



  return (
    <div>
      <button
        onClick={toggleButton}
        className="fixed top-2 right-0 z-50 w-10 h-10 sm:w-20 sm:h-20 sm:right-0"
      >
        <img src={play ? `images/unmute.png` : `images/mute.png`} />
      </button>

      <button
        onClick={darkModeButton}
        className="fixed top-2 right-10 z-50 w-10 h-10 sm:w-20 sm:h-20 sm:right-20"
      >
        <img src = {darkMode ? `images/night.png` : `images/sunny.png`} />
        {/* <img src={darkMode ? `images/unmute.png` : `images/mute.png`} /> */}
      </button>

      <div className="min-h-screen flex justify-center items-center font-pixelify tracking-widest text-white font-bold drop-shadow-[0_2px_2px_black] p-4">
        {/* Container */}
        <div className="flex w-5/11 md:w-5/6 lg:w-4/6 flex-wrap justify-center items-center">
          {/* Div of image */}
          <div className="flex w-full md:w-1/2 items-center justify-center ">
            <img
              src="images/hello.png"
              className="h-auto drop-shadow-[0_2px_2px_black]"
            />
          </div>
          {/* Div of image */}

          {/* Div of Content */}
          <div className="flex flex-col sm:w-full md:w-1/2 md:justify-start md:items-start drop-shadow-[0_2px_2px_black]">
            <h1 className="text-2xl sm:text-3xl ">Hi! I am Nash Maglaqui</h1>
            <div className="flex h-auto">
              <h1 className="text-xl sm:text-2xl">
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
      <Projects />
    </div>
  );
};
