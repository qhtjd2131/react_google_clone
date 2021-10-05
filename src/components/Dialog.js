import React, { useState } from "react";
import "./Dialog.css";

const Dialog = ({ isDialogOpen, setIsDialogOpenFalse }) => {
  const buttonCancleClickHandler = () => {
    setIsDialogOpenFalse();
  };
  const buttonSubmitClickHandler = () => {
    setIsDialogOpenFalse();
  };
  return (
    <dialog className="dialog" open={isDialogOpen}>
      <div className="dialog-contents-wrapper">
        <label>바로가기 추가</label>
        <label className="dialog-name">이름</label>
        <input className="dialog-name-input" type="text" />
        <label className="dialog-URL">URL</label>
        <input className="dialog-URL-input" type="text" />
        <div className="dialog-button-container">
          <button className="cancle-button" onClick={buttonCancleClickHandler}>취소</button>
          <button className="submit-button" onClick={buttonSubmitClickHandler}>완료</button>
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;
