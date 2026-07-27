function Header({ cartCount, search, setSearch }) {
  return (
    <header
      style={{
        background: "#e67e22",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        flexWrap: "wrap",
      }}
    >
      <h2>🍲 Teluginti Ruchulu</h2>

      <nav>
        <a href="#" style={{ color: "white", margin: "10px", textDecoration: "none" }}>
          Home
        </a>

        <a href="#" style={{ color: "white", margin: "10px", textDecoration: "none" }}>
          Products
        </a>

        <a href="#" style={{ color: "white", margin: "10px", textDecoration: "none" }}>
          About
        </a>

        <a href="#" style={{ color: "white", margin: "10px", textDecoration: "none" }}>
          Contact
        </a>
      </nav>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            width: "220px",
          }}
        />

        <h3 style={{ margin: 0 }}>🛒 Cart : {cartCount}</h3>
      </div>
    </header>
  );
}

export default Header;