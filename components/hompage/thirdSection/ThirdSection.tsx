import CardProjects from "./CardProjects";
import event from "@/public/event.png";
import travel from "@/public/travel.png";
import paytm from "@/public/paytm.png";
import gaming from "@/public/react.png";
import Link from "next/link";

const ThirdSection = () => {
  return (
    <div className="flex mb-4 text-center px-2 justify-center">
      <div>
        <h1 className="text-4xl my-6">My Projects</h1>
        <section className="grid grid-cols-1 mb-5 justify-center  items-center lg:grid-cols-2  xl:grid-cols-3 px-6 gap-3">
          <Link href="https://www.firstguidetours.com/">
            <CardProjects image={travel} heading="Travel Website" />
          </Link>
          <Link href="https://event-work-three.vercel.app/">
            <CardProjects image={event} heading="Event Website" />
          </Link>
          <Link href="https://vercel.com/anu-s-projects/payment-app">
            <CardProjects image={paytm} heading="Paytm Model-Website" />
          </Link>
          <Link href="https://itachi-gaming.vercel.app/">
            <CardProjects image={gaming} heading="Gaming Website" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ThirdSection;
