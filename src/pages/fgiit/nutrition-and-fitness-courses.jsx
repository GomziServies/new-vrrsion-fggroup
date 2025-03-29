import React, { useEffect, useState } from "react";
import "../../assets/css/home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
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
import CourseForm from "../../components/course/courseForm";
import { NutriTrainerCourseData } from "../../components/course/AllCourseData";
import { Helmet } from "react-helmet";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";
import FlexibleAllReviews from "../../components/fgiit/flexibleAllReviews";

function NutritionAndFitnessCourses() {
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
        <title>Best Nutrition and Fitness Courses - Enroll Today!</title>
        <meta
          name="description"
          content="Enroll in the best nutrition and fitness courses to gain expert knowledge, certification, and career opportunities today!"
        />
        <meta
          name="keyword"
          content="nutri, trainer, course, certification, nutritional supplement, nutrition, trainer course online, nutrition course, nutrition courses online, dietician course online, dietician course, dietitian course online, nutrition and fitness courses, nutrition certificate online, health and nutrition courses, nutrition classes, nutrition diploma, nutrition class online, food and nutrition course, nutrition and dietetics course, diploma in nutrition and dietetics, certificate in fitness, certification courses, food nutrition course, nutritionist study, certificate nutrition courses, bachelor of nutrition online, Online Clinical Dietetics Course, Online Holistic Nutrition Course, Medical Nutrition Therapy Course Online, Certified Nutrition Specialist Course Online, Health and Wellness Nutrition Course, Advanced Dietetics Course Online, Certified Online Nutritionist, Online Nutrition Science Course, Sports and Clinical Nutrition Course, Online Weight Management Nutrition Course, Nutrition and Wellness Coaching Online, Best Online Sports Nutrition Course, Certified Dietitian Nutritionist Online, Online Nutrition Business Certification, health and nutrition courses, food and nutrition course, nutritionist diploma, dietician and nutritionist course, courses in nutrition and dietetics"
        />
        <meta
          property="og:title"
          content="Best Nutrition and Fitness Courses - Enroll Today!"
        />
        <meta
          property="og:description"
          content="Enroll in the best nutrition and fitness courses to gain expert knowledge, certification, and career opportunities today!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fgiit/nutrition-and-fitness-courses"
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
      <p className="d-none"> nutri, trainer, course, certification, nutritional supplement, nutrition, trainer course online, nutrition course, nutrition courses online, dietician course online, dietician course, dietitian course online, nutrition and fitness courses, nutrition certificate online, health and nutrition courses, nutrition classes, nutrition diploma, nutrition class online, food and nutrition course, nutrition and dietetics course, diploma in nutrition and dietetics, certificate in fitness, certification courses, food nutrition course, nutritionist study, certificate nutrition courses, bachelor of nutrition online, Online Clinical Dietetics Course, Online Holistic Nutrition Course, Medical Nutrition Therapy Course Online, Certified Nutrition Specialist Course Online, Health and Wellness Nutrition Course, Advanced Dietetics Course Online, Certified Online Nutritionist, Online Nutrition Science Course, Sports and Clinical Nutrition Course, Online Weight Management Nutrition Course, Nutrition and Wellness Coaching Online, Best Online Sports Nutrition Course, Certified Dietitian Nutritionist Online, Online Nutrition Business Certification, health and nutrition courses, food and nutrition course, nutritionist diploma, dietician and nutritionist course, courses in nutrition and dietetics
      </p>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <SimpleHeader />
      {showModal && <LoginModal onClose={closeModal} />}
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row resip">
              <div className="col-lg-6">
                <div className="product-imgs singal-product-img">
                  <div className="main-image text-center mt-4">
                    <LazyLoadImage
                      effect="blur"
                      src={NutriTrainerCourseData.courseImage[activeImageIndex]}
                      alt="FG Group"
                      width="85%"
                    />
                  </div>
                  <div className="thumbnail-images">
                    {NutriTrainerCourseData.courseImage.map((image, index) => (
                      <div
                        key={index}
                        className={`thumbnail-image ${index === activeImageIndex ? "active" : ""
                          }`}
                        onClick={() => handleThumbnailClick(index)}
                        style={{ marginLeft: "15px" }}
                      >
                        <Row>
                          <div className="py-1 mt-2 px-md-2">
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
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 w">
                <CourseForm
                  courseData={NutriTrainerCourseData}
                  isAuthenticated={isAuthenticated}
                  setShowModal={setShowModal}
                  setCourses={setCourses}
                  courses={courses}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  handleOrder={handleOrder}
                  removeHindiButton={false}
                  prizes={599}
                  BuyButton={NutriTrainerCourseData.BuyButton}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <RegistrationProcess />
      <section className="pt-5 pb-2 new-content-add">
        <div className="container">
          <div className="border-0">
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
                          Module 1: Understanding the Human body
                        </h2>
                        <p className="text-muted">
                          Students will explore the fundamentals of human
                          anatomy and physiology, focusing on how the body's
                          systems and muscles respond to exercise. This
                          foundation enables them to design effective,
                          personalized training regimens based on scientific
                          understanding of movement and function.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Human Anatomy</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Human Physiology</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Human Kinesiology</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Energy Metabolism</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Introduction To Living Beings: Physiology</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Anatomy Of Our Human Body</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/sir-new-one.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
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
                        Module 1: Understanding the Human body
                      </h2>
                      <p className="text-muted">
                        Students will explore the fundamentals of human anatomy
                        and physiology, focusing on how the body's{" "}
                        {/* {showMore[1] ? (
                          <> */}
                        systems and muscles respond to exercise. This foundation
                        enables them to design effective, personalized training
                        regimens based on scientific understanding of movement
                        and function.
                        <div className="row">
                          <ul className="mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Human Anatomy</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Human Physiology</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Human Kinesiology</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Energy Metabolism</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Introduction To Living Beings: Physiology</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Anatomy Of Our Human Body</b>
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
                          src="/assets/images/course-img/walkouts.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 2: Basics of Nutrition and the Fitness Industry
                        </h2>
                        <p className="text-muted">
                          This module delves into the principles of nutrition
                          and weight management, emphasizing dietary planning
                          and metabolism. It highlights the synergy between diet
                          and exercise, equipping students to craft sustainable,
                          goal-oriented diet plans for clients, fostering
                          long-term health and fitness.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Carbohydrates</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Protein</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Lipids</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Water</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Energy metabolism</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Minerals</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b> Overview of the fitness industry</b>
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
                        src="/assets/images/course-img/walkouts.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 2: Basics of Nutrition and the Fitness Industry
                      </h2>
                      <p className="text-muted">
                        This module delves into the principles of nutrition and
                        weight management, emphasizing dietary planning{" "}
                        {/* {showMore[2] ? (
                          <> */}
                        and metabolism.It highlights the synergy between diet
                        and exercise, equipping students to craft sustainable,
                        goal - oriented diet plans for clients, fostering long -
                        term health and fitness.
                        <div className="row">
                          <ul className="mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Carbohydrates</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Protein</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Lipids</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Water</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Energy metabolism</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Minerals</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Overview of the fitness industry</b>
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
                          Module 3: Meal Planning and Food Groups
                        </h2>
                        <p className="text-muted">
                          Meal planning ensures balanced nutrition by
                          incorporating all essential food groups: proteins,
                          grains, fruits, vegetables, and dairy. It saves time,
                          reduces waste, and promotes healthier eating habits. A
                          well-structured plan supports dietary goals, prevents
                          impulsive eating, and maintains variety in meals for
                          overall well-being and sustained energy throughout the
                          day.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>Meal Planning and Food Groups</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Fundamentals Of Meal Planning</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Food Groups</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Food Exchange List</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Methods Of Improving Nutritional Quality Of
                                  Foods
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/online-1.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/online-1.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 3: Meal Planning and Food Groups
                      </h2>
                      <p className="text-muted">
                        Meal planning ensures balanced nutrition by
                        incorporating all essential food groups: proteins,
                        grains, fruits, vegetables, and dairy. It saves time,{" "}
                        {/* {showMore[3] ? (
                          <> */}
                        reduces waste, and promotes healthier eating habits. A
                        well-structured plan supports dietary goals, prevents
                        impulsive eating, and maintains variety in meals for
                        overall well-being and sustained energy throughout the
                        day.
                        <div className="row">
                          <ul className="mt-2 pl-3">
                            <li className="list-unstyled text-dark">
                              <b>Meal Planning and Food Groups</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Fundamentals Of Meal Planning</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Food Groups</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Food Exchange List</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Methods Of Improving Nutritional Quality Of
                                Foods
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
                          src="/assets/images/course-img/strength.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 4: Strength Training and Fitness Components
                        </h2>
                        <p className="text-muted">
                          Strength training enhances muscle endurance, power,
                          and overall fitness by targeting key components like
                          strength, flexibility, and balance. It boosts
                          metabolism, improves bone density, and reduces injury
                          risks. A well-rounded routine incorporating resistance
                          exercises supports functional movement, promoting
                          long-term health, mobility, and physical performance
                          in daily activities.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>Strength Training and Fitness Components</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Strength training exercises for</b>
                                <ul>
                                  <li className="list-unstyled list-style-none">
                                    <b>Legs</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Back</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Chest</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Biceps</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Triceps</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Abs</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Shoulders</b>
                                  </li>
                                </ul>
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
                        src="/assets/images/course-img/strength.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 4: Strength Training and Fitness Components
                      </h2>
                      <p className="text-muted">
                        Strength training enhances muscle endurance, power, and
                        overall fitness by targeting key components like
                        strength, flexibility, and balance. It boosts
                        metabolism,{" "}
                        {/* {showMore[4] ? (
                          <> */}
                        improves bone density, and reduces injury risks. A
                        well-rounded routine incorporating resistance exercises
                        supports functional movement, promoting long-term
                        health, mobility, and physical performance in daily
                        activities.
                        <div className="row">
                          <ul className="mt-2 pl-3">
                            <li className="list-unstyled text-dark">
                              <b>Strength Training and Fitness Components</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Strength training exercises for</b>
                              <div className="d-flex justify-content-between mt-1">
                                <ul>
                                  <li className="">
                                    <b>Legs</b>
                                  </li>
                                  <li className="">
                                    <b>Back</b>
                                  </li>
                                  <li className="">
                                    <b>Chest</b>
                                  </li>
                                  <li className="">
                                    <b>Biceps</b>
                                  </li>
                                </ul>
                                <ul className="mr-4">
                                  <li className="">
                                    <b>Triceps</b>
                                  </li>
                                  <li className="">
                                    <b>Abs</b>
                                  </li>
                                  <li className="">
                                    <b>Shoulders</b>
                                  </li>
                                </ul>
                              </div>
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
                          Module 5: Exercise Science Theory & Principles
                        </h2>
                        <p className="text-muted">
                          Focusing on ethical and physiological aspects, this
                          module examines the impact of anabolic androgenic
                          steroids and alternative training practices. Students
                          learn to guide clients responsibly while tailoring
                          programs across different life stages.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Exercise Science and Programming</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Types of grips</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Scheduling of exercises</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Principles of exercises</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Periodization and programming</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Creating a workout routine</b>
                              </li>
                              <li className="list-unstyled mt-2 text-dark">
                                <b>Components of fitness</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Sports specific training</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Theory of planning</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/nutrition.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/nutrition.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 5: Exercise Science Theory & Principles
                      </h2>
                      <p className="text-muted">
                        Focusing on ethical and physiological aspects, this
                        module examines the impact of anabolic androgenic{" "}
                        {/* {showMore[5] ? (
                          <> */}
                        steroids and alternative training practices. Students
                        learn to guide clients responsibly while tailoring
                        programs across different life stages.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Exercise Science and Programming</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Types of grips</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Scheduling of exercises</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Principles of exercises</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Periodization and programming</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Creating a workout routine</b>
                            </li>
                            <li className="list-unstyled mt-2 text-dark">
                              <b>Components of fitness</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Sports specific training</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Theory of planning</b>
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
                          src="/assets/images/course-img/anabolic.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 6: Therapeutic Nutrition
                        </h2>
                        <p className="text-muted">
                          Therapeutic nutrition focuses on using diet to manage
                          and prevent diseases. It involves personalized meal
                          plans rich in essential nutrients to support recovery,
                          improve health conditions, and boost immunity. Proper
                          nutrition therapy helps regulate diabetes, heart
                          disease, and digestive disorders, promoting overall
                          well-being and optimal body function.
                          <div className="row">
                            <ul className="col-md-12 mt-2 pl-3">
                              <li className="list-unstyled">
                                <b>Therapeutic Adaptations Of Normal Diet</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Fluid Diet</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Total Parenteral Nutrient</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Tube Feeding</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Gastro Intestinal Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>
                                  Hernia, Diarrhoea, Conspaon, Pepc Ulcer,
                                  Ulcerve Colis, Crohns Diseases, Dumping
                                  Syndrome, Dysphagia
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>Metabolic Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>
                                  Diabetes, Gout, Hypothyroidism,
                                  Hperthyroidism, Menopause, PCOS, PMS
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>CardiovaScular Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>
                                  Hypertension, Atherosclerosis, Myocardial
                                  infacon
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>Liver Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>
                                  Jaundice, Hepatitis, Diseases of gallbladder
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>Feblife Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Typhoids, Tuberculosis</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Musculoskeletal Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Osteoarthritis, Osteoporosis</b>
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
                        src="/assets/images/course-img/anabolic.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 6: Therapeutic Nutrition
                      </h2>
                      <p className="text-muted">
                        Therapeutic nutrition focuses on using diet to manage
                        and prevent diseases. It involves personalized meal
                        plans rich in essential nutrients to support recovery,{" "}
                        {/* {showMore[6] ? (
                          <> */}
                        improve health conditions, and boost immunity. Proper
                        nutrition therapy helps regulate diabetes, heart
                        disease, and digestive disorders, promoting overall
                        well-being and optimal body function.
                        <div className="row">
                          <ul className="col-md-12 mt-2 pl-3">
                            <li className="list-unstyled">
                              <b>Therapeutic Adaptations Of Normal Diet</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Fluid Diet</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Total Parenteral Nutrient</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Tube Feeding</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Gastro Intestinal Disorders</b>
                            </li>
                            <li className="list-unstyled list-style-none ml-1 d-flex">
                              <span className="mr-1">-</span>
                              <b>
                                Hernia, Diarrhoea, Conspaon, Pepc Ulcer, Ulcerve
                                Colis, Crohns Diseases, Dumping Syndrome,
                                Dysphagia
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>Metabolic Disorders</b>
                            </li>
                            <li className="list-unstyled list-style-none ml-1 d-flex">
                              <span className="mr-1">-</span>
                              <b>
                                Diabetes, Gout, Hypothyroidism, Hperthyroidism,
                                Menopause, PCOS, PMS
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>CardiovaScular Disorders</b>
                            </li>
                            <li className="list-unstyled list-style-none ml-1 d-flex">
                              <span className="mr-1">-</span>
                              <b>
                                Hypertension, Atherosclerosis, Myocardial
                                infacon
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>Liver Disorders</b>
                            </li>
                            <li className="list-unstyled list-style-none ml-1 d-flex">
                              <span className="mr-1">-</span>
                              <b>
                                Jaundice, Hepatitis, Diseases of gallbladder
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>Feblife Disorders</b>
                            </li>
                            <li className="list-unstyled list-style-none ml-1 d-flex">
                              <span className="mr-1">-</span>
                              <b>Typhoids, Tuberculosis</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Musculoskeletal Disorders</b>
                            </li>
                            <li className="list-unstyled list-style-none ml-1 d-flex">
                              <span className="mr-1">-</span>
                              <b>Osteoarthritis, Osteoporosis</b>
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
                          Module 7: Injury Rehabilitation and Prevention
                        </h2>
                        <p className="text-muted">
                          Injury rehabilitation and prevention focus on
                          restoring strength, mobility, and function while
                          reducing future risks. Proper recovery includes
                          physical therapy, strength training, and flexibility
                          exercises. Preventive measures like warm-ups, proper
                          technique, and balanced training help maintain joint
                          stability and muscle health, ensuring long-term
                          physical performance and injury resilience.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled">
                                <b>Introduction to Injury Rehabilitation</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Assessment and Diagnosis</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Cupping Therapy</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Principles of Exercise Prescription</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Therapeutic Modalities</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Manual Therapy Techniques</b>
                              </li>
                              <li className="list-unstyled">
                                <b>
                                  Pain Management in Injury Specific
                                  Rehabilitation
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>Special Populations in Rehabilitation</b>
                              </li>
                              <li className="list-unstyled">
                                <b>
                                  CPR, Dry Needling, IASTM, Rigid Taping,
                                  Mobility, Electro Therapy, Exercise Therapy
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/new-injury.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/new-injury.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 7: Injury Rehabilitation and Prevention
                      </h2>
                      <p className="text-muted">
                        Injury rehabilitation and prevention focus on restoring
                        strength, mobility, and function while reducing future
                        risks. Proper recovery includes physical therapy,{" "}
                        {/* {showMore[7] ? (
                          <> */}
                        strength training, and flexibility exercises. Preventive
                        measures like warm-ups, proper technique, and balanced
                        training help maintain joint stability and muscle
                        health, ensuring long-term physical performance and
                        injury resilience.
                        <div className="row">
                          <ul className="mt-2 pl-3">
                            <li className="list-unstyled">
                              <b>Introduction to Injury Rehabilitation</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Assessment and Diagnosis</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Cupping Therapy</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Principles of Exercise Prescription</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Therapeutic Modalities</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Manual Therapy Techniques</b>
                            </li>
                            <li className="list-unstyled">
                              <b>
                                Pain Management in Injury Specific
                                Rehabilitation
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>Special Populations in Rehabilitation</b>
                            </li>
                            <li className="list-unstyled">
                              <b>
                                CPR, Dry Needling, IASTM, Rigid Taping,
                                Mobility, Electro Therapy, Exercise Therapy
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
                          src="/assets/images/course-img/online-2.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 8: Weight Management Nutrition
                        </h2>
                        <p className="text-muted">
                          Weight management nutrition emphasizes balanced eating
                          habits to achieve and maintain a healthy weight. It
                          includes portion control, nutrient-dense foods, and
                          mindful eating. A well-planned diet supports
                          metabolism, prevents overeating, and promotes
                          sustainable weight loss or gain, ensuring overall
                          health, energy balance, and long-term wellness.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled">
                                <b>Diet For Healthy Skin, Hair & Nails</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Nutrition For Night Shift Workers</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Food Allergies & Food Intolerance</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Weight Management & Obesity</b>
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
                        Module 8: Weight Management Nutrition
                      </h2>
                      <p className="text-muted">
                        Weight management nutrition emphasizes balanced eating
                        habits to achieve and maintain a healthy weight. It
                        includes portion control, nutrient-dense foods,{" "}
                        {/* {showMore[8] ? (
                          <> */}
                        and mindful eating. A well-planned diet supports
                        metabolism, prevents overeating, and promotes
                        sustainable weight loss or gain, ensuring overall
                        health, energy balance, and long-term wellness.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3 px-1">
                            <li className="list-unstyled text-dark">
                              <b>Specialized Nutrition Topics</b>
                            </li>
                            <li className="list-unstyled ml-2">
                              <b>Diet For Healthy Skin, Hair & Nails</b>
                            </li>
                            <li className="list-unstyled ml-2">
                              <b>Nutrition For Night Shift Workers</b>
                            </li>
                            <li className="list-unstyled ml-2">
                              <b>Food Allergies & Food Intolerance</b>
                            </li>
                            <li className="list-unstyled ml-2">
                              <b>Weight Management & Obesity</b>
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
                          Module 9: Nutrition During Lifespan
                        </h2>
                        <p className="text-muted">
                          Nutrition is a critical part of health and
                          development. Better nutrition is related to improved
                          infant, child, and maternal health, stronger immune
                          systems, safer pregnancy and childbirth, lower risk of
                          non-communicable diseases (such as diabetes and
                          cardiovascular disease), and longevity. Healthy
                          children learn better.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                Nutrition During Infancy
                              </li>
                              <li className="list-unstyled text-dark">
                                Nutrition During Lactation
                              </li>
                              <li className="list-unstyled text-dark">
                                Nutrition During Pregnancy
                              </li>
                              <li className="list-unstyled text-dark">
                                Nutrition During Childhood
                              </li>
                              <li className="list-unstyled text-dark">
                                Nutrition During Adulthood
                              </li>
                              <li className="list-unstyled text-dark">
                                Nutrition During Older Adults
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/img/nutrition-during-lifespan.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/img/nutrition-during-lifespan.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 9: Nutrition During Lifespan
                      </h2>
                      <p className="text-muted">
                        Nutrition is a critical part of health and development.
                        Better nutrition is related to improved infant,{" "}
                        {/* {showMore[9] ? (
                          <> */}
                        child, and maternal health, stronger immune systems,
                        safer pregnancy and childbirth, lower risk of
                        non-communicable diseases (such as diabetes and
                        cardiovascular disease), and longevity. Healthy children
                        learn better.
                        <div className="row">
                          <ul className="mt-2 pl-3">
                            <li className="list-unstyled text-dark">
                              Nutrition During Infancy
                            </li>
                            <li className="list-unstyled text-dark">
                              Nutrition During Lactation
                            </li>
                            <li className="list-unstyled text-dark">
                              Nutrition During Pregnancy
                            </li>
                            <li className="list-unstyled text-dark">
                              Nutrition During Childhood
                            </li>
                            <li className="list-unstyled text-dark">
                              Nutrition During Adulthood
                            </li>
                            <li className="list-unstyled text-dark">
                              Nutrition During Older Adults
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
                          src="/assets/images/course-img/anabolic-new.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 10: Anabolic Androgenic Steroids
                        </h2>
                        <p className="text-muted">
                          Anabolic androgenic steroids (AAS) are synthetic
                          hormones that enhance muscle growth and athletic
                          performance. However, their misuse can lead to serious
                          health risks, including heart disease, liver damage,
                          and hormonal imbalances. Responsible use under medical
                          supervision is crucial to avoid harmful side effects
                          and long-term complications.
                          <div className="row">
                            <ul className="col-6 mt-2 p-3">
                              <li className="list-unstyled">
                                <b>
                                  Anabolics, Androgenic, Peptides, SARMs
                                  Compounds
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>Peak weak- Cutting/Bulking</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Managing Gyno</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Pct (Post Cycle Therapy)</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Blood test</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Diuretic</b>
                              </li>
                            </ul>
                            <ul className="col-6 mt-2 p-3">
                              <li className="list-unstyled">
                                <b>Bikini</b>
                              </li>
                              <li className="list-unstyled">
                                <b>How to study reports</b>
                              </li>
                              <li className="list-unstyled">
                                <b>How physiology works</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Cycle Designing</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Bodybuilding</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Men physique</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Powerlifting</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Women cycle</b>
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
                        Module 10: Anabolic Androgenic Steroids
                      </h2>
                      <p className="text-muted">
                        Anabolic androgenic steroids (AAS) are synthetic
                        hormones that enhance muscle growth and athletic
                        performance. However, their misuse can lead to serious{" "}
                        {/* {showMore[10] ? (
                          <> */}
                        health risks, including heart disease, liver damage, and
                        hormonal imbalances. Responsible use under medical
                        supervision is crucial to avoid harmful side effects and
                        long-term complications.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled">
                              <b>
                                Anabolics, Androgenic, Peptides, SARMs Compounds
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>Peak weak- Cutting/Bulking</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Managing Gyno</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Pct (Post Cycle Therapy)</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Blood test</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Diuretic</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Bikini</b>
                            </li>
                            <li className="list-unstyled">
                              <b>How to study reports</b>
                            </li>
                            <li className="list-unstyled">
                              <b>How physiology works</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Cycle Designing</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Bodybuilding</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Men physique</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Powerlifting</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Women cycle</b>
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
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 11: Powerlifting Masterclass
                        </h2>
                        <p className="text-muted">
                          Covering the essentials of disease management and
                          powerlifting, this module focuses on therapeutic diets
                          and techniques for key strength-building exercises.
                          Students are trained to support clients in achieving
                          both wellness and performance goals.
                          <div className="row">
                            <ul className="col-6 mt-2 p-3">
                              <li className="list-unstyled">
                                <b>Biomechanics and Technique</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Strength Training Principles</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Programming and Training Plans</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Equipment and Gear</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Rules and Regulations</b>
                              </li>
                            </ul>
                            <ul className="col-6 mt-2 p-3">
                              <li className="list-unstyled">
                                <b>Injury Prevention and Rehabilitation</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Coaching and Communication</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Practical Training</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Legal Aspects of Coaching</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Powerlifting Plan</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/fgiit/fgiit-webinar-batch-3.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/fgiit/fgiit-webinar-batch-3.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 11 Powerlifting Masterclass
                      </h2>
                      <p className="text-muted">
                        Covering the essentials of disease management and
                        powerlifting, this module focuses on therapeutic diets{" "}
                        {/* {showMore[11] ? (
                          <> */}
                        and techniques for key strength - building exercises.
                        Students are trained to support clients in achieving
                        both wellness and performance goals.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled">
                              <b>Biomechanics and Technique</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Strength Training Principles</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Programming and Training Plans</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Equipment and Gear</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Rules and Regulations</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Injury Prevention and Rehabilitation</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Coaching and Communication</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Practical Training</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Legal Aspects of Coaching</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Powerlifting Plan</b>
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
                      onClick={() => toggleReadMore(11)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[11] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/offline-one.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 12: Counselling Techniques
                        </h2>
                        <p className="text-muted">
                          Counseling techniques involve active listening,
                          empathy, and effective communication to support
                          clients in overcoming challenges. Methods like
                          cognitive-behavioral therapy, motivational
                          interviewing, and solution-focused strategies help
                          individuals develop coping skills, enhance
                          self-awareness, and achieve personal growth. A
                          tailored approach ensures meaningful guidance and
                          long-term emotional well-being.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Counselling Skills</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Foundations of Group Fitness</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Group Fitness Class Design and Teaching</b>
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
                        src="/assets/images/course-img/offline-one.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 12: Counselling Techniques
                      </h2>
                      <p className="text-muted">
                        Counseling techniques involve active listening, empathy,
                        and effective communication to support clients in
                        overcoming challenges. Methods like cognitive-behavioral{" "}
                        {/* {showMore[12] ? (
                          <> */}
                        therapy, motivational interviewing, and solution-focused
                        strategies help individuals develop coping skills,
                        enhance self-awareness, and achieve personal growth. A
                        tailored approach ensures meaningful guidance and
                        long-term emotional well-being.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Counselling Skills</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Foundations of Group Fitness</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Group Fitness Class Design and Teaching</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Introduction to Sports Nutrition</b>
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
                      onClick={() => toggleReadMore(12)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[12] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 13: Group Instructor Masterclass
                        </h2>
                        <p className="text-muted">
                          A Group Instructor Masterclass enhances coaching
                          skills, leadership, and class engagement techniques.
                          It covers workout structuring, motivation strategies,
                          and safety protocols to deliver dynamic sessions.
                          Instructors learn to adapt to diverse fitness levels,
                          fostering an inclusive, high-energy environment that
                          maximizes participant results and overall group
                          training effectiveness.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>TRX Band Training</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Functional Training</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Tabata Training</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Group Fitness Class Design and Teaching</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/online-5.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/online-5.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 13: Group Instructor Masterclass
                      </h2>
                      <p className="text-muted">
                        A Group Instructor Masterclass enhances coaching skills,
                        leadership, and class engagement techniques. It covers
                        workout structuring, motivation strategies,{" "}
                        {/* {showMore[13] ? (
                          <> */}
                        and safety protocols to deliver dynamic sessions.
                        Instructors learn to adapt to diverse fitness levels,
                        fostering an inclusive, high-energy environment that
                        maximizes participant results and overall group training
                        effectiveness.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>TRX Band Training</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Functional Training</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Tabata Training</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Group Fitness Class Design and Teaching</b>
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
                      onClick={() => toggleReadMore(13)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[13] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/fgiit/fgiit-webinar-batch-4.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 14: Sports Nutrition
                        </h2>
                        <p className="text-muted">
                          Sports nutrition focuses on fueling athletic
                          performance through balanced diets rich in proteins,
                          carbohydrates, and essential nutrients. It optimizes
                          energy levels, enhances recovery, and supports muscle
                          growth. Proper hydration and meal timing play crucial
                          roles in endurance, strength, and overall physical
                          performance for athletes at all levels.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Introduction to Sports Nutrition</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Macronutrients for Sports Performance</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Micronutrients for Sports Performance</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Sports Supplements</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Nutrition for Specific Sports and Populations
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Meal Planning and Periodization</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Sports Nutrition Case Studies and Practical
                                  Applications
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
                        src="/assets/images/fgiit/fgiit-webinar-batch-4.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 14: Sports Nutrition
                      </h2>
                      <p className="text-muted">
                        Sports nutrition focuses on fueling athletic performance
                        through balanced diets rich in proteins, carbohydrates,
                        and essential nutrients. It optimizes energy levels{" "}
                        {/* {showMore[14] ? (
                          <> */}
                        , enhances recovery, and supports muscle growth. Proper
                        hydration and meal timing play crucial roles in
                        endurance, strength, and overall physical performance
                        for athletes at all levels.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Introduction to Sports Nutrition</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Macronutrients for Sports Performance</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Micronutrients for Sports Performance</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Sports Supplements</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Nutrition for Specific Sports and Populations
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Meal Planning and Periodization</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Sports Nutrition Case Studies and Practical
                                Applications
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
                      onClick={() => toggleReadMore(14)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[14] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 15: Practical Application & Client Management,
                          Behaviour Change
                        </h2>
                        <p className="text-muted">
                          In this hands-on module, students master behavior
                          change techniques and client management strategies. By
                          applying theoretical knowledge in practical settings,
                          they develop skills to motivate and guide clients
                          effectively.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>Theory of behaviour changes</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Client responsibilities</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Creating a positive and supportive training
                                  environment
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Communication strategies for trainers and
                                  clients
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Goal setting and motivation techniques</b>
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
                        Module 14: Practical Application & Client Management,
                        Behavior Change
                      </h2>
                      <p className="text-muted">
                        In this hands-on module, students master behavior change
                        techniques and client management strategies. By{" "}
                        {/* {showMore[15] ? (
                          <> */}
                        applying theoretical knowledge in practical settings,
                        they develop skills to motivate and guide clients
                        effectively.
                        <div className="row">
                          <ul className="mt-2 pl-3">
                            <li className="list-unstyled text-dark">
                              <b>Theory of behavior changes</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Client responsibilities</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Creating a positive and supportive training
                                environment
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Communication strategies for trainers and
                                clients
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Goal setting and motivation techniques</b>
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
                      onClick={() => toggleReadMore(15)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[15] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/img/co3.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 16: How to Design Diet Plan
                        </h2>
                        <p className="text-muted">
                          Focusing on tailored nutrition, this module equips
                          students to create diet plans that align with
                          individual goals.It emphasizes injury prevention
                          through nutritional support, enabling clients to
                          maintain long - term health and performance.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>How to make diet plan of All disesases</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Weight Management Diet Plan</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Sports Nutrition Diet Plan</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Case Studies of Diet plan</b>
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
                        src="/assets/images/img/co3.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 16: How to Design Diet Plan
                      </h2>
                      <p className="text-muted">
                        Focusing on tailored nutrition, this module equips
                        students to create diet plans that align with{" "}
                        {/* {showMore[16] ? (
                          <> */}
                        individual goals.It emphasizes injury prevention through
                        nutritional support, enabling clients to maintain long -
                        term health and performance.
                        <div className="row">
                          <ul className="mt-2 pl-3">
                            <li className="list-unstyled text-dark">
                              <b>How to make diet plan of All disesases</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Weight Management Diet Plan</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Sports Nutrition Diet Plan</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Case Studies of Diet plan</b>
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
                      onClick={() => toggleReadMore(16)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[16] ? "Read less" : "Read more"}
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
            <div className="covid text-center">
              <h2 className="mt-2 h2-fs">
                4 Different{" "}
                <span className="m-0 text-blue-color">demo Certificate</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <div className="row">
              <div className="col-md-3 mt-3">
                <LazyLoadImage
                  effect="blur"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/dpt-demo.webp"
                  }
                  width="100%"
                  alt="personal training demo certificate"
                />
              </div>
              <div className="col-md-3 mt-3">
                <LazyLoadImage
                  effect="blur"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/dnc-demo.webp"
                  }
                  width="100%"
                  alt="personal training demo certificate"
                />
              </div>
              <div className="col-md-3 mt-3">
                <LazyLoadImage
                  effect="blur"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/gir-demo.webp"
                  }
                  width="100%"
                  alt="group instructor demo certificate"
                />
              </div>
              <div className="col-md-3 mt-3">
                <LazyLoadImage
                  effect="blur"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/aas-demo.webp"
                  }
                  width="100%"
                  alt="anabolic androgenic steroids workshop demo certificate"
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
                  Boost Your Career with{" "}
                  <span className="m-0 text-blue-color">
                    Nutrition and Fitness Courses Online
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      If you're passionate about health and wellness, enrolling
                      in a trainer course online or a nutrition course can help
                      you build a rewarding career. With flexible learning
                      options, nutrition courses online provide expert knowledge
                      on diet planning, nutrition science, and healthy living.
                    </p>
                    <p>
                      A dietician course online is perfect for those who want to
                      become certified professionals in the field of dietetics.
                      These courses offer in-depth training on medical nutrition
                      therapy, meal planning, and dietary assessments. Whether
                      you choose a dietician course or a nutrition and dietetics
                      course, you'll gain the skills to guide individuals toward
                      better health.
                    </p>
                    <p>
                      For fitness enthusiasts, nutrition and fitness courses are
                      an excellent way to understand the link between exercise
                      and proper nutrition. These programs cover essential
                      topics such as sports nutrition, weight management, and
                      metabolism, making them ideal for personal trainers and
                      health coaches.
                    </p>
                    <p>
                      Additionally, specialized health and nutrition courses and
                      a food and nutrition course focus on the impact of diet on
                      overall well-being. These programs equip learners with the
                      knowledge to promote healthy eating habits and prevent
                      lifestyle diseases.
                    </p>
                    <p>
                      Start your journey today with an accredited nutrition and
                      fitness course and build a successful career in health and
                      wellness!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CourseReviewSection course_id="62d33bae0ac1b482c32bd445" />
      <FlexibleFooter />
    </>
  );
}

export default NutritionAndFitnessCourses;
