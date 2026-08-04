import { useState } from "react";

function ProductCard({ product, addToCart }) {
  const sizes = Object.keys(product.prices || {});
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedSize,
      price: product.prices[selectedSize],
    });
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
        transition: "0.3s",
      }}
    >
      {/* Product Image */}
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "160px",
            objectFit: "cover",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "160px",
            background: "#FFF3E0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "70px",
          }}
        >
          🥭
        </div>
      )}

      <div style={{ padding: "15px" }}>
        {/* Product Name */}
        <h3
          style={{
            fontSize: "22px",
            fontWeight: "700",
            color: "#333",
            marginBottom: "8px",
          }}
        >
          {product.name}
        </h3>

        {/* Category */}
        <p
          style={{
            color: "#2E7D32",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          {product.category}
        </p>

        {/* Rating */}
        <p
          style={{
            color: "#f39c12",
            fontSize: "18px",
            marginBottom: "12px",
          }}
        >
          ⭐⭐⭐⭐⭐
        </p>

        {/* Size */}
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            marginBottom: "15px",
            fontSize: "16px",
          }}
        >
          {sizes.map((size) => (
            <option key={size}>{size}</option>
          ))}
        </select>

        {/* Price + Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            style={{
              color: "#D35400",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            ₹{product.prices[selectedSize]}
          </span>

          <button
            onClick={handleAddToCart}
            style={{
              background: "#E67E22",
              color: "#fff",
              border: "none",
              padding: "12px 18px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            🛒 Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;