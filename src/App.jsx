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
import OfferBanner from "./componentes/OfferBanner";
import CartDrawer from "./componentes/CartDrawer";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
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
  onCartClick={() => setIsCartOpen(true)}
/>

      <section id="home">
        <Hero />
      </section>

      <OfferBanner />

      <BestSellers />

      <section id="products">
        <Products
          addToCart={addToCart}
          search={search}
        />
      </section>


      <WhyChooseUs />

      <Reviews />

      <FAQ />

      <Footer />
      <CartDrawer
  isOpen={isCartOpen}
  onClose={() => setIsCartOpen(false)}
  cart={cart}
  removeFromCart={removeFromCart}
  increaseQuantity={increaseQuantity}
  decreaseQuantity={decreaseQuantity}
  placeOrder={placeOrder}
/>

      <WhatsAppButton />
    </div>
  );
}

export default App;