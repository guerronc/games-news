import React from "react";
import {LogoHeader} from "./Logos";
import "../assets/styles/components/_headers.scss";

const Header = () => {
  return (
    <header className="header--principal">
      <div className="container">
        <div className="logo logo--header">
          <LogoHeader width="300px" height="75px" />
        </div>
        <nav className="nav--header">
          <ul>
            <li>
              <a href="#">Playstation</a>
            </li>
            <li>
              <a href="#">Xbox</a>
            </li>
            <li>
              <a href="#">Nintendo</a>
            </li>
            <li>
              <a href="#">PC</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
          </ul>
        </nav>
        <a className="header__busqueda" href="#">
          <i className="fas fa-search"></i>
          <span>Search</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
