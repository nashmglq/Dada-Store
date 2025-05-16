import { Welcome } from "../component/welcome";
import { ReactTyped } from "react-typed";

export const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center font-pixelify tracking-widest text-white font-bold">
      {/* Container */}
      <div className="flex w-4/6">
        {/* Div of image */}
        <div className="flex w-1/2 items-center justify-center ">
          <img src="images/hello.png" className="h-auto" />
        </div>
        {/* Div of image */}

        {/* Div of Content */}
        <div className="flex flex-col w-1/2 justify-center">
          <h1 className="text-3xl">Hi! I am Nash Maglaqui</h1>
          <div className="h-40">
            <h1 className="text-xl">
              <ReactTyped
                strings={[
                  `I’m a Computer Engineering student, and this website is a way for me
            to share what I did this vacation, like places I visited, projects I
            made, and my hobbies like listening to music, playing guitar, and
            gaming.`,
                ]}
                typeSpeed={10}
              />
            </h1>
          </div>
        </div>
        {/* Div of Content */}
      </div>
    </div>
  );
};
