import { Places, Welcome } from "../component/places";
import { ReactTyped } from "react-typed";
import { Projects } from "../component/projects";
import { useEffect, useState, useRef } from "react";
import sound from "../sound/music.mp3";
import clickSound from "../sound/click.mp3";
import nightSound from "../sound/nightMusic.mp3";
import { Link as ScrollLink } from "react-scroll";

export const Home = () => {
  const audioRef = useRef(null);
  const [play, isPlay] = useState(false);
  const [darkMode, isDarkMode] = useState(false);
  const [done, isDone] = useState(false);
  const [showButtons, isShow] = useState(false);
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
    const audio = new Audio(clickSound);
    audio.play();
  };

  const buttonSoundEffect = (e) => {
    e.preventDefault();
    const audio = new Audio(clickSound);
    audio.play();
  };

  useEffect(() => {
    if (done) {
      console.log("React type done.");
    }
  }, [done]);

  return (
    <div id="top">
      <button
        onClick={toggleButton}
        className="fixed top-2 right-0 z-50 w-10 h-10 sm:w-20 sm:h-20 sm:right-0 transition-all duration-300 hover:scale-110"
      >
        <img src={play ? `images/unmute.png` : `images/mute.png`} />
      </button>

      <button
        onClick={darkModeButton}
        className="fixed top-2 right-10 z-50 w-10 h-10 sm:w-20 sm:h-20 sm:right-20 transition-all duration-300 hover:scale-110"
      >
        <img src={darkMode ? `images/night.png` : `images/sunny.png`} />
      </button>

      <button className="fixed bottom-2 right-0 z-50 w-10 h-10 sm:w-20 sm:h-20 sm:right-0 transition-all duration-300 hover:scale-110">
        <ScrollLink
          to="top"
          smooth={true}
          duration={500}
          onClick={buttonSoundEffect}
        >
          <img src="images/arrowUp.png" />
        </ScrollLink>
      </button>

      <div className="min-h-screen flex justify-center items-center font-pixelify tracking-widest text-white font-bold drop-shadow-[0_2px_2px_black] p-4">
        {/* Container */}
        <div className="flex w-5/11 md:w-[95%] lg:w-4/5 xl:w-4/6 flex-wrap justify-center items-center">
          {/* Div of image */}
          <div className="flex w-full md:w-1/2 items-center justify-center ">
            <img
              src="images/hello.png"
              className="h-auto drop-shadow-[0_2px_2px_black]"
            />
          </div>
          {/* Div of image */}

          {/* Div of Content */}
          <div className="flex flex-col sm:w-[80%] md:w-[50%] md:justify-start md:items-start drop-shadow-[0_2px_2px_black]">
            <h1 className="text-2xl sm:text-2xl lg:text-3xl ">Hi! I am Nash Maglaqui</h1>
            <div className="flex min-h-[180px] sm:min-h-[180px] md:min-h-[230px] lg:min-h-[210px]">
              <h1 className="text-xl sm:text-2xl">
                <ReactTyped
                  strings={[
                    `I’m a Computer Engineering student, and this website is a way for me
            to share what I did this vacation, like places I visited, and projects I've made.`,
                  ]}
                  typeSpeed={10}
                  onComplete={() => isDone(true)}
                />
              </h1>
            </div>
            <div
              className={
                done
                  ? `opacity-100 flex gap-x-4 justify-center items-center transition-all duration-300`
                  : `opacity-0 flex gap-x-4 justify-center items-center transition-all duration-300`
              }
            >
              <button className="transition-all duration-300 hover:scale-105 ease-in">
                <ScrollLink
                  to="place"
                  smooth={true}
                  duration={500}
                  onClick={buttonSoundEffect}
                >
                  <img src="images/places.png" className="w-32 h-auto" />
                </ScrollLink>
              </button>
              <button className="transition-all duration-300 hover:scale-105 ease-in ">
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  onClick={buttonSoundEffect}
                >
                  <img src="images/proj.png" className="w-32 h-auto" />
                </ScrollLink>
              </button>
            </div>
          </div>
          {/* Div of Content */}
        </div>
      </div>
      <Places id="place" />
      <Projects id="projects" />
    </div>
  );
};
