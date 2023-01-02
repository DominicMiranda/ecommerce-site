import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import Shopping from "./components/Shopping";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shopping />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shopping />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
