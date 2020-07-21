import React from "react";
import "../assets/styles/components/_footers.scss";

const Footer = () => {
  return (
    <footer className="footer--principal">
      <div className="container">
        <nav className="nav--footer">
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
        <div className="nav--social">
          <ul>
            <li>Siguenos</li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
