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
      <label>바로가기 추가</label>
      <label className="dialog-name">이름</label>
      <input className="dialog-name-input" type="text" />
      <label className="dialog-URL">URL</label>
      <input className="dialog-URL-input" type="text" />
      <div className="dialog-button-container">
        <button onClick={buttonCancleClickHandler}>취소</button>
        <button onClick={buttonSubmitClickHandler}>완료</button>
      </div>
    </dialog>
  );
};

export default Dialog;
