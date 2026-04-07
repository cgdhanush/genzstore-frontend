import "./Navbar.css";
import { Link } from "react-router-dom"; // Import Link
import {
  FaShoppingCart,
  FaBoxOpen,
  FaSignInAlt,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <FaShoppingCart className="logo-icon" />
        GenZStore
      </Link>

      <ul>
        <li>
          <Link to="/products">
            <FaBoxOpen className="icon" />
            Products
          </Link>
        </li>

        <li>
          <Link to="/login">
            <FaSignInAlt className="icon" />
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;