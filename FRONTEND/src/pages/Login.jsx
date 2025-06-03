import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [phoneno, setPhoneno] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!phoneno || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        {
          phoneno,
          password,
        }
        // { withCredentials: true }
      );

      if (response.status === 200) {
        setError(""); // Clear error if login is successful
        navigate("/"); // Redirect to the dashboard or home page after successful login
        console.log("response", response);
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.message.user.name)
        ); // Store user data in local storage
        localStorage.setItem("accessToken", response.data.message.accessToken);
        localStorage.setItem(
          "refreshToken",
          response.data.message.refreshToken
        ); // Store token in local storage
      } else {
        setError("Invalid credentials, please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 text-white">
      <div className="bg-orange-500 text-white text-2xl p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4 text-white">
          Log In
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-white">
              Phone No.
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={phoneno}
              onChange={(e) => setPhoneno(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-white">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <button
            className="text-blue-500"
            onClick={() => navigate("/register")} // Navigate to the Register page if not registered
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
