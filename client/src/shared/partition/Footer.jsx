import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/product" className="footer-link">
            Product
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
          <Link to="/about" className="footer-link">
            About
          </Link>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon">
              FB
            </a>
            <a href="https://twitter.com" className="social-icon">
              TW
            </a>
            <a href="https://instagram.com" className="social-icon">
              IG
            </a>
            <a href="https://linkedin.com" className="social-icon">
              LI
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
