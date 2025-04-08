import React, { useEffect, useState } from "react";
import FgiitHeader from "../../components/partials/Header/fgiitheader";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import { sendInquiry } from "../../assets/js/utils/contact-us";
import Modal from "react-bootstrap/Modal";
import ModalVideo from "react-modal-video";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import ContactButtonFGIIT from "../../assets/js/utils/contactUsFgiit";
import { Form, Link } from "react-router-dom";
import StudentStats from "../../components/fgiit/studentStats";
import Teachers from "../../components/fgiit/teachers";
import PartnerLogo from "../../components/fgiit/partnerLogo";
import Blogs from "../../components/fgiit/blogs";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import WhatMakesUs from "../../components/fgiit/what-makes-us";
import OurAllCourses from "../../components/fgiit/our-all-courses";
import CoursesInclude from "../../components/fgiit/courses-include";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import ContactInquiryForm from "../../components/fgiit/contactInquiryForm";
import AllReviews from "../../components/fgiit/allReviews";
// import whatMakesUs from "../../components/fgiit/whatMakesUs";

function FitnessCourses() {
  const canonicalUrl = window.location.href;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [showScholarshipModal, setShowScholarshipModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalRef, setShowModalRef] = useState(false);
  const [formDataRef, setFormDataRef] = useState({
    modalRefname: "",
    modalRefnumber: "",
    modalSelectedCourse: "",
  });
  // const canonicalUrl = window.location.href;
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
    setShowModal(false);
  };

  const handleCloseTeacher = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const bookFreeAppointmentWithBestDietitianInquiry = async () => {
    try {
      const name = formData.modalName;
      const phoneNumber = formData.modalContactNumber;
      const email = formData.modalEmail;
      const teaching_field = formData.modalSelectedCourse;
      var message = formData.modalMessage;
      message =
        `Teaching Field: ${teaching_field}` +
        (message ? "\nMessage: " + message : "");
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "Become An Instructor",
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
        modalSelectedCourse: "",
        modalMessage: "",
      });
      handleClose();
    } catch (error) {
      console.error(error);
    }
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
      }, 10000);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  const [showMore, setShowMore] = useState(false);

  const toggleReadMorei = () => {
    setShowMore(!showMore);
  };

  const [showMore2, setShowMore2] = useState(false);
  const toggleReadMore2 = () => {
    setShowMore2(!showMore2);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the time as needed
  }, []);

  const testimonials = [
    {
      name: "Divya Chauhan",
      description:
        "Divya review describes her journey in the FGIIT Diploma in Personal Training course. She discusses how the course transformed her understanding of fitness and exercise science, emphasizing the supportive instructors and in-depth curriculum that covered strength training, anatomy, and client assessments.",
      videoUrl: "OAvT2XECZq8",
      imageUrl: "/assets/images/fgiit/student-review/divya-chauhan.webp",
      date: "13 January 2025",
    },
    {
      name: "Bhargavraj Parmar",
      description:
        "Bhargavraj describes the Diploma in Nutrition as life-changing. In her video, she discusses how the program improved her knowledge of healthy eating habits and the role of nutrition in disease management. Bhargavraj highlights the professionalism of the instructors and the value of the course material.",
      videoUrl: "a17jKkAjQB4",
      imageUrl: "/assets/images/fgiit/student-review/bhargvaraj.webp",
      date: "28 December 2024",
    },
    {
      name: "Kaushik Parmar",
      description:
        "Kaushik talks about how FGIIT's Personal Training course helped him switch careers. In his review, he praises the hands-on training and detailed instruction on exercise physiology. He also shares how the course enhanced his ability to design effective fitness programs tailored to individual goals.",
      videoUrl: "IIG46Av6HQc",
      imageUrl: "/assets/images/fgiit/student-review/kp-dpt.webp",
      date: "7 September 2024",
    },
    {
      name: "Mohsina",
      description:
        "Mohsina shares her positive experience with FGIIT's course, mentioning how it covered everything from beginner fitness levels to advanced strength training techniques. She enjoyed the balance between classroom learning and practical application, which helped her understand client needs better.",
      videoUrl: "vbQgsE_1Fcc",
      imageUrl: "/assets/images/fgiit/student-review/mohsina.webp",
      date: "13 March 2024",
    },
    {
      name: "Satish Nishad",
      description:
        "In Satish review, he highlights how the Diploma in Personal Training at FGIIT expanded his knowledge beyond basic training techniques. He found the modules on injury prevention and rehabilitation particularly useful for working with a variety of clients safely and effectively.",
      videoUrl: "NN8TOL_pwOk",
      imageUrl: "/assets/images/fgiit/student-review/satish-dpt.webp",
      date: "23 February 2025",
    },
  ];

  const handlePopupClose = () => {
    setShowModalRef(false);
  };

  const actionReferAndEarnSubmit = async () => {
    try {
      const name = formDataRef.modalRefname;
      const phoneNumber = formDataRef.modalRefnumber;
      const courses = formDataRef.modalSelectedCourse;
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
      setFormDataRef({
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

  const refopenForm = () => {
    setShowModalRef(true);
  };
  return (
    <>
      <Helmet>
        <title>Top Fitness Courses for Trainers & Enthusiasts</title>
        <meta
          name="description"
          content="Boost your skills with top fitness courses for trainers & enthusiasts. Get certified and advance your career in the fitness industry!"
        />
        <meta
          name="keyword"
          content="course, trainer course, fitness trainer course, personal training, nutrition course, certificate in personal training, personal trainer training, certificate in fitness, fitness trainer certification, personal trainer training course, personal trainer course, online fitness trainer, dietician course, gym with personal trainer, dietician course online, fitness coach online, personal training gym, personal fitness trainer course, personal fitness certification, nutrition and dietetics course, online gym trainer, fitness course, trainer certification, online personal training, fitness certification, certified personal trainer, gym trainer course, online fitness certification, sports nutrition course, health coach certification, fitness diploma, best personal trainer course, advanced personal training course, certified gym trainer, sports science certification, professional fitness trainer, fitness coaching program, accredited fitness course, functional training certification, strength coach certification, certified fitness coach, online personal trainer course, professional personal trainer, diploma in fitness training, advanced fitness trainer course, gym instructor certification, sports nutrition certification, best fitness trainer certification, strength and conditioning course, exercise science certification"
        />
        <meta
          property="og:title"
          content="Top Fitness Courses for Trainers & Enthusiasts"
        />
        <meta
          property="og:description"
          content="Boost your skills with top fitness courses for trainers & enthusiasts. Get certified and advance your career in the fitness industry!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fgiit/fitness-courses"
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
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1144699046738070&ev=PageView&noscript=1" />'
          }
        </noscript>

        {/* Event snippet for Contact conversion page */}
        {/* Google tag (gtag.js) */}
        {/* <script>
          {`gtag('event', 'conversion', {'send_to': 'AW-808688949/lgOgCKWJu4ACELW6zoED'});`}
        </script> */}

        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-808688949"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-808688949');
          `}
        </script> */}
      </Helmet>
      <p className="d-none">
        course, trainer course, fitness trainer course, personal training,
        nutrition course, certificate in personal training, personal trainer
        training, certificate in fitness, fitness trainer certification,
        personal trainer training course, personal trainer course, online
        fitness trainer, dietician course, gym with personal trainer, dietician
        course online, fitness coach online, personal training gym, personal
        fitness trainer course, personal fitness certification, nutrition and
        dietetics course, online gym trainer, fitness course, trainer
        certification, online personal training, fitness certification,
        certified personal trainer, gym trainer course, online fitness
        certification, sports nutrition course, health coach certification,
        fitness diploma, best personal trainer course, advanced personal
        training course, certified gym trainer, sports science certification,
        professional fitness trainer, fitness coaching program, accredited
        fitness course, functional training certification, strength coach
        certification, certified fitness coach, online personal trainer course,
        professional personal trainer, diploma in fitness training, advanced
        fitness trainer course, gym instructor certification, sports nutrition
        certification, best fitness trainer certification, strength and
        conditioning course, exercise science certification
      </p>
      <WhatsappHeaderApp
        message={"Hello, I wanted to know more about FGIIT Courses. "}
        options={{ pageRef: true }}
      />
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <FgiitHeader />
      {/* {showScholarshipModal && <ScholarshipModal />} */}
      <section style={{ marginTop: "70px" }}>
        <div className="container-fluid p-0">
          <OwlCarousel
            loop
            autoplay
            dots={false}
            id="carouselExampleControls"
            className="owl-carousel owl-theme"
            data-ride="carousel"
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
                className="d-none d-md-block w-100 lazy"
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/banner6_2.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
              <img
                className="d-block d-md-none w-100 lazy"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile6-2.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
            </div>
            <div className="item">
              <img
                className="d-none d-md-block lazy"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/new-fgiit-banner.webp"
                }
                alt="Fg Group"
                width="100%"
              />
              <img
                className="d-block d-md-none w-100 lazy"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/new-fgiit-mobile.webp"
                }
                alt="Fg Group"
              />
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section>
        <div className="container-fluid mt-5">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="forh">
                  <h2 className="h3-fs">FGIIT Skill Development Institute</h2>
                </div>
                <div className="describe d-none d-md-block">
                  <p className="ml-0 fs-16">
                    At FGIIT, we provide skills and knowledge necessary to excel
                    in your particular industry with variety of courses.
                  </p>
                </div>
                <div className="describe d-block d-md-none">
                  <p className="ml-0 my-2 fs-14">
                    At FGIIT, we provide skills and knowledge necessary to excel
                    in your particular industry with variety of courses.
                  </p>
                </div>
                <div className="text-center mt-4 mt-md-3 btn-for">
                  <a href="#allcourse" className="btn mb-2 mb-md-3">
                    Know more about our courses
                  </a>
                  <Link
                    to="/fgiit/lead-form"
                    className="btn btn-forh"
                    style={{ fontWeight: "600" }}
                  >
                    Book a live Demo lecture
                  </Link>
                </div>
                <div className="tabata text-center mt-4">
                  <div className="forh">
                    <h2 className="h3-fs font-size-22">
                      We are also approved by the government.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-md-flex align-items-center">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/fgiit/skill.png"
                  }
                  alt="FG Group"
                  width="100%"
                  className="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurAllCourses />
      <WhatMakesUs />
      <AllReviews />
      <StudentStats />
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs">
                our all demo
                <span className="m-0 text-blue-color"> Certificates</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
            <OwlCarousel
              loop
              autoPlay
              dots={false}
              id="owl-diploma"
              className="owl-carousel owl-theme"
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
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/cpt_demo.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />
                <div className="text-center mt-3">
                  <h2 className="h4-fs">Diploma In Personal Training</h2>
                </div>
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/cnc_demo.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />
                <div className="text-center mt-3">
                  <h2 className="h4-fs">Diploma In Nutrition</h2>
                </div>
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/gir-demo.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />
                <div className="text-center mt-3">
                  <h2 className="h4-fs">Group Instructor Masterclass</h2>
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
                    process.env.PUBLIC_URL + "/assets/images/img/aas_demo.webp"
                  }
                  alt="Certificates"
                  width="100%"
                  className="lazy"
                />
                <div className="text-center mt-3">
                  <h2 className="h4-fs">Anabolic Androgenic Steroids</h2>
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
                  <h2 className="h4-fs">Injury Rehabilitation Workshop</h2>
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
                  <h2 className="h4-fs">Advance Clinical Nutrition Workshop</h2>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="bg-blues">
        <div className="container-fluid pb-5 pt-3">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs">
                About <span className="m-0 text-blue-color"> Us</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
            <div className="row">
              <div className="col-lg-12 order-2">
                <div className="describe">
                  <div className="d-none d-md-block">
                    <b>
                      <p className="mt-0">
                        We Started These Online Nutrition Courses In India, To
                        Make The Fitness And Nutrition Industry-Main Streamline
                        After The 10th. A Student Who Wants To Follow Their
                        Passion And Earn Money Simultaneously Can Register For
                        Our Online Nutrition Courses &amp; Online Personal
                        Training Courses. We explain the importance of the
                        Certified Fitness Trainer Course, Personal Trainer
                        Course In India, Nutritionist Course Online India.
                      </p>
                    </b>
                  </div>
                  <div className="mb-3 d-block d-md-none">
                    <p className="mb-0 text-muted">
                      We Started These Online Nutrition Courses In India, To
                      Make The Fitness And Nutrition Industry-Main Streamline
                      After The
                      {showMore ? (
                        <p className="m-0">
                          10th. A Student Who Wants To Follow Their Passion And
                          Earn Money Simultaneously Can Register For Our Online
                          Nutrition Courses Online Personal Training Courses. We
                          explain the importance of the Certified Fitness
                          Trainer Course, Personal Trainer Course In India,
                          Nutritionist Course Online India.So, What Are The Best
                          Certifications For Personal Trainers? We Are Entitled
                          To The Crown Of Top Institute For Online Nutrition
                          Courses And Dietician Courses Online In Surat. We
                          Provide Life Experiences In Our Online Personal
                          Trainer Courses, Which You'll Be Going To Face In
                          Front Of Your Clients And Patients Which Makes Us
                          Unique From Others.
                        </p>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <p
                      onClick={toggleReadMorei}
                      id="myBtnrg"
                      className="mt-1"
                      style={{ color: "#00afef", fontWeight: "500" }}
                    >
                      {showMore ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-6 mt-0 mb-2 text-center order-1">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/iao-certificate.webp"
                  }
                  style={{ border: "5px solid #35364B" }}
                  width="80%"
                  alt="IAO demo certificate"
                />

              </div> */}
              <div className="col-md-12 order-4">
                <div className="describe">
                  <div className="d-none d-md-block mt-3">
                    <b>
                      <p className="mt-0">
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
                  </div>
                  <div className="mb-3 d-block d-md-none">
                    <p className="mb-0 text-muted">
                      Personal Training Certification Helps You In Attaining
                      Customers At Fitness Centers And Gyms As Well. We Provide
                      All Resources And Content Online So You Can Experience
                      Online Learning With The FGInternational Institute Of
                      Teaching. You might be thinking about the Nutritionist
                      Course Fees right? Connect to us and get the best offers
                      for your future self.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 order-3">
                <div className="describe d-none d-md-block">
                  <p>
                    So, What Are The Best Certifications For Personal Trainers?
                    We Are Entitled To The Crown Of Top Institute For Online
                    Nutrition Courses And Dietician Courses Online In Surat. We
                    Provide Life Experiences In Our Online Personal Trainer
                    Courses, Which You'll Be Going To Face In Front Of Your
                    Clients And Patients Which Makes Us Unique From Others.
                  </p>
                </div>
              </div>
              <div className="row align-items-center order-3">
                <div className="col-md-12 text-center mb-lg-4 mb-3">
                  <h2 className="h2-fs">Our Institute Accreditation</h2>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  <div className="d-none d-md-block">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/all-logo.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="logo"
                    />
                  </div>
                  <div className="d-block d-md-none">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/mobile-all-logo.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-blues">
        <div className="container-fluid pb-md-5 pt-2">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs">
                demo
                <span className="m-0 text-blue-color"> lectures</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
            <div className="youtube-video">
              <OwlCarousel
                loop
                autoplay
                dots={false}
                id="carouselExampleControls"
                className="owl-carousel owl-theme"
                data-ride="carousel"
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
                  <div className="ply1 black-before">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/online-course-dpt.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="fggroup"
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("ZYoKVIfbJzY")}
                        className="custom"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="ply1 black-before">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/online-course-dnc.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="fggroup"
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("j6u_P9NYp4w")}
                        className="custom"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="ply1 black-before">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/online-course-aas.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="fggroup"
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("-9fBGDMO1S4")}
                        className="custom"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="ply1 black-before">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/functional_training.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="fggroup"
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("b-DhFdSpcEQ")}
                        className="custom"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="ply1 black-before">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/intro-injury-rehab.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="fggroup"
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("z9ULms1ia10")}
                        className="custom"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="ply1 black-before">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/intro-health-wellness.webp"
                      }
                      width="100%"
                      className="lazy"
                      alt="fggroup"
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("9ggHN60bYKo")}
                        className="custom"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section> */}
      <CoursesInclude />
      <Teachers />
      <section className="container-fluid dark-hero-section p-0 px-2 mt-md-5 mt-3">
        <div className="container-fluid px-0">
          <div className="row align-items-center">
            <div className="col-md-4 image-section p-0 d-md-none d-block">
              <img
                src="/assets/images/fgiit/fgiit-teach.webp"
                alt="Student Studying"
                className="img-fluid d-md-none d-block"
              />
            </div>
            <div className="col-md-8 text-section px-md-5 px-4 py-md-5 py-4 demoo">
              <div className="col-md-10">
                <div className="covid mb-3">
                  <h2 className="h2-fs text-white">
                    Become an{" "}
                    <span className="m-0 text-blue-color">Instructor</span>
                  </h2>
                </div>
                <p className="instructor m-0 text-white mb-2">
                  Are you a master of any particular skill and looking for a way
                  to teach it? FGIIT is bringing you an exclusive opportunity to
                  publish your course the way you want—whether offline, online,
                  or through books. Empower learners, build your brand, and earn
                  by sharing your expertise. With flexible teaching methods and
                  full creative control, you can design your course to fit your
                  style.
                </p>
                <p className="instructor m-0 text-white mb-2">
                  Join a growing community of passionate instructors and reach
                  students worldwide. Whether you prefer live sessions, recorded
                  content, or written materials, FGIIT provides the platform to
                  showcase your skills. Learn more about this opportunity
                  through this{" "}
                  <button
                    onClick={() => openVideoModal("n4qpFleFVJ8")}
                    className="custom text-white fw-bold"
                  >
                    video.
                  </button>
                </p>
                <button
                  className="btn btn-started mt-2"
                  onClick={handleOpenModal}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="">
            <div className="card bg-skill-border">
              <div className="card-header bg-skill bg-skill-border">
                <h2 className="h4-fs">FGIIT Skill Development</h2>
              </div>
              <div className="card-body tabata">
                <div className="row">
                  <div className="col-lg-12 order-2 order-lg-1">
                    <blockquote className="blockquote mb-0">
                      <p className="mt-2">
                        At FGIIT, we provide a variety of skill development
                        courses to help individuals excel in their chosen
                        industry. We offer courses approved by the government
                        and cater to the talent of Indian youth.
                        <span className="d-md-block d-none">
                          Our objective is to create opportunities and scope for
                          individuals who couldn't pursue education after the
                          10th class due to various constraints.
                        </span>
                      </p>
                      <h2 className="h4-fs mt-4">
                        {" "}
                        It is a process which enables the trainer and the
                        working age people to gain:
                      </h2>
                      <ul>
                        <li>
                          <i className="fa fa-arrow-right"></i> Knowledge And
                          Ability
                        </li>
                        <li>
                          <i className="fa fa-arrow-right"></i> Career Ethics
                        </li>
                        <li>
                          <i className="fa fa-arrow-right"></i> Skill Standards
                          Establishment
                        </li>
                        <li>
                          <i className="fa fa-arrow-right"></i> Good Working
                          Attitude
                        </li>
                      </ul>
                      <h2 className="h4-fs mt-4">Our courses include:</h2>
                      <ul>
                        <div className="d-md-block d-none">
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i>{" "}
                              Diploma in Personal Training Course:
                            </b>{" "}
                            This course helps individuals become certified
                            personal trainers who can create personalized
                            fitness programs, motivate clients, and guide them
                            towards their goals.
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i>{" "}
                              Diploma in Nutrition Course:
                            </b>{" "}
                            This course teaches students how to create diets for
                            clinically ill patients, focusing on fat loss and
                            muscle building.
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i> Gym
                              Training Certification:
                            </b>{" "}
                            Learn the necessary skills and knowledge for gym
                            training through this certification course.
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i>{" "}
                              Online Personal Training Certification:
                            </b>{" "}
                            Become a certified online personal trainer and learn
                            how to provide fitness guidance remotely.
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i>{" "}
                              Trainer Course:
                            </b>{" "}
                            Enhance your skills as a trainer through this
                            comprehensive course.
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i>{" "}
                              Nutritionist Certification:
                            </b>{" "}
                            Become a certified nutritionist by enrolling in this
                            course.{" "}
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i> Gym
                              Trainer Certification in India:
                            </b>{" "}
                            Learn the essentials of being a gym trainer in India
                            through this course.
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i> How
                              to Become a Certified Fitness Trainer:
                            </b>{" "}
                            Gain insights and guidance on becoming a certified
                            fitness trainer.
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i>{" "}
                              Personal Training Course:
                            </b>{" "}
                            Develop expertise in personal training by enrolling
                            in this course.
                          </li>
                          <li>
                            <b className="text-bold">
                              <i className="fa fa-angle-double-right"></i>{" "}
                              Personal Trainer at The Gym:
                            </b>{" "}
                            Discover opportunities as a personal trainer at The
                            Gym.
                          </li>
                        </div>

                        <div className="d-md-none d-block">
                          {showMore ? (
                            <>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i>{" "}
                                  Diploma in Personal Training Course:
                                </b>{" "}
                                This course helps individuals become certified
                                personal trainers who can create personalized
                                fitness programs, motivate clients, and guide
                                them towards their goals.
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i>{" "}
                                  Diploma in Nutrition Course:
                                </b>{" "}
                                This course teaches students how to create diets
                                for clinically ill patients, focusing on fat
                                loss and muscle building.
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i>{" "}
                                  Gym Training Certification:
                                </b>{" "}
                                Learn the necessary skills and knowledge for gym
                                training through this certification course.
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i>{" "}
                                  Online Personal Training Certification:
                                </b>{" "}
                                Become a certified online personal trainer and
                                learn how to provide fitness guidance remotely.
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i>{" "}
                                  Trainer Course:
                                </b>{" "}
                                Enhance your skills as a trainer through this
                                comprehensive course.
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i>{" "}
                                  Nutritionist Certification:
                                </b>{" "}
                                Become a certified nutritionist by enrolling in
                                this course.{" "}
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i>{" "}
                                  Gym Trainer Certification in India:
                                </b>{" "}
                                Learn the essentials of being a gym trainer in
                                India through this course.
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i>{" "}
                                  How to Become a Certified Fitness Trainer:
                                </b>{" "}
                                Gain insights and guidance on becoming a
                                certified fitness trainer.
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i>{" "}
                                  Personal Training Course:
                                </b>{" "}
                                Develop expertise in personal training by
                                enrolling in this course.
                              </li>
                              <li>
                                <b className="text-bold">
                                  <i className="fa fa-angle-double-right"></i>{" "}
                                  Personal Trainer at The Gym:
                                </b>{" "}
                                Discover opportunities as a personal trainer at
                                The Gym.
                              </li>
                            </>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                          <p
                            onClick={toggleReadMorei}
                            id="myBtnrg"
                            style={{ color: "#00afef", fontWeight: "500" }}
                          >
                            {showMore ? "Read less" : "Read more"}
                          </p>
                        </div>
                      </ul>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid dark-hero-section dark-hero-section-left px-2">
          <div className="row align-items-center">
            <div className="col-md-4 image-section p-0">
              <img
                src="/assets/images/mix-img/add-referral.png"
                alt="Student Studying"
                className="img-fluid d-md-none d-block"
              />
            </div>
            <div className="col-md-8 text-section px-4 py-4 demoo d-flex justify-content-end">
              <div className="col-md-10">
                <div className="covid mb-3">
                  <h2 className="h2-fs text-white">
                    Get ₹3000 to ₹5000 Commission <br />
                    <span className="m-0 text-blue-color">
                      {" "}
                      per Referral with Us!
                    </span>
                  </h2>
                </div>
                <p className="instructor m-0 text-white mb-2">
                  Elevate your experience by involving your referrer's name and
                  contact number. When they join, both of you unlock exclusive
                  rewards, special discounts, and additional perks. The more you
                  refer, the more you earn—boosting your income effortlessly.
                  Spread the word and maximize your benefits today!{" "}
                </p>
                <p className="instructor m-0 text-white mb-2">
                  Grab this golden opportunity by sharing your referrer's
                  details and start earning with every successful referral.
                  Don't miss out on this lucrative chance to grow your network
                  and rewards.{" "}
                  <span style={{ fontSize: "16px" }}>
                    Terms and Conditions Apply
                  </span>
                </p>
                <button
                  className="btn btn-started mt-2"
                  onClick={handleOpenModal}
                >
                  Add Referral
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <StudentCertificate /> */}
      {/* <StudentResponse openVideoModal={openVideoModal} /> */}
      <PartnerLogo />
      {/* <PlacementReview /> */}
      {/* <StudentTestimonial testimonials={testimonials} /> */}
      {/* <StudentReview /> */}
      {/* <OutstandingReview /> */}
      <Blogs />
      {/* <section>
        <div className="container-fluid">
          <div className="container">
            <div className="ml-md-2 ml-0">
              <h2 style={{ color: "#333" }} className="mb-0 h3-fs">
                <span className="m-0 text-blue-color">Conclusion : </span>
              </h2>
            </div>
            <div className="describe">
              <p className="mt-2">
                After completing any of these courses, students are able to
                start their own setup and become financially independent.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <ContactInquiryForm note={"FGIIT Main Page Inquiry"} />
      <Modal show={showModal} onHide={handleCloseTeacher} centered>
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
              </div>
              <button
                type="button"
                className="closess closse-mobile p-0 bg-transparent border-0"
                onClick={handleCloseTeacher}
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
                        <i className="fas fa-phone"></i>
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
                    <div className="input-group align-items-center mb-3">
                      <span className="pr-2">
                        <i className="fas fa-user-graduate"></i>
                      </span>
                      <select
                        className="num-employ pl-0"
                        name="modalSelectedCourse"
                        value={formData.modalSelectedCourse}
                        onChange={handleChange}
                      >
                        <option value="" hidden>
                          Field you want to teach
                        </option>
                        <option className="field" value="UI/UX Design">
                          UI/UX Design
                        </option>
                        <option className="field" value="Ethical Hacking">
                          Ethical Hacking
                        </option>
                        <option className="field" value="javascript">
                          javascript
                        </option>
                        <option className="field" value="Python">
                          Python
                        </option>
                        <option className="field" value="Java">
                          Java
                        </option>
                        <option className="field" value="PHP">
                          PHP
                        </option>
                        <option className="field" value="Swift">
                          Swift
                        </option>
                        <option className="field" value="Ruby">
                          Ruby
                        </option>
                        <option className="field" value="SQL">
                          SQL
                        </option>
                        <option className="field" value="Django">
                          Django
                        </option>
                        <option
                          className="field"
                          value="Full Stack Development"
                        >
                          Full Stack Development
                        </option>
                        <option className="field" value="Animation & VFX">
                          Animation & VFX
                        </option>
                        <option className="field" value="Web Designing">
                          Web Designing
                        </option>
                        <option className="field" value="Front End Developing">
                          Front End Developing
                        </option>
                        <option className="field" value="Web Development">
                          Web Development
                        </option>
                        <option className="field" value="Android Development">
                          Android Development
                        </option>
                        <option className="field" value="iOS Development">
                          iOS Development
                        </option>
                        <option className="field" value="Graphics Design">
                          Graphics Design
                        </option>
                        <option className="field" value="Game Design">
                          Game Design
                        </option>
                        <option className="field" value="Game Development">
                          Game Development
                        </option>
                        <option className="field" value="Animation">
                          Animation
                        </option>
                        <option className="field" value="Flutter">
                          Flutter
                        </option>
                        <option className="field" value="React Native">
                          React Native
                        </option>
                        <option className="field" value="Data Science">
                          Data Science
                        </option>
                        <option className="field" value="Cyber Security">
                          Cyber Security
                        </option>
                        <option className="field" value="Video Editing">
                          Video Editing
                        </option>
                        <option className="field" value="Digital Marketing">
                          Digital Marketing
                        </option>
                        <option
                          className="field"
                          value="Personality Development"
                        >
                          Personality Development
                        </option>
                        <option
                          className="field"
                          value="Entrepreneurship Development"
                        >
                          Entrepreneurship Development
                        </option>
                        <option className="field" value="Corporate English">
                          Corporate English
                        </option>
                        <option
                          className="field"
                          value="Social Media Marketing"
                        >
                          Social Media Marketing
                        </option>
                        <option className="field" value="Digital Photography">
                          Digital Photography
                        </option>
                        <option className="field" value="Photography">
                          Photography
                        </option>
                        <option className="field" value="Cinematography">
                          Cinematography
                        </option>
                        <option
                          className="field"
                          value="Commercial photography"
                        >
                          Commercial photography
                        </option>
                        <option className="field" value="Nature photography">
                          Nature photography
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
                        <option
                          className="field"
                          value="Python Programming And Learn Core & Advance Python"
                        >
                          Python Programming And Learn Core & Advance Python
                        </option>
                        <option className="field" value="Life Coach Training">
                          Life Coach Training
                        </option>
                        <option className="field" value="Career Development">
                          Career Development
                        </option>
                        <option className="field" value="Content writer">
                          Content writer
                        </option>
                        <option className="field" value="Product Design">
                          Product Design
                        </option>
                        <option className="field" value="Fashion Design">
                          Fashion Design
                        </option>
                        <option className="field" value="Music Production">
                          Music Production
                        </option>
                        <option className="field" value="Music Composition">
                          Music Composition
                        </option>
                        <option className="field" value="Songwriting">
                          Songwriting
                        </option>
                        <option className="field" value="Voice Acting">
                          Voice Acting
                        </option>
                        <option className="field" value="Videographer">
                          Videographer
                        </option>
                        <option
                          className="field"
                          value="Online Course Creation"
                        >
                          Online Course Creation
                        </option>
                        <option className="field" value="Communication Skills">
                          Communication Skills
                        </option>
                        <option className="field" value="Storytelling">
                          Storytelling
                        </option>
                        <option className="field" value="Network Security">
                          Network Security
                        </option>
                        <option className="field" value="Personal Branding">
                          Personal Branding
                        </option>
                        <option className="field" value="Other">
                          Other
                        </option>
                      </select>
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="fas fa-pencil-alt"></i>
                      </span>
                      <textarea
                        className="form-control fr"
                        name="modalMessage"
                        value={formData.modalMessage}
                        onChange={handleChange}
                        placeholder="Message"
                      />
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
      <FgiitFooter />
      {/* <NotificationDiv /> */}
      <ContactButtonFGIIT />

      <Modal show={showModalRef} onHide={handlePopupClose} centered>
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
    </>
  );
}

export default FitnessCourses;
