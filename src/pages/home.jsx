import React, { useEffect, useState } from "react";
import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";
import "../assets/css/fg_group.css";
import "../assets/css/hover.css";
import "../assets/css/hover1.css";
import "../assets/css/tabler-flags.min.css";
import { Container, Row } from "react-bootstrap";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import fggrouppdf from "../pdf/fg-group.pdf";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Home() {
  useEffect(() => {
    const $ = window.$;
    $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fas fa-arrow-right"></i>');
  }, []);

  const displayBlock = (element) => {
    const elementID = element.id;
    document
      .querySelectorAll(
        ".css-19csi1s-accordion-fadeInAnimation .css-gs31lz-accordianImageWrapper > li"
      )
      .forEach((li) => li.classList.remove("css-tw7fmk-individualCell-active"));
    document
      .querySelectorAll(
        ".css-19csi1s-accordion-fadeInAnimation .css-gs31lz-accordianImageWrapper > li .css-1xl3vxv-imageTitle "
      )
      .forEach((title) => title.classList.remove("fonts"));
    document
      .getElementById(elementID)
      .classList.add("css-tw7fmk-individualCell-active");
    element.classList.add("fonts");
  };

  const displayBlockMobile = (element) => {
    if (element.classList.contains("css-108apbb-ItemBg-activeItem")) {
      return;
    }
    const blockClassName = Array.from(element.classList).find((className) =>
      /^mobileBlock/.test(className)
    );
    document.querySelectorAll(`.${blockClassName}`).forEach((el) => {
      el.classList.remove("css-108apbb-ItemBg-activeItem", "fonts");
    });
    element.classList.add("css-108apbb-ItemBg-activeItem");
  };

  useEffect(() => {
    // Add logic to add 'hideOverflowOnMobile' class to specific parent elements within media query
    const elements = document.querySelectorAll(".specific-class[data-aos]");
    elements.forEach((element) => {
      const parent = element.parentElement;
      if (parent) {
        parent.classList.add("hideoverflowonmobile");
      }
    });

    // Cleanup on component unmount
    return () => {
      elements.forEach((element) => {
        const parent = element.parentElement;
        if (parent) {
          parent.classList.remove("hideoverflowonmobile");
        }
      });
    };
  }, []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [loading]);

  // if (loading) {
  //   return <Loader imgUrl={loaderGif} />;
  // }

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);
  useEffect(() => {
    setContentLoaded(true);
    setVideoLoaded(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>One-Stop Solution For All Your Fitness Needs - FG Group</title>
        <meta
          name="description"
          content="FG Group Solely Works In The Health & Fitness Sector. We Provide Diet & Exercise Plans As Well As Health And Fitness Courses. We Also Offer Digital Marketing Courses For Fitness Professionals, And Ready-Made Meals For Healthy Living."
        />
        <meta
          name="keywords"
          content="best dietitian in surat, online dietitian consultation, gyms in surat, personal training gyms near me, certified nutritionist course, fitness trainer course in india, online fitness courses, nutritionist course online india, certification for fitness trainer, nutritionist online course, best digital marketing course, best digital marketing course online"
        />
        {/* <link
          rel="preload"
          href={`${process.env.PUBLIC_URL}/assets/images/img/website_intro_video1.mp4`}
          as="fetch"
          type="video/mp4"
        /> */}
      </Helmet>

      <HomeHeader />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <Container>
            <Row>
              <div className="col-lg-7 p-0">
                {videoLoaded ? (
                  <ReactPlayer
                    url={`${process.env.PUBLIC_URL}/assets/images/img/website_intro_video1.mp4`}
                    width="100%"
                    height="auto"
                    style={{ borderRadius: "10px" }}
                    playing
                    loop
                    muted
                    playsinline
                    onReady={() => setVideoLoaded(true)}
                    onError={() => setVideoLoaded(false)}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "10px",
                    }}
                  >
                    Loading...
                  </div>
                )}
              </div>
              <div className="col-lg-5 describe">
                <h1
                  className="mt-0"
                  style={{ color: "#333", fontSize: "32px" }}
                >
                  One-Stop{" "}
                  <span className="m-0 text-blue-color">Solution </span>
                  For Your Fitness.
                </h1>
                <p
                  className="home-solution"
                  style={{ fontSize: "15px", lineHeight: "1.5", fontWeight: 600 }}
                >
                  FG group solely works in the health & fitness sector. We
                  provide diet & exercise plans as well as health and fitness
                  courses. We also offer Digital Marketing courses for fitness
                  professionals, and ready-made meals for healthy living.
                </p>
                <div className="free home-solution">
                  <a
                    href={fggrouppdf}
                    download
                    className="btn btn-danger mt-3"
                    style={{ fontSize: "16px" }}
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </section>

      {/*  Desktop  */}
      <section className="d-lg-block d-none margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-9 hd">
                <h2 className="h2-fs">Fitness With Gomzi</h2>
                <b>
                  <p>Get Fit While Being In Your Comfort Zone</p>
                </b>
              </div>
              <div className="col-md-3 hd">
                <Link
                  to="/fitnesswithgomzi/fitness-programs"
                  className="d-flex justify-content-end"
                >
                  Explore
                  <KeyboardArrowRightIcon className=" fs-22" />
                </Link>
              </div>
            </div>
            <div className="css-19csi1s-accordion-fadeInAnimation">
              <ul className="css-gs31lz-accordianImageWrapper">
                <li
                  tabIndex="0"
                  className="animEffect css-tw7fmk-individualCell-active css-gngxgs-individualCell"
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  style={{ backgroundColor: "#fdd57d" }}
                  id="block1"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width"
                          alt="healthy diet & effective exercises"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/new back.webp"
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1n9smdn-individualAccordianImage">
                    <div
                      className="action-href"
                      style={{ margin: "15px 20px 10px 40px" }}
                    >
                      <div className="dark-color css-1xl3vxv-imageTitle nunito-font">
                        RTP 1.0
                      </div>
                      <div className="fonts font">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          Fitness made easy with healthy diet & effective
                          exercises.
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <a href="/fitnesswithgomzi/weight-loss-programs">
                              know more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  tabIndex="-1"
                  className="animEffect css-gngxgs-individualCell"
                  style={{ backgroundColor: "#ec7171" }}
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  id="block2"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width lazy"
                          alt="Personal training sessions"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/new back1.webp"
                          }
                          forcecheckdelay="1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1sm622h-individualAccordianImage-onhover">
                    <div className="action-href">
                      <div className="dark-color css-1xl3vxv-imageTitle nunito-font">
                        RTP 2.0
                      </div>
                      <div className="font">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          Stay fit with our personal training sessions led by
                          expert fitness coaches.
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <a href="/fitnesswithgomzi/online-personal-training">
                              know more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  tabIndex="0"
                  className="animEffect css-gngxgs-individualCell"
                  style={{ backgroundColor: "#fdd57d" }}
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  id="block13"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width lazy"
                          alt="knowledge of fitness & nutrition"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/unique1.webp"
                          }
                          forcecheckdelay="1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1n9smdn-individualAccordianImage">
                    <div
                      className="action-href"
                      style={{ margin: "15px 20px 10px 40px" }}
                    >
                      <div className=" dark-color css-1xl3vxv-imageTitle nunito-font">
                        RTP 3.0
                      </div>
                      <div className="fonts font">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          Dive into the knowledge of fitness & nutrition at our
                          institute.
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <a href="/community/clinical-illness">
                              know more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  tabIndex="-1"
                  className="animEffect css-gngxgs-individualCell"
                  style={{ backgroundColor: "#ec7171" }}
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  id="block11"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width lazy"
                          alt="People Healthier"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/unique2.webp"
                          }
                          forcecheckdelay="1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1sm622h-individualAccordianImage-onhover">
                    <div className="action-href">
                      <div className=" dark-color css-1xl3vxv-imageTitle nunito-font">
                        RTP 4.0
                      </div>
                      <div className="font">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          Make Your People Healthier Today.
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <Link to="/corporate-fitness-programs">
                              know more
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  tabIndex="-2"
                  className="animEffect css-gngxgs-individualCell"
                  style={{ backgroundColor: "#ec7171" }}
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  id="block12"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width lazy"
                          alt="bodybuilder in just 6 months"
                          loading="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/new_back4.webp"
                          }
                          forcecheckdelay="1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1sm622h-individualAccordianImage-onhover">
                    <div className="action-href">
                      <div className=" dark-color css-1xl3vxv-imageTitle nunito-font">
                        RTP 5.0
                      </div>
                      <div className="font">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          Make your physique like a bodybuilder in just 6 months
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <Link to="/fitnesswithgomzi/bodybuilding-program">
                              know more
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*   MOBILE  */}
      <section className="d-lg-none d-sm-block margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 hd7">
                <Link to="#;">Fitness With Gomzi</Link>
                <b>
                  <p>Get Fit While Being In Your Comfort Zone</p>
                </b>
              </div>
            </div>
          </div>
          <div className="css-4hq69k-fadeInAnimation">
            <div className="css-1n02pwg-galleryWrap-comeIn overflow-hidden">
              <div
                className="animEffect css-108apbb-ItemBg-activeItem css-12vqph2-ItemBg mobileBlock1"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      style={{ display: "contents !important" }}
                      className="css-1329gn7-singleImgBg fade-in-image image-width"
                      alt="healthy diet & effective exercises"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/new back.webp"
                      }
                      forcecheckdelay="1000"
                    />
                  </div>
                </div>
                <div className="css-19ib8f3-textContainer-activeTextContainer css-sj8x46-textContainer">
                  <div className="css-quxkx6-heading-darkColor nunito-font">
                    RTP 1.0
                  </div>
                  <div className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font">
                    Fitness made easy with healthy diet & effective exercises.
                    <div className="css-1moqeru-actionButton-darkThemeActionButton">
                      <div className="action-text">
                        <Link to="/fitnesswithgomzi/weight-loss-programs">
                          know more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="animEffect css-12vqph2-ItemBg mobileBlock1"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      className="css-1329gn7-singleImgBg fade-in-image image-width lazy"
                      alt="Personal Training Sessions"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/new back1.webp"
                      }
                      forcecheckdelay="1000"
                    />
                  </div>
                </div>
                <div className="css-sj8x46-textContainer">
                  <div className="css-quxkx6-heading-darkColor nunito-font">
                    RTP 2.0
                  </div>
                  <div className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font">
                    Stay fit with our personal training sessions led by expert
                    fitness coaches.
                    <div className="css-1moqeru-actionButton-darkThemeActionButton">
                      <div className="action-text">
                        <a href="/fitnesswithgomzi/online-personal-training">
                          know more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="animEffect css-12vqph2-ItemBg mobileBlock1"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      className="css-1329gn7-singleImgBg fade-in-image image-width lazy"
                      alt="Online Fitness ClassclassNamees"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/unique1.webp"
                      }
                      forcecheckdelay="1000"
                    />
                  </div>
                </div>
                <div className="css-19ib8f3-textContainer-activeTextContainer css-sj8x46-textContainer">
                  <div className="css-quxkx6-heading-darkColor nunito-font">
                    RTP 3.0
                  </div>
                  <div className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font">
                    Stay fit from home with online fitness classNamees led by
                    celebs and certified Cult coaches.
                    <div className="css-1moqeru-actionButton-darkThemeActionButton">
                      <div className="action-text">
                        <a href="/community/clinical-illness">
                          know more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="animEffect css-12vqph2-ItemBg mobileBlock1"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      className="css-1329gn7-singleImgBg fade-in-image image-width lazy"
                      alt="Make Your People Healthier"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/unique2.webp"
                      }
                      forcecheckdelay="1000"
                    />
                  </div>
                </div>
                <div className="css-sj8x46-textContainer">
                  <div className="css-quxkx6-heading-darkColor nunito-font">
                    RTP 4.0
                  </div>
                  <div
                    className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font"
                    style={{ Zindex: "0" }}
                  >
                    Make Your People Healthier Today.
                    <div className="css-1moqeru-actionButton-darkThemeActionButton">
                      <div className="action-text">
                        <Link to="/corporate-fitness-programs">know more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="animEffect css-12vqph2-ItemBg mobileBlock1"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      className="css-1329gn7-singleImgBg fade-in-image image-width lazy"
                      alt="bodybuilder in just 6 months"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/new_back4.webp"
                      }
                      forcecheckdelay="1000"
                    />
                  </div>
                </div>
                <div className="css-sj8x46-textContainer">
                  <div className="css-quxkx6-heading-darkColor nunito-font">
                    RTP 5.0
                  </div>
                  <div
                    className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font"
                    style={{ Zindex: "0" }}
                  >
                    Make your physique like a bodybuilder in just 6 months.
                    <div className="css-1moqeru-actionButton-darkThemeActionButton">
                      <div className="action-text">
                        <a href="/fitnesswithgomzi/bodybuilding-program">
                          know more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Desktop  */}
      <section className="d-lg-block d-none margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-9 hd">
                <h2 className="h2-fs">FGIIT</h2>
                <b>
                  <p>Nurturing The Upcoming Health & Fitness Professionals</p>
                </b>
              </div>
              <div className="col-md-3 hd">
                <Link
                  to="/fgiit/fitness-courses"
                  className="d-flex justify-content-end"
                >
                  Explore
                  <KeyboardArrowRightIcon className=" fs-22" />
                </Link>
              </div>
            </div>
            <div className="css-19csi1s-accordion-fadeInAnimation">
              <ul className="css-gs31lz-accordianImageWrapper">
                <li
                  tabIndex="0"
                  className="animEffect css-tw7fmk-individualCell-active css-gngxgs-individualCell"
                  style={{ backgroundColor: "#9fc782" }}
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  id="block5"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width lazy"
                          alt="FG Group"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/second3.webp"
                          }
                          forcecheckdelay="1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1sm622h-individualAccordianImage-onhover">
                    <div className="action-href">
                      <div className="dark-color css-1xl3vxv-imageTitle nunito-font">
                        FGIIT
                      </div>
                      <div className="font">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          With the right knowledge, discipline and belief we
                          become the best we can be.
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <Link to="/fgiit/fitness-courses">know more</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  tabIndex="-1"
                  className="animEffect css-gngxgs-individualCell"
                  style={{ backgroundColor: "#fdd57d" }}
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  id="block3"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width lazy"
                          alt="Fitness & Nutrition at our Institute"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/second1.webp"
                          }
                          forcecheckdelay="1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1n9smdn-individualAccordianImage">
                    <div
                      className="action-href"
                      style={{ margin: "15px 20px 10px 40px" }}
                    >
                      <div className="dark-color css-1xl3vxv-imageTitle nunito-font">
                        Offline Fitness Courses
                      </div>
                      <div className="fonts font">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          Dive into the knowledge of fitness & nutrition at our
                          institute.
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <Link to="/fgiit/fitness-and-nutrition-courses">
                              know more
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  tabIndex="-2"
                  className="animEffect css-gngxgs-individualCell"
                  style={{ backgroundColor: "#ec7171" }}
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  id="block4"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width lazy"
                          alt="Online Fitness Courses"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/second2.webp"
                          }
                          forcecheckdelay="1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1sm622h-individualAccordianImage-onhover">
                    <div className="action-href">
                      <div className="dark-color css-1xl3vxv-imageTitle nunito-font">
                        Online Fitness Courses
                      </div>
                      <div className="font">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          Be an expert fitness professional from the comfort of
                          your home.
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <Link to="/fgiit/online-fitness-courses">know more</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  tabIndex="-1"
                  className="animEffect css-gngxgs-individualCell"
                  style={{ backgroundColor: "#9fc782" }}
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  id="block16"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width lazy"
                          alt="Flexible Learning"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/felxibel.webp"
                          }
                          forcecheckdelay="1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1sm622h-individualAccordianImage-onhover">
                    <div className="action-href">
                      <div className="dark-color css-1xl3vxv-imageTitle nunito-font">
                        flexible learning
                      </div>
                      <div className="font">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          Flexible learning for the ones who don't stay bounded.
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <Link to="/fgiit/flexible-fitness-courses">
                              know more
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  tabIndex="-1"
                  className="animEffect css-gngxgs-individualCell"
                  style={{ backgroundColor: "#9fc782" }}
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  id="block17"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width lazy"
                          alt="Study Material"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/study.webp"
                          }
                          forcecheckdelay="1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1sm622h-individualAccordianImage-onhover">
                    <div className="action-href">
                      <div className="dark-color css-1xl3vxv-imageTitle nunito-font">
                        Study Material
                      </div>
                      <div className="font">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          Education is the most powerful weapon which you can
                          use to change the world
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <Link to="/book/health-books">
                              know more
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*  MOBILE */}
      <section className="d-lg-none d-sm-block margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 hd7">
                <Link to="#;">FGIIT</Link>
                <b>
                  <p>Nurturing The Upcoming Health & Fitness Professionals</p>
                </b>
              </div>
            </div>
          </div>
          <div className="css-4hq69k-fadeInAnimation overflow-hidden">
            <div className="css-1n02pwg-galleryWrap-comeIn overflow-hidden">
              <div
                className="animEffect css-108apbb-ItemBg-activeItem css-12vqph2-ItemBg mobileBlock2"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      className="css-1329gn7-singleImgBg fade-in-image image-width lazy"
                      alt="FGIIT"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/second3.webp"
                      }
                      forcecheckdelay="1000"
                    />
                  </div>
                </div>
                <div className="css-sj8x46-textContainer">
                  <div className="css-quxkx6-heading-darkColor nunito-font">
                    FGIIT
                  </div>
                  <div
                    className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font"
                    style={{ Zindex: "0" }}
                  >
                    With the right knowledge, discipline and belief we become
                    the best we can be.
                    <div className="css-1moqeru-actionButton-darkThemeActionButton">
                      <div className="action-text">
                        <Link to="/fgiit/fitness-courses">know more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="animEffect css-12vqph2-ItemBg mobileBlock2"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      className="css-1329gn7-singleImgBg fade-in-image image-width lazy"
                      alt="Offline Fitness Courses"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/second1.webp"
                      }
                      forcecheckdelay="1000"
                    />
                  </div>
                </div>
                <div className="css-19ib8f3-textContainer-activeTextContainer css-sj8x46-textContainer">
                  <div className="css-quxkx6-heading-darkColor nunito-font">
                    Offline Fitness Courses
                  </div>
                  <div className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font">
                    Dive into the knowledge of fitness & nutrition at our
                    institute.
                    <div className="css-1moqeru-actionButton-darkThemeActionButton">
                      <div className="action-text">
                        <Link to="/fgiit/fitness-and-nutrition-courses">know more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="animEffect css-12vqph2-ItemBg mobileBlock2"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      className="css-1329gn7-singleImgBg fade-in-image image-width lazy"
                      alt="Online Fitness Courses"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/second2.webp"
                      }
                      forcecheckdelay="1000"
                    />
                  </div>
                </div>
                <div className="css-sj8x46-textContainer">
                  <div className="css-quxkx6-heading-darkColor nunito-font">
                    Online Fitness Courses
                  </div>
                  <div
                    className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font"
                    style={{ Zindex: "0" }}
                  >
                    Be an expert fitness professional from the comfort of your
                    home.
                    <div className="css-1moqeru-actionButton-darkThemeActionButton">
                      <div className="action-text">
                        <Link to="/fgiit/online-fitness-courses">know more</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="animEffect css-12vqph2-ItemBg mobileBlock2"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      className="css-1329gn7-singleImgBg fade-in-image image-width lazy"
                      alt="Flexible Learning"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/felxibel.webp"
                      }
                      forcecheckdelay="1000"
                    />
                  </div>
                </div>
                <div className="css-sj8x46-textContainer">
                  <div className="css-quxkx6-heading-darkColor nunito-font">
                    flexible learning
                  </div>
                  <div
                    className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font"
                    style={{ Zindex: "0" }}
                  >
                    Flexible learning for the ones who don't stay bounded.
                    <div className="css-1moqeru-actionButton-darkThemeActionButton">
                      <div className="action-text">
                        <Link to="/fgiit/flexible-fitness-courses">
                          know more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="animEffect css-12vqph2-ItemBg mobileBlock2"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      className="css-1329gn7-singleImgBg fade-in-image image-width lazy"
                      alt="Study Material"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/study.webp"
                      }
                      forcecheckdelay="1000"
                    />
                  </div>
                </div>
                <div className="css-sj8x46-textContainer">
                  <div className="css-quxkx6-heading-darkColor nunito-font">
                    Study Material
                  </div>
                  <div
                    className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font"
                    style={{ Zindex: "0" }}
                  >
                    Education is the most powerful weapon which you can use to
                    change the world
                    <div className="css-1moqeru-actionButton-darkThemeActionButton">
                      <div className="action-text">
                        <Link to="/book/health-books">
                          know more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Desktop */}
      <section className="d-lg-block d-none margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-9 hd">
                <h2 className="h2-fs">Gomzi Nutrition</h2>
                <b>
                  <p>Choose Us For Your Healthy Living</p>
                </b>
              </div>
              <div className="col-md-3 hd">
                <Link
                  to="/recipe/free-weight-loss-recipe-videos"
                  className="d-flex justify-content-end"
                >
                  Explore
                  <KeyboardArrowRightIcon className=" fs-22" />
                </Link>
              </div>
            </div>
            <div className="css-19csi1s-accordion-fadeInAnimation">
              <ul className="css-gs31lz-accordianImageWrapper">
                <li
                  tabIndex="0"
                  className="animEffect css-tw7fmk-individualCell-active css-gngxgs-individualCell"
                  style={{ backgroundColor: "#fdd57d" }}
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  id="block8"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width lazy"
                          alt="Supplement"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/supplement-banner-home.webp"
                          }
                          forcecheckdelay="1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1n9smdn-individualAccordianImage">
                    <div
                      className="action-href"
                      style={{ margin: "15px 20px 10px 40px" }}
                    >
                      <div className="dark-color css-1xl3vxv-imageTitle nunito-font">
                        Supplement
                      </div>
                      <div className="fonts font">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          Enhance your performance with varieties of
                          supplements.
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <Link
                              to="https://www.gomzilifesciences.in/"
                              target="_blank"
                            >
                              know more
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  tabIndex="-3"
                  className="animEffect css-gngxgs-individualCell"
                  style={{ backgroundColor: "#9fc782" }}
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  id="block7"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width lazy"
                          alt="Recipe Videos"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/recipe.webp"
                          }
                          forcecheckdelay="1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1sm622h-individualAccordianImage-onhover">
                    <div className="action-href">
                      <div className="dark-color css-1xl3vxv-imageTitle nunito-font">
                        Recipe Videos
                      </div>
                      <div className="font">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          Simple and easy to follow recipes for healthy and
                          better lifestyle.
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <a href="/recipe/free-weight-loss-recipe-videos">
                              know more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*  MOBILE */}
      <section className="d-lg-none d-sm-block margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 hd7">
                <Link to="#;"> Gomzi Nutrition</Link>
                <b>
                  <p>Choose Us For Your Healthy Living</p>
                </b>
              </div>
            </div>
          </div>
          <div className="css-4hq69k-fadeInAnimation">
            <div className="css-1n02pwg-galleryWrap-comeIn overflow-hidden">
              <div
                className="animEffect css-108apbb-ItemBg-activeItem css-12vqph2-ItemBg mobileBlock4"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      className="css-1329gn7-singleImgBg fade-in-image image-width lazy"
                      alt="Supplement"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/supplement-banner-home.webp"
                      }
                      forcecheckdelay="1000"
                    />
                  </div>
                </div>
                <div className="css-19ib8f3-textContainer-activeTextContainer css-sj8x46-textContainer">
                  <div className="css-quxkx6-heading-darkColor nunito-font">
                    Supplement
                  </div>
                  <div className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font">
                    Enhance your performance with varieties of supplements.
                    <div className="css-1moqeru-actionButton-darkThemeActionButton">
                      <div className="action-text">
                        <Link
                          to="https://www.gomzilifesciences.in/"
                          target="_blank"
                        >
                          know more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="animEffect css-12vqph2-ItemBg mobileBlock4"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      className="css-1329gn7-singleImgBg fade-in-image image-width lazy"
                      alt="Recipe Videos"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/recipe.webp"
                      }
                      forcecheckdelay="1000"
                    />
                  </div>
                </div>
                <div className="css-sj8x46-textContainer">
                  <div className="css-quxkx6-heading-darkColor nunito-font">
                    Recipe Videos
                  </div>
                  <div className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font">
                    Simple and easy to follow recipes for healthy and better
                    lifestyle.
                    <div className="css-1moqeru-actionButton-darkThemeActionButton">
                      <div className="action-text">
                        <Link to="/recipe/free-weight-loss-recipe-videos">
                          know more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Desktop */}
      <section className="d-lg-block d-none margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-9 hd">
                <h2 className="h2-fs">Gomzi Equipments</h2>
                <b>
                  <p>Choose Us For Your Healthy Living</p>
                </b>
              </div>
              <div className="col-md-3 hd">
                <Link
                  to="/equipments/equipments"
                  className="d-flex justify-content-end"
                >
                  Explore
                  <KeyboardArrowRightIcon className=" fs-22" />
                </Link>
              </div>
            </div>

            <div className="css-19csi1s-accordion-fadeInAnimation">
              <ul className="css-gs31lz-accordianImageWrapper">
                <li
                  tabIndex="-1"
                  className="animEffect css-gngxgs-individualCell css-tw7fmk-individualCell-active"
                  style={{ backgroundColor: "#ec7171" }}
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  id="block9"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width lazy"
                          alt="Medicine"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/equipment/strength-banner-home.webp"
                          }
                          forcecheckdelay="1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1sm622h-individualAccordianImage-onhover">
                    <div className="action-href">
                      <div className="dark-color css-1xl3vxv-imageTitle nunito-font">
                        Strength
                      </div>
                      <div className="font">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          Boost strength with our advanced machine: durable,
                          adjustable, efficient, and tailored for optimal muscle
                          building.
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <Link to="/equipments/cardio-strength-machine">
                              Know More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  tabIndex="-2"
                  className="animEffect css-gngxgs-individualCell"
                  style={{ backgroundColor: "#9fc782" }}
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  id="block10"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width lazy"
                          alt="Cardio"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/equipment/cardio-banner-home.webp"
                          }
                          forcecheckdelay="1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1sm622h-individualAccordianImage-onhover">
                    <div className="action-href">
                      <div className="dark-color css-1xl3vxv-imageTitle nunito-font">
                        Cardio
                      </div>
                      <div className="font">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          Efficiently burn calories and improve cardiovascular
                          health with our state-of-the-art cardio machine. Get
                          fit today!
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <a href="/equipments/cardio-strength-machine">
                              know more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  tabIndex="-3"
                  className="animEffect css-gngxgs-individualCell"
                  style={{ backgroundColor: "#9fc782" }}
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  id="block18"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width lazy"
                          alt="Meals"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/equipment/machine-banner-home.webp"
                          }
                          forcecheckdelay="1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1sm622h-individualAccordianImage-onhover">
                    <div className="action-href">
                      <div className="dark-color css-1xl3vxv-imageTitle nunito-font">
                        Machine
                      </div>
                      <div className="font">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          Multi-functional gym machine for a full-body workout,
                          compact design, adjustable settings, perfect for home
                          gyms.
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <a href="/equipments/cardio-strength-machine">
                              know more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*  MOBILE */}
      <section className="d-lg-none d-sm-block margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 hd7">
                <Link to="#;">Gomzi Equipments</Link>
                <b>
                  <p>Choose Us For Your Healthy Living</p>
                </b>
              </div>
            </div>
          </div>
          <div className="css-4hq69k-fadeInAnimation">
            <div className="css-1n02pwg-galleryWrap-comeIn overflow-hidden">
              <div
                className="animEffect css-12vqph2-ItemBg mobileBlock4 css-108apbb-ItemBg-activeItem"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      className="css-1329gn7-singleImgBg fade-in-image image-width lazy"
                      alt="Medicine"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/equipment/strength-banner-home.webp"
                      }
                      forcecheckdelay="1000"
                    />
                  </div>
                  <div className="css-sj8x46-textContainer">
                    <div className="css-quxkx6-heading-darkColor nunito-font">
                      Strength
                    </div>
                    <div
                      className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font"
                      style={{ Zindex: "0" }}
                    >
                      Boost strength with our advanced machine: durable,
                      adjustable, efficient, and tailored for optimal muscle
                      building.
                      <div className="css-1moqeru-actionButton-darkThemeActionButton">
                        <div className="action-text">
                          <Link to="/equipments/cardio-strength-machine">
                            know more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="animEffect css-12vqph2-ItemBg mobileBlock4"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      className="css-1329gn7-singleImgBg fade-in-image image-width lazy"
                      alt="Cardio"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/equipment/cardio-banner-home.webp"
                      }
                      forcecheckdelay="1000"
                    />
                  </div>
                  <div className="css-sj8x46-textContainer">
                    <div className="css-quxkx6-heading-darkColor nunito-font">
                      Cardio
                    </div>
                    <div
                      className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font"
                      style={{ Zindex: "0" }}
                    >
                      Efficiently burn calories and improve cardiovascular
                      health with our state-of-the-art cardio machine. Get fit
                      today!
                      <div className="css-1moqeru-actionButton-darkThemeActionButton">
                        <div className="action-text">
                          <Link to="/equipments/cardio-strength-machine">
                            know more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="animEffect css-12vqph2-ItemBg mobileBlock4"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      className="css-1329gn7-singleImgBg fade-in-image image-width lazy"
                      alt="Cardio"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/equipment/machine-banner-home.webp"
                      }
                      forcecheckdelay="1000"
                    />
                  </div>
                  <div className="css-sj8x46-textContainer">
                    <div className="css-quxkx6-heading-darkColor nunito-font">
                      Machine
                    </div>
                    <div
                      className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font"
                      style={{ Zindex: "0" }}
                    >
                      Multi-functional gym machine for a full-body workout,
                      compact design, adjustable settings, perfect for home
                      gyms.
                      <div className="css-1moqeru-actionButton-darkThemeActionButton">
                        <div className="action-text">
                          <Link to="/equipments/cardio-strength-machine">
                            know more
                          </Link>
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
      {/*  Desktop  */}
      <section className="d-lg-block d-none margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-9 hd">
                <h2 className="h2-fs">FGDIGITAL</h2>
                <b>
                  <p>Digital Boon For Fitness Professionals</p>
                </b>
              </div>
              <div className="col-md-3 hd">
                <Link
                  to="http://gcsconsultant.fggroup.in/"
                  className="d-flex justify-content-end"
                >
                  Explore
                  <KeyboardArrowRightIcon className=" fs-22" />
                </Link>
              </div>
            </div>
            <div className="css-19csi1s-accordion-fadeInAnimation">
              <ul className="css-gs31lz-accordianImageWrapper">
                <li
                  tabIndex="0"
                  className="animEffect css-tw7fmk-individualCell-active css-gngxgs-individualCell"
                  style={{ backgroundColor: "#fdd57d" }}
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  id="block6"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width lazy"
                          alt="Digital Freedom Program"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/digital.webp"
                          }
                          forcecheckdelay="1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1n9smdn-individualAccordianImage">
                    <div
                      className="action-href"
                      style={{ margin: "15px 20px 10px 40px" }}
                    >
                      <div className="dark-color css-1xl3vxv-imageTitle nunito-font">
                        Digital Freedom Program
                      </div>
                      <div className="fonts ">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          Reach beyond the limitations with Digital Marketing
                          Skills.
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <a href="http://gcsconsultant.fggroup.in/">know more</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  tabIndex="-1"
                  className="animEffect css-gngxgs-individualCell"
                  style={{ backgroundColor: "#fdd57d" }}
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  id="block14"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width lazy"
                          alt="FGym management software"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/digital-home-1.webp"
                          }
                          forcecheckdelay="1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1n9smdn-individualAccordianImage">
                    <div
                      className="action-href"
                      style={{ margin: "15px 20px 10px 40px" }}
                    >
                      <div className="dark-color css-1xl3vxv-imageTitle nunito-font">
                        Gym management software
                      </div>
                      <div className="fonts ">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          Manage your gym on your one thumb now.
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <a href="http://gcsconsultant.fggroup.in/services/erp_software.html">
                              know more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  tabIndex="-2"
                  className="animEffect css-gngxgs-individualCell"
                  style={{ backgroundColor: "#fdd57d" }}
                  onMouseMove={(e) => displayBlock(e.currentTarget)}
                  id="block15"
                >
                  <div className="css-0">
                    <div className="lazyload-wrapper">
                      <div>
                        <LazyLoadImage
                          effect="blur"
                          className="css-murr60-accordianImageRight-bgImage-largeWidth fade-in-image image-width lazy"
                          alt="Build your own website"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/digital-home-2.webp"
                          }
                          forcecheckdelay="1000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="css-1n9smdn-individualAccordianImage">
                    <div
                      className="action-href"
                      style={{ margin: "15px 20px 10px 40px" }}
                    >
                      <div className="dark-color css-1xl3vxv-imageTitle nunito-font">
                        Build your own website
                      </div>
                      <div className="fonts ">
                        <div className="dark-color css-fleyzd-imageSubTitle comfortaa-font">
                          Walk With TIme Or Be The Past.
                        </div>
                        <div className="css-os4jsf-darkThemeAction-imageActionWrapper">
                          <div className="action-text">
                            <a href="http://gcsconsultant.fggroup.in/digital-marketing-agency.html">
                              know more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*  MOBILE  */}
      <section className="d-lg-none d-sm-block margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 hd7">
                <Link to="">FGDIGITAL</Link>
                <b>
                  <p>Digital Boon For Fitness Professionals</p>
                </b>
              </div>
            </div>
          </div>
          <div className="css-4hq69k-fadeInAnimation">
            <div className="css-1n02pwg-galleryWrap-comeIn overflow-hidden">
              <div
                className="animEffect css-108apbb-ItemBg-activeItem css-12vqph2-ItemBg mobileBlock3"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/digital.webp"
                      }
                      className="css-1329gn7-singleImgBg fade-in-image image-width lazy"
                      forcecheckdelay="1000"
                      alt="Digital Freedom Program"
                    />
                  </div>
                </div>
                <div className="css-19ib8f3-textContainer-activeTextContainer css-sj8x46-textContainer">
                  <div className="css-quxkx6-heading-darkColor nunito-font">
                    Digital Freedom Program
                  </div>
                  <div className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font">
                    Reach beyond the limitations with Digital Marketing Skills.
                    <div className="css-1moqeru-actionButton-darkThemeActionButton">
                      <div className="action-text">
                        <a href="http://gcsconsultant.fggroup.in/">know more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="animEffect css-12vqph2-ItemBg mobileBlock3"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/digital-home-1.webp"
                      }
                      className="css-1329gn7-singleImgBg fade-in-image image-width lazy"
                      forcecheckdelay="1000"
                      alt="Gym management software"
                    />
                  </div>
                </div>
                <div className="css-19ib8f3-textContainer-activeTextContainer css-sj8x46-textContainer">
                  <div className="css-quxkx6-heading-darkColor nunito-font">
                    Gym management software
                  </div>
                  <div className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font">
                    Manage your gym on your one thumb now.
                    <div className="css-1moqeru-actionButton-darkThemeActionButton">
                      <div className="action-text">
                        <Link to="http://gcsconsultant.fggroup.in/services/erp_software.html">
                          know more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="animEffect css-12vqph2-ItemBg mobileBlock3"
                style={{ backgroundColor: "#dfdfdf", overflow: "hidden" }}
                onClick={(e) => displayBlockMobile(e.currentTarget)}
              >
                <div className="lazyload-wrapper">
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/digital-home-2.webp"
                      }
                      className="css-1329gn7-singleImgBg fade-in-image image-width lazy"
                      forcecheckdelay="1000"
                      alt="Build your own website"
                    />
                  </div>
                </div>
                <div className="css-19ib8f3-textContainer-activeTextContainer css-sj8x46-textContainer">
                  <div className="css-quxkx6-heading-darkColor nunito-font">
                    Build your own website
                  </div>
                  <div className="css-jxi0bt-imageContent-darkColor-activeImageContent css-sj8x46-textContainer ml-0 comfortaa-font">
                    Walk With TIme Or Be The Past.
                    <div className="css-1moqeru-actionButton-darkThemeActionButton">
                      <div className="action-text">
                        <a href="http://gcsconsultant.fggroup.in/digital-marketing-agency.html">
                          know more
                        </a>
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
        <div className="container-fluid clr3">
          <div className="container">
            <div className="d-none d-md-block">
              <div className="row">
                <div className="col-md-4 mt-3">
                  <div className="flip-card" tabIndex="0">
                    <div
                      className="flip-card-inner p-0"
                      style={{ backgroundColor: "#003444" }}
                    >
                      <div className="flip-card-front">
                        <div className="tochange">
                          <LazyLoadImage
                            effect="blur"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/focus.webp"
                            }
                            className="lazy"
                            width="50%"
                            alt="Vision"
                          />
                          <h2 className="mb-0 h2-fs">Vision</h2>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="changeto">
                          <LazyLoadImage
                            effect="blur"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets//images/icon/focus.webp"
                            }
                            className="lazy"
                            width="60px"
                            alt="Vision"
                          />
                          <p className="p-3 my-0">
                            One step solution for fitness.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="flip-card" tabIndex="0">
                    <div
                      className="flip-card-inner p-0"
                      style={{ backgroundColor: "#003444" }}
                    >
                      <div className="flip-card-front">
                        <div className="">
                          <LazyLoadImage
                            effect="blur"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/target.webp"
                            }
                            className="lazy"
                            width="50%"
                            alt="Mission"
                          />
                          <h2 className="mb-0 h2-fs">Mission</h2>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="changeto">
                          <LazyLoadImage
                            effect="blur"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/target.webp"
                            }
                            className="lazy"
                            width="60px"
                            alt="Mission"
                          />
                          <ul className="pl-0 list-unstyled">
                            <li>• 50 FG franchises across the India.</li>
                            <li>• Skilled based Universities In India.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="flip-card" tabIndex="0">
                    <div
                      className="flip-card-inner p-0"
                      style={{ backgroundColor: "#003444" }}
                    >
                      <div className="flip-card-front">
                        <div className="tochange">
                          <LazyLoadImage
                            effect="blur"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/goal.webp"
                            }
                            className="lazy"
                            width="50%"
                            alt="Objectives"
                          />
                          <h2 className="mb-0 h2-fs">Objectives</h2>
                        </div>
                      </div>
                      <div className="flip-card-back">
                        <div className="changeto">
                          <LazyLoadImage
                            effect="blur"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/goal.webp"
                            }
                            className="lazy"
                            width="60px"
                            alt="Objectives"
                          />
                          <ul className="pl-0 list-unstyled">
                            <li>
                              • Deliver micro to macro-Management principle to
                              grow franchises.
                            </li>
                            <li>
                              • Focus on Operation Excellences in business.
                            </li>
                            <li>
                              • Profit Maximization & Wealth maximization in
                              Business.
                            </li>
                            <li>
                              • Training, development, counselling to staff for
                              develop Professionalism.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-md-none">
              <div className="row text-center">
                <div className="col-md-6">
                  <div className="vision-mission">
                    <div className="img-vision mb-4">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/mission.webp"
                        }
                        alt="mission"
                        width="40%"
                        className="img-fluid"
                      />
                    </div>
                    <div className="vision-mission-content">
                      <div>
                        <h2 className="h4-fs">Vision</h2>
                      </div>
                      <p className="p-3 my-0">One step solution for fitness.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                  <div className="vision-mission">
                    <div className="img-vision">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/vision.webp"
                        }
                        alt="mission"
                        width="50%"
                        className="img-fluid"
                      />
                    </div>
                    <div className="vision-mission-content">
                      <div>
                        <h2 className="h4-fs">Mission</h2>
                      </div>
                      <ul className="pl-0 list-unstyled">
                        <li>
                          <p>
                            <span style={{ color: "#ec7171" }}>
                              <b>»</b>
                            </span>{" "}
                            50 FG franchises across the India.
                          </p>
                          <p>
                            <span style={{ color: "#ec7171" }}>
                              <b>»</b>
                            </span>{" "}
                            Skilled based Universities In India.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                  <div className="vision-mission">
                    <div className="img-vision mb-3">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/icon/objective.png"
                        }
                        alt="mission"
                        width="40%"
                        className="img-fluid"
                      />
                    </div>
                    <div className="vision-mission-content">
                      <div>
                        <h2 className="h4-fs">Objectives</h2>
                      </div>
                      <ul className="pl-3 text-left list-unstyled">
                        <li>
                          <div className="d-flex">
                            <span
                              style={{
                                color: "#ec7171",
                                marginRight: "5px",
                                fontSize: "18px",
                              }}
                            >
                              <b>»</b>
                            </span>
                            <p>
                              {" "}
                              Deliver micro to macro-Management principle to
                              grow franchises.
                            </p>
                          </div>
                          <div className="d-flex">
                            <span
                              style={{
                                color: "#ec7171",
                                marginRight: "5px",
                                fontSize: "18px",
                              }}
                            >
                              <b>»</b>
                            </span>
                            <p> Focus on Operation Excellences in business.</p>
                          </div>
                          <div className="d-flex">
                            <span
                              style={{
                                color: "#ec7171",
                                marginRight: "5px",
                                fontSize: "18px",
                              }}
                            >
                              <b>»</b>
                            </span>
                            <p>
                              {" "}
                              Profit Maximization & Wealth maximization in
                              Business.
                            </p>
                          </div>
                          <div className="d-flex">
                            <span
                              style={{
                                color: "#ec7171",
                                marginRight: "5px",
                                fontSize: "18px",
                              }}
                            >
                              <b>»</b>
                            </span>
                            <p>
                              {" "}
                              Training, development, counseling to staff for
                              develop Professionalism.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid clr3">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xl-4 mt-3">
                <div className="i4 text-center shell-de">
                  <div className="best-sell-main">
                    <span>Latest</span>
                  </div>
                  <h2 className="h2-fs">Franchise Partner</h2>
                  <Link to="/fitness-brand-franchise">Explore</Link>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 mt-3">
                <div className="i4 text-center">
                  <h2 className="h2-fs">INPTA</h2>
                  <Link to="/inpta/home-inpta">
                    Explore
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 mt-3">
                <div className="i4 text-center">
                  <h2 className="h2-fs">Fitness and Education Books</h2>
                  <Link to="/book/health-books">Explore</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center p-0 d-sm-block d-none">
          <div className="study">
            <div className="stud">
              <h2 className="h3-fs">
                What it is to be like working with FG Group
              </h2>
              <p>
                Working With Us Won't Only Make You Financially Strong, But Also
                Gives You A Chance To Pursue Your Dream Career.
              </p>
              <Link to="career.html">Explore Opportunities</Link>
            </div>
            <div className="f animate__animated animate__fadeInDown wow">
              <LazyLoadImage
                effect="blur"
                src={process.env.PUBLIC_URL + "/assets/images/img/stuff.webp"}
                width="100%"
                alt="fggroup"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid d-sm-none d-block p-0">
          <LazyLoadImage
            effect="blur"
            className="lazy"
            src={process.env.PUBLIC_URL + "/assets/images/img/mobile.webp"}
            width="100%"
            alt="fggroup"
          />
        </div>
      </section>
      <section>
        <div
          className="container-fluid"
          style={{ backgroundColor: "#f9f3f3", padding: "50px 0px" }}
        >
          <div className="covid text-center">
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

      <HomeFooter />
    </>
  );
}

export default Home;
