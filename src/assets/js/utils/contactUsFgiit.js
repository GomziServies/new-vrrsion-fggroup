import React, { useState, useEffect } from 'react';

const ContactButtonFGIIT = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollThreshold = 200;

            if (scrollTop > scrollThreshold) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.location.href = '/fgiit/lead-form';
    };

    return (
        <div className={`contact-us-sticky ${showButton ? 'show' : ''}`}>
            <button className='btn btn-primary' onClick={handleClick}>Contact Us</button>
        </div>
    );
};

export default ContactButtonFGIIT;
