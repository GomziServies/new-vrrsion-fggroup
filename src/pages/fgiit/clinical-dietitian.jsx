import React, { useState } from "react";
import "../../assets/css/home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import ModalVideo from "react-modal-video";
import CourseReviewSection from "../../components/partials/review/course-review";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OfflineCourseForm from "../../components/offline-course/offlineCourseForm";
import { OfflineAdvanceClinicalNutritionCourseData } from "../../components/offline-course/OfflineCourseDataLoader";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CourseReviews from "../../components/fgiit/courseReviews";
import OurOfflineStudents from "../../components/course/ourOfflineStudents";

function ClinicalDietitian() {
  const canonicalUrl = window.location.href;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqItems = [
    {
      question: "Who can benefit from this course?",
      answer:
        "This course is ideal for nutritionists, fitness professionals, health enthusiasts, or anyone looking to deepen their understanding of clinical nutrition and how it impacts long-term health.",
    },
    {
      question: "Will this course help in weight management?",
      answer:
        "Yes, this course covers weight management strategies, focusing on nutrition, metabolism, and sustainable practices for maintaining a healthy weight.",
    },
    {
      question: "Does this course cover specific dietary plans?",
      answer:
        "Yes, you'll learn how to create personalized health plans, including dietary recommendations, based on individual needs like managing lifestyle diseases, weight, or specific health concerns.",
    },
    {
      question: "Is there a practical component to the workshop?",
      answer:
        "Yes, the course includes a 1-month internship where you'll apply what you've learned by working on real-world health plans, ensuring you gain hands-on experience.",
    },
    {
      question: "Will I learn how to manage lifestyle diseases?",
      answer:
        "Absolutely. The course covers diseases like diabetes, high cholesterol, and hypertension, along with nutritional strategies to manage and prevent these conditions.",
    },
    {
      question: "Do I need prior knowledge of nutrition to take this workshop?",
      answer:
        "While prior knowledge is helpful, this course is designed for all levels, including beginners. It starts with the fundamentals and progresses to advanced topics in clinical nutrition.",
    },
    {
      question: "Will I get certified after completing the workshop?",
      answer:
        "Yes, participants who complete the workshop will receive a certification from FGIIT, which can enhance your professional credentials as a nutritionist or health consultant.",
    },
    {
      question: "Can I access the material if I miss a live session?",
      answer:
        "Yes, all live sessions are recorded, and you will have access to the recordings for review during and after the course.",
    },
    {
      question:
        "Does the course cover nutrition for specific health issues like gout or autoimmune diseases?",
      answer:
        "Yes, the course delves into specific conditions such as high uric acid, gout, and autoimmune diseases, and provides dietary interventions to manage these health issues effectively.",
    },
    {
      question: "How will I be supported during the course?",
      answer:
        "You'll have live mentorship throughout the course and access to team chat support for any questions or guidance needed during your learning journey.",
    },
  ];

  const reviewImages = [
    "/assets/images/img/aas2.webp",
    "/assets/images/img/sname.webp",
    "/assets/images/img/aname.webp",
    "/assets/images/img/yname.webp",
  ];

  const reviewses = [
    {
      name: "Neha Joshi",
      stars: 5,
      review:
        "The Clinical Diets course at FGIIT was enlightening! I learned how to create tailored diet plans for various health conditions, and the practical sessions were incredibly helpful.",
      image: reviewImages[0],
    },
    {
      name: "Suresh Kumar",
      stars: 5,
      review:
        "This course offered valuable insights into the relationship between diet and health. The instructors were knowledgeable, and the hands-on approach made the learning experience engaging.",
      image: reviewImages[1],
    },
    {
      name: "Aisha Malik",
      stars: 5,
      review:
        "Highly recommend this course! The comprehensive curriculum helped me understand clinical nutrition better, and I now feel confident in advising clients on healthy diets.",
      image: reviewImages[2],
    },
    {
      name: "Yasim Qureshi",
      stars: 5,
      review:
        "FGIIT's Clinical Diets course transformed my perspective on nutrition. The mix of theory and practical application made it a valuable investment for my career.",
      image: reviewImages[3],
    },
  ];

  const [showMore, setShowMore] = useState(Array(5).fill(false));

  const toggleReadMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  const options = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  const [showMorev, setShowMorev] = useState(false);

  const toggleReadMorev = () => {
    setShowMorev(!showMorev);
  };

  return (
    <>
      <Helmet>
        <title>Course will help you to become better clinical dietitian.</title>
        <meta
          name="description"
          content="wellness consultant course is a best clinical dietitian course which help you to understand different diseases."
        />
        <meta
          name="keyword"
          content="clinical, advance, course, online courses, nutrition courses online, dietician course online, dietician course, certified nutritionist course, wellness consultant, offline course, clinical nutrition course, weight management, nutrition, dietetics course, nutrition course, Clinical Course, certified nutritionist, nutritionist course, nutritionist, Advanced Clinical Nutrition Course, Clinical Nutrition and Dietetics Course, Medical Nutrition Therapy Course, Online Diet and Nutrition Course, Clinical Dietetics Course Online, Clinical Nutrition Training, Best Clinical Nutrition Certification, Functional Nutrition Course Online, Diploma in Clinical Nutrition, Holistic Nutrition Course Online, Online Dietitian Certification Course, Certified Clinical Nutritionist, Weight Loss Nutrition Course, Online Advanced Dietetics Course, Certified Nutrition Specialist Online, Clinical Nutrition Degree Online, Best Online Clinical Nutrition Program, Nutrition and Wellness Coaching Certification, Integrative and Functional Nutrition Course, Sports and Clinical Nutrition Course, Certified Clinical Dietitian Online, Health and Clinical Nutrition Course"
        />

        <meta
          property="og:title"
          content="Course will help you to become better clinical dietitian."
        />
        <meta
          property="og:description"
          content="wellness consultant course is a best clinical dietitian course which help you to understand different diseases."
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fgiit/clinical-dietitian"
        />
        <link rel="canonical" href={{ canonicalUrl }} />
        <meta
          name="google-site-verification"
          content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"
        ></script>
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
            fbq('init', '485635632433430');
            fbq('track', 'PageView');
        `}
        </script>
        <noscript>
          {
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=485635632433430&ev=PageView&noscript=1" />'
          }
        </noscript>
      </Helmet>
      <p className="d-none">
        clinical, advance, course, online courses, nutrition courses online, dietician course online, dietician course, certified nutritionist course, wellness consultant, offline course, clinical nutrition course, weight management, nutrition, dietetics course, nutrition course, Clinical Course, certified nutritionist, nutritionist course, nutritionist, Advanced Clinical Nutrition Course, Clinical Nutrition and Dietetics Course, Medical Nutrition Therapy Course, Online Diet and Nutrition Course, Clinical Dietetics Course Online, Clinical Nutrition Training, Best Clinical Nutrition Certification, Functional Nutrition Course Online, Diploma in Clinical Nutrition, Holistic Nutrition Course Online, Online Dietitian Certification Course, Certified Clinical Nutritionist, Weight Loss Nutrition Course, Online Advanced Dietetics Course, Certified Nutrition Specialist Online, Clinical Nutrition Degree Online, Best Online Clinical Nutrition Program, Nutrition and Wellness Coaching Certification, Integrative and Functional Nutrition Course, Sports and Clinical Nutrition Course, Certified Clinical Dietitian Online, Health and Clinical Nutrition Course
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
              <div className="col-lg-7 px-md-4">
                <div className="course-card-page-design mr-md-4 black-before">
                  <div className="course-scroll">
                    <OwlCarousel
                      loop
                      autoplay
                      dots={false}
                      id="owl-demo-physio"
                      className="owl-carousel owl-theme"
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
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/batch-12.jpeg"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/batch-11.jpeg"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/batch-10.jpeg"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/batch-9.jpeg"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/batch-8.webp"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fgiit/batch-7.webp"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/batch-6.webp"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/1172.webp"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/6771.webp"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/7101.webp"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/0501.webp"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                      <div className="item mx-md-3">
                        <img
                          className="lazy rounded"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/6951.webp"
                          }
                          width="100%"
                          alt="food nutrition and personal training certification ceremony"
                        />
                      </div>
                    </OwlCarousel>
                    <div className="d-md-block d-none">
                      <div className="course-info">
                        <h2 className="h6-fs course-title">Course Info</h2>
                        <ul className="course-list">
                          {OfflineAdvanceClinicalNutritionCourseData?.info ? (
                            <>
                              <li className="fs-1">
                                <i className="fas fa-clock"></i>
                                {
                                  OfflineAdvanceClinicalNutritionCourseData
                                    .info[0]
                                }
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {
                                  OfflineAdvanceClinicalNutritionCourseData
                                    .info[1]
                                }
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {
                                  OfflineAdvanceClinicalNutritionCourseData
                                    .info[2]
                                }
                              </li>
                              <li>
                                <i className="fas fa-file-signature"></i>
                                {
                                  OfflineAdvanceClinicalNutritionCourseData
                                    .info[3]
                                }
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <i className="fas fa-clock"></i>
                                {
                                  OfflineAdvanceClinicalNutritionCourseData
                                    .secondInfo[0]
                                }
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {
                                  OfflineAdvanceClinicalNutritionCourseData
                                    .secondInfo[1]
                                }
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {
                                  OfflineAdvanceClinicalNutritionCourseData
                                    .secondInfo[2]
                                }
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 px-md-0">
                <OfflineCourseForm
                  courseData={OfflineAdvanceClinicalNutritionCourseData}
                  whatsappMessage="Hello, I wanted to know more about the Offline Advance Clinical Nutrition course."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-5 new-content-add">
        <div className="container">
          <div className="">
            <div className="covid mb-4 mt-3 text-center">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">Course </span>
                Details
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="card-body p-4">
              <div className="row align-items-center">
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Human Physiology and Function of Cells
                        </h2>
                        <p className="text-muted">
                          Understand the fundamental workings of the human body
                          at the cellular level. This module covers cell
                          functions, how cells process nutrients, and the role
                          of different systems (nervous, cardiovascular, etc.)
                          in maintaining health.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/human-physiology.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/human-physiology.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Human Physiology and Function of Cells
                      </h2>
                      <p className="text-muted">
                        Understand the fundamental workings of the human body at
                        the cellular level. This module{" "}
                        {/* {showMore[1] ? (
                          <> */}
                        covers cell functions, how cells process nutrients, and
                        the role of different systems (nervous, cardiovascular,
                        etc.) in maintaining health.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(1)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[1] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/definition-of-health.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Definition of Health
                        </h2>
                        <p className="text-muted">
                          Explore the comprehensive definition of health beyond
                          the absence of disease. Learn about the physical,
                          mental, and social aspects of well-being and how to
                          achieve balance for optimal health.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/definition-of-health.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Definition of Health
                      </h2>
                      <p className="text-muted">
                        Explore the comprehensive definition of health beyond
                        the absence of disease. Learn about{" "}
                        {/* {showMore[2] ? (
                          <> */}
                        the physical, mental, and social aspects of well-being
                        and how to achieve balance for optimal health.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(2)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[2] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          What Are Lifestyle Diseases?
                        </h2>
                        <p className="text-muted">
                          Identify common lifestyle diseases such as diabetes,
                          obesity, cardiovascular issues, and how poor lifestyle
                          choices contribute to these conditions. Learn
                          prevention strategies and interventions through
                          nutrition and lifestyle modifications.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/lifestyle-diseases.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/lifestyle-diseases.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        What Are Lifestyle Diseases?
                      </h2>
                      <p className="text-muted">
                        Identify common lifestyle diseases such as diabetes,
                        obesity, cardiovascular issues, and{" "}
                        {/* {showMore[1] ? (
                          <> */}
                        how poor lifestyle choices contribute to these
                        conditions. Learn prevention strategies and
                        interventions through nutrition and lifestyle
                        modifications.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(1)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[1] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/food-macro.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Food Macro and Micro Elements
                        </h2>
                        <p className="text-muted">
                          Gain a deep understanding of macronutrients (proteins,
                          fats, carbohydrates) and micronutrients (vitamins,
                          minerals). Learn their roles in supporting the body's
                          overall functioning, growth, and repair.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/food-macro.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Food Macro and Micro Elements{" "}
                      </h2>
                      <p className="text-muted">
                        Gain a deep understanding of macronutrients (proteins,
                        fats, carbohydrates) and micronutrients
                        {/* {showMore[2] ? (
                          <> */}
                        (vitamins, minerals). Learn their roles in supporting
                        the body's overall functioning, growth, and repair.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(2)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[2] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Food Digestion System
                        </h2>
                        <p className="text-muted">
                          Discover the intricacies of the digestive system, from
                          ingestion to nutrient absorption. This module explains
                          how food is broken down and utilized by the body and
                          the role of gut health in overall wellness.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/food-digestion-system.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/food-digestion-system.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Food Digestion System
                      </h2>
                      <p className="text-muted">
                        Discover the intricacies of the digestive system, from
                        ingestion to nutrient absorption.{" "}
                        {/* {showMore[1] ? (
                          <> */}
                        This module explains how food is broken down and
                        utilized by the body and the role of gut health in
                        overall wellness.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(1)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[1] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/weight-management.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Weight Management
                        </h2>
                        <p className="text-muted">
                          Learn effective strategies for weight management,
                          including calorie balancing, the role of metabolism,
                          and sustainable diet plans that promote fat loss
                          without sacrificing health.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/weight-management.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Weight Management
                      </h2>
                      <p className="text-muted">
                        Learn effective strategies for weight management,
                        including calorie balancing, the{" "}
                        {/* {showMore[2] ? (
                          <> */}
                        role of metabolism, and sustainable diet plans that
                        promote fat loss without sacrificing health.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(2)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[2] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Blood Sugar Control
                        </h2>
                        <p className="text-muted">
                          Understand how blood sugar levels impact overall
                          health and how to manage conditions like insulin
                          resistance and diabetes. Learn about dietary
                          interventions to maintain optimal blood sugar balance.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/blood-sugar-control.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/blood-sugar-control.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Blood Sugar Control
                      </h2>
                      <p className="text-muted">
                        Understand how blood sugar levels impact overall health
                        and how to manage conditions{" "}
                        {/* {showMore[1] ? (
                          <> */}
                        like insulin resistance and diabetes. Learn about
                        dietary interventions to maintain optimal blood sugar
                        balance.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(1)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[1] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/hormones-of-the-body.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Important Hormones of the Body
                        </h2>
                        <p className="text-muted">
                          Delve into the world of hormones and how they regulate
                          essential body functions such as metabolism, stress
                          response, reproduction, and mood. Learn how nutrition
                          can influence hormonal balance.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/hormones-of-the-body.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Important Hormones of the Body
                      </h2>
                      <p className="text-muted">
                        Delve into the world of hormones and how they regulate
                        essential body functions such as{" "}
                        {/* {showMore[2] ? (
                          <> */}
                        metabolism, stress response, reproduction, and mood.
                        Learn how nutrition can influence hormonal balance.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(2)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[2] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Worst Food Elements
                        </h2>
                        <p className="text-muted">
                          Identify harmful food elements such as trans fats,
                          processed sugars, and additives that can negatively
                          impact health. Learn how to reduce or eliminate these
                          from your diet to prevent disease and promote
                          wellness.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/worst-food.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/worst-food.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Worst Food Elements
                      </h2>
                      <p className="text-muted">
                        Identify harmful food elements such as trans fats,
                        processed sugars, and additives that can{" "}
                        {/* {showMore[1] ? (
                          <> */}
                        negatively impact health. Learn how to reduce or
                        eliminate these from your diet to prevent disease and
                        promote wellness.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(1)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[1] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/essential-food.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Essential Food Elements
                        </h2>
                        <p className="text-muted">
                          Explore the nutrients essential for health, including
                          vitamins, minerals, omega-3 fatty acids, and
                          antioxidants. Learn how to incorporate these elements
                          into a balanced diet to support energy, immunity, and
                          longevity.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/essential-food.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Essential Food Elements
                      </h2>
                      <p className="text-muted">
                        Explore the nutrients essential for health, including
                        vitamins, minerals, omega-3{" "}
                        {/* {showMore[2] ? (
                          <> */}
                        fatty acids, and antioxidants. Learn how to incorporate
                        these elements into a balanced diet to support energy,
                        immunity, and longevity.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(2)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[2] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Bone Health
                        </h2>
                        <p className="text-muted">
                          Understand the importance of nutrition in maintaining
                          strong, healthy bones. Learn about calcium, vitamin D,
                          and other key nutrients that support bone density and
                          prevent conditions like osteoporosis.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/bone-health.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/bone-health.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Bone Health
                      </h2>
                      <p className="text-muted">
                        Understand the importance of nutrition in maintaining
                        strong, healthy bones. Learn about{" "}
                        {/* {showMore[1] ? (
                          <> */}
                        calcium, vitamin D, and other key nutrients that support
                        bone density and prevent conditions like osteoporosis.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(1)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[1] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/stress-control.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Stress Control
                        </h2>
                        <p className="text-muted">
                          Explore the relationship between stress and health,
                          and learn nutrition-based strategies to manage stress
                          effectively. This module also covers lifestyle changes
                          that help reduce stress and its impact on the body.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/stress-control.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Stress Control
                      </h2>
                      <p className="text-muted">
                        Explore the relationship between stress and health, and
                        learn nutrition-based strategies{" "}
                        {/* {showMore[2] ? (
                          <> */}
                        to manage stress effectively. This module also covers
                        lifestyle changes that help reduce stress and its impact
                        on the body.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(2)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[2] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Important Blood Tests for Ensuring Sound Health
                        </h2>
                        <p className="text-muted">
                          Learn about key blood tests that can provide insights
                          into your overall health, including cholesterol
                          levels, blood sugar, liver function, and inflammation
                          markers. Understanding these tests helps in creating
                          effective health plans.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/blood-tests.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/blood-tests.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Important Blood Tests for Ensuring Sound Health
                      </h2>
                      <p className="text-muted">
                        Learn about key blood tests that can provide insights
                        into your overall health, including{" "}
                        {/* {showMore[1] ? (
                          <> */}
                        cholesterol levels, blood sugar, liver function, and
                        inflammation markers. Understanding these tests helps in
                        creating effective health plans.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(1)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[1] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/high-uric-acid.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          High Uric Acid and Gout
                        </h2>
                        <p className="text-muted">
                          Understand the causes and symptoms of high uric acid
                          and gout. Learn dietary interventions to manage and
                          prevent these painful conditions, focusing on reducing
                          uric acid levels naturally.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/high-uric-acid.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        High Uric Acid and Gout
                      </h2>
                      <p className="text-muted">
                        Understand the causes and symptoms of high uric acid and
                        gout. Learn dietary interventions{" "}
                        {/* {showMore[2] ? (
                          <> */}
                        to manage and prevent these painful conditions, focusing
                        on reducing uric acid levels naturally.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(2)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[2] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Autoimmune Diseases
                        </h2>
                        <p className="text-muted">
                          Delve into autoimmune diseases such as rheumatoid
                          arthritis, lupus, and celiac disease. Learn about
                          nutritional strategies that can help manage symptoms
                          and improve quality of life for individuals with these
                          conditions.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/autoimmune-diseases.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/autoimmune-diseases.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Autoimmune Diseases
                      </h2>
                      <p className="text-muted">
                        Delve into autoimmune diseases such as rheumatoid
                        arthritis, lupus, and celiac disease.{" "}
                        {/* {showMore[1] ? (
                          <> */}
                        Learn about nutritional strategies that can help manage
                        symptoms and improve quality of life for individuals
                        with these conditions.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(1)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[1] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/health-plan.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Perfect Plan to Achieve Best Health
                        </h2>
                        <p className="text-muted">
                          Create a comprehensive, personalized health plan. This
                          module focuses on combining diet, exercise, and
                          lifestyle strategies to help individuals reach optimal
                          health and wellness.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/health-plan.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Perfect Plan to Achieve Best Health
                      </h2>
                      <p className="text-muted">
                        Create a comprehensive, personalized health plan. This
                        module focuses on combining diet,{" "}
                        {/* {showMore[2] ? (
                          <> */}
                        exercise, and lifestyle strategies to help individuals
                        reach optimal health and wellness.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(2)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[2] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Exercise Plan
                        </h2>
                        <p className="text-muted">
                          Learn how to develop exercise plans that complement
                          nutritional strategies. This module covers the basics
                          of fitness, including strength, flexibility, and
                          cardiovascular health, and how these fit into a
                          healthy lifestyle.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/exercise-plan.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/exercise-plan.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Exercise Plan
                      </h2>
                      <p className="text-muted">
                        Learn how to develop exercise plans that complement
                        nutritional strategies. This{" "}
                        {/* {showMore[1] ? (
                          <> */}
                        module covers the basics of fitness, including strength,
                        flexibility, and cardiovascular health, and how these
                        fit into a healthy lifestyle.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(1)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[1] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/heart-disease.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          How to Protect Against Heart Diseases, Control Blood
                          Pressure, and High Cholesterol
                        </h2>
                        <p className="text-muted">
                          Gain essential knowledge on how to protect heart
                          health through nutrition. This includes managing
                          cholesterol levels, blood pressure, and preventing
                          heart disease through dietary changes and lifestyle
                          interventions.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/heart-disease.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        How to Protect Against Heart Diseases, Control Blood
                        Pressure, and High Cholesterol
                      </h2>
                      <p className="text-muted">
                        Gain essential knowledge on how to protect heart health
                        through nutrition. This{" "}
                        {/* {showMore[2] ? (
                          <> */}
                        includes managing cholesterol levels, blood pressure,
                        and preventing heart disease through dietary changes and
                        lifestyle interventions.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(2)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[2] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Role of Health and Wellness Consultant & How to
                          Prepare Health Plans
                        </h2>
                        <p className="text-muted">
                          Learn the responsibilities of a health and wellness
                          consultant. Understand how to assess clients' health
                          needs, create individualized health plans, and provide
                          guidance on achieving sustainable wellness goals.
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/health-consultant.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/health-consultant.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Role of Health and Wellness Consultant & How to Prepare
                        Health Plans
                      </h2>
                      <p className="text-muted">
                        Learn the responsibilities of a health and wellness
                        consultant. Understand how to{" "}
                        {/* {showMore[1] ? (
                          <> */}
                        assess clients' health needs, create individualized
                        health plans, and provide guidance on achieving
                        sustainable wellness goals.
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(1)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[1] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CourseReviews />
      <section>
        <div className="container-fluid margintop p-0">
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/img/what-does-this-courses-include-offline.webp"
            }
            className="img-fluid mt-2 d-none d-md-block"
          />
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/img/what-does-this-courses-include-offline-mobile.webp"
            }
            className="img-fluid mt-2 d-block d-md-none"
          />
        </div>
      </section>
      <section className="mt-md-5 mt-3">
        <div className="container-fluid">
          <div className="container">
            <div className="covid mb-4 text-center">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">Our Institute </span>
                Accreditation
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row mt-4 align-items-center">
              <div className="col-lg-6">
                <div className="demoo">
                  <div className="new-h3">
                    <h2 className="ml-0 h3-fs fs-34">Why FGIIT?</h2>
                  </div>
                  <div>
                    <ul className="p-0 new-li">
                      <li>
                        <i className="fas fa-check"></i> Approved by Government
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Internationally
                        Accredited Certification
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Industry Expert
                        Faculties with 5+ years in Business
                      </li>
                      <li>
                        <i className="fas fa-check"></i> 100% Placement Support
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Mandatory Internship at
                        Top Firms
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Bilingual Learning
                        Material: English and Hindi
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Recorded Video Lectures
                        Available
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Lifetime Support for
                        Students
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/mobile-all-logo.webp"
                    }
                    className="img-fluid lazy"
                    alt="FG Group"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container-fluid">
          <div className="container blog2">
            <div className="row mt-4">
              <div className="col-lg-6 certi text-center">
                <p className="my-4">demo lecture</p>
                <div className="ply1">
                  <img
                    alt="Fg Group"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/intro-health-wellness.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-btn play-btn">
                    <a
                      aria-label="Fg Group"
                      onClick={() => openVideoModal("9ggHN60bYKo")}
                      className="custom clickof"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 certi text-center">
                <p className="my-4">Health & Wellness demo Certificate</p>
                <LazyLoadImage
                  effect="blur"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/recorded-session-certificate-6.webp"
                  }
                  width="90%"
                  alt="Health & Wellness Masterclass course certificate"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurOfflineStudents />
      <section>
        <div className="container-fluid margintop">
          <div className="container blog2 pb-5">
            <div className="">
              <div className="covid text-center">
                <h2 className="mt-2 h2-fs">
                  Master Your Skills with an{" "}
                  <span className="m-0 text-blue-color">
                    Offline Advance Clinical Nutrition Course
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe d-md-block d-none">
                    <p>
                      If you're looking to build expertise in the field of
                      nutrition, enrolling in an Offline Advance Clinical
                      Nutrition program is a great choice. Unlike online
                      courses, offline training offers hands-on learning, direct
                      interaction with experts, and real-world case studies to
                      enhance your practical skills.
                    </p>
                    <p>
                      A clinical nutrition course focuses on understanding the
                      science of food, diet therapy, and disease management
                      through nutrition. You will learn about medical nutrition
                      therapy, dietary planning for various health conditions,
                      and the impact of nutrients on the body. This course is
                      essential for those looking to work in hospitals, wellness
                      centers, or as independent clinical nutritionists.
                    </p>
                    <p>
                      With an Offline Advance Clinical Nutrition program, you
                      get access to practical workshops, live demonstrations,
                      and expert-led sessions. The course includes training on
                      patient assessment, personalized diet planning, and the
                      latest advancements in clinical nutrition. Learning in a
                      physical setting ensures better engagement, networking
                      opportunities, and real-time feedback from experienced
                      professionals.
                    </p>
                    <p>
                      By completing a clinical nutrition course, you open doors
                      to a rewarding career in healthcare and wellness. Whether
                      you aim to work with patients, develop diet plans, or
                      conduct research, this course provides the knowledge and
                      skills needed to excel in the field.
                    </p>
                  </div>
                  <div className="describe d-md-none d-block">
                    <p>
                      If you're looking to build expertise in the field of
                      nutrition, enrolling in an Offline Advance Clinical
                      Nutrition program is a great choice. Unlike online
                      courses, offline training offers hands-on learning, direct
                      interaction with experts, and real-world case studies to
                      enhance your practical skills.
                    </p>
                    {showMorev ? (
                      <span className="m-0">
                        <p>
                          A clinical nutrition course focuses on understanding
                          the science of food, diet therapy, and disease
                          management through nutrition. You will learn about
                          medical nutrition therapy, dietary planning for
                          various health conditions, and the impact of nutrients
                          on the body. This course is essential for those
                          looking to work in hospitals, wellness centers, or as
                          independent clinical nutritionists.
                        </p>
                        <p>
                          With an Offline Advance Clinical Nutrition program,
                          you get access to practical workshops, live
                          demonstrations, and expert-led sessions. The course
                          includes training on patient assessment, personalized
                          diet planning, and the latest advancements in clinical
                          nutrition. Learning in a physical setting ensures
                          better engagement, networking opportunities, and
                          real-time feedback from experienced professionals.
                        </p>
                        <p>
                          By completing a clinical nutrition course, you open
                          doors to a rewarding career in healthcare and
                          wellness. Whether you aim to work with patients,
                          develop diet plans, or conduct research, this course
                          provides the knowledge and skills needed to excel in
                          the field.
                        </p>
                      </span>
                    ) : (
                      <p id="dotsx" className=" d-inline-block m-0">
                        ...
                      </p>
                    )}
                    <p
                      onClick={toggleReadMorev}
                      id="myBtnrg"
                      className="text-info m-0 my-sm-2 my-md-0 ml-1 d-inline-block"
                    >
                      {showMorev ? "Read less" : "Read more"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop d-block d-md-none">
        <div className="container-fluid p-0">
          <div>
            <Link to="/fgiit/fitness-training-and-placement">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/img/tpcell.webp"}
                width="100%"
                className="lazy"
                alt="fggroup"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="margintop d-none d-md-block">
        <div className="container-fluid p-0">
          <div>
            <Link to="/fgiit/fitness-training-and-placement">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/tpcell-d.webp"
                }
                width="100%"
                className="lazy"
                alt="fggroup"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="fwg-webinar-page-faq margintop mt-md-5 mt-4 pt-md-5 pt-0 pb-md-4 pb-0">
        <div className="container">
          <div className="covid text-center">
            <h2 className="h2-fs">
              Frequently
              <span className="m-0 text-blue-color"> Asked Questions</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
          <div className="">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-wrapper">
                <div className="faq-item">
                  <div className="faq-question">{item.question}</div>
                  <div className="icon-container">
                    <i className="fas fa-chevron-right active"></i>
                  </div>
                </div>
                <div
                  className="faq-answer active"
                  style={{ maxHeight: "none" }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CourseReviewSection course_id="6297d5e833971335bde5e23e" />
      <FgiitFooter />
    </>
  );
}

export default ClinicalDietitian;
