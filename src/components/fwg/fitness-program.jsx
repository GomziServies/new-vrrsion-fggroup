import React, { useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

const FitnessProgram = () => {
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
      <section className="bg-blues">
        <div className="container-fluid">
          <div className="container px-0">
            <div className="describe text-center">
              <h1>Fitness Program</h1>
              <div className="thm-bg-clr dector mb-4 mb-md-2"></div>
            </div>
            <div className="row" id="explore">
              <div className="col-md-12 mt-lg-4 ">
                <OwlCarousel
                  loop
                  // nav
                  id="fwg-owl"
                  dots={false}
                  className="owl-theme mb-0"
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
                  <div className="item mx-md-3 mx-2">
                    <div className="blog p-0" style={{ borderRadius: "10px" }}>
                      <div className="ply position-relative">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/rtp-1.0-main.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px 10px 0px 0px" }}
                          alt="fggroup"
                        />
                        <div className="video-btn play-btn">
                          <a
                            onClick={() => openVideoModal("ffeBKisbE0Q")}
                            className="custom clickof" aria-label="Fg Group"
                          >
                            <span className="newthing">
                              <i className="fas fa-play"></i>
                            </span>
                          </a>
                        </div>
                        <div className="fly-tag">
                          <span>Advanced</span>
                        </div>
                        <div className="fly-tag1">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="main-rtp">
                        <ul
                          className="line-li d-flex pl-0"
                          style={{ listStyle: "none" }}
                        >
                          <li className="ml-0">
                            <i className="fas fa-clock"></i> 3 Months
                          </li>
                          <li>
                            <i className="fas fa-users"></i> Flexible Time
                          </li>
                          <li>
                            <i className="fas fa-comments"></i> Talk With Coach
                          </li>
                        </ul>
                        <h2 className="h4-fs">Rtp 1.0 - Weight Loss </h2>
                        <div className="mt-lg-2 mb-lg-2 rating-start">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>(4.9 / 1,040 Rating)</span>
                        </div>
                        <Link
                          to="/fitnesswithgomzi/online-rapid-weight-loss"
                          target="_blank"
                          className="btn mb-lg-2 online-btn-fwg ml-2"
                        >
                          Online
                        </Link>
                        <Link
                          to="/fitnesswithgomzi/offline-rapid-weight-loss"
                          target="_blank"
                          className="btn mb-lg-2 ml-2"
                        >
                          Offline
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-md-3 mx-2">
                    <div className="blog p-0" style={{ bordeRadius: "10px" }}>
                      <div className="ply position-relative">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/rtp-2.0-main.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px 10px 0px 0px" }}
                          alt="fggroup"
                        />
                        <div className="video-btn play-btn">
                          <a
                            onClick={() => openVideoModal("IwCe9Qt3mKY")}
                            className="custom clickof" aria-label="Fg Group"
                          >
                            <span className="newthing">
                              <i className="fas fa-play"></i>
                            </span>
                          </a>
                        </div>
                        <div className="fly-tag">
                          <span>Advanced</span>
                        </div>
                        <div className="fly-tag1">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="main-rtp">
                        <ul
                          className="line-li d-flex pl-0"
                          style={{ listStyle: "none" }}
                        >
                          <li className="ml-0">
                            <i className="fas fa-clock"></i> 3 Months
                          </li>
                          <li>
                            <i className="fas fa-users"></i> Flexible Time
                          </li>
                          <li>
                            <i className="fas fa-comments"></i> Talk With Coach
                          </li>
                        </ul>
                        <h2 className="mb-0 h4-fs">
                          RTP-2.0 Weight Management Program
                        </h2>
                        <div className="mt-lg-0 rating-start">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>(4.9 / 1,000 Rating)</span>
                        </div>
                        <Link
                          to="/fitnesswithgomzi/online-weight-management"
                          target="_blank"
                          className="btn online-btn-fwg ml-2"
                        >
                          Online
                        </Link>
                        <Link
                          to="/fitnesswithgomzi/offline-weight-management"
                          target="_blank"
                          className="btn ml-2"
                        >
                          Offline
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-md-3 mx-2">
                    <div className="blog p-0" style={{ bordeRadius: "10px" }}>
                      <div className="ply position-relative">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/rtp-3.0-main.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px 10px 0px 0px" }}
                          alt="fggroup"
                        />
                        <div className="video-btn play-btn">
                          <a
                            onClick={() => openVideoModal("_mzIsKUkcFY")}
                            className="custom clickof" aria-label="Fg Group"
                          >
                            <span className="newthing">
                              <i className="fas fa-play"></i>
                            </span>
                          </a>
                        </div>
                        <div className="fly-tag">
                          <span>Advanced</span>
                        </div>
                        <div className="fly-tag1">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="main-rtp">
                        <ul
                          className="line-li d-flex pl-0"
                          style={{ listStyle: "none" }}
                        >
                          <li className="ml-0">
                            <i className="fas fa-clock"></i> 3 Months
                          </li>
                          <li>
                            <i className="fas fa-users"></i> Flexible Time
                          </li>
                          <li>
                            <i className="fas fa-comments"></i> Talk With Coach
                          </li>
                        </ul>
                        <h2 className="mb-0 h4-fs">RTP-3.0 Clinical Diets</h2>
                        <div className="my-lg-2 rating-start">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>(4.9 / 1,000 Rating)</span>
                        </div>
                        <Link
                          to="/fitnesswithgomzi/online-clinical-diet-program"
                          target="_blank"
                          className="btn mb-lg-1 online-btn-fwg ml-2"
                        >
                          Online
                        </Link>
                        <Link
                          to="/fitnesswithgomzi/offline-clinical-diet-program"
                          target="_blank"
                          className="btn mb-lg-1 ml-2"
                        >
                          Offline
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-md-3 mx-2">
                    <div className="blog p-0" style={{ bordeRadius: "10px" }}>
                      <div className="ply position-relative">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/rtp-4.0-main.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px 10px 0px 0px" }}
                          alt="fggroup"
                        />
                        <div className="video-btn play-btn">
                          <a
                            onClick={() => openVideoModal("HxhYb_Aa0uI")}
                            className="custom clickof" aria-label="Fg Group"
                          >
                            <span className="newthing">
                              <i className="fas fa-play"></i>
                            </span>
                          </a>
                        </div>
                        <div className="fly-tag">
                          <span>Advanced</span>
                        </div>
                        <div className="fly-tag1">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="main-rtp">
                        <ul
                          className="line-li d-flex pl-0"
                          style={{ listStyle: "none" }}
                        >
                          <li className="ml-0">
                            <i className="fas fa-clock"></i> 3 Months
                          </li>
                          <li>
                            <i className="fas fa-users"></i> Flexible Time
                          </li>
                          <li>
                            <i className="fas fa-comments"></i> Talk With Coach
                          </li>
                        </ul>
                        <h2 className="mb-0 h4-fs">
                          RTP-4.0 Health And Wellness Program
                        </h2>
                        <div className="my-lg-0 rating-start">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>(4.9 / 1,000 Rating)</span>
                        </div>
                        <Link
                          to="/fitnesswithgomzi/online-corporate-fitness-program"
                          target="_blank"
                          className="btn online-btn-fwg ml-2"
                        >
                          Online
                        </Link>
                        <Link
                          to="/fitnesswithgomzi/offline-corporate-fitness-program"
                          target="_blank"
                          className="btn ml-2"
                        >
                          Offline
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-md-3 mx-2">
                    <div className="blog p-0" style={{ bordeRadius: "10px" }}>
                      <div className="ply position-relative">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/rtp-5.0-main.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px 10px 0px 0px" }}
                          alt="fggroup"
                        />
                        <div className="video-btn play-btn">
                          <a
                            onClick={() => openVideoModal("x69VsZtJoNc")}
                            className="custom clickof" aria-label="Fg Group"
                          >
                            <span className="newthing">
                              <i className="fas fa-play"></i>
                            </span>
                          </a>
                        </div>
                        <div className="fly-tag">
                          <span>Advanced</span>
                        </div>
                        <div className="fly-tag1">
                          <span>New</span>
                        </div>
                      </div>
                      <div className="main-rtp">
                        <ul
                          className="line-li d-flex pl-0"
                          style={{ listStyle: "none" }}
                        >
                          <li className="ml-0">
                            <i className="fas fa-clock"></i> 3 Months
                          </li>
                          <li>
                            <i className="fas fa-users"></i> Flexible Time
                          </li>
                          <li>
                            <i className="fas fa-comments"></i> Talk With Coach
                          </li>
                        </ul>
                        <h2 className=" h4-fs">RTP-5.0 Prp-Coaching</h2>
                        <div className="my-lg-2 rating-start">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <span>(4.9 / 1,000 Rating)</span>
                        </div>
                        <Link
                          to="/fitnesswithgomzi/online-prep-coaching-for-bodybuilding"
                          target="_blank"
                          className="btn mb-lg-2 online-btn-fwg ml-2"
                        >
                          Online
                        </Link>
                        <Link
                          to="/fitnesswithgomzi/offline-prep-coaching-for-bodybuilding"
                          target="_blank"
                          className="btn mb-lg-2 ml-2"
                        >
                          Offline
                        </Link>
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

export default FitnessProgram;
