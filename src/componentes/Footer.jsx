function Footer() {
  return (
    <footer
      style={{
        background: "#2c3e50",
        color: "#fff",
        padding: "40px 20px",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        <div>
          <h2 style={{ color: "#f39c12" }}>🍲 Teluginti Ruchulu</h2>

          <p>
            Homemade Pickles, Podis,
            <br />
            Snacks & Traditional Sweets
          </p>
        </div>

        <div>
          <h3>📞 Contact</h3>

          <p>+91 98765 43210</p>

          <p>info@telugintiruchulu.com</p>

          <p>Hyderabad, Telangana</p>
        </div>

        <div>
          <h3>🕘 Working Hours</h3>

          <p>Monday - Sunday</p>

          <p>9:00 AM - 9:00 PM</p>
        </div>

        <div>
          <h3>🌐 Follow Us</h3>

          <p>📱 WhatsApp</p>

          <p>📷 Instagram</p>

          <p>📘 Facebook</p>
        </div>
      </div>

      <hr
        style={{
          margin: "30px 0",
          borderColor: "#555",
        }}
      />

      <p
        style={{
          textAlign: "center",
          margin: 0,
        }}
      >
        © 2026 Teluginti Ruchulu. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;