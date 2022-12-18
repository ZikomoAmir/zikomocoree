import { useEffect, useState, useRef } from "react";

export const SidebarDropdown = ({ submenus, isActive, ariaID }) => {
  const listRef = useRef(null);
  const [submenuHeight, setSubMenuHeight] = useState();

  //listen for when the active state of the submenu changes, and set height for correct css animations
  useEffect(() => {
    const newHeight = listRef.current.clientHeight;
    setSubMenuHeight(newHeight);
  }, [isActive]);

  return (
    <div
      aria-labelledby={ariaID}
      style={isActive ? { height: submenuHeight } : { height: 0 }}
      className={`mm__submenu ${isActive ? "active" : ""}`}
    >
      <ul ref={listRef}>
        {submenus.map((submenu, index) => (
          <li key={index}>
            <a href="/#">{submenu.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
