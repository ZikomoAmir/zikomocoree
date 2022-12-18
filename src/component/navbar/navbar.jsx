import React, { Component, useState } from "react";
import { Switch, Route, Link, Router } from "react-router-dom";
//import "../css/navbar.css";


class Navbar extends Component {

    constructor(){
        super()
    }

    render(){

      return (
      <div>
      <header className="header-bar">
        <div>ZIKOMO</div>

        <nav className="header-bar__nav">
          <a>Products</a>
          <a>Pricing</a>
          <a>Contact</a>
          <a>Sign Up</a>
          <Link to="/Login">Log in</Link>
        </nav>
      </header>
      </div>
  );
}
}

export default Navbar;
