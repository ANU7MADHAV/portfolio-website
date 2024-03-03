import Image from "next/image";
import React from "react";
import travel from "@/public/travel.png";

type Prop = {
  image: any;
  heading: string;
};

const CardProjects = ({ image, heading }: Prop) => {
  return (
    <div className="flex flex-col px-2 justify-center items-center">
      <section className="sm:w-[400px] w-[350px] rounded-xl shadow">
        <Image
          src={image}
          alt="hello"
          className="p-4 overflow-hidden rounded-lg"
        />
      </section>
      <h1>{heading}</h1>
    </div>
  );
};

export default CardProjects;
