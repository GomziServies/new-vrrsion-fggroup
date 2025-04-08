import React, { useEffect, useState } from "react";
import "../../assets/css/home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Row } from "react-bootstrap";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import LoginModal from "../../assets/js/popup/login";
import { createCourseOrder } from "../../assets/js/utils/fitness-course";
import { Link } from "react-router-dom";
import CourseReviewSection from "../../components/partials/review/course-review";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import RegistrationProcess from "../../components/fgiit/registrationprocess";
import CourseInclude from "../../components/fgiit/CourseInclude";
import TotalCourseEnrolled from "../../components/fgiit/enrolledCourse";
import InternationalCertificates from "../../components/fgiit/internationalCertificate";
import { AnabolicAndrogenicSteroidsMasterclass } from "../../components/course/AllCourseData";
import CourseForm from "../../components/course/courseForm";
import { Helmet } from "react-helmet";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";
import FlexibleAllReviews from "../../components/fgiit/flexibleAllReviews";
import ModalVideo from "react-modal-video";

function AnabolicAndrogenicSteroids() {
  const canonicalUrl = window.location.href;
  const [showModal, setShowModal] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [courses, setCourses] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
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

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("fg_group_user_authorization")
  );

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
        <title>Guide to Anabolic Androgenic Steroids for Bodybuilders</title>
        <meta name="description" content="Explore the benefits, risks, and safe usage of anabolic androgenic steroids for bodybuilders in this comprehensive guide." />
        <meta name="keyword" content="anabolic androgenic steroids masterclass, anabolic androgenic steroids, anabolic testosterone, anabolic androgenic, anabolic steroid testosterone, androgenic, testosterone anabolic steroid, bodybuilding, anabolic androgenic steroids, anabolic course, bodybuilding certification, body building course, bodybuilding coach course, personal training bodybuilding, bodybuilding coach online, bodybuilding coach certification, bodybuilder coach near me, online coaching for bodybuilding, personal body building trainer, bodybuilding course, anabolic course, bodybuilding certification, body building course, bodybuilding coach course, personal training bodybuilding, bodybuilding coach, bodybuilding coach certification, Anabolic Steroid Course, Advanced Bodybuilding Course, Bodybuilding and Nutrition Course, Bodybuilding Training Program, Steroids and Bodybuilding Certification, Strength and Conditioning Course, Personal Trainer Bodybuilding, Steroid Education Masterclass, Performance Enhancement Course, Bodybuilding and Supplements Course, Certified Bodybuilding Coach Course, Fitness and Bodybuilding Course, Anabolic Steroid Masterclass, Muscle Building and Steroids Course, Strength Training Bodybuilding Course" />
        <meta property="og:title" content="Guide to Anabolic Androgenic Steroids for Bodybuilders" />
        <meta property="og:description" content="Explore the benefits, risks, and safe usage of anabolic androgenic steroids for bodybuilders in this comprehensive guide." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgiit/anabolic-androgenic-steroids" />
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
      <p className="d-none"> anabolic androgenic steroids masterclass, anabolic androgenic steroids, anabolic testosterone, anabolic androgenic, anabolic steroid testosterone, androgenic, testosterone anabolic steroid, bodybuilding, anabolic androgenic steroids, anabolic course, bodybuilding certification, body building course, bodybuilding coach course, personal training bodybuilding, bodybuilding coach online, bodybuilding coach certification, bodybuilder coach near me, online coaching for bodybuilding, personal body building trainer, bodybuilding course, anabolic course, bodybuilding certification, body building course, bodybuilding coach course, personal training bodybuilding, bodybuilding coach, bodybuilding coach certification, Anabolic Steroid Course, Advanced Bodybuilding Course, Bodybuilding and Nutrition Course, Bodybuilding Training Program, Steroids and Bodybuilding Certification, Strength and Conditioning Course, Personal Trainer Bodybuilding, Steroid Education Masterclass, Performance Enhancement Course, Bodybuilding and Supplements Course, Certified Bodybuilding Coach Course, Fitness and Bodybuilding Course, Anabolic Steroid Masterclass, Muscle Building and Steroids Course, Strength Training Bodybuilding Course
      </p>
      {showModal && <LoginModal onClose={closeModal} />}
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
            <div className="row resip">
              <div className="col-lg-6">
                <div className="product-imgs singal-product-img">
                  <div className="main-image text-center mt-md-4 mt-0">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        AnabolicAndrogenicSteroidsMasterclass.courseImage[
                        activeImageIndex
                        ]
                      }
                      alt="FG Group"
                      width="85%"
                    />
                  </div>
                  <div className="thumbnail-images">
                    {AnabolicAndrogenicSteroidsMasterclass.courseImage.map(
                      (image, index) => (
                        <div
                          key={index}
                          className={`thumbnail-image ${index === activeImageIndex ? "active" : ""
                            }`}
                          onClick={() => handleThumbnailClick(index)}
                          style={{ marginLeft: "15px" }}
                        >
                          <Row>
                            <div className="py-1 mt-2 px-md-2 px-2">
                              <div
                                className="flexible-course-img"
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
                  courseData={AnabolicAndrogenicSteroidsMasterclass}
                  isAuthenticated={isAuthenticated}
                  setShowModal={setShowModal}
                  setCourses={setCourses}
                  courses={courses}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  handleOrder={handleOrder}
                  BuyButton={AnabolicAndrogenicSteroidsMasterclass.BuyButton}
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
                          Module 1: Introduction to Anabolic Androgenic Steroids
                        </h2>
                        <p className="text-muted">
                          This module offers a comprehensive overview of
                          Selective Androgen Receptor Modulators (SARMs) and
                          peptides, exploring their roles in muscle growth,
                          recovery, and competition preparation. Key topics
                          include "peak week" protocols, Post Cycle Therapy
                          (PCT) for post-steroid recovery, the importance of
                          regular blood tests to monitor health markers, and the
                          use of diuretics to enhance conditioning for
                          competitive events.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>
                                  Anabolics, Androgenic, Peptides, Sarms
                                  compounds Study
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>Overview of steroid use in bodybuilding</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container order-1 mt-2">
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
                        Module 1: Introduction to Anabolic Androgenic Steroids
                      </h2>
                      <p className="text-muted">
                        This module offers a comprehensive overview of Selective
                        Androgen Receptor Modulators (SARMs) and {' '}
                        {/* {showMore[1] ? (
                          <> */}
                        peptides, exploring their roles in muscle growth,
                        recovery, and competition preparation. Key topics
                        include "peak week" protocols, Post Cycle Therapy
                        (PCT) for post-steroid recovery, the importance of
                        regular blood tests to monitor health markers, and
                        the use of diuretics to enhance conditioning for
                        competitive events.
                        <div className="row">
                          <ul className="mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>
                                Anabolics, Androgenic, Peptides, Sarms
                                compounds Study
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>Overview of steroid use in bodybuilding</b>
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
                          src="/assets/images/course-img/side-effects-and-precautions.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 2: Managing Side Effects and Precautions
                        </h2>
                        <p className="text-muted">
                          Addressing the risks of anabolic steroid use, this
                          module delves into common side effects like hair loss,
                          acne, mood swings, aggression, and changes in sexual
                          function. Students will learn how to identify, manage,
                          and mitigate these effects through harm-reduction
                          strategies while understanding the psychological and
                          physiological implications of steroid use.
                          <div className="row">
                            <ul className="p-3 mt-2">
                              <li className="list-unstyled text-dark">
                                <b>Managing Gyno</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Side effects/Precautions:</b>
                                <ol className="pt-0">
                                  <li className="list-unstyled">
                                    <b>Hair loss</b>
                                  </li>
                                  <li className="list-unstyled">
                                    <b>Acne</b>
                                  </li>
                                  <li className="list-unstyled">
                                    <b>Mood Swings</b>
                                  </li>
                                  <li className="list-unstyled">
                                    <b>Insomnia</b>
                                  </li>
                                  <li className="list-unstyled">
                                    <b>Angerness</b>
                                  </li>
                                  <li className="list-unstyled">
                                    <b>Sexual activity</b>
                                  </li>
                                  <li className="list-unstyled">
                                    <b>Many more</b>
                                  </li>
                                </ol>
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
                        src="/assets/images/course-img/side-effects-and-precautions.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 2: Managing Side Effects and Precautions
                      </h2>
                      <p className="text-muted">
                        Addressing the risks of anabolic steroid use, this
                        module delves into common side effects like hair loss, {' '}
                        {/* {showMore[2] ? (
                          <> */}
                        acne, mood swings, aggression, and changes in sexual
                        function. Students will learn how to identify,
                        manage, and mitigate these effects through
                        harm-reduction strategies while understanding the
                        psychological and physiological implications of
                        steroid use.
                        <div className="row">
                          <ul className="p-3 mt-2">
                            <li className="list-unstyled text-dark">
                              <b>Managing Gyno</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Side effects/Precautions:</b>
                              <ol className="pt-0">
                                <li className="list-unstyled">
                                  <b>Hair loss</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Acne</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Mood Swings</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Insomnia</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Angerness</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Sexual activity</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Many more</b>
                                </li>
                              </ol>
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
                          Module 3: Post Cycle Therapy and Blood Tests
                        </h2>
                        <p className="text-muted">
                          This module highlights the critical elements of Post
                          Cycle Therapy (PCT) and the importance of blood tests
                          to monitor health during and after steroid cycles.
                          Students will gain insights into managing hormone
                          recovery and maintaining overall health while ensuring
                          the safety and effectiveness of steroid protocols.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Pct (Post Cycle Therapy)</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Oct (On Cycle Therapy)</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Blood test</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container order-1 mt-2">
                        <img
                          src="/assets/images/course-img/online-3.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
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
                        Module 3: Post Cycle Therapy and Blood Tests
                      </h2>
                      <p className="text-muted">
                        This module highlights the critical elements of Post
                        Cycle Therapy (PCT) and the importance of blood tests {' '}
                        {/* {showMore[3] ? (
                          <> */}
                        to monitor health during and after steroid cycles.
                        Students will gain insights into managing hormone
                        recovery and maintaining overall health while
                        ensuring the safety and effectiveness of steroid
                        protocols.
                        <div className="row">
                          <ul className="mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Pct (Post Cycle Therapy)</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Oct (On Cycle Therapy)</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Blood test</b>
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
                          src="/assets/images/course-img/online-2.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 4: Cycle Designing and Bodybuilding
                        </h2>
                        <p className="text-muted">
                          Students will learn the art of designing steroid
                          cycles tailored to various fitness goals, including
                          bodybuilding, men's physique competitions, and
                          powerlifting. Special attention is given to tailoring
                          cycles for female clients, adapting protocols to meet
                          their unique physiological needs while ensuring safety
                          and effectiveness.
                          <div className="row">
                            <ul className="p-3 mt-2">
                              <li className="list-unstyled text-dark">
                                <b>Cycle Designing</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Bodybuilding Cycle</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Men physique Cycle</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Powerlifting Cycle</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Women Cycle</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Bikni Cycle</b>
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
                        Module 4: Cycle Designing and Bodybuilding
                      </h2>
                      <p className="text-muted">
                        Students will learn the art of designing steroid cycles
                        tailored to various fitness goals, including {' '}
                        {/* {showMore[4] ? (
                          <> */}
                        bodybuilding, men's physique competitions, and
                        powerlifting. Special attention is given to
                        tailoring cycles for female clients, adapting
                        protocols to meet their unique physiological needs
                        while ensuring safety and effectiveness.
                        <div className="row">
                          <ul className="p-3 mt-2">
                            <li className="list-unstyled text-dark">
                              <b>Cycle Designing</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Bodybuilding Cycle</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Men physique Cycle</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Powerlifting Cycle</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Women Cycle</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Bikni Cycle</b>
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
                          Module 5: Interpreting Reports and Physiology
                        </h2>
                        <p className="text-muted">
                          Focusing on the scientific aspects of fitness
                          transformation, this module teaches students to
                          interpret health reports and physiological changes
                          related to anabolic steroid use. Emphasis is placed on
                          understanding how the body responds to these
                          substances, equipping students to make informed
                          decisions for their client's health and fitness
                          journeys.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>How to Study reports</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>How Physiology Work</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Which Blood Test have to do in Pre/Post Prep
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container order-1 mt-2">
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
                        Module 5: Interpreting Reports and Physiology
                      </h2>
                      <p className="text-muted">
                        Focusing on the scientific aspects of fitness
                        transformation, this module teaches students to {' '}
                        {/* {showMore[5] ? (
                          <> */}
                        interpret health reports and physiological changes
                        related to anabolic steroid use. Emphasis is placed
                        on understanding how the body responds to these
                        substances, equipping students to make informed
                        decisions for their client's health and fitness
                        journeys.
                        <div className="row">
                          <ul className="mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>How to Study reports</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>How Physiology Work</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Which Blood Test have to do in Pre/Post
                                Prep
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
                          src="/assets/images/course-img/diet-manage.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 6: Peak Week Preparation
                        </h2>
                        <p className="text-muted">
                          This module prepares students to guide clients through
                          the critical final stages of competition preparation,
                          known as "peak week." Topics include monitoring
                          physiological changes, interpreting health reports,
                          and optimizing client readiness for bikini and
                          physique competitions, ensuring a science-backed
                          approach to achieving peak physical conditioning.
                          <div className="row">
                            <ul className="p-3 mt-2">
                              <li className="list-unstyled text-dark">
                                <b>Meal planning for peak week</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>Carbohydrate loading strategies</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>Dietary manipulations for peak week</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Water loading and manipulation</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Sodium and electrolyte management</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Mental preparation and mindset strategies</b>
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
                        src="/assets/images/course-img/diet-manage.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 6: Peak Week Preparation
                      </h2>
                      <p className="text-muted">
                        This module prepares students to guide clients through
                        the critical final stages of competition preparation, {' '}
                        {/* {showMore[6] ? (
                          <> */}
                        known as "peak week." Topics include monitoring
                        physiological changes, interpreting health reports,
                        and optimizing client readiness for bikini and
                        physique competitions, ensuring a science-backed
                        approach to achieving peak physical conditioning.
                        <div className="row">
                          <ul className="p-3 mt-2">
                            <li className="list-unstyled text-dark">
                              <b>Meal planning for peak week</b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>Carbohydrate loading strategies</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Dietary manipulations for peak week</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Water loading and manipulation</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Sodium and electrolyte management</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Mental preparation and mindset strategies
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <InternationalCertificates /> */}
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
                    alt="fg img"
                    style={{ borderRadius: "10px" }}
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/anabolic_cycle.webp"
                    }
                  />
                  <div className="video-btn play-btn">
                    <a
                      aria-label="Fg Group"
                      onClick={() => openVideoModal("TKn2FwMOHak")}
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
                <p className="my-4">AAS demo Certificate</p>
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/aas-demo.webp"
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
                  Understanding {" "}
                  <span className="m-0 text-blue-color">Anabolic Androgenic Steroids</span> and Their Uses
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      Anabolic androgenic steroids (AAS) are synthetic derivatives of testosterone, a hormone that plays a vital role in muscle growth, strength, and overall physical development. These steroids are often used by athletes and bodybuilders to enhance performance, increase muscle mass, and improve recovery.
                    </p>
                    <p>
                      The term anabolic refers to the muscle-building properties of these steroids, while androgenic relates to the development of male sexual characteristics. Anabolic testosterone is the primary compound in many steroid products, mimicking the effects of natural testosterone. This hormone is responsible for increasing protein synthesis, leading to muscle hypertrophy.
                    </p>
                    <p>
                      Anabolic androgenic steroids can be taken in various forms, including oral tablets, injections, and topical gels. However, misuse or overuse of these steroids can lead to severe side effects, such as liver damage, cardiovascular problems, and hormonal imbalances.
                    </p>
                    <p>
                      Testosterone anabolic steroid treatments are used medically to treat testosterone deficiencies and certain conditions, but their use in sports and bodybuilding often raises ethical and health concerns. It's essential for individuals considering these substances to understand both their benefits and risks to make informed decisions. Always consult a medical professional before using any steroid product.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CourseReviewSection course_id="62d313f6430256c7c261cbd0" />
      <FlexibleFooter />

    </>
  );
}

export default AnabolicAndrogenicSteroids;
