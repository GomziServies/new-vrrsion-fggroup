import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const AllReviews = () => {
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

  const testimonials = [
    {
      name: "Divya Chauhan",
      description:
        "Divya review describes her journey in the FGIIT Diploma in Personal Training course. She discusses how the course transformed her understanding of fitness and exercise science, emphasizing the supportive instructors and in-depth curriculum that covered strength training, anatomy, and client assessments.",
      videoUrl: "OAvT2XECZq8",
      imageUrl: "/assets/images/fgiit/student-review/divya-chauhan.webp",
      date: "13 Jan 2025",
    },
    {
      name: "Bhargavraj Parmar",
      description:
        "Bhargavraj describes the Diploma in Nutrition as life-changing. In her video, she discusses how the program improved her knowledge of healthy eating habits and the role of nutrition in disease management. Bhargavraj highlights the professionalism of the instructors and the value of the course material.",
      videoUrl: "a17jKkAjQB4",
      imageUrl: "/assets/images/fgiit/student-review/bhargvaraj.webp",
      date: "28 Dec 2024",
    },
    {
      name: "Kaushik Parmar",
      description:
        "Kaushik talks about how FGIIT's Personal Training course helped him switch careers. In his review, he praises the hands-on training and detailed instruction on exercise physiology. He also shares how the course enhanced his ability to design effective fitness programs tailored to individual goals.",
      videoUrl: "IIG46Av6HQc",
      imageUrl: "/assets/images/fgiit/student-review/kp-dpt.webp",
      date: "7 Sept 2024",
    },
    {
      name: "Mohsina",
      description:
        "Mohsina shares her positive experience with FGIIT's course, mentioning how it covered everything from beginner fitness levels to advanced strength training techniques. She enjoyed the balance between classroom learning and practical application, which helped her understand client needs better.",
      videoUrl: "vbQgsE_1Fcc",
      imageUrl: "/assets/images/fgiit/student-review/mohsina.webp",
      date: "13 March 2024",
    },
    {
      name: "Satish Nishad",
      description:
        "In Satish review, he highlights how the Diploma in Personal Training at FGIIT expanded his knowledge beyond basic training techniques. He found the modules on injury prevention and rehabilitation particularly useful for working with a variety of clients safely and effectively.",
      videoUrl: "NN8TOL_pwOk",
      imageUrl: "/assets/images/fgiit/student-review/satish-dpt.webp",
      date: "23 Feb 2025",
    },
  ];

  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="col-md-12">
              <div className="covid text-center mt-3">
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
                            onClick={() => openVideoModal("IB3r7I7Z2zY")}
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
                    {/* {testimonials.map((testimonial) => {
                      return (
                        <div className="item px-2">
                          <div className="reviews mb-1">
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
                                    onClick={() =>
                                      openVideoModal(testimonial.videoUrl)
                                    }
                                    className="custom clickof"
                                  >
                                    <i className="fas fa-play"></i> Watch Video
                                  </a>
                                </div>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })} */}
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
                            onClick={() => openVideoModal("IB3r7I7Z2zY")}
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
                    {/* {testimonials.map((testimonial) => {
                      return (
                        <div className="item px-2">
                          <div className="slider-box reviews mt-1 mb-2">
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
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })} */}
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
                    <div className="item px-2">
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
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
            {/* Batch Section */}
            <div>
              <div>
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
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/batch-12.jpeg"
                        }
                        width="100%"
                        alt="Offline Batch"
                      />
                    </div>
                    <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/batch-11.jpeg"
                        }
                        width="100%"
                        alt="Offline Batch"
                      />
                    </div>
                    <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/batch-10.jpeg"
                        }
                        width="100%"
                        alt="Offline Batch"
                      />
                    </div>
                    <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/batch-9.jpeg"
                        }
                        width="100%"
                        alt="Offline Batch"
                      />
                    </div>
                    <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/batch-8.webp"
                        }
                        width="100%"
                        alt="Offline Batch"
                      />
                    </div>
                    <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/batch-7.webp"
                        }
                        width="100%"
                        alt="Offline Batch"
                      />
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
            {/* Placement Video Review */}
            {/* <div>
              <div className="d-md-block d-none">
                <div className="row mt-4">
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
                      <div className="ply1">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/t&p-review-6.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("IB3r7I7Z2zY")}
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
                            "/assets/images/fgiit/t&p-review-8.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("S9hVA3w8z8E")}
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
                            "/assets/images/fgiit/t&p-review-5.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("xAMczxGyrbc")}
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
                            "/assets/images/fgiit/t&p-review-1.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("XQuXwYE31zc")}
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
                            "/assets/images/fgiit/t&p-review-7.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("aI4wdD47mqk")}
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
                            "/assets/images/fgiit/t&p-review-3.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("298VUNwuJuM")}
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
                <div className="row pt-4 mb-4">
                  <OwlCarousel
                    loop
                    nav
                    autoplay
                    dots={false}
                    className="owl-carousel owl-theme owl-nav-1"
                    navText={[
                      '<i class="fas fa-arrow-left owl-nav-arrow"></i>',
                      '<i class="fas fa-arrow-right owl-nav-arrow"></i>',
                    ]}
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
                            "/assets/images/fgiit/t&p-review-6.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("IB3r7I7Z2zY")}
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
                            "/assets/images/fgiit/t&p-review-8.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("S9hVA3w8z8E")}
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
                            "/assets/images/fgiit/t&p-review-5.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("xAMczxGyrbc")}
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
                            "/assets/images/fgiit/t&p-review-1.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("XQuXwYE31zc")}
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
                            "/assets/images/fgiit/t&p-review-7.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("aI4wdD47mqk")}
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
                            "/assets/images/fgiit/t&p-review-3.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          alt="fggroup"
                        />

                        <div className="video-btn">
                          <a
                            onClick={() => openVideoModal("298VUNwuJuM")}
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
            </div> */}
            {/* Placement Review */}
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
                        items: 3,
                      },
                      1000: {
                        items: 3,
                      },
                    }}
                  >
                    <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-10.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div>
                    <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-11.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div>
                    <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-12.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div>
                    <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-15.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div>
                    <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-14.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div>
                    <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-4.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div>
                    <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-2.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div>
                    <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-5.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div>
                    <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-8.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div>
                  </OwlCarousel>
                </div>
              </div>
          </div>
          <div className="d-md-none d-block">
            {/* Student Review */}
            <div>
              <div>
                <div className="row pt-4 convocation-section">
                  {/* <OwlCarousel
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
                  > */}
                  <div className="col-6 px-1">
                    <img
                      className="lazy"
                      src={process.env.PUBLIC_URL + "/assets/images/img/a.webp"}
                      alt="passed out student from our academy"
                    />
                  </div>
                  <div className="col-6 px-1">
                    <img
                      className="lazy"
                      src={process.env.PUBLIC_URL + "/assets/images/img/b.webp"}
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
                      src={process.env.PUBLIC_URL + "/assets/images/img/d.webp"}
                      alt="passed out student from our academy"
                    />
                  </div>
                  {/* <div className="item px-3">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/e.webp"
                        }
                        alt="passed out student from our academy"
                      />
                    </div>
                    <div className="item px-3">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/f.webp"
                        }
                        alt="passed out student from our academy"
                      />
                    </div> */}
                  {/* </OwlCarousel> */}
                </div>
              </div>
            </div>
            {/* Batch Section */}
            <div>
              <div>
                <div className="row pt-2">
                  {/* <OwlCarousel
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
                  > */}
                  <div className="col-6 px-1">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/batch-12.jpeg"
                      }
                      width="100%"
                      alt="Offline Batch"
                    />
                  </div>
                  <div className="col-6 px-1">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/batch-11.jpeg"
                      }
                      width="100%"
                      alt="Offline Batch"
                    />
                  </div>
                  <div className="col-6 pt-2 px-1">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/batch-10.jpeg"
                      }
                      width="100%"
                      alt="Offline Batch"
                    />
                  </div>
                  <div className="col-6 pt-2 px-1">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/batch-9.jpeg"
                      }
                      width="100%"
                      alt="Offline Batch"
                    />
                  </div>
                  {/* <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/batch-8.webp"
                        }
                        width="100%"
                        alt="Offline Batch"
                      />
                    </div>
                    <div className="item px-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/batch-7.webp"
                        }
                        width="100%"
                        alt="Offline Batch"
                      />
                    </div> */}
                  {/* </OwlCarousel> */}
                </div>
              </div>
            </div>
            {/* Placement Review */}
            <div>
              <div className="row pt-2 mb-2">
                {/* <OwlCarousel
                    loop
                    nav
                    autoplay
                    dots={false}
                    className="owl-carousel owl-theme owl-nav-1"
                    navText={[
                      '<i class="fas fa-arrow-left owl-nav-arrow"></i>',
                      '<i class="fas fa-arrow-right owl-nav-arrow"></i>',
                    ]}
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
                  > */}
                <div className="col-6 px-1">
                  <img
                    className="lazy"
                    width="100%"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/placeintern/job-10.webp"
                    }
                    alt="job placement by our academy"
                  />
                </div>
                <div className="col-6 px-1">
                  <img
                    className="lazy"
                    width="100%"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/placeintern/job-11.webp"
                    }
                    alt="job placement by our academy"
                  />
                </div>
                <div className="col-6 pt-2 px-1">
                  <img
                    className="lazy"
                    width="100%"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/placeintern/job-12.webp"
                    }
                    alt="job placement by our academy"
                  />
                </div>
                <div className="col-6 pt-2 px-1">
                  <img
                    className="lazy"
                    width="100%"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/placeintern/job-15.webp"
                    }
                    alt="job placement by our academy"
                  />
                </div>
                {/* <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-14.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div>
                    <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-4.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div>
                    <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-2.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div>
                    <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-5.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div>
                    <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-8.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div> */}
                {/* </OwlCarousel> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllReviews;
