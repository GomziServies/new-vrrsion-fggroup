import React, { useEffect, useState } from "react";
import FgiitHeader from "../../components/partials/Header/fgiitheader";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import ScholarshipModal from "../../assets/js/popup/scholarship";
import LoginModal from "../../assets/js/popup/login";
import { createCourseOrder } from "../../assets/js/utils/fitness-course";
import ModalVideo from "react-modal-video";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import InfoDownloadPdf from "../../pdf/information.pdf";
import { Link } from "react-router-dom";
import PartnerLogo from "../../components/fgiit/partnerLogo";
import "react-lazy-load-image-component/src/effects/blur.css";
import MeetOurInstructure from "../../components/fgiit/meetInstructure";
import { Helmet } from "react-helmet";
import ContactInquiryForm from "../../components/fgiit/contactInquiryForm";
import OnlineFitnessCourse from "../../components/fgiit/onlineFitnessCourseInIndia";
import AllReviews from "../../components/fgiit/allReviews";

function OnlineFitnessCourses() {
  const canonicalUrl = window.location.href;
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showScholarshipModal, setShowScholarshipModal] = useState(false);
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

  useEffect(() => {
    const clickedScholarship = JSON.parse(
      localStorage.getItem("scholarshipExamClick")
    );
    if (clickedScholarship) {
      setShowScholarshipModal(true);
      localStorage.removeItem("scholarshipExamClick");
    } else {
      const timeoutId = setTimeout(() => {
        setShowScholarshipModal(true);
      }, 6000);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  const handleOrder = async (course_id) => {
    try {
      const result = await createCourseOrder(course_id);
      if (result.showLoginModal) {
        setShowLoginModal(true);
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
    setShowLoginModal(false);
  };

  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  const toggleReadMorei = () => {
    setShowMore(!showMore);
  };

  const toggleReadMoreii = () => {
    setShowMore(!showMore);
  };

  const toggleReadMoreiii = () => {
    setShowMore(!showMore);
  };

  const toggleReadMoreiv = () => {
    setShowMore(!showMore);
  };

  const toggleReadMorev = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <Helmet>
        <title>Top Online Fitness Courses for All Skill Levels</title>
        <meta
          name="description"
          content="Boost your fitness skills with top online fitness courses. Learn from experts and get certified at any skill level. Enroll now!"
        />
        <meta
          name="keyword"
          content="Fitness Courses Online, Fitness Courses in India Online, Fitness Courses, Fitness Courses in India, Online Fitness Courses in India, Online Fitness Course, fitness trainer course, personal trainer course, fitness and nutrition courses, personal trainer course online, personal trainer certification, certified fitness trainer course, fitness trainer certification, pt training courses, personal trainer certification online, personal trainer classes, fitness coach certification, certified personal trainer certification, personal trainer certification course, personal fitness trainer certification, personal trainer certification near me, personal trainer training, personal training, fitness trainer certification online, personal trainer classes near me, pt certification, fitness nutrition course, online personal trainer, personal trainer training course, online fitness certification, online fitness instructor course, Sports Nutrition Course Online, Best Online Fitness Courses, Health and Fitness Courses, Online PT Course, Online Strength and Conditioning Course, Weight Loss Coach Certification, Certified Nutritionist Course Online, Online Health and Wellness Courses, Online Fitness Coaching Certification, Best Personal Trainer Certification Online, Certified Online Personal Trainer, Online Gym Instructor Course"
        />
        <meta
          property="og:title"
          content="Top Online Fitness Courses for All Skill Levels"
        />
        <meta
          property="og:description"
          content="Boost your fitness skills with top online fitness courses. Learn from experts and get certified at any skill level. Enroll now!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fgiit/online-fitness-courses"
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
            fbq('init', '134961498656274');
            fbq('track', 'PageView');
        `}
        </script>
        <noscript>
          {
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=134961498656274&ev=PageView&noscript=1" />'
          }
        </noscript>
      </Helmet>
      <p className="d-none">
        Fitness Courses Online, Fitness Courses in India Online, Fitness Courses, Fitness Courses in India, Online Fitness Courses in India, Online Fitness Course, fitness trainer course, personal trainer course, fitness and nutrition courses, personal trainer course online, personal trainer certification, certified fitness trainer course, fitness trainer certification, pt training courses, personal trainer certification online, personal trainer classes, fitness coach certification, certified personal trainer certification, personal trainer certification course, personal fitness trainer certification, personal trainer certification near me, personal trainer training, personal training, fitness trainer certification online, personal trainer classes near me, pt certification, fitness nutrition course, online personal trainer, personal trainer training course, online fitness certification, online fitness instructor course, Sports Nutrition Course Online, Best Online Fitness Courses, Health and Fitness Courses, Online PT Course, Online Strength and Conditioning Course, Weight Loss Coach Certification, Certified Nutritionist Course Online, Online Health and Wellness Courses, Online Fitness Coaching Certification, Best Personal Trainer Certification Online, Certified Online Personal Trainer, Online Gym Instructor Course
      </p>
      <WhatsappHeaderApp
        message={"Hello, I wanted to know more about FGIIT Online Courses. "}
        options={{ pageRef: true }}
      />
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      {showLoginModal && <LoginModal onClose={closeModal} />}
      {showScholarshipModal && <ScholarshipModal />}
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
              <img
                alt="Fg Group"
                className="d-none d-md-block"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/new-fgiit-banner.webp"
                }
                width="100%"
              />
              <img
                alt="Fg Group"
                className="d-block d-md-none w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/new-fgiit-mobile.webp"
                }
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
                src={process.env.PUBLIC_URL + "/assets/images/img/banner6.webp"}
                alt="best fitness course in India"
              />
              <img
                className="d-block d-md-none w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile6.webp"
                }
                alt="best fitness course in India"
              />
            </div>
            <div className="item">
              <img
                className="d-none d-md-block w-100"
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/banner6_1.webp"
                }
                alt="contact with your lecturers"
              />
              <img
                className="d-block d-md-none w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile6-1.webp"
                }
                alt="contact with your lecturers"
              />
            </div>
            <div className="item">
              <img
                className="d-none d-md-block w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fgiit/job-placement-desktop.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
              <img
                className="d-block d-md-none w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fgiit/job-placement-mobile.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
            </div>
            <div className="item">
              <img
                className="d-none d-md-block w-100"
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/banner6_2.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
              <img
                className="d-block d-md-none w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile6-2.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
            </div>
          </OwlCarousel>
        </div>
      </section>
      <OnlineFitnessCourse />
      <AllReviews />
      <section className="margintop">
        <div className="container-fluid">
          <div className="">
            <div className="card bg-skill-border">
              <div className="card-header bg-skill bg-skill-border">
                <h2 className="h4-fs">About Us</h2>
              </div>
              <div className="card-body tabata">
                <div className="row">
                  <div className="col-lg-12 order-2 order-lg-1">
                    <blockquote className="blockquote mb-0">
                      <div className="describe d-none d-sm-block">
                        <b>
                          <p>
                            We Started These Online Nutrition Courses In India,
                            To Make The Fitness And Nutrition Industry-Main
                            Streamline After The 10th. A Student Who Wants To
                            Follow Their Passion And Earn Money Simultaneously
                            Can Register For Our Online Nutrition Courses &
                            Online Personal Training Courses. We explain the
                            importance of the Certified Fitness Trainer Course,
                            Personal Trainer Course In India, Nutritionist
                            Course Online India.
                          </p>
                        </b>
                        <b>
                          <p>
                            So, What Are The Best Certifications For Personal
                            Trainers?{" "}
                          </p>
                        </b>
                        <b>
                          <p>
                            We Are Entitled To The Crown Of Top Institute For
                            Online Nutrition Courses And Dietician Courses
                            Online In Surat. We Provide Life Experiences In Our
                            Online Personal Trainer Courses, Which You'll Be
                            Going To Face In Front Of Your Clients And Patients
                            Which Makes Us Unique From Others.
                          </p>
                        </b>
                        <b>
                          <p>
                            Personal Training Certification Helps You In
                            Attaining Customers At Fitness Centers And Gyms As
                            Well. We Provide All Resources And Content Online So
                            You Can Experience Online Learning With The FG
                            International Institute Of Teaching.
                          </p>
                        </b>
                        <b>
                          <p>
                            You might be thinking about the Nutritionist Course
                            Fees right? Connect to us and get the best offers
                            for your future self.
                          </p>
                        </b>
                        <br />
                      </div>
                      <div className="describe d-block d-sm-none">
                        <b>
                          <p>
                            We Started These Online Nutrition Courses In India,
                            To Make The Fitness And Nutrition Industry-Main
                            Streamline After The 10th.
                          </p>
                        </b>
                        {showMore ? (
                          <span className="m-0">
                            <b>
                              <p>
                                A Student Who Wants To Follow Their Passion And
                                Earn Money Simultaneously Can Register For Our
                                Online Nutrition Courses & Online Personal
                                Training Courses. We explain
                              </p>
                            </b>
                            <b>
                              <p>
                                the importance of the Certified Fitness Trainer
                                Course, Personal Trainer Course In India,
                                Nutritionist Course Online India.
                              </p>
                            </b>
                            <b>
                              <p>
                                So, What Are The Best Certifications For
                                Personal Trainers?{" "}
                              </p>
                            </b>
                            <b>
                              <p>
                                We Are Entitled To The Crown Of Top Institute
                                For Online Nutrition Courses And Dietician
                                Courses Online In Surat. We Provide Life
                                Experiences In Our Online Personal Trainer
                                Courses, Which You'll Be Going To Face In Front
                                Of Your Clients And Patients Which Makes Us
                                Unique From Others.
                              </p>
                            </b>
                            <b>
                              <p>
                                Personal Training Certification Helps You In
                                Attaining Customers At Fitness Centers And Gyms
                                As Well. We Provide All Resources And Content
                                Online So You Can Experience Online Learning
                                With The FG International Institute Of Teaching.
                              </p>
                            </b>
                            <b>
                              <p>
                                You might be thinking about the Nutritionist
                                Course Fees right? Connect to us and get the
                                best offers for your future self.
                              </p>
                            </b>
                          </span>
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
                    </blockquote>
                  </div>
                </div>
                <div className="row mt-md-5">
                  <div className="col-md-6">
                    <div className="d-md-none d-flex flex-column justify-content-start align-items-start">
                      <div className="">
                        <div className="mb-3">
                          <div className="d-none d-md-flex justify-content-start">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/mobile-all-logo.webp"
                              }
                              className="img-fluid"
                              alt="all logo"
                              width="60%"
                            />
                          </div>
                          <div className="d-block d-md-none">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/mobile-all-logo.webp"
                              }
                              className="img-fluid"
                              alt="all logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="demoo">
                      <div className="new-h3">
                        <h2 className="ml-md-5 pl-md-3 h3-fs fs-34">
                          Why FGIIT?
                        </h2>
                      </div>
                      <div>
                        <ul className="new-li">
                          <li>
                            <i className="fas fa-check"></i> Approved by
                            Government
                          </li>
                          <li>
                            <i className="fas fa-check"></i> Internationally
                            Accredited Certification
                          </li>
                          <li>
                            <i className="fas fa-check"></i> Industry Expert
                            Faculties with 5+ years in Business
                          </li>
                          <li>
                            <i className="fas fa-check"></i> 100% Placement
                            Support
                          </li>
                          <li>
                            <i className="fas fa-check"></i> Mandatory
                            Internship at Top Firms
                          </li>
                          <li>
                            <i className="fas fa-check"></i> Bilingual Learning
                            Material: English and Hindi
                          </li>
                          <li>
                            <i className="fas fa-check"></i> Recorded Video
                            Lectures Available
                          </li>
                          <li>
                            <i className="fas fa-check"></i> Lifetime Support
                            for Students
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-md-flex d-none flex-column justify-content-start align-items-start">
                      <div className="">
                        <div className="mb-3">
                          <div className="d-none d-md-flex justify-content-start">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/mobile-all-logo.webp"
                              }
                              className="img-fluid"
                              alt="all logo"
                              width="60%"
                            />
                          </div>
                          <div className="d-block d-md-none">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/mobile-all-logo.webp"
                              }
                              className="img-fluid"
                              alt="all logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-start">
                      <div className="on1 mt-1">
                        <h2 className="h4-fs">
                          due to this, our Certificate is valid in 192 country
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-lg-0 mt-4 certi text-center">
                    <h2 className="h1-fs">Our All Demo Certificates</h2>
                    <OwlCarousel
                      loop
                      autoPlay
                      dots={false}
                      id="owl-diploma"
                      className="owl-carousel owl-theme demo-certi"
                      responsive={{
                        0: {
                          items: 2,
                        },
                        600: {
                          items: 2,
                        },
                        1000: {
                          items: 3,
                        },
                      }}
                    >
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/cpt_demo.webp"
                          }
                          alt="Certificates"
                          width="100%"
                          className="lazy"
                        />
                        <div className="text-center mt-3">
                          <h2 className="h4-fs">
                            Diploma In Personal Training
                          </h2>
                        </div>
                      </div>
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/cnc_demo.webp"
                          }
                          alt="Certificates"
                          width="100%"
                          className="lazy"
                        />
                        <div className="text-center mt-3">
                          <h2 className="h4-fs">Diploma In Nutrition</h2>
                        </div>
                      </div>
                      <div className="item mx-2">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/group-instructor-masterclass.webp"
                          }
                          alt="Certificates"
                          width="100%"
                          className="lazy"
                        />
                        <div className="text-center mt-3">
                          <h2 className="h4-fs">
                            Group Instructor Masterclass
                          </h2>
                        </div>
                      </div>
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/Powerlifting-Coach-Workshop-certificate.webp"
                          }
                          alt="Certificates"
                          width="100%"
                          className="lazy"
                        />

                        <div className="text-center mt-3">
                          <h2 className="h4-fs">Powerlifting Coach Workshop</h2>
                        </div>
                      </div>
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/aas_demo.webp"
                          }
                          alt="Certificates"
                          width="100%"
                          className="lazy"
                        />

                        <div className="text-center mt-3">
                          <h2 className="h4-fs">
                            Anabolic Androgenic Steroids
                          </h2>
                        </div>
                      </div>
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/recorded-session-certificate-5.webp"
                          }
                          alt="Certificates"
                          width="100%"
                          className="lazy"
                        />

                        <div className="text-center mt-3">
                          <h2 className="h4-fs">
                            Injury Rehabilitation Workshop
                          </h2>
                        </div>
                      </div>
                      <div className="item">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/recorded-session-certificate-6.webp"
                          }
                          alt="Certificates"
                          width="100%"
                          className="lazy"
                        />

                        <div className="text-center mt-3">
                          <h2 className="h4-fs">
                            Advance Clinical Nutrition Workshop
                          </h2>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
                <a
                  href={InfoDownloadPdf}
                  download
                  className="btn btn-success bg-faculties mt-2 w-100"
                >
                  Click To Know About Our Faculties
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="covid">
              <h2 className="h2-fs text-center">
                About
                <span className="m-0 text-blue-color"> Us</span>
              </h2>
              <div className="thm-bg-clr dector mb-3 mb-md-5"></div>
              <div className="describe d-none d-sm-block">
                <b>
                  <p>
                    We Started These Online Nutrition Courses In India, To Make
                    The Fitness And Nutrition Industry-Main Streamline After The
                    10th. A Student Who Wants To Follow Their Passion And Earn
                    Money Simultaneously Can Register For Our Online Nutrition
                    Courses & Online Personal Training Courses. We explain the
                    importance of the Certified Fitness Trainer Course, Personal
                    Trainer Course In India, Nutritionist Course Online India.
                  </p>
                </b>
                <b>
                  <p>
                    So, What Are The Best Certifications For Personal Trainers?{" "}
                  </p>
                </b>
                <b>
                  <p>
                    We Are Entitled To The Crown Of Top Institute For Online
                    Nutrition Courses And Dietician Courses Online In Surat. We
                    Provide Life Experiences In Our Online Personal Trainer
                    Courses, Which You'll Be Going To Face In Front Of Your
                    Clients And Patients Which Makes Us Unique From Others.
                  </p>
                </b>
                <b>
                  <p>
                    Personal Training Certification Helps You In Attaining
                    Customers At Fitness Centers And Gyms As Well. We Provide
                    All Resources And Content Online So You Can Experience
                    Online Learning With The FG International Institute Of
                    Teaching.
                  </p>
                </b>
                <b>
                  <p>
                    You might be thinking about the Nutritionist Course Fees
                    right? Connect to us and get the best offers for your future
                    self.
                  </p>
                </b>
                <br />
              </div>
              <div className="describe d-block d-sm-none">
                <b>
                  <p>
                    We Started These Online Nutrition Courses In India, To Make
                    The Fitness And Nutrition Industry-Main Streamline After The
                    10th. A Student Who Wants To Follow Their Passion And Earn
                    Money Simultaneously Can Register For Our Online Nutrition
                    Courses & Online Personal Training Courses. We explain
                  </p>
                </b>
                {showMore ? (
                  <span className="m-0">
                    <b>
                      <p>
                        the importance of the Certified Fitness Trainer Course,
                        Personal Trainer Course In India, Nutritionist Course
                        Online India.
                      </p>
                    </b>
                    <b>
                      <p>
                        So, What Are The Best Certifications For Personal
                        Trainers?{" "}
                      </p>
                    </b>
                    <b>
                      <p>
                        We Are Entitled To The Crown Of Top Institute For Online
                        Nutrition Courses And Dietician Courses Online In Surat.
                        We Provide Life Experiences In Our Online Personal
                        Trainer Courses, Which You'll Be Going To Face In Front
                        Of Your Clients And Patients Which Makes Us Unique From
                        Others.
                      </p>
                    </b>
                    <b>
                      <p>
                        Personal Training Certification Helps You In Attaining
                        Customers At Fitness Centers And Gyms As Well. We
                        Provide All Resources And Content Online So You Can
                        Experience Online Learning With The FG International
                        Institute Of Teaching.
                      </p>
                    </b>
                    <b>
                      <p>
                        You might be thinking about the Nutritionist Course Fees
                        right? Connect to us and get the best offers for your
                        future self.
                      </p>
                    </b>
                  </span>
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
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="demoo">
                  <div className="new-h3">
                    <h2 className="ml-md-5 pl-md-3 h3-fs fs-34">Why FGIIT?</h2>
                  </div>
                  <div>
                    <ul className="new-li">
                      <li>
                        <i className="fas fa-check"></i> Approved by Government
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Internationally
                        Accredited Certification
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Industry Expert
                        Faculties with 5+ years in Business
                      </li>
                      <li>
                        <i className="fas fa-check"></i> 100% Placement Support
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Mandatory Internship at
                        Top Firms
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Bilingual Learning
                        Material: English and Hindi
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Recorded Video Lectures
                        Available
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Lifetime Support for
                        Students
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <div className="">
                  <div className="mb-3">
                    <div className="d-none d-md-block">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/mobile-all-logo.webp"
                        }
                        className="img-fluid"
                        alt="all logo"
                      />
                    </div>
                    <div className="d-block d-md-none">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/mobile-all-logo.webp"
                        }
                        className="img-fluid"
                        alt="all logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="on1">
                    <h2 className="h4-fs">
                      due to this, our Certificate is valid in 192 country
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <a
              href={InfoDownloadPdf}
              download
              className="btn btn-success bg-faculties mt-5 w-100"
            >
              Click To Know About Our Faculties
            </a>
          </div>
        </div>
      </section> */}
      {/* <section className="margintop">
        <div className="container-fluid ">
          <div className="container text-center covid">
            <h2 className="h2-fs">
              <span className="m-0 text-blue-color">Demo</span> Lecture
            </h2>
            <div className="thm-bg-clr dector"></div>
          </div>
          <div className="container text-center">
            <div className="row">
              <div className="col-md-6 mt-3">
                <div className="blog2">
                  <b>
                    <p>Certified Nutrition Course</p>
                  </b>
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/protein-course.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="video-btn play-btn">
                      <a
                        onClick={() => openVideoModal("zRRgXHCLDAM")}
                        className="custom clickof"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="text-center mt-3 download-pdf">
                    <a
                      class="button mt-3"
                      href={Diploma_in_dietitian_course}
                      download
                    >
                      <span class="button__text">Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="blog2">
                  <b>
                    <p>Certified Personal Trainer</p>
                  </b>
                  <div className="ply1 ">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/kinesiology.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="video-btn play-btn">
                      <a
                        onClick={() => openVideoModal("bfbRDh_nDHs")}
                        className="custom clickof"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="text-center mt-3 download-pdf">
                    <a class="button mt-3" href={DownloadPdf} download>
                      <span class="button__text">Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="blog2">
                  <b>
                    <p>Anabolic Androgenic Steroids Workshop</p>
                  </b>
                  <div className="ply1 ">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/anabolic_cycle.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="video-btn play-btn">
                      <a
                        onClick={() => openVideoModal("TKn2FwMOHak")}
                        className="custom clickof"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="text-center mt-3 download-pdf">
                    <a class="button mt-3" href={DownloadPdf} download>
                      <span class="button__text">Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="blog2">
                  <b>
                    <p>Tabata & Functional Workshop</p>
                  </b>
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/functional_training.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="video-btn play-btn">
                      <a
                        onClick={() => openVideoModal("b-DhFdSpcEQ")}
                        className="custom clickof"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="text-center mt-3 download-pdf">
                    <a class="button mt-3" href={DownloadPdf} download>
                      <span class="button__text">Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <MeetOurInstructure />
      <section className="margintop d-none">
        <div className="container-fluid">
          <div className="container blog2 py-3 py-md-5">
            <div className="row">
              <div className="col-lg-12 covid">
                <h2 className="h2-fs text-center text-333-color">
                  Why
                  <span className="m-0 text-blue-color"> Online?</span>
                </h2>
                <div className="thm-bg-clr dector mb-2 mb-md-5"></div>
              </div>
              <div className="col-lg-12  mt-0">
                <div className="describe">
                  <p>
                    In today's fast-paced world, online fitness courses have
                    become a game-changer for individuals looking to improve
                    their health and well-being. These online courses offer
                    convenience, flexibility, and expert-led guidance, making
                    fitness accessible to anyone, anywhere. Whether you're a
                    beginner or a seasoned athlete, fitness courses cater to all
                    levels and help you achieve your personal fitness goals.
                  </p>
                  <div className="d-md-block d-none">
                    <p>
                      Online fitness courses are designed to provide a
                      structured learning experience through virtual platforms,
                      where you can learn at your own pace. With a wide range of
                      programs available, including strength training, yoga,
                      nutrition, and weight loss, there is something for
                      everyone. Many fitness enthusiasts prefer the flexibility
                      of online courses as they allow them to work out from the
                      comfort of their home, saving time and eliminating the
                      need for a gym membership.
                    </p>
                    <p>
                      These courses often come with instructional videos,
                      workout plans, and even one-on-one support from expert
                      trainers. They are an excellent choice for people with
                      busy schedules who still want to stay fit. With continuous
                      advancements in technology, online fitness courses are
                      evolving, offering a comprehensive fitness experience with
                      interactive tools and community support, making fitness
                      goals more achievable than ever before.
                    </p>
                  </div>
                  <div className="d-md-none d-block">
                    {showMore ? (
                      <>
                        <p>
                          Online fitness courses are designed to provide a
                          structured learning experience through virtual
                          platforms, where you can learn at your own pace. With
                          a wide range of programs available, including strength
                          training, yoga, nutrition, and weight loss, there is
                          something for everyone. Many fitness enthusiasts
                          prefer the flexibility of online courses as they allow
                          them to work out from the comfort of their home,
                          saving time and eliminating the need for a gym
                          membership.
                        </p>
                        <p>
                          These courses often come with instructional videos,
                          workout plans, and even one-on-one support from expert
                          trainers. They are an excellent choice for people with
                          busy schedules who still want to stay fit. With
                          continuous advancements in technology, online fitness
                          courses are evolving, offering a comprehensive fitness
                          experience with interactive tools and community
                          support, making fitness goals more achievable than
                          ever before.
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
                  {/* <div>
                    <a className="btn btn-primarrr m-auto btn-primary mt-2 moreless-button mt-md-3 mb-sm-2 mb-md-0">
                      Read more
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="convocation-section">
        <div className="container-fluid">
          <div className="container py-5">
            <div className="covid text-center">
              <h2 className="h2-fs" style={{ color: "#333" }}>
                passed out<span className="m-0 text-blue-color"> students</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <OwlCarousel
              loop
              autoplay
              nav={false}
              dots={false}
              id="fwg-owl"
              className="owl-carousel owl-theme mb-5"
              responsive={{
                0: {
                  items: 1,
                },
                600: {
                  items: 2,
                },
                1000: {
                  items: 2,
                },
              }}
            >
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={process.env.PUBLIC_URL + "/assets/images/img/a.webp"}
                  alt="passed out student from our academy"
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={process.env.PUBLIC_URL + "/assets/images/img/b.webp"}
                  alt="passed out student from our academy"
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={process.env.PUBLIC_URL + "/assets/images/img/c.webp"}
                  alt="passed out student from our academy"
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={process.env.PUBLIC_URL + "/assets/images/img/d.webp"}
                  alt="passed out student from our academy"
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={process.env.PUBLIC_URL + "/assets/images/img/e.webp"}
                  alt="passed out student from our academy"
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={process.env.PUBLIC_URL + "/assets/images/img/f.webp"}
                  alt="passed out student from our academy"
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section> */}
      <section className="d-none d-md-block mt-5">
        <div className="container-fluid p-0">
          <div>
            <Link to="/fgiit/fitness-training-and-placement">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/tpcell-d.webp"
                }
                width="100%"
                className="lazy"
                alt="fggroup"
              />
            </Link>
          </div>
        </div>
      </section>
      {/* <PartnersBrands /> */}
      {/* <OurStudentsWords /> */}
      <PartnerLogo />
      {/* <PlacementReview /> */}
      <section className="margintop d-none d-md-block">
        <div className="container-fluid p-0">
          <div className="col-md-12 p-0">
            <Link to="/alumini-fgiit">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/alumina-banner.webp"
                }
                width="100%"
                className="lazy"
                alt="fggroup"
              />
            </Link>
          </div>
          <div className="col-md-12 text-center mt-4 p-0 pt-1">
            <div className="review-box-btn">
              <Link to="/alumini-fgiit" className="custom clickof">
                Alumini Events
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="Info">
              <h2 className="mt-3 h2-fs">FGIIT *Terms & Conditions :</h2>
            </div>
            <div className="Grocery1 pl-3">
              <ul>
                <li>
                  <b>18% GST will be applied externally on the courses.</b>
                </li>
                <li>
                  The Program You Choose Is An INTERNATIONAL CERTIFIED
                  NUTRITIONIST COURSE Of 2 Months At Fees Of Rs.20,000/- The
                  Actual Fees For This Course Is 35100/-(Offline).
                </li>
                <li>
                  You, Will, Be Provided With Proper Material For The Course
                  (Both High Definition Video Lectures And Pdf Format Notes)
                  Through Which You Can Study For Your Course. Other Than That
                  You Will Get A Subscription Ending Reminder 1 Week Before
                  Ending The Course.
                </li>
                <li>
                  Certification Will Be Provided After A 150 Marks Exam Consisting Of 100 Marks Of MCQ, and 2 Projects of 25 marks each. You, Will, Be Given 2 Attempts For The Exam Only If You Fail The Exam. In Case If You Have Not Completed The Course Or Are Left With Studying Or Didn't Appear For The Exam For The Same, You Have To Inform The Mentor's Priory And Extend Your Time By 1 Month After Paying <b style={{ color: "red" }}>2700/- </b>{" "} As Plan-Extension Fee.
                  <ol>
                    <li>
                      Failing In Both Attempts Will Make You Take The Course
                      Again If You Want To Continue.
                    </li>
                    <li>
                      Doubts and Queries will be solved via WhatsApp every week
                      before Sunday.
                    </li>
                    <li>Fees Paid is Non-Refundable and Not Transferable.</li>
                    <li>
                      If the candidate is getting an extension for their due fee
                      payment then they have to take the extension time
                      seriously or it may end up in these stated consequences.
                    </li>
                    <li>
                      If you appeared a month delay then you need to start the
                      course again followed by paying full fees.
                    </li>
                    <li>
                      If the faculty gives you the extension for payment then it
                      should be valued or the results will be the same as above.
                    </li>
                    <li>
                      Video Panels will be closed 3 days prior of the final
                      examination.
                    </li>
                  </ol>
                </li>
                <li>
                  <b>
                    You need to submit the project before 5 days of the exam
                    without it you will not be allowed to give the exam.
                  </b>
                </li>
                <li>
                  <b>
                    Failing not to submit the project will result in delaying
                    your examination.
                  </b>
                </li>
                <li>
                  <b>
                    You have to pay <b style={{ color: "red" }}>2700/- </b>as
                    exam reschedule charges and still will be liable to submit
                    your project prior 5 days of the examination.
                  </b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
      <section className="margintop">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#f9f3f3", padding: "50px 0px" }}
        >
          <div className="covid text-center mb-5">
            <h2 className="mt-2 h2-fs">
              International{" "}
              <span className="m-0 text-blue-color">accredited academy</span>
            </h2>
          </div>
          <div id="maindiv">
            <div id="div1">
              <span className="mx-2 flag flag-md flag-country-ad"></span>
              <span className="mx-2 flag flag-md flag-country-ae"></span>
              <span className="mx-2 flag flag-md flag-country-af"></span>
              <span className="mx-2 flag flag-md flag-country-ag"></span>
              <span className="mx-2 flag flag-md flag-country-ai"></span>
              <span className="mx-2 flag flag-md flag-country-am"></span>
              <span className="mx-2 flag flag-md flag-country-ao"></span>
              <span className="mx-2 flag flag-md flag-country-aq"></span>
              <span className="mx-2 flag flag-md flag-country-ar"></span>
              <span className="mx-2 flag flag-md flag-country-as"></span>
              <span className="mx-2 flag flag-md flag-country-at"></span>
              <span className="mx-2 flag flag-md flag-country-au"></span>
              <span className="mx-2 flag flag-md flag-country-aw"></span>
              <span className="mx-2 flag flag-md flag-country-ax"></span>
              <span className="mx-2 flag flag-md flag-country-az"></span>
              <span className="mx-2 flag flag-md flag-country-ba"></span>
              <span className="mx-2 flag flag-md flag-country-bb"></span>
              <span className="mx-2 flag flag-md flag-country-be"></span>
              <span className="mx-2 flag flag-md flag-country-bf"></span>
              <span className="mx-2 flag flag-md flag-country-bg"></span>
              <span className="mx-2 flag flag-md flag-country-bh"></span>
              <span className="mx-2 flag flag-md flag-country-bi"></span>
              <span className="mx-2 flag flag-md flag-country-bj"></span>
              <span className="mx-2 flag flag-md flag-country-bl"></span>
              <span className="mx-2 flag flag-md flag-country-bm"></span>
              <span className="mx-2 flag flag-md flag-country-bn"></span>
              <span className="mx-2 flag flag-md flag-country-bo"></span>
              <span className="mx-2 flag flag-md flag-country-bq"></span>
              <span className="mx-2 flag flag-md flag-country-br"></span>
              <span className="mx-2 flag flag-md flag-country-bs"></span>
              <span className="mx-2 flag flag-md flag-country-bt"></span>
              <span className="mx-2 flag flag-md flag-country-bv"></span>
              <span className="mx-2 flag flag-md flag-country-bw"></span>
              <span className="mx-2 flag flag-md flag-country-by"></span>
              <span className="mx-2 flag flag-md flag-country-bz"></span>
              <span className="mx-2 flag flag-md flag-country-ca"></span>
              <span className="mx-2 flag flag-md flag-country-cc"></span>
              <span className="mx-2 flag flag-md flag-country-cd"></span>
              <span className="mx-2 flag flag-md flag-country-cf"></span>
              <span className="mx-2 flag flag-md flag-country-cg"></span>
              <span className="mx-2 flag flag-md flag-country-ch"></span>
              <span className="mx-2 flag flag-md flag-country-ci"></span>
              <span className="mx-2 flag flag-md flag-country-ck"></span>
              <span className="mx-2 flag flag-md flag-country-cl"></span>
              <span className="mx-2 flag flag-md flag-country-cm"></span>
              <span className="mx-2 flag flag-md flag-country-cn"></span>
              <span className="mx-2 flag flag-md flag-country-co"></span>
              <span className="mx-2 flag flag-md flag-country-cr"></span>
              <span className="mx-2 flag flag-md flag-country-cu"></span>
              <span className="mx-2 flag flag-md flag-country-cv"></span>
              <span className="mx-2 flag flag-md flag-country-cw"></span>
              <span className="mx-2 flag flag-md flag-country-cx"></span>
              <span className="mx-2 flag flag-md flag-country-cy"></span>
              <span className="mx-2 flag flag-md flag-country-cz"></span>
              <span className="mx-2 flag flag-md flag-country-de"></span>
              <span className="mx-2 flag flag-md flag-country-dj"></span>
              <span className="mx-2 flag flag-md flag-country-dk"></span>
              <span className="mx-2 flag flag-md flag-country-dm"></span>
              <span className="mx-2 flag flag-md flag-country-do"></span>
              <span className="mx-2 flag flag-md flag-country-dz"></span>
              <span className="mx-2 flag flag-md flag-country-ec"></span>
              <span className="mx-2 flag flag-md flag-country-ee"></span>
              <span className="mx-2 flag flag-md flag-country-eg"></span>
              <span className="mx-2 flag flag-md flag-country-eh"></span>
              <span className="mx-2 flag flag-md flag-country-er"></span>
              <span className="mx-2 flag flag-md flag-country-es"></span>
              <span className="mx-2 flag flag-md flag-country-es-ct"></span>
              <span className="mx-2 flag flag-md flag-country-et"></span>
              <span className="mx-2 flag flag-md flag-country-eu"></span>
              <span className="mx-2 flag flag-md flag-country-fi"></span>
              <span className="mx-2 flag flag-md flag-country-fj"></span>
              <span className="mx-2 flag flag-md flag-country-fk"></span>
              <span className="mx-2 flag flag-md flag-country-fm"></span>
              <span className="mx-2 flag flag-md flag-country-fo"></span>
              <span className="mx-2 flag flag-md flag-country-fr"></span>
              <span className="mx-2 flag flag-md flag-country-ga"></span>
              <span className="mx-2 flag flag-md flag-country-gb"></span>
              <span className="mx-2 flag flag-md flag-country-gb-eng"></span>
              <span className="mx-2 flag flag-md flag-country-gb-nir"></span>
              <span className="mx-2 flag flag-md flag-country-gb-sct"></span>
              <span className="mx-2 flag flag-md flag-country-gb-wls"></span>
              <span className="mx-2 flag flag-md flag-country-gd"></span>
              <span className="mx-2 flag flag-md flag-country-ge"></span>
              <span className="mx-2 flag flag-md flag-country-gf"></span>
              <span className="mx-2 flag flag-md flag-country-gg"></span>
              <span className="mx-2 flag flag-md flag-country-gh"></span>
              <span className="mx-2 flag flag-md flag-country-gi"></span>
              <span className="mx-2 flag flag-md flag-country-gl"></span>
              <span className="mx-2 flag flag-md flag-country-gm"></span>
              <span className="mx-2 flag flag-md flag-country-gn"></span>
              <span className="mx-2 flag flag-md flag-country-gp"></span>
              <span className="mx-2 flag flag-md flag-country-gq"></span>
              <span className="mx-2 flag flag-md flag-country-gr"></span>
              <span className="mx-2 flag flag-md flag-country-gs"></span>
              <span className="mx-2 flag flag-md flag-country-gt"></span>
              <span className="mx-2 flag flag-md flag-country-gu"></span>
              <span className="mx-2 flag flag-md flag-country-gw"></span>
              <span className="mx-2 flag flag-md flag-country-gy"></span>
              <span className="mx-2 flag flag-md flag-country-hk"></span>
              <span className="mx-2 flag flag-md flag-country-hm"></span>
              <span className="mx-2 flag flag-md flag-country-hn"></span>
              <span className="mx-2 flag flag-md flag-country-hr"></span>
              <span className="mx-2 flag flag-md flag-country-ht"></span>
              <span className="mx-2 flag flag-md flag-country-hu"></span>
              <span className="mx-2 flag flag-md flag-country-id"></span>
              <span className="mx-2 flag flag-md flag-country-ie"></span>
              <span className="mx-2 flag flag-md flag-country-il"></span>
              <span className="mx-2 flag flag-md flag-country-im"></span>
              <span className="mx-2 flag flag-md flag-country-in"></span>
              <span className="mx-2 flag flag-md flag-country-io"></span>
              <span className="mx-2 flag flag-md flag-country-iq"></span>
              <span className="mx-2 flag flag-md flag-country-ir"></span>
              <span className="mx-2 flag flag-md flag-country-is"></span>
              <span className="mx-2 flag flag-md flag-country-it"></span>
              <span className="mx-2 flag flag-md flag-country-je"></span>
              <span className="mx-2 flag flag-md flag-country-jm"></span>
              <span className="mx-2 flag flag-md flag-country-jo"></span>
              <span className="mx-2 flag flag-md flag-country-jp"></span>
              <span className="mx-2 flag flag-md flag-country-ke"></span>
              <span className="mx-2 flag flag-md flag-country-kg"></span>
              <span className="mx-2 flag flag-md flag-country-kh"></span>
              <span className="mx-2 flag flag-md flag-country-ki"></span>
              <span className="mx-2 flag flag-md flag-country-km"></span>
              <span className="mx-2 flag flag-md flag-country-kn"></span>
              <span className="mx-2 flag flag-md flag-country-kp"></span>
              <span className="mx-2 flag flag-md flag-country-kr"></span>
              <span className="mx-2 flag flag-md flag-country-kw"></span>
              <span className="mx-2 flag flag-md flag-country-ky"></span>
              <span className="mx-2 flag flag-md flag-country-kz"></span>
              <span className="mx-2 flag flag-md flag-country-la"></span>
              <span className="mx-2 flag flag-md flag-country-lb"></span>
              <span className="mx-2 flag flag-md flag-country-lc"></span>
              <span className="mx-2 flag flag-md flag-country-li"></span>
              <span className="mx-2 flag flag-md flag-country-lk"></span>
              <span className="mx-2 flag flag-md flag-country-lr"></span>
              <span className="mx-2 flag flag-md flag-country-ls"></span>
              <span className="mx-2 flag flag-md flag-country-lt"></span>
              <span className="mx-2 flag flag-md flag-country-lu"></span>
              <span className="mx-2 flag flag-md flag-country-lv"></span>
              <span className="mx-2 flag flag-md flag-country-ly"></span>
              <span className="mx-2 flag flag-md flag-country-ma"></span>
              <span className="mx-2 flag flag-md flag-country-mc"></span>
              <span className="mx-2 flag flag-md flag-country-md"></span>
              <span className="mx-2 flag flag-md flag-country-me"></span>
              <span className="mx-2 flag flag-md flag-country-mf"></span>
              <span className="mx-2 flag flag-md flag-country-mg"></span>
              <span className="mx-2 flag flag-md flag-country-mh"></span>
              <span className="mx-2 flag flag-md flag-country-mk"></span>
              <span className="mx-2 flag flag-md flag-country-ml"></span>
              <span className="mx-2 flag flag-md flag-country-mm"></span>
              <span className="mx-2 flag flag-md flag-country-mn"></span>
              <span className="mx-2 flag flag-md flag-country-mo"></span>
              <span className="mx-2 flag flag-md flag-country-mp"></span>
              <span className="mx-2 flag flag-md flag-country-mq"></span>
              <span className="mx-2 flag flag-md flag-country-mr"></span>
              <span className="mx-2 flag flag-md flag-country-ms"></span>
              <span className="mx-2 flag flag-md flag-country-mt"></span>
              <span className="mx-2 flag flag-md flag-country-mu"></span>
              <span className="mx-2 flag flag-md flag-country-mv"></span>
              <span className="mx-2 flag flag-md flag-country-mw"></span>
              <span className="mx-2 flag flag-md flag-country-mx"></span>
              <span className="mx-2 flag flag-md flag-country-my"></span>
              <span className="mx-2 flag flag-md flag-country-mz"></span>
              <span className="mx-2 flag flag-md flag-country-na"></span>
              <span className="mx-2 flag flag-md flag-country-nc"></span>
              <span className="mx-2 flag flag-md flag-country-ne"></span>
              <span className="mx-2 flag flag-md flag-country-nf"></span>
              <span className="mx-2 flag flag-md flag-country-ng"></span>
              <span className="mx-2 flag flag-md flag-country-ni"></span>
              <span className="mx-2 flag flag-md flag-country-no"></span>
              <span className="mx-2 flag flag-md flag-country-np"></span>
              <span className="mx-2 flag flag-md flag-country-nr"></span>
              <span className="mx-2 flag flag-md flag-country-nu"></span>
              <span className="mx-2 flag flag-md flag-country-nz"></span>
              <span className="mx-2 flag flag-md flag-country-om"></span>
              <span className="mx-2 flag flag-md flag-country-pa"></span>
              <span className="mx-2 flag flag-md flag-country-pe"></span>
              <span className="mx-2 flag flag-md flag-country-pf"></span>
              <span className="mx-2 flag flag-md flag-country-pg"></span>
              <span className="mx-2 flag flag-md flag-country-ph"></span>
              <span className="mx-2 flag flag-md flag-country-pk"></span>
              <span className="mx-2 flag flag-md flag-country-pl"></span>
              <span className="mx-2 flag flag-md flag-country-pm"></span>
              <span className="mx-2 flag flag-md flag-country-pn"></span>
              <span className="mx-2 flag flag-md flag-country-pr"></span>
              <span className="mx-2 flag flag-md flag-country-ps"></span>
              <span className="mx-2 flag flag-md flag-country-pt"></span>
              <span className="mx-2 flag flag-md flag-country-pw"></span>
              <span className="mx-2 flag flag-md flag-country-py"></span>
              <span className="mx-2 flag flag-md flag-country-qa"></span>
              <span className="mx-2 flag flag-md flag-country-re"></span>
              <span className="mx-2 flag flag-md flag-country-ro"></span>
              <span className="mx-2 flag flag-md flag-country-rs"></span>
              <span className="mx-2 flag flag-md flag-country-ru"></span>
              <span className="mx-2 flag flag-md flag-country-rw"></span>
              <span className="mx-2 flag flag-md flag-country-sa"></span>
              <span className="mx-2 flag flag-md flag-country-sb"></span>
              <span className="mx-2 flag flag-md flag-country-sc"></span>
              <span className="mx-2 flag flag-md flag-country-sd"></span>
              <span className="mx-2 flag flag-md flag-country-se"></span>
              <span className="mx-2 flag flag-md flag-country-sg"></span>
              <span className="mx-2 flag flag-md flag-country-sh"></span>
              <span className="mx-2 flag flag-md flag-country-si"></span>
              <span className="mx-2 flag flag-md flag-country-sj"></span>
              <span className="mx-2 flag flag-md flag-country-sk"></span>
              <span className="mx-2 flag flag-md flag-country-sl"></span>
              <span className="mx-2 flag flag-md flag-country-sm"></span>
              <span className="mx-2 flag flag-md flag-country-sn"></span>
              <span className="mx-2 flag flag-md flag-country-so"></span>
              <span className="mx-2 flag flag-md flag-country-sr"></span>
              <span className="mx-2 flag flag-md flag-country-ss"></span>
              <span className="mx-2 flag flag-md flag-country-st"></span>
              <span className="mx-2 flag flag-md flag-country-sv"></span>
              <span className="mx-2 flag flag-md flag-country-sx"></span>
              <span className="mx-2 flag flag-md flag-country-sy"></span>
              <span className="mx-2 flag flag-md flag-country-sz"></span>
              <span className="mx-2 flag flag-md flag-country-tc"></span>
              <span className="mx-2 flag flag-md flag-country-td"></span>
              <span className="mx-2 flag flag-md flag-country-tf"></span>
              <span className="mx-2 flag flag-md flag-country-tg"></span>
              <span className="mx-2 flag flag-md flag-country-th"></span>
              <span className="mx-2 flag flag-md flag-country-tj"></span>
              <span className="mx-2 flag flag-md flag-country-tk"></span>
              <span className="mx-2 flag flag-md flag-country-tl"></span>
              <span className="mx-2 flag flag-md flag-country-tm"></span>
              <span className="mx-2 flag flag-md flag-country-tn"></span>
              <span className="mx-2 flag flag-md flag-country-to"></span>
              <span className="mx-2 flag flag-md flag-country-tr"></span>
              <span className="mx-2 flag flag-md flag-country-tt"></span>
              <span className="mx-2 flag flag-md flag-country-tv"></span>
              <span className="mx-2 flag flag-md flag-country-tz"></span>
              <span className="mx-2 flag flag-md flag-country-ua"></span>
              <span className="mx-2 flag flag-md flag-country-ug"></span>
              <span className="mx-2 flag flag-md flag-country-um"></span>
              <span className="mx-2 flag flag-md flag-country-un"></span>
              <span className="mx-2 flag flag-md flag-country-us"></span>
              <span className="mx-2 flag flag-md flag-country-uy"></span>
              <span className="mx-2 flag flag-md flag-country-uz"></span>
              <span className="mx-2 flag flag-md flag-country-va"></span>
              <span className="mx-2 flag flag-md flag-country-vc"></span>
              <span className="mx-2 flag flag-md flag-country-ve"></span>
              <span className="mx-2 flag flag-md flag-country-vg"></span>
              <span className="mx-2 flag flag-md flag-country-vi"></span>
              <span className="mx-2 flag flag-md flag-country-vn"></span>
              <span className="mx-2 flag flag-md flag-country-vu"></span>
              <span className="mx-2 flag flag-md flag-country-wf"></span>
              <span className="mx-2 flag flag-md flag-country-ws"></span>
              <span className="mx-2 flag flag-md flag-country-ye"></span>
              <span className="mx-2 flag flag-md flag-country-za"></span>
              <span className="mx-2 flag flag-md flag-country-zm"></span>
              <span className="mx-2 flag flag-md flag-country-zw"></span>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs" style={{ color: "#333" }}>
                Blogs<span className="m-0 text-blue-color"></span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <div className="">
              <div className="row">
                <div className="col-md-4 mt-3">
                  <div className="item-box">
                    <img
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/blog/Loss-weight.webp"
                      }
                      alt="Snowy Mountains"
                    />

                    <div className="card__content p-3">
                      <h2 className="card__header h2-fs">
                        Weight Loss VS Fat Loss
                      </h2>
                      <p className="card__text">
                        Individuals aiming to shed a few pounds often claim they
                        want to lose weight. But do you really want to lose
                        weight? Losing weight is quite simple, contrary to
                        popular belief.
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
                <div className="col-md-4 mt-3">
                  <div className="item-box">
                    <img
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/blog/Minerals-d.webp"
                      }
                      alt="difference between fat loss abd weight loss"
                    />
                    <div className="card__content p-3">
                      <h2 className="card__header h2-fs">What Is Minerals?</h2>
                      <p className="card__text">
                        Humans require various mineral elements for optimal
                        functioning. These mineral elements are broadly
                        categorized into two classes: Macro Minerals and Micro
                        Minerals.
                      </p>
                      <Link to="/blogs/what-are-minerals" className="card__btn">
                        Explore
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="item-box">
                    <img
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/blog/Flexible-Body.webp"
                      }
                      alt="what is Keto Diet"
                    />
                    <div className="card__content p-3">
                      <h2 className="card__header h2-fs">
                        How To Get Flexible Body?
                      </h2>
                      <p className="card__text">
                        Stretching plays a vital role in achieving a flexible
                        body. The term "stretching" originates from the word
                        "stretch," which refers to the uninterrupted
                        continuation...
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
          </div>
        </div>
      </section>
      <section className="margintop d-block d-md-none">
        <div className="container-fluid p-0">
          <div className="col-md-12 p-0">
            <Link to="/alumini-fgiit">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/alumina-mobile-banner.webp"
                }
                width="100%"
                alt="fggroup"
                className="lazy"
              />
            </Link>
          </div>
          <div className="col-md-12 text-center mt-4 p-0 pt-1 mb-4">
            <div className="review-box-btn">
              <Link to="/alumini-fgiit" className="custom clickof">
                Alumini Events
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="d-block d-md-none">
        <div className="container-fluid p-0">
          <div>
            <Link to="/fgiit/fitness-training-and-placement">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/img/tpcell.webp"}
                width="100%"
                className="lazy"
                alt="fggroup"
              />
            </Link>
          </div>
        </div>
      </section>
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
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
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
                    Yes, this certificate and course are valid nationally and
                    also valid in 192 countries in the world. This certificate
                    is issued from California, USA.
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingTwo">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          What can you do after the completion of this course?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapseTwo"
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
                      <li>Diploma in Nutrition Course :- 4 Months</li>
                      <li>Diploma in Personal Training Course :- 4 Months</li>
                      <li>Anabolic Androgenic Steroids :- 1 Month</li>
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
                      <li>Registration of your course.</li>
                      <li>
                        You will get the panel link and its id and password.
                      </li>
                      <li>
                        Start learning from our study videos with an
                        introduction.
                      </li>
                      <li>
                        You can contact mentors if you have any difficulties
                        during the course.
                      </li>
                      <li>
                        Doubts And Queries Will Be Solved Via WhatsApp Every
                        Week Before Sunday.
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
                          What is the exam procedure and how to give it?
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
                    You can give the exam on your phone or laptop from home and
                    anywhere.
                    <br /> MCQ Based Exam (100 Marks) & 2 Projects submission
                    (25 marks each)
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
                          What are the benefits of enrolling in this course at FGIIT? Students benefit from:
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
                    Government-approved and internationally accredited certification Expert faculties with over 5 years of industry experience 100% placement support and a mandatory internship at top firms Bilingual learning materials (English and Hindi) Lifetime support, including access to demo lectures and chat support
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
                          Are there any exams or assessments in the course?
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
                    Yes, the course includes MCQ-based exams and a case study-based project to assess understanding and practical application of personal training concepts.
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
                          How is FGIIT's course different from other academies?
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
                    FGIIT's course includes unique topics such as group instructor training, anabolics and androgenic steroids, powerlifting, and injury rehabilitation. This makes FGIIT the most knowledgeable and value-for-money course in the industry.
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
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-3">
                <div className="i4 text-center">
                  <h2 className="h2-fs">Franchise Partner</h2>
                  <Link to="/fitness-brand-franchise">Explore</Link>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="i4 text-center">
                  <h2 className="h2-fs">INPTA</h2>
                  <Link to="/indian-nutritionist-and-personal-trainer-association">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactInquiryForm note={"Online Course Page Inquiry"} />
      <FgiitFooter />
    </>
  );
}

export default OnlineFitnessCourses;
