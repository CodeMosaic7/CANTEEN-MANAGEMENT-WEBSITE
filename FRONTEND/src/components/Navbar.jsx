import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Register from "../pages/Register";
export default function Navbar() {
  const navi = useNavigate();
  const [register, setRegister] = useState(true);
  function onSubmit(e) {
    e.preventDefault();
    alert("Search submitted!");
  }
  function handleRegister() {
    if (register) {
      navi("../login");
    } else {
      navi("../register");
    }
  }

  return (
    <nav className="w-full h-[15%] text-white py-4 px-6 flex justify-between items-center bg-[#FF680D]">
      <h1 className="text-sm opacity-70">Home page</h1>
      <div className="flex items-center space-x-4">
        <div className="relative bg-white flex items-center px-4 py-2 rounded-full">
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-black bg-transparent w-40"
          />
          <button className="ml-2 text-gray-500">
            <i className="fas fa-microphone"></i>
          </button>
        </div>
        <button className="text-lg">
          <i className="fas fa-shopping-cart"></i>
        </button>
        <button className="text-sm" onClick={handleRegister}>
          {register ? "Log In" : "Sign Up"}
        </button>
      </div>
    </nav>
  );
}
