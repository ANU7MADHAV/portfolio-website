"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Prop = {
  name: string;
};

const Card = ({ name }: Prop) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.70 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scale,
        opacity: scrollYProgress,
      }}
      whileHover={{
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      }}
      className="border flex justify-center cursor-pointer rounded-lg px-2 sm:px-4 py-2"
    >
      <h1 className="md:text-base text-xs">{name}</h1>
    </motion.div>
  );
};

export default Card;
