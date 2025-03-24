import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-lazy-load-image-component/src/effects/blur.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-modal-video/css/modal-video.min.css";

const ClientsTestimonial = ({
  testimonials,
  //   name,
  //   description,
  //   videoUrl,
  //   imageUrl,
  //   date,
}) => {
  const [isOpen, setIsOpen] = useState(false); // Modal open state
  const [currentVideoUrl, setCurrentVideoUrl] = useState(""); // Current video URL state

  const openVideoModal = (url) => {
    setCurrentVideoUrl(url); // Set the video URL
    setIsOpen(true); // Open the modal
  };

  return (
    <section className="margintop fwg-master">
      <div className="container-fluid">
        <div className="container">
          <div className="covid text-center">
            <h2 className="h2-fs"> 
              Clients{" "}
              <span className="m-0 text-blue-color">Testimonials</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-4"></div>
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div
                className="blog2 p-5 p-md-3 p-lg-5 d-none d-md-block"
                style={{ borderRadius: "40px" }}
              >
                <OwlCarousel
                  loop
                  // autoplay
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
                            <div className="col-lg-8 mb-5">
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
    </section>
  );
};

export default ClientsTestimonial;
