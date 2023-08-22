import bike from "./../images/tr8tVa.gif";
import city from "./../images/city.png";
import mount from "./../images/mountain_icon-icons.com_54385.svg";
import bouble from "./../images/white.png";
import grace from "./../images/grace2.svg";
import React, { useEffect, useRef } from "react";
import SunsetAnimation from "./SunsetAnimation";
import BackAnimNature from "./BackAnimNature";
import Sea from "./Sea";
import RoadAnimation from "./RoadAnimation";
import CloudAnimation from "./CloudAnimation";
import SunSetAnimTest from "./SunSetAnimTest";

function Header() {


  return (
    <div className="header">
{/*<div className="cloud-div"></div>*/}
      <img className="bouble" src={bouble} alt="" />
      {/*<BackAnimNature />*/}

      {/*<SunsetAnimation />*/}
        <SunSetAnimTest/>
{/*<CloudAnimation/>*/}
      <img className="bike" src={bike} alt="" />

        {/*<RoadAnimation/>*/}
        <img className="grace" src={grace} alt=""/>
    </div>
  );
}

export default Header;
