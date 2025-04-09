import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import { sendInquiry } from "../../assets/js/utils/contact-us";
import LoginModal from "../../assets/js/popup/login";
import { createCourseOrder } from "../../assets/js/utils/fitness-course";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import BookFreeDemoHeader from "../../components/partials/Header/bookdemoheader";
import PartnerLogo from "../../components/fgiit/partnerLogo";
import Blogs from "../../components/fgiit/blogs";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Helmet } from "react-helmet";
import ContactInquiryForm from "../../components/fgiit/contactInquiryForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import OfflineFitnessCourse from "../../components/fgiit/offlineFitnessCourse";
import AllReviews from "../../components/fgiit/allReviews";

function FitnessAndNutritionCourses() {
  const canonicalUrl = window.location.href;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    modalName: "",
    modalEmail: "",
    modalContactNumber: "",
    modalSelectedCourse: "",
    modalMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    setShowLoginModal(false);
  };

  const handlePopupClose = () => {
    setShowModal(false);
  };

  const sendModalContactInquiry = async () => {
    try {
      const name = formData.modalName;
      const phoneNumber = formData.modalContactNumber;
      const email = formData.modalEmail;
      const message = formData.modalMessage;
      const courses = formData.modalSelectedCourse;
      let modifiedMessage = `${message}\n\nCourse: ${courses}`;
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "Offline Course Page Inquiry",
        modifiedMessage,
        window.location.href,
        null,
        null,
        null
      );
      setFormData({
        modalName: "",
        modalEmail: "",
        modalContactNumber: "",
        modalSelectedCourse: "",
        modalMessage: "",
      });
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  const toggleReadMorei = () => {
    setShowMore(!showMore);
  };

  const toggleReadMoreii = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 15000);

    return () => clearTimeout(timer);
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
    setShowModal(false);
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
        <title>Best Fitness and Nutrition Courses - Enroll Today!</title>
        <meta
          name="description"
          content="Join the best fitness and nutrition courses to boost your skills, get certified, and advance your career. Enroll today!"
        />
        <meta
          name="keyword"
          content="course nutrition, fitness and nutrition courses, certified nutritionist course, dietician course, diploma of nutrition, fitness nutrition course, nutrition courses near me, health and nutrition courses, diet and nutrition course, food and nutrition course, best nutritionist in india, courses in nutrition, nutritionist dietician course, sports nutrition diploma, clinical nutrition course, certified sports nutritionist, advanced nutrition course, diploma in dietetics, accredited nutrition course, best dietetics course, food science and nutrition course, holistic nutrition diploma, weight management course, fitness and health diploma, best fitness nutrition certification, diploma in nutrition and dietetics, exercise nutrition course, best sports nutrition certification, fitness dietician course, health coaching certification, functional nutrition course, nutrition course for fitness trainers, certified holistic nutritionist, weight loss nutrition course, advanced sports nutrition course, diploma in clinical nutrition, international nutrition course, dietician diploma course, certificate in sports nutrition, best fitness and nutrition course, diploma in holistic nutrition, gym nutrition course, accredited dietetics course, sports nutrition course offline, dietitian training program, short course in nutrition, personal trainer nutrition course, nutrition certification course, offline fitness trainer course"
        />
        <meta
          property="og:title"
          content="Best Fitness and Nutrition Courses - Enroll Today!"
        />
        <meta
          property="og:description"
          content="Join the best fitness and nutrition courses to boost your skills, get certified, and advance your career. Enroll today!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fgiit/fitness-and-nutrition-courses"
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
            fbq('init', '485635632433430');
            fbq('track', 'PageView');
        `}
        </script>
        <noscript>
          {
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=485635632433430&ev=PageView&noscript=1" />'
          }
        </noscript>
      </Helmet>
      <p className="d-none">
        course nutrition, fitness and nutrition courses, certified nutritionist course, dietician course, diploma of nutrition, fitness nutrition course, nutrition courses near me, health and nutrition courses, diet and nutrition course, food and nutrition course, best nutritionist in india, courses in nutrition, nutritionist dietician course, sports nutrition diploma, clinical nutrition course, certified sports nutritionist, advanced nutrition course, diploma in dietetics, accredited nutrition course, best dietetics course, food science and nutrition course, holistic nutrition diploma, weight management course, fitness and health diploma, best fitness nutrition certification, diploma in nutrition and dietetics, exercise nutrition course, best sports nutrition certification, fitness dietician course, health coaching certification, functional nutrition course, nutrition course for fitness trainers, certified holistic nutritionist, weight loss nutrition course, advanced sports nutrition course, diploma in clinical nutrition, international nutrition course, dietician diploma course, certificate in sports nutrition, best fitness and nutrition course, diploma in holistic nutrition, gym nutrition course, accredited dietetics course, sports nutrition course offline, dietitian training program, short course in nutrition, personal trainer nutrition course, nutrition certification course, offline fitness trainer course
      </p>
      <WhatsappHeaderApp
        message={"Hello, I wanted to know more about Offline Courses. "}
        options={{ pageRef: true }}
      />
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      {showLoginModal && <LoginModal onClose={closeModal} />}
      <BookFreeDemoHeader />
      <section className="mobile-banner-mg">
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
                className="d-none d-md-block"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/new-fgiit-banner.webp"
                }
                width="100%"
                alt="Fitness And Nutrition Courses"
              />
              <img
                className="d-block d-md-none w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/new-fgiit-mobile.webp"
                }
                alt="Fitness And Nutrition Courses"
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

      <OfflineFitnessCourse />
      <AllReviews />
      <section className="margintop d-none">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="describe">
                  <h1 className="text-center mt-2" style={{ color: "#333" }}>
                    Looking for the
                    <span className="m-0 text-blue-color">
                      {" "}
                      best fitness course
                    </span>{" "}
                    in India?
                  </h1>
                  <div className="thm-bg-clr dector"></div>
                  <div className="d-lg-block d-none">
                    <p>
                      We Started These Nutrition Courses To Make The Fitness And
                      Nutrition Industry-main Streamline After The 10th. A
                      Student Who Wants To Follow Their Passion And Earn Money
                      Simultaneously Can Register For Our Certified Nutritionist
                      Course India Because We Are The Best Fitness Certification
                      In India. We Design Courses Impart Practical And Academic
                      Knowledge Of Concepts Of Dietetics & Personal Training.
                      Fgiit Believes That Both Health And Disease Originate From
                      A Lack Of A Good Nutritional Diet And Exercise Which Makes
                      Us The Prominent Nutritionist Course In India. Our
                      Dietitian And Personal Training Course Are Recognized By
                      The International Accreditation Certificate (Iao) For The
                      Achievement Of The Highest Standards Of Organizational
                      Management, Academic Management, And Institutional
                      Performance Through A Commitment To Quality And Continuous
                      Improvement That Is What Makes Us Unique And Well Known
                      For Your The Best Fitness Trainer Course In India. You'll
                      Get A Certificate Once You Have Completed The Course Which
                      Is Valid In 192 Countries - gym trainer course online.
                    </p>
                  </div>
                </div>
                <div className="moreless d-block d-lg-none">
                  <p>
                    We Started These Nutrition Courses To Make The Fitness And
                    Nutrition Industry-main Streamline After The 10th. A Student
                    Who Wants To Follow Their Passion And Earn Money
                    Simultaneously Can Register For Our Certified Nutritionist
                    Course India Because We Are The Best Fitness Certification
                    In India. We Design Courses Impart Practical And Academic
                    Knowledge Of Concepts Of Dietetics & Personal Training.
                    Fgiit Believes<span id="dots">...</span>
                    {showMore ? (
                      <span>
                        {" "}
                        That Both Health And Disease Originate From A Lack Of A
                        Good Nutritional Diet And Exercise Which Makes Us The
                        Prominent Nutritionist Course In India. Our Dietitian
                        And Personal Training Course Are Recognized By The
                        International Accreditation Certificate (Iao) For The
                        Achievement Of The Highest Standards Of Organizational
                        Management, Academic Management, And Institutional
                        Performance Through A Commitment To Quality And
                        Continuous Improvement That Is What Makes Us Unique And
                        Well Known For Your The Best Fitness Trainer Course In
                        India. You'll Get A Certificate Once You Have Completed
                        The Course Which Is Valid In 192 Countries.
                      </span>
                    ) : (
                      <span id="dots">...</span>
                    )}
                  </p>
                  <a
                    onClick={toggleReadMoreii}
                    id="myBtnrb"
                    className="text-primary m-0 my-sm-2 mb-md-1"
                  >
                    {showMore ? "Read less" : "Read more"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop d-none d-md-block">
        <div className="container-fluid p-0">
          <div>
            <Link to="/fgiit/fitness-training-and-placement">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/tpcell-d.webp"
                }
                width="100%"
                className="lazy"
                alt="Fitness And Nutrition Courses"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="">
            <div className="card bg-skill-border">
              <div className="card-header bg-skill bg-skill-border">
                <h2 className="h4-fs">
                  Which personal trainer certification is best?
                </h2>
              </div>
              <div className="card-body tabata">
                <div className="row">
                  <div className="col-lg-12 order-2 order-lg-1 d-md-block d-none">
                    <blockquote className="blockquote mb-0">
                      {/* <div className="describe d-none d-sm-block"> */}
                      <p>
                        Our Dietitian And Personal Training Course Are
                        Recognized By The International Accreditation
                        Certificate (Iao) For The Achievement Of The Highest
                        Standards Of Organizational Management, Academic
                        Management, And Institutional Performance Through A
                        Commitment To Quality And Continuous Improvement That Is
                        What Makes Us Unique And Well Known For Your The Best
                        Fitness Trainer Course In India Or You Can Say Best
                        Sports Nutrition Certification. You'll Get A Certificate
                        Once You Have Completed The Course Which Is Valid In 192
                        Countries. FGIIT has also received approval by Sports,
                        Physical education, Fitness & Leisure sector skill
                        council (SPEFL-SC) and National Skill Development
                        Council. After getting a Certificate from FGIIT, it
                        assures the public and the employers that the candidate
                        holds valid and appropriate qualifications to perform
                        his roles effectively and safely in public interest.
                      </p>
                      <div className="col-lg-12 d-none d-md-block">
                        <div className="describe">
                          <p>
                            <b>
                              There Are Many Questions That Arise In Your Mind
                              Like:
                            </b>
                          </p>
                          <p>
                            <i className="fa fa-arrow-right"></i> Is It A
                            Personal Trainer Course In India ?
                            <br /> <i className="fa fa-arrow-right"></i> What Is
                            Fitness Trainer Certification Courses/gym Trainer
                            Certified Course ?
                            <br /> <i className="fa fa-arrow-right"></i>{" "}
                            Importance Of Certified Fitness Trainer Course ?
                            <br /> <i className="fa fa-arrow-right"></i> What
                            Are The Nutritionist Course Fees/food And Nutrition
                            Course ?
                          </p>
                          <p>
                            All The Answers Are With Us. Contact Us And Get Your
                            Queries Solved Today
                          </p>
                        </div>
                      </div>
                      <div className="d-block d-md-none">
                        <div className="col-12">
                          <p className="text-muted mb-0">
                            Our Dietitian And Personal Training Course Are
                            Recognized By The International Accreditation
                            Certificate (Iao) For The Achievement Of The Highest
                            Standards Of Organizational Management, Academic
                            Management, And Institutional Performance Through A
                            Commitment To Quality And Continuous Improvement
                            That Is What Makes Us Unique And Well Known For Your
                            The Best Fitness Trainer Course In India Or You Can
                            Say Best Sports Nutrition Certification. You'll Get
                            A Certificate Once You Have Completed
                          </p>
                          <div className="d-block d-md-block">
                            {showMore ? (
                              <div className="m-0 text-muted">
                                <p>
                                  {" "}
                                  The Course Which Is Valid In 192
                                  Countries.FGIIT has also received approval by
                                  Sports, Physical education, Fitness & Leisure
                                  sector skill council (SPEFL-SC) and National
                                  Skill Development Council. After getting a
                                  Certificate from FGIIT, it assures the public
                                  and the employers that the candidate holds
                                  valid and appropriate qualifications to
                                  perform his roles effectively and safely in
                                  public interest.
                                </p>
                                <p>
                                  <b>
                                    There Are Many Questions That Arise In Your
                                    Mind Like:
                                  </b>
                                </p>
                                <p>
                                  - Is It A Personal Trainer Course In India ?
                                  <br /> - What Is Fitness Trainer Certification
                                  Courses/gym Trainer Certified Course ?
                                  <br /> - Importance Of Certified Fitness
                                  Trainer Course ?
                                  <br /> - What Are The Nutritionist Course
                                  Fees/food And Nutrition Course ?
                                </p>
                                <p>
                                  All The Answers Are With Us. Contact Us And
                                  Get Your Queries Solved Today
                                </p>
                              </div>
                            ) : (
                              <span id="dotsr">...</span>
                            )}
                            <div className="mt-3">
                              <a
                                id="myBtnrb"
                                className="text-primary m-0 my-sm-2 mb-md-1"
                                onClick={toggleReadMorei}
                              >
                                {showMore ? "Read less" : "Read more"}
                              </a>
                            </div>
                          </div>
                        </div>
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
                      <div className="item mx-2">
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
                      <div className="item mx-2">
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
                      <div className="item mx-2">
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
                      <div className="item mx-2">
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
                      <div className="item mx-2">
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
                      {/* <div className="item mx-2">
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
                      </div> */}
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container-fluid margintop">
          <div className="container blog2 pb-5">
            <div className="">
              <div className="covid text-center">
                <h2 className="mt-2 h2-fs">
                  Which personal trainer{" "}
                  <span className="m-0 text-blue-color">certification</span> is
                  best?
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12 d-none d-md-block">
                  <div className="describe">
                    <p>
                      Our Dietitian And Personal Training Course Are Recognized
                      By The International Accreditation Certificate (Iao) For
                      The Achievement Of The Highest Standards Of Organizational
                      Management, Academic Management, And Institutional
                      Performance Through A Commitment To Quality And Continuous
                      Improvement That Is What Makes Us Unique And Well Known
                      For Your The Best Fitness Trainer Course In India Or You
                      Can Say Best Sports Nutrition Certification. You'll Get A
                      Certificate Once You Have Completed The Course Which Is
                      Valid In 192 Countries. FGIIT has also received approval
                      by Sports, Physical education, Fitness & Leisure sector
                      skill council (SPEFL-SC) and National Skill Development
                      Council. After getting a Certificate from FGIIT, it
                      assures the public and the employers that the candidate
                      holds valid and appropriate qualifications to perform his
                      roles effectively and safely in public interest.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 d-none d-md-block">
                  <div className="describe">
                    <p>
                      <b>
                        There Are Many Questions That Arise In Your Mind Like:
                      </b>
                    </p>
                    <p>
                      <i className="fa fa-arrow-right"></i> Is It A Personal
                      Trainer Course In India ?
                      <br /> <i className="fa fa-arrow-right"></i> What Is
                      Fitness Trainer Certification Courses/gym Trainer
                      Certified Course ?
                      <br /> <i className="fa fa-arrow-right"></i> Importance Of
                      Certified Fitness Trainer Course ?
                      <br /> <i className="fa fa-arrow-right"></i> What Are The
                      Nutritionist Course Fees/food And Nutrition Course ?
                    </p>
                    <p>
                      All The Answers Are With Us. Contact Us And Get Your
                      Queries Solved Today
                    </p>
                  </div>
                </div>
                <div className="d-block d-md-none">
                  <div className="col-12">
                    <p className="text-muted mb-0">
                      Our Dietitian And Personal Training Course Are Recognized
                      By The International Accreditation Certificate (Iao) For
                      The Achievement Of The Highest Standards Of Organizational
                      Management, Academic Management, And Institutional
                      Performance Through A Commitment To Quality And Continuous
                      Improvement That Is What Makes Us Unique And Well Known
                      For Your The Best Fitness Trainer Course In India Or You
                      Can Say Best Sports Nutrition Certification. You'll Get A
                      Certificate Once You Have Completed
                    </p>
                    <div className="d-block d-md-block">
                      {showMore ? (
                        <div className="m-0 text-muted">
                          <p>
                            {" "}
                            The Course Which Is Valid In 192 Countries.FGIIT has
                            also received approval by Sports, Physical
                            education, Fitness & Leisure sector skill council
                            (SPEFL-SC) and National Skill Development Council.
                            After getting a Certificate from FGIIT, it assures
                            the public and the employers that the candidate
                            holds valid and appropriate qualifications to
                            perform his roles effectively and safely in public
                            interest.
                          </p>
                          <p>
                            <b>
                              There Are Many Questions That Arise In Your Mind
                              Like:
                            </b>
                          </p>
                          <p>
                            - Is It A Personal Trainer Course In India ?
                            <br /> - What Is Fitness Trainer Certification
                            Courses/gym Trainer Certified Course ?
                            <br /> - Importance Of Certified Fitness Trainer
                            Course ?
                            <br /> - What Are The Nutritionist Course Fees/food
                            And Nutrition Course ?
                          </p>
                          <p>
                            All The Answers Are With Us. Contact Us And Get Your
                            Queries Solved Today
                          </p>
                        </div>
                      ) : (
                        <span id="dotsr">...</span>
                      )}
                      <div className="mt-3">
                        <a
                          id="myBtnrb"
                          className="text-primary m-0 my-sm-2 mb-md-1"
                          onClick={toggleReadMorei}
                        >
                          {showMore ? "Read less" : "Read more"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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
              <div className="col-lg-6 d-flex align-items-center">
                <div className="row mb-3">
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/mobile-all-logo.webp"
                      }
                      className="lazy"
                      width="100%"
                      alt="all logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <PartnerLogo />
      <section>
        <div className="container-fluid margintop">
          <div className="container blog2 pb-5">
            <div className="">
              <div className="row">
                <div className="col-lg-5">
                  <div
                    className="covid text-center describe"
                    style={{ position: "sticky", top: "120px" }}
                  >
                    <h2 className="mt-2 h2-fs">
                      <span className="m-0 text-blue-color">
                        The Benefits of
                      </span>{" "}
                      Offline Courses for Fitness Training
                    </h2>
                    <p>
                      Discover the advantages of offline fitness
                      courses-hands-on training, expert guidance, and real-time
                      motivation for better results! Get personalized feedback,
                      improve techniques, and stay accountable.
                    </p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="describe">
                    <div className="d-flex">
                      <div className="mt-3">
                        <span className="benefit-star">
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                      </div>
                      <div>
                        <div className="mt-3 ml-2">
                          <h5 style={{ fontWeight: "700" }}>
                            Offline Fitness Edge:
                          </h5>
                        </div>
                        <p
                          className="mt-0 d-md-block d-none"
                          style={{ fontSize: "15px", lineHeight: "30px" }}
                        >
                          Given the appeal of online learning, offline courses
                          continue offer unique benefits, particularly in the
                          field of nutrition and fitness. These in-person
                          programs are ideal for aspiring fitness professionals
                          as they give practical experience, interaction with
                          trainers, and real-time feedback.
                        </p>
                        <p
                          className="mt-0 d-md-none d-block"
                          style={{ fontSize: "15px", lineHeight: "30px" }}
                        >
                          {!showMore &&
                            "Given the appeal of online learning, offline courses continue offer unique benefits,"}
                          <b className="">
                            {showMore ? (
                              <p className="mt-0">
                                Given the appeal of online learning, offline
                                courses continue offer unique benefits,
                                particularly in the field of nutrition and
                                fitness. These in-person programs are ideal for
                                aspiring fitness professionals as they give
                                practical experience, interaction with trainers,
                                and real-time feedback.
                              </p>
                            ) : (
                              <b id="dotsr" className="mx-1">
                                ...
                              </b>
                            )}
                            <b className="mt-3">
                              <a
                                id="myBtnrb"
                                className="text-primary m-0 my-sm-2 mb-md-1 ms-1"
                                onClick={toggleReadMorei}
                              >
                                {showMore ? "Read less" : "Read more"}
                              </a>
                            </b>
                          </b>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mt-3">
                        <span className="benefit-star">
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                      </div>
                      <div>
                        <div className="mt-3 ml-2">
                          <h5 style={{ fontWeight: "700" }}>
                            Hands-On Fitness:
                          </h5>
                        </div>
                        <p
                          className="mt-0 d-md-block d-none"
                          style={{ fontSize: "15px", lineHeight: "30px" }}
                        >
                          Offline courses offer practical learning, unlike
                          online classes with videos. In-person training allows
                          hands-on practice and technique refinement with expert
                          guidance, essential for mastering strength and
                          personal coaching.
                        </p>
                        <p
                          className="mt-0 d-md-none d-block"
                          style={{ fontSize: "15px", lineHeight: "30px" }}
                        >
                          {!showMore &&
                            "Offline courses offer practical learning, unlike online classes with videos. In-person"}
                          <b className="">
                            {showMore ? (
                              <p className="mt-0">
                                Offline courses offer practical learning, unlike
                                online classes with videos. In-person training
                                allows hands-on practice and technique
                                refinement with expert guidance, essential for
                                mastering strength and personal coaching.
                              </p>
                            ) : (
                              <b id="dotsr" className="mx-1">
                                ...
                              </b>
                            )}
                            <b className="mt-3">
                              <a
                                id="myBtnrb"
                                className="text-primary m-0 my-sm-2 mb-md-1 ms-1"
                                onClick={toggleReadMorei}
                              >
                                {showMore ? "Read less" : "Read more"}
                              </a>
                            </b>
                          </b>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mt-3">
                        <span className="benefit-star">
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                      </div>
                      <div>
                        <div className="mt-3 ml-2">
                          <h5 style={{ fontWeight: "700" }}>
                            Fitness Networking:
                          </h5>
                        </div>
                        <p
                          className="mt-0 d-md-block d-none"
                          style={{ fontSize: "15px", lineHeight: "30px" }}
                        >
                          Networking is a key benefit of offline courses.
                          Attending fitness and nutrition classes in person
                          connects you with peers, industry experts, and
                          potential employers, creating opportunities for
                          mentorship and career growth.
                        </p>
                        <p
                          className="mt-0 d-md-none d-block"
                          style={{ fontSize: "15px", lineHeight: "30px" }}
                        >
                          {!showMore &&
                            "Networking is a key benefit of offline courses. Attending fitness and nutrition class"}
                          <b className="">
                            {showMore ? (
                              <p className="mt-0">
                                Networking is a key benefit of offline courses.
                                Attending fitness and nutrition classes in
                                person connects you with peers, industry
                                experts, and potential employers, creating
                                opportunities for mentorship and career growth.
                              </p>
                            ) : (
                              <b id="dotsr" className="mx-1">
                                ...
                              </b>
                            )}
                            <b className="mt-3">
                              <a
                                id="myBtnrb"
                                className="text-primary m-0 my-sm-2 mb-md-1 ms-1"
                                onClick={toggleReadMorei}
                              >
                                {showMore ? "Read less" : "Read more"}
                              </a>
                            </b>
                          </b>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mt-3">
                        <span className="benefit-star">
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                      </div>
                      <div>
                        <div className="mt-3 ml-2">
                          <h5 style={{ fontWeight: "700" }}>Stay Motivated:</h5>
                        </div>
                        <p
                          className="mt-0 d-md-block d-none"
                          style={{ fontSize: "15px", lineHeight: "30px" }}
                        >
                          Offline courses boost motivation and accountability.
                          Regular class attendance keeps you focused and
                          disciplined, while direct interactions with
                          instructors offer instant support, ensuring steady
                          progress toward your goals.
                        </p>
                        <p
                          className="mt-0 d-md-none d-block"
                          style={{ fontSize: "15px", lineHeight: "30px" }}
                        >
                          {!showMore &&
                            "Offline courses boost motivation and accountability. Regular class attendance keeps"}
                          <b className="">
                            {showMore ? (
                              <p className="mt-0">
                                Offline courses boost motivation and
                                accountability. Regular class attendance keeps
                                you focused and disciplined, while direct
                                interactions with instructors offer instant
                                support, ensuring steady progress toward your
                                goals.
                              </p>
                            ) : (
                              <b id="dotsr" className="mx-1">
                                ...
                              </b>
                            )}
                            <b className="mt-3">
                              <a
                                id="myBtnrb"
                                className="text-primary m-0 my-sm-2 mb-md-1 ms-1"
                                onClick={toggleReadMorei}
                              >
                                {showMore ? "Read less" : "Read more"}
                              </a>
                            </b>
                          </b>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mt-3">
                        <span className="benefit-star">
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                      </div>
                      <div>
                        <div className="mt-3 ml-2">
                          <h5 style={{ fontWeight: "700" }}>
                            Certify with Confidence:
                          </h5>
                        </div>
                        <p
                          className="mt-0 d-md-block d-none"
                          style={{ fontSize: "15px", lineHeight: "30px" }}
                        >
                          For those pursuing certifications, hands-on
                          assessments in fitness and nutrition courses can
                          significantly improve skill retention and confidence.
                          This practical experience is invaluable in delivering
                          quality training to future clients.
                        </p>
                        <p
                          className="mt-0 d-md-none d-block"
                          style={{ fontSize: "15px", lineHeight: "30px" }}
                        >
                          {!showMore &&
                            "For those pursuing certifications, hands-on assessments in fitness and nutrition cour"}
                          <b className="">
                            {showMore ? (
                              <p className="mt-0">
                                For those pursuing certifications, hands-on
                                assessments in fitness and nutrition courses can
                                significantly improve skill retention and
                                confidence. This practical experience is
                                invaluable in delivering quality training to
                                future clients.
                              </p>
                            ) : (
                              <b id="dotsr" className="mx-1">
                                ...
                              </b>
                            )}
                            <b className="mt-3">
                              <a
                                id="myBtnrb"
                                className="text-primary m-0 my-sm-2 mb-md-1 ms-1"
                                onClick={toggleReadMorei}
                              >
                                {showMore ? "Read less" : "Read more"}
                              </a>
                            </b>
                          </b>
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="mt-3">
                        <span className="benefit-star">
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                      </div>
                      <div>
                        <div className="mt-3 ml-2">
                          <h5 style={{ fontWeight: "700" }}>
                            Boost Fitness Career:
                          </h5>
                        </div>
                        <p
                          className="mt-0 d-md-block d-none"
                          style={{ fontSize: "15px", lineHeight: "30px" }}
                        >
                          If you want to excel in the fitness industry,
                          investing in offline courses is a great step toward
                          building a successful and credible career.
                        </p>
                        <p
                          className="mt-0 d-md-none d-block"
                          style={{ fontSize: "15px", lineHeight: "30px" }}
                        >
                          {!showMore &&
                            "If you want to excel in the fitness industry, investing in offline courses is a great"}
                          <b className="">
                            {showMore ? (
                              <p className="mt-0">
                                want to excel in the fitness industry, investing
                                in offline courses is a great step toward
                                building a successful and credible career.
                              </p>
                            ) : (
                              <b id="dotsr" className="mx-1">
                                ...
                              </b>
                            )}
                            <b className="mt-3">
                              <a
                                id="myBtnrb"
                                className="text-primary m-0 my-sm-2 mb-md-1 ms-1"
                                onClick={toggleReadMorei}
                              >
                                {showMore ? "Read less" : "Read more"}
                              </a>
                            </b>
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <StudentResponse /> */}
      {/* <PlacementReview /> */}
      {/* <section>
        <div className="container-fluid margintop">
          <div className="container blog2 pb-3 pt-4">
            <div className="covid text-center">
              <h2 className="h2-fs" style={{ color: "#333" }}>
                <span className="m-0 text-blue-color">Convocation</span>{" "}
                Segment
              </h2>
              <div className="thm-bg-clr dector mb-md-4 mb-3"></div>
            </div>
            <div className="row">
              <div className="col-lg-4 ">
                <div className="">
                  <iframe
                    width="100%"
                    height="200px"
                    style={{ borderRadius: "10px" }}
                    src="https://www.youtube.com/embed/aXjjkNTs2LE?si=fHBv2b3KW1sL1w95"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <iframe
                    width="100%"
                    height="200px"
                    style={{ borderRadius: "10px" }}
                    src="https://www.youtube.com/embed/RgFDbYTzWI0?si=bFZkbu2nHStGyYUp"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <iframe
                    width="100%"
                    height="200px"
                    style={{ borderRadius: "10px" }}
                    src="https://www.youtube.com/embed/HVHH_GkOmH4?si=AuQpQL0UKhwgbmMi"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <OutstandingReview /> */}
      <section className="margintop d-none d-md-block">
        <div className="container-fluid p-0">
          <div className="col-md-12 p-0">
            <Link to="/alumini-fgiit">
              <img
                alt="Fitness And Nutrition Courses"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/alumina-banner.webp"
                }
                width="100%"
                className="lazy"
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
      {/* <section className="margintop d-block d-md-none">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#f9f3f3", padding: "50px 0px" }}
        >
          <div className="container">
            <div className="tabata mb-4 text-center">
              <h2 className="h2-fs">Partner Brands For Job Placement</h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <div id="owl-demo11" className="text-center">
              <div className="item mx-3">
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/stallon.webp"
                    }
                    className="gomzi lazy"
                    alt="Fitness And Nutrition Courses"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Stallone Gym
                  </p>
                </div>
                <div className="tabata imgty mt-5">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/mahaveer.webp"
                    }
                    className="gomzi lazy"
                    alt="Fitness And Nutrition Courses"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Mahavir Hospital
                  </p>
                </div>
              </div>
              <div className="item mx-3">
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/gomzi1.webp"
                    }
                    className="gomzi lazy"
                    alt="Fitness And Nutrition Courses"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Fitness With Gomzi
                  </p>
                </div>
                <div className="tabata imgty mt-5">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/img/js.webp"}
                    className="gomzi lazy"
                    alt="Fitness And Nutrition Courses"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    JS Fitness
                  </p>
                </div>
              </div>
              <div className="item mx-3">
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/spartena.webp"
                    }
                    className="gomzi lazy"
                    alt="Fitness And Nutrition Courses"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Sportina Gym
                  </p>
                </div>
                <div className="tabata imgty mt-5">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/shapers.webp"
                    }
                    className="gomzi lazy"
                    alt="Fitness And Nutrition Courses"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Shapers Gym
                  </p>
                </div>
              </div>
              <div className="item mx-3">
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/beastin-gym.webp"
                    }
                    className="gomzi lazy"
                    alt="Fitness And Nutrition Courses"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Beastin Gym
                  </p>
                </div>
                <div className="tabata imgty mt-5">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/titan-fitness.webp"
                    }
                    className="gomzi lazy"
                    alt="Fitness And Nutrition Courses"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Titan Fitness
                  </p>
                </div>
              </div>
              <div className="item mx-3">
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/b-natural.webp"
                    }
                    className="gomzi lazy"
                    alt="Fitness And Nutrition Courses"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    B Natural Gym
                  </p>
                </div>
                <div className="tabata imgty mt-5">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/muscle-mind.webp"
                    }
                    className="gomzi lazy"
                    alt="Fitness And Nutrition Courses"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Muscle And Mind
                  </p>
                </div>
              </div>
              <div className="item mx-3">
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/av-fitness.webp"
                    }
                    className="gomzi lazy"
                    alt="Fitness And Nutrition Courses"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    AV Fitness
                  </p>
                </div>
                <div className="tabata imgty mt-5">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/fgdigital-1.webp"
                    }
                    className="gomzi lazy"
                    alt="Fitness And Nutrition Courses"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    FG Digital
                  </p>
                </div>
              </div>
              <div className="item mx-3">
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/sahyog.webp"
                    }
                    className="gomzi lazy"
                    alt="Fitness And Nutrition Courses"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Sahyog clinic
                  </p>
                </div>
                <div className="tabata imgty mt-5">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/img/w8.webp"}
                    className="gomzi lazy"
                    alt="Fitness And Nutrition Courses"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    W8 Fitness
                  </p>
                </div>
              </div>
              <div className="item mx-3">
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/green-leaf.webp"
                    }
                    className="gomzi lazy"
                    alt="Fitness And Nutrition Courses"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    green leaf hospital
                  </p>
                </div>
                <div className="tabata imgty mt-5">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/hercules.webp"
                    }
                    className="gomzi lazy"
                    alt="Fitness And Nutrition Courses"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    hercules fitness
                  </p>
                </div>
              </div>
              <div className="item mx-3">
                <div className="tabata imgty">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/COUNTRY-SIDE.webp"
                    }
                    className="gomzi lazy"
                    alt="Fitness And Nutrition Courses"
                  />
                  <p
                    style={{ color: "black", fontWeight: "bold" }}
                    className="mt-4"
                  >
                    Countryside International School
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="margintop">
        <div className="container-fluid">
          <div className="container blog">
            <div className="Info">
              <h2 className="h2-fs">FGIIT *Terms & Conditions :</h2>
            </div>
            <div className="Grocery1">
              <ul className="pl-3">
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
                  Certification Will Be Provided After A 150 Marks Exam
                  Consisting Of 100 Marks Of MCQ, 2 Projects of 25 marks each.
                  You, Will, Be Given 2 Attempts For The Exam Only If You Fail
                  The Exam. In Case If You Have Not Completed The Course Or Are
                  Left With Studying Or Didn't Appear For The Exam For The Same,
                  You Have To Inform The Mentor's Priory And Extend Your Time By
                  1 Month After Paying <b style={{ color: "red" }}>2700/-</b> As
                  Plan-Extension Fee.
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
                    You have to pay <b style={{ color: "red" }}>2700/-</b> as
                    exam reschedule charges and still will be liable to submit
                    your project prior 5 days of the examination.
                  </b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
      <Blogs />
      <section className="margintop d-block d-md-none">
        <div className="container-fluid p-0">
          <div className="col-md-12 p-0">
            <Link to="/alumini-fgiit">
              <img
                alt="Fitness And Nutrition Courses"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/alumina-mobile-banner.webp"
                }
                width="100%"
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
                alt="Fitness And Nutrition Courses"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid margintop">
          <div className="container faq">
            <div className="mb-5">
              <h2 className="h2-fs">FAQ'S</h2>
            </div>
            <div id="accordion">
              <div className="card border mt-3">
                <div className="card-header">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                          style={{ fontSize: "20px" }}
                        >
                          Is It A{" "}
                          <Link to="/blogs/gym-trainer-course">
                            Gym Trainer Course?
                          </Link>
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div className="colla" data-parent="#accordion">
                  <div className="card-body">
                    Yes, we offer you a personal trainer-certified course in
                    India, that is valid in 192 countries. Our Syllabus is Human
                    Anatomy, Human Physiology, Movements Muscle and exercise,
                    Practical exercise sessions, Scheduling of exercise, Differ
                    energy system, Types of Grips in exercises, Biomechanical
                    implementation, Principles of Exercises, Client
                    responsibilities, Types of Bars, Functional Training Posture
                    Analysis and it's exercise prescription, Injuries
                    Sport-specific training, TRX Workout, Anabolic-Androgenic
                    Steroids, Basics Of Dietetics, Job placement & Interview
                    training.
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn collapsed"
                          data-toggle="collapse"
                          aria-expanded="false"
                        >
                          Is This A Food And Nutritionist Course?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  className="colla"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Yes, it gives you a brief about the nutritional value of
                    diets that can help you to build your career in the field of
                    fitness we offer basic of dietetics, Therapeutic Nutrition,
                    Weight management, supplement, Sports Nutrition, Practical
                    diet making, and Practical Consultation.
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn collapsed"
                          data-toggle="collapse"
                          aria-expanded="false"
                        >
                          Does Anabolic Steroid Is A Part Of The Offered DPT
                          Course?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  className="colse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Yes, we give the knowledge about how steroids are used and
                    under what circumstances one should take them. We offer
                    Practical Module, Types of substance, What is Half-life?,
                    Fat Loss Cycle, Muscle Building Cycle, Safety Drugs, Post
                    Cycle Therapy, Sports Supplants, Exercise planning.
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
                          What Makes This DPT Certification As The Best
                          Certified Course In India?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefour"
                  className="colle"
                  aria-labelledby="headingfour"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Our certification is affiliated with IAO which is valid in
                    192 countries and that is what makes us the to deliver you
                    the best-certified nutritionist & fitness trainer course in
                    India. with experience of 8+ years, Our faculties work in
                    the same industry so that they can give the brief knowledge
                    about the course and doubts you get.
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
                          What Is Included In Certified Tabata Course, Certified
                          Functional Training, Certified TRX Course?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefive"
                  className="colle"
                  aria-labelledby="headingfive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    These are one the very few and Rare courses that are being
                    offered to you and we are offering them to the best for your
                    knowledge all over India.
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
                          How is the course delivered?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefive"
                  className="colle"
                  aria-labelledby="headingfive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    The course combines offline classroom sessions, live Zoom
                    classes, and recorded video lectures. E-books and other
                    study materials are provided for additional support.
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
                  className="colle"
                  aria-labelledby="headingfive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    FGIIT's course includes unique topics such as group
                    instructor training, anabolics and androgenic steroids,
                    powerlifting, and injury rehabilitation. This makes FGIIT
                    the most knowledgeable and value-for-money course in the
                    industry.
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
                          Does FGIIT offer job placement support?
                          <i className="fas fa-chevron-down arrow fs-16"></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefive"
                  className="colle"
                  aria-labelledby="headingfive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Yes, FGIIT provides 100% placement support, assisting
                    students in securing employment with top firms in the
                    fitness industry.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactInquiryForm note={"Offline Course Page Inquiry"} />
      {/* Modal  */}
      <Modal show={showModal} onHide={handlePopupClose} centered>
        <div className="modal-content">
          <Modal.Header closeButton>
            <Modal.Title>
              <h2 className="modal-title h4-fs">Fill this Form</h2>
            </Modal.Title>
          </Modal.Header>
          <div className="modal-body">
            <Form>
              <div className="form-group">
                <label>Name</label>
                <input
                  className="form-control"
                  name="modalName"
                  value={formData.modalName}
                  onChange={handleChange}
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  name="modalEmail"
                  value={formData.modalEmail}
                  onChange={handleChange}
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input
                  className="form-control"
                  name="modalContactNumber"
                  value={formData.modalContactNumber}
                  onChange={handleChange}
                  placeholder="Enter Your Contact Number"
                />
              </div>
              <p className="mb-0 mt-4">Select Course</p>
              <select
                className="form-control mt-2"
                name="modalSelectedCourse"
                value={formData.modalSelectedCourse}
                onChange={handleChange}
              >
                <option value="" hidden>
                  Select Course
                </option>
                <option value="Nutri Trainer Course">
                  Nutri Trainer Course
                </option>
                <option value="Anabolic Androgenic Steroids">
                  Anabolic Androgenic Steroids
                </option>
                <option value="Diploma In Personal Training course">
                  Diploma In Personal Training course
                </option>
                <option value="Diploma In Nutrition course">
                  Diploma In Nutrition course
                </option>
                <option value="Group Instructor Workshop">
                  Group Instructor Workshop
                </option>
                <option value="Injury Rehabilitation Workshop">
                  Injury Rehabilitation Workshop
                </option>
                {/* <option value="Advance Clinical Nutrition Workshop">
                  Advance Clinical Nutrition Workshop
                </option> */}
              </select>
              <p className="mb-0 mt-4">Write Your Message</p>
              <textarea
                placeholder="Message"
                className="form-control mt-2"
                name="modalMessage"
                value={formData.modalMessage}
                onChange={handleChange}
              ></textarea>
            </Form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={sendModalContactInquiry}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
      <FgiitFooter />
    </>
  );
}

export default FitnessAndNutritionCourses;
