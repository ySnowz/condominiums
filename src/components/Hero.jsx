import CountUp from "react-countup";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <>
      <section className="w-full h-[90vh] flex items-center justify-center bg-gray-900">
        <div
          className="flex items-start justify-center gap-14">
          <motion.div className="relative z-10 sm:w-full sm:flex sm:flex-col sm:items-center  sm:justify-center lg:block lg:w-auto"
          initial={{ x: "-2rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 3,
            type: "spring",
          }}>
            <div className="lg:w-[50px] lg:h-[50px] md:w-[35px] md:h-[35px] w-[25px] h-[25px] rounded-[100%] bg-gradient-to-b from-orange-400 to-orange-600 absolute top-0 lg:left-[60%] md:left-[-4%] md:top-[-18px] -z-10"></div>
            <h1 className="sm:hidden lg:block lg:text-7xl md:text-4xl capitalize font-bold text-white ">
              Discover <br />
              most suitable <br /> property
            </h1>
            <p className="sm:hidden lg:block text-white opacity-60 mt-4 md:text-[12px] lg:text-[16px] break-words md:w-[350px] lg:w-[450px]">
              Find a variety of properties that suiut you very easity <br />
              Forget all difficulties in finding a residence for you
            </p>
            <h1 className="block lg:hidden capitalize font-bold text-white text-3xl tracking-wider">
              Discover most suitable property
            </h1>
            <p className="block lg:hidden text-white opacity-60 mt-4  text-center w-[450px]">
              Find a variety of properties that suiut you very easity Forget all
              difficulties in finding a residence for you
            </p>
            <div className="mt-4 flex items-center justify-between bg-white w-[420px] py-2 px-2 rounded-sm">
              <input type="text" placeholder="Insert A Localization" />
              <button className="py-2 px-4 bg-gradient-to-l from-blue-600 to-blue-500 rounded-sm uppercase font-bold text-white duration-75 active:scale-95">
                Search
              </button>
            </div>
            <div>
              <div className="flex flex-row gap-6 items-center justify-start mt-6">
                <div className="flex flex-col mt-6">
                  <span className="text-white text-4xl">
                    <CountUp start={8800} end={9000} duration={4} />{" "}
                    <span className="text-orange-400 font-medium">+</span>
                  </span>
                  <span className="text-white opacity-70 font-light">
                    Premium Product
                  </span>
                </div>
                <div className="flex flex-col mt-6">
                  <span className="text-white text-4xl">
                    <CountUp start={1899} end={2000} duration={4} />{" "}
                    <span className="text-orange-400 font-medium">+</span>
                  </span>
                  <span className="text-white opacity-70 font-light">
                    Happy Customer
                  </span>
                </div>
                <div className="flex flex-col mt-6">
                  <span className="text-white text-4xl">
                    <CountUp start={15} end={28} duration={4} />{" "}
                    <span className="text-orange-400 font-medium">+</span>
                  </span>
                  <span className="text-white opacity-70 font-light">
                    Awards Winning
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="hidden lg:block"
          initial={{ x: "2rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 3,
            type: "spring",
          }}>
            <img
              src="./hero-image.png"
              alt="hero-image"
              className="hidden lg:block rounded-lg border border-orange-400 lg:w-[350px] lg:h-[460px] md:w-[250px]"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};
