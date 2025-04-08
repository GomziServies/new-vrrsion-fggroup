import React, { useState } from "react";
import "../../assets/css/home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import ModalVideo from "react-modal-video";
import CourseReviewSection from "../../components/partials/review/course-review";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CredentialsFutureFitness from "../../components/fgiit/credentials";
import OfflineCourseForm from "../../components/offline-course/offlineCourseForm";
import { OfflineInjuryRehabilitationWorkshopCourseData } from "../../components/offline-course/OfflineCourseDataLoader";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CourseReviews from "../../components/fgiit/courseReviews";
import OurOfflineStudents from "../../components/course/ourOfflineStudents";

function InjuryRehabilitationProgram() {
  const canonicalUrl = window.location.href;
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
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse the currently active item
    } else {
      setActiveIndex(index); // Set the clicked item as active
    }
  };
  const [showMore, setShowMore] = useState(Array(5).fill(false));

  const toggleReadMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
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
    "/assets/images/img/aas2.webp",
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
    // nav: true,
    dots: false,
    autoplay: true,
    // navText: [
    //   '<i class="fas fa-arrow-left"></i>',
    //   '<i class="fas fa-arrow-right"></i>',
    // ],
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

  return (
    <>
      <Helmet>
        <title>Injury Rehabilitation Program for Fast & Safe Recovery</title>
        <meta
          name="description"
          content="Recover safely and quickly with our injury rehabilitation program. Get expert guidance to restore strength and mobility today!"
        />
        <meta
          name="keyword"
          content="Offline injury rehabilitation masterclass, injury rehabilitation masterclass, injury rehabilitation masterclass offline, Offline Course Of Physiotherapy, Course Of Physiotherapy Offline, course of physiotherapy, course of physical therapy, physical rehabilitation, physical treatment, physical therapy classes, physical therapy programs, physical therapy programs near me, therapist courses, physical therapy courses near me, physical therapy training near me, pt therapy, physical rehab, center for physical therapy, physical rehabilitation courses, pt rehab, Sports Injury Rehabilitation Course, Certified Physiotherapy Course, Post Injury Rehabilitation, Best Physiotherapy Certification, Physiotherapy Diploma Course, Sports Therapy Certification, Advanced Rehabilitation Training, Best Sports Therapy Course, Physiotherapy Course Near Me, Strength and Rehab Course, Recovery and Rehabilitation Course, Injury Recovery Course, Sports Injury Recovery Training, Orthopedic Rehabilitation Certification, Personal Trainer Injury Rehab Course, Rehab Specialist Certification, Functional Movement and Injury Prevention, Sports Physiotherapy Course, Advanced Physical Therapy Training, Certified Rehabilitation Specialist Course, Strength and Conditioning for Rehabilitation, Post Surgery Rehabilitation Course, Online Injury Rehabilitation Course, Physical Therapy and Sports Rehabilitation, Injury Prevention and Recovery Course, Physiotherapy Certification Course, Physical Medicine and Rehabilitation Course, Injury Management Training, Manual Therapy and Rehabilitation Course, Movement Therapy Certification"
        />
        <meta
          property="og:title"
          content="Injury Rehabilitation Program for Fast & Safe Recovery"
        />
        <meta
          property="og:description"
          content="Recover safely and quickly with our injury rehabilitation program. Get expert guidance to restore strength and mobility today!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fgiit/injury-rehabilitation-program"
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
            fbq('init', '485635632433430');
            fbq('track', 'PageView');
        `}
        </script>
        <noscript>
          {
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=485635632433430&ev=PageView&noscript=1" />'
          }
        </noscript>
      </Helmet>
      <p className="d-none">
        Offline injury rehabilitation masterclass, injury rehabilitation masterclass, injury rehabilitation masterclass offline, Offline Course Of Physiotherapy, Course Of Physiotherapy Offline, course of physiotherapy, course of physical therapy, physical rehabilitation, physical treatment, physical therapy classes, physical therapy programs, physical therapy programs near me, therapist courses, physical therapy courses near me, physical therapy training near me, pt therapy, physical rehab, center for physical therapy, physical rehabilitation courses, pt rehab, Sports Injury Rehabilitation Course, Certified Physiotherapy Course, Post Injury Rehabilitation, Best Physiotherapy Certification, Physiotherapy Diploma Course, Sports Therapy Certification, Advanced Rehabilitation Training, Best Sports Therapy Course, Physiotherapy Course Near Me, Strength and Rehab Course, Recovery and Rehabilitation Course, Injury Recovery Course, Sports Injury Recovery Training, Orthopedic Rehabilitation Certification, Personal Trainer Injury Rehab Course, Rehab Specialist Certification, Functional Movement and Injury Prevention, Sports Physiotherapy Course, Advanced Physical Therapy Training, Certified Rehabilitation Specialist Course, Strength and Conditioning for Rehabilitation, Post Surgery Rehabilitation Course, Online Injury Rehabilitation Course, Physical Therapy and Sports Rehabilitation, Injury Prevention and Recovery Course, Physiotherapy Certification Course, Physical Medicine and Rehabilitation Course, Injury Management Training, Manual Therapy and Rehabilitation Course, Movement Therapy Certification
      </p>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <SimpleHeader />
      {/* <div className="dicount-instructor">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/mix-img/discount.png"}
          width="60px"
          alt="FG Group"
        />
      </div> */}
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="course-card-page-design mr-md-4 black-before">
                  <div className="course-scroll">
                    <OwlCarousel
                      loop
                      dots={false}
                      autoplay
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
                    <div className="d-md-block d-none">
                      <div className="course-info">
                        <h2 className="h6-fs course-title">Course Info</h2>
                        <ul className="course-list">
                          {OfflineInjuryRehabilitationWorkshopCourseData?.info ? (
                            <>
                              <li className="fs-1">
                                <i className="fas fa-clock"></i>
                                {
                                  OfflineInjuryRehabilitationWorkshopCourseData
                                    .info[0]
                                }
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {
                                  OfflineInjuryRehabilitationWorkshopCourseData
                                    .info[1]
                                }
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {
                                  OfflineInjuryRehabilitationWorkshopCourseData
                                    .info[2]
                                }
                              </li>
                              <li>
                                <i className="fas fa-file-signature"></i>
                                {
                                  OfflineInjuryRehabilitationWorkshopCourseData
                                    .info[3]
                                }
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <i className="fas fa-clock"></i>
                                {
                                  OfflineInjuryRehabilitationWorkshopCourseData
                                    .secondInfo[0]
                                }
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {
                                  OfflineInjuryRehabilitationWorkshopCourseData
                                    .secondInfo[1]
                                }
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {
                                  OfflineInjuryRehabilitationWorkshopCourseData
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
                <OfflineCourseForm
                  courseData={OfflineInjuryRehabilitationWorkshopCourseData}
                  whatsappMessage="Hello, I wanted to know more about the Offline Injury Rehabilitation Workshop."
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
      <CourseReviews />
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
      <OurOfflineStudents />
      <section>
        <div className="container-fluid margintop">
          <div className="container blog2 pb-5">
            <div className="">
              <div className="covid text-center">
                <h2 className="mt-2 h2-fs">
                  Enhance Recovery with an{" "}
                  <span className="m-0 text-blue-color">Injury Rehabilitation Program</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      An effective injury rehabilitation program is essential for restoring strength, mobility, and overall well-being after an injury. Whether recovering from a sports injury, surgery, or chronic pain, a structured program ensures safe and efficient healing. These programs focus on guided exercises, mobility training, and pain management techniques to help individuals regain their full potential.
                    </p>
                    <p>
                      A well-designed injury rehabilitation program includes strength training, flexibility exercises, and posture correction, minimizing the risk of re-injury. Expert physiotherapists and rehabilitation specialists create personalized recovery plans tailored to each individual's needs, ensuring a smooth and gradual return to normal activities.
                    </p>
                    <p>
                      For those interested in a professional career in rehabilitation, enrolling in a course of physiotherapy is a great option. This course provides in-depth knowledge of human anatomy, movement science, and therapeutic techniques used in injury recovery.
                    </p>
                    <p>
                      By combining an injury rehabilitation program with knowledge from a course of physiotherapy, individuals can achieve optimal recovery while professionals can advance their expertise in physical therapy and rehabilitation.
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

      <CourseReviewSection course_id="6297dde033971335bde5e241" />

      <FgiitFooter />
    </>
  );
}

export default InjuryRehabilitationProgram;
