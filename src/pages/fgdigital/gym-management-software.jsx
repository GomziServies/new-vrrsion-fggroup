/* eslint-disable no-script-url */

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgDigitalHeader from "../../components/partials/Header/fgdigitalheader";
import FgDigitalFooter from "../../components/partials/Footer/fgdigitalfooter";
import fgdigital from "../../pdf/fgdigital.pdf";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function GymManagementSoftware() {
  const canonicalUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Gym management software for business excellence.</title>
        <meta name="description" content="Gym management software will be needed in the future if you are a gym owner you must be aware of the digital transformation of the industry and become part of the future of becoming history yourself. choice is yours" />
        <meta name="keyword" content="best digital marketing course, digital marketing course in surat, digital marketing course near me, digital marketing course duration, digital marketing course syllabus, fee for digital marketing course, best digital marketing course online, best digital marketing course india" />
        <meta property="og:title" content="Gym management software for business excellence." />
        <meta property="og:description" content="Gym management software will be needed in the future if you are a gym owner you must be aware of the digital transformation of the industry and become part of the future of becoming history yourself. choice is yours" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgdigital/gym-management-software" />
        <link rel="canonical" href={{ canonicalUrl }} />
      </Helmet>
      <FgDigitalHeader />
      <section style={{ marginTop: "70px" }}>
        <div className="container-fluid p-0 m-0">
          <OwlCarousel
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
              <a href="#nutritrainer" aria-label="Fg Group">
                <img
                  className="d-none d-md-block w-100"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/banner32.webp"
                  }
                  alt="FGIIT academy certificates are accredited by ISO and ISO"
                />
              </a>
              <a href="#nutritrainer" aria-label="Fg Group">
                <img
                  className="d-block d-md-none w-100"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/banner-mobile32.webp"
                  }
                  alt="FGIIT academy certificates are accredited by ISO and ISO"
                />
              </a>
            </div>
            <div className="item active">
              <a href="#nutritrainer" aria-label="Fg Group">
                <img
                  className="d-none d-md-block w-100"
                  src={process.env.PUBLIC_URL + "/assets/img/banner30.webp"}
                  alt="FGIIT academy certificates are accredited by ISO and ISO"
                />
              </a>
              <a href="#nutritrainer" aria-label="Fg Group">
                <img
                  className="d-block d-md-none w-100"
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner-mobile30.webp"
                  }
                  alt="FGIIT academy certificates are accredited by ISO and ISO"
                />
              </a>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="container">
            <div className="describe">
              <h1 style={{ color: "#333" }} className="text-center">
                Gym management{" "}
                <span className="m-0 text-blue-color">software</span>
              </h1>
              <div className="thm-bg-clr dector"></div>
              <div className="row">
                <div className="col-lg-6">
                  <p className="mt-0">
                    Customer relationship management system is a system which
                    health and fitness industry actually need these days. Gym
                    management software can solve multiple problems of yours in
                    daily life you have in gym. Many gyms in after 2018 stopped
                    and closed due to lack of technology and clients but if you
                    know management with customer is the major problems. Clients
                    attract towards and look for new gym every year and leave
                    yours and that happens due to you lack relation on daily
                    base with your clients.
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="ply1">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/digital-2.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="Digital Freedom Program"
                    />
                    <div className="ply2">
                      <Link
                        className="custom"
                        data-flashy-type="video"
                        to="https://youtu.be/5Cu2aF1JQa0"
                      >
                        <i
                          className="far fa-play-circle text-white fs-35"
                        ></i>
                      </Link>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link
                      to={fgdigital}
                      download
                      className="btn btn-danger mt-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download PDF
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="covid mt-5">
              <h2 className="h2-fs text-center text-333-color">
                <span className="m-0 text-blue-color">Our Products</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row pb-5 border-bottom">
              <div className="col-lg-6">
                <div className="text-center">
                  <img
                    className="lazy mb-3"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/crm-1.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="features of CRM software"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="Digital">
                  <b>
                    <h2 className="h4-fs mt-0">Customer management program</h2>
                  </b>
                  <div className="row">
                    <div className="col-sm-12">
                      <span className="my-1">- Client Attendance</span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">- Registration and renewals</span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">- Daily diet updates</span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">- Customized Diet making</span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">- PT Commission Management</span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">- Trainers Profile</span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">- Loyalty Points For Members</span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">
                        - Exercise Planning And Scheduling
                      </span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">
                        - Clients Profile And Data Management
                      </span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">
                        - SMS, Email, Whasapp Channels
                      </span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">- Auto Reminders Management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-5">
              <div className="col-lg-6">
                <div className="text-center">
                  <img
                    className="lazy mb-3"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/crm-2.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="features of CRM software"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="Digital">
                  <b>
                    <h2 className="h4-fs mt-0">App screens</h2>
                  </b>
                  <div className="row">
                    <div className="col-sm-12">
                      <span className="my-1">- Recipe Videos</span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">- Exercise Videos</span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">- Profile management</span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">- Full body analysis</span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">- Online Payments Acceptance</span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">
                        - Supplement Commission Management
                      </span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">
                        - Special Heart Rate Monitor Feature
                      </span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">
                        - One to one zoom session for PT
                      </span>
                    </div>
                    <div className="col-sm-12">
                      <span className="my-1">- Chat with coaches</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop d-none d-md-block">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#f9f3f3", padding: "50px 0px" }}
        >
          <div className="container">
            <div className="tabata mb-4 text-center">
              <h2 className="h2-fs">Partner Brands</h2>
            </div>
            <div className="row">
              <div className="col-md-3 text-center mt-5">
                <div className="tabata imgty">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/stallon.webp"
                      }
                      className="gomzi lazy"
                      alt="fggroup"
                    />
                    <p
                      style={{ color: "black", fontWeight: "bold" }}
                      className="mt-4"
                    >
                      Stallone Gym
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3 text-center mt-5">
                <div className="tabata imgty">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/mahaveer.webp"
                      }
                      className="gomzi lazy"
                      alt="fggroup"
                    />
                    <p
                      style={{ color: "black", fontWeight: "bold" }}
                      className="mt-4"
                    >
                      Mahavir Hospital
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3 text-center mt-5">
                <div className="tabata imgty">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/gomzi1.webp"
                      }
                      className="gomzi lazy"
                      alt="fggroup"
                    />
                    <p
                      style={{ color: "black", fontWeight: "bold" }}
                      className="mt-4"
                    >
                      Fitness With Gomzi
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3 text-center mt-5">
                <div className="tabata imgty">
                  <a href="#;" className="pb1" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/js.webp"
                      }
                      className="gomzi lazy"
                      alt="fggroup"
                    />
                    <p
                      style={{ color: "black", fontWeight: "bold" }}
                      className="mt-4"
                    >
                      JS Fitness
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3 text-center mt-5">
                <div className="tabata imgty">
                  <a href="#;" className="pb1" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/spartena.webp"
                      }
                      className="gomzi lazy"
                      alt="fggroup"
                    />
                    <p
                      style={{ color: "black", fontWeight: "bold" }}
                      className="mt-4"
                    >
                      Sportina Gym
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3 text-center mt-5">
                <div className="tabata imgty">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/shapers.webp"
                      }
                      className="gomzi lazy"
                      alt="fggroup"
                    />
                    <p
                      style={{ color: "black", fontWeight: " bold" }}
                      className="mt-4"
                    >
                      Shapers Gym
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3 text-center mt-5">
                <div className="tabata imgty">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/beastin-gym.webp"
                      }
                      className="gomzi lazy"
                      alt="fggroup"
                    />
                    <p
                      style={{ color: "black", fontWeight: "bold" }}
                      className="mt-4"
                    >
                      Beastin Gym
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3 text-center mt-5">
                <div className="tabata imgty">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/titan-fitness.webp"
                      }
                      className="gomzi lazy"
                      alt="fggroup"
                    />
                    <p
                      style={{ color: "black", fontWeight: "bold" }}
                      className="mt-4"
                    >
                      Titan Fitness
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3 text-center mt-5">
                <div className="tabata imgty">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/b-natural.webp"
                      }
                      className="gomzi lazy"
                      alt="fggroup"
                    />
                    <p
                      style={{ color: "black", fontWeight: "bold" }}
                      className="mt-4"
                    >
                      B Natural Gym
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3 text-center mt-5">
                <div className="tabata imgty">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/muscle-mind.webp"
                      }
                      className="gomzi lazy"
                      alt="fggroup"
                    />
                    <p
                      style={{ color: "black", fontWeight: "bold" }}
                      className="mt-4"
                    >
                      Muscle And Mind
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3 text-center mt-5">
                <div className="tabata imgty">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/av-fitness.webp"
                      }
                      className="gomzi lazy"
                      alt="fggroup"
                    />
                    <p
                      style={{ color: "black", fontWeight: " bold" }}
                      className="mt-4"
                    >
                      AV Fitness
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3 text-center mt-5">
                <div className="tabata imgty">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/fgdigital-1.webp"
                      }
                      className="gomzi lazy"
                      alt="fggroup"
                    />
                    <p
                      style={{ color: "black", fontWeight: "bold" }}
                      className="mt-4"
                    >
                      FG Digital
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3 text-center mt-5">
                <div className="tabata imgty">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/sahyog.webp"
                      }
                      className="gomzi lazy"
                      alt="fggroup"
                    />
                    <p
                      style={{ color: "black", fontWeight: "bold" }}
                      className="mt-4"
                    >
                      Sahyog clinic
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3 text-center mt-5">
                <div className="tabata imgty">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/w8.webp"
                      }
                      className="gomzi lazy"
                      alt="fggroup"
                    />
                    <p
                      style={{ color: "black", fontWeight: "bold" }}
                      className="mt-4"
                    >
                      W8 Fitness
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3 text-center mt-5">
                <div className="tabata imgty">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/green-leaf.webp"
                      }
                      className="gomzi lazy"
                      alt="fggroup"
                    />
                    <p
                      style={{ color: "black", fontWeight: "bold" }}
                      className="mt-4"
                    >
                      green leaf hospital
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3 text-center mt-5">
                <div className="tabata imgty">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/hercules.webp"
                      }
                      className="gomzi lazy"
                      alt="fggroup"
                    />
                    <p
                      style={{ color: "black", fontWeight: "bold" }}
                      className="mt-4"
                    >
                      hercules fitness
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-md-3 text-center mt-5">
                <div className="tabata imgty">
                  <a href="#;" aria-label="Fg Group">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/country-side.webp"
                      }
                      className="gomzi"
                      alt="fggroup"
                    />
                    <p
                      style={{ color: "black", fontWeight: "bold" }}
                      className="mt-4"
                    >
                      Countryside International School
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FgDigitalFooter />
    </>
  );
}

export default GymManagementSoftware;
