import React, { useEffect, useState } from "react";
import FwgHeader from "../../components/partials/Header/fwgheader";
import FwgFooter from "../../components/partials/Footer/fwgfooter";
import CountUp from "react-countup";
import AddIcon from "@mui/icons-material/Add";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { sendInquiry } from "../../assets/js/utils/contact-us";
import ModalVideo from "react-modal-video";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import Faqs from "../../components/fwg/faqs";
import InquiryForm from "../../components/fwg/inquiry-form";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ExerciseVideo from "../../components/fwg/bg-video";
import "../../assets/css/fwg.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";
import ChatBotFWG from "../../components/chat-bot-fwg";
import ProgramReviews from "../../components/fwg/programReviews";

function FitnessPrograms() {
  const canonicalUrl = window.location.href;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [formData, setFormData] = useState({
    consultingName: "",
    consultingEmail: "",
    consultingMobile: "",
    consultingGender: "",
    consultingDate: "",
    consultingAge: "",
  });

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const bookFreeAppointmentWithBestDietitianInquiry = async () => {
    try {
      const name = formData.consultingName;
      const phoneNumber = formData.consultingMobile;
      const email = formData.consultingEmail;
      const date = formData.consultingDate;
      const age = formData.consultingAge;
      const gender = formData.consultingGender;
      var message = "Book a consultation";
      message += `\n  \nGender: ${gender} \nAge: ${age} \nBooked Date: ${date}`;
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "FWG Main Page Inquiry",
        message,
        window.location.href,
        null,
        null,
        null
      );
      setFormData({
        consultingName: "",
        consultingEmail: "",
        consultingMobile: "",
        consultingGender: "",
        consultingDate: "",
        consultingAge: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const $ = window.$;
    $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fas fa-arrow-right"></i>');
  }, []);

  const [showMore, setShowMore] = useState(Array(5).fill(false));

  const toggleReadMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };
  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  return (
    <>
      <Helmet>
        <title>Weight Loss Programs | FitnessWithGomzi | FG group</title>
        <meta
          name="description"
          content="Control your weight and get healthier today with our different types of fitness transformation programs meeting your specific needs."
        />
        <meta
          name="keyword"
          content="fitness, weight loss, weight loss program, weight, loss, program, weight loss exercise, best weight loss program, weight loss plans, weight loss programs near me, weight loss diet, fat burning, fat loss, fat loss diet, weight loss treatment, weight loss programmes, best weight loss program near me, good weight loss program, weight reduction programs, fitness programs, best gym, fitness classes near me, lose weight fast, meal plan for weight loss, diet plan for weight loss, rapid weight loss, quick weight loss diet, weight loss food programs, vegan weight loss meal plan, best diet plan for weight loss for female, weight loss tips, weight loss foods, weight loss workout plan, easy weight loss tips, weight loss transformation, weight loss motivation, intermittent fasting weight loss, weight loss drinks, weight loss surgery, home workout for weight loss, gym workouts for weight loss, best exercise for weight loss, weight loss remedies, herbal weight loss products, best weight loss supplements, keto diet weight loss, weight loss shakes, weight loss detox"
        />
        <meta
          property="og:title"
          content="Weight Loss Programs | FitnessWithGomzi | FG group"
        />
        <meta
          property="og:description"
          content="Control your weight and get healthier today with our different types of fitness transformation programs meeting your specific needs."
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fitnesswithgomzi/fitness-programs"
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
      fitness, weight loss, weight loss program, weight, loss, program, weight loss exercise, best weight loss program, weight loss plans, weight loss programs near me, weight loss diet, fat burning, fat loss, fat loss diet, weight loss treatment, weight loss programmes, best weight loss program near me, good weight loss program, weight reduction programs, fitness programs, best gym, fitness classes near me, lose weight fast, meal plan for weight loss, diet plan for weight loss, rapid weight loss, quick weight loss diet, weight loss food programs, vegan weight loss meal plan, best diet plan for weight loss for female, weight loss tips, weight loss foods, weight loss workout plan, easy weight loss tips, weight loss transformation, weight loss motivation, intermittent fasting weight loss, weight loss drinks, weight loss surgery, home workout for weight loss, gym workouts for weight loss, best exercise for weight loss, weight loss remedies, herbal weight loss products, best weight loss supplements, keto diet weight loss, weight loss shakes, weight loss detox
      </p>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <FwgHeader />
      <ChatBotFWG />
      <WhatsappHeaderApp
        message={
          "Hello, I wanted to know more about Rapid Transformation Programs details. "
        }
        options={{ pageRef: true }}
      />
      <section className="home-page-fwg-new" id="fwg-section-1">
        <div className="banner-container">
          <div className="row mx-0 align-items-center">
            <div className="col-md-4 images desktop-above-only">
              <LazyLoadImage
                effect="blur"
                src={process.env.PUBLIC_URL + "/assets/images/fwg/fwg-main.png"}
                alt="Banner"
                className="banner-image"
              />
            </div>
            <div className="col-md-8 px-0 text-content">
              <div className="banner-text-margin ml-5">
                <div className="col-70">
                  <h1 className="banner-title animate-fade-in">
                    India's Biggest Transformation Center
                  </h1>
                  <p className="banner-description animate-slide-in">
                    With Our Variety Of Transformation Plans Specifically
                    Designed For People Of Differnt Calibres, Age Groups And
                    Lifestyle Choices.
                  </p>
                </div>
                <ul className="banner-cta pl-0 d-flex animate-bounce">
                  <li className="cta-item">
                    <a href="#explore" className="new-primary-btn md-btn">
                      Explore Programs
                    </a>
                  </li>
                  <li className="cta-item ml-3">
                    <Link
                      to="/fitnesswithgomzi/fwg-form-page"
                      className="new-secondary-btn md-btn"
                    >
                      Free Consultation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProgramReviews />
      <section className="pt-5 pb-5 new-content-add">
        <div className="container">
          <div className="">
            <div className="covid mb-4 mt-3 text-center">
              <h2 className="h2-fs nunito-font">
                How You Can
                <span className="m-0 text-blue-color">
                  {" "}
                  Achieve Your goals ?{" "}
                </span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="card-body p-4">
              <div className="row align-items-center">
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote mb-4 d-flex align-items-center justify-content-between flex-column flex-md-row">
                    <div className="blockquote-content">
                      <h2 className="h5-fs text-primary font-weight-bold">
                        Consultation
                      </h2>
                      <p className="text-muted">
                        Your professional nutritionist and fitness trainer
                        collaborates closely to conduct a thorough assessment of
                        your personality, habits, environment, lifestyle, and
                        motivations. This holistic approach enables them to gain
                        a deeper understanding of the unique factors in your
                        life that impact your pursuit of fitness.
                      </p>
                    </div>
                    <div className="blockquote-img-container">
                      <img
                        src="/assets/images/fwg/Step-1.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote mb-4 d-flex align-items-center justify-content-between flex-column flex-md-row">
                    <div className="blockquote-content">
                      <h2 className="h5-fs text-primary font-weight-bold">
                        Body Analysis
                      </h2>
                      <p className="text-muted">
                        With our cutting-edge body analysis technology, which
                        allows you to calculate everything happening in your
                        body, you can get a clear picture of how your eating
                        habits and lifestyle choices affect your body.
                      </p>
                    </div>
                    <div className="blockquote-img-container">
                      <img
                        src="/assets/images/fwg/Step-2.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote mb-4 d-flex align-items-center justify-content-between flex-column flex-md-row">
                    <div className="blockquote-content">
                      <h2 className="h5-fs text-primary font-weight-bold">
                        Customized Fitness Plan
                      </h2>
                      <p className="text-muted">
                        Your professional nutritionist and fitness trainer
                        collaborates closely to conduct a thorough assessment of
                        your personality, habits, environment, lifestyle, and
                        motivations. This holistic approach enables them to gain
                        a deeper understanding of the unique factors in your
                        life that impact your pursuit of fitness.
                      </p>
                    </div>
                    <div className="blockquote-img-container">
                      <img
                        src="/assets/images/fwg/Step-3.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote mb-4 d-flex align-items-center justify-content-between flex-column flex-md-row">
                    <div className="blockquote-content">
                      <h2 className="h5-fs text-primary font-weight-bold">
                        Daily Diets & Exercise Updates
                      </h2>
                      <p className="text-muted">
                        Our team will regularly take diets & exercise updates to
                        track your growth in your fitness journey. According to
                        your requirements, diet & exercise can be changed to
                        meet required results.
                      </p>
                    </div>
                    <div className="blockquote-img-container">
                      <img
                        src="/assets/images/fwg/Step-6.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote mb-4 d-flex align-items-center justify-content-between flex-column flex-md-row">
                    <div className="blockquote-content">
                      <h2 className="h5-fs text-primary font-weight-bold">
                        Meet Your Goals
                      </h2>
                      <p className="text-muted">
                        Working with quantitative data, in-the-moment insights,
                        and professional coaching will help you create
                        long-lasting and sustainable achievements with a 5x
                        greater effect. We have transformed 8000+ people across
                        the globe towards a healthier and happier of themselves!
                      </p>
                    </div>
                    <div className="blockquote-img-container">
                      <img
                        src="/assets/images/fwg/Step-5.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="request-form" id="book-an-appointment">
        <div className="inner">
          <div className="container">
            <div className="group">
              <div className="img d-none d-lg-block">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/rtp-5.0-main.webp"
                  }
                  height="500"
                  width="600"
                  alt="Person"
                  className="img-contain"
                />
              </div>
              <div className="descr d-none d-lg-block  pt-2">
                <h2 className="h2-fs h1 fs-36 nunito-font">
                  Big changes need baby steps
                </h2>
                <p className="mb-2 comfortaa-font">
                  Book a consultation with our experts now to get started
                </p>
              </div>
              <div className="d-block d-md-none  pt-3">
                <h2 className="h2-fs h1 fs-36 nunito-font">
                  Big changes need baby steps
                </h2>
                <p className="mb-2 comfortaa-font">
                  Book a consultation with our experts now to get started
                </p>
              </div>
              <div className="mb-4 d-block d-lg-none">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/rtp-5.0-main.webp"
                  }
                  width="100%"
                  alt="Person"
                />
              </div>
              <div className="call-back">
                <div>
                  <form className="row">
                    <div className="col-md-6 mb-3">
                      <label
                        for="txt_form_name"
                        className="form-label comfortaa-font"
                      >
                        Name:
                      </label>
                      <input
                        type="text"
                        className="form-control fr"
                        placeholder="Enter Name"
                        name="consultingName"
                        value={formData.consultingName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        for="txt_form_email"
                        className="form-label comfortaa-font"
                      >
                        Email:
                      </label>
                      <input
                        type="email"
                        className="form-control fr"
                        placeholder="Enter Email"
                        name="consultingEmail"
                        value={formData.consultingEmail}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        for="txt_form_mobile"
                        className="form-label comfortaa-font"
                      >
                        Phone no:
                      </label>
                      <input
                        type="number"
                        className="form-control fr"
                        placeholder="Enter Phone"
                        name="consultingMobile"
                        value={formData.consultingMobile}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        for="txt_form_gender"
                        className="form-label comfortaa-font"
                      >
                        Gender:
                      </label>
                      <select
                        className="form-control fr"
                        name="consultingGender"
                        value={formData.consultingGender}
                        onChange={handleChange}
                      >
                        <option hidden>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        for="txt_form_age"
                        className="form-label comfortaa-font"
                      >
                        Age:
                      </label>
                      <input
                        type="number"
                        className="form-control fr"
                        placeholder="Enter Age"
                        name="consultingAge"
                        value={formData.consultingAge}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        for="txt_form_date"
                        className="form-label comfortaa-font"
                      >
                        Date:
                      </label>
                      <input
                        type="Date"
                        className="form-control fr"
                        name="consultingDate"
                        value={formData.consultingDate}
                        onChange={handleChange}
                      />
                    </div>
                  </form>
                  <div className="disclaimer comfortaa-font">
                    Embark on your fitness journey with "Fitness with Gomzi" and
                    witness the incredible changes in your health and
                    well-being. Our experienced team of health coaches and
                    experts is committed to guiding you every step of the way.
                    Start by booking a free consultation for you.
                  </div>
                  <div className="col-12 mt-3">
                    <div className="form-group mb-0 form-group-btn">
                      <button
                        type="button"
                        onClick={bookFreeAppointmentWithBestDietitianInquiry}
                        className="primary-btn md-btn mx-auto"
                        style={{ marginLeft: "-26px" }}
                      >
                        Book a consultation now
                      </button>
                      <span className="success">Successfully requested!</span>
                    </div>
                  </div>
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
              <div className="covid mb-4 text-center">
                <h2 className="h2-fs nunito-font" style={{ color: "#000000" }}>
                  Achievements
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-6 text-center">
                <CountUp
                  end={16000}
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
                    className="mb-3"
                  >
                    Transformation
                  </p>
                </div>
              </div>
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
                    className="mb-3"
                  >
                    weight loss
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
                    className="mb-3"
                  >
                    Clinical
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
                    className="mb-3"
                  >
                    prep coaching
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
                    className="mb-3"
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
                    className="mb-3"
                  >
                    corporate events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-3 studentsreview-1 mt-4">
        <div className="container-fluid px-0">
          <div className="margintop d-md-block d-none">
            <img
              className="img-fluid"
              src={process.env.PUBLIC_URL + "/assets/images/fwg/coaches.webp"}
              alt="Dietitian"
              width="100%"
            />
          </div>
          <div className="margintop d-md-none d-block">
            <img
              className="img-fluid"
              src={"/assets/images/fwg/coaches-mobile.webp"}
              alt="Dietitian"
              width="100%"
            />
          </div>
        </div>
      </section>
      <section className="margintop d-none d-md-block">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="covid text-center">
              <h2 className="h2-fs nunito-font" style={{ color: "#333" }}>
                Reverse Your{" "}
                <span className="m-0 text-blue-color">Diseases Today</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-0 mb-md-5"></div>
            <div className="row border-bottom pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/fatty.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("6uyrkB9iPzQ?s")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">Fatty Liver (1m+ Views)</h2>
                <div className="row">
                  <div>
                    <p style={{ paddingLeft: "15px" }}>
                      There is a disease that is affected to around 30% of the
                      population of India. And the disease is Fatty Liver, there
                      are lots of reasons for the fatty liver but the main
                      reasons are eating junk foods and drinking alcohol more
                      frequently. Fatty liver occurs when too much fat builds up
                      in liver cells. Although it is normal to have a tiny
                      amount of fat in these cells, the liver is considered
                      fatty if more than 5% of it is fat. If you are suffering
                      ....
                    </p>
                  </div>
                </div>
                <Link
                  to="https://www.youtube.com/embed/6uyrkB9iPzQ?si=nRQ9EeiJNo_T-5c6"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
            <div className="row border-bottom pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/varicose.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("tnGfI5MgfXM")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">
                  What are Varicose Veins? (900k+ Views)
                </h2>
                <div className="row">
                  <div>
                    <p style={{ paddingLeft: "15px" }}>
                      The Bottom Line Of A Healthy Body May Be A Healthy Liver.
                      The Liver Assists In A Very Heap Of Body Functions And
                      Conjointly Flushes Out Toxins And Helps In Metabolism.
                      Taking Care Of The Liver Becomes Simple After You Build A
                      Healthy Mode Of Your Habit. Following A Healthy Mode Keeps
                      You Match And Conjointly Keeps Your Liver Removed From
                      Diseases. Everything That You Just Consume, As Well As
                      Medicines And Alcohol, Is Filtered By Your Liver. Hence...
                    </p>
                  </div>
                </div>
                <Link
                  to="https://youtu.be/tnGfI5MgfXM?si=DOk18_rTTBGMfoLN"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
            <div className="row border-bottom pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/healing_and_care15.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("oNtDaU2L4gk")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">SGPT/SGOT Video (780k+ Views)</h2>
                <div className="row">
                  <div>
                    <p style={{ paddingLeft: "15px" }}>
                      The bottom line of a healthy body may be a healthy liver.
                      The liver assists in a very heap of body functions and
                      conjointly flushes out toxins and helps in metabolism.
                      Taking care of the liver becomes simple after you build a
                      healthy mode of your habit. Following a healthy mode keeps
                      you match and conjointly keeps your liver removed from
                      diseases. Everything that you just consume, as well as
                      medicines and alcohol, is filtered by your liver. Hence,
                      it's a crucial organ for the body to perform properly.
                      hindrance is usually higher than cure, therefore taking
                      care of your liver will assist you in avoiding treatments
                      and complications. SGPT & SGOT square measure the enzymes
                      made by your liver & its cells. High SGPT/SGOT is a sign
                      of liver cell injury, they have to be detected through
                      regular health checkups.
                    </p>
                  </div>
                </div>
                <Link
                  to="https://youtu.be/oNtDaU2L4gk?si=4cuW1Mf7JCXfecXP"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
            <div className="row border-bottom pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/cupping.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("aLzkmslx6WY")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">Cupping Therapy (750k+ Views)</h2>
                <div className="row">
                  <div>
                    <p style={{ paddingLeft: "15px" }}>
                      The Bottom Line Of A Healthy Body May Be A Healthy Liver.
                      The Liver Assists In A Very Heap Of Body Functions And
                      Conjointly Flushes Out Toxins And Helps In Metabolism.
                      Taking Care Of The Liver Becomes Simple After You Build A
                      Healthy Mode Of Your Habit. Following A Healthy Mode Keeps
                      You Match And Conjointly Keeps Your Liver Removed From
                      Diseases. Everything That You Just Consume, As Well As
                      Medicines And Alcohol, Is Filtered By Your Liver. Hence...
                    </p>
                  </div>
                </div>
                <Link
                  to="https://youtu.be/aLzkmslx6WY?si=mSNjG7UXp8ULSat4"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
            <div className="row pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/ulcer.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("1Qfgpak6d2c")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">Ulcer Video Reach (450k+ Views)</h2>
                <div className="row">
                  <div style={{ paddingLeft: "15px" }}>
                    <p>
                      Ulcers are ulcers on the lining of the stomach or small
                      intestine. Ulcers can also be on your esophagus (throat).
                      Most ulcers are located in the small intestine. These
                      ulcers are called duodenal ulcers. Stomach ulcers are
                      called peptic ulcers. Ulcers in the throat are called
                      esophageal ulcers.
                    </p>
                    <p className="mt-2">
                      <b>Types Of Ulcer</b>
                    </p>
                    <ul style={{ paddingLeft: "15px" }} className="mt-2">
                      <li>PEPTIC ULCER</li>
                      <li style={{ textTransform: "uppercase" }}>
                        Parietal ulcers
                      </li>
                      <li>VENOUS ULCERS</li>
                      <li>MOUTH ULCER</li>
                      <li>GENITAL ULCER</li>
                    </ul>
                  </div>
                </div>
                <Link
                  to="https://youtu.be/1Qfgpak6d2c?si=wYobLGg9s_2cd2Or"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-block d-md-none">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="covid text-center">
              <h2 className="h2-fs">
                Reverse your{" "}
                <span style={{ color: " #00afef", margin: "0px" }}>
                  Diseases Today
                </span>{" "}
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-0 mb-md-5"></div>
            <div className="row border-bottom pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/fatty.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("6uyrkB9iPzQ?s")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">Fatty Liver (1m+ Views)</h2>
                <div className="row">
                  <div>
                    <p style={{ paddingLeft: "15px" }}>
                      There is a disease that is affected to around 30% of the
                      population of India. And the disease is Fatty Liver, there
                      {showMore[0] ? (
                        ` are lots of reasons for the fatty liver but the main
                      reasons are eating junk foods and drinking alcohol more
                      frequently. Fatty liver occurs when too much fat builds up
                      in liver cells. Although it is normal to have a tiny
                      amount of fat in these cells, the liver is considered
                      fatty if more than 5% of it is fat. If you are suffering`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(0)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1 ml-3"
                    >
                      {showMore[0] ? "Read less" : "Read more"}
                    </span>
                  </div>
                </div>
                <Link
                  to="https://www.youtube.com/embed/6uyrkB9iPzQ?si=nRQ9EeiJNo_T-5c6"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
            <div className="row border-bottom pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fwg/varicose.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("tnGfI5MgfXM")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">
                  What are Varicose Veins? (900k+ Views)
                </h2>
                <div className="row">
                  <div>
                    <p style={{ paddingLeft: "15px" }}>
                      The Bottom Line Of A Healthy Body May Be A Healthy Liver.
                      The Liver Assists In A Very Heap Of Body Functions And
                      {showMore[1] ? (
                        ` Conjointly Flushes Out Toxins And Helps In Metabolism.
                      Taking Care Of The Liver Becomes Simple After You Build A
                      Healthy Mode Of Your Habit. Following A Healthy Mode Keeps
                      You Match And Conjointly Keeps Your Liver Removed From
                      Diseases. Everything That You Just Consume, As Well As
                      Medicines And Alcohol, Is Filtered By Your Liver.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(1)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1 ml-3"
                    >
                      {showMore[1] ? "Read less" : "Read more"}
                    </span>
                  </div>
                </div>
                <Link
                  to="https://youtu.be/tnGfI5MgfXM?si=DOk18_rTTBGMfoLN"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
            <div className="row border-bottom pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/healing_and_care15.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("oNtDaU2L4gk")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">SGPT/SGOT Video (780k+ Views)</h2>
                <div className="row">
                  <div>
                    <p style={{ paddingLeft: "15px" }}>
                      The bottom line of a healthy body may be a healthy liver.
                      The liver assists in a very heap of body functions and
                      conjointly flushes out toxins and helps in metabolism.
                      {showMore[2] ? (
                        ` Taking care of the liver becomes simple after you build a
                      healthy mode of your habit. Following a healthy mode keeps
                      you match and conjointly keeps your liver removed from
                      diseases. Everything that you just consume, as well as
                      medicines and alcohol, is filtered by your liver. Hence,
                      it's a crucial organ for the body to perform properly.
                      hindrance is usually higher than cure, therefore taking
                      care of your liver will assist you in avoiding treatments
                      and complications. SGPT & SGOT square measure the enzymes
                      made by your liver & its cells. High SGPT/SGOT is a sign
                      of liver cell injury, they have to be detected through
                      regular health checkups.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(2)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1 ml-3"
                    >
                      {showMore[2] ? "Read less" : "Read more"}
                    </span>
                  </div>
                </div>
                <Link
                  to="https://youtu.be/oNtDaU2L4gk?si=4cuW1Mf7JCXfecXP"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
            <div className="row border-bottom pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/cupping.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("aLzkmslx6WY")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">Cupping Therapy (750k+ Views)</h2>
                <div className="row">
                  <div>
                    <p style={{ paddingLeft: "15px" }}>
                      The Bottom Line Of A Healthy Body May Be A Healthy Liver.
                      The Liver Assists In A Very Heap Of Body Functions And
                      {showMore[3] ? (
                        ` Conjointly Flushes Out Toxins And Helps In Metabolism.
                      Taking Care Of The Liver Becomes Simple After You Build A
                      Healthy Mode Of Your Habit. Following A Healthy Mode Keeps
                      You Match And Conjointly Keeps Your Liver Removed From
                      Diseases. Everything That You Just Consume, As Well As
                      Medicines And Alcohol, Is Filtered By Your Liver.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(3)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1 ml-3"
                    >
                      {showMore[3] ? "Read less" : "Read more"}
                    </span>
                  </div>
                </div>
                <Link
                  to="https://youtu.be/aLzkmslx6WY?si=mSNjG7UXp8ULSat4"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
            <div className="row pt-3 pt-md-5">
              <div className="col-lg-6 mb-4">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    alt="Fg Group"
                    className="lazy mb-md"
                    src={
                      process.env.PUBLIC_URL + "/assets/images/fwg/ulcer.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      onClick={() => openVideoModal("1Qfgpak6d2c")}
                      className="custom clickof"
                      aria-label="Fg Group"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-5">
                <h2 className="h4-fs">Ulcer Video Reach (450k+ Views)</h2>
                <div className="row">
                  <div style={{ paddingLeft: "15px" }}>
                    <p>
                      Ulcers are ulcers on the lining of the stomach or small
                      intestine. Ulcers can also be on your esophagus (throat).
                      {showMore[4] ? (
                        ` Most ulcers are located in the small intestine. These
                      ulcers are called duodenal ulcers. Stomach ulcers are
                      called peptic ulcers. Ulcers in the throat are called
                      esophageal ulcers.`
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                    </p>
                    <span
                      onClick={() => toggleReadMore(4)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[4] ? "Read less" : "Read more"}
                    </span>
                    <p className="mt-2 d-none d-md-block">
                      <b>Types Of Ulcer</b>
                    </p>
                    <ul
                      style={{ paddingLeft: "15px" }}
                      className="mt-2 d-none d-md-block"
                    >
                      <li>PEPTIC ULCER</li>
                      <li style={{ textTransform: "uppercase" }}>
                        Parietal ulcers
                      </li>
                      <li>VENOUS ULCERS</li>
                      <li>MOUTH ULCER</li>
                      <li>GENITAL ULCER</li>
                    </ul>
                  </div>
                </div>
                <Link
                  to="https://youtu.be/1Qfgpak6d2c?si=wYobLGg9s_2cd2Or"
                  target="_blank"
                  className="btn mt-3 btn-primarrr btn-primary"
                >
                  View Video
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop d-md-block d-none">
        <div className="container-fluid">
          <div className="container blog2 py-5">
            <div className="covid text-center">
              <h2 className="h2-fs nunito-font">
                <span style={{ color: " #00afef", margin: "0px" }}>
                  Testimonials
                </span>{" "}
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="mr-2 text-danger"
                />
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-4"></div>
            <div className="d-md-block my-md-5">
              <OwlCarousel
                loop
                autoPlay
                dots={false}
                nav={false}
                id="owl-reports"
                className="owl-carousel-reports owl-theme"
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
                <div className="item mx-3">
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <div className="reports-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/s1.webp"
                          }
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 text-center mt-3 mt-md-0">
                      <div className="reports-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/s2.webp"
                          }
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <div className="reports-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/s3.webp"
                          }
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 text-center mt-3 mt-md-0">
                      <div className="reports-img">
                        <img
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/s4.webp"
                          }
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <div className="reports-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/s5.webp"
                          }
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 text-center mt-3 mt-md-0">
                      <div className="reports-img">
                        <img
                          alt="reports"
                          style={{ borderBottom: "5px solid #CBE465" }}
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/s6.webp"
                          }
                          className="lazy img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <section className="d-md-none d-block">
        <div className="container-fluid px-0 py-3">
          <div className="text-center">
            <h2 className="h2-fs nunito-font">
              <span style={{ color: "#00afef", margin: "0px" }}>
                Testimonials
              </span>{" "}
              <FontAwesomeIcon icon={faYoutube} className="mr-2 text-danger" />
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-4"></div>
          <div className="row">
            {[1, 2, 3, 4, 5, 6].map((imgNumber) => (
              <div className="col-12 text-center my-3" key={imgNumber}>
                <div className="reports-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/images/fwg/s${imgNumber}.webp`
                    }
                    alt={`reports ${imgNumber}`}
                    style={{ borderBottom: "5px solid #CBE465" }}
                    className="lazy img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <FitnessProgram /> */}
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs" style={{ color: "#333" }}>
                Follow us on Instagram
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3 mb-md-5"></div>
            <div className="d-none d-md-block">
              <div className="row instaimg">
                <div className="col-3">
                  <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                    {" "}
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/insta1.webp"
                      }
                      width="100%"
                      alt="FG Group"
                    />
                  </Link>
                </div>
                <div className="col-3">
                  <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                    {" "}
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/insta2.webp"
                      }
                      width="100%"
                      alt="FG Group"
                    />
                  </Link>
                </div>
                <div className="col-3">
                  <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                    {" "}
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/insta3.webp"
                      }
                      width="100%"
                      alt="FG Group"
                    />
                  </Link>
                </div>
                <div className="col-3 mt-3">
                  <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                    {" "}
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/insta4.webp"
                      }
                      width="100%"
                      alt="FG Group"
                    />
                  </Link>
                </div>
                <div className="col-3 mt-3">
                  <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                    {" "}
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/insta5.webp"
                      }
                      width="100%"
                      alt="FG Group"
                    />
                  </Link>
                </div>
                <div className="col-3 mt-3">
                  <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                    {" "}
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/insta6.webp"
                      }
                      width="100%"
                      alt="FG Group"
                    />
                  </Link>
                </div>
                <div className="col-3 mt-3">
                  <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                    {" "}
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/insta7.webp"
                      }
                      width="100%"
                      alt="FG Group"
                    />
                  </Link>
                </div>
                <div className="col-3 mt-3">
                  <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                    {" "}
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/insta8.webp"
                      }
                      width="100%"
                      alt="FG Group"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-block d-md-none">
              <div
                id="owl-instafollw"
                className="owl-carousel owl-theme instaimg"
              >
                <div className="item mx-3">
                  <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                    {" "}
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/insta1.webp"
                      }
                      width="100%"
                      alt="FG Group"
                    />
                  </Link>
                </div>
                <div className="item mx-3">
                  <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                    {" "}
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/insta2.webp"
                      }
                      width="100%"
                      alt="FG Group"
                    />
                  </Link>
                </div>
                <div className="item mx-3">
                  <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                    {" "}
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/insta3.webp"
                      }
                      width="100%"
                      alt="FG Group"
                    />
                  </Link>
                </div>
                <div className="item mx-3 mt-3">
                  <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                    {" "}
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/insta4.webp"
                      }
                      width="100%"
                      alt="FG Group"
                    />
                  </Link>
                </div>
                <div className="item mx-3 mt-3">
                  <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                    {" "}
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/insta5.webp"
                      }
                      width="100%"
                      alt="FG Group"
                    />
                  </Link>
                </div>
                <div className="item mx-3 mt-3">
                  <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                    {" "}
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/insta6.webp"
                      }
                      width="100%"
                      alt="FG Group"
                    />
                  </Link>
                </div>
                <div className="item mx-3 mt-3">
                  <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                    {" "}
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/insta7.webp"
                      }
                      width="100%"
                      alt="FG Group"
                    />
                  </Link>
                </div>
                <div className="item mx-3 mt-3">
                  <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                    {" "}
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/insta8.webp"
                      }
                      width="100%"
                      alt="FG Group"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center mt-5 mt-lg-5">
              <h2 className="h6-fs d-block d-md-none">
                Follow us on Instagram{" "}
                <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                  <span style={{ color: "#3b5cff" }}>@fitnesswithgomzi</span>
                </Link>
              </h2>
              <h2
                className="d-none d-md-block h3-fs fs-25"
                style={{ fontWeight: "500" }}
              >
                Follow us on Instagram{" "}
                <Link to="https://www.instagram.com/fitnesswithgomzi?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                  <span style={{ color: "#3b5cff" }}>@fitnesswithgomzi</span>
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us margintop">
        <div className="container">
          <div className="contact-experts flex">
            <h2 className="h3-fs">
              The first step to a healthier you starts here. Talk to our experts
              now
            </h2>
            <div className="contacts row">
              <div className="col-md-4">
                <Link
                  to="https://api.whatsapp.com/send?phone=8866842520&amp;text= I want to Know More About Fitness With Gomzi"
                  id="healthier_you"
                >
                  <div className="contact-on-whatsapp contact d-flex">
                    <div className="contact-on-whatsapp-icon">
                      <img
                        width="50px"
                        alt="whatsapp icon"
                        src="https://fitelo.co/wp-content/uploads/Group-221.png"
                      />
                    </div>
                    <div className="contact-content mt-3">
                      <li className="card-btn">
                        Whatsapp Us
                        <svg
                          width="18"
                          height="12"
                          viewBox="0 0 18 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989592 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM1 6.75H17V5.25H1V6.75Z"
                            fill="#2F313B"
                          ></path>
                        </svg>
                      </li>
                      <p style={{ color: "#5f5f5f" }}>
                        Talk to our health experts now for immediate guidance
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="tel:8866842520" id="healthier_call_us">
                  <div className="book-an-appointment contact d-flex">
                    <div className="contact-on-whatsapp-icon">
                      <img
                        width="50px"
                        alt="call icon"
                        src="https://fitelo.co/wp-content/themes/Fitelo/images/wa-icon.png"
                      />
                    </div>
                    <div className="contact-content mt-3">
                      <li className="card-btn">
                        Call Us
                        <svg
                          width="18"
                          height="12"
                          viewBox="0 0 18 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989592 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM1 6.75H17V5.25H1V6.75Z"
                            fill="#2F313B"
                          ></path>
                        </svg>
                      </li>
                      <p style={{ color: "#5f5f5f" }}>
                        Talk to our health experts now for immediate guidance
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4">
                <a href="#book-an-appointment" aria-label="Fg Group">
                  <div className="book-an-appointment contact d-flex">
                    <div className="contact-on-whatsapp-icon">
                      <img
                        width="50px"
                        src="https://fitelo.co/wp-content/themes/Fitelo/images/appointment.png"
                        alt="appointment"
                      />
                    </div>
                    <div className="contact-content mt-3">
                      <li className="card-btn">
                        Book an appointment
                        <svg
                          width="18"
                          height="12"
                          viewBox="0 0 18 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989592 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM1 6.75H17V5.25H1V6.75Z"
                            fill="#2F313B"
                          ></path>
                        </svg>
                      </li>
                      <p style={{ color: "#5f5f5f" }}>
                        Schedule a call with our team at a time that works best
                        for you
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ExerciseVideo />
      <Faqs />
      <InquiryForm />
      <FwgFooter />
      {/* <ContactButtonFWG /> */}
    </>
  );
}

export default FitnessPrograms;
