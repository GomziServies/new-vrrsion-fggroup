import React, { useEffect, useState } from "react";
import FwgHeader from "../components/partials/Header/fwgheader";
import FwgFooter from "../components/partials/Footer/fwgfooter";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { sendInquiry } from "../assets/js/utils/contact-us";
import Modal from "react-bootstrap/Modal";
import ModalVideo from "react-modal-video";
import WhatsappHeaderApp from "../components/whatsappHeaderBtn";
import ContactButtonFWG from "../assets/js/utils/contactUsFwg";
import { Link } from "react-router-dom";
import PartnerLogo from "../components/fgiit/partnerLogo";
import InquiryForm from "../components/fwg/inquiry-form";
import InternationalAcademy from "../components/fwg/flags";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Helmet } from "react-helmet";

function CorporateFitnessPrograms() {
  const canonicalUrl = window.location.href;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    modalName: "",
    modalEmail: "",
    modalContactNumber: "",
    modalSelectedTime: "",
    modalSelectedDate: "",
    modalMessage: "",
  });
  const [showMore, setShowMore] = useState(true);
  const toggleReadMore = () => {
    setShowMore(!showMore);
  };
  const [showMore1, setShowMore1] = useState(true);
  const toggleReadMore1 = () => {
    setShowMore1(!showMore1);
  };
  const [showMore2, setShowMore2] = useState(true);
  const toggleReadMore2 = () => {
    setShowMore2(!showMore2);
  };
  const [showMore3, setShowMore3] = useState(true);
  const toggleReadMore3 = () => {
    setShowMore3(!showMore3);
  };
  const [showMore4, setShowMore4] = useState(true);
  const toggleReadMore4 = () => {
    setShowMore4(!showMore4);
  };
  const [showMore5, setShowMore5] = useState(true);
  const toggleReadMore5 = () => {
    setShowMore5(!showMore5);
  };
  const [showMore6, setShowMore6] = useState(true);
  const toggleReadMore6 = () => {
    setShowMore6(!showMore6);
  };
  const [showMore7, setShowMore7] = useState(true);
  const toggleReadMore7 = () => {
    setShowMore7(!showMore7);
  };
  const [showMore8, setShowMore8] = useState(true);
  const toggleReadMore8 = () => {
    setShowMore8(!showMore8);
  };
  const [showMore9, setShowMore9] = useState(true);
  const toggleReadMore9 = () => {
    setShowMore9(!showMore9);
  };
  const [showMore10, setShowMore10] = useState(true);
  const toggleReadMore10 = () => {
    setShowMore10(!showMore10);
  };
  const [showMore11, setShowMore11] = useState(true);
  const toggleReadMore11 = () => {
    setShowMore11(!showMore11);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  const bookFreeAppointmentWithBestDietitianInquiry = async () => {
    try {
      const name = formData.modalName;
      const phoneNumber = formData.modalContactNumber;
      const email = formData.modalEmail;
      const date = formData.modalSelectedDate;
      const time = formData.modalSelectedTime;
      var message = `I have booked a demo session for RTP-4.0 at  ${date}  ${time}.`;
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "Book Demo RTP 4.0 Session",
        message,
        window.location.href,
        null,
        null,
        null
      );
      setFormData({
        modalName: "",
        modalEmail: "",
        modalContactNumber: "",
        modalSelectedDate: "",
        modalSelectedTime: "",
      });
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleApplyForInquiry = async () => {
    try {
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "RTP-4.0 Inquiry",
        message,
        window.location.href,
        null,
        null,
        null
      );
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const $ = window.$;

    $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fas fa-arrow-right"></i>');

    const timer = setTimeout(() => {
      setShowModal(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const toggleText = (id) => {
    const dots = document.getElementById(`dots${id}`);
    const moreText = document.getElementById(`more${id}`);
    const btnText = document.getElementById(`myBtn${id}`);

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  };
  return (
    <>
      <Helmet>
        <title>Corporate Wellness Programs | Fitnesswithgomzi | Fitness Programs</title>
        <meta name="description" content="In Corporate Employees Wellness Plan We Provide a Custom Diet and
        Exercise that Improve the Focus and Productivity to Work Done with Less Stress." />
        <meta name="keyword" content="employee wellness programs, corporate wellness, workplace wellness,
        corporate wellness programs, corporate fitness challenge, health and wellness programmes,
        corporate wellness solution, business in wellness, corporate fitness programs, corporate
        health and wellness, corporate employee wellness programs, wellness benefits, fitness and
        wellness activities" />
        <meta property="og:title" content="Corporate Wellness Programs | Fitnesswithgomzi | Fitness Programs" />
        <meta property="og:description" content="In Corporate Employees Wellness Plan We Provide a Custom Diet and
        Exercise that Improve the Focus and Productivity to Work Done with Less Stress." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/corporate-fitness-programs" />
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
        message={
          "Hello, I wanted to know more about Corporate Wellness Programs details. "
        }
        options={{ pageRef: true }}
      />

      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <FwgHeader />
      <section style={{ marginTop: "70px" }}>
        <div className="container-fluid p-0">
          <LazyLoadImage
            effect="blur"
            src={process.env.PUBLIC_URL + "/assets/images/img/banner18.webp"}
            className="d-none d-md-block w-100 lazy"
            alt="Create a fit culture at your place"
          />
          <LazyLoadImage
            effect="blur"
            src={
              process.env.PUBLIC_URL + "/assets/images/img/banner-mobile18.webp"
            }
            className="d-block d-md-none w-100 lazy"
            alt="Create a fit culture at your place"
          />
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="describe mb-4 text-center d-none d-md-block">
              <h1>
                India's Best Corporate Employees{" "}
                <span className="m-0 text-blue-color">
                  Health and Wellness Program
                </span>
              </h1>
            </div>
            <div className="thm-bg-clr dector d-none d-md-block"></div>
            <div className="d-none d-md-block">
              <div className="row">
                <div className="col-lg-6 describe order-2 order-md-1">
                  <p className="m-0">
                    <b>
                      Covid -19 pandemic has broken the healthcare ecosystem of
                      the world. It has challenged the health and fitness
                      industry. Leaving behind the drawbacks of the pandemic,
                      the health industry has come up with numerous solutions
                      and has left no stone unturned in bringing back the world
                      on the healthy track.
                    </b>
                  </p>
                  <p className="ml-0 mt-0 mb-0">
                    Fitness With Gomzi has brought health and wellness programs
                    for the employees of your
                    <span id="dotss" className="m-0"></span>
                  </p>
                  <span id="more" className="m-0">
                    <p className="m-0">
                      organization. Its well-designed Corporate Wellness
                      Programs is to address employee well-being concerns,
                      re-energize, create healthy and productive teams in the
                      world of competition and help the employees to combat
                      competitive pressure.
                    </p>
                  </span>
                </div>
                <div className="col-lg-6 order-1 order-md-2">
                  <div className="ply1 black-before">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/rtp-4.0-thumbnail-1.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="transform your body in 90 days"
                    />
                    <div className="video-btn play-btn">
                      <a
                        onClick={() => openVideoModal("cu6nyC0VBNk")}
                        className="custom" aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 order-3">
                  <div className="describe">
                    <span id="mores" className="m-0">
                      <p className="m-0 text-muted">
                        Fitness With Gomzi offers products for business in
                        wellness that improve the health of employees and create
                        a healthier society. They focus mainly on the four
                        dimensions of wellness- spiritual wellness, emotional
                        wellness, physical wellness, and social wellness.
                        <p className="ml-0">
                          The corporate fitness programs at FWG include
                          activities such as exercise, customized diet, stress
                          management, and wellness assessments. These programs
                          are well designed to help the employees stay fit and
                          healthy and drive the employees from illness to
                          wellness.{" "}
                        </p>
                        <p className="ml-0">
                          An employee wellness program is an approach taken by
                          employers to achieve a healthy work environment by
                          incorporating various health activities. They promote
                          their employees' well-being within the daily work
                          schedule. They supervise the health culture of the
                          employees by taking a holistic approach towards them
                          and overcoming their health-related problems.{" "}
                        </p>
                      </p>
                    </span>
                    <div className="design-btn mt-3 d-none d-md-block">
                      <a
                        onclick="myBtnevent()"
                        id="myBtnn"
                        className="text-info m-0"
                      >
                        Read more
                      </a>
                      <a
                        onClick={() => openVideoModal("HxhYb_Aa0uI")}
                        className="custom btn-design"
                      >
                        Watch Video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-md-none">
              <div className="row align-items-center">
                <div className="col-md-6 order-md-1 order-2">
                  <div className="design-h1 mt-3">
                    <h2 style={{ color: "#333" }} className="m-0 h1-fs">
                      India's Best Corporate Employees{" "}
                      <span className="m-0 text-blue-color">
                        Health and Wellness Programs
                      </span>
                    </h2>
                  </div>
                  <div className="design-describe">
                    <div className="mt-2 d-block d-md-none">
                      <p className="m-0">
                        Covid -19 pandemic has broken the healthcare ecosystem
                        of the world. It has challenged the health and fitness
                        industry. Leaving behind the
                        <span id="dotsc">...</span>
                      </p>
                      <div id="morec">
                        <p className="m-0">
                          drawbacks of the pandemic, the health industry has
                          come up with numerous solutions and has left no stone
                          unturned in bringing back the world on the healthy
                          track. Fitness With Gomzi has brought health and
                          wellness programs for the employees of your
                        </p>
                        <p className="m-0 text-muted">
                          Fitness With Gomzi offers products for business in
                          wellness that improve the health of employees and
                          create a healthier society. They focus mainly on the
                          four dimensions of wellness- spiritual wellness,
                          emotional wellness, physical wellness, and social
                          wellness.
                        </p>
                        <p className="ml-0">
                          The corporate fitness programs at FWG include
                          activities such as exercise, customized diet, stress
                          management, and wellness assessments. These programs
                          are well designed to help the employees stay fit and
                          healthy and drive the employees from illness to
                          wellness.{" "}
                        </p>
                        <p className="ml-0">
                          An employee wellness program is an approach taken by
                          employers to achieve a healthy work environment by
                          incorporating various health activities. They promote
                          their employees' well-being within the daily work
                          schedule. They supervise the health culture of the
                          employees by taking a holistic approach towards them
                          and overcoming their health-related problems.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="design-btn mt-3 d-block d-md-none">
                      <a
                        onclick="myBtneventc()"
                        id="myBtnrc"
                        href="#clinical"
                        className="text-info m-0"
                      >
                        Read more
                      </a>
                      <a
                        onClick={() => openVideoModal("_mzIsKUkcFY")}
                        className="custom btn-design"
                      >
                        Watch Video
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-block d-md-none mt-3">
                  <div className="ply1">
                    <div className="ply1 black-before">
                      <LazyLoadImage
                        effect="blur"
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="transform your body in 90 days"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fwg/rtp-3.0-thumbnail-1.webp"
                        }
                      />
                      <div className="video-btn">
                        <a
                          onClick={() => openVideoModal("_mzIsKUkcFY")}
                          className="custom clickof" aria-label="Fg Group"
                        >
                          <span className="newthing">
                            <i className="fas fa-play"></i>
                          </span>
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
        <div className="container-fluid">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">Who Can </span> Utilize
                It?
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <div className="row">
              <div className="col-sm-6 mt-3 position-relative">
                <div className="tabata blog2">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <img
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/rtp-ngo.webp"
                        }
                        alt="NGO"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="mt-3 mt-lg-0 h5-fs">NGO</h2>
                      {showMore ? (
                        <p className="mb-0">
                          NGOs often lack employee wellness programs. They do
                          not recognize wellness programs as an important
                          component of their organization and make cost an
                          issue. However, some
                          <span id="dotsb">...</span>
                        </p>
                      ) : (
                        <span className="m-0">
                          <p className="m-0">
                            effective leaders understand the need of the hour
                            and motivate their employees to grab the benefits of
                            these wellness programs.NGOs and other non-profit
                            organizations must take wellness programs for the
                            benefit of their members because it is a social
                            service that needs healthy people to fulfill the
                            mission and vision of the organization. The NGO
                            staff must be more fit and healthy than other
                            employees. Corporate wellness programs offered by
                            Gomzi assist in achieving the health outcomes of the
                            employees by providing excellent diet plans and
                            exercises.
                          </p>
                        </span>
                      )}
                      <p
                        onClick={toggleReadMore}
                        id="myBtnrb"
                        className="text-info m-0 my-sm-2 my-md-0"
                      >
                        {showMore ? "Read more" : "Read less"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 position-relative">
                <div className="tabata blog2">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/rtp-company.webp"
                        }
                        alt="multinational company"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="mt-3 mt-lg-0 h5-fs">Multinational company :</h2>
                      {showMore1 ? (
                        <p className="mb-0">
                          Good Health Is The Primary Goal Of A Nation's
                          Development. The Government Encourages Different
                          Health Plans To Keep Its Employees Healthy. Workplace
                          Wellness Programs
                          <span id="dotsc">...</span>
                        </p>
                      ) : (
                        <span className="m-0">
                          <p className="m-0">
                            {" "}
                            Are Designed To Promote Health And Prevent
                            Diseases.Fitness With Gomzi Provides A Flexible
                            Program With Its Nutrition Plans And Exercises To
                            Enhance Health Awareness In The Country.
                          </p>
                        </span>
                      )}
                      <p
                        onClick={toggleReadMore1}
                        id="myBtnrc"
                        className="text-info m-0 my-sm-2 my-md-0"
                      >
                        {showMore1 ? "Read more" : "Read less"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 position-relative">
                <div className="tabata blog2">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/rtp-hospital.webp"
                        }
                        alt="hospitals"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="h5-fs mt-3 mt-lg-0">Hospitals</h2>
                      {showMore2 ? (
                        <p className="mb-0">
                          While taking care of others, hospital employees
                          sometimes ignore their own health. They work with very
                          ill patients, come in contact with different diseases
                          <span id="dotsh">...</span>
                        </p>
                      ) : (
                        <span className="m-0">
                          <p className="m-0">
                            {" "}
                            and work pressure makes them stressed. Hence they
                            require wellness programs at regular intervals.Gomzi
                            offers offline and online wellness classNamees that
                            regularly nurses hospital employees to keep them in
                            the pink of health.
                          </p>
                        </span>
                      )}
                      <p
                        onClick={toggleReadMore2}
                        id="myBtnrh"
                        className="text-info m-0 my-sm-2 my-md-0"
                      >
                        {showMore2 ? "Read more" : "Read less"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 position-relative">
                <div className="tabata blog2">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets//images/img/rtp-workers.webp"
                        }
                        alt="Factories"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="h5-fs mt-3 mt-lg-0">Factories</h2>
                      {showMore3 ? (
                        <p className="mb-0">
                          Factories face the problem of having workers at their
                          company 24/7/365. It would be a sigh of relief for the
                          workers and the employees if they agree to enroll
                          <span id="dotsf">...</span>
                        </p>
                      ) : (
                        <span className="m-0">
                          <p className="m-0">
                            themselves in the business in wellness programs.
                            Most often the floor staff in manufacturing
                            companies does not understand the benefits of such
                            programs. Such employees must be explained the
                            benefits of healthy living and high thinking which
                            is the aim of wellness programs. Fitness with Gomzi
                            staff keeps a regular check on each and every client
                            and provides the best services through their
                            wellness programs.
                          </p>
                        </span>
                      )}
                      <p
                        onClick={toggleReadMore3}
                        id="myBtnrf"
                        className="text-info m-0 my-sm-2 my-md-0"
                      >
                        {showMore3 ? "Read more" : "Read less"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 position-relative">
                <div className="tabata blog2">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/rtp-government.webp"
                        }
                        alt="government department"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="h5-fs mt-3 mt-lg-0">Government department: </h2>
                      {showMore4 ? (
                        <p className="mb-0">
                          Good health is the primary goal of a nation's
                          development. The government encourages different
                          health plans to keep its employees healthy. Workplace
                          wellness programs
                          <span id="dotsa">...</span>
                        </p>
                      ) : (
                        <span className="m-0">
                          <p className="m-0">
                            {" "}
                            are designed to promote health and prevent diseases.
                            Fitness with Gomzi provides a flexible program with
                            its nutrition plans and exercises to enhance health
                            awareness in the country.{" "}
                          </p>
                        </span>
                      )}
                      <p
                        onClick={toggleReadMore4}
                        id="myBtnra"
                        className="text-info m-0 my-sm-2 my-md-0"
                      >
                        {showMore4 ? "Read more" : "Read less"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 position-relative">
                <div className="tabata blog2">
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy img-fluid"
                        width="80%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/obesity-png.webp"
                        }
                        alt="Childhood Obesity"
                      />
                    </div>
                    <div className="col-lg-8">
                      <h2 className="h5-fs mt-3 mt-lg-0">Childhood Obesity</h2>
                      <p className="mb-0">
                        Come out and learn more about the health risks of
                        childhood obesity, proper Nutrition, Designing healthy
                        meals for children...
                      </p>
                      <Link
                        to="/fitnesswithgomzi/Healthy-Eating-Habits-for-Kids"
                        className="m-0 my-sm-2 mt-md-1 btn btn-whats py-1 px-2 btn-success"
                      >
                        Know more
                      </Link>
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
          <div className="container blog2 py-5">
            <div className="covid text-center">
              <h2 style={{ color: "#333" }} className="h2-fs">
                How it <span className="m-0 text-blue-color"> works ?</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-0"></div>
            <OwlCarousel
              loop
              autoPlay
              dots={false}
              id="owl-demo7"
              className="owl-carousel owl-theme text-left"
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
                  <div className="col-lg-6 mt-5">
                    <div>
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/co1.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="Body Composition Analysis"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mt-2 mt-md-5">
                    <div className="Digital">
                      <div className="tabata">
                        <h2 className="h5-fs"
                          style={{
                            backgroundImage:
                              " linear-gradient(to right, #21d397 0%, #7450fe 50%, #21d397 100%)",
                            webkitBackgroundClip: "text",
                            webkitTextFillColor: "transparent",
                            fontWeight: "900",
                          }}
                        >
                          {" "}
                          step - 1
                        </h2>
                      </div>
                      <b>
                        <h2 className="h5-fs mt-2 fs-27">
                          Body Composition Analysis
                        </h2>
                      </b>
                      <div className="row">
                        <div className="col-sm-12">
                          <span>
                            <b>
                              An integrated health and wellness program
                              effectively applies body composition analysis.
                            </b>
                            It gives a clear idea about the health and fitness
                            level of all the team members.{" "}
                            <b>
                              It gives a clear report of the number of problems
                              and their solutions at the end of the year.
                            </b>
                          </span>
                        </div>
                        <div className="col-sm-6">
                          <span>
                            <ul className="pl-3">
                              <li className="mt-3">Muscle-fat analysis</li>
                              <li className="mt-3">Blood sugar</li>
                              <li className="mt-3">Obesity analysis</li>
                              <li className="mt-3">
                                Segmental fat/muscles analysis
                              </li>
                            </ul>
                          </span>
                        </div>
                        <div className="col-sm-6">
                          <span>
                            <ul className="pl-3">
                              <li className="mt-3">Medical condition</li>
                              <li className="mt-3">RHR</li>
                              <li className="mt-3">MHR</li>
                            </ul>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mb-3 mx-sm-3">
                <div className="row align-items-center">
                  <div className="col-lg-6 mt-5">
                    <div>
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/co2.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="exercise session"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mt-3 mt-md-5">
                    <div className="Digital">
                      <div className="tabata">
                        <h2 className="h5-fs"
                          style={{
                            backgroundImage:
                              "linear-gradient(to right, #21d397 0%, #7450fe 50%, #21d397 100%)",
                            webkitBackgroundClip: "text",
                            webkitTextFillColor: "transparent",
                            fontWeight: "900",
                          }}
                        >
                          Step-2
                        </h2>
                      </div>
                      <b>
                        <h2 className="h5-fs mt-2 fs-27">
                          Exercise Session
                        </h2>
                      </b>
                      <div className="row">
                        <div className="col-sm-12">
                          <span>
                            the one hour session will be customized .....
                            company.
                            <b>
                              Our fitness and wellness activities promote strong
                              muscles and bones through regular exercise and
                              physical activity. It improves overall health,
                              keeps you active and reduces the risk of many
                              diseases.
                            </b>
                          </span>
                        </div>
                        <div className="col-sm-6">
                          <span>
                            <ul className="pl-3">
                              <li className="mt-3">Yoga</li>
                              <li className="mt-3">Body Weight Training</li>
                              <li className="mt-3">Tabata workout</li>
                            </ul>
                          </span>
                        </div>
                        <div className="col-sm-6">
                          <span>
                            <ul className="pl-3">
                              <li className="mt-3">Floor Workout</li>
                              <li className="mt-3">Stretching Workout</li>
                              <li className="mt-3">Functional Workout</li>
                            </ul>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mb-3 mx-sm-3">
                <div className="row">
                  <div className="col-lg-6 mt-5">
                    <div>
                      <img
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/co3.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="customized diet plan"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mt-3 mt-md-5">
                    <div className="Digital">
                      <div className="tabata">
                        <h2 className="h5-fs"
                          style={{
                            backgroundImage:
                              "linear-gradient(to right, #21d397 0%, #7450fe 50%, #21d397 100%)",
                            webkitBackgroundClip: "text",
                            webkitTextFillColor: " transparent",
                            fontWeight: "900",
                          }}
                        >
                          step-3
                        </h2>
                      </div>
                      <b>
                        <h2 className="h5-fs mt-2 fs-27">
                          Customized Diet Plan
                        </h2>
                      </b>
                      <div className="row">
                        <div className="col-sm-12">
                          <span>
                            Dieting doesn't mean to starve. It is about eating
                            the measured amount of nutrients through wholesome
                            food on a daily basis which can improve your team
                            productivity and health.
                            <b>
                              This health and wellness diet enhances the protein
                              and energy level, and improves the quality of
                              life.
                            </b>
                          </span>
                        </div>
                        <div className="col-sm-6">
                          <span>
                            <ul className="pl-3">
                              <li className="mt-3">3 Different Diet Plan</li>
                              <li className="mt-3">3 Different exercise</li>
                              <li className="mt-3">
                                Every 30 Days consultations
                              </li>
                            </ul>
                          </span>
                        </div>
                        <div className="col-sm-6">
                          <span>
                            <ul className="pl-3">
                              <li className="mt-3">3 consultations</li>
                              <li className="mt-3">1 Health Coach</li>
                              <li className="mt-3">Update WhatsApp Group</li>
                            </ul>
                          </span>
                        </div>
                      </div>
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
          <div className="container blog2 py-5">
            <div className="covid text-center">
              <h2 style={{ color: "#333" }} className='h2-fs'>
                how we
                <span className="m-0 text-blue-color"> Help peoples?</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="tabata text-center">
              <h2 className="h2-fs">few diet recipes ideas</h2>
            </div>
            <div className="row">
              <div className="mt-3 col-lg-3 col-md-6">
                <div className="video">
                  <Link to="/recipe/banana-chocolate-smoothie">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/bananachocolatesmoothie.webp"
                        }
                        width="100%"
                        alt="chocolate banana smoothie"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mt-3 col-lg-3 col-md-6">
                <div className="video">
                  <Link to="/recipe/protein-chickpea-salad">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/chickpeasalad.webp"
                        }
                        width="100%"
                        alt="chickpea salad"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mt-3 col-lg-3 col-md-6">
                <div className="video">
                  <Link to="/recipe/orange-protein-smoothie">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/orangesmoothie.webp"
                        }
                        width="100%"
                        alt="orange smoothie"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mt-3 col-lg-3 col-md-6">
                <div className="video">
                  <Link to="/recipe/protein-makhana-bhel">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/makhanabhel.webp"
                        }
                        width="100%"
                        alt="makhana bhel"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="tabata text-center mt-5">
              <h2 className="h2-fs">few exercise presentation</h2>
            </div>
            <div className="row mt-3">
              <div className="col-md-3 w">
                <div className="vimage">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/tabata1.webp"
                    }
                    width="100%"
                    alt="lower body workout"
                  />
                </div>
              </div>
              <div className="col-md-3 w">
                <div className="vimage">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/tabata2.webp"
                    }
                    width="100%"
                    alt="core and abs workout"
                  />
                </div>
              </div>
              <div className="col-md-3 w">
                <div className="vimage">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/tabata3.webp"
                    }
                    width="100%"
                    alt="cardio workouts"
                  />
                </div>
              </div>
              <div className="col-md-3 w">
                <div className="vimage">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/tabata4.webp"
                    }
                    width="100%"
                    alt="upper body workout"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2">
            <div className="card border border-info mt-5">
              <div className="card-header border-bottom alert-info border-info">
                <h2 className="h4-fs">
                  Benefits of Health and Wellness programs offered at Fitness
                  With Gomzi{" "}
                </h2>
              </div>
              <div className="card-body tabata">
                <blockquote className="blockquote mb-0">
                  <h2 className="h5-fs">Improves employee health behaviors :</h2>
                  <p className="text-muted">
                    Our workplace wellness program offers customized diets and
                    exercises to the employees. This results in improved job
                    performance and lower levels of leaves like sick leaves and
                    Early Resignation of the team members.
                  </p>
                  <h2 className="h5-fs">Reduces the stress levels :</h2>
                  <p className="text-muted">
                    Reduced stress level is one of the wellness benefits which
                    results in a good relationship between workers, reduced
                    interpersonal conflicts, dealing happily with challenging
                    situations, and a happy atmosphere. The observation of
                    employees' stress levels should be done by the team leader
                    while at work.
                  </p>
                  <h2 className="h5-fs">Improves attendance :</h2>
                  <p className="text-muted">
                    The reduced number of half-day leaves, sick leaves, etc
                    shows that the wellness program has showered its benefits on
                    the organization.
                  </p>
                  <h2 className="h5-fs">Reduction in health care costs :</h2>
                  <p className="text-muted">
                    Many times the employees continue their work even if they
                    are sick. They go on taking different types of pills like
                    antipain or antipyretic and combat their sickness. Such
                    anti-pain tablets have severe side effects. The customized
                    diet given by the nutritionist in the wellness programs
                    boosts the immunity level of the employees, resulting in a
                    reduction in health care costs.
                  </p>
                  <h2 className="h5-fs">Boosts morale: </h2>
                  <p className="text-muted">
                    A healthy body breeds a healthy mind. An employee who feels
                    fit and healthy at his workplace works with confidence and
                    is ready to pick up new things. He receives appreciation and
                    ultimately shoots up his confidence.
                  </p>
                  <h2 className="h5-fs">Increases productivity :</h2>
                  <p className="text-muted">
                    The employees of the organization get a healthy environment
                    and manage their time effectively. The productivity of the
                    organization increases when the targets are completed on
                    time.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-md-5 mt-3">
        <div className="container-fluid">
          <div className="container margintop">
            <div className="row">
              <div className="col-lg-10 col-12 text-center mx-auto">
                <div className="covid text-center">
                  <h2 style={{ color: "#333" }} className='h2-fs'>
                    Your Ultimate Destination for
                    <span className="m-0 text-blue-color">
                      {" "}
                      Weight Loss and Wellness
                    </span>
                  </h2>
                </div>
                <div className="thm-bg-clr dector mb-3"></div>
                <div className="col-md-12 text-center">
                  <h2 className="text-muted h6-fs">
                    " Are you looking to achieve your weight loss goals and
                    transform your life? Look no further! Fitness With Gomzi is
                    here to support you on your weight loss journey with a range
                    of effective solutions and programs. Whether you're seeking
                    a weight loss calculator, weight loss recipes, or weight
                    loss transformations, we have you covered.
                  </h2>
                </div>
              </div>
              <OwlCarousel
                loop
                autoPlay
                id="owl-weight-loss"
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
                <div className=" mb-4 mb-lg-0 mt-5">
                  <div
                    className="featured-block d-flex justify-content-center align-items-center"
                    style={{ width: "350px" }}
                  >
                    <div className="d-block">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/mix-img/consultation-weight-loss.webp"
                        }
                        className="featured-block-image img-fluid"
                        width="150px"
                        alt="FG Group"
                      />
                      <p className="featured-block-head">Diet and Nutrition</p>
                      {showMore5 ? (
                        <p className="featured-block-text m-0">
                          We believe in the power of a healthy diet for weight
                          loss. Our diet charts and meal plans are designed to
                          support your weight loss goals while ensuring you...
                        </p>
                      ) : (
                        <p className="featured-block-text m-0">
                          receive all the essential nutrients. Our diet plans
                          include weight loss recipes, diet plans to lose
                          weight, and diet planners to assist you in your weight
                          loss journey.
                        </p>
                      )}
                      <div className="swap mt-3">
                        <button
                          onClick={toggleReadMore5}
                          className="moreless-button"
                          style={{ backgroundColor: "#00bbff" }}
                        >
                          {showMore5 ? "Read more" : "Read less"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4 mb-lg-0 mb-md-4 mt-5">
                  <div
                    className="featured-block d-flex justify-content-center align-items-center"
                    style={{ width: "350px" }}
                  >
                    <div className="d-block">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/mix-img/fitness-studio.webp"
                        }
                        className="featured-block-image img-fluid"
                        width="197px"
                        alt="FG Group"
                      />
                      <p className="featured-block-head">
                        Fitness Studio and Gym
                      </p>
                      {showMore6 ? (
                        <p className="featured-block-text m-0">
                          Join our fitness studio or gym to experience targeted
                          weight loss exercises. Our fitness experts will guide
                          ...
                        </p>
                      ) : (
                        <p className="featured-block-text">
                          you through effective weight loss. exercises for
                          females at home and weight loss exercises in the gym.
                          We also provide fitness training courses for those
                          interested in enhancing their knowledge
                        </p>
                      )}
                      <div className="swap mt-3">
                        <button
                          className="moreless-button1"
                          style={{ backgroundColor: "#00bbff" }}
                          onClick={toggleReadMore6}
                        >
                          {showMore ? "Read more" : "Read less"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" mb-4 mb-lg-0" style={{ marginTop: "50px" }}>
                  <div
                    className="featured-block d-flex justify-content-center align-items-center"
                    style={{ width: "350px" }}
                  >
                    <div className="d-block">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets//images/mix-img/herbal-and-homeopathic-solutions.webp"
                        }
                        className="featured-block-image img-fluid"
                        width="150px"
                        alt="FG Group"
                      />
                      <p className="featured-block-head">
                        Herbal and Homeopathic Solutions
                      </p>
                      <p className="featured-block-text m-0">
                        Explore our range of weight loss herbal products and
                        weight loss medicines in homeopathy for natural and...
                      </p>
                      <p className="moretext2 featured-block-text">
                        {" "}
                        holistic approaches to weight loss We prioritize your
                        well-being and offer safe and effective options.
                      </p>
                      <div className="swap mt-3">
                        <button
                          className="moreless-button2"
                          style={{ backgroundColor: "#00bbff" }}
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mb-4 mb-lg-0 mb-md-4 mt-5">
                  <div
                    className="featured-block d-flex justify-content-center align-items-center"
                    style={{ width: "350px" }}
                  >
                    <div className="d-block">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/mix-img/weight-gain.webp"
                        }
                        width="200px"
                        className="featured-block-image img-fluid"
                        alt="FG Group"
                      />
                      <p className="featured-block-head">Weight Gain</p>
                      <p className="featured-block-text m-0">
                        We understand that weight gain can be a concern for some
                        individuals. If you're looking to gain weight, we have
                        solutions for you...
                      </p>
                      <p className="moretext3 featured-block-text">
                        {" "}
                        too. Discover weight gain tips, weight gain peanut
                        butter, weight gain protein powder, and weight gain
                        foods in Tamil to support your journey.
                      </p>
                      <div className="swap mt-3">
                        <button
                          className="moreless-button3"
                          style={{ backgroundColor: "#00bbff" }}
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mb-4 mb-lg-0 mb-md-4 mt-5">
                  <div
                    className="featured-block d-flex justify-content-center align-items-center"
                    style={{ width: "350px" }}
                  >
                    <div className="d-block">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/mix-img/additional-services.webp"
                        }
                        width="200px"
                        className="featured-block-image img-fluid"
                        alt="FG Group"
                      />
                      <p className="featured-block-head">Additional Services</p>
                      <p className="featured-block-text m-0">
                        Apart from weight loss and weight gain, we offer various
                        services to enhance your overall wellness. From fitness
                        centers near you...
                      </p>
                      <p className="moretext4 featured-block-text">
                        {" "}
                        to weight loss motivation quotes, diet planners, and
                        weight loss motivation, we are committed to your
                        well-being.
                      </p>
                      <div className="swap mt-3">
                        <button
                          className="moreless-button4"
                          style={{ backgroundColor: "#00bbff" }}
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mb-4 mb-lg-0 mb-md-4 mt-5">
                  <div
                    className="featured-block d-flex justify-content-center align-items-center"
                    style={{ width: "350px" }}
                  >
                    <div className="d-block">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/mix-img/partner-brands-and-testimonials.webp"
                        }
                        width="200px"
                        className="featured-block-image img-fluid"
                        alt="FG Group"
                      />
                      <p className="featured-block-head">
                        Partner Brands and Testimonials
                      </p>
                      <p className="featured-block-text m-0">
                        At Fitness With Gomzi, we collaborate with trusted
                        partner brands to provide you with...
                      </p>
                      <p className="moretext5 featured-block-text">
                        the best resources. Our programs have helped numerous
                        individuals achieve their health goals, and their
                        success stories speak for themselves. Read more about
                        our partners and the benefits they offer.
                      </p>
                      <div className="swap mt-3">
                        <button
                          className="moreless-button5"
                          style={{ backgroundColor: "#00bbff" }}
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mb-4 mb-lg-0 mb-md-4 mt-5">
                  <div
                    className="featured-block d-flex justify-content-center align-items-center"
                    style={{ width: "350px" }}
                  >
                    <div className="d-block">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/mix-img/join-fitness-with-gomzi.webp"
                        }
                        width="200px"
                        className="featured-block-image img-fluid"
                        alt="FG Group"
                      />
                      <p className="featured-block-head ">
                        Join Fitness With Gomzi Today
                      </p>
                      <p className="featured-block-text m-0">
                        Take the first step towards a healthier and happier you!
                        Join Fitness With Gomzi's corporate ...
                      </p>
                      <p className="moretext6 featured-block-text">
                        employees health and wellness program to transform your
                        life. Our well-designed programs address employee
                        well-being concerns, re-energize teams, and combat
                        competitive pressures.
                      </p>
                      <div className="swap mt-3">
                        <button
                          className="moreless-button6"
                          style={{ backgroundColor: "#00bbff" }}
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mb-4 mb-lg-0 mb-md-4 mt-5">
                  <div
                    className="featured-block d-flex justify-content-center align-items-center"
                    style={{ width: "350px" }}
                  >
                    <div className="d-block">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/mix-img/contact_us.webp"
                        }
                        width="200px"
                        className="featured-block-image img-fluid"
                        alt="FG Group"
                      />
                      <p className="featured-block-head">Contact Us</p>
                      <p className="featured-block-text m-0">
                        To learn more about our services, get in touch with us
                        today. Our dedicated team of experts, including
                        nutritionists...
                      </p>
                      <p className="moretext7 featured-block-text">
                        dieticians, fitness trainers, and wellness coaches, is
                        ready to assist you. Together, let's embark on a journey
                        to a healthier and fitter lifestyle. Stay connected with
                        us through our international accredited academy and
                        let's achieve your health goals together.
                      </p>
                      <div className="swap mt-3">
                        <button
                          className="moreless-button7"
                          style={{ backgroundColor: "#00bbff" }}
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <PartnerLogo />
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="covid">
              <h2 className=" h2-fs text-center text-333-color">
                additional <span className="m-0 text-blue-color">benefits</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <div className="row">
              <div className="col-sm-12 tabata">
                <p className="mt-4">
                  <b>
                    1. To increase the activity levels during a sedentary
                    lifestyle which help to reduce
                  </b>
                  <br />
                  <ul>
                    <div className="row mt-4">
                      <div className="col-lg-6 mt-3">
                        <li>
                          Joint pain like knee pain, lower back pain, and neck
                          pain
                        </li>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <li>Diabetes, PCOS, Thyroid like metabolic diseases</li>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <li>Obesity and overweight problem</li>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <li>Cardiovascular, Renal, GI tract diseases</li>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <li>Constipation, acidity gastric problem</li>
                      </div>
                    </div>
                  </ul>
                </p>
                <p className="mt-4 mt-2">
                  <b>
                    2. To increase the sharpness and productivity of the team
                    members which can lead to,
                  </b>
                  <br />
                  <ul>
                    <div className="row mt-4">
                      <div className="col-lg-6 mt-3">
                        <li>Fewer Holidays</li>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <li>Overall Positive Environment</li>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <li>Less Excuse In Work</li>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <li>Good Teamwork Qualities</li>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <li>Leaders Can Be Created Even Stronger</li>
                      </div>
                    </div>
                  </ul>
                </p>
                <p className="mt-4">
                  <b>
                    3. It can impact the Image of the company as a healthier one
                    so better branding
                  </b>
                </p>
                <p className="mt-4">
                  <b>
                    4. Help in lowering the annual insurance premium due to less
                    medical condition in staff
                  </b>
                </p>
                <p className="mt-4">
                  <b>
                    5. Team will save time as they will have a facility to
                    become fit in the company only
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 py-md-5 py-3">
            <div className="covid text-center">
              <h2 className="h2-fs" style={{ color: "#333" }}>
                <span className="m-0 text-blue-color">
                  presentation and interactive discussion team
                </span>
              </h2>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <div className="row" style={{ justifyContent: "space-evenly" }}>
                  <div className="col-md-4 col-sm-6">
                    <div className="team-b mx-4 mx-md-0">
                      <div className="team-img text-center">
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/team-1.webp"
                          }
                          alt="Founder"
                        />
                      </div>
                      <div className="Digital text-center mt-md-4 mt-4 px-3">
                        <h2 className="m-0 h4-fs">
                          <Link
                            to="http://gcsconsultant.fggroup.in/gautam_jani_official"
                            style={{ color: "#000" }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Dr.Gautam Jani
                          </Link>
                        </h2>
                        <p>Founder</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="team-b mx-4 mx-md-0">
                      <div className="team-img text-center">
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/team-2.webp"
                          }
                          alt="Co-Founder"
                        />
                      </div>
                      <div className="Digital text-center mt-md-4 mt-4 px-3">
                        <h2 className="h4-fs m-0">Dt. Foram Desai</h2>
                        <p>Co-Founder</p>
                      </div>
                    </div>
                  </div>
                  <div className="row unvisible">
                    <div className="col-md-3 col-sm-6 d-lg-block d-xl-none">
                      <div className="team-b mx-4 mx-sm-0 mx-md-3 px-3 px-sm-5 px-md-0">
                        <div className="img-before img-for-before text-center">
                          <LazyLoadImage
                            effect="blur"
                            className="lazy"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/team-3.webp"
                            }
                            alt="FG Group"
                          />
                        </div>
                        <div className="Digital text-center mt-md-4 mt-4 px-3">
                          <h2 className="h4-fs m-0">Dr.Abhilasha Sharma</h2>
                          <p>Obstetrician and Gynecologist</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 d-lg-block d-xl-none">
                      <div className="team-b mx-4 mx-sm-0 mx-md-3 px-3 px-sm-5 px-md-0">
                        <div className="img-before text-center">
                          <LazyLoadImage
                            effect="blur"
                            className="lazy"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/team-4.webp"
                            }
                            alt="FG Group"
                          />
                        </div>
                        <div className="Digital text-center mt-md-4 mt-4 px-3">
                          <h2 className="h4-fs m-0">Dr.Harsh Gajjar</h2>
                          <p>Pediatrician and Neonatologist</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 d-lg-block d-xl-none">
                      <div className="team-b mx-4 mx-sm-0 mx-md-3 px-3 px-sm-5 px-md-0">
                        <div className="img-before text-center">
                          <LazyLoadImage
                            effect="blur"
                            className="lazy"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/team-5.webp"
                            }
                            alt="FG Group"
                          />
                        </div>
                        <div className="Digital text-center mt-md-4 mt-4 px-3">
                          <h2 className="h4-fs m-0">Dr.Jayul Patel</h2>
                          <p>Bachelor of Dental surgeon</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 d-lg-block d-xl-none">
                      <div className="team-b mx-4 mx-sm-0 mx-md-3 px-3 px-sm-5 px-md-0">
                        <div className="new-ad-img text-center">
                          <LazyLoadImage
                            effect="blur"
                            className="lazy"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/team-6.webp"
                            }
                            alt="FG Group"
                          />
                        </div>
                        <div className="Digital text-center mt-md-4 mt-4">
                          <h2 className="h4-fs m-0">DR. ISHAVER PATEL</h2>
                          <p>Bachelor in Mech Engineering/law graduate/MBA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 mt-4 d-xl-block d-none visible">
                <div className="team-b mx-5 mx-sm-0 mx-md-3">
                  <div className="team-before text-center">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/team-3.webp"
                      }
                      alt="FG Group"
                    />
                  </div>
                  <div className="Digital text-center mt-md-4 mt-4 px-3">
                    <h2 className="h4-fs m-0">Dr. Abhilasha Sharma</h2>
                    <p>Obstetrician and Gynecologist</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 mt-4 d-xl-block d-none visible">
                <div className="team-b mx-5 mx-sm-0 mx-md-3">
                  <div className="team-before fold-res text-center">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/team-4.webp"
                      }
                      alt="FG Group"
                    />
                  </div>
                  <div className="Digital text-center mt-md-4 mt-2 px-3">
                    <h2 className="h4-fs m-0">Dr. Harsh Gajjar</h2>
                    <p>Pediatrician and Neonatologist</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 mt-4 d-xl-block d-none visible">
                <div className="team-b mx-5 mx-sm-0 mx-md-3">
                  <div className=" team-before fold-res text-center">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/team-5.webp"
                      }
                      alt="FG Group"
                    />
                  </div>
                  <div className="Digital text-center mt-md-4 mt-2 px-3">
                    <h2 className="h4-fs m-0">Dr Jayul Patel</h2>
                    <p>Bachelor of Dental surgeon</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 mt-4 d-xl-block d-none visible">
                <div className="team-b mx-5 mx-sm-0 mx-md-3">
                  <div className=" team-before new-ad-img text-center">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/team-6.webp"
                      }
                      alt="FG Group"
                    />
                  </div>
                  <div className="Digital text-center mt-md-4 mt-2 px-3">
                    <h2 className="h4-fs m-0">DR. ISHAVER PATEL</h2>
                    <p>Bachelor in Mech Engineering/law graduate/MBA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid margintop">
          <div className="container faq">
            <div className="mb-5">
              <h2 className="h2-fs">FAQ's about corporate health and wellness program:</h2>
            </div>
            <div id="accordion">
              <div className="card border mt-3">
                <div className="card-header" id="headingOne">
                  <ul>
                    <li>
                      <h2 className="mb-0 h5-fs">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          What is a corporate wellness program?
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
                  className="colla"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    The absence of diseases is not wellness. Managing the
                    disease with medication and a healthy lifestyle is wellness.
                    So a wellness program educates you about nutrition and
                    promotes you towards stress reduction, weight loss, health
                    screening, and disease management.
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingTwo">
                  <ul>
                    <li>
                      <h2 className="mb-0 h5-fs">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          Which type of corporate fitness program should I
                          select for my employees?
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
                  className="colla"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    An employer must select a competitive and cost-effective
                    option for his employees. He should select the best
                    corporate wellness solution according to the needs of his
                    employees in his organization. The following points can be
                    helpful for him:
                    <div className="mt-3">
                      <p>● Conduct employee survey</p>
                      <p>● Draft out the common problems of the employees</p>
                      <p>
                        ● Prepare a chart of the diseases and the health
                        problems of the employees.
                      </p>
                      <p>
                        ● Select the best corporate wellness solution for your
                        employees.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingTwo">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          How can I motivate my employees to participate in
                          health and wellness program?
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
                  className="colla"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    The employer should clarify his interest and concerns of
                    employees with his corporate goals. He can take the
                    following steps to motivate his employees:
                    <div className="mt-3">
                      <p>
                        ● Help employees understand the corporate employee
                        wellness programs
                      </p>
                      <p>
                        ● Win the trust of the employees by making it a joint
                        effort.
                      </p>
                      <p>● Make it easily accessible for the employees.</p>
                      <p>
                        ● He should start the program with himself and the
                        management first.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingThree">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          How to evaluate the success of an employee wellness
                          program?
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
                  className="colse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    The wellness benefits are employee satisfaction and
                    retention, reduced absenteeism, and increased confidence are
                    some of the important measures to evaluate the success of a
                    workplace wellness program.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 py-3 py-md-5">
            <div className="ml-2 demoo text-center">
              <h2 style={{ color: "#00afef" }} className='h2-fs'>Conclusion</h2>
              <div className="thm-bg-clr dector mb-4"></div>
            </div>
            <div className="describe">
              <p className="mt-0">
                Our nutritionists and Dieticians at Gomzi offer diet plans after
                taking into consideration the individual health culture of the
                employees. They interact individually either online or offline
                with their clients. The Corporate Health and Wellness Program at
                Fitness with Gomzi aims to reduce health care costs, boost
                productivity and increase employee retention. This strengthens
                relations between employers and employees due to increased
                personal health and job satisfaction.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <InquiryForm imgURL={"/assets/images/img/corporate_get_in_touch.webp"} />
      <InternationalAcademy />
      <Modal show={showModal} onHide={handleClose} centered>
        <div className="modal-dialog m-0" role="document">
          <div className="modal-content bg-changes bg-fwg-popup">
            <Modal.Header className="p-0 border-bottom-0">
              <div className="text-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/book-appointment.webp"
                  }
                  className="img-fluid mb-2 ml-2"
                  width="40%"
                  alt="Book Free Appointment"
                />
                <h2 className="text-white h2-fs fs-34">
                  Book Free Appointment with Best Dietitian
                </h2>
              </div>
              <button
                type="button"
                className="closess closse-mobile p-0 bg-transparent border-0"
                onClick={handleClose}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="p-0">
                  <i className="fas fa-times text-white"></i>
                </span>
              </button>
            </Modal.Header>
            <div className="modal-body mb-0 p-0">
              <div className="text-center d-block">
                <div className="row justify-content-center mb-4">
                  <div className="col-md-11 pl-0">
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="far fa-user"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control fr"
                        name="modalName"
                        value={formData.modalName}
                        onChange={handleChange}
                        placeholder="Enter Your name"
                      />
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="fas fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control fr"
                        name="modalEmail"
                        value={formData.modalEmail}
                        onChange={handleChange}
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="fas fa-phone-alt"></i>
                      </span>
                      <input
                        type="number"
                        className="form-control fr"
                        name="modalContactNumber"
                        value={formData.modalContactNumber}
                        onChange={handleChange}
                        placeholder="Enter Your contact Number"
                      />
                    </div>
                    <div className="input-group date-in align-items-center mb-3">
                      <span>
                        <i className="fas fa-calendar-alt"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control fr"
                        name="modalSelectedDate"
                        value={formData.modalSelectedDate}
                        onChange={handleChange}
                        placeholder="Enter Date"
                      />
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span className="pr-2">
                        <i className="fas fa-clock"></i>
                      </span>
                      <select
                        className="num-employ pl-0"
                        name="modalSelectedTime"
                        value={formData.modalSelectedTime}
                        onChange={handleChange}
                      >
                        <option value="" hidden>
                          Select Time Slot
                        </option>
                        <option value="07:00">07:00 am To 08:00 am</option>
                        <option value="16:00">04:00 pm to 05:00 pm</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={bookFreeAppointmentWithBestDietitianInquiry}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <FwgFooter />
      <ContactButtonFWG />
    </>
  );
}

export default CorporateFitnessPrograms;
