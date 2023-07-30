import React from "react";
import "../style/Header.css"; // Don't forget to create the Header.css file for styling.
let url =
  "https://gumlet.assettype.com/greaterkashmir%2F2022-08%2Fac28f986-764f-467b-bdc9-58fbea484337%2FIMG_20220826_112112.jpg?rect=0%2C97%2C400%2C225&format=auto";

const Header = (props) => {
  return (
    <header className="header">
      <div className="logo-title">
        <img src={url} alt="Your Logo" className="logo" />
        <h1 className="title">My New App</h1>
      </div>
      <nav className="navigation">
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a>{props.data.info.name}</a>
          </li>
          <li>
            <img
              src={props.data.info.picture}
              style={{ width: "60px", height: "50px", borderRadius: "50%" }}
            />
          </li>
          <li>
            <button
              style={{ width: "100px", height: "40px" }}
              onClick={() => {
                window.location.assign("http://localhost:3000");
                localStorage.clear();
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
