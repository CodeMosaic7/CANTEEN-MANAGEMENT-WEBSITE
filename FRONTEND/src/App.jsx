import Home from "./pages/home"
import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Support from "./pages/Support";
import Register from "./pages/Register";


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/support" element={<Support />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </>
  )
}

export default App
