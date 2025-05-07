import Foodcard from "../components/Foodcard";
import Navbar from "../components/Navbar";

export default function Menu() {
  const foodItems = [
    {
      id: 1,
      name: "Veg Burger",
      price: 120,
      image:
        "https://www.foodandwine.com/thmb/nfLq4BlAQNSaDlA8b7O5_yGE430=/2000x1334/filters:fill(auto,1)/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg",
    },
    {
      id: 2,
      name: "Pizza",
      price: 250,
      image:
        "https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg",
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
      <div className="flex flex-wrap gap-6 justify-center">
        {foodItems.map((item) => (
          <Foodcard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
