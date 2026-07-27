import { useState } from "react";

function Checkout({ placeOrder }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const handleOrder = () => {
    if (!name || !mobile || !address) {
      alert("Please fill all details.");
      return;
    }

    alert("🎉 Order Placed Successfully!");

    setName("");
    setMobile("");
    setAddress("");

    placeOrder();
  };

  return (
    <section
      style={{
        padding: "40px",
        background: "#fff8f0",
        marginTop: "40px",
      }}
    >
      <h1 style={{ color: "#d35400" }}>🧾 Checkout</h1>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
        }}
      />

      <input
        type="text"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
        }}
      />

      <textarea
        placeholder="Delivery Address"
        rows="4"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
        }}
      />

      <button
        onClick={handleOrder}
        style={{
          width: "100%",
          padding: "15px",
          background: "green",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Place Order
      </button>
    </section>
  );
}

export default Checkout;