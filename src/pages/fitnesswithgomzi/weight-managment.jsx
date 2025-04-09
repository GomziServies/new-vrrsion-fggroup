import React, { useState } from "react";
import "../../assets/css/home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CountUp from "react-countup";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import FwgFooter from "../../components/partials/Footer/fwgfooter";
import AddIcon from "@mui/icons-material/Add";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { publicAxiosInstance } from "../../assets/js/config/api";
import apiConfig from "../../assets/js/config/apiConfig";
import ModalVideo from "react-modal-video";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FlexibleTransformationRtpTwo from "../../components/fwg/flexible-transformation-rtp-two";
import { Helmet } from "react-helmet";

function FlexibleWeightManagment() {
  const canonicalUrl = window.location.href;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    modalName: "",
    modalEmail: "",
    modalContactNumber: "",
  });

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
      amount: "29900", // 299 INR.
      currency: "INR",
      name: "RTP-2.0 Weight Management Plan",
      description: "RTP-2.0 Weight Management Plan",
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
      .post("/guest-payment/buy-weight-management-plan", payload)
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

  // const openVideoModal = (url) => {
  //   setIsVideoOpen(true);
  //   setVideoUrl(url);
  // };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };
  return (
    <>
      <Helmet>
        <title>Achieve Your Goals with Expert Weight Management Solutions</title>
        <meta name="description" content="Achieve your health goals with expert weight management solutions. Start your journey today for sustainable results and wellness!" />
        <meta name="keyword" content="weight management program, weight management, fitness plans, diet plans, weight loss, weight gain, weight loss solution, best weight loss program, lose weight fast, weight loss programs, mass gainer, weight loss supplements, best way to lose weight, meal plan for weight loss, best weight loss supplements, mediterranean diet meal plan, fastest way to lose weight, best diet to lose weight, weight loss clinic, noom weight loss, found weight loss, best way to lose belly fat, rybelsus for weight loss, metabolism booster, fasting for weight loss, weight loss shots, diet plan for weight loss, healthy meals for weight loss, weight loss diet, diet meal plans, menopause weight gain, dash diet meal plan, weight loss plan, quickest way to lose weight, diabetic diet plan, alli weight loss, juniper weight loss, lose belly fat, keto diet meal plan, best way to lose weight fast, healthy meal plans, best supplements for weight loss female, fastest way to lose belly fat, weight gain supplements, quick weight loss, best weight loss, weight loss drinks" />
        <meta property="og:title" content="Achieve Your Goals with Expert Weight Management Solutions" />
        <meta property="og:description" content="Achieve your health goals with expert weight management solutions. Start your journey today for sustainable results and wellness!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fitnesswithgomzi/weight-managment" />
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
     weight management program, weight management, fitness plans, diet plans, weight loss, weight gain, weight loss solution, best weight loss program, lose weight fast, weight loss programs, mass gainer, weight loss supplements, best way to lose weight, meal plan for weight loss, best weight loss supplements, mediterranean diet meal plan, fastest way to lose weight, best diet to lose weight, weight loss clinic, noom weight loss, found weight loss, best way to lose belly fat, rybelsus for weight loss, metabolism booster, fasting for weight loss, weight loss shots, diet plan for weight loss, healthy meals for weight loss, weight loss diet, diet meal plans, menopause weight gain, dash diet meal plan, weight loss plan, quickest way to lose weight, diabetic diet plan, alli weight loss, juniper weight loss, lose belly fat, keto diet meal plan, best way to lose weight fast, healthy meal plans, best supplements for weight loss female, fastest way to lose belly fat, weight gain supplements, quick weight loss, best weight loss, weight loss drinks
      </p>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
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
                      "/assets/images/fwg/fitness-plan-rtp-2.0.webp"
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
                    Weight Management Program - RTP-2.0
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
                <div className="price mb-2">
                  <p className="mt-2 fs-30">
                    ₹299 + 18%GST
                  </p>
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
                    className="mt-3"
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
                    className="mt-3"
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
                    className="mt-3"
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
                    className="mt-3"
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
                    className="mt-3"
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
                    className="mt-3"
                  >
                    corporate events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FlexibleTransformationRtpTwo />
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

export default FlexibleWeightManagment;
