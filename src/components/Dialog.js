import React, { useState } from "react";
import "./Dialog.css";

const Dialog = ({ isDialogOpen, setIsDialogOpenFalse, addFavorite }) => {
  const [name, setName] = useState("");
  const [URL, setURL] = useState("");

  const buttonCancleClickHandler = () => {
    setName("");
    setURL("");
    setIsDialogOpenFalse();
  };
  const buttonSubmitClickHandler = () => {
    addFavorite(name, URL);

    console.log("name :", name);
    console.log("url :", URL);
    setName("");
    setURL("");

    setIsDialogOpenFalse();
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeURL = (e) => {
    setURL(e.target.value);
  };

  return (
    <dialog className="dialog" open={isDialogOpen}>
      <div className="dialog-contents-wrapper">
        <label>바로가기 추가</label>
        <label className="dialog-name">이름</label>
        <input
          className="dialog-name-input"
          type="text"
          value={name}
          onChange={onChangeName}
        />
        <label className="dialog-URL">URL</label>
        <input
          className="dialog-URL-input"
          type="text"
          value={URL}
          onChange={onChangeURL}
        />
        <div className="dialog-button-container">
          <button className="cancle-button" onClick={buttonCancleClickHandler}>
            취소
          </button>
          <button className="submit-button" onClick={buttonSubmitClickHandler}>
            완료
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;
