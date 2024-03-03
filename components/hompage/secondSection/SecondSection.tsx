import { FaStarOfLife } from "react-icons/fa6";
import Card from "./Card";

const SecondSection = () => {
  return (
    <div className="flex h-screen items-start justify-center">
      <section className="flex flex-col items-center">
        <h1 className="mt-[50px] text-xl w-[350px] px-4 sm:text-2xl md:text-3xl sm:w-[400px] md:w-[800px] text-center">
          I thrive on creating digital experiences that shape tomorrow&apos;s
          online landscape.
        </h1>
        <h1 className="my-10 font-serif flex items-center  text-3xl">
          My Offerings{" "}
          <span className="mx-3">
            <FaStarOfLife />
          </span>
        </h1>
        <section className="grid font-serif justify-center px-2 pl-5 gap-2 md:gap-4 grid-cols-3 md:grid-cols-4">
          <Card name="HTML" />
          <Card name="CSS" />
          <Card name="NODE.JS" />
          <Card name="EXPRESS.JS" />
          <Card name="REACT.JS" />
          <Card name="NEXT.JS" />
          <Card name="NOSQL" />
          <Card name="SQL" />
          <Card name="DOCKER" />
          <Card name="CLOUDFLARE" />
          <Card name="AWS" />
        </section>
      </section>
    </div>
  );
};

export default SecondSection;
