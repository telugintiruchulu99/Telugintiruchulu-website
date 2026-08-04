function FAQ() {
  const faqs = [
    {
      q: "Do you use preservatives?",
      a: "No. Our products are prepared without harmful preservatives."
    },
    {
      q: "How long does delivery take?",
      a: "Usually 2–5 working days depending on your location."
    },
    {
      q: "Are all products homemade?",
      a: "Yes, every product is prepared using traditional homemade recipes."
    },
    {
      q: "Which payment methods are accepted?",
      a: "UPI, PhonePe, Google Pay and Cash on Delivery (if available)."
    }
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
          marginBottom: "30px",
        }}
      >
        ❓ Frequently Asked Questions
      </h2>

      <div style={{ maxWidth: "800px", margin: "auto" }}>
        {faqs.map((faq, index) => (
          <details
            key={index}
            style={{
              marginBottom: "15px",
              padding: "15px",
              borderRadius: "10px",
              background: "#FFF8EE",
            }}
          >
            <summary
              style={{
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {faq.q}
            </summary>

            <p style={{ marginTop: "10px", color: "#555" }}>
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;