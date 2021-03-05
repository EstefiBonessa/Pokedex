import React from "react";
import logo from "../images/logo.png";
import pika from "../images/1.gif";
import s from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav>
      <div className={s.container}>
        <img className={s.navLogo} alt="" src={logo}></img>
        <img className={s.gif} src={pika}></img>
      </div>
    </nav>
  );
}
