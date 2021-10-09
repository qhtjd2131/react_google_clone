import React from "react";
import "./DialogMenu.css";

function DialogMenu({ isOpenMenu, menuClose }) {
  const DialogMenuItem = () => {
    const items = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
    ];

    return (
      <div className="dialog-menu-items">
        {items.map((item) => (
          <a key={item} href="#!">
            {item}
          </a>
        ))}
      </div>
    );
  };

  return (
    <dialog className="dialog-menu" open={isOpenMenu}>
      {console.log("im DialogMenu Component! and isOpenMenu :", isOpenMenu)}
      <div className="menu-content-wrapper">
        <DialogMenuItem />
      </div>
      <button onClick={menuClose}>x</button>
    </dialog>
  );
}

export default DialogMenu;
