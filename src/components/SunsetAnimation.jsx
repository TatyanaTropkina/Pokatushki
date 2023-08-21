// import React, { useRef, useEffect } from 'react';
//
// const SunsetAnimation = () => {
//   const canvasRef = useRef(null);
//
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const centerX = canvas.width / 2;
//     const centerY = canvas.height;
//     let angle = Math.PI * 0.5; // Начальный угол для захода солнца (3 часа)
//     let direction = -1; // Направление движения: 1 - восход, -1 - заход
//
//     const drawSun = (x, y) => {
//       ctx.beginPath();
//       ctx.arc(x, y, 25, 0, Math.PI * 2);
//       ctx.fillStyle = 'white';
//      ctx.fillStyle = '#fde9ab';
//       ctx.fill();
//       ctx.closePath();
//     };
//
//     const updateBackgroundColor = (angle) => {
//       const normalizedAngle = (angle + Math.PI) / (2 * Math.PI);
//       let hue;
//       let saturation = 50;
//       let lightness;
//
//       if (normalizedAngle >= 0.208 && normalizedAngle < 0.417) {
//         hue = 45 + (normalizedAngle - 0.208) * 120;
//         lightness = 70 - (normalizedAngle - 0.208) * 10;
//       } else if (normalizedAngle >= 0.417 && normalizedAngle < 0.625) {
//         hue = 200;
//         lightness = 60;
//         saturation = 40;
//       } else if (normalizedAngle >= 0.625 && normalizedAngle < 0.833) {
//         hue = 210;
//         lightness = 50;
//         saturation = 40;
//       } else if (normalizedAngle >= 0.833 && normalizedAngle < 1.042) {
//         hue = 30;
//         lightness = 60;
//       } else if (normalizedAngle >= 1.042 && normalizedAngle < 1.25) {
//         hue = 280 - (normalizedAngle - 1.042) * 90;
//         lightness = 30;
//       } else {
//         hue = 210;
//         lightness = 20;
//         saturation = 60;
//       }
//
//       let colorString = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.7)`;
//
//       if (normalizedAngle >= 0.208 && normalizedAngle < 0.625) {
//         colorString = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.6)`;
//       }
// 	  let header = document.querySelector(".header");
//       header.style.backgroundColor = colorString;
//     };
//
//     const animateSun = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//       const sunX = centerX + Math.cos(angle) * 600;
//       const sunY = centerY - Math.sin(angle) * 250;
//
//       drawSun(sunX, sunY);
//
//       updateBackgroundColor(angle);
//
//       angle += 0.003 * direction;
//
//       if (angle > Math.PI * 2) {
//         angle = 0;
//       } else if (angle < 0) {
//         angle = Math.PI * 2;
//       }
//
//       requestAnimationFrame(animateSun);
//     };
//
//     animateSun();
//   }, []);
//
//   return <canvas ref={canvasRef} id="myCanvas" width="1500" height="400"></canvas>;
// };
//
// export default SunsetAnimation;


import React, { useRef, useEffect } from 'react';

const SunsetAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height;
    let angle = Math.PI * 0.5; // Начальный угол для захода солнца (3 часа)
    let direction = -1; // Направление движения: 1 - восход, -1 - заход

    const drawSun = (x, y) => {
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, Math.PI * 2);
      ctx.fillStyle = '#fde9ab';
      ctx.shadowColor = '#fde9ab'; // Цвет тени
      ctx.shadowBlur = 20; // Размытие тени (эффект свечения)
      ctx.fill();
      ctx.closePath();
      ctx.shadowBlur = 0; // Сбрасываем размытие тени
    };

    // Функция для изменения цвета фона в зависимости от угла солнца
    const updateBackgroundColor = (angle) => {
      const normalizedAngle = (angle + Math.PI) / (2 * Math.PI);
      let hue;
      let saturation = 50;
      let lightness;

      if (normalizedAngle >= 0.208 && normalizedAngle < 0.417) {
        hue = 45 + (normalizedAngle - 0.208) * 120;
        lightness = 70 - (normalizedAngle - 0.208) * 10;
      } else if (normalizedAngle >= 0.417 && normalizedAngle < 0.625) {
        hue = 200;
        lightness = 60;
        saturation = 40;
      } else if (normalizedAngle >= 0.625 && normalizedAngle < 0.833) {
        hue = 210;
        lightness = 50;
        saturation = 40;
      } else if (normalizedAngle >= 0.833 && normalizedAngle < 1.042) {
        hue = 30;
        lightness = 60;
      } else if (normalizedAngle >= 1.042 && normalizedAngle < 1.25) {
        hue = 280 - (normalizedAngle - 1.042) * 90;
        lightness = 30;
      } else {
        hue = 210;
        lightness = 20;
        saturation = 60;
      }

      let colorString = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.7)`;

      if (normalizedAngle >= 0.208 && normalizedAngle < 0.625) {
        colorString = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.6)`;
      }
	  let header = document.querySelector(".header");
      header.style.backgroundColor = colorString;
    };

    const animateSun = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const sunX = centerX + Math.cos(angle) * 600;
      const sunY = centerY - Math.sin(angle) * 250;

      // Применяем фильтр размытия к солнцу
      // ctx.save();
      // ctx.filter = 'blur(2px)';
      drawSun(sunX, sunY);
      ctx.restore();

      // Обновляем цвет фона
      updateBackgroundColor(angle);

      // angle += 0.003 * direction;
      angle += 0.001 * direction;


      if (angle > Math.PI * 2) {
        angle = 0;
      } else if (angle < 0) {
        angle = Math.PI * 2;
      }

      requestAnimationFrame(animateSun);
    };

    animateSun();
  }, []);

  return <canvas ref={canvasRef} id="myCanvas" width="1500" height="400"></canvas>;
};

export default SunsetAnimation;
