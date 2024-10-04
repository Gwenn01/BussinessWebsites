import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import assets from "../../assets/assets";
const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src={assets.logo} alt="Logo" className="logo" />
          </Link>
          <h2>Threads & Crafts</h2>
        </div>
        <div className="navbar-center">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/product" className="nav-link">
            Product
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/account" className="nav-link">
            <img src={assets.accountIcon} alt="Logo" className="logo" />
          </Link>
          <Link to="/cart" className="nav-link">
            <img src={assets.cartIcon} alt="Logo" className="logo" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
