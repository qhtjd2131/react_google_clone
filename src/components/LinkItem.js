import React from "react";
import "./LinkItem.css";

function LinkItem({ name, URL }) {
  const favicon = URL + "/favicon.ico";

  //favicon 이 없을 시에는 ??

  return (
    <div className="link-item">
      <a href={URL}>
        <div className="favicon-container">
          <img className="link-favicon-img" src={favicon} alt="" />
        </div>
      </a>
      <div className="link-name">
        <span>{name}</span>
      </div>
    </div>
  );
}

export default LinkItem;
