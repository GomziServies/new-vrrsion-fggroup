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
import { LazyLoadImage } from "react-lazy-load-image-component";
import RegistrationProcess from "../../components/fgiit/registration";
import CoursesInclude from "../../components/fgiit/courses";
import TotalCourseEnrolled from "../../components/fgiit/enrolledCourse";
import { InjuryRehabilitationmasterclass } from "../../components/course/AllCourseData";
import CourseForm from "../../components/course/courseForm";
import { Helmet } from "react-helmet";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";
import FlexibleAllReviews from "../../components/fgiit/flexibleAllReviews";

function PhysiotherapyCourse() {
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
        <title>Join Our Physiotherapy Course & Enhance Your Skills</title>
        <meta name="description" content="Enroll in our physiotherapy course to gain essential skills, certification, and start a rewarding career in healthcare." />
        <meta name="keyword" content="injury rehabilitation course, rehabilitation course, course, physical rehabilitation, physiotherapy course, injury, masterclass, Online Course Of Physiotherapy, Course Of Physiotherapy Online, Fgiit Online injury rehabilitation Workshop, Fgiit Online Course Of Physiotherapy, course of physiotherapy, course of physical therapy, physical rehabilitation, physical treatment, cupping therapy course, physical therapy classes, online physical therapy programs, physical therapy programs near me, therapist courses, physical therapy courses near me, physical therapy training near me, pt therapy, physical rehab, center for physical therapy, physical rehabilitation courses, pt rehab, pt course, online physical therapy programs, pt courses online, online pt programs, injury, repetitive strain injury, achilles injury, tailbone injury, ACL Injury Recovery, Rotator Cuff Injury, Sports Injury Rehabilitation, Advanced Injury Prevention Course, Concussion Therapy Course, Pain Management Workshop Online, Certified Injury Rehabilitation Specialist" />
        <meta property="og:title" content="Join Our Physiotherapy Course & Enhance Your Skills" />
        <meta property="og:description" content="Enroll in our physiotherapy course to gain essential skills, certification, and start a rewarding career in healthcare." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgiit/physiotherapy-course" />
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
      <p className="d-none">injury rehabilitation course, rehabilitation course, course, physical rehabilitation, physiotherapy course, injury, masterclass, Online Course Of Physiotherapy, Course Of Physiotherapy Online, Fgiit Online injury rehabilitation Workshop, Fgiit Online Course Of Physiotherapy, course of physiotherapy, course of physical therapy, physical rehabilitation, physical treatment, cupping therapy course, physical therapy classes, online physical therapy programs, physical therapy programs near me, therapist courses, physical therapy courses near me, physical therapy training near me, pt therapy, physical rehab, center for physical therapy, physical rehabilitation courses, pt rehab, pt course, online physical therapy programs, pt courses online, online pt programs, injury, repetitive strain injury, achilles injury, tailbone injury, ACL Injury Recovery, Rotator Cuff Injury, Sports Injury Rehabilitation, Advanced Injury Prevention Course, Concussion Therapy Course, Pain Management Workshop Online, Certified Injury Rehabilitation Specialist
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
                        InjuryRehabilitationmasterclass.courseImage[
                        activeImageIndex
                        ]
                      }
                      alt="FG Group"
                      width="85%"
                    />
                  </div>
                  <div className="thumbnail-images">
                    {InjuryRehabilitationmasterclass.courseImage.map(
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
                  courseData={InjuryRehabilitationmasterclass}
                  isAuthenticated={isAuthenticated}
                  setShowModal={setShowModal}
                  setCourses={setCourses}
                  courses={courses}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  handleOrder={handleOrder}
                  BuyButton={InjuryRehabilitationmasterclass.BuyButton}
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
                      "/assets/images/img/intro-injury-rehab.webp"
                    }
                  />
                  <div className="video-btn play-btn">
                    <a aria-label="Fg Group"
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
                    "/assets/images/img/injury-demo.webp"
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
                  Master Injury{" "}
                  <span className="m-0 text-blue-color">Rehabilitation with a Physiotherapy Course</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      An injury rehabilitation course is essential for individuals looking to specialize in restoring movement and function after an injury. This specialized training teaches techniques to help patients recover from various injuries, regain mobility, and reduce pain. Whether you're an aspiring physiotherapist or looking to enhance your skills, a rehabilitation course is the perfect foundation.
                    </p>
                    <p>
                      In a physiotherapy course, you'll learn various rehabilitation strategies that focus on muscle strength, joint mobility, and pain management. These courses cover anatomy, therapeutic exercises, manual therapy, and injury prevention, enabling you to provide comprehensive care.
                    </p>
                    <p>
                      For advanced learners, a masterclass in injury rehabilitation can provide in-depth knowledge and hands-on techniques to treat specific injuries. It offers specialized skills to help with complex conditions such as sports injuries, post-surgery recovery, and chronic pain.
                    </p>
                    <p>
                      Completing an injury rehabilitation course will help you become proficient in assessing injuries, designing rehabilitation programs, and ensuring proper recovery. Whether you are a fitness trainer, physiotherapist, or healthcare professional, these courses will equip you with the tools needed to assist patients in returning to their normal activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CourseReviewSection course_id="61e8b1aa74eefa46b05548a3" />
      <FlexibleFooter />
    </>
  );
}

export default PhysiotherapyCourse;
