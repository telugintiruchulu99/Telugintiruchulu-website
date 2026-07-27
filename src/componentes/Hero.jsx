function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "52px",
          color: "#d35400",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        🍲 Welcome to Teluginti Ruchulu
      </h1>

      <p
        style={{
          fontSize: "24px",
          color: "#444",
          maxWidth: "800px",
          margin: "auto",
          lineHeight: "1.8",
        }}
      >
        Taste the authentic homemade Andhra Pickles, Sweets and Traditional
        Snacks prepared with love and fresh ingredients.
      </p>

      <button
        style={{
          marginTop: "35px",
          padding: "15px 35px",
          fontSize: "20px",
          background: "#e67e22",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        🛒 Shop Now
      </button>
    </section>
  );
}

export default Hero;