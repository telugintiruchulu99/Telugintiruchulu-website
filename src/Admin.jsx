function Admin() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>🔐 Teluginti Ruchulu Admin Panel</h1>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <h2>📦 Orders</h2>
        <p>No orders yet.</p>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <h2>🍲 Products</h2>
        <button>Add Product</button>
      </div>
    </div>
  );
}

export default Admin;