function Header({
  cartCount,
  search,
  setSearch,
  onCartClick,
}) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 900,
        width: "100%",
        boxSizing: "border-box",
        background: "#FFF8EE",
        padding: "18px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
      }}
    >
      {/* =========================
          BANNER
      ========================= */}
      <img
        src="/banner.png.jpeg"
        alt="Teluginti Ruchulu"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          borderRadius: "18px",
          marginBottom: "18px",
        }}
      />

      {/* =========================
          SEARCH + CART
      ========================= */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          width: "100%",
          marginBottom: "18px",
        }}
      >
        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 1,
            minWidth: 0,
            padding: "14px",
            borderRadius: "12px",
            border: "2px solid #d8c3a5",
            background: "#fff",
            color: "#333",
            fontSize: "16px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        {/* Cart */}
        <button
          onClick={onCartClick}
          style={{
            background: "#8B5E3C",
            color: "#fff",
            border: "none",
            padding: "14px 18px",
            borderRadius: "12px",
            fontSize: "17px",
            fontWeight: "bold",
            minWidth: "80px",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          🛒 {cartCount}
        </button>
      </div>

      {/* =========================
          NAVIGATION
      ========================= */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          fontWeight: "bold",
          fontSize: "17px",
          color: "#5A3E2B",
        }}
      >
        <button
          onClick={() => scrollToSection("home")}
          style={navButtonStyle}
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection("products")}
          style={navButtonStyle}
        >
          Products
        </button>

        <button
          onClick={() => scrollToSection("about")}
          style={navButtonStyle}
        >
          About
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          style={navButtonStyle}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}

/* =========================
   NAV BUTTON STYLE
========================= */

const navButtonStyle = {
  background: "transparent",
  border: "none",
  color: "#5A3E2B",
  fontSize: "17px",
  fontWeight: "bold",
  cursor: "pointer",
  padding: "6px 8px",
};

export default Header;