import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "../../assets/css/baroda.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button } from "react-bootstrap";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import FwgFooter from "../../components/partials/Footer/fwgfooter";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Helmet } from "react-helmet";

function FwgAdajanBranch() {
  const canonicalUrl = window.location.href;
  useEffect(() => {
    const $ = window.$;
    $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fas fa-arrow-right"></i>');
  }, []);

  return (
    <>
      <Helmet>
        <title>Transform Your Health at Fitness With Gomzi - Premier Fitness Center</title>
        <meta name="description" content="Step into a world of health transformation at Fitness With Gomzi, your go-to fitness center for personalized training, group classes, and a vibrant fitness community. Whether you're on a journey to weight loss, strength building, or overall wellness, our expert trainers and state-of-the-art facilities are here to guide you every step of the way. Join us and redefine your fitness journey today." />
        <meta name="keyword" content="Fitness With Gomzi, fitness center, personal training, health and wellness centre, gym, fitness programs, weight loss, strength training, fitness community, weight loss centre" />
        <meta property="og:title" content="Transform Your Health at Fitness With Gomzi - Premier Fitness Center" />
        <meta property="og:description" content="Step into a world of health transformation at Fitness With Gomzi, your go-to fitness center for personalized training, group classes, and a vibrant fitness community. Whether you're on a journey to weight loss, strength building, or overall wellness, our expert trainers and state-of-the-art facilities are here to guide you every step of the way. Join us and redefine your fitness journey today." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fwg-adajan-branch" />
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
                src={process.env.PUBLIC_URL + "/assets/images/img/banner2.webp"}
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
              <img
                className="d-block d-md-none w-100 lazy"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile2.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
            </div>
            <div className="item">
              <img
                className="d-none d-md-block w-100 lazy"
                src={process.env.PUBLIC_URL + "/assets/images/img/banner3.webp"}
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
              <img
                className="d-block d-md-none w-100 lazy"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile3.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
            </div>
            <div className="item">
              <img
                className="d-none d-md-block w-100 lazy"
                src={process.env.PUBLIC_URL + "/assets/images/img/banner4.webp"}
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
              <img
                className="d-block d-md-none w-100 lazy"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile4.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
            </div>
            <div className="item">
              <img
                className="d-none d-md-block w-100 lazy"
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/banner26.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
              <img
                className="d-block d-md-none w-100 lazy"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile26.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
            </div>
            <div className="item">
              <img
                className="d-none d-md-block w-100 lazy"
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/banner27.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
              <img
                className="d-block d-md-none w-100 lazy"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile27.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section>
        <div className="section pb-0">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <span className="section-title-border border-center"></span>
                <p className="subtitle paragraph">Our</p>
                <h2 className="h2-fs section-title h2 mb-4">Amenities</h2>
              </div>
            </div>
            <div className="">
              <div className="row mt-md-5">
                <div className="col-md-4">
                  <div className="amenities">
                    <div className="effect-bubba figure">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fwg/achievement-1.webp"
                        }
                        className="img-fluid"
                        alt="Carpet Area"
                      />
                      <div className="figcaption">
                        <h2 className="h2-fs">Weight Loss Program</h2>
                        <p>
                          We Provide Expert Guidance And Personalized Diet Plans
                          For Weight Loss.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="amenities">
                    <div className="effect-bubba figure">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fwg/achievement-2.webp"
                        }
                        className="img-fluid"
                        alt="Steam bath"
                      />
                      <div className="figcaption">
                        <h2 className="h2-fs">Weight Management Program</h2>
                        <p>
                          Assessment, nutrition guidance, exercise plans,
                          support, education, monitoring, intervention,
                          maintenance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="amenities">
                    <div className="effect-bubba figure">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/achievement_15.webp"
                        }
                        className="img-fluid"
                        alt="Fitness Sessions"
                      />
                      <div className="figcaption">
                        <h2 className="h2-fs">Clinical Illness Program</h2>
                        <p>
                          Diagnosis, treatment plan, medication management,
                          monitoring, lifestyle adjustments, rehabilitation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col"></div>
                <div className="col-md-4">
                  <div className="amenities">
                    <div className="effect-bubba figure">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fwg/achievement-3.webp"
                        }
                        className="img-fluid"
                        alt="Automatic Cardio"
                      />
                      <div className="figcaption">
                        <h2 className="h2-fs">Health And Wellness Program</h2>
                        <p>
                          Exercise, nutrition, stress management, sleep hygiene,
                          mindfulness, support, education, accountability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="amenities">
                    <div className="effect-bubba figure">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fwg/achievement-4.webp"
                        }
                        className="img-fluid"
                        alt="img02"
                      />
                      <div className="figcaption">
                        <h2 className="h2-fs">Prep Coaching Program</h2>
                        <p>
                          Prep guidance, study strategies, practice exams,
                          feedback, support, accountability, progress tracking.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span className="section-title-border border-center"></span>
              <p className="subtitle paragraph">Best</p>
              <h2 className="h2-fs section-title h2 mb-4">Membership packages</h2>
            </div>
          </div>
          <div className="pricing-container">
            <div className="p-0 pricing-list bounce-invert">
              <div className="slider-container">
                <OwlCarousel
                  loop
                  autoplay
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
                  <div className="item mx-2">
                    <div>
                      <div className="p-0 pricing-wrapper">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/rtp-1.0-main.webp"
                          }
                          width="100%"
                          className="lazy"
                          alt="fggroup"
                        />
                        <div className="is-visible">
                          <div className="px-4 text-center box-shadow pricing-table border-left border-right">
                            <p
                              className="subtitle paragraph"
                              style={{ color: "#86c33a" }}
                            >
                              1 Month
                            </p>
                            <h2 className="h2-fs h2 mt-1">₹10000/-</h2>
                            <h2 className="h5 h5-fs mb-4">
                              Diet And personal Training
                            </h2>
                            <div className="border-bottom border-color mb-5"></div>
                            <ul className="list-unstyled mt-3 mb-3">
                              <li
                                className="mb-3"
                                style={{ letterSpacing: "1px" }}
                              >
                                Body Analysis
                              </li>
                              <li
                                className="mb-3"
                                style={{ letterSpacing: "1px" }}
                              >
                                Customized Fitness Plan
                              </li>
                              <li
                                className="mb-3"
                                style={{ letterSpacing: "1px" }}
                              >
                                Daily Diets & Exercise Updates
                              </li>
                            </ul>
                            <Link
                              to="https://api.whatsapp.com/send?phone=8866842520&amp;text= I want to Know More About 1 Month Diet And personal Training Plan Adajan Branch"
                              className="btnnnnn btnnnnn-primary mt-5 mb-5 hover-ripple"
                              style={{ display: "inline-block" }}
                            >
                              Select Plan
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <div>
                      <div className="p-0 pricing-wrapper">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/rtp-2.0-main.webp"
                          }
                          width="100%"
                          className="lazy"
                          alt="fggroup"
                        />
                        <div className="is-visible">
                          <div className="px-4 text-center box-shadow pricing-table border-left border-right">
                            <p
                              className="subtitle paragraph"
                              style={{ color: "#86c33a" }}
                            >
                              3 Months
                            </p>
                            <h2 className="h2-fs h2 mt-1">₹24000/-</h2>
                            <h2 className="h5 h5-fs mb-4">
                              Diet And personal Training
                            </h2>
                            <div className="border-bottom border-color mb-5"></div>
                            <ul className="list-unstyled mt-3 mb-3">
                              <li
                                className="mb-3"
                                style={{ letterSpacing: "1px" }}
                              >
                                Body Analysis
                              </li>
                              <li
                                className="mb-3"
                                style={{ letterSpacing: "1px" }}
                              >
                                Customized Fitness Plan
                              </li>
                              <li
                                className="mb-3"
                                style={{ letterSpacing: "1px" }}
                              >
                                Daily Diets & Exercise Updates
                              </li>
                            </ul>
                            <Link
                              to="https://api.whatsapp.com/send?phone=8866842520&amp;text= I want to Know More About 3 Months Diet And personal Training Plan in Adajan Branch"
                              className="btnnnnn btnnnnn-primary mb-5 mt-5 hover-ripple"
                              style={{ display: "inline-block" }}
                            >
                              Select Plan
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <div>
                      <div className="p-0 pricing-wrapper">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/rtp-3.0-main.webp"
                          }
                          width="100%"
                          className="lazy"
                          alt="fggroup"
                        />
                        <div className="is-visible">
                          <div className="px-4 text-center box-shadow pricing-table border-left border-right">
                            <p
                              className="subtitle paragraph"
                              style={{ color: "#86c33a" }}
                            >
                              6 Months
                            </p>
                            <h2 className="h2-fs h2 mt-1">₹42000/-</h2>
                            <h2 className="h5 h5-fs mb-4">
                              Diet And personal Training
                            </h2>
                            <div className="border-bottom border-color mb-5"></div>
                            <ul className="list-unstyled mt-3 mb-3">
                              <li
                                className="mb-3"
                                style={{ letterSpacing: "1px" }}
                              >
                                Body Analysis
                              </li>
                              <li
                                className="mb-3"
                                style={{ letterSpacing: "1px" }}
                              >
                                Customized Fitness Plan
                              </li>
                              <li
                                className="mb-3"
                                style={{ letterSpacing: "1px" }}
                              >
                                Daily Diets & Exercise Updates
                              </li>
                            </ul>
                            <Link
                              to="https://api.whatsapp.com/send?phone=8866842520&amp;text= I want to Know More About 6 Months Diet And personal Training Plan Adajan Branch"
                              className="btnnnnn btnnnnn-primary mb-5 mt-5 hover-ripple"
                              style={{ display: "inline-block" }}
                            >
                              Select Plan
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <div>
                      <div className="p-0 pricing-wrapper">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/rtp-5.0-main.webp"
                          }
                          width="100%"
                          className="lazy"
                          alt="fggroup"
                        />
                        <div className="is-visible">
                          <div className="px-4 text-center box-shadow pricing-table border-left border-right">
                            <p
                              className="subtitle paragraph"
                              style={{ color: "#86c33a" }}
                            >
                              12 Months
                            </p>
                            <h2 className="h2-fs h2 mt-1">₹72000/-</h2>
                            <h2 className="h5 h5-fs mb-4">
                              Diet And personal Training
                            </h2>
                            <div className="border-bottom border-color mb-5"></div>
                            <ul className="list-unstyled mt-3 mb-3">
                              <li
                                className="mb-3"
                                style={{ letterSpacing: "1px" }}
                              >
                                Body Analysis
                              </li>
                              <li
                                className="mb-3"
                                style={{ letterSpacing: "1px" }}
                              >
                                Customized Fitness Plan
                              </li>
                              <li
                                className="mb-3"
                                style={{ letterSpacing: "1px" }}
                              >
                                Daily Diets & Exercise Updates
                              </li>
                            </ul>
                            <Link
                              to="https://api.whatsapp.com/send?phone=8866842520&amp;text= I want to Know More About 12 Months Diet And personal Training Plan Adajan Branch"
                              className="btnnnnn btnnnnn-primary mb-5 mt-5 hover-ripple"
                              style={{ display: "inline-block" }}
                            >
                              Select Plan
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-secondary position-relative margintop">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 mb-4 mb-md-0 text-center">
              <span className="section-title-border border-center"></span>
              <p className="subtitle text-white paragraph">Global Journey Of</p>
              <h2 className="h2-fs section-title text-white h2 mb-3">
                Transformation
              </h2>
            </div>
            <div className="item col-md-6 col-6 mt-3">
              <LazyLoadImage
                effect="blur"
                className="img-fluid"
                src={process.env.PUBLIC_URL + "/assets/images/img/inter-3.webp"}
                style={{
                  borderRadius: "5px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                }}
                alt="weight loss transformation"
              />
            </div>
            <div className="item col-md-6 col-6 mt-3">
              <LazyLoadImage
                effect="blur"
                className="img-fluid"
                src={process.env.PUBLIC_URL + "/assets/images/img/inter-1.webp"}
                style={{
                  borderRadius: "5px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                }}
                alt="weight loss transformation"
              />
            </div>
            <div className="item col-md-6 col-6 mt-3">
              <LazyLoadImage
                effect="blur"
                className="img-fluid"
                src={process.env.PUBLIC_URL + "/assets/images/img/inter-2.webp"}
                style={{
                  borderRadius: "5px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                }}
                alt="weight loss transformation"
              />
            </div>
            <div className="item col-md-6 col-6 mt-3">
              <LazyLoadImage
                effect="blur"
                className="img-fluid"
                src={process.env.PUBLIC_URL + "/assets/images/img/inter-6.webp"}
                style={{
                  borderRadius: "5px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                }}
                alt="weight loss transformation"
              />
            </div>
            <div className="item col-md-6 col-6 mt-3">
              <LazyLoadImage
                effect="blur"
                className="img-fluid"
                src={process.env.PUBLIC_URL + "/assets/images/img/inter-7.webp"}
                style={{
                  borderRadius: "5px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                }}
                alt="weight loss transformation"
              />
            </div>
            <div className="item col-md-6 col-6 mt-3">
              <LazyLoadImage
                effect="blur"
                className="img-fluid"
                src={process.env.PUBLIC_URL + "/assets/images/img/40.webp"}
                style={{
                  borderRadius: "5px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                }}
                alt="weight loss transformation"
              />
            </div>
            <div className="item col-md-6 col-6 mt-3">
              <LazyLoadImage
                effect="blur"
                className="img-fluid"
                style={{
                  borderRadius: "5px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                }}
                src={process.env.PUBLIC_URL + "/assets/images/img/41.webp"}
                alt="weight loss transformation"
              />
            </div>
            <div className="item col-md-6 col-6 mt-3">
              <LazyLoadImage
                effect="blur"
                className="img-fluid"
                style={{
                  borderRadius: "5px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                }}
                src={process.env.PUBLIC_URL + "/assets/images/img/42.webp"}
                alt="weight loss transformation"
              />
            </div>
            <div className="item col-md-6 col-6 mt-3">
              <LazyLoadImage
                effect="blur"
                className="img-fluid"
                style={{
                  borderRadius: "5px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                }}
                src={process.env.PUBLIC_URL + "/assets/images/img/43.webp"}
                alt="weight loss transformation"
              />
            </div>
            <div className="item col-md-6 col-6 mt-3">
              <LazyLoadImage
                effect="blur"
                className="img-fluid"
                style={{
                  borderRadius: "5px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                }}
                src={process.env.PUBLIC_URL + "/assets/images/img/44.webp"}
                alt="weight loss transformation"
              />
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
      <section className="section bg-gray bg-dots">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span className="section-title-border border-center"></span>
              <p className="subtitle paragraph">Testimonials</p>
              <h2 className="h2-fs section-title h2 mb-4">What Clients Are Say?</h2>
            </div>
            <div className="col-10 mx-auto">
              <OwlCarousel
                nav
                dots={false}
                loop
                autoplay
                navigation
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
                      process.env.PUBLIC_URL + "/assets/images/img/kajal.webp"
                    }
                    alt="client"
                    style={{ width: "100px" }}
                  />
                  <div className="bg-quote text-center pt-md-4">
                    <h2 className="h4-fs h4">Kajal</h2>
                    <p className="font-italic mb-5 h5 text-dark paragraph">
                      "Very effectively follow ups for diet and constant watch,
                      appreciate the way being handled from their team.Reduced
                      weight significantly"
                    </p>
                  </div>
                </div>
                <div className="text-center item">
                  <img
                    className="img-fluid box-shadow rounded-circle mb-5 d-inline-block"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/ranu-img.webp"
                    }
                    alt="client"
                    style={{ width: "100px" }}
                  />
                  <div className="bg-quote text-center pt-md-4">
                    <h2 className="h4-fs h4">Ranu</h2>
                    <p className="font-italic mb-5 h5 text-dark paragraph">
                      "This is the best experience for me with the help of
                      "Fitness with Gomzi". I lost my weight 12 kg in 3 month
                      with daily goal setup and with daily updates. I start my
                      day with exercise and meal and I end my day with
                      satisfaction of what I did today."
                    </p>
                  </div>
                </div>
                <div className="text-center item">
                  <img
                    className="img-fluid box-shadow rounded-circle mb-5 d-inline-block"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/kinal-goti.webp"
                    }
                    alt="client"
                    style={{ width: "100px" }}
                  />
                  <div className="bg-quote text-center pt-md-4">
                    <h2 className="h4-fs h4">Kinjal Goti</h2>
                    <p className="font-italic mb-5 h5 text-dark paragraph">
                      "After following the diet plan provide by Fitness with
                      Gomzi, I found improvement in my health. I feel more
                      energetic.Thank you"
                    </p>
                  </div>
                </div>
                <div className="text-center item">
                  <img
                    className="img-fluid box-shadow rounded-circle mb-5 d-inline-block"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/amruta.webp"
                    }
                    alt="client"
                    style={{ width: "100px" }}
                  />
                  <div className="bg-quote text-center pt-md-4">
                    <h2 className="h4-fs h4">Amruta</h2>
                    <p className="font-italic mb-5 h5 text-dark paragraph">
                      "Fitness with Gomzi is great place to start your weight
                      loss program Portion control is done in great way and also
                      the meal won't leave you hungry and follow up with the
                      exercise Diet plan works like a charm because it is not
                      that tough to follow. I lost around 10 kgs within 2
                      months."
                    </p>
                  </div>
                </div>
              </OwlCarousel>
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
                <p className="subtitle paragraph">Outstanding</p>
                <h2 className="h2-fs section-title h2 mb-4">Clients Response</h2>
              </div>
              <div className="col-md-6 mb-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/harshal-review.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="client journey"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://www.youtube.com/watch?v=mk3_gQ4G1-E"
                      target="_blank"
                      data-flashy-type="video"
                      className="custom"
                      rel="noreferrer"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/navnish.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="client journey"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://www.youtube.com/watch?v=oq7jiXitX3o"
                      target="_blank"
                      data-flashy-type="video"
                      className="custom"
                      rel="noreferrer"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/ronak.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="client journey"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://www.youtube.com/watch?v=vpCljUgyhLA"
                      target="_blank"
                      data-flashy-type="video"
                      className="custom"
                      rel="noreferrer"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/vishal-patel.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="client journey"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://www.youtube.com/watch?v=bCkuNsxOo6s"
                      target="_blank"
                      data-flashy-type="video"
                      className="custom"
                      rel="noreferrer"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid p-0">
          <Button className="btnnnnn1 py-5 d-none d-md-block">
            Start Your Fitness Journey Now
          </Button>
          <Button className="btnnnnn1 py-5 d-block d-md-none">
            Start Your Fitness
            <br /> Journey Now
          </Button>
        </div>
      </section>
      <section className="section bg-gray">
        <div className="mb-4">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <span className="section-title-border"></span>
                <p className="subtitle paragraph">How We Works For Your</p>
                <h2 className="h2-fs h2 mb-2">Fitness Journey</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <div className="icon-bg mb-4 water-wave">
                  <LazyLoadImage
                    effect="blur"
                    className="mt-3"
                    alt="online training"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/step-22.webp"
                    }
                    style={{ width: "64px" }}
                  />
                </div>
                <h2 className="h4-fs mb-4 h4">Consultation</h2>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <div className="icon-bg mb-4 water-wave">
                  <LazyLoadImage
                    effect="blur"
                    className="mt-3 lazy"
                    alt="recorded session"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/step-11.webp"
                    }
                    style={{ width: "64px" }}
                  />
                </div>
                <h2 className="h4-fs mb-4 h4">Body Analysis</h2>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <div className="icon-bg mb-4 water-wave">
                  <LazyLoadImage
                    effect="blur"
                    className="mt-3 lazy"
                    alt="job placement"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/step-44.webp"
                    }
                    style={{ width: "64px" }}
                  />
                </div>
                <h2 className="h4-fs mb-4 h4">Customized Fitness Plan</h2>
              </div>
            </div>
            <div className="col"></div>
            <div className="col-lg-4 mb-4">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <div className="icon-bg mb-4 water-wave">
                  <LazyLoadImage
                    effect="blur"
                    className="mt-3 lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/step-55.webp"
                    }
                    alt="book"
                    style={{ width: "64px" }}
                  />
                </div>
                <h2 className="h4-fs mb-4 h4">Daily Diets & Exercise Updates</h2>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark">
                <div className="icon-bg mb-4 water-wave">
                  <LazyLoadImage
                    effect="blur"
                    className="mt-3 lazy"
                    alt="course certification"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/bodybuilder.webp"
                    }
                    style={{ width: "64px" }}
                  />
                </div>
                <h2 className="h4-fs mb-4 h4">Meet Your Goals</h2>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5">
              <div className="text-center">
                <div>
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/slim-body.png"
                    }
                    alt="shape"
                  />
                </div>
                <div>
                  <h2 className="text-white mb-0 h3-fs h3">
                    <CountUp
                      end={8000}
                      duration={3}
                      separator=","
                      className="counter"
                    />
                    +
                  </h2>
                  <span className="text-white fs-25">
                    Transformation
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="text-center">
                <div>
                  <LazyLoadImage
                    effect="blur"
                    src={process.env.PUBLIC_URL + "/assets/images/fwg/diet.png"}
                    alt="shape"
                  />
                </div>
                <div>
                  <h2 className="text-white mb-0 h3-fs h3">
                    <CountUp
                      end={4000}
                      duration={3}
                      separator=","
                      className="counter"
                    />
                    +
                  </h2>
                  <span className="text-white fs-25">
                    Weight Loss
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="text-center">
                <div>
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/feasibility.png"
                    }
                    alt="shape"
                  />
                </div>
                <div>
                  <h2 className="text-white mb-0 h3-fs h3">
                    <CountUp
                      end={2000}
                      duration={3}
                      separator=","
                      className="counter"
                    />
                    +
                  </h2>
                  <span className="text-white fs-25">
                    Clinical
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="text-center">
                <div>
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/trainer.png"
                    }
                    alt="shape"
                  />
                </div>
                <div>
                  <h2 className="text-white mb-0 h3-fs h3">
                    <CountUp
                      end={1000}
                      duration={3}
                      separator=","
                      className="counter"
                    />
                    +
                  </h2>
                  <span className="text-white fs-25">
                    Prep Coaching
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="text-center">
                <div>
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/gain-weight.png"
                    }
                    alt="shape"
                  />
                </div>
                <div>
                  <h2 className="text-white mb-0 h3-fs h3">
                    <CountUp
                      end={1000}
                      duration={3}
                      separator=","
                      className="counter"
                    />
                    +
                  </h2>
                  <span className="text-white fs-25">
                    Weight Gain
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="text-center">
                <div>
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/conference.png"
                    }
                    alt="shape"
                  />
                </div>
                <div>
                  <h2 className="text-white mb-0 h3-fs h3">
                    <CountUp
                      end={50}
                      duration={3}
                      separator=","
                      className="counter"
                    />
                    +
                  </h2>
                  <span className="text-white fs-25">
                    Corporate Events
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us margintop">
        <div className="container">
          <div className="contact-experts flex">
            <h2 className="h3-fs">
              The first step to a healthier you starts here. Talk to our experts
              now
            </h2>
            <div className="contacts row">
              <div className="col-lg-4">
                <Link
                  to="https://api.whatsapp.com/send?phone=8866842520&amp;text= I want to Know More About Fitness With Gomzi At Adajan Branch"
                  id="healthier_you"
                  target="_blank"
                >
                  <div className="contact-on-whatsapp contact d-flex">
                    <div className="contact-on-whatsapp-icon">
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <div className="contact-content mt-3">
                      <li className="card-btn">
                        Whatsapp Us
                        <svg
                          width="18"
                          height="12"
                          viewBox="0 0 18 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989592 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM1 6.75H17V5.25H1V6.75Z"
                            fill="#2F313B"
                          ></path>
                        </svg>
                      </li>
                      <p style={{ color: "#5f5f5f" }}>
                        Talk to our health experts now for immediate guidance
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4">
                <Link to="">
                  <div className="book-an-appointment contact d-flex">
                    <div className="contact-on-whatsapp-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="contact-content mt-3">
                      <li className="card-btn">
                        Call Us
                        <svg
                          width="18"
                          height="12"
                          viewBox="0 0 18 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989592 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM1 6.75H17V5.25H1V6.75Z"
                            fill="#2F313B"
                          ></path>
                        </svg>
                      </li>
                      <p style={{ color: "#5f5f5f" }}>
                        Talk to our health experts now for immediate guidance
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4">
                <Link to="">
                  <div className="book-an-appointment contact d-flex">
                    <div className="contact-on-whatsapp-icon">
                      <i className="far fa-calendar-check"></i>
                    </div>
                    <div className="contact-content mt-3">
                      <li className="card-btn">
                        Book an appointment
                        <svg
                          width="18"
                          height="12"
                          viewBox="0 0 18 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989592 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM1 6.75H17V5.25H1V6.75Z"
                            fill="#2F313B"
                          ></path>
                        </svg>
                      </li>
                      <p style={{ color: "#5f5f5f" }}>
                        Schedule a call with our team at a time that works best
                        for you
                      </p>
                    </div>
                  </div>
                </Link>
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
                <p className="subtitle paragraph">Gallery</p>
                <h2 className="h2-fs section-title h2 mb-4">Fitness Studio</h2>
              </div>
              <div className="mb-3 col-6">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/adajan-gym-1.jpg"
                  }
                  width="100%"
                  className="lazy"
                  alt="fggroup"
                />
              </div>
              <div className="mb-3 col-6">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/adajan-gym-2.jpg"
                  }
                  width="100%"
                  className="lazy"
                  alt="fggroup"
                />
              </div>
              <div className="mb-3 col-6">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/adajan-gym-3.jpg"
                  }
                  width="100%"
                  className="lazy"
                  alt="fggroup"
                />
              </div>
              <div className="mb-3 col-6">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/adajan-gym-4.jpg"
                  }
                  width="100%"
                  className="lazy"
                  alt="fggroup"
                />
              </div>
              <div className="mb-3 col-6">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/adajan-gym-5.jpg"
                  }
                  width="100%"
                  className="lazy"
                  alt="fggroup"
                />
              </div>
              <div className="mb-3 col-6">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/adajan-gym-6.jpg"
                  }
                  width="100%"
                  className="lazy"
                  alt="fggroup"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid p-0">
          <Button
            href="https://api.whatsapp.com/send?phone=7041904050&amp;text=Hello I want to know more about Your Services."
            className="btnnnnn1 py-5 d-block"
          >
            consulting with experts
          </Button>
        </div>
      </section>
      <section className="section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span className="section-title-border border-center"></span>
              <p className="subtitle paragraph">We're</p>
              <h2 className="h2-fs section-title h2 mb-4">Here To Help</h2>
            </div>
            <div className="col"></div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="bg-white box-shadow text-center p-5 px-md-2 px-lg-5">
                <i className="fas fa-map-marker-alt text-primary icon-lg mb-4"></i>
                <h2 className="h4-fs h4 mb-4">Our Address</h2>
                <ul className="list-unstyled">
                  <li>
                    228-TIME SQUARE, GauravPath Road, TP 10 Main Rd, opp. Shree
                    Bharti Residency, Surat, Gujarat 394510
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
                  <li>+91 7041904050</li>
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
              <select id="txt_contact_course form-control fr mt-2">
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
      <FwgFooter />
    </>
  );
}

export default FwgAdajanBranch;
