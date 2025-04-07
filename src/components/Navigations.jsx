/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from "react";
import './Navigations.css'
const Navigations = () => {
    return (
        <nav className="Navigations">
            <div className="navigations-left">
    <a href="/" className="logo">
      
    </a>
  </div>
  <div className="navigation-center">
    <ul className="nav-links">
      <li>
        <a href="/Books">Books</a>
      </li>
      <li>
        <a href="/Account">Account</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
  <div className="navigations-right">
    <a href="/cart" className="cart-icon">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">0</span>
    </a>
    <a href="/account" className="user-icon">
      <i className="fas fa-user"></i>
    </a>
  </div>
        </nav>
    );
};

export default Navigations