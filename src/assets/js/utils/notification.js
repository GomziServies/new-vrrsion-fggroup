import React, { useEffect, useState } from 'react';

const courseUrlMapping = {
    'Diploma In Personal Training Course': '/fgiit/online-personal-training-course',
    'Anabolic Androgenic Steroids': '/fgiit/anabolic-steroid-testosterone',
    'Diploma In Nutrition course': '/fgiit/food-and-nutrition-course',
    'Powerlifting Coach Workshop': '/fgiit/online-powerlifting-course',
    'Injury Rehabilitation Workshop': '/fgiit/course-of-physiotherapy',
    'Advance Clinical Nutrition': '/fgiit/clinical-diets-for-health-and-wellness',
    'Mix Martial Arts Workshop': '/fgiit/online-martial-arts-workshop',
    'Functional Training Workshop': '/fgiit/online-functional-training-workshop',
};

const bookUrlMapping = {
    'Diploma In Personal Training Book': '/book/personal-fitness-trainer-course',
    'Diploma In Nutrition Book': '/book/nutrition-and-dietetics-course',
    'Anabolic Androgenic Steroids': '/book/steroids-book',
    'Group Instructor Masterclass': '/book/fitness-instructor-course-book',
    'Powerlifting Book': '/book/best-books-for-powerlifting',
    'Injury Rehabilitation Book': '/book/injury-rehab',
    'Advance Clinical Nutritionist': '/book/clinical-nutrition-books',
    'Diploma In Health & Fitness Business Management': '/book/health-and-fitness-books',
};

const generateRandomCourseName = () => {
    const courses = Object.keys(courseUrlMapping);
    const randomIndex = Math.floor(Math.random() * courses.length);
    return courses[randomIndex];
};

const generateRandomBookName = () => {
    const books = Object.keys(bookUrlMapping);
    const randomIndex = Math.floor(Math.random() * books.length);
    return books[randomIndex];
};

const generateRandomTimeAgo = () => {
    const hours = Math.floor(Math.random() * 4) + 1;
    if (hours === 1) {
        return '1 hour ago';
    } else if (hours === 4) {
        return '4 hours ago';
    } else {
        const minutes = Math.floor(Math.random() * 3) * 15 + 15;
        return `${minutes} minutes ago`;
    }
};

function NotificationDiv() {
    const [showNotification, setShowNotification] = useState(false);
    const [content, setContent] = useState({ type: '', name: '', timeAgo: '' });

    useEffect(() => {
        setShowNotification(false);
    }, []);

    useEffect(() => {
        const updateNotification = () => {
            const type = Math.random() < 0.5 ? 'course' : 'book';
            const name = type === 'course' ? generateRandomCourseName() : generateRandomBookName();
            const timeAgo = generateRandomTimeAgo();
            setContent({ type, name, timeAgo });
            setShowNotification(true);
        };

        const interval = setInterval(updateNotification, 60000);
        updateNotification();

        return () => clearInterval(interval);
    }, []);

    const handleCheckOut = () => {
        const url = content.type === 'course' ? courseUrlMapping[content.name] : bookUrlMapping[content.name];
        if (url) {
            window.location.href = url;
        }
    };

    const handleCloseNotification = () => {
        setShowNotification(false);
    };

    return (
        <>
            <div className={`notification-box ${showNotification ? 'slide-in' : ''}`}>
                <div className='notification-icon' style={{ position: 'relative' }}>
                    <button onClick={handleCloseNotification}><i className="fas fa-times"></i></button>
                </div>
                <div className='notification-body'>
                    <h2 className='mb-0 h4-fs'>Someone just {content.type === 'course' ? 'enrolled in' : 'purchased'} {content.name} just now!</h2>
                    <span className="fs-12">{content.timeAgo}</span>
                    <p onClick={handleCheckOut} className='mt-1'>Check Out</p>
                </div>
                <div className='notification-bg-img'><img src={process.env.PUBLIC_URL + '/assets/images/icon/notification-bg-img.png'} alt="Fg Group" className='img-fluid' /></div>
            </div>
        </>
    );
}

export default NotificationDiv;
