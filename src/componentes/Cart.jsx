function Cart({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0
  );

  return (
    <section id="contact"
      style={{
        padding: "40px",
        background: "#fff",
      }}
    >
      <h1 style={{ color: "#d35400" }}>🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                marginBottom: "15px",
                borderRadius: "10px",
                background: "#fafafa",
              }}
            >
              <h3>{item.name}</h3>

              <p>
                <b>Size:</b> {item.selectedSize}
              </p>

              <p>
                <b>Price:</b> ₹{item.price}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  margin: "10px 0",
                }}
              >
                <button
                  onClick={() => decreaseQuantity(index)}
                  style={{
                    width: "35px",
                    height: "35px",
                    border: "none",
                    background: "#ff9800",
                    color: "#fff",
                    fontSize: "20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  −
                </button>

                <h3>{item.quantity}</h3>

                <button
                  onClick={() => increaseQuantity(index)}
                  style={{
                    width: "35px",
                    height: "35px",
                    border: "none",
                    background: "green",
                    color: "#fff",
                    fontSize: "20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>

              <p>
                <b>Subtotal:</b> ₹{Number(item.price) * item.quantity}
              </p>

              <button
                onClick={() => removeFromCart(index)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                🗑 Remove
              </button>
            </div>
          ))}

          <h2
            style={{
              color: "green",
              marginTop: "30px",
            }}
          >
            Total: ₹{total}
          </h2>
        </>
      )}
    </section>
  );
}

export default Cart;