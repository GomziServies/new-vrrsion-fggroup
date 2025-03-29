import React, { useEffect, useState } from "react";
import "../../assets/css/home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Row } from "react-bootstrap";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import LoginModal from "../../assets/js/popup/login";
import { createCourseOrder } from "../../assets/js/utils/fitness-course";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import CourseReviewSection from "../../components/partials/review/course-review";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import RegistrationProcess from "../../components/fgiit/registrationprocess";
import CourseInclude from "../../components/fgiit/CourseInclude";
import TotalCourseEnrolled from "../../components/fgiit/enrolledCourse";
import { AdvanceClinicalNutrition } from "../../components/course/AllCourseData";
import CourseForm from "../../components/course/courseForm";
import { Helmet } from "react-helmet";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";
import FlexibleAllReviews from "../../components/fgiit/flexibleAllReviews";

function ClinicalNutritionCourse() {
  const canonicalUrl = window.location.href;
  const [showModal, setShowModal] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [courses, setCourses] = useState(null);

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
        <title>Top Clinical Nutrition Course for Aspiring Experts</title>
        <meta name="description" content="Enroll in the top clinical nutrition course and gain expert knowledge, certification, and career opportunities in healthcare!" />
        <meta name="keyword" content="clinical, nutrition, advance, clinical nutrition course, course, nutrition course, nutrition courses online, dietician course online, dietician course, certified nutritionist course, nutrition certification online, nutrition certification, sports nutrition courses, dietitian course online, diet and nutrition course, nutrition and dietetics course, diploma in nutrition and dietetics, weight management, certification courses, bachelor of nutrition online, nutrition online, dietitian degree, clinical nutrition courses, Sports and Clinical Nutrition Course, Online Clinical Dietetics Course, Online Diet and Nutrition Course, Clinical Dietetics Course Online, Clinical Nutrition Training, Best Clinical Nutrition Certification, Functional Nutrition Course Online, Diploma in Clinical Nutrition, Holistic Nutrition Course Online, Online Dietitian Certification Course, Certified Clinical Nutritionist, Weight Loss Nutrition Course, Online Advanced Dietetics Course, Certified Nutrition Specialist Online, Clinical Nutrition Degree Online, Best Online Clinical Nutrition Program, Nutrition and Wellness Coaching Certification, Integrative and Functional Nutrition Course, Sports and Clinical Nutrition Course, Certified Clinical Dietitian Online, Health and Clinical Nutrition Course" />
        <meta property="og:title" content="Top Clinical Nutrition Course for Aspiring Experts" />
        <meta property="og:description" content="Enroll in the top clinical nutrition course and gain expert knowledge, certification, and career opportunities in healthcare!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgiit/clinical-nutrition-course" />
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
      <p className="d-none"> clinical, nutrition, advance, clinical nutrition course, course, nutrition course, nutrition courses online, dietician course online, dietician course, certified nutritionist course, nutrition certification online, nutrition certification, sports nutrition courses, dietitian course online, diet and nutrition course, nutrition and dietetics course, diploma in nutrition and dietetics, weight management, certification courses, bachelor of nutrition online, nutrition online, dietitian degree, clinical nutrition courses, Sports and Clinical Nutrition Course, Online Clinical Dietetics Course, Online Diet and Nutrition Course, Clinical Dietetics Course Online, Clinical Nutrition Training, Best Clinical Nutrition Certification, Functional Nutrition Course Online, Diploma in Clinical Nutrition, Holistic Nutrition Course Online, Online Dietitian Certification Course, Certified Clinical Nutritionist, Weight Loss Nutrition Course, Online Advanced Dietetics Course, Certified Nutrition Specialist Online, Clinical Nutrition Degree Online, Best Online Clinical Nutrition Program, Nutrition and Wellness Coaching Certification, Integrative and Functional Nutrition Course, Sports and Clinical Nutrition Course, Certified Clinical Dietitian Online, Health and Clinical Nutrition Course
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
                        AdvanceClinicalNutrition.courseImage[activeImageIndex]
                      }
                      alt="FG Group"
                      width="85%"
                    />
                  </div>
                  <div className="thumbnail-images">
                    {AdvanceClinicalNutrition.courseImage.map(
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
                  courseData={AdvanceClinicalNutrition}
                  isAuthenticated={isAuthenticated}
                  setShowModal={setShowModal}
                  setCourses={setCourses}
                  courses={courses}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  handleOrder={handleOrder}
                  BuyButton={AdvanceClinicalNutrition.BuyButton}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid p-0">
          <RegistrationProcess />
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
                          Human Physiology and Function of Cells
                        </h2>
                        <p className="text-muted">
                          Understand the fundamental workings of the human body
                          at the cellular level. This module covers cell
                          functions, how cells process nutrients, and the role
                          of different systems (nervous, cardiovascular, etc.)
                          in maintaining health.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/human-physiology.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/human-physiology.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Human Physiology and Function of Cells
                      </h2>
                      <p className="text-muted">
                        Understand the fundamental workings of the human body at the cellular level. This module {' '}
                        {/* {showMore[1] ? (
                          <> */}
                        covers cell functions, how cells process nutrients,
                        and the role of different systems (nervous,
                        cardiovascular, etc.) in maintaining health.
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
                          src="/assets/images/course-img/definition-of-health.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Definition of Health
                        </h2>
                        <p className="text-muted">
                          Explore the comprehensive definition of health beyond the absence of disease. Learn about the physical, mental, and social aspects of well-being and how to achieve balance for optimal health.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/definition-of-health.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Definition of Health
                      </h2>
                      <p className="text-muted">
                        Explore the comprehensive definition of health beyond the absence of disease. Learn about  {' '}
                        {/* {showMore[2] ? (
                          <> */}
                        the physical, mental, and social aspects of well-being and how to achieve balance for optimal health.
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
                          What Are Lifestyle Diseases?
                        </h2>
                        <p className="text-muted">
                          Identify common lifestyle diseases such as diabetes, obesity, cardiovascular issues, and how poor lifestyle choices contribute to these conditions. Learn prevention strategies and interventions through nutrition and lifestyle modifications.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/lifestyle-diseases.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/lifestyle-diseases.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        What Are Lifestyle Diseases?
                      </h2>
                      <p className="text-muted">
                        Identify common lifestyle diseases such as diabetes, obesity, cardiovascular issues, and  {' '}
                        {/* {showMore[1] ? (
                          <> */}
                        how poor lifestyle choices contribute to these conditions. Learn prevention strategies and interventions through nutrition and lifestyle modifications.
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
                          src="/assets/images/course-img/food-macro.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Food Macro and Micro Elements
                        </h2>
                        <p className="text-muted">
                          Gain a deep understanding of macronutrients (proteins, fats, carbohydrates) and micronutrients (vitamins, minerals). Learn their roles in supporting the body's overall functioning, growth, and repair.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/food-macro.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Food Macro and Micro Elements {' '}
                      </h2>
                      <p className="text-muted">
                        Gain a deep understanding of macronutrients (proteins, fats, carbohydrates) and micronutrients
                        {/* {showMore[2] ? (
                          <> */}
                        (vitamins, minerals). Learn their roles in supporting the body's overall functioning, growth, and repair.
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
                          Food Digestion System
                        </h2>
                        <p className="text-muted">
                          Discover the intricacies of the digestive system, from ingestion to nutrient absorption. This module explains how food is broken down and utilized by the body and the role of gut health in overall wellness.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/food-digestion-system.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/food-digestion-system.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Food Digestion System
                      </h2>
                      <p className="text-muted">
                        Discover the intricacies of the digestive system, from ingestion to nutrient absorption.  {' '}
                        {/* {showMore[1] ? (
                          <> */}
                        This module explains how food is broken down and utilized by the body and the role of gut health in overall wellness.
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
                          src="/assets/images/course-img/weight-management.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Weight Management
                        </h2>
                        <p className="text-muted">
                          Learn effective strategies for weight management, including calorie balancing, the role of metabolism, and sustainable diet plans that promote fat loss without sacrificing health.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/weight-management.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Weight Management
                      </h2>
                      <p className="text-muted">
                        Learn effective strategies for weight management, including calorie balancing, the  {' '}
                        {/* {showMore[2] ? (
                          <> */}
                        role of metabolism, and sustainable diet plans that promote fat loss without sacrificing health.
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
                          Blood Sugar Control
                        </h2>
                        <p className="text-muted">
                          Understand how blood sugar levels impact overall health and how to manage conditions like insulin resistance and diabetes. Learn about dietary interventions to maintain optimal blood sugar balance.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/blood-sugar-control.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/blood-sugar-control.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Blood Sugar Control
                      </h2>
                      <p className="text-muted">
                        Understand how blood sugar levels impact overall health and how to manage conditions  {' '}
                        {/* {showMore[1] ? (
                          <> */}
                        like insulin resistance and diabetes. Learn about dietary interventions to maintain optimal blood sugar balance.
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
                          src="/assets/images/course-img/hormones-of-the-body.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Important Hormones of the Body
                        </h2>
                        <p className="text-muted">
                          Delve into the world of hormones and how they regulate essential body functions such as metabolism, stress response, reproduction, and mood. Learn how nutrition can influence hormonal balance.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/hormones-of-the-body.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Important Hormones of the Body
                      </h2>
                      <p className="text-muted">
                        Delve into the world of hormones and how they regulate essential body functions such as  {' '}
                        {/* {showMore[2] ? (
                          <> */}
                        metabolism, stress response, reproduction, and mood. Learn how nutrition can influence hormonal balance.
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
                          Worst Food Elements
                        </h2>
                        <p className="text-muted">
                          Identify harmful food elements such as trans fats, processed sugars, and additives that can negatively impact health. Learn how to reduce or eliminate these from your diet to prevent disease and promote wellness.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/worst-food.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/worst-food.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Worst Food Elements
                      </h2>
                      <p className="text-muted">
                        Identify harmful food elements such as trans fats, processed sugars, and additives that can  {' '}
                        {/* {showMore[1] ? (
                          <> */}
                        negatively impact health. Learn how to reduce or eliminate these from your diet to prevent disease and promote wellness.
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
                          src="/assets/images/course-img/essential-food.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Essential Food Elements
                        </h2>
                        <p className="text-muted">
                          Explore the nutrients essential for health, including vitamins, minerals, omega-3 fatty acids, and antioxidants. Learn how to incorporate these elements into a balanced diet to support energy, immunity, and longevity.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/essential-food.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Essential Food Elements
                      </h2>
                      <p className="text-muted">
                        Explore the nutrients essential for health, including vitamins, minerals, omega-3  {' '}
                        {/* {showMore[2] ? (
                          <> */}
                        fatty acids, and antioxidants. Learn how to incorporate these elements into a balanced diet to support energy, immunity, and longevity.
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
                          Bone Health
                        </h2>
                        <p className="text-muted">
                          Understand the importance of nutrition in maintaining strong, healthy bones. Learn about calcium, vitamin D, and other key nutrients that support bone density and prevent conditions like osteoporosis.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/bone-health.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/bone-health.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Bone Health
                      </h2>
                      <p className="text-muted">
                        Understand the importance of nutrition in maintaining strong, healthy bones. Learn about  {' '}
                        {/* {showMore[1] ? (
                          <> */}
                        calcium, vitamin D, and other key nutrients that support bone density and prevent conditions like osteoporosis.
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
                          src="/assets/images/course-img/stress-control.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Stress Control
                        </h2>
                        <p className="text-muted">
                          Explore the relationship between stress and health, and learn nutrition-based strategies to manage stress effectively. This module also covers lifestyle changes that help reduce stress and its impact on the body.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/stress-control.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Stress Control
                      </h2>
                      <p className="text-muted">
                        Explore the relationship between stress and health, and learn nutrition-based strategies  {' '}
                        {/* {showMore[2] ? (
                          <> */}
                        to manage stress effectively. This module also covers lifestyle changes that help reduce stress and its impact on the body.
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
                          Important Blood Tests for Ensuring Sound Health
                        </h2>
                        <p className="text-muted">
                          Learn about key blood tests that can provide insights into your overall health, including cholesterol levels, blood sugar, liver function, and inflammation markers. Understanding these tests helps in creating effective health plans.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/blood-tests.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/blood-tests.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Important Blood Tests for Ensuring Sound Health
                      </h2>
                      <p className="text-muted">
                        Learn about key blood tests that can provide insights into your overall health, including  {' '}
                        {/* {showMore[1] ? (
                          <> */}
                        cholesterol levels, blood sugar, liver function, and inflammation markers. Understanding these tests helps in creating effective health plans.
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
                          src="/assets/images/course-img/high-uric-acid.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          High Uric Acid and Gout
                        </h2>
                        <p className="text-muted">
                          Understand the causes and symptoms of high uric acid and gout. Learn dietary interventions to manage and prevent these painful conditions, focusing on reducing uric acid levels naturally.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/high-uric-acid.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        High Uric Acid and Gout
                      </h2>
                      <p className="text-muted">
                        Understand the causes and symptoms of high uric acid and gout. Learn dietary interventions  {' '}
                        {/* {showMore[2] ? (
                          <> */}
                        to manage and prevent these painful conditions, focusing on reducing uric acid levels naturally.
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
                          Autoimmune Diseases
                        </h2>
                        <p className="text-muted">
                          Delve into autoimmune diseases such as rheumatoid arthritis, lupus, and celiac disease. Learn about nutritional strategies that can help manage symptoms and improve quality of life for individuals with these conditions.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/autoimmune-diseases.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/autoimmune-diseases.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Autoimmune Diseases
                      </h2>
                      <p className="text-muted">
                        Delve into autoimmune diseases such as rheumatoid arthritis, lupus, and celiac disease. {' '}
                        {/* {showMore[1] ? (
                          <> */}
                        Learn about nutritional strategies that can help manage symptoms and improve quality of life for individuals with these conditions.
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
                          src="/assets/images/course-img/health-plan.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Perfect Plan to Achieve Best Health
                        </h2>
                        <p className="text-muted">
                          Create a comprehensive, personalized health plan. This module focuses on combining diet, exercise, and lifestyle strategies to help individuals reach optimal health and wellness.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/health-plan.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Perfect Plan to Achieve Best Health
                      </h2>
                      <p className="text-muted">
                        Create a comprehensive, personalized health plan. This module focuses on combining diet,  {' '}
                        {/* {showMore[2] ? (
                          <> */}
                        exercise, and lifestyle strategies to help individuals reach optimal health and wellness.
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
                          Exercise Plan
                        </h2>
                        <p className="text-muted">
                          Learn how to develop exercise plans that complement nutritional strategies. This module covers the basics of fitness, including strength, flexibility, and cardiovascular health, and how these fit into a healthy lifestyle.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/exercise-plan.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/exercise-plan.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Exercise Plan

                      </h2>
                      <p className="text-muted">
                        Learn how to develop exercise plans that complement nutritional strategies. This  {' '}
                        {/* {showMore[1] ? (
                          <> */}
                        module covers the basics of fitness, including strength, flexibility, and cardiovascular health, and how these fit into a healthy lifestyle.
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
                          src="/assets/images/course-img/heart-disease.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          How to Protect Against Heart Diseases, Control Blood Pressure, and High Cholesterol
                        </h2>
                        <p className="text-muted">
                          Gain essential knowledge on how to protect heart health through nutrition. This includes managing cholesterol levels, blood pressure, and preventing heart disease through dietary changes and lifestyle interventions.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/heart-disease.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        How to Protect Against Heart Diseases, Control Blood Pressure, and High Cholesterol
                      </h2>
                      <p className="text-muted">
                        Gain essential knowledge on how to protect heart health through nutrition. This  {' '}
                        {/* {showMore[2] ? (
                          <> */}
                        includes managing cholesterol levels, blood pressure, and preventing heart disease through dietary changes and lifestyle interventions.
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
                          Role of Health and Wellness Consultant & How to Prepare Health Plans
                        </h2>
                        <p className="text-muted">
                          Learn the responsibilities of a health and wellness consultant. Understand how to assess clients' health needs, create individualized health plans, and provide guidance on achieving sustainable wellness goals.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/health-consultant.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/health-consultant.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Role of Health and Wellness Consultant & How to Prepare Health Plans
                      </h2>
                      <p className="text-muted">
                        Learn the responsibilities of a health and wellness consultant. Understand how to  {' '}
                        {/* {showMore[1] ? (
                          <> */}
                        assess clients' health needs, create individualized health plans, and provide guidance on achieving sustainable wellness goals.
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <FlexibleAllReviews />
      <CourseInclude />
      <section className="mt-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row mt-4">
              <div className="col-lg-6 certi text-center">
                <p className="my-4">demo lecture</p>
                <div className="ply1 black-before">
                  <img
                    width="100%"
                    alt="Fg Group"
                    style={{ borderRadius: "10px" }}
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/intro-health-wellness.webp"
                    }
                  />
                  <div className="video-btn play-btn">
                    <a aria-label="Fg Group"
                      onClick={() => openVideoModal("9ggHN60bYKo")}
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
                <p className="my-4">Health & Wellness demo Certificate</p>
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/cwc-demo.webp"
                  }
                  width="90%"
                  alt="Health & Wellness Masterclass course certificate"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="covid text-center">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">
                  Other books of Author
                </span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row">
              <div className="col-md-6 mt-5 text-center">
                <LazyLoadImage
                  effect="blur"
                  alt="Fg Group"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/health-wellness-book-1.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
                <Link
                  type="button"
                  to="https://www.amazon.in/dp/B09C1MLGY8/ref=cm_sw_r_apan_RJNWBFBAYY4NKB6Q26ZM"
                  className="btn btn-success mt-3 text-light"
                >
                  Purchase this book
                </Link>
              </div>
              <div className="col-md-6 mt-5 text-center">
                <LazyLoadImage
                  effect="blur"
                  alt="Fg Group"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/health-wellness-book-2.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
                <Link
                  type="button"
                  to="https://www.amazon.in/dp/B07C4455QM/ref=cm_sw_r_apan_3V15P65DHY196FXM65VP"
                  className="btn btn-success mt-3 text-light"
                >
                  Purchase this book
                </Link>
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
                  <span className="m-0 text-blue-color">Clinical Nutrition Course</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      A clinical nutrition course is the perfect pathway for those looking to specialize in diet and nutrition for healthcare and wellness. This course provides in-depth knowledge of how nutrition impacts health, disease management, and overall well-being.
                    </p>
                    <p>
                      If you're passionate about nutrition, enrolling in a nutrition course or nutrition courses online can help you gain expertise in meal planning, therapeutic diets, and nutritional counseling. Online courses offer flexibility, allowing you to learn at your own pace while receiving expert guidance.
                    </p>
                    <p>
                      For those looking to become certified professionals, a dietician course online or dietitian course online provides essential training in medical nutrition therapy, food science, and patient care. These courses equip you with the skills needed to assess and create diet plans for individuals with specific health conditions.
                    </p>
                    <p>
                      A diet and nutrition course covers key topics such as metabolism, weight management, and sports nutrition, making it ideal for fitness trainers, healthcare professionals, and wellness enthusiasts.
                    </p>
                    <p>
                      Whether you're aiming to become a clinical nutritionist, dietitian, or nutrition coach, completing a clinical nutrition course will set you on a rewarding career path in the health and wellness industry. Start your journey today and make a difference in people's lives!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CourseReviewSection course_id="61e8b11b74eefa46b0554898" />
      <FlexibleFooter />
    </>
  );
}

export default ClinicalNutritionCourse;
