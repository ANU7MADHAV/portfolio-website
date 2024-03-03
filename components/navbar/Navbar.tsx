import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";

const Navbar = () => {
  const navLinks = [
    {
      name: "Resume",
      path: "/anuresume.pdf",
    },
    {
      name: "About ",
      path: "/about",
    },
  ];
  return (
    <div className="flex items-center justify-between  shadow-xl py-4 px-4 md:px-[50px] xl:px-[100px]">
      <Link href="/">
        <h1 className="text-xs md:text-base">ANU MADHAV</h1>
      </Link>

      <ThemeSwitch />
      <ul className="flex gap-2 md:gap-5 cursor-pointer">
        {navLinks.map((links, index) => (
          <Link href={links.path} key={index}>
            <li>{links.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
