import React, { useEffect, useState } from "react";
import SimpleHeader from "../components/partials/Header/simpleheader";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { sendInquiry } from "../assets/js/utils/contact-us";
import ModalVideo from "react-modal-video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import franchisePdf from "../pdf/franchise.pdf";
import FgiitFooter from "../components/partials/Footer/fgiitfooter";
import WhatsappBtn from "../components/whatshuppBtn";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";

const NextArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

function FranchisePage() {
  const canonicalUrl = window.location.href;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [availableTiming, setAvailableTiming] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");
  const [invest, setInvest] = useState("");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleApplyForInquiry = async () => {
    try {
      let modifiedMessage = `${message}\ncity: ${city} \nAvailable time: ${availableTiming} \nInvest Budget: ${budget} \nready to start? : ${invest}`;
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "Franchise Page Inquiry",
        modifiedMessage,
        window.location.href,
        null,
        null,
        null
      );
      setName("");
      setEmail("");
      setPhoneNumber("");
      setCity("");
      setAvailableTiming("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  const [formData, setFormData] = useState({
    modalName: "",
    modalEmail: "",
    modalContactNumber: "",
    modalSelectedTime: "",
    modalSelectedDate: "",
    modalMessage: "",
  });

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
  const handleOpenModal = () => {
    if (!formSubmitted) {
      setShowModal(true);
    }
  };
  const bookFreeAppointmentWithBestDietitianInquiry = async () => {
    try {
      const name = formData.modalName;
      const phoneNumber = formData.modalContactNumber;
      const email = formData.modalEmail;
      const date = formData.modalSelectedDate;
      const time = formData.modalSelectedTime;
      var message = `Hello, My name is ${name} and I want to book a free appointment with best dietitian on ${date} at ${time}.`;
      if (!name || !email || !phoneNumber) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please fill out all fields in the form.",
          confirmButtonText: "OK",
        });
        return;
      }
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "Book Free Appointment with Best Dietitian",
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
      localStorage.setItem("formSubmitted", "true");
      setFormSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const isFormSubmitted = localStorage.getItem("formSubmitted");
    if (isFormSubmitted) {
      setFormSubmitted(true);
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // Set autoplay to false to stop auto-scrolling
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // Set autoplay to false to stop auto-scrolling
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // Set autoplay to false to stop auto-scrolling
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings3 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // Set autoplay to false to stop auto-scrolling
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings4 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // Set autoplay to false to stop auto-scrolling
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>FG Group - Franchise page</title>
        <meta name="description" content="purpose and objective of the event was to motivate and nurchyo the student for full year to concern filed of health and fitness." />
        <meta name="keyword" content="" />
        <meta property="og:title" content="FG Group - Franchise page" />
        <meta property="og:description" content="purpose and objective of the event was to motivate and nurchyo the student for full year to concern filed of health and fitness." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/franchise" />
        <link rel="canonical" href={{ canonicalUrl }} />
        <meta name="google-site-verification" content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K2X4NWNEP1');`}
        </script>
        <script>{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2028783984100358');
          fbq('track', 'PageView');
          `}</script>
        <noscript>
          {`
          <img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=2028783984100358&ev=PageView&noscript=1"
          />
           `}
        </noscript>
      </Helmet>
      <WhatsappBtn
        message={"Hello, I wanted to know more about Clinical Diets details. "}
        options={{ pageRef: true }}
      />
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <SimpleHeader />

      <section className="margintop franchise-sec fwg-webinar">
        <div className="container">
          <div className="describe text-center mb-3">
            <h1>
              Start Your Own Fitness Business with Just{" "}
              <span
                style={{ color: "#91C214", vectorEffect: "non-scaling-stroke" }}
              >
                ₹5 Lakh INR
              </span>
            </h1>
            <div className="thm-bg-clr dector mb-4 mb-md-2"></div>
          </div>
          <div className="text-center">
            <h2 className="h2-fs h1 franchisebig">
              <strong className="countermainhead subtitle-text-20">
                Guaranteed ROI in 3 Months
              </strong>
            </h2>
          </div>

          <div className="video-wrapper text-center">
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/ZGHKI31EXFg?si=heT07O4SduzH3wg3"
              allowFullScreen
              title="Fitness Business Video"
            ></iframe>
          </div>
          {formSubmitted ? (
            <>
              <div className="text-center mt-5" style={{ zIndex: 10000 }}>
                <Button
                  className="animated-icon"
                  style={{
                    backgroundColor: "rgb(115,200,40)",
                    color: "white",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "20px",
                    padding: "15px 90px",
                  }}
                  href={franchisePdf}
                  download
                >
                  {/* <FontAwesomeIcon icon={faDownload} className="mr-2" /> */}
                  Download PDF Now
                </Button>
              </div>
            </>
          ) : (
            <>
              {/* <div className="text-center mt-5">
                <Button
                  onClick={handleOpenModal}
                  className="animated-buttonnn"
                  style={{
                    backgroundColor: "rgb(115,200,40)",
                    color: "white",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "20px",
                    padding: "15px 100px",
                  }}
                >
                  <FontAwesomeIcon icon={faDownload} className="mr-2" />
                  Download PDF
                </Button>
              </div> */}

              <div className="d-flex justify-content-center align-items-center">
                <img
                  class="arrow-image up-arrow"
                  src="../assets/images/webinar/up.png"
                  alt="Up Arrow"
                />
                <div className="button-container mt-5 mb-3">
                  <Button
                    onClick={handleOpenModal}
                    className="animated-buttonnn"
                    style={{
                      backgroundColor: "rgb(115,200,40)",
                      color: "white",
                      fontWeight: "bold",
                      border: "none",
                      borderRadius: "20px",
                      padding: "15px 100px",
                    }}
                  >
                    {/* <FontAwesomeIcon icon={faDownload} className="mr-2" /> */}
                    Download PDF
                  </Button>
                </div>
                <img
                  class="arrow-image down-arrow"
                  src="../assets/images/webinar/down.png"
                  alt="Down Arrow"
                />
              </div>
            </>
          )}

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
                    <h2 className="h2-fs text-white">
                      Book Free Appointment with Best Dietitian
                    </h2>
                  </div>
                  <button
                    type="button"
                    className="closess closse-mobile p-0 bg-transparent border-0"
                    onClick={handleClose}
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
                            placeholder="Enter Your Name"
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
                            placeholder="Enter Your Contact Number"
                          />
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
        </div>
      </section>
      <section
        className="our-franchise-stories"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="franchisees-container">
          <div className="covid text-center mb-4">
            <h2 className="h2-fs text-black">
              Our Franchisees{" "}
              <span className="text-green-color-franchise">
                Success Stories
              </span>
            </h2>
            <div className="thm-bg-clr dector mb-4 mb-md-2"></div>
          </div>
          <div className="franchisees-grid">
            <div className="franchisee-card">
              <img src="/assets/images/landing-page/vesu.webp" alt="vesu" />
              <div className="franchisee-info">
                <h2 className="h5-fs">Started in 2018</h2>
                <p style={{ fontWeight: "bold", color: "green" }}>
                  Earning 10 lakh/month
                </p>
              </div>
            </div>

            <div className="franchisee-card">
              <img src="/assets/images/landing-page/adajan.webp" alt="adajan" />
              <div className="franchisee-info">
                <h2 className="h5-fs">Started in 2020</h2>
                <p style={{ fontWeight: "bold", color: "green" }}>
                  Earning 7.5 lakh/month
                </p>
              </div>
            </div>
            <div className="franchisee-card">
              <img src="/assets/images/landing-page/baroda.webp" alt="baroda" />
              <div className="franchisee-info">
                <h2 className="h5-fs">Started in 2023</h2>
                <p style={{ fontWeight: "bold", color: "green" }}>
                  Earning 5 lakh/month
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <div className="covid text-center mb-4">
            <h2 className="h2-fs">
              WHY <span className="text-green-color-franchise">CHOOSE</span> US?
            </h2>
            <div className="thm-bg-clr dector mb-4 mb-md-2"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card card-green">
                <div className="icon-container">
                  <i className="fas fa-dollar-sign icon"></i>
                </div>
                <h2 className="h4-fs">Affordable Investment</h2>
                <p>
                  Start your franchise with a total investment of ₹5 Lakh INR.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-green">
                <div className="icon-container">
                  <i className="fas fa-chart-pie icon"></i>
                </div>
                <h2 className="h4-fs">Breakdown</h2>
                <p>
                  ₹4 Lakh INR for setup cost and ₹1 Lakh INR as the franchise
                  fee.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-blue">
                <div className="icon-container">
                  <i className="fas fa-rocket icon"></i>
                </div>
                <h2 className="h4-fs">Rapid ROI</h2>
                <p>Achieve your return on investment within just 3 months.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-blue">
                <div className="icon-container">
                  <i className="fas fa-chart-line icon"></i>
                </div>
                <h2 className="h4-fs">Double Your Earnings</h2>
                <p>
                  We guarantee 2x profit, making this opportunity even more
                  rewarding.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card card-green">
                <div className="icon-container">
                  <i className="fas fa-hands-helping icon"></i>
                </div>
                <h2 className="h4-fs">Comprehensive Support</h2>
                <p>
                  From setup to success, we provide full training, marketing,
                  and operational assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brandpower-section p-8 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800">
        <div className="container mx-auto">
          <div className="covid text-center mb-4">
            <h2 className="h2-fs">
              Our{" "}
              <span className="text-green-color-franchise">Brand Power</span>
            </h2>
            <div className="thm-bg-clr dector mb-4 mb-md-2"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="instagram-card bg-white rounded-2xl shadow-xl p-6 transition-transform duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden group">
              <h2 className="h3-fs p-3 font-semibold text-xl text-center text-pink-600 group-hover:text-pink-800 transition-colors duration-300">
                Instagram
              </h2>
              <div className="relative instagram-photo mb-2 overflow-hidden rounded-xl">
                <img
                  src="/assets/images/landing-page/instgram.png"
                  alt="Instagram Post"
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="followers text-center">
                <a
                  href="https://www.instagram.com/fgiit.surat/" aria-label="Fg Group"
                  className="follow-btn text-primary flex items-center justify-center gap-2 hover:text-pink-500 transition-colors duration-300 animate-fade-in"
                >
                  <i className="fab fa-instagram fa-lg text-pink-500"></i>
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </div>

            <div className="youtube-card bg-white rounded-2xl shadow-xl p-6 transition-transform duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden group">
              <h2 className="h3-fs font-semibold text-xl p-3 text-center text-red-600 group-hover:text-red-800 transition-colors duration-300">
                YouTube
              </h2>
              <div className="relative youtube-video mb-6 overflow-hidden rounded-xl">
                <iframe
                  className="w-100 h-300 rounded-xl transition-transform duration-500 group-hover:scale-110"
                  src="https://www.youtube.com/embed/6uyrkB9iPzQ?si=VeCxSdooNZzzbbxk"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  height={210}
                ></iframe>
                <div className="absolute bottom-4 left-4 bg-white/80 rounded-full px-4 py-2 shadow-lg flex items-center space-x-2 animate-fade-in">
                  <i className="fas fa-eye text-red-500 animate-pulse"></i>
                  <span className="text-gray-800 font-medium">1.3M Views</span>
                </div>
              </div>

              <div className="relative youtube-video mb-6 overflow-hidden rounded-xl">
                <iframe
                  className="w-100 h-300 rounded-xl transition-transform duration-500 group-hover:scale-110"
                  src="https://www.youtube.com/embed/tnGfI5MgfXM?si=u8z4HHLAIGYU5otj"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  height={210}
                ></iframe>
                <div className="absolute bottom-4 left-4 bg-white/80 rounded-full px-4 py-2 shadow-lg flex items-center space-x-2 animate-fade-in">
                  <i className="fas fa-eye text-red-500 animate-pulse"></i>
                  <span className="text-gray-800 font-medium">788K Views</span>
                </div>
              </div>
              <div className="subscribers text-center">
                <div className="font-medium text-gray-700 text-lg mb-2 group-hover:text-gray-900 transition-colors duration-300">
                  87.4K Subscribers
                </div>
                <a
                  href="https://www.youtube.com/@GautamJaniOffcial" aria-label="Fg Group"
                  className="subscribe-btn text-primary flex items-center justify-center gap-2 hover:text-red-500 transition-colors duration-300 animate-fade-in"
                >
                  <i className="fab fa-youtube fa-lg text-red-500"></i>
                  <span>Subscribe on YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid bg-light customcounter">
          <h2 className="covid text-center h1-fs">
            Our <span className="text-green-color-franchise">Services</span>
            <div className="thm-bg-clr dector mb-4 mb-md-2"></div>
          </h2>

          <div className="px-0">
            <div className="pt-5">
              <div>
                <div className="covid text-center">
                  <h2 className="h2-fs">1 : Fitness With Gomzi</h2>
                </div>
                <div className="covid text-center">
                  <p>Provides fitness transformations</p>
                </div>
              </div>
              <div className="slider-container">
                <Slider {...settings} dots={false} className="smooth-slider">
                  <div className="item">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/t4.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/41.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/t1.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/t7.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/t2.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/t5.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/t8.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/landing-page/t3.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="customcounter bg-light">
        <div className="container-fluid">
          <div className="pt-3">
            <div>
              <div className="demoo text-center">
                <h2 className="h2-fs">2 : FGIIT</h2>
              </div>
              <div className="demoo text-center">
                <p>Provides fitness educational courses</p>
              </div>
            </div>
            <div className="slider-container">
              <Slider
                {...settings1}
                dots={false}
                arrows={true}
                className="smooth-slider"
              >
                <div className="item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/new-1.2.webp"
                    }
                    alt="certi"
                    className="lazy"
                    width="100%"
                    style={{ borderRadius: "5px" }}
                  />
                </div>

                <div className="item">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fgiit/new-1.webp"
                    }
                    alt="certi"
                    className="lazy"
                    width="100%"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/cpt-certi-7.webp"
                    }
                    alt="certi"
                    className="lazy"
                    width="100%"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/landing-page/b11.webp"
                    }
                    alt="certi"
                    className="lazy"
                    width="100%"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/landing-page/b12.webp"
                    }
                    alt="certi"
                    className="lazy"
                    width="100%"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/landing-page/b13.webp"
                    }
                    alt="certi"
                    className="lazy"
                    width="100%"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/landing-page/b14.webp"
                    }
                    alt="certi"
                    className="lazy"
                    width="100%"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/cpt-certi-8.webp"
                    }
                    alt="certi"
                    className="lazy"
                    width="100%"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="item">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/cpt-certi-6.webp"
                    }
                    alt="certi"
                    className="lazy"
                    width="100%"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="customcounter">
        <div className="container-fluid">
          <div className="pt-3">
            <div className="demoo text-center">
              <h2 className="h2-fs">3 : Gomzi Nutrition</h2>
            </div>
            <div className="demoo text-center">
              <p>Provides healthy supplements</p>
            </div>
          </div>
          <div className="slider-container">
            <Slider {...settings2} dots={false} className="smooth-slider">
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/landing-page/n1.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/landing-page/n2.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/landing-page/n3.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/landing-page/n4.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/landing-page/n5.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/landing-page/n6.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/landing-page/a4.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/landing-page/a5.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/landing-page/a6.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="customcounter">
        <div className="container-fluid">
          <div className="pt-3">
            <div className="demoo text-center">
              <h2 className="h2-fs">4 : Gomzi Equipments</h2>
            </div>
            <div className="demoo text-center">
              <p>Designs & manufacture gym equipments</p>
            </div>
          </div>
          <div className="slider-container">
            <Slider {...settings3} dots={false} className="smooth-slider">
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/equipment/power-gauge-inner-1.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/equipment/power-gauge-inner-3.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/equipment/cable-cross-over-inner-2.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/equipment/cable-cross-over-inner-4.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/equipment/chest-press-inner-1.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/equipment/dumbbell-rack-with-dumbbell-inner-2.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/equipment/chest-press-inner-3.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/equipment/stationary-bikes-inner-2.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/equipment/treadmill-inner-2.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/equipment/back-blaster-inner-1.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="customcounter">
        <div className="mb-4">
          <div className="pt-3">
            <div className="demoo text-center">
              <h2 className="h2-fs">5 : Gomzi Consulting Services</h2>
            </div>
            <div className="demoo text-center">
              <p>
                Provides marketing, management & finance support to fitness
                businesses
              </p>
            </div>
          </div>
          <div className="slider-container">
            <Slider {...settings4} dots={false} className="smooth-slider">
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/landing-page/1.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/landing-page/2.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/landing-page/3.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/landing-page/4.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/landing-page/5.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
              <div className="item">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/landing-page/6.webp"
                  }
                  alt="Offline Batch"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section id="#contact" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container-fluid">
          <div className="container blog2">
            <div className="covid mt-5">
              <h2 className="h2-fs text-center text-333-color">
                We're <span className="m-0 text-blue-color">Here To Help</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row position-relative">
              <div className="col-lg-6 image-fix">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/contact.webp"
                  }
                  width="100%"
                  alt="Contact"
                  loading="lazy"
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

                <p className="mb-0 mt-4">City</p>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="form-control fr mt-2"
                  placeholder="Enter City"
                />

                <p className="mb-0 mt-4">Available Timing</p>
                <input
                  type="datetime-local"
                  value={availableTiming}
                  onChange={(e) => setAvailableTiming(e.target.value)}
                  className="form-control fr mt-2"
                  placeholder="Enter Available Timing (e.g., 9 AM - 5 PM)"
                />
                <p className="mb-0 mt-4">What is your investment budget?</p>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="mt-2 form-control fr"
                >
                  <option value="" hidden>
                    Select budget
                  </option>
                  <option value="Upto 5 lakh inr">Upto 5 lakh inr</option>
                  <option value="5 to 10 lakh inr">5 to 10 lakh inr</option>
                  <option value="Upto 10 lakh inr">Upto 10 lakh inr</option>
                  <option value="Upto 25 lakh inr">Upto 25 lakh inr</option>
                  <option value="Upto 50 lakh inr">Upto 50 lakh inr</option>
                  <option value="Upto 1 Cr inr">Upto 1 Cr inr</option>
                </select>
                <p className="mb-0 mt-4">When you are ready to start?</p>
                <select
                  value={invest}
                  onChange={(e) => setInvest(e.target.value)}
                  className="mt-2 form-control fr"
                >
                  <option value="" hidden>
                    Select
                  </option>
                  <option value="Immediately">Immediately</option>
                  <option value="within a month">within a month</option>
                  <option value="after a month">after a month</option>
                  <option value="within a year">within a year</option>
                  <option value="after a year">after a year</option>
                </select>
                <p className="mb-0 mt-4">Write Your Message</p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control fr mt-2 text-dark"
                  placeholder="Enter Your Message"
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

      <div>
        <a
          href="/franchise-call"
          className="w-100"
          style={{
            backgroundColor: "rgb(115,200,40)",
            color: "white",
            fontWeight: "bold",
            boxShadow: "none",
            position: "fixed",
            zIndex: "9999",
            bottom: "0px",
            padding: "15px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faBook} className="mr-2 footer-icon" />
          Book Your Free Demo Session
        </a>
      </div>

      <FgiitFooter />
    </>
  );
}

export default FranchisePage;
