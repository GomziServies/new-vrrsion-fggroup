import React, { useState, useEffect } from "react";
import "../../assets/css/home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Form } from "react-bootstrap";
import CountUp from "react-countup";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import FwgFooter from "../../components/partials/Footer/fwgfooter";
import AddIcon from "@mui/icons-material/Add";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { publicAxiosInstance } from "../../assets/js/config/api";
import apiConfig from "../../assets/js/config/apiConfig";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

function FlexibleCorporateWellness() {
  const canonicalUrl = window.location.href;
  const [quantity, setQuantity] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    modalName: "",
    modalEmail: "",
    modalContactNumber: "",
  });

  const minusQuantity = () => {
    if (quantity > 5) {
      setQuantity(quantity - 5);
      updatePrice(quantity - 5);
    }
  };

  const plusQuantity = () => {
    setQuantity(quantity + 5);
    updatePrice(quantity + 5);
  };

  const updatePrice = (newQuantity) => {
    var totalPriceElement = document.getElementById("totalPrice");
    var pricePerPerson = 99;

    var totalPrice = pricePerPerson * newQuantity;

    totalPriceElement.innerHTML = totalPrice;
  };

  useEffect(() => {
    updatePrice(quantity);
  }, [quantity]);

  const handlePopupClose = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fitnessPlanBuy = async () => {
    // Ensure that totalPrice and totalPersonsInput are retrieved correctly
    var totalPriceElement = document.getElementById("totalPrice");

    if (!totalPriceElement) {
      return Swal.fire({
        title: "Error",
        text: "Total price element not found",
        icon: "error",
      });
    }

    // Access the innerText property to get the value
    var totalPrice = totalPriceElement.innerText;

    const name = formData.modalName;
    const phoneNumber = formData.modalContactNumber;
    const email = formData.modalEmail;
    if (!name || name === "") {
      return Swal.fire({
        title: "Error",
        text: "Name is at least required",
        icon: "error",
      });
    }
    new window.Razorpay({
      key: apiConfig.RAZORPAY_MERCHANT_ID, // Enter the Key ID generated from the Dashboard
      amount: totalPrice * 100, // 999 INR.
      currency: "INR",
      name: "RTP-4.0 Corporate Wellness",
      description: "RTP-5.0 Corporate Wellness",
      prefill: {
        name: name,
        email: email,
        contact: phoneNumber,
      },
      notes: {
        name: name,
        source: window.location.origin + window.location.pathname,
      },
      hidden: {
        contact: false,
        email: false,
      },
      handler: bodybuildingEntryFeesSuccess,
    }).open();
  };

  const bodybuildingEntryFeesSuccess = async (razorpayResponse) => {
    let payload = { payment_id: razorpayResponse.razorpay_payment_id };
    setFormData({
      modalName: "",
      modalEmail: "",
      modalContactNumber: "",
    });
    setShowModal(false);
    publicAxiosInstance
      .post("/guest-payment/corporate-wellness-plan", payload)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Our Team will Contact you soon for more details.",
          text:
            "Here is your payment ID: " + response.data.data.payment_id + ".",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error",
          text:
            error.response?.data?.message ||
            "Failed to book your seat in Bodybuilding Competition. Contact us to get a refund.",
          icon: "error",
        });
      });
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Helmet>
        <title>Top Corporate Wellness Program for a Healthier Workplace</title>
        <meta name="description" content="Enhance your workplace with a top corporate wellness program. Improve employee health and productivity—get started today!" />
        <meta name="keyword" content="fitness plans, corporate wellness program, corporate wellness, wellness program, wellness, corporate health program, employee health program, workout plan, wellness center, workout routine, gym workout plan, wellness living, workout programs, wellbeing nutrition, employee wellness programs, weight loss workout plan, home workout plan, health coaching, workout programs for women, wellness formula, best at home workout program, workout programs for men, wellness activities for employees, health and wellness, workplace wellness, good health, workplace wellness programs, employee wellness, wellbeing in the workplace, Office Wellness Programs, Best Corporate Wellness Programs, Corporate Fitness Program, Health and Wellbeing, Mental Wellness, Fitness Training Programs, Online Wellness Coaching, Employee Wellbeing, Workplace Health and Wellness, Company Wellness Programs, Health and Wellness Coaching, Personalized Wellness Program, Workplace Fitness Programs, Online Employee Wellness Program, Corporate Wellness Trends, Affordable Corporate Wellness Plans, Office Health and Fitness Programs" />
        <meta property="og:title" content="Top Corporate Wellness Program for a Healthier Workplace" />
        <meta property="og:description" content="Enhance your workplace with a top corporate wellness program. Improve employee health and productivity—get started today!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fitnesswithgomzi/corporate-wellness-program" />
        <link rel="canonical" href={{ canonicalUrl }} />
        <meta name="google-site-verification" content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K2X4NWNEP1');`}
        </script>
        <script>
          {`
        !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1312968359280007');
            fbq('track', 'PageView');
      `}
        </script>
        <noscript>
          {
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1312968359280007&ev=PageView&noscript=1" />'
          }
        </noscript>
      </Helmet>
      <p className="d-none"> 
     fitness plans, corporate wellness program, corporate wellness, wellness program, wellness, corporate health program, employee health program, workout plan, wellness center, workout routine, gym workout plan, wellness living, workout programs, wellbeing nutrition, employee wellness programs, weight loss workout plan, home workout plan, health coaching, workout programs for women, wellness formula, best at home workout program, workout programs for men, wellness activities for employees, health and wellness, workplace wellness, good health, workplace wellness programs, employee wellness, wellbeing in the workplace, Office Wellness Programs, Best Corporate Wellness Programs, Corporate Fitness Program, Health and Wellbeing, Mental Wellness, Fitness Training Programs, Online Wellness Coaching, Employee Wellbeing, Workplace Health and Wellness, Company Wellness Programs, Health and Wellness Coaching, Personalized Wellness Program, Workplace Fitness Programs, Online Employee Wellness Program, Corporate Wellness Trends, Affordable Corporate Wellness Plans, Office Health and Fitness Programs
      </p>
      <SimpleHeader />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/fitness-plan-rtp-3.0.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="Plan Introduction"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="tabata">
                  <h2 className="h2-fs mt-2 mt-md-0">
                    Corporate Wellness Program - RTP-4.0
                  </h2>
                  <p>Plan Duration : 1 Months</p>
                </div>
                <div className="price">
                  <h2 className="my-1 h2-fs">Mentors</h2>
                </div>
                <div className="row">
                  <div className="col-lg-12 calc">
                    <ul>
                      <li>
                        <div>
                          <img
                            className="lazy mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/blue.webp"
                            }
                            alt="FG Group"
                          />
                          <p><a href="http://gcsconsultant.fggroup.in/gautam_jani_official" style={{ color: 'black', textDecoration: 'underline' }}>Dr. Gautam Jani</a></p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            className="lazy mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/yellow.webp"
                            }
                            alt="FG Group"
                          />
                          <p> Dt.Foram Desai</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <div className="price mt-sm-3">
                          <p className="mt-2 prices">
                            ₹<span id="totalPrice">totalPrice</span>/-
                          </p>
                          <span className="fs-30">Only</span>
                        </div>
                      </div>
                      <div className="col-sm-6 form_book">
                        <div className="meal">
                          <p className="my-3">Quantity:</p>
                          <div className="d-flex">
                            <i
                              className="fas fa-minus mr-3 mt-3 text-dark"
                              onClick={minusQuantity}
                            ></i>
                            <input
                              type="number"
                              value={quantity}
                              min="5"
                              readOnly
                            />
                            <i
                              className="fas fa-plus ml-3 mt-3 text-dark"
                              onClick={plusQuantity}
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="meal">
                  <button
                    className="btn px-4"
                    onClick={handleOpenModal}
                    style={{
                      backgroundColor: "#416aff",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#fff",
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="covid mb-4 text-center">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">Fitness Plans</span>
                Include
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/step-55.webp"
                    }
                    style={{ width: "60px", height: "60px" }}
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-5">Flexibility in Diet Plans</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/step-11.webp"
                    }
                    style={{ width: "60px", height: "60px" }}
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-5">Easy Diet Recipe</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy img-fluid"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/step-44.webp"
                    }
                    style={{ width: "60px", height: "60px" }}
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-5">Intensive Exercise</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/bodybuilder.webp"
                    }
                    style={{ width: "60px", height: "60px" }}
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-5">Easy Exercise Video</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/icon/recipe.png"
                    }
                    style={{ width: "60px", height: "60px" }}
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-5">Calorie Tracking and Monitoring</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/group-chat.webp"
                    }
                    style={{ width: "60px", height: "60px" }}
                    alt="FG Group"
                  />
                  <h2 className="h5-fs mt-5">Chat support</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid p-0">
          <div className="container">
            <div className="col-12">
              <div className="demoo mb-4 text-center">
                <h2 className='h2-fs' style={{ color: "#000000" }}>Achievements</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-6 text-center">
                <CountUp
                  end={8000}
                  duration={3}
                  separator=","
                  className="counter countertext"
                />
                <AddIcon
                  style={{
                    fontWeight: "bold",
                    color: "#ff8643",
                    fontSize: "33px",
                  }}
                />
                <div className="tabata">
                  <p
                    style={{ color: "#000000", fontWeight: "bold" }}
                    className="mt-1 mb-3"
                  >
                    Transformation
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-6 text-center">
                <CountUp
                  end={4000}
                  duration={3}
                  separator=","
                  className="counter countertext"
                />
                <AddIcon
                  style={{
                    fontWeight: "bold",
                    color: "#ff8643",
                    fontSize: "33px",
                  }}
                />
                <div className="tabata">
                  <p
                    style={{ color: "#000000", fontWeight: "bold" }}
                    className="mt-1 mb-3"
                  >
                    weight loss
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-6 text-center">
                <CountUp
                  end={2000}
                  duration={3}
                  separator=","
                  className="counter countertext"
                />
                <AddIcon
                  style={{
                    fontWeight: "bold",
                    color: "#ff8643",
                    fontSize: "33px",
                  }}
                />
                <div className="tabata">
                  <p
                    style={{ color: "#000000", fontWeight: "bold" }}
                    className="mt-1 mb-3"
                  >
                    Clinical
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-6 text-center">
                <CountUp
                  end={1000}
                  duration={3}
                  separator=","
                  className="counter countertext"
                />
                <AddIcon
                  style={{
                    fontWeight: "bold",
                    color: "#ff8643",
                    fontSize: "33px",
                  }}
                />
                <div className="tabata">
                  <p
                    style={{ color: "#000000", fontWeight: "bold" }}
                    className="mt-1 mb-3"
                  >
                    prep coaching
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-6 text-center">
                <CountUp
                  end={1000}
                  duration={3}
                  separator=","
                  className="counter countertext"
                />
                <AddIcon
                  style={{
                    fontWeight: "bold",
                    color: "#ff8643",
                    fontSize: "33px",
                  }}
                />
                <div className="tabata">
                  <p
                    style={{ color: "#000000", fontWeight: "bold" }}
                    className="mt-1 mb-3"
                  >
                    Weight gain
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-6 text-center">
                <CountUp
                  end={50}
                  duration={3}
                  separator=","
                  className="counter countertext"
                />
                <AddIcon
                  style={{
                    fontWeight: "bold",
                    color: "#ff8643",
                    fontSize: "33px",
                  }}
                />
                <div className="tabata">
                  <p
                    style={{ color: "#000000", fontWeight: "bold" }}
                    className="mt-1 mb-3"
                  >
                    corporate events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container-fluid bg-light">
          <div className="container px-0 py-5">
            <div className="pb-5">
              <div className="py-md-5">
                <div className="covid text-center">
                  <h2 className="h2-fs">
                    <span className="m-0 text-blue-color">
                      global journey of{" "}
                    </span>
                    transformation
                  </h2>
                </div>
                <div className="thm-bg-clr dector mb-4"></div>
                <div className="col-md-12">
                  <div className="world-ca d-none d-md-block">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/travel.webp"
                      }
                      className="img-fluid"
                      alt="FG Group"
                    />
                  </div>
                </div>
              </div>
              <div className="new-owl-btn">
                <OwlCarousel
                  dots={false}
                  nav
                  loop
                  autoplay
                  id="fwg-owl"
                  className="owl-theme mb-5"
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
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/kinjal-prastagiya.webp"
                      }
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/30.webp"
                      }
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/inter-6.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/daksha-before.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/inter-3.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                  <div className="item mx-3">
                    <img
                      className="img-fluid"
                      style={{
                        borderRadius: "5px",
                        boxShadow:
                          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                      }}
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/42.webp"
                      }
                      alt="weight loss transformation"
                    />
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modal  */}
      <Modal show={showModal} onHide={handlePopupClose} centered>
        <div className="modal-content">
          <Modal.Header closeButton>
            <Modal.Title>
              <h2 className="h4-fs modal-title">Fill Details</h2>
            </Modal.Title>
          </Modal.Header>
          <div className="modal-body">
            <Form>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  className="form-control mt-2"
                  name="modalName"
                  value={formData.modalName}
                  onChange={handleChange}
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  className="form-control mt-2"
                  name="modalEmail"
                  value={formData.modalEmail}
                  onChange={handleChange}
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input
                  className="form-control mt-2"
                  name="modalContactNumber"
                  value={formData.modalContactNumber}
                  onChange={handleChange}
                  placeholder="Enter Your Contact Number"
                />
              </div>
            </Form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={fitnessPlanBuy}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
      <FwgFooter />
    </>
  );
}

export default FlexibleCorporateWellness;
