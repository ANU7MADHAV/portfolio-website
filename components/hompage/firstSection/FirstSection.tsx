"use client";

import { motion } from "framer-motion";
const FirstSection = () => {
  const containerVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.4,
      },
    },
  };
  return (
    <div className="w-full flex items-center -mb-5  h-screen justify-center">
      <section className="flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h1 className="bg-gradient-to-r sm:text-3xl text-2xl md:text-5xl text-center from-[#EE4AFC]  py-3  to-blue-600  text-transparent bg-clip-text">
            Hey There ! <br />
            I’m Anu Madhav
          </h1>
        </motion.div>
        <h3 className="md:text-lg text-base text-center font-semibold">
          I engineer Websites, Experiences & Code.
        </h3>
      </section>
    </div>
  );
};

export default FirstSection;
