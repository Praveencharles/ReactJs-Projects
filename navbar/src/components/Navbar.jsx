import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {

  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <nav>
      <Link className="Title" to="/">
        Codex
      </Link>
      <div className="Menu" onClick={()=>{setMenuOpen(!menuOpen)}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink onClick={()=>{setMenuOpen(!menuOpen)}} to="/Products">Products</NavLink>
        </li>
        <li>
          <NavLink onClick={()=>{setMenuOpen(!menuOpen)}} to="/About">About</NavLink>
        </li>
        <li>
          <NavLink onClick={()=>{setMenuOpen(!menuOpen)}} to="/Service">Service</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
