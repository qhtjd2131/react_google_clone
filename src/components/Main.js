import React, { useState } from "react";
import "./Main.css";
import google_logo from "../images/google_logo.svg";
import mic from "../images/mic.png";
import search from "../images/search.png";
import LinkItem from "./LinkItem";
import CreateItem from "./CreateItem";
import Dialog from "./Dialog";

function Main() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [favorite, setFavorite] = useState([
    {
      name: "NAVER",
      URL: "https://www.naver.com",
    },
    {
      name: "Google",
      URL: "https://www.google.com",
    },
    {
      name: "NATE",
      URL: "https://www.nate.com",
    },
  ]);

  const setIsDialogOpenTrue = () => {
    setIsDialogOpen(true);
  };

  const setIsDialogOpenFalse = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="main-container">
      <img className="logo" src={google_logo} alt="logo"></img>
      <div className="input-container">
        <input type="text" />
        <img className="search-image" src={search} alt="search" />
        <img className="mic-image" src={mic} alt="mic" />
      </div>
      <div className="link-container">
        {favorite.map((website) => (
          <LinkItem key={website.URL} name={website.name} URL={website.URL} />
        ))}
        {favorite.length < 10 && <CreateItem setIsDialogOpenTrue={setIsDialogOpenTrue}
        />}
      </div>
      <Dialog isDialogOpen={isDialogOpen} setIsDialogOpenFalse={setIsDialogOpenFalse} />
    </div>
  );
}
export default Main;
