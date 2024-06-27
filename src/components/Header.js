import React from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import logoImage from '../Images/logo.png'; // Adjust the path to your logo image
import './Header.css'; 

const Header = () => (
  <header className="header-wrapper">
    <div className="logo">
      <img src={logoImage} alt="Shopcart Logo" />
    </div>
    <nav className="nav">
      <a className="nav-link" href="#">Category</a>
      <a className="nav-link" href="#">Deals</a>
      <a className="nav-link" href="#">What's New</a>
      <a className="nav-link" href="#">Delivery</a>
    </nav>
    <div className="search-bar">
      <input type="text" placeholder="Search Product" />
      <button>
        <FaSearch />
      </button>
    </div>
    <nav className="nav">
      <a className="icon-link" href="#">
        <FaUser /> Account
      </a>
      <a className="icon-link" href="#">
        <FaShoppingCart /> Cart
      </a>
    </nav>
  </header>
);

export default Header;
