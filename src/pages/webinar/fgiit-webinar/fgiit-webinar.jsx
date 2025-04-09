/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./css/landing.css";
import "./css/media.css";
import "../../../assets/css/bootstrap.css";
import "../../../assets/css/franchisee.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ModalVideo from "react-modal-video";
import { Button } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import Modal from "react-bootstrap/Modal";
import { sendInquiry } from "../../../assets/js/utils/contact-us";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function FGIITLanding() {
  const canonicalUrl = window.location.href;
  const [videoUrl, setVideoUrl] = useState("");
  const handleShow = () => setShowModal(true);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [slot, setSlot] = useState("");
  const [message, setMessage] = useState("");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleApplyForInquiry = async () => {
    try {
      let modifiedMessage = `${message}\n\nSlot: ${slot}`;
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "FGIIT Webinar Inquiry",
        modifiedMessage
      );
      setName("");
      setEmail("");
      setPhoneNumber("");
      setSlot("");
      setMessage("");
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  const handleCloseTeacher = () => {
    setShowModal(false);
  };



  return (
    <>
      <Helmet>
        <title>Kickstart Your Fitness Career</title>
        <meta
          name="description"
          content="Struggling to scale your career in the fitness industry? Kickstart your journey with our expert guidance and resources. Achieve success and become a top fitness professional."
        />
        <meta name="keyword" content="" />
        <meta property="og:title" content="Kickstart Your Fitness Career" />
        <meta
          property="og:description"
          content="Struggling to scale your career in the fitness industry? Kickstart your journey with our expert guidance and resources. Achieve success and become a top fitness professional."
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta property="og:url" content="https://fggroup.in/fgiit-webinar" />
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
      <a aria-label="Fg Group"
        href="https://api.whatsapp.com/send?phone=8866842520&text=I want to know about FGIIT Webinar."
        className="float"
        target="_blank" rel="noreferrer"
      >
        <i className="fab fa-whatsapp mt-3"></i>
      </a>
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          overflowX: "hidden",
          margin: "0",
          padding: "0",
        }}
        className="m-0 p-0 text-white bg-black"
      >
        <section
          section
          className="margintop wow animate__ animate__fadeInDown animated"
        >
          <div className="container-fluid">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                  <div className="mt-4 landing-head">
                    <h1
                      className="mb-0 blinking-button"
                      style={{
                        fontWeight: "700",
                        fontSize: "20px",
                        color: "rgb(139, 195, 74)",
                      }}
                    >
                      Start Your Career In Health And Fitness Industry.
                    </h1>
                    <div className="d-block d-md-none mt-3">
                      <iframe
                        width="100%"
                        height="190px"
                        src="https://www.youtube.com/embed/h8-dPE7ujQk?si=6baOaJ4eiqUOksP1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="d-md-block d-none mt-3">
                      <iframe
                        width="100%"
                        height="500px"
                        src="https://www.youtube.com/embed/h8-dPE7ujQk?si=6baOaJ4eiqUOksP1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h2 className="h5-fs mt-3">What Are Success Stories</h2>
                    <div className="row">
                      <div className="item col-md-6 col-12 mt-2">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/fgiit-webinar-placement-1.webp"
                          }
                          className="rounded"
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="item col-md-6 col-12 mt-2">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/fgiit-webinar-placement-2.webp"
                          }
                          className="rounded"
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="item col-md-6 col-12 mt-2">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/fgiit-webinar-placement-5.webp"
                          }
                          className="rounded"
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="item col-md-6 col-12 mt-2">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/fgiit-webinar-placement-6.webp"
                          }
                          className="rounded"
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="item col-md-6 col-12 mt-2">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/fgiit-webinar-placement-3.webp"
                          }
                          className="rounded"
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
                      <div className="item col-md-6 col-12 mt-2">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/fgiit-webinar-placement-4.webp"
                          }
                          className="rounded"
                          width="100%"
                          alt="fggroup"
                        />
                      </div>
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
              <div>
                <div className="text-center">
                  <h2 className='h2-fs text-white fs-26'>
                    Our All Courses
                  </h2>
                </div>
                <div className="row ">
                  <div className="col-md-12">
                    <OwlCarousel
                      loop
                      autoplay
                      dots={false}
                      id="owl-demo"
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
                      <div className="item mx-md-3">
                        <div
                          className="blog p-0"
                          style={{
                            borderRadius: "10px",
                            boxShadow: "rgba(255, 255, 255, 0.24) 0px 3px 8px",
                          }}
                        >
                          <div className="ply position-relative">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/dpt-nocost.webp"
                              }
                              width="100%"
                              style={{ borderRadius: "10px 10px 0px 0px" }}
                              className="lazy"
                              alt="fggroup"
                            />
                          </div>
                          <div
                            className="cart-t"
                            style={{ backgroundColor: "black" }}
                          >
                            <h2 className="h4-fs">Diploma In Personal Training course</h2>
                            <div className="mt-2 mb-2">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                              <span>4.5 (1,002)</span>
                            </div>
                            <div className="mb-3 d-md-block">
                              <span className="d-md-block mb-0">
                                This Course Helps You To Become Certified
                                Personal Trainer Which Every Client Wants. A
                                Personal Trainer Creates One-On-One Fitness
                                Programs For Their Clients,Motivating, And
                                Guiding Them To Achieve Their Goals.
                              </span>
                            </div>
                            <Link
                              to="/fgiit/online-personal-training-course"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Online
                            </Link>
                            <Link
                              to="/fgiit/personal-trainer-courses"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Offline
                            </Link>
                            <Link
                              to="/fgiit/personal-training-course"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Self Learning
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="item mx-md-3">
                        <div
                          className="blog p-0"
                          style={{
                            borderRadius: "10px",
                            boxShadow: "rgba(255, 255, 255, 0.24) 0px 3px 8px",
                          }}
                        >
                          <div className="ply position-relative">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/dnc-nocost.webp"
                              }
                              width="100%"
                              style={{ borderRadius: "10px 10px 0px 0px" }}
                              className="lazy"
                              alt="fggroup"
                            />
                          </div>
                          <div
                            className="cart-t"
                            style={{ backgroundColor: "black" }}
                          >
                            <h2 className="h4-fs">Diploma In Nutrition course</h2>
                            <div className="mt-2 mb-2">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                              <span>4.5 (1,002)</span>
                            </div>
                            <div className="mb-3 ">
                              <span className=" mb-0">
                                Diploma In A Nutritionist Course Diverse Course
                                Where We Are Teaching Our Nutritionist Students
                                That How To Make A Diet For Clinically Ill
                                Patients For Fat Loss And Muscle Building
                                Motivating, And Guiding Them To Achieve Their
                                Goals.
                              </span>
                            </div>
                            <Link
                              to="/fgiit/food-and-nutrition-course"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Online
                            </Link>
                            <Link
                              to="/fgiit/course-for-dietician"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Offline
                            </Link>
                            <Link
                              to="/fgiit/dietician-course-online"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Self Learning
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="item mx-md-3">
                        <div
                          className="blog p-0"
                          style={{
                            borderRadius: "10px",
                            boxShadow: "rgba(255, 255, 255, 0.24) 0px 3px 8px",
                          }}
                        >
                          <div className="ply  position-relative">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/aas-nocost.webp"
                              }
                              width="100%"
                              style={{ borderRadius: "10px 10px 0px 0px" }}
                              className="lazy"
                              alt="fggroup"
                            />
                          </div>
                          <div
                            className="cart-t"
                            style={{ backgroundColor: "black" }}
                          >
                            <h2 className="h4-fs">Anabolic Androgenic Steroids</h2>
                            <div className="mt-2 mb-2">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                              <span>4.5 (1,002)</span>
                            </div>
                            <div className="mb-3 ">
                              <span className=" mb-0">
                                Anabolic-Androgenic Steroids Are The Most
                                Important Thing To Know For Athletes These Days.
                                In The Era, Where Everyone Is Using
                                Performance-Enhancing Drugs To Win, You Should
                                Not Be Left Out From The Victory Or Make Any
                                Decision That Can Harm Your Life.
                              </span>
                            </div>
                            <Link
                              to="/fgiit/anabolic-steroid-testosterone"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Online
                            </Link>
                            <Link
                              to="/fgiit/anabolic-steroids-course"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Offline
                            </Link>
                            <Link
                              to="/fgiit/anabolic-androgenic-steroidsName"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Self Learning
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="item mx-md-3">
                        <div
                          className="blog p-0"
                          style={{
                            borderRadius: "10px",
                            boxShadow: "rgba(255, 255, 255, 0.24) 0px 3px 8px",
                          }}
                        >
                          <div className="ply  position-relative">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/fgiit-trx-band-workshop-course.webp"
                              }
                              width="100%"
                              style={{ borderRadius: "10px 10px 0px 0px" }}
                              className="lazy"
                              alt="fggroup"
                            />
                          </div>
                          <div
                            className="cart-t"
                            style={{ backgroundColor: "black" }}
                          >
                            <h2 className="h4-fs">TRX Band Workshop</h2>
                            <div className="mt-2 mb-2">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                              <span>4.5 (120)</span>
                            </div>
                            <div className="mb-3 ">
                              <span className=" mb-0">
                                Discover the benefits of TRX band training for a
                                full-body workout! Learn how to use TRX bands
                                effectively for upper and lower body exercises,
                                stretching, and achieving fat loss and
                                muscle-building goals.
                              </span>
                            </div>
                            <Link
                              to="/fgiit/online-trx-band-workshop"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Online
                            </Link>
                            <Link
                              to="/fgiit/offline-trx-and-workshop"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Offline
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="item mx-md-3">
                        <div
                          className="blog p-0"
                          style={{
                            borderRadius: "10px",
                            boxShadow: "rgba(255, 255, 255, 0.24) 0px 3px 8px",
                          }}
                        >
                          <div className="ply  position-relative">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/fgiit-tabata-workshop-course.webp"
                              }
                              width="100%"
                              style={{ borderRadius: "10px 10px 0px 0px" }}
                              className="lazy"
                              alt="fggroup"
                            />
                          </div>
                          <div
                            className="cart-t"
                            style={{ backgroundColor: "black" }}
                          >
                            <h2 className="h4-fs">Tabata Workshop</h2>
                            <div className="mt-2 mb-2">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                              <span>4.8 (125)</span>
                            </div>
                            <div className="mb-3 ">
                              <span className=" mb-0">
                                Unlock the power of Tabata workouts! Discover
                                the science behind Tabata, create effective
                                exercises and circuits, target upper and lower
                                body, warm up, stretch, and optimize fat loss
                                and muscle building with this comprehensive
                                guide to Tabata training.
                              </span>
                            </div>
                            <Link
                              to="/fgiit/online-tabata-workshop"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Online
                            </Link>
                            <Link
                              to="/fgiit/offline-tabata-workshop"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Offline
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="item mx-md-3">
                        <div
                          className="blog p-0"
                          style={{
                            borderRadius: "10px",
                            boxShadow: "rgba(255, 255, 255, 0.24) 0px 3px 8px",
                          }}
                        >
                          <div className="ply  position-relative">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/fgiit-functional-training-workshop-course.webp"
                              }
                              width="100%"
                              style={{ borderRadius: "10px 10px 0px 0px" }}
                              className="lazy"
                              alt="fggroup"
                            />
                          </div>
                          <div
                            className="cart-t"
                            style={{ backgroundColor: "black" }}
                          >
                            <h2 className="h4-fs">Functional Training Workshop</h2>
                            <div className="mt-2 mb-2">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                              <span>4.8 (165)</span>
                            </div>
                            <div className="mb-3 ">
                              <span className=" mb-0">
                                Embrace the world of Functional Training!
                                Explore the science behind it, learn to design
                                effective exercises, target upper and lower
                                body, optimize warm-up and stretching, and
                                harness the principles of fat loss and muscle
                                building for a holistic fitness approach.
                              </span>
                            </div>
                            <Link
                              to="/fgiit/online-functional-training-workshop"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Online
                            </Link>
                            <Link
                              to="/fgiit/offline-functional-training-workshop"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Offline
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="item mx-md-3">
                        <div
                          className="blog p-0"
                          style={{
                            borderRadius: "10px",
                            boxShadow: "rgba(255, 255, 255, 0.24) 0px 3px 8px",
                          }}
                        >
                          <div className="ply  position-relative">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/fgiit-mix-martial-arts-course.webp"
                              }
                              width="100%"
                              style={{ borderRadius: "10px 10px 0px 0px" }}
                              className="lazy"
                              alt="fggroup"
                            />
                          </div>
                          <div
                            className="cart-t"
                            style={{ backgroundColor: "black" }}
                          >
                            <h2 className="h4-fs">Mix Martial Arts Workshop</h2>
                            <div className="mt-2 mb-2">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                              <span>4.8 (185)</span>
                            </div>
                            <div className="mb-3 ">
                              <span className=" mb-0">
                                Enter the world of Martial Arts! Master basic
                                stances, footwork, hand, and kicking techniques.
                                Learn vital skills in blocking, self-defense,
                                and grappling. Discover the artistry in forms or
                                katas and the intensity of sparring.
                              </span>
                            </div>
                            <Link
                              to="/fgiit/online-martial-arts-workshop"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Online
                            </Link>
                            <Link
                              to="/fgiit/offline-mix-martial-arts-workshop"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Offline
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="item mx-md-3">
                        <div
                          className="blog p-0"
                          style={{
                            borderRadius: "10px",
                            boxShadow: "rgba(255, 255, 255, 0.24) 0px 3px 8px",
                          }}
                        >
                          <div className="ply  position-relative">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/fgiit-powerlifting-course.webp"
                              }
                              width="100%"
                              style={{ borderRadius: "10px 10px 0px 0px" }}
                              className="lazy"
                              alt="fggroup"
                            />
                          </div>
                          <div
                            className="cart-t"
                            style={{ backgroundColor: "black" }}
                          >
                            <h2 className="h4-fs">Powerlifting Coach Workshop</h2>
                            <div className="mt-2 mb-2">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                              <span>4.9 (250)</span>
                            </div>
                            <div className="mb-3 ">
                              <span className=" mb-0">
                                Dive into the world of Powerlifting! Explore
                                biomechanics, strength training principles, and
                                effective programming. Learn about essential
                                equipment, rules,and injury prevention.
                                Understand coaching, ethics, and legal aspects.
                              </span>
                            </div>
                            <Link
                              to="/fgiit/online-powerlifting-course"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Online
                            </Link>
                            <Link
                              to="/fgiit/powerlifting-course"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Offline
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="item mx-md-3">
                        <div
                          className="blog p-0"
                          style={{
                            borderRadius: "10px",
                            boxShadow: "rgba(255, 255, 255, 0.24) 0px 3px 8px",
                          }}
                        >
                          <div className="ply position-relative">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/inrehab-nocost.webp"
                              }
                              width="100%"
                              style={{ borderRadius: "10px 10px 0px 0px" }}
                              className="lazy"
                              alt="fggroup"
                            />
                          </div>
                          <div
                            className="cart-t"
                            style={{ backgroundColor: "black" }}
                          >
                            <h2 className="h4-fs">Injury Rehabilitation Workshop</h2>
                            <div className="mt-2 mb-2">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                              <span>4.5 (1,002)</span>
                            </div>
                            <div className="mb-3 ">
                              <span className=" mb-0">
                                This Course Basically Aims At Preventing And
                                Treating Injuries Through Several Means.
                                Injuries That Are Connected To Sports And Gym
                                Can Cause Severe Pain Or Can Cause Impacts On
                                Your Body For The Rest Of Your Life.
                              </span>
                            </div>
                            <Link
                              to="/fgiit/course-of-physiotherapy"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Online
                            </Link>
                            <Link
                              to="/fgiit/injury-rehabilitation-program"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Offline
                            </Link>
                            <Link
                              to="/fgiit/physiotherapy-courseName"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Self Learning
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* <div className="item mx-md-3">
                        <div
                          className="blog p-0"
                          style={{
                            borderRadius: "10px",
                            boxShadow: "rgba(255, 255, 255, 0.24) 0px 3px 8px",
                          }}
                        >
                          <div className="ply position-relative">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/advance-clincal-nocost.webp"
                              }
                              width="100%"
                              style={{ borderRadius: "10px 10px 0px 0px" }}
                              className="lazy"
                              alt="fggroup"
                            />
                          </div>
                          <div
                            className="cart-t"
                            style={{ backgroundColor: "black" }}
                          >
                            <h2 className="h4-fs">Advance Clinical Nutrition Workshop</h2>
                            <div className="mt-2 mb-2">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                              <span>4.5 (1,002)</span>
                            </div>
                            <div className="mb-3 ">
                              <span className=" mb-0">
                                Wellness Consultant Is A Course Where You Learn
                                How To Fight Diseases Like Diabetes, Thyroid,
                                PCOS, And Cancer. These Are The Diseases Is Can
                                Not Be Controlled By Medicine Only.
                              </span>
                            </div>
                            <Link
                              to="/fgiit/clinical-diets-for-health-and-wellness"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Online
                            </Link>
                            <Link
                              to="/fgiit/clinical-dietitian"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Offline
                            </Link>
                            <Link
                              to="/fgiit/clinical-nutrition-course"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Self Learning
                            </Link>
                          </div>
                        </div>
                      </div> */}
                      <div className="item mx-md-3">
                        <div
                          className="blog p-0"
                          style={{
                            borderRadius: "10px",
                            boxShadow: "rgba(255, 255, 255, 0.24) 0px 3px 8px",
                          }}
                        >
                          <div className="ply position-relative">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/gic-nocost.webp"
                              }
                              width="100%"
                              style={{ borderRadius: "10px 10px 0px 0px" }}
                              className="lazy"
                              alt="fggroup"
                            />
                          </div>
                          <div
                            className="cart-t"
                            style={{ backgroundColor: "black" }}
                          >
                            <h2 className="h4-fs">Group Instructor Workshop</h2>
                            <div className="mt-2 mb-2">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                              <span>4.5 (1,002)</span>
                            </div>
                            <div className="mb-3 ">
                              <span className=" mb-0">
                                Each Exercise In A Given Tabata Workout Lasts
                                Only Four Minutes, But It Is Likely To Be One Of
                                The Longest Four Minutes You Have Ever Endured.
                                The Doctor Designed A Training Where
                                Participants Gave Their Maximum Effort For 20
                                Seconds, Then 10 Seconds For Rest.
                              </span>
                            </div>
                            <Link
                              to="/fgiit/online-group-instructor-masterclass"
                              target="_blank"
                              className="btn mt-2"
                            >
                              Self Learning
                            </Link>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
                <div>
                  <Button
                    variant="success"
                    onClick={handleShow}
                    className="w-100 mt-5"
                    style={{
                      backgroundColor: "#8bc34a",
                      color: "black",
                      fontWeight: "bold",
                      boxShadow: "none",
                    }}
                  >
                    Reserve Your spot today
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="margintop">
          <div className="container-fluid">
            <div className="container">
              <div>
                <div className="text-center">
                  <h2 className='h2-fs text-white fs-26'>
                    What Makes Us Different Than Others
                  </h2>
                </div>
                <div
                  className="row"
                  style={{ textAlign: "center", marginTop: "50px" }}
                >
                  <div className="col-md-4">
                    <div
                      className="p-3"
                      style={{
                        marginBottom: "20px",
                        backgroundColor: "#191919",
                        borderRadius: "10px",
                        color: "#8bc34a",
                        border: "2px dotted #8bc34a",
                      }}
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/certificate.webp"
                        }
                        alt="sales"
                        style={{ width: "100px", marginBottom: "10px" }}
                        className="mx-auto"
                      />
                      <p
                        style={{
                          fontSize: "18px",
                          margin: "0",
                        }}
                      >
                        Government Approved
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="p-3"
                      style={{
                        marginBottom: "20px",
                        backgroundColor: "#191919",
                        borderRadius: "10px",
                        border: "2px dotted #8bc34a",
                      }}
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/images/icon/pin.png"
                        }
                        alt="sales"
                        style={{ width: "100px", marginBottom: "10px" }}
                        className="mx-auto"
                      />
                      <p
                        style={{
                          fontSize: "18px",
                          color: "#8bc34a",
                          margin: "0",
                        }}
                      >
                        International Valid
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="p-3"
                      style={{
                        marginBottom: "20px",
                        backgroundColor: "#191919",
                        borderRadius: "10px",
                        border: "2px dotted #8bc34a",
                      }}
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images//icon/help-desk.png"
                        }
                        alt="sales"
                        style={{ width: "100px", marginBottom: "10px" }}
                        className="mx-auto"
                      />
                      <p
                        style={{
                          fontSize: "18px",
                          color: "#8bc34a",
                          margin: "0",
                        }}
                      >
                        Lifetime Support
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ textAlign: "center" }}>
                  <div className="col"></div>
                  <div className="col-md-4">
                    <div
                      className="p-3"
                      style={{
                        marginBottom: "20px",
                        backgroundColor: "#191919",
                        borderRadius: "10px",
                        border: "2px dotted #8bc34a",
                      }}
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/job.webp"
                        }
                        alt="sales"
                        style={{ width: "100px", marginBottom: "10px" }}
                        className="mx-auto"
                      />
                      <p
                        style={{
                          fontSize: "18px",
                          color: "#8bc34a",
                          margin: "0",
                        }}
                      >
                        100% Placement
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="p-3"
                      style={{
                        marginBottom: "20px",
                        backgroundColor: "#191919",
                        borderRadius: "10px",
                        border: "2px dotted #8bc34a",
                      }}
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/training.png"
                        }
                        alt="sales"
                        style={{ width: "100px", marginBottom: "10px" }}
                        className="mx-auto"
                      />
                      <p
                        style={{
                          fontSize: "18px",
                          color: "#8bc34a",
                          margin: "0",
                        }}
                      >
                        20,000 + Alumni
                      </p>
                    </div>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="margintop">
          <div className="container-fluid">
            <div className="container">
              <div>
                <div className="text-center">
                  <h2 className='h2-fs text-white fs-26'>
                    How to Register?
                  </h2>
                </div>
                <div className="row ">
                  <div
                    className="col-md-4 text-center mt-4 p-5"
                    style={{
                      border: "2px solid #8bc34a",
                      borderStyle: "dashed",
                    }}
                  >
                    {/* <div
                      className="include"
                      style={{
                        backgroundColor: "#ff9f69",
                        border: "2px solid #ce6600",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      }}>
                      <a href="#;" aria-label="Fg Group">
                        <img
                          className="img-fluid"
                          alt="recorded session"
                          src="./img-videos.webp"
                        />
                      </a>
                    </div> */}
                    <h2 className="h2-fs">Step 1</h2>
                    <h2 className="h6-fs mt-3">Click on the registration link:</h2>
                  </div>
                  <div
                    className="col-md-4 text-center mt-4 p-5"
                    style={{
                      border: "2px solid #8bc34a",
                      borderStyle: "dashed",
                    }}
                  >
                    <h2 className="h2-fs">Step 2</h2>
                    <h2 className="h6-fs mt-3">
                      {" "}
                      Fill out the registration form with your details
                    </h2>
                  </div>
                  <div
                    className="col-md-4 text-center mt-4 p-5"
                    style={{
                      border: "2px solid #8bc34a",
                      borderStyle: "dashed",
                    }}
                  >
                    <h2 className="h2-fs">Step 3</h2>
                    <h2 className="h6-fs mt-3">
                      Receive a confirmation email with webinar details.
                    </h2>
                  </div>
                </div>
                <div>
                  <Button
                    variant="success"
                    onClick={handleShow}
                    className="w-100 mt-5"
                    style={{
                      backgroundColor: "#8bc34a",
                      color: "black",
                      fontWeight: "bold",
                      boxShadow: "none",
                    }}
                  >
                    Reserve Your spot today
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="margnitop mt-3">
          <div className="container-fluid">
            <div className="container pt-md-5">
              <div className="col-md-12">
                <div className="covid text-center">
                  <h2 className='h2-fs' style={{ color: "#333" }}>
                    <span style={{ color: "white", margin: "0px" }}>
                      Outstanding Batches
                    </span>
                  </h2>
                </div>
                <div className="thm-bg-clr dector mb-md-4 mb-3"></div>
                <div className="row">
                  <div className="col-md-3 col-6 mt-2">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/fgiit-webinar-batch-1.webp"
                      }
                      alt="FG Group"
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      }}
                      className="lazy img-fluid"
                    />
                  </div>
                  <div className="col-md-3 col-6 mt-2">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/fgiit-webinar-batch-2.webp"
                      }
                      alt="FG Group"
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      }}
                      className="lazy img-fluid"
                    />
                  </div>
                  <div className="col-md-3 col-6 mt-2">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/fgiit-webinar-batch-3.webp"
                      }
                      alt="FG Group"
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      }}
                      className="lazy img-fluid"
                    />
                  </div>
                  <div className="col-md-3 col-6 mt-2">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/fgiit-webinar-batch-4.webp"
                      }
                      alt="FG Group"
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      }}
                      className="lazy img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="margnitop mt-3">
          <div className="container-fluid">
            <div className="container pt-md-5">
              <div className="col-md-12 mt-5">
                <div className="covid text-center">
                  <h2 className='h2-fs' style={{ color: "#333" }}>
                    <span style={{ color: "white", margin: "0px" }}>
                      Outstanding Training & Placement
                    </span>
                  </h2>
                </div>
                <div className="thm-bg-clr dector mb-md-4 mb-3"></div>
                <div className="row">
                  <div className="item col-md-6 col-12 mt-3">
                    <div className="ply1">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-webinar-certi-1.webp"
                        }
                        className="rounded"
                        width="100%"
                        alt="fggroup"
                      />
                      <div className="video-btn">
                        <a aria-label="Fg Group"
                          onClick={() => openVideoModal("R_hiavab5eg")}
                          className="custom"
                        >
                          <span className="newthing">
                            <i className="fas fa-play"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item col-md-6 col-12 mt-3">
                    <div className="ply1">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-webinar-certi-2.webp"
                        }
                        className="rounded"
                        width="100%"
                        alt="fggroup"
                      />
                      <div className="video-btn">
                        <a aria-label="Fg Group"
                          onClick={() => openVideoModal("F_SW5j5OspQ")}
                          className="custom"
                        >
                          <span className="newthing">
                            <i className="fas fa-play"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item col-md-6 col-12 mt-3">
                    <div className="ply1">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-webinar-certi-3.webp"
                        }
                        className="rounded"
                        width="100%"
                        alt="fggroup"
                      />
                      <div className="video-btn">
                        <a aria-label="Fg Group"
                          onClick={() => openVideoModal("Op1QmV1QxAo")}
                          className="custom"
                        >
                          <span className="newthing">
                            <i className="fas fa-play"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item col-md-6 col-12 mt-3">
                    <div className="ply1">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-webinar-certi-4.webp"
                        }
                        className="rounded"
                        width="100%"
                        alt="fggroup"
                      />
                      <div className="video-btn">
                        <a aria-label="Fg Group"
                          onClick={() => openVideoModal("mcmDaYJJo3U")}
                          className="custom"
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
            </div>
          </div>
        </section>
        <section className="margintop">
          <div className="container-fluid pt-md-5">
            <div className="container">
              <OwlCarousel
                loop
                autoplay
                dots={false}
                id="owl-demo7"
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
                <div className="item m-1 m-md-3">
                  <div className="reviews">
                    <div className="reviews-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/nisha.webp"
                        }
                        alt="FG Group"
                        className="lazy img-fluid"
                      />
                    </div>
                    <div className="reviews-text text-center">
                      <h2 className="h6-fs text-black">Nisha Jariwala</h2>
                      <ul className="d-flex p-0 justify-content-center">
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                      <p className="text-muted mb-0">
                        {" "}
                        "Its A Great Experience To Learn Nutrition With FGIIT.
                        Easy Teaching Patterns, Co-Operative Faculties, This
                        Certified Nutritionist Course Help Me Lots In My Career
                        Graph.. Thnx To FGIIT."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item m-1 m-md-3 mb-4">
                  <div className="reviews">
                    <div className="reviews-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/priti.webp"
                        }
                        alt="FG Group"
                        className="lazy img-fluid"
                      />
                    </div>
                    <div className="reviews-text text-center">
                      <h2 className="h6-fs text-black">Priti Jani</h2>
                      <ul className="d-flex p-0 justify-content-center">
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                      <p className="text-muted mb-0">
                        "I Am So Much Happy That After 25 Years I Did Something
                        New And Good.At This Moment I Appreciate FGIIT For Provide
                        Me Best Coaching Best Support And Best Friends Also.Thanks
                        Gautam."
                      </p>
                      <div className="d-block d-md-block">
                        <span id="mores">
                          <p className="m-0 text-muted">"</p>
                        </span>
                        {/* <div className="swap mt-3">
                                                <button onclick="myBtnevent()" id="myBtnn">Read more</button>
                                            </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item m-1 m-md-3">
                  <div className="reviews">
                    <div className="reviews-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/vipin-kumar.webp"
                        }
                        alt="FG Group"
                        className="lazy img-fluid"
                      />
                    </div>
                    <div className="reviews-text text-center">
                      <h2 className="h6-fs text-black">Vipin Kumar</h2>
                      <ul className="d-flex p-0 justify-content-center">
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                      <p className="text-muted mb-0">
                        FGIIT is one of best institution in india. Just because
                        of there Training skill, individually Doubt Clearance
                        and well Knowledgeable teachers. If anyone is looking
                        for Fitness related course and Grow ur career in this
                        field so this is the best chance for u.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item m-1 m-md-3">
                  <div className="reviews">
                    <div className="reviews-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/pragnesh.webp"
                        }
                        alt="FG Group"
                        className="lazy img-fluid"
                      />
                    </div>
                    <div className="reviews-text text-center">
                      <h2 className="h6-fs text-black">Maisuria Pragnesh</h2>
                      <ul className="d-flex p-0 justify-content-center">
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                      <p className="text-muted mb-0">
                        Without Your Guidance I Never Been A Good Nutritionist
                        Thanks A Lot For Sharing Knowledge With Us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item m-1 m-md-3">
                  <div className="reviews">
                    <div className="reviews-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/grupreet.webp"
                        }
                        alt="FG Group"
                        className="lazy img-fluid"
                      />
                    </div>
                    <div className="reviews-text text-center">
                      <h2 className="h6-fs text-black">Gurpreet Sidhu</h2>
                      <ul className="d-flex p-0 justify-content-center">
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                      <p className="text-muted mb-0">
                        Awesome excellent amazing study coordinator and study
                        module am happy for value for money return every single
                        single Myth clear
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item m-1 m-md-3">
                  <div className="reviews">
                    <div className="reviews-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/ripul-gaba.webp"
                        }
                        alt="FG Group"
                        className="lazy img-fluid"
                      />
                    </div>
                    <div className="reviews-text text-center">
                      <h2 className="h6-fs text-black">Ripul Gabba</h2>
                      <ul className="d-flex p-0 justify-content-center">
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                      <p className="text-muted mb-0">
                        Firstly I want to thank you Gautam sir and his team It's
                        a great time and I am happy to enrol myself in FGIIT
                        institute and I have been gained a lot of knowledge from
                        them all teachers specially Gautam sir gives us great
                        knowledge
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item m-1 m-md-3">
                  <div className="reviews">
                    <div className="reviews-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/abhijeet.webp"
                        }
                        alt="FG Group"
                        className="lazy img-fluid"
                      />
                    </div>
                    <div className="reviews-text text-center">
                      <h2 className="h6-fs text-black">Abhijeet</h2>
                      <ul className="d-flex p-0 justify-content-center">
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                      <p className="text-muted mb-0">
                        knowledgeable n very informative course (AAS). Thank u
                        so much FGIIT Gautam sir n other facilities…🙏🏻🙏🏻
                      </p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid">
            <div className="container">
              <div>
                <Button
                  variant="success"
                  onClick={handleShow}
                  className="w-100 mt-3"
                  style={{
                    backgroundColor: "#8bc34a",
                    color: "black",
                    fontWeight: "bold",
                    boxShadow: "none",
                  }}
                >
                  Reserve Your spot today
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="margnitop mt-3">
          <div className="container-fluid">
            <div className="container pt-md-5">
              <div className="col-md-12 mt-5">
                <div className="covid text-center">
                  <h2 className='h2-fs' style={{ color: "#333" }}>
                    <span style={{ color: "white", margin: "0px" }}>
                      Achievements
                    </span>
                  </h2>
                </div>
                <div className="thm-bg-clr dector mb-md-4 mb-3"></div>
                <div className="row">
                  <div className="item col-md-6 col-12 mt-3">
                    <div className="ply1">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-achievements-1.webp"
                        }
                        className="rounded"
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                  </div>
                  <div className="item col-md-6 col-12 mt-3">
                    <div className="ply1">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-achievements-2.webp"
                        }
                        className="rounded"
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                  </div>
                  <div className="item col-md-6 col-12 mt-3">
                    <div className="ply1">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-achievements-3.webp"
                        }
                        className="rounded"
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                  </div>
                  <div className="item col-md-6 col-12 mt-3">
                    <div className="ply1">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-achievements-4.webp"
                        }
                        className="rounded"
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                  </div>
                  <div className="item col-md-6 col-12 mt-3">
                    <div className="ply1">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-achievements-5.webp"
                        }
                        className="rounded"
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                  </div>
                  <div className="item col-md-6 col-12 mt-3">
                    <div className="ply1">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-achievements-6.webp"
                        }
                        className="rounded"
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                  </div>
                  <div className="item col-md-6 col-12 mt-3">
                    <div className="ply1">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-achievements-7.webp"
                        }
                        className="rounded"
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                  </div>
                  <div className="item col-md-6 col-12 mt-3">
                    <div className="ply1">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-achievements-8.webp"
                        }
                        className="rounded"
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="margintop"
          id="inq_form_fgiit"
          style={{ backgroundColor: "black", padding: "30px 0" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center mb-3 mb-md-0">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/book-appointment.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  alt="client journey"
                />
              </div>
              <div className="col-md-6">
                <div className="text-center">
                  <h2
                    className="mb-3"
                    style={{
                      fontSize: "26px",
                      fontWeight: "600",
                      color: "#fff",
                    }}
                  >
                    Contact Us
                  </h2>
                </div>
                <form id="myForm2" className="mt-3">
                  <div className="form-group">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="form-control"
                      required
                    />
                  </div>
                  <input
                    type="hidden"
                    name="subject"
                    id="subject"
                    value="FitIT Webinar"
                  />
                  <div className="form-group">
                    <input
                      type="number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Mobile"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="options"
                      value={slot}
                      onChange={(e) => setSlot(e.target.value)}
                      className="form-control"
                      required
                    >
                      <option value="" hidden>
                        Select a Slot
                      </option>
                      <option value="08/07/2024 - 11AM to 12PM">
                        08/07/2024 - 11AM to 12PM
                      </option>
                      <option value="15/07/2024 - 11AM to 12PM">
                        15/07/2024 - 11AM to 12PM
                      </option>
                      <option value="22/07/2024 - 11AM to 12PM">
                        22/07/2024 - 11AM to 12PM
                      </option>
                      <option value="29/07/2024 - 11AM to 12PM">
                        29/07/2024 - 11AM to 12PM
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      type="text"
                      placeholder="Messages"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="submit-btn btn btn-lg"
                      onClick={handleApplyForInquiry}
                      style={{ backgroundColor: "#8bc34a" }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="margintop">
          <div className="container-fluid px-0">
            <div className="text-center" style={{ backgroundColor: "#161616" }}>
              <h2 className="h6-fs mb-0 p-3">@2023 GCS. All Right Reserved.</h2>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Button
          variant="success"
          onClick={() => setShowModal(true)}
          className="w-100 blinking-button"
          style={{
            backgroundColor: "#8bc34a",
            color: "black",
            fontWeight: "bold",
            boxShadow: "none",
            position: "fixed",
            zIndex: "9999",
            bottom: "0px",
          }}
        >
          Reserve Your Spot Today!
        </Button>
      </div>
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
                        className="form-control fr"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Your name"
                      />
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="fas fa-envelope"></i>
                      </span>
                      <input
                        className="form-control fr"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="fas fa-phone"></i>
                      </span>
                      <input
                        className="form-control fr"
                        type="number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter Your contact Number"
                      />
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span className="pr-2">
                        <i className="fas fa-user-graduate"></i>
                      </span>
                      <select
                        className="pl-0"
                        name="options"
                        value={slot}
                        onChange={(e) => setSlot(e.target.value)}
                        required
                      >
                        <option value="" hidden className="text-black">
                          Select a Slot
                        </option>
                        <option
                          value="08/07/2024 - 11AM to 12PM"
                          className="text-black"
                        >
                          08/07/2024 - 11AM to 12PM
                        </option>
                        <option
                          value="15/07/2024 - 11AM to 12PM"
                          className="text-black"
                        >
                          15/07/2024 - 11AM to 12PM
                        </option>
                        <option
                          value="22/07/2024 - 11AM to 12PM"
                          className="text-black"
                        >
                          22/07/2024 - 11AM to 12PM
                        </option>
                        <option
                          value="29/07/2024 - 11AM to 12PM"
                          className="text-black"
                        >
                          29/07/2024 - 11AM to 12PM
                        </option>
                      </select>
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="fas fa-pencil-alt"></i>
                      </span>
                      <textarea
                        className="form-control fr"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
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
                  onClick={handleApplyForInquiry}
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

export default FGIITLanding;
