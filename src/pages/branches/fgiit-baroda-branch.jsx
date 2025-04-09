import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "../../assets/css/baroda.css";
import "../../assets/css/timeline5.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button } from "react-bootstrap";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import CountUp from "react-countup";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import FGIITBARODA from "../../pdf/fgiit-baroda.pdf";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Helmet } from "react-helmet";

function FGIITBarodaBranch() {
  const canonicalUrl = window.location.href;
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const $ = window.$;
    $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fas fa-arrow-right"></i>');
  }, []);

  return (
    <>
      <Helmet>
        <title>Fitness Courses in Baroda | FGIIT</title>
        <meta name="description" content="FGIIT, the premier Fitness Academy in Baroda. Offering top-rated diploma and fitness courses tailored to elevate your career. Join now and transform your passion into a profession. Enroll today and book a 7 day free demo session for your favorite course." />
        <meta name="keyword" content="FGIIT, best fitness institute in baroda, fitness courses, diploma courses in fitness, best institute for fitness courses, fitness academy in baroda, fitness academy" />
        <meta property="og:title" content="Fitness Courses in Baroda | FGIIT" />
        <meta property="og:description" content="FGIIT, the premier Fitness Academy in Baroda. Offering top-rated diploma and fitness courses tailored to elevate your career. Join now and transform your passion into a profession. Enroll today and book a 7 day free demo session for your favorite course." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgiit-baroda-branch" />
        <link rel="canonical" href={{ canonicalUrl }} />
      </Helmet>
      <SimpleHeader />
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
                  "/assets/images/fwg/banner-mobile-baroda-1.webp"
                }
                width="100%"
                alt="fggroup"
              />
              <img
                className="d-block d-md-none w-100 lazy"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fwg/banner-mobile-baroda-1-1.webp"
                }
                alt="fggroup"
              />
            </div>
            <div className="item">
              <img
                className="d-none d-md-block lazy"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fwg/banner-mobile-baroda-2.webp"
                }
                width="100%"
                alt="fggroup"
              />
              <img
                className="d-block d-md-none w-100 lazy"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fwg/banner-mobile-baroda-2-1.webp"
                }
                alt="fggroup"
              />
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 pb-3 bg-contain">
              <LazyLoadImage
                effect="blur"
                className="img-fluid w-100"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fwg/fwg-baroda-intro.webp"
                }
                alt="About"
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="col-md-6 pl-md-4">
              <span className="section-title-border"></span>
              <p className="subtitle paragraph">About Us</p>
              <h2 className="h2-fs section-title mt-3 mb-3 h2">Our All Courses</h2>
              <p className="paragraph">
                FGIIT Offers A Variety Of Courses Keeping In Mind The Talent Of
                The Indian Youth And To Develop More Of Those Sectors Which Are
                Declared As Under Skill
                {showMore ? (
                  <p className="paragraph">
                    Development And Also To Identify New Sectors For Skill
                    Development. The Main Purpose Is To Create Opportunities,
                    Space And Scope For The Individuals Who Were Not Able To Get
                    Education After Passing The 10th ClassName. The Reasons Can
                    Be Financial Constraints, Family Problems, Societal
                    Constraints Or Any Other Which Forced Them To Stay Behind.
                  </p>
                ) : (
                  <span id="dotsx">...</span>
                )}
              </p>
              <p
                onClick={toggleReadMore}
                id="myBtnn"
                style={{ color: "#00afef", fontWeight: "500" }}
              >
                {showMore ? "Read less" : "Read more"}
              </p>
              <div className="row mt-3">
                <div className="col-lg-6">
                  <ul className="pl-4">
                    <li className="paragraph disc">
                      Nutri Trainer Course
                    </li>
                    <li className="paragraph disc">
                      Diploma In Personal Training Course
                    </li>
                    <li className="paragraph disc">
                      Diploma In Nutrition Course
                    </li>
                    <li className="paragraph disc">
                      AAS MasterclassName Certification
                    </li>
                    <li className="paragraph disc">
                      TRX Band Workshop
                    </li>
                    <li className="paragraph disc">
                      Tabata Workshop
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="pl-4">
                    <li className="paragraph disc">
                      Functional Training Workshop
                    </li>
                    <li className="paragraph disc">
                      Mix Martial Arts Workshop
                    </li>
                    <li className="paragraph disc">
                      Powerlifting Coach Workshop
                    </li>
                    <li className="paragraph disc">
                      Injury Rehabilitation Workshop
                    </li>
                    {/* <li className="paragraph disc">
                      Advance Clinical Nutrition Workshop
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-white pt-0">
        <div className="section bg-secondary section-bottom-lg">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <span className="section-title-border border-center"></span>
                <p className="subtitle paragraph">courses</p>
                <h2 className="h2-fs section-title text-white h2">we provide</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="service-wrapper">
          <div className="container">
            <OwlCarousel
              loop
              dots={false}
              nav
              id="fwg-owl"
              className="owl-theme"
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
              <div className="mb-5 item mx-2">
                <div className="card border-0 rounded-0 box-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/offline1.webp"
                    }
                    alt="Card cap"
                  />
                  <div className="card-body position-relative py-5">
                    <h2 className="h3-fs h3">
                      <Link to="#" className="text-dark">
                        Nutri Trainer Course
                      </Link>
                    </h2>
                    <h2 className="h4-fs h4">Duration: 1 Month</h2>
                    <p className="card-text paragraph mb-3">
                      FGIIT Is Here With The Perfect Blend Of All The Major
                      Courses Like Personal Training, Dietician, Group
                      Instructor, Performance-Enhancing Drugs, And
                      Supplementation. The Recruitment Comes From Both The
                      Health Departments Of Government.
                    </p>
                    <h2 className="h3-fs h3">
                      ₹34500/-
                      <del
                        style={{
                          color: "red",
                          marginLeft: "10px",
                          fontSize: "26px",
                        }}
                      >
                        69000/-
                      </del>
                    </h2>
                    <div>
                      <Link
                        to="https://api.whatsapp.com/send?phone=8866842520&amp;text=Hello I want to know more about FGIIT Courses in baroda branch."
                        className="btn btn-primary p-3 mx-2 my-2 fs-18"
                      >
                        Contact Now
                      </Link>
                      <a
                        href={FGIITBARODA}
                        download
                        className="btn btn-success p-3 mx-2 my-2 fs-18"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 item mx-2">
                <div className="card border-0 rounded-0 box-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/offline2.webp"
                    }
                    alt="Card cap"
                  />
                  <div className="card-body position-relative py-5">
                    <h2 className="h3-fs h3">
                      <Link to="#" className="text-dark">
                        Diploma In Personal Training Course
                      </Link>
                    </h2>
                    <h2 className="h4-fs h4">Duration: 3 Months</h2>
                    <p className="card-text paragraph mb-3">
                      This Course Helps You To Become Certified PersonalTrainer
                      Which Every Client Wants. A Personal Trainer Creates
                      One-On-One Fitness Programs For Their Clients.
                    </p>
                    <h2 className="h3-fs h3">
                      20995/-
                      <del
                        style={{
                          color: "red",
                          marginLeft: "10px",
                          fontSize: "26px",
                        }}
                      >
                        41990/-
                      </del>
                    </h2>
                    <div>
                      <Link
                        to="https://api.whatsapp.com/send?phone=8866842520&amp;text=Hello I want to know more about FGIIT Courses in baroda branch."
                        className="btn btn-primary p-3 mx-2 my-2 fs-18"
                      >
                        Contact Now
                      </Link>
                      <a
                        href={FGIITBARODA}
                        download
                        className="btn btn-success p-3 mx-2 my-2 fs-18"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 item mx-2">
                <div className="card border-0 rounded-0 box-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/offline3.webp"
                    }
                    alt="Card cap"
                  />
                  <div className="card-body position-relative py-5">
                    <h2 className="h3-fs h3">
                      <Link to="#" className="text-dark">
                        Diploma In Nutrition Course
                      </Link>
                    </h2>
                    <h2 className="h4-fs h4">Duration: 3 Months</h2>
                    <p className="card-text paragraph mb-3">
                      Diploma In Nutrition Course Diverse Course Where We Are
                      Teaching Our Nutritionist Students That How To Make A Diet
                      For Clinically Ill Patients For Fat Loss And Muscle
                      Building.
                    </p>
                    <h2 className="h3-fs h3">
                      20995/-
                      <del
                        style={{
                          color: "red",
                          marginLeft: "10px",
                          fontSize: "26px",
                        }}
                      >
                        41990/-
                      </del>
                    </h2>
                    <div>
                      <Link
                        to="https://api.whatsapp.com/send?phone=8866842520&amp;text=Hello I want to know more about FGIIT Courses in baroda branch."
                        className="btn btn-primary p-3 mx-2 my-2 fs-18"
                      >
                        Contact Now
                      </Link>
                      <a
                        href={FGIITBARODA}
                        download
                        className="btn btn-success p-3 mx-2 my-2 fs-18"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 item mx-2">
                <div className="card border-0 rounded-0 box-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/trx-workshop-banner.webp"
                    }
                    alt="Card cap"
                  />
                  <div className="card-body position-relative py-5">
                    <h2 className="h3-fs h3">
                      <Link to="#" className="text-dark">
                        TRX Band Workshop
                      </Link>
                    </h2>
                    <h2 className="h4-fs h4">Duration: 2 Day's</h2>
                    <p className="card-text paragraph mb-3">
                      Elevate Your Fitness With Our Offline TRX Band Workshop:
                      Resistance Training, TRX Basics, Upper & Lower Body
                      Workouts, Stretching, Fat Loss, And Muscle Building.
                    </p>
                    <h2 className="h3-fs h3">
                      ₹2499/-
                      <del
                        style={{
                          color: "red",
                          marginLeft: "10px",
                          fontSize: "26px",
                        }}
                      >
                        4999/-
                      </del>
                    </h2>
                    <div>
                      <Link
                        to="https://api.whatsapp.com/send?phone=8866842520&amp;text=Hello I want to know more about FGIIT Courses in baroda branch."
                        className="btn btn-primary p-3 mx-2 my-2 fs-18"
                      >
                        Contact Now
                      </Link>
                      <a
                        href={FGIITBARODA}
                        download
                        className="btn btn-success p-3 mx-2 my-2 fs-18"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 item mx-2">
                <div className="card border-0 rounded-0 box-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/Tabata-Workshop-banner.webp"
                    }
                    alt="Card cap"
                  />
                  <div className="card-body position-relative py-5">
                    <h2 className="h3-fs h3">
                      <Link to="#" className="text-dark">
                        Tabata Workshop
                      </Link>
                    </h2>
                    <h2 className="h4-fs h4">Duration: 2 Day's</h2>
                    <p className="card-text paragraph mb-3">
                      Dive Into Tabata With Our Comprehensive Workshop:
                      Introduction, Science, Exercise Creation, Upper & Lower
                      Body FocusWarm-Up, Fat Loss & Muscle Building Principles.
                    </p>
                    <h2 className="h3-fs h3">
                      ₹2499/-
                      <del
                        style={{
                          color: "red",
                          marginLeft: "10px",
                          fontSize: "26px",
                        }}
                      >
                        4999/-
                      </del>
                    </h2>
                    <div>
                      <Link
                        to="https://api.whatsapp.com/send?phone=8866842520&amp;text=Hello I want to know more about FGIIT Courses in baroda branch."
                        className="btn btn-primary p-3 mx-2 my-2 fs-18"
                      >
                        Contact Now
                      </Link>
                      <a
                        href={FGIITBARODA}
                        download
                        className="btn btn-success p-3 mx-2 my-2 fs-18"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 item mx-2">
                <div className="card border-0 rounded-0 box-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/Functional-Training-Workshop-banner.webp"
                    }
                    alt="Card cap"
                  />
                  <div className="card-body position-relative py-5">
                    <h2 className="h3-fs h3">
                      <Link to="#" className="text-dark">
                        Functional Training Workshop
                      </Link>
                    </h2>
                    <h2 className="h4-fs h4">Duration: 2 Day's</h2>
                    <p className="card-text paragraph mb-3">
                      Explore The Science,Design Effective Exercises, Target
                      Upper And Lower Body, Optimize Warm-Ups, And Uncover
                      Principles For Fat Loss And Muscle Building.
                    </p>
                    <h2 className="h3-fs h3">
                      ₹2499/-
                      <del
                        style={{
                          color: "red",
                          marginLeft: "10px",
                          fontSize: "26px",
                        }}
                      >
                        4999/-
                      </del>
                    </h2>
                    <div>
                      <Link
                        to="https://api.whatsapp.com/send?phone=8866842520&amp;text=Hello I want to know more about FGIIT Courses in baroda branch."
                        className="btn btn-primary p-3 mx-2 my-2 fs-18"
                      >
                        Contact Now
                      </Link>
                      <a
                        href={FGIITBARODA}
                        download
                        className="btn btn-success p-3 mx-2 my-2 fs-18"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 item mx-2">
                <div className="card border-0 rounded-0 box-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/Mix_martial_art.webp"
                    }
                    alt="Card cap"
                  />
                  <div className="card-body position-relative py-5">
                    <h2 className="h3-fs h3">
                      <Link to="#" className="text-dark">
                        Mix Martial Arts Workshop
                      </Link>
                    </h2>
                    <h2 className="h4-fs h4">Duration: 2 Day's</h2>
                    <p className="card-text paragraph mb-3">
                      Explore Martial Arts Essentials: Stances, Hand & Kicking
                      Techniques, Defense, Forms, Sparring,And Self-Defense.
                      Elevate Your Skills for your healthy body!
                    </p>
                    <h2 className="h3-fs h3">
                      ₹2499/-
                      <del
                        style={{
                          color: "red",
                          marginLeft: "10px",
                          fontSize: "26px",
                        }}
                      >
                        4999/-
                      </del>
                    </h2>
                    <div>
                      <Link
                        to="https://api.whatsapp.com/send?phone=8866842520&amp;text=Hello I want to know more about FGIIT Courses in baroda branch."
                        className="btn btn-primary p-3 mx-2 my-2 fs-18"
                      >
                        Contact Now
                      </Link>
                      <a
                        href={FGIITBARODA}
                        download
                        className="btn btn-success p-3 mx-2 my-2 fs-18"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 item mx-2">
                <div className="card border-0 rounded-0 box-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/powerlifting-banner.webp"
                    }
                    alt="Card cap"
                  />
                  <div className="card-body position-relative py-5">
                    <h2 className="h3-fs h3">
                      <Link to="#" className="text-dark">
                        Powerlifting Coach Workshop
                      </Link>
                    </h2>
                    <h2 className="h4-fs h4">Duration: 2 Day's</h2>
                    <p className="card-text paragraph mb-3">
                      Master Powerlifting With Our Comprehensive Workshop:
                      Intro, Biomechanics, Strength Principles, Coaching,
                      Ethics, Andpractical Training.
                    </p>
                    <h2 className="h3-fs h3">
                      ₹2499/-
                      <del
                        style={{
                          color: "red",
                          marginLeft: "10px",
                          fontSize: "26px",
                        }}
                      >
                        4999/-
                      </del>
                    </h2>
                    <div>
                      <Link
                        to="https://api.whatsapp.com/send?phone=8866842520&amp;text=Hello I want to know more about FGIIT Courses in baroda branch."
                        className="btn btn-primary p-3 mx-2 my-2 fs-18"
                      >
                        Contact Now
                      </Link>
                      <a
                        href={FGIITBARODA}
                        download
                        className="btn btn-success p-3 mx-2 my-2 fs-18"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 item mx-2">
                <div className="card border-0 rounded-0 box-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/offline6.webp"
                    }
                    alt="Card cap"
                  />
                  <div className="card-body position-relative py-5">
                    <h2 className="h3-fs h3">
                      <Link to="#" className="text-dark">
                        Injury rehabilitation masterclass
                      </Link>
                    </h2>
                    <h2 className="h4-fs h4">Duration: 2 Day's</h2>
                    <p className="card-text paragraph mb-3">
                      Clients May Wish To Lose Weight Or Gain Muscle, And As A
                      Personal Trainer, You'll Instruct And Assist Them With
                      Exercising Appropriately Utilizing Exercises And Explicit
                      Plans.
                    </p>
                    <h2 className="h3-fs h3">
                      ₹1999/-
                      <del
                        style={{
                          color: "red",
                          marginLeft: "10px",
                          fontSize: "26px",
                        }}
                      >
                        3999/-
                      </del>
                    </h2>
                    <div>
                      <Link
                        to="https://api.whatsapp.com/send?phone=8866842520&amp;text=Hello I want to know more about FGIIT Courses in baroda branch."
                        className="btn btn-primary p-3 mx-2 my-2 fs-18"
                      >
                        Contact Now
                      </Link>
                      <a
                        href={FGIITBARODA}
                        download
                        className="btn btn-success p-3 mx-2 my-2 fs-18"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 item mx-2">
                <div className="card border-0 rounded-0 box-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/offline7.webp"
                    }
                    alt="Card cap"
                  />
                  <div className="card-body position-relative py-5">
                    <h2 className="h3-fs h3">
                      <Link to="#" className="text-dark">
                        Advance Clinical Nutrition
                      </Link>
                    </h2>
                    <h2 className="h4-fs h4">Duration: 2 Day's</h2>
                    <p className="card-text paragraph mb-3">
                      Wellness Consultant Is A Course Where You Learn How To
                      Fight Diseases Like Diabetes,Cancer. These Are The
                      Diseases Is Can Not Be Controlled By Medicine Only.
                    </p>
                    <h2 className="h3-fs h3">
                      ₹1999/-
                      <del
                        style={{
                          color: "red",
                          marginLeft: "10px",
                          fontSize: "26px",
                        }}
                      >
                        3999/-
                      </del>
                    </h2>
                    <div>
                      <Link
                        to="https://api.whatsapp.com/send?phone=8866842520&amp;text=Hello I want to know more about FGIIT Courses in baroda branch."
                        className="btn btn-primary p-3 mx-2 my-2 fs-18"
                      >
                        Contact Now
                      </Link>
                      <a
                        href={FGIITBARODA}
                        download
                        className="btn btn-success p-3 mx-2 my-2 fs-18"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5 item mx-2">
                <div className="card border-0 rounded-0 box-shadow">
                  <img
                    className="card-img-top rounded-0"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/offline4.webp"
                    }
                    alt="Card cap"
                  />
                  <div className="card-body position-relative py-5">
                    <h2 className="h3-fs h3">
                      <Link to="#" className="text-dark">
                        AAS MasterclassName Certification
                      </Link>
                    </h2>
                    <h2 className="h4-fs h4">Duration: 1 Month</h2>
                    <p className="card-text paragraph mb-3">
                      In The Era, Where Everyone Is Using Performance-Enhancing
                      Drugs To Win, You Should Not Be Left Out From The Victory
                      Or Make Any Decision That Can Harm Your Life.
                    </p>
                    <h2 className="h3-fs h3">
                      ₹1999/-
                      <del
                        style={{
                          color: "red",
                          marginLeft: "10px",
                          fontSize: "26px",
                        }}
                      >
                        3999/-
                      </del>
                    </h2>
                    <div>
                      <Link
                        to="https://api.whatsapp.com/send?phone=8866842520&amp;text=Hello I want to know more about FGIIT Courses in baroda branch."
                        className="btn btn-primary p-3 mx-2 my-2 fs-18"
                      >
                        Contact Now
                      </Link>
                      <a
                        href={FGIITBARODA}
                        download
                        className="btn btn-success p-3 mx-2 my-2 fs-18"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="section bg-gray pt-0">
        <div className="mb-4">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <span className="section-title-border"></span>
                <p className="subtitle paragraph">What Does This</p>
                <h2 className="h2-fs h2">Courses Include</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <div className="icon-bg mb-4 water-wave">
                  <LazyLoadImage
                    effect="blur"
                    className="mt-3"
                    alt="online training"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/learning.webp"
                    }
                  />
                </div>
                <h2 className="h4-fs mb-4 h4">Live Classes On Zoom</h2>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <div className="icon-bg mb-4 water-wave">
                  <LazyLoadImage
                    effect="blur"
                    className="mt-3 lazy"
                    alt="recorded session"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/online-class.webp"
                    }
                  />
                </div>
                <h2 className="h4-fs mb-4 h4">Recorded Sessions Are Included</h2>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <div className="icon-bg mb-4 water-wave">
                  <LazyLoadImage
                    effect="blur"
                    className="mt-3 lazy"
                    alt="job placement"
                    src={process.env.PUBLIC_URL + "/assets/images/img/job.webp"}
                  />
                </div>
                <h2 className="h4-fs mb-4 h4">100% Job Placement Guarantee</h2>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <div className="icon-bg mb-4 water-wave">
                  <LazyLoadImage
                    effect="blur"
                    className="mt-3 lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/book.webp"
                    }
                    alt="book"
                  />
                </div>
                <h2 className="h4-fs mb-4 h4">Book Delivered To Your Home</h2>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <div className="icon-bg mb-4 water-wave">
                  <LazyLoadImage
                    effect="blur"
                    className="mt-3 lazy"
                    alt="course certification"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/certificate.webp"
                    }
                  />
                </div>
                <h2 className="h4-fs mb-4 h4">4 Different Certification</h2>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <div className="icon-bg mb-4 water-wave">
                  <LazyLoadImage
                    effect="blur"
                    className="mt-3 lazy"
                    alt="FG Group"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/score.webp"
                    }
                  />
                </div>
                <h2 className="h4-fs mb-4 h4">Case Study Based Project</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid p-0">
          <Button
            href="https://api.whatsapp.com/send?phone=8866842520&amp;text=Hello I want to know more about EMI Option in FGIIT Courses in baroda branch."
            className="btnnnnn1 py-5 d-block"
          >
            EMI Options Available
          </Button>
        </div>
      </section>
      <section className="section pt-0 mt-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <span className="section-title-border border-center"></span>
                <p className="subtitle paragraph">Students</p>
                <h2 className="h2-fs section-title h2">Job Placement</h2>
              </div>
              <div className="col-12">
                <section id="conference-timeline">
                  <div className="conference-center-line"></div>
                  <div className="conference-timeline-content">
                    <div className="timeline-article">
                      <div className="content-left-container d-block d-lg-none">
                        <div className="content-left p-0">
                          <div className="ply1">
                            <LazyLoadImage
                              effect="blur"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/t&p-review-6.webp"
                              }
                              width="100%"
                              alt="fggroup"
                            />
                            <div className="video-btn">
                              <Link
                                to="https://youtu.be/IB3r7I7Z2zY"
                                data-flashy-type="video"
                                className="custom"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="p-4">
                            <h2 className="h2-fs h2">Chirag pandey</h2>
                            <h2 className="h3-fs h3">24 Lakh Annum</h2>
                            <p className="paragraph">
                              Starting as a fitness trainer, with guidance from
                              Gautam Sir's expertise I started taking sessions
                              as an instructor in FGIIT. Now I am a Manager at
                              FGIIT and very prouf of my journey.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-left-container d-none d-lg-block">
                        <div className="content-left">
                          <h2 className="h2-fs h2 mt-0">Chirag pandey</h2>
                          <h2 className="h3-fs h3">24 Lakh Annum</h2>
                          <p className="paragraph">
                            Starting as a fitness trainer, with guidance from
                            Gautam Sir's expertise I started taking sessions as
                            an instructor in FGIIT. Now I am a Manager at FGIIT
                            and very prouf of my journey.
                          </p>
                        </div>
                      </div>
                      <div className="content-right-container d-none d-lg-block">
                        <div className="content-right p-1">
                          <div className="ply1">
                            <LazyLoadImage
                              effect="blur"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/t&p-review-6.webp"
                              }
                              width="100%"
                              alt="fggroup"
                            />
                            <div className="video-btn">
                              <Link
                                to="https://youtu.be/IB3r7I7Z2zY"
                                data-flashy-type="video"
                                className="custom"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="meta-date">
                        <span className="date">
                          <i className="fas fa-dumbbell"></i>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-article">
                      <div className="content-left-container d-block d-lg-none">
                        <div className="content-left p-0">
                          <div className="ply1">
                            <LazyLoadImage
                              effect="blur"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/t&p-review-7.webp"
                              }
                              width="100%"
                              alt="fggroup"
                            />
                            <div className="video-btn">
                              <Link
                                to="https://youtube.com/aI4wdD47mqk?feature=share"
                                data-flashy-type="video"
                                className="custom"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="p-4">
                            <h2 className="h2-fs h2">Chirag Chandlekar</h2>
                            <h2 className="h3-fs h3">18 Lakh Annum</h2>
                            <p className="paragraph">
                              Started my career as a trainer and now I am an
                              Admin & HR Manager of FGIIT. All thanks to Gautam
                              Sir & Chirag sir for giving me an amazing
                              opportunity.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-right-container d-none d-lg-block">
                        <div className="content-right">
                          <h2 className="h2-fs h2 mt-0">Chirag Chandlekar</h2>
                          <h2 className="h3-fs h3">18 Lakh Annum</h2>
                          <p className="paragraph">
                            Started my career as a trainer and now I am an Admin
                            & HR Manager of FGIIT. All thanks to Gautam Sir &
                            Chirag sir for giving me an amazing opportunity.
                          </p>
                        </div>
                      </div>
                      <div className="content-left-container d-none d-lg-block">
                        <div className="content-left p-1">
                          <div className="ply1">
                            <LazyLoadImage
                              effect="blur"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/t&p-review-7.webp"
                              }
                              width="100%"
                              alt="fggroup"
                            />
                            <div className="video-btn">
                              <Link
                                to="https://youtube.com/aI4wdD47mqk?feature=share"
                                data-flashy-type="video"
                                className="custom"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="meta-date">
                        <span className="date">
                          <i className="fas fa-dumbbell"></i>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-article">
                      <div className="content-left-container d-block d-lg-none">
                        <div className="content-left p-0">
                          <div className="ply1">
                            <LazyLoadImage
                              effect="blur"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/t&p-review-5.webp"
                              }
                              width="100%"
                              alt="fggroup"
                            />
                            <div className="video-btn">
                              <Link
                                to="https://youtube.com/xAMczxGyrbc?feature=share"
                                data-flashy-type="video"
                                className="custom"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="p-4">
                            <h2 className="h2-fs h2">kaushik Jadav</h2>
                            <h2 className="h3-fs h3">10 Lakh Annum</h2>
                            <p className="paragraph">
                              I would like to thank FGIIT for providing me an
                              amazing opportunity to work as a Personal Trainer
                              for FWG. Very Happy & Satisfied with the results I
                              am giving to my clients.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-left-container d-none d-lg-block">
                        <div className="content-left">
                          <h2 className="h2-fs h2 mt-0">kaushik Jadav</h2>
                          <h2 className="h3-fs h3">10 Lakh Annum</h2>
                          <p className="paragraph">
                            I would like to thank FGIIT for providing me an
                            amazing opportunity to work as a Personal Trainer
                            for FWG. Very Happy & Satisfied with the results I
                            am giving to my clients.
                          </p>
                        </div>
                      </div>
                      <div className="content-right-container d-none d-lg-block">
                        <div className="content-right p-1">
                          <div className="ply1">
                            <LazyLoadImage
                              effect="blur"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/t&p-review-5.webp"
                              }
                              width="100%"
                              alt="fggroup"
                            />
                            <div className="video-btn">
                              <Link
                                to="https://youtube.com/xAMczxGyrbc?feature=share"
                                data-flashy-type="video"
                                className="custom"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="meta-date">
                        <span className="date">
                          <i className="fas fa-dumbbell"></i>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-article">
                      <div className="content-left-container d-block d-lg-none">
                        <div className="content-left p-0">
                          <div className="ply1">
                            <LazyLoadImage
                              effect="blur"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/t&p-review-1.webp"
                              }
                              width="100%"
                              alt="fggroup"
                            />
                            <div className="video-btn">
                              <Link
                                to="https://youtube.com/XQuXwYE31zc?feature=share"
                                data-flashy-type="video"
                                className="custom"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="p-4">
                            <h2 className="h2-fs h2">Satish Nishad</h2>
                            <h2 className="h3-fs h3">10 Lakh Annum</h2>
                            <p className="paragraph">
                              Very happy to start my career as a personal
                              trainer at Fitness With Gomzi. Grateful to Gautam
                              sir & Chirag for giving me this wonderful
                              opportunity. Thank you FGIIT.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-right-container d-none d-lg-block">
                        <div className="content-right">
                          <h2 className="h2-fs h2 mt-0">Satish Nishad</h2>
                          <h2 className="h3-fs h3">10 Lakh Annum</h2>
                          <p className="paragraph">
                            Very happy to start my career as a personal trainer
                            at Fitness With Gomzi. Grateful to Gautam sir &
                            Chirag for giving me this wonderful opportunity.
                            Thank you FGIIT.
                          </p>
                        </div>
                      </div>
                      <div className="content-left-container d-none d-lg-block">
                        <div className="content-left p-1">
                          <div className="ply1">
                            <LazyLoadImage
                              effect="blur"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/fgiit/t&p-review-1.webp"
                              }
                              width="100%"
                              alt="fggroup"
                            />
                            <div className="video-btn">
                              <Link
                                to="https://youtube.com/XQuXwYE31zc?feature=share"
                                data-flashy-type="video"
                                className="custom"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="meta-date">
                        <span className="date">
                          <i className="fas fa-dumbbell"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section pt-0 mt-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <span className="section-title-border border-center"></span>
                <p className="subtitle paragraph">Our</p>
                <h2 className="h2-fs section-title h2 mb-3">CERTIFIED STUDENTS</h2>
              </div>
              <div className="col-6 p-0">
                <div className="box-shadow p-3">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/student-6.webp"
                    }
                    alt="certi"
                    className="lazy"
                    width="100%"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="box-shadow p-3">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/student-5.webp"
                    }
                    alt="certi"
                    className="lazy"
                    width="100%"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="box-shadow p-3">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/student-4.webp"
                    }
                    alt="certi"
                    className="lazy"
                    width="100%"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="box-shadow p-3">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/student-3.webp"
                    }
                    alt="certi"
                    className="lazy"
                    width="100%"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="item">
                  <div className="box-shadow p-3">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/batch-12.jpeg"
                      }
                      alt="certi"
                      className="lazy"
                      width="100%"
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="item">
                  <div className="box-shadow p-3">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/batch-11.jpeg"
                      }
                      alt="certi"
                      className="lazy"
                      width="100%"
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="item">
                  <div className="box-shadow p-3">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/batch-10.jpeg"
                      }
                      alt="certi"
                      className="lazy"
                      width="100%"
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="item">
                  <div className="box-shadow p-3">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/batch-9.jpeg"
                      }
                      alt="certi"
                      className="lazy"
                      width="100%"
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-gray bg-dots">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span className="section-title-border border-center"></span>
              <p className="subtitle paragraph">Testimonials</p>
              <h2 className="h2-fs section-title h2">What Clients Are Say?</h2>
            </div>
            <div className="col-10 mx-auto">
              <OwlCarousel
                dots={false}
                nav
                loop
                autoplay
                id="fwg-owl"
                className="owl-theme mb-5"
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
                <div className="text-center item">
                  <img
                    className="img-fluid box-shadow rounded-circle mb-5 d-inline-block"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/nisha.webp"
                    }
                    alt="client"
                    style={{ width: "100px" }}
                  />
                  <div className="bg-quote text-center pt-md-4">
                    <h2 className="h4-fs h4">Nisha Jariwala</h2>
                    <p className="font-italic mb-5 h5 text-dark paragraph">
                      "Its A Great Experience To Learn Nutrition With FGIIT.
                      Easy Teaching Patterns, Co-Operative Faculties, This
                      Certified Nutritionist Course Help Me Lots In My Career
                      Graph.. Thnx To FGIIT."
                    </p>
                  </div>
                </div>
                <div className="text-center item">
                  <img
                    className="img-fluid box-shadow rounded-circle mb-5 d-inline-block"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/priti.webp"
                    }
                    alt="client"
                    style={{ width: "100px" }}
                  />
                  <div className="bg-quote text-center pt-md-4">
                    <h2 className="h4-fs h4">Priti Jani</h2>
                    <p className="font-italic mb-5 h5 text-dark paragraph">
                      "I Am So Much Happy That After 25 Years I Did Something
                      New And Good.At This Moment I Appreciate FGIIT For Provide
                      Me Best Coaching Best Support And Best Friends Also.Thanks
                      Gautam."
                    </p>
                  </div>
                </div>
                <div className="text-center item">
                  <img
                    className="img-fluid box-shadow rounded-circle mb-5 d-inline-block"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/vipin-kumar.webp"
                    }
                    alt="client"
                    style={{ width: "100px" }}
                  />
                  <div className="bg-quote text-center pt-md-4">
                    <h2 className="h4-fs h4">Vipin Kumar</h2>
                    <p className="font-italic mb-5 h5 text-dark paragraph">
                      "FGIIT is one of best institution in india. Just because
                      of there Training skill, individually Doubt Clearance and
                      well Knowledgeable teachers. If anyone is looking for
                      Fitness related course and Grow ur career in this field so
                      this is the best chance for u."
                    </p>
                  </div>
                </div>
                <div className="text-center item">
                  <img
                    className="img-fluid box-shadow rounded-circle mb-5 d-inline-block"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/pragnesh.webp"
                    }
                    alt="client"
                    style={{ width: "100px" }}
                  />
                  <div className="bg-quote text-center pt-md-4">
                    <h2 className="h4-fs h4">Maisuria Pragnesh</h2>
                    <p className="font-italic mb-5 h5 text-dark paragraph">
                      "Without Your Guidance I Never Been A Good Nutritionist
                      Thanks A Lot For Sharing Knowledge With Us."
                    </p>
                  </div>
                </div>
                <div className="text-center item">
                  <img
                    className="img-fluid box-shadow rounded-circle mb-5 d-inline-block"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/grupreet.webp"
                    }
                    alt="client"
                    style={{ width: "100px" }}
                  />
                  <div className="bg-quote text-center pt-md-4">
                    <h2 className="h4-fs h4">Gurpreet Sidhu</h2>
                    <p className="font-italic mb-5 h5 text-dark paragraph">
                      "Awesome excellent amazing study coordinator and study
                      module am happy for value for money return every single
                      single Myth clear."
                    </p>
                  </div>
                </div>
                <div className="text-center item">
                  <img
                    className="img-fluid box-shadow rounded-circle mb-5 d-inline-block"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/ripul-gaba.webp"
                    }
                    alt="client"
                    style={{ width: "100px" }}
                  />
                  <div className="bg-quote text-center pt-md-4">
                    <h2 className="h4-fs h4">Maisuria Pragnesh</h2>
                    <p className="font-italic mb-5 h5 text-dark paragraph">
                      "Firstly I want to thank you Gautam sir and his team It's
                      a great time and I am happy to enrol myself in FGIIT
                      institute and I have been gained a lot of knowledge from
                      them all teachers specially Gautam sir gives us great
                      knowledge."
                    </p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-fluid">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-12 text-center">
                <span className="section-title-border border-center"></span>
                <p className="subtitle paragraph">About Us</p>
                <h2 className="h2-fs section-title h2">
                  Our Institute Accreditation
                </h2>
              </div>
              <div className="col-md-5 bg-contain">
                <img
                  className="img-fluid w-100"
                  alt="About"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/latter-nsdc.webp"
                  }
                />
              </div>
              <div className="col-md-6">
                <p className="mb-2 paragraph" style={{ lineHeight: "30px" }}>
                  We Started These Online Nutrition Courses In India, To Make
                  The Fitness And Nutrition Industry-Main Streamline After The
                  10th. A Student Who Wants To Follow Their Passion And Earn
                  Money Simultaneously Can Register For Our Online Nutrition
                  Courses & Online Personal Training Courses. We Explain The
                  Importance Of The Certified Fitness Trainer Course, Personal
                  Trainer Course In India, Nutritionist Course Online India.
                </p>
                <p
                  className="mb-2 paragraph mt-4"
                  style={{ lineHeight: "30px" }}
                >
                  So, What Are The Best Certifications For Personal Trainers? We
                  Are Entitled To The Crown Of Top Institute For Online
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
              <div className="col"></div>
              <div className="col-md-8 mt-4 mb-3 mb-md-0">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/certificate.webp"
                  }
                  width="100%"
                  className="lazy"
                  alt="FG Group"
                />
              </div>
              <div className="col"></div>
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <div className="d-none d-md-block">
                  <img
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
                  <img
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
      </section>
      <section className="py-5 bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
              <div className="text-center">
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/graduates.png"
                    }
                    alt="shape"
                  />
                </div>
                <div>
                  <h2 className="h3-fs text-white mb-0 h3">
                    <CountUp
                      end={16000}
                      duration={3}
                      separator=","
                      className="counter"
                    />
                    +
                  </h2>
                  <span className="text-white fs-25">
                    Total Student
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
              <div className="text-center">
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/online-learning.png"
                    }
                    alt="shape"
                  />
                </div>
                <div>
                  <h2 className="h3-fs text-white mb-0 h3">
                    <CountUp
                      end={4150}
                      duration={3}
                      separator=","
                      className="counter"
                    />
                    +
                  </h2>
                  <span className="text-white fs-25">
                    Online Student
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
              <div className="text-center">
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/student.png"
                    }
                    alt="shape"
                  />
                </div>
                <div>
                  <h2 className="h3-fs text-white mb-0 h3">
                    <CountUp
                      end={1850}
                      duration={3}
                      separator=","
                      className="counter"
                    />
                    +
                  </h2>
                  <span className="text-white fs-25">
                    Offline Student
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-5 mb-lg-0">
              <div className="text-center">
                <div>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/self-learning.png"
                    }
                    alt="shape"
                  />
                </div>
                <div>
                  <h2 className="h3-fs text-white mb-0 h3">
                    <CountUp
                      end={10000}
                      duration={3}
                      separator=","
                      className="counter"
                    />
                    +
                  </h2>
                  <span className="text-white fs-25">
                    Self Learning Student
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <span className="section-title-border border-center"></span>
                <p className="subtitle paragraph">All Course</p>
                <h2 className="h2-fs section-title h2">Demo Lectures</h2>
              </div>
              <div className="col-md-6">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/online-course-dpt.webp"
                    }
                    width="100%"
                    className="lazy"
                    alt="fggroup"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/ZYoKVIfbJzY"
                      data-flashy-type="video"
                      className="custom"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <h2 className="h4-fs h4">Diploma In Personal Training Course</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/online-course-dnc.webp"
                    }
                    width="100%"
                    className="lazy"
                    alt="fggroup"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/j6u_P9NYp4w"
                      data-flashy-type="video"
                      className="custom"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <h2 className="h4-fs h4">Diploma In Nutrition Course</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/online-course-aas.webp"
                    }
                    width="100%"
                    className="lazy"
                    alt="fggroup"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/-9fBGDMO1S4"
                      data-flashy-type="video"
                      className="custom"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <h2 className="h4-fs h4">
                    Anabolic-Androgenic Steroids Masterclass
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/functional_training.webp"
                    }
                    width="100%"
                    className="lazy"
                    alt="fggroup"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/b-DhFdSpcEQ"
                      data-flashy-type="video"
                      className="custom"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <h2 className="h4-fs h4">Group Instructure Masterclass</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/intro-injury-rehab.webp"
                    }
                    width="100%"
                    className="lazy"
                    alt="fggroup"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/z9ULms1ia10"
                      data-flashy-type="video"
                      className="custom"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <h2 className="h4-fs h4">Injury Rehabilitation Masterclass</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/intro-health-wellness.webp"
                    }
                    width="100%"
                    className="lazy"
                    alt="fggroup"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/9ggHN60bYKo"
                      data-flashy-type="video"
                      className="custom"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <h2 className="h4-fs h4">Advance Clinical Nutrition</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid p-0">
          <Button className="btnnnnn1 py-5 d-block">Grab A Scholarship</Button>
        </div>
      </section>
      <section className="section bg-secondary position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 mb-4 mb-md-0 text-center">
              <span className="section-title-border border-center"></span>
              <p className="subtitle text-white paragraph">Our All</p>
              <h2 className="h2-fs section-title text-white h2">Demo Certificates</h2>
            </div>
            <div className="col-md-6 col-6">
              <LazyLoadImage
                effect="blur"
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/cpt_demo.webp"
                }
                alt="Certificates"
                width="100%"
                className="lazy"
              />
              <div className="text-center mt-3">
                <h2 className="h4-fs text-white h4">Diploma In Personal Training</h2>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <LazyLoadImage
                effect="blur"
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/cnc_demo.webp"
                }
                alt="Certificates"
                width="100%"
                className="lazy"
              />
              <div className="text-center mt-3">
                <h2 className="h4-fs text-white h4">Diploma In Nutrition</h2>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <LazyLoadImage
                effect="blur"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fgiit/TRX-band-workshop-certificate.webp"
                }
                alt="Certificates"
                width="100%"
                className="lazy"
              />
              <div className="text-center mt-3">
                <h2 className="h4-fs text-white h4">TRX Band Workshop</h2>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <LazyLoadImage
                effect="blur"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fgiit/Tabata-Workshop-certificate.webp"
                }
                alt="Certificates"
                width="100%"
                className="lazy"
              />
              <div className="text-center mt-3">
                <h2 className="h4-fs text-white h4">Tabata Workshop</h2>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <LazyLoadImage
                effect="blur"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fgiit/Functional-Training-Workshop-certificate.webp"
                }
                alt="Certificates"
                width="100%"
                className="lazy"
              />
              <div className="text-center mt-3">
                <h2 className="h4-fs text-white h4">Functional Training Workshop</h2>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <LazyLoadImage
                effect="blur"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fgiit/Mix-Martial-Arts-Workshop-certificate.webp"
                }
                alt="Certificates"
                width="100%"
                className="lazy"
              />
              <div className="text-center mt-3">
                <h2 className="h4-fs text-white h4">Mix Martial Arts Workshop</h2>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <LazyLoadImage
                effect="blur"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fgiit/Powerlifting-Coach-Workshop-certificate.webp"
                }
                alt="Certificates"
                width="100%"
                className="lazy"
              />
              <div className="text-center mt-3">
                <h2 className="h4-fs text-white h4">Powerlifting Coach Workshop</h2>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <LazyLoadImage
                effect="blur"
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/aas_demo.webp"
                }
                alt="Certificates"
                width="100%"
                className="lazy"
              />
              <div className="text-center mt-3">
                <h2 className="h4-fs text-white h4">Anabolic Androgenic Steroids</h2>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <LazyLoadImage
                effect="blur"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/recorded-session-certificate-5.webp"
                }
                alt="Certificates"
                width="100%"
                className="lazy"
              />
              <div className="text-center mt-3">
                <h2 className="h4-fs text-white h4">
                  Injury Rehabilitation Workshop
                </h2>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <LazyLoadImage
                effect="blur"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/recorded-session-certificate-6.webp"
                }
                alt="Certificates"
                width="100%"
                className="lazy"
              />
              <div className="text-center mt-3">
                <h2 className="h4-fs text-white h4">
                  Advance Clinical Nutrition Workshop
                </h2>
              </div>
            </div>
          </div>
        </div>
        <LazyLoadImage
          effect="blur"
          src={process.env.PUBLIC_URL + "/assets/images/img/customer-bg.png"}
          alt="shape"
          className="customer-bg-shape img-fluid"
        />
      </section>
      <section className="d-block d-md-none">
        <div className="container-fluid p-0">
          <div className="col-md-12 p-0">
            <Link to="/fgiit/fitness-training-and-placement">
              <LazyLoadImage
                effect="blur"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/t-and-p-mobile.webp"
                }
                width="100%"
                className="lazy"
                alt="fggroup"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="d-none d-md-block">
        <div className="container-fluid p-0">
          <div className="col-md-12 p-0">
            <Link to="/fgiit/fitness-training-and-placement">
              <LazyLoadImage
                effect="blur"
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/t-and-p-web.webp"
                }
                width="100%"
                className="lazy"
                alt="fggroup"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span className="section-title-border border-center"></span>
              <p className="subtitle paragraph">We're</p>
              <h2 className="h2-fs section-title h2">Here To Help</h2>
            </div>
            <div className="col"></div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="bg-white box-shadow text-center p-5 px-md-2 px-lg-5">
                <i className="fas fa-map-marker-alt text-primary icon-lg mb-4"></i>
                <h2 className="h4-fs h4 mb-4">Our Address</h2>
                <ul className="list-unstyled">
                  <li>
                    3rd Floor, Sun Commercial Space, L&T Circle, Opp Ratri
                    Bazar, Karlibaugh, Vadodara, Gujarat 380018
                  </li>
                </ul>
              </div>
            </div>
            <div className="col"></div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="bg-white box-shadow text-center p-5 px-md-2 px-lg-5">
                <i className="fa fa-phone text-primary icon-lg mb-4"></i>
                <h2 className="h4-fs h4 mb-4">Phone Number</h2>
                <ul className="list-unstyled">
                  <li>+91 8866842520</li>
                  <li>+91 8347438199</li>
                </ul>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </section>
      <section className="section mt-5 mb-5 p-0">
        <div className="container">
          <div className="row bg-white box-shadow p-5">
            <div className="col-md-6 mb-5 mb-md-0">
              <LazyLoadImage
                effect="blur"
                className="lazy"
                src={process.env.PUBLIC_URL + "/assets/images/img/contact.webp"}
                width="100%"
                alt="FG Group"
              />
            </div>
            <div className="col-md-6">
              <p className="mb-0 mt-4">Full Name</p>
              <input
                type="text"
                id="txt_contact_name"
                className="form-control fr mt-2"
                placeholder="Enter Full Name"
              />
              <p className="mb-0 mt-4">Email Address</p>
              <input
                type="email"
                id="txt_contact_email"
                className="form-control fr mt-2"
                placeholder="Enter Email Address"
              />
              <p className="mb-0 mt-4">Phone Number</p>
              <input
                type="number"
                id="txt_contact_number"
                className="form-control fr mt-2"
                placeholder="Enter Phone Number"
              />
              <p className="mb-0 mt-4">Select Course</p>
              <select id="txt_contact_course" className="form-control fr mt-2">
                <option value="" hidden>
                  Select Course
                </option>
                <option value="Nutri Trainer Course">
                  Nutri Trainer Course
                </option>
                <option value="Diploma In Business Management">
                  Diploma In Business Management
                </option>
                <option value="Python Programming And Learn Core & Advance Python">
                  Python Programming And Learn Core & Advance Python
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
                <option value="Advance Clinical Nutrition Workshop">
                  Advance Clinical Nutrition Workshop
                </option>
              </select>
              <p className="mb-0 mt-4">Write Your Message</p>
              <textarea
                id="txt_contact_message"
                placeholder="Message"
                className="form-control fr mt-2"
              ></textarea>
              <button
                type="button"
                className="btnnnnn btnnnnn-primary mt-5 hover-ripple"
                onclick="sendContactInquiry()"
              >
                Apply For Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
      <FgiitFooter />
    </>
  );
}

export default FGIITBarodaBranch;
