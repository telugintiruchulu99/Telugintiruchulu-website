function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
      <header
        style={{
          backgroundColor: "#0b7a3d",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>🍲 Teluginti Ruchulu</h1>
        <p>Authentic Homemade Telugu Foods</p>
      </header>

      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>Welcome to Teluginti Ruchulu</h2>

        <p>Fresh • Homemade • Hygienic • Authentic Taste</p>

        <h3>🚚 Delivery Information</h3>

        <p>🇮🇳 All India Delivery</p>
        <p>✅ Free Delivery on Prepaid Orders</p>
        <p>💰 COD Available (₹50 Extra)</p>
        <p>📦 Delivery Time: 3–7 Days</p>

        <button
          style={{
            background: "#0b7a3d",
            color: "#fff",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </section>
    </div>
  );
}

export default App;