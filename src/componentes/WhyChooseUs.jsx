function WhyChooseUs() {
  const features = [
    {
      icon: "🥭",
      title: "Homemade",
      text: "Traditional recipes",
    },
    {
      icon: "🌿",
      title: "Fresh",
      text: "Premium ingredients",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      text: "Quick doorstep delivery",
    },
    {
      icon: "❤️",
      title: "Made with Love",
      text: "Prepared with care",
    },
  ];

  return (
    <section
      style={{
        padding: "40px 20px",
        background: "#fff",
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
        🌿 Why Choose Us
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "20px",
        }}
      >
        Authentic homemade taste with premium quality
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
        {features.map((item, index) => (
          <div
            key={index}
            style={{
              minWidth: "180px",
              background: "#FFF8EE",
              borderRadius: "18px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,.1)",
              flexShrink: 0,
            }}
          >
            <div style={{ fontSize: "48px" }}>
              {item.icon}
            </div>

            <h3
              style={{
                color: "#2E7D32",
                marginTop: "10px",
              }}
            >
              {item.title}
            </h3>

            <p style={{ color: "#666" }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;