import bike from "./../images/tr8tVa.gif";
import bouble from "./../images/Union.svg";
import grace from "./../images/grace2.svg";
import React from "react";
import SunsetAnimation from "./SunsetAnimation";
import BackAnimNature from "./BackAnimNature";
import RoadAnimation from "./RoadAnimation";
import './../scss/header.scss';
import './../scss/animation.scss';

function Header() {


  return (
    <div className="header">
        <img className="bouble" src={bouble} alt="" />
        <BackAnimNature />
        <SunsetAnimation/>
        <img className="bike" src={bike} alt="" />
        <RoadAnimation/>
        <img className="grace" src={grace} alt=""/>
    </div>
  );
}

export default Header;
