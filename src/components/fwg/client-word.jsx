import React from 'react';

import Slider from 'react-slick';

const ClientAcrossWord = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="mt-md-5 mt-3" style={{ backgroundColor: '#faffee' }}>
            <div className="container-fluid">
                <div className="container py-5">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="covid-h2 text-center">
                                    <h2 className='h2-fs' style={{ color: '#333' }}>client across the <span
                                        style={{ color: '#00afef', margin: '0px' }}>world
                                        Reviews</span>
                                    </h2>
                                </div>
                                <div className="thm-bg-clr dector mb-3 mb-md-5"></div>
                                <div className="world-pl d-none d-md-block"><img src={process.env.PUBLIC_URL + '/assets/images/img/plane-world.webp'} className="img-fluid" alt="FG Group" /></div>
                                <div className="world-be d-none d-md-block"><img src={process.env.PUBLIC_URL + '/assets/images/img/pin.webp'} className="img-fluid" alt="FG Group" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-md-5 mt-3">
                        <div className="col-md-12 mt-4 px-0 px-md-3">
                            <div className='slider-container'>
                                <Slider {...settings} dots={false} arrows={false} className='smooth-slider'>
                                    <div className="item m-1 m-md-3 mb-md-4 mb-3">
                                        <div className="new-reviwe-box" style={{ paddingBottom: '28px' }}  >
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="new-review-img">
                                                        <img src={process.env.PUBLIC_URL + '/assets/images/img/hiren.webp'} className="img-fluid" alt="FG Group" />
                                                    </div>
                                                </div>
                                                <div className="col-8 px-0">
                                                    <div className="new-review-content">
                                                        <h2 className="h4-fs">Hiren Jogiya</h2>
                                                        <ul className="d-flex p-0 mb-0" style={{ listStyle: 'none' }}>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="new-review-text text-center">
                                                <p className="mb-4 pb-3">Highly recommended for all fitness freak,they are
                                                    very much focused on clients result and goal,must visit once if you
                                                    really
                                                    want to loose weight & muscle building.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item m-1 m-md-3 mb-md-4 mb-3">
                                        <div className="new-reviwe-box" style={{ paddingBottom: '33px' }}>
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="new-review-img">
                                                        <img src={process.env.PUBLIC_URL + '/assets/images/img/archi.webp'} className="img-fluid" alt="FG Group" />
                                                    </div>
                                                </div>
                                                <div className="col-8 px-0">
                                                    <div className="new-review-content">
                                                        <h2 className="h4-fs">Archi garg</h2>
                                                        <ul className="d-flex p-0 mb-0" style={{ listStyle: 'none' }}>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="new-review-text text-center">
                                                <p className="mb-0">I joined Fitness with Gomzi 3 months ago and the
                                                    experience was great. I lost 8 kgs in 3 months which is absolutely great
                                                    and
                                                    also improved my height at the age of 16. Thank you Foram mam and Gautam
                                                    Sir
                                                    for the transformation.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item m-1 m-md-3 mb-md-4 mb-3">
                                        <div className="new-reviwe-box">
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="new-review-img">
                                                        <img src={process.env.PUBLIC_URL + '/assets/images/img/naitika.webp'} className="img-fluid" alt="FG Group" />
                                                    </div>
                                                </div>
                                                <div className="col-8 px-0">
                                                    <div className="new-review-content">
                                                        <h2 className="h4-fs">Naitika Patel</h2>
                                                        <ul className="d-flex p-0 mb-0" style={{ listStyle: 'none' }}>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                            <li><i className="fas fa-star"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="new-review-text text-center">
                                                <p className="mb-0">I feel very lucky and greatful to find FGIIT
                                                    institute. I am doing online dietitian course from FGIIT and All the
                                                    lectures are nicely conducted and explained by Dr Gautam Jani. Thank you
                                                    so
                                                    much Gautam sir and Foram ma'am.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ClientAcrossWord;
