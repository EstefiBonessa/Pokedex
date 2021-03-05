import logo from "../images/logo.png";
import pika from "../images/pikapika.gif";
import "../App.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";
//import Nav from "./components/Nav.jsx";

export default function Intro() {
  return (
    <div className="border">
      <div>
        <img alt="" src={logo}></img>
      </div>

      {/*<div id="pikachu">
        <div className="eye left"></div>
        <div className="eye right"></div>
        <div className="nose"></div>
        <div className="ridiculousMouth">
          <div></div>
        </div>
        <div className="cheek left"></div>
        <div className="cheek right"></div>
  </div>*/}
      <Link className="cont" to="/pokemon" render={() => <Nav></Nav>}>
        <div>
          <img className="pika" alt="" src={pika}></img>
        </div>

        {/*<p className="enter">Welcome</p>*/}
      </Link>
    </div>
  );
}
