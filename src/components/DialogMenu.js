import React from "react";
import "./DialogMenu.css";

function DialogMenu({ isOpenMenu }) {
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
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "B.",
      "O.",
      "S.",
      "U.",
      "N.",
      "G.",
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
      <div className="menu-content-wrapper">
        <DialogMenuItem />
      </div>
    </dialog>
  );
}

export default DialogMenu;
