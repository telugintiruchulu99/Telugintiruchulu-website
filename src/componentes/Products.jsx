import { useState } from "react";
import ProductCard from "./ProductCard";
import products from "./productsData";

const categories = [
  "Veg",
  "NonVeg",
  "Podi",
  "Snacks",
  "Sweets",
];

function Products({ addToCart, search }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === ""
        ? true
        : product.category === selectedCategory;

    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <section
      id="products"
      style={{
        padding: "40px 15px",
        background: "#FFF8EE",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "38px",
            color: "#E67E22",
            marginBottom: "30px",
          }}
        >
          Our Products
        </h2>

        {/* Category Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                background:
                  selectedCategory === category ? "#E67E22" : "#2E7D32",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                padding: "12px 18px",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              {category === "Veg" && "🌿 Veg"}
              {category === "NonVeg" && "🍗 NonVeg"}
              {category === "Podi" && "🥣 Podis"}
              {category === "Snacks" && "🍘 Snacks"}
              {category === "Sweets" && "🍬 Sweets"}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <p style={{ textAlign: "center" }}>
            No products found.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "16px",
            }}
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;