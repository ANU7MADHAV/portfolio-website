import Link from "next/link";

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
    <div className="flex justify-between py-4 px-[50px] xl:px-[100px]">
      <h1>Logo</h1>
      <ul className="flex gap-5 cursor-pointer">
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
