import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Actionbutton from "../components/Actionbutton";
import Menu from "./Menu";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col">
        <Navbar />
        <Hero />
        <Actionbutton />
        <Categories />
      </div>
      <div>
        <Menu />
      </div>
      <Footer />
    </>
  );
}
