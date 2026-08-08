import whatsapp from "../assets/whatsapp.png";

function WhatsAppButton() {
  const phone = "917995272217";

  return (
    <a
      href={`https://wa.me/${phone}?text=Hi%20Teluginti%20Ruchulu,%20I%20want%20to%20know%20more%20about%20your%20products.`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 999,
      }}
    >
      <img
        src={whatsapp}
        alt="WhatsApp"
        style={{
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        }}
      />
    </a>
  );
}

export default WhatsAppButton;