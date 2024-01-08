import Logo from "./images/Logo .svg";
import React from 'react';
import './App.css';
import {Routes,Route, Link} from "react-router-dom";


function Nav() {
    return (
      <nav>
        <ul class="container">
          <li>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </li>

          <li>
            <Link to="/">
             Home
            </Link> 
          </li>

          <li>
            <Link to="/About">
              About
            </Link>
          </li>

          <li>
            <Link to="/Menu">
              Menu
            </Link>
          </li>

          <li>
            <Link to="/OrderOnline">
              OrderOnline
            </Link>
          </li>

          <li>
            <Link to="/Reservation">
              Reservations
            </Link>
          </li>
         
          <li>
            <Link to="/Login">
              Login
            </Link>
          </li>

          
        
            
        </ul>
      </nav>
    );
  }
  
  export default Nav;