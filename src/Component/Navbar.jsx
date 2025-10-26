import React, { useState } from 'react';
import logo from "../../src/assets/logo.webp";
import cart from "../../src/assets/cart_icon.png";
import "./Navbar.css"; 
import { Link } from 'react-router-dom'; // ✅ fixed import

const Navbar = () => {
  const [menu, setmenu] = useState("home");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img className='logo-img' src={logo} alt="image not found" />
        <h1 className='brand-name'>ShopKaro</h1>
      </div>

      <div className='nav-menu'>
        <ul>
          <li onClick={() => { setmenu("home") }}>
            {menu === "home" ? <hr /> : ""} 
            <Link to="/">Home</Link>
          </li>

          <li onClick={() => { setmenu("men") }}>
            {menu === "men" ? <hr /> : ""} 
            <Link to="/mens">Mens</Link>
          </li>

          <li onClick={() => { setmenu("women") }}>
            {menu === "women" ? <hr /> : ""} 
            <Link to="/womens">Womens</Link>
          </li>

          <li onClick={() => { setmenu("kids") }}>
            {menu === "kids" ? <hr /> : ""} 
            <Link to="/kids">Kids</Link>
          </li>
        </ul>
      </div>

      <div className='loginsignup'>
        <Link to="/login"><button>logIn</button></Link>
        <div className="cart">
          <Link to="/cart"><img src={cart} alt="image not found" /></Link>
          <p className='cart-count'>0</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
