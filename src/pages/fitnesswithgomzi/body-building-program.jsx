import React, { useState } from "react";
import "../../assets/css/home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CountUp from "react-countup";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import FwgFooter from "../../components/partials/Footer/fwgfooter";
import AddIcon from "@mui/icons-material/Add";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { publicAxiosInstance } from "../../assets/js/config/api";
import apiConfig from "../../assets/js/config/apiConfig";
import ModalVideo from "react-modal-video";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

function FlexiblePrepCoachingForBodybuilding() {
  const canonicalUrl = window.location.href;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    modalName: "",
    modalEmail: "",
    modalContactNumber: "",
  });

  const handlePopupClose = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fitnessPlanBuy = async () => {
    const name = formData.modalName;
    const phoneNumber = formData.modalContactNumber;
    const email = formData.modalEmail;
    if (!name || name === "") {
      return Swal.fire({
        title: "Error",
        text: "Name is at least required",
        icon: "error",
      });
    }
    new window.Razorpay({
      key: apiConfig.RAZORPAY_MERCHANT_ID, // Enter the Key ID generated from the Dashboard
      amount: "99900", // 999 INR.
      currency: "INR",
      name: "RTP-5.0 Prep Coaching Plan",
      description: "RTP-5.0 Prep Coaching Plan",
      prefill: {
        name: name,
        email: email,
        contact: phoneNumber,
      },
      notes: {
        name: name,
        source: window.location.origin + window.location.pathname,
      },
      hidden: {
        contact: false,
        email: false,
      },
      handler: bodybuildingEntryFeesSuccess,
    }).open();
  };

  const bodybuildingEntryFeesSuccess = async (razorpayResponse) => {
    let payload = { payment_id: razorpayResponse.razorpay_payment_id };
    setFormData({
      modalName: "",
      modalEmail: "",
      modalContactNumber: "",
    });
    setShowModal(false);
    publicAxiosInstance
      .post("/guest-payment/buy-prepcoach-plan", payload)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Our Team will Contact you soon for more details.",
          text:
            "Here is your payment ID: " + response.data.data.payment_id + ".",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error",
          text:
            error.response?.data?.message ||
            "Failed to book your seat in Bodybuilding Competition. Contact us to get a refund.",
          icon: "error",
        });
      });
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

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
        <title>Best Body Building Program to Achieve Your Fitness Goals</title>
        <meta name="description" content="Achieve your fitness goals with the best body building program. Start building strength and muscle today with expert-designed plans!" />
        <meta name="keyword" content="fitness plans, preparation program, coaching program, fitness coaching program, fitness program, workout programs, beginner workout plan, gym workout plan, best sat prep courses, best lsat prep courses, weight loss camp, home workout plan, weight loss workout plan, fitness classes, gym workout plan for beginners, workout plans for women, workout routine for beginners, workout programs for women, body building program, best at home workout program, workout programs for men, gym program, Personal Training Program, Strength Training Program, Online Fitness Coaching, Health Coaching Certification, Athletic Training Program, Online Workout Programs, Strength and Conditioning Program, Customized Workout Plan, 12-Week Workout Plan, Advanced Workout Program, Best Personal Trainer Certification, Virtual Personal Training, Online Weight Loss Coaching, Online SAT Prep Course, Best ACT Prep Courses, Weight Training Program, Nutrition Coaching Program, Muscle Building Program, HIIT Workout Plan, Fitness Training Courses, Professional Coaching Program, Advanced Strength Training Plan, Sports Performance Coaching, Custom Online Coaching, Best Fitness Coaching Certification" />
        <meta property="og:title" content="Best Body Building Program to Achieve Your Fitness Goals" />
        <meta property="og:description" content="Achieve your fitness goals with the best body building program. Start building strength and muscle today with expert-designed plans!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fitnesswithgomzi/body-building-program" />
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
     fitness plans, preparation program, coaching program, fitness coaching program, fitness program, workout programs, beginner workout plan, gym workout plan, best sat prep courses, best lsat prep courses, weight loss camp, home workout plan, weight loss workout plan, fitness classes, gym workout plan for beginners, workout plans for women, workout routine for beginners, workout programs for women, body building program, best at home workout program, workout programs for men, gym program, Personal Training Program, Strength Training Program, Online Fitness Coaching, Health Coaching Certification, Athletic Training Program, Online Workout Programs, Strength and Conditioning Program, Customized Workout Plan, 12-Week Workout Plan, Advanced Workout Program, Best Personal Trainer Certification, Virtual Personal Training, Online Weight Loss Coaching, Online SAT Prep Course, Best ACT Prep Courses, Weight Training Program, Nutrition Coaching Program, Muscle Building Program, HIIT Workout Plan, Fitness Training Courses, Professional Coaching Program, Advanced Strength Training Plan, Sports Performance Coaching, Custom Online Coaching, Best Fitness Coaching Certification
      </p>
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
            <div className="row">
              <div className="col-md-6 text-center">
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
              <div className="col-md-6">
                <div className="tabata">
                  <h2 className="h2-fs mt-2 mt-md-0">
                    Preparation Coaching Program - RTP-5.0
                  </h2>
                  <p>Plan Duration : 1 Months</p>
                </div>
                <div className="price">
                  <h2 className="my-1 h2-fs">Mentors</h2>
                </div>
                <div className="row">
                  <div className="col-lg-12 calc">
                    <ul>
                      <li>
                        <div>
                          <img
                            className="lazy mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/blue.webp"
                            }
                            alt="FG Group"
                          />
                          <p><a href="http://gcsconsultant.fggroup.in/gautam_jani_official" style={{ color: 'black', textDecoration: 'underline' }}>Dr. Gautam Jani</a></p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            className="lazy mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/yellow.webp"
                            }
                            alt="FG Group"
                          />
                          <p> Dt.Foram Desai</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="price mb-2">
                  <p className="fs-30">
                    ₹999 + 18%GST
                  </p>
                </div>
                <div className="meal">
                  <button
                    className="btn px-4"
                    onClick={handleOpenModal}
                    style={{
                      backgroundColor: "#416aff",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#fff",
                    }}
                  >
                    Buy Now
                  </button>
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
                <span className="m-0 text-blue-color">Fitness Plans </span>
                Include
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
                  <h2 className="h5-fs mt-5">Calorie Tracking and Monitoring</h2>
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
              <div className="demoo mb-4 text-center">
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
                <div className="col-md-12">
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
                </div>
              </div>
              <div className="new-owl-btn">
                <OwlCarousel
                  dots={false}
                  nav
                  loop
                  autoplay
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
                        process.env.PUBLIC_URL + "/assets/images/img/six4.webp"
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
                        process.env.PUBLIC_URL +
                        "/assets/images/img/milan-sali.webp"
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
                        process.env.PUBLIC_URL + "/assets/images/img/six2.webp"
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
                        process.env.PUBLIC_URL + "/assets/images/img/six.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                </OwlCarousel>
              </div>
              <div className="mt-5 py-5 new-owl-btn">
                <OwlCarousel
                  loop
                  nav
                  dots={false}
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
                            <a aria-label="Fg Group"
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
                          when i find anout FitnessWithGomzi's and then i join
                          and i loss around 9kg.
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
                            <a aria-label="Fg Group"
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
                          My Told me about FitnessWithGomzi's and then i join
                          and i loss around 5kg.
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
                            <a aria-label="Fg Group"
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
                        <p>
                          I lost around 10kg with fitnesswithgomzi. thank you
                        </p>
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
                            <a aria-label="Fg Group"
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
                            <a aria-label="Fg Group"
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
        </div>
      </section>
      {/* Modal  */}
      <Modal show={showModal} onHide={handlePopupClose} centered>
        <div className="modal-content">
          <Modal.Header closeButton>
            <Modal.Title>
              <h2 className="modal-title h4-fs">Fill Details</h2>
            </Modal.Title>
          </Modal.Header>
          <div className="modal-body">
            <Form>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  className="form-control mt-2"
                  name="modalName"
                  value={formData.modalName}
                  onChange={handleChange}
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  className="form-control mt-2"
                  name="modalEmail"
                  value={formData.modalEmail}
                  onChange={handleChange}
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input
                  className="form-control mt-2"
                  name="modalContactNumber"
                  value={formData.modalContactNumber}
                  onChange={handleChange}
                  placeholder="Enter Your Contact Number"
                />
              </div>
            </Form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={fitnessPlanBuy}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
      <FwgFooter />
    </>
  );
}

export default FlexiblePrepCoachingForBodybuilding;
