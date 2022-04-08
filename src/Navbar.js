import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import iconbell from "./images/icons/icon-bell.png";
import iconsearch from "./images/icons/icon-search.png";

function Navbar() {
  const [show, handleShow] = useState(false);

  // Voegt een zwarte balk toe aan navbar na een Y scroll van 100
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar__black "} `}>
      <img
        className="navbar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
        href="/"
      />

      <img
        className="navbar__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avatar"
      />
      <img className="navbar__icon-bell" src={iconbell} alt="icon-bell" />

      <li className="navbar__item-kids" href="">
        Kids
      </li>

      <img className="navbar__icon-search" src={iconsearch} alt="icon-search" />

      <div className="navbar__items">
        <li className="navbar__item" href="#">
          Homepage
        </li>
        <li className="navbar__item" href="">
          Series
        </li>
        <li className="navbar__item" href="#">
          Films
        </li>
        <li className="navbar__item" href="#">
          New and popular
        </li>
        <li className="navbar__item" href="#">
          My list
        </li>
      </div>
    </div>
  );
}

export default Navbar;
