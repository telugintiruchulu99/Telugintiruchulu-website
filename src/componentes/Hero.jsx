import logo from "../assets/logo.png";

function Hero() {
  return (
    <section className="hero">
      <img
        src={logo}
        alt="Teluginti Ruchulu"
        className="hero-logo"
      />

      <p className="hero-description">
        Experience the authentic taste of homemade products
        prepared with traditional recipes, premium ingredients and lots of love.
      </p>
    </section>
  );
}

export default Hero;