import Sand from "./Sand";
import Wave from "./Wave";
import Sea from "./Sea";
import React, { useEffect, useState } from "react";

function BackAnimNature() {
  const [currentDiv, setCurrentDiv] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDiv((prevDiv) => (prevDiv + 1) % 3);
    }, 10000); // Смена дивов каждые 10 секунд

    return () => clearInterval(interval);
  }, []);

  const divs = [
    <div key={0} className={`wrapperBg ${currentDiv === 0 ? "visible" : ""}`}>
      <div className="wrapper waveWrapper">{<Wave />}</div>
    </div>,
    <div key={1} className={`wrapperBg ${currentDiv === 1 ? "visible" : ""}`}>
      <div className="wrapper sandWrapper">{<Sand />}</div>
    </div>,
    <div key={2} className={`wrapperBg  ${currentDiv === 2 ? "visible" : ""}`}>
      <div className="wrapper seaWrapper">{<Sea />}</div>
    </div>,
  ];
  return <>{divs}</>;

}
export default BackAnimNature;

