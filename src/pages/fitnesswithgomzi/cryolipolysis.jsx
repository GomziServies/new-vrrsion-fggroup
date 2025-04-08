/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../../assets/css/home.css";
import "../../assets/css/new-popup.css";
import Modal from "react-bootstrap/Modal";
import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
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
import { CryolipolysisFitnessProgramData } from "../../components/online-fwg/AllOnlineProgramData";
import WhatsAppAnchor from "../../components/sendtowhatsapp";
import FwgHeader from "../../components/partials/Header/fwgheader";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function CryolipolysisFitnessProgram() {
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
      question: "Is Cryolipolysis Effective?",
      answer:
        "Yes! This technology has been clinically tested and FDA-certified for non-invasive fat reduction.",
    },
    {
      question: "Will the Fat Return After Treatment?",
      answer:
        "Cryolipolysis reduces the number of fat cells, minimizing the chances of regaining fat in treated areas.",
    },
    {
      question: "Is the Procedure Painful?",
      answer:
        "Most users report a mild cooling sensation with no significant discomfort.",
    },

    {
      question: "Are There Any Side Effects?",
      answer:
        "Temporary redness, numbness, or mild bruising may occur but typically resolve within a few weeks.",
    },
    {
      question: "Who Can Benefit from This Treatment?",
      answer:
        "Anyone looking to reduce localized fat without undergoing surgery. Ideal for individuals who maintain a healthy lifestyle but struggle with stubborn fat deposits.",
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
        <title>Online Corporate Program | FG Group</title>
        <meta name="description" content="Online Corporate Program." />
        <meta
          name="keyword"
          content="intermittent fasting, fasting intermittent fasting, weight loss, calorie counter, weight loss program, weight loss programmes, weight reduction programs, weight loss journey, intermittent fasting schedule, intermittent fasting times, calorie calculator for weight loss, ways to lose weight quickly, intermittent fasting for weight loss, calorie intake calculator, intermittent fasting and weight loss"
        />
        <meta
          property="og:title"
          content="Online Corporate Program | FG Group"
        />
        <meta property="og:description" content="Online Corporate Program." />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/corporate-fitness-programs"
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
        intermittent fasting, fasting intermittent fasting, weight loss, calorie
        counter, weight loss program, weight loss programmes, weight reduction
        programs, weight loss journey, intermittent fasting schedule,
        intermittent fasting times, calorie calculator for weight loss, ways to
        lose weight quickly, intermittent fasting for weight loss, calorie
        intake calculator, intermittent fasting and weight loss
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
            <div className="row mb-3">
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
                          "/assets/images/fwg/cryolipolysis.webp"
                        }
                      />
                      <div className="video-btn play-btn">
                        <a
                          onClick={() => openVideoModal("x9zesXI2nwI")}
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
              <div className="col-lg-5 position-relative">
                <div>
                  <OnlineProgramFormFwg
                    showPrice="false"
                    programData={CryolipolysisFitnessProgramData}
                    openForm={openForm}
                    whatsappMessage="Hello, I wanted to know more about the Online Corporate Fitness Program."
                  />
                </div>
                <div className="course-card-page-design">
                  <div className="d-md-block d-none">
                    <div className="course-info">
                      <h2 className="h6-fs course-title mt-2">Program Info</h2>
                      <ul className="course-list">
                        {CryolipolysisFitnessProgramData?.info1.map((info) => (
                          <li>
                            <i className={info.icon}></i>
                            {info.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
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
      {/* <section className="margintop new-section-corporate d-none d-md-block">
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
      </section> */}
      <section className="mt-5 studentsreview-1 d-none d-md-block">
        <div className="container-fluid bg-light">
          <div className="container px-0 py-5">
            <div className="pb-5">
              <div className="py-md-1">
                <div className="covid text-center">
                  <h2 className="h2-fs nunito-font" style={{ color: "#333" }}>
                    <span className="m-0 text-blue-color">Cryolipolysis </span>
                    {' '}Treatment
                  </h2>
                </div>
                <div className="thm-bg-clr dector mb-4"></div>
              </div>
              <div>
                {/* <OwlCarousel
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
                > */}
                  <div className="col-md-3">
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
                  <div className="col-md-3">
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
                  <div className="col-md-3">
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
                  <div className="col-md-3">
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
                  <div className="col-md-3 mt-3">
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

                  <div className="col-md-3 mt-3">
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
                  <div className="col-md-3 mt-3">
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
                  <div className="col-md-3 mt-3">
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
                  <div className="col-md-3 mt-3">
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
                  <div className="col-md-3 mt-3">
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
                  <div className="col-md-3 mt-3">
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
                  <div className="col-md-3 mt-3">
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
                {/* </OwlCarousel> */}
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
      <section className="mt-5 studentsreview-1">
        <div className="container-fluid">
          <div className="container px-0 py-2">
            <div className="pb-5">
              <div className="covid text-center">
                <h2 className="h2-fs">
                  How it <span className="m-0 text-blue-color">Work</span>
                </h2>
                <div className="thm-bg-clr dector mb-md-5 mb-4"></div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="ply1 black-before">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/cryolipolysis-1.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      className="lazy"
                      width="100%"
                      alt="All Book"
                    />
                  </div>
                </div>
                <div className="col-md-6 pl-md-5 pl-4">
                  <div className="describe mt-3 mt-md-0">
                    <div className="tabata-one">
                      <p className="m-0 mt-3">
                        360 Cryolipolysis works by freezing fat cells, causing
                        them to break down and be naturally eliminated by the
                        body over time. The process involves.
                      </p>
                      <br />
                      <ul>
                        <li>
                          Assessing the target area and applying a protective
                          antifreeze membrane.
                        </li>
                        <li>Placing the 360-degree applicator on the skin.</li>
                        <li>
                          Controlled cooling to -10°C, effectively targeting fat
                          cells.
                        </li>
                        <li>
                          Gradual fat cell breakdown and removal through the
                          lymphatic system.
                        </li>
                        <li>Visible fat reduction within 2-3 months.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="covid nunito-font text-center">
              <h2 className="h2-fs">Blogs</h2>
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
                        7 Most Effective Exercises At Home
                      </h2>
                      <p className="card__text">
                        Extending the elbow and forearm. Explain that chair dips
                        are the foremost effective workout for this muscle. The
                        triceps are important in an everyday...
                      </p>
                      <Link
                        to="/blogs/7-most-effective-exercises"
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
                        "/assets/images/img/cryolipolysis-1.webp"
                      }
                      alt="difference between fat loss abd weight loss"
                    />
                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                      What is 360° Cryolipolysis?
                      </h2>
                      <p className="card__text">
                      360° Cryolipolysis is an innovative fat-freezing technology designed to provide full-range cooling and heating for targeted fat reduction. Utilizing precise temperature control, it freezes fat cells at -10℃ and he...
                      </p>
                      <Link
                        to="/blogs/cryolipolysis-machine"
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
                        Home Workout Plan Without Equipment
                      </h2>
                      <p className="card__text">
                        Numerous people love to workout at the gym but at the
                        current time, life gets busy with a lot of works and
                        that's why have to sweat out at home.
                      </p>
                      <Link
                        to="/blogs/how-to-get-flexible-body"
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
                        7 Most Effective Exercises At Home
                      </h2>
                      <p className="card__text mb-0">
                        Extending the elbow and forearm. Explain that chair dips
                        are the foremost effective workout for this muscle. The
                        triceps are important in an everyday movement that
                        involves.
                      </p>
                      <Link
                        to="/blogs/7-most-effective-exercises"
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
                        "/assets/images/img/cryolipolysis-1.webp"
                      }
                      alt="difference between fat loss abd weight loss"
                    />

                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                      What is 360° Cryolipolysis?
                      </h2>
                      <p className="card__text mb-0">
                      360° Cryolipolysis is an innovative fat-freezing technology designed to provide full-range cooling and heating for targeted fat reduction. Utilizing precise temperature control, it freezes fat cells at -10℃ and he...
                      </p>
                      <Link
                        to="/blogs/cryolipolysis-machine"
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
                        Home Workout Plan Without Equipment
                      </h2>
                      <p className="card__text mb-0">
                        Numerous people love to workout at the gym but at the
                        current time, life gets busy with a lot of works and
                        that's why have to sweat out at home.
                      </p>
                      <Link
                        to="/blogs/healthy-eating-habits"
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
      <FgiitFooter />
    </>
  );
}

export default CryolipolysisFitnessProgram;
