/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import FwgHeader from "../../components/partials/Header/fwgheader";
import FwgFooter from "../../components/partials/Footer/fwgfooter";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AddIcon from "@mui/icons-material/Add";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import ContactButtonFWG from "../../assets/js/utils/contactUsFwg";
import { Link } from "react-router-dom";
import InquiryForm from "../../components/fwg/inquiry-form";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

function FlexibleFitnessPlans() {
  const canonicalUrl = window.location.href;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const $ = window.$;
    $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fas fa-arrow-right"></i>');
  }, []);

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  return (
    <>
      <Helmet>
        <title>
          Top Fitness Plans to Get Fit and Stay Healthy | FG Group
        </title>
        <meta
          name="description"
          content="Discover top fitness plans to get fit and stay healthy. Start your fitness journey today with expert-backed plans from FG Group!"
        />
        <meta name="keyword" content="best weight loss program, meal plan for weight loss, diet plan for weight loss, weight loss plan, diet programs, weight loss clinics, corporate wellness, weight loss workout plan, best diet plan for weight loss, healthy meal plans for weight loss, weight management clinic, diet meal plans for weight loss, weight loss diet plan for men, weight loss program, weight management program, corporate wellness program, fitness plans, gym workout plan, workout programs, planet fitness deals, calisthenics workout plan, gym membership deals, best weight loss plan, Online Fitness Plans, Strength Training Plan, Fat Loss Workout Plan, Home Workout Plan, Personal Training Program, Online Weight Loss Program, Flexible Dieting Plan, High Protein Diet Plan, Best Gym Membership Deals, Fitness Coaching Program, Virtual Personal Training, Holistic Weight Loss Plan, Strength and Conditioning Plan, Gym Workout Plan for Beginners, Custom Workout Plan, 30-Day Fitness Challenge, Affordable Weight Loss Plans, Home Gym Workout Plan, Functional Fitness Plan, Best Home Workout Plan, Lean Muscle Workout Plan, Personalized Fitness Program, Online Workout Subscription" />
        <meta
          property="og:title"
          content="Top Fitness Plans to Get Fit and Stay Healthy | FG Group"
        />
        <meta
          property="og:description"
          content="Discover top fitness plans to get fit and stay healthy. Start your fitness journey today with expert-backed plans from FG Group!"
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
        <meta name="google-site-verification" content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"></script>
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
            fbq('init', '1312968359280007');
            fbq('track', 'PageView');
      `}
        </script>
        <noscript>
          {
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1312968359280007&ev=PageView&noscript=1" />'
          }
        </noscript>
      </Helmet>
      <p className="d-none"> 
     best weight loss program, meal plan for weight loss, diet plan for weight loss, weight loss plan, diet programs, weight loss clinics, corporate wellness, weight loss workout plan, best diet plan for weight loss, healthy meal plans for weight loss, weight management clinic, diet meal plans for weight loss, weight loss diet plan for men, weight loss program, weight management program, corporate wellness program, fitness plans, gym workout plan, workout programs, planet fitness deals, calisthenics workout plan, gym membership deals, best weight loss plan, Online Fitness Plans, Strength Training Plan, Fat Loss Workout Plan, Home Workout Plan, Personal Training Program, Online Weight Loss Program, Flexible Dieting Plan, High Protein Diet Plan, Best Gym Membership Deals, Fitness Coaching Program, Virtual Personal Training, Holistic Weight Loss Plan, Strength and Conditioning Plan, Gym Workout Plan for Beginners, Custom Workout Plan, 30-Day Fitness Challenge, Affordable Weight Loss Plans, Home Gym Workout Plan, Functional Fitness Plan, Best Home Workout Plan, Lean Muscle Workout Plan, Personalized Fitness Program, Online Workout Subscription
      </p>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <FwgHeader />
      <section style={{ marginTop: "70px" }}>
        <div className="container-fluid p-0 blurred-img">
          <img
            effect="blur"
            src={
              process.env.PUBLIC_URL + "/assets/images/fwg/new-banner-fwg.webp"
            }
            className="d-none d-md-block w-100 lazy"
            alt="Create a fit culture at your place"
          />
          <img
            effect="blur"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/fwg/banner-mobile-fwg.webp"
            }
            className="d-block d-md-none w-100 lazy"
            alt="Create a fit culture at your place"
          />
        </div>
      </section>
      <section style={{ marginTop: "50px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="describe text-center">
              <h1 className="text-center">
                most
                <span className="m-0 text-blue-color">
                  {" "}
                  affordable fitness Plans
                </span>{" "}
                in India
              </h1>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
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
                      "/assets/images/fwg/fitness-plan-rtp-1.0.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="Plan Introduction"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="tabata">
                  <Link to="/fitnesswithgomzi/weight-loss-diet">
                    <h2 className="h2-fs mt-2 mt-md-0">
                      Weight Loss Program - RTP-1.0
                    </h2>
                  </Link>
                  <p>
                    RTP-1.0 Weight Loss offers a comprehensive approach to
                    wellness. Our recorded sessions feature expert guidance,
                    revealing effective exercises and personalized diet plans
                    for transformative results.
                  </p>
                  <p>Purchase the Plan and start your Fitness journey</p>
                </div>
                <div className="price mt-2">
                  <p className="mt-2 fs-30">
                    ₹599 + 18%GST
                  </p>
                  <span className="fs-20">
                    <del>₹1499</del>
                  </span>
                  <span
                    className="p1 mx-2 fs-20"
                  >
                    <b>30% OFF</b>
                  </span>
                  {/* <!-- <span>GST Included</span> --> */}
                </div>
                <div className="meal mt-4">
                  <Link to="/fitnesswithgomzi/weight-loss-diet">
                    Purchase Now
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
                      "/assets/images/fwg/fitness-plan-rtp-2.0.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="Plan Introduction"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="tabata">
                  <Link to="/fitnesswithgomzi/weight-managment">
                    <h2 className="h2-fs mt-2 mt-md-0">
                      Weight Management Program - RTP-2.0
                    </h2>
                  </Link>
                  <p>
                    RTP-2.0 - Elevate your health with our Weight Management
                    Program. Tailored sessions provide holistic strategies for
                    lasting well-being.
                  </p>
                  <p>Purchase the Plan and start your Fitness journey</p>
                </div>
                <div className="price mt-2">
                  <p className="mt-2 fs-30">
                    ₹299 + 18%GST
                  </p>
                  <span className="fs-20">
                    <del>₹1499</del>
                  </span>
                  <span
                    className="p1 mx-2 fs-20"
                  >
                    <b>30% OFF</b>
                  </span>
                  {/* <!-- <span>GST Included</span> --> */}
                </div>
                <div className="meal mt-4">
                  <Link to="/fitnesswithgomzi/weight-managment">
                    Purchase Now
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
                      "/assets/images/fwg/fitness-plan-rtp-3.0.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="Plan Introduction"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="tabata">
                  <Link to="/fitnesswithgomzi/flexible-clinical-diets">
                    <h2 className="h2-fs mt-2 mt-md-0">
                      Clinical Illness Program - RTP-3.0
                    </h2>
                  </Link>
                  <p>
                    RTP-3.0 Clinical Illness Program provides specialized care.
                    Access recorded sessions for expert insights, tailored
                    exercises, and holistic strategies to manage and alleviate
                    clinical illnesses effectively.
                  </p>
                  <p>Purchase the Plan and start your Fitness journey</p>
                </div>
                <div className="price mt-2">
                  <p className="mt-2 fs-30">
                    ₹299 + 18%GST
                  </p>
                  <span className="fs-20">
                    <del>₹1499</del>
                  </span>
                  <span
                    className="p1 mx-2 fs-20"
                  >
                    <b>30% OFF</b>
                  </span>
                  {/* <!-- <span>GST Included</span> --> */}
                </div>
                <div className="meal mt-4">
                  <Link to="/fitnesswithgomzi/flexible-clinical-diets">
                    Purchase Now
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
                      "/assets/images/fwg/fitness-plan-rtp-4.0.webp"
                    }
                    width="100%"
                    style={{ borderRadius: " 10px" }}
                    alt="Plan Introduction"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="tabata">
                  <Link to="/fitnesswithgomzi/corporate-wellness-program">
                    <h2 className="h2-fs mt-2 mt-md-0">
                      Corporate Wellness Program - RTP-4.0
                    </h2>
                  </Link>
                  <p>
                    RTP-4.0 Corporate Wellness Program prioritizes employee
                    well-being. Explore our recorded sessions for tailored
                    strategies, fostering a healthier workplace through fitness
                    routines and wellness initiatives.
                  </p>
                </div>
                <div className="price mt-2">
                  <p className="mt-2 mb-0 fs-30">
                    ₹99/- Per Person
                  </p>{" "}
                  <br />
                  <p className="mt-2 fs-18">
                    Maximum 100 People
                  </p>
                  {/* <!-- <span style="font-size:20px!important;"><del>₹1499</del></span>
                                        <span className="p1 mx-2" style="font-size:20px!important;"><b>30% OFF</b></span> -->
                                        <!-- <span>GST Included</span> --> */}
                </div>
                <div className="meal mt-4">
                  <Link to="/fitnesswithgomzi/corporate-wellness-program">
                    Purchase Now
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
                      "/assets/images/fwg/fitness-plan-rtp-5.0.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="Plan Introduction"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="tabata">
                  <Link to="/fitnesswithgomzi/body-building-program">
                    <h2 className="h2-fs mt-2 mt-md-0">
                      Preparation Coaching Program - RTP-5.0
                    </h2>
                  </Link>
                  <p>
                    RTP-5.0 - Preparation Coaching Program ensures success.
                    Access recorded coaching sessions providing valuable
                    insights, strategies, and resources for optimal preparation
                    and achievement.
                  </p>
                </div>
                <div className="price mt-2">
                  <p className="mt-2 fs-30">
                    ₹999 + 18%GST
                  </p>
                  <span className="fs-20">
                    <del>₹1499</del>
                  </span>
                  <span
                    className="p1 mx-2 fs-20"
                  >
                    <b>30% OFF</b>
                  </span>
                  {/* <!-- <span>GST Included</span> --> */}
                </div>
                <div className="meal mt-4">
                  <Link to="/fitnesswithgomzi/body-building-program">
                    Purchase Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
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
                      process.env.PUBLIC_URL + "/assets/images/fwg/step-55.webp"
                    }
                    style={{ width: "60px", height: "60px" }}
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-5">Flexibility in Diet Plans</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/step-11.webp"
                    }
                    style={{ width: "60px", height: "60px" }}
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-5">Easy Diet Recipe</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy img-fluid"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/step-44.webp"
                    }
                    style={{ width: "60px", height: "60px" }}
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-5">Intensive Exercise</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/bodybuilder.webp"
                    }
                    style={{ width: "60px", height: "60px" }}
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-5">Easy Exercise Video</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/icon/recipe.png"
                    }
                    style={{ width: "60px", height: "60px" }}
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-5">
                    Calorie Tracking and Monitoring
                  </h2>
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
                    style={{ width: "60px", height: "60px" }}
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-5">Chat support</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid p-0">
          <div className="container">
            <div className="col-12">
              <div className="covid mb-4 text-center">
                <h2 className='h2-fs' style={{ color: "#000000" }}>Achievements</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-6 text-center">
                <CountUp
                  end={8000}
                  duration={3}
                  separator=","
                  className="counter countertext"
                />
                <AddIcon
                  style={{
                    fontWeight: "bold",
                    color: "#ff8643",
                    fontSize: "33px",
                  }}
                />
                <div className="tabata">
                  <p
                    style={{ color: "#000000", fontWeight: "bold" }}
                    className="mt-1 mb-3"
                  >
                    Transformation
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-6 text-center">
                <CountUp
                  end={4000}
                  duration={3}
                  separator=","
                  className="counter countertext"
                />
                <AddIcon
                  style={{
                    fontWeight: "bold",
                    color: "#ff8643",
                    fontSize: "33px",
                  }}
                />
                <div className="tabata">
                  <p
                    style={{ color: "#000000", fontWeight: "bold" }}
                    className="mt-1 mb-3"
                  >
                    weight loss
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-6 text-center">
                <CountUp
                  end={2000}
                  duration={3}
                  separator=","
                  className="counter countertext"
                />
                <AddIcon
                  style={{
                    fontWeight: "bold",
                    color: "#ff8643",
                    fontSize: "33px",
                  }}
                />
                <div className="tabata">
                  <p
                    style={{ color: "#000000", fontWeight: "bold" }}
                    className="mt-1 mb-3"
                  >
                    Clinical
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-6 text-center">
                <CountUp
                  end={1000}
                  duration={3}
                  separator=","
                  className="counter countertext"
                />
                <AddIcon
                  style={{
                    fontWeight: "bold",
                    color: "#ff8643",
                    fontSize: "33px",
                  }}
                />
                <div className="tabata">
                  <p
                    style={{ color: "#000000", fontWeight: "bold" }}
                    className="mt-1 mb-3"
                  >
                    prep coaching
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-6 text-center">
                <CountUp
                  end={1000}
                  duration={3}
                  separator=","
                  className="counter countertext"
                />
                <AddIcon
                  style={{
                    fontWeight: "bold",
                    color: "#ff8643",
                    fontSize: "33px",
                  }}
                />
                <div className="tabata">
                  <p
                    style={{ color: "#000000", fontWeight: "bold" }}
                    className="mt-1 mb-3"
                  >
                    Weight gain
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-6 text-center">
                <CountUp
                  end={50}
                  duration={3}
                  separator=","
                  className="counter countertext"
                />
                <AddIcon
                  style={{
                    fontWeight: "bold",
                    color: "#ff8643",
                    fontSize: "33px",
                  }}
                />
                <div className="tabata">
                  <p
                    style={{ color: "#000000", fontWeight: "bold" }}
                    className="mt-1 mb-3"
                  >
                    corporate events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container-fluid bg-light">
          <div className="container px-0 py-5">
            <div className="pb-5">
              <div className="py-md-5">
                <div className="covid text-center">
                  <h2 className="h2-fs">
                    <span className="m-0 text-blue-color">
                      global journey of{" "}
                    </span>
                    transformation
                  </h2>
                </div>
                <div className="thm-bg-clr dector mb-4"></div>
                {/* <div className="col-md-12">
                  <div className="world-ca d-none d-md-block">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/travel.webp"
                      }
                      className="img-fluid"
                      alt="FG Group"
                    />
                  </div>
                </div> */}
              </div>
              <div>
                <OwlCarousel
                  dots={false}
                  loop
                  nav
                  id="fwg-owl"
                  className="owl-theme mb-5"
                  responsive={{
                    0: {
                      items: 1,
                    },
                    600: {
                      items: 2,
                    },
                    1000: {
                      items: 3,
                    },
                  }}
                >
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/40.webp"
                      }
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/41.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/42.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/43.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/44.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/45.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="container">
            <div className="mt-5 py-5">
              <OwlCarousel
                dots={false}
                loop
                nav
                id="fwg-owl"
                className="owl-theme mb-5"
                responsive={{
                  0: {
                    items: 1,
                  },
                  600: {
                    items: 2,
                  },
                  1000: {
                    items: 3,
                  },
                }}
              >
                <div className="item m-0 m-md-4">
                  <div className="video-card">
                    <div className="video-img">
                      <div className="ply1">
                        <img
                          className=""
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/harshal-review.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px 10px 0px 0px" }}
                          alt="client journey"
                        />
                        <div className="video-btn">
                          <a
                            aria-label="Fg Group"
                            onClick={() => openVideoModal("mk3_gQ4G1-E")}
                            className="custom"
                          >
                            <span className="newthing">
                              <i className="fas fa-play"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="video-content">
                      <h2 className="h4-fs">Harshal Joshi</h2>
                      <p>
                        when i find anout FitnessWithGomzi's and then i join and
                        i loss around 9kg.
                      </p>
                      <a
                        onClick={() => openVideoModal("mk3_gQ4G1-E")}
                        className="custom"
                      >
                        <i className="fas fa-play mr-1"></i> Watch Video
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item m-0 m-md-4">
                  <div className="video-card">
                    <div className="video-img">
                      <div className="ply1">
                        <img
                          className=""
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/navnish.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px 10px 0px 0px" }}
                          alt="client journey"
                        />
                        <div className="video-btn">
                          <a
                            aria-label="Fg Group"
                            onClick={() => openVideoModal("oq7jiXitX3o")}
                            className="custom"
                          >
                            <span className="newthing">
                              <i className="fas fa-play"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="video-content">
                      <h2 className="h4-fs">Navnish Saliyan</h2>
                      <p>
                        My Told me about FitnessWithGomzi's and then i join and
                        i loss around 5kg.
                      </p>
                      <a
                        onClick={() => openVideoModal("oq7jiXitX3o")}
                        className="custom"
                      >
                        <i className="fas fa-play mr-1"></i> Watch Video
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item m-0 m-md-4">
                  <div className="video-card">
                    <div className="video-img">
                      <div className="ply1">
                        <img
                          className=""
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/ronak.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px 10px 0px 0px" }}
                          alt="client journey"
                        />
                        <div className="video-btn">
                          <a
                            aria-label="Fg Group"
                            onClick={() => openVideoModal("vpCljUgyhLA")}
                            className="custom"
                          >
                            <span className="newthing">
                              <i className="fas fa-play"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="video-content">
                      <h2 className="h4-fs">Ronak Bhandani</h2>
                      <p>I lost around 10kg with fitnesswithgomzi. thank you</p>
                      <a
                        onClick={() => openVideoModal("vpCljUgyhLA")}
                        className="custom"
                      >
                        <i className="fas fa-play mr-1"></i>
                        Watch Video
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item m-0 m-md-4">
                  <div className="video-card">
                    <div className="video-img">
                      <div className="ply1">
                        <img
                          className=""
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/vishal-patel.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px 10px 0px 0px" }}
                          alt="client journey"
                        />
                        <div className="video-btn">
                          <a
                            aria-label="Fg Group"
                            onClick={() => openVideoModal("bCkuNsxOo6s")}
                            className="custom"
                          >
                            <span className="newthing">
                              <i className="fas fa-play"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="video-content">
                      <h2 className="h4-fs">Vishal Patel</h2>
                      <p>I lost around 10kg thanks to ma'am and sir.</p>
                      <a
                        onClick={() => openVideoModal("bCkuNsxOo6s")}
                        className="custom"
                      >
                        <i className="fas fa-play mr-1"></i> Watch Video
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item m-0 m-md-4">
                  <div className="video-card">
                    <div className="video-img">
                      <div className="ply1 black-before">
                        <img
                          className=""
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/dimple-thumb.webp"
                          }
                          width="100%"
                          style={{
                            transform: "scale(1)",
                            borderRadius: "10px 10px 0px 0px",
                          }}
                          alt="client journey"
                        />
                        <div className="video-btn">
                          <a
                            aria-label="Fg Group"
                            onClick={() => openVideoModal("Bj9TQG9gg_A")}
                            className="custom"
                          >
                            <span className="newthing">
                              <i className="fas fa-play"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="video-content">
                      <h2 className="h4-fs">Dimple (House Wife)</h2>
                      <p>
                        I've lost weight of around 2kg in one and a half
                        months..
                      </p>
                      <a
                        onClick={() => openVideoModal("Bj9TQG9gg_A")}
                        className="custom"
                      >
                        <i className="fas fa-play mr-1"></i> Watch Video
                      </a>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <InquiryForm />
      <FwgFooter />
      <ContactButtonFWG />
    </>
  );
}

export default FlexibleFitnessPlans;
