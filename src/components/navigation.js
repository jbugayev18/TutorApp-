import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "antd";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Find Tutor",
    path: "/tutor",
  },
];

export default function Navigation({ user }) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="site-navigation">
      <span className="menu-title">Let's Get Educated! </span>
      <div className={`menu-content-container ${menuActive && "active"}`}>
        <ul>
          {navLinks.map((linkObj, index) => (
            //if the key changes, it will render
            <li key={index}>
              <NavLink exact activeClassName="navlinks" to={linkObj.path}>
                {linkObj.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <span>
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={32}
          />
          <span className="menu-avatar-name">{`${user.firstName}${user.lastName}`}</span>
        </span>
      </div>
      <i
        className="ionicons icon ion-ios-menu"
        onClick={() => setMenuActive(!menuActive)}
      />
    </nav>
  );
}
