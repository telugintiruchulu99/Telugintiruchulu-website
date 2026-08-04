function BottomNav() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#ffffff",
        borderTop: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px 0",
        zIndex: 999,
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <a href="#" style={navStyle}>
        🏠
        <br />
        Home
      </a>

      <a href="#products" style={navStyle}>
        🛍️
        <br />
        Products
      </a>

      <a href="#cart" style={navStyle}>
        🛒
        <br />
        Cart
      </a>

      <a href="#contact" style={navStyle}>
        📞
        <br />
        Contact
      </a>
    </div>
  );
}

const navStyle = {
  textDecoration: "none",
  color: "#E67E22",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: "14px",
};

export default BottomNav;