import { useState } from "react";
import products from "./productsData";

function ProductCard({ item, addToCart }) {
  const [selectedSize, setSelectedSize] = useState("250g");

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "280px",
        background: "#fff",
        borderRadius: "12px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "180px",
          background: "#f2f2f2",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
          marginBottom: "15px",
        }}
      >
        📦
      </div>

      <h3>{item.name}</h3>

      <select
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          borderRadius: "6px",
        }}
      >
        <option value="250g">
          250g - ₹{item.prices["250g"]}
        </option>

        <option value="500g">
          500g - ₹{item.prices["500g"]}
        </option>

        <option value="1kg">
          1kg - ₹{item.prices["1kg"]}
        </option>
      </select>

      <button
        style={{
          width: "100%",
          padding: "10px",
          background: "#ff9800",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          marginBottom: "10px",
          cursor: "pointer",
        }}
      >
        Buy Now
      </button>

      <button
        onClick={() =>
          addToCart({
            ...item,
            selectedSize,
            selectedPrice: item.prices[selectedSize],
          })
        }
        style={{
          width: "100%",
          padding: "10px",
          background: "green",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
function ProductSection({ title, items, addToCart }) {
  return (
    <>
      <h2
        style={{
          color: "#d35400",
          marginTop: "40px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {items.map((item, index) => (
          <ProductCard
            key={index}
            item={item}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
}

function Products({ addToCart, search }) {
  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes((search || "").toLowerCase())
  );

  const veg = filteredProducts.filter(
    (p) => p.category === "Veg"
  );

  const nonVeg = filteredProducts.filter(
    (p) => p.category === "NonVeg"
  );

  const podi = filteredProducts.filter(
    (p) => p.category === "Podi"
  );

  const snacks = filteredProducts.filter(
    (p) => p.category === "Snack"
  );

  const sweets = filteredProducts.filter(
    (p) => p.category === "Sweet"
  );

  return (
    <section
      style={{
        padding: "20px",
        background: "#f8f8f8",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#d35400",
        }}
      >
        🛍 Our Products
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        Total Products: {filteredProducts.length}
      </p>
      <ProductSection
        title="🌿 Veg Pickles"
        items={veg}
        addToCart={addToCart}
      />

      <ProductSection
        title="🍗 Non-Veg Pickles"
        items={nonVeg}
        addToCart={addToCart}
      />

      <ProductSection
        title="🥣 Podis"
        items={podi}
        addToCart={addToCart}
      />

      <ProductSection
        title="🍘 Snacks"
        items={snacks}
        addToCart={addToCart}
      />

      <ProductSection
        title="🍬 Sweets"
        items={sweets}
        addToCart={addToCart}
      />

      {filteredProducts.length === 0 && (
        <h2
          style={{
            textAlign: "center",
            color: "red",
            marginTop: "40px",
          }}
        >
          😔 No Products Found
        </h2>
      )}
    </section>
  );
}

export default Products;