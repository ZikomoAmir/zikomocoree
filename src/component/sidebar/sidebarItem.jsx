import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SidebarDropdown } from "./sidebarDropDown";

const SidebarItems = ({ menu, mmActive }) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const handleDrillDownClick = (e) => {
    setDropdownActive((prev) => !prev);
    e.preventDefault();
  };

  return (
    <li>
      {menu.submenu ? (
        <React.Fragment>
          <NavLink to={menu.route}>
            <span className="mm__icon">
              <svg>
                <use xlinkHref={`/icons.svg#${menu.icon}`}></use>
              </svg>
            </span>
            <span className="mm__title">{menu.title}</span>

            <button
              type="button"
              aria-haspopup="menu"
              className={`mm__drill-down ${
                dropdownActive && mmActive ? "active" : ""
              }`}
              aria-expanded={dropdownActive && mmActive ? "true" : "false"}
              onClick={handleDrillDownClick}
              id={menu.id}
            >
              <span className="mm__icon">
                <svg>
                  <use xlinkHref="/icons.svg#chevron-right"></use>
                </svg>
              </span>
            </button>
          </NavLink>
          <SidebarDropdown
            submenus={menu.submenu}
            isActive={dropdownActive && mmActive}
            ariaID={menu.id}
            mmActive={mmActive}
          />
        </React.Fragment>
      ) : (
        <NavLink to={menu.route}>
          <span className="mm__icon">
            <svg>
              <use xlinkHref={`/icons.svg#${menu.icon}`}></use>
            </svg>
          </span>
          <span className="mm__title">{menu.title}</span>
        </NavLink>
      )}
    </li>
  );
};

export default SidebarItems;
