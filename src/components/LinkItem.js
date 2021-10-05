import React from "react";
import "./LinkItem.css";

function LinkItem({ name, URL }) {
  const favicon = URL + "/favicon.ico";

  return (
    <div className="link-item">
      <a href={URL}>
        <div className="favicon-container">
          <img className="link-favicon-img" src={favicon} alt="favicon" />
        </div>
      </a>
      <div className="link-name">
        <span>{name}</span>
      </div>
    </div>
  );
}

export default LinkItem;
