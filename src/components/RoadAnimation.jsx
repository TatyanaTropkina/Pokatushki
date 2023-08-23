// import React, { useEffect, useRef } from 'react';
//
// const RoadAnimation = () => {
//     const canvasRef = useRef(null);
//
//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");
//
//         canvas.width = window.innerWidth;
//         canvas.height = 80;
//
//         const roadColor = "#464649"; // Серый цвет дороги
//         const laneColor = "#ffffff"; // Белый цвет разметки
//
//         const laneWidth = 80; // Ширина полосы
//         const laneSpacing = 60; // Промежуток между полосами
//         const roadMiddle = canvas.height / 2; // Середина дороги по вертикали
//
//         // Функция для рисования дороги и разметки
//         function drawRoad(offset) {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//             // Рисование дороги
//             ctx.fillStyle = roadColor;
//             ctx.fillRect(0, 0, canvas.width, canvas.height);
//
//             // Применение перспективной трансформации
//             ctx.setTransform(1, 0, -1.0, 1, 0, 0); // Измените -0.3 для более крутой перспективы
//
//             // Рисование разметки
//             ctx.fillStyle = laneColor;
//
//             for (let x = offset; x < canvas.width; x += laneSpacing + laneWidth) {
//                 ctx.fillRect(x, roadMiddle - 10, laneWidth, 5); // Рисуем линию разметки
//             }
//
//             // Рисование боковых линий
//             ctx.fillStyle = laneColor;
//             ctx.fillRect(0, roadMiddle - 35, canvas.width, 5); // Верхняя боковая линия
//             ctx.fillRect(0, roadMiddle + 25, canvas.width, 5); // Нижняя боковая линия
//
//             // Сброс трансформации
//             ctx.setTransform(1, 0, 0, 1, 0, 0);
//         }
//
//         let offset = 0;
//
//         // Функция для обновления анимации
//         function animate() {
//             offset -= 1; // Скорость движения разметки
//
//             if (offset < -laneSpacing - laneWidth) {
//                 offset = 0;
//             }
//
//             drawRoad(offset);
//             requestAnimationFrame(animate);
//         }
//
//         animate();
//
//         return () => {
//             cancelAnimationFrame(animate);
//         };
//     }, []);
//
//     return(
//         <div className="road">
//         <canvas ref={canvasRef} id="roadCanvas"></canvas>
//     </div>
//     )
// };
//
// export default RoadAnimation;
import React, { useEffect, useRef } from 'react';

const RoadAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = 60;

        const roadColor = "#464649"; // Серый цвет дороги
        const laneColor = "#cccccc"; // Белый цвет разметки

        const laneWidth = 60; // Ширина полосы
        const laneSpacing = 40; // Промежуток между полосами
        const roadMiddle = canvas.height / 2; // Середина дороги по вертикали

        // Функция для рисования дороги и разметки
        function drawRoad(offset) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Рисование дороги
            ctx.fillStyle = roadColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Применение перспективной трансформации
            ctx.setTransform(1, 0, -1.0, 1, 0, 0); // Измените -0.3 для более крутой перспективы

            // Рисование разметки
            ctx.fillStyle = laneColor;

            for (let x = offset; x < canvas.width; x += laneSpacing + laneWidth) {
                ctx.fillRect(x, roadMiddle - 5, laneWidth, 3); // Рисуем линию разметки
            }

            // Рисование боковых линий
            ctx.fillStyle = laneColor;
            ctx.fillRect(0, roadMiddle - 25, canvas.width, 3); // Верхняя боковая линия
            ctx.fillRect(0, roadMiddle + 20, canvas.width, 3); // Нижняя боковая линия

            // Сброс трансформации
            ctx.setTransform(1, 0, 0, 1, 0, 0);
        }

        let offset = 0;

        // Функция для обновления анимации
        function animate() {
            offset -= 1; // Скорость движения разметки

            if (offset < -laneSpacing - laneWidth) {
                offset = 0;
            }

            drawRoad(offset);
            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            cancelAnimationFrame(animate);
        };
    }, []);

    return(
        <div className="road">
            <canvas ref={canvasRef} id="roadCanvas"></canvas>
        </div>
    )
};

export default RoadAnimation;
