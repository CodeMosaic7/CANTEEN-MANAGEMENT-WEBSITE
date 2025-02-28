import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Actionbutton from "../components/Actionbutton";
import Foodcard from "../components/Foodcard";
export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col ">
        <Navbar />
        <Hero />
        <Actionbutton />
        <Categories />
        <Foodcard foodname="Burger" foodprice="Rs. 200" />
      </div>
    </>
  );
}
