import Link from "next/link";

const FourthSection = () => {
  const links = [
    { name: "Linkedin", path: "www.linkedin.com/in/anu-madhav-7158621a6" },
    { name: "Github", path: "https://github.com/ANU7MADHAV" },
    {
      name: "Instagram",
      path: "https://www.instagram.com/anu_madhav_?igsh=MXIxM2hxbXlqYzYxcA==",
    },
  ];
  return (
    <div className="md:px-[40px] shadow-xl shadow-blue-400 mt-3  px-2 text-center">
      <h1 className="mt-12 lg:text-2xl mt-2 text-sm font-black xl:text-3xl">
        Let’s works together. Let’s Creative.Let’s works together. Let’s
        Creative
      </h1>
      <section className="flex my-8 text-sm sm:text-lg md:text-xl font-semibold justify-between">
        <h1>Let’s works together. Let’s Creative.</h1>
        <h1>Say Hello! anumadhavan7@gmail.com</h1>
      </section>
      <section>
        <ul className="flex font-serif cursor-pointer justify-center gap-4">
          {links.map((link, index) => (
            <Link href={link.path} key={index}>
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FourthSection;
