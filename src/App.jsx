import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collections";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import Place_order from "./pages/Place_order";
import Product from "./pages/Product";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place_order" element={<Place_order />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
