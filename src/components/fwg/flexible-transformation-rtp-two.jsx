import React, { useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import ModalVideo from "react-modal-video";
import OwlCarousel from "react-owl-carousel";

const FlexibleTransformationRtpTwo = () => {
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

<section className="mt-5">
        <div className="container-fluid bg-light">
          <div className="container px-0 py-5">
            <div className="pb-5">
              <div className="py-md-5">
              <div className="covid text-center">
                  <h2 className="h2-fs">
                    <span className="m-0 text-blue-color">
                      global journey of{" "}
                    </span>
                    transformation
                  </h2>
                </div>
                <div className="thm-bg-clr dector mb-4"></div>
                <div className="col-md-12">
                  <div className="world-ca d-none d-md-block">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/travel.webp"
                      }
                      className="img-fluid"
                      alt="FG Group"
                    />
                  </div>
                </div>
              </div>
              <div>
                <OwlCarousel
                  dots={false}
                  loop
                  autoplay
                  id="fwg-owl"
                  className="owl-theme mb-5"
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
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/shreya.webp"
                      }
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/daksha-before.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/six4.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/43.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/44.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/45.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                </OwlCarousel>
              </div>
              <div className="mt-5 py-5 new-owl-btn">
                <OwlCarousel
                  loop
                  dots={false}
                  nav
                  id="owl-demoee"
                  className="owl-carousel owl-theme"
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
                  <div className="item m-0 m-md-4">
                    <div className="video-card">
                      <div className="video-img">
                        <div className="ply1">
                          <img
                            className=""
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/fwg/harshal-review.webp"
                            }
                            width="100%"
                            style={{ borderRadius: "10px 10px 0px 0px" }}
                            alt="client journey"
                          />
                          <div className="video-btn">
                            <a
                              onClick={() => openVideoModal("mk3_gQ4G1-E")}
                              className="custom" aria-label="Fg Group"
                            >
                              <span className="newthing">
                                <i className="fas fa-play"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="video-content">
                        <h2 className="h4-fs">Harshal Joshi</h2>
                        <p>
                          when i find anout FitnessWithGomzi's and then i join
                          and i loss around 9kg.
                        </p>
                        <a
                          onClick={() => openVideoModal("mk3_gQ4G1-E")}
                          className="custom"
                        >
                          <i className="fas fa-play mr-1"></i> Watch Video
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item m-0 m-md-4">
                    <div className="video-card">
                      <div className="video-img">
                        <div className="ply1">
                          <img
                            className=""
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/fwg/navnish.webp"
                            }
                            width="100%"
                            style={{ borderRadius: "10px 10px 0px 0px" }}
                            alt="client journey"
                          />
                          <div className="video-btn">
                            <a
                              onClick={() => openVideoModal("oq7jiXitX3o")}
                              className="custom" aria-label="Fg Group"
                            >
                              <span className="newthing">
                                <i className="fas fa-play"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="video-content">
                        <h2 className="h4-fs">Navnish Saliyan</h2>
                        <p>
                          My Told me about FitnessWithGomzi's and then i join
                          and i loss around 5kg.
                        </p>
                        <a
                          onClick={() => openVideoModal("oq7jiXitX3o")}
                          className="custom"
                        >
                          <i className="fas fa-play mr-1"></i> Watch Video
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item m-0 m-md-4">
                    <div className="video-card">
                      <div className="video-img">
                        <div className="ply1">
                          <img
                            className=""
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/fwg/ronak.webp"
                            }
                            width="100%"
                            style={{ borderRadius: "10px 10px 0px 0px" }}
                            alt="client journey"
                          />
                          <div className="video-btn">
                            <a
                              onClick={() => openVideoModal("vpCljUgyhLA")}
                              className="custom" aria-label="Fg Group"
                            >
                              <span className="newthing">
                                <i className="fas fa-play"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="video-content">
                        <h2 className="h4-fs">Ronak Bhandani</h2>
                        <p>
                          I lost around 10kg with fitnesswithgomzi. thank you
                        </p>
                        <a
                          onClick={() => openVideoModal("vpCljUgyhLA")}
                          className="custom"
                        >
                          <i className="fas fa-play mr-1"></i>
                          Watch Video
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item m-0 m-md-4">
                    <div className="video-card">
                      <div className="video-img">
                        <div className="ply1">
                          <img
                            className=""
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/fwg/vishal-patel.webp"
                            }
                            width="100%"
                            style={{ borderRadius: "10px 10px 0px 0px" }}
                            alt="client journey"
                          />
                          <div className="video-btn">
                            <a
                              onClick={() => openVideoModal("bCkuNsxOo6s")}
                              className="custom" aria-label="Fg Group"
                            >
                              <span className="newthing">
                                <i className="fas fa-play"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="video-content">
                        <h2 className="h4-fs">Vishal Patel</h2>
                        <p>I lost around 10kg thanks to ma'am and sir.</p>
                        <a
                          onClick={() => openVideoModal("bCkuNsxOo6s")}
                          className="custom"
                        >
                          <i className="fas fa-play mr-1"></i> Watch Video
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item m-0 m-md-4">
                    <div className="video-card">
                      <div className="video-img">
                        <div className="ply1 black-before">
                          <img
                            className=""
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/dimple-thumb.webp"
                            }
                            width="100%"
                            style={{
                              transform: "scale(1)",
                              borderRadius: "10px 10px 0px 0px",
                            }}
                            alt="client journey"
                          />
                          <div className="video-btn">
                            <a
                              onClick={() => openVideoModal("Bj9TQG9gg_A")}
                              className="custom" aria-label="Fg Group"
                            >
                              <span className="newthing">
                                <i className="fas fa-play"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="video-content">
                        <h2 className="h4-fs">Dimple (House Wife)</h2>
                        <p>
                          I've lost weight of around 2kg in one and a half
                          months..
                        </p>
                        <a
                          onClick={() => openVideoModal("Bj9TQG9gg_A")}
                          className="custom"
                        >
                          <i className="fas fa-play mr-1"></i> Watch Video
                        </a>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default FlexibleTransformationRtpTwo;
