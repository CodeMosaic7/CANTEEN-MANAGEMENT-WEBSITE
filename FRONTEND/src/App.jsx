import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Support from "./pages/Support";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import axios from "axios";
axios.defaults.withCredentials = true; // Ensure cookies are sent with requests
axios.defaults.baseURL = "http://localhost:8000/api/v1"; // Set base URL for API requests
function App() {
  // const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/support" element={<Support />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route
          path="/dashboard"
          element={
            user ? <Dashboard role={user.role} /> : <Navigate to="/login" />
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
