import React from "react";
import "./Header.css";
import menu_9dots from "../images/menu_9dots.png";

function Header() {
  return (
    <div className="header-container">
      <a href="">Gamil</a>
      <a href="">Image</a>
      <button>
        <img className="menu-9dots-img" src={menu_9dots} />
      </button>
      <label className="header-user-icon">보성</label>
    </div>
  );
}

export default Header;
