import React, { useState } from "react";
import "../../assets/css/home.css";
import "../../assets/css/new-popup.css";
import Modal from "react-bootstrap/Modal";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Form } from "react-bootstrap";
import { sendInquiry } from "../../assets/js/utils/contact-us";
import Swal from "sweetalert2";
import "react-lazy-load-image-component/src/effects/blur.css";
import ModalVideo from "react-modal-video";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OnlineProgramFormFwg from "../../components/online-fwg/onlineProgramForm";
import HowItWork from "../../components/fwg/howItWork";
import BlogsRtpTwo from "../../components/fwg/blog-rtp-two";
import { PrepCoachingProgramData } from "../../components/online-fwg/AllOnlineProgramData";
import InquiryForm from "../../components/fwg/inquiry-form";
import Transformation from "../../components/fwg/transformation";
import OwlCarousel from "react-owl-carousel";
import ClientsTestimonial from "../../components/fwg/clinetvideoreview";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import FwgHeader from "../../components/partials/Header/fwgheader";
import { Helmet } from "react-helmet";
import FwgFooter from "../../components/partials/Footer/fwgfooter";

function BodybuildingProgram() {
  const canonicalUrl = window.location.href;
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    modalRefname: "",
    modalRefnumber: "",
    modalSelectedCourse: "",
  });
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handlePopupClose = () => {
    setShowModal(false);
  };

  const actionReferAndEarnSubmit = async () => {
    try {
      const name = formData.modalRefname;
      const phoneNumber = formData.modalRefnumber;
      const courses = formData.modalSelectedCourse;
      let modifiedMessage = `${name}\n\nCourse: ${courses}`;
      await sendInquiry(
        name,
        phoneNumber,
        courses,
        modifiedMessage,
        window.location.href,
        null,
        null,
        null
      );
      setFormData({
        modalRefname: "",
        modalRefnumber: "",
        modalSelectedCourse: "",
      });
      handlePopupClose();
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your form has been submitted successfully!",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "An error occurred while submitting the form. Please try again later.",
      });
    }
  };

  const openForm = () => {
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

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqItems = [
    {
      question:
        "If I want to compete in bodybuilding, will you guide me about anabolic cycles?",
      answer:
        "Yes, we will provide you with complete guidance on anabolic cycles, including proper planning and design to ensure a safe and effective approach.",
    },
    {
      question:
        "How many months should I prepare with you to get the best results?",
      answer:
        "Typically, it takes around 6 to 12 months to become stage-ready, depending on your current muscle mass and goals.",
    },
    {
      question: "How much do I need to spend per month during my preparation?",
      answer:
        "The monthly cost varies based on your goals and plan, but it generally ranges between 3-4k, including supplements and steroids.",
    },
    {
      question: "Will I get 100% results with your coaching?",
      answer:
        "Yes, with over 12 years of experience, we've trained many successful clients and trainers. However, achieving 100% results depends on your commitment to regularly updating us and maintaining open communication on a daily basis.",
    },
  ];

  const testimonials = [
    {
      name: "Harshal Joshi",
      description: `I recently discovered FitnessWithGomzi, and joining their program has been a life-changing decision! With their expert guidance and tailored workouts, I was able to lose around 9kg in a healthy, sustainable way. The team is incredibly supportive, constantly motivating me to push my limits and stay consistent with my fitness goals.`,
      videoUrl: "mk3_gQ4G1-E",
      imageUrl: "/assets//images/fwg/harshal-v1.webp",
      date: "13 March 2023",
    },
    {
      name: "Navnish Saliyan",
      description: `My friend told me about FitnessWithGomzi, and I decided to join—and I'm so glad I did! In just a short time, I've lost around 5kg, thanks to their well-structured program and motivating trainers. The personalized workouts, combined with nutrition advice, have really helped me stay on track and feel healthier overall.`,
      videoUrl: "oq7jiXitX3o",
      imageUrl: "/assets/images/fwg/navnish-v1.webp",
      date: "13 March 2023",
    },
    {
      name: "Budhadev Sahu",
      description: `With the incredible support of FitnessWithGomzi, I've been able to compete at state championships! Their personalized training plans and expert guidance have taken my fitness to the next level, preparing me both mentally and physically for competition. The coaches truly understand how to push your limits while keeping the workouts balanced and effective.`,
      videoUrl: "Z4-bhRfFfno",
      imageUrl: "/assets/images/fwg/saho-v1.webp",
      date: "13 March 2023",
    },
    {
      name: "Milan Sali",
      description: `I came across this amazing nutrition class offered by FitnessWithGomzi, and it has completely transformed the way I approach my health! The class not only provided detailed insights into balanced nutrition but also taught me how to make sustainable, healthy eating choices. The team is incredibly knowledgeable, and their approach is easy to follow yet highly effective.`,
      videoUrl: "_sE7AxtfR_A",
      imageUrl: "/assets/images/fwg/milan-v1.webp",
      date: "13 March 2023",
    },
    {
      name: "Jayneel",
      description: `I joined FitnessWithGomzi and lost around 12kg in just 1.5 months! I'm incredibly thankful for their guidance and support throughout my fitness journey. The workouts are challenging but effective, and the nutrition advice has made all the difference in achieving my goals. The trainers keep me motivated every step of the way, and I've never felt stronger or more confident.`,
      videoUrl: "5XWZcCGaRJQ",
      imageUrl: "/assets/images/fwg/jayneel-v1.webp",
      date: "13 March 2023",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Bodybuilding program for Beginners and Pros</title>
        <meta name="description" content="Get bodybuilding program for beginners and pros. Learn effective tips, workouts, and nutrition to build muscle fast." />
        <meta
          name="keyword" content="Preparation Coaching Program, weight, loss, program, fitness, weight loss workout plan, weight loss exercise, best exercise to lose weight, exercise plan to lose weight, good workouts to lose weight, weight loss training program, fitness plan to lose weight, workout programs for weight loss, exercise program for weight loss, weight loss and exercise plan, good exercises for weight loss, bodybuilding, fast weight loss, fast weight loss diet plan, weight loss exercises at home, best exercise for fat loss, faster way to weight loss, gym exercises to lose weight, best program for weight loss, bodybuilding program, gym workouts for weight loss, personal training programs, muscle gain and fat loss program, structured weight loss plan, online fitness coaching, customized workout plans, professional weight loss program, high-intensity training for weight loss, strength training for fat loss, weight training for weight loss, sports performance coaching, best fitness coaching program, elite coaching program, fitness coaching for professionals, coaching program for athletes, exercise science program, high-performance fitness program, body transformation program, fitness training certification, intensive weight loss program, powerlifting training program" />
        <meta property="og:title" content="Bodybuilding program for Beginners and Pros" />
        <meta property="og:description" content="Get bodybuilding program for beginners and pros. Learn effective tips, workouts, and nutrition to build muscle fast." />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta property="og:url" content="https://fggroup.in/fitnesswithgomzi/online-prep-coaching-for-bodybuilding" />
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
            fbq('init', '608251344391774');
            fbq('track', 'PageView');
        `}
        </script>
        <noscript>
          {
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=608251344391774&ev=PageView&noscript=1" />'
          }
        </noscript>
      </Helmet>
      <p className="d-none"> 
     Preparation Coaching Program, weight, loss, program, fitness, weight loss workout plan, weight loss exercise, best exercise to lose weight, exercise plan to lose weight, good workouts to lose weight, weight loss training program, fitness plan to lose weight, workout programs for weight loss, exercise program for weight loss, weight loss and exercise plan, good exercises for weight loss, bodybuilding, fast weight loss, fast weight loss diet plan, weight loss exercises at home, best exercise for fat loss, faster way to weight loss, gym exercises to lose weight, best program for weight loss, bodybuilding program, gym workouts for weight loss, personal training programs, muscle gain and fat loss program, structured weight loss plan, online fitness coaching, customized workout plans, professional weight loss program, high-intensity training for weight loss, strength training for fat loss, weight training for weight loss, sports performance coaching, best fitness coaching program, elite coaching program, fitness coaching for professionals, coaching program for athletes, exercise science program, high-performance fitness program, body transformation program, fitness training certification, intensive weight loss program, powerlifting training program
      </p>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />

      <FwgHeader />
      <WhatsappHeaderApp
        message={
          "Hello, I wanted to know more about Online Prep Coaching Program details. "
        }
        options={{ pageRef: true }}
      />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="course-card-page-design mr-md-4">
                  <div className="course-scroll">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        width="100%"
                        alt="Fg Group"
                        style={{ borderRadius: "10px" }}
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fwg/rtp-five.webp"
                        }
                      />
                      <div className="video-btn play-btn">
                        <a
                          onClick={() => openVideoModal("vy5Iw4BWFdU")}
                          className="custom clickof"
                          aria-label="Fg Group"
                        >
                          <span className="newthing">
                            <i className="fas fa-play"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="d-md-block d-none">
                      <div className="course-info">
                        <h2 className="h6-fs course-title">Program Info</h2>
                        <ul className="course-list">
                          {PrepCoachingProgramData?.info1.map((info) => (
                            <li>
                              <i className={info.icon}></i>
                              {info.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mb-5 position-relative">
                <div className="black-before-2">
                  <OnlineProgramFormFwg
                    programData={PrepCoachingProgramData}
                    openForm={openForm}
                    whatsappMessage="Hello, I wanted to know more about the Online Prep Coaching For BodyBuilding."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Transformation />
      <section className="mt-5 studentsreview-1 d-none d-md-block">
        <div className="container-fluid bg-light">
          <div className="container px-0 py-5">
            <div className="pb-5">
              <div className="py-md-5">
                <div className="covid text-center">
                  <h1 className="h2-fs">
                    <span className="m-0 text-blue-color">
                      global journey of{" "}
                    </span>
                    transformation
                  </h1>
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
                  loop
                  id="owl-active"
                  className="owl-carousel owl-theme mt-4"
                  navText={[
                    '<i class="fas fa-arrow-left"></i>',
                    '<i class="fas fa-arrow-right"></i>',
                  ]}
                  dots={false}
                  nav={true}
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
                  {/* <div className="item mx-3">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/t4.webp"
                      }
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      alt="weight loss transformation"
                    />
                  </div> */}
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
                        "/assets/images/landing-page/t1.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  {/* <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/g2.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div> */}
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
                  {/* <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/g3.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div> */}
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
                        "/assets/images/landing-page/t2.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  {/* <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/g4.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div> */}
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
                        "/assets/images/landing-page/t5.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  {/* <div className="item mx-3">
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
                  </div> */}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 studentsreview-1 d-block d-md-none">
        <div className="container-fluid bg-light">
          <div className="container px-0 py-2">
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
                        "/assets/images/landing-page/t4.webp"
                      }
                      className="img-fluid"
                      alt="FG Group"
                    />
                  </div>
                </div> */}
              </div>
              <div className="row mt-4">
                <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/landing-page/t1.webp"
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />
                </div>
                {/* <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/landing-page/t4.webp"
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />
                </div> */}
                <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={process.env.PUBLIC_URL + "/assets/images/img/41.webp"}
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />
                </div>
                {/* <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/landing-page/g3.webp"
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />
                </div> */}
                <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/landing-page/t2.webp"
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />
                </div>
                {/* <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/landing-page/g4.webp"
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />
                </div>{" "} */}
                <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/landing-page/t5.webp"
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />
                </div>
                <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/body-1.webp"
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />
                </div>
                <div className="col-6 mb-3">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/body-2.webp"
                    }
                    style={{
                      borderRadius: "5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    }}
                    alt="weight loss transformation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HowItWork />
      {/* <Coaches /> */}

      <section className="my-5 studentsreview-1">
        <div className="container-fluid px-0">
          <div className="d-md-block d-none">
            <img
              className="img-fluid"
              src={process.env.PUBLIC_URL + "/assets/images/fwg/coaches.webp"}
              alt="Dietitian"
              width="100%"
            />
          </div>
          <div className="d-md-none d-block">
            <img
              className="img-fluid"
              src={"/assets/images/fwg/coaches-mobile.webp"}
              alt="Dietitian"
              width="100%"
            />
          </div>
        </div>
      </section>
      <ClientsTestimonial testimonials={testimonials} />
      <BlogsRtpTwo />
      <section className="gym-image-fwg margintop mt-md-5 mt-0 pt-md-5 pt-0 pb-md-4 pb-0 mb-4">
        <div className="container">
          <div className="covid text-center mt-4">
            <h2 className="h2-fs">
              Gym
              <span className="m-0 text-blue-color"> Exercises</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
          <div id="menu">
            <ul className="menuList">
              <li>
                <img src="/assets/images/fwg/adajan-gym-3.jpg" alt="img1" />
              </li>
              <li>
                <img src="/assets/images/fwg/adajan-gym-4.jpg" alt="img2" />
              </li>
              <li>
                <img src="/assets/images/img/achievement_13.webp" alt="img3" />
              </li>
              <li>
                <img src="/assets/images/img/gym-excercise-1.webp" alt="img4" />
              </li>
              <li>
                <img src="/assets/images/img/gym-excercise-2.webp" alt="img5" />
              </li>
              <li>
                <img src="/assets/images/fwg/adajan-gym-6.jpg" alt="img6" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="fwg-webinar-page-faq margintop mt-md-5 mt-0 pt-md-5 pt-0 pb-md-4 pb-0">
        <div className="container">
          <div className="covid text-center">
            <h2 className="h2-fs">
              FAQ'S
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
          <div className="">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-wrapper">
                <div className="faq-item" onClick={() => toggleAnswer(index)}>
                  <div className="faq-question">{item.question}</div>
                  <div className="icon-container">
                    <i
                      className={`fas fa-chevron-right ${activeIndex === index ? "active" : ""
                        }`}
                    ></i>
                  </div>
                </div>
                <div
                  className={`faq-answer ${activeIndex === index ? "active" : ""
                    }`}
                  style={{ maxHeight: activeIndex === index ? "200px" : "0" }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <InquiryForm />
      <Modal show={showModal} onHide={handlePopupClose} centered>
        <div className="modal-content">
          <div className="modal-content form-design form-bg">
            <div className="modal-header justify-content-center p-0 border-bottom-0">
              <div className="text-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/descount-img.webp"
                  }
                  className="mb-1 img-media"
                  alt="FG Group"
                  width="250px"
                />
                <h2 className="h2-fs popuphading">Refer and Earn</h2>
              </div>
              <button
                type="button"
                className="closess close-btn closse-mobile p-0 bg-transparent border-0"
                onClick={handlePopupClose}
              >
                <span aria-hidden="true" className="p-0">
                  <i className="fas fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body mb-0 p-0">
              <div className="text-center d-block formmi" id="hid">
                <div className="row justify-content-center">
                  <div className="col-md-11 pl-0">
                    <Form>
                      <div className="input-group align-items-center">
                        <span>
                          <i className="far fa-user"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control fr"
                          placeholder="Enter referral name"
                          required
                          name="modalRefname"
                        />
                      </div>
                      <div className="input-group align-items-center mb-3">
                        <span>
                          <i className="fas fa-phone-alt"></i>
                        </span>
                        <input
                          type="number"
                          className="form-control fr"
                          placeholder="Enter Referral contact Number"
                          required
                          name="modalRefnumber"
                        />
                      </div>
                      <div className="input-group align-items-center mb-3">
                        <span className="pr-1">
                          <i className="fas fa-chalkboard-teacher"></i>
                        </span>
                        <select
                          className="num-employ pl-0"
                          required
                          name="modalSelectedCourse"
                        >
                          <option value="" hidden>
                            Select which course you interested
                          </option>
                          <option
                            className="field"
                            value="Diploma In Personal Training course"
                          >
                            Diploma In Personal Training course
                          </option>
                          <option
                            className="field"
                            value="Diploma In Nutrition course"
                          >
                            Diploma In Nutrition course
                          </option>
                          <option
                            className="field"
                            value="Diploma In Health & Fitness Business Management"
                          >
                            Diploma In Health & Fitness Business Management
                          </option>
                          <option
                            className="field"
                            value="Anabolic Androgenic Steroids"
                          >
                            Anabolic Androgenic Steroids
                          </option>
                          <option
                            className="field"
                            value="Group Instructor Workshop"
                          >
                            Group Instructor Workshop
                          </option>
                          <option
                            className="field"
                            value="Injury Rehabilitation Workshop"
                          >
                            Injury Rehabilitation Workshop
                          </option>
                          <option
                            className="field"
                            value="Advance Clinical Nutrition Workshop"
                          >
                            Advance Clinical Nutrition Workshop
                          </option>
                        </select>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="text-center Referr-btn mt-md-3">
                <button
                  className="btn p-2 px-5"
                  onClick={actionReferAndEarnSubmit}
                >
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <FwgFooter />
    </>
  );
}

export default BodybuildingProgram;
