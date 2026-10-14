
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import cartReducer from "./CartSlice";
import "./App.css";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="site-header">
      <Link className="brand" to="/">
        Paradise Nursery
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart 🛒 ({cartCount})</Link>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <>
      <main className="landing-page">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <p>
            Bring nature home. Discover beautiful indoor plants
            that make your space fresh, peaceful, and green.
          </p>
          <Link className="primary-button" to="/plants">
            Get Started
          </Link>
        </div>
      </main>

      <AboutUs />
    </>
  );
}

function AppContent() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
