import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ModalVideo from "react-modal-video";

const CareerCounselling = () => {
  const testimonials = [
    {
      name: "Dr.Gautam Jani",
      description:
        "Conversion on the 7 habits of highly effective people and the reality of freelancers vs. full-timers.",
      videoUrl: "BgOmTQCDh5E",
      imageUrl: "/assets/images/img/img-e1.webp",
      date: "13 March 2023",
    },
    {
      name: "Dt.Foram Desai",
      description:
        " Wide scope of Nutrition and Dietician by Practical example and give some advise on Business.",
      videoUrl: "3kWozUNw1Uc",
      imageUrl: "/assets/images/img/img-e4.webp",
      date: "13 March 2023",
    },
    {
      name: "Dr. Chintan Shinde",
      description:
        "Discussion on skill-based opportunities (technical skills, management skills, people skills).",
      videoUrl: "7OJp2AE4Cjk",
      imageUrl: "/assets/images/img/img-e2.webp",
      date: "13 March 2023",
    },
    {
      name: "Dr.Ishaver Patel",
      description:
        " Introduction of advanced clinical Nutrition and some Q and A activity with alumina students.",
      videoUrl: "QQ64v7ZzLAw",
      imageUrl: "/assets/images/img/img-e3.webp",
      date: "13 March 2023",
    },
  ];
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };
  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <section className="margintop student-space">
        <div className="container-fluid">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs">
                The Events in our{" "}
                <span className="m-0 text-blue-color">Coaches Words</span>
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
                    dots={false}
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
                                        onClick={() =>
                                          openVideoModal(testimonial.videoUrl)
                                        }
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
                                <div className="review-box-text ml-4">
                                  <span>{testimonial.date}</span>
                                  <h2 className="h2-fs">{testimonial.name}</h2>
                                  <p>{testimonial.description}</p>
                                  <div className="review-box-btn">
                                    <a
                                      onClick={() =>
                                        openVideoModal(testimonial.videoUrl)
                                      }
                                      className="custom clickof"
                                    >
                                      <i className="fas fa-play"></i> Watch
                                      Video
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
                                        onClick={() =>
                                          openVideoModal(testimonial.videoUrl)
                                        }
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
                                      onClick={() =>
                                        openVideoModal(testimonial.videoUrl)
                                      }
                                      className="custom clickof"
                                    >
                                      <i className="fas fa-play"></i> Watch
                                      Video
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
      </section>
    </>
  );
};

export default CareerCounselling;
