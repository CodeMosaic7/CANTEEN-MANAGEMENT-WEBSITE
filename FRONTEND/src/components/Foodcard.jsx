import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function Foodcard({ image, name, price }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-72">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="mt-3 text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 font-medium">₹{price}</p>

      <button
        onClick={() => setAdded(!added)}
        className={`mt-3 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all ${
          added ? "bg-green-500 text-white" : "bg-orange-500 text-white"
        }`}
      >
        <ShoppingCart size={18} />
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
