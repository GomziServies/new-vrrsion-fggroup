// components/ScheduleCall.js
"use client";  // Add this line to mark the component as a Client Component

import { useEffect } from 'react';

const ScheduleCall = () => {
    useEffect(() => {
        // Load Calendly widget script when the component mounts
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        // Clean up script to prevent duplicates if the component is removed from the DOM
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <body style={{ backgroundColor: "white" }}>
            <section className="calendly-call-header">
                <div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <div className="coach-box p-4 rounded shadow-sm bg-white">
                                <div className="mb-3">
                                    <span className="text-maroon font-weight-bold fs-30" style={{ color: "black" }}>Free 1:1 Strategy Call with Dr. Gautam Jani</span>
                                </div>
                                <h2 className="h2-fs w-100 fs-20" style={{ color: "#333" }}>
                                Book a free strategy call with our team and solve your burning business problem with top-notch consulting by Dr. Gautam Jani.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/fitnesswithgomzi/1-1-fitness-consulting"
                    style={{ minWidth: '320px', height: '700px',overflow:"hidden" }} // Inline styles for widget
                ></div>
            </section>
        </body>
    );
};

export default ScheduleCall;
