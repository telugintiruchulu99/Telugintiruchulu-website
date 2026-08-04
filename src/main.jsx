import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const script = document.createElement("script");
script.src = "https://checkout.razorpay.com/v1/checkout.js";
script.async = true;
document.body.appendChild(script);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);