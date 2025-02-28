import Foodcard from "../components/Foodcard";
import Navbar from "../components/Navbar";

export default function Menu() {
  const foodItems = [
    {
      id: 1,
      name: "Veg Burger",
      price: 120,
      image: "https://source.unsplash.com/300x200/?burger",
    },
    {
      id: 2,
      name: "Pizza",
      price: 250,
      image: "https://source.unsplash.com/300x200/?pizza",
    },
    {
      id: 3,
      name: "Pasta",
      price: 180,
      image: "https://source.unsplash.com/300x200/?pasta",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="flex flex-wrap gap-6 justify-center">
      {foodItems.map((item) => (
        <Foodcard key={item.id} {...item} />
      ))}
    </div>
    </>
  );
}
