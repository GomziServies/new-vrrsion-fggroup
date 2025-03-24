/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { sendInquiry } from "../assets/js/utils/contact-us";
import { Modal } from "react-bootstrap";
import {
  faBook,
  faChevronLeft,
  faChevronRight,
  faDumbbell,
  faPlay,
  faRocket,
  faUserSecret,
  faWeightScale,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick/lib/slider";
import Swal from "sweetalert2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FwgFooter from "../components/partials/Footer/fwgfooter";
import ModalVideo from "react-modal-video";
import CallBtn from "../components/call-btn";
import { Helmet } from "react-helmet";

const NextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};
function FwgWebinar() {
  const canonicalUrl = window.location.href;
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    modalName: "",
    modalEmail: "",
    modalContactNumber: "",
    modalSelectedTime: "",
    modalSelectedDate: "",
    modalMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const handleOpenModal = () => {
    if (!formSubmitted) {
      setShowModal(true);
    }
  };

  const bookFreeAppointmentWithBestDietitianInquiry = async () => {
    try {
      const name = formData.modalName;
      const phoneNumber = formData.modalContactNumber;
      const email = formData.modalEmail;
      const date = formData.modalSelectedDate;
      const time = formData.modalSelectedTime;
      var message = `Hello, My name is ${name} and I want to book a free appointment with best dietitian on ${date} at ${time}.`;
      if (!name || !email || !phoneNumber) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please fill out all fields in the form.",
          confirmButtonText: "OK",
        });
        return;
      }
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "Book Free Appointment with Best Dietitian",
        message,
        window.location.href,
        null,
        null,
        null
      );
      setFormData({
        modalName: "",
        modalEmail: "",
        modalContactNumber: "",
        modalSelectedDate: "",
        modalSelectedTime: "",
      });
      handleClose();
      localStorage.setItem("formSubmitted", "true");
      setFormSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const isFormSubmitted = localStorage.getItem("formSubmitted");
    if (isFormSubmitted) {
      setFormSubmitted(true);
    }
  }, []);
  // const handleOpenModal = () => {
  //   setShowModal(true);
  // };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // Set autoplay to false to stop auto-scrolling
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
        settings: "unslick",
      },
    ],
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [medical, setMedical] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const handleApplyForInquiry = async () => {
    try {
      let modifiedMessage = `${message}\n\nCourse: ${course} \nAge: ${age} \nWeight: ${weight} \nMedical Condition: ${medical}`;
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "FWG Webinar Page Inquiry",
        modifiedMessage,
        window.location.href,
        null,
        null,
        null
      );
      setName("");
      setEmail("");
      setPhoneNumber("");
      setCourse("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };
  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };
  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse the currently active item
    } else {
      setActiveIndex(index); // Set the clicked item as active
    }
  };

  const faqItems = [
    {
      question: "What is Rapid Transformation Programme?",
      answer:
        "A rapid transformation programme allows you to take your fitness to the next level. At Fitness With Gomzi, we make it possible by giving you a customised diet plan, personalised PT sessions, consulting and analysing your bodily needs, and then giving you a fitness plan accordingly.",
    },
    {
      question: "Is Weight Loss Guaranteed?",
      answer:
        " If you are ready to dedicate yourself to your fitness journey, anything is possible with the right type of guidance and mentoring. At Fitness with Gomzi, we have it all!",
    },
    {
      question: "How can you help me in my Bodybuilding Journey ?",
      answer:
        "We have been working in the fitness industry for the last 8 years and we have seen many clients taking their bodybuilding career to the next level. Our job is to provide you with the right guidance and mentorship so that you can take your bodybuilding journey to a higher level. But if you are not ready to put in efforts and will expect results. We are sorry but it will never work this way!",
    },
    {
      question: "How can I promote a healthy environment in my office ?",
      answer:
        " With our Rapid Transformation Programme 4.0 (Corporate Wellness Program), we will send expert dietitians and nutritionist who will consult, connect and analyze your work environment, after analyzing, we will give fitness plans for every particular employees and also gave you a track record of all the employees , so that you can know who is suffering from what in your office and can take subsequent actions which can promote your employees productivity.",
    },
    {
      question: "How can I overcome my diseases with diets and exercises ?",
      answer:
        "Having the right type of diets and doing the right type of exercises can put you in a much better place in terms of health. The type of diet choices and lifestyle choices we make results in the various type of diseases and disorders in future. So fixing our lifestyle choices and food choices today will result in better tommorrow",
    },
  ];

  return (
    <body className="bg-light">
      <Helmet>
        <title>FG Group - Fwg Webinar</title>
        <meta
          name="description"
          content="purpose and objective of the event was to motivate and nurchyo the student for full year to concern filed of health and fitness."
        />
        <meta name="keyword" content="" />
        <meta property="og:title" content="FG Group - Fwg Webinar" />
        <meta
          property="og:description"
          content="purpose and objective of the event was to motivate and nurchyo the student for full year to concern filed of health and fitness."
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta property="og:url" content="https://fggroup.in/alumini-fgiit" />
        <link rel="canonical" href={{ canonicalUrl }} />
        <meta name="google-site-verification" content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K2X4NWNEP1');`}
        </script>
      </Helmet>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      {/* <WhatsappBtn
        message={"I want to start my prep coaching journey.. "}
        options={{ pageRef: true }}
      /> */}
      <CallBtn phoneNumber={"+916354051487"} />
      <section className="fwg-webinar d-none d-md-block">
        <div className="announcement-bar">
          <div className="scrolling-container">
            <div className="scrolling-text">Weight Loss Programs</div>
            <div className="scrolling-text">Weight Management Programs</div>
            <div className="scrolling-text">Prep Coaching programs</div>
            <div className="scrolling-text">Corporate wellness program</div>
            <div className="scrolling-text">Weight Loss Programs</div>
            <div className="scrolling-text">Weight Management Programs</div>
            <div className="scrolling-text">Prep Coaching programs</div>
            <div className="scrolling-text">Corporate wellness program</div>
            <div className="scrolling-text">Weight Loss Programs</div>
            <div className="scrolling-text">Weight Management Programs</div>
            <div className="scrolling-text">Prep Coaching programs</div>
            <div className="scrolling-text">Corporate wellness program</div>
          </div>
        </div>
      </section>

      <section className="fwg-webinar bg-light">
        <div className="container-fluid">
          <div className="container">
            <div className="d-none d-md-block">
              <div className="logo mx-auto text-center mt-5">
                <img src="../assets/images/img/gomzi.webp" alt="Logo" />
              </div>
              <h2 id="greenHeading" className="ff-nanito">
                <strong>
                  Are you looking to
                  <span className="text-green-color1">
                    {" "}
                    achieve your dream physique?{" "}
                  </span>
                </strong>
              </h2>
            </div>
            <div className="d-md-none d-flex align-items-center">
              <div className="logo mx-auto text-center d-flex align-items-center">
                <img src="../assets/images/img/gomzi.webp" alt="Logo" />
              </div>
              <h2 id="greenHeading" className="ff-nanito">
                <strong>
                  Are you looking to
                  <span className="text-green-color1">
                    {" "}
                    achieve your dream physique?{" "}
                  </span>
                </strong>
              </h2>
            </div>
            <h2 id="short">
              Watch the video to find out how we can help you achieve your
              fitness goals
            </h2>
            {formSubmitted ? (
              <>
                <div className="video-container mb-5">
                  <iframe
                    src="https://www.youtube.com/embed/qV5OJMQrmOk?si=5sBqsQiMUosoF_5f"
                    allow="autoplay; fullscreen"
                    allowTransparency="true"
                    allowFullScreen
                    mozallowFullScreen="true"
                    webkitallowFullScreen="true"
                    oallowFullScreen="true"
                    msallowFullScreen="true"
                  ></iframe>
                </div>
                <div className="button-container">
                  <a
                    className="button"
                    href="https://api.whatsapp.com/send?phone=6354051487&amp;text=Hello I want to know more about Fwg Webinar"
                  >
                    Book your Free 1:1 Demo With Us.
                  </a>
                </div>

                <h2 id="short">
                  {" "}
                  We are here to help you all the way through your fitness
                  journey
                </h2>
              </>
            ) : (
              <>
                <div className="position-relative d-inline-block">
                  <img
                    alt="demo"
                    src="../assets/images/landing-page/fwg-webinar.webp"
                    className="img-fluid w-100 h-auto d-block b-radious-10"
                  />
                  <div className="play-button-main">
                    <div className="thumbnail-play-button animated-icon">
                      <FontAwesomeIcon
                        icon={faPlay}
                        onClick={handleOpenModal}
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                  <img
                    class="arrow-image up-arrow"
                    src="../assets/images/webinar/up.png"
                    alt="Up Arrow"
                  />
                  <div className="button-container mt-5 mb-3">
                    <button className="button" onClick={handleOpenModal}>
                      Click to Watch Your Free Training
                    </button>
                  </div>
                  <img
                    class="arrow-image down-arrow"
                    src="../assets/images/webinar/down.png"
                    alt="Down Arrow"
                  />
                </div>
                {/* <h2 id="short">Want to shed those extra pounds, or gain some weight to look good
            in any upcoming event?</h2> */}
                <h2 id="short">
                  {" "}
                  We are here to help you all the way through your fitness
                  journey
                </h2>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="client-around-world mobile-slider-off mt-4">
        <div className="container-fluid bg-light">
          <div className="container px-0">
            <div className="pt-3">
              <div>
                <div className="demoo covid text-center">
                  <h2 className="h2-fs">
                    global journey of
                    <span className="text-green-color-franchise1">
                      {" "}
                      transformation
                    </span>
                  </h2>
                </div>
                <div className="thm-bg-clr dector"></div>
              </div>
              <div className="slider-container">
                <Slider {...settings} dots={false} className="smooth-slider">
                  <div className="item">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/t4.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/t1.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/g2.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/41.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/g3.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/t2.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/g4.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/t5.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light margintop mobile-slider-off">
        <div className="container-fluid">
          <div className="container">
            <div className="demoo covid text-center">
              <h2 className="h2-fs">
                How We works on{" "}
                <span className="text-green-color-franchise1">
                  your transformation
                </span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="slider-container">
              <Slider {...settings} dots={false} className="smooth-slider">
                <div className="item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/program-step-1.webp"
                    }
                    className="img-fluid rounded"
                    alt="Fg Group"
                  />
                </div>
                <div className="item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/program-step-3.webp"
                    }
                    className="img-fluid rounded"
                    alt="Fg Group"
                  />
                </div>
                <div className="item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/program-step-4.webp"
                    }
                    className="img-fluid rounded"
                    alt="Fg Group"
                  />
                </div>
                <div className="item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/program-step-5.webp"
                    }
                    className="img-fluid rounded"
                    alt="Fg Group"
                  />
                </div>
                <div className="item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/program-step-6.webp"
                    }
                    className="img-fluid"
                    alt="Fg Group"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid px-0 px-md-3">
          <div className="container px-0 px-md-3 mt-3">
            <div className="demoo covid text-center">
              <h2 className="h2-fs">
                How It
                <span className="text-green-color-franchise1"> Work</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-md-4 mb-2"></div>
            <div className="full-img-app">
              <div className="d-none d-md-block">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/app-screens.webp"
                  }
                  className="img-fluid"
                  alt="How it Works"
                />
              </div>
              <div className="d-block d-md-none">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/app-screens-mobile.webp"
                  }
                  className="img-fluid"
                  alt="How it Works"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop achievements-section">
        <div className="container-fluid p-0">
          <div
            className="bg-full-bd height-respo"
            style={{
              padding: "30px 0px",
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fwg/gym-img.webp`,
              backgroundAttachment: "fixed",
            }}
          >
            <div className="container">
              <div className="col-12">
                <div className="demoo mb-4 text-center">
                  <h2 className="h2-fs text-white">Achievements</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-6 text-center">
                  <span className="counter">10000</span>
                  <i className="fas fa-plus"></i>
                  <div className="tabata">
                    <p className="mt-3">Transformation</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 text-center">
                  <span className="counter">4000</span>
                  <i className="fas fa-plus"></i>
                  <div className="tabata">
                    <p className="mt-3">weight loss</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 text-center">
                  <span className="counter">2000</span>
                  <i className="fas fa-plus"></i>
                  <div className="tabata">
                    <p className="mt-3">Clinical</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 text-center">
                  <span className="counter">1000</span>
                  <i className="fas fa-plus"></i>
                  <div className="tabata">
                    <p className="mt-3">prep coaching</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 text-center">
                  <span className="counter">1000</span>
                  <i className="fas fa-plus"></i>
                  <div className="tabata">
                    <p className="mt-3">Weight gain</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 text-center">
                  <span className="counter">50</span>
                  <i className="fas fa-plus"></i>
                  <div className="tabata">
                    <p className="mt-3">corporate events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="client-around-world">
        <div className="container-fluid bg-light">
          <div className="container px-0 pt-5">
            <div className="pt-3">
              <div>
                <div className="covid demoo text-center">
                  <h2 className="h2-fs">
                    Meet Our{" "}
                    <span className="text-green-color-franchise1">Coaches</span>
                  </h2>
                </div>
                <div className="thm-bg-clr dector"></div>
              </div>
              <div className="slider-container">
                <Slider {...settings} dots={false} className="smooth-slider">
                  <div className="item">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/coaches-1.webp"
                          }
                          alt="Dietitian"
                        />
                      </div>
                      <div className="box-desc">
                        <h2 className="h5-fs"><a href="http://gcsconsultant.fggroup.in/gautam_jani_official" style={{ color: 'black', textDecoration: 'underline' }}>Dr. Gautam Jani</a></h2>
                        <p>Dietitian</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/coaches-2.webp"
                          }
                          alt="Dietitian"
                        />
                      </div>
                      <div className="box-desc">
                        <h2 className="h5-fs">Foram Desai</h2>
                        <p>Dietitian</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/coaches-6.webp"
                          }
                          alt="Trainer"
                        />
                      </div>
                      <div className="box-desc">
                        <h2 className="h5-fs">Satish Nishad</h2>
                        <p>Trainer</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/coaches-5.webp"
                          }
                          alt="Trainer"
                        />
                      </div>
                      <div className="box-desc">
                        <h2 className="h5-fs">Kaushik Jadav</h2>
                        <p>Trainer</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/landing-page/rushabh1.webp"
                          }
                          alt="Trainer"
                        />
                      </div>
                      <div className="box-desc">
                        <h2 className="h5-fs">Rushabh Joshi</h2>
                        <p>Trainer</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/landing-page/hiren-sir.webp"
                          }
                          alt="Trainer"
                        />
                      </div>
                      <div className="box-desc">
                        <h2 className="h5-fs">Hiren Kapadiya</h2>
                        <p>Trainer</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/landing-page/kinjal1.webp"
                          }
                          alt="Trainer"
                        />
                      </div>
                      <div className="box-desc">
                        <h2 className="h5-fs">Kinjal Prastagiya</h2>
                        <p>Trainer</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="box-coach shadow-sm p-4">
                      <div className="image-wrapper mb-3">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/landing-page/pathik.webp"
                          }
                          alt="Trainer"
                        />
                      </div>
                      <div className="box-desc">
                        <h2 className="h5-fs">Pathik Patel</h2>
                        <p>Trainer</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="advertisers" className="advertisers-service-sec margintop">
        <div className="container">
          <div className="demoo covid text-center">
            <h2 className="h2-fs">
              Our
              <span className="text-green-color-franchise1"> Programs</span>
            </h2>
          </div>
          <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-1 justify-content-center gap-2">
            <div className="col-md-4 mt-3">
              <div className="service-card">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faWeightScale} className="card-icon" />
                </div>
                <h2 className="h3-fs">Rtp 1.0 - Weight Loss</h2>
                <p>
                  A targeted program designed to help you shed excess weight
                  through personalized diet plans, exercise routines, and
                  lifestyle modifications tailored to your individual needs and
                  goals.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="service-card">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faWeightScale} className="card-icon" />
                </div>
                <h2 className="h3-fs">RTP-2.0 Weight Management Program</h2>
                <p>
                  A sustainable approach to maintaining your ideal weight with
                  balanced nutrition, regular physical activity, and expert
                  guidance to ensure long-term success without compromising your
                  health.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="service-card">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faWeightScale} className="card-icon" />
                </div>
                <h2 className="h3-fs">RTP-3.0 Clinical Diets</h2>
                <p>
                  Specialized diet plans crafted for individuals with specific
                  medical conditions, offering tailored nutrition strategies
                  that support treatment and promote overall well-being.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="service-card">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faWeightScale} className="card-icon" />
                </div>
                <h2 className="h3-fs">RTP-4.0 Health And Wellness Program</h2>
                <p>
                  A holistic approach to enhancing your overall health, focusing
                  on balanced nutrition, fitness, mental well-being, and
                  lifestyle habits to help you achieve optimal health.
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <div className="service-card">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faWeightScale} className="card-icon" />
                </div>
                <h2 className="h3-fs">RTP-5.0 Prp-Coaching</h2>
                <p>
                  Personalized coaching sessions with professional guidance to
                  empower you on your fitness journey, providing the motivation,
                  accountability, and support you need to reach your health and
                  fitness goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-wait grid place-content-center min-h-[100vh] bg-gray-50 fwg-webinar mt-5">
        <div className="covid-h2 covid text-center">
          <h2 className="h2-fs">
            Why Wait? Your{" "}
            <span className="text-green-color-franchise1">
              Transformation Begins Now!{" "}
            </span>
          </h2>
        </div>
        <p className="text-center" id="firstHeading">
          With our limited-period offer, achieving your dream physique has never
          been more affordable. No more guesswork—just proven methods to get the
          results you want!
        </p>
        <div className="new-card-container row justify-content-center gap-3">
          {/* First Card */}
          <div className="new-card col-md-4">
            <div className="icon-container bg-indigo-100 p-4 rounded-full mb-4">
              <FontAwesomeIcon
                icon={faUserSecret}
                size="2x"
                className="text-indigo-600 group-hover:text-green transition-colors duration-300"
              />
            </div>
            <h2 className="text-2xl h3-fs font-bold text-indigo-800 group-hover:text-green">
              Curious About the Secret?
            </h2>
            <p className="">
              Here's a hint: It's not just about working harder—it's about
              working smarter. Watch the video to discover insider tips from Dr.
              Gautam Jani, who has helped countless people achieve their fitness
              goals. These expert insights could be the key to your success!{" "}
            </p>
          </div>

          {/* Second Card */}
          <div className="new-card col-md-4">
            <div className="icon-container bg-green-100 p-4 rounded-full mb-4">
              <FontAwesomeIcon
                icon={faDumbbell}
                size="2x"
                className="text-green-600 group-hover:text-green transition-colors duration-300"
              />
            </div>
            <h2 className="text-2xl h3-fs font-bold text-green-800 group-hover:text-green">
              What You'll Learn:
            </h2>
            <p className="">
              Simple and effective tips to maximize your workout results
              Nutrition advice to boost your metabolism Personalized strategies
              to stay motivated throughout your fitness journey{" "}
            </p>
          </div>

          {/* Third Card */}
          <div className="new-card col-md-4">
            <div className="icon-container bg-red-100 p-4 rounded-full mb-4">
              <FontAwesomeIcon
                icon={faRocket}
                size="2x"
                className="text-red-600 group-hover:text-green transition-colors duration-300"
              />
            </div>
            <h2 className="text-2xl h3-fs font-bold text-red-800 group-hover:text-green">
              Ready to Make a Change?
            </h2>
            <p className="">
              Don't miss out on this opportunity to get expert guidance at an
              affordable price. Your dream body is just a click away!{" "}
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="container">
            <div className="covid-h2 covid text-center">
              <h2 className="h2-fs">
                client{" "}
                <span className="text-green-color-franchise1">
                  Video Reviews{" "}
                </span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>

            <div className="mt-md-5 mb-3">
              <div className="slider-container">
                <Slider {...settings} dots={false} className="smooth-slider">
                  <div className="item">
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
                              className="custom"
                              aria-label="Fg Group"
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
                  <div className="item">
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
                              className="custom"
                              aria-label="Fg Group"
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
                          I compete in state championships with the support of
                          FitnessWithGomzi.
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
                  <div className="item">
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
                              className="custom"
                              aria-label="Fg Group"
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
                          I Came Across This Nutrition ClassclassName Which Is
                          Fitness With Gomzi...
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
                  <div className="item">
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
                              className="custom"
                              aria-label="Fg Group"
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
                        <p>i join and i loss around 12kg in just 1.5 month.</p>
                        <button
                          onClick={() => openVideoModal("5XWZcCGaRJQ")}
                          className="custom"
                        >
                          <i className="fas fa-play mr-1"></i> Watch Video
                        </button>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light fitness-gomzi margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="col-md-12">
              <div className="row">
                <div className="col-12">
                  <div className="covid-h2 covid text-center">
                    <h2 className="h2-fs">
                      client across the{" "}
                      <span className="text-green-color-franchise1">
                        world Reviews{" "}
                      </span>
                    </h2>
                  </div>
                  <div className="thm-bg-clr dector"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="col-md-12">
                <div className="slider-container">
                  <Slider {...settings} dots={false} className="smooth-slider">
                    <div className="item">
                      <div className="new-reviwe-box p-3">
                        <div className="row">
                          <div className="col-4">
                            <div className="new-review-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/kajal.webp"
                                }
                                className="img-fluid"
                                alt="FG Group"
                              />
                            </div>
                          </div>
                          <div className="col-8 px-0">
                            <div className="new-review-content">
                              <h2 className="text-black h4-fs">Kajal</h2>
                              <ul className="d-flex p-0 mb-0 list-unstyled">
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
                          <p className="mb-4 pb-3 text-black">
                            Very effectively follow ups for diet and constant
                            watch , appreciate the way being handled from their
                            team.Reduced weight significantly.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="new-reviwe-box p-3">
                        <div className="row">
                          <div className="col-4">
                            <div className="new-review-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/ranu-img.webp"
                                }
                                className="img-fluid"
                                alt="FG Group"
                              />
                            </div>
                          </div>
                          <div className="col-8 px-0">
                            <div className="new-review-content">
                              <h2 className="text-black h4-fs">Ranu</h2>
                              <ul className="d-flex p-0 mb-0 list-unstyled">
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
                          <p className="mb-0 text-black">
                            This is the best experience for me with the help of
                            "Fitness with Gomzi". I lost my weight 12 kg in 3
                            month with daily goal setup and with daily updates.
                            I start my day with exercise and meal and I end my
                            day with satisfaction of what I did today.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="new-reviwe-box">
                        <div className="row">
                          <div className="col-4">
                            <div className="new-review-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/kinal-goti.webp"
                                }
                                className="img-fluid"
                                alt="FG Group"
                              />
                            </div>
                          </div>
                          <div className="col-8 px-0">
                            <div className="new-review-content">
                              <h2 className="text-black h4-fs">Kinal Goti</h2>
                              <ul className="d-flex p-0 mb-0 list-unstyled">
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
                          <p className="mb-0 text-black">
                            After following the diet plan provide by Fitness
                            with Gomzi, I found improvement in my health. I feel
                            more energetic.Thank you 😊
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="new-reviwe-box">
                        <div className="row">
                          <div className="col-4">
                            <div className="new-review-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/amruta.webp"
                                }
                                className="img-fluid"
                                alt="FG Group"
                              />
                            </div>
                          </div>
                          <div className="col-8 px-0">
                            <div className="new-review-content">
                              <h2 className="text-black h4-fs">Amruta</h2>
                              <ul className="d-flex p-0 mb-0 list-unstyled">
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
                          <p className="mb-0 text-black">
                            Fitness with Gomzi is great place to start your
                            weight loss program Portion control is done in great
                            way works like a charm because it is not that tough
                            to follow. I lost around 10 kgs within 2 months.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="new-reviwe-box">
                        <div className="row">
                          <div className="col-4">
                            <div className="new-review-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/ritvik-review.webp"
                                }
                                className="img-fluid"
                                alt="FG Group"
                              />
                            </div>
                          </div>
                          <div className="col-8 px-0">
                            <div className="new-review-content">
                              <h2 className="text-black h4-fs">Ritvik</h2>
                              <ul className="d-flex p-0 mb-0 list-unstyled">
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
                          <p className="mb-0 text-black">
                            It was a great experience with them. I never felt
                            that I m on a diet. I will continue it for a longer
                            period.To add in I am satisfied with the diet plans
                            and exercise plans. It was very convenient to
                            follow. And then it converted into healthy
                            lifestyle.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fwg-webinar-page-faq margintop mt-md-5 mt-0 pt-md-5 pt-0 pb-md-4 pb-0">
        <div className="container">
          <div className="covid text-center">
            <h2 className="h2-fs">
              Frequently
              <span className="m-0 text-blue-color"> Asked Questions</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
          <div className="">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-wrapper">
                <div className="faq-item">
                  <div className="faq-question">{item.question}</div>
                  <div className="icon-container">
                    <i className="fas fa-chevron-right active"></i>
                  </div>
                </div>
                <div
                  className="faq-answer active"
                  style={{ maxHeight: "none" }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light margintop">
        <div className="container-fluid">
          <div className="container blog2">
            <div className="covid mt-5">
              <h2 className="h2-fs text-center">
                We're{" "}
                <span className="text-green-color-franchise1">
                  Here To Help
                </span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row position-relative">
              <div className="col-lg-6 image-fix">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/contact.webp"
                  }
                  width="100%"
                  alt="Contact"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <p className="mb-0 mt-4">Full Name</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control fr mt-2"
                  placeholder="Enter Full Name"
                />
                <p className="mb-0 mt-4">Email Address</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control fr mt-2"
                  placeholder="Enter Email Address"
                />
                <p className="mb-0 mt-4">Phone Number</p>
                <input
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="form-control fr mt-2"
                  placeholder="Enter Phone Number"
                />
                <p className="mb-0 mt-4">What's Your Age</p>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="form-control fr mt-2"
                  placeholder="Enter Your Age"
                />
                <p className="mb-0 mt-4">What's Your Weight</p>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="form-control fr mt-2"
                  placeholder="Enter Weight"
                />
                <p className="mb-0 mt-4">
                  Are you suffering from a medical condition?
                </p>
                <select
                  value={medical}
                  onChange={(e) => setMedical(e.target.value)}
                  className="mt-2 form-control fr"
                >
                  <option value="" hidden>
                    Select condition
                  </option>
                  <option value="Diabetes">Diabetes</option>
                  <option value="Hyper tension">Hyper tension</option>
                  <option value="Obesity">Obesity</option>
                  <option value="Thyroid">Thyroid</option>
                  <option value="PCOD/PCOS">PCOD/PCOS</option>
                  <option value="other">other</option>
                  <option value="none">none</option>
                </select>
                <p className="mb-0 mt-4">Select Course</p>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="mt-2 form-control fr"
                >
                  <option value="" hidden>
                    Select Course
                  </option>
                  <option value="Diploma In Personal Training course">
                    Diploma In Personal Training course
                  </option>
                  <option value="Diploma In Nutrition course">
                    Diploma In Nutrition course
                  </option>
                  <option value="Group Instructor Workshop">
                    Group Instructor Workshop
                  </option>
                  <option value="Injury Rehabilitation Workshop">
                    Injury Rehabilitation Workshop
                  </option>
                  <option value="Advance Clinical Nutrition Workshop">
                    Advance Clinical Nutrition Workshop
                  </option>
                </select>
                <p className="mb-0 mt-4">Write Your Message</p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control fr mt-2 text-dark"
                ></textarea>
                <button
                  type="button"
                  className="btn btn-success mt-4"
                  onClick={handleApplyForInquiry}
                >
                  Apply For Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <a
          href="https://api.whatsapp.com/send?phone=6354051487&amp;text=Hello I want to know more about Fwg Webinar"
          className="w-100 schedull-btn"
        >
          <FontAwesomeIcon icon={faBook} className="mr-2 footer-icon" />
          Schedule Your Consultation With Our Expert
        </a>
      </div>
      <Modal show={showModal} onHide={handleClose} centered>
        <div className="modal-dialog m-0" role="document">
          <div className="modal-content bg-changes bg-fwg-popup">
            <Modal.Header className="p-0 border-bottom-0">
              <div className="text-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/book-appointment.webp"
                  }
                  className="img-fluid mb-2 ml-2 w-50"
                  alt="Book Free Appointment"
                />
                <h2 className="h2-fs text-white">
                  Book Free Appointment with Best Dietitian
                </h2>
              </div>
              <button
                type="button"
                className="closess closse-mobile p-0"
                onClick={handleClose}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="p-0">
                  <i className="fas fa-times text-white"></i>
                </span>
              </button>
            </Modal.Header>
            <div className="modal-body mb-0 p-0">
              <div className="text-center d-block">
                <div className="row justify-content-center mb-4">
                  <div className="col-md-11 pl-0">
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="far fa-user"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control fr"
                        name="modalName"
                        value={formData.modalName}
                        onChange={handleChange}
                        placeholder="Enter Your name"
                      />
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="fas fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control fr"
                        name="modalEmail"
                        value={formData.modalEmail}
                        onChange={handleChange}
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="fas fa-phone-alt"></i>
                      </span>
                      <input
                        type="number"
                        className="form-control fr"
                        name="modalContactNumber"
                        value={formData.modalContactNumber}
                        onChange={handleChange}
                        placeholder="Enter Your contact Number"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={bookFreeAppointmentWithBestDietitianInquiry}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <FwgFooter />
    </body>
  );
}

export default FwgWebinar;
