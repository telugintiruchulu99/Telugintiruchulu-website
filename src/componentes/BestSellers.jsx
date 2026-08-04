function BestSellers() {
  const items = [
    {
      emoji: "🥭",
      name: "Avakaya Pickle",
    },
    {
      emoji: "🍗",
      name: "Chicken Pickle",
    },
    {
      emoji: "🌶️",
      name: "Karam Podi",
    },
    {
      emoji: "🍘",
      name: "Chekkalu",
    },
  ];

  return (
    <section
      style={{
        padding: "40px 20px",
        background: "#FFF8EE",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#E67E22",
          fontSize: "34px",
          marginBottom: "10px",
        }}
      >
        ⭐ Best Sellers
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "20px",
        }}
      >
        Our most loved homemade products
      </p>

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "15px",
          paddingBottom: "10px",
          scrollBehavior: "smooth",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              minWidth: "180px",
              background: "#fff",
              borderRadius: "18px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,.1)",
              flexShrink: 0,
            }}
          >
            <div style={{ fontSize: "50px" }}>
              {item.emoji}
            </div>

            <h3
              style={{
                color: "#2E7D32",
                marginTop: "10px",
              }}
            >
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestSellers;