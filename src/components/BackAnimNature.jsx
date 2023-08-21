import Sand from "./Sand";
import Wave from "./Wave";
import Sea from "./Sea";
import React, { useEffect, useState } from "react";

function BackAnimNature() {
  // 	const [showSand, setShowSand] = useState(true);

  //   useEffect(() => {
  //     const sandTimer = setTimeout(() => {
  //       setShowSand(false);
  //     }, 1000);

  //     const waveTimer = setTimeout(() => {
  //       setShowSand(true);
  //     }, 3000);

  //     return () => {
  //       clearTimeout(sandTimer);
  //       clearTimeout(waveTimer);
  //     };
  //   }, [showSand]);

  // return (
  // 	<div>
  // 		<Wave/>
  // 		<Sand/>
  // 		<Sea/>
  // 		{/* {showSand ? ( <Sand/> ) : (<Wave/> )} */}

  // 	</div>
  // )

  const [currentDiv, setCurrentDiv] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDiv((prevDiv) => (prevDiv + 1) % 3);
    }, 5000); // Смена дивов каждые 10 секунд

    return () => clearInterval(interval);
  }, []);

  const divs = [
    <div key={0} className={`wrapper ${currentDiv === 0 ? "visible" : ""}`}>
      <div className="waveWrapper">{<Wave />}</div>
    </div>,
    <div key={1} className={`wrapper ${currentDiv === 1 ? "visible" : ""}`}>
      <div className="sandWrapper">{<Sand />}</div>
    </div>,
    <div key={2} className={`wrapper ${currentDiv === 2 ? "visible" : ""}`}>
      <div className="seaWrapper">{<Sea />}</div>
    </div>,
  ];
  return <>{divs}</>;
}
export default BackAnimNature;
