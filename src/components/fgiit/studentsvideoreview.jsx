import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-lazy-load-image-component/src/effects/blur.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-modal-video/css/modal-video.min.css";

const StudentTestimonial = ({
  testimonials,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const openVideoModal = (url) => {
    setCurrentVideoUrl(url);
    setIsOpen(true);
  };

  const carouselOptions = {
    loop: true,
    autoplay: false,
    dots: false,
    nav: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <section className="margintop student-space">
      <div className="container-fluid">
        <div className="container">
          <div className="covid text-center">
            <h2 className="h2-fs">
              The course in our{" "}
              <span className="m-0 text-blue-color">Student Words</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-4"></div>
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div
                className="p-5 p-md-3 p-lg-5 d-none d-md-block"
                style={{ borderRadius: "40px" }}
              >
                <OwlCarousel
                  // loop
                  // dots={false}
                  // autoplay
                  // nav={true}
                  // navText={
                  //   '<i class="fas fa-arrow-left"></i>',
                  //   '<i class="fas fa-arrow-right"></i>',
                  // }
                  id="studentReview"
                  className="owl-carousel new-owl-btn owl-theme"
                  {...carouselOptions}
                  responsive={{
                    0: {
                      items: 1,
                    },
                    600: {
                      items: 1,
                    },
                    1000: {
                      items: 2,
                    },
                  }}
                >
                  {testimonials.map((testimonial) => {
                    return (
                      <>
                        <div className="item m-1 m-md-3">
                          <div className="reviews">
                            <div className="reviews-img">
                              <img
                                src={testimonial.imageUrl}
                                alt={`${testimonial.name} testimonial`}
                                className="lazy img-fluid"
                              />
                            </div>
                            <div className="reviews-text text-center">
                              <span className="mb-0">{testimonial.date}</span>
                              <h2 className="h6-fs">{testimonial.name}</h2>
                              <p className="text-muted mb-0">
                                {testimonial.description}
                                <div className="review-box-btn mb-3 mt-4">
                                  <a
                                    onClick={() => openVideoModal(testimonial.videoUrl)}
                                    className="custom clickof"
                                  >
                                    <i className="fas fa-play"></i> Watch Video
                                  </a>
                                </div>
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </OwlCarousel>
              </div>
              <div className="blog2 d-block d-md-none">
                <OwlCarousel
                  loop
                  autoplay
                  dots={false}
                  id="owl-review"
                  className="owl-carousel owl-theme"
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
                  }}
                >
                  {testimonials.map((testimonial) => {
                    return (
                      <div className="item">
                        <div className="slider-box">
                          <div className="row align-items-center">
                            <div className="col-lg-4">
                              <div className="review-box">
                                <div>
                                  <img
                                    src={testimonial.imageUrl}
                                    className="img-fluid"
                                    alt={`${testimonial.name} testimonial`}
                                  />
                                  <div className="video-btn play-btn">
                                    <a
                                      onClick={() => openVideoModal(testimonial.videoUrl)}
                                      className="custom clickof"
                                      aria-label="Fg Group"
                                    >
                                      <span className="newthing">
                                        <i className="fas fa-play"></i>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="review-box-text">
                                <span>{testimonial.date}</span>
                                <h2 className="h2-fs">{testimonial.name}</h2>
                                <p>{testimonial.description}</p>
                                <div className="review-box-btn">
                                  <a
                                    onClick={() => openVideoModal(testimonial.videoUrl)}
                                    className="custom clickof"
                                  >
                                    <i className="fas fa-play"></i> Watch Video
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for video */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={currentVideoUrl}
        onClose={() => setIsOpen(false)}
      />
    </section >
  );
};

export default StudentTestimonial;
