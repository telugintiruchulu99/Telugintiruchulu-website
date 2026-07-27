function WhatsAppButton() {
  const phone = "917995272217"; //

  return (
    <a
      href={`https://wa.me/${phone}?text=Hi%20Teluginti%20Ruchulu,%20I%20want%20to%20know%20more%20about%20your%20products.`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#25D366",
        color: "white",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        fontSize: "30px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: 999,
      }}
    >
      💬
    </a>
  );
}

export default WhatsAppButton;