import React, { useEffect, useState } from "react";
import "../../assets/css/home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Row } from "react-bootstrap";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import LoginModal from "../../assets/js/popup/login";
import { createCourseOrder } from "../../assets/js/utils/fitness-course";
import ModalVideo from "react-modal-video";
import CourseReviewSection from "../../components/partials/review/course-review";
import "react-lazy-load-image-component/src/effects/blur.css";
import RegistrationProcess from "../../components/fgiit/registration";
import CoursesInclude from "../../components/fgiit/courses";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TotalCourseEnrolled from "../../components/fgiit/enrolledCourse";
import { GroupInstructorMasterclass } from "../../components/course/AllCourseData";
import CourseForm from "../../components/course/courseForm";
import { Helmet } from "react-helmet";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";
import FlexibleAllReviews from "../../components/fgiit/flexibleAllReviews";

function OnlineGroupInstructorMasterclass() {
  const canonicalUrl = window.location.href;
  const [showModal, setShowModal] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [courses, setCourses] = useState(null);
  const [showMore, setShowMore] = useState(Array(5).fill(false));

  const toggleReadMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("fg_group_user_authorization")
  );

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  useEffect(() => {
    const storedData =
      JSON.parse(localStorage.getItem("tmp_CoursePurchasePayload")) || {};

    if (storedData.course_id) {
      handleOrder(storedData.course_id);
    } else {
      console.log("No stored address data found.");
    }
  }, []);

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };

  const handleOrder = async (course_id) => {
    try {
      const result = await createCourseOrder(course_id);
      if (result.showLoginModal) {
        setShowModal(true);
      } else if (result.success) {
        console.log("Order success");
        localStorage.removeItem("tmp_CoursePurchasePayload");
      }
    } catch (error) {
      console.error("Error during order:", error);
    }
    window.Razorpay && window.Razorpay.close && window.Razorpay.close();
    window.scrollTo(0, 0);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Helmet>
        <title>Top Online Fitness Instructor Course for Aspiring Trainers</title>
        <meta name="description" content="Enroll in the top online fitness instructor course and gain expert skills, certification, and career opportunities in fitness!" />
        <meta name="keyword" content="Group Instructor Master Class Online, Group Instructor Master Class, Online Instructor Master Class, Fgiit Online Group Instructor Master Class, master class online, master class, master course online, master course, fitness trainer course, group instructor course, group instructor, instructor, instructor course, course, group, masterclass, fitness instructor course, physical trainer course, fitness instructor certification, online fitness instructor course, fitness instructor certification online, fitness trainer certification, certified personal trainer, gym instructor course, fitness trainer, personal trainer training, personal fitness trainer, fitness instructor training, gym instructor course online, best fitness instructor certification, fitness instructor certification, fitness trainer, personal fitness certification, personal fitness trainer course, pt instructor course, fitness instructor course near me, Group Instructor Certification, Certified Group Instructor, Fitness Group Instructor Course, Group Fitness Instructor Course, Certified Fitness Instructor, Personal Trainer and Group Instructor Course, Best Group Fitness Instructor Course, Group Trainer Certification, Fitness Instructor Certification, Certified Fitness Trainer, Fitness Coach Training Course" />
        <meta property="og:title" content="Top Online Fitness Instructor Course for Aspiring Trainers" />
        <meta property="og:description" content="Enroll in the top online fitness instructor course and gain expert skills, certification, and career opportunities in fitness!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgiit/online-group-instructor-masterclass" />
        <link rel="canonical" href={{ canonicalUrl }} />
        <meta name="google-site-verification" content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K2X4NWNEP1');`}
        </script>
        <script>
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '284658493540181');
          fbq('track', 'PageView');`}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=284658493540181&ev=PageView&noscript=1"
          />`}
        </noscript>
      </Helmet>
      <p className="d-none"> Group Instructor Master Class Online, Group Instructor Master Class, Online Instructor Master Class, Fgiit Online Group Instructor Master Class, master class online, master class, master course online, master course, fitness trainer course, group instructor course, group instructor, instructor, instructor course, course, group, masterclass, fitness instructor course, physical trainer course, fitness instructor certification, online fitness instructor course, fitness instructor certification online, fitness trainer certification, certified personal trainer, gym instructor course, fitness trainer, personal trainer training, personal fitness trainer, fitness instructor training, gym instructor course online, best fitness instructor certification, fitness instructor certification, fitness trainer, personal fitness certification, personal fitness trainer course, pt instructor course, fitness instructor course near me, Group Instructor Certification, Certified Group Instructor, Fitness Group Instructor Course, Group Fitness Instructor Course, Certified Fitness Instructor, Personal Trainer and Group Instructor Course, Best Group Fitness Instructor Course, Group Trainer Certification, Fitness Instructor Certification, Certified Fitness Trainer, Fitness Coach Training Course
      </p>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      {showModal && <LoginModal onClose={closeModal} />}
      <SimpleHeader />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row resip">
              <div className="col-lg-6">
                <div className="product-imgs singal-product-img">
                  <div className="main-image text-center mt-4">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        GroupInstructorMasterclass.courseImage[activeImageIndex]
                      }
                      alt="FG Group"
                      width="85%"
                    />
                  </div>
                  <div className="thumbnail-images">
                    {GroupInstructorMasterclass.courseImage.map(
                      (image, index) => (
                        <div
                          key={index}
                          className={`thumbnail-image ${index === activeImageIndex ? "active" : ""
                            }`}
                          onClick={() => handleThumbnailClick(index)}
                          style={{ marginLeft: "15px" }}
                        >
                          <Row>
                            <div className="py-1 mt-2 px-2">
                              <div
                                style={{
                                  width: "78px",
                                  height: "110px",
                                  cursor: "pointer",
                                }}
                              >
                                <img
                                  src={image}
                                  alt="FG Group"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                  }}
                                />
                              </div>
                            </div>
                          </Row>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 w">
                <CourseForm
                  courseData={GroupInstructorMasterclass}
                  isAuthenticated={isAuthenticated}
                  setShowModal={setShowModal}
                  setCourses={setCourses}
                  courses={courses}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  handleOrder={handleOrder}
                  BuyButton={GroupInstructorMasterclass.BuyButton}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <RegistrationProcess />
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
                          Module 1: Tabata Workout Fundamentals
                        </h2>

                        <p className="text-muted">
                          This module dives into the high-intensity interval
                          training (HIIT) style of Tabata workouts, focusing on
                          their structure, benefits, and application in group
                          fitness settings. Participants will learn how to
                          design and lead effective Tabata sessions, blending
                          cardio and strength exercises to maximize calorie
                          burn, improve endurance, and engage diverse fitness
                          levels.
                          <ul className="row">
                            <div className="p-3 mt-2">
                              <li className="list-unstyled text-dark">
                                <b>Introduction to Tabata workout</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Science behind Tabata: benefits, physiology
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  How to create Tabata exercises and circuits
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Upper body Tabata exercises: chest, back,
                                  shoulders, arms
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Lower body Tabata exercises: legs, glutes,
                                  calves
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Warm-up and stretching exercises for Tabata
                                </b>
                              </li>
                            </div>
                          </ul>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container order-1 mt-2">
                        <img
                          src="/assets/images/blog/walkouts.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/blog/walkouts.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 1: Tabata Workout Fundamentals
                      </h2>
                      <p className="text-muted">
                        This module dives into the high-intensity interval
                        training (HIIT) style of Tabata workouts, focusing on {' '}
                        {/* {showMore[1] ? (
                          <> */}
                        their structure, benefits, and application in group
                        fitness settings. Participants will learn how to
                        design and lead effective Tabata sessions, blending
                        cardio and strength exercises to maximize calorie
                        burn, improve endurance, and engage diverse fitness
                        levels.
                        <ul className="row">
                          <div className="p-2 mt-2">
                            <li className="list-unstyled text-dark">
                              <b>Introduction to Tabata workout</b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                Science behind Tabata: benefits, physiology
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                How to create Tabata exercises and circuits
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Upper body Tabata exercises: chest, back,
                                shoulders, arms
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                Lower body Tabata exercises: legs, glutes,
                                calves
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                Warm-up and stretching exercises for Tabata
                              </b>
                            </li>
                          </div>
                        </ul>
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
                          src="/assets/images/blog/squats.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 2: Functional Training Fundamentals
                        </h2>

                        <p className="text-muted">
                          Exploring the core principles of functional training,
                          this module emphasizes exercises that mimic real-life
                          movements, enhancing strength, balance, and
                          coordination. Participants will learn to structure
                          group workouts that cater to varied fitness levels,
                          focusing on building foundational strength and
                          improving daily functionality through dynamic
                          exercises.
                          <ul className="row">
                            <div className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Introduction to functional training</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Science behind functional training: benefits,
                                  physiology
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  How to create functional training exercises
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Upper body functional training exercises:
                                  chest, back, shoulders, arms
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Lower body functional training exercises:
                                  legs, glutes, calves
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Warm-up and stretching exercises for
                                  functional training
                                </b>
                              </li>
                            </div>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/blog/squats.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 2: Functional Training Fundamentals
                      </h2>
                      <p className="text-muted">
                        Exploring the core principles of functional training,
                        this module emphasizes exercises that mimic real-life {' '}
                        {/* {showMore[2] ? (
                          <> */}
                        movements, enhancing strength, balance, and
                        coordination. Participants will learn to structure
                        group workouts that cater to varied fitness levels,
                        focusing on building foundational strength and
                        improving daily functionality through dynamic
                        exercises.
                        <ul className="row">
                          <div className="p-2 mt-2">
                            <li className="list-unstyled text-dark">
                              <b>Introduction to functional training</b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                Science behind functional training:
                                benefits, physiology
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                How to create functional training exercises
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Upper body functional training exercises:
                                chest, back, shoulders, arms
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                Lower body functional training exercises:
                                legs, glutes, calves
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                Warm-up and stretching exercises for
                                functional training
                              </b>
                            </li>
                          </div>
                        </ul>
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
                          Module 3: TRX Band Workout Fundamentals
                        </h2>

                        <p className="text-muted">
                          This module introduces participants to TRX suspension
                          training, including its history, techniques, and
                          benefits. Designed to provide full-body engagement,
                          TRX workouts leverage body weight and gravity to build
                          strength, improve flexibility, and enhance core
                          stability. Participants will learn how to create and
                          lead TRX band sessions suitable for all fitness
                          levels, from beginners to advanced athletes.
                          <ul className="row">
                            <div className="p-3 mt-2">
                              <li className="list-unstyled text-dark">
                                <b> Introduction to TRX band workout </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>History and benefits of TRX training</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  How to use TRX bands: setup, safety, and
                                  basics
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Upper body TRX exercises: chest, back,
                                  shoulders, arms
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Lower body TRX exercises: legs, glutes, calves
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Warm-up and stretching exercises using TRX
                                  bands
                                </b>
                              </li>
                            </div>
                          </ul>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container order-1 mt-2">
                        <img
                          src="/assets/images/blog/step-up_onto_chair.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/blog/step-up_onto_chair.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 3: TRX Band Workout Fundamentals
                      </h2>
                      <p className="text-muted">
                        This module introduces participants to TRX suspension
                        training, including its history, techniques, and {' '}
                        {/* {showMore[3] ? (
                          <> */}
                        benefits. Designed to provide full-body engagement,
                        TRX workouts leverage body weight and gravity to
                        build strength, improve flexibility, and enhance
                        core stability. Participants will learn how to
                        create and lead TRX band sessions suitable for all
                        fitness levels, from beginners to advanced athletes.
                        <ul className="row">
                          <div className="p-2 mt-2">
                            <li className="list-unstyled text-dark">
                              <b> Introduction to TRX band workout </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>History and benefits of TRX training</b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                How to use TRX bands: setup, safety, and
                                basics
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Upper body TRX exercises: chest, back,
                                shoulders, arms
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                Lower body TRX exercises: legs, glutes,
                                calves
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                Warm-up and stretching exercises using TRX
                                bands
                              </b>
                            </li>
                          </div>
                        </ul>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <FlexibleAllReviews />
      <CoursesInclude />
      <section className="mt-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row mt-4">
              <div className="col-lg-6 certi text-center">
                <p className="my-4">demo lecture</p>
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    width="100%"
                    alt="Fg Group"
                    style={{ borderRadius: "10px" }}
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/functional_training.webp"
                    }
                  />
                  <div className="video-btn play-btn">
                    <a aria-label="Fg Group"
                      onClick={() => openVideoModal("b-DhFdSpcEQ")}
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
                <p className="my-4">Group Instructor demo Certificate</p>
                <LazyLoadImage
                  effect="blur"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/gir-demo.webp"
                  }
                  width="90%"
                  alt="personal trainer and gym trainer course certificate"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <TotalCourseEnrolled />
      <section>
        <div className="container-fluid margintop">
          <div className="container pb-5">
            <div className="">
              <div className="covid text-center">
                <h2 className="mt-2 h2-fs">
                  Advance Your Career with a{" "}
                  <span className="m-0 text-blue-color">Group Instructor Course</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      A group instructor course is the perfect way to start or enhance your fitness career. Group fitness training is in high demand, and becoming a certified group instructor allows you to lead engaging and effective workout sessions for various fitness levels.
                    </p>
                    <p>
                      An instructor course provides essential knowledge on exercise techniques, class structuring, and motivational strategies to keep participants engaged. A fitness instructor course will equip you with the right skills to design and deliver high-energy classes.
                    </p>
                    <p>
                      For those seeking flexibility, an online fitness instructor course is a great option. With virtual lessons, expert guidance, and interactive modules, you can learn at your own pace while gaining practical experience. Online courses cover key topics such as anatomy, injury prevention, and client management, ensuring you're well-prepared for real-world training.
                    </p>
                    <p>
                      Completing a group instructor course not only boosts your credentials but also opens doors to opportunities in gyms, studios, and even virtual training. Whether you're new to the industry or looking to specialize, enrolling in a certified fitness instructor course will set you on the path to success. Start your journey today!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CourseReviewSection course_id="62d33b670ac1b482c32bd442" />
      <FlexibleFooter />
    </>
  );
}

export default OnlineGroupInstructorMasterclass;
