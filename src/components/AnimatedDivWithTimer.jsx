import React, { useState, useEffect } from 'react';
import StarSkyAnimation from "./StarSkyAnimation";

const AnimatedDivWithTimer = () => {
    const [secondsCounter, setSecondsCounter] = useState(0);
    const [divOpacity, setDivOpacity] = useState(0);

    useEffect(() => {
        const animationInterval = setInterval(() => {
            setSecondsCounter(prevSeconds => prevSeconds + 1);

            if (secondsCounter <= 8) {
                setDivOpacity(0);
            } else if (secondsCounter > 8 && secondsCounter <= 13) {
                setDivOpacity(1);
            } else {
                setDivOpacity(1);
                setSecondsCounter(0);
            }
        }, 1000);

        return () => clearInterval(animationInterval);
    }, [secondsCounter]);

    return (
        <div>
            <div className="fadeStars" style={{opacity: divOpacity}}>
                <StarSkyAnimation/>
            </div>
            <p id="timer" style={{ fontSize: '18px', marginTop: '10px' }}>
                Seconds: {secondsCounter}
            </p>
        </div>
    );
};

export default AnimatedDivWithTimer;
