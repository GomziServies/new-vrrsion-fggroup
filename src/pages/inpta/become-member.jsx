import React, { useState } from "react";
import "../../assets/css/home.css";
import "../../assets/css/inpta.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import SimpleINPTAHeader from "../../components/partials/Header/simpleinptaheader";
import { Helmet } from "react-helmet";
import InptaFooter from "../../components/partials/Footer/inptafooter";

function BecomeAMember() {
  const canonicalUrl = window.location.href;
  const [videoActive, setVideoActive] = useState(false);

  const handleVideoPlay = () => {
    setVideoActive(true);
  };
  return (
    <body className="bg-gray">
      <Helmet>
        <title>Indian Nutritionist and Personal Trainer Association | INPTA</title>
        <meta name="description" content="INPTA is the entity that unites trained and certified nutritionists & personal trainers together and combining their knowledge and creating a better place to uplift the career scope of nutritionists and personal trainers in the field of health and fitness." />
        <meta name="keyword" content="fitness club, nutrition club, wellness club activities, wellness club" />
        <meta property="og:title" content="Indian Nutritionist and Personal Trainer Association | INPTA" />
        <meta property="og:description" content="INPTA is the entity that unites trained and certified nutritionists & personal trainers together and combining their knowledge and creating a better place to uplift the career scope of nutritionists and personal trainers in the field of health and fitness." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/inpta/become-member" />
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
      <WhatsappHeaderApp
        message={"Hello, I wanted to know more about FGIIT Courses. "}
        options={{ pageRef: true }}
      />
      <SimpleINPTAHeader />
      <section className="inptajob imanet" style={{ marginTop: "70px" }}>
        <div className="rich-text-editor row bg-primary-blue col-lg-12 mx-auto my-auto mb-5 pt-3 pb-3 text-center">
          <h1 className="h2 fmaa-header-color">Become A Member</h1>
        </div>
        <div className="hero-banner">
          <div className="hero-banner-carousel">
            <div className="hero-banner--variant-2 hero-banner-slide row w-100 d-inline-block">
              <div className="hero-banner__image-area">
                <img
                  src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/IMA-Certifications/FMAA-Certification/HeroBanner-FMAA-Oveview.ashx?h=1080&amp;iar=0&amp;w=1620&amp;rev=5dca857d183c48b4a4b9dc98fcc05770&amp;hash=62862D725FFEA431D581E95BE76DF01F"
                  alt="Students studying for FMAA certification exam"
                />
              </div>
              <div className="hero-banner__title-area">
                <div className="hero-banner__title-area-wrapper">
                  <h2 className="h2-fs h1 hero-banner__titlealign-left">
                    Open the door to your future
                  </h2>
                  <p className="body-1">
                    Gain the confidence to speak the global language of business
                    and demonstrate your proficiency in the fundamentals of
                    financial and managerial accounting.
                    <br className="t-last-br" />
                  </p>
                  <div className="align-left">
                    <a
                      className="cta-button cta-button--arrow primary-light"
                      href="https://imaonlinestore.com/personifyebusiness/FMAA-Registration"
                      target="_blank"
                    >
                      <i className="cta-button__icon bi bi-chevron-right ltr"></i>
                      <i className="cta-button__icon bi bi-chevron-left rtl"></i>
                      <span className="cta-button__text">Enroll Now</span>
                      <span className="cta-button__spinner spinner-border spinner-border-sm"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="hero-banner__description--mobile">
                <div className="hero-banner__description__wrapper--mobile">
                  <p className="body-1">
                    Gain the confidence to speak the global language of business
                    and demonstrate your proficiency in the fundamentals of
                    financial and managerial accounting.
                    <br className="t-last-br" />
                  </p>
                  <div className="align-left">
                    <a
                      className="cta-button cta-button--arrow primary-light"
                      href="https://imaonlinestore.com/personifyebusiness/FMAA-Registration"
                      target="_blank"
                    >
                      <i className="cta-button__icon bi bi-chevron-right ltr"></i>
                      <i className="cta-button__icon bi bi-chevron-left rtl"></i>
                      <span className="cta-button__text">Enroll Now</span>
                      <span
                        className="cta-button__spinner spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="imanet">
        <div className="promo promo--slider" style={{ opacity: "1" }}>
          <div className="promo-carousel slick-initialized slick-slider">
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: "1",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <div
                  className="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                >
                  <div>
                    <div
                      className="promo-slide row "
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="promo__image-area col-12 col-lg-7 promo__image-area--start">
                        <img
                          src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/Membership/Professional/Top-Benefits-Professional-Membership.ashx?h=1080&amp;w=1620&amp;rev=fdae978cdd214aec911889150f610d01&amp;hash=7346CAB9EF2302256FA2FB45B896BA71"
                          className="promo-slide--background"
                          alt="Professionals walking through modern work place"
                          width="100%"
                          style={{ height: "unset" }}
                        />
                      </div>
                      <div className="promo__text-area col-12 col-lg-5">
                        <div className="row  align-items-center full-height">
                          <div className="col-12">
                            <h2 className="h2-fs promo__title h2">
                              Top Membership Benefits
                            </h2>
                            <p className="topic-bullet">
                              CMA Certification Program
                            </p>
                            <p className="topic-body">
                              Advance your career with the leading certification
                              for accounting and finance professionals working
                              in business. Open to IMA members only.
                            </p>
                            <p className="topic-bullet">
                              Insight and Education
                            </p>
                            <p className="topic-body">
                              Stay sharp with free management accounting
                              courses, research papers, and webinars for
                              members.
                            </p>
                            <p className="topic-bullet">Networking</p>
                            <p className="topic-body">
                              Easily build your personal network.
                            </p>
                            <a className="h4" href="#0">
                              Learn More
                              <i className="fa-regular fa-circle-right ml-2 primary-green d-inline"></i>
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
        </div>
      </section>
      <section className="imanet ">
        <div className="promo promo--slider" style={{ opacity: "1" }}>
          <div className="promo-carousel slick-initialized slick-slider">
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: "1",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <div className="slick-slide slick-current slick-active">
                  <div>
                    <div
                      className="promo-slide row "
                      style={{ width: "100%", display: "flex" }}
                    >
                      <div className="promo__image-area col-12 col-lg-7 promo__image-area--end">
                        <img
                          src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/Membership/Professional/2-Succeed-Global-Certification-Professional-Membership.ashx?h=1080&amp;w=1620&amp;rev=1fb528db0cb942abb9d1d057cc0b5fdc&amp;hash=47D82DB8E4D0B2FEA96DC8B55F41FD43"
                          className="promo-slide--background"
                          alt="Succeed Global Certification"
                          width="100%"
                        />
                      </div>
                      <div className="promo__text-area col-12 col-lg-5">
                        <div className="row  align-items-center full-height">
                          <div className="col-12">
                            <h2 className="h2-fs promo__title h2">
                              Succeed with a Globally Respected Certification
                            </h2>
                            <p className="promo__description body-2">
                              Open exclusively to IMA members, the CMA
                              <sup>®</sup> (Certified Management Accountant)
                              program elevates your knowledge, skills, and
                              earning potential in accounting and finance.
                            </p>
                            <a className="h4" href="#0">
                              Learn More
                              <i className="fa-regular fa-circle-right ml-2 primary-green d-inline"></i>
                            </a>
                            <a
                              className="h4"
                              href="#0"
                              title="Earning CPE credits"
                            >
                              Earning CPE credits
                              <i className="fa-regular fa-circle-right ml-2 primary-green d-inline"></i>
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
        </div>
      </section>
      <section className="imanet">
        <div
          className="testimonials__slide row"
          style={{ width: "100%", display: "inline-block" }}
        >
          <div className="testimonials__slide-wrapper">
            <div className="testimonials__image-area col-12">
              <div
                className={`testimonials__video-player video-player__wrapper row ${videoActive ? "active" : ""
                  }`}
                data-inactive={!videoActive}
                data-autoplay=""
              >
                <div
                  className={`testimonials__embed col-12 ${videoActive ? "" : "d-none"
                    }`}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/GcO2m3c7uDU?enablejsapi=1"
                    title='YouTube - "IMA opened the gate for me into the broader world in professional and personal ways."'
                  ></iframe>
                </div>
                {!videoActive && (
                  <>
                    <img
                      alt="Fg Group"
                      className="d-flex"
                      src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/Membership/Professional/2-100Year-VideoThumb.ashx?rev=a090ee7589d44ba4ae40c3ff13ca723e"
                    />
                    <div
                      className="video-gallery__play-label body-2 d
                      React Component (Continued)
                      javascript
                      Copy code
                  -flex col-auto"
                    >
                      <i className="fa fab-video"></i>
                      <span>Watch Video</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="testimonials__text-area col-12">
              <div className="row align-items-center full-height">
                <div className="testimonials__quote blockquote col-12">
                  "IMA opened the gate for me into the broader world in
                  professional and personal ways."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="imanet">
        <div className="quick-links quick-links--defaut" style={{ opacity: 1 }}>
          <div className="">
            <h2 className="h2-fs quick-links__heading h2 align-center">
              Programs and Networking for Professionals
            </h2>
            <div className="quick-links__container row  mx-2 my-2">
              <div className="quick-links__card col-12 g-3 col-sm-3 col-md-3">
                <a href="#0" aria-label="Fg Group">
                  <div className="quick-links__wrapper">
                    <img
                      src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/Membership/Professional/Professional-Membership_Award-Winning-Thought-Leadership.ashx?h=100&amp;iar=0&amp;w=100&amp;rev=7b1fa60b4cff4704b44c7249b950c5b9&amp;hash=9DC40DE4D3D41D0A945A80A019140DEC"
                      className="quick-links__image"
                      alt="Award-Winning Thought Leadership"
                      width="100%"
                    />
                    <h2 className="h4-fs quick-links__title">
                      <span className="h4">IMA Thought Leadership</span>
                    </h2>
                  </div>
                </a>
              </div>
              <div className="quick-links__card col-12 g-3 col-sm-3 col-md-3">
                <a href="#0" aria-label="Fg Group">
                  <div className="quick-links__wrapper">
                    <img
                      src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/Membership/Professional/Professional-Membership_Continuing-Education.ashx?h=100&amp;iar=0&amp;w=100&amp;rev=58999fe65045457daa04f3564858bda1&amp;hash=D268382D0B57588B8172884272D66B67"
                      className="quick-links__image"
                      alt="Continuing Education"
                      width="100%"
                    />
                    <h2 className="h4-fs quick-links__title">
                      <span className="h4">Continuing Education</span>
                    </h2>
                  </div>
                </a>
              </div>
              <div className="quick-links__card col-12 g-3 col-sm-3 col-md-3">
                <a href="#0" aria-label="Fg Group">
                  <div className="quick-links__wrapper">
                    <img
                      src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/Membership/Professional/Professional-Membership_Regional-Councils-and-Chapters.ashx?h=100&amp;iar=0&amp;w=100&amp;rev=829f8939f4b24b5eb616e06d6af3db47&amp;hash=DDA848E483A5C661EFC951351842B3C2"
                      className="quick-links__image"
                      alt="Regional Councils and Chapters"
                      width="100%"
                    />
                    <h2 className="h4-fs quick-links__title">
                      <span className="h4">Regional Councils and Chapters</span>
                    </h2>
                  </div>
                </a>
              </div>
              <div className="quick-links__card col-12 g-3 col-sm-3 col-md-3">
                <a href="#0" aria-label="Fg Group">
                  <div className="quick-links__wrapper">
                    <img
                      src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/Membership/Professional/Professional-Membership_Conferences-and-Events.ashx?h=100&amp;iar=0&amp;w=100&amp;rev=dccc83b0897b45018a0f23e5a1e0fa3a&amp;hash=D91C4297824609D59E81AD738151A378"
                      className="quick-links__image"
                      alt="Conferences and Events"
                      width="100%"
                    />
                    <h2 className="h4-fs quick-links__title">
                      <span className="h4">Conferences and Events</span>
                    </h2>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InptaFooter />
    </body>
  );
}

export default BecomeAMember;
