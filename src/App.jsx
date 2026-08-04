import { useState } from "react";
import "./App.css";

import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import BestSellers from "./componentes/BestSellers";
import Products from "./componentes/Products";
import Cart from "./componentes/Cart";
import Checkout from "./componentes/Checkout";
import Footer from "./componentes/Footer";
import WhatsAppButton from "./componentes/WhatsAppButton";
import WhyChooseUs from "./componentes/WhyChooseUs";
import Reviews from "./componentes/Reviews";
import FAQ from "./componentes/FAQ";
import Contact from "./componentes/Contact";
import OfferBanner from "./componentes/OfferBanner";
import About from "./componentes/About";
import BottomNav from "./componentes/BottomNav";


function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.name === product.name &&
          item.selectedSize === product.selectedSize
      );

      if (existing) {
        return prev.map((item) =>
          item.name === product.name &&
          item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const increaseQuantity = (index) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (index) => {
    setCart((prev) =>
      prev
        .map((item, i) =>
          i === index
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const placeOrder = () => {
    setCart([]);
  };

  return (
    <div>
      <Header
        cartCount={cart.length}
        search={search}
        setSearch={setSearch}
      />

      <Hero />
      <OfferBanner />

<BestSellers />

<WhyChooseUs />

<Reviews />

<FAQ />
<About />

<Products
  addToCart={addToCart}
  search={search}
/>

      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />

      {cart.length > 0 && (
        <Checkout
  cart={cart}
  placeOrder={placeOrder}
/>
      )}

      <Contact />
      <Footer />
      <WhatsAppButton />
      <BottomNav />
    </div>
  );
}

export default App;