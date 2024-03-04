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
    <div className="md:px-[40px] dark:shadow-xl dark:shadow-blue-400 mt-3  px-2 text-center">
      <h2 className="mt-12 lg:text-2xl  text-sm font-black xl:text-3xl">
        Let’s works together. Let’s Creative.Let’s works together. Let’s
        Creative
      </h2>
      <section className="flex my-8 text-sm sm:text-lg md:text-xl font-semibold justify-between">
        <h3>Let’s works together. Let’s Creative.</h3>
        <h3>Say Hello! anumadhavan7@gmail.com</h3>
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
