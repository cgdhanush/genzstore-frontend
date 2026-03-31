import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        GenZStore
      </a>

      <ul>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">SignUp</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
