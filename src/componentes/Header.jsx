function Header({ cartCount, search, setSearch }) {
  return (
    <header
      style={{
        background: "#FFF8EE",
        padding: "18px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Banner */}
      <img
        src="/banner.png.jpeg"
        alt="Teluginti Ruchulu"
      style={{
  width: "100%",
  borderRadius: "18px",
  marginBottom: "18px",
  display: "block",
  border: "none",
  boxShadow: "none",
}}
      />

      {/* Search + Cart */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          marginBottom: "18px",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "12px",
            border: "2px solid #d8c3a5",
            background: "#ffffff",
            color: "#333",
            fontSize: "17px",
            outline: "none",
          }}
        />

        <div
          style={{
            background: "#8B5E3C",
            color: "#fff",
            padding: "14px 18px",
            borderRadius: "12px",
            fontSize: "18px",
            fontWeight: "bold",
            minWidth: "75px",
            textAlign: "center",
          }}
        >
          🛒 {cartCount}
        </div>
      </div>

      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          fontWeight: "bold",
          fontSize: "18px",
          color: "#5A3E2B",
        }}
      >
        <span style={{ cursor: "pointer" }}>Home</span>
        <span style={{ cursor: "pointer" }}>Products</span>
        <span style={{ cursor: "pointer" }}>About</span>
        <span style={{ cursor: "pointer" }}>Contact</span>
      </nav>
    </header>
  );
}

export default Header;