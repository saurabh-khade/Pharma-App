import React, {Component} from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import './App.css';
import About from "./Component/About";
import Products from "./Component/Products";
import Investors from "./Component/Investors";
import Home from './Component/Home';
import Cart from './Component/Cart';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav
          data-testid="navbar"
          className="navbar navbar-expand-lg navbar-light  bg-custom"
        >
          <span className="navbar-brand">XYZ Pharma</span>
          <ul className="navbar-nav">
          <li className="nav-item">
           <Link className='nav-link'
           data-testid="home-link"
           to="/" >
              Home 
              </Link> 
          </li>

            <li className="nav-item">
            <Link className = "nav-link"
              data-testid="about-link"
              to="about">
                About
            </Link>
            </li>

            <li className="nav-item">
              <Link className='nav-link'
                   data-testid="products-link"
                    to= "products">
                Products
                </Link>
            </li>
            <li className="nav-item">
              <Link 
              className="nav-link"
              data-testid="investors-link"
              to="Investors">
                Investors
                </Link>
            </li>
            <li className="nav-item">
              <Link 
              className="nav-link"
              data-testid="cart-link"
              to="Cart">
                Cart
                </Link>
            </li>
          </ul>
        </nav>
        <Routes>
         <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          {/*configure the Route's */}
          <Route path="/investors" element={<Investors/>}/>
          <Route path="/cart" element={<Cart/>}/>

        </Routes>
        
      </div>
      </BrowserRouter>
  );
}

export default App;
