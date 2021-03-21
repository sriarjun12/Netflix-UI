import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
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
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      ></img>
      <img
        className="nav_avatar"
        src="https://firebasestorage.googleapis.com/v0/b/sri-saratha-tex.appspot.com/o/netflixface.png?alt=media&token=7fcaa133-1dae-4e82-88c8-de9b42696224"
        alt="Netflix Logo"
      ></img>
    </div>
  );
}

export default Nav;
