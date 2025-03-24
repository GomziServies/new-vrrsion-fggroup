/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import SimpleINPTAHeader from "../../components/partials/Header/simpleinptaheader";
import "../../assets/css/bootstrap.css";
import "../../assets/css/inpta.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GrowAndConnect from "../../components/inpta/growConnect";
import { Helmet } from "react-helmet";
import InptaFooter from "../../components/partials/Footer/inptafooter";

function InptaFGGroup() {
  const canonicalUrl = window.location.href;
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState("card1");
  const [activeTab, setActiveTab] = useState("card1");
  const [certificateData, setCertificateData] = useState({
    certificate_id: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCertificateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddButtonClick = async () => {
    try {
      const certificate_id = certificateData.certificate_id;
      if (!certificate_id) {
        toast.error("Please Enter Certificate Id");
      } else {
        navigate(`/inpta/inpta-certificate?certificate=${certificate_id}`);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  const handleCardChange = (card) => {
    setActiveCard(card);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Helmet>
        <title>
          Indian Nutritionist and Personal Trainer Association | INPTA
        </title>
        <meta
          name="description"
          content="INPTA is the entity that unites trained and certified nutritionists & personal trainers together and combining their knowledge and creating a better place to uplift the career scope of nutritionists and personal trainers in the field of health and fitness."
        />
        <meta
          name="keyword"
          content="fitness club, nutrition club, wellness club activities, wellness club"
        />
        <meta
          property="og:title"
          content="Indian Nutritionist and Personal Trainer Association | INPTA"
        />
        <meta
          property="og:description"
          content="INPTA is the entity that unites trained and certified nutritionists & personal trainers together and combining their knowledge and creating a better place to uplift the career scope of nutritionists and personal trainers in the field of health and fitness."
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta property="og:url" content="https://fggroup.in/inpta/home-inpta" />
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
        message={"Hello, I wanted to know more about FGIIT Courses."}
        options={{ pageRef: true }}
      />
      <SimpleINPTAHeader />
      <section className="imanet">
        <div className="main-wrapper container-fluid">
          <div className="row register py-2">
            <div className="col-12 text-center">
              <p className="m-0 f-14 d-inline-block">
                <b>To Register Your Academy</b>
              </p>
              <Link
                to="/"
                className="btn black-btn mx-3 my-2 my-md-0"
              >
                Click Here
              </Link>
            </div>
          </div>
          <div className="base-layout row">
            <div className="wrapper m-0">
              <div className="hero-banner">
                <div className="hero-banner-carousel">
                  <div className="hero-banner--variant-1 hero-banner-slide row">
                    <div className="hero-banner__title-area">
                      <h1 className="hero-banner__title m-0">
                        Indian Nutritionist and Personal Trainer Association
                      </h1>
                    </div>
                    <div className="hero-banner__image-area">
                      <div className="hero-banner__image-gradient is-visible"></div>
                      <img
                        src="/assets/images/img/inpta-banner.webp"
                        className="d-none d-md-block"
                        alt="IMA Professional Network"
                      />
                      <img
                        className="d-block d-md-none"
                        src="/assets/images/img/inpta-banner.webp"
                        alt="Fg Group"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <nav
                className="tabs-bar tabs-bar--vertical tabs-bar--overflow"
                role="navigation"
              >
                <ul className="row " role="list">
                  <li className="tabs-bar__tab-container" role="listitem">
                    <button
                      className={`tab ${activeTab === "card1" ? "tab--active" : ""
                        }`}
                      tabIndex="0"
                      aria-expanded={activeTab === "card1"}
                      onClick={() => handleTabChange("card1")}
                      aria-controls="tabs-bar__slot--card1"
                    >
                      <h2 className="h2-fs tab__heading no-select text-nowrap">
                        Vision
                      </h2>
                      <div className="tab__accent-bar"></div>
                    </button>
                    <div>
                      <div className="tab-info col-12">
                        <h2 className="h2-fs tab-info__title">
                          Vision Details
                        </h2>
                        <div className="tab-info__text">
                          Our vision at the Indian Nutritionist and Personal
                          Training Association (INPTA) is to uplift Indian
                          nutritionists and trainers by providing comprehensive
                          educational, operational, and financial support, while
                          promoting excellence and professionalism in the
                          industry.
                        </div>
                      </div>
                      <div className="tabs-bar__slot__accent-bar d-none d-sm-block"></div>
                    </div>
                  </li>
                  <li className="tabs-bar__tab-container" role="listitem">
                    <button
                      className={`tab ${activeTab === "card2" ? "tab--active" : ""
                        }`}
                      tabIndex="0"
                      aria-expanded={activeTab === "card2"}
                      onClick={() => handleTabChange("card2")}
                      aria-controls="tabs-bar__slot--card2"
                    >
                      <h2 className="h2-fs tab__heading no-select text-nowrap">
                        Mission
                      </h2>
                      <div className="tab__accent-bar"></div>
                    </button>
                    <div>
                      <div className="tab-info col-12">
                        <h2 className="h2-fs tab-info__title">
                          Mission Details
                        </h2>
                        <div className="tab-info__text">
                          Our mission at the Indian Nutritionist and Personal
                          Training Association (INPTA) is to empower over 50,000
                          trainers and dietitians across the country, fostering
                          a healthier nation through their enhanced well-being
                          and professional growth.
                        </div>
                      </div>
                      <div className="tabs-bar__slot__accent-bar d-none d-sm-block"></div>
                    </div>
                  </li>
                </ul>
              </nav>
              <nav
                className="tabs-bar tabs-bar--horizontal tabs-bar--overflow"
                role="navigation"
              >
                <div className="container">
                  <ul className="row " role="list">
                    <li
                      className="tabs-bar__tab-container"
                      style={{ height: "371px" }}
                      role="listitem"
                    >
                      <button
                        className={`tab ${activeCard === "card1" ? "tab--active" : ""
                          }`}
                        tabIndex="0"
                        aria-expanded={activeCard === "card1"}
                        onClick={() => handleCardChange("card1")}
                        aria-controls="tabs-bar__slot--c6fb80da02fe42b4a6e98894f2063c91"
                      >
                        <h2 className="h2-fs tab__heading no-select text-nowrap">
                          Vision
                        </h2>
                        <div className="tab__accent-bar"></div>
                      </button>
                      {activeCard === "card1" && (
                        <div
                          id="tabs-bar--horizoltal__slot--c6fb80da02fe42b4a6e98894f2063c91"
                          className="tabs-bar__slot d-block"
                          aria-hidden={activeCard !== "card1"}
                        >
                          <div className="container">
                            <div className="tab-info col-12">
                              <h2 className="h2-fs tab-info__title">
                                Vision Details
                              </h2>
                              <div className="tab-info__text">
                                Our vision at the Indian Nutritionist and
                                Personal Training Association (INPTA) is to
                                uplift Indian nutritionists and trainers by
                                providing comprehensive educational,
                                operational, and financial support, while
                                promoting excellence and professionalism in the
                                industry.
                              </div>
                            </div>
                            <div className="tabs-bar__slot__accent-bar d-none d-sm-block"></div>
                          </div>
                        </div>
                      )}
                    </li>
                    <li
                      className="tabs-bar__tab-container"
                      style={{ height: "371px" }}
                      role="listitem"
                    >
                      <button
                        className={`tab ${activeCard === "card2" ? "tab--active" : ""
                          }`}
                        tabIndex="0"
                        aria-expanded={activeCard === "card2"}
                        onClick={() => handleCardChange("card2")}
                        aria-controls="tabs-bar__slot--dd55d83222524bc2ade6c509e9be13be"
                      >
                        <h2 className="h2-fs tab__heading no-select text-nowrap">
                          Mission
                        </h2>
                        <div className="tab__accent-bar"></div>
                      </button>
                      {activeCard === "card2" && (
                        <div
                          id="tabs-bar--horizoltal__slot--dd55d83222524bc2ade6c509e9be13be"
                          className="tabs-bar__slot d-block"
                          aria-hidden={activeCard !== "card2"}
                        >
                          <div className="container">
                            <div className="tab-info col-12">
                              <h2 className="h2-fs tab-info__title">
                                Mission Details
                              </h2>
                              <div className="tab-info__text">
                                Our mission at the Indian Nutritionist and
                                Personal Training Association (INPTA) is to
                                empower over 50,000 trainers and dietitians
                                across the country, fostering a healthier nation
                                through their enhanced well-being and
                                professional growth.
                              </div>
                            </div>
                            <div className="tabs-bar__slot__accent-bar d-none d-sm-block"></div>
                          </div>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="mt-5">
                <div className="row">
                  <div className="">
                    <div
                      id="DCA14BE4-5432-4BC2-B864-025AF909A8DA"
                      className="quick-links quick-links--extended bg-tint-blue"
                      data-per-row="3"
                    >
                      <div className="container">
                        <h2 className="h2-fs quick-links__heading h2 align-center">
                          Certifications For Every Stage Of Your Career Journey
                        </h2>
                        <div className="quick-links__container row  justify-content-center mx-2 my-2 ">
                          <div className="quick-links__card col-12 g-3 col-md-4">
                            <a
                              href="/inpta/training-and-placement-inpta"
                              aria-label="Fg Group"
                              target=""
                            >
                              <div className="quick-links__wrapper">
                                {/* <img
                                  src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/IMA-Certifications/FMAA-Badge.ashx?iar=0&amp;rev=60ba41cecf004515883de477359cff93&amp;hash=1127BB3A6C20F07E85AC07FD48DE2749"
                                  className="quick-links__image"
                                  alt="FMAA digital badge"
                                /> */}
                                <h2 className="h4-fs quick-links__title">
                                  <span className="h4">
                                    Training & Placement
                                  </span>
                                </h2>
                                <div className="quick-links__text body-3">
                                  At INPTA, our Training and Placement services
                                  are dedicated to helping you secure
                                  employment, create a professional resume, and
                                  provide support for salary increases, ensuring
                                  your career advancement and success in the
                                  industry.
                                  <br className="t-last-br" />
                                </div>
                                <i
                                  className="fa-regular fa-circle-left text-center"
                                  title="Learn more"
                                ></i>
                              </div>
                            </a>
                          </div>
                          <div className="quick-links__card col-12 g-3 col-md-4">
                            <a
                              // href="/inpta/job-placement"
                              href="http://gcsconsultant.fggroup.in/fitit/digital-marketing-agency"
                              aria-label="Fg Group"
                              target=""
                            >
                              <div className="quick-links__wrapper">
                                {/* <img
                                  src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/IMA-Certifications/CMA-Badge.ashx?iar=0&amp;rev=6475e4a6e6dd424391bb52b387c061ea&amp;hash=8BB9C448CB7BDB209E704A6F0098DCC7"
                                  className="quick-links__image"
                                  alt="CMA digital badge"
                                /> */}
                                <h2 className="h4-fs quick-links__title">
                                  <span className="h4">FITIT</span>
                                </h2>
                                <div className="quick-links__text body-3">
                                  Our Business Opportunities services are
                                  designed to support you in various aspects
                                  such as marketing, management, and finance,
                                  helping you grow and succeed in your
                                  professional endeavors.
                                </div>
                                <i
                                  className="fa-regular fa-circle-left text-center"
                                  title="Learn more"
                                ></i>
                              </div>
                            </a>
                          </div>
                          <div className="quick-links__card col-12 g-3 col-md-4">
                            <a
                              // /inpta/become-member
                              href="#"
                              aria-label="Fg Group"
                              target=""
                            >
                              <div className="quick-links__wrapper">
                                {/* <img
                                  src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/IMA-Certifications/CSCA-Badge.ashx?iar=0&amp;rev=c3e795a6032c4ecf97ff89e994a98f31&amp;hash=BF74862AA122BF82CFF9F6CA6543C930"
                                  className="quick-links__image"
                                  alt="CSCA Digital badge"
                                /> */}
                                <h2 className="h4-fs quick-links__title">
                                  <span className="h4">Become a Fgiitian</span>
                                </h2>
                                <div className="quick-links__text body-3">
                                  Join the Indian Nutritionist and Personal
                                  Trainer Association to access resources,
                                  networking, and professional development
                                  opportunities.
                                </div>
                                <i
                                  className="fa-regular fa-circle-left text-center"
                                  title="Learn more"
                                ></i>
                              </div>
                            </a>
                          </div>
                          <div className="search-certificate imanet mt-5">
                            <h2 className="h3-fs search-certificate__title tab-info__title">
                              Find Your Certificate
                            </h2>
                            <div className="search-certificate__input-group">
                              <input
                                type="text"
                                name="certificate_id"
                                value={certificateData.certificate_id}
                                onChange={handleInputChange}
                                className="search-certificate__input"
                                placeholder="Enter your certificate number..."
                              />
                              <button
                                className="search-certificate__button"
                                onClick={handleAddButtonClick}
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <GrowAndConnect />
            </div>
          </div>
        </div>
      </section>
      <InptaFooter />
    </>
  );
}

export default InptaFGGroup;
