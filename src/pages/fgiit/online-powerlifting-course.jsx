import React, { useState } from "react";
import "../../assets/css/home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Form } from "react-bootstrap";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import ModalVideo from "react-modal-video";
import { sendInquiry } from "../../assets/js/utils/contact-us";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import CourseReviewSection from "../../components/partials/review/course-review";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MeetOurInstructure from "../../components/fgiit/meetInstructure";
import OurStudentsWords from "../../components/fgiit/ourStudentsReview";
import OnlineCourseForm from "../../components/online-course/onlineCourseForm";
import { OnlinePowerliftingCoachWorkshopCourseData } from "../../components/online-course/OnlineCourseDataLoader";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import OurOfflineStudents from "../../components/course/ourOfflineStudents";
import OnlineCourseReviews from "../../components/fgiit/onlineCourseReviews";

function OnlinePowerliftingCourse() {
  const canonicalUrl = window.location.href;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    modalRefname: "",
    modalRefnumber: "",
    modalSelectedCourse: "",
  });

  const handlePopupClose = () => {
    setShowModal(false);
  };

  const actionReferAndEarnSubmit = async () => {
    try {
      const name = formData.modalRefname;
      const phoneNumber = formData.modalRefnumber;
      const courses = formData.modalSelectedCourse;
      let modifiedMessage = `${name}\n\nCourse: ${courses}`;
      await sendInquiry(
        name,
        phoneNumber,
        courses,
        modifiedMessage,
        window.location.href,
        null,
        null,
        null
      );
      setFormData({
        modalRefname: "",
        modalRefnumber: "",
        modalSelectedCourse: "",
      });
      handlePopupClose();
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your form has been submitted successfully!",
      });
    } catch (error) {
      console.error(error);
      // Show SweetAlert popup for error
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "An error occurred while submitting the form. Please try again later.",
      });
    }
  };

  const openForm = () => {
    setShowModal(true);
  };

  // const openVideoModal = (url) => {
  //   setIsVideoOpen(true);
  //   setVideoUrl(url);
  // };

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
      question: "What is the duration of the workshop?",
      answer:
        "The workshop spans 2 full days, held on Saturday and Sunday from 11:30 AM to 05:00 PM.",
    },
    {
      question: "Do I need prior experience in powerlifting to join?",
      answer:
        "No, prior experience is not necessary. The workshop is designed for both beginners and experienced individuals who want to deepen their knowledge and skills in powerlifting coaching.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes, participants who successfully complete the workshop will receive a certification from FG Group, acknowledging their expertise in powerlifting coaching.",
    },

    {
      question: "How are the sessions conducted?",
      answer:
        "The workshop is conducted via live Zoom sessions, allowing participants to engage directly with the instructors in real-time.",
    },
    {
      question: "What if I miss a session?",
      answer:
        "Recordings of the Zoom sessions will be made available to participants, so you can review any material you may have missed.",
    },
    {
      question: "Is there any practical component to the workshop?",
      answer:
        "Yes, practical training is a key part of the workshop. You'll be able to practice coaching techniques and receive real-time feedback during the sessions.",
    },
    {
      question: "What kind of legal knowledge will I gain in the workshop?",
      answer:
        "You will learn about the legal responsibilities of being a powerlifting coach, including athlete safety, liability, contracts, and anti-doping regulations. This ensures that you can coach within legal and ethical boundaries.",
    },
    {
      question: "Are there any discounts available?",
      answer:
        "Yes, the workshop is currently available at a discounted price of ₹5899 (GST included), down from ₹10099.",
    },
  ];

  const reviewImages = [
    "/assets/images/img/sname.webp",
    "/assets/images/img/aas2.webp",
    "/assets/images/img/rname.webp",
    "/assets/images/img/deepak-yadav.webp",
  ];

  const reviewses = [
    {
      name: "Shreya Singh",
      stars: 5,
      review:
        "FGIIT's powerlifting workshop gave me the skills I needed to help others with their lifts. The coaching tips were practical and easy to implement.",
      image: reviewImages[0], // Use images for reviews
    },
    {
      name: "Gauresh Bhosale",
      stars: 5,
      review:
        "Great workshop! I learned so much about proper powerlifting technique and how to coach effectively. The online format was well-structured and easy to follow.",
      image: reviewImages[1], // Use images for reviews
    },
    {
      name: "Radha Arora",
      stars: 5,
      review:
        "Excellent course for aspiring coaches. The powerlifting techniques were explained in-depth, and the support from the instructors was fantastic!",
      image: reviewImages[2], // Use images for reviews
    },
    {
      name: "Deepak Yadav",
      stars: 5,
      review:
        "FGIIT's powerlifting coach workshop exceeded my expectations. The trainers were highly experienced, and the content was detailed yet easy to understand.",
      image: reviewImages[3], // Use images for reviews
    },
  ];

  const options = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  const [showMore, setShowMore] = useState(Array(5).fill(false));

  const toggleReadMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  return (
    <>
      <Helmet>
        <title>Become a Pro with an Online Powerlifting Course</title>
        <meta
          name="description"
          content="Master strength training with an online powerlifting course. Learn expert techniques and get certified to become a pro lifter!"
        />
        <meta
          name="keyword"
          content="Online Powerlifting Coach Workshop, Powerlifting Coach Workshop Online, Powerlifting Coach Workshop, Fgiit Online Powerlifting Coach Workshop, Fgiit Powerlifting Coach Workshop, powerlifting, powerlifting coach, powerlifting course, powerlifting coach near me, online powerlifting coach, powerlifting trainer near me, best powerlifting coaches, powerlifting program for beginners, powerlifting plans, powerlifting deadlift, power lifter, competitive powerlifting, powerlifting squat, powerlifting workouts, power lift exercise, power lifting coaches near me, strength training programme, Powerlifting Coach Certification, Certified Powerlifting Coach, Powerlifting Training Program, Best Powerlifting Program, Powerlifting Coach Near Me, Strength and Powerlifting Coach Workshop, Powerlifting Certification Course, Strength and Conditioning Coach Course, Fitness and Strength Training Program, Powerlifting Personal Trainer Course, Best Powerlifting Training, Weightlifting Coach Certification, Strength and Power Training, Strength Training Near Me, Best Powerlifting Gym, Powerlifting Instructor Certification, Powerlifting Strength Training Course, Olympic Weightlifting Course, Strength Training Coach Certification"
        />
        <meta
          property="og:title"
          content="Become a Pro with an Online Powerlifting Course"
        />
        <meta
          property="og:description"
          content="Master strength training with an online powerlifting course. Learn expert techniques and get certified to become a pro lifter!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fgiit/online-powerlifting-course"
        />
        <link rel="canonical" href={{ canonicalUrl }} />
        <meta
          name="google-site-verification"
          content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K2X4NWNEP1');`}
        </script>
        <script>
          {`
        !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '134961498656274');
            fbq('track', 'PageView');
      `}
        </script>
        <noscript>
          {
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=134961498656274&ev=PageView&noscript=1" />'
          }
        </noscript>
      </Helmet>
      <p className="d-none">
     Online Powerlifting Coach Workshop, Powerlifting Coach Workshop Online, Powerlifting Coach Workshop, Fgiit Online Powerlifting Coach Workshop, Fgiit Powerlifting Coach Workshop, powerlifting, powerlifting coach, powerlifting course, powerlifting coach near me, online powerlifting coach, powerlifting trainer near me, best powerlifting coaches, powerlifting program for beginners, powerlifting plans, powerlifting deadlift, power lifter, competitive powerlifting, powerlifting squat, powerlifting workouts, power lift exercise, power lifting coaches near me, strength training programme, Powerlifting Coach Certification, Certified Powerlifting Coach, Powerlifting Training Program, Best Powerlifting Program, Powerlifting Coach Near Me, Strength and Powerlifting Coach Workshop, Powerlifting Certification Course, Strength and Conditioning Coach Course, Fitness and Strength Training Program, Powerlifting Personal Trainer Course, Best Powerlifting Training, Weightlifting Coach Certification, Strength and Power Training, Strength Training Near Me, Best Powerlifting Gym, Powerlifting Instructor Certification, Powerlifting Strength Training Course, Olympic Weightlifting Course, Strength Training Coach Certification
      </p>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <SimpleHeader />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="course-card-page-design mr-md-4 black-before">
                  <div className="course-scroll">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        width="100%"
                        alt="Fg Group"
                        style={{ borderRadius: "10px" }}
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/pl-new.webp"
                        }
                      />
                      <div className="video-btn play-btn">
                        <a
                          aria-label="Fg Group"
                          onClick={() => openVideoModal("p3-OhJ9hLGQ")}
                          className="custom clickof"
                        >
                          <span className="newthing">
                            <i className="fas fa-play"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="d-md-block d-none">
                      <div className="course-info">
                        <h2 className="h6-fs course-title">Course Info</h2>
                        <ul className="course-list">
                          {OnlinePowerliftingCoachWorkshopCourseData?.info ? (
                            <>
                              <li>
                                <i className="fas fa-clock"></i>
                                {
                                  OnlinePowerliftingCoachWorkshopCourseData
                                    .info[0]
                                }
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {
                                  OnlinePowerliftingCoachWorkshopCourseData
                                    .info[1]
                                }
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {
                                  OnlinePowerliftingCoachWorkshopCourseData
                                    .info[2]
                                }
                              </li>
                              <li>
                                <i className="fas fa-file-signature"></i>
                                {
                                  OnlinePowerliftingCoachWorkshopCourseData
                                    .info[3]
                                }
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <i className="fas fa-clock"></i>
                                {
                                  OnlinePowerliftingCoachWorkshopCourseData
                                    .secondInfo[0]
                                }
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {
                                  OnlinePowerliftingCoachWorkshopCourseData
                                    .secondInfo[1]
                                }
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {
                                  OnlinePowerliftingCoachWorkshopCourseData
                                    .secondInfo[2]
                                }
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 px-md-0">
                <OnlineCourseForm
                  courseData={OnlinePowerliftingCoachWorkshopCourseData}
                  openForm={openForm}
                  whatsappMessage="Hello, I wanted to know more about the Online Powerlifting Coach Workshop."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-5 new-content-add">
        <div className="container">
          <div className="">
            <div className="covid mb-4 mt-3 text-center">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">Course </span>
                Details
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="card-body p-4">
              <div className="row align-items-center">
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 1: Introduction to Powerlifting
                        </h2>

                        <p className="text-muted">
                          This foundational module introduces the principles of
                          powerlifting, including its history, core lifts
                          (squat, deadlift, and bench press), and the role of a
                          powerlifting coach. Participants will explore the
                          sport's structure, from amateur to competitive levels,
                          and understand the mental and physical demands placed
                          on athletes.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>History and evolution of powerlifting</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Benefits and risks of powerlifting</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Overview of powerlifting competitions and
                                  rules
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/diet-manage.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/diet-manage.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 1: Introduction to Powerlifting
                      </h2>
                      <p className="text-muted">
                        This foundational module introduces the principles of
                        powerlifting, including its history, core lifts {' '}
                        {/* {showMore[1] ? (
                          <> */}
                            (squat, deadlift, and bench press), and the role of
                            a powerlifting coach. Participants will explore the
                            sport's structure, from amateur to competitive
                            levels, and understand the mental and physical
                            demands placed on athletes.
                            <div className="row">
                              <ul className="mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>History and evolution of powerlifting</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Benefits and risks of powerlifting</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Overview of powerlifting competitions and
                                    rules
                                  </b>
                                </li>
                              </ul>
                            </div>
                          {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(1)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[1] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/sir-new-one.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 2: Biomechanics and Technique
                        </h2>

                        <p className="text-muted">
                          Focusing on movement mechanics, this module covers the
                          anatomy and biomechanics essential for powerlifting.
                          It emphasizes proper form, alignment, and movement
                          patterns for the squat, deadlift, and bench press,
                          helping participants prevent injuries and maximize
                          performance.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Squat technique and biomechanics</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>Bench press technique and biomechanics</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>Deadlift technique and biomechanics</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Common technical flaws and corrections</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/sir-new-one.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 2: Biomechanics and Technique
                      </h2>
                      <p className="text-muted">
                        Focusing on movement mechanics, this module covers the
                        anatomy and biomechanics essential for powerlifting. {' '}
                        {/* {showMore[2] ? (
                          <> */}
                            It emphasizes proper form, alignment, and movement
                            patterns for the squat, deadlift, and bench press,
                            helping participants prevent injuries and maximize
                            performance.
                            <div className="row">
                              <ul className="mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>Squat technique and biomechanics</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Bench press technique and biomechanics</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Deadlift technique and biomechanics</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Common technical flaws and corrections</b>
                                </li>
                              </ul>
                            </div>
                          {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(2)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[2] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 3: Strength Training Principles
                        </h2>

                        <p className="text-muted">
                          This module delves into the science of strength
                          training, including progressive overload,
                          periodization, and hypertrophy. Coaches will learn to
                          develop effective training plans tailored to various
                          fitness levels, emphasizing the development of maximum
                          strength and endurance.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>Principles of strength training</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Periodization and programming</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Progressive overload and progressive
                                  resistance
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Specificity and variation in training</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/img/offline2.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/img/offline2.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 3: Strength Training Principles
                      </h2>
                      <p className="text-muted">
                        This module delves into the science of strength
                        training, including progressive overload, {' '}
                        {/* {showMore[3] ? (
                          <> */}
                            periodization, and hypertrophy. Coaches will learn
                            to develop effective training plans tailored to
                            various fitness levels, emphasizing the development
                            of maximum strength and endurance.
                            <div className="row">
                              <ul className="mt-2 pl-3">
                                <li className="list-unstyled text-dark">
                                  <b>Principles of strength training</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Periodization and programming</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Progressive overload and progressive
                                    resistance
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Specificity and variation in training</b>
                                </li>
                              </ul>
                            </div>
                          {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(3)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[3] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/img/online-workshop.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 4: Programming and Training Plans
                        </h2>
                        <p className="text-muted">
                          Participants will learn how to design and implement
                          structured training cycles for powerlifters. Topics
                          include off-season, peaking, and tapering programs,
                          with a focus on balancing intensity and recovery to
                          achieve optimal performance during competition.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Creating a powerlifting training plan</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Periodized training and programming</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Training phases and cycles</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Sample training plans and programs</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/img/online-workshop.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 4: Programming and Training Plans
                      </h2>
                      <p className="text-muted">
                        Participants will learn how to design and implement
                        structured training cycles for powerlifters. Topics {' '}
                        {/* {showMore[4] ? (
                          <> */}
                            include off-season, peaking, and tapering programs,
                            with a focus on balancing intensity and recovery to
                            achieve optimal performance during competition.
                            <div className="row">
                              <ul className="col-12 mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>Creating a powerlifting training plan</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Periodized training and programming</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Training phases and cycles</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Sample training plans and programs</b>
                                </li>
                              </ul>
                            </div>
                          {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(4)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[4] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 5: Equipment and Gear
                        </h2>
                        <p className="text-muted">
                          This module provides an overview of powerlifting
                          equipment, including belts, wraps, shoes, and
                          singlets. Participants will learn how to use gear
                          effectively and safely, as well as how to guide
                          athletes in selecting the right equipment for their
                          needs and competition standards.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>
                                  Overview of powerlifting equipment and gear
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Types of barbells and plates</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Squat and deadlift suits</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Bench press shirts and accessories</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/powerlifting-course.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/powerlifting-course.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 5: Equipment and Gear
                      </h2>
                      <p className="text-muted">
                        This module provides an overview of powerlifting
                        equipment, including belts, wraps, shoes, and {' '}
                        {/* {showMore[5] ? (
                          <> */}
                            singlets. Participants will learn how to use gear
                            effectively and safely, as well as how to guide
                            athletes in selecting the right equipment for their
                            needs and competition standards.
                            <div className="row">
                              <ul className="mt-2 pl-3">
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Overview of powerlifting equipment and gear
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Types of barbells and plates</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Squat and deadlift suits</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Bench press shirts and accessories</b>
                                </li>
                              </ul>
                            </div>
                          {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(5)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[5] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/online-2.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 6: Rules and Regulations
                        </h2>
                        <p className="text-muted">
                          An in-depth look at the rules governing powerlifting
                          competitions, this module covers federations,
                          weigh-ins, lifting standards, and judging criteria.
                          Participants will gain the knowledge needed to prepare
                          athletes for competition day and ensure compliance
                          with regulations.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>
                                  Overview of powerlifting rules and regulations
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Competition rules and procedures</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Equipment inspection and approval</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Rules for squat, bench press, and deadlift
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/online-2.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 6: Rules and Regulations
                      </h2>
                      <p className="text-muted">
                        An in-depth look at the rules governing powerlifting
                        competitions, this module covers federations, {' '}
                        {/* {showMore[6] ? (
                          <> */}
                            weigh-ins, lifting standards, and judging criteria.
                            Participants will gain the knowledge needed to
                            prepare athletes for competition day and ensure
                            compliance with regulations.
                            <div className="row">
                              <ul className="col-12 mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Overview of powerlifting rules and
                                    regulations
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Competition rules and procedures</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Equipment inspection and approval</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Rules for squat, bench press, and deadlift
                                  </b>
                                </li>
                              </ul>
                            </div>
                          {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(6)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[6] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 7: Injury Prevention and Rehabilitation
                        </h2>
                        <p className="text-muted">
                          This module focuses on identifying common powerlifting
                          injuries, their prevention, and rehabilitation
                          strategies. Participants will learn warm-up
                          techniques, mobility drills, and recovery protocols to
                          support long-term athlete health and performance.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>
                                  Common powerlifting injuries and prevention
                                  strategies
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Injury rehabilitation and recovery techniques
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Prehabilitation and injury prevention
                                  exercises
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/course-photo-new.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/course-photo-new.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 7: Injury Prevention and Rehabilitation
                      </h2>
                      <p className="text-muted">
                        This module focuses on identifying common powerlifting
                        injuries, their prevention, and rehabilitation {' '}
                        {/* {showMore[7] ? (
                          <> */}
                            strategies. Participants will learn warm-up
                            techniques, mobility drills, and recovery protocols
                            to support long-term athlete health and performance.
                            <div className="row">
                              <ul className="mt-2 pl-3">
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Common powerlifting injuries and prevention
                                    strategies
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Injury rehabilitation and recovery
                                    techniques
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Prehabilitation and injury prevention
                                    exercises
                                  </b>
                                </li>
                              </ul>
                            </div>
                          {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(7)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[7] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/online-3.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 8: Coaching and Communication
                        </h2>
                        <p className="text-muted">
                          Effective coaching involves more than just technical
                          knowledge. This module explores strategies for
                          motivating athletes, providing constructive feedback,
                          and building trust. Coaches will learn communication
                          skills to foster a positive and productive training
                          environment.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Principles of effective coaching</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Communication strategies for coaches and
                                  athletes
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Creating a positive and supportive training
                                  environment
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/online-3.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 8: Coaching and Communication
                      </h2>
                      <p className="text-muted">
                        Effective coaching involves more than just technical
                        knowledge. This module explores strategies for {' '}
                        {/* {showMore[8] ? (
                          <> */}
                            motivating athletes, providing constructive
                            feedback, and building trust. Coaches will learn
                            communication skills to foster a positive and
                            productive training environment.
                            <div className="row">
                              <ul className="col-12 mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>Principles of effective coaching</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Communication strategies for coaches and
                                    athletes
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Creating a positive and supportive training
                                    environment
                                  </b>
                                </li>
                              </ul>
                            </div>
                          {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(8)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[8] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 9: Practical Training
                        </h2>
                        <p className="text-muted">
                          A hands-on module where participants apply their
                          knowledge, focusing on live coaching scenarios.
                          Participants will practice instructing athletes in
                          technique, spotting, and providing immediate
                          corrections during training sessions.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>Hands-on training and practice</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Coaching and feedback</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Training with different equipment and gear
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/img/co2.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/img/co2.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 9: Practical Training
                      </h2>
                      <p className="text-muted">
                        A hands-on module where participants apply their
                        knowledge, focusing on live coaching scenarios. {' '}
                        {/* {showMore[9] ? (
                          <> */}
                            Participants will practice instructing athletes in
                            technique, spotting, and providing immediate
                            corrections during training sessions.
                            <div className="row">
                              <ul className="mt-2 pl-3">
                                <li className="list-unstyled text-dark">
                                  <b>Hands-on training and practice</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Coaching and feedback</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Training with different equipment and gear
                                  </b>
                                </li>
                              </ul>
                            </div>
                          {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(9)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[9] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/img/co1.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 10: Legal Aspects of Coaching and Powerlifting
                          Plan
                        </h2>
                        <p className="text-muted">
                          This module highlights the legal and ethical
                          responsibilities of a powerlifting coach. Topics
                          include liability, athlete safety, anti-doping
                          regulations, and ethical considerations. Coaches will
                          also learn to draft comprehensive powerlifting plans
                          that align with legal and ethical standards.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>
                                  Legal considerations for coaches and trainers
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Creating a powerlifter plan and training
                                  program
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Sample powerlifter plans and training programs
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/img/co1.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 10: Legal Aspects of Coaching and Powerlifting
                        Plan
                      </h2>
                      <p className="text-muted">
                        This module highlights the legal and ethical
                        responsibilities of a powerlifting coach. Topics {' '}
                        {/* {showMore[10] ? (
                          <> */}
                            include liability, athlete safety, anti-doping
                            regulations, and ethical considerations. Coaches will
                            also learn to draft comprehensive powerlifting plans
                            that align with legal and ethical standards.
                            <div className="row">
                              <ul className="col-12 mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Legal considerations for coaches and
                                    trainers
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Creating a powerlifter plan and training
                                    program
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Sample powerlifter plans and training
                                    programs
                                  </b>
                                </li>
                              </ul>
                            </div>
                          {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(10)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[10] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OnlineCourseReviews />
      <section className="margintop">
        <div className="container-fluid p-0">
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/img/course-include-online.webp"
            }
            className="img-fluid mt-2 d-none d-md-block"
          />
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/img/course-include-online-mobile.webp"
            }
            className="img-fluid mt-2 d-block d-md-none"
          />
        </div>
      </section>
      <section className="mt-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row mt-4 align-items-center">
              <div className="col-md-6">
                <div className="demoo">
                  <div className="new-h3">
                    <h2 className="ml-0 h3-fs fs-34">Why FGIIT?</h2>
                  </div>
                  <div>
                    <ul className="p-0 new-li">
                      <li>
                        <i className="fas fa-check"></i> Approved by Government
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Internationally
                        Accredited Certification
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Industry Expert
                        Faculties with 5+ years in Business
                      </li>
                      <li>
                        <i className="fas fa-check"></i> 100% Placement Support
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Mandatory Internship at
                        Top Firms
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Bilingual Learning
                        Material: English and Hindi
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Recorded Video Lectures
                        Available
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Lifetime Support for
                        Students
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Globally Recognized
                        Certifications
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Comprehensive
                        Curriculum Covering Latest Trends
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Interactive Live
                        Sessions with Trainers and Peers
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Regular Assessments &
                        Feedback
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Access to Exclusive
                        Study Groups
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Updated Study Material
                        and Case Studies
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Affordable Fees with
                        EMI Options
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Collaborations with Top
                        Fitness Brands
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Personalized Student
                        Support Team
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Continuous Professional
                        Development Opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-center">
                  <p className="mb-0 taks-p">Demo Certificate</p>
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/Powerlifting-Coach-Workshop-certificate.webp"
                    }
                    width="100%"
                    alt="Course Certificate"
                  />
                </div>
                <div>
                  <span
                    className="taks-p d-none d-md-block text-center"
                    style={{ fontWeight: "500" }}
                  >
                    our Certificate is valid in 192 country
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MeetOurInstructure />
      <OurOfflineStudents />
      <section>
        <div className="container-fluid margintop">
          <div className="container blog2 pb-5">
            <div className="">
              <div className="covid text-center">
                <h2 className="mt-2 h2-fs">
                  Boost Your Fitness Career with{" "}
                  <span className="m-0 text-blue-color">
                    Personal Trainer Courses
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      Powerlifting is a strength sport that focuses on three
                      major lifts—squat, bench press, and deadlift. Whether
                      you're an athlete looking to improve your performance or a
                      beginner eager to build strength, a structured training
                      plan is essential. Enrolling in an online powerlifting
                      course can help you develop proper techniques, enhance
                      lifting skills, and prevent injuries while maximizing your
                      strength potential.
                    </p>
                    <p>
                      For those aspiring to become a powerlifting coach,
                      professional certification programs provide in-depth
                      knowledge of biomechanics, programming, and athlete
                      development. A certified powerlifting coach understands
                      how to design customized training plans that cater to
                      individual goals, whether it's for competition or personal
                      fitness.
                    </p>
                    <p>
                      An online powerlifting coach offers the flexibility of
                      remote coaching, allowing lifters to receive expert
                      guidance from anywhere in the world. With video analysis,
                      technique breakdowns, and personalized training programs,
                      online coaching makes high-level powerlifting education
                      accessible to all.
                    </p>
                    <p>
                      Whether you want to enhance your lifting performance or
                      build a career in strength coaching, an online
                      powerlifting course is the perfect starting point. Train
                      smarter, lift heavier, and achieve your strength goals
                      with expert guidance from the best in the industry!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop d-block d-md-none">
        <div className="container-fluid p-0">
          <div>
            <Link to="/fgiit/fitness-training-and-placement">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/img/tpcell.webp"}
                width="100%"
                className="lazy"
                alt="fggroup"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="margintop d-none d-md-block">
        <div className="container-fluid p-0">
          <div>
            <Link to="/fgiit/fitness-training-and-placement">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/tpcell-d.webp"
                }
                width="100%"
                className="lazy"
                alt="fggroup"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="fwg-webinar-page-faq margintop mt-md-5 mt-4 pt-md-5 pt-0 pb-md-4 pb-0">
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

      <CourseReviewSection course_id="6509b66d1cdc4887d6951e75" />

      {/* Modal  */}
      <Modal show={showModal} onHide={handlePopupClose} centered>
        <div className="modal-content">
          <div className="modal-content form-design form-bg">
            <div className="modal-header justify-content-center p-0 border-bottom-0">
              <div className="text-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/descount-img.webp"
                  }
                  className="mb-1 img-media"
                  alt="FG Group"
                  width="250px"
                />
                <h2 className="h2-fs popuphading">Refer and Earn</h2>
              </div>
              <button
                type="button"
                className="closess close-btn closse-mobile p-0 bg-transparent border-0"
                onClick={handlePopupClose}
              >
                <span aria-hidden="true" className="p-0">
                  <i className="fas fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body mb-0 p-0">
              <div className="text-center d-block formmi" id="hid">
                <div className="row justify-content-center">
                  <div className="col-md-11 pl-0">
                    <Form>
                      <div className="input-group align-items-center">
                        <span>
                          <i className="far fa-user"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control fr"
                          placeholder="Enter referral name"
                          required
                          name="modalRefname"
                        />
                      </div>
                      <div className="input-group align-items-center mb-3">
                        <span>
                          <i className="fas fa-phone-alt"></i>
                        </span>
                        <input
                          type="number"
                          className="form-control fr"
                          placeholder="Enter Referral contact Number"
                          required
                          name="modalRefnumber"
                        />
                      </div>
                      <div className="input-group align-items-center mb-3">
                        <span className="pr-1">
                          <i className="fas fa-chalkboard-teacher"></i>
                        </span>
                        <select
                          className="num-employ pl-0"
                          required
                          name="modalSelectedCourse"
                        >
                          <option value="" hidden>
                            Select which course you interested
                          </option>
                          <option
                            className="field"
                            value="Diploma In Personal Training course"
                          >
                            Diploma In Personal Training course
                          </option>
                          <option
                            className="field"
                            value="Diploma In Nutrition course"
                          >
                            Diploma In Nutrition course
                          </option>
                          <option
                            className="field"
                            value="Diploma In Health & Fitness Business Management"
                          >
                            Diploma In Health & Fitness Business Management
                          </option>
                          <option
                            className="field"
                            value="Anabolic Androgenic Steroids"
                          >
                            Anabolic Androgenic Steroids
                          </option>
                          <option
                            className="field"
                            value="Group Instructor Workshop"
                          >
                            Group Instructor Workshop
                          </option>
                          <option
                            className="field"
                            value="Injury Rehabilitation Workshop"
                          >
                            Injury Rehabilitation Workshop
                          </option>
                          <option
                            className="field"
                            value="Advance Clinical Nutrition Workshop"
                          >
                            Advance Clinical Nutrition Workshop
                          </option>
                        </select>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="text-center Referr-btn mt-md-3">
                <button
                  className="btn p-2 px-5"
                  onClick={actionReferAndEarnSubmit}
                >
                  <span>Submit</span>
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

export default OnlinePowerliftingCourse;
