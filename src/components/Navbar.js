import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="nav-center">
            <Link to={"/"}>
               <img src={logo} alt="cocktail db logo" className="logo" />
            </Link>
            <ul className="nav-links">
               <li>
                  <NavLink to={"/"}>Home</NavLink>
               </li>
               <li>
                  <NavLink to={"/about"}>About</NavLink>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
