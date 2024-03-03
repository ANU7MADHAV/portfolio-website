import Image from "next/image";
import profile from "@/public/profile.jpg";

const AboutPage = () => {
  return (
    <div className="flex py-8 flex-col md:flex-row px-4 h-screen items-center">
      <section className="flex px-4 text-left flex-col justify-center ">
        <h1 className="font-semibold mb-3 text-base md:text-3xl">
          Hello there! I&apos;m Anu Madhav,
          <br /> Web Developer Hailing from Kochi.
        </h1>
        <h3 className="font-serif text-xs md:text-lg">
          I&apos;m passionate about the web&apos;s ability to connect people and
          enhance experiences. I excel at unraveling intricate challenges
          through meticulous coding, integrating diverse perspectives to craft
          seamless solutions, from conceptualization to enhancing user
          interactions.
        </h3>
      </section>
      <section>
        <Image
          src={profile}
          alt="profile"
          className="my-[20px] max-w-[250px] overflow-hidden md:w-[400px] md:my-0"
        />
      </section>
    </div>
  );
};

export default AboutPage;
