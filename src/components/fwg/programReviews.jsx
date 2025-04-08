import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ProgramReviews = () => {
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

  useEffect(() => {
    const $ = window.$;
    $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fas fa-arrow-right"></i>');
  }, []);

  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <section className="mt-md-5 mt-0">
        <div className="container-fluid">
          <div className="container">
            <div className="col-md-12">
              <div className="covid text-center mt-0">
                <h2 className="h2-fs">
                  {/* Outstanding{" "} */}
                  <span className="m-0 text-blue-color">Testimonials</span>
                </h2>
                <div className="thm-bg-clr dector mb-md-4 mb-3"></div>
              </div>
            </div>
            {/* Student Words */}
            <div>
              <div className="d-md-block d-none">
                <div className="row pt-4 pb-2">
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
                        items: 3,
                      },
                      1000: {
                        items: 3,
                      },
                    }}
                  >
                    <div className="item px-2">
                      <div className="ply1">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/student-review/student-video-review-bhargvaraj.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("a17jKkAjQB4")}
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
                    <div className="item px-2">
                      <div className="ply1">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/student-review/student-video-review-kaushik.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("IIG46Av6HQc")}
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
                    <div className="item px-2">
                      <div className="ply1">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/student-review/student-video-review-mohsina.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("vbQgsE_1Fcc")}
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
                    <div className="item px-2">
                      <div className="ply1">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/student-review/student-video-review-shatish.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("NN8TOL_pwOk")}
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
                  </OwlCarousel>
                </div>
              </div>
              <div className="d-md-none d-block">
                <div className="row">
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
                    <div className="item px-2">
                      <div className="ply1">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/student-review/student-video-review-bhargvaraj.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("a17jKkAjQB4")}
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
                    <div className="item px-2">
                      <div className="ply1">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/student-review/student-video-review-kaushik.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("IIG46Av6HQc")}
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
                    <div className="item px-2">
                      <div className="ply1">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/student-review/student-video-review-mohsina.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("vbQgsE_1Fcc")}
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
                    <div className="item px-2">
                      <div className="ply1">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/student-review/student-video-review-shatish.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("NN8TOL_pwOk")}
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
                  </OwlCarousel>
                </div>
              </div>
            </div>
            {/* Google Reviews */}
            <div>
              <div className="d-md-block d-none">
                <div className="row pt-4">
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
                        items: 2,
                      },
                      1000: {
                        items: 3,
                      },
                    }}
                  >
                    <div className="item px-2">
                      <div className="g-reviews mb-2">
                        <div className="g-reviews-text text-center">
                          <p className="text-muted mb-0">
                            {" "}
                            <i class="fas fa-quote-left left-icon"></i>
                            Its A Great Experience To Learn Nutrition With
                            FGIIT. Easy Teaching Patterns, Co-Operative
                            Faculties, This Certified Nutritionist Course Help
                            Me Lots In My Career Graph.. Thnx To FGIIT.
                            <i class="fas fa-quote-right right-icon"></i>
                          </p>
                        </div>
                        <div className="g-reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/nisha.webp"
                            }
                            alt="FG Group"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="g-reviews-rating text-center">
                          <ul className="d-flex p-0 justify-content-center mb-1 list-unstyled">
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
                          <h2 className="h6-fs">Nisha Jariwala</h2>
                        </div>
                      </div>
                    </div>
                    <div className="item px-2">
                      <div className="g-reviews mb-2">
                        <div className="g-reviews-text text-center">
                          <p className="text-muted mb-0">
                            {" "}
                            <i class="fas fa-quote-left left-icon"></i>I Am So
                            Much Happy That After 25 Years I Did Something New
                            And Good.At This Moment I Appreciate FGIIT For
                            Provide Me Best Coaching Best Support And Best
                            Friends Also.Thanks Gautam.
                            <i class="fas fa-quote-right right-icon"></i>
                          </p>
                        </div>
                        <div className="g-reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/priti.webp"
                            }
                            alt="FG Group"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="g-reviews-rating text-center">
                          <ul className="d-flex p-0 justify-content-center mb-1 list-unstyled">
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
                          <h2 className="h6-fs">Priti Jani</h2>
                        </div>
                      </div>
                    </div>
                    <div className="item px-2">
                      <div className="g-reviews mb-2">
                        <div className="g-reviews-text text-center">
                          <p className="text-muted mb-0">
                            {" "}
                            <i class="fas fa-quote-left left-icon"></i>
                            FGIIT is one of best institution in india. Just
                            because of there Training skill, individually Doubt
                            Clearance and well Knowledgeable teachers. If anyone
                            is looking for Fitness related course...
                            <i class="fas fa-quote-right right-icon"></i>
                          </p>
                        </div>
                        <div className="g-reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/vipin-kumar.webp"
                            }
                            alt="FG Group"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="g-reviews-rating text-center">
                          <ul className="d-flex p-0 justify-content-center mb-1 list-unstyled">
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
                          <h2 className="h6-fs">Vipin Kumar</h2>
                        </div>
                      </div>
                    </div>
                    <div className="item px-2">
                      <div className="g-reviews mb-2">
                        <div className="g-reviews-text text-center">
                          <p className="text-muted mb-0">
                            {" "}
                            <i class="fas fa-quote-left left-icon"></i>
                            Without Your Guidance I Never Been A Good
                            Nutritionist Thanks A Lot For Sharing Knowledge With
                            Us.
                            <i class="fas fa-quote-right right-icon"></i>
                          </p>
                        </div>
                        <div className="g-reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/pragnesh.webp"
                            }
                            alt="FG Group"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="g-reviews-rating text-center">
                          <ul className="d-flex p-0 justify-content-center mb-1 list-unstyled">
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
                          <h2 className="h6-fs">Maisuria Pragnesh</h2>
                        </div>
                      </div>
                    </div>
                    <div className="item px-2">
                      <div className="g-reviews mb-2">
                        <div className="g-reviews-text text-center">
                          <p className="text-muted mb-0">
                            {" "}
                            <i class="fas fa-quote-left left-icon"></i>
                            Awesome excellent amazing study coordinator and
                            study module am happy for value for money return
                            every single single Myth clear.
                            <i class="fas fa-quote-right right-icon"></i>
                          </p>
                        </div>
                        <div className="g-reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/grupreet.webp"
                            }
                            alt="FG Group"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="g-reviews-rating text-center">
                          <ul className="d-flex p-0 justify-content-center mb-1 list-unstyled">
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
                          <h2 className="h6-fs">Gurpreet Sidhu</h2>
                        </div>
                      </div>
                    </div>
                    <div className="item px-2">
                      <div className="g-reviews mb-2">
                        <div className="g-reviews-text text-center">
                          <p className="text-muted mb-0">
                            {" "}
                            <i class="fas fa-quote-left left-icon"></i>
                            Firstly I want to thank you Gautam sir and his team
                            It's a great time and I am happy to enrol myself in
                            FGIIT institute and I have been gained a lot of
                            knowledge from them all teachers specially...
                            <i class="fas fa-quote-right right-icon"></i>
                          </p>
                        </div>
                        <div className="g-reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/ripul-gaba.webp"
                            }
                            alt="FG Group"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="g-reviews-rating text-center">
                          <ul className="d-flex p-0 justify-content-center mb-1 list-unstyled">
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
                          <h2 className="h6-fs">Ripul Gabba</h2>
                        </div>
                      </div>
                    </div>
                    <div className="item px-2">
                      <div className="g-reviews mb-2">
                        <div className="g-reviews-text text-center">
                          <p className="text-muted mb-0">
                            {" "}
                            <i class="fas fa-quote-left left-icon"></i>
                            knowledgeable n very informative course (AAS). Thank
                            u so much FGIIT Gautam sir n other facilities…🙏🏻🙏🏻
                            <i class="fas fa-quote-right right-icon"></i>
                          </p>
                        </div>
                        <div className="g-reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/abhijeet.webp"
                            }
                            alt="FG Group"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="g-reviews-rating text-center">
                          <ul className="d-flex p-0 justify-content-center mb-1 list-unstyled">
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
                          <h2 className="h6-fs">Abhijeet</h2>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
              <div className="d-md-none d-block">
                <div className="row pt-4">
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
                    <div className="item px-2">
                      <div className="g-reviews mb-2">
                        <div className="g-reviews-text text-center">
                          <p className="text-muted mb-0">
                            {" "}
                            <i class="fas fa-quote-left left-icon"></i>
                            Its A Great Experience To Learn Nutrition With
                            FGIIT. Easy Teaching Patterns, Co-Operative
                            Faculties, This Certified Nutritionist Course Help
                            Me Lots In My Career Graph.. Thnx To FGIIT.
                            <i class="fas fa-quote-right right-icon"></i>
                          </p>
                        </div>
                        <div className="g-reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/nisha.webp"
                            }
                            alt="FG Group"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="g-reviews-rating text-center">
                          <ul className="d-flex p-0 justify-content-center mb-1 list-unstyled">
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
                          <h2 className="h6-fs">Nisha Jariwala</h2>
                        </div>
                      </div>
                    </div>
                    <div className="item px-2">
                      <div className="g-reviews mb-2">
                        <div className="g-reviews-text text-center">
                          <p className="text-muted mb-0">
                            {" "}
                            <i class="fas fa-quote-left left-icon"></i>I Am So
                            Much Happy That After 25 Years I Did Something New
                            And Good.At This Moment I Appreciate FGIIT For
                            Provide Me Best Coaching Best Support And Best
                            Friends Also.Thanks Gautam.
                            <i class="fas fa-quote-right right-icon"></i>
                          </p>
                        </div>
                        <div className="g-reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/priti.webp"
                            }
                            alt="FG Group"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="g-reviews-rating text-center">
                          <ul className="d-flex p-0 justify-content-center mb-1 list-unstyled">
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
                          <h2 className="h6-fs">Priti Jani</h2>
                        </div>
                      </div>
                    </div>
                    <div className="item px-2">
                      <div className="g-reviews mb-2">
                        <div className="g-reviews-text text-center">
                          <p className="text-muted mb-0">
                            {" "}
                            <i class="fas fa-quote-left left-icon"></i>
                            FGIIT is one of best institution in india. Just
                            because of there Training skill, individually Doubt
                            Clearance and well Knowledgeable teachers. If anyone
                            is looking for Fitness related course...
                            <i class="fas fa-quote-right right-icon"></i>
                          </p>
                        </div>
                        <div className="g-reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/vipin-kumar.webp"
                            }
                            alt="FG Group"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="g-reviews-rating text-center">
                          <ul className="d-flex p-0 justify-content-center mb-1 list-unstyled">
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
                          <h2 className="h6-fs">Vipin Kumar</h2>
                        </div>
                      </div>
                    </div>
                    <div className="item px-2">
                      <div className="g-reviews mb-2">
                        <div className="g-reviews-text text-center">
                          <p className="text-muted mb-0">
                            {" "}
                            <i class="fas fa-quote-left left-icon"></i>
                            Without Your Guidance I Never Been A Good
                            Nutritionist Thanks A Lot For Sharing Knowledge...
                            <i class="fas fa-quote-right right-icon"></i>
                          </p>
                        </div>
                        <div className="g-reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/pragnesh.webp"
                            }
                            alt="FG Group"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="g-reviews-rating text-center">
                          <ul className="d-flex p-0 justify-content-center mb-1 list-unstyled">
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
                          <h2 className="h6-fs">Maisuria Pragnesh</h2>
                        </div>
                      </div>
                    </div>
                    <div className="item px-2">
                      <div className="g-reviews mb-2">
                        <div className="g-reviews-text text-center">
                          <p className="text-muted mb-0">
                            {" "}
                            <i class="fas fa-quote-left left-icon"></i>
                            Awesome excellent amazing study coordinator and
                            study module am happy for value for money return
                            every single single Myth clear.
                            <i class="fas fa-quote-right right-icon"></i>
                          </p>
                        </div>
                        <div className="g-reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/grupreet.webp"
                            }
                            alt="FG Group"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="g-reviews-rating text-center">
                          <ul className="d-flex p-0 justify-content-center mb-1 list-unstyled">
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
                          <h2 className="h6-fs">Gurpreet Sidhu</h2>
                        </div>
                      </div>
                    </div>
                    <div className="item px-2">
                      <div className="g-reviews mb-2">
                        <div className="g-reviews-text text-center">
                          <p className="text-muted mb-0">
                            {" "}
                            <i class="fas fa-quote-left left-icon"></i>
                            Firstly I want to thank you Gautam sir and his team
                            It's a great time and I am happy to enrol myself in
                            FGIIT institute and I have been gained a lot of
                            knowledge from them all teachers specially...
                            <i class="fas fa-quote-right right-icon"></i>
                          </p>
                        </div>
                        <div className="g-reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/ripul-gaba.webp"
                            }
                            alt="FG Group"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="g-reviews-rating text-center">
                          <ul className="d-flex p-0 justify-content-center mb-1 list-unstyled">
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
                          <h2 className="h6-fs">Ripul Gabba</h2>
                        </div>
                      </div>
                    </div>
                    <div className="item px-2">
                      <div className="g-reviews mb-2">
                        <div className="g-reviews-text text-center">
                          <p className="text-muted mb-0">
                            {" "}
                            <i class="fas fa-quote-left left-icon"></i>
                            knowledgeable n very informative course (AAS). Thank
                            u so much FGIIT Gautam sir n other facilities…🙏🏻🙏🏻
                            <i class="fas fa-quote-right right-icon"></i>
                          </p>
                        </div>
                        <div className="g-reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/abhijeet.webp"
                            }
                            alt="FG Group"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="g-reviews-rating text-center">
                          <ul className="d-flex p-0 justify-content-center mb-1 list-unstyled">
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
                          <h2 className="h6-fs">Abhijeet</h2>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container d-md-block d-none">
            {/* Student Review */}
            <div>
              <div>
                <div className="row pt-4 convocation-section">
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
                        items: 2,
                      },
                      1000: {
                        items: 3,
                      },
                    }}
                  >
                    {/* <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/a.webp"
                        }
                        alt="passed out student from our academy"
                      />
                    </div>
                    <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/b.webp"
                        }
                        alt="passed out student from our academy"
                      />
                    </div>
                    <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/c.webp"
                        }
                        alt="passed out student from our academy"
                      />
                    </div>
                    <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/d.webp"
                        }
                        alt="passed out student from our academy"
                      />
                    </div>
                    <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/e.webp"
                        }
                        alt="passed out student from our academy"
                      />
                    </div>
                    <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/f.webp"
                        }
                        alt="passed out student from our academy"
                      />
                    </div> */}
                    <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/course_study_1.webp"
                        }
                        alt="passed out student from our academy"
                      />
                    </div>
                    <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/course_study_4.webp"
                        }
                        alt="passed out student from our academy"
                      />
                    </div>
                    <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/c.webp"
                        }
                        alt="passed out student from our academy"
                      />
                    </div>
                    <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/f.webp"
                        }
                        alt="passed out student from our academy"
                      />
                    </div>
                    <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/course_study_3.webp"
                        }
                        alt="passed out student from our academy"
                      />
                    </div>
                    <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/course_study_2.webp"
                        }
                        alt="passed out student from our academy"
                      />
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
          <div className="d-md-none d-block">
            {/* Student Review */}
            <div>
              <div>
                <div className="row pt-4 convocation-section">
                  <div className="col-6 px-1">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/course_study_1.webp"
                      }
                      alt="passed out student from our academy"
                    />
                  </div>
                  <div className="col-6 px-1">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/course_study_4.webp"
                      }
                      alt="passed out student from our academy"
                    />
                  </div>
                  <div className="col-6 pt-2 px-1">
                    <img
                      className="lazy"
                      src={process.env.PUBLIC_URL + "/assets/images/img/c.webp"}
                      alt="passed out student from our academy"
                    />
                  </div>
                  <div className="col-6 pt-2 px-1">
                    <img
                      className="lazy"
                      src={process.env.PUBLIC_URL + "/assets/images/img/f.webp"}
                      alt="passed out student from our academy"
                    />
                  </div>
                  <div className="col-6 pt-2 px-1">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/course_study_3.webp"
                      }
                      alt="passed out student from our academy"
                    />
                  </div>
                  <div className="col-6 pt-2 px-1">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/course_study_2.webp"
                      }
                      alt="passed out student from our academy"
                    />
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

export default ProgramReviews;
