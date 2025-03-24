import React from "react";
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

function PartnersINPTA() {
  const canonicalUrl = window.location.href;
  return (
    <body className="bg-gray">
      <Helmet>
        <title>Indian Nutritionist and Personal Trainer Association | INPTA</title>
        <meta name="description" content="INPTA is the entity that unites trained and certified nutritionists & personal trainers together and combining their knowledge and creating a better place to uplift the career scope of nutritionists and personal trainers in the field of health and fitness." />
        <meta name="keyword" content="fitness club, nutrition club, wellness club activities, wellness club" />
        <meta property="og:title" content="Indian Nutritionist and Personal Trainer Association | INPTA" />
        <meta property="og:description" content="INPTA is the entity that unites trained and certified nutritionists & personal trainers together and combining their knowledge and creating a better place to uplift the career scope of nutritionists and personal trainers in the field of health and fitness." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/inpta/partners" />
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
          <h1 className="h2 fmaa-header-color">India Partners</h1>
        </div>
        <div className="hero-banner">
          <div className="hero-banner-carousel">
            <div className="hero-banner--variant-2 hero-banner-slide row w-100 d-inline-block">
              <div className="hero-banner__image-area">
                <img
                  src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/IMA-Certifications/FMAA-Certification/HeroBanner-FMAA-Oveview.ashx?h=1080&amp;iar=0&amp;w=1620&amp;rev=5dca857d183c48b4a4b9dc98fcc05770&amp;hash=62862D725FFEA431D581E95BE76DF01F"
                  alt="Students studying for FMAA certification exam"
                  width="100%"
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
                      <span
                        className="cta-button__spinner spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
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
                    >
                      <i className="cta-button__icon bi bi-chevron-right ltr"></i>
                      <i className="cta-button__icon bi bi-chevron-left rtl"></i>
                      <span className="cta-button__text">Enroll Now</span>
                      <span className="cta-button__spinner spinner-border spinner-border-sm"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="promo-section">
        <div className="container-fluid">
          <div
            className="promo-slide row"
            style={{ width: "100%", display: "inline-block" }}
          >
            <div className="promo__text-area col-12 col-lg-5">
              <div className="row align-items-center full-height">
                <div className="col-12">
                  <h2 className="h2-fs promo__title h2">
                    Leading companies across India seek talented CMA holders
                  </h2>
                  <p className="promo__description body-2">
                    Leading global companies such as Amazon, Accenture, HPE,
                    Larsen &amp; Toubro, Wipro, and Cyqurex have partnered with
                    IMA to seek talented CMA holders for internships and job
                    placements within their organizations across India.
                  </p>
                </div>
              </div>
            </div>
            <div className="promo__image-area col-12 col-lg-7 promo__image-area--start position-relative">
              <img
                src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/About-IMA/Partners/Indian-Partners/45-VideoThumb-IndiaPartners.ashx?h=1080&amp;w=1920&amp;rev=ccbd54d4514340538862ea9f04a61728&amp;hash=8FDBD4C887212D6E975780837E371A73"
                className="promo-slide--background"
                alt="Indian Partners"
                style={{ height: "unset", width: "100%" }}
              />
              <div className="promo-slide__play-label body-2 col-auto">
                <i className="fa-solid fa-play"></i>
                <span> Watch Video</span>
              </div>
              <div className="promo__video-embed"></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-4 mb-3">
            <div className="col-12 col-md-4 pb-3 text-center">
              <div className="rich-text-editor row">
                <p style={{ textAlign: "center" }} className="mt-4">
                  <img
                    src="/assets/images/img/hercules.webp"
                    alt="Accenture Logo"
                    className="centered-image"
                  />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-8 px-4">
              <div className="rich-text-editor row  ">
                <p className="mb-2">
                  <span className="h4">Accenture</span>
                </p>
                <p style={{ color: "#2f2f2f" }} className="mb-2">
                  Accenture is a leading global professional services company,
                  providing a broad range of services and solutions in strategy,
                  consulting, digital, technology and operations. A partnership
                  between Accenture and IMA facilitates recruitment
                  opportunities to CMAs which is the gateway for getting CMA
                  (Certified Management Accountant)listed on its website. Visit
                  us at www.accenture.com
                </p>
                <p>
                  <a
                    rel="noopener noreferrer"
                    href="/inpta/contact-us"
                    target="_blank"
                  >
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4 mb-3">
            <div className="col-12 col-md-4 pb-3 text-center">
              <div className="rich-text-editor row  ">
                <p style={{ textAlign: "center" }} className="mt-4">
                  <img
                    src="/assets/images/img/b-natural.webp"
                    alt="Accenture Logo"
                  />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-8 px-4">
              <div className="rich-text-editor row  ">
                <p className="mb-2">
                  <span className="h4">Accenture</span>
                </p>
                <p style={{ color: "#2f2f2f" }} className="mb-2">
                  Accenture is a leading global professional services company,
                  providing a broad range of services and solutions in strategy,
                  consulting, digital, technology and operations. A partnership
                  between Accenture and IMA facilitates recruitment
                  opportunities to CMAs which is the gateway for getting CMA
                  (Certified Management Accountant)listed on its website. Visit
                  us at www.accenture.com
                </p>
                <p>
                  <a href="/inpta/contact-us" target="_blank">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4 mb-3">
            <div className="col-12 col-md-4 pb-3 text-center">
              <div className="rich-text-editor row  ">
                <p style={{ textAlign: "center" }} className="mt-4">
                  <img
                    src="/assets/images/img/beastin-gym.webp"
                    alt="Accenture Logo"
                  />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-8 px-4">
              <div className="rich-text-editor row  ">
                <p>
                  <span className="h4 mb-2">Accenture</span>
                </p>
                <p style={{ color: "#2f2f2f" }} className="mb-2">
                  Accenture is a leading global professional services company,
                  providing a broad range of services and solutions in strategy,
                  consulting, digital, technology and operations. A partnership
                  between Accenture and IMA facilitates recruitment
                  opportunities to CMAs which is the gateway for getting CMA
                  (Certified Management Accountant)listed on its website. Visit
                  us at www.accenture.com
                </p>
                <p>
                  <a href="/inpta/contact-us" target="_blank">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4 mb-3">
            <div className="col-12 col-md-4 pb-3 text-center">
              <div className="rich-text-editor row  ">
                <p style={{ textAlign: "center" }} className="mt-4">
                  <img
                    src="/assets/images/img/gomzi1.webp"
                    alt="Accenture Logo"
                  />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-8 px-4">
              <div className="rich-text-editor row  ">
                <p>
                  <span className="h4 mb-2">Accenture</span>
                </p>
                <p style={{ color: "#2f2f2f" }} className="mb-2">
                  Accenture is a leading global professional services company,
                  providing a broad range of services and solutions in strategy,
                  consulting, digital, technology and operations. A partnership
                  between Accenture and IMA facilitates recruitment
                  opportunities to CMAs which is the gateway for getting CMA
                  (Certified Management Accountant)listed on its website. Visit
                  us at www.accenture.com
                </p>
                <p>
                  <a href="/inpta/contact-us" target="_blank">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4 mb-3">
            <div className="col-12 col-md-4 pb-3 text-center">
              <div className="rich-text-editor row  ">
                <p style={{ textAlign: "center" }} className="mt-4">
                  <img
                    src="/assets/images/img/green-leaf.webp"
                    alt="Accenture Logo"
                  />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-8 px-4">
              <div className="rich-text-editor row  ">
                <p>
                  <span className="h4 mb-2">Accenture</span>
                </p>
                <p style={{ color: "#2f2f2f" }} className="mb-2">
                  Accenture is a leading global professional services company,
                  providing a broad range of services and solutions in strategy,
                  consulting, digital, technology and operations. A partnership
                  between Accenture and IMA facilitates recruitment
                  opportunities to CMAs which is the gateway for getting CMA
                  (Certified Management Accountant)listed on its website. Visit
                  us at www.accenture.com
                </p>
                <p>
                  <a href="/inpta/contact-us" target="_blank">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4 mb-3">
            <div className="col-12 col-md-4 pb-3 text-center">
              <div className="rich-text-editor row  ">
                <p style={{ textAlign: "center" }} className="mt-4">
                  <img
                    src="/assets/images/img/beastin-gym.webp"
                    alt="Accenture Logo"
                  />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-8 px-4">
              <div className="rich-text-editor row  ">
                <p>
                  <span className="h4 mb-2">Accenture</span>
                </p>
                <p style={{ color: "#2f2f2f" }} className="mb-2">
                  Accenture is a leading global professional services company,
                  providing a broad range of services and solutions in strategy,
                  consulting, digital, technology and operations. A partnership
                  between Accenture and IMA facilitates recruitment
                  opportunities to CMAs which is the gateway for getting CMA
                  (Certified Management Accountant)listed on its website. Visit
                  us at www.accenture.com
                </p>
                <p>
                  <a href="/inpta/contact-us" target="_blank">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4 mb-3">
            <div className="col-12 col-md-4 pb-3 text-center">
              <div className="rich-text-editor row  ">
                <p style={{ textAlign: "center" }} className="mt-4">
                  <img src="/assets/images/img/js.webp" alt="Accenture Logo" />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-8 px-4">
              <div className="rich-text-editor row  ">
                <p>
                  <span className="h4 mb-2">Accenture</span>
                </p>
                <p style={{ color: "#2f2f2f" }} className="mb-2">
                  Accenture is a leading global professional services company,
                  providing a broad range of services and solutions in strategy,
                  consulting, digital, technology and operations. A partnership
                  between Accenture and IMA facilitates recruitment
                  opportunities to CMAs which is the gateway for getting CMA
                  (Certified Management Accountant)listed on its website. Visit
                  us at www.accenture.com
                </p>
                <p>
                  <a href="/assets/images/img/mahaveer.webp" target="_blank">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4 mb-3">
            <div className="col-12 col-md-4 pb-3 text-center">
              <div className="rich-text-editor row  ">
                <p style={{ textAlign: "center" }} className="mt-4">
                  <img
                    src="/assets/images/img/sahyog.webp"
                    alt="Accenture Logo"
                  />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-8 px-4">
              <div className="rich-text-editor row  ">
                <p>
                  <span className="h4 mb-2">Accenture</span>
                </p>
                <p style={{ color: "#2f2f2f" }} className="mb-2">
                  Accenture is a leading global professional services company,
                  providing a broad range of services and solutions in strategy,
                  consulting, digital, technology and operations. A partnership
                  between Accenture and IMA facilitates recruitment
                  opportunities to CMAs which is the gateway for getting CMA
                  (Certified Management Accountant)listed on its website. Visit
                  us at www.accenture.com
                </p>
                <p>
                  <a href="/assets/images/img/shapers.webp" target="_blank">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4 mb-3">
            <div className="col-12 col-md-4 pb-3 text-center">
              <div className="rich-text-editor row  ">
                <p style={{ textAlign: "center" }} className="mt-4">
                  <img
                    src="/assets/images/img/spartena.webp"
                    alt="Accenture Logo"
                  />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-8 px-4">
              <div className="rich-text-editor row  ">
                <p>
                  <span className="h4 mb-2">Accenture</span>
                </p>
                <p style={{ color: "#2f2f2f" }} className="mb-2">
                  Accenture is a leading global professional services company,
                  providing a broad range of services and solutions in strategy,
                  consulting, digital, technology and operations. A partnership
                  between Accenture and IMA facilitates recruitment
                  opportunities to CMAs which is the gateway for getting CMA
                  (Certified Management Accountant)listed on its website. Visit
                  us at www.accenture.com
                </p>
                <p>
                  <a href="/inpta/contact-us" target="_blank">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4 mb-3">
            <div className="col-12 col-md-4 pb-3 text-center">
              <div className="rich-text-editor row  ">
                <p style={{ textAlign: "center" }} className="mt-4">
                  <img
                    src="/assets/images/img/stallon.webp"
                    alt="Accenture Logo"
                  />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-8 px-4">
              <div className="rich-text-editor row  ">
                <p>
                  <span className="h4 mb-2">Accenture</span>
                </p>
                <p style={{ color: "#2f2f2f" }}>
                  Accenture is a leading global professional services company,
                  providing a broad range of services and solutions in strategy,
                  consulting, digital, technology and operations. A partnership
                  between Accenture and IMA facilitates recruitment
                  opportunities to CMAs which is the gateway for getting CMA
                  (Certified Management Accountant)listed on its website. Visit
                  us at www.accenture.com
                </p>
                <p>
                  <a href="/inpta/contact-us" target="_blank">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4 mb-3">
            <div className="col-12 col-md-4 pb-3 text-center">
              <div className="rich-text-editor row  ">
                <p style={{ textAlign: "center" }} className="mt-4">
                  <img
                    src="/assets/images/img/titan-fitness.webp"
                    alt="Accenture Logo"
                  />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-8 px-4">
              <div className="rich-text-editor row  ">
                <p>
                  <span className="h4 mb-2">Accenture</span>
                </p>
                <p style={{ color: "#2f2f2f" }} className="mb-2">
                  Accenture is a leading global professional services company,
                  providing a broad range of services and solutions in strategy,
                  consulting, digital, technology and operations. A partnership
                  between Accenture and IMA facilitates recruitment
                  opportunities to CMAs which is the gateway for getting CMA
                  (Certified Management Accountant)listed on its website. Visit
                  us at www.accenture.com
                </p>
                <p>
                  <a href="/inpta/contact-us" target="_blank">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4 mb-3">
            <div className="col-12 col-md-4 pb-3 text-center">
              <div className="rich-text-editor row  ">
                <p style={{ textAlign: "center" }} className="mt-4">
                  <img src="/assets/images/img/w8.webp" alt="Accenture Logo" />
                </p>
              </div>
            </div>
            <div className="col-12 col-md-8 px-4">
              <div className="rich-text-editor row  ">
                <p>
                  <span className="h4 mb-2">Accenture</span>
                </p>
                <p style={{ color: "#2f2f2f" }} className="mb-2">
                  Accenture is a leading global professional services company,
                  providing a broad range of services and solutions in strategy,
                  consulting, digital, technology and operations. A partnership
                  between Accenture and IMA facilitates recruitment
                  opportunities to CMAs which is the gateway for getting CMA
                  (Certified Management Accountant)listed on its website. Visit
                  us at www.accenture.com
                </p>
                <p>
                  <a href="/inpta/contact-us" target="_blank">
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InptaFooter />
    </body>
  );
}

export default PartnersINPTA;
