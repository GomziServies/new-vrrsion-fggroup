import React, { useState } from "react";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import SimpleINPTAHeader from "../../components/partials/Header/simpleinptaheader";
import "../../assets/css/bootstrap.css";
import "../../assets/css/inpta.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import InptaFooter from "../../components/partials/Footer/inptafooter";

function TrainingAndPlacementINPTA() {
  const canonicalUrl = window.location.href;

  const courses = [
    {
      name: "Nutri Trainer Course",
      links: {
        online: "../fgiit/online-fitness-and-nutrition-courses",
        offline: "../fgiit/course-of-dietician",
      },
    },
    {
      name: "Diploma In Personal Training Course",
      links: {
        online: "../fgiit/online-personal-training-course",
        offline: "../fgiit/personal-trainer-courses",
      },
    },
    {
      name: "Diploma In Nutrition Course",
      links: {
        online: "../fgiit/food-and-nutrition-course",
        offline: "../fgiit/course-for-dietician",
      },
    },
    {
      name: "Anabolic Androgenic Steroids",
      links: {
        online: "../fgiit/anabolic-steroid-testosterone",
        offline: "../fgiit/anabolic-steroids-course",
      },
    },
    {
      name: "Group Instructor Master Class",
      links: {
        online: "../fgiit/online-fitness-instructor-course",
        offline: "../fgiit/fitness-instructor-course",
      },
    },
    {
      name: "Powerlifting Coach Workshop",
      links: {
        online: "../fgiit/online-powerlifting-course",
        offline: "../fgiit/powerlifting-course",
      },
    },
    {
      name: "Injury Rehabilitation Workshop",
      links: {
        online: "../fgiit/course-of-physiotherapy",
        offline: "../fgiit/injury-rehabilitation-program",
      },
    },
  ];

  const [visibleSections, setVisibleSections] = useState({});

  const toggleVisibility = (index) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
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
        <meta
          property="og:url"
          content="https://fggroup.in/inpta/training-and-placement-inpta"
        />
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
      <section className="imanet">
        <div className="main-wrapper container-fluid">
          <div className="">
            <div className="base-layout row">
              <div className="wrapper m-0">
                <div className="rich-text-editor row bg-primary-blue col-lg-12 mx-auto my-auto mb-5 pt-3 pb-3 text-center">
                  <h1 className="h2 fmaa-header-color">
                    Training And Placement
                  </h1>
                </div>
                <div className="hero-banner">
                  <div className="hero-banner-carousel">
                    <div className="hero-banner--variant-2 hero-banner-slide row w-100 d-inline-block">
                      <div className="hero-banner__title-area">
                        <div className="hero-banner__title-area-wrapper">
                          <h2 className="h2-fs h1 hero-banner__titlealign-left">
                            Open the Door to your Future in Fitness Industry
                          </h2>
                          <p className="body-1">
                            Unlock your future in the fitness industry with
                            INPTA! We provide job opportunities near your city,
                            helping you grow your career while staying close to
                            home. Take the first step towards excellence today!
                            <br className="t-last-br" />
                          </p>
                          <div className="align-left">
                            <a
                              className="cta-button cta-button--arrow primary-light"
                              href="https://fggroup.in/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="cta-button__icon bi bi-chevron-right ltr"></i>
                              <i className="cta-button__icon bi bi-chevron-left rtl"></i>
                              <span className="cta-button__text">
                                Enroll Now
                              </span>
                              <span className="cta-button__spinner spinner-border spinner-border-sm"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="hero-banner__image-area">
                        <img
                          src="/assets/images/inpta/t-p-banner.webp"
                          alt="Students studying for FMAA certification exam"
                          width="100%"
                        />
                      </div>
                      <div className="hero-banner__description--mobile">
                        <div className="hero-banner__description__wrapper--mobile">
                          <p className="body-1">
                            Gain the confidence to speak the global language of
                            business and demonstrate your proficiency in the
                            fundamentals of financial and managerial accounting.
                            <br className="t-last-br" />
                          </p>
                          <div className="align-left">
                            <a
                              className="cta-button cta-button--arrow primary-light"
                              href="https://imaonlinestore.com/personifyebusiness/FMAA-Registration"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="cta-button__icon bi bi-chevron-right ltr"></i>
                              <i className="cta-button__icon bi bi-chevron-left rtl"></i>
                              <span className="cta-button__text">
                                Enroll Now
                              </span>
                              <span className="cta-button__spinner spinner-border spinner-border-sm"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="quick-links quick-links--extended bg-tint-blue">
                  <div className="container">
                    <h2 className="h2-fs quick-links__heading h2 align-center">
                      Benefits of earning The INPTA
                    </h2>
                    <div className="quick-links__container row  justify-content-center mx-2 my-2 ">
                      <div className="quick-links__card col-12 g-3 col-md-3 col-md-4">
                        <div className="quick-links__wrapper">
                          <img
                            src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/IMA-Certifications/FMAA-Certification/Demostrate-Skillset-Icon.ashx?h=150&amp;iar=0&amp;w=150&amp;rev=cae547331d9243f095c0722c08824bab&amp;hash=0434523144267BA18E45444DDC4AFE12"
                            className="quick-links__image"
                            alt="Demonstrate Skillset"
                            width="150"
                            height="150"
                          />
                          <h2 className="h4-fs quick-links__title">
                            <span className="h4">Job</span>
                          </h2>
                          <div className="quick-links__text body-3">
                            Learn to apply financial and managerial accounting
                            principles to real-world situations, enhancing your
                            skills and value to your employer.
                            {/* <br className="t-last-br" />
                            <br className="t-last-br" />
                            <br className="t-last-br" /> */}
                          </div>
                        </div>
                      </div>
                      <div className="quick-links__card col-12 g-3 col-md-3 col-md-4">
                        <div className="quick-links__wrapper">
                          <img
                            src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/IMA-Certifications/FMAA-Certification/Advance-Career-Icon.ashx?h=150&amp;iar=0&amp;w=150&amp;rev=1da9042957884abc8c5ac56827cd4064&amp;hash=0E3228048CB187E8E8AAD0E94B893BEC"
                            className="quick-links__image"
                            alt="Advancing your career"
                            width="150"
                            height="150"
                          />
                          <h2 className="h4-fs quick-links__title">
                            <span className="h4">Freelancing</span>
                          </h2>
                          <div className="quick-links__text body-3">
                            Take the first step in your certification journey
                            and start your career with impact.
                          </div>
                        </div>
                      </div>
                      <div className="quick-links__card col-12 g-3 col-md-3 col-md-4">
                        <div className="quick-links__wrapper">
                          <img
                            src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/IMA-Certifications/FMAA-Certification/Stand-Out-Icon.ashx?h=150&amp;iar=0&amp;w=150&amp;rev=21277eee43ec4a78861b603b5762acb9&amp;hash=EA4980E5457B4E7F13DBF84BA99DB6F8"
                            className="quick-links__image"
                            alt="Stand out icon"
                            width="150"
                            height="150"
                          />
                          <h2 className="h4-fs quick-links__title">
                            <span className="h4">Business</span>
                          </h2>
                          <div className="quick-links__text body-3">
                            Differentiate yourself as a certified professional
                            and meet the global standard of financial and
                            managerial accounting&nbsp;fundamentals.
                            <br className="t-last-br" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rich-text-editor">
                    <div className="d-flex justify-content-center">
                      <img
                        src="/assets/images/inpta/inpta-overview.webp"
                        alt="An overview of competencies for the FMAA certification"
                      />
                    </div>
                  </div>
                </div>
                <div className="quick-links quick-links--extended rounded bg-tint-blue">
                  <div className="container">
                    <h2 className="h2-fs quick-links__heading h2 align-center">
                      Our Success Stories
                    </h2>
                    <div className="quick-links__container row  justify-content-center mb-3 ">
                      <div className="quick-links__card col-12 col-md-3">
                        <div className="quick-links__wrapper">
                          <img
                            src="/assets/images/fgiit/fgiit-webinar-placement-1.webp"
                            className="quick-links__image"
                            alt="A two-year student"
                            width="400"
                            height="400"
                          />
                          <h2 className="h4-fs quick-links__title">
                            <span className="h4">Dt. Chirag Pandey</span>
                          </h2>
                          {/* <div className="quick-links__text body-3">
                            Students from accounting and business majors,
                            including vocational schools.
                          </div> */}
                        </div>
                      </div>
                      <div className="quick-links__card col-12 col-md-3">
                        <div className="quick-links__wrapper">
                          <img
                            src="/assets/images/fgiit/fgiit-webinar-placement-3.webp"
                            className="quick-links__image"
                            alt="A female early business professional"
                            width="400"
                            height="400"
                          />
                          <h2 className="h4-fs quick-links__title">
                            <span className="h4">Pt. Kaushik Parma</span>
                          </h2>
                          {/* <div className="quick-links__text body-3">
                            Professionals with titles like Junior Accountant,
                            Specialist, Analyst, and Manager.
                          </div> */}
                        </div>
                      </div>
                      <div className="quick-links__card col-12 col-md-3">
                        <div className="quick-links__wrapper">
                          <img
                            src="/assets/images/fgiit/fgiit-webinar-placement-4.webp"
                            className="quick-links__image"
                            alt="A business professional"
                            width="400"
                            height="400"
                          />
                          <h2 className="h4-fs quick-links__title">
                            <span className="h4">Pt. Rushabh Joshi</span>
                          </h2>
                          {/* <div className="quick-links__text body-3">
                            Professionals who want to understand the basics of
                            financial and managerial accounting&nbsp;(Marketing,
                            HR, Operations, Business Owners).
                            <br className="t-last-br" />
                          </div> */}
                        </div>
                      </div>
                      <div className="quick-links__card col-12 col-md-3">
                        <div className="quick-links__wrapper">
                          <img
                            src="/assets/images/fgiit/fgiit-webinar-placement-5.webp"
                            className="quick-links__image"
                            alt="A four-year student"
                            width="400"
                            height="400"
                          />
                          <h2 className="h4-fs quick-links__title">
                            <span className="h4">Pt. Kinjal Pastagiya</span>
                          </h2>
                          {/* <div className="quick-links__text body-3">
                            Give yourself an edge to start your career, then
                            progress to a CMA when you are ready.
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="quick-links quick-links--extended">
                  <div className="container">
                    <h2 className="h2-fs quick-links__heading h2 align-center">
                      How to earn INPTA Certificate
                    </h2>
                    <div className="quick-links__container row  justify-content-center mx-2 my-2 step-icons ">
                      <div className="quick-links__card col-12 g-3 col-md-4">
                        <div className="quick-links__wrapper">
                          <img
                            src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/IMA-Certifications/FMAA-Certification/Step1-Icon.ashx?h=150&amp;iar=0&amp;w=150&amp;rev=d2bb77c1465e48fb8a0cb72a7f1c45ee&amp;hash=3F8F0C722434137F9BD2CD5CC9FD4F9F"
                            className="quick-links__image"
                            alt="Step 1 icon"
                            width="150"
                            height="150"
                          />
                          <h2 className="h4-fs quick-links__title">
                            <span className="h4">Enroll</span>
                          </h2>
                          <div className="quick-links__text body-3">
                            Sign up for the program and register for the exam*
                          </div>
                        </div>
                      </div>
                      <div className="quick-links__card col-12 g-3 col-md-4">
                        <div className="quick-links__wrapper">
                          <img
                            src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/IMA-Certifications/FMAA-Certification/Step2-Icon.ashx?h=150&amp;iar=0&amp;w=150&amp;rev=c135a91bef26447493327543cb840c3e&amp;hash=802573AA450EDFEE70E1A1F13777BAB9"
                            className="quick-links__image"
                            alt="Step 2 icon"
                            width="150"
                            height="150"
                          />
                          <h2 className="h4-fs quick-links__title">
                            <span className="h4">Prepare</span>
                          </h2>
                          <div className="quick-links__text body-3">
                            We recommend 80 hours of study time to best prepare
                            for the exam
                          </div>
                        </div>
                      </div>
                      <div className="quick-links__card col-12 g-3 col-md-4">
                        <div className="quick-links__wrapper">
                          <img
                            src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/IMA-Certifications/FMAA-Certification/Step3-Icon.ashx?h=150&amp;iar=0&amp;w=150&amp;rev=482d57268cff46e59ca1b1639f56264a&amp;hash=F7A1553AD7FD34FE01C7084C949A965C"
                            className="quick-links__image"
                            alt="Step 3"
                            width="150"
                            height="150"
                          />
                          <h2 className="h4-fs quick-links__title">
                            <span className="h4">Pass</span>
                          </h2>
                          <div className="quick-links__text body-3">
                            Successfully pass the 5 steps Examination
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="fw-promo ">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-lg-4">
                        <h2 className="h2-fs fw-promo__title text-white h2">
                          How much is the FMAA?
                        </h2>
                      </div>
                      <div className="col-12 col-lg-8">
                        <div className="fw-promo__description body-1">
                          <p className="fmaa-header-color">
                            Registration is open for the September 2024 English
                            and Arabic exam windows.
                            <br />
                            <strong>Exam Price: $299</strong>
                          </p>
                          <p>
                            <strong>
                              Certified FMAAs will need to pay a $49 annual
                              renewal fee and earn 15 CPE credits per year.
                            </strong>
                          </p>
                          <br className="t-last-br" />
                          <br className="t-last-br" />
                        </div>
                        <a
                          href="https://imaonlinestore.com/personifyebusiness/FMAA-Registration"
                          tabIndex="-1"
                        >
                          <button className="cta-button cta-button--arrow cta-button--orange primary-light">
                            <i className="cta-button__icon bi bi-chevron-right ltr"></i>
                            <i className="cta-button__icon bi bi-chevron-left rtl"></i>
                            <span className="cta-button__text">Enroll Now</span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div id="prepare" className="anchor-point"></div>
                <div className="promo promo--slider">
                  <div className="promo-carousel">
                    <div className="promo-slide row ">
                      <div className="promo__image-area col-12 col-lg-7 promo__image-area--start">
                        <img
                          src="/assets/images/inpta/inpta-certificate.webp"
                          className="promo-slide--background"
                          alt="A woman seated at a table writing notes."
                          width="1620"
                          height="1080"
                        />
                      </div>
                      <div className="promo__text-area col-12 col-lg-5">
                        <div className="row  align-items-center full-height">
                          <div className="col-12">
                            <h2 className="h2-fs promo__title h2">
                              Preparing for the INPTA Certification
                            </h2>
                            <p className="promo__description body-2">
                              <p>
                                <a
                                  className="h4"
                                  rel="noopener noreferrer"
                                  href="../fgiit/fitness-courses"
                                  target="_blank"
                                >
                                  Case Study
                                </a>
                              </p>
                              {/* <p>
                                <a
                                  className="h4"
                                  rel="noopener noreferrer"
                                  href="https://www.hockinternational.com/shop/fmaa-exam-review/"
                                  target="_blank"
                                >
                                  HOCK International
                                </a>
                              </p>
                              <p>
                                <a
                                  className="h4"
                                  rel="noopener noreferrer"
                                  href="https://powersresources.com/en/fmaa"
                                  target="_blank"
                                >
                                  PRC
                                </a>
                              </p> */}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="resources" className="anchor-point"></div>
                <div className="promo promo--slider">
                  <div className="promo-carousel">
                    <div className="promo-slide row ">
                      <div className="promo__image-area col-12 col-lg-7 promo__image-area--end">
                        <img
                          src="/assets/images/inpta/inpta-resources.webp"
                          className="promo-slide--background"
                          alt="A person using a laptop computer"
                          width="1620"
                          height="1080"
                        />
                      </div>
                      <div className="promo__text-area col-12 col-lg-5">
                        <div className="row  align-items-center full-height">
                          <div className="col-12">
                            <h2 className="h2-fs promo__title h2">
                              INPTA Resources
                            </h2>
                            <p className="promo__description body-2">
                              {/* <p>
                                Consider these documents everything you need to
                                know about the FMAA exam.
                              </p> */}
                              {courses.map((course, index) => (
                                <p
                                  key={index}
                                  className="course-hover-p"
                                  onClick={() => toggleVisibility(index)}
                                >
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    className="mr-2"
                                  />{" "}
                                  <a className="h4 d-inline">{course.name}</a>
                                  {visibleSections[index] && (
                                    <ul className="view-on-hover mr-2">
                                      <li className="list-unstyled">
                                        <a href={course.links.offline}>
                                          Offline
                                        </a>
                                      </li>
                                      <li className="list-unstyled">
                                        <a href={course.links.online}>Online</a>
                                      </li>
                                    </ul>
                                  )}
                                </p>
                              ))}
                              <br className="t-last-br" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="quick-links quick-links--extended bg-tint-blue">
                  <div className="container">
                    <h2 className="h2-fs quick-links__heading h2 align-center">
                      You passed! What&#39;s next?
                    </h2>
                    <div className="quick-links__container row  justify-content-center mx-2 my-2 ">
                      <div className="quick-links__card col-12 g-3 col-md-4">
                        <div className="quick-links__wrapper">
                          <img
                            src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/IMA-Certifications/FMAA-Certification/Share-your-achievement-Icon.ashx?h=150&amp;iar=0&amp;w=150&amp;rev=f6c77f98f1ca47be88124a0b054f0d34&amp;hash=56C5EEC4EFB671125D7CAB909D79FDAF"
                            className="quick-links__image"
                            alt="A certificate"
                            width="150"
                            height="150"
                          />
                          <h2 className="h4-fs quick-links__title">
                            <span className="h4">Share your achievement</span>
                          </h2>
                          <div className="quick-links__text body-3">
                            Celebrate your accomplishment by adding your digital
                            badge to your LinkedIn page and sharing on your
                            social channels.
                          </div>
                        </div>
                      </div>

                      <div className="quick-links__card col-12 g-3 col-md-4">
                        <div className="quick-links__wrapper">
                          <img
                            src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/IMA-Certifications/FMAA-Certification/Continue-Learning-Icon.ashx?h=150&amp;iar=0&amp;w=150&amp;rev=1eab85b3829242d1acac4b509ad88a23&amp;hash=BBAB9581DF236E71E465F1FDE344DD41"
                            className="quick-links__image"
                            alt="Continue Learning"
                            width="150"
                            height="150"
                          />
                          <h2 className="h4-fs quick-links__title">
                            <span className="h4">Continue learning</span>
                          </h2>
                          <div className="quick-links__text body-3">
                            Earn 15 credits of CPE per year (including 1 ethics
                            credit). CPE credits can be earned at a discounted
                            rate through IMA or through other
                            organizations.&nbsp;
                            <br />
                          </div>
                        </div>
                      </div>
                      <div className="quick-links__card col-12 g-3 col-md-4">
                        <div className="quick-links__wrapper">
                          <img
                            src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/IMA-Certifications/FMAA-Certification/Maintain-Icon.ashx?h=150&amp;iar=0&amp;w=150&amp;rev=de10d05562e94cebb7a45463a08a834a&amp;hash=6C0643DFA9229B560C4DA273EE7FC20D"
                            className="quick-links__image"
                            alt="Maintain illustration"
                            width="150"
                            height="150"
                          />
                          <h2 className="h4-fs quick-links__title">
                            <span className="h4">
                              Maintain your certification
                            </span>
                          </h2>
                          <div className="quick-links__text body-3">
                            Fulfill your annual requirement for free.
                            <br className="t-last-br" />
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
      <InptaFooter />
    </>
  );
}

export default TrainingAndPlacementINPTA;
