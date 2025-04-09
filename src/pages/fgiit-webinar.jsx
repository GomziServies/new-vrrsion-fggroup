/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { sendInquiry } from "../assets/js/utils/contact-us";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faChevronLeft,
  faChevronRight,
  faPlay,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import ModalVideo from "react-modal-video";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Slider from "react-slick/lib/slider";
import WhatsappBtn from "../components/whatshuppBtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FgiitFooter from "../components/partials/Footer/fgiitfooter";
import StudentStats from "../components/fgiit/studentStats";
import CallBtn from "../components/call-btn";

function FgiitWebinar() {
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const handleApplyForInquiry = async () => {
    try {
      let modifiedMessage = `${message}\n\nCourse: ${course}`;
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "FGIIT Webinar Page Inquiry",
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

  const NextArrow = ({ top, onClick }) => {
    return (
      <div
        className={`custom-arrow ${top ? "custom-arrow-top" : "custom-arrow"
          } custom-next`}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };

  // Custom Previous Arrow
  const PrevArrow = ({ top, onClick }) => {
    return (
      <div
        className={`custom-arrow ${top ? "custom-arrow-top" : "custom-arrow"
          } custom-prev`}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  };

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
    nextArrow: <NextArrow top={true} />,
    prevArrow: <PrevArrow top={true} />,
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

  const settings1 = {
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

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
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

  const settings3 = {
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

  const settings4 = {
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

  const settings5 = {
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

  const settings6 = {
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

  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);
  const [showMore5, setShowMore5] = useState(false);
  const [showMore6, setShowMore6] = useState(false);
  const [showMore7, setShowMore7] = useState(false);
  const [showMore8, setShowMore8] = useState(false);
  const [showMore9, setShowMore9] = useState(false);
  const [showMore10, setShowMore10] = useState(false);

  const [aboutShowMore, setAboutShowMore] = useState(false);
  const [meetUsShowMore, setMeetUsShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  const toggleReadMore1 = () => {
    setShowMore1(!showMore1);
  };

  const toggleReadMore2 = () => {
    setShowMore2(!showMore2);
  };

  const toggleReadMore3 = () => {
    setShowMore3(!showMore3);
  };

  const toggleReadMore4 = () => {
    setShowMore4(!showMore4);
  };

  const toggleReadMore5 = () => {
    setShowMore5(!showMore5);
  };

  const toggleReadMore6 = () => {
    setShowMore6(!showMore6);
  };

  const toggleReadMore7 = () => {
    setShowMore7(!showMore7);
  };

  const toggleReadMore8 = () => {
    setShowMore8(!showMore8);
  };

  const toggleReadMore9 = () => {
    setShowMore9(!showMore9);
  };

  const toggleReadMore10 = () => {
    setShowMore10(!showMore10);
  };

  const toggleAboutReadMore = () => {
    setAboutShowMore(!aboutShowMore);
  };

  const toggleMeetUsReadMore = () => {
    setMeetUsShowMore(!meetUsShowMore);
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
      question: "What is the exam procedure and how to give it?",
      answer:
        "You can give the exam on your phone or laptop from home and anywhere. MCQ Based Exam (100 Marks) & 2 Projects submission (25 marks each)",
    },
    {
      question: "Are You Searching For A Nutritionist Course Near Me?",
      answer:
        " Then You know where to find FGIIT now, We are the leading and foremost tutors in the health and fitness industry.",
    },
    {
      question: "Is This A Food And Nutritionist Course?",
      answer:
        "Yes, it gives you a brief about the nutritional value of diets that can help you to build your career in the field of fitness we offer basic of dietetics, Therapeutic Nutrition, Weight management, supplement, Sports Nutrition, Practical diet making, and Practical Consultation.",
    },
    {
      question: "Does Anabolic Steroid Is A Part Of The Offered CPT Course?",
      answer:
        " Yes, we give the knowledge about how steroids are used and under what circumstances one should take them. We offer Practical Module, Types of substance, What is Half-life?, Fat Loss Cycle, Muscle Building Cycle, Safety Drugs, Post Cycle Therapy, Sports Supplants, Exercise planning.",
    },
    {
      question:
        "What Is Included In Certified Tabata Course, Certified Functional Training, Certified TRX Course?",
      answer:
        "These are one the very few and Rare courses that are being offered to you and we are offering them to the best for your knowledge all over India.",
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
      <Helmet>
        <title>FG Alumina event organized on 27th August 2022 Surat</title>
        <meta
          name="description"
          content="purpose and objective of the event was to motivate and nurchyo the student for 
                full year to concern filed of health and fitness."
        />
        <meta name="keywords" content="" />
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </Helmet>
      {/* <WhatsappBtn
        message={"I want to make my career in the fitness industry.."}
        options={{ pageRef: true }}
      /> */}
      <CallBtn phoneNumber={"+916354051487"} />
      {/* <section className="fgiit-webinar">
        <div className="announcement-bar">
          <div className="scrolling-container">
            <div className="scrolling-text">Government Approved Courses</div>
            <div className="scrolling-text">
              International Valid Certification in 192+ countries
            </div>
            <div className="scrolling-text">Book A Free Demo Session</div>
            <div className="scrolling-text">Government Approved Courses</div>
            <div className="scrolling-text">
              International Valid Certification in 192+ countries
            </div>
            <div className="scrolling-text">Book A Free Demo Session</div>
            <div className="scrolling-text">Government Approved Courses</div>
            <div className="scrolling-text">
              International Valid Certification in 192+ countries
            </div>
            <div className="scrolling-text">Book A Free Demo Session</div>
            <div className="scrolling-text">Government Approved Courses</div>
            <div className="scrolling-text">
              International Valid Certification in 192+ countries
            </div>
            <div className="scrolling-text">Book A Free Demo Session</div>
          </div>
        </div>
      </section> */}
      <section className="fwg-webinar">
        <div className="container-fluid">
          <div className="container">
            <div className="d-none d-md-block">
              <div className="logo mx-auto text-center mt-5">
                <img src="../assets/images/img/fgiit.webp" alt="Logo" />
              </div>
              <h2 id="greenHeading" className="ff-nanito">
                <strong>
                  Hello Fitness Freaks! Are you ready to start your
                  <span className="text-green-color">
                    {" "}
                    fitness career journey?{" "}
                  </span>
                </strong>
              </h2>
            </div>

            <div className="d-md-none d-flex align-items-center">
              <div className="logo mx-auto text-center d-flex align-items-center">
                <img src="../assets/images/img/fgiit.webp" alt="Logo" />
              </div>
              <h2 id="greenHeading" className="ff-nanito">
                <strong>
                  Hello Fitness Freaks! Are you ready to start your
                  <span className="text-green-color">
                    {" "}
                    fitness career journey?{" "}
                  </span>
                </strong>
              </h2>
            </div>

            <h2 id="short" className="ff-nanito">
              If you are interested in pursuing fitness as a career, watch the
              video below 👇
            </h2>
            {formSubmitted ? (
              <>
                <div className="video-container">
                  <iframe
                    src="https://www.youtube.com/embed/h8-dPE7ujQk?si=cjlWhwLY_squ2zyO"
                    allow="autoplay; fullscreen"
                    allowTransparency="true"
                    allowFullScreen
                    webkitallowFullScreen="true"
                    oallowFullScreen="true"
                    msallowFullScreen="true"
                  ></iframe>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    class="arrow-image up-arrow"
                    src="../assets/images/webinar/up.png"
                    alt="Up Arrow"
                  />
                  <div className="button-container">
                    <a
                      className="button"
                      href="https://api.whatsapp.com/send?phone=6354051487&amp;text=Hello I want to know more about Fgiit Webinar"
                    >
                      Book your Free 1:1 Demo With Us.
                    </a>
                  </div>
                  <img
                    class="arrow-image down-arrow"
                    src="../assets/images/webinar/down.png"
                    alt="Down Arrow"
                  />
                </div>
                <h2 id="firstHeading" className="ff-nanito">
                  FGIIT brings you{" "}
                  <span className="text-green-color">
                    government approved and internationally valid certification{" "}
                  </span>
                  courses to excel in your desired field of interest.
                  <br />
                </h2>
              </>
            ) : (
              <>
                <div className="position-relative d-inline-block">
                  <img
                    alt="demo"
                    src="../assets/images/landing-page/fgiit-thumbnail.webp"
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
                  <div className="button-container mt-md-5 mt-3 mb-3 d-block">
                    <button
                      className="button bg-green-color"
                      onClick={handleOpenModal}
                    >
                      Click to Watch Your Free Training
                    </button>
                  </div>
                  <img
                    class="arrow-image down-arrow"
                    src="../assets/images/webinar/down.png"
                    alt="Down Arrow"
                  />
                </div>
                <h2 id="firstHeading">
                  FGIIT brings you{" "}
                  <span className="text-green-color">
                    government approved and internationally valid certification{" "}
                  </span>
                  courses to excel in your desired field of interest.
                  <br />
                </h2>
              </>
            )}
          </div>
        </div>
      </section>
      {/* What Makes Us (Desktop) */}
      <section className="margintop40 d-none d-md-block ff-nanito">
        <div className="container-fluid">
          <div className="bg-make-us-1">
            <div className="container">
              <div className="text-center mt-5">
                <h2 className="h3-fs pt-5 text-white">
                  What Makes Us Different Than Others
                </h2>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-md-11">
                  <div className="row">
                    <div className="col-xl-2 col-md-4 mt-3">
                      <div className="make-box">
                        <LazyLoadImage
                          effect="blur"
                          alt="FG Group"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/pin.png"
                          }
                          className="img-fluid mt-2"
                        />

                        <h2 className="h4-fs">International Valid</h2>
                      </div>
                    </div>
                    <div className="col-xl-2 col-md-4 mt-3">
                      <div className="make-box">
                        <LazyLoadImage
                          effect="blur"
                          alt="FG Group"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/certificate.webp"
                          }
                          className="img-fluid mt-2"
                        />

                        <h2 className="h4-fs">Government Approved</h2>
                      </div>
                    </div>
                    <div className="col-xl-2 col-md-4 mt-3">
                      <div className="make-box">
                        <LazyLoadImage
                          effect="blur"
                          alt="FG Group"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/help-desk.png"
                          }
                          className="img-fluid mt-2"
                        />

                        <h2 className="h4-fs">Lifetime Support</h2>
                      </div>
                    </div>
                    <div className="col-xl-2 col-md-4 mt-3">
                      <div className="make-box">
                        <LazyLoadImage
                          effect="blur"
                          alt="FG Group"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/job.webp"
                          }
                          className="img-fluid mt-2"
                        />

                        <h2 className="h4-fs">100% Placement</h2>
                      </div>
                    </div>
                    <div className="col-xl-2 col-md-4 mt-3">
                      <div className="make-box">
                        <LazyLoadImage
                          effect="blur"
                          alt="FG Group"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/training.png"
                          }
                          className="img-fluid mt-2"
                        />

                        <h2 className="h4-fs">10,000 + Alumni</h2>
                      </div>
                    </div>
                    <div className="col-xl-2 col-md-4 mt-3">
                      <div className="make-box">
                        <LazyLoadImage
                          effect="blur"
                          alt="FG Group"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/loan.png"
                          }
                          className="img-fluid mt-2"
                        />

                        <h2 className="h4-fs">No Cost EMI Available</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What Makes Us (Mobile) */}
      <section className="margintop d-md-none d-block ff-nanito mb-5">
        <div className="container-fluid">
          <div className="container make-main">
            <div className="text-center mt-2">
              <h2 className="text-white h4-fs">
                What Makes Us <br /> Different Than Others
              </h2>
            </div>
            <div className="row justify-content-center mt-2">
              <div className="col-md-11">
                <div className="row">
                  <div className="col-12">
                    <div className="make-box my-2">
                      <img
                        alt="FG Group"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/icon/pin.png"
                        }
                        className="img-fluid mt-2"
                      />

                      <h2 className="h4-fs">International Valid</h2>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="make-box my-2">
                      <img
                        alt="FG Group"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/certificate.webp"
                        }
                        className="img-fluid mt-2"
                      />

                      <h2 className="h4-fs">Government Approved</h2>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="make-box my-2">
                      <img
                        alt="FG Group"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/help-desk.png"
                        }
                        className="img-fluid mt-2"
                      />

                      <h2 className="h4-fs">Lifetime Support</h2>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="make-box my-2">
                      <img
                        alt="FG Group"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/job.webp"
                        }
                        className="img-fluid mt-2"
                      />

                      <h2 className="h4-fs">100% Placement</h2>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="make-box my-2">
                      <img
                        alt="FG Group"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/training.png"
                        }
                        className="img-fluid mt-2"
                      />

                      <h2 className="h4-fs">10,000 + Alumni</h2>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="make-box my-2">
                      <img
                        alt="FG Group"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/loan.png"
                        }
                        className="img-fluid mt-2"
                      />

                      <h2 className="h4-fs">No Cost EMI Available</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Courses */}
      <section className="customcounter pb-0">
        <div className="container-fluid">
          <div className="describe text-center mt-md-4 pt-md-5 mb-3">
            <div className="covid text-center">
              <h2 className="h2-fs">
                Our <span className="m-0 text-green-color-1">Courses</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-4 mb-md-2"></div>
          </div>

          <div className="col-md-12 pb-md-0 px-md-5">
            <div className="slider-container">
              <Slider {...settings} className="smooth-slider">
                <div className="item">
                  <div className="blog m-0 p-0 b-radious-10">
                    <div className="ply position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/dpt-nocost.webp"
                        }
                        width="100%"
                        className="lazy bor-radios-top-right"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.5 (1,002)</span>
                      </div>
                      <div className="mb-3">
                        <span className="blog-desc-ff mb-0">
                          This Course Helps You To Become Certified Personal
                          Trainer Which Every Client Wants. A Personal Trainer
                          Creates{" "}
                          {showMore ? (
                            <span className="m-0">
                              One-On-One Fitness Programs For Their Clients,
                              Motivating, And Guiding Them To Achieve Their
                              Goals. Clients May Wish To Lose Weight Or Gain
                              Muscle, And As A Personal Trainer, You'll Instruct
                              And Assist Them With Exercising Appropriately
                              Utilizing Exercises And Explicit Plans.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore}
                          id="myBtnn"
                          className="text-info text-left"
                        >
                          {showMore ? "Read less" : "Read more"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="blog m-0 p-0 b-radious-10">
                    <div className="ply position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/dnc-nocost.webp"
                        }
                        width="100%"
                        className="lazy bor-radios-top-right"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.5 (1,002)</span>
                      </div>
                      <div className="mb-3">
                        <span className="blog-desc-ff mb-0">
                          Diploma In A Nutritionist Course Diverse Course Where
                          We Are Teaching Our Nutritionist Students That How To
                          Make{" "}
                          {showMore1 ? (
                            <span className="m-0">
                              A Diet For Clinically Ill Patients For Fat Loss
                              And Muscle Building Motivating, And Gui ding Them
                              To Achieve Their Goals. Clients May Wish To Lose
                              Weight Or Gain Muscle, And As A Personal Trainer,
                              You'll Instruct And Assist Them With Exercising
                              Appropriately Utilizing Exercises And Explicit
                              Plans.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore1}
                          id="myBtnn"
                          className="text-info text-left"
                        >
                          {showMore1 ? "Read less" : "Read more"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="blog m-0 p-0 b-radious-10">
                    <div className="ply  position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/aas-nocost.webp"
                        }
                        width="100%"
                        className="lazy bor-radios-top-right"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.5 (1,002)</span>
                      </div>
                      <div className="mb-3">
                        <span className="blog-desc-ff mb-0">
                          Anabolic-Androgenic Steroids Are The Most Important
                          Thing To Know For Athletes These Days. In The Era,
                          Where{" "}
                          {showMore2 ? (
                            <span className="m-0">
                              Everyone Is Using Performance-Enhancing Drugs To
                              Win, You Should Not Be Left Out From The Victory
                              Or Make Any Decision That Can Harm Your Life. So
                              Our Objective Is To Spread The Knowledge Anabolic
                              Substance, Doses, Safety, And Complications To
                              Every Individual Who Is In Sports - Course For
                              Bodybuilding
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore2}
                          id="myBtnn"
                          className="text-info text-left"
                        >
                          {showMore2 ? "Read less" : "Read more"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="blog m-0 p-0 b-radious-10">
                    <div className="ply  position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-trx-band-workshop-course.webp"
                        }
                        width="100%"
                        className="lazy bor-radios-top-right"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.5 (120)</span>
                      </div>
                      <div className="mb-3">
                        <span className="blog-desc-ff mb-0">
                          Discover the benefits of TRX band training for a
                          full-body workout! Learn how to use TRX bands
                          effectively for upper and{" "}
                          {showMore3 ? (
                            <span className="m-0">
                              lower body exercises, stretching, and achieving
                              fat loss and muscle-building goals. Explore the
                              versatile world of resistance training with TRX.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore3}
                          id="myBtnn"
                          className="text-info text-left"
                        >
                          {showMore3 ? "Read less" : "Read more"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item d-none d-md-block">
                  <div className="blog m-0 p-0 b-radious-10">
                    <div className="ply  position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-tabata-workshop-course.webp"
                        }
                        width="100%"
                        className="lazy bor-radios-top-right"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.8 (125)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="blog-desc-ff d-none d-md-block mb-0">
                          Unlock the power of Tabata workouts! Discover the
                          science behind Tabata, create effective exercises and
                          circuits, target{" "}
                          {showMore4 ? (
                            <span className="m-0">
                              upper and lower body, warm up, stretch, and
                              optimize fat loss and muscle building with this
                              comprehensive guide to Tabata training.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore4}
                          id="myBtnn"
                          className="text-info text-left"
                        >
                          {showMore4 ? "Read less" : "Read more"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item d-none d-md-block">
                  <div className="blog m-0 p-0 b-radious-10">
                    <div className="ply  position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-functional-training-workshop-course.webp"
                        }
                        width="100%"
                        className="lazy bor-radios-top-right"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.8 (165)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="blog-desc-ff d-none d-md-block mb-0">
                          Embrace the world of Functional Training! Explore the
                          science behind it, learn to design effective
                          exercises, target upper{" "}
                          {showMore5 ? (
                            <span className="m-0">
                              and lower body, optimize warm-up and stretching,
                              and harness the principles of fat loss and muscle
                              building for a holistic fitness approach. Discover
                              the exercise cycles that make Functional Training
                              a game-changer.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                          .
                        </span>
                        <p
                          onClick={toggleReadMore5}
                          id="myBtnn"
                          className="text-info text-left"
                        >
                          {showMore5 ? "Read less" : "Read more"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item d-none d-md-block">
                  <div className="blog m-0 p-0 b-radious-10">
                    <div className="ply  position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-mix-martial-arts-course.webp"
                        }
                        width="100%"
                        className="lazy bor-radios-top-right"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.8 (185)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="blog-desc-ff d-none d-md-block mb-0">
                          Enter the world of Martial Arts! Master basic stances,
                          footwork, hand, and kicking techniques. Learn vital
                          skills in blocking,{" "}
                          {showMore6 ? (
                            <span className="m-0">
                              self-defense, and grappling. Discover the artistry
                              in forms or katas and the intensity of sparring.
                              Begin your journey to martial prowess today!
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore6}
                          id="myBtnn"
                          className="text-info text-left"
                        >
                          {showMore6 ? "Read less" : "Read more"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item d-none d-md-block">
                  <div className="blog m-0 p-0 b-radious-10">
                    <div className="ply  position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-powerlifting-course.webp"
                        }
                        width="100%"
                        className="lazy bor-radios-top-right"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.9 (250)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="blog-desc-ff d-none d-md-block mb-0">
                          Dive into the world of Powerlifting! Explore
                          biomechanics, strength training principles, and
                          effective programming. Learn about{" "}
                          {showMore7 ? (
                            <span className="m-0">
                              essential equipment, rules,and injury prevention.
                              Understand coaching, ethics, and legal aspects.
                              Elevate your strength game with practical training
                              insights.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore7}
                          id="myBtnn"
                          className="text-info text-left"
                        >
                          {showMore7 ? "Read less" : "Read more"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item d-none d-md-block">
                  <div className="blog p-0 b-radious-10">
                    <div className="ply position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/inrehab-nocost.webp"
                        }
                        width="100%"
                        className="lazy bor-radios-top-right"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.5 (1,002)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="blog-desc-ff d-none d-md-block mb-0">
                          This Course Basically Aims At Preventing And Treating
                          Injuries Through Several Means. Injuries That Are
                          Connected To{" "}
                          {showMore8 ? (
                            <span className="m-0">
                              Sports And Gym Can Cause Severe Pain Or Can Cause
                              Impacts On Your Body For The Rest Of Your Life.
                              The Knowledge Of Treating Them Is Equally
                              Important For An Individual As To Train And
                              Therefore, We Are Here With The Knowledge That You
                              Need To Know About Each And Everything About
                              Exercises Of Rehab, Reasons Of Rehab, Types Of
                              Injuries, And Much More.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore8}
                          id="myBtnn"
                          className="text-info text-left"
                        >
                          {showMore8 ? "Read less" : "Read more"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item d-none d-md-block">
                  <div className="blog m-0 p-0 b-radious-10">
                    <div className="ply position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/advance-clincal-nocost.webp"
                        }
                        width="100%"
                        className="lazy bor-radios-top-right"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.5 (1,002)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="blog-desc-ff d-none d-md-block mb-0">
                          Wellness Consultant Is A Course Where You Learn How To
                          Fight Diseases Like Diabetes, Thyroid, PCOS, And
                          Cancer.{" "}
                          {showMore9 ? (
                            <span className="m-0">
                              These Are The Diseases Is Can Not Be Controlled By
                              Medicine Only, You Need To Have The Support Of
                              Nutrition, Exercises, Recovery, And Rehab Parts
                              Also. There Are Many modern Research That Suggests
                              That Intermittent Fasting, low carb Diet, Keto
                              Diet, And Many Caloric Deficit Diets And Exercise
                              Approaches Are More Helpful Than Medicine Also, So
                              This Course Will Help You To Achieve And Gain
                              Knowledge About Those Kinds Of Therapies Which Are
                              Alternative Medicine Therapy.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore9}
                          id="myBtnn"
                          className="text-info text-left"
                        >
                          {showMore9 ? "Read less" : "Read more"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item d-none d-md-block">
                  <div className="blog m-0 p-0 b-radious-10">
                    <div className="ply position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/GIC-nocost.webp"
                        }
                        width="100%"
                        className="lazy bor-radios-top-right"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.5 (1,002)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="blog-desc-ff d-none d-md-block mb-0">
                          Each Exercise In A Given Tabata Workout Lasts Only
                          Four Minutes, But It Is Likely To Be One Of The
                          Longest Four Minutes{" "}
                          {showMore10 ? (
                            <span className="m-0">
                              You Have Ever Endured. The Doctor Designed A
                              Training Where Participants Gave Their Maximum
                              Effort For 20 Seconds, Then 10 Seconds For Rest.
                              They Repeated This Cycle For Four Minutes - In
                              Other Words, Eight 30-Second Cycles. That In A
                              Nutshell Is A Tabata Exercise. Forget The Gym
                              Membership And Fancy Fitness Accessories.
                              Sometimes, All You Need Is 30 Minutes And Some
                              Space.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore10}
                          id="myBtnn"
                          className="text-info text-left"
                        >
                          {showMore10 ? "Read less" : "Read more"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* Outstanding Training & Placement */}
      <section className="margnitop customcounter mb-md-0 mb-5">
        <div className="container-fluid">
          <div className="container px-md-3 px-0">
            <div className="col-md-12 pb-md-5 px-0">
              <div className="describe text-center mt-4 mb-3 px-md-0 px-1">
                <div className="covid text-center">
                  <h2 className="h2-fs">
                    Outstanding{" "}
                    <span className="m-0 text-green-color-1">
                      Training & Placement
                    </span>
                  </h2>
                </div>
                <div className="thm-bg-clr dector mb-4 mb-md-2"></div>
              </div>
              <Slider {...settings2} className="smooth-slider">
                <div className="item">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-6.webp"
                      }
                      className="b-radious-10"
                      width="100%"
                      alt="fggroup"
                    />

                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("IB3r7I7Z2zY")}
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
                <div className="item">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-8.webp"
                      }
                      className="b-radious-10"
                      width="100%"
                      alt="fggroup"
                    />

                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("S9hVA3w8z8E")}
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
                <div className="item">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-5.webp"
                      }
                      className="b-radious-10"
                      width="100%"
                      alt="fggroup"
                    />

                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("xAMczxGyrbc")}
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
                <div className="item">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-1.webp"
                      }
                      className="b-radious-10"
                      width="100%"
                      alt="fggroup"
                    />

                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("XQuXwYE31zc")}
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
                <div className="item">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-7.webp"
                      }
                      className="b-radious-10"
                      width="100%"
                      alt="fggroup"
                    />

                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("aI4wdD47mqk")}
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
                <div className="item">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-3.webp"
                      }
                      className="b-radious-10"
                      width="100%"
                      alt="fggroup"
                    />

                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("298VUNwuJuM")}
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
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* About Us */}
      <section className="margintop20 bg-blues">
        <div className="container-fluid pb-md-5 pb-3">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs">
                About <span className="m-0 text-green-color"> Us</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
            <div className="row">
              <div className="col-lg-12 order-2">
                <div className="describe">
                  <div className="d-none d-md-block">
                    <b>
                      <p className="mt-0">
                        We Started These Online Nutrition Courses In India, To
                        Make The Fitness And Nutrition Industry-Main Streamline
                        After The 10th. A Student Who Wants To Follow Their
                        Passion And Earn Money Simultaneously Can Register For
                        Our Online Nutrition Courses &amp; Online Personal
                        Training Courses. We explain the importance of the
                        Certified Fitness Trainer Course, Personal Trainer
                        Course In India, Nutritionist Course Online India.
                      </p>
                    </b>
                  </div>
                  <div className="mb-3 d-block d-md-none">
                    <p className="mb-0 text-muted">
                      We Started These Online Nutrition Courses In India, To
                      Make The Fitness And Nutrition Industry-Main Streamline
                      After The 10th. A Student Who Wants To Follow Their
                      Passion And Earn
                      {aboutShowMore ? (
                        <p className="m-0">
                          Money Simultaneously Can Register For Our Online
                          Nutrition Courses Online Personal Training Courses. We
                          explain the importance of the Certified Fitness
                          Trainer Course, Personal Trainer Course In India,
                          Nutritionist Course Online India.So, What Are The Best
                          Certifications For Personal Trainers? We Are Entitled
                          To The Crown Of Top Institute For Online Nutrition
                          Courses And Dietician Courses Online In Surat. We
                          Provide Life Experiences In Our Online Personal
                          Trainer Courses, Which You'll Be Going To Face In
                          Front Of Your Clients And Patients Which Makes Us
                          Unique From Others.
                        </p>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <p
                      onClick={toggleAboutReadMore}
                      id="myBtnrg"
                      className="mt-0 text-blue-color fw-bold"
                    >
                      {showMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 order-3">
                <div className="describe d-none d-md-block">
                  <p>
                    So, What Are The Best Certifications For Personal Trainers?
                    We Are Entitled To The Crown Of Top Institute For Online
                    Nutrition Courses And Dietician Courses Online In Surat. We
                    Provide Life Experiences In Our Online Personal Trainer
                    Courses, Which You'll Be Going To Face In Front Of Your
                    Clients And Patients Which Makes Us Unique From Others.
                  </p>
                </div>
              </div>
              <div className="row align-items-center order-3">
                <div className="col-md-12 text-center mb-lg-4 mb-md-3 mt-4">
                  <h2 className="h2-fs mb-md-1 mb-0 font-s-22">
                    Our Institute Accreditation
                  </h2>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  <div className="d-none d-md-block">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/all-logo.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="logo"
                    />
                  </div>
                  <div className="d-block d-md-none">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/mobile-all-logo.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Student */}
      <section className="customcounter pt-md-3 mobile-slider-off">
        <div className="container-fluid px-md-4 px-0">
          <div className="describe text-center mb-3">
            <div className="covid text-center">
              <h2 className="h2-fs">
                Our <span className="m-0 text-green-color-1">Students</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-4 mb-md-2"></div>
          </div>

          <div className="col-md-12 px-md-5">
            <Slider {...settings3} className="smooth-slider">
              <div className="item d-md-block d-none">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/fgiit/new-1.2.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              {/* <div className="item d-md-block d-none">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/dpt-book-4.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div> */}
              <div className="item">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/fgiit/new-1.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/cpt-certi-7.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/cpt-certi-8.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/cpt-certi-6.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* Our Batch */}
      <section className="customcounter paddingbottom60 mobile-slider-off d-md-none d-block">
        <div className="container-fluid px-md-3 px-0">
          <div className="describe text-center mt-4 mb-3 d-none">
            <h2 className="h2-fs">
              Our <span className="m-0 text-green-color-1">Batch</span>
            </h2>
            <div className="thm-bg-clr dector mb-4 mb-md-2"></div>
          </div>

          <div className="col-md-12 px-md-5">
            <Slider {...settings1} className="smooth-slider">
              <div className="item">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/fgiit/batch-7.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item d-none">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/fgiit/batch-8.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/fgiit/batch-9.jpeg"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item d-none">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/batch-10.jpeg"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/batch-11.jpeg"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/batch-12.jpeg"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* Order your Books */}
      <section className="customcounter py-md-5 mobile-slider-off">
        <div className="container-fluid px-md-4 px-0">
          <div className="describe text-center mb-3 mt-md-3">
            <div className="demoo text-center mt-md-4">
              <h2 className="h2-fs">
                Order your book and get it{" "}
                <span className="m-0 text-green-color-1">
                  Delivered To Your Home
                </span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-4 mb-md-2"></div>
          </div>

          <div className="col-md-12 px-md-5">
            <Slider {...settings6} className="smooth-slider">
              <div className="item">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/aas-book-1.webp"
                  }
                  width="100%"
                  alt="Books"
                />
              </div>
              <div className="item">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/dnc-book-6.webp"
                  }
                  width="100%"
                  alt="Books"
                />
              </div>
              <div className="item">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/mix-book-1.webp"
                  }
                  width="100%"
                  alt="Books"
                />
              </div>
              <div className="item">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/dnc-book-5.webp"
                  }
                  width="100%"
                  alt="Books"
                />
              </div>
              <div className="item d-md-block d-none">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/dpt-book-4.webp"
                  }
                  width="100%"
                  alt="Books"
                />
              </div>
              <div className="item d-md-block d-none">
                <img
                  className="lazy b-radious-10"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/dnc-book-3.webp"
                  }
                  width="100%"
                  alt="Books"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* Our Student */}
      <StudentStats />
      {/* Placement Review */}
      <section className="customcounter mobile-slider-off">
        <div className="container-fluid px-md-4 px-0">
          <div className="describe text-center mt-4 mb-3">
            <div className="covid text-center">
              <h2 className="h2-fs">
                Placement <span className="m-0 text-green-color-1">Review</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-4 mb-md-2"></div>
          </div>

          <div className="col-md-12 px-md-5 pb-md-5">
            <Slider {...settings4} className="smooth-slider">
              <div className="item">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/placeintern/job-10.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/placeintern/job-11.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/placeintern/job-12.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/placeintern/job-15.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/placeintern/job-14.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/placeintern/job-4.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/placeintern/job-2.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/placeintern/job-5.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item d-md-block d-none">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/placeintern/job-8.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* Meet your Instructors */}
      <section className="mt-md-0 mt-4">
        <div className="container-fluid">
          <div className="container">
            <div className="describe text-center mt-4 mb-3">
              <div className="covid text-center">
                <h2 className="h2-fs">
                  Meet your{" "}
                  <span className="m-0 text-green-color-1">Instructors</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-4 mb-md-2"></div>
            </div>

            <div className="row mt-md-5">
              <div className="col-md-4 mt-md-0 mt-4">
                <div className="reviews">
                  <div className="reviews-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/coaches-1.webp"
                      }
                      alt="FG Group"
                      className="lazy img-fluid"
                    />
                  </div>

                  <div className="reviews-text text-center">
                    <h2 className="h6-fs"><a href="http://gcsconsultant.fggroup.in/gautam_jani_official" style={{ color: 'black', textDecoration: 'underline' }}>Dr. Gautam Jani</a></h2>
                    <p className="text-muted">
                      Founder & CEO of FG Group / CEO GCS PVT LTD / Core member
                      of INPTA{" "}
                    </p>
                    <p className="text-muted mb-0">
                      He finished his Civil Engineer and turned fitness
                      enthusiast in 2014 began his personal training journey in
                      Gujarat, India, in 2016. Certified by ACSM,ISSA, and VLCC.
                      he{" "}
                      {meetUsShowMore ? (
                        <span className="m-0">
                          specializes in Clinical and weight loss nutrition,
                          Strength Training, Exercise Science, and Performance
                          Enhancement Drugs. In 2019 finished his MBA for better
                          training and placement services for their student of
                          FGIIT. In 2024, he earned his Ph.D. in Health &
                          Fitness from Thames university. As the Founder of
                          FGIIT, Gautam is dedicated to promoting holistic
                          well-being through personalized training and
                          nutritional guidance.{" "}
                        </span>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <p
                      onClick={toggleMeetUsReadMore}
                      id="myBtnn"
                      className="text-info text-center mt-0"
                    >
                      {meetUsShowMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
                <div className="reviews">
                  <div className="reviews-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/coaches-2.webp"
                      }
                      alt="FG Group"
                      className="lazy img-fluid"
                    />
                  </div>
                  <div className="reviews-text text-center">
                    <h2 className="h6-fs">Dt. Foram Desai</h2>
                    <p className="text-muted">
                      Best Dietician & Founder at FGIIT{" "}
                    </p>
                    <p className="text-muted mb-0">
                      {" "}
                      Ms. Foram Desai is a sport dietitian trainer and Taekwondo
                      4 Dan Black Belt holder. She has an experience of 10 years
                      coaching Taekwondo and Head faculty in Ryan International
                      School .She has achieved certificates from ACSM, ISSA and
                      VLCC.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
                <div className="reviews">
                  <div className="reviews-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/chirag-pandey.webp"
                      }
                      alt="FG Group"
                      className="lazy img-fluid"
                    />
                  </div>
                  <div className="reviews-text text-center">
                    <h2 className="h6-fs">PT. Chirag Pandey</h2>
                    <p className="text-muted my-0">
                      Master Trainer & Faculty at FGIIT{" "}
                    </p>
                    <p className="text-muted mb-0">
                      {" "}
                      Mr. Chirag is a Mechanical engineer. By passion he is a
                      Power Lifter, Bodybuilder, and Nutritionist and had
                      started practicing it in the year 2017. He is Senior
                      Faculty of FGIIT firm established in 2018. He has achieved
                      Certification from FGIIT, NSDC, SPEFl-SC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our all demo Certificates */}
      <section className="margintop marginbottom90-1 mobile-slider-off">
        <div className="container-fluid">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs">
                our all demo
                <span className="m-0 text-green-color"> Certificates</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
            <Slider {...settings5} className="smooth-slider">
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/cpt_demo.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />
                <div className="text-center mt-3">
                  <h2 className="font-s-16 h4-fs">
                    Diploma In Personal Training
                  </h2>
                </div>
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/cnc_demo.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />
                <div className="text-center mt-3">
                  <h2 className="font-s-16 h4-fs">Diploma In Nutrition</h2>
                </div>
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/TRX-band-workshop-certificate.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />

                <div className="text-center mt-3">
                  <h2 className="font-s-16 h4-fs">TRX Band Workshop</h2>
                </div>
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/Tabata-Workshop-certificate.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />

                <div className="text-center mt-3">
                  <h2 className="font-s-16 h4-fs">Tabata Workshop</h2>
                </div>
              </div>
              <div className="item d-md-block d-none">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/Functional-Training-Workshop-certificate.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />

                <div className="text-center mt-3">
                  <h2 className="font-s-16 h4-fs">
                    Functional Training Workshop
                  </h2>
                </div>
              </div>
              <div className="item d-md-block d-none">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/Mix-Martial-Arts-Workshop-certificate.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />

                <div className="text-center mt-3">
                  <h2 className="font-s-16 h4-fs">Mix Martial Arts Workshop</h2>
                </div>
              </div>
              <div className="item d-md-block d-none">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/Powerlifting-Coach-Workshop-certificate.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />

                <div className="text-center mt-3">
                  <h2 className="font-s-16 h4-fs">
                    Powerlifting Coach Workshop
                  </h2>
                </div>
              </div>
              <div className="item d-md-block d-none">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/aas_demo.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />

                <div className="text-center mt-3">
                  <h2 className="font-s-16 h4-fs">
                    Anabolic Androgenic Steroids
                  </h2>
                </div>
              </div>
              <div className="item d-md-block d-none">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/recorded-session-certificate-5.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />

                <div className="text-center mt-3">
                  <h2 className="font-s-16 h4-fs">
                    Injury Rehabilitation Workshop
                  </h2>
                </div>
              </div>
              <div className="item d-md-block d-none">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/recorded-session-certificate-6.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />

                <div className="text-center mt-3">
                  <h2 className="font-s-16 h4-fs">
                    Advance Clinical Nutrition Workshop
                  </h2>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* FAQ's */}
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

      {/* Help */}
      <section className="margintop40">
        <div className="container-fluid">
          <div className="container blog2">
            <div className="covid mt-5">
              <div className="covid text-center">
                <h2 className="h2-fs text-center text-333-color">
                  We're{" "}
                  <span className="m-0 text-green-color">Here To Help</span>
                </h2>
              </div>
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
                  {/* <option value="Advance Clinical Nutrition Workshop">
                    Advance Clinical Nutrition Workshop
                  </option> */}
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
      {/* Fixed Line */}
      <div>
        <a
          // href="/fgiit-demo-session"
          href="https://api.whatsapp.com/send?phone=6354051487&amp;text=Hello I want to know more about Fgiit Webinar"
          className="w-100 footer-bg d-flex align-items-center justify-content-center"
        >
          <FontAwesomeIcon icon={faBook} className="mr-2 footer-icon" />
          Schedule Your Consultation With Our Expert
        </a>
      </div>
      {/* Modal */}
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
                  className="img-fluid mb-2 ml-2"
                  width="40%"
                  alt="Book Free Appointment"
                />
                <h2 className="h2-fs text-white">
                  Book Free Appointment with Best Dietitian
                </h2>
              </div>
              <button
                type="button"
                className="closess closse-mobile p-0 bg-transparent border-0"
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
      <FgiitFooter />
    </>
  );
}

export default FgiitWebinar;
