import React from 'react';

import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

const StudentWord = ({ openVideoModal }) => {

    return (
        <section className="margintop">
            <div className="container-fluid">
                <div className="container py-5">
                <div className="covid text-center">
                        <h2 className="h2-fs">The course in our <span style={{ color: '#00afef', margin: '0px' }}>Student Words</span></h2>
                    </div>
                    <div className="thm-bg-clr dector mb-4"></div>
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="blog2 p-5 p-md-3 p-lg-5 d-none d-md-block" style={{ borderRadius: '40px' }}>
                                <OwlCarousel loop autoplay dots={false} id="owl-review" className="owl-carousel owl-theme"
                                    responsive={{
                                        0: {
                                            items: 1,
                                        },
                                        600: {
                                            items: 1,
                                        },
                                        1000: {
                                            items: 1,
                                        },
                                    }}>
                                    <div className="item">
                                        <div className="slider-box">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4">
                                                    <div className="review-box">
                                                        <div>

                                                            <img src={process.env.PUBLIC_URL + '/assets/images/fgiit/review-1.webp'} className="img-fluid"
                                                                alt="FG Group" />

                                                            <div className="video-btn play-btn">
                                                                <a aria-label="Fg Group"
                                                                    onClick={() => openVideoModal('Nl48IN2zU2M')} className="custom clickof"><span
                                                                        className="newthing"><i
                                                                            className="fas fa-play"></i></span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 ">
                                                    <div className="review-box-text ml-5">
                                                        <span>13 March 2023</span>
                                                        <h2 className="h2-fs">Jayshukh kakriya</h2>
                                                        <p>As someone who was already a teacher of chemistry, I was
                                                            pleasantly surprised by how much I enjoyed the Diploma in
                                                            Nutrition course offered by FGIIT. The course not only gave me a
                                                            deeper understanding of the importance of nutrition but also
                                                            taught me how to apply...</p>
                                                        <div className="review-box-btn">
                                                            <a onClick={() => openVideoModal('Nl48IN2zU2M')}
                                                                className="custom clickof"><i className="fas fa-play"></i>Watch
                                                                Video</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slider-box">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4">
                                                    <div className="review-box">
                                                        <div>

                                                            <img src={process.env.PUBLIC_URL + '/assets/images/fgiit/review-2.webp'} className="img-fluid"
                                                                alt="FG Group" />

                                                            <div className="video-btn play-btn">
                                                                <a aria-label="Fg Group"
                                                                    onClick={() => openVideoModal('cORjpHZJScY')} className="custom clickof"><span
                                                                        className="newthing"><i
                                                                            className="fas fa-play"></i></span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="review-box-text ml-5">
                                                        <span>13 March 2023</span>
                                                        <h2 className="h2-fs">Margi Patel</h2>
                                                        <p> I can confidently say that the program exceeded my expectations.
                                                            The curriculum was well-designed
                                                            and covered all aspects of nutrition, including the latest
                                                            research and practical applications. The
                                                            faculty was knowledgeable, supportive, and passionate about
                                                            their subject...</p>
                                                        <div className="review-box-btn">
                                                            <a onClick={() => openVideoModal('cORjpHZJScY')}
                                                                className="custom clickof"><i className="fas fa-play"></i>Watch
                                                                Video</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slider-box">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4">
                                                    <div className="review-box">
                                                        <div>

                                                            <img src={process.env.PUBLIC_URL + '/assets/images/fgiit/review-3.webp'} className="img-fluid"
                                                                alt="FG Group" />

                                                            <div className="video-btn play-btn">
                                                                <a aria-label="Fg Group"
                                                                    onClick={() => openVideoModal('R9RvPn7A_dE')} className="custom clickof"><span
                                                                        className="newthing"><i
                                                                            className="fas fa-play"></i></span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="review-box-text ml-5">
                                                        <span>13 March 2023</span>
                                                        <h2 className="h2-fs">Shruti</h2>
                                                        <p>I recently completed the Diploma in Nutrition course at FGIIT and
                                                            I must say, it was an incredible
                                                            experience! The faculty was knowledgeable and passionate about
                                                            their subject, and the course content
                                                            was comprehensive and practical. I feel confident in my ability
                                                            to make a positive impact on people's
                                                            health and wellness. Thank you, FGIIT!</p>
                                                        <div className="review-box-btn">
                                                            <a onClick={() => openVideoModal('R9RvPn7A_dE')}
                                                                className="custom clickof"><i className="fas fa-play"></i>Watch
                                                                Video</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slider-box">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4">
                                                    <div className="review-box">
                                                        <div>

                                                            <img src={process.env.PUBLIC_URL + '/assets/images/fgiit/review-4.webp'} className="img-fluid"
                                                                alt="FG Group" />

                                                            <div className="video-btn play-btn">
                                                                <a aria-label="Fg Group"
                                                                    onClick={() => openVideoModal('wawwUee08ls')} className="custom clickof"><span
                                                                        className="newthing"><i
                                                                            className="fas fa-play"></i></span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="review-box-text ml-5">
                                                        <span>13 March 2023</span>
                                                        <h2 className="h2-fs">Richi </h2>
                                                        <p>As a student of FGIIT, I highly recommend the Diploma in
                                                            Nutrition Course. The curriculum is
                                                            comprehensive and the faculty is knowledgeable and supportive. I
                                                            feel confident in my abilities to pursue a
                                                            career in nutrition thanks to the excellent education I received
                                                            at FGIIT.</p>
                                                        <div className="review-box-btn">
                                                            <a onClick={() => openVideoModal('wawwUee08ls')}
                                                                className="custom clickof"><i className="fas fa-play"></i>Watch
                                                                Video</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slider-box">
                                            <div className="row align-items-center">
                                                <div className="col-lg-4">
                                                    <div className="review-box">
                                                        <div>

                                                            <img src={process.env.PUBLIC_URL + '/assets/images/fgiit/review-5.webp'} className="img-fluid"
                                                                alt="FG Group" />

                                                            <div className="video-btn play-btn">
                                                                <a aria-label="Fg Group"
                                                                    onClick={() => openVideoModal('FwvVJq1lq9M')} className="custom clickof"><span
                                                                        className="newthing"><i
                                                                            className="fas fa-play"></i></span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="review-box-text ml-5">
                                                        <span>13 March 2023</span>
                                                        <h2 className="h2-fs">Rahul</h2>
                                                        <p>
                                                            As a former student of FGIIT, I highly recommend their Diploma
                                                            In Personal Course. The
                                                            program provided me with practical skills and knowledge that I
                                                            still use today. The instructors
                                                            were knowledgeable and supportive, and the campus had a great
                                                            learning atmosphere.
                                                        </p>
                                                        <div className="review-box-btn">
                                                            <a onClick={() => openVideoModal('FwvVJq1lq9M')}
                                                                className="custom clickof"><i className="fas fa-play"></i>Watch
                                                                Video</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                            <div className="d-block d-md-none">
                                <OwlCarousel loop autoplay dots={false} id="owl-review-1" className="owl-carousel owl-theme"
                                    responsive={{
                                        0: {
                                            items: 1,
                                        },
                                        600: {
                                            items: 2,
                                        },
                                        1000: {
                                            items: 3,
                                        },
                                    }}
                                >
                                    <div className="item">
                                        <div className="slider-box">
                                            <div className="row align-items-center">
                                                <div className="col-md-4">
                                                    <div className="review-box">
                                                        <div>

                                                            <img src={process.env.PUBLIC_URL + '/assets/images/fgiit/review-1.webp'} className="img-fluid"
                                                                alt="FG Group" />

                                                            <div className="video-btn play-btn">
                                                                <a onClick={() => openVideoModal('Nl48IN2zU2M')} aria-label="Fg Group"
                                                                    data-flashy-type="video" className="custom clickof"><span
                                                                        className="newthing"><i
                                                                            className="fas fa-play"></i></span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 text-center">
                                                    <div className="review-box-text">
                                                        <span>13 March 2023</span>
                                                        <h2 className="h2-fs">Jayshukh kakriya</h2>
                                                        <p>As someone who was already a teacher of chemistry, I was
                                                            pleasantly surprised by how much I enjoyed the Diploma in
                                                            Nutrition course offered by FGIIT. The course not only gave me a
                                                            deeper understanding of the importance of nutrition but also
                                                            taught me how to apply...</p>
                                                        <div className="review-box-btn">
                                                            <a onClick={() => openVideoModal('Nl48IN2zU2M')}
                                                                className="custom clickof"><i className="fas fa-play"></i>Watch
                                                                Video</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slider-box">
                                            <div className="row align-items-center">
                                                <div className="col-md-4">
                                                    <div className="review-box">
                                                        <div>

                                                            <img src={process.env.PUBLIC_URL + '/assets/images/fgiit/review-2.webp'} className="img-fluid"
                                                                alt="FG Group" />

                                                            <div className="video-btn play-btn">
                                                                <a aria-label="Fg Group"
                                                                    onClick={() => openVideoModal('cORjpHZJScY')} className="custom clickof"><span
                                                                        className="newthing"><i
                                                                            className="fas fa-play"></i></span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 text-center">
                                                    <div className="review-box-text">
                                                        <span>13 March 2023</span>
                                                        <h2 className="h2-fs">Margi Patel</h2>
                                                        <p> I can confidently say that the program exceeded my expectations.
                                                            The curriculum was well-designed
                                                            and covered all aspects of nutrition, including the latest
                                                            research and practical applications. The
                                                            faculty was knowledgeable, supportive, and passionate about
                                                            their subject...</p>
                                                        <div className="review-box-btn">
                                                            <a onClick={() => openVideoModal('cORjpHZJScY')}
                                                                className="custom clickof"><i className="fas fa-play"></i>Watch
                                                                Video</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slider-box">
                                            <div className="row align-items-center">
                                                <div className="col-md-4">
                                                    <div className="review-box">
                                                        <div>

                                                            <img src={process.env.PUBLIC_URL + '/assets/images/fgiit/review-3.webp'} className="img-fluid"
                                                                alt="FG Group" />

                                                            <div className="video-btn play-btn">
                                                                <a aria-label="Fg Group"
                                                                    onClick={() => openVideoModal('R9RvPn7A_dE')} className="custom clickof"><span
                                                                        className="newthing"><i
                                                                            className="fas fa-play"></i></span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 text-center">
                                                    <div className="review-box-text">
                                                        <span>13 March 2023</span>
                                                        <h2 className="h2-fs">Shruti</h2>
                                                        <p>I recently completed the Diploma in Nutrition course at FGIIT and
                                                            I must say, it was an incredible
                                                            experience! The faculty was knowledgeable and passionate about
                                                            their subject, and the course content
                                                            was comprehensive and practical. I feel confident in my ability
                                                            to make a positive impact on people's
                                                            health and wellness. Thank you, FGIIT!</p>
                                                        <div className="review-box-btn">
                                                            <a onClick={() => openVideoModal('R9RvPn7A_dE')}
                                                                className="custom clickof"><i className="fas fa-play"></i>Watch
                                                                Video</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slider-box">
                                            <div className="row align-items-center">
                                                <div className="col-md-4">
                                                    <div className="review-box">
                                                        <div>

                                                            <img src={process.env.PUBLIC_URL + '/assets/images/fgiit/review-4.webp'} className="img-fluid"
                                                                alt="FG Group" />

                                                            <div className="video-btn play-btn">
                                                                <a aria-label="Fg Group"
                                                                    onClick={() => openVideoModal('wawwUee08ls')} className="custom clickof"><span
                                                                        className="newthing"><i
                                                                            className="fas fa-play"></i></span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 text-center">
                                                    <div className="review-box-text">
                                                        <span>13 March 2023</span>
                                                        <h2 className="h2-fs">Richi </h2>
                                                        <p>As a student of FGIIT, I highly recommend the Diploma in
                                                            Nutrition Course. The curriculum is
                                                            comprehensive and the faculty is knowledgeable and supportive. I
                                                            feel confident in my abilities to pursue a
                                                            career in nutrition thanks to the excellent education I received
                                                            at FGIIT.</p>
                                                        <div className="review-box-btn">
                                                            <a onClick={() => openVideoModal('wawwUee08ls')}
                                                                className="custom clickof"><i className="fas fa-play"></i>Watch
                                                                Video</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slider-box">
                                            <div className="row align-items-center">
                                                <div className="col-md-4">
                                                    <div className="review-box">
                                                        <div>

                                                            <img src={process.env.PUBLIC_URL + '/assets/images/fgiit/review-5.webp'} className="img-fluid"
                                                                alt="FG Group" />

                                                            <div className="video-btn play-btn">
                                                                <a aria-label="Fg Group"
                                                                    onClick={() => openVideoModal('FwvVJq1lq9M')} className="custom clickof"><span
                                                                        className="newthing"><i
                                                                            className="fas fa-play"></i></span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 text-center">
                                                    <div className="review-box-text">
                                                        <span>13 March 2023</span>
                                                        <h2 className="h2-fs">Rahul</h2>
                                                        <p>
                                                            As a former student of FGIIT, I highly recommend their Diploma
                                                            In Personal Course. The
                                                            program provided me with practical skills and knowledge that I
                                                            still use today. The instructors
                                                            were knowledgeable and supportive, and the campus had a great
                                                            learning atmosphere.
                                                        </p>
                                                        <div className="review-box-btn">
                                                            <a onClick={() => openVideoModal('FwvVJq1lq9M')}
                                                                className="custom clickof"><i className="fas fa-play"></i>Watch
                                                                Video</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default StudentWord;
