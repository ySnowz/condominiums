import {motion} from "framer-motion"

export const Companies = () => {
  return (
    <motion.section
      className="w-full py-2 px-8"
      initial={{ y: "2rem", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 3,
        type: "spring",
      }}
    >
      <div className="p-4 flex flex-row justify-around items-center">
        <img
          src="./prologis.png"
          className="lg:w-[100px] w-[50px]"
        />
        <img
          src="./tower.png"
          className="lg:w-[100px] w-[50px]"
        />
        <img
          src="./equinix.png"
          className="lg:w-[100px] w-[50px]"
        />
        <img
          src="./realty.png"
          className="lg:w-[100px] w-[50px]"
        />
      </div>
    </motion.section>
  );
};
