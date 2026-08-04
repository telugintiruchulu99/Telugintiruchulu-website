import { useState } from "react";
import { createOrder, verifyPayment } from "../api";

function Checkout({ cart, placeOrder }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const handleOrder = async () => {
    if (!name || !mobile || !address) {
      alert("⚠️ Please fill all the required details.");
      return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
      alert("📱 Please enter a valid 10-digit mobile number.");
      return;
    }

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const order = await createOrder(total);

    if (!order.id) {
      alert("❌ Order Creation Failed");
      return;
    }

    let message =
      `*🛒 New Order - Teluginti Ruchulu*%0A%0A` +
      `👤 Name: ${name}%0A` +
      `📞 Mobile: ${mobile}%0A` +
      `🏠 Address: ${address}%0A`;

    if (notes) {
      message += `📝 Notes: ${notes}%0A`;
    }

    message += `%0A*Ordered Items*%0A`;

    cart.forEach((item) => {
      message += `• ${item.name} (${item.selectedSize}) x ${item.quantity} - ₹${item.price * item.quantity}%0A`;
    });

    message += `%0A💰 *Total: ₹${total}*`;

    const options = {
      key: "rzp_test_TKsTFWiIOil3LD",
      amount: order.amount,
      currency: order.currency,
      name: "Teluginti Ruchulu",
      description: "Food Order",
      order_id: order.id,

    handler: async function (response) {
  try {
    const verify = await verifyPayment(response);

    if (verify.success) {
      alert("🎉 Payment Successful!");

      const whatsappUrl =
        `https://wa.me/917995272217?text=${encodeURIComponent(message)}`;

      console.log(whatsappUrl);

      window.location.href = whatsappUrl;

      placeOrder();

      setName("");
      setMobile("");
      setAddress("");
      setNotes("");
    } else {
      alert("❌ Payment Verification Failed");
    }
  } catch (err) {
    console.error(err);
    alert("❌ Payment Verification Error");
  }
}, // 👈 ఈ comma చాలా ముఖ్యము

theme: {
  color: "#E67E22",
},
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <section
      style={{
        background: "#FFF8EE",
        padding: "30px",
        marginTop: "40px",
        borderRadius: "20px",
        maxWidth: "700px",
        marginInline: "auto",
        boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
      }}
    >
      <h2
        style={{
          color: "#E67E22",
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        🧾 Checkout
      </h2>

      <input
        type="text"
        placeholder="👤 Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />

      <input
        type="tel"
        placeholder="📞 Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        style={inputStyle}
      />

      <textarea
        placeholder="🏠 Delivery Address"
        rows="4"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={inputStyle}
      />
      <textarea
        placeholder="📝 Order Notes (Optional)"
        rows="3"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        style={inputStyle}
      />

      <button
        onClick={handleOrder}
        style={{
          width: "100%",
          padding: "15px",
          background: "#25D366",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        🛒 Place Order
      </button>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "16px",
  boxSizing: "border-box",
};

export default Checkout;