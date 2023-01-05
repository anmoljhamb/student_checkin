import React, { useEffect, useState } from "react";
import "./CurrentTime.css";

const CurrentTime = () => {
    const getCurrentTime = () => {
        let time = new Date();
        time = time.toJSON();
        return time.slice(0, time.length - 5);
    };

    const [dateTime, setDateTime] = useState(getCurrentTime());

    useEffect(() => {
        const currentInterval = setInterval(() => {
            setDateTime(getCurrentTime());
        }, 1000);

        return () => {
            clearInterval(currentInterval);
        };
    }, []);

    return (
        <div className="dateTime">
            <p>Current Time</p>
            <span id="time">{dateTime}</span>
        </div>
    );
};

export default CurrentTime;
