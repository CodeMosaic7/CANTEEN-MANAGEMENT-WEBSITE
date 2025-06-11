import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Menu from "./Menu";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col">
        <Navbar />
        <Hero />
      </div>
      <div>
        <Menu />
      </div>
    </>
  );
}
