import "./Navbar.scss";

import React from "react";

import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import NavbarSearch from "../NavbarSearch/NavbarSearch";
import NavbarNotificationButton from "../NavbarNotificationButton/NavbarNotificationButton";

import ScalesIcon from "../../assets/svg/scales.svg?react";
import BasketIcon from "../../assets/svg/basket.svg?react";
import HeartIcon from "../../assets/svg/heart.svg?react";
import LoginIcon from "../../assets/svg/login.svg?react";
import LangSelect from "../LangSelect/LangSelect";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <ThemeSwitch />
        <NavbarSearch />
      </div>
      <div className="navbar-right">
        <div className="links">
          <span className="link bold">Kampaniyalar</span>
          <span className="link">Xidmətlər</span>
          <span className="link">Digər</span>
        </div>
        <div className="buttons">
          <LangSelect />
          <NavbarNotificationButton icon={<ScalesIcon />} />
          <NavbarNotificationButton
            icon={<BasketIcon />}
            notificationCount={11}
          />
          <NavbarNotificationButton
            icon={<HeartIcon />}
            notificationCount={5}
          />
          <NavbarNotificationButton icon={<LoginIcon />}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
