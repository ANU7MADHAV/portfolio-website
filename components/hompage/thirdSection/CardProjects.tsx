"use client";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import image from "next/image";

type Prop = {
  image: any;
  heading: string;
};

const CardProjects = ({ image, heading }: Prop) => {
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
      className="flex flex-col px-2 justify-center items-center"
    >
      <section className="sm:w-[400px] w-[300px] rounded-xl shadow">
        <Image
          src={image}
          alt="hello"
          className="p-4 overflow-hidden rounded-lg"
        />
      </section>
      <h1>{heading}</h1>
    </motion.div>
  );
};

export default CardProjects;
