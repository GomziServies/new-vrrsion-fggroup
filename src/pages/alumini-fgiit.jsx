import React, { useEffect } from "react";
import SimpleHeader from "../components/partials/Header/simpleheader";
import FgDigitalFooter from "../components/partials/Footer/fgdigitalfooter";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button, Form } from "react-bootstrap";
import fg_alumina_event_2022 from "../pdf/fg_alumina_event_2022.pdf";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function AluminiFgiit() {
  const canonicalUrl = window.location.href;
  useEffect(() => {
    const $ = window.$;
    $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fas fa-arrow-right"></i>');
  }, []);
  return (
    <>
      <Helmet>
        <title>FG Alumina event organized on 27th August 2022 Surat</title>
        <meta name="description" content="purpose and objective of the event was to motivate and nurchyo the student for full year to concern filed of health and fitness." />
        <meta name="keyword" content="best dietitian in surat, online dietitian consultation, gyms in surat, personal training gyms near me, certified nutritionist course, fitness trainer course in india, online fitness courses, nutritionist course online india, certification for fitness trainer, nutritionist online course, best digital marketing course, best digital marketing course online" />
        <meta property="og:title" content="FG Alumina event organized on 27th August 2022 Surat" />
        <meta property="og:description" content="purpose and objective of the event was to motivate and nurchyo the student for full year to concern filed of health and fitness." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/alumini-fgiit" />
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
      <section style={{ marginTop: "70px" }} className="d-block d-md-none">
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
            <div className="item">
              <div className="img-alumina">
                <div className="black-before black-hight">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/pray-mobile.webp"
                    }
                    alt="pray"
                  />
                </div>
                <div className="alumina-text tabata text-center d-flex justify-content-center align-items-center">
                  <div className="ex-pert mr-3">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/pray-icon.webp"
                      }
                      alt="FG Group"
                      className="img-fluid"
                    />
                  </div>
                  <h2 className="h2-fs">
                    <span style={{ color: "#ffd667" }}>Pray</span> and{" "}
                    <span style={{ color: "#ffd667" }}>lighting</span> lamp
                  </h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="img-alumina">
                <div className="black-before black-hight">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/expert-mobile.webp"
                    }
                    alt="Experts"
                  />
                </div>
                <div className="alumina-text tabata text-center d-flex justify-content-center align-items-center">
                  <div className="ex-pert mr-3">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/experience.webp"
                      }
                      alt="FG Group"
                      className="img-fluid"
                    />
                  </div>
                  <h2 className="h2-fs">
                    Experts
                    <span style={{ color: "#76ff6a" }}>
                      {" "}
                      panel discussion
                    </span>{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="img-alumina">
                <div className="black-before black-hight">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/mobile-banner-1.webp"
                    }
                    alt="Rapid fire"
                  />
                </div>
                <div className="alumina-text tabata text-center d-flex justify-content-center align-items-center">
                  <div className="ex-pert mr-2">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/deployment.webp"
                      }
                      alt="FG Group"
                      className="img-fluid"
                    />
                  </div>
                  <h2 className="h2-fs">
                    React &{" "}
                    <span style={{ color: "#76ff6a" }}> Respond activity</span>{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="img-alumina">
                <div className="black-before black-hight">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/mobile-career-c.webp"
                    }
                    alt="Career Counseling"
                  />
                </div>
                <div className="alumina-text tabata text-center d-flex justify-content-center align-items-center">
                  <div className="ex-pert mr-2">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/career.webp"
                      }
                      alt="FG Group"
                      className="img-fluid"
                    />
                  </div>
                  <h2 className="h2-fs">
                    career <span style={{ color: "#76ff6a" }}> counseling</span>{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="img-alumina">
                <div className="black-before black-hight">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/food-mobile.webp"
                    }
                    alt="Lunch"
                  />
                </div>
                <div className="alumina-text tabata text-center d-flex justify-content-center align-items-center">
                  <div className="ex-pert mr-2">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/masala-dosa.webp"
                      }
                      alt="FG Group"
                      className="img-fluid"
                    />
                  </div>
                  <h2 className="h2-fs">
                    <span style={{ color: "#76ff6a" }}>food</span> paradise
                  </h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="img-alumina">
                <div className="black-before black-hight">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/awards-mobile.webp"
                    }
                    alt="Award Ceremony"
                  />
                </div>
                <div className="alumina-text tabata text-center d-flex justify-content-center align-items-center">
                  <div className="ex-pert mr-2">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/winner.webp"
                      }
                      alt="FG Group"
                      className="img-fluid"
                    />
                  </div>
                  <h2 className="h2-fs">
                    <span style={{ color: "#76ff6a" }}>award</span> ceremony
                  </h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="img-alumina">
                <div className="black-before black-hight">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/mobile-selfies.webp"
                    }
                    alt="Selfies"
                  />
                </div>
                <div className="alumina-text tabata text-center d-flex justify-content-center align-items-center">
                  <div className="ex-pert mr-2">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/selfie.webp"
                      }
                      alt="FG Group"
                      className="img-fluid"
                    />
                  </div>
                  <h2 className="h2-fs">
                    time to take{" "}
                    <span style={{ color: "#76ff6a" }}> some selfies</span>
                  </h2>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section className="d-none d-md-block" style={{ marginTop: "70px" }}>
        <div className="container-fluid p-0">
          <OwlCarousel
            loop
            autoplay
            dots={false}
            id="myCarousel"
            className="owl-carousel owl-theme m-0"
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
              <div className="img-alumina">
                <div className="black-before">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/pray.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                </div>
                <div className="alumina-text tabata text-center">
                  <h2 className="h2-fs">Pray and lighting lamp</h2>
                  <p>start with praying with our chief guests.</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="img-alumina">
                <div className="black-before">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/experts-talks.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                </div>
                <div className="black-before d-block d-md-none">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/expert-mobile.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                </div>
                <div className="alumina-text tabata text-center">
                  <h2 className="h2-fs">Experts panel discussion</h2>
                  <p>our experts give some advise and motivational speech</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="img-alumina">
                <div className="black-before">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/rapid-fire.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                </div>
                <div className="alumina-text tabata text-center">
                  <h2 className="h2-fs">React & Respond activity</h2>
                  <p>
                    start with rapid fire round and our alumina give answer.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="img-alumina">
                <div className="black-before">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/career-c1.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                </div>
                <div className="alumina-text tabata text-center">
                  <h2 className="h2-fs">career counseling</h2>
                  <p>Our experts give advice on a build career.</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="img-alumina">
                <div className="black-before">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lunch-time.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                </div>
                <div className="alumina-text tabata text-center">
                  <h2 className="h2-fs">food paradise</h2>
                  <p>it's lunch time and fun time.</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="img-alumina">
                <div className="black-before">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/awards.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                </div>
                <div className="alumina-text tabata text-center">
                  <h2 className="h2-fs">award ceremony</h2>
                  <p>our experts give award to their students.</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="img-alumina">
                <div className="black-before">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/selfies.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                </div>
                <div className="alumina-text tabata text-center">
                  <h2 className="h2-fs">it's time to take some selfies</h2>
                  <p>
                    Some fun selfies with our faculty and some fun selfies with
                    fancier stuff.
                  </p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="col-12">
              <div className="describe demoo text-center">
                <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                  Our{" "}
                  <span className="m-0 text-blue-color">
                    {" "}
                    First alumina Event 2022
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3 mb-md-5"></div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-2 order-md-1">
                <div className="d-none d-lg-block">
                  <div className="tabata describe">
                    <p className="mt-0">
                      its our immense pleasure to share with you all that FG
                      Group organized Alumni event 2022 for all our spartans (
                      batch 2017-22). basically, the purpose of event is fun and
                      learn approach . furthermore its one small kind of gesture
                      of appreciation from our side. we strongly believe and
                      follow that for any success and achievement 2 ingredients
                      require and that is guidance & Skill based training . that
                      what exactly we done in events.
                    </p>
                    <a
                      href={fg_alumina_event_2022}
                      download
                      className="btn btn-primary ml-2"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
                <div className="d-block d-lg-none tabata describe">
                  <p className="text-muted mb-0">
                    its our immense pleasure to share with you all that FG Group
                    organized Alumni event 2022 for all our spartans ( batch
                    2007-22). basically, the purpose of event is fun and learn
                    approach.<span id="dotss"></span>
                  </p>
                  <div className="d-block d-md-block">
                    <span id="mores">
                      <p className="m-0 text-muted">
                        furthermore its one small kind of gesture of
                        appreciation from our side. we strongly believe and
                        follow that for any success and achievement 2
                        ingredients require and that is guidance & Skill based
                        training . that what exactly we done in events.
                      </p>
                    </span>
                    <div className="d-sm-flex mt-3 foralum">
                      <Link
                        to=""
                        onclick="myBtnevent()"
                        id="myBtnn"
                        className="btn "
                      >
                        Read more
                      </Link>
                      <a
                        href={fg_alumina_event_2022}
                        download
                        className="btn ml-sm-3"
                        style={{ backgroundColor: "#05db77d3" }}
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-1 order-md-2">
                <div className="child-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/teaser-img.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/mI4I7rpEtRA"
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
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid py-3">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs">
                Career <span className="m-0 text-blue-color"> counseling</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="d-block">
              <OwlCarousel
                loop
                autoplay
                id="owl-actives"
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
                <div className="item m-md-3 m-2">
                  <div className="revies">
                    <div className="ply1 child-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/img-e1.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="career"
                      />
                      <div className="video-btn">
                        <Link
                          to="https://youtu.be/BgOmTQCDh5E"
                          data-flashy-type="video"
                          className="custom"
                        >
                          <span className="newthing">
                            <i className="fas fa-play"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="vide-text">
                      <h2 className="h6-fs"><a href="http://gcsconsultant.fggroup.in/gautam_jani_official" style={{ color: 'black', textDecoration: 'underline' }}>Dr. Gautam Jani</a></h2>
                      <p>
                        Conversion on the 7 habits of highly effective people
                        and the reality of freelancers vs. full-timers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item m-md-3 m-2">
                  <div className="revies">
                    <div className="ply1 child-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/img-e4.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="career"
                      />
                      <div className="video-btn">
                        <Link
                          to="https://youtu.be/3kWozUNw1Uc"
                          data-flashy-type="video"
                          className="custom"
                        >
                          <span className="newthing">
                            <i className="fas fa-play"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="vide-text">
                      <h2 className="h6-fs">Dt.Foram Desai</h2>
                      <p>
                        Wide scope of Nutrition and Dietician by Practical
                        example and give some advise on Business.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item m-md-3 m-2">
                  <div className="revies">
                    <div className="ply1 child-img">
                      <img
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="career"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/img-e2.webp"
                        }
                      />
                      <div className="video-btn">
                        <Link
                          to="https://youtu.be/7OJp2AE4Cjk"
                          data-flashy-type="video"
                          className="custom"
                        >
                          <span className="newthing">
                            <i className="fas fa-play"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="vide-text">
                      <h2 className="h6-fs">Dr. Chintan Shinde</h2>
                      <p>
                        Discussion on skill-based opportunities (technical
                        skills, management skills, people skills).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item m-md-3 m-2">
                  <div className="revies">
                    <div className="ply1 child-img">
                      <img
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="career"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/img-e3.webp"
                        }
                      />
                      <div className="video-btn">
                        <Link
                          to="https://youtu.be/QQ64v7ZzLAw"
                          data-flashy-type="video"
                          className="custom"
                        >
                          <span className="newthing">
                            <i className="fas fa-play"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="vide-text">
                      <h2 className="h6-fs">Dr.Ishaver Patel</h2>
                      <p>
                        Introduction of advanced clinical Nutrition and some Q
                        and A activity with alumina students.
                      </p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 pt-4">
            <div className="col-12">
              <div className="demoo text-center mb-4">
                <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                  Surprise of the{" "}
                  <span className="m-0 text-blue-color">Alumina Event</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3 mb-md-5"></div>
            </div>
            <div className="row">
              <div className="col-1 d-none d-md-block"></div>
              <div className="col-md-10 col-12">
                <div className="child-img trns-off">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/surp.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/-2gYtEESts0"
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
              <div className="col-1 d-none d-md-block"></div>
              <div className="col-1 d-none d-md-block"></div>
              <div className="col-md-10 col-12">
                <div className="tabata describe pt-md-2 pl-md-2">
                  <div className="befor">
                    <h2 className=" h2-fs mt-md-0 my-2 ">
                      Now our institute is government approved.
                    </h2>
                    <p className="text-muted mt-0 ml-0">
                      Now we are first government approved Fitness institute in
                      Gujarat. we are approved by National Skill Development
                      Corporation (NSDC) and Sports, Physical Education, Fitness
                      and Leisure Skills Council(SPEFL-SC).
                    </p>
                    <div>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/all-logo.webp"
                        }
                        alt="FG Group"
                        className="img-fluid d-none d-md-block"
                      />
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/mobile-all-logo.webp"
                        }
                        alt="FG Group"
                        className="img-fluid d-block d-md-none"
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
            <div className="col-12">
              <div className="demoo text-center mb-4">
                <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                  media bites of{" "}
                  <span className="m-0 text-blue-color">FG alumina Event</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3 mb-md-5"></div>
            </div>
            <div
              className="row align-items-center"
              style={{ backgroundColor: "#0bff4314" }}
            >
              <div className="col-md-6 p-3 p-md-0 order-1 order-md-1">
                <div className="child-img rounded-0">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/news-1.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/hhBy3J-zuJY"
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
              <div className="col-md-6 p-md-0 order-2 order-md-2">
                <div className="tabata describe ml-md-4">
                  <h2 className="m-0 h4-fs">
                    <Link
                      to="http://gcsconsultant.fggroup.in/gautam_jani_official"
                      style={{ color: "#000" }}
                    >
                      Dr.Gautam Jani
                    </Link>
                  </h2>
                  <p className="m-0">founder</p>
                  <p className="m-0">
                    Media ask a Question and our faculty give answer.
                  </p>
                  <ul className="pl-4">
                    <li>Any advice for youngsters ?</li>
                    <li>Why is the event organized?</li>
                    <li>what is the purpose?</li>
                    <li>On which basis did FGIIT work?</li>
                    <li>Why is the reason for self-reliance important?</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 p-md-0 pt-0 order-4 order-md-3">
                <div className="tabata describe ml-md-3">
                  <h2 className="m-0 h4-fs">Dt.Foram Desai</h2>
                  <p className="m-0">Co-founder</p>
                  <p className="m-0">
                    Media ask a Question and our faculty give answer.
                  </p>
                  <ul className="pl-4">
                    <li>Why is the event organized?</li>
                    <li>what is the purpose?</li>
                    <li>How many courses are available at your institute ?</li>
                    <li>What is fgiit and what is your motive ?</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 p-3 p-md-0 order-3 order-md-4">
                <div className="child-img rounded-0">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/moment-2.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/DMr2NuGtGpo"
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
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 pb-5">
            <div className="col-12">
              <div className="demoo text-center mb-4">
                <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                  Acknowledged of books{" "}
                  <span className="m-0 text-blue-color">
                    and Placement Corner
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3 mb-md-5"></div>
            </div>
            <div className="item mb-md-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="child-img trns-off">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/knowlage.webp"
                      }
                      alt="FG Group"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="tabata">
                    <div className="befor">
                      <h2 className=" h2-fs mb-2 mt-2 mt-md-0">
                        Knowledge and placement corner
                      </h2>
                      <p className="text-muted">
                        To upgrade Knowledge and Provide placement and job in
                        respective field.
                      </p>
                      <p>We arrange 3 stalls :</p>
                      <ul>
                        <li>all Courses stalls</li>
                        <li>franchisee stalls</li>
                        <li>t&p stalls </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <div className="demoo text-center mb-4">
                <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                  informative{" "}
                  <span className="m-0 text-blue-color">
                    review and discussion
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3 mb-md-5"></div>
            </div>
            <OwlCarousel
              loop
              autoplay
              id="owl-books"
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
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/books-7.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/books-2.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/books-4.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/books-1.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/books-6.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/books-3.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/books-5.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="col-12">
              <div className="describe demoo text-center">
                <h1 style={{ color: "#333" }} className="m-0">
                  Honorable{" "}
                  <span className="m-0 text-blue-color"> chief guest</span>
                </h1>
              </div>
              <div className="thm-bg-clr dector mb-3 mb-md-4"></div>
            </div>
            <OwlCarousel
              loop
              autoPlay
              id="owl-guest"
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
              <div className="item mx-2 my-3">
                <div className="revies">
                  <div className="ply1">
                    <img
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/1-chife.webp"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="item mx-2 my-3">
                <div className="revies">
                  <div className="ply1">
                    <img
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/2-chife.webp"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="item mx-2 my-3">
                <div className="revies">
                  <div className="ply1">
                    <img
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/3-chife.webp"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="item mx-2 my-3">
                <div className="revies">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/4-chife.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                    />
                  </div>
                </div>
              </div>
              <div className="item mx-2 my-3">
                <div className="revies">
                  <div className="ply1">
                    <img
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/5-chife.webp"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="item mx-2 my-3">
                <div className="revies">
                  <div className="ply1">
                    <img
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/6-chife.webp"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="item mx-2 my-3">
                <div className="revies">
                  <div className="ply1">
                    <img
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/7-chife.webp"
                      }
                    />
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="col-12">
              <div className="describe demoo text-center mb-4">
                <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                  fg group alumina Aug 2022{" "}
                  <span className="m-0 text-blue-color">awards ceremony</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3 mb-md-5"></div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-2 order-md-1">
                <div className="tabata describe">
                  <h2 className=" h2-fs ml-md-2 mt-2">Now Start Award Ceremony</h2>
                  <p className="mt-0 mb-1 mb-md-2">
                    <strong>total 11 Category of awards :</strong>
                  </p>
                  <ul className="ml-0 pl-3 pl-md-3">
                    <li>
                      Best Health and Fitness Entrepreneur award (male and
                      female)
                    </li>
                    <li>Best Academic award (male and female)</li>
                    <li>Best Exclusive post award (male and female)</li>
                    <li>Best Opportunistic award (male and female)</li>
                    <li>Best Innovator award </li>
                    <li>Best Prestigious award </li>
                    <li>best social media influencer</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 order-1 order-md-2">
                <div className="trns-off">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/awards-back.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{
                      border: "5px solid #0bff4449",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
              <div className="describe demoo text-center">
                <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                  Category of{" "}
                  <span className="m-0 text-blue-color"> FG Awards</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3 mb-md-5"></div>
            </div>
            <OwlCarousel
              loop
              autoPlay
              id="owl-active"
              className="owl-carousel owl-theme d-block d-md-none ones-time"
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
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-a-a-m.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button>MohmadZaid Mullan</button>
                          <button className="btn-winner position-relative">
                            Manish kumar P Jadav
                            <div className="gif-img left-gif">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Vipin kumar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-h-f-e-m.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button className="btn-winner position-relative">
                            Ritik Kumar
                            <div className="gif-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Abhishek Sonkar</button>
                          <button>Harsh Sharma</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-h-f-e-f.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button className="btn-winner position-relative">
                            Divya Gandhi
                            <div className="gif-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button className="btn-winner position-relative">
                            Nisha Jariwala
                            <div className="gif-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Janki Chevli</button>
                          <button>Snehal A Dudhat</button>
                          <button>Dr.Nidhi Bansal</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-a-a-f.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button>Dr.jinal parmar</button>
                          <button>Poonam Ubhrani Kariya</button>
                          <button className="btn-winner position-relative">
                            Sushma Agrawal
                            <div className="gif-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-e-p-a-m.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button>Kunal shah</button>
                          <button className="btn-winner position-relative">
                            Keyur modi
                            <div className="gif-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Ronit Swain</button>
                          <button>Sali milan</button>
                          <button>Viraj Parekh</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-e-p-a-f.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button>Dr Elli (purbasha)</button>
                          <button className="btn-winner position-relative">
                            Heta panwala
                            <div className="gif-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-o-a.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button className="btn-winner position-relative">
                            Mahmadhanif ibrahim Manjra
                            <div className="gif-img left-gif">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Dr. Aabid khan</button>
                          <button>Ritesh Hambir</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-o-a-f.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button>Dr. Kinjal</button>
                          <button className="btn-winner position-relative">
                            Dr. Heena P. Sarvaiya
                            <div className="gif-img left-gif">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  '/assets/images/img/gif/celebrtion-2.gif"'
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Hiral malvi</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-i-a.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button className="btn-winner position-relative">
                            Mrs. Mitul S Patel
                            <div className="gif-img left-gif">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Kushi shinde</button>
                          <button>Panchali Saikia</button>
                          <button>Deepak Dabral</button>
                          <button>Kishor</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-p-a.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button>Sucheta goel</button>
                          <button className="btn-winner position-relative">
                            Budhadev Sahoo
                            <div className="gif-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Aman khanna</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-s-m-i-m.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button className="btn-winner position-relative">
                            Pragnesh Maisuria
                            <div className="gif-img left-gif">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Harish </button>
                          <button>Vivek Kumar </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
            <OwlCarousel
              loop
              autoPlay
              id="demo-awardss"
              className="owl-carousel owl-theme d-none d-md-block"
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
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-a-a-m.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button>MohmadZaid Mullan</button>
                          <button className="btn-winner position-relative">
                            Manish kumar P Jadav
                            <div className="gif-img left-gif">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Vipin kumar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-h-f-e-m.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button className="btn-winner position-relative">
                            Ritik Kumar
                            <div className="gif-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Abhishek Sonkar</button>
                          <button>Harsh Sharma</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-h-f-e-f.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button className="btn-winner position-relative">
                            Divya Gandhi
                            <div className="gif-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button className="btn-winner position-relative">
                            Nisha Jariwala
                            <div className="gif-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Janki Chevli</button>
                          <button>Snehal A Dudhat</button>
                          <button>Dr.Nidhi Bansal</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-a-a-f.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button>Dr.jinal parmar</button>
                          <button>Poonam Ubhrani Kariya</button>
                          <button className="btn-winner position-relative">
                            Sushma Agrawal
                            <div className="gif-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-e-p-a-m.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button>Kunal shah</button>
                          <button className="btn-winner position-relative">
                            Keyur modi
                            <div className="gif-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Ronit Swain</button>
                          <button>Sali milan</button>
                          <button>Viraj Parekh</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-e-p-a-f.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button>Dr Elli (purbasha)</button>
                          <button className="btn-winner position-relative">
                            Heta panwala
                            <div className="gif-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-o-a.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button className="btn-winner position-relative">
                            Mahmadhanif ibrahim Manjra
                            <div className="gif-img left-gif">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Dr. Aabid khan</button>
                          <button>Ritesh Hambir</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-o-a-f.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button>Dr. Kinjal</button>
                          <button className="btn-winner position-relative">
                            Dr. Heena P. Sarvaiya
                            <div className="gif-img left-gif">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Hiral malvi</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-i-a.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button className="btn-winner position-relative">
                            Mrs. Mitul S Patel
                            <div className="gif-img left-gif">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Kushi shinde</button>
                          <button>Panchali Saikia</button>
                          <button>Deepak Dabral</button>
                          <button>Kishor</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-p-a.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button>Sucheta goel</button>
                          <button className="btn-winner position-relative">
                            Budhadev Sahoo
                            <div className="gif-img">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Aman khanna</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mx-sm-2 mx-lg-3">
                <div className="col-md-12 py-0 py-md-3">
                  <div className="row">
                    <div className="col-1 d-none d-lg-block"></div>
                    <div className="col-lg-10 col-12 p-0 p-md-3">
                      <div className="child-img trns-off">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/b-s-m-i-m.webp"
                          }
                          alt="FG Group"
                          className="img-fluid"
                        />
                      </div>
                      <div className="tabata awards text-center">
                        <h2 className="h3-fs mt-md-3 mt-2">
                          Guess Who win this{" "}
                          <span style={{ color: "#28a745" }}> Award ?</span>
                        </h2>
                        <div className="btn-awards mt-md-4">
                          <button className="btn-winner position-relative">
                            Pragnesh Maisuria
                            <div className="gif-img left-gif">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-1.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img1">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                            <div className="gif-img2">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/images/img/gif/celebrtion-2.gif"
                                }
                                alt="FG Group"
                                className="img-fluid"
                              />
                            </div>
                          </button>
                          <button>Harish </button>
                          <button>Vivek Kumar </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
            <div className="describe demoo text-center my-md-5 pt-md-3 mt-5 mb-4">
              <h2 style={{ color: "#333" }} className="m-md-0 h2-fs pt-5 pt-md-0">
                <span className="m-0 text-blue-color">Champions</span>
              </h2>
              <div className="thm-bg-clr dector mb-3 mb-md-5"></div>
            </div>
            <OwlCarousel
              loop
              autoPlay
              id="demo-winners"
              className="owl-carousel owl-theme d-none d-md-block"
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
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/winner-1.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div className="tabata text-center mt-2 mt-md-3">
                  <h2 className="h4-fs">Best Exclusive Post Award</h2>
                </div>
              </div>
              <div className="item mx-md-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/winner-2.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div className="tabata text-center mt-2 mt-md-3">
                  <h2 className="h4-fs">Best Social Media Influencer</h2>
                </div>
              </div>
              <div className="item mx-md-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/winner-3.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div className="tabata text-center mt-2 mt-md-3">
                  <h2 className="h4-fs">Best Academic Award</h2>
                </div>
              </div>
              <div className="item mx-md-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/winner-4.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div className="tabata text-center mt-2 mt-md-3">
                  <h2 className="h4-fs">Best Innovator Award</h2>
                </div>
              </div>
              <div className="item mx-md-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/winner-5.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div className="tabata text-center mt-2 mt-md-3">
                  <h2 className="h4-fs">Best Exclusive Post Award</h2>
                </div>
              </div>
            </OwlCarousel>
            <OwlCarousel
              loop
              autoPlay
              id="demo-winners-mobile"
              className="owl-carousel owl-theme d-block d-md-none"
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
              <div className="item mx-4 mb-4 mt-0">
                <div className="">
                  <img
                    height="50"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/mobile-winner.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div className="tabata text-center mt-2 mt-md-3">
                  <h2 className="h4-fs">Best Social Media Influencer</h2>
                </div>
              </div>
              <div className="item mx-4 mb-4 mt-0">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/selfi.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div className="tabata text-center mt-2 mt-md-3">
                  <h2 className="h4-fs">Best Exclusive Post Award</h2>
                </div>
              </div>
              <div className="item mx-4 mb-4 mt-0">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/selfi-2.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div className="tabata text-center mt-2 mt-md-3">
                  <h2 className="h4-fs">Best Academic Award</h2>
                </div>
              </div>
              <div className="item mx-4 mb-4 mt-0">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/selfi-3.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div className="tabata text-center mt-2 mt-md-3">
                  <h2 className="h4-fs">Best Innovator Award</h2>
                </div>
              </div>
              <div className="item mx-4 mb-4 mt-0">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/selfi-4.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div className="tabata text-center mt-2 mt-md-3">
                  <h2 className="h4-fs">Best Exclusive Post Award</h2>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="col-12">
              <div className="describe demoo text-center mb-4">
                <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                  engage
                  <span className="m-0 text-blue-color">activities</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3 mb-md-5"></div>
            </div>
            <OwlCarousel
              loop
              autoPlay
              dots
              id="owl-demo"
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
              <div className="item mx-3 position">
                <div className="col-12 p-0">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/enge-9.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/v7zIcqH2-o4"
                      data-flashy-type="video"
                      className="custom"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="demoo demoos blog2 pt-1">
                  <h2 className="h5-fs mt-1">Vision board</h2>
                  <p className="text-muted">
                    Our alumina Write their goal on{" "}
                    <span className="d-sm-none">the White</span> board.
                  </p>
                </div>
              </div>
              <div className="item mx-3 position">
                <div className="col-12 p-0">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/enge-1.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/GCKQN-_5SJI"
                      data-flashy-type="video"
                      className="custom"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="demoo demoos blog2 pt-1">
                  <h2 className="h5-fs mt-1">Rapid Fire</h2>
                  <p className="text-muted">
                    Rapid fire rounds with our FGIIT team.
                  </p>
                </div>
              </div>
              <div className="item mx-3 position">
                <div className="col-12 p-0">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/enge-3.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/vIXjCDu9Fvc"
                      data-flashy-type="video"
                      className="custom"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="demoo demoos blog2 pt-1">
                  <h2 className="h5-fs mt-1">Goal setting</h2>
                  <p className="text-muted">
                    Alumina writes of their fear and goal.
                  </p>
                </div>
              </div>
              <div className="item mx-3 position">
                <div className="col-12 p-0">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/enge-7.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/7wPEHGB3AhE"
                      data-flashy-type="video"
                      className="custom"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="demoo demoos blog2 pt-1">
                  <h2 className="h5-fs mt-1">
                    R&P with <span className="d-sm-none">Chief</span> Guest
                  </h2>
                  <p>Our chief guest Also involved a rapid fire.</p>
                </div>
              </div>
              <div className="item mx-3 position">
                <div className="col-12 p-0">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/enge-8.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/QIQaamPqkzA"
                      data-flashy-type="video"
                      className="custom"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="demoo demoos blog2 pt-1">
                  <h2 className="h5-fs mt-1">Autograph Board</h2>
                  <p className="text-muted">
                    alumina and faculty write Autograph.
                  </p>
                </div>
              </div>
              <div className="item mx-3 position">
                <div className="col-12 p-0">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/selfi-1.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/gwKdy9yP8Sk"
                      data-flashy-type="video"
                      className="custom"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="demoo demoos blog2 pt-1">
                  <h2 className="h5-fs mt-1">Selfie session</h2>
                  <p className="text-muted">
                    alumina take selifes with our facultys.
                  </p>
                </div>
              </div>
              <div className="item mx-3 position">
                <div className="col-12 p-0">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/enge-2.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/TsvK3GDpcD8"
                      data-flashy-type="video"
                      className="custom"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="demoo demoos blog2 pt-1">
                  <h2 className="h5-fs mt-1">Rapid Fire Rounds</h2>
                  <p className="text-muted">
                    Rapid fire round with alumina students.
                  </p>
                </div>
              </div>
              <div className="item mx-3 position">
                <div className="col-12 p-0">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/enge-4.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/HSpVpZXE1ck"
                      data-flashy-type="video"
                      className="custom"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="demoo demoos blog2 pt-1">
                  <h2 className="h5-fs mt-1">Spontaneous Response</h2>
                  <p className="text-muted">
                    Rapid fire rounds with our{" "}
                    <span className="d-sm-none">honorable</span>
                    facultys.
                  </p>
                </div>
              </div>
              <div className="item mx-3 position">
                <div className="col-12 p-0">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/enge-6.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                  />
                  <div className="video-btn">
                    <Link
                      to="https://youtu.be/roCYQn8DekM"
                      data-flashy-type="video"
                      className="custom"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="demoo demoos blog2 pt-1">
                  <h2 className="h5-fs mt-1">Rapid Fire</h2>
                  <p className="text-muted">
                    Rapid fire round with our alumina student.
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2">
            <div className="covid mt-5">
              <h2 className=" h2-fs text-center text-333-color">
                We're <span className="m-0 text-blue-color">Here To Help</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row">
              <div className="col-lg-6">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/contact.webp"
                  }
                  width="100%"
                  alt="fggroup"
                />
              </div>
              <div className="col-lg-6">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-0 mt-4">Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      id="txt_contact_name"
                      className="form-control fr mt-2"
                      placeholder="Enter Full Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-0 mt-4">Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      id="txt_contact_email"
                      className="form-control fr mt-2"
                      placeholder="Enter Email Address"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-0 mt-4">
                      Form.Labelhone Number
                    </Form.Label>
                    <Form.Control
                      type="number"
                      id="txt_contact_number"
                      className="form-control fr mt-2"
                      placeholder="Enter Phone Number"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-0 mt-4">
                      Write Your Message
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      id="txt_contact_message"
                      placeholder="Message"
                      className="form-control fr mt-2"
                    />
                  </Form.Group>
                  <Button
                    type="button"
                    className="btn btn-success mt-4"
                    onclick="sendContactInquiry()"
                  >
                    Apply For Inquiry
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FgDigitalFooter />
    </>
  );
}

export default AluminiFgiit;
