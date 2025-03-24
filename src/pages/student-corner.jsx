import React, { useState } from "react";
import FgiitHeader from "../components/partials/Header/fgiitheader";
import FgiitFooter from "../components/partials/Footer/fgiitfooter";
import "../assets/css/hover.css";
import "../assets/css/hover1.css";
import OwlCarousel from "react-owl-carousel";
import WhatsappHeaderApp from "../components/whatsappHeaderBtn";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import { Helmet } from "react-helmet";

function StudentCorner() {
  const canonicalUrl = window.location.href;
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
  return (
    <>
      <Helmet>
        <title>Student Corner | FGIIT | Fitness Institute in India</title>
        <meta name="description" content="As a student, you need to be updated on the news about projects, exams, viva, batches detail, reference book syllabus and many more details which you will find it over here." />
        <meta name="keyword" content="best dietitian in surat, online dietitian consultation, gyms in surat, personal
                training gyms near me, certified nutritionist course, fitness trainer course in india, online
                fitness courses, nutritionist course online india, certification for fitness trainer, nutritionist
                online course, best digital marketing course, best digital marketing course online" />
        <meta property="og:title" content="Student Corner | FGIIT | Fitness Institute in India" />
        <meta property="og:description" content="As a student, you need to be updated on the news about projects, exams, viva, batches detail, reference book syllabus and many more details which you will find it over here." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/student-corner" />
        <link rel="canonical" href={{ canonicalUrl }} />
        <meta name="google-site-verification" content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K2X4NWNEP1');`}
        </script>
      </Helmet>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <WhatsappHeaderApp
        message={
          "Hello, I wanted to know more about fitness courses and books."
        }
        options={{ pageRef: true }}
      />

      <FgiitHeader />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="describe mt-5">
            <h1 style={{ color: "#333" }} className="text-center">
              <span className="m-0 text-blue-color">Daily Updates</span>
            </h1>
            <div className="thm-bg-clr dector mb-5"></div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-4 d-none d-md-block">
                  <div className="blog2 tabata" id="sticky">
                    <h2 className="h2-fs text-center m-0">What's New</h2>
                    <div className="thm-bg-clr dector my-3"></div>
                    <ul className="p-0">
                      {/* <li
                        className="py-3 border-bottom"
                        style={{ listStyle: "none" }}
                      >
                        <a href="#nocost" className="text-dark">
                          Now We provided No cost EMI
                        </a>
                      </li> */}
                      <li
                        className="py-3 border-bottom"
                        style={{ listStyle: "none" }}
                      >
                        <a href="#alumina" className="text-dark">
                          FG Alumina EVENT 2022
                        </a>
                      </li>
                      <li
                        className="py-3 border-bottom"
                        style={{ listStyle: "none" }}
                      >
                        <a href="#examcoming" className="text-dark">
                          Check When Your EXAM IS COMING ?
                        </a>
                      </li>
                      <li
                        className="py-3 border-bottom"
                        style={{ listStyle: "none" }}
                      >
                        <a href="#reconnect" className="text-dark">
                          2022 RECONNECT
                        </a>
                      </li>
                      <li
                        className="py-3 border-bottom"
                        style={{ listStyle: "none" }}
                      >
                        <a href="#solve" className="text-dark">
                          How to solve Doubts?
                        </a>
                      </li>
                      <li
                        className="py-3 border-bottom"
                        style={{ listStyle: "none" }}
                      >
                        <a href="#extension" className="text-dark">
                          About Video Extension.
                        </a>
                      </li>
                      <li
                        className="py-3 border-bottom"
                        style={{ listStyle: "none" }}
                      >
                        <a href="#giveexam" className="text-dark">
                          How To Give Exam?
                        </a>
                      </li>
                      <li className="py-3" style={{ listStyle: "none" }}>
                        <a href="#internship" className="text-dark">
                          Internship Segment Launched
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8 p-0">
                  {/* <div className="border px-3 py-3" id="nocost">
                    <div className="pb-3 tabata border-bottom">
                      <span style={{ fontFamily: "Nunito, sans-serif" }}>
                        04:15 p.m July 21, 2023
                      </span>
                      <h2 className="mt-3 h2-fs">
                        <span className="font-weight-bold">
                          No Cost EMI Available
                        </span>
                      </h2>
                    </div>
                    <div className="alumani-text ml-md-2">
                      <div className="ply1 text-center">
                        <img
                          className="lazy my-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/mix-img/buynow_paylater.webp"
                          }
                          width="80%"
                          style={{ borderRadius: "10px" }}
                          alt="new logos"
                        />
                      </div>
                      <h2 className="mt-3 h3-fs">
                        Start your Fitness Course with{" "}
                        <span style={{ color: "#00afef" }}>
                          0% Downpayment & 0% intrest with Easy EMI.
                        </span>
                      </h2>
                      <p className="mt-2">
                        Get fit now! Join our Fitness Course with 0% downpayment
                        & 0% interest. Achieve your health goals through easy
                        EMI options. Don't wait, take the first step towards a
                        healthier you today! Limited offer, act fast!
                        #FitnessGoals #HealthMatters #NoExcuses
                      </p>
                    </div>
                  </div> */}
                  <div className="border px-3 py-3 mt-5" id="alumina">
                    <div className="pb-3 tabata border-bottom">
                      <span style={{ fontFamily: "Nunito, sans-serif" }}>
                        03:45 p.m Aug 29, 2022
                      </span>
                      <h2 className="mt-3 h2-fs">
                        FG Alumina
                        <span className="color-g font-weight-bold">
                          {" "}
                          event 2022
                        </span>
                      </h2>
                    </div>
                    <div id="owl-demo2" className="mt-4 owl-carousel owl-theme">
                      <div className="item">
                        <div className="child-img">
                          <img
                            style={{ borderRadius: "10px" }}
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/alumina-img.webp"
                            }
                            alt="Alumina"
                          />
                        </div>
                      </div>
                      <div className="item">
                        <div className="child-img">
                          <img
                            style={{ borderRadius: "10px" }}
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/alumina-img-1.webp"
                            }
                            alt="Alumina"
                          />
                        </div>
                      </div>
                      <div className="item">
                        <div className="child-img">
                          <img
                            style={{ borderRadius: "10px" }}
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/alumina-img-2.webp"
                            }
                            alt="Alumina"
                          />
                        </div>
                      </div>
                      <div className="item">
                        <div className="child-img">
                          <img
                            style={{ borderRadius: "10px" }}
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/alumina-img-3.webp"
                            }
                            alt="Alumina"
                          />
                        </div>
                      </div>
                      <div className="item">
                        <div className="child-img">
                          <img
                            style={{ borderRadius: "10px" }}
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/alumina-img-4.webp"
                            }
                            alt="Alumina"
                          />
                        </div>
                      </div>
                      <div className="item">
                        <div className="child-img">
                          <img
                            style={{ borderRadius: "10px" }}
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/alumina-img-5.webp"
                            }
                            alt="Alumina"
                          />
                        </div>
                      </div>
                      <div className="item">
                        <div className="child-img">
                          <img
                            style={{ borderRadius: "10px" }}
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/alumina-img-6.webp"
                            }
                            alt="Alumina"
                          />
                        </div>
                      </div>
                      <div className="item">
                        <div className="child-img">
                          <img
                            style={{ borderRadius: "10px" }}
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/alumina-img-7.webp"
                            }
                            alt="Alumina"
                          />
                        </div>
                      </div>
                      <div className="item">
                        <div className="child-img">
                          <img
                            style={{ borderRadius: "10px" }}
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/alumina-img-8.webp"
                            }
                            alt="Alumina"
                          />
                        </div>
                      </div>
                      <div className="item">
                        <div className="child-img">
                          <img
                            style={{ borderRadius: "10px" }}
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/alumina-img-9.webp"
                            }
                            alt="Alumina"
                          />
                        </div>
                      </div>
                      <div className="item">
                        <div className="child-img">
                          <img
                            style={{ borderRadius: "10px" }}
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/alumina-img-10.webp"
                            }
                            alt="Alumina"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="alumani-text ml-md-2">
                      <h2 className="h3-fs">
                        Best Moment Alumina event
                        <span className="color-g"> </span>
                      </h2>
                      <p className="mb-3">
                        Its Our Immnese Pleasure To Share With You All That FG
                        Group Organized Alumni Event 2022 For All Our Spatans (
                        Batch 2017-22). Basically, The Purpose Of Event Is Fun
                        And Learn Approach . Furthermore Its One small Kind Of
                        Gesture Of Appriciation From Our Side.
                      </p>
                      <div className="swap mb-2 mt-4 mt-md-0">
                        <Link to="/alumini-fgiit" className="font-weight-bold">
                          Know more
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="border px-3 py-3 mt-5" id="examcoming">
                    <div className="pb-3 tabata border-bottom">
                      <span style={{ fontFamily: "Nunito, sans-serif" }}>
                        06:00 p.m. July 26, 2022
                      </span>
                      <h2 className="mt-3 h2-fs">
                        Check when your{" "}
                        <span className="color-g">Exam is coming ?</span>
                      </h2>
                    </div>
                    <div className="mt-4">
                      <div className="ply1">
                        <img
                          className="lazy my-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/when-your-exam.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          alt="How to Give Exam?"
                        />
                      </div>
                      <h2 className="exmas h4-fs">
                        Here you check how to give exam ?
                      </h2>
                      <ul className="exam pl-4 mt-3">
                        <li>
                          Go to your student portal in which you are watching
                          your recorded sessions.
                        </li>
                        <li>
                          In that portal you will see three lines, in which you
                          have to go and click on the exam segment.
                        </li>
                        <li>After that, you can see your exam date.</li>
                        <li>
                          At that date and time, you can start your examination.
                        </li>
                        <li>Exam Duration Will Be For 1 Hour Of 100 MCQs.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="border px-3 py-3 mt-5" id="reconnect">
                    <div className="pb-3 tabata border-bottom">
                      <span style={{ fontFamily: "Nunito, sans-serif" }}>
                        5:17 p.m July 13, 2022
                      </span>
                      <h2 className="mt-3 h2-fs">
                        2022 <span className="color-g">RECONNECT</span>
                      </h2>
                    </div>
                    <div className="d-none d-lg-block mt-5">
                      <div className="row justify-content-around">
                        <div className="alumani-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/student-corner-5.webp"
                            }
                            alt="student-corner-5"
                            className="img-fluid"
                          />
                        </div>
                        <div className="alumani-img imgs-height">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/student-corner-4.webp"
                            }
                            alt="student-corner-4"
                          />
                        </div>
                      </div>
                    </div>
                    <div id="owl-demo1" className="mt-5 d-block d-lg-none">
                      <div className="item mx-3">
                        <div className="alumani-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/student-corner-5.webp"
                            }
                            alt="student-corner-5"
                            className="img-fluid lazy"
                          />
                        </div>
                      </div>
                      <div className="item mx-3">
                        <div className="alumani-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/student-corner-4.webp"
                            }
                            alt="student-corner-4"
                            className="img-fluid lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="alumani-text">
                      <h2 className="h3-fs">
                        DEAR FGIITINES{" "}
                        <span className="color-g">its time to reminisce</span>
                      </h2>
                      <p>
                        we cordially invite you back to your alma matter to
                        reunite and cherish all the joy and wonderful moment
                        spent together. we heartily request you to be part of
                        this function by confirmation and make it grand success.
                      </p>
                      <span id="dots"></span>
                      <span id="more">
                        <div className="alumani-contnet">
                          <h2 className="h5-fs text-center">schedule for day</h2>
                          <ul className="m-0 pl-4">
                            <li>
                              09:00 am to 09:30 am :{" "}
                              <span>welcoming guest & alumini</span>
                            </li>
                            <li>
                              10:00 am to 10:30 am : <span>hi tea snacks</span>
                            </li>
                            <li>
                              11:00 am to 12:30 pm :{" "}
                              <span>open knowledgeable discussion</span>
                            </li>
                            <li>
                              12:45 pm to 01:30 pm : <span>lunch</span>
                            </li>
                            <li>
                              01:30 pm to 03:00 pm :{" "}
                              <span>felicitation& award ceremony</span>
                            </li>
                            <li>
                              03:00 pm to 03:30 pm :{" "}
                              <span>Motivation session</span>
                            </li>
                            <li>
                              03:30 pm to 03:45 pm :{" "}
                              <span>vote of thanks </span>
                            </li>
                            <li>
                              04:00 pm to 05:30 pm :{" "}
                              <span>fun activities </span>
                            </li>
                          </ul>
                          <h2 className="text-center h6-fs">
                            come,let us{" "}
                            <span className="color-g">
                              {" "}
                              enjoy and celebrate
                            </span>
                          </h2>
                        </div>
                      </span>
                      <div className="swap mt-3">
                        <button onclick="myFunction()" id="myBtn">
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border px-3 py-3 mt-5" id="solve">
                    <div className="pb-3 tabata border-bottom">
                      <span style={{ fontFamily: "Nunito, sans-serif" }}>
                        10:00 a.m. May 3, 2022
                      </span>
                      <h2 className="mt-3 h2-fs">How to solve Doubts?</h2>
                    </div>
                    <div className="tabata mt-4">
                      <div className="ply1">
                        <img
                          className="lazy my-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/student-corner-1.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          alt="How to solve Doubts?"
                        />
                        <div className="ply-3-one">
                          <a
                            className="custom"
                            onClick={() => openVideoModal("F-GPkPc5-4E")}
                            aria-label="Fg Group"
                          >
                            <i
                              className="far fa-play-circle"
                              style={{ color: "white" }}
                            ></i>
                          </a>
                        </div>
                      </div>
                      {/* <!-- <h2 className="h5-fs mt-5" style={{fontFamily: 'Nunito, sans-serif',fontWeight: '700'}}>For any kind of doubt regarding your course you can message in chat segment , Whatsaap group i.e. created for you.</h2>
                                            <h2 className="h5-fs" style="font-family: 'Nunito', sans-serif;font-weight: 700;">Within 24 - 48 hrs your doubts will be solved.</h2> --> */}
                      <p className="mt-3">
                        For doubt solving you will have an access to a private
                        group community over WhatsApp.
                      </p>
                      <p className="mt-3">
                        You can share all your technical or subjected related
                        doubts over there. You will get a reply within 24 hours
                        and your query will be resolved as soon as possible.
                      </p>
                      <p className="mt-3">
                        The ground rule does not call for douts right away text
                        or send the voice notes as teachers are busy taking
                        lectures so each time they can not entertain right away.
                      </p>
                    </div>
                  </div>
                  <div className="border px-3 py-3 mt-5" id="extension">
                    <div className="pb-3 tabata border-bottom">
                      <span style={{ fontFamily: "Nunito, sans-serif" }}>
                        11:30 a.m. May 3, 2022
                      </span>
                      <h2 className="mt-3 h2-fs">About Video Extension.</h2>
                    </div>
                    <div className="tabata mt-4">
                      <div className="ply1">
                        <img
                          className="lazy my-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/student-corner-2.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          alt="About Video Extension"
                        />
                        <div className="ply-3-one">
                          <a
                            className="custom"
                            onClick={() => openVideoModal("7lO1V_3_0zg")}
                            aria-label="Fg Group"
                          >
                            <i
                              className="far fa-play-circle"
                              style={{ color: "white" }}
                            ></i>
                          </a>
                        </div>
                      </div>
                      {/* <!-- <h2 className="h5-fs mt-5" style="font-family: 'Nunito', sans-serif;font-weight: 700;">For any kind of doubt regarding your course you can message in chat segment , Whatsaap group i.e. created for you.</h2>
                                            <h2 className="h5-fs" style="font-family: 'Nunito', sans-serif;font-weight: 700;">Within 24 - 48 hrs your doubts will be solved.</h2> --> */}
                      <p className="mt-3 p-3">
                        <b>Exams will be covered in 3 topics,</b>
                        <ul>
                          <li>MCQs</li>
                          <li>Viva</li>
                          <li>Projects</li>
                        </ul>
                      </p>
                      <p className="mt-3">
                        It has 150 marks total from which the MCQ exam is 100
                        marks and to pass that you need to have minimum of 40
                        marks.
                      </p>
                      <p className="mt-3">
                        Exam can't be postponed and project can't be delayed if
                        you do a penalty is 1000 INR each time.
                      </p>
                    </div>
                  </div>
                  <div className="border px-3 py-3 mt-5" id="giveexam">
                    <div className="pb-3 tabata border-bottom">
                      <span style={{ fontFamily: "Nunito, sans-serif" }}>
                        02:25 p.m. May 3, 2022
                      </span>
                      <h2 className="mt-3 h2-fs">How to Give Exam?</h2>
                    </div>
                    <div className="tabata mt-4">
                      <div className="ply1">
                        <img
                          className="lazy my-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/student-corner-3.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          alt="How to Give Exam?"
                        />
                        <div className="ply-3-one">
                          <a
                            className="custom"
                            onClick={() => openVideoModal("OOiOOLNZfiE")}
                            aria-label="Fg Group"
                          >
                            <i
                              className="far fa-play-circle"
                              style={{ color: "white" }}
                            ></i>
                          </a>
                        </div>
                      </div>
                      {/* <!-- <h2 className="h5-fs mt-5" style="font-family: 'Nunito', sans-serif;font-weight: 700;">For any kind of doubt regarding your course you can message in chat segment , Whatsaap group i.e. created for you.</h2>
                                            <h2 className="h5-fs" style="font-family: 'Nunito', sans-serif;font-weight: 700;">Within 24 - 48 hrs your doubts will be solved.</h2> --> */}
                      <p className="mt-3">
                        Videos are our IPR by the guidelines of the government.
                      </p>
                      <p className="mt-3">
                        All videos are private on youtube nobody except you can
                        see it or share it so can't open them so to gain longer
                        access you need to have the videos extended and the
                        charges for those are 1000 INR per month.
                      </p>
                      <p className="mt-3">
                        You can renew it by yourself also from our panel. there
                        are no provisions for us to extend it so kindly do not
                        ask us from your end.
                      </p>
                    </div>
                  </div>
                  <div className="border px-3 py-3 mt-5" id="internship">
                    <div className="pb-3 tabata border-bottom">
                      <span style={{ fontFamily: "Nunito, sans-serif" }}>
                        03:30 p.m. Feb 6, 2023
                      </span>
                      <h2 className="mt-3 h2-fs">Internship Segment</h2>
                    </div>
                    <OwlCarousel
                      id="owl-demo77"
                      loop
                      autoPlay
                      dots={false}
                      className="owl-carousel owl-theme mt-5"
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
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/placeintern/internship-43.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          alt="job placement by our academy"
                        />
                      </div>
                      <div className="item mx-3">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/placeintern/internship-42.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          alt="job placement by our academy"
                        />
                      </div>
                      <div className="item mx-3">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/placeintern/internship-41.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          alt="job placement by our academy"
                        />
                      </div>
                      <div className="item mx-3">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/placeintern/internship-40.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          alt="job placement by our academy"
                        />
                      </div>
                      <div className="item mx-3">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/placeintern/internship-39.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          alt="job placement by our academy"
                        />
                      </div>
                      <div className="item mx-3">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/placeintern/internship-38.webp"
                          }
                          style={{ borderRadius: "10px" }}
                          alt="job placement by our academy"
                        />
                      </div>
                    </OwlCarousel>
                    <div className="tabata mt-4">
                      <h2 className="h5-fs" 
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          fontWeight: "700",
                        }}
                      >
                        Where you can check our student activity during
                        internship
                      </h2>
                      {/* <!-- <p className="mt-3">Here you can check our student activity during internship</p> --> */}
                    </div>
                  </div>
                  <div className="calc mt-5">
                    <p className="mx-3 mx-md-0 p-3">
                      If you are searching for best dietitian in surat, online
                      dietitian consultation, gyms in surat, personal training
                      gyms near me, certified nutritionist course, fitness
                      trainer course in india, online fitness courses,
                      nutritionist course online india, certification for
                      fitness trainer, nutritionist online course, best digital
                      marketing course, best digital marketing course online you
                      are on right page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col"></div>
            {/* <div className="col-lg-4">
              <div className="blog tabata d-block d-md-none">
                <h2 className="h2-fs text-center m-0">What's New</h2>
                <div className="thm-bg-clr dector my-3"></div>
                <ul>
                 
                  <li
                    className="py-3 border-bottom"
                    style={{ listStyle: "none" }}
                  >
                    <a href="#news" className="text-dark">
                      Now Our Institute Is Government Approved
                    </a>
                  </li>
                  <li
                    className="py-3 border-bottom"
                    style={{ listStyle: "none" }}
                  >
                    <a href="#alumina" className="text-dark">
                      FG Alumina EVENT 2022
                    </a>
                  </li>
                  <li
                    className="py-3 border-bottom"
                    style={{ listStyle: "none" }}
                  >
                    <a href="#examcoming" className="text-dark">
                      Check When Your EXAM IS COMING ?
                    </a>
                  </li>
                  <li
                    className="py-3 border-bottom"
                    style={{ listStyle: "none" }}
                  >
                    <a href="#reconnect" className="text-dark">
                      2022 RECONNECT
                    </a>
                  </li>
                  <li
                    className="py-3 border-bottom"
                    style={{ listStyle: "none" }}
                  >
                    <a href="#solve" className="text-dark">
                      How to solve Doubts?
                    </a>
                  </li>
                  <li
                    className="py-3 border-bottom"
                    style={{ listStyle: "none" }}
                  >
                    <a href="#extension" className="text-dark">
                      About Video Extension.
                    </a>
                  </li>
                  <li
                    className="py-3 border-bottom"
                    style={{ listStyle: "none" }}
                  >
                    <a href="#giveexam" className="text-dark">
                      How To Give Exam?
                    </a>
                  </li>
                  <li className="py-3" style={{ listStyle: "none" }}>
                    <a href="#internship" className="text-dark">
                      Internship Segment Launched
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <FgiitFooter />
    </>
  );
}

export default StudentCorner;
