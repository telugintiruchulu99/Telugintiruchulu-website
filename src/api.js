export async function createOrder(amount) {
  const response = await fetch("https://telugintiruchulu-website.onrender.com/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create order");
  }

  return await response.json();
}

export async function verifyPayment(data) {
  console.log("Sending to backend:", data);

  const response = await fetch("https://telugintiruchulu-website.onrender.com/verify-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log("Backend Response:", result);

  return result;
}