function OfferBanner() {
  return (
    <section
      style={{
        background: "linear-gradient(90deg, #E67E22, #D35400)",
        color: "#fff",
        padding: "18px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "28px",
        }}
      >
        🎉 Grand Opening Offer
      </h2>

      <p
        style={{
          margin: "10px 0",
          fontSize: "18px",
        }}
      >
        🚚 Free Delivery on Orders Above ₹999
      </p>

      <button
        style={{
          background: "#fff",
          color: "#E67E22",
          border: "none",
          padding: "12px 25px",
          borderRadius: "30px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Shop Now
      </button>
    </section>
  );
}

export default OfferBanner;