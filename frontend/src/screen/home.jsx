import { motion } from "framer-motion";
import { Welcome } from "../component/welcome";

export const Home = () => {
  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center h-screen">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center h-auto">
            <div className="flex flex-col sm:w-1/2 md:w-full md:px-3 lg:w-1/4">
              <img
                src="images/landing.jpg"
                className="border-4 border-neutral-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col sm:w-full lg:w-1/3">
              <div>
                <h1 className="text-4xl font-bold text-neutral-800">
                  {" "}
                  Dada's Store
                </h1>
              </div>
              <div>
                <h1 className="text-lg font-normal text-neutral-800">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Welcome />
    </div>
  );
};
