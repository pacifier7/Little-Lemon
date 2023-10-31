import Logo from "./images/Logo .svg";
import React from 'react';



function Nav() {
    return (
      <nav>
        <ul>
          <li>
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </li>

          <li>
            <a href="/">
              Home
            </a>
          </li>

          <li>
            <a href="/About">
              About
            </a>
          </li>

          <li>
            <a href="/Menu">
              Menu
            </a>
          </li>

          <li>
            <a href="/Reservation/Reservation">
              Reservations
            </a>
          </li>
         
          <li>
            <a href="/OrderOnline">
              Order Online
            </a>
          </li>

          <li>
            <a href="/Login">
              Login
            </a>
          </li>
        
            
        </ul>
      </nav>
    );
  }
  
  export default Nav;