import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "../Styles/Navbar.css";
import logo from "../Images/logo.PNG";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [icon, seticon] = useState(false);
  
  return (
    <div className="navbar">
      <div>
        <img src={logo} className="border rounded-md h-20 w-36" alt="" />
        <p className="logo_p text-red-600 font-bold"><span>Educating The</span> Nation</p>
      </div>
      {/*List*/}
      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
      >
        <Link to="/" onClick={() => seticon(!icon)}>Home</Link>
        <Link to="/admission" onClick={() => seticon(!icon)}>Admission</Link>
        <Link to="/facilites" onClick={() => seticon(!icon)}>Facilities</Link>
        <Link to="/rules" onClick={() => seticon(!icon)}>Rules</Link>
        <Link to="owner" onClick={() => seticon(!icon)}>Owner's Message</Link>
        <Link to="contact" onClick={() => seticon(!icon)}>Contact Us</Link>
      </ul>

      <div className="menu__icon">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
