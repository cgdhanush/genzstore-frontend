import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo & About */}
        <div className="footer-section">
          <h2 className="footer-logo">GenZStore</h2>
          <p>Your one-stop shop for fashion, electronics & more!</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/shipping">Shipping</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 GenZStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;