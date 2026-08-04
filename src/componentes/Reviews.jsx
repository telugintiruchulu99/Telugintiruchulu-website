function Reviews() {
  const reviews = [
    {
      name: "Rahul",
      text: "Best homemade pickles! Just like amma's cooking. 😍",
    },
    {
      name: "Priya",
      text: "Very fresh and tasty. Highly recommended! ❤️",
    },
    {
      name: "Kiran",
      text: "Fast delivery and excellent quality. ⭐⭐⭐⭐⭐",
    },
    {
      name: "Sravani",
      text: "Loved the podis and snacks. Will order again!",
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
        ⭐ Customer Reviews
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "20px",
        }}
      >
        What our customers say
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
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              minWidth: "250px",
              background: "#fff",
              borderRadius: "18px",
              padding: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,.1)",
              flexShrink: 0,
            }}
          >
            <div style={{ color: "#FFD700", fontSize: "20px" }}>
              ⭐⭐⭐⭐⭐
            </div>

            <p
              style={{
                margin: "15px 0",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              "{review.text}"
            </p>

            <h4 style={{ color: "#2E7D32" }}>
              — {review.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;