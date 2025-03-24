import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

const ClientAcrossTheWorld = () => {
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

      <section className="mt-md-5 mt-3 bg-fwg-blue">
        <div className="container-fluid">
          <div className="container py-5">
            <div className="col-md-12">
              <div className="row">
                <div className="col-12">
                  <div className="covid-h2 text-center">
                    <h2 className='h2-fs' style={{ color: "#333" }}>
                      <span className="m-0 text-blue-color">Testimonials</span>
                    </h2>
                  </div>
                  <div className="thm-bg-clr dector"></div>
                  {/* <div className="world-pl d-none d-md-block">
                    {" "}
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/plane-world.webp"
                      }
                      className="img-fluid"
                      alt="FG Group"
                    />
                  </div> */}
                  {/* <div className="world-be d-none d-md-block">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/pin.webp"
                      }
                      className="img-fluid"
                      alt="FG Group"
                    />
                  </div> */}
                </div>
                <div className="col-md-12 mt-4 px-0 px-md-3">
                  <div id="indian">
                    <div className="slider-container">
                      <OwlCarousel
                        loop
                        autoPlay
                        dots={false}
                        id="owl-demo12"
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
                        <div className="item mx-md-3">
                          <img
                            className="lazy img-fluid"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/kinjal-prastagiya.webp"
                            }
                            alt="weight loss transformation"
                          />
                        </div>
                        <div className="item mx-md-3">
                          <img
                            className="lazy img-fluid"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/25.webp"
                            }
                            alt="weight loss transformation"
                          />
                        </div>
                        <div className="item mx-md-3">
                          <img
                            className="lazy img-fluid"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/26.webp"
                            }
                            alt="weight loss transformation"
                          />
                        </div>
                        <div className="item mx-md-3">
                          <img
                            className="lazy img-fluid"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/27.webp"
                            }
                            alt="weight loss transformation"
                          />
                        </div>
                        <div className="item mx-md-3">
                          <img
                            className="lazy"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/inter-3.webp"
                            }
                            alt="weight loss transformation"
                          />
                          <div className="text-center">
                            <h2 className="h5-fs mt-md-3">
                              From : <b>Hongkong</b>
                            </h2>
                          </div>
                        </div>
                        <div className="item mx-md-3">
                          <img
                            className="lazy"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/inter-1.webp"
                            }
                            alt="weight loss transformation"
                          />
                          <div className="text-center">
                            <h2 className="h5-fs mt-md-3">
                              From : <b>USA</b>
                            </h2>
                          </div>
                        </div>
                        <div className="item mx-md-3">
                          <img
                            className="lazy"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/inter-2.webp"
                            }
                            alt="weight loss transformation"
                          />
                          <div className="text-center">
                            <h2 className="h5-fs mt-md-3">
                              From : <b>USA</b>
                            </h2>
                          </div>
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-md-5 mt-3">
              <div className="col-md-12 mt-4 px-0 px-md-3" id="global">
                <div className="slider-container">
                  <OwlCarousel
                    loop
                    autoPlay
                    dots={false}
                    id="owl-demo12"
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
                    <div className="item m-1 m-md-3 mb-md-4 mb-3">
                      <div className="new-reviwe-box">
                        <div className="row">
                          <div className="col-5 px-1">
                            <div className="new-review-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/kajal.webp"
                                }
                                className="img-fluid"
                                alt="Fg Group"
                              />
                            </div>
                          </div>
                          <div className="col-7 px-0">
                            <div className="new-review-content">
                              <h2 className="h4-fs">Kajal</h2>
                              <ul
                                className="d-flex p-0 mb-0"
                                style={{ listStyle: " none" }}
                              >
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                              <p className="m-0">From : Hongkong</p>
                            </div>
                          </div>
                        </div>
                        <div className="new-review-text text-center">
                          <p className="mb-0">
                            {" "}
                            Very effectively follow ups for diet and constant
                            watch , appreciate the way being handled from their
                            team.Reduced weight significantly.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item m-1 m-md-3 mb-md-4 mb-3">
                      <div className="new-reviwe-box">
                        <div className="row">
                          <div className="col-5 px-1">
                            <div className="new-review-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/ranu-img.webp"
                                }
                                className="img-fluid"
                                alt="Fg Group"
                              />
                            </div>
                          </div>
                          <div className="col-7 px-0">
                            <div className="new-review-content">
                              <h2 className="h4-fs">Ranu</h2>
                              <ul
                                className="d-flex p-0 mb-0"
                                style={{ listStyle: "none" }}
                              >
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                              <p className="m-0">From : UAE</p>
                            </div>
                          </div>
                        </div>
                        <div className="new-review-text text-center">
                          <p className="mb-0">
                            This is the best experience for me with the help of
                            "Fitness with <span id="dots">...</span>{" "}
                          </p>
                          <div className="d-block d-md-block">
                            <span id="more">
                              <p className="m-0">
                                Gomzi". I lost my weight 12 kg in 3 month with
                                daily goal setup and with daily updates. I start
                                my day with exercise and meal and I end my day
                                with satisfaction of what I did today. I have to
                                everyday followup with FORAM MAM by whatsaap
                                group which is very easy and very good advantage
                                of that. I am very happy about my result.
                              </p>
                            </span>
                            <div className="mt-2">
                              <a onclick="myFunction()" id="myBtn">
                                Read more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item m-1 m-md-3 mb-md-4 mb-3">
                      <div className="new-reviwe-box">
                        <div className="row">
                          <div className="col-5 px-1">
                            <div className="new-review-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/kinal-goti.webp"
                                }
                                className="img-fluid"
                                alt="Fg Group"
                              />
                            </div>
                          </div>
                          <div className="col-7 px-0">
                            <div className="new-review-content">
                              <h2 className="h4-fs">Kinal Goti</h2>
                              <ul
                                className="d-flex p-0 mb-0"
                                style={{ listStyle: "none" }}
                              >
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                              <p className="m-0">From : Australia</p>
                            </div>
                          </div>
                        </div>
                        <div className="new-review-text text-center">
                          <p className="mb-0">
                            After following the diet plan provide by Fitness
                            with Gomzi, I found improvement in my health. I feel
                            more energetic.Thank you 😊
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item m-1 m-md-3 mb-md-4 mb-3">
                      <div className="new-reviwe-box">
                        <div className="row">
                          <div className="col-5 px-1">
                            <div className="new-review-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/amruta.webp"
                                }
                                className="img-fluid"
                                alt="Fg Group"
                              />
                            </div>
                          </div>
                          <div className="col-7 px-0">
                            <div className="new-review-content">
                              <h2 className="h4-fs">Amruta</h2>
                              <ul
                                className="d-flex p-0 mb-0"
                                style={{ listStyle: "none" }}
                              >
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                              <p className="m-0">From : USA</p>
                            </div>
                          </div>
                        </div>
                        <div className="new-review-text text-center">
                          <p className="mb-0">
                            Fitness with Gomzi is great place to start your
                            weight loss program. .<span id="dotss">...</span>
                          </p>
                          <div className="d-block d-md-block">
                            <span id="mores">
                              <p className="m-0">
                                Portion control is done in great way and also
                                the meal won't leave you hungry and follow up
                                with the exercise Diet plan works like a charm
                                because it is not that tough to follow. I lost
                                around 10 kgs within 2 months.
                              </p>
                            </span>
                            <div className="mt-2">
                              <a onclick="myBtnevent()" id="myBtnn">
                                Read more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item m-1 m-md-3 mb-md-4 mb-3">
                      <div className="new-reviwe-box">
                        <div className="row">
                          <div className="col-5 px-1">
                            <div className="new-review-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/ritvik-review.webp"
                                }
                                className="img-fluid"
                                alt="Fg Group"
                              />
                            </div>
                          </div>
                          <div className="col-7 px-0">
                            <div className="new-review-content">
                              <h2 className="h4-fs">Ritvik</h2>
                              <ul
                                className="d-flex p-0 mb-0"
                                style={{ listStyle: "none" }}
                              >
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i> 
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                              <p className="m-0">From : Thailand</p>
                            </div>
                          </div>
                        </div>
                        <div className="new-review-text text-center">
                          <p className="mb-0">
                            It was a great experience with them. I never felt
                            that I m on a diet.<span id="dotsr">...</span>
                          </p>
                          <div className="d-block d-md-block">
                            <span id="morer">
                              <p className="m-0">
                                {" "}
                                I will continue it for a longer period.To add in
                                I am satisfied with the diet plans and exercise
                                plans. It was very convenient to follow. And
                                then it converted into healthy lifestyle. And I
                                m very happy for my weight reduction. I got
                                transformed only in just 45 days.
                              </p>
                            </span>
                            <div className="mt-2">
                              <a onclick="myBtnevents()" id="myBtnr">
                                Read more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
                <div className="mt-md-5">
                  <div className="slider-container">
                    <OwlCarousel
                      loop
                      autoPlay
                      dots={false}
                      id="owl-demo12"
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
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets//images/fwg/harshal-review.webp"
                                }
                                width="100%"
                                style={{ borderRadius: "10px 10px 0px 0px" }}
                                alt="client journey"
                              />
                              <div className="video-btn">
                                <a
                                  onClick={() => openVideoModal("mk3_gQ4G1-E")}
                                  aria-label="Fg Group"
                                  className="custom"
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
                              when i find anout FitnessWithGomzi's and then i
                              join and i loss around 9kg.
                            </p>
                            <button
                              href
                              onClick={() => openVideoModal("mk3_gQ4G1-E")}
                              className="custom"
                            >
                              <i className="fas fa-play mr-1"></i> Watch Video
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="item m-0 m-md-4">
                        <div className="video-card">
                          <div className="video-img">
                            <div className="ply1">
                              <img
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
                                  aria-label="Fg Group"
                                  className="custom"
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
                              My Told me about FitnessWithGomzi's and then i
                              join and i loss around 5kg.
                            </p>
                            <button
                              onClick={() => openVideoModal("oq7jiXitX3o")}
                              className="custom"
                            >
                              <i className="fas fa-play mr-1"></i> Watch Video
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="item m-0 m-md-4">
                        <div className="video-card">
                          <div className="video-img">
                            <div className="ply1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/fwg/sahoo-thumbnail.webp"
                                }
                                width="100%"
                                style={{ borderRadius: "10px 10px 0px 0px" }}
                                alt="client journey"
                              />
                              <div className="video-btn">
                                <a
                                  onClick={() => openVideoModal("Z4-bhRfFfno")}
                                  aria-label="Fg Group"
                                  className="custom"
                                >
                                  <span className="newthing">
                                    <i className="fas fa-play"></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="video-content">
                            <h2 className="h4-fs">Budhadev Sahu</h2>
                            <p>
                              I compete in state championships with the support
                              of FitnessWithGomzi.
                            </p>
                            <button
                              onClick={() => openVideoModal("N4UnyZZc46s")}
                              className="custom"
                            >
                              <i className="fas fa-play mr-1"></i> Watch Video
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="item m-0 m-md-4">
                        <div className="video-card">
                          <div className="video-img">
                            <div className="ply1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/milan.webp"
                                }
                                width="100%"
                                style={{ borderRadius: "10px 10px 0px 0px" }}
                                alt="client journey"
                              />
                              <div className="video-btn">
                                <a
                                  onClick={() => openVideoModal("_sE7AxtfR_A")}
                                  aria-label="Fg Group"
                                  className="custom"
                                >
                                  <span className="newthing">
                                    <i className="fas fa-play"></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="video-content">
                            <h2 className="h4-fs">Milan Sali</h2>
                            <p>
                              I Came Across This Nutrition ClassclassName Which
                              Is Fitness With Gomzi...
                            </p>
                            <button
                              onClick={() => openVideoModal("_sE7AxtfR_A")}
                              className="custom"
                            >
                              <i className="fas fa-play mr-1"></i> Watch Video
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="item m-0 m-md-4">
                        <div className="video-card">
                          <div className="video-img">
                            <div className="ply1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/jayneel.webp"
                                }
                                width="100%"
                                style={{ borderRadius: "10px 10px 0px 0px" }}
                                alt="client journey"
                              />
                              <div className="video-btn">
                                <a
                                  onClick={() => openVideoModal("5XWZcCGaRJQ")}
                                  aria-label="Fg Group"
                                  className="custom"
                                >
                                  <span className="newthing">
                                    <i className="fas fa-play"></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="video-content">
                            <h2 className="h4-fs">Jayneel</h2>
                            <p>
                              i join and i loss around 12kg in just 1.5 month.
                            </p>
                            <button
                              onClick={() => openVideoModal("5XWZcCGaRJQ")}
                              className="custom"
                            >
                              <i className="fas fa-play mr-1"></i> Watch Video
                            </button>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-4 px-0 px-md-3" id="indi">
                <div className="row">
                  <div className="col-md-4">
                    <div className="new-reviwe-box">
                      <div className="row">
                        <div className="col-4">
                          <div className="new-review-img">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/hiren.webp"
                              }
                              className="img-fluid"
                              alt="Fg Group"
                            />
                          </div>
                        </div>
                        <div className="col-8 px-0">
                          <div className="new-review-content">
                            <h2 className="h4-fs">Hiren Jogiya</h2>
                            <ul
                              className="d-flex p-0 mb-0"
                              style={{ listStyle: "none" }}
                            >
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="new-review-text text-center">
                        <p className="mb-0">
                          Highly recommended for all fitness freak,they are very
                          much focused on clients result and goal,must visit
                          once if you really want to loose weight & muscle
                          building.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="new-reviwe-box">
                      <div className="row">
                        <div className="col-4">
                          <div className="new-review-img">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/archi.webp"
                              }
                              className="img-fluid"
                              alt="Fg Group"
                            />
                          </div>
                        </div>
                        <div className="col-8 px-0">
                          <div className="new-review-content">
                            <h2 className="h4-fs">Archi garg</h2>
                            <ul
                              className="d-flex p-0 mb-0"
                              style={{ listStyle: " none" }}
                            >
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="new-review-text text-center">
                        <p className="mb-0">
                          I joined Fitness with Gomzi 3 months ago and the
                          experience was great. I lost 8 kgs in 3 months which
                          is absolutely great and also improved my height at the
                          age of 16. Thank you Foram mam and Gautam Sir for the
                          transformation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="new-reviwe-box">
                      <div className="row">
                        <div className="col-4">
                          <div className="new-review-img">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/naitika.webp"
                              }
                              className="img-fluid"
                              alt="Fg Group"
                            />
                          </div>
                        </div>
                        <div className="col-8 px-0">
                          <div className="new-review-content">
                            <h2 className="h4-fs">Naitika Patel</h2>
                            <ul
                              className="d-flex p-0 mb-0"
                              style={{ listStyle: "none" }}
                            >
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                              <li>
                                <i className="fas fa-star"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="new-review-text text-center">
                        <p className="mb-0">
                          I feel very lucky and greatful to find FGIIT
                          institute. I am doing online dietitian course from
                          FGIIT and All the lectures are nicely conducted and
                          explained by Dr Gautam Jani. Thank you so much Gautam
                          sir and Foram ma'am.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-md-3 mt-4">
                  <div className="row">
                    <div className="col-md-4 mt-4">
                      <div className="ply1">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/weightloss_reviews.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          alt="client journey"
                        />
                        <div className="ply2">
                          <Link
                            className="custom"
                            data-flashy-type="video"
                            to="https://youtu.be/nMLl3Wq2SL4"
                          >
                            <i
                              className="far fa-play-circle text-white fs-35"
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mt-4">
                      <div className="ply1">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/jayneel.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          alt="client journey"
                        />
                        <div className="ply2">
                          <Link
                            className="custom"
                            data-flashy-type="video"
                            to="https://youtu.be/5XWZcCGaRJQ"
                          >
                            <i
                              className="far fa-play-circle text-white fs-35"
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mt-4">
                      <div className="ply1">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/weightloss_reviews42.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          alt="client journey"
                        />
                        <div className="ply2">
                          <Link
                            className="custom"
                            data-flashy-type="video"
                            to="https://youtu.be/gEKhpJ9W4IY"
                          >
                            <i
                              className="far fa-play-circle text-white fs-35"
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientAcrossTheWorld;
