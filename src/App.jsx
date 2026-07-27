import { useState } from "react";
import "./App.css";
import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Products from "./componentes/Products";
import Cart from "./componentes/Cart";
import Checkout from "./componentes/Checkout";
import Footer from "./componentes/Footer";
import WhatsAppButton from "./componentes/WhatsAppButton";

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

  // ✅ NEW FUNCTION
  const placeOrder = () => {
    setCart([]);
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

  return (
    <div>
      <Header
        cartCount={cart.length}
        search={search}
        setSearch={setSearch}
      />

      <Hero />

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
        <Checkout placeOrder={placeOrder} />
      )}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;