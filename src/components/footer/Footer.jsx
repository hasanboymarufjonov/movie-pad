import React from "react";

import "./footer.scss";

import { Link } from "react-router-dom";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/play.png";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">MoviePad</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <a
              href="https://www.themoviedb.org/documentation/api/terms-of-use"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of use
            </a>{" "}
            <a
              href="https://hasanboymarufjonov.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              About the author
            </a>
          </div>
          <div className="footer__content__menu">
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              API
            </a>{" "}
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <a
              href="https://www.imdb.com/chart/top"
              target="_blank"
              rel="noopener noreferrer"
            >
              Top IMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
