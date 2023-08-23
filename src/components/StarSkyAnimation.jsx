//
// import React, { useRef, useEffect } from 'react';
//
// const StarSkyAnimation = () => {
//     const canvasRef = useRef(null);
//     const stars = [];
//
//     class Star {
//         constructor(x, y, radius, opacity) {
//             this.x = x;
//             this.y = y;
//             this.radius = radius;
//             this.opacity = opacity;
//             this.direction = Math.random() < 0.5 ? 1 : -1;
//         }
//
//         draw(context) {
//             context.beginPath();
//             context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//             context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
//             context.fill();
//         }
//
//         update() {
//             this.opacity += this.direction * 0.02;
//             if (this.opacity > 1 || this.opacity < 0) {
//                 this.direction *= -1;
//             }
//         }
//     }
//
//     const createStars = () => {
//         for (let i = 0; i < 200; i++) {
//             const x = Math.random() * canvasRef.current.width;
//             const y = Math.random() * canvasRef.current.height;
//             const radius = Math.random() * 1.2 + 1;
//             const opacity = Math.random();
//             stars.push(new Star(x, y, radius, opacity));
//         }
//     };
//
//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const context = canvas.getContext('2d');
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//
//         createStars();
//
//         const animate = () => {
//             context.clearRect(0, 0, canvas.width, canvas.height);
//
//             for (const star of stars) {
//                 star.draw(context);
//                 star.update();
//             }
//
//             requestAnimationFrame(animate);
//         };
//
//         animate();
//     }, []);
//
//     return(
//         <div>
//             <canvas id="canvasStars" ref={canvasRef}></canvas>
//         </div>
//         )
// };
//
// export default StarSkyAnimation;
import React, { useRef, useEffect, useState } from 'react';
//
// const StarSkyAnimation = () => {
//     const canvasRef = useRef(null);
//     const stars = [];
//     const [secondsCounter, setSecondsCounter] = useState(0);
//     const [opacity, setOpacity] = useState(1);
//
//     class Star {
//         constructor(x, y, radius, opacity) {
//             this.x = x;
//             this.y = y;
//             this.radius = radius;
//             this.opacity = opacity;
//             this.direction = Math.random() < 0.5 ? 1 : -1;
//         }
//
//         draw(context) {
//             context.beginPath();
//             context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//             context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
//             context.fill();
//         }
//
//         update() {
//             this.opacity += this.direction * 0.02;
//             if (this.opacity > 1 || this.opacity < 0) {
//                 this.direction *= -1;
//             }
//         }
//     }
//
//     const createStars = () => {
//         for (let i = 0; i < 200; i++) {
//             const x = Math.random() * canvasRef.current.width;
//             const y = Math.random() * canvasRef.current.height;
//             const radius = Math.random() * 1.2 + 1;
//             const opacity = Math.random();
//             stars.push(new Star(x, y, radius, opacity));
//         }
//     };
//
//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const context = canvas.getContext('2d');
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//
//         createStars();
//
//         const animate = () => {
//             context.clearRect(0, 0, canvas.width, canvas.height);
//
//             for (const star of stars) {
//                 star.draw(context);
//                 star.update();
//             }
//
//             // Изменение прозрачности в зависимости от счетчика секунд
//             if (secondsCounter <= 10) {
//                 setOpacity(1);
//             } else if (secondsCounter > 10 && secondsCounter <= 30) {
//                 setOpacity(0);
//             } else {
//                 setOpacity(1);
//                 setSecondsCounter(0);
//             }
//
//             setSecondsCounter((prevSeconds) => prevSeconds + 1);
//
//             requestAnimationFrame(animate);
//         };
//
//         const animationInterval = setInterval(() => {
//             setSecondsCounter((prevSeconds) => prevSeconds + 1);
//         }, 1000);
//
//         animate();
//
//         return () => {
//             clearInterval(animationInterval);
//         };
//     }, []);
//
//     return (
//         <div>
//             <canvas id="canvasStars" ref={canvasRef}></canvas>
//         </div>
//     );
// };
//
// export default StarSkyAnimation;

const StarSkyAnimation = () => {
    const canvasRef = useRef(null);
    const stars = [];
    const [secondsCounter, setSecondsCounter] = useState(0);
    const [opacity, setOpacity] = useState(1);

    class Star {
        constructor(x, y, radius, opacity) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.opacity = opacity;
            this.direction = Math.random() < 0.5 ? 1 : -1;
        }

        draw(context) {
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            context.fill();
        }

        update() {
            this.opacity += this.direction * 0.005; // Adjust this value to control flicker speed
            if (this.opacity > 1 || this.opacity < 0) {
                this.direction *= -1;
            }
        }
    }

    const createStars = () => {
        for (let i = 0; i < 200; i++) {
            const x = Math.random() * canvasRef.current.width;
            const y = Math.random() * canvasRef.current.height;
            const radius = Math.random() * 1.2 + 1;
            const opacity = Math.random() * 0.5 + 0.5; // Adjust this range for initial opacity
            stars.push(new Star(x, y, radius, opacity));
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        createStars();

        const animate = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);

            for (const star of stars) {
                star.draw(context);
                star.update();
            }

            if (secondsCounter <= 10) {
                setOpacity(1);
            } else if (secondsCounter > 10 && secondsCounter <= 30) {
                setOpacity(0);
            } else {
                setOpacity(1);
                setSecondsCounter(0);
            }

            setSecondsCounter((prevSeconds) => prevSeconds + 1);

            requestAnimationFrame(animate);
        };

        const animationInterval = setInterval(() => {
            setSecondsCounter((prevSeconds) => prevSeconds + 1);
        }, 10); // Adjust this interval for smoother or slower animation

        animate();

        return () => {
            clearInterval(animationInterval);
        };
    }, []);

    return (
        <div>
            <canvas id="canvasStars" ref={canvasRef}></canvas>
        </div>
    );
};

export default StarSkyAnimation;

