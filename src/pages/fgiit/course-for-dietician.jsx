import React, { useState } from "react";
import "../../assets/css/home.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import { Link } from "react-router-dom";
import CourseReviewSection from "../../components/partials/review/course-review";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import OfflineCourseForm from "../../components/offline-course/offlineCourseForm";
import { OfflineDiplomaNutritionCourseData } from "../../components/offline-course/OfflineCourseDataLoader";
import OwlCarousel from "react-owl-carousel";
import ModalVideo from "react-modal-video";
import { Helmet } from "react-helmet";
import CourseReviews from "../../components/fgiit/courseReviews";
import OurOfflineStudents from "../../components/course/ourOfflineStudents";

function CourseForDietician() {
  const canonicalUrl = window.location.href;
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse the currently active item
    } else {
      setActiveIndex(index); // Set the clicked item as active
    }
  };
  const [showMore, setShowMore] = useState(Array(5).fill(false));

  const toggleReadMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const faqItems = [
    {
      question:
        "What is the Offline Diploma in Personal Training Course by FGIIT?",
      answer:
        "The Offline Diploma in Personal Training Course by FGIIT is a comprehensive 3-month program designed to certify individuals as personal trainers. It offers a blend of offline and live Zoom classes, recorded video lectures, e-books, and practical projects to help students develop the skills required for personal training. Graduates receive a government-approved and internationally accredited certification.",
    },
    {
      question:
        "How long does the Offline Diploma in Personal Training Course last?",
      answer:
        "The course spans 3 months and includes a mix of offline classes and live Zoom sessions, ensuring flexibility and convenience for all learners. Additionally, students have access to recorded video lectures and e-books to supplement their learning.",
    },
    {
      question: "What are the benefits of enrolling in this course at FGIIT?",
      answer:
        "Students benefit from government-approved and internationally accredited certification, expert faculties with over 5 years of industry experience, 100% placement support, mandatory internship, bilingual learning materials, and lifetime support.",
    },

    {
      question:
        "Is there an internship included in the Diploma in Personal Training Course?",
      answer:
        "Yes, a mandatory internship at top firms is a key component of the course, providing hands-on experience in real-world settings.",
    },
    {
      question: "How is the Diploma in Personal Training Course delivered?",
      answer:
        "The course is delivered through offline classroom sessions, live Zoom classes, and access to recorded video lectures. E-books and other study materials are provided for additional support.",
    },
    {
      question: "What kind of support do students receive during the course?",
      answer:
        "FGIIT provides comprehensive support, including team chat support, access to recorded sessions, and lifetime student support.",
    },
    {
      question:
        "What is the cost of the Diploma in Personal Training Course at FGIIT?",
      answer:
        "The course is priced at ₹41,990, which includes GST. This fee covers all study materials, including e-books, recorded sessions, live classes, and practical projects.",
    },
    {
      question: "Are there any exams or assessments in the course?",
      answer:
        "Yes, the course includes both MCQ-based exams and a case study-based project to assess understanding and practical application.",
    },
    {
      question: "What certification do I receive after completing the course?",
      answer:
        "Upon successful completion, students receive a government-approved and internationally accredited certification, widely recognized in the fitness industry.",
    },
    {
      question: "Does FGIIT offer job placement support?",
      answer:
        "Yes, FGIIT provides 100% placement support, including connections with top firms to assist in securing employment within the fitness industry.",
    },
    {
      question: "Is this course available in both English and Hindi?",
      answer:
        "Yes, FGIIT offers bilingual learning materials, available in both English and Hindi, making the course accessible to a broader audience.",
    },
    {
      question:
        "Can I access the course materials after completing the course?",
      answer:
        "Yes, students have lifetime access to recorded video lectures, and lifetime support is provided to assist graduates in their ongoing personal training careers.",
    },
    {
      question:
        "Who are the instructors for the Diploma in Personal Training Course?",
      answer:
        "The course is taught by industry experts with over 5 years of experience, ensuring top-tier education and practical training.",
    },
    {
      question: "What makes FGIIT's Diploma in Personal Training stand out?",
      answer:
        "FGIIT stands out with government-approved certification, international accreditation, mandatory internships, 100% placement support, bilingual materials, and lifetime student support.",
    },
    {
      question: "How can I enroll in the course?",
      answer:
        "To enroll, send a WhatsApp message to +91-8866842520 or visit the FGIIT website for more information on the application process and course schedules.",
    },
  ];

  const reviewImages = [
    "/assets/images/img/disha.webp",
    "/assets/images/img/gauresh.webp",
    "/assets/images/img/rname.webp",
    "/assets/images/img/deepak-yadav.webp",
  ];

  const reviewses = [
    {
      name: "Disha Chaudhari",
      stars: 5,
      review:
        "The experience was very good.All the points explained very well.If there is any doubt then that too is cleared personally.I m happy that I did the course from FGIIT. ",
      image: reviewImages[0], // Use images for reviews
    },
    {
      name: "Gauresh Bhosale",
      stars: 5,
      review:
        "I thoroughly enjoyed the online course at FGIIT-it was incredibly beneficial and helpful. The instructor's knowledge and articulation were excellent.",
      image: reviewImages[1], // Use images for reviews
    },
    {
      name: "Radha Arora",
      stars: 5,
      review:
        "Being a part of FGIIT Surat was the best decision of my life. I had the best learning experience at this institute. The teachers were extremely knowledgeable and supportive through the term.",
      image: reviewImages[2], // Use images for reviews
    },
    {
      name: "Deepak Yadav",
      stars: 5,
      review:
        "Firstly i would like to thanks FGIIT team This course is very easy to understand, easy to learn Financially affordable I think i had not any doubt after watching a class Thanks Gautam Sir",
      image: reviewImages[3], // Use images for reviews
    },
  ];

  const options = {
    loop: true,
    margin: 20,
    // nav: true,
    dots: false,
    autoplay: true,
    // navText: [
    //   '<i class="fas fa-arrow-left"></i>',
    //   '<i class="fas fa-arrow-right"></i>',
    // ],
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
  const testimonials = [
    {
      name: "Nikita Rana",
      description:
        "Nikita shares his experience of completing the Diploma in Nutrition at FGIIT. He talks about how the course helped him better understand nutrition fundamentals, enabling him to confidently plan balanced diets for different individuals. nikita emphasizes the practical applicability of the course content in real-life scenarios and his career.",
      videoUrl: "Y6Eo5S61bCU",
      imageUrl: "/assets/images/fgiit/student-review/nikitarana.webp",
      date: "13 March 2023",
    },
    {
      name: "Shushma Agarwal",
      description:
        "Shushma describes the Diploma in Nutrition as life-changing. In her video, she discusses how the program improved her knowledge of healthy eating habits and the role of nutrition in disease management. Shushma highlights the professionalism of the instructors and the value of the course material.",
      videoUrl: "l47Ou9sboww",
      imageUrl: "/assets/images/fgiit/student-review/shushma.webp",
      date: "13 March 2023",
    },
    {
      name: "Palak Vyas",
      description:
        "In her review, Sneha shares how the Diploma in Nutrition course at FGIIT exceeded her expectations. She loved the interactive learning environment and how the practical sessions allowed her to gain hands-on experience in meal planning. She recommends the course to anyone looking to deepen their understanding of nutrition.",
      videoUrl: "QMS8mnzWY",
      imageUrl: "/assets/images/fgiit/student-review/palak.webp",
      date: "13 March 2023",
    },
    {
      name: "Patel Saraswati",
      description:
        "Saraswati video highlights the skills she gained from the Diploma in Nutrition course at FGIIT. She explains how the course helped her understand the intricacies of dietetics and the science behind nutrition, which she now applies in her personal and professional life. Aditi thanks the instructors for their continuous support.",
      videoUrl: "bZPQ0S1y3PQ",
      imageUrl: "/assets/images/fgiit/student-review/saraswati.webp",
      date: "13 March 2023",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Become a Pro with a Certified Course for Dietician</title>
        <meta
          name="description"
          content="Enroll in a certified course for dietician and build your expertise in nutrition. Gain skills, get certified, and start today!"
        />
        <meta
          name="keyword"
          content="Offline Diploma In Nutrition Course, course for dietitians, Offline course for dietitians, course for dietitians offline, Fgiit Offline Diploma In Nutrition Course, Diploma In Nutrition Course Offline, Offline Nutrition Course, Nutrition Course Offline, Diploma In Nutrition Course, Nutrition Course, fitness and nutrition courses, dietician course, nutrition certification, certified nutritionist course, sports nutrition courses, nutrition coach certification, diet and nutrition course, nutrition courses near me, health and nutrition courses, food and nutrition course, clinical nutrition courses, diploma of nutrition, sports and nutrition course, Advanced Nutrition Course, Accredited Nutrition Course, Holistic Nutrition Course, Functional Nutrition Course, Professional Nutritionist Course, Diploma in Clinical Nutrition, Sports Dietitian Course, Nutrition Science Course, Weight Loss Nutrition Course, Personal Trainer Nutrition Certification, Certified Dietitian Program, Dietitian and Nutritionist Certification, Exercise Science and Nutrition Course, dietitian course, Best Nutrition Certification, Accredited Dietetics Course, Nutrition Coach Training, Nutrition and Fitness Certification, Wellness and Nutrition Course, Nutritional Therapy Course, Health Coaching and Nutrition Certification, Diploma in Nutrition and Wellness, Best Dietitian Certification, Accredited Nutritionist Certification, Fitness and Health Nutrition Certification, Personal Fitness Nutrition Course, Diploma in Holistic Nutrition, Dietitian Certification Course, Nutrition and Dietetics Course, bachelor of nutrition and dietetics, nutrition and dietetics, diploma in nutrition and dietetics"
        />
        <meta
          property="og:title"
          content="Become a Pro with a Certified Course for Dietician"
        />
        <meta
          property="og:description"
          content="Enroll in a certified course for dietician and build your expertise in nutrition. Gain skills, get certified, and start today!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fgiit/course-for-dietician"
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
        Offline Diploma In Nutrition Course, course for dietitians, Offline course for dietitians, course for dietitians offline, Fgiit Offline Diploma In Nutrition Course, Diploma In Nutrition Course Offline, Offline Nutrition Course, Nutrition Course Offline, Diploma In Nutrition Course, Nutrition Course, fitness and nutrition courses, dietician course, nutrition certification, certified nutritionist course, sports nutrition courses, nutrition coach certification, diet and nutrition course, nutrition courses near me, health and nutrition courses, food and nutrition course, clinical nutrition courses, diploma of nutrition, sports and nutrition course, Advanced Nutrition Course, Accredited Nutrition Course, Holistic Nutrition Course, Functional Nutrition Course, Professional Nutritionist Course, Diploma in Clinical Nutrition, Sports Dietitian Course, Nutrition Science Course, Weight Loss Nutrition Course, Personal Trainer Nutrition Certification, Certified Dietitian Program, Dietitian and Nutritionist Certification, Exercise Science and Nutrition Course, dietitian course, Best Nutrition Certification, Accredited Dietetics Course, Nutrition Coach Training, Nutrition and Fitness Certification, Wellness and Nutrition Course, Nutritional Therapy Course, Health Coaching and Nutrition Certification, Diploma in Nutrition and Wellness, Best Dietitian Certification, Accredited Nutritionist Certification, Fitness and Health Nutrition Certification, Personal Fitness Nutrition Course, Diploma in Holistic Nutrition, Dietitian Certification Course, Nutrition and Dietetics Course, bachelor of nutrition and dietetics, nutrition and dietetics, diploma in nutrition and dietetics
      </p>
      <SimpleHeader />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row position-relative">
              <div className="col-lg-7 course-detail-main">
                <div className="course-card-page-design mr-md-4 black-before">
                  <div className="course-scroll">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        width="100%"
                        alt="Fg Group"
                        style={{ borderRadius: "10px" }}
                        className=" course-detail"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/dnc-second-new.webp"
                        }
                      />
                      <div className="video-btn play-btn">
                        <a
                          aria-label="Fg Group"
                          onClick={() => openVideoModal("sbBI0l3noqE")}
                          className="custom clickof"
                        >
                          <span className="newthing">
                            <i className="fas fa-play"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="d-md-block d-none">
                      <div className="course-info">
                        <h2 className="h6-fs course-title">Course Info</h2>
                        <ul className="course-list">
                          {OfflineDiplomaNutritionCourseData?.info ? (
                            <>
                              <li className="fs-1">
                                <i className="fas fa-clock"></i>
                                {OfflineDiplomaNutritionCourseData.info[0]}
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {OfflineDiplomaNutritionCourseData.info[1]}
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {OfflineDiplomaNutritionCourseData.info[2]}
                              </li>
                              <li>
                                <i className="fas fa-file-signature"></i>
                                {OfflineDiplomaNutritionCourseData.info[3]}
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <i className="fas fa-clock"></i>
                                {
                                  OfflineDiplomaNutritionCourseData
                                    .secondInfo[0]
                                }
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {
                                  OfflineDiplomaNutritionCourseData
                                    .secondInfo[1]
                                }
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {
                                  OfflineDiplomaNutritionCourseData
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
                  courseData={OfflineDiplomaNutritionCourseData}
                  whatsappMessage="Hello, I wanted to know more about the Offline Diploma In Nutrition Course."
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
                Info
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
                          Module 1: Understanding the Human body
                        </h2>
                        <p className="text-muted">
                          Students will explore the fundamentals of human
                          anatomy and physiology, focusing on how the body's
                          systems and muscles respond to exercise.This
                          foundation enables them to design effective,
                          personalized training regimens based on scientific
                          understanding of movement and function.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Human Anatomy</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Human Physiology</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Human Kinesiology</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Energy Metabolism</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Introduction To Living Beings: Physiology</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Anatomy Of Our Human Body</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/sir-new-one.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/sir-new-one.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 1: Understanding the Human body
                      </h2>
                      <p className="text-muted">
                        Students will explore the fundamentals of human anatomy
                        and physiology, focusing on how the body's{" "}
                        {/* {showMore[1] ? (
                          <> */}
                        systems and muscles respond to exercise.This foundation
                        enables them to design effective, personalized training
                        regimens based on scientific understanding of movement
                        and function.
                        <div className="row">
                          <ul className="mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Human Anatomy</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Human Physiology</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Human Kinesiology</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Energy Metabolism</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Introduction To Living Beings: Physiology</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Anatomy Of Our Human Body</b>
                            </li>
                          </ul>
                        </div>
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
                          src="/assets/images/blog/walkouts.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 2: Basics of Nutrition and the Fitness Industry
                        </h2>
                        <p className="text-muted">
                          This module delves into the principles of nutrition
                          and weight management, emphasizing dietary planning
                          and metabolism. It highlights the synergy between diet
                          and exercise, equipping students to craft sustainable,
                          goal-oriented diet plans for clients, fostering
                          long-term health and fitness.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Carbohydrates</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Protein</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Lipids</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Water</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Energy metabolism</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Minerals</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b> Overview of the fitness industry</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/blog/walkouts.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 2: Basics of Nutrition and the Fitness Industry
                      </h2>
                      <p className="text-muted">
                        This module delves into the principles of nutrition and
                        weight management, emphasizing dietary planning{" "}
                        {/* {showMore[2] ? (
                          <> */}
                        and metabolism.It highlights the synergy between diet
                        and exercise, equipping students to craft sustainable,
                        goal - oriented diet plans for clients, fostering long -
                        term health and fitness.
                        <div className="row">
                          <ul className="mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Carbohydrates</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Protein</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Lipids</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Water</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Energy metabolism</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Minerals</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Overview of the fitness industry</b>
                            </li>
                          </ul>
                        </div>
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
                          Module 3: Meal Planning and Food Groups
                        </h2>
                        <p className="text-muted">
                          Combining nutrition and fitness, this module
                          emphasizes injury prevention and management through
                          tailored meal plans and strength-training principles.
                          It prepares students to enhance performance while
                          minimizing injury risks through informed dietary and
                          fitness strategies.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>Meal Planning and Food Groups</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Fundamentals Of Meal Planning</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Food Groups</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Food Exchange List</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Methods Of Improving Nutritional Quality Of
                                  Foods
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/online-1.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/online-1.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 3: Meal Planning and Food Groups
                      </h2>
                      <p className="text-muted">
                        Combining nutrition and fitness, this module emphasizes
                        injury prevention and management through{" "}
                        {/* {showMore[3] ? (
                          <> */}
                        tailored meal plans and strength - training
                        principles.It prepares students to enhance performance
                        while minimizing injury risks through informed dietary
                        and fitness strategies.
                        <div className="row">
                          <ul className="mt-2 pl-3">
                            <li className="list-unstyled text-dark">
                              <b>Meal Planning and Food Groups</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Fundamentals Of Meal Planning</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Food Groups</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Food Exchange List</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Methods Of Improving Nutritional Quality Of
                                Foods
                              </b>
                            </li>
                          </ul>
                        </div>
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(3)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[3] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/anabolic.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 4: Therapeutic Nutrition
                        </h2>
                        <p className="text-muted">
                          This module introduces the role of therapeutic
                          nutrition in recovery, alongside injury prevention and
                          rehabilitation techniques. Students gain expertise in
                          safe recovery protocols and exercises that reduce the
                          risk of future injuries.
                          <div className="row">
                            <ul className="col-md-12 mt-2 pl-3">
                              <li className="list-unstyled">
                                <b>Therapeutic Adaptations Of Normal Diet</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Fluid Diet</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Total Parenteral Nutrient</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Tube Feeding</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Gastro Intestinal Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>
                                  Hernia, Diarrhoea, Conspaon, Pepc Ulcer,
                                  Ulcerve Colis, Crohns Diseases, Dumping
                                  Syndrome, Dysphagia
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>Metabolic Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>
                                  Diabetes, Gout, Hypothyroidism,
                                  Hperthyroidism, Menopause, PCOS, PMS
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>CardiovaScular Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>
                                  Hypertension, Atherosclerosis, Myocardial
                                  infacon
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>Liver Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>
                                  Jaundice, Hepatitis, Diseases of gallbladder
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>Feblife Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Typhoids, Tuberculosis</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Musculoskeletal Disorders</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Osteoarthritis, Osteoporosis</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/anabolic.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 4: Therapeutic Nutrition
                      </h2>
                      <p className="text-muted">
                        This module introduces the role of therapeutic nutrition
                        in recovery, alongside injury prevention and{" "}
                        {/* {showMore[4] ? (
                          <> */}
                        rehabilitation techniques.Students gain expertise in
                        safe recovery protocols and exercises that reduce the
                        risk of future injuries.
                        <div className="row">
                          <ul className="col-md-12 mt-2 pl-3">
                            <li className="list-unstyled">
                              <b>Therapeutic Adaptations Of Normal Diet</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Fluid Diet</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Total Parenteral Nutrient</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Tube Feeding</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Gastro Intestinal Disorders</b>
                            </li>
                            <li className="list-unstyled">
                              <b>
                                Hernia, Diarrhoea, Conspaon, Pepc Ulcer, Ulcerve
                                Colis, Crohns Diseases, Dumping Syndrome,
                                Dysphagia
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>Metabolic Disorders</b>
                            </li>
                            <li className="list-unstyled">
                              <b>
                                Diabetes, Gout, Hypothyroidism, Hperthyroidism,
                                Menopause, PCOS, PMS
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>CardiovaScular Disorders</b>
                            </li>
                            <li className="list-unstyled">
                              <b>
                                Hypertension, Atherosclerosis, Myocardial
                                infacon
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>Liver Disorders</b>
                            </li>
                            <li className="list-unstyled">
                              <b>
                                Jaundice, Hepatitis, Diseases of gallbladder
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>Feblife Disorders</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Typhoids, Tuberculosis</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Musculoskeletal Disorders</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Osteoarthritis, Osteoporosis</b>
                            </li>
                          </ul>
                        </div>
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>

                    {/* <span
                      onClick={() => toggleReadMore(4)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[4] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 5: Weight Management Nutrition
                        </h2>
                        <p className="text-muted">
                          This module addresses advanced nutritional strategies
                          and the implications of steroid use in fitness.
                          Students learn to evaluate risks and benefits while
                          guiding clients toward healthier, sustainable
                          performance enhancement methods.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled">
                                <b>Diet For Healthy Skin, Hair & Nails</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Nutrition For Night Shift Workers</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Food Allergies & Food Intolerance</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Weight Management & Obesity</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/online-2.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/online-2.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 5: Weight Management Nutrition
                      </h2>
                      <p className="text-muted">
                        This module addresses advanced nutritional strategies
                        and the implications of steroid use in fitness.{" "}
                        {/* {showMore[5] ? (
                          <> */}
                        Students learn to evaluate risks and benefits while
                        guiding clients toward healthier, sustainable
                        performance enhancement methods.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Specialized Nutrition Topics</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Diet For Healthy Skin, Hair & Nails</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Nutrition For Night Shift Workers</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Food Allergies & Food Intolerance</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Weight Management & Obesity</b>
                            </li>
                          </ul>
                        </div>
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(5)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[5] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/img/nutrition-during-lifespan.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 6: Nutrition During Lifespan
                        </h2>
                        <p className="text-muted">
                          Nutrition is a critical part of health and
                          development. Better nutrition is related to improved
                          infant, child and maternal health, stronger immune
                          systems, safer pregnancy and childbirth, lower risk of
                          non-communicable diseases (such as diabetes and
                          cardiovascular disease), and longevity. Healthy
                          children learn better.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                Nutrition During Infancy
                              </li>
                              <li className="list-unstyled text-dark">
                                Nutrition During Lactation
                              </li>
                              <li className="list-unstyled text-dark">
                                Nutrition During Pregnancy
                              </li>
                              <li className="list-unstyled text-dark">
                                Nutrition During Childhood
                              </li>
                              <li className="list-unstyled text-dark">
                                Nutrition During Adulthood
                              </li>
                              <li className="list-unstyled text-dark">
                                Nutrition During Older Adults
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/img/nutrition-during-lifespan.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 6: Nutrition During Lifespan
                      </h2>
                      <p className="text-muted">
                        Nutrition is a critical part of health and development.
                        Better nutrition is related to improved infant,{" "}
                        {/* {showMore[6] ? (
                          <> */}
                        child and maternal health, stronger immune systems,
                        safer pregnancy and childbirth, lower risk of
                        non-communicable diseases (such as diabetes and
                        cardiovascular disease), and longevity. Healthy children
                        learn better.
                        <div className="row">
                          <ul className="mt-2 pl-3">
                            <li className="list-unstyled text-dark">
                              Nutrition During Infancy
                            </li>
                            <li className="list-unstyled text-dark">
                              Nutrition During Lactation
                            </li>
                            <li className="list-unstyled text-dark">
                              Nutrition During Pregnancy
                            </li>
                            <li className="list-unstyled text-dark">
                              Nutrition During Childhood
                            </li>
                            <li className="list-unstyled text-dark">
                              Nutrition During Adulthood
                            </li>
                            <li className="list-unstyled text-dark">
                              Nutrition During Older Adults
                            </li>
                          </ul>
                        </div>
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(6)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[6] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 7: Counselling Techniques
                        </h2>
                        <p className="text-muted">
                          Counseling techniques involve strategies such as
                          active listening, empathy, and cognitive-behavioral
                          interventions to support clients' emotional and mental
                          well-being. Methods like reflective listening,
                          motivational interviewing, and narrative therapy help
                          individuals explore their feelings, overcome
                          challenges, and develop healthier coping mechanisms,
                          leading to personal growth and empowerment.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Counselling Skills</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Foundations of Group Fitness</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Group Fitness Class Design and Teaching</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/offline-one.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/offline-one.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 7: Counselling Techniques
                      </h2>
                      <p className="text-muted">
                        Counseling techniques involve strategies such as active
                        listening, empathy, and cognitive-behavioral
                        interventions to support clients' emotional and mental
                        well-being.{" "}
                        {/* {showMore[7] ? (
                          <> */}
                        Methods like reflective listening, motivational
                        interviewing, and narrative therapy help individuals
                        explore their feelings, overcome challenges, and develop
                        healthier coping mechanisms, leading to personal growth
                        and empowerment.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Counselling Skills</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Foundations of Group Fitness</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Group Fitness Class Design and Teaching</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Introduction to Sports Nutrition</b>
                            </li>
                          </ul>
                        </div>
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(7)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[7] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/fgiit/fgiit-webinar-batch-4.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 8: Sports Nutrition
                        </h2>
                        <p className="text-muted">
                          Sports nutrition focuses on optimizing an athlete's
                          diet to enhance performance, recovery, and overall
                          health. A balanced intake of carbohydrates, proteins,
                          fats, and hydration supports energy, muscle repair,
                          and endurance. Proper nutrition helps prevent
                          injuries, boosts stamina, and ensures athletes
                          maintain peak physical and mental performance.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Introduction to Sports Nutrition</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Macronutrients for Sports Performance</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Micronutrients for Sports Performance</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Sports Supplements</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Nutrition for Specific Sports and Populations
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Meal Planning and Periodization</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Sports Nutrition Case Studies and Practical
                                  Applications
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/fgiit/fgiit-webinar-batch-4.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 8: Sports Nutrition
                      </h2>
                      <p className="text-muted">
                        Sports nutrition focuses on optimizing an athlete's diet
                        to enhance performance, recovery, and overall health. A
                        balanced intake of carbohydrates, proteins, fats,{" "}
                        {/* {showMore[8] ? (
                          <> */}
                        and hydration supports energy, muscle repair, and
                        endurance. Proper nutrition helps prevent injuries,
                        boosts stamina, and ensures athletes maintain peak
                        physical and mental performance.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Introduction to Sports Nutrition</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Macronutrients for Sports Performance</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Micronutrients for Sports Performance</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Sports Supplements</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Nutrition for Specific Sports and Populations
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Meal Planning and Periodization</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Sports Nutrition Case Studies and Practical
                                Applications
                              </b>
                            </li>
                          </ul>
                        </div>
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(8)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[8] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 9: Practical Application & Client Management,
                          Behaviour Change
                        </h2>
                        <p className="text-muted">
                          In this hands-on module, students master behavior
                          change techniques and client management strategies. By
                          applying theoretical knowledge in practical settings,
                          they develop skills to motivate and guide clients
                          effectively.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>Theory of behaviour changes</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Client responsibilities</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Creating a positive and supportive training
                                  environment
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Communication strategies for trainers and
                                  clients
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Goal setting and motivation techniques</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/powerlifting-course.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/powerlifting-course.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 9: Practical Application & Client Management,
                        Behavior Change
                      </h2>
                      <p className="text-muted">
                        In this hands-on module, students master behavior change
                        techniques and client management strategies. By{" "}
                        {/* {showMore[9] ? (
                          <> */}
                        applying theoretical knowledge in practical settings,
                        they develop skills to motivate and guide clients
                        effectively.
                        <div className="row">
                          <ul className="mt-2 pl-3">
                            <li className="list-unstyled text-dark">
                              <b>Theory of behavior changes</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Client responsibilities</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Creating a positive and supportive training
                                environment
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Communication strategies for trainers and
                                clients
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Goal setting and motivation techniques</b>
                            </li>
                          </ul>
                        </div>
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(9)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[9] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/img/co3.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 10: How to Design Diet Plan
                        </h2>
                        <p className="text-muted">
                          Focusing on tailored nutrition, this module equips
                          students to create diet plans that align with
                          individual goals.It emphasizes injury prevention
                          through nutritional support, enabling clients to
                          maintain long - term health and performance.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>How to make diet plan of All disesases</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Weight Management Diet Plan</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Sports Nutrition Diet Plan</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Case Studies of Diet plan</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/img/co3.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 10: How to Design Diet Plan
                      </h2>
                      <p className="text-muted">
                        Focusing on tailored nutrition, this module equips
                        students to create diet plans that align with{" "}
                        {/* {showMore[10] ? (
                          <> */}
                        individual goals.It emphasizes injury prevention through
                        nutritional support, enabling clients to maintain long -
                        term health and performance.
                        <div className="row">
                          <ul className="mt-2 pl-3">
                            <li className="list-unstyled text-dark">
                              <b>How to make diet plan of All disesases</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Weight Management Diet Plan</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Sports Nutrition Diet Plan</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Case Studies of Diet plan</b>
                            </li>
                          </ul>
                        </div>
                        {/* </>
                        ) : (
                          <span id="dotsx">...</span>
                        )} */}
                      </p>
                    </div>
                    {/* <span
                      onClick={() => toggleReadMore(10)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[10] ? "Read less" : "Read more"}
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
                <p className="mt-md-4 mb-md-4 mt-0 mb-3">demo lecture</p>
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/online-course-dnc.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="fggroup"
                  />
                  {/* <div className="ply2">
                    <Link
                      className="custom"
                      data-flashy-type="video"
                      to="https://youtu.be/j6u_P9NYp4w"
                    >
                      <i className="far fa-play-circle fs-40 text-white"></i>
                    </Link>
                  </div> */}
                  <div className="video-btn play-btn">
                    <a
                      aria-label="Fg Group"
                      onClick={() => openVideoModal("j6u_P9NYp4w")}
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
                <p className="mt-4 mb-md-4 mb-3">DNC demo Certificate</p>
                <LazyLoadImage
                  effect="blur"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/cnc_demo.webp"
                  }
                  width="90%"
                  alt="personal trainer and gym trainer course certificate"
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
                  Start Your Career with a Certified{" "}
                  <span className="m-0 text-blue-color">
                    Course for Dietician
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      A course for dietician is the perfect pathway for those
                      looking to build a career in health, wellness, and
                      nutrition. These programs provide in-depth knowledge of
                      dietetics, food science, and clinical nutrition, equipping
                      students with the skills to create personalized diet plans
                      and offer expert guidance on healthy eating.
                    </p>
                    <p>
                      A course for nutrition focuses on the science of food,
                      dietary guidelines, and nutritional therapy. Whether you
                      want to work in a hospital, wellness center, or start your
                      private practice, a nutrition course provides the
                      foundation you need to excel. Topics covered typically
                      include macronutrients, micronutrients, metabolism, weight
                      management, and disease prevention.
                    </p>
                    <p>
                      For those looking for a specialized qualification, a
                      diploma in nutrition is a great option. It offers a
                      comprehensive understanding of human nutrition, food
                      safety, and meal planning. A diploma program combines
                      theoretical learning with practical training, including
                      case studies, client consultations, and internships,
                      ensuring hands-on experience.
                    </p>
                    <p>
                      Choosing the right course for dietician or nutrition
                      course from an accredited institution enhances your
                      credibility and career prospects. Whether you opt for a
                      diploma or certification, gaining professional training in
                      nutrition opens doors to exciting job opportunities in the
                      health and wellness industry. Start your journey today!
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

      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <CourseReviewSection course_id="600f7a0ab6868e387407a8c9" />
      <FgiitFooter />
    </>
  );
}

export default CourseForDietician;
