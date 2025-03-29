import React, { useEffect, useState } from "react";
import "../../assets/css/home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Row } from "react-bootstrap";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import LoginModal from "../../assets/js/popup/login";
import { createCourseOrder } from "../../assets/js/utils/fitness-course";
import ModalVideo from "react-modal-video";
import CourseReviewSection from "../../components/partials/review/course-review";
import RegistrationProcess from "../../components/fgiit/registration";
import CoursesInclude from "../../components/fgiit/courses";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TotalCourseEnrolled from "../../components/fgiit/enrolledCourse";
import { DiplomaInNutritionCourse } from "../../components/course/AllCourseData";
import CourseForm from "../../components/course/courseForm";
import { Helmet } from "react-helmet";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";
import FlexibleAllReviews from "../../components/fgiit/flexibleAllReviews";

function DieticianCourseOnline() {
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
        <title>Become a Pro with a Certified Dietician Course Online</title>
        <meta name="description" content="Enroll in a certified dietician course online and gain expert nutrition knowledge to build a successful career in dietetics!" />
        <meta name="keyword" content="course, diploma in nutrition course, nutrition course, diploma in nutrition, nutrition, diploma course, certificate in nutrition, certificate course, nutrition courses online, fitness and nutrition courses, dietician course online, certified nutritionist course, nutrition certification online, dietician course, sports nutrition courses, dietitian course online, health and nutrition courses, nutritionist classes, nutrition qualifications, best nutrition courses, nutrition coach certification, nutrition class online, fitness nutrition course, diet and nutrition course, study nutrition, food and nutrition course, nutrition and dietetics course, dietician online course, Online Nutrition Course, certificate course in nutrition, dietitian course, personal trainer and nutritionist near me, nutrition courses near me, personal fitness certification, nutritionist study, sports and nutrition course, Advanced Nutrition Course Online, Functional Nutrition Certification, Diet and Nutrition Course Online, Online Dietician Course, Best Sports Nutrition Certification, Online Holistic Nutrition Course, Medical Nutrition Therapy Course Online, Certified Nutrition Specialist Course Online, Health and Wellness Nutrition Course, Advanced Dietetics Course Online, Certified Online Nutritionist, Online Nutrition Science Course, Online Weight Management Nutrition Course, Nutrition and Wellness Coaching Online, Best Online Sports Nutrition Course, Certified Dietitian Nutritionist Online" />
        <meta property="og:title" content="Become a Pro with a Certified Dietician Course Online" />
        <meta property="og:description" content="Enroll in a certified dietician course online and gain expert nutrition knowledge to build a successful career in dietetics!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgiit/dietician-course-online" />
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
      <p className="d-none"> course, diploma in nutrition course, nutrition course, diploma in nutrition, nutrition, diploma course, certificate in nutrition, certificate course, nutrition courses online, fitness and nutrition courses, dietician course online, certified nutritionist course, nutrition certification online, dietician course, sports nutrition courses, dietitian course online, health and nutrition courses, nutritionist classes, nutrition qualifications, best nutrition courses, nutrition coach certification, nutrition class online, fitness nutrition course, diet and nutrition course, study nutrition, food and nutrition course, nutrition and dietetics course, dietician online course, Online Nutrition Course, certificate course in nutrition, dietitian course, personal trainer and nutritionist near me, nutrition courses near me, personal fitness certification, nutritionist study, sports and nutrition course, Advanced Nutrition Course Online, Functional Nutrition Certification, Diet and Nutrition Course Online, Online Dietician Course, Best Sports Nutrition Certification, Online Holistic Nutrition Course, Medical Nutrition Therapy Course Online, Certified Nutrition Specialist Course Online, Health and Wellness Nutrition Course, Advanced Dietetics Course Online, Certified Online Nutritionist, Online Nutrition Science Course, Online Weight Management Nutrition Course, Nutrition and Wellness Coaching Online, Best Online Sports Nutrition Course, Certified Dietitian Nutritionist Online
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
                        DiplomaInNutritionCourse.courseImage[activeImageIndex]
                      }
                      alt="FG Group"
                      width="85%"
                    />
                  </div>
                  <div className="thumbnail-images">
                    {DiplomaInNutritionCourse.courseImage.map(
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
                  courseData={DiplomaInNutritionCourse}
                  isAuthenticated={isAuthenticated}
                  setShowModal={setShowModal}
                  setCourses={setCourses}
                  courses={courses}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  handleOrder={handleOrder}
                  BuyButton={DiplomaInNutritionCourse.BuyButton}
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
                Info
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
                          systems and muscles respond to exercise.This
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
                        and physiology, focusing on how the body's {' '}
                        {/* {showMore[1] ? (
                          <> */}
                        systems and muscles respond to exercise.This
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
                              <b>
                                Introduction To Living Beings: Physiology
                              </b>
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
                          src="/assets/images/blog/walkouts.webp"
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
                        src="/assets/images/blog/walkouts.webp"
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
                        weight management, emphasizing dietary planning {' '}
                        {/* {showMore[2] ? (
                          <> */}
                        and metabolism.It highlights the synergy between
                        diet and exercise, equipping students to craft
                        sustainable, goal - oriented diet plans for clients,
                        fostering long - term health and fitness.
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
                          Combining nutrition and fitness, this module
                          emphasizes injury prevention and management through
                          tailored meal plans and strength-training principles.
                          It prepares students to enhance performance while
                          minimizing injury risks through informed dietary and
                          fitness strategies.
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
                        Combining nutrition and fitness, this module emphasizes
                        injury prevention and management through {' '}
                        {/* {showMore[3] ? (
                          <> */}
                        tailored meal plans and strength - training
                        principles.It prepares students to enhance
                        performance while minimizing injury risks through
                        informed dietary and fitness strategies.
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
                          src="/assets/images/course-img/anabolic.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 4: Therapeutic Nutrition
                        </h2>
                        <p className="text-muted">
                          This module introduces the role of therapeutic
                          nutrition in recovery, alongside injury prevention and
                          rehabilitation techniques. Students gain expertise in
                          safe recovery protocols and exercises that reduce the
                          risk of future injuries.
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
                        Module 4: Therapeutic Nutrition
                      </h2>
                      <p className="text-muted">
                        This module introduces the role of therapeutic nutrition
                        in recovery, alongside injury prevention and {' '}
                        {/* {showMore[4] ? (
                          <> */}
                        rehabilitation techniques.Students gain expertise in
                        safe recovery protocols and exercises that reduce
                        the risk of future injuries.
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
                            <li className="list-unstyled">
                              <b>
                                Hernia, Diarrhoea, Conspaon, Pepc Ulcer,
                                Ulcerve Colis, Crohns Diseases, Dumping
                                Syndrome, Dysphagia
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>Metabolic Disorders</b>
                            </li>
                            <li className="list-unstyled">
                              <b>
                                Diabetes, Gout, Hypothyroidism,
                                Hperthyroidism, Menopause, PCOS, PMS
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>CardiovaScular Disorders</b>
                            </li>
                            <li className="list-unstyled">
                              <b>
                                Hypertension, Atherosclerosis, Myocardial
                                infacon
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>Liver Disorders</b>
                            </li>
                            <li className="list-unstyled">
                              <b>
                                Jaundice, Hepatitis, Diseases of gallbladder
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>Feblife Disorders</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Typhoids, Tuberculosis</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Musculoskeletal Disorders</b>
                            </li>
                            <li className="list-unstyled">
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
                          Module 5: Weight Management Nutrition
                        </h2>
                        <p className="text-muted">
                          This module addresses advanced nutritional strategies
                          and the implications of steroid use in fitness.
                          Students learn to evaluate risks and benefits while
                          guiding clients toward healthier, sustainable
                          performance enhancement methods.
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
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/online-2.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
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
                        Module 5: Weight Management Nutrition
                      </h2>
                      <p className="text-muted">
                        This module addresses advanced nutritional strategies
                        and the implications of steroid use in fitness. {' '}
                        {/* {showMore[5] ? (
                          <> */}
                        Students learn to evaluate risks and benefits while
                        guiding clients toward healthier, sustainable
                        performance enhancement methods.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Specialized Nutrition Topics</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Diet For Healthy Skin, Hair & Nails</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Nutrition For Night Shift Workers</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Food Allergies & Food Intolerance</b>
                            </li>
                            <li className="list-unstyled text-dark">
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
                          src="/assets/images/img/nutrition-during-lifespan.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 6: Nutrition During Lifespan
                        </h2>
                        <p className="text-muted">
                          Nutrition is a critical part of health and
                          development. Better nutrition is related to improved
                          infant, child and maternal health, stronger immune
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
                        Module 6: Nutrition During Lifespan
                      </h2>
                      <p className="text-muted">
                        Nutrition is a critical part of health and development.
                        Better nutrition is related to improved infant, {' '}
                        {/* {showMore[6] ? (
                          <> */}
                        child and maternal health, stronger immune systems,
                        safer pregnancy and childbirth, lower risk of
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
                          Module 7: Counselling Techniques
                        </h2>
                        <p className="text-muted">
                          Counseling techniques involve strategies such as active listening, empathy, and cognitive-behavioral interventions to support clients' emotional and mental well-being. Methods like reflective listening, motivational interviewing, and narrative therapy help individuals explore their feelings, overcome challenges, and develop healthier coping mechanisms, leading to personal growth and empowerment.
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
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/offline-one.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
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
                        Module 7: Counselling Techniques
                      </h2>
                      <p className="text-muted">
                        Counseling techniques involve strategies such as active listening, empathy, and cognitive-behavioral interventions to support clients' emotional and mental well-being. {' '}
                        {/* {showMore[7] ? (
                          <> */}
                        Methods like reflective listening, motivational interviewing, and narrative therapy help individuals explore their feelings, overcome challenges, and develop healthier coping mechanisms, leading to personal growth and empowerment.
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
                          src="/assets/images/fgiit/fgiit-webinar-batch-4.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 8: Sports Nutrition
                        </h2>
                        <p className="text-muted">
                          Sports nutrition focuses on optimizing an athlete's diet to enhance performance, recovery, and overall health. A balanced intake of carbohydrates, proteins, fats, and hydration supports energy, muscle repair, and endurance. Proper nutrition helps prevent injuries, boosts stamina, and ensures athletes maintain peak physical and mental performance.
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
                        Module 8: Sports Nutrition
                      </h2>
                      <p className="text-muted">
                        Sports nutrition focuses on optimizing an athlete's diet to enhance performance, recovery, and overall health. A balanced intake of carbohydrates, proteins, fats, {' '}
                        {/* {showMore[8] ? (
                          <> */}
                        and hydration supports energy, muscle repair, and endurance. Proper nutrition helps prevent injuries, boosts stamina, and ensures athletes maintain peak physical and mental performance.
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
                                Nutrition for Specific Sports and
                                Populations
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
                          Module 9: Practical Application & Client Management,
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
                        Module 9: Practical Application & Client Management,
                        Behavior Change
                      </h2>
                      <p className="text-muted">
                        In this hands-on module, students master behavior change
                        techniques and client management strategies. By {' '}
                        {/* {showMore[9] ? (
                          <> */}
                        applying theoretical knowledge in practical
                        settings, they develop skills to motivate and guide
                        clients effectively.
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
                          src="/assets/images/img/co3.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 10: How to Design Diet Plan
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
                        Module 10: How to Design Diet Plan
                      </h2>
                      <p className="text-muted">
                        Focusing on tailored nutrition, this module equips
                        students to create diet plans that align with {' '}
                        {/* {showMore[10] ? (
                          <> */}
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
                  <img
                    width="100%"
                    alt="fg group"
                    style={{ borderRadius: "10px" }}
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/protein-course.webp"
                    }
                  />
                  <div className="video-btn play-btn">
                    <a aria-label="Fg Group"
                      onClick={() => openVideoModal("zRRgXHCLDAM")}
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
                <p className="my-4">DNC demo Certificate</p>
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/dnc-demo.webp"
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
                  Boost Your Career with a{" "}
                  <span className="m-0 text-blue-color">Diploma in Nutrition Course</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      A diploma in nutrition course is the perfect choice for those passionate about health, wellness, and proper diet planning. Whether you are looking to become a certified nutritionist or enhance your knowledge, a nutrition course provides essential insights into food science, meal planning, and overall well-being.
                    </p>
                    <p>
                      For flexible learning, nutrition courses online and dietician course online allow students to gain expertise from anywhere. These courses cover fundamental topics such as macronutrients, metabolism, and personalized diet plans. If you aspire to work in the fitness industry, a fitness and nutrition course or sports nutrition course will help you understand the relationship between diet and performance.
                    </p>
                    <p>
                      Becoming a certified dietitian is easier with a dietitian course online or a dietician online course. These programs provide in-depth knowledge of medical nutrition therapy, clinical dietetics, and community health. Specialized programs like a fitness nutrition course or a nutrition and dietetics course can further expand career opportunities.
                    </p>
                    <p>
                      From a food and nutrition course to a health and nutrition course, choosing the best nutrition courses ensures a rewarding career in the health industry. Start your journey today with an accredited nutrition class online and gain the skills to transform lives!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <AccreditedCertification /> */}
      <CourseReviewSection course_id="61e8b11b74eefa46b0554998" />
      <FlexibleFooter />
    </>
  );
}

export default DieticianCourseOnline;
