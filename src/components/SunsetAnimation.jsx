import React, { useRef, useEffect, useState } from 'react';

const SunsetAnimation = () => {
  const canvasRef = useRef(null);

  let hue;
  let saturation = 50;
  let lightness;
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height;
    let angle = Math.PI;
    let direction = -1;

    const drawSun = (x, y) => {
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, Math.PI * 2);
      ctx.fillStyle = '#fde9ab';
      ctx.shadowColor = '#fde9ab';
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.closePath();
      ctx.shadowBlur = 0;
    };

    const stars = [];

    class Star {
      constructor(x, y, radius, opacity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.opacity = opacity;
        this.direction = Math.random() < 0.5 ? 1 : -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
      update() {
        this.opacity += this.direction * 0.02;
        if (this.opacity > 1 || this.opacity < 0) {
          this.direction *= -1;
        }
      }
    }

    const createStars = () => {
      for (let i = 0; i < 200; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * centerY;
        const radius = Math.random() * 2;
        const opacity = Math.random();
        stars.push(new Star(x, y, radius, opacity));
      }
    };

    const animateStars = () => {
      for (const star of stars) {
        if (angle > Math.PI) {
          star.draw();
          if (
              hue === 210 &&
              lightness === 20 &&
              saturation === 60
          ) {
            star.update();
          }
        }
      }
    };

    const updateBackgroundColor = (angle) => {
      const normalizedAngle = (angle + Math.PI) / (2 * Math.PI);
      if (normalizedAngle >= 0.217 && normalizedAngle < 0.8) {
        hue = 210;
        lightness = 50;
        saturation = 40;
      } else if (normalizedAngle >= 0.325 && normalizedAngle < 0.9) {
        hue = 200;
        lightness = 60;
        saturation = 40;
      } else if (normalizedAngle >= 0.233 && normalizedAngle < 1) {
        hue = 30;
        lightness = 60;
      } else {
        hue = 210;
        lightness = 20;
        saturation = 60;
      }

      let colorString = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.7)`;

      if (normalizedAngle >= 0.208 && normalizedAngle < 0.625) {
        colorString = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.6)`;
      }

      const header = document.querySelector(".header");
      header.style.backgroundColor = colorString;
    };
    createStars();
    const animateSun = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const sunX = centerX + Math.cos(angle) * 550;
      const sunY = centerY - Math.sin(angle) * 280;

      drawSun(sunX, sunY);

      updateBackgroundColor(angle);

      animateStars();

      angle += 0.003 * direction;

      if (angle > Math.PI * 2) {
        angle = 0;
      } else if (angle < 0) {
        angle = Math.PI * 2;
      }

      requestAnimationFrame(animateSun);
    };

    animateSun();
  }, []);

  return (
      <div>
        <canvas ref={canvasRef} id="canvasSunAndBg" width="1500" height="400"></canvas>
      </div>
  );
};

export default SunsetAnimation;
