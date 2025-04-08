import React, { useState } from "react";
import SimpleHeader from "../components/partials/Header/simpleheader";
import FgDigitalFooter from "../components/partials/Footer/fgdigitalfooter";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FranchiseMain from "../pdf/franchise-main.pdf";
import OwlCarousel from "react-owl-carousel";
import { sendInquiry } from "../assets/js/utils/contact-us";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function FitnessBrandFranchise() {
  const canonicalUrl = window.location.href;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  const handleApplyForInquiry = async () => {
    try {
      let modifiedMessage = `${message}\n\nProgram: ${course}`;
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "FWG Main Page Inquiry",
        modifiedMessage,
        window.location.href,
        null,
        null,
        null
      );
      setName("");
      setEmail("");
      setPhoneNumber("");
      setCourse("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Helmet>
        <title>FG Alumina event organized on 27th August 2022 Surat</title>
        <meta name="description" content="purpose and objective of the event was to motivate and nurchyo the student for full year to concern filed of health and fitness." />
        <meta name="keyword" content="" />
        <meta property="og:title" content="FG Alumina event organized on 27th August 2022 Surat" />
        <meta property="og:description" content="purpose and objective of the event was to motivate and nurchyo the student for full year to concern filed of health and fitness." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fitness-brand-franchise" />
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
      <SimpleHeader />
      <section style={{ marginTop: "70px" }}>
        <div className="container-fluid py-md-5 py-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 describe order-md-1 order-2">
                <div className="child-png d-none d-md-block">
                  <div className="partner">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/burger.webp"
                      }
                      alt="burger"
                    />
                  </div>
                  <div className="handss">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/cake.webp"
                      }
                      alt="cake"
                    />
                  </div>
                  <div className="teams">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/cake.webp"
                      }
                      alt="cake"
                    />
                  </div>
                  <div className="teamss">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/cake.webp"
                      }
                      alt="cake"
                    />
                  </div>
                  <div className="teamsss">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/cake.webp"
                      }
                      alt="cake"
                    />
                  </div>
                </div>
                <h1 className="mt-3" style={{ color: "#333" }}>
                  <span className="m-0 text-blue-color">Become Our</span>
                  Franchisee Business Partner
                </h1>
                <b>
                  <p className="mt-2 d-none d-md-block d-lg-none d-xl-block">
                    FG Group is a well-known fitness brand that is gradually
                    covering the boundaries of Surat in the field of fitness and
                    well being of one, With the growing opportunity in this
                    field we are offering our franchise to the ones who are
                    interested and been waiting to contribute to the health and
                    fitness sector in a way - franchisee business
                  </p>
                  <div className="d-block d-md-none d-lg-block d-xl-none">
                    <p className="text-muted mb-0 mt-0">
                      FG Group is a well-known fitness brand that is gradually
                      covering the boundaries of Surat in the field of fitness
                      and well being of one, With the growing
                      {showMore ? (
                        <p className="m-0 text-muted">
                          {" "}
                          opportunity in this field we are offering our
                          franchise to the ones who are interested and been
                          waiting to contribute to the health and fitness sector
                          in a way - franchisee business
                        </p>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <div className="row mt-2 ml-lg-2 ml-1">
                      <div className="swap">
                        <button onClick={toggleReadMore}>
                          {showMore ? "Read less" : "Read more"}
                        </button>
                      </div>
                      <a
                        href={FranchiseMain}
                        download
                        className="btn btn-danger btn-whats btn-whatss ml-1"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </b>
              </div>
              <div className="col-lg-6 p-0 text-center order-md-2 order-1 mt-4 m-md-0 d-block">
                <div className="">
                  <div className="ply1">
                    <img
                      className="lazy"
                      src="https://img.freepik.com/premium-vector/franchise-stores-illustration-marketing-network-minimal-flat-banner-with-building-city-background_93732-75.jpg"
                      width="100%"
                      alt="Fg Group"
                      style={{ borderRadius: "10px" }}
                    />
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
            <div className="covid text-center">
              <h2 className='h2-fs' style={{ color: "#333" }}>
                history of{" "}
                <span className="m-0 text-blue-color">our start-up</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
          </div>
          <img
            className="lazy d-none d-md-block pb-5"
            alt="fg-group"
            src={process.env.PUBLIC_URL + "/assets/images/img/start-up-1.webp"}
            width="100%"
          />
          <img
            className="lazy d-block d-md-none"
            alt="fg-group"
            src={process.env.PUBLIC_URL + "/assets/images/img/start-up-2.webp"}
            width="100%"
          />
        </div>
      </section>
      <section className="margintop p-3">
        <div className="container-fluid bg-light">
          <div>
            <div className="covid text-center mt-4">
              <h2 className='h2-fs' style={{ color: "#333" }}>
                <span className="m-0 text-blue-color">Franchise model</span>{" "}
                details
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="d-none d-md-block">
              <div className="row">
                <div className="col-lg-6 order-md-1 order-2 mt-3 mt-md-0">
                  <div className="covid">
                    <h2 className="h2-fs ml-0 ml-md-2">
                      <span className="m-0 text-blue-color"></span>
                      FOFO Model
                    </h2>
                  </div>
                  <div className="describe">
                    <p className="mb-0 fs-18">
                      <b>(FRANCHISE OWNED FRANCHISE OPERATED)</b>
                    </p>
                    {/* <p className="text-muted mb-0">
                      {" "}
                      The FOFO Model, which stands for Franchise Owned Franchise
                      Operated, differs from the FOCO Model. In FOFO, the
                      franchisee bears both the initial setup and running costs,
                      assuming full ownership and operational control.
                      {showMore ? (
                        <p className="text-muted">
                          They manage all aspects, including marketing,
                          staff,logistics, and expenses, operating the business
                          as if it were their own. The franchisor has less
                          direct involvement, granting the franchisee greater
                          autonomy and responsibility. While franchise fees may
                          still apply, the franchisee enjoys more flexibility
                          and a larger share of the profits. FOFO allows
                          entrepreneurs to exercise independence and tailor
                          their franchise to specific market conditions and
                          business needs.
                        </p>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p> */}
                    <p className="text-muted mb-0">
                      The FOFO Model, which stands for Franchise Owned Franchise
                      Operated, differs from the FOCO Model. In FOFO, the
                      franchisee bears both the initial setup and running costs,
                      assuming full ownership and operational control. They
                      manage all aspects, including marketing, staff,logistics,
                      and expenses, operating the business as if it were their
                      own. The franchisor has less direct involvement, granting
                      the franchisee greater autonomy and responsibility. While
                      franchise fees may still apply, the franchisee enjoys more
                      flexibility and a larger share of the profits. FOFO allows
                      entrepreneurs to exercise independence and tailor their
                      franchise to specific market conditions and business
                      needs.
                    </p>
                    {/* <div className="swap mt-2 ml-lg-2">
                      <button onClick={toggleReadMore} id="myBtna">
                        {showMore ? "Read less" : "Read more"}
                      </button>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6 p-0 order-md-2 order-1">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/franchise-3.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fg-group"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-md-none">
              <div className="row">
                <div className="col-lg-6 p-0 order-md-2 order-1">
                  <div className="ply1" style={{ position: "relative" }}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/franchiseimg.jpg"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fg-group"
                    />
                    <div className="overlay-text">
                      <div
                        style={{
                          color: "white",
                          fontSize: "24px",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          textAlign: "center",
                          width: "266px",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div className="covid">
                          <h2 className="h2-fs ml-0 ml-md-2">
                            <span
                              style={{ color: "#00afef", margin: "0px" }}
                            ></span>
                            FOFO Model
                          </h2>
                        </div>
                        <div className="describe">
                          <p
                            className="mb-0 mt-0 text-white fs-14"
                          >
                            <b>(FRANCHISE OWNED FRANCHISE OPERATED)</b>
                          </p>
                          <p className="mb-0 text-white mt-2">
                            {" "}
                            The FOFO Model, which stands for Franchise Owned
                            Franchise Operated, differs from the FOCO Model. In
                            FOFO, the...
                          </p>
                          <span id="morea" className="m-0">
                            <p className="mb-0 mt-0 text-muted">
                              franchisee bears both the initial setup and
                              running costs, assuming full ownership and
                              operational control. They manage all aspects,
                              including marketing, staff,logistics, and
                              expenses, operating the business as if it were
                              their own. The franchisor has less direct
                              involvement, granting the franchisee greater
                              autonomy and responsibility. While franchise fees
                              may still apply, the franchisee enjoys more
                              flexibility and a larger share of the profits.
                              FOFO allows entrepreneurs to exercise independence
                              and tailor their franchise to specific market
                              conditions and business needs.
                            </p>
                          </span>
                          <a
                            onclick="myFunctiona()"
                            id="myBtna"
                            aria-label="Fg Group"
                            className="fs-16 text-blue-color"
                          >
                            <u>Read more</u>
                          </a>
                        </div>
                      </div>
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
          <div className="container py-md-5 py-3">
            <div className="row">
              <div className="col-lg-12">
                <div className="covid text-center">
                  <h2 className='h2-fs' style={{ color: "#333" }}>
                    our emplacement &
                    <span className="m-0 text-blue-color"> work culture</span>
                  </h2>
                </div>
                <div className="thm-bg-clr dector"></div>
                <OwlCarousel
                  id="owl-demo111"
                  autoplay
                  dots={false}
                  loop
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
                  <div className="item mx-3 img-hovrs">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/some-images-1.webp"
                      }
                      alt="Some pictures"
                      style={{ borderRadius: "10px", width: "100%" }}
                    />
                    <p>Founder</p>
                  </div>
                  <div className="item mx-3 img-hovrs">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/some-images-2.webp"
                      }
                      alt="Some pictures"
                      style={{ borderRadius: "10px", width: "100%" }}
                    />
                    <p>Co-Founder</p>
                  </div>
                  <div className="item mx-3 img-hovrs">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/some-images-3.webp"
                      }
                      alt="Some pictures"
                      style={{ borderRadius: "10px", width: "100%" }}
                    />
                    <p>Our Classes</p>
                  </div>
                  <div className="item mx-3 img-hovrs">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/some-images-4.webp"
                      }
                      alt="Some pictures"
                      style={{ borderRadius: "10px", width: "100%" }}
                    />
                    <p>Our Online/Offline sessions</p>
                  </div>
                  <div className="item mx-3 img-hovrs">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/some-images-5.webp"
                      }
                      alt="Some pictures"
                      style={{ borderRadius: "10px", width: "100%" }}
                    />
                    <p>Our students</p>
                  </div>
                  <div className="item mx-3 img-hovrs">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/some-images-6.webp"
                      }
                      alt="Some pictures"
                      style={{ borderRadius: "10px", width: "100%" }}
                    />
                    <p>Our Gym</p>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid bg-light py-5">
          <div className="container">
            <div className="covid text-center">
              <h2 style={{ color: "#333" }} id="fgtext" className='h2-fs'>
                <span className="m-0 text-blue-color">FWG</span> services
              </h2>
              <div className="thm-bg-clr dector mb-3 mb-md-4"></div>
            </div>
            <div className="col-12 text-center mb-4 mb-md-4 globly">
              <a
                className="btn btn-success btn-whats bg-hvr"
                href="/fitnesswithgomzi/fitness-programs"
                id="fwgser"
              >
                FWG services
              </a>
              <a
                className="btn btn-success btn-whats mr-md-4 ml-md-3 ml-2"
                href="/fgiit/fitness-courses"
                id="fgiitser"
              >
                FGIIT services
              </a>
            </div>
            <div id="fwg">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div className="">
                    <div className="ply1 forshadow black-before opicityb mb-2">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/franchise-thumbnail.webp"
                        }
                        alt="fg-group"
                        width="100%"
                        style={{ borderRadius: "10px" }}
                      />
                      <div className="video-btn">
                        <Link
                          to="https://youtu.be/eoTuisuLvH4"
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
                <div className="col-md-3"></div>
              </div>
              <div className="covid text-center mt-4">
                <h2 style={{ color: "#333" }} id="fgtext" className='h2-fs'>
                  <span className="m-0 text-blue-color">Programs</span>
                </h2>
              </div>
              <div className="d-none d-md-block">
                <div className="row mt-3 mt-md-5">
                  <div className="col-xl-6">
                    <div className="blog2 het-rt bg-light">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="ply1 p-2 img-sizes">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/rtp-1-icon.webp"
                              }
                              alt="fg-group"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="tabata mt-3">
                            <h2 className="h4-fs">RTP 1.0</h2>
                            <p className="mb-2">
                              In Order To Achieve Optimal Health You Need To Get
                              A Calorie Deficit Or Surplus Diet Which Is The Key
                              To Achieving Your...
                            </p>
                            <Link
                              to="/fitnesswithgomzi/weight-loss-programs"
                              className="btn btn-info btn-whats"
                            >
                              Know More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog2 het-rt bg-light">
                      <div className="row align-items-center">
                        <div className="col-md-8 order-2 order-md-1">
                          <div className="tabata mt-3 ml-2">
                            <h2 className="h4-fs">RTP 2.0</h2>
                            <p className="mb-2">
                              "It's Not Just A Program It Is A Way Of Living A
                              Healthier Lifestyle", RTP 2.0 Main Objective Is To
                              Help People Maintain The Lost...
                            </p>
                            <Link
                              to="/fitnesswithgomzi/online-personal-training"
                              className="btn btn-info btn-whats"
                            >
                              Know More
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-4 order-1 order-md-2">
                          <div className="ply1 p-2 img-sizes">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/weightlifter.webp"
                              }
                              className="img-fluid"
                              alt="weight management"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog2 het-rt bg-light">
                      <div className="row align-items-center">
                        <div className="col-md-8 order-2 order-md-1">
                          <div className="tabata mt-3 ml-2">
                            <h2 className="h4-fs">RTP 3.0</h2>
                            <p className="mb-2">
                              Are You Thinking About Being More Active? Have You
                              Been Trying To Cut Back On Less Healthy Foods? Do
                              You Wish Or You..
                            </p>
                            <Link
                              to="/community/clinical-illness"
                              className="btn btn-info btn-whats"
                            >
                              Know More
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-4 order-1 order-md-2">
                          <div className="ply1 p-2 img-sizes">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/body-scan.webp"
                              }
                              className="img-fluid"
                              alt="rapid transformation program"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog2 het-rt bg-light">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="ply1 p-2 img-sizes">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/healthy-lifestyle.webp"
                              }
                              className="img-fluid"
                              alt="Corporate Wellness program"
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="tabata mt-3">
                            <h2 className="h4-fs">RTP 4.0</h2>
                            <p className="mb-2">
                              It Is Crucial To Provide Best Health And Fitness
                              Environment To Your Team To Improve Your
                              Productivity. Unless Your Team Is Healthy...
                            </p>
                            <Link
                              to="/corporate-fitness-programs"
                              className="btn btn-info btn-whats"
                            >
                              Know More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog2 het-rt bg-light">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                          <div className="ply1 p-2 img-sizes">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/bodybuilder.webp"
                              }
                              className="img-fluid"
                              alt="clinical Illness program"
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="tabata mt-3">
                            <h2 className="h4-fs">RTP 5.0</h2>
                            <p className="mb-2">
                              An Elite Coaching Team Who Wants To Transform
                              Under FG-GROUP Exclusive Online Coaching...
                            </p>
                            <Link
                              to="/fitnesswithgomzi/bodybuilding-program"
                              className="btn btn-info btn-whats"
                            >
                              Know More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="blog2 het-rt bg-light">
                      <div className="row align-items-center">
                        <div className="col-md-8 order-2 order-md-1">
                          <div className="tabata mt-3 ml-2">
                            <h2 className="h4-fs">Transformation Kit</h2>
                            <p className="mb-2">
                              Home Exercise Machine including Dumbbells, Ladder,
                              Gym Mat, Gym Bag and Exercise Book.
                            </p>
                            <Link
                              to="/fitnesswithgomzi/in-home-exercise-machine"
                              className="btn btn-info btn-whats"
                            >
                              Know More
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-4 order-1 order-md-2">
                          <div className="ply1 p-2 img-sizes">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/gym-bag.webp"
                              }
                              className="img-fluid"
                              alt="transformation kit"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block d-md-none">
                <div className="item m-1 mt-1">
                  <div
                    className="blog2 het-rt bg-light pb-2"
                    style={{
                      background:
                        "linear-gradient(159deg, rgba(26,107,165,1) 0%, rgba(15,86,141,1) 40%, rgba(9,76,129,1) 100%)",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="row align-items-center p-2">
                      <div className="col-md-4">
                        <div className="ply1 p-2 img-sizes">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/rtp-1-icon.webp"
                            }
                            alt="fggroup"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="tabata mt-3 text-white">
                          <h2 className="h4-fs">RTP 1.0</h2>
                          <p className="mb-4 text-white">
                            In Order To Achieve Optimal Health You Need To Get A
                            Calorie Deficit Or Surplus Diet Which Is The Key To
                            Achieving Your...
                          </p>
                          <Link
                            to="/fitnesswithgomzi/weight-loss-programs"
                            className="btn btn-outline-white w-100 text-white"
                            style={{ borderRadius: "10px" }}
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item m-1  mt-1">
                  <div
                    className="blog2 het-rt bg-light "
                    style={{
                      background:
                        "linear-gradient(159deg, rgba(26,107,165,1) 0%, rgba(15,86,141,1) 40%, rgba(9,76,129,1) 100%)",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="row align-items-center">
                      <div className="col-md-8 order-2 order-md-1">
                        <div className="tabata mt-3 ml-2 text-white">
                          <h2 className="h4-fs">RTP 2.0</h2>
                          <p className="mb-4 text-white">
                            "It's Not Just A Program It Is A Way Of Living A
                            Healthier Lifestyle", RTP 2.0 Main Objective Is To
                            Help People Maintain The Lost...
                          </p>
                          <Link
                            to="/fitnesswithgomzi/online-personal-training"
                            className="btn btn-outline-white w-100 text-white"
                            style={{ borderRadius: "10px" }}
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-4 order-1 order-md-2">
                        <div className="ply1 p-2 img-sizes">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/weightlifter.webp"
                            }
                            className="img-fluid"
                            alt="weight management"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item m-1 mt-1">
                  <div
                    className="blog2 het-rt bg-light"
                    style={{
                      background:
                        "linear-gradient(159deg, rgba(26,107,165,1) 0%, rgba(15,86,141,1) 40%, rgba(9,76,129,1) 100%)",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="row align-items-center">
                      <div className="col-md-8 order-2 order-md-1">
                        <div className="tabata mt-3 ml-2 text-white">
                          <h2 className="h4-fs">RTP 3.0</h2>
                          <p className="mb-4 text-white">
                            Are You Thinking About Being More Active? Have You
                            Been Trying To Cut Back On Less Healthy Foods? Do
                            You Wish Or You..
                          </p>
                          <Link
                            to="/community/clinical-illness"
                            className="btn btn-outline-white w-100 text-white"
                            style={{ borderRadius: "10px" }}
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-4 order-1 order-md-2">
                        <div className="ply1 p-2 img-sizes">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/body-scan.webp"
                            }
                            className="img-fluid"
                            alt="rapid transformation program"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item m-1 mt-1">
                  <div
                    className="blog2 het-rt bg-light"
                    style={{
                      background:
                        "linear-gradient(159deg, rgba(26,107,165,1) 0%, rgba(15,86,141,1) 40%, rgba(9,76,129,1) 100%)",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <div className="ply1 p-2 img-sizes">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/healthy-lifestyle.webp"
                            }
                            className="img-fluid"
                            alt="Corporate Wellness program"
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="tabata mt-3 text-white">
                          <h2 className="h4-fs">RTP 4.0</h2>
                          <p className="mb-4 text-white">
                            It Is Crucial To Provide Best Health And Fitness
                            Environment To Your Team To Improve Your
                            Productivity. Unless Your Team Is Healthy...
                          </p>
                          <Link
                            to="/corporate-fitness-programs"
                            className="btn btn-outline-white w-100 text-white"
                            style={{ borderRadius: "10px" }}
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item m-1 mt-1">
                  <div
                    className="blog2 het-rt bg-light"
                    style={{
                      background:
                        "linear-gradient(159deg, rgba(26,107,165,1) 0%, rgba(15,86,141,1) 40%, rgba(9,76,129,1) 100%)",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <div className="ply1 p-2 img-sizes">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/bodybuilder.webp"
                            }
                            className="img-fluid"
                            alt="clinical Illness program"
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="tabata mt-3 text-white">
                          <h2 className="h4-fs">RTP 5.0</h2>
                          <p className="mb-4 text-white">
                            An Elite Coaching Team Who Wants To Transform Under
                            FG-GROUP Exclusive Online Coaching...
                          </p>
                          <Link
                            to="/fitnesswithgomzi/bodybuilding-program"
                            className="btn btn-outline-white w-100 text-white"
                            style={{ borderRadius: "10px" }}
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item m-1 mt-1">
                  <div
                    className="blog2 het-rt bg-light"
                    style={{
                      background:
                        "linear-gradient(159deg, rgba(26,107,165,1) 0%, rgba(15,86,141,1) 40%, rgba(9,76,129,1) 100%)",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="row align-items-center">
                      <div className="col-md-8 order-2 order-md-1">
                        <div className="tabata mt-3 ml-2  text-white">
                          <h2 className="h4-fs">Transformation Kit</h2>
                          <p className="mb-4  text-white">
                            Home Exercise Machine including Dumbbells, Ladder,
                            Gym Mat, Gym Bag and Exercise Book.
                          </p>
                          <Link
                            to="/fitnesswithgomzi/in-home-exercise-machine"
                            className="btn btn-outline-white w-100 text-white"
                            style={{ borderRadius: "10px" }}
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-4 order-1 order-md-2">
                        <div className="ply1 p-2 img-sizes">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/gym-bag.webp"
                            }
                            className="img-fluid"
                            alt="transformation kit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="fgiit">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className="">
                  <div
                    className="ply1 forshadow  black-before opicityb mb-2"
                    style={{ marginTop: "10px" }}
                  >
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/franchise-thumbnail.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="video-btn">
                      <Link
                        to="https://youtu.be/eoTuisuLvH4"
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
              <div className="col-md-3"></div>
            </div>
            <div className="d-none d-md-block">
              <div className="row mt-3 mt-md-5">
                <div className="col-xl-6">
                  <div className="blog2 het-rt bg-light">
                    <div className="row align-items-center">
                      <div className="col-md-4 order-1 order-md-2">
                        <div className="ply1 p-2 img-sizes">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/teacher.webp"
                            }
                            alt="fg-group"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-md-8 order-2 order-md-1">
                        <div className="tabata mt-3">
                          <h2 className="h4-fs">Offline Fitness Courses</h2>
                          <p className="mb-2">
                            FGIIT Is Here With The Perfect Blend Of All The
                            Major Courses Like Personal Training...
                          </p>
                          <Link
                            to="/fitnesswithgomzi/weight-loss-programs"
                            className="btn btn-info btn-whats"
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="blog2 het-rt bg-light">
                    <div className="row align-items-center">
                      <div className="col-md-8 order-2 order-md-1">
                        <div className="tabata mt-3 ml-2">
                          <h2 className="h4-fs">Online Fitness Courses</h2>
                          <p className="mb-2">
                            We Are One Of The Best And Only Institute To Provide
                            Online Fitness Courses Or...
                          </p>
                          <Link
                            to="/fitnesswithgomzi/online-personal-training"
                            className="btn btn-info btn-whats"
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-4 order-1 order-md-2">
                        <div className="ply1 p-2 img-sizes">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/classroom.webp"
                            }
                            className="img-fluid"
                            alt="weight management"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="blog2 het-rt bg-light">
                    <div className="row align-items-center">
                      <div className="col-md-8 order-2 order-md-1">
                        <div className="tabata mt-3 ml-2">
                          <h2 className="h4-fs">Flexible Learning</h2>
                          <p className="mb-2">
                            Flexible Learning: A Methodology Of Learning
                            Wherever Students Square Measure Given...
                          </p>
                          <Link
                            to="/community/clinical-illness"
                            className="btn btn-info btn-whats"
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-4 order-1 order-md-2">
                        <div className="ply1 p-2 img-sizes">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/happy-hour.webp"
                            }
                            className="img-fluid"
                            alt="rapid transformation program"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="blog2 het-rt bg-light">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <div className="ply1 p-2 img-sizes">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/bookrtp.webp"
                            }
                            className="img-fluid"
                            alt="fg-group"
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="tabata mt-3">
                          <h2 className="h4-fs">Study Material</h2>
                          <p className="mb-2">
                            We have all Fitness Related Courses Books and we
                            also have Courses Related E-Books.
                          </p>
                          <Link
                            to="/corporate-fitness-programs"
                            className="btn btn-info btn-whats"
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-md-none">
              <div className="row mt-3 mt-md-5">
                <div className="col-xl-6">
                  <div
                    className="blog2 het-rt bg-light"
                    style={{
                      background:
                        "linear-gradient(159deg, rgba(26,107,165,1) 0%, rgba(15,86,141,1) 40%, rgba(9,76,129,1) 100%)",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="row align-items-center">
                      <div className="col-md-4 order-1 order-md-2">
                        <div className="ply1 p-2 img-sizes">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/teacher.webp"
                            }
                            alt="fg-group"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-md-8 order-2 order-md-1">
                        <div className="tabata mt-3 text-white">
                          <h2 className="h4-fs">Offline Fitness Courses</h2>
                          <p className="mb-2 text-white">
                            FGIIT Is Here With The Perfect Blend Of All The
                            Major Courses Like Personal Training...
                          </p>
                          <Link
                            to="/fitnesswithgomzi/weight-loss-programs"
                            className="btn btn-outline-white w-100 text-white"
                            style={{ borderRadius: "10px" }}
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div
                    className="blog2 het-rt bg-light"
                    style={{
                      background:
                        "linear-gradient(159deg, rgba(26,107,165,1) 0%, rgba(15,86,141,1) 40%, rgba(9,76,129,1) 100%)",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="row align-items-center">
                      <div className="col-md-8 order-2 order-md-1">
                        <div className="tabata mt-3 ml-2 text-white">
                          <h2 className="h4-fs">Online Fitness Courses</h2>
                          <p className="mb-2 text-white">
                            We Are One Of The Best And Only Institute To Provide
                            Online Fitness Courses Or...
                          </p>
                          <Link
                            to="/fitnesswithgomzi/online-personal-training"
                            className="btn btn-outline-white w-100 text-white"
                            style={{ borderRadius: "10px" }}
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-4 order-1 order-md-2">
                        <div className="ply1 p-2 img-sizes">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/classroom.webp"
                            }
                            className="img-fluid"
                            alt="weight management"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div
                    className="blog2 het-rt bg-light"
                    style={{
                      background:
                        "linear-gradient(159deg, rgba(26,107,165,1) 0%, rgba(15,86,141,1) 40%, rgba(9,76,129,1) 100%)",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="row align-items-center">
                      <div className="col-md-8 order-2 order-md-1">
                        <div className="tabata mt-3 ml-2 text-white">
                          <h2 className="h4-fs">Flexible Learning</h2>
                          <p className="mb-2 text-white">
                            Flexible Learning: A Methodology Of Learning
                            Wherever Students Square Measure Given...
                          </p>
                          <Link
                            to="/community/clinical-illness"
                            className="btn btn-outline-white w-100 text-white"
                            style={{ borderRadius: "10px" }}
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-4 order-1 order-md-2">
                        <div className="ply1 p-2 img-sizes">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/happy-hour.webp"
                            }
                            className="img-fluid"
                            alt="rapid transformation program"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div
                    className="blog2 het-rt bg-light"
                    style={{
                      background:
                        "linear-gradient(159deg, rgba(26,107,165,1) 0%, rgba(15,86,141,1) 40%, rgba(9,76,129,1) 100%)",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <div className="ply1 p-2 img-sizes">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/bookrtp.webp"
                            }
                            className="img-fluid"
                            alt="fg-group"
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="tabata mt-3 text-white">
                          <h2 className="h4-fs">Study Material</h2>
                          <p className="mb-2 text-white">
                            We have all Fitness Related Courses Books and we
                            also have Courses Related E-Books.
                          </p>
                          <Link
                            to="/corporate-fitness-programs"
                            className="btn btn-outline-white w-100 text-white"
                            style={{ borderRadius: "10px" }}
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="row">
                <div className="col-12">
                  <div className="covid text-center">
                    <h2 className='h2-fs' style={{ color: "#333" }}>
                      our{" "}
                      <span className="m-0 text-blue-color">
                        Google reviews
                      </span>
                    </h2>
                  </div>
                  <div className="thm-bg-clr dector"></div>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-12">
                  <OwlCarousel
                    autoPlay
                    loop
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
                    <div className="item m-3">
                      <div className="reviews">
                        <div className="reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/twinkel.webp"
                            }
                            alt="fggroup"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="reviews-text text-center">
                          <h2 className="h6-fs">Twinkle Maharajwala</h2>
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
                          <p className="text-muted">
                            Under the guidance of ‘Fitness with Gomzi' i was
                            able to lose my weight . They gave me diet keeping
                            in mind your favorable food . It was quite difficult
                            for me to follow the diet as i am very much a foodie
                            but i was able to do it with Fitness with Gomzi.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item m-3">
                      <div className="reviews">
                        <div className="reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/archi.webp"
                            }
                            alt="fggroup"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="reviews-text text-center">
                          <h2 className="h6-fs">Neha Lalwani</h2>
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
                          <p className="text-muted">
                            Great Course, Very Informative And Easy To Follow.
                            The Content And Short Videos Were Really Helpful As
                            Well, With Lots Of Diagrams And Explanations. Also
                            It Was Well Organized And Have Insightful
                            Information. Thanks A lot Gautam Sir And Team
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item m-3">
                      <div className="reviews">
                        <div className="reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/naitika.webp"
                            }
                            alt="fggroup"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="reviews-text text-center">
                          <h2 className="h6-fs">Naitika Patel</h2>
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
                          <p className="text-muted">
                            I Feel Very Lucky And Greatful To Find FGIIT
                            Institute. I Am Doing Online Dietitian Course From
                            FGIIT And All The Lectures Are Nicely Conducted And
                            Explained By Dr. Gautam Jani. Thank You So Much
                            Gautam Sir And Foram Ma'am..
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item m-3">
                      <div className="reviews">
                        <div className="reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/unnamed.webp"
                            }
                            alt="fggroup"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="reviews-text text-center">
                          <h2 className="h6-fs">Darshan Modi</h2>
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
                          <p className="text-muted">
                            I had the best experience with fitness With Gomzi,
                            guidance and constant support that has given by
                            gautam sir and foram mam is something which inspires
                            you to not give up on your goal. They offers diet
                            plans according to your convenience and track
                            your...
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item m-3">
                      <div className="reviews">
                        <div className="reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/ravi.webp"
                            }
                            alt="fggroup"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="reviews-text text-center">
                          <h2 className="h6-fs">Ravi vaghela</h2>
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
                          <p className="text-muted">
                            It was great great experience with "fitness with
                            gomzi" Diet plan and workout plan is well organized.
                            And everyone is so helpful HIGHLY RECOMMENDED.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item m-3">
                      <div className="reviews">
                        <div className="reviews-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/helisoni.webp"
                            }
                            alt="fggroup"
                            className="lazy img-fluid"
                          />
                        </div>
                        <div className="reviews-text text-center">
                          <h2 className="h6-fs">Heli Soni</h2>
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
                          <p className="text-muted">
                            FGIIT is one of the best Institute for course such
                            as diploma dietician course. I'm sure this firm will
                            help me build my carrer with good experience & great
                            opportunities ahead. Best teachers, best knowledge
                            and great experience. Thank you FGIIT for provide
                            best knowledge.
                          </p>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
              <div className="row mt-0 mt-md-5">
                <div className="col-12 text-center mt-5">
                  <div className="mb-4">
                    <h2 className="h2-fs">Alumini</h2>
                  </div>
                  <OwlCarousel
                    autoPlay
                    loop
                    id="owl-demo1111"
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
                    <div className="item mx-sm-3">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/a.webp"
                        }
                        alt="alumni"
                        style={{ borderRadius: "10px", width: "100%" }}
                      />
                    </div>
                    <div className="item mx-sm-3">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/b.webp"
                        }
                        alt="alumni"
                        style={{ borderRadius: "10px", width: "100%" }}
                      />
                    </div>
                    <div className="item mx-sm-3">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/c.webp"
                        }
                        alt="alumni"
                        style={{ borderRadius: "10px", width: "100%" }}
                      />
                    </div>
                    <div className="item mx-sm-3">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/d.webp"
                        }
                        alt="alumni"
                        style={{ borderRadius: "10px", width: "100%" }}
                      />
                    </div>
                    <div className="item mx-sm-3">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/e.webp"
                        }
                        alt="alumni"
                        style={{ borderRadius: "10px", width: "100%" }}
                      />
                    </div>
                    <div className="item mx-sm-3">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/f.webp"
                        }
                        alt="alumni"
                        style={{ borderRadius: "10px", width: "100%" }}
                      />
                    </div>
                    <div className="item mx-sm-3">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/g.webp"
                        }
                        alt="alumni"
                        style={{ borderRadius: "10px", width: "100%" }}
                      />
                    </div>
                    <div className="item mx-3">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/1.webp"
                        }
                        alt="alumni"
                        style={{ borderRadius: "10px", width: "100%" }}
                      />
                    </div>
                    <div className="item mx-3">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/2.webp"
                        }
                        alt="alumni"
                        style={{ borderRadius: "10px", width: "100%" }}
                      />
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
            <div className="blog1 pt-5">
              <div className="covid text-center">
                <h2 style={{ color: "#333" }} className="d-none d-md-block h2-fs">
                  OUR INSTITUTE{" "}
                  <span className="m-0 text-blue-color">ACCREDITATION</span>
                </h2>
                <h2 style={{ color: "#333" }} className="d-block d-md-none h4-fs">
                  OUR INSTITUTE ACCREDITATION
                </h2>
                <div className="thm-bg-clr dector"></div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-md-10">
                  <div className="tabata describe pt-md-2 pl-md-2">
                    <div className="befor">
                      <h2 className="h2-fs mt-md-0 my-2 ">
                        Now our institute is government approved.
                      </h2>
                      <p className="text-muted mt-0 ml-0">
                        Now we are first government approved Fitness institute
                        in Gujarat. we are approved by National Skill
                        Development Corporation (NSDC) and Sports, Physical
                        Education, Fitness and Leisure Skills Council(SPEFL-SC).
                      </p>
                      <div>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/all-logo.webp"
                          }
                          alt="fggroup"
                          className="img-fluid d-none d-md-block"
                        />
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/mobile-all-logo.webp"
                          }
                          alt="fggroup"
                          className="img-fluid d-block d-md-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="d-none d-md-block">
                  <div className="row">
                    <div className="Info text-center">
                      <h2 className="h2-fs">4 Different demo Certificate</h2>
                    </div>
                    <div className="col"></div>
                    <div className="col-md-5 mt-3">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/cpt_demo.webp"
                        }
                        width="100%"
                        alt="personal training demo certificate"
                      />
                    </div>
                    <div className="col"></div>
                    <div className="col-md-5 mt-3">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/cnc_demo.webp"
                        }
                        width="100%"
                        alt="personal training demo certificate"
                      />
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
                <div className="d-md-block d-none">
                  <div className="row">
                    <div className="col"></div>
                    <div className="col-md-5 mt-3">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/cgi_demo.webp"
                        }
                        width="100%"
                        alt="group instructor demo certificate"
                      />
                    </div>
                    <div className="col"></div>
                    <div className="col-md-5 mt-3">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/aas_demo.webp"
                        }
                        width="100%"
                        alt="anabolic androgenic steroids workshop demo certificate"
                      />
                    </div>
                    <div className="col"></div>
                  </div>
                </div>
                <div className="d-md-none d-block">
                  <div className="future text-center">
                    <h2 className="h2-fs">4 Different demo Certificate</h2>
                  </div>
                  <OwlCarousel
                    autoPlay
                    loop
                    id="owl-certificate"
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
                      <div className="col-md-5 mt-3 p-0">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/cpt_demo.webp"
                          }
                          width="100%"
                          alt="personal training demo certificate"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="col-md-5 mt-3 p-0">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/cnc_demo.webp"
                          }
                          width="100%"
                          alt="personal training demo certificate"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="col-md-5 mt-3 p-0">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/cgi_demo.webp"
                          }
                          width="100%"
                          alt="group instructor demo certificate"
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="col-md-5 mt-3 p-0">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/aas_demo.webp"
                          }
                          width="100%"
                          alt="anabolic androgenic steroids workshop demo certificate"
                        />
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid py-md-3">
          <div className="container">
            <div className="covid text-center">
              <h2 className='h2-fs' style={{ color: "#333" }}>
                our <span className="m-0 text-blue-color">vision</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row">
              <div className="col-lg-3 col-md-6 mt-3 new-d position-relative d-md-block d-none">
                <div className="tabata border py-5  imgtys text-center">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/gomzi1.webp"
                    }
                    alt="fggroup"
                    width="80px"
                  />
                  <div className="transition"></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-3 new-d position-relative d-md-block d-none">
                <div className="tabata border py-5  imgtys text-center">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/fgiit.webp"
                    }
                    alt="fggroup"
                    width="80px"
                  />
                  <div className="transition"></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-3 new-d position-relative d-md-block d-none">
                <div className="tabata border py-5 imgtys  text-center">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/fgmeal.webp"
                    }
                    alt="fggroup"
                    width="80px"
                  />
                  <div className="transition"></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-3 new-d position-relative d-md-block d-none">
                <div className="tabata border py-5 imgtys  text-center">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/fgdigital.webp"
                    }
                    alt="fggroup"
                    width="80px"
                  />
                  <div className="transition"></div>
                </div>
              </div>
            </div>
            <div className="d-md-none d-block">
              <div className="ply1" style={{ position: "relative" }}>
                <div className="ply1 mt-3" style={{ position: "relative" }}>
                  <div
                    className="blog2"
                    style={{
                      background:
                        "linear-gradient(159deg, rgba(26,107,165,1) 0%, rgba(15,86,141,1) 40%, rgba(9,76,129,1) 100%)",
                    }}
                  >
                    <div className="overlay-text text-center">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/fgiit.png"
                        }
                        width="140px"
                        alt="fggroup"
                      />
                      <div className="mt-3">
                        <p
                          className="btnnn p-1 text-white"
                          style={{ fontFamily: "Nunito, sans-serif" }}
                        >
                          Make students enough capable of surviving and achieve
                          respect, monetary benefits equivalent to any field
                          like doctor, lawyer & engineer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="blog2"
                  style={{
                    background:
                      "linear-gradient(159deg, rgba(26,107,165,1) 0%, rgba(15,86,141,1) 40%, rgba(9,76,129,1) 100%)",
                  }}
                >
                  <div className="overlay-text text-center">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/gomzi1.webp"
                      }
                      width="190px"
                      alt="Fg Group"
                      style={{ filter: "drop-shadow(2px 4px 6px black)" }}
                    />
                    <div className="">
                      <div>
                        <p
                          className="btnnn text-white"
                          style={{
                            fontFamily: "Nunito, sans-serif",
                          }}
                        >
                          Make India disease and obesity free.
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
      <section>
        <div className="container-fluid bg-light new-design-fitness margintop">
          <div className="container py-5">
            <div className="">
              <div className="col-lg-12">
                <div className="covid text-center">
                  <h2 className='h2-fs' style={{ color: "#333" }}>
                    roles & responsibilities{" "}
                    <span className="m-0 text-blue-color">for franchise</span>
                  </h2>
                </div>
                <div className="thm-bg-clr dector"></div>
              </div>
              <div className="d-none d-md-block">
                <div className="row">
                  {[
                    {
                      title: "Operation",
                      icon: "fas fa-cogs",
                      description:
                        "The work pattern or operational pattern one should follow as per guidelines.",
                    },
                    {
                      title: "Marketing",
                      icon: "fas fa-chart-bar",
                      description:
                        "To complete personal goals, you need to fulfill institutional goals. Marketing can attract a great audience.",
                    },
                    {
                      title: "Sales",
                      icon: "fas fa-bullhorn",
                      description:
                        "If the franchise generates sales, it operates well. The cycle of money has started. Convert leads into sales.",
                    },
                    {
                      title: "Management",
                      icon: "fas fa-tasks",
                      description:
                        "A proper code of conduct should be followed. Only one authority should be accountable to higher authorities.",
                    },
                  ].map((item, index) => (
                    <div className="col-lg-3 col-md-6 px-3 mb-4" key={index}>
                      <div className="blog-card p-4 text-center">
                        <div className="icon mb-3">
                          <i className={item.icon}></i>
                        </div>
                        <h2 className="h5-fs fw-bold mb-3">{item.title}</h2>
                        <p className="text-muted">{item.description}</p>
                        {/* <button className="btn btn-primary btn-sm mt-3">
                          Learn More
                        </button> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile View */}
              <div className="d-block d-md-none">
                <div className="accordion" id="mobileAccordion">
                  {[
                    {
                      title: "Operation",
                      description:
                        "The work pattern or operational pattern one should follow as per guidelines.",
                    },
                    {
                      title: "Marketing",
                      description:
                        "To complete personal goals, you need to fulfill institutional goals. Marketing can attract a great audience.",
                    },
                    {
                      title: "Sales",
                      description:
                        "If the franchise generates sales, it operates well. The cycle of money has started. Convert leads into sales.",
                    },
                    {
                      title: "Management",
                      description:
                        "A proper code of conduct should be followed. Only one authority should be accountable to higher authorities.",
                    },
                  ].map((item, index) => (
                    <div className="accordion-item" key={index}>
                      <h2 className="h2-fs accordion-header" id={`heading${index}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index}`}
                          aria-expanded="false"
                          aria-controls={`collapse${index}`}
                        >
                          {item.title}
                        </button>
                      </h2>
                      <div
                        id={`collapse${index}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#mobileAccordion"
                      >
                        <div className="accordion-body">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="new-design-fitness">
        <div className="container-fluid bg-light">
          <div className="container py-5">
            <div className="">
              <div className="col-lg-12">
                <div className="covid text-center">
                  <h2 className='h2-fs' style={{ color: "#333" }}>
                    roles & responsibilities{" "}
                    <span className="m-0 text-blue-color">for franchisor</span>
                  </h2>
                </div>
                <div className="thm-bg-clr dector"></div>
              </div>
              <div className="d-none d-md-block">
                <div className="row">
                  {[
                    {
                      icon: "fas fa-list",
                      title: "EVALUATION",
                      description:
                        "Of the opportunity, you will have in order to contribute in the field of health and fitness.",
                    },
                    {
                      icon: "fas fa-chart-bar",
                      title: "GROWTH",
                      description:
                        "Your Growth Is Important To You And Us Both So, We Will Find The Strong Points Which Can Help Us Out To Attain The Growth Of Your Business.",
                    },
                    {
                      icon: "fas fa-search",
                      title: "HIRING",
                      description:
                        "Professionals matter a lot when we talk about the field of fitness and therefore we will help you out for the same.",
                    },
                    {
                      icon: "fas fa-school",
                      title: "TRAINING",
                      description:
                        "Training the health officials in a way that contributes to the firm and personal growth itself.",
                    },
                  ].map((item, index) => (
                    <div
                      className="col-lg-3 col-sm-6 px-md-3 px-4 mb-4"
                      key={index}
                    >
                      <div className="blog-card text-center p-4 shadow-sm">
                        <div className="icon mb-3">
                          <i className={item.icon}></i>
                        </div>
                        <h2 className="h5-fs mb-3 text-uppercase">{item.title}</h2>
                        <p className="text-muted">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile View */}
              <div className="d-block d-md-none">
                <div className="accordion" id="accordionExample">
                  {[
                    {
                      title: "EVALUATION",
                      description:
                        "Of the opportunity, you will have in order to contribute in the field of health and fitness.",
                    },
                    {
                      title: "GROWTH",
                      description:
                        "Your Growth Is Important To You And Us Both So, We Will Find The Strong Points Which Can Help Us Out To Attain The Growth Of Your Business.",
                    },
                    {
                      title: "HIRING",
                      description:
                        "Professionals matter a lot when we talk about the field of fitness and therefore we will help you out for the same.",
                    },
                    {
                      title: "TRAINING",
                      description:
                        "Training the health officials in a way that contributes to the firm and personal growth itself.",
                    },
                  ].map((item, index) => (
                    <div className="accordion-item" key={index}>
                      <h2 className="h2-fs accordion-header" id={`heading${index}`}>
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index}`}
                          aria-expanded={index === 0 ? "true" : "false"}
                          aria-controls={`collapse${index}`}
                        >
                          {item.title}
                        </button>
                      </h2>
                      <div
                        id={`collapse${index}`}
                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""
                          }`}
                        aria-labelledby={`heading${index}`}
                      >
                        <div className="accordion-body">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container tabata blog2 py-5">
            <div className="covid text-center">
              <h2 className='h2-fs' style={{ color: "#333" }}>
                Active Franchises{" "}
                <span className="m-0 text-blue-color"> Near You</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <OwlCarousel
              autoPlay
              nav={false}
              dots={false}
              id="owl-active"
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
              <div className="item mb-3 mx-sm-3">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <img
                      className="lazy"
                      alt="fggroup"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/varachha-branch.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="describe  p-3 text-left">
                      <p className="ml-0 mt-0">
                        <b>Franchise owners :-</b> Mayank Surani
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Occupation :- Business Man</b>
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Address :-</b>2th floor, Raghuvir Shoppers, Near
                        Lajamni Chowk, Mota Varachha, Surat, Gujarat 394101
                      </p>
                      <Link
                        to=""
                        className="btn btn-success btn-whats"
                        onclick="sendWhatsAppInquiry('Varachha')"
                      >
                        <i className="fab fa-whatsapp mr-2"></i>Contact Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mb-3 mx-sm-3">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/vesu.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="describe  p-3 text-left">
                      <p className="ml-0 mt-0">
                        <b>Founder :-</b> Dt. Foram desai
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Education :-</b> ACSM, VLCC, IGNU, M.A
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Since 15 years in this field</b>
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Address :-</b> 301, ambrosia business hub, near SMC
                        garden, vesu road, surat.
                      </p>
                      <Link
                        to=""
                        className="btn btn-whats btn-success"
                        onclick="sendWhatsAppInquiry('Vesu')"
                      >
                        <i className="fab fa-whatsapp mr-2"></i>Contact Now
                      </Link>
                      <Link
                        to="/fgiit/fitness-and-nutrition-courses.html"
                        className="btn btn-info btn-know ml-2"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mb-3 mx-sm-3">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/adajan.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="describe  p-3 text-left">
                      <p className="ml-0 mt-0">
                        <b>Branch managers :-</b> Dt. Nitin Patel
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Education :-</b> FGIIT personal trainer and
                        nutritionist
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Since 10 years in this field</b>
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Address :-</b> F-4, Jalaram Shopping center, near
                        sona hotel, beside Tandel clinical laboratory, Rander
                        Rd, Palanpur Patia, Surat 395005.
                      </p>
                      <Link
                        to=""
                        className="btn btn-success btn-whats"
                        onclick="sendWhatsAppInquiry('Adajan')"
                      >
                        <i className="fab fa-whatsapp mr-2"></i>Contact Now
                      </Link>
                      <Link
                        href="/franchise/nitin"
                        className="btn btn-info btn-know ml-2"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mb-3 mx-sm-3">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <img
                      className="lazy"
                      alt="fggroup"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/kachchh.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="describe  p-3 text-left">
                      <p className="ml-0 mt-0">
                        <b>Franchise owners :-</b> Jagruti Thakkar
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Education :-</b> FGIIT certified diploma nutritionist
                        course
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Email :-</b> jagrutichande.chande@gmail.com
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Address :-</b> Indian educational institute,22-23,
                        first floor, near Mahadev Medical, Adipur, kachchh,
                        Gujarat
                      </p>
                      <Link
                        to=""
                        className="btn btn-success btn-whats"
                        onclick="sendWhatsAppInquiry('kachchh')"
                      >
                        <i className="fab fa-whatsapp mr-2"></i>Contact Now
                      </Link>
                      <a className="btn btn-info btn-know ml-2">Know More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mb-3 mx-sm-3">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <img
                      className="lazy"
                      alt="fggroup"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/sangli.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="describe  p-3 text-left">
                      <p className="ml-0 mt-0">
                        <b>Franchise owners :-</b> zoheb mulla
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Education :-</b> FGIIT certified anabolic androgenic
                        workshop
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Email :-</b> zam82@rediffmail.com
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Address :-</b> 815,1a/12, 2nd floor, mulla building,
                        opp. deval dairy, shivajinagar, sangli, maharashtra
                        -416410.
                      </p>
                      <Link
                        to=""
                        className="btn btn-success btn-whats"
                        onclick="sendWhatsAppInquiry('Sangli')"
                      >
                        <i className="fab fa-whatsapp mr-2"></i>Contact Now
                      </Link>
                      <Link
                        to="franchise/zoheb"
                        className="btn btn-info btn-know ml-2"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mb-3 mx-sm-3">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <img
                      className="lazy"
                      alt="fggroup"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/bhiwadi.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="describe  p-3 text-left">
                      <p className="ml-0 mt-0">
                        <b>Franchise owners :-</b> anil singh
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Education :-</b> FGIIT certified anabolic androgenic
                        workshop
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Email :-</b> anildivuu009@gmail.com
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Address :-</b> aim fitness club, havells galaxy near
                        hari ram hospital, alwar by pass road bhiwadi, rajasthan
                      </p>
                      <Link
                        to=""
                        className="btn btn-success btn-whats"
                        onclick="sendWhatsAppInquiry('Bhiwadi')"
                      >
                        <i className="fab fa-whatsapp mr-2"></i>Contact Now
                      </Link>
                      <Link
                        to="/franchise/anil"
                        className="btn btn-info btn-know ml-2"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mb-3 mx-sm-3">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/varachha.webp"
                      }
                      alt="fggroup"
                      width="100%"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="describe  p-3 text-left">
                      <p className="ml-0 mt-0">
                        <b>Branch Manager :-</b> Mr. Sandeep Patel
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Education :-</b> FGIIT, AIICP, Electrical Engginer
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Since 8 years in this field</b>
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Address :-</b> 201, Raghuvir shoppers, lajami Chawlk,
                        varachha, surat.
                      </p>
                      <Link
                        to=""
                        className="btn btn-success btn-whats"
                        onclick="sendWhatsAppInquiry('Varachha')"
                      >
                        <i className="fab fa-whatsapp mr-2"></i>Contact Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mb-3 mx-sm-3">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/bharuch.webp"
                      }
                      alt="fggroup"
                      width="100%"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="describe  p-3 text-left">
                      <p className="ml-0 mt-0">
                        <b>Franchise owners :-</b> Dt. Pushpak Choksi
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Education :-</b> FGIIT personal trainer and
                        nutritionist, Engineer
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Since 5 years in this field</b>
                      </p>
                      <p className="ml-0 mt-0">
                        <b>Address :-</b> 5th Floor, Anand complex, Kasak Main
                        Rd, near IDBI Bank, Bharuch, Gujarat 392001
                      </p>
                      <Link
                        to=""
                        className="btn btn-success btn-whats"
                        onclick="sendWhatsAppInquiry('Bharuch')"
                      >
                        <i className="fab fa-whatsapp mr-2"></i>Contact Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 pt-5 px-3 px-sm-5 px-md-5">
            <div className="covid text-center">
              <h2 className='h2-fs' style={{ color: "#333" }}>
                FG GROUP{" "}
                <span className="m-0 text-blue-color">
                  {" "}
                  Franchise Financial
                </span>
              </h2>
              <div className="thm-bg-clr dector mb-5"></div>
            </div>
            <div className="row">
              <div className="col-md-12 p-0">
                <div className="dift">
                  <h2 className="h3-fs mb-0 mb-md-3 ml-3 ml-md-0">
                    ● Cost Specification :-
                  </h2>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 p-md-2 mx-3 mx-md-0 p-xl-0 p-0 mt-3 mt-md-0">
                <div className="hell border-left border-right p-0">
                  <div className="div">
                    <h2 className="h4-fs">Net set up cost</h2>
                  </div>
                  <div className="tabata">
                    <ul className="pl-0 mb-0">
                      <li>Equipment Cost</li>
                      <li className="bg-white">Interior Cost</li>
                      <li>Operation Cost (90 Days)</li>
                      <li className="bg-white">Franchise Fees</li>
                    </ul>
                  </div>
                  <div className="div">
                    <p className="ml-0">Total Cost :- ₹20,04,000/ -</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 p-md-2 mx-3 mx-md-0 p-xl-0 p-0 mt-3 mt-md-0">
                <div className="hell hells border-left border-right p-0">
                  <div className="div">
                    <h2 className="h4-fs">Equipment Cost</h2>
                  </div>
                  <div className="tabata">
                    <ul className="pl-0 mb-0">
                      <li>Lat Pull Down :- ₹20000/-</li>
                      <li className="bg-white">Power Gauge :- ₹95000/-</li>
                      <li>Chest Press :- ₹32000/-</li>
                      <li className="bg-white">
                        Treadmill (2) :- ₹252500/- etc.
                      </li>
                    </ul>
                  </div>
                  <div className="div">
                    <p className="ml-0">Total Cost :- ₹8,00,000/-</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 p-md-2 mx-3 mx-md-0 p-xl-0 p-0 mt-3 mt-md-0">
                <div className="hell hells border-left border-right p-0">
                  <div className="div">
                    <h2 className="h4-fs">Interior Cost</h2>
                  </div>
                  <div className="tabata">
                    <ul className="pl-0 mb-0">
                      <li>Lighting :- ₹40000/-</li>
                      <li className="bg-white">Cctv :- ₹55000/-</li>
                      <li className="py-2">Counseling Office :- ₹1,00,000/-</li>
                      <li className="bg-white">
                        Computer 3 :- ₹1,00,000/- etc.
                      </li>
                    </ul>
                  </div>
                  <div className="div">
                    <p className="ml-0">Total Cost :- ₹6,08,000/-</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 p-md-2 mx-3 mx-md-0 p-xl-0 p-0 mt-3 mt-md-0">
                <div className="hell hells border-left border-right p-0">
                  <div className="div">
                    <h2 className="h4-fs fs-21" style={{ padding: "22px 10px" }}>
                      Operation Cost (90 Days)
                    </h2>
                  </div>
                  <div className="tabata">
                    <ul className="pl-0 mb-0">
                      <li>Marketing :- ₹1,50,000/-</li>
                      <li className="bg-white">Salary :- ₹1,20,000/-</li>
                      <li>Rent :- ₹1,05,000/-</li>
                      <li className="bg-white">Electricity :- ₹15000/- etc.</li>
                    </ul>
                  </div>
                  <div className="div">
                    <p className="ml-0">Total Cost :- ₹5,96,000/-</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="margintop"></div>
            <div className="col-md-12 p-0">
              <div className="dift">
                <h2 className="h3-fs mb-0">● Projection of income :-</h2>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6 px-3 px-md-0">
                <div className="card border border-info">
                  <div className="card-header border-bottom alert-primary border-info">
                    <div className="tabata">
                      <h2 className="h4-fs">1.Annual income</h2>
                    </div>
                  </div>
                  <div className="card-body tabata">
                    <div className="row">
                      <div className="col-lg-12 order-2 order-lg-1">
                        <blockquote className="blockquote mb-0">
                          <h2 className="h5-fs mt-2">● 60,00,000/- per annum</h2>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-3 px-md-2 mt-3 mt-md-0">
                <div className="card border border-info">
                  <div className="card-header border-bottom alert-warning border-info">
                    <div className="tabata">
                      <h2 className="h4-fs">2.Monthly income</h2>
                    </div>
                  </div>
                  <div className="card-body tabata px-0">
                    <div className="col-md-12 order-3">
                      <blockquote className="blockquote mb-0">
                        <h2 className="h5-fs mt-2">● 5,00,000/- per month</h2>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 px-3 px-md-0 pt-4 mt-md-0">
                <div className="card border border-info">
                  <div className="card-header border-bottom alert-info border-info">
                    <div className="tabata">
                      <h2 className="h4-fs">3.Minimum Target Clients Per Month </h2>
                    </div>
                  </div>
                  <div className="card-body tabata px-0 pt-0 d-block d-md-none">
                    <div className="col-md-12 order-3 px-2 px-md-4">
                      <div className="card-body tabata">
                        <div className="row">
                          <div className="col-lg-12 order-2 order-lg-1 px-0">
                            <blockquote className="blockquote mb-0">
                              <div className="row px-2 px-md-3 mobile-tab">
                                <div className="col-3 px-0">
                                  <div className="hell border-left border-right p-0">
                                    <div className="div">
                                      <h2 className="h4-fs">Particular</h2>
                                    </div>
                                    <div className="tabata">
                                      <ul className="pl-0 mb-0">
                                        <li className="bg-white">FWG</li>
                                        <li>FGIIT</li>
                                        <li
                                          className="bg-white"
                                          style={{
                                            padding:
                                              "4px 0px 6px 3px!important",
                                          }}
                                        >
                                          FGDIGITAL
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-3 px-0">
                                  <div className="hell border-left border-right p-0">
                                    <div className="div">
                                      <h2
                                        className="pb-4 h4-fs fs-21"
                                      >
                                        Average
                                      </h2>
                                    </div>
                                    <div className="tabata">
                                      <ul className="pl-0 mb-0">
                                        <li>₹ 10,000</li>
                                        <li className="bg-white">₹ 30,000</li>
                                        <li>₹ 10,000</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-3 px-0">
                                  <div className="hell border-left border-right p-0">
                                    <div className="div">
                                      <h2 className="h4-fs">Client </h2>
                                    </div>
                                    <div className="tabata">
                                      <ul className="pl-0 mb-0">
                                        <li className="bg-white">15</li>
                                        <li>10</li>
                                        <li className="bg-white">5 gyms</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-3 px-0">
                                  <div className="hell border-left border-right p-0">
                                    <div className="div">
                                      <h2 className="h4-fs">Amount</h2>
                                    </div>
                                    <div className="tabata">
                                      <ul className="pl-0 mb-0">
                                        <li>₹ 1,50,000</li>
                                        <li className="bg-white">₹ 3,00,000</li>
                                        <li>₹ 50,000</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                        </div>
                        <div className="row mt-md-5 mt-3">
                          <div className="col-lg-3 col-md-6 px-md-3 px-0 mt-4 mt-lg-0 order-md-1 order-4">
                            <div
                              className="blog2 mb-0"
                              style={{
                                background:
                                  "linear-gradient(159deg, rgba(26,107,165,1) 0%, rgba(15,86,141,1) 40%, rgba(9,76,129,1) 100%)",
                              }}
                            >
                              <div className="ply1 text-center">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/img/invesment-6.webp"
                                  }
                                  className="img-fluid"
                                  width="30%"
                                  alt="fggroup"
                                />
                              </div>
                              <div className="tabata text-center mt-2 pb-3">
                                <h2 className="h4-fs text-white">1 Year</h2>
                                <p
                                  className="mb-0"
                                  style={{ color: "#d9d9d9" }}
                                >
                                  Projected Costs 30%
                                </p>
                                <h2 className="h5-fs mb-0 text-white">
                                  18,00,000 INR
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 px-md-3 px-0 mt-4 mt-lg-0 order-md-2 order-3">
                            <div
                              className="blog2 mb-0"
                              style={{
                                background:
                                  "linear-gradient(159deg, rgba(26,107,165,1) 0%, rgba(15,86,141,1) 40%, rgba(9,76,129,1) 100%)",
                              }}
                            >
                              <div className="ply1 text-center">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/img/invesment-3.webp"
                                  }
                                  className="img-fluid"
                                  width="30%"
                                  alt="fggroup"
                                />
                              </div>
                              <div className="tabata text-center mt-2 pb-3">
                                <h2 className="h4-fs text-white">1 Year</h2>
                                <p
                                  className="mb-0"
                                  style={{ color: "#d9d9d9" }}
                                >
                                  Expected Total Profit
                                </p>
                                <h2 className="h5-fs mb-0 text-white">
                                  42,00,000 INR
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 px-md-3 px-0 mt-4 mt-lg-0 order-md-3 order-2">
                            <div
                              className="blog2 mb-0"
                              style={{
                                background:
                                  "linear-gradient(159deg, rgba(26,107,165,1) 0%, rgba(15,86,141,1) 40%, rgba(9,76,129,1) 100%)",
                              }}
                            >
                              <div className="ply1 text-center">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/img/franchise-1.webp"
                                  }
                                  className="img-fluid"
                                  width="30%"
                                  alt="fggroup"
                                />
                              </div>
                              <div className="tabata text-center mt-2 pb-3">
                                <h2 className="h4-fs text-white">1 Year Franchise</h2>
                                <p
                                  className="mb-0"
                                  style={{ color: "#d9d9d9" }}
                                >
                                  Expected Profit 36%
                                </p>
                                <h2 className="h5-fs mb-0 text-white">
                                  15,00,000 INR
                                </h2>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 px-md-3 px-0 mt-3 mt-lg-0 order-md-4 order-1">
                            <div
                              className="blog2 mb-0 pt-1"
                              style={{
                                background:
                                  "linear-gradient(159deg, rgba(26,107,165,1) 0%, rgba(15,86,141,1) 40%, rgba(9,76,129,1) 100%)",
                              }}
                            >
                              <div className="ply1 text-center">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/img/return-on-investment.webp"
                                  }
                                  className="img-fluid"
                                  width="30%"
                                  alt="fggroup"
                                />
                              </div>
                              <div className="tabata text-center mt-2">
                                <h2 className="h4-fs text-white">10 Years Return</h2>
                                <p
                                  className="mb-0"
                                  style={{ color: "#d9d9d9" }}
                                >
                                  Return 600% On Investment
                                </p>
                                <h2 className="h5-fs mb-0 text-white">
                                  1,50,00,000 INR
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body tabata px-0 pt-0 d-none d-md-block">
                    <div className="col-md-12 order-3">
                      <div className="card-body tabata">
                        <div className="row">
                          <div className="col-lg-12 order-2 order-lg-1 px-0">
                            <blockquote className="blockquote mb-0">
                              <div className="row px-2 px-md-3">
                                <div className="col-md-6 col-xl-3 mx-md-0 px-0 p-md-2 p-xl-0 col-12">
                                  <div className="hell border-left border-right p-0">
                                    <div className="div">
                                      <h2 className="h4-fs">Particular</h2>
                                    </div>
                                    <div className="tabata">
                                      <ul className="pl-0 mb-0">
                                        <li className="bg-white">FWG</li>
                                        <li>FGIIT</li>
                                        <li className="bg-white">FG DIGITAL</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xl-3 mt-3 mt-md-0 mx-md-0 px-0 p-md-2 p-xl-0 col-12">
                                  <div className="hell border-left border-right p-0">
                                    <div className="div">
                                      <h2
                                        className="pb-4 h4-fs fs-21"
                                      >
                                        Average
                                      </h2>
                                    </div>
                                    <div className="tabata">
                                      <ul className="pl-0 mb-0">
                                        <li>₹ 10,000</li>
                                        <li className="bg-white">₹ 30,000</li>
                                        <li>₹ 10,000</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xl-3 mt-3 mt-md-0 mx-md-0 px-0 p-md-2 p-xl-0 col-12">
                                  <div className="hell border-left border-right p-0">
                                    <div className="div">
                                      <h2 className="h4-fs">Client </h2>
                                    </div>
                                    <div className="tabata">
                                      <ul className="pl-0 mb-0">
                                        <li className="bg-white">15</li>
                                        <li>10</li>
                                        <li className="bg-white">5 gyms</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-xl-3 mt-3 mt-md-0 mx-md-0 px-0 p-md-2 p-xl-0 col-12">
                                  <div className="hell border-left border-right p-0">
                                    <div className="div">
                                      <h2 className="h4-fs">Amount</h2>
                                    </div>
                                    <div className="tabata">
                                      <ul className="pl-0 mb-0">
                                        <li>₹ 1,50,000</li>
                                        <li className="bg-white">₹ 3,00,000</li>
                                        <li>₹ 50,000</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                        </div>
                        <div className="row mt-5">
                          <div className="col-lg-3 col-md-6 px-md-3 px-0 mt-sm-4 mt-lg-0">
                            <div
                              className="blog2 mb-0"
                              style={{ backgroundColor: "#aed8ff" }}
                            >
                              <div className="ply1 text-center">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/img/invesment-6.webp"
                                  }
                                  className="img-fluid"
                                  width="30%"
                                  alt="fggroup"
                                />
                              </div>
                              <div className="tabata text-center mt-2 pb-3">
                                <h2 className="h4-fs">1 Year</h2>
                                <p className="mb-0">Projected Costs 30%</p>
                                <h2 className="h5-fs mb-0">18,00,000 INR</h2>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 px-md-3 px-0 mt-sm-4 mt-lg-0">
                            <div
                              className="blog2 mb-0"
                              style={{ backgroundColor: "#aed8ff" }}
                            >
                              <div className="ply1 text-center">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/img/invesment-3.webp"
                                  }
                                  className="img-fluid"
                                  width="30%"
                                  alt="Fg Group"
                                  fggroup
                                />
                              </div>
                              <div className="tabata text-center mt-2 pb-3">
                                <h2 className="h4-fs">1 Year</h2>
                                <p className="mb-0">Expected Total Profit</p>
                                <h2 className="h5-fs mb-0">42,00,000 INR</h2>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 px-md-3 px-0 mt-sm-4 mt-lg-0">
                            <div
                              className="blog2 mb-0"
                              style={{ backgroundColor: "#aed8ff" }}
                            >
                              <div className="ply1 text-center">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/img/franchise-1.webp"
                                  }
                                  className="img-fluid"
                                  width="30%"
                                  alt="fggroup"
                                />
                              </div>
                              <div className="tabata text-center mt-2 pb-3">
                                <h2 className="h4-fs">1 Year Franchise</h2>
                                <p className="mb-0">Expected Profit 36%</p>
                                <h2 className="h5-fs mb-0">15,00,000 INR</h2>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 px-md-3 px-0 mt-sm-4 mt-lg-0">
                            <div
                              className="blog2 mb-0 pt-1"
                              style={{ backgroundColor: "#aed8ff" }}
                            >
                              <div className="ply1 text-center">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/img/return-on-investment.webp"
                                  }
                                  className="img-fluid"
                                  width="30%"
                                  alt="fggroup"
                                />
                              </div>
                              <div className="tabata text-center mt-2">
                                <h2 className="h4-fs">10 Years Return</h2>
                                <p className="mb-0">
                                  Return 600% On Investment
                                </p>
                                <h2 className="h5-fs mb-0">1,50,00,000 INR</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="margintop">
              <div className="col-md-12 p-0">
                <div className="dift">
                  <h2 className="h3-fs mb-0">
                    ● Minimum Marketing Target Per Month:-
                  </h2>
                </div>
              </div>
              <div className="col-md-12 m-auto px-0">
                <div className="card-body tabata p-0 d-none d-md-block">
                  <div className="col-lg-12 order-2 order-lg-1">
                    <blockquote className="blockquote mb-0">
                      <div className="row">
                        <div className="col-md-6 col-xl-4 mx-md-0 p-xl-0 mt-3 mt-md-3 px-md-2 px-0 col-12">
                          <div className="hell border-left border-right p-0">
                            <div className="div">
                              <h2 className="h4-fs">Particular</h2>
                            </div>
                            <div className="tabata">
                              <ul className="pl-0 mb-0">
                                <li className="bg-white">FWG</li>
                                <li>FGIIT</li>
                                <li className="bg-white">FG DIGITAL</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-4 mx-md-0 p-xl-0 mt-3 mt-md-3 px-md-2 px-0 col-12">
                          <div className="hell border-left border-right p-0">
                            <div className="div">
                              <h2 className="h4-fs">Leads</h2>
                            </div>
                            <div className="tabata">
                              <ul className="pl-0 mb-0">
                                <li>300</li>
                                <li className="bg-white">100</li>
                                <li>100</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-4 mx-md-0 p-xl-0 mt-3 mt-md-3 px-md-2 px-0 col-12">
                          <div className="hell border-left border-right p-0">
                            <div className="div">
                              <h2 className="h4-fs">Ratio</h2>
                            </div>
                            <div className="tabata">
                              <ul className="pl-0 mb-0">
                                <li className="bg-white">5% closing </li>
                                <li>10% closing </li>
                                <li className="bg-white">5% closing </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="card-body tabata p-0 d-block d-md-none">
                  <div className="col-lg-12 order-2 order-lg-1">
                    <blockquote className="blockquote mb-0">
                      <div className="row pt-3 mobile-tab">
                        <div className="col-4 px-0">
                          <div className="hell border-left border-right p-0">
                            <div className="div">
                              <h2 className="h4-fs">Particular</h2>
                            </div>
                            <div className="tabata">
                              <ul className="pl-0 mb-0">
                                <li className="bg-white">FWG</li>
                                <li>FGIIT</li>
                                <li className="bg-white">FG DIGITAL</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-4 px-0">
                          <div className="hell border-left border-right p-0">
                            <div className="div">
                              <h2 className="h4-fs">Leads</h2>
                            </div>
                            <div className="tabata">
                              <ul className="pl-0 mb-0">
                                <li>300</li>
                                <li className="bg-white">100</li>
                                <li>100</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-4 px-0">
                          <div className="hell border-left border-right p-0">
                            <div className="div">
                              <h2 className="h4-fs">Ratio</h2>
                            </div>
                            <div className="tabata">
                              <ul className="pl-0 mb-0">
                                <li className="bg-white">5% closing </li>
                                <li>10% closing </li>
                                <li className="bg-white">5% closing </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="tabata mt-4 ml-3 ml-md-0">
                <h2 className="h4-fs mt-4">Notes :-</h2>
                <ul className="pl-1 mt-4">
                  <li>
                    <p>
                      FOCO model takes lot of courage and operation demand from
                      franchisor and it comes with handsome fix return so please
                      kindly charges of franchise fees are non negotiable. (
                      rest cost can be altered if we find better affordable
                      option )
                    </p>
                  </li>
                  <li>
                    <p>
                      Price of machines,opration activity and interior may very
                      as per city area.
                    </p>
                  </li>
                  <li>
                    <p>Return of Investment = 2 Years</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="">
              <div className="col-12 covid text-center">
                <h2 className='h2-fs' style={{ color: "#333" }}>
                  additional{" "}
                  <span className="m-0 text-blue-color">valuable services</span>
                </h2>
                <div className="thm-bg-clr dector mb-3"></div>
              </div>
              <div className="d-none d-md-block">
                <div className="row">
                  <div className="col-lg-3 col-md-6 new-ds mt-md-5 position-relative">
                    <div className="tabata blog2 py-md-5 py-3 imgty text-center">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/blueprint.webp"
                        }
                        alt="fggroup"
                      />
                      <h2 className="h5-fs mt-3">Interior Designer Services</h2>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 new-ds mt-md-5 position-relative">
                    <div className="tabata blog2 py-md-5 py-3 imgty text-center">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/quality.webp"
                        }
                        alt="fggroup"
                      />
                      <h2 className="h5-fs mt-3">Accreditation Approval Services</h2>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 new-ds mt-md-5 position-relative">
                    <div className="tabata blog2 py-md-5 py-3 imgty text-center">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/settings.webp"
                        }
                        alt="fggroup"
                      />
                      <h2 className="h5-fs mt-3">
                        R&D Part <br />
                        Services
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 new-ds mt-md-5 position-relative">
                    <div className="tabata blog2 py-md-5 py-3 imgty text-center">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/delivery.webp"
                        }
                        alt="fggroup"
                      />
                      <h2 className="h5-fs mt-3">Kit Sending To Clients Services</h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 new-ds mt-md-5 position-relative">
                    <div className="tabata blog2 py-md-5 py-3 imgty text-center">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/commitment.webp"
                        }
                        alt="fggroup"
                      />
                      <h2 className="h5-fs mt-3">
                        Property Finding Services - Legal Services
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 new-ds mt-md-5 position-relative">
                    <div className="tabata blog2 py-md-5 py-3 imgty text-center">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/gym.webp"
                        }
                        alt="fggroup"
                      />
                      <h2 className="h5-fs mt-3">
                        Pt Classes Services - Hiring Services
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 new-ds mt-md-5 position-relative">
                    <div className="tabata blog2 py-md-5 py-3 imgty text-center">
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/webpage.webp"
                        }
                        alt="fggroup"
                      />
                      <h2 className="h5-fs mt-3">
                        Website And Technology Part Services
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block d-md-none">
                <div id="additional" className="owl-carousel owl-theme">
                  <div className="new-ds mt-md-5 position-relative mx-3">
                    <div
                      className="tabata blog2 py-md-5 py-3 imgty text-center"
                      style={{
                        background:
                          "linear-gradient(90deg, hsla(192, 100%, 41%, 1) 0%, hsla(225, 72%, 55%, 1) 100%)",
                      }}
                    >
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/blueprint.webp"
                        }
                        alt="fggroup"
                      />
                      <h2 className="h5-fs mt-4 text-white">
                        Interior Designer Services
                      </h2>
                    </div>
                  </div>
                  <div className="new-ds mt-md-5 position-relative mx-3">
                    <div
                      className="tabata blog2 py-md-5 py-3 imgty text-center"
                      style={{
                        background:
                          "linear-gradient(90deg, hsla(192, 100%, 41%, 1) 0%, hsla(225, 72%, 55%, 1) 100%)",
                      }}
                    >
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/quality.webp"
                        }
                        alt="fggroup"
                      />
                      <h2 className="h5-fs mt-3 text-white">
                        Accreditation Approval Services
                      </h2>
                    </div>
                  </div>
                  <div className="new-ds mt-md-5 position-relative mx-3">
                    <div
                      className="tabata blog2 py-md-5 py-3 imgty text-center"
                      style={{
                        background:
                          "linear-gradient(90deg, hsla(192, 100%, 41%, 1) 0%, hsla(225, 72%, 55%, 1) 100%)",
                      }}
                    >
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/settings.webp"
                        }
                        alt="fggroup"
                      />
                      <h2 className="h5-fs mt-3 text-white">
                        R&D Part <br />
                        Services
                      </h2>
                    </div>
                  </div>
                  <div className="new-ds mt-md-5 position-relative mx-3">
                    <div
                      className="tabata blog2 py-md-5 py-3 imgty text-center"
                      style={{
                        background:
                          "linear-gradient(90deg, hsla(192, 100%, 41%, 1) 0%, hsla(225, 72%, 55%, 1) 100%)",
                      }}
                    >
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/delivery.webp"
                        }
                        alt="fggroup"
                      />
                      <h2 className="h5-fs mt-3 text-white">
                        Kit Sending To Clients Services
                      </h2>
                    </div>
                  </div>
                  <div className="new-ds mt-md-5 position-relative mx-3">
                    <div
                      className="tabata blog2 py-md-5 py-3 imgty text-center"
                      style={{
                        background:
                          "linear-gradient(90deg, hsla(192, 100%, 41%, 1) 0%, hsla(225, 72%, 55%, 1) 100%)",
                      }}
                    >
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/commitment.webp"
                        }
                        alt="fggroup"
                      />
                      <h2 className="h5-fs mt-3 text-white">
                        Property Finding Services - Legal Services
                      </h2>
                    </div>
                  </div>
                  <div className="new-ds mt-md-5 position-relative mx-3">
                    <div
                      className="tabata blog2 py-md-5 py-3 imgty text-center"
                      style={{
                        background:
                          "linear-gradient(90deg, hsla(192, 100%, 41%, 1) 0%, hsla(225, 72%, 55%, 1) 100%)",
                      }}
                    >
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/gym.webp"
                        }
                        alt="fggroup"
                      />
                      <h2 className="h5-fs mt-3 text-white">
                        Pt Classes Services - Hiring Services
                      </h2>
                    </div>
                  </div>
                  <div className="new-ds mt-md-5 position-relative mx-3">
                    <div
                      className="tabata blog2 py-md-5 py-3 imgty text-center"
                      style={{
                        background:
                          "linear-gradient(90deg, hsla(192, 100%, 41%, 1) 0%, hsla(225, 72%, 55%, 1) 100%)",
                      }}
                    >
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/webpage.webp"
                        }
                        alt="fggroup"
                      />
                      <h2 className="h5-fs mt-3 text-white">
                        Website And Technology Part Services
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop d-none d-md-block">
        <div className="container-fluid bg-light py-4">
          <div className="container tabata">
            <div className="covid mt-5 text-center">
              <h2 className='h2-fs' style={{ color: "#333" }}>
                franchise across{" "}
                <span className="m-0 text-blue-color">india</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row">
              <div className="col-md-6 mb-5">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/location-1.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px" }}
                  alt="fggroup"
                />
              </div>
              <div className="col-md-6 mb-5">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/location-2.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px" }}
                  alt="fggroup"
                />
              </div>
              <div className="col-md-6 mb-5">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/location-3.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px" }}
                  alt="fggroup"
                />
              </div>
              <div className="col-md-6 mb-5">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/location-4.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px" }}
                  alt="fggroup"
                />
              </div>
              <div className="col-md-6 mb-5">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/location-5.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px" }}
                  alt="fggroup"
                />
              </div>
              <div className="col-md-6 mb-5">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/location-6.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px" }}
                  alt="fggroup"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop d-block d-md-none">
        <div className="container-fluid bg-light">
          <div className="container blog2 tabata">
            <div className="covid mt-5 text-center">
              <h2 className='h2-fs' style={{ color: "#333" }}>
                branches across{" "}
                <span className="m-0 text-blue-color">india</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="text-center">
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/location-1.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px" }}
                  alt="fggroup"
                />
              </div>
              <div className="item mx-3 mt-2">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/location-2.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px" }}
                  alt="fggroup"
                />
              </div>
              <div className="item mx-3  mt-2">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/location-3.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px" }}
                  alt="fggroup"
                />
              </div>
              <div className="item mx-3  mt-2">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/location-4.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px" }}
                  alt="fggroup"
                />
              </div>
              <div className="item mx-3  mt-2">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/location-5.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px" }}
                  alt="fggroup"
                />
              </div>
              <div className="item mx-3  mt-2">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/location-6.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px" }}
                  alt="fggroup"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid margintop">
          <div className="container faq">
            <div className="covid mt-5">
              <h2 className="h2-fs text-center text-333-color">
                <span className="m-0 text-blue-color">FAQ'S</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div id="accordion">
              <div className="card mt-3">
                <div className="card-header" id="headingOne">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="coll"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What will I get?
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
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
                    You will be able to make you passionate as your career and
                    you will be getting help in training operation to guidance
                    so that you can grow in the field of health and fitness
                    along with the ownership of the branch.
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-header" id="headingTwo">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn collapsed"
                          data-toggle="coll"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          What is my role?
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
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
                    <ol>
                      <li>
                        Operation: The work pattern or the operational pattern
                        one should follow as per guidelines.
                      </li>
                      <li>
                        Marketing: As to complete the personal goal you need to
                        fulfill the institutional goal, and by marketing, you
                        can attract a great mob.
                      </li>
                      <li>
                        Sales: If the franchise is generating sales that means
                        it is operating well and the cycle of money has started
                        therefore to get maximum output to convert your
                        potential leads into sales.
                      </li>
                      <li>
                        Management: A proper code of conduct should be followed
                        by the one who is owning the franchise, Only one
                        authority should be accountable to the higher authority.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-header" id="headingThree">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn collapsed"
                          data-toggle="coll"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          How can I go further?
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapseThree"
                  className="coll"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    You can proceed further by progressing in the way you are
                    guided by the mentor and increasing the sales, You can Check
                    the given video & pdf or can contact us VIA call.
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-header" id="headingfour">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn collapsed"
                          data-toggle="coll"
                          data-target="#collapsefour"
                          aria-expanded="false"
                          aria-controls="collapsefour"
                        >
                          What can I expect after purchasing a franchise?
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefour"
                  className="coll"
                  aria-labelledby="headingfour"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    After purchasing the franchise you will get the ownership of
                    the one of the most prominent and leading Health group with
                    More than 50% return on initial investment within a year.
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-header" id="headingfive">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn collapsed"
                          data-toggle="coll"
                          data-target="#collapsefive"
                          aria-expanded="false"
                          aria-controls="collapsefive"
                        >
                          What is the price of the franchise?
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefive"
                  className="coll"
                  aria-labelledby="headingfive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    You can be a part of the best and fastest-growing health and
                    fitness business at an affordable price of 15,00,000/-
                    annually.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2">
            <div className="covid mt-5">
              <h2 className="h2-fs text-center text-333-color">
                We're <span className="m-0 text-blue-color">Here To Help</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row">
              <div className="col-lg-6">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/contact.webp"
                  }
                  width="100%"
                  alt="Contact"
                />
              </div>
              <div className="col-lg-6">
                <p className="mb-0 mt-4">Full Name</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control fr mt-2"
                  placeholder="Enter Full Name"
                />
                <p className="mb-0 mt-4">Email Address</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control fr mt-2"
                  placeholder="Enter Email Address"
                />
                <p className="mb-0 mt-4">Phone Number</p>
                <input
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="form-control fr mt-2"
                  placeholder="Enter Phone Number"
                />
                <p className="mb-0 mt-4">Write Your Message</p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control fr mt-2 text-dark"
                ></textarea>
                <button
                  type="button"
                  className="btn btn-success mt-4"
                  onClick={handleApplyForInquiry}
                >
                  Apply For Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FgDigitalFooter />
    </>
  );
}

export default FitnessBrandFranchise;
