import React, { useEffect, useState } from "react";
import FwgHeader from "../../components/partials/Header/fwgheader";
import FwgFooter from "../../components/partials/Footer/fwgfooter";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { sendInquiry } from "../../assets/js/utils/contact-us";
import Modal from "react-bootstrap/Modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import Transformation from "../../components/fwg/transformation";
import HowItWork from "../../components/fwg/howItWork";
import { RapidWeightLossProgramData } from "../../components/online-fwg/AllOnlineProgramData";
import OnlineProgramFormFwg from "../../components/online-fwg/onlineProgramForm";
import BlogsRtpTwo from "../../components/fwg/blog-rtp-two";
import InquiryForm from "../../components/fwg/inquiry-form";
import ClientsTestimonial from "../../components/fwg/clinetvideoreview";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import { Helmet } from "react-helmet";
import ModalVideo from "react-modal-video";

function WeightLossPrograms() {
  const canonicalUrl = window.location.href;
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    modalName: "",
    modalEmail: "",
    modalContactNumber: "",
    modalSelectedTime: "",
    modalSelectedDate: "",
    modalMessage: "",
  });
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const bookFreeAppointmentWithBestDietitianInquiry = async () => {
    try {
      const name = formData.modalName;
      const phoneNumber = formData.modalContactNumber;
      const email = formData.modalEmail;
      const date = formData.modalSelectedDate;
      const time = formData.modalSelectedTime;
      var message = `Hello, My name is ${name} and I want to book a free appointment with best dietitian on ${date} at ${time}.`;
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "Book Free Appointment with Best Dietitian",
        message,
        window.location.href,
        null,
        null,
        null
      );
      setFormData({
        modalName: "",
        modalEmail: "",
        modalContactNumber: "",
        modalSelectedDate: "",
        modalSelectedTime: "",
      });
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const $ = window.$;

    $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fas fa-arrow-right"></i>');

    const timer = setTimeout(() => {
      setShowModal(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

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

  const faqItems = [
    {
      question:
        "How can we join this program if we don't want to go to the gym?",
      answer:
        "You don't have to go to the gym to join our program! We offer an online program that includes one-on-one personal training sessions and customized home training. You'll also receive a diet plan tailored just for you.",
    },
    {
      question: "How much weight can I lose in one month?",
      answer:
        "With our training and diet plan, you can lose around 3-4 kg in one month, depending on your body type and commitment to the program.",
    },
    {
      question: "What if I want to join offline instead of online?",
      answer:
        "You're welcome to join us offline if you're located in Surat, Baroda, or Bardoli, where we have in-person training centers available.",
    },

    {
      question: "Can I still lose or gain weight if I don't eat non-veg food?",
      answer:
        "Absolutely! Our team, which is internationally certified, will create a customized diet plan to meet your goals, whether you want to lose or gain weight, without requiring non-veg food.",
    },
  ];

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
        <title>Join Effective Fitness Programs for a Healthier Lifestyle</title>
        <meta
          name="description"
          content="Transform your health with effective fitness programs. Boost strength, energy, and wellness—start your healthier lifestyle today!"
        />
        <meta
          name="keyword"
          content="Rapid Weight Loss Program, weight, loss, program, fitness, weight loss exercise, rapid, weight loss workout plan, online weight loss program, fat loss program, fast weight loss, best exercise to lose weight, exercise plan to lose weight, fast weight loss diet plan, best exercise for fat loss, best exercise for weight loss, good workouts to lose weight, weight loss training program, faster way to weight loss, best program for weight loss, at home weight loss workouts, fitness plan to lose weight, workout programs for weight loss, exercise program for weight loss, workouts for weight loss at gym, program for weight loss, weight loss, weight-loss-programs"
        />
        <meta
          property="og:title"
          content="Join Effective Fitness Programs for a Healthier Lifestyle"
        />
        <meta
          property="og:description"
          content="Transform your health with effective fitness programs. Boost strength, energy, and wellness—start your healthier lifestyle today!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fitnesswithgomzi/online-rapid-weight-loss"
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
     Rapid Weight Loss Program, weight, loss, program, fitness, weight loss exercise, rapid, weight loss workout plan, online weight loss program, fat loss program, fast weight loss, best exercise to lose weight, exercise plan to lose weight, fast weight loss diet plan, best exercise for fat loss, best exercise for weight loss, good workouts to lose weight, weight loss training program, faster way to weight loss, best program for weight loss, at home weight loss workouts, fitness plan to lose weight, workout programs for weight loss, exercise program for weight loss, workouts for weight loss at gym, program for weight loss, weight loss, weight-loss-programs
      </p>
      <FwgHeader />
      <WhatsappHeaderApp
        message={
          "Hello, I wanted to know more about Online Rapid Weight Loss Program details. "
        }
        options={{ pageRef: true }}
      />
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <section style={{ marginTop: "100px", padding: "0px 0px 40px" }}>
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
                          "/assets/images/fwg/rtp-one.webp"
                        }
                      />

                      <div className="video-btn play-btn">
                        <a
                          onClick={() => openVideoModal("upvxCIGJykQ")}
                          className="custom clickof"
                          aria-label="Fg Group"
                        >
                          <span className="newthing">
                            <i className="fas fa-play"></i>
                          </span>
                        </a>
                      </div>
                      {/* <div className="video-btn play-btn">
                        <Link
                          to="https://youtu.be/30QdFjtAUes"
                          data-flashy-type="video"
                          className="custom clickof"
                        >
                          <span className="newthing">
                            <i className="fas fa-play"></i>
                          </span>
                        </Link>
                      </div> */}
                    </div>
                    <div className="d-md-block d-none">
                      <div className="course-info">
                        <h2 className="h6-fs course-title">Program Info</h2>
                        <ul className="course-list">
                          {RapidWeightLossProgramData?.info1.map((info) => (
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
              <div className="col-lg-5 px-md-0 position-relative">
                <div className="black-before-2">
                  <OnlineProgramFormFwg
                    programData={RapidWeightLossProgramData}
                    whatsappMessage="Hello, I wanted to know more about the Online Rapid Transform Weight Loss Program."
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
                  <div className="item mx-3">
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
                        "/assets/images/fwg/weight-loss-1.webp"
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
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/weight-loss-2.webp"
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
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/weight-loss/weight-loss-4.webp"
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
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/weight-loss-4.webp"
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
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/weight-loss/weight-loss-5.webp"
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
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/weight-loss/weight-loss-1.webp"
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
                        "/assets/images/fwg/weight-loss/weight-loss-7.webp"
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
                      "/assets/images/landing-page/t4.webp"
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
                      "/assets/images/fwg/weight-loss-2.webp"
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
                      "/assets/images/fwg/weight-loss/weight-loss-4.webp"
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
                      "/assets/images/fwg/weight-loss-4.webp"
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
                      "/assets/images/fwg/weight-loss/weight-loss-5.webp"
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
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/weight-loss/weight-loss-1.webp"
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
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/weight-loss/weight-loss-6.webp"
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
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/weight-loss/weight-loss-7.webp"
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
      <section className="pt-3 bg-light">
        <div className="container-fluid p-0 pb-4">
          <div className="col-md-12 p-0">
            <Link to="/fitnesswithgomzi/cryolipolysis">
              <img
                alt="Fitness And Nutrition Courses"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fwg/cryolipolysis-banner.webp"
                }
                width="100%"
                className="lazy"
              />
            </Link>
          </div>
          <div className="col-md-12 text-center mt-4 p-0 pt-1 pb-3">
            <div className="review-box-btn">
              <Link
                to="/fitnesswithgomzi/cryolipolysis"
                className="custom clickof"
              >
                Cryolipolysis Treatment
              </Link>
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
            <h2 className="h2-fs">FAQ'S</h2>
          </div>
          <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
          <div className="">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-wrapper">
                <div className="faq-item" onClick={() => toggleAnswer(index)}>
                  <div className="faq-question">{item.question}</div>
                  <div className="icon-container">
                    <i
                      className={`fas fa-chevron-right ${
                        activeIndex === index ? "active" : ""
                      }`}
                    ></i>
                  </div>
                </div>
                <div
                  className={`faq-answer ${
                    activeIndex === index ? "active" : ""
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
      <FwgFooter />
      {/* <ContactButtonFWG /> */}
      <Modal show={showModal} onHide={handleClose} centered>
        <div className="modal-dialog m-0" role="document">
          <div className="modal-content bg-changes bg-fwg-popup">
            <Modal.Header className="p-0 border-bottom-0">
              <div className="text-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/book-appointment.webp"
                  }
                  className="img-fluid mb-2 ml-2"
                  width="40%"
                  alt="Book Free Appointment"
                />
                <h2 className="h2-fs text-white fs-34">
                  Book Free Appointment with Best Dietitian
                </h2>
              </div>
              <button
                type="button"
                className="closess closse-mobile p-0 bg-transparent border-0"
                onClick={handleClose}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="p-0">
                  <i className="fas fa-times text-white"></i>
                </span>
              </button>
            </Modal.Header>
            <div className="modal-body mb-0 p-0">
              <div className="text-center d-block">
                <div className="row justify-content-center mb-4">
                  <div className="col-md-11 pl-0">
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="far fa-user"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control fr"
                        name="modalName"
                        value={formData.modalName}
                        onChange={handleChange}
                        placeholder="Enter Your name"
                      />
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="fas fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control fr"
                        name="modalEmail"
                        value={formData.modalEmail}
                        onChange={handleChange}
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="fas fa-phone-alt"></i>
                      </span>
                      <input
                        type="number"
                        className="form-control fr"
                        name="modalContactNumber"
                        value={formData.modalContactNumber}
                        onChange={handleChange}
                        placeholder="Enter Your contact Number"
                      />
                    </div>
                    <div className="input-group date-in align-items-center mb-3">
                      <span>
                        <i className="fas fa-calendar-alt"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control fr"
                        name="modalSelectedDate"
                        value={formData.modalSelectedDate}
                        onChange={handleChange}
                        placeholder="Enter Date"
                      />
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span className="pr-2">
                        <i className="fas fa-clock"></i>
                      </span>
                      <select
                        className="num-employ pl-0"
                        name="modalSelectedTime"
                        value={formData.modalSelectedTime}
                        onChange={handleChange}
                      >
                        <option value="" hidden>
                          Select Time Slot
                        </option>
                        <option value="07:00">07:00 am To 08:00 am</option>
                        <option value="16:00">04:00 pm to 05:00 pm</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={bookFreeAppointmentWithBestDietitianInquiry}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default WeightLossPrograms;
