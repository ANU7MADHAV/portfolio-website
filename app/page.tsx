import Homepage from "@/components/hompage/Homepage";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Homepage />
      </main>
    </div>
  );
}
