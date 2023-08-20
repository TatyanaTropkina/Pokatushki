import bike from "./../images/tr8tVa.gif";
import city from "./../images/city.png";
import mount from "./../images/mountain_icon-icons.com_54385.svg";
import bouble from "./../images/white.png";
import React, { useEffect, useRef } from "react";
import SunsetAnimation from "./SunsetAnimation";
import BackAnimNature from "./BackAnimNature";
import Sea from "./Sea";

function Header() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let x = canvas.width; // начальная позиция объекта (справа)
    const objectWidth = 200; // предположим, что ширина объекта равна 100 пикселям
    const y = 150;
    const speed = 2; // скорость движения

    // Загружаем изображение
    const img = new Image();
    img.src = mount;

    img.onload = () => {
      function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height); // очищаем холст

        // Рисуем изображение
        context.drawImage(img, x, y, objectWidth, 200);

        x -= speed; // изменяем позицию объекта (движение влево)

        if (x < -50) {
          x = canvas.width; // возвращаем объект на правую сторону холста
        }

        requestAnimationFrame(draw); // запрашиваем следующий кадр анимации
      }

      // Добавляем обработчик события изменения размеров окна браузера
      function handleResize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw(); // Перерисовываем анимацию при изменении размеров
      }

      window.addEventListener("resize", handleResize);

      handleResize(); // Вызываем функцию при монтировании компонента

      // Удаляем обработчик события при размонтировании компонента
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };
  }, []);

  return (
    <div className="header">
      <img className="bouble" src={bouble} alt="" />
      <Sea />
      {/* <BackAnimNature/> */}

      <SunsetAnimation />

      <img className="bike" src={bike} alt="" />

      <canvas
        className="headerCanvas"
        ref={canvasRef}
        style={{ width: "100%", height: "400px" }}
      ></canvas>
    </div>
  );
}

export default Header;
