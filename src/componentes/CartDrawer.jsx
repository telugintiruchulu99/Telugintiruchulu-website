import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { createOrder, verifyPayment } from "../api";

function CartDrawer({
  isOpen,
  onClose,
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  placeOrder,
}) {
  // =========================
  // ORDER DETAILS STATE
  // =========================

  const [showDetails, setShowDetails] = useState(false);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [notes, setNotes] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const canvasRef = useRef(null);

  // =========================
  // PRICE CALCULATION
  // =========================

  const subtotal = cart.reduce(
    (sum, item) =>
      sum +
      Number(item.price || 0) *
        Number(item.quantity || 0),
    0
  );

  const delivery = subtotal >= 999 ? 0 : 80;

  const total = subtotal + delivery;

  // =========================
  // FREE DELIVERY CONFETTI
  // =========================

  useEffect(() => {
    if (!isOpen) return;
    if (subtotal < 999) return;
    if (!canvasRef.current) return;

    const fireConfetti = confetti.create(
      canvasRef.current,
      {
        resize: true,
        useWorker: true,
      }
    );

    fireConfetti({
      particleCount: 180,
      spread: 130,
      startVelocity: 45,
      ticks: 220,
      origin: {
        x: 0.5,
        y: 0.2,
      },
    });
  }, [isOpen, subtotal]);

  // =========================
  // ORDER PLACE
  // =========================

  const handleOrderPlace = () => {
    if (cart.length === 0) {
      alert("🛒 Please add products first.");
      return;
    }

    setShowDetails(true);
  };

  // =========================
  // BACK TO CART
  // =========================

  const handleBackToCart = () => {
    setShowDetails(false);
  };

  // =========================
  // PAYMENT
  // =========================

  const handlePayment = async () => {
    if (isLoading) return;

    // Name validation
    if (!name.trim()) {
      alert("👤 Please enter Full Name.");
      return;
    }

    // Mobile validation
    if (!mobile.trim()) {
      alert("📞 Please enter Mobile Number.");
      return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
      alert(
        "📱 Please enter a valid 10-digit mobile number."
      );
      return;
    }

    // Address validation
    if (!address.trim()) {
      alert("🏠 Please enter Delivery Address.");
      return;
    }

    // Pincode validation
    if (!pincode.trim()) {
      alert("📮 Please enter PIN Code.");
      return;
    }

    if (pincode.length !== 6 || isNaN(pincode)) {
      alert(
        "📮 Please enter a valid 6-digit PIN Code."
      );
      return;
    }

    try {
      setIsLoading(true);

      // =========================
      // CREATE RAZORPAY ORDER
      // =========================

      const order = await createOrder(total);

      if (!order || !order.id) {
        alert("❌ Razorpay Order Creation Failed.");
        setIsLoading(false);
        return;
      }

      // =========================
      // WHATSAPP MESSAGE
      // =========================

      let message =
        `*🛒 New Order - Teluginti Ruchulu*%0A%0A`;

      message +=
        `👤 Name: ${name}%0A`;

      message +=
        `📞 Mobile: ${mobile}%0A`;

      message +=
        `🏠 Address: ${address}%0A`;

      message +=
        `📮 PIN Code: ${pincode}%0A`;

      if (notes.trim()) {
        message +=
          `📝 Notes: ${notes}%0A`;
      }

      message +=
        `%0A*🛍️ Ordered Items*%0A`;

      cart.forEach((item) => {
        const itemTotal =
          Number(item.price || 0) *
          Number(item.quantity || 0);

        message +=
          `• ${item.name} (${item.selectedSize}) x ${item.quantity} - ₹${itemTotal}%0A`;
      });

      message +=
        `%0A💰 Subtotal: ₹${subtotal}%0A`;

      message +=
        `🚚 Delivery: ${
          delivery === 0
            ? "FREE"
            : `₹${delivery}`
        }%0A`;

      message +=
        `💵 *Total: ₹${total}*`;

      // =========================
      // RAZORPAY OPTIONS
      // =========================

      const options = {
        key: "rzp_live_TM5cfblnj9a9zM",

        amount: order.amount,

        currency: order.currency,

        name: "Teluginti Ruchulu",

        description: "Food Order",

        order_id: order.id,

        handler: async function (response) {
          try {
            // =========================
            // VERIFY PAYMENT
            // =========================

            const verify =
              await verifyPayment(response);

            if (!verify || !verify.success) {
              alert(
                "❌ Payment Verification Failed."
              );

              setIsLoading(false);
              return;
            }

            // =========================
            // SUCCESS BLAST
            // =========================

            if (canvasRef.current) {
              const fireConfetti =
                confetti.create(
                  canvasRef.current,
                  {
                    resize: true,
                    useWorker: true,
                  }
                );

              fireConfetti({
                particleCount: 300,
                spread: 170,
                startVelocity: 50,
                ticks: 250,
                origin: {
                  x: 0.5,
                  y: 0.35,
                },
              });
            }

            alert(
              "🎉 Payment Successful!"
            );

            // =========================
            // CLEAR CART
            // =========================

            placeOrder();

            // =========================
            // RESET DETAILS
            // =========================

            setShowDetails(false);

            setName("");
            setMobile("");
            setAddress("");
            setPincode("");
            setNotes("");

            setIsLoading(false);

            // =========================
            // OPEN WHATSAPP
            // =========================

            const whatsappUrl =
              `https://wa.me/917995272217?text=${encodeURIComponent(
                message
              )}`;

            window.location.href =
              whatsappUrl;

          } catch (error) {
            console.error(
              "Payment Verification Error:",
              error
            );

            alert(
              "❌ Payment Verification Error."
            );

            setIsLoading(false);
          }
        },

        theme: {
          color: "#E67E22",
        },

        modal: {
          ondismiss: function () {
            console.log(
              "Razorpay payment window closed."
            );

            setIsLoading(false);
          },
        },
      };

      // =========================
      // CHECK RAZORPAY
      // =========================

      if (!window.Razorpay) {
        alert(
          "❌ Razorpay is not loaded. Please refresh the page."
        );

        setIsLoading(false);
        return;
      }

      // =========================
      // OPEN RAZORPAY
      // =========================

      const razorpay =
        new window.Razorpay(options);

      razorpay.on(
        "payment.failed",
        function (response) {
          console.error(
            "Razorpay Payment Failed:",
            response
          );

          alert(
            "❌ Payment Failed. Please try again."
          );

          setIsLoading(false);
        }
      );

      razorpay.open();

    } catch (error) {
      console.error(
        "Create Order / Payment Error:",
        error
      );

      alert(
        "❌ Unable to start payment. Please try again."
      );

      setIsLoading(false);
    }
  };

  // =========================
  // CLOSE DRAWER
  // =========================

  const handleClose = () => {
    if (isLoading) return;

    onClose();
  };

  // =========================
  // IF CLOSED
  // =========================

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* =========================
          OVERLAY
      ========================= */}

      <div
        onClick={handleClose}
        style={{
          position: "fixed",
          inset: 0,
          background:
            "rgba(0,0,0,0.5)",
          zIndex: 999,
        }}
      />

      {/* =========================
          DRAWER
      ========================= */}

      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,

          width: "410px",

          maxWidth: "100%",

          height: "100vh",

          background: "#FFF8EE",

          zIndex: 1000,

          display: "flex",

          flexDirection: "column",

          overflow: "hidden",

          boxShadow:
            "-8px 0 25px rgba(0,0,0,0.3)",
        }}
      >

        {/* =========================
            CONFETTI CANVAS
        ========================= */}

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",

            inset: 0,

            width: "100%",

            height: "100%",

            pointerEvents: "none",

            zIndex: 50,
          }}
        />

        {/* =========================
            HEADER
        ========================= */}

        <div
          style={{
            background: "#E67E22",

            color: "#fff",

            padding: "17px",

            display: "flex",

            justifyContent:
              "space-between",

            alignItems: "center",

            fontSize: "20px",

            fontWeight: "bold",

            flexShrink: 0,

            position: "relative",

            zIndex: 10,
          }}
        >
          <span>
            {showDetails
              ? "📦 Order Details"
              : `🛒 Your Cart (${cart.length})`}
          </span>

          <button
            onClick={handleClose}
            style={{
              background:
                "transparent",

              border: "none",

              color: "#fff",

              fontSize: "28px",

              cursor:
                isLoading
                  ? "not-allowed"
                  : "pointer",

              opacity:
                isLoading ? 0.5 : 1,
            }}
          >
            ✕
          </button>
        </div>

        {/* =========================
            MAIN CONTENT
        ========================= */}

        <div
          style={{
            flex: 1,

            overflowY:
              showDetails
                ? "auto"
                : "hidden",

            paddingBottom: "12px",

            position: "relative",

            zIndex: 5,
          }}
        >

          {/* =========================
              FREE DELIVERY
          ========================= */}

          {!showDetails && (
            <div
              style={{
                margin:
                  "12px 12px 10px",

                padding: "12px",

                background:
                  "#FFF3E0",

                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  textAlign:
                    "center",

                  fontWeight: "bold",

                  color: "#8B5E3C",

                  marginBottom: "8px",

                  fontSize: "14px",
                }}
              >
                {subtotal >= 999
                  ? "🎉 FREE DELIVERY UNLOCKED!"
                  : `🚚 Add ₹${
                      999 - subtotal
                    } more for FREE Delivery`}
              </div>

              <div
                style={{
                  height: "8px",

                  background: "#ddd",

                  borderRadius:
                    "20px",

                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${Math.min(
                      (subtotal /
                        999) *
                        100,
                      100
                    )}%`,

                    height: "100%",

                    background:
                      "#25D366",

                    transition:
                      "0.4s",
                  }}
                />
              </div>

              <div
                style={{
                  textAlign:
                    "center",

                  marginTop: "6px",

                  color: "#777",

                  fontSize: "13px",
                }}
              >
                ₹{subtotal} / ₹999
              </div>
            </div>
          )}

          {/* =========================
              CART PRODUCTS
          ========================= */}

          {!showDetails && (
            <div
              style={{
                padding:
                  "0 12px",

                display: "flex",

                flexDirection:
                  "column",

                gap: "8px",
              }}
            >
              {cart.length === 0 ? (
                <div
                  style={{
                    textAlign:
                      "center",

                    padding:
                      "40px 20px",
                  }}
                >
                  <div
                    style={{
                      fontSize:
                        "50px",
                    }}
                  >
                    🛒
                  </div>

                  <h3>
                    Your Cart is Empty
                  </h3>
                </div>
              ) : (
                cart.map(
                  (item, index) => (
                    <div
                      key={`${item.name}-${item.selectedSize}-${index}`}
                      style={{
                        display: "flex",

                        alignItems:
                          "center",

                        gap: "8px",

                        background:
                          "#fff",

                        padding:
                          "8px",

                        borderRadius:
                          "12px",

                        minHeight:
                          "72px",

                        boxShadow:
                          "0 2px 7px rgba(0,0,0,0.08)",

                        boxSizing:
                          "border-box",
                      }}
                    >
                      {/* PRODUCT IMAGE */}

                      {item.image ? (
                        <img
                          src={
                            item.image
                          }
                          alt={
                            item.name
                          }
                          style={{
                            width:
                              "58px",

                            height:
                              "58px",

                            objectFit:
                              "cover",

                            borderRadius:
                              "9px",

                            flexShrink:
                              0,
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width:
                              "58px",

                            height:
                              "58px",

                            background:
                              "#FFF3E0",

                            borderRadius:
                              "9px",

                            display:
                              "flex",

                            alignItems:
                              "center",

                            justifyContent:
                              "center",

                            fontSize:
                              "28px",

                            flexShrink:
                              0,
                          }}
                        >
                          🥭
                        </div>
                      )}

                      {/* PRODUCT INFO */}

                      <div
                        style={{
                          flex: 1,

                          minWidth: 0,
                        }}
                      >
                        <div
                          style={{
                            fontWeight:
                              "700",

                            fontSize:
                              "14px",

                            color:
                              "#333",

                            whiteSpace:
                              "nowrap",

                            overflow:
                              "hidden",

                            textOverflow:
                              "ellipsis",
                          }}
                        >
                          {item.name}
                        </div>

                        <div
                          style={{
                            fontSize:
                              "12px",

                            color:
                              "#777",

                            marginTop:
                              "2px",
                          }}
                        >
                          {item.selectedSize}
                        </div>

                        <div
                          style={{
                            color:
                              "#E67E22",

                            fontWeight:
                              "700",

                            fontSize:
                              "14px",

                            marginTop:
                              "2px",
                          }}
                        >
                          ₹{item.price}
                        </div>
                      </div>

                      {/* QUANTITY */}

                      <div
                        style={{
                          display:
                            "flex",

                          alignItems:
                            "center",

                          gap: "4px",

                          flexShrink:
                            0,
                        }}
                      >
                        <button
                          onClick={() =>
                            decreaseQuantity(
                              index
                            )
                          }
                          style={{
                            width:
                              "28px",

                            height:
                              "28px",

                            border:
                              "none",

                            borderRadius:
                              "50%",

                            background:
                              "#E67E22",

                            color:
                              "#fff",

                            fontSize:
                              "17px",

                            cursor:
                              "pointer",

                            padding: 0,
                          }}
                        >
                          −
                        </button>

                        <b
                          style={{
                            minWidth:
                              "15px",

                            textAlign:
                              "center",

                            fontSize:
                              "14px",
                          }}
                        >
                          {
                            item.quantity
                          }
                        </b>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              index
                            )
                          }
                          style={{
                            width:
                              "28px",

                            height:
                              "28px",

                            border:
                              "none",

                            borderRadius:
                              "50%",

                            background:
                              "#25D366",

                            color:
                              "#fff",

                            fontSize:
                              "17px",

                            cursor:
                              "pointer",

                            padding: 0,
                          }}
                        >
                          +
                        </button>

                        <button
                          onClick={() =>
                            removeFromCart(
                              index
                            )
                          }
                          style={{
                            width:
                              "28px",

                            height:
                              "28px",

                            border:
                              "none",

                            borderRadius:
                              "50%",

                            background:
                              "#ff4d4f",

                            color:
                              "#fff",

                            cursor:
                              "pointer",

                            padding: 0,

                            fontSize:
                              "12px",

                            marginLeft:
                              "2px",
                          }}
                        >
                          🗑
                        </button>
                      </div>
                    </div>
                  )
                )
              )}
            </div>
          )}

          {/* =========================
              ORDER DETAILS
          ========================= */}

          {showDetails && (
            <div
              style={{
                margin: "15px",

                padding: "18px",

                background: "#fff",

                borderRadius: "15px",

                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.08)",
              }}
            >
              <button
                onClick={
                  handleBackToCart
                }
                style={{
                  border: "none",

                  background:
                    "transparent",

                  color:
                    "#8B5E3C",

                  fontWeight:
                    "bold",

                  fontSize:
                    "16px",

                  cursor:
                    "pointer",

                  padding: 0,

                  marginBottom:
                    "14px",
                }}
              >
                ← Back to Cart
              </button>

              <h3
                style={{
                  marginTop: 0,

                  color:
                    "#8B5E3C",
                }}
              >
                📦 Delivery Details
              </h3>

              <input
                type="text"
                placeholder="👤 Full Name"
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
                style={inputStyle}
              />

              <input
                type="tel"
                placeholder="📞 Mobile Number"
                value={mobile}
                onChange={(e) =>
                  setMobile(
                    e.target.value.replace(
                      /\D/g,
                      ""
                    )
                  )
                }
                maxLength="10"
                style={inputStyle}
              />

              <textarea
                placeholder="🏠 Delivery Address"
                value={address}
                onChange={(e) =>
                  setAddress(
                    e.target.value
                  )
                }
                style={{
                  ...inputStyle,

                  minHeight:
                    "85px",

                  resize:
                    "vertical",
                }}
              />

              <input
                type="text"
                placeholder="📮 PIN Code"
                value={pincode}
                onChange={(e) =>
                  setPincode(
                    e.target.value.replace(
                      /\D/g,
                      ""
                    )
                  )
                }
                maxLength="6"
                style={inputStyle}
              />

              <textarea
                placeholder="📝 Order Notes (Optional)"
                value={notes}
                onChange={(e) =>
                  setNotes(
                    e.target.value
                  )
                }
                style={{
                  ...inputStyle,

                  minHeight:
                    "70px",

                  resize:
                    "vertical",
                }}
              />
            </div>
          )}
        </div>

        {/* =========================
            BOTTOM SUMMARY
        ========================= */}

        {cart.length > 0 && (
          <div
            style={{
              background:
                "#fff",

              padding:
                "12px 15px",

              borderTop:
                "1px solid #ddd",

              flexShrink: 0,

              position:
                "relative",

              zIndex: 10,
            }}
          >
            <div
              style={{
                display:
                  "flex",

                justifyContent:
                  "space-between",

                marginBottom:
                  "5px",

                fontSize:
                  "14px",
              }}
            >
              <span>
                Subtotal
              </span>

              <b>
                ₹{subtotal}
              </b>
            </div>

            <div
              style={{
                display:
                  "flex",

                justifyContent:
                  "space-between",

                marginBottom:
                  "5px",

                fontSize:
                  "14px",
              }}
            >
              <span>
                Delivery
              </span>

              <b>
                {delivery === 0
                  ? "FREE 🎉"
                  : `₹${delivery}`}
              </b>
            </div>

            <hr
              style={{
                margin:
                  "7px 0",
              }}
            />

            <div
              style={{
                display:
                  "flex",

                justifyContent:
                  "space-between",

                fontSize:
                  "20px",

                fontWeight:
                  "bold",

                margin:
                  "7px 0",
              }}
            >
              <span>
                Total
              </span>

              <span>
                ₹{total}
              </span>
            </div>

            {/* =========================
                ORDER PLACE
            ========================= */}

            {!showDetails ? (
              <button
                onClick={
                  handleOrderPlace
                }
                style={
                  orderButton
                }
              >
                🛍️ Order Place
              </button>
            ) : (
              <button
                onClick={
                  handlePayment
                }
                disabled={
                  isLoading
                }
                style={{
                  ...orderButton,

                  background:
                    isLoading
                      ? "#999"
                      : "#25D366",

                  cursor:
                    isLoading
                      ? "not-allowed"
                      : "pointer",
                }}
              >
                {isLoading
                  ? "⏳ Please Wait..."
                  : "💳 Proceed to Payment"}
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}

// =========================
// INPUT STYLE
// =========================

const inputStyle = {
  width: "100%",

  padding: "13px",

  marginBottom: "11px",

  border:
    "1px solid #ddd",

  borderRadius:
    "10px",

  fontSize:
    "15px",

  boxSizing:
    "border-box",

  outline: "none",
};

// =========================
// ORDER BUTTON
// =========================

const orderButton = {
  width: "100%",

  background:
    "#25D366",

  color: "#fff",

  border: "none",

  padding: "15px",

  borderRadius:
    "12px",

  fontSize:
    "18px",

  fontWeight:
    "bold",

  cursor:
    "pointer",
};

export default CartDrawer;