const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const crypto = require("crypto");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// =========================
// HEALTH / TEST ROUTE
// =========================
app.get("/", (req, res) => {
  res.status(200).send("✅ Teluginti Ruchulu Backend Running");
});

// =========================
// CREATE RAZORPAY ORDER
// =========================
app.post("/create-order", async (req, res) => {
  const startTime = Date.now();

  try {
    const { amount } = req.body;

    if (!amount || Number(amount) <= 0) {
      return res.status(400).json({
        success: false,
        error: "Invalid amount",
      });
    }

    const numericAmount = Number(amount);

    console.log("💰 Creating Razorpay order:", numericAmount);

    const options = {
      amount: Math.round(numericAmount * 100),
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    console.log(
      "✅ Razorpay order created:",
      order.id,
      `(${Date.now() - startTime}ms)`
    );

    return res.status(200).json(order);
  } catch (error) {
    console.error("❌ Create Order Error:", error);

    return res.status(500).json({
      success: false,
      error: "Unable to create Razorpay order",
    });
  }
});

// =========================
// VERIFY PAYMENT
// =========================
app.post("/verify-payment", (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing payment verification details",
      });
    }

    const sign =
      razorpay_order_id +
      "|" +
      razorpay_payment_id;

    const expectedSign = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(sign)
      .digest("hex");

    const isValid =
      expectedSign === razorpay_signature;

    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: "Payment Verification Failed",
      });
    }

    console.log(
      "✅ Payment verified:",
      razorpay_payment_id
    );

    return res.status(200).json({
      success: true,
      message: "Payment Verified Successfully",
    });
  } catch (error) {
    console.error(
      "❌ Payment Verification Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

// =========================
// START SERVER
// =========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Teluginti Ruchulu Backend running on port ${PORT}`
  );
});