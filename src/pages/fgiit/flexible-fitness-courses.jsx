import React, { useState, useEffect } from "react";
import FgiitHeader from "../../components/partials/Header/fgiitheader";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { sendInquiry } from "../../assets/js/utils/contact-us";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import PlacementReview from "../../components/fgiit/placementReview";
import OutstandingReview from "../../components/fgiit/outstandingResponse";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AccreditedCertification from "../../components/fgiit/acrediteCertificate";
import InternationalFlags from "../../components/fgiit/flags";
import { Helmet } from "react-helmet";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";
import FlexibleAllReviews from "../../components/fgiit/flexibleAllReviews";

function FlexibleFitnessCourses() {
  const canonicalUrl = window.location.href;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const $ = window.$;
    $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fas fa-arrow-right"></i>');
  }, []);

  const handleApplyForInquiry = async () => {
    try {
      await sendInquiry(
        name,
        email,
        mobile,
        "Flexible Course Page Inquiry",
        message,
        window.location.href,
        null,
        null,
        null
      );
      setName("");
      setEmail("");
      setMobile("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

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

  const [showMore, setShowMore] = useState(false);

  const toggleReadMorev = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Helmet>
        <title>Flexible Fitness Course for All Levels - Enroll Today!</title>
        <meta
          name="description"
          content="Join a flexible fitness course for all levels and train at your own pace. Gain expert guidance and achieve your fitness goals!"
        />
        <meta
          name="keyword"
          content="flexible fitness, fitness course, fitness, flexible, course, flexible course, fitness training, training, fitness trainer course, online fitness courses, fitness instructor course, fitness nutrition course, personal trainer certification, fitness trainer certification, fitness certification, certificate in personal training, personal trainer classes, fitness instructor certification, best personal trainer certification, fitness coach certification, personal fitness trainer certification, Fitness Courses in India, Online Fitness Courses in India, personal trainer course, fitness and nutrition courses, personal trainer course online, certified fitness trainer course, pt training courses, personal trainer certification online, certified personal trainer certification, personal trainer certification course, personal trainer certification near me, personal trainer training, personal training, fitness trainer certification online, personal trainer classes near me, pt certification, Weight Loss Coach Certification, Certified Nutritionist Course Online, Online Health and Wellness Courses, Online Fitness Coaching Certification, Best Personal Trainer Certification Online, Certified Online Personal Trainer, Online Gym Instructor Course"
        />
        <meta
          property="og:title"
          content="Flexible Fitness Course for All Levels - Enroll Today!"
        />
        <meta
          property="og:description"
          content="Join a flexible fitness course for all levels and train at your own pace. Gain expert guidance and achieve your fitness goals!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fgiit/flexible-fitness-courses"
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
      <p className="d-none"> flexible fitness, fitness course, fitness, flexible, course, flexible course, fitness training, training, fitness trainer course, online fitness courses, fitness instructor course, fitness nutrition course, personal trainer certification, fitness trainer certification, fitness certification, certificate in personal training, personal trainer classes, fitness instructor certification, best personal trainer certification, fitness coach certification, personal fitness trainer certification, Fitness Courses in India, Online Fitness Courses in India, personal trainer course, fitness and nutrition courses, personal trainer course online, certified fitness trainer course, pt training courses, personal trainer certification online, certified personal trainer certification, personal trainer certification course, personal trainer certification near me, personal trainer training, personal training, fitness trainer certification online, personal trainer classes near me, pt certification, Weight Loss Coach Certification, Certified Nutritionist Course Online, Online Health and Wellness Courses, Online Fitness Coaching Certification, Best Personal Trainer Certification Online, Certified Online Personal Trainer, Online Gym Instructor Course
      </p>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <FgiitHeader />
      <section style={{ marginTop: "70px" }}>
        <div className="container-fluid p-0 m-0">
          <OwlCarousel
            loop
            autoplay
            dots={false}
            id="carouselExampleControls"
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
            <div className="item active">
              <a href="#nutritrainer" aria-label="Fg Group">
                <img
                  className="d-none d-md-block w-100"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/banner33.webp"
                  }
                  alt="FGIIT academy certificates are accredited by ISO and ISO"
                />
              </a>
              <a href="#nutritrainer" aria-label="Fg Group">
                <img
                  className="d-block d-md-none w-100"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/banner-mobile33.webp"
                  }
                  alt="FGIIT academy certificates are accredited by ISO and ISO"
                />
              </a>
            </div>
            <div className="item">
              <img
                className="d-none d-md-block"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/new-fgiit-banner.webp"
                }
                width="100%"
                alt="fggroup"
              />
              <img
                className="d-block d-md-none w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/new-fgiit-mobile.webp"
                }
                alt="fggroup"
              />
            </div>
            <div className="item">
              <img
                className="d-none d-md-block w-100"
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/banner22.webp"
                }
                alt="best fitness course in India"
              />
              <img
                className="d-block d-md-none w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile22.webp"
                }
                alt="best fitness course in India"
              />
            </div>
            <div className="item">
              <img
                className="d-none d-md-block w-100"
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/banner16.webp"
                }
                alt="best fitness course in India"
              />
              <img
                className="d-block d-md-none w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile16.webp"
                }
                alt="best fitness course in India"
              />
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="describe text-center">
              <h1 className="text-center mt-0">
                most
                <span className="m-0 text-blue-color">
                  {" "}
                  affordable fitness courses
                </span>{" "}
                in India
              </h1>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
          </div>
        </div>
      </section>
      <div className="d-none d-md-block">
        <section>
          <div className="container-fluid border-bottom py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-5 text-center">
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/flexible-3.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="Course Introduction"
                    />
                    <div className="ply3">
                      <a
                        className="custom"
                        onClick={() => openVideoModal("lF9NOlXS2B4")}
                        aria-label="Fg Group"
                      >
                        <i
                          className="far fa-play-circle"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/fgiit/anabolic-androgenic-steroids">
                      <h2 className="h2-fs">
                        anabolic androgenic steroids Masterclass
                      </h2>
                    </Link>
                    <p>
                      This Masterclass Contains Everything About Steroids From
                      Its Types & Safety Precautions To Its Side Effects &
                      Minimising Methods.
                    </p>
                    <p>Purchase the course and start learning right away</p>
                  </div>
                  <div className="price">
                    <p className="mt-2 fs-30">₹1769 GST included</p>
                    {/* <span className="fs-20">
                      <del>₹1769/-</del>
                    </span>
                    <span
                      className="p1 mx-2 fs-20"
                    >
                      <b>80.10% OFF</b>
                    </span> */}
                  </div>
                  <div className="meal mt-5">
                    <Link to="/fgiit/anabolic-androgenic-steroids">
                      Enrolled Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid border-bottom py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-5 text-center">
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/flexible-5.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="Course Introduction"
                    />
                    <div className="ply3">
                      <a
                        className="custom"
                        onClick={() => openVideoModal("QNxwm6wNIUU")}
                        aria-label="Fg Group"
                      >
                        <i
                          className="far fa-play-circle"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/fgiit/physiotherapy-course">
                      <h2 className="h2-fs">
                        Injury rehabilitation Masterclass
                      </h2>
                    </Link>
                    <p>
                      This Masterclass Contains Knowledge Of Both Therapeutic
                      Exercises & Conditioning Exercises Used For Rehabilitation
                      From Injury.
                    </p>
                    <p>Purchase the course and start learning right away</p>
                  </div>
                  <div className="price">
                    <p className="mt-2 fs-30">₹1769 GST included</p>
                    {/* <span className="fs-20">
                      <del>₹1769/-</del>
                    </span>
                    <span
                      className="p1 mx-2 fs-20"
                    >
                      <b>80.10% OFF</b>
                    </span> */}
                  </div>
                  <div className="meal mt-5">
                    <Link to="/fgiit/physiotherapy-course">Enrolled Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid py-5 border-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-5 text-center">
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/flexible-4.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="Course Introduction"
                    />
                    <div className="ply3">
                      <a
                        className="custom"
                        onClick={() => openVideoModal("BC_iv0dgfeo")}
                        aria-label="Fg Group"
                      >
                        <i
                          className="far fa-play-circle"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/fgiit/online-group-instructor-masterclass">
                      <h2 className="h2-fs">Group Instructor Masterclass</h2>
                    </Link>
                    <p>
                      This Course Is All About Music Based Entertaining
                      Exercises With Or Without Using Any Equipment To Deliver
                      Effective Results.
                    </p>
                    <p>Purchase the course and start learning right away</p>
                  </div>
                  <div className="price">
                    <p className="mt-2 fs-30">₹1769 GST included</p>
                    {/* <span className="fs-20">
                      <del>₹1769/-</del>
                    </span>
                    <span
                      className="p1 mx-2 fs-20"
                    >
                      <b>80.10% OFF</b>
                    </span> */}
                  </div>
                  <div className="meal mt-5">
                    <Link to="/fgiit/online-group-instructor-masterclass">
                      Enrolled Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid border-bottom py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-5 text-center">
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/flexible-2.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="Course Introduction"
                    />
                    <div className="ply3">
                      <a
                        className="custom"
                        onClick={() => openVideoModal("yteT5qfarrw")}
                        aria-label="Fg Group"
                      >
                        <i
                          className="far fa-play-circle"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/fgiit/personal-training-course">
                      <h2 className="h2-fs">
                        Diploma In Personal Training Course
                      </h2>
                    </Link>
                    <p>
                      This Is The Foundation Course In Exercise Science That
                      Provides Comprehensive Theoretical And Practical Education
                      Required To Become A Personal Trainer.
                    </p>
                    <p>Purchase the course and start learning right away</p>
                  </div>
                  <div className="price">
                    <p className="mt-2 fs-30">₹3539 GST included</p>
                    {/* <span className="fs-20">
                      <del>₹3539/-</del>
                    </span>
                    <span
                      className="p1 mx-2 fs-20"
                    >
                      <b>83.35% OFF</b>
                    </span> */}
                  </div>
                  <div className="meal mt-5">
                    <Link to="/fgiit/personal-training-course">
                      Enrolled Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid border-bottom py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-5 text-center">
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/flexible-1.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="Course Introduction"
                    />
                    <div className="ply3">
                      <a
                        className="custom"
                        onClick={() => openVideoModal("nAk1IHX_vxY")}
                        aria-label="Fg Group"
                      >
                        <i
                          className="far fa-play-circle"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/fgiit/dietician-course-online">
                      <h2 className="h2-fs">Diploma In Nutrition Course</h2>
                    </Link>
                    <p>
                      This Course Is Designed To Deliver All The Food-Related
                      Information Required To Become A Nutritionist From
                      Beginner To Advanced.
                    </p>
                    <p>Purchase the course and start learning right away</p>
                  </div>
                  <div className="price">
                    <p className="mt-2 fs-30">₹3539 GST included</p>
                    {/* <span className="fs-20">
                      <del>₹3539/-</del>
                    </span>
                    <span
                      className="p1 mx-2 fs-20"
                    >
                      <b>83.35% OFF</b>
                    </span> */}
                  </div>
                  <div className="meal mt-5">
                    <Link to="/fgiit/dietician-course-online">
                      Enrolled Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid py-5 border-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-5 text-center">
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/flexible-6.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="Course Introduction"
                    />
                    <div className="ply3">
                      <a
                        className="custom"
                        onClick={() => openVideoModal("9ggHN60bYKo")}
                        aria-label="Fg Group"
                      >
                        <i
                          className="far fa-play-circle"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/fgiit/clinical-nutrition-course">
                      <h2 className="h2-fs">Advance clinical nutrition</h2>
                    </Link>
                    <p>
                      wellness consultant is a course where you learn how to
                      fight diseases like diabetes, thyroid, PCOS, and cancer.
                    </p>
                    <p>Purchase the course and start learning right away</p>
                  </div>
                  <div className="price">
                    <p className="mt-2 fs-30">₹3539 GST included</p>
                    {/* <span className="fs-20">
                      <del>₹3539/-</del>
                    </span>
                    <span
                      className="p1 mx-2 fs-20"
                    >
                      <b>83.35% OFF</b>
                    </span> */}
                  </div>
                  <div className="meal mt-5">
                    <Link to="/fgiit/clinical-nutrition-course">
                      Enrolled Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-5 text-center">
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/flexible-8.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="Course Introduction"
                    />
                    <div className="ply3">
                      <a
                        className="custom"
                        onClick={() => openVideoModal("hE_zb_XM5Rg")}
                        aria-label="Fg Group"
                      >
                        <i
                          className="far fa-play-circle"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/fgiit/gym-management-course">
                      <h2 className="h2-fs">
                        Diploma in business management course
                      </h2>
                    </Link>
                    <p>
                      If businesses or individuals want greater success, then
                      the answer resides within the ability to improve
                      motivation, improve the use of energy and to improve
                      talent.
                    </p>
                    <p>Purchase the course and start learning right away</p>
                  </div>
                  <div className="price">
                    <p className="mt-2 fs-30">₹3539 GST included</p>
                    {/* <span className="fs-20">
                      <del>₹3539/-</del>
                    </span>
                    <span
                      className="p1 mx-2 fs-20"
                    >
                      <b>83.35% OFF</b>
                    </span> */}
                  </div>
                  <div className="meal mt-5">
                    <Link to="/fgiit/gym-management-course">Enrolled Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-5 text-center">
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/flexible-7.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="Course Introduction"
                    />
                    <div className="ply3">
                      <a
                        className="custom"
                        onClick={() => openVideoModal("vEjTAqSzU44")}
                        aria-label="Fg Group"
                      >
                        <i
                          className="far fa-play-circle"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/fgiit/nutrition-and-fitness-courses">
                      <h2 className="h2-fs">Nutri trainer Course</h2>
                    </Link>
                    <p>
                      FGIIT Is Here With The Perfect Blend Of All The Major
                      Courses Like Personal Training, Dietician, Group
                      Instructor, Performance-Enhancing Drugs, And
                      Supplementation.
                    </p>
                    <p>Purchase the course and start learning right away</p>
                  </div>
                  <div className="price">
                    <p className="mt-2 fs-30">₹8,999 GST included</p>
                    {/* <span className="fs-20">
                      <del>₹11,799/-</del>
                    </span> */}
                    {/* <span
                      className="p1 mx-2 fs-20"
                    >
                      <b>90% OFF</b>
                    </span> */}
                  </div>
                  <div className="meal mt-5 ">
                    <Link to="/fgiit/nutrition-and-fitness-courses">
                      Enrolled Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="d-md-none d-block">
        <div className="container">
          <div className="item mx-md-3 mb-3 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/flexible-3.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px 10px 0px 0px" }}
                    alt="fggroup"
                  />
                  <div className="ply3" style={{ left: "5px", bottom: "-1px" }}>
                    <a
                      className="custom"
                      onClick={() => openVideoModal("lF9NOlXS2B4")}
                      aria-label="Fg Group"
                    >
                      <i
                        className="far fa-play-circle"
                        style={{ color: "white", fontSize: "25px" }}
                      ></i>
                    </a>
                  </div>
                  <div className="fly-tag1">
                    <span>80.10% OFF</span>
                  </div>
                </div>
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li className="ml-0">
                    <i className="fas fa-clock"></i> 1 Months
                  </li>
                  <li>
                    <i className="fas fa-users"></i> Flexible Time
                  </li>
                </ul>
                <h2 className="h2-fs ">
                  Anabolic androgenic steroids Masterclass
                </h2>
                <div className="mt-lg-2 mb-lg-2 rating-start">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.9 / 10,356 Rating)</span>
                </div>
                <p>
                  This Masterclass Contains Everything About Steroids From Its
                  Types & Safety Precautions To Its Side Effects & Minimising
                  Methods
                </p>
                <div className="price pb-3">
                  <p className="mt-2 fs-22">₹1769 GST included</p>
                  {/* <span className="fs-20">
                    <del>₹1769/-</del>
                  </span>
                  <span
                    className="p1 mx-2 fs-20"
                  >
                    <b>80.10% OFF</b>
                  </span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/fgiit/anabolic-androgenic-steroids"
                    className="px-3 py-2"
                  >
                    Enrolled Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-3 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/flexible-5.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px 10px 0px 0px" }}
                    alt="fggroup"
                  />
                  <div className="ply3" style={{ left: "5px", bottom: "-1px" }}>
                    <a
                      className="custom"
                      onClick={() => openVideoModal("QNxwm6wNIUU")}
                      aria-label="Fg Group"
                    >
                      <i
                        className="far fa-play-circle"
                        style={{ color: "white", fontSize: "25px" }}
                      ></i>
                    </a>
                  </div>
                  <div className="fly-tag1">
                    <span>80.10% OFF</span>
                  </div>
                </div>
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li className="ml-0">
                    <i className="fas fa-clock"></i> 1 Months
                  </li>
                  <li>
                    <i className="fas fa-users"></i> Flexible Time
                  </li>
                </ul>
                <h2 className="h2-fs ">Injury rehabilitation Masterclass</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.9 / 6,203 Rating)</span>
                </div>
                <p>
                  This Masterclass Contains Knowledge Of Both Therapeutic
                  Exercises & Conditioning Exercises Used For Rehabilitation
                  From Injury.
                </p>
                <div className="price pb-3">
                  <p className="mt-2 fs-22">₹1769 GST included</p>
                  {/* <span className="fs-20">
                    <del>₹1769/-</del>
                  </span>
                  <span
                    className="p1 mx-2 fs-20"
                  >
                    <b>80.10% OFF</b>
                  </span> */}
                </div>
                <div className="meal mb-3">
                  <Link to="/fgiit/physiotherapy-course" className="px-3 py-2">
                    Enrolled Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-3 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/flexible-4.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px 10px 0px 0px" }}
                    alt="fggroup"
                  />
                  <div className="ply3" style={{ left: "5px", bottom: "-1px" }}>
                    <a
                      className="custom"
                      onClick={() => openVideoModal("BC_iv0dgfeo")}
                      aria-label="Fg Group"
                    >
                      <i
                        className="far fa-play-circle"
                        style={{ color: "white", fontSize: "25px" }}
                      ></i>
                    </a>
                  </div>
                  <div className="fly-tag1">
                    <span>80.10% OFF</span>
                  </div>
                </div>
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li className="ml-0">
                    <i className="fas fa-clock"></i> 1 Months
                  </li>
                  <li>
                    <i className="fas fa-users"></i> Flexible Time
                  </li>
                </ul>
                <h2 className="h2-fs ">Group Instructor Masterclass</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.9 / 3,040 Rating)</span>
                </div>
                <p>
                  This Course Is All About Music Based Entertaining Exercises
                  With Or Without Using Any Equipment To Deliver Effective
                  Results.
                </p>
                <div className="price pb-3">
                  <p className="mt-2 fs-22">₹1769 GST included</p>
                  {/* <span className="fs-20">
                    <del>₹1769/-</del>
                  </span>
                  <span
                    className="p1 mx-2 fs-20"
                  >
                    <b>80.10% OFF</b>
                  </span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/fgiit/online-group-instructor-masterclass"
                    className="px-3 py-2"
                  >
                    Enrolled Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-3 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/flexible-2.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px 10px 0px 0px" }}
                    alt="fggroup"
                  />
                  <div className="ply3" style={{ left: "5px", bottom: "-1px" }}>
                    <a
                      className="custom"
                      onClick={() => openVideoModal("yteT5qfarrw")}
                      aria-label="Fg Group"
                    >
                      <i
                        className="far fa-play-circle"
                        style={{ color: "white", fontSize: "25px" }}
                      ></i>
                    </a>
                  </div>
                  <div className="fly-tag1">
                    <span>83.35% OFF</span>
                  </div>
                </div>
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li className="ml-0">
                    <i className="fas fa-clock"></i> 3 Months
                  </li>
                  <li>
                    <i className="fas fa-users"></i> Flexible Time
                  </li>
                </ul>
                <h2 className="h2-fs ">Diploma In Personal Training Course</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.9 / 10,525 Rating)</span>
                </div>
                <p>
                  This Is The Foundation Course In Exercise Science That
                  Provides Comprehensive Theoretical And Practical Education
                  Required To Become A Personal Trainer.
                </p>
                <div className="price pb-3">
                  <p className="mt-2 fs-22">₹3539 GST included</p>
                  {/* <span className="fs-20">
                    <del>₹3539/-</del>
                  </span>
                  <span
                    className="p1 mx-2 fs-20"
                  >
                    <b>83.35% OFF</b>
                  </span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/fgiit/personal-training-course"
                    className="px-3 py-2"
                  >
                    Enrolled Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-3 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/flexible-1.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px 10px 0px 0px" }}
                    alt="fggroup"
                  />
                  <div className="ply3" style={{ left: "5px", bottom: "-1px" }}>
                    <a
                      className="custom"
                      onClick={() => openVideoModal("nAk1IHX_vxY")}
                      aria-label="Fg Group"
                    >
                      <i
                        className="far fa-play-circle"
                        style={{ color: "white", fontSize: "25px" }}
                      ></i>
                    </a>
                  </div>
                  <div className="fly-tag1">
                    <span>83.35% OFF</span>
                  </div>
                </div>
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li className="ml-0">
                    <i className="fas fa-clock"></i> 3 Months
                  </li>
                  <li>
                    <i className="fas fa-users"></i> Flexible Time
                  </li>
                </ul>
                <h2 className="h2-fs ">Diploma In Nutrition Course</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.9 / 9,738 Rating)</span>
                </div>
                <p>
                  This Course Is Designed To Deliver All The Food-Related
                  Information Required To Become A Nutritionist From Beginner To
                  Advanced.
                </p>
                <div className="price pb-3">
                  <p className="mt-2 fs-22">₹3539 GST included</p>
                  {/* <span className="fs-20">
                    <del>₹3539/-</del>
                  </span>
                  <span
                    className="p1 mx-2 fs-20"
                  >
                    <b>83.35% OFF</b>
                  </span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/fgiit/dietician-course-online"
                    className="px-3 py-2"
                  >
                    Enrolled Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-3 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/flexible-6.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px 10px 0px 0px" }}
                    alt="fggroup"
                  />
                  <div className="ply3" style={{ left: "5px", bottom: "-1px" }}>
                    <a
                      className="custom"
                      onClick={() => openVideoModal("9ggHN60bYKo")}
                      aria-label="Fg Group"
                    >
                      <i
                        className="far fa-play-circle"
                        style={{ color: "white", fontSize: "25px" }}
                      ></i>
                    </a>
                  </div>
                  <div className="fly-tag1">
                    <span>83.35% OFF</span>
                  </div>
                </div>
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li className="ml-0">
                    <i className="fas fa-clock"></i> 2 Months
                  </li>
                  <li>
                    <i className="fas fa-users"></i> Flexible Time
                  </li>
                </ul>
                <h2 className="h2-fs ">Advance clinical nutrition</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.9 / 9,840 Rating)</span>
                </div>
                <p>
                  wellness consultant is a course where you learn how to fight
                  diseases like diabetes, thyroid, PCOS, and cancer.
                </p>
                <div className="price pb-3">
                  <p className="mt-2 fs-22">₹3539 GST included</p>
                  {/* <span className="fs-20">
                    <del>₹3539/-</del>
                  </span>
                  <span
                    className="p1 mx-2 fs-20"
                  >
                    <b>83.35% OFF</b>
                  </span> */}
                </div>
                <div className="meal mb-3">
                  <Link to="/fgiit/gym-management-course" className="px-3 py-2">
                    Enrolled Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-3 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/flexible-8.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px 10px 0px 0px" }}
                    alt="fggroup"
                  />
                  <div className="ply3" style={{ left: "5px", bottom: "-1px" }}>
                    <a
                      className="custom"
                      onClick={() => openVideoModal("hE_zb_XM5Rg")}
                      aria-label="Fg Group"
                    >
                      <i
                        className="far fa-play-circle"
                        style={{ color: "white", fontSize: "25px" }}
                      ></i>
                    </a>
                  </div>
                  <div className="fly-tag1">
                    <span>83.35% OFF</span>
                  </div>
                </div>
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li className="ml-0">
                    <i className="fas fa-clock"></i> 2 Months
                  </li>
                  <li>
                    <i className="fas fa-users"></i> Flexible Time
                  </li>
                </ul>
                <h2 className="h2-fs ">
                  Diploma in business management course
                </h2>
                <div className="mt-lg-2 mb-lg-2 rating-start">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.9 / 10,040 Rating)</span>
                </div>
                <p>
                  If businesses or individuals want greater success, then the
                  answer resides within the ability to improve motivation,
                  improve the use of energy and to improve talent.
                </p>
                <div className="price pb-3">
                  <p className="mt-2 fs-22">₹3539 GST included</p>
                  {/* <span className="fs-20">
                    <del>₹3539/-</del>
                  </span>
                  <span
                    className="p1 mx-2 fs-20"
                  >
                    <b>83.35% OFF</b>
                  </span> */}
                </div>
                <div className="meal mb-3">
                  <Link to="/fgiit/gym-management-course" className="px-3 py-2">
                    Enrolled Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-5 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/flexible-7.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px 10px 0px 0px" }}
                    alt="fggroup"
                  />
                  <div className="ply3" style={{ left: "5px", bottom: "-1px" }}>
                    <a
                      className="custom"
                      onClick={() => openVideoModal("vEjTAqSzU44")}
                      aria-label="Fg Group"
                    >
                      <i
                        className="far fa-play-circle"
                        style={{ color: "white", fontSize: "25px" }}
                      ></i>
                    </a>
                  </div>
                </div>
                <div className="fly-tag1">
                  <span>90% OFF</span>
                </div>
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li className="ml-0">
                    <i className="fas fa-clock"></i> 6 Months
                  </li>
                  <li>
                    <i className="fas fa-users"></i> Flexible Time
                  </li>
                </ul>
                <h2 className="h2-fs ">Nutri trainer Course</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.9 / 10,359 Rating)</span>
                </div>
                <p>
                  FGIIT Is Here With The Perfect Blend Of All The Major Courses
                  Like Personal Training, Dietician, Group Instructor,
                  Performance-Enhancing Drugs, And Supplementation.
                </p>
                <div className="price pb-3">
                  <p className="mt-2 fs-22">₹8,999 GST included</p>
                  {/* <span className="fs-20">
                    <del>₹11,799/-</del>
                  </span>
                  <span
                    className="p1 mx-2 fs-20"
                  >
                    <b>90% OFF</b>
                  </span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/fgiit/nutrition-and-fitness-courses"
                    className="px-3 py-2"
                  >
                    Enrolled Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-md-5 mt-1">
        <div className="container-fluid p-0">
          {/* <div className="container">
            <div className="covid mb-4 text-center">
              <h2 className="h2-fs">
                Additional
                <span className="m-0 text-blue-color"> Perks</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/responsive-design.webp"
                    }
                    alt="FG Group"
                    style={{ width: "70px" }}
                  />
                  <h2 className="h5-fs mt-3">Flexibility in Learning</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/clock.webp"
                    }
                    style={{ width: "70px" }}
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-3">Easily accessible</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/open-book.webp"
                    }
                    alt="FG Group"
                    style={{ width: "70px" }}
                  />
                  <h2 className="h5-fs mt-3">New topics each month</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/insurance.webp"
                    }
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-3">Ease in learning</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/call-center-agent.webp"
                    }
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-3">Interactive videos</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/group-chat.webp"
                    }
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-3">Chat support</h2>
                </div>
              </div>
            </div>
          </div> */}
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/img/additional-perks-flexible.webp"
            }
            className="img-fluid mt-2 d-none d-md-block"
          />
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/img/additional-perks-flexible-mobile.webp"
            }
            className="img-fluid mt-2 d-block d-md-none"
          />
        </div>
      </section>
      <FlexibleAllReviews />
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12 covid mb-4 text-center">
                <h2 className="h2-fs">
                  learn with
                  <span className="m-0 text-blue-color"> flexibility</span>
                </h2>
              </div>
              <div className="col-lg-12 describe">
                <b>
                  <p className="mb-0">
                    Welcome to FGIIT, the most affordable fitness course
                    provider in India. We offer a wide range of courses to suit
                    your fitness goals and aspirations. Whether you want to
                    become a nutritionist, fitness trainer, gym instructor, or
                    certified personal trainer, we have the perfect course for
                    you.
                  </p>
                </b>
                <b>
                  <p className="mb-0">
                    Our comprehensive nutritionist course in India covers all
                    aspects of diet and nutrition, providing you with the
                    knowledge and skills to become a certified nutritionist. We
                    also offer courses on fitness and nutrition, helping you
                    understand the relationship between exercise and proper
                    dietary practices.
                  </p>
                </b>
                <b>
                  <p className="mb-0 moretext">
                    Looking to kickstart your career in the fitness industry?
                    Our fitness certification online program offers convenient
                    and flexible training options. You can become a certified
                    fitness trainer from the comfort of your home, learning at
                    your own pace.
                  </p>
                  <p className="mb-0 moretext">
                    For those interested in becoming a gym trainer, we provide
                    specialized gym trainer courses. These courses cover
                    everything from exercise techniques and program design to
                    client motivation and safety protocols. Upon completion,
                    you'll receive a gym trainer certificate, recognized
                    nationally and internationally.
                  </p>
                  <p className="mb-0 moretext">
                    If you aspire to become a personal gym trainer, our personal
                    trainer courses are designed to equip you with the necessary
                    skills and knowledge. We offer both online and in-person
                    training options, ensuring you receive comprehensive
                    instruction and hands-on experience.
                  </p>
                  <p className="mb-0 moretext">
                    For individuals looking to specialize in specific areas, we
                    offer courses such as sports nutritionist courses, weight
                    trainer programs, and courses on injury rehabilitation.
                    These specialized courses provide in-depth knowledge and
                    skills to excel in your chosen field.
                  </p>
                  <p className="mb-0 moretext">
                    At FGIIT, we believe in flexible learning. Our online
                    courses allow you to study at your convenience, with access
                    to recorded sessions, e-books, and teacher's guidance. We
                    also provide practical exercises and assessments to enhance
                    your learning experience.
                  </p>
                  <p className="mb-0 moretext">
                    Upon successful completion of your chosen course, you'll
                    receive an internationally accredited certification,
                    recognized in 192 countries. This certification opens doors
                    to various career opportunities, including working in
                    hospitals, clinics, gyms, sports clubs, or even starting
                    your own training institute.
                  </p>
                  <p className="mb-0 moretext">
                    If you have any questions or need assistance, our team at
                    FGIIT is here to help. Simply fill out the contact form on
                    our website, and we'll get back to you promptly.
                  </p>
                  <p className="mb-0 moretext">
                    Boost your career in the fitness industry with FGIIT - the
                    leading fitness academy in India. Enroll in our courses
                    today and embark on a rewarding fitness journey.
                  </p>
                </b>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-md-5">
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
              <div className="col-md-3 col-6 mt-3">
                <LazyLoadImage
                  effect="blur"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/gir-demo.webp"
                  }
                  width="100%"
                  alt="Group Instructor course demo certificate"
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                  }}
                />
              </div>
              <div className="col-md-3 col-6 mt-3">
                <LazyLoadImage
                  effect="blur"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/aas-demo.webp"
                  }
                  width="100%"
                  alt="Anabolic Androgenic Steroids workshop demo certificate"
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                  }}
                />
              </div>
              <div className="col-md-3 col-6 mt-3">
                <LazyLoadImage
                  effect="blur"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/dnc-demo.webp"
                  }
                  width="100%"
                  alt="dietitian and nutritionist course demo certificate"
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                  }}
                />
              </div>
              <div className="col-md-3 col-6 mt-3">
                <LazyLoadImage
                  effect="blur"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/dpt-demo.webp"
                  }
                  width="100%"
                  alt="personal trainer and gym trainer course certificate"
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <AccreditedCertification /> */}
      <section>
        <div className="container-fluid margintop">
          <div className="container blog2 pb-5">
            <div className="">
              <div className="covid text-center">
                <h2 className="mt-2 h2-fs">
                  Achieve Your Goals with a{" "}
                  <span className="m-0 text-blue-color">
                    Flexible Fitness Course
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      A flexible fitness course is the perfect solution for
                      those looking to improve their fitness skills without
                      compromising their schedule. Whether you're a beginner or
                      an aspiring trainer, a fitness course allows you to learn
                      essential techniques, workout programming, and health
                      principles at your own pace.
                    </p>
                    <div className="d-md-block d-none">
                      <p>
                        A flexible course gives you the freedom to balance
                        learning with personal and professional commitments.
                        These courses are designed to fit your lifestyle,
                        whether you prefer in-person sessions or online fitness
                        courses. With expert instruction and interactive
                        lessons, you can master the art of fitness training
                        anytime, anywhere.
                      </p>
                      <p>
                        For those aiming to become certified trainers, a fitness
                        trainer course offers in-depth knowledge on exercise
                        science, strength training, and client assessment. These
                        courses provide practical and theoretical insights that
                        prepare you for a successful career in the fitness
                        industry.
                      </p>
                      <p>
                        By choosing a fitness training program that is adaptable
                        to your needs, you can enhance your expertise while
                        maintaining flexibility in your learning schedule.
                        Whether you're looking to train for personal development
                        or to become a professional trainer, a flexible fitness
                        course is the ideal way to achieve your fitness goals
                        efficiently and effectively. Start your journey today!
                      </p>
                    </div>
                    <div className="d-md-none d-block">
                      {showMore ? (
                        <>
                          <p>
                            A flexible course gives you the freedom to balance
                            learning with personal and professional commitments.
                            These courses are designed to fit your lifestyle,
                            whether you prefer in-person sessions or online
                            fitness courses. With expert instruction and
                            interactive lessons, you can master the art of
                            fitness training anytime, anywhere.
                          </p>
                          <p>
                            For those aiming to become certified trainers, a
                            fitness trainer course offers in-depth knowledge on
                            exercise science, strength training, and client
                            assessment. These courses provide practical and
                            theoretical insights that prepare you for a
                            successful career in the fitness industry.
                          </p>
                          <p>
                            By choosing a fitness training program that is
                            adaptable to your needs, you can enhance your
                            expertise while maintaining flexibility in your
                            learning schedule. Whether you're looking to train
                            for personal development or to become a professional
                            trainer, a flexible fitness course is the ideal way
                            to achieve your fitness goals efficiently and
                            effectively. Start your journey today!
                          </p>
                        </>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                      <p
                        onClick={toggleReadMorev}
                        id="myBtnrg"
                        className="text-info m-0 my-sm-2 my-md-0"
                      >
                        {showMore ? "Read less" : "Read more"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InternationalFlags />
      {/* <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 py-5 text-center">
            <div className="covid text-center">
              <h2 className="mt-2 h2-fs">
                Credentials by{" "}
                <span className="m-0 text-blue-color">
                  the fitness future Of India
                </span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-0"></div>
            <div className="row">
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews1.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("VzriO8WZVkM")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews2.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("MBTps76dKLs")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews3.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("u6VPK9uTt9g")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews4.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("uxkhaMgAeAw")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews5.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("4TCopSUPn_w")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews6.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("4gr009F6XBk")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <OutstandingReview /> */}
      {/* <PlacementReview /> */}
      <section>
        <div className="container-fluid margintop">
          <div className="container faq">
            <div className="mb-5">
              <h2 className="h2-fs">FAQ'S</h2>
            </div>
            <div id="accordion">
              <div className="card border mt-3">
                <div className="card-header" id="headingOne">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button className="btn btn-link btnnn">
                          Is DPT certificate valid Nationally?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapseOne"
                  className="coll"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Yes, this certificate and course are valid nationally.
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="false"
                        >
                          What can you do after the completion of this course?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  className="coll"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>You can work in these areas as below.</p>
                    <ol>
                      <li>Can work in Hospital or clinic</li>
                      <li>Can work in a gym and sports club</li>
                      <li>Can work in a sports academy.</li>
                      <li>Can start your own clinic or training institute.</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingThree">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          What will be the course duration?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapseThree"
                  className="cose"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    All Courses
                    <ol>
                      <li>Nutri Trainer Course :- 6 Months</li>
                      <li>Diploma in Nutrition Course :- 3 Months</li>
                      <li>Diploma in Personal Training Course :- 3 Months</li>
                      <li>Anabolic Androgenic Steroids :- 1 Month</li>
                      <li>
                        Group Instruction (Tabata, Functional, TRX Band) :- 1 Month
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingfour">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          How to study in this course or what is a procedure?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefour"
                  className="cole"
                  aria-labelledby="headingfour"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    The study procedure will be easy.
                    <ol>
                      <li>Register for your course through the application.</li>
                      <li>You will receive your login ID and password.</li>
                      <li>
                        Start learning from our study videos with an
                        introduction.
                      </li>
                      <li>
                        Doubts And Queries Will Be Solved Via WhatsApp Every
                        Week Before Sunday.
                      </li>
                      <li>
                        In flexible courses no live classes available. If any
                        questions students must drop message in group{" "}
                      </li>
                      <li>
                        After time duration over, our group will be closed
                      </li>
                      <li>
                        Students can't do any personal message or call to any
                        faculty. Regarding any doubts or any problems must be
                        communicate in group only{" "}
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingfive">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          Are You Searching For A Nutritionist Course Near Me?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefive"
                  className="cole"
                  aria-labelledby="headingfive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Then You know where to find FGIIT now, We are the leading
                    and foremost tutors in the health and fitness industry.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid contact-form">
          <div className="container blog2 contact-form-card">
            <div className="covid mt-5">
              <h2 className="h2-fs text-center text-333-color">
                We're <span className="m-0 text-blue-color">Here To Help</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row">
              <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/contact.webp"
                  }
                  width="60%"
                  alt="Contact"
                />
              </div>
              <div className="col-lg-6 d-flex flex-wrap">
                <div className="col-md-12">
                  <p className="mb-0 mt-4">Full Name</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control fr mt-2"
                    placeholder="Enter Full Name"
                  />
                </div>
                <div className="col-md-6">
                  <p className="mb-0 mt-4">Email Address</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control fr mt-2"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className="col-md-6">
                  <p className="mb-0 mt-4">Mobile No.</p>
                  <input
                    type="number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="form-control fr mt-2"
                    placeholder="Enter Mobile Numbder"
                  />
                </div>
                <div className="col-md-12">
                  <p className="mb-0 mt-4">Write Your Message</p>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-control fr mt-2 text-dark"
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <button
                    type="button"
                    className="btn contact-btn mt-4"
                    onClick={handleApplyForInquiry}
                  >
                    Apply For Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FlexibleFooter />
    </>
  );
}

export default FlexibleFitnessCourses;
