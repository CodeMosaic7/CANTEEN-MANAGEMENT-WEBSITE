// src/api/index.js
import axios from "axios";

// Axios global config
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000";

const API = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

// Get all products
export const getAllProducts = async () => {
  try {
    const response = await API.get("/products/getProducts");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Export other APIs here as needed...
