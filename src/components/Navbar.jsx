import "./Navbar.css";
import {
  FaShoppingCart,
  FaBoxOpen,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        <FaShoppingCart className="logo-icon" />
        GenZStore
      </a>

      <ul>
        <li>
          <a href="/products">
            <FaBoxOpen className="icon" />
            Products
          </a>
        </li>

        <li>
          <a href="/login">
            <FaSignInAlt className="icon" />
            Login
          </a>
        </li>

        <li>
          <a href="/signup">
            <FaUserPlus className="icon" />
            SignUp
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
