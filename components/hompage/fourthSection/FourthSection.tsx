const FourthSection = () => {
  const links = [
    { name: "Linkedin", path: "" },
    { name: "Github", path: "" },
    { name: "Instagram", path: "" },
  ];
  return (
    <div>
      <section>
        <h1>Let’s works together. Let’s Creative.</h1>
        <h1>Say Hello! nanda147@gmail.com</h1>
      </section>
      <section>
        <ul>
          {links.map((link, index) => (
            <li key={index}>{link.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FourthSection;
