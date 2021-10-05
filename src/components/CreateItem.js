import React, { useState } from "react";
import plus from "../images/plus.png";
import "./CreateItem.css";

function CreateItem({setIsDialogOpenTrue}) {

  
  const clickHandler = () => {
    setIsDialogOpenTrue();
  };

  return (
    <div className="link-item">
      <button className="create-button" onClick={clickHandler}>
        <div className="favicon-container">
          <img className="link-favicon-img" src={plus} alt="plus" />
        </div>
        <div className="link-name">
          <span>바로가기 추가</span>
        </div>
      </button>
    </div>
    
  );
}

export default CreateItem;
