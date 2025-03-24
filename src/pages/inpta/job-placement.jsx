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

function JobPlacementInpta() {
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
        <meta property="og:url" content="https://fggroup.in/inpta/job-placement" />
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
          <h1 className="h2 fmaa-header-color">Job & Placement</h1>
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
      <section className="inptajob margintop">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <span className="card-date">
                <i className="fa-regular fa-calendar"></i> October 1, 2018
              </span>
            </div>
            <div className="card-body">
              <a href="#0" className="card-title-link">
                <h2 className="h2-fs card-title">
                  <span>Congress IS Debating Latest JOBS Act</span>
                </h2>
              </a>
              <p className="card-text">
                The JOBS and Investor Confidence Act of 2018 passed by the U.S.
                House of Representatives in July contains a number of changes
                from the version of the bill passed by the Senate, which now
                must decide whether to accept the House version.
              </p>
              <a>ARTICLE</a>
            </div>
          </div>
        </div>
      </section>
      <section className="inptajob mt-4">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <span className="card-date">
                <i className="fa-regular fa-calendar"></i> October 1, 2018
              </span>
            </div>
            <div className="card-body">
              <a href="#0" className="card-title-link">
                <h2 className="h2-fs card-title">
                  <span>Congress IS Debating Latest JOBS Act</span>
                </h2>
              </a>
              <p className="card-text">
                The JOBS and Investor Confidence Act of 2018 passed by the U.S.
                House of Representatives in July contains a number of changes
                from the version of the bill passed by the Senate, which now
                must decide whether to accept the House version.
              </p>
              <a>ARTICLE</a>
            </div>
          </div>
        </div>
      </section>
      <section className="inptajob mt-4">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <span className="card-date">
                <i className="fa-regular fa-calendar"></i> October 1, 2018
              </span>
            </div>
            <div className="card-body">
              <a href="#0" className="card-title-link">
                <h2 className="h2-fs card-title">
                  <span>Congress IS Debating Latest JOBS Act</span>
                </h2>
              </a>
              <p className="card-text">
                The JOBS and Investor Confidence Act of 2018 passed by the U.S.
                House of Representatives in July contains a number of changes
                from the version of the bill passed by the Senate, which now
                must decide whether to accept the House version.
              </p>
              <a>ARTICLE</a>
            </div>
          </div>
        </div>
      </section>
      <section className="inptajob mt-4">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <span className="card-date">
                <i className="fa-regular fa-calendar"></i> October 1, 2018
              </span>
            </div>
            <div className="card-body">
              <a href="#0" className="card-title-link">
                <h2 className="h2-fs card-title">
                  <span>Congress IS Debating Latest JOBS Act</span>
                </h2>
              </a>
              <p className="card-text">
                The JOBS and Investor Confidence Act of 2018 passed by the U.S.
                House of Representatives in July contains a number of changes
                from the version of the bill passed by the Senate, which now
                must decide whether to accept the House version.
              </p>
              <a>ARTICLE</a>
            </div>
          </div>
        </div>
      </section>
      <section className="inptajob mt-4 mb-4">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <span className="card-date">
                <i className="fa-regular fa-calendar"></i> October 1, 2018
              </span>
            </div>
            <div className="card-body">
              <a href="#0" className="card-title-link">
                <h2 className="h2-fs card-title">
                  <span>Congress IS Debating Latest JOBS Act</span>
                </h2>
              </a>
              <p className="card-text">
                The JOBS and Investor Confidence Act of 2018 passed by the U.S.
                House of Representatives in July contains a number of changes
                from the version of the bill passed by the Senate, which now
                must decide whether to accept the House version.
              </p>
              <a>ARTICLE</a>
            </div>
          </div>
        </div>
      </section>
      <InptaFooter />
    </body>
  );
}

export default JobPlacementInpta;
