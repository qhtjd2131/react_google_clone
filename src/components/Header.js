import React, { useState, useEffect, useCallback } from "react";
import "./Header.css";
import menu_9dots from "../images/menu_9dots.png";
import DialogMenu from "./DialogMenu";

function Header() {
  const dialog_element = React.createRef();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuButtonClickHandler = () => {
    setIsOpenMenu(true);
  };

  const handleDialogBackgroundClick = useCallback(
    (e) => {
      if (isOpenMenu && !dialog_element.current.contains(e.target)) {
        setIsOpenMenu(false);
      }
    },
    [isOpenMenu, dialog_element]
  );

  useEffect(() => {
    window.addEventListener("click", handleDialogBackgroundClick);
    return () => {
      window.removeEventListener("click", handleDialogBackgroundClick);
    };
  }, [handleDialogBackgroundClick]);

  return (
    <div className="header-container">
      <a href="#!">Gamil</a>
      <a href="#!">Image</a>
      <button onClick={menuButtonClickHandler}>
        <img className="menu-9dots-img" src={menu_9dots} alt={"menu"} />
      </button>
      <label className="header-user-icon">보성</label>
      <div className="dialog-menu-container" ref={dialog_element}>
        <DialogMenu isOpenMenu={isOpenMenu} />
      </div>
    </div>
  );
}

export default Header;
