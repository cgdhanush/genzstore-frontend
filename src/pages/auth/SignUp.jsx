import { useState } from "react";
import Image from "../../assets/image.jpg";
import Logo from "../../assets/logo.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom"; // Import Link
import axios from "axios";

import API_BASE_URL from "../../config";

import "./SignUp.css";
import "./responsive.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role] = useState("USER");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
        name,
        email,
        password,
        role,
      });

      console.log("SignUp success:", response.data);

      alert("SignUp successful!");

      setUserName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("");

      navigate("/login");

    } catch (error) {
      console.error("SignUp failed:", error);
      setError(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="signup visual" />
      </div>

      <div className="login-right">
        <div className="login-right-container">

          <div className="login-logo">
            <Link to="/" className="site-title">
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <div className="login-center">
            <h2>New Here!</h2>
            <p>Create a new Account</p>

            <form onSubmit={handleSignUp}>
              
              {/* Username */}
              <input
                type="text"
                placeholder="User Name"
                value={name}
                onChange={(e) => setUserName(e.target.value)}
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Password */}
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>

              {/* Confirm Password */}
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>

              {/* Error Message */}
              {error && (
                <p style={{ color: "red", fontSize: "14px" }}>{error}</p>
              )}

              <div className="login-center-options">
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>

              <div className="login-center-buttons">
                <button type="submit">Sign Up</button>
              </div>

            </form>
          </div>

          <p className="login-bottom-p">
            Have an account? <Link to="/login">Login</Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
