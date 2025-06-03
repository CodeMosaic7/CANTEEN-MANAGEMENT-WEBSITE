import { useEffect, useState } from "react";
import Foodcard from "../components/Foodcard";
import Navbar from "../components/Navbar";
import axios from "axios";
import Footer from "../components/Footer";

// Configure axios defaults
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000";

export default function Menu() {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        setLoading(true);
        setError(null);

        // Use GET request instead of POST for fetching data
        const response = await axios.get("products/getProducts", {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            // Add authorization header if you have a token
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        // Handle different response structures
        const data =
          response.data.data || response.data.products || response.data;
        setFoodItems(Array.isArray(data) ? data : []);
        console.log("Food items fetched:", data);
      } catch (error) {
        console.error("Error fetching food items:", error);
        setError(
          error.response?.data?.message ||
            error.message ||
            "Failed to fetch food items"
        );

        // Handle specific error cases
        if (error.response?.status === 401) {
          console.log("Unauthorized - check authentication");
          // Redirect to login or handle auth error
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFoodItems();
  }, []);

  // Loading state
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-xl font-semibold">Loading menu items...</div>
        </div>
        <Footer />
      </>
    );
  }

  // Error state
  if (error) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <div className="text-xl font-semibold text-red-600 mb-4">
              Error Loading Menu
            </div>
            <div className="text-gray-600 mb-4">{error}</div>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Try Again
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Menu</h1>

        {foodItems.length === 0 ? (
          <div className="text-center text-gray-600">
            <p className="text-xl">No menu items available at the moment.</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center">
            {foodItems.map((item, index) => (
              <Foodcard key={item.id || item._id || index} {...item} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
