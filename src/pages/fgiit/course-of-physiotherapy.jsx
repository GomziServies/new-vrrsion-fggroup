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
import { OnlineInjuryRehabilitationWorkshopCourseData } from "../../components/online-course/OnlineCourseDataLoader";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import OurOfflineStudents from "../../components/course/ourOfflineStudents";
import OnlineCourseReviews from "../../components/fgiit/onlineCourseReviews";

function CourseOfPhysiotherapy() {
  const canonicalUrl = window.location.href;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    modalRefname: "",
    modalRefnumber: "",
    modalSelectedCourse: "",
  });

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

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
      question: "What is the duration of the masterclass?",
      answer:
        "The course runs for 1 month, including online sessions on Zoom. You will also complete a 1-month internship to apply your knowledge in real-life rehabilitation scenarios.",
    },
    {
      question: "Will I receive any study materials?",
      answer:
        "Yes, participants will have access to video lectures, PDF materials, and recorded sessions to help reinforce the course content and allow for self-paced study.",
    },
    {
      question:
        "Do I need prior knowledge or experience in fitness or healthcare?",
      answer:
        "While prior knowledge in fitness or healthcare may be beneficial, it is not mandatory. The course is designed for beginners as well as fitness professionals looking to expand their skill set in injury rehabilitation.",
    },

    {
      question: "Will I get a certificate upon completion?",
      answer:
        "Yes, you will receive a certificate upon successful completion of the course and internship, recognizing your expertise in injury rehabilitation techniques.",
    },
    {
      question: "What if I miss a live session?",
      answer:
        "All sessions will be recorded and made available to you, so you can catch up at your own convenience without missing out on any key information.",
    },
    {
      question: "Can I apply these techniques to any type of injury?",
      answer:
        "This course focuses on sports and gym-related injuries, but the techniques taught are versatile and can be adapted for various physical injuries. However, it is always advisable to consult a medical professional for severe injuries.",
    },
    {
      question:
        "How can I implement the knowledge gained in real-world scenarios?",
      answer:
        "Through the 1-month internship, you will apply the rehabilitation techniques learned in practical settings, helping individuals recover from injuries. This hands-on experience ensures you can confidently use your knowledge in real-world rehabilitation cases.",
    },
    {
      question: "Is there live support during the course?",
      answer:
        "Yes, live support and mentorship are available throughout the course to help with any queries or concerns, ensuring you have all the guidance you need.",
    },
  ];

  const reviewImages = [
    "/assets/images/img/aname.webp",
    "/assets/images/img/gauresh.webp",
    "/assets/images/img/rohit.webp",
    "/assets/images/img/mihir.webp",
  ];

  const reviewses = [
    {
      name: "Ankit Verma",
      stars: 5,
      review:
        "Great course! I learned all the techniques of cupping therapy from expert instructors. It gave me the confidence to start offering this service in my practice.",
      image: reviewImages[0], // Use images for reviews
    },
    {
      name: "Gaurav Bhosale",
      stars: 5,
      review:
        "I highly recommend the cupping therapy workshop at FGIIT. The course was well-structured, and the instructors were knowledgeable and supportive throughout.",
      image: reviewImages[1], // Use images for reviews
    },
    {
      name: "Rohit Singh",
      stars: 5,
      review:
        "Fantastic course with a good balance between theory and practice. I was able to apply cupping techniques right after completing the course.",
      image: reviewImages[2], // Use images for reviews
    },
    {
      name: "Meera Patel",
      stars: 5,
      review:
        "FGIIT's cupping therapy course was a game-changer for my career. The course covered everything from basic to advanced techniques in a clear and practical way.",
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
  return (
    <>
      <Helmet>
        <title>Start Your Career with the Best Course of Physiotherapy</title>
        <meta
          name="description"
          content="Enroll in the best course of physiotherapy to gain expert skills, certification, and career opportunities in healthcare."
        />
        <meta
          name="keyword"
          content="Online Injury Rehabilitation Workshop, Injury Rehabilitation Workshop Online, Injury Rehabilitation Workshop, injury rehabilitation masterclass, Online Course Of Physiotherapy, Course Of Physiotherapy Online, Fgiit Online injury rehabilitation Workshop, Fgiit Online Course Of Physiotherapy, course of physiotherapy, course of physical therapy, physical rehabilitation, physical treatment, cupping therapy course, physical therapy classes, online physical therapy programs, physical therapy programs near me, therapist courses, physical therapy courses near me, physical therapy training near me, pt therapy, physical rehab, center for physical therapy, physical rehabilitation courses, pt rehab, pt course, online physical therapy programs, pt courses online, online pt programs, injury, lisfranc injury, broken ankle, repetitive strain injury, achilles injury, tailbone injury, ACL Injury Recovery, Rotator Cuff Injury, Sports Injury Rehabilitation, Advanced Injury Prevention Course, Concussion Therapy Course, Pain Management Workshop Online, Certified Injury Rehabilitation Specialist"
        />
        <meta
          property="og:title"
          content="Start Your Career with the Best Course of Physiotherapy"
        />
        <meta
          property="og:description"
          content="Enroll in the best course of physiotherapy to gain expert skills, certification, and career opportunities in healthcare."
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fgiit/course-of-physiotherapy"
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
        Online Injury Rehabilitation Workshop, Injury Rehabilitation Workshop Online, Injury Rehabilitation Workshop, injury rehabilitation masterclass, Online Course Of Physiotherapy, Course Of Physiotherapy Online, Fgiit Online injury rehabilitation Workshop, Fgiit Online Course Of Physiotherapy, course of physiotherapy, course of physical therapy, physical rehabilitation, physical treatment, cupping therapy course, physical therapy classes, online physical therapy programs, physical therapy programs near me, therapist courses, physical therapy courses near me, physical therapy training near me, pt therapy, physical rehab, center for physical therapy, physical rehabilitation courses, pt rehab, pt course, online physical therapy programs, pt courses online, online pt programs, injury, lisfranc injury, broken ankle, repetitive strain injury, achilles injury, tailbone injury, ACL Injury Recovery, Rotator Cuff Injury, Sports Injury Rehabilitation, Advanced Injury Prevention Course, Concussion Therapy Course, Pain Management Workshop Online, Certified Injury Rehabilitation Specialist
      </p>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <SimpleHeader />
      <div className="dicount-instructor d-none">
        <LazyLoadImage
          effect="blur"
          src={process.env.PUBLIC_URL + "/assets/images/mix-img/discount.png"}
          width="60px"
          alt="FG Group"
        />
      </div>
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="course-card-page-design mr-md-4 black-before">
                  <div className="course-scroll">
                    <div>
                      <OwlCarousel
                        loop
                        autoplay
                        dots={false}
                        id="owl-demo-physio"
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
                        <div className="item mx-md-3">
                          <img
                            className="lazy rounded"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/fgiit/batch-12.jpeg"
                            }
                            width="100%"
                            alt="food nutrition and personal training certification ceremony"
                          />
                        </div>
                        <div className="item mx-md-3">
                          <img
                            className="lazy rounded"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/fgiit/batch-11.jpeg"
                            }
                            width="100%"
                            alt="food nutrition and personal training certification ceremony"
                          />
                        </div>
                        <div className="item mx-md-3">
                          <img
                            className="lazy rounded"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/fgiit/batch-10.jpeg"
                            }
                            width="100%"
                            alt="food nutrition and personal training certification ceremony"
                          />
                        </div>
                        <div className="item mx-md-3">
                          <img
                            className="lazy rounded"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/fgiit/batch-9.jpeg"
                            }
                            width="100%"
                            alt="food nutrition and personal training certification ceremony"
                          />
                        </div>
                        <div className="item mx-md-3">
                          <img
                            className="lazy rounded"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/fgiit/batch-8.webp"
                            }
                            width="100%"
                            alt="food nutrition and personal training certification ceremony"
                          />
                        </div>
                        <div className="item mx-md-3">
                          <img
                            className="lazy rounded"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/fgiit/batch-7.webp"
                            }
                            width="100%"
                            alt="food nutrition and personal training certification ceremony"
                          />
                        </div>
                        <div className="item mx-md-3">
                          <img
                            className="lazy rounded"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/batch-6.webp"
                            }
                            width="100%"
                            alt="food nutrition and personal training certification ceremony"
                          />
                        </div>
                        <div className="item mx-md-3">
                          <img
                            className="lazy rounded"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/1172.webp"
                            }
                            width="100%"
                            alt="food nutrition and personal training certification ceremony"
                          />
                        </div>
                        <div className="item mx-md-3">
                          <img
                            className="lazy rounded"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/6771.webp"
                            }
                            width="100%"
                            alt="food nutrition and personal training certification ceremony"
                          />
                        </div>
                        <div className="item mx-md-3">
                          <img
                            className="lazy rounded"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/7101.webp"
                            }
                            width="100%"
                            alt="food nutrition and personal training certification ceremony"
                          />
                        </div>
                        <div className="item mx-md-3">
                          <img
                            className="lazy rounded"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/0501.webp"
                            }
                            width="100%"
                            alt="food nutrition and personal training certification ceremony"
                          />
                        </div>
                        <div className="item mx-md-3">
                          <img
                            className="lazy rounded"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/6951.webp"
                            }
                            width="100%"
                            alt="food nutrition and personal training certification ceremony"
                          />
                        </div>
                      </OwlCarousel>
                    </div>
                    <div className="d-md-block d-none">
                      <div className="course-info">
                        <h2 className="h6-fs course-title">Course Info</h2>
                        <ul className="course-list">
                          {OnlineInjuryRehabilitationWorkshopCourseData?.info ? (
                            <>
                              <li>
                                <i className="fas fa-clock"></i>
                                {
                                  OnlineInjuryRehabilitationWorkshopCourseData
                                    .info[0]
                                }
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {
                                  OnlineInjuryRehabilitationWorkshopCourseData
                                    .info[1]
                                }
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {
                                  OnlineInjuryRehabilitationWorkshopCourseData
                                    .info[2]
                                }
                              </li>
                              <li>
                                <i className="fas fa-file-signature"></i>
                                {
                                  OnlineInjuryRehabilitationWorkshopCourseData
                                    .info[3]
                                }
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <i className="fas fa-clock"></i>
                                {
                                  OnlineInjuryRehabilitationWorkshopCourseData
                                    .secondInfo[0]
                                }
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {
                                  OnlineInjuryRehabilitationWorkshopCourseData
                                    .secondInfo[1]
                                }
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {
                                  OnlineInjuryRehabilitationWorkshopCourseData
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
                  courseData={OnlineInjuryRehabilitationWorkshopCourseData}
                  openForm={openForm}
                  whatsappMessage="Hello, I wanted to know more about the Online Injury Rehabilitation Workshop."
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
                          Module 1: Introduction to Injury Rehabilitation
                        </h2>
                        <p className="text-muted">
                          This module provides an overview of injury
                          rehabilitation, its significance in fitness and
                          sports, and the role of a rehabilitation specialist.
                          Participants will learn about the stages of recovery,
                          from acute care to functional rehabilitation,
                          emphasizing a client-centered approach.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Overview of injury rehabilitation</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Principles of rehabilitation</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Goals and outcomes of rehabilitation</b>
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
                        Module 1: Introduction to Injury Rehabilitation
                      </h2>
                      <p className="text-muted">
                        This module provides an overview of injury
                        rehabilitation, its significance in fitness and{" "}
                        {/* {showMore[1] ? (
                          <> */}
                        sports, and the role of a rehabilitation specialist.
                        Participants will learn about the stages of recovery,
                        from acute care to functional rehabilitation,
                        emphasizing a client - centered approach.
                        <div className="row">
                          <ul className="mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Overview of injury rehabilitation</b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>Principles of rehabilitation</b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>Goals and outcomes of rehabilitation</b>
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
                          Module 2: Assessment and Diagnosis
                        </h2>
                        <p className="text-muted">
                          Participants will gain skills in conducting
                          comprehensive assessments, including injury history,
                          functional movement screening, and identifying
                          muscular imbalances.This module focuses on creating
                          accurate diagnoses to guide effective rehabilitation
                          plans.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Assessment techniques and tools</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>Diagnostic procedures and tests</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>Injury classification and staging</b>
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
                        Module 2: Assessment and Diagnosis
                      </h2>
                      <p className="text-muted">
                        Participants will gain skills in conducting
                        comprehensive assessments, including injury history,{" "}
                        {/* {showMore[2] ? (
                          <> */}
                        functional movement screening, and identifying muscular
                        imbalances.This module focuses on creating accurate
                        diagnoses to guide effective rehabilitation plans.
                        <div className="row">
                          <ul className="mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Assessment techniques and tools</b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>Diagnostic procedures and tests</b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>Injury classification and staging</b>
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
                          Module 3: Manual Therapy Techniques
                        </h2>
                        <p className="text-muted">
                          This module introduces hands - on methods such as soft
                          tissue mobilization, stretching, and joint
                          manipulation.Students will learn when and how to apply
                          these techniques to enhance mobility, reduce pain, and
                          accelerate recovery.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>
                                  Cupping therapy principles and application
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Manual therapy techniques for soft tissue
                                  mobilization
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Joint mobilization and manipulation techniques
                                </b>
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
                        Module 3: Manual Therapy Techniques
                      </h2>
                      <p className="text-muted">
                        This module introduces hands-on methods such as soft
                        tissue mobilization, stretching, and joint{" "}
                        {/* {showMore[3] ? (
                          <> */}
                        manipulation.Students will learn when and how to apply
                        these techniques to enhance mobility, reduce pain, and
                        accelerate recovery.
                        <div className="row">
                          <ul className="mt-2 pl-3">
                            <li className="list-unstyled text-dark">
                              <b>Cupping therapy principles and application</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Manual therapy techniques for soft tissue
                                mobilization
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Joint mobilization and manipulation techniques
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
                          src="/assets/images/course-img/anabolic-new.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 4: Principles of Exercise Prescription
                        </h2>
                        <p className="text-muted">
                          Participants will learn how to design exercise
                          programs tailored to the rehabilitation phase,
                          focusing on progressive loading, functional movements,
                          and restoring strength and stability.Special attention
                          is given to avoiding re - injury through proper
                          exercise progression.
                          <div className="row">
                            <ul className="col-6 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>
                                  Exercise prescription principles and
                                  guidelines
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Therapeutic exercise techniques and
                                  progressions
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Exercise program design and implementation
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
                        src="/assets/images/course-img/anabolic-new.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 4: Principles of Exercise Prescription
                      </h2>
                      <p className="text-muted">
                        Participants will learn how to design exercise programs
                        tailored to the rehabilitation phase,{" "}
                        {/* {showMore[4] ? (
                          <> */}
                        focusing on progressive loading, functional movements,
                        and restoring strength and stability. Special attention
                        is given to avoiding re - injury through proper exercise
                        progression.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>
                                Exercise prescription principles and guidelines
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Therapeutic exercise techniques and progressions
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Exercise program design and implementation</b>
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
                          Module 5: Therapeutic Modalities
                        </h2>
                        <p className="text-muted">
                          This module explores modalities such as ultrasound,
                          electrical stimulation, and cryotherapy.Students will
                          learn how to integrate these tools into rehabilitation
                          programs to optimize recovery and manage pain
                          effectively.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>
                                  Electrotherapy modalities (e.g. TENS, NMES)
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Thermal modalities (e.g. heat, cold)</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Mechanical modalities (e.g. ultrasound,
                                  traction)
                                </b>
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
                        Module 5: Therapeutic Modalities
                      </h2>
                      <p className="text-muted">
                        This module explores modalities such as ultrasound,
                        electrical stimulation, and cryotherapy. Students will{" "}
                        {/* {showMore[5] ? (
                          <> */}
                        learn how to integrate these tools into rehabilitation
                        programs to optimize recovery and manage pain
                        effectively.
                        <div className="row">
                          <ul className="mt-2 pl-3">
                            <li className="list-unstyled text-dark">
                              <b>Electrotherapy modalities (e.g. TENS, NMES)</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Thermal modalities (e.g. heat, cold)</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Mechanical modalities (e.g. ultrasound,
                                traction)
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
                          Module 6: Pain Management
                        </h2>
                        <p className="text-muted">
                          Participants will study pain physiology and evidence -
                          based methods for managing acute and chronic
                          pain.Topics include medication - free approaches,
                          mindfulness, and cognitive - behavioral techniques to
                          support clients' mental and physical well-being.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Pain physiology and mechanisms</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>Pain assessment and measurement tools</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Pain management techniques and interventions
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
                        Module 6: Pain Management
                      </h2>
                      <p className="text-muted">
                        Participants will study pain physiology and
                        evidence-based methods for managing acute and chronic{" "}
                        {/* {showMore[6] ? (
                          <> */}
                        pain.Topics include medication - free approaches,
                        mindfulness, and cognitive - behavioral techniques to
                        support clients' mental and physical well-being.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Pain physiology and mechanisms</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Pain assessment and measurement tools</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Pain management techniques and interventions
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
                          Module 7: Injury Specific Rehabilitation
                        </h2>
                        <p className="text-muted">
                          This module delves into protocols for rehabilitating
                          common injuries, including ligament sprains, muscle
                          strains, tendonitis, and joint dislocations.
                          Participants will learn to customize plans based on
                          the type and severity of the injury.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>
                                  Rehabilitation protocols for common injuries
                                  (e.g. ACL, meniscus, rotator cuff)
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Injury specific exercise programs and
                                  progressions
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Return to play and sport specific
                                  rehabilitation
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
                        Module 7: Injury Specific Rehabilitation
                      </h2>
                      <p className="text-muted">
                        This module delves into protocols for rehabilitating
                        common injuries, including ligament sprains, muscle{" "}
                        {/* {showMore[7] ? (
                          <> */}
                        strains, tendonitis, and joint dislocations.
                        Participants will learn to customize plans based on the
                        type and severity of the injury.
                        <div className="row">
                          <ul className="mt-2 pl-3">
                            <li className="list-unstyled text-dark">
                              <b>
                                Rehabilitation protocols for common injuries
                                (e.g. ACL, meniscus, rotator cuff)
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Injury specific exercise programs and
                                progressions
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Return to play and sport specific rehabilitation
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
                          Module 8: Special Populations in Rehabilitation
                        </h2>
                        <p className="text-muted">
                          Rehabilitation needs vary by population.This module
                          covers considerations for seniors, children, athletes,
                          and individuals with chronic conditions, emphasizing
                          modifications and precautions for each group.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>
                                  Rehabilitation considerations for special
                                  populations (e.g. pediatric, geriatric,
                                  athletes)
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Modified exercise programs and interventions
                                  for special populations
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
                        Module 8: Special Populations in Rehabilitation
                      </h2>
                      <p className="text-muted">
                        Rehabilitation needs vary by population. This module
                        covers considerations for seniors, children, athletes,{" "}
                        {/* {showMore[8] ? (
                          <> */}
                        and individuals with chronic conditions, emphasizing
                        modifications and precautions for each group.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>
                                Rehabilitation considerations for special
                                populations (e.g. pediatric, geriatric,
                                athletes)
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Modified exercise programs and interventions for
                                special populations
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
                          Module 9: Advanced Rehabilitation Techniques
                        </h2>
                        <p className="text-muted">
                          Students will explore advanced methods, including
                          proprioceptive training, prometric exercises, and
                          sport - specific drills.This module equips
                          participants to support high - performance athletes
                          and clients with complex rehabilitation needs.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>CPR and first aid</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Dry needling and IASTM(instrument - assisted
                                  soft tissue mobilization)
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Rigid tapping and mobility techniques</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Electrotherapy and exercise therapy
                                  applications
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
                        Module 9: Advanced Rehabilitation Techniques
                      </h2>
                      <p className="text-muted">
                        Students will explore advanced methods, including
                        proprioceptive training, prometric exercises, and{" "}
                        {/* {showMore[9] ? (
                          <> */}
                        sport - specific drills.This module equips participants
                        to support high - performance athletes and clients with
                        complex rehabilitation needs.
                        <div className="row">
                          <ul className="mt-2 pl-3">
                            <li className="list-unstyled text-dark">
                              <b>CPR and first aid</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Dry needling and IASTM (instrument-assisted soft
                                tissue mobilization)
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Rigid tapping and mobility techniques</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Electrotherapy and exercise therapy applications
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
                          Module 10: Case Studies and Practical Application
                        </h2>
                        <p className="text-muted">
                          Participants will apply their knowledge through real -
                          life scenarios and role - play exercises.This module
                          emphasizes critical thinking, problem - solving, and
                          hands - on application of rehabilitation techniques to
                          prepare for real - world practice.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Case studies and group discussions</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Practical application and hands-on training
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Rehabilitation program design and
                                  implementation
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
                        Module 10: Case Studies and Practical Application
                      </h2>
                      <p className="text-muted">
                        Participants will apply their knowledge through
                        real-life scenarios and role-play exercises. This{" "}
                        {/* {showMore[10] ? (
                          <> */}
                        module emphasizes critical thinking, problem - solving,
                        and hands - on application of rehabilitation techniques
                        to prepare for real - world practice.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Case studies and group discussions</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Practical application and hands-on training</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Rehabilitation program design and implementation
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
      <section>
        <div className="container-fluid margintop p-0">
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/img/what-does-this-courses-include-offline.webp"
            }
            className="img-fluid mt-2 d-none d-md-block"
          />
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/img/what-does-this-courses-include-offline-mobile.webp"
            }
            className="img-fluid mt-2 d-block d-md-none"
          />
        </div>
      </section>
      <section className="mt-md-5 mt-3">
        <div className="container-fluid">
          <div className="container">
            <div className="covid mb-4 text-center">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">Our Institute </span>
                Accreditation
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row mt-4 align-items-center">
              <div className="col-lg-6">
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
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/mobile-all-logo.webp"
                    }
                    className="img-fluid lazy"
                    alt="FG Group"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container-fluid">
          <div className="container blog2">
            <div className="row mt-4">
              <div className="col-lg-6 certi text-center">
                <p className="my-4">demo lecture</p>
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/intro-injury-rehab.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="fggroup"
                  />
                  <div className="video-btn play-btn">
                    <a
                      aria-label="Fg Group"
                      onClick={() => openVideoModal("z9ULms1ia10")}
                      className="custom clickof"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 certi text-center">
                <p className="my-4">Injury rehab demo Certificate</p>
                <LazyLoadImage
                  effect="blur"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/recorded-session-certificate-5.webp"
                  }
                  width="90%"
                  alt="personal trainer and gym trainer course certificate"
                />
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
                  Build a Rewarding Career with{" "}
                  <span className="m-0 text-blue-color">
                    Physiotherapy & Therapy Courses
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      A course of physiotherapy is the perfect choice for
                      individuals passionate about helping others recover from
                      injuries and improve mobility. Physiotherapy focuses on
                      rehabilitation techniques, therapeutic exercises, and pain
                      management, making it a vital part of healthcare.
                    </p>
                    <p>
                      For those looking to expand their skills, a cupping
                      therapy course offers specialized training in an ancient
                      healing method that promotes blood circulation, reduces
                      muscle tension, and aids recovery. This course is ideal
                      for physiotherapists, massage therapists, and wellness
                      professionals seeking to add alternative therapies to
                      their practice.
                    </p>
                    <p>
                      Enrolling in therapist courses allows professionals to
                      enhance their expertise in different treatment methods,
                      including manual therapy, exercise prescription, and
                      patient assessment. These courses provide hands-on
                      training and theoretical knowledge essential for effective
                      patient care.
                    </p>
                    <p>
                      PT therapy (Physical Therapy) and PT rehab (Physical
                      Therapy Rehabilitation) focus on restoring movement and
                      function after injuries, surgeries, or medical conditions.
                      Professionals trained in these areas help patients regain
                      strength and mobility through personalized rehabilitation
                      programs.
                    </p>
                    <p>
                      Whether you choose a physiotherapy course, cupping therapy
                      course, or other therapist courses, these programs provide
                      valuable skills that open doors to rewarding career
                      opportunities in healthcare and wellness. Start your
                      journey today and make a difference in people's lives!
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

      <CourseReviewSection course_id="61838b7b21abcf4633d86315" />

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
                          {/* <option
                            className="field"
                            value="Advance Clinical Nutrition Workshop"
                          >
                            Advance Clinical Nutrition Workshop
                          </option> */}
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

export default CourseOfPhysiotherapy;
