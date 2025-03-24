import React, { useEffect, useRef } from "react";
import { CountUp as Count } from "countup.js";

// Define your CounterComponent to accept props
const CounterComponent = ({ countNumber }) => {
    const counterRef = useRef(null);

    useEffect(() => {
        if (counterRef.current) {
            const demo = new Count(counterRef.current, countNumber);

            if (!demo.error) {
                demo.start();
            } else {
                console.error(demo.error);
            }
        }
    }, [countNumber]); // Re-run the effect if countNumber changes

    return (
        <span ref={counterRef} className="fs-40" style={{
            fontWeight: "bold",
            lineHeight: "1.42857143",
            color: "#333",
            fontFamily: "Nunito,sans-serif",
        }}></span>
    );
};

export default CounterComponent;
