import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import Logo from './assets/logo.png';
import Cart from './assets/cart.png'
import { HiShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <div>
      <div className="list">
        <img src={Logo} className="logonav"/>
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
          <NavLink to="/Cards" className="navlink">
            All Products
          </NavLink>
          <NavLink className="navlink">About us</NavLink>
          <div>
          <HiShoppingCart className="cart"/>
          </div>
        </div>
    </div>
  )
}

export default Navbar
