// import React, { useRef, useEffect } from 'react';
//
// const CloudAnimation = () => {
//     const canvasRef = useRef(null);
//
//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//
//         class Cloud {
//             constructor(x, y, speed, color) {
//                 this.x = x;
//                 this.y = y;
//                 this.speed = speed;
//                 this.color = color;
//                 this.size = 80;
//             }
//
//             update() {
//                 this.x -= this.speed;
//                 if (this.x + this.size < 0) {
//                     this.x = canvas.width;
//                 }
//             }
//
//             draw() {
//                 ctx.fillStyle = this.color;
//                 ctx.beginPath();
//                 ctx.arc(this.x, this.y, this.size / 3, 0, Math.PI * 2);
//                 ctx.arc(this.x + this.size / 3, this.y, this.size / 2, 0, Math.PI * 2);
//                 ctx.arc(this.x + this.size * 2 / 3, this.y, this.size / 3, 0, Math.PI * 2);
//                 ctx.closePath();
//                 ctx.fill();
//             }
//         }
//
//         const clouds = [
//             new Cloud(canvas.width, 100, 0.3, 'lightblue'),
//             new Cloud(canvas.width, 200, 0.5, 'lightcyan'),
//             new Cloud(canvas.width, 300, 0.8, 'lightgray')
//         ];
//
//         const animate = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//             for (const cloud of clouds) {
//                 cloud.update();
//                 cloud.draw();
//             }
//
//             requestAnimationFrame(animate);
//         };
//
//         animate();
//     }, []);
//
//     return <canvas ref={canvasRef}></canvas>;
// };
//
// export default CloudAnimation;
import React, { useRef, useEffect } from 'react';

import cloudImage1 from './../images/Слой 3.png';
import cloudImage2 from './../images/Слой 4.png';
import cloudImage3 from './../images/Слой 5.png';

const CloudAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Cloud {
            constructor(x, y, speed, image) {
                this.x = x;
                this.y = y;
                this.speed = speed;
                this.image = new Image();
                this.image.src = image;
                this.size = 180;
            }

            update() {
                this.x -= this.speed;
                if (this.x + this.size < 0) {
                    this.x = canvas.width;
                }
            }

            draw() {
                ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
            }
        }

        const clouds = [
            new Cloud(canvas.width, 100, 0.8, cloudImage1),
            new Cloud(canvas.width, 200, 0.5, cloudImage2),
            new Cloud(canvas.width, 300, 0.3, cloudImage3)
        ];

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const cloud of clouds) {
                cloud.update();
                cloud.draw();
            }

            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return <canvas ref={canvasRef}></canvas>;
};

export default CloudAnimation;
