/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../../assets/css/home.css";
import "../../assets/css/new-popup.css";
import Modal from "react-bootstrap/Modal";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Form } from "react-bootstrap";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import { sendInquiry } from "../../assets/js/utils/contact-us";
import Swal from "sweetalert2";
import "react-lazy-load-image-component/src/effects/blur.css";
import ModalVideo from "react-modal-video";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OnlineProgramFormFwg from "../../components/online-fwg/onlineProgramForm";
import InquiryForm from "../../components/fwg/inquiry-form";
import { ClinicalDietProgramData } from "../../components/online-fwg/AllOnlineProgramData";
import ClientsTestimonial from "../../components/fwg/clinetvideoreview";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import FwgHeader from "../../components/partials/Header/fwgheader";
import { Helmet } from "react-helmet";

function ClinicalIllness() {
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
        "How can we join this program if we prefer remote consultations?",
      answer:
        "You don't have to visit a clinic in person to join our program! We offer an online clinical program that includes one-on-one consultations, personalized treatment plans, and virtual follow-ups to ensure consistent care.",
    },
    {
      question: "What results can I expect in one month?",
      answer:
        "With our customized clinical plans, you can see improvements in your symptoms and overall health markers in as little as one month. Progress depends on your specific health condition and commitment to the plan.",
    },
    {
      question: "What if I want to join offline instead of online?",
      answer:
        "You're welcome to join us offline if you're located in Surat, Baroda, or Bardoli, where we have in-person consultation centers available.",
    },

    {
      question:
        "Can I still manage my condition if I don't consume non-veg food?",
      answer:
        "Absolutely! Our team of internationally certified clinical professionals will create a customized diet plan that suits your dietary preferences and health goals without requiring non-veg food.",
    },
    {
      question:
        "Will you provide guidance for specific medical treatments or medication management?",
      answer:
        "Yes, we offer guidance on a variety of treatment plans, including proper planning and adjustments, to ensure a safe and effective approach to managing your condition.",
    },
    {
      question:
        "How long should I prepare with you to see substantial improvements?",
      answer:
        "Typically, it takes around 6 to 12 months to see major improvements, depending on your current health and the condition being treated.",
    },
    {
      question: "How much will it cost per month?",
      answer:
        "The monthly cost varies based on your treatment plan and requirements, but it generally ranges between 2-3k, including any recommended supplements.",
    },
    {
      question: "Will I get 100% results with your program?",
      answer:
        "Yes, with over 12 years of experience, we've successfully helped many clients manage their health conditions. However, achieving the best results depends on your commitment to regular updates and open communication with our team on a daily basis.",
    },
  ];

  const testimonials = [
    {
      name: "Jitendra Dua",
      description: `I recently discovered FitnessWithGomzi, and joining their program has been a life-changing decision! With their expert guidance and tailored workouts, I was able to lose around 9kg in a healthy, sustainable way. The team is incredibly supportive, constantly motivating me to push my limits and stay consistent with my fitness goals.`,
      videoUrl: "TTo1ms1bCQs",
      imageUrl: "/assets//images/fwg/rtp-3-one.webp",
      date: "13 March 2023",
    },
    {
      name: "Daksha",
      description: `My friend told me about FitnessWithGomzi, and I decided to join—and I'm so glad I did! In just a short time, I've lost around 5kg, thanks to their well-structured program and motivating trainers. The personalized workouts, combined with nutrition advice, have really helped me stay on track and feel healthier overall.`,
      videoUrl: "IRGmI-YCWsc",
      imageUrl: "/assets/images/fwg/rtp-3-two.webp",
      date: "13 March 2023",
    },
    {
      name: "Shree Acharya",
      description: `With the incredible support of FitnessWithGomzi, I've been able to compete at state championships! Their personalized training plans and expert guidance have taken my fitness to the next level, preparing me both mentally and physically for competition. The coaches truly understand how to push your limits while keeping the workouts balanced and effective.`,
      videoUrl: "Yv4kJLnICKI",
      imageUrl: "/assets/images/fwg/rtp-3-three.webp",
      date: "13 March 2023",
    },
  ];

  const [showMore, setShowMore] = useState(Array(5).fill(false));

  const toggleReadMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };
  return (
    <>
      <Helmet>
        <title>Clinical Illness Guide - Diagnosis and Management</title>
        <meta name="description" content="Get expert insights on clinical illness diagnosis and management. Learn symptoms, treatments, recovery for best health." />
        <meta name="keyword" content="Clinical Diet Program, weight, loss, program, fitness, fast weight loss diet plan, online weight loss program, Clinical illness, diet plan for weight loss, weight loss diet plan for women, weight loss diet, weight loss foods, best diet plan for weight loss, free diet plan for weight loss, best diet for weight loss, weight loss diet plan for men, weight loss meal plan, weight loss programs, best weight loss meal plan, best food for weight loss, best weight loss program, weight loss plans, diet chart for weight loss, weight loss, diet plan for weight loss for female, diet meal plans for weight loss, healthy diet plan for weight loss, healthy meal plans for weight loss, top weight loss programs, diet for weight loss for female, fat loss diet, diet food for weight loss, best food to eat to lose weight, weight loss meal plan for women, best diet for fast weight loss, fasting weight loss, fat loss diet plan, weight loss meal, food to eat to lose weight, foods that help you lose weight, foods to help lose weight, good diet plans, lose weight near me, best diet program for weight loss, weight loss diet chart for female, good diet plan for weight loss, quick weight loss diet plan, top rated weight loss programs" />
        <meta
          property="og:title"
          content="Clinical Illness Guide - Diagnosis and Management"
        />
        <meta
          property="og:description"
          content="Get expert insights on clinical illness diagnosis and management. Learn symptoms, treatments, recovery for best health."
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/community/clinical-illness"
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
     Clinical Diet Program, weight, loss, program, fitness, fast weight loss diet plan, online weight loss program, Clinical illness, diet plan for weight loss, weight loss diet plan for women, weight loss diet, weight loss foods, best diet plan for weight loss, free diet plan for weight loss, best diet for weight loss, weight loss diet plan for men, weight loss meal plan, weight loss programs, best weight loss meal plan, best food for weight loss, best weight loss program, weight loss plans, diet chart for weight loss, weight loss, diet plan for weight loss for female, diet meal plans for weight loss, healthy diet plan for weight loss, healthy meal plans for weight loss, top weight loss programs, diet for weight loss for female, fat loss diet, diet food for weight loss, best food to eat to lose weight, weight loss meal plan for women, best diet for fast weight loss, fasting weight loss, fat loss diet plan, weight loss meal, food to eat to lose weight, foods that help you lose weight, foods to help lose weight, good diet plans, lose weight near me, best diet program for weight loss, weight loss diet chart for female, good diet plan for weight loss, quick weight loss diet plan, top rated weight loss programs
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
          "Hello, I wanted to know more about Online Clinical Diet Program details. "
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
                          "/assets/images/fwg/rtp-three.webp"
                        }
                      />
                      <div className="video-btn play-btn">
                        <a
                          onClick={() => openVideoModal("9cR1RPuYq5w")}
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
                          {ClinicalDietProgramData?.info1.map((info) => (
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
                    programData={ClinicalDietProgramData}
                    openForm={openForm}
                    whatsappMessage="Hello, I wanted to know more about the Online Clinical Diet Program."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="studentsreview-1">
        <div className="container-fluid">
          <div className="container py-5 d-none d-md-block">
            <div className="covid text-center">
              <h2 className="h2-fs">
                <span style={{ color: "#00afef", margin: "0px" }}>
                  How We works on{" "}
                </span>{" "}
                your transformation
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <div className="slider-container">
              <OwlCarousel
                loop
                autoPlay
                dots={false}
                nav={true}
                id="owl-demo12"
                className="owl-carousel owl-theme"
                navText={[
                  '<i class="fas fa-arrow-left"></i>',
                  '<i class="fas fa-arrow-right"></i>',
                ]}
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
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/program-step-11.webp"
                    }
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Fg Group"
                  />
                </div>
                {/* <div className="item mx-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/program-step-2.webp"
                  }
                  style={{ borderRadius: "10px" }}
                  className="img-fluid"
                  alt="Fg Group"
                />
              </div> */}
                <div className="item mx-3">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/program-step-3.webp"
                    }
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Fg Group"
                  />
                </div>
                <div className="item mx-3">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/program-step-4.webp"
                    }
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Fg Group"
                  />
                </div>
                <div className="item mx-3">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/program-step-5.webp"
                    }
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Fg Group"
                  />
                </div>
                <div className="item mx-3">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/program-step-6.webp"
                    }
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt="Fg Group"
                  />
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="container py-2 d-block d-md-none">
            <div className="demoo text-center">
              <h2 className="h2-fs">
                <span style={{ color: "#00afef", margin: "0px" }}>
                  How We work on{" "}
                </span>{" "}
                your transformation
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <div className="row">
              <div className="col-6 mb-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/program-step-11.webp"
                  }
                  style={{ borderRadius: "10px" }}
                  className="img-fluid"
                  alt="Fg Group"
                />
              </div>
              <div className="col-6 mb-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/program-step-3.webp"
                  }
                  style={{ borderRadius: "10px" }}
                  className="img-fluid"
                  alt="Fg Group"
                />
              </div>
              <div className="col-6 mb-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/program-step-4.webp"
                  }
                  style={{ borderRadius: "10px" }}
                  className="img-fluid"
                  alt="Fg Group"
                />
              </div>
              <div className="col-6 mb-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/program-step-5.webp"
                  }
                  style={{ borderRadius: "10px" }}
                  className="img-fluid"
                  alt="Fg Group"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="margintop d-none d-md-block">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="covid text-center">
              <h2 className="h2-fs" style={{ color: "#333" }}>
                Reverse Your{" "}
                <span className="m-0 text-blue-color">Diseases Today</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-0 mb-md-5"></div>
            <div className="row border-bottom pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/fatty.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("6uyrkB9iPzQ?s")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">Fatty Liver (1m+ Views)</h2>
                <div className="row">
                  <div>
                    <p style={{ paddingLeft: "15px" }}>
                      There is a disease that is affected to around 30% of the
                      population of India. And the disease is Fatty Liver, there
                      are lots of reasons for the fatty liver but the main
                      reasons are eating junk foods and drinking alcohol more
                      frequently. Fatty liver occurs when too much fat builds up
                      in liver cells. Although it is normal to have a tiny
                      amount of fat in these cells, the liver is considered
                      fatty if more than 5% of it is fat. If you are suffering
                      ....
                    </p>
                  </div>
                </div>
                <Link
                  to="https://www.youtube.com/embed/6uyrkB9iPzQ?si=nRQ9EeiJNo_T-5c6"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
            <div className="row border-bottom pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/varicose.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("tnGfI5MgfXM")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">
                  What are Varicose Veins? (900k+ Views)
                </h2>
                <div className="row">
                  <div>
                    <p style={{ paddingLeft: "15px" }}>
                      The Bottom Line Of A Healthy Body May Be A Healthy Liver.
                      The Liver Assists In A Very Heap Of Body Functions And
                      Conjointly Flushes Out Toxins And Helps In Metabolism.
                      Taking Care Of The Liver Becomes Simple After You Build A
                      Healthy Mode Of Your Habit. Following A Healthy Mode Keeps
                      You Match And Conjointly Keeps Your Liver Removed From
                      Diseases. Everything That You Just Consume, As Well As
                      Medicines And Alcohol, Is Filtered By Your Liver. Hence...
                    </p>
                  </div>
                </div>
                <Link
                  to="https://youtu.be/tnGfI5MgfXM?si=DOk18_rTTBGMfoLN"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
            <div className="row border-bottom pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/healing_and_care15.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("oNtDaU2L4gk")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">SGPT/SGOT Video (780k+ Views)</h2>
                <div className="row">
                  <div>
                    <p style={{ paddingLeft: "15px" }}>
                      The bottom line of a healthy body may be a healthy liver.
                      The liver assists in a very heap of body functions and
                      conjointly flushes out toxins and helps in metabolism.
                      Taking care of the liver becomes simple after you build a
                      healthy mode of your habit. Following a healthy mode keeps
                      you match and conjointly keeps your liver removed from
                      diseases. Everything that you just consume, as well as
                      medicines and alcohol, is filtered by your liver. Hence,
                      it's a crucial organ for the body to perform properly.
                      hindrance is usually higher than cure, therefore taking
                      care of your liver will assist you in avoiding treatments
                      and complications. SGPT & SGOT square measure the enzymes
                      made by your liver & its cells. High SGPT/SGOT is a sign
                      of liver cell injury, they have to be detected through
                      regular health checkups.
                    </p>
                  </div>
                </div>
                <Link
                  to="https://youtu.be/oNtDaU2L4gk?si=4cuW1Mf7JCXfecXP"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
            <div className="row border-bottom pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/cupping.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("aLzkmslx6WY")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">Cupping Therapy (750k+ Views)</h2>
                <div className="row">
                  <div>
                    <p style={{ paddingLeft: "15px" }}>
                      The Bottom Line Of A Healthy Body May Be A Healthy Liver.
                      The Liver Assists In A Very Heap Of Body Functions And
                      Conjointly Flushes Out Toxins And Helps In Metabolism.
                      Taking Care Of The Liver Becomes Simple After You Build A
                      Healthy Mode Of Your Habit. Following A Healthy Mode Keeps
                      You Match And Conjointly Keeps Your Liver Removed From
                      Diseases. Everything That You Just Consume, As Well As
                      Medicines And Alcohol, Is Filtered By Your Liver. Hence...
                    </p>
                  </div>
                </div>
                <Link
                  to="https://youtu.be/aLzkmslx6WY?si=mSNjG7UXp8ULSat4"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
            <div className="row  pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/ulcer.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("1Qfgpak6d2c")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">Ulcer Video Reach (450k+ Views)</h2>
                <div className="row">
                  <div style={{ paddingLeft: "15px" }}>
                    <p>
                      Ulcers are ulcers on the lining of the stomach or small
                      intestine. Ulcers can also be on your esophagus (throat).
                      Most ulcers are located in the small intestine. These
                      ulcers are called duodenal ulcers. Stomach ulcers are
                      called peptic ulcers. Ulcers in the throat are called
                      esophageal ulcers.
                    </p>
                    <p className="mt-2">
                      <b>Types Of Ulcer</b>
                    </p>
                    <ul style={{ paddingLeft: "15px" }} className="mt-2">
                      <li>PEPTIC ULCER</li>
                      <li style={{ textTransform: "uppercase" }}>
                        Parietal ulcers
                      </li>
                      <li>VENOUS ULCERS</li>
                      <li>MOUTH ULCER</li>
                      <li>GENITAL ULCER</li>
                    </ul>
                  </div>
                </div>
                <Link
                  to="https://youtu.be/1Qfgpak6d2c?si=wYobLGg9s_2cd2Or"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-block d-md-none">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="covid text-center">
              <h2 className="h2-fs">
                <span style={{ color: "#00afef", margin: "0px" }}>
                  Reverse your{" "}
                </span>{" "}
                Diseases Today
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-0 mb-md-5"></div>
            <div className="row border-bottom pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/fatty.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("6uyrkB9iPzQ?s")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">Fatty Liver (1m+ Views)</h2>
                <div className="row">
                  <div>
                    <p style={{ paddingLeft: "15px" }}>
                      There is a disease that is affected to around 30% of the
                      population of India. And the disease is Fatty Liver, there
                      {showMore[0] ? (
                        ` are lots of reasons for the fatty liver but the main
                      reasons are eating junk foods and drinking alcohol more
                      frequently. Fatty liver occurs when too much fat builds up
                      in liver cells. Although it is normal to have a tiny
                      amount of fat in these cells, the liver is considered
                      fatty if more than 5% of it is fat. If you are suffering`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(0)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1 ml-3"
                    >
                      {showMore[0] ? "Read less" : "Read more"}
                    </span>
                  </div>
                </div>
                <Link
                  to="https://www.youtube.com/embed/6uyrkB9iPzQ?si=nRQ9EeiJNo_T-5c6"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
            <div className="row border-bottom pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/varicose.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("tnGfI5MgfXM")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">
                  What are Varicose Veins? (900k+ Views)
                </h2>
                <div className="row">
                  <div>
                    <p style={{ paddingLeft: "15px" }}>
                      The Bottom Line Of A Healthy Body May Be A Healthy Liver.
                      The Liver Assists In A Very Heap Of Body Functions And
                      {showMore[1] ? (
                        ` Conjointly Flushes Out Toxins And Helps In Metabolism.
                      Taking Care Of The Liver Becomes Simple After You Build A
                      Healthy Mode Of Your Habit. Following A Healthy Mode Keeps
                      You Match And Conjointly Keeps Your Liver Removed From
                      Diseases. Everything That You Just Consume, As Well As
                      Medicines And Alcohol, Is Filtered By Your Liver.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(1)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1 ml-3"
                    >
                      {showMore[1] ? "Read less" : "Read more"}
                    </span>
                  </div>
                </div>
                <Link
                  to="https://youtu.be/tnGfI5MgfXM?si=DOk18_rTTBGMfoLN"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
            <div className="row border-bottom pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/healing_and_care15.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("oNtDaU2L4gk")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">SGPT/SGOT Video (780k+ Views)</h2>
                <div className="row">
                  <div>
                    <p style={{ paddingLeft: "15px" }}>
                      The bottom line of a healthy body may be a healthy liver.
                      The liver assists in a very heap of body functions and
                      conjointly flushes out toxins and helps in metabolism.
                      {showMore[2] ? (
                        ` Taking care of the liver becomes simple after you build a
                      healthy mode of your habit. Following a healthy mode keeps
                      you match and conjointly keeps your liver removed from
                      diseases. Everything that you just consume, as well as
                      medicines and alcohol, is filtered by your liver. Hence,
                      it's a crucial organ for the body to perform properly.
                      hindrance is usually higher than cure, therefore taking
                      care of your liver will assist you in avoiding treatments
                      and complications. SGPT & SGOT square measure the enzymes
                      made by your liver & its cells. High SGPT/SGOT is a sign
                      of liver cell injury, they have to be detected through
                      regular health checkups.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(2)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1 ml-3"
                    >
                      {showMore[2] ? "Read less" : "Read more"}
                    </span>
                  </div>
                </div>
                <Link
                  to="https://youtu.be/oNtDaU2L4gk?si=4cuW1Mf7JCXfecXP"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
            <div className="row border-bottom pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/cupping.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("aLzkmslx6WY")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">Cupping Therapy (750k+ Views)</h2>
                <div className="row">
                  <div>
                    <p style={{ paddingLeft: "15px" }}>
                      The Bottom Line Of A Healthy Body May Be A Healthy Liver.
                      The Liver Assists In A Very Heap Of Body Functions And
                      {showMore[3] ? (
                        ` Conjointly Flushes Out Toxins And Helps In Metabolism.
                      Taking Care Of The Liver Becomes Simple After You Build A
                      Healthy Mode Of Your Habit. Following A Healthy Mode Keeps
                      You Match And Conjointly Keeps Your Liver Removed From
                      Diseases. Everything That You Just Consume, As Well As
                      Medicines And Alcohol, Is Filtered By Your Liver.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(3)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1 ml-3"
                    >
                      {showMore[3] ? "Read less" : "Read more"}
                    </span>
                  </div>
                </div>
                <Link
                  to="https://youtu.be/aLzkmslx6WY?si=mSNjG7UXp8ULSat4"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
            <div className="row pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/ulcer.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("1Qfgpak6d2c")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">Ulcer Video Reach (450k+ Views)</h2>
                <div className="row">
                  <div style={{ paddingLeft: "15px" }}>
                    <p>
                      Ulcers are ulcers on the lining of the stomach or small
                      intestine. Ulcers can also be on your esophagus (throat).
                      {showMore[4] ? (
                        ` Most ulcers are located in the small intestine. These
                      ulcers are called duodenal ulcers. Stomach ulcers are
                      called peptic ulcers. Ulcers in the throat are called
                      esophageal ulcers.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(4)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[4] ? "Read less" : "Read more"}
                    </span>
                    <p className="mt-2 d-none d-md-block">
                      <b>Types Of Ulcer</b>
                    </p>
                    <ul
                      style={{ paddingLeft: "15px" }}
                      className="mt-2 d-none d-md-block"
                    >
                      <li>PEPTIC ULCER</li>
                      <li style={{ textTransform: "uppercase" }}>
                        Parietal ulcers
                      </li>
                      <li>VENOUS ULCERS</li>
                      <li>MOUTH ULCER</li>
                      <li>GENITAL ULCER</li>
                    </ul>
                  </div>
                </div>
                <Link
                  to="https://youtu.be/1Qfgpak6d2c?si=wYobLGg9s_2cd2Or"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop d-md-block d-none">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="covid text-center">
              <h2 className="h2-fs">
                <span style={{ color: " #00afef", margin: "0px" }}>
                  Testimonials
                </span>{" "}
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="mr-2 text-danger"
                />
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-4"></div>
            <div className="d-md-block my-md-5">
              <OwlCarousel
                loop
                autoPlay
                dots={false}
                nav={false}
                id="owl-reports"
                className="owl-carousel-reports owl-theme"
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
                <div className="item mx-3">
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <div className="reports-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/s1.webp"
                          }
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 text-center mt-3 mt-md-0">
                      <div className="reports-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/s2.webp"
                          }
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <div className="reports-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/s3.webp"
                          }
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 text-center mt-3 mt-md-0">
                      <div className="reports-img">
                        <img
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/s4.webp"
                          }
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <div className="reports-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/s5.webp"
                          }
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 text-center mt-3 mt-md-0">
                      <div className="reports-img">
                        <img
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/s6.webp"
                          }
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="d-md-none d-block">
        <div className="container-fluid px-0 py-3">
          <div className="text-center">
            <h2 className="h2-fs">
              <span style={{ color: "#00afef", margin: "0px" }}>
                Testimonials
              </span>{" "}
              <FontAwesomeIcon icon={faYoutube} className="mr-2 text-danger" />
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-4"></div>
          <div className="row">
            {[1, 2, 3, 4, 5, 6].map((imgNumber) => (
              <div className="col-12 text-center my-3" key={imgNumber}>
                <div className="reports-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/images/fwg/s${imgNumber}.webp`
                    }
                    alt={`reports ${imgNumber}`}
                    style={{ borderBottom: "5px solid #CBE465" }}
                    className="lazy img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="my-2 studentsreview-1">
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
      {/* <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="covid text-center mt-3">
              <h2 className='h2-fs' style={{ color: "#333" }}>
                Blogs<span className="m-0 text-blue-color"></span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3 mb-md-5"></div>
            <div className="d-none d-lg-block">
              <div className="row">
                <div className="col-md-4">
                  <div className="item-box">
                    <LazyLoadImage
                      effect="blur"
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/133517439.webp"
                      }
                      alt="Snowy Mountains"
                    />
                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                        WEIGHT LOSS VS FAT LOSS
                      </h2>
                      <p className="card__text">
                        Extending the elbow and forearm. Explain that chair
                        dips are the foremost effective workout for this
                        muscle. The triceps are important in an everyday
                        movement that involves.
                      </p>
                      <Link
                        to="/blogs/fatloss-vs-weightloss"
                        className="card__btn"
                      >
                        Explore
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="item-box">
                    <LazyLoadImage
                      effect="blur"
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/blog/hate-gym.webp"
                      }
                      alt="difference between fat loss abd weight loss"
                    />
                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                        Healthy Eating Habits For Kids It's Challenging For Parents
                      </h2>
                      <p className="card__text">
                        The Reason Is Simple: Gym Is A Place That Makes Us
                        Feel Like We're Not In Control. It's A Place Where We
                        Don't Feel Comfortable With Who We Are Or What We Look
                        Like.
                      </p>
                      <Link
                        to="/blogs/Healthy-Eating-Habits-For-your-Kids"
                        className="card__btn mt-2"
                      >
                        Explore
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="item-box">
                    <LazyLoadImage
                      effect="blur"
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/blog1-1.webp"
                      }
                      alt="Shed Pounds with Ease"
                    />
                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                        Type-2 Diabetes
                      </h2>
                      <p className="card__text mb-5">
                        Numerous people love to workout at the gym but at the
                        current time, life gets busy with a lot of works and
                        that's why have to sweat out at home.
                      </p>
                      <Link
                        to="/blogs/type-2-diabetes"
                        className="card__btn"
                      >
                        Explore
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-lg-none paddingbottom60 studentsreview-1">
              <OwlCarousel
                loop
                autoplay
                id="owl-demo111"
                items={1}
                nav={true}
                dots={false}
                className="owl-carousel owl-theme"
                navText={[
                  '<i class="fas fa-arrow-left"></i>',
                  '<i class="fas fa-arrow-right"></i>',
                ]}
                responsive={{
                  0: {
                    items: 1,
                    nav: false,
                  },
                  600: {
                    items: 2,
                  },
                  1000: {
                    items: 3,
                  },
                }}
              >
                <div className="item m-3">
                  <div className="item-box">
                    <img
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/133517439.webp"
                      }
                      alt="Snowy Mountains"
                    />

                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                        WEIGHT LOSS VS FAT LOSS
                      </h2>
                      <p className="card__text mb-0">
                        Extending the elbow and forearm. Explain that chair
                        dips are the foremost effective workout for this
                        muscle. The triceps are important in an everyday
                        movement that involves.
                      </p>
                      <Link
                        to="/blogs/fatloss-vs-weightloss"
                        className="card__btn mt-3"
                      >
                        Explore
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item m-3">
                  <div className="item-box">
                    <img
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/blog/hate-gym.webp"
                      }
                      alt="difference between fat loss abd weight loss"
                    />

                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                        Healthy Eating Habits For Kids It's Challenging For Parents
                      </h2>
                      <p className="card__text mb-0">
                        The Reason Is Simple: Gym Is A Place That Makes Us
                        Feel Like We're Not In Control. It's A Place Where We
                        Don't Feel Comfortable With Who We Are Or What We Look
                        Like.
                      </p>
                      <Link
                        to="/blogs/Healthy-Eating-Habits-For-your-Kids"
                        className="card__btn mt-3"
                      >
                        Explore
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item m-3">
                  <div className="item-box">
                    <img
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/blog1-1.webp"
                      }
                      alt="Shed Pounds with Ease"
                    />

                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                        Type-2 Diabetes
                      </h2>
                      <p className="card__text mb-0">
                        Numerous people love to workout at the gym but at the
                        current time, life gets busy with a lot of works and
                        that's why have to sweat out at home.
                      </p>
                      <Link
                        to="/blogs/type-2-diabetes"
                        className="card__btn mt-3"
                      >
                        Explore
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section> */}
      <section className="fwg-webinar-page-faq  mt-md-5 mt-0 pt-md-5 pt-0 pb-md-4 pb-0">
        <div className="container">
          <div className="covid text-center mt-3">
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
                          {/* <option
                            className="field"
                            value="Advance Clinical Nutrition Workshop"
                          >
                            Advance Clinical Nutrition Workshop
                          </option> */}
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
      <FgiitFooter />
    </>
  );
}

export default ClinicalIllness;
