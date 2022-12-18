import { Link } from "react-router-dom";
import React, { Component, useState } from "react";

class HeaderBar extends Component {


  constructor(){
    super()
    this.state={
        dropdownActive:false
    }
    this.handleDrillDownClick=this.handleDrillDownClick.bind(this)
    this.setBacklink=this.setBacklink.bind(this)
  }

  handleChange(k,e){
    this.setState({
      ...this.state,
      [k]:e
    })
  }
   
  
  handleDrillDownClick(e){

    if(this.state.dropdownActive){
      this.handleChange('dropdownActive',false)
    }else{
      this.handleChange('dropdownActive',true)
    }

    e.preventDefault();
  };

  setBacklink(){
    const backlink = this.props.backlink;

    if (backlink) {
      return backlink;
    } else {
      return "/";
    }
  };

  render(){

  return (
    <header className={`header-bar ${this.props.cssClassModifier}`}>
      <div className="header-bar__title">
        <svg className="icon icon--zikomo-header">
          <use xlinkHref="/icons.svg#zikomo"></use>
        </svg>
        <Link to={this.setBacklink}>
          <svg className="icon icon--light icon--small">
            <use xlinkHref="/icons.svg#chevron-left"></use>
          </svg>
        </Link>
        <h4>&nbsp;{this.props.title}</h4>
      </div>

      <div className="header-bar__actions">
        <div className="dropdown-menu-wrapper">
          <button
            type="button"
            aria-haspopup="menu"
            className={`btn btn--avatar ${this.state.dropdownActive ? "active" : ""}`}
            aria-expanded={this.state.dropdownActive ? "true" : "false"}
            onClick={this.handleDrillDownClick}
          >
            {sessionStorage.getItem("user")
              ? sessionStorage.getItem("user")[0].toUpperCase()
              : ""}
          </button>

          <div className={`dropdown-menu ${this.state.dropdownActive ? "active" : ""}`}>
            <nav>
              <Link to="#" className="link">
                Profile
              </Link>
              <Link to="#" className="link">
                Settings
              </Link>
              <Link to="/Logout" className="link">
                Logout
              </Link>
            </nav>
          </div>
        </div>

        <a
          href="/"
          className="icon icon--light icon--lg icon--has-notification"
        >
          <svg>
            <use xlinkHref="/icons.svg#notification"></use>
          </svg>
        </a>
      </div>
    </header>
  );
  }
};

export default HeaderBar;