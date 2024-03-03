import CardProjects from "./CardProjects";
import event from "@/public/event.png";
import travel from "@/public/travel.png";
import paytm from "@/public/paytm.png";
import gaming from "@/public/react.png";

const ThirdSection = () => {
  return (
    <div className="flex text-center px-2 justify-center">
      <div>
        <h1 className="text-4xl my-6">My Projects</h1>
        <section className="grid grid-cols-1 justify-center  items-center lg:grid-cols-2  xl:grid-cols-3 px-6 gap-3">
          <CardProjects image={travel} heading="Travel Website" />
          <CardProjects image={event} heading="Event Website" />
          <CardProjects image={paytm} heading="Paytm Model-Website" />
          <CardProjects image={gaming} heading="Gaming Website" />
        </section>
        <h1 className="mt-12 lg:text-2xl xl:text-3xl">
          Let’s works together. Let’s Creative.Let’s works together. Let’s
          Creative
        </h1>
      </div>
    </div>
  );
};

export default ThirdSection;
