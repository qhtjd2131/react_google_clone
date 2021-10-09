import React, { useState, useEffect, useRef, useCallback } from "react";
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
        console.log("setIsOpenMenu : false ");
      }
    },
    [isOpenMenu]
  );

  // const handleDialogBackgroundClick = (e) => {
  //   console.log("handleDialogBackgroundClick!!----------");
  //   console.log(dialog_element);
  //   console.log("in hadlebackgroundclick :", isOpenMenu);
  //   console.log("dialog_current:", dialog_element.current);
  //   console.log(
  //     "dialog.current.contains(e.target):",
  //     dialog_element.current.contains(e.target)
  //   );
  //   console.log("-------------------------");
  //   if (
  //     isOpenMenu &&
  //     (!dialog_element.current || !dialog_element.current.contains(e.target))
  //   ) {
  //     setIsOpenMenu(false);
  //     console.log("if문 통과 -------");
  //     console.log("setIsOpenMenu : false ");
  //     console.log("-------------------------");
  //   }
  // };

  useEffect(() => {
    console.log("run useeffect");
    window.addEventListener("click", handleDialogBackgroundClick);
    return () => {
      window.removeEventListener("click", handleDialogBackgroundClick);
    };
  }, [handleDialogBackgroundClick]);

  const menuClose = () => {
    setIsOpenMenu(false);
  };
  return (
    <div className="header-container">
      <a href="#!">Gamil</a>
      <a href="#!">Image</a>
      <button onClick={menuButtonClickHandler}>
        <img className="menu-9dots-img" src={menu_9dots} alt={"menu"} />
      </button>
      <label className="header-user-icon">보성</label>
      <div className="dialogmenu-container" ref={dialog_element}>
        <DialogMenu isOpenMenu={isOpenMenu} menuClose={menuClose} />
      </div>
    </div>
  );
}

export default Header;
