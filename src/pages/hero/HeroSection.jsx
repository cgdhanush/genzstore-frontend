import "./HeroSection.css";
import HeroImage from "../../assets/shoping.jpg"

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Shop the Latest Trends</h1>
        <p>Find amazing deals on electronics, fashion, accessories & more!</p>
        <button className="shop-btn">Shop Now</button>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="Hero Banner" />
      </div>
    </section>
  );
};

export default HeroSection;