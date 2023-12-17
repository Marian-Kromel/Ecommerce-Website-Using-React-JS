import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import './navbar.css'
import Cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
export const Navbar = () => {

  const [menu, setMenu] = useState("shop"); //red line move in nav bar

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><a style={{textDecoration:'none'}} href='/'>Shop</a>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><a style={{textDecoration:'none'}}  href='/mens'>Men</a>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><a style={{textDecoration:'none'}}  href='/womens'>Women</a>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><a style={{textDecoration:'none'}}  href='/kids'>Kids</a>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <a href='/login'><button>Login</button></a>
        <a href='/cart'><img src={Cart_icon} alt="" /></a>
        <div className="nav-cart-count">
          0
        </div>
      </div>
    </div>
  );
};
