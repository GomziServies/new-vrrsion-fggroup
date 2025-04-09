import React, { useState } from "react";
import "../../assets/css/home.css";
import "../../assets/css/new-popup.css";
import Modal from "react-bootstrap/Modal";
import OwlCarousel from "react-owl-carousel";
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
import HowItWork from "../../components/fwg/howItWork";
import BlogsRtpTwo from "../../components/fwg/blog-rtp-two";
import InquiryForm from "../../components/fwg/inquiry-form";
import { CorporateFitnessProgramData } from "../../components/online-fwg/AllOnlineProgramData";
import WhatsAppAnchor from "../../components/sendtowhatsapp";
import FwgHeader from "../../components/partials/Header/fwgheader";
import { Helmet } from "react-helmet";

function CorporateFitnessProgram() {
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
      // Show SweetAlert popup for error
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
      question: "How can I join this program if I have a packed work schedule?",
      answer:
        "You don't need a lot of extra time to join our program! We offer a flexible online program with one-on-one virtual training sessions and tailored workout plans that fit into even the busiest days. Your customized diet plan will also be designed to suit your lifestyle.",
    },
    {
      question:
        "How much weight or muscle can I expect to gain or lose in a month?",
      answer:
        "With our efficient, goal-oriented training and diet plan, you can achieve noticeable changes in just one month. Most clients lose around 3-4 kg or see improvements in muscle tone, depending on their commitment and body type.",
    },
    {
      question: "What if I want to participate offline instead of online?",
      answer:
        "If you're located in Surat, Baroda, or Bardoli, you're welcome to join us offline at one of our in-person training centers. However, our online program is structured to provide maximum flexibility for corporate clients.",
    },

    {
      question: "Can I still get results if I don't eat non-veg food?",
      answer:
        "Absolutely! Our internationally certified team will create a meal plan that aligns with your preferences and health goals, whether you want to lose weight, gain muscle, or improve overall fitness, without needing non-veg food.",
    },
    {
      question: "Will you guide me on stress management and energy levels?",
      answer:
        "Yes, our program includes guidance on optimizing energy levels, stress management, and effective recovery strategies, ensuring your fitness plan supports rather than strains your work schedule.",
    },
    {
      question: "How many months should I dedicate to see lasting results?",
      answer:
        "Typically, 6 to 12 months is recommended for lasting improvements, but you may notice positive changes within the first month. We'll guide you step-by-step, so you can progress at your own pace.",
    },
    {
      question: "How much will it cost per month?",
      answer:
        "Our monthly fee varies based on your goals and specific plan but usually ranges between 3-4k. This includes all dietary and fitness guidance needed for the program.",
    },
    {
      question: "Will I get 100% results with this coaching?",
      answer:
        "Yes! With over 12 years of experience and numerous successful clients, we're confident in our program's effectiveness. Achieving full results will depend on your commitment to daily communication and regular updates with us to tailor the program to your evolving needs.",
    },
  ];

  const [showMore, setShowMore] = useState(true);
  const toggleReadMore = () => {
    setShowMore(!showMore);
  };
  const [showMore1, setShowMore1] = useState(true);
  const toggleReadMore1 = () => {
    setShowMore1(!showMore1);
  };
  const [showMore2, setShowMore2] = useState(true);
  const toggleReadMore2 = () => {
    setShowMore2(!showMore2);
  };
  const [showMore3, setShowMore3] = useState(true);
  const toggleReadMore3 = () => {
    setShowMore3(!showMore3);
  };

  return (
    <>
      <Helmet>
        <title>Effective Corporate Fitness Program for a Healthy Workplace</title>
        <meta name="description" content="Enhance employee health and productivity with our effective corporate fitness program. Boost wellness in your workplace today!" />
        <meta
          name="keyword"
          content="Corporate Fitness Programs, weight, loss, program, fitness, online weight loss program, corporate, fitness program, best exercise to lose weight, weight loss workout plan, workouts to lose weight, weight loss exercise, gym program, health and fitness, exercise plan to lose weight, best workout plans, fitness plans, good workouts to lose weight, weight loss training program, workout exercises, gym exercises for weight loss, fitness plan to lose weight, workout programs for weight loss, exercise program for weight loss, fitness exercises, workouts for weight loss at gym, weight loss and exercise plan, good exercises for weight loss, weight loss programs, gym workouts for weight loss, corporate wellness programs, best gym workout for weight loss, workplace wellness programs, effective workouts for weight loss, exercise routine for weight loss, best fitness programs, fitness training programs, customized fitness programs, corporate fitness training, employee fitness programs, corporate health programs, workplace fitness programs, best fitness plan for weight loss, weight loss coaching programs, structured fitness plans, business fitness programs, office fitness programs, corporate fitness challenge, employee wellness and fitness"
        />
        <meta
          property="og:title"
          content="Effective Corporate Fitness Program for a Healthy Workplace"
        />
        <meta property="og:description" content="Enhance employee health and productivity with our effective corporate fitness program. Boost wellness in your workplace today!" />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/corporate-fitness-programs"
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
     Corporate Fitness Programs, weight, loss, program, fitness, online weight loss program, corporate, fitness program, best exercise to lose weight, weight loss workout plan, workouts to lose weight, weight loss exercise, gym program, health and fitness, exercise plan to lose weight, best workout plans, fitness plans, good workouts to lose weight, weight loss training program, workout exercises, gym exercises for weight loss, fitness plan to lose weight, workout programs for weight loss, exercise program for weight loss, fitness exercises, workouts for weight loss at gym, weight loss and exercise plan, good exercises for weight loss, weight loss programs, gym workouts for weight loss, corporate wellness programs, best gym workout for weight loss, workplace wellness programs, effective workouts for weight loss, exercise routine for weight loss, best fitness programs, fitness training programs, customized fitness programs, corporate fitness training, employee fitness programs, corporate health programs, workplace fitness programs, best fitness plan for weight loss, weight loss coaching programs, structured fitness plans, business fitness programs, office fitness programs, corporate fitness challenge, employee wellness and fitness
      </p>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />

      <FwgHeader />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="mr-md-4 black-before">
                  <div className="course-scroll">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        width="100%"
                        alt="Fg Group"
                        style={{ borderRadius: "10px" }}
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fwg/rtp-four.webp"
                        }
                      />
                      <div className="video-btn play-btn">
                        <a
                          onClick={() => openVideoModal("cu6nyC0VBNk")}
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
                </div>
              </div>
              <div className="col-lg-5 mb-5 position-relative">
                <div>
                  <OnlineProgramFormFwg
                    showPrice="false"
                    programData={CorporateFitnessProgramData}
                    openForm={openForm}
                    whatsappMessage="Hello, I wanted to know more about the Online Corporate Fitness Program."
                  />
                </div>
                <div className="course-card-page-design">
                  <div className="d-md-block d-none">
                    <div className="course-info">
                      <h2 className="h6-fs course-title">Program Info</h2>
                      <ul className="course-list">
                        {CorporateFitnessProgramData?.info1.map((info) => (
                          <li>
                            <i className={info.icon}></i>
                            {info.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <WhatsAppAnchor
                    message="Hello, I wanted to know more about the Online Corporate Fitness Program."
                    options={{ pageRef: true }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop new-section-corporate d-none d-md-block">
        <div className="container-fluid">
          <div className="container">
            <div className="demoo text-center">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">Who Can </span> Utilize
                It?
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <div className="row">
              <div className="col-sm-6 mt-3 position-relative">
                <div className="tabata blog2">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <img
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/rtp-ngo.webp"
                        }
                        alt="NGO"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="h5-fs mt-3 mt-lg-0">NGO</h2>
                      {showMore ? (
                        <p className="mb-0">
                          NGOs often lack employee wellness programs. They do
                          not recognize wellness programs as an important
                          component of their organization and make cost an
                          issue. However, some
                          <span id="dotsb">...</span>
                        </p>
                      ) : (
                        <span className="m-0">
                          <p className="m-0">
                            effective leaders understand the need of the hour
                            and motivate their employees to grab the benefits of
                            these wellness programs.NGOs and other non-profit
                            organizations must take wellness programs for the
                            benefit of their members because it is a social
                            service that needs healthy people to fulfill the
                            mission and vision of the organization. The NGO
                            staff must be more fit and healthy than other
                            employees. Corporate wellness programs offered by
                            Gomzi assist in achieving the health outcomes of the
                            employees by providing excellent diet plans and
                            exercises.
                          </p>
                        </span>
                      )}
                      <p
                        onClick={toggleReadMore}
                        id="myBtnrb"
                        className="text-info m-0 my-sm-2 my-md-0"
                      >
                        {showMore ? "Read more" : "Read less"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 position-relative">
                <div className="tabata blog2">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/rtp-company.webp"
                        }
                        alt="multinational company"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="h5-fs mt-3 mt-lg-0">
                        Multinational company :
                      </h2>
                      {showMore1 ? (
                        <p className="mb-0">
                          Good Health Is The Primary Goal Of A Nation's
                          Development. The Government Encourages Different
                          Health Plans To Keep Its Employees Healthy. Workplace
                          Wellness Programs
                          <span id="dotsc">...</span>
                        </p>
                      ) : (
                        <span className="m-0">
                          <p className="m-0">
                            {" "}
                            Are Designed To Promote Health And Prevent
                            Diseases.Fitness With Gomzi Provides A Flexible
                            Program With Its Nutrition Plans And Exercises To
                            Enhance Health Awareness In The Country.
                          </p>
                        </span>
                      )}
                      <p
                        onClick={toggleReadMore1}
                        id="myBtnrc"
                        className="text-info m-0 my-sm-2 my-md-0"
                      >
                        {showMore1 ? "Read more" : "Read less"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 position-relative">
                <div className="tabata blog2">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/rtp-hospital.webp"
                        }
                        alt="hospitals"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="h5-fs mt-3 mt-lg-0">Hospitals</h2>
                      {showMore2 ? (
                        <p className="mb-0">
                          While taking care of others, hospital employees
                          sometimes ignore their own health. They work with very
                          ill patients, come in contact with different diseases
                          <span id="dotsh">...</span>
                        </p>
                      ) : (
                        <span className="m-0">
                          <p className="m-0">
                            {" "}
                            and work pressure makes them stressed. Hence they
                            require wellness programs at regular intervals.Gomzi
                            offers offline and online wellness classNamees that
                            regularly nurses hospital employees to keep them in
                            the pink of health.
                          </p>
                        </span>
                      )}
                      <p
                        onClick={toggleReadMore2}
                        id="myBtnrh"
                        className="text-info m-0 my-sm-2 my-md-0"
                      >
                        {showMore2 ? "Read more" : "Read less"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 position-relative">
                <div className="tabata blog2">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets//images/img/rtp-workers.webp"
                        }
                        alt="Factories"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="h5-fs mt-3 mt-lg-0">Factories</h2>
                      {showMore3 ? (
                        <p className="mb-0">
                          Factories face the problem of having workers at their
                          company 24/7/365. It would be a sigh of relief for the
                          workers and the employees if they agree to enroll
                          <span id="dotsf">...</span>
                        </p>
                      ) : (
                        <span className="m-0">
                          <p className="m-0">
                            themselves in the business in wellness programs.
                            Most often the floor staff in manufacturing
                            companies does not understand the benefits of such
                            programs. Such employees must be explained the
                            benefits of healthy living and high thinking which
                            is the aim of wellness programs. Fitness with Gomzi
                            staff keeps a regular check on each and every client
                            and provides the best services through their
                            wellness programs.
                          </p>
                        </span>
                      )}
                      <p
                        onClick={toggleReadMore3}
                        id="myBtnrf"
                        className="text-info m-0 my-sm-2 my-md-0"
                      >
                        {showMore3 ? "Read more" : "Read less"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="new-section-corporate d-block d-md-none">
        <div className="container-fluid">
          <div className="container">
            <div className="demoo text-center">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">Who Can </span> Utilize
                It?
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <div className="row">
              <div className="col-sm-6 mt-3 position-relative">
                <div className="tabata blog2">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <img
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/rtp-ngo.webp"
                        }
                        alt="NGO"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="h5-fs mt-3 mt-lg-0">NGO</h2>
                      {showMore ? (
                        <p className="mb-0">
                          NGOs often lack employee wellness programs. They do
                          not recognize wellness programs as an important
                          component of their organization and make cost an
                          issue. However, some
                          <span id="dotsb">...</span>
                        </p>
                      ) : (
                        <span className="m-0">
                          <p className="m-0">
                            effective leaders understand the need of the hour
                            and motivate their employees to grab the benefits of
                            these wellness programs.NGOs and other non-profit
                            organizations must take wellness programs for the
                            benefit of their members because it is a social
                            service that needs healthy people to fulfill the
                            mission and vision of the organization. The NGO
                            staff must be more fit and healthy than other
                            employees. Corporate wellness programs offered by
                            Gomzi assist in achieving the health outcomes of the
                            employees by providing excellent diet plans and
                            exercises.
                          </p>
                        </span>
                      )}
                      <p
                        onClick={toggleReadMore}
                        id="myBtnrb"
                        className="text-info m-0 my-sm-2 my-md-0"
                      >
                        {showMore ? "Read more" : "Read less"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 position-relative">
                <div className="tabata blog2">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/rtp-company.webp"
                        }
                        alt="multinational company"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="h5-fs mt-3 mt-lg-0">
                        Multinational company :
                      </h2>
                      {showMore1 ? (
                        <p className="mb-0">
                          Good Health Is The Primary Goal Of A Nation's
                          Development. The Government Encourages Different
                          Health Plans To Keep Its Employees Healthy. Workplace
                          Wellness Programs
                          <span id="dotsc">...</span>
                        </p>
                      ) : (
                        <span className="m-0">
                          <p className="m-0">
                            {" "}
                            Are Designed To Promote Health And Prevent
                            Diseases.Fitness With Gomzi Provides A Flexible
                            Program With Its Nutrition Plans And Exercises To
                            Enhance Health Awareness In The Country.
                          </p>
                        </span>
                      )}
                      <p
                        onClick={toggleReadMore1}
                        id="myBtnrc"
                        className="text-info m-0 my-sm-2 my-md-0"
                      >
                        {showMore1 ? "Read more" : "Read less"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 position-relative">
                <div className="tabata blog2">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/rtp-hospital.webp"
                        }
                        alt="hospitals"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="h5-fs mt-3 mt-lg-0">Hospitals</h2>
                      {showMore2 ? (
                        <p className="mb-0">
                          While taking care of others, hospital employees
                          sometimes ignore their own health. They work with very
                          ill patients, come in contact with different diseases
                          <span id="dotsh">...</span>
                        </p>
                      ) : (
                        <span className="m-0">
                          <p className="m-0">
                            {" "}
                            and work pressure makes them stressed. Hence they
                            require wellness programs at regular intervals.Gomzi
                            offers offline and online wellness classNamees that
                            regularly nurses hospital employees to keep them in
                            the pink of health.
                          </p>
                        </span>
                      )}
                      <p
                        onClick={toggleReadMore2}
                        id="myBtnrh"
                        className="text-info m-0 my-sm-2 my-md-0"
                      >
                        {showMore2 ? "Read more" : "Read less"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 position-relative">
                <div className="tabata blog2">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets//images/img/rtp-workers.webp"
                        }
                        alt="Factories"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="h5-fs mt-3 mt-lg-0">Factories</h2>
                      {showMore3 ? (
                        <p className="mb-0">
                          Factories face the problem of having workers at their
                          company 24/7/365. It would be a sigh of relief for the
                          workers and the employees if they agree to enroll
                          <span id="dotsf">...</span>
                        </p>
                      ) : (
                        <span className="m-0">
                          <p className="m-0">
                            themselves in the business in wellness programs.
                            Most often the floor staff in manufacturing
                            companies does not understand the benefits of such
                            programs. Such employees must be explained the
                            benefits of healthy living and high thinking which
                            is the aim of wellness programs. Fitness with Gomzi
                            staff keeps a regular check on each and every client
                            and provides the best services through their
                            wellness programs.
                          </p>
                        </span>
                      )}
                      <p
                        onClick={toggleReadMore3}
                        id="myBtnrf"
                        className="text-info m-0 my-sm-2 my-md-0"
                      >
                        {showMore3 ? "Read more" : "Read less"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 studentsreview-1 d-none d-md-block">
        <div className="container-fluid bg-light">
          <div className="container px-0 py-5">
            <div className="pb-5">
              <div className="py-md-1">
                <div className="covid text-center">
                  <h2 className="h2-fs nunito-font" style={{ color: "#333" }}>
                    Corporate{" "}
                    <span className="m-0 text-blue-color"> Training</span>
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
                        process.env.PUBLIC_URL + "/assets/images/fwg/e-1.webp"
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
                      src={
                        process.env.PUBLIC_URL + "/assets/images/fwg/e-2.webp"
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
                      src={
                        process.env.PUBLIC_URL + "/assets/images/fwg/e-3.webp"
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
                      src={
                        process.env.PUBLIC_URL + "/assets/images/fwg/e-4.webp"
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
                      src={
                        process.env.PUBLIC_URL + "/assets/images/fwg/e-5.webp"
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
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/seminar/seminar-1.webp"
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
                        "/assets/images/fwg/seminar/seminar-7.webp"
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
                        "/assets/images/fwg/seminar/seminar-1.webp"
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
                        "/assets/images/fwg/seminar/seminar-2.webp"
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
                        "/assets/images/fwg/seminar/seminar-3.webp"
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
                        "/assets/images/fwg/seminar/seminar-5.webp"
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
                        "/assets/images/fwg/seminar/seminar-4.webp"
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
      <section className="mt-2 studentsreview-1 d-block d-md-none">
        <div className="container-fluid bg-light">
          <div className="container px-0 py-2">
            <div className="pb-5">
              <div className="demoo text-center">
                <h2 className="h2-fs">Corporate Training</h2>
              </div>
              <div className="thm-bg-clr dector mb-4"></div>
              <div className="row mt-4">
                {[
                  "/assets/images/fwg/e-1.webp",
                  "/assets/images/fwg/e-2.webp",
                  "/assets/images/fwg/e-3.webp",
                  "/assets/images/fwg/e-4.webp",
                  "/assets/images/fwg/e-5.webp",
                  "/assets/images/fwg/seminar/seminar-1.webp",
                  "/assets/images/fwg/seminar/seminar-7.webp",
                  "/assets/images/fwg/seminar/seminar-2.webp",
                  "/assets/images/fwg/seminar/seminar-3.webp",
                  "/assets/images/fwg/seminar/seminar-5.webp",
                ].map((imageSrc, index) => (
                  <div key={index} className="col-6 mb-3">
                    <div className="img-card">
                      <img
                        src={process.env.PUBLIC_URL + imageSrc}
                        className="img-fluid"
                        alt={`Event ${index + 1}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWork />
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
      <BlogsRtpTwo />

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

export default CorporateFitnessProgram;
