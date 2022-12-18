import React, { Component } from "react";
import SidebarItems from "./sidebarItem";
import {dataSidebarItems} from './sidebardata'

class Sidebar extends Component{
 // const [openMenu, setOpenMenu] = useState(false);

  constructor(){
    super()
    this.state={
      openMenu:false
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(k,e){

    
    this.setState({
      ...this.state,
      [k]:e
    })
  }

  //menu

  render(){

  return (
    //there are 2x versions of the sidebar:
    //if we remove the css class 'mm--full' we will instead get a compact floating bar slightly offset top and left
    <nav
      className={`mm mm--full ${this.state.openMenu ? "active" : ""}`}
      aria-label="main menu"
    >
      <div className="mm__menu">
        <ul>
          <li>
            <button
              className={`mm__toggle ${this.state.openMenu ? "active" : ""}`}
              onClick={() => this.handleChange('openMenu',this.state.openMenu?false:true)}
              aria-expanded={this.state.openMenu ? "true" : "false"}
            >
              <div></div>
            </button>
          </li>
          {dataSidebarItems.map((menu, index) => {
            return <SidebarItems menu={menu} key={index} mmActive={this.state.openMenu} />;
            //mmActive prop is to pass state of main menu open or not
            //we do this so that we can ensure any open submenus can be set to close if the main menu is also closed, ie, only show open state of submenus if the main menu itself is open.
          })}
        </ul>
      </div>
    </nav>
  );
  }
};

export default Sidebar;
