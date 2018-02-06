import {Link} from "react-router-dom";
import "./navbar.css";
import React from "react";

export default function Navbar(props) {
    return (
      <div>
        <img className="header-img" src={require("../images/header-img.jpg")} alt="mountains twin lakes"/>
           <nav className="navbar">
               <Link to="/">Home</Link>
               <Link to="/boards">Saved Photos</Link>
           </nav>
      </div>
   )
}
