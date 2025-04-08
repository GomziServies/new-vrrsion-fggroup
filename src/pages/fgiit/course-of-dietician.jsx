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
import ModalVideo from "react-modal-video";
import OfflineCourseForm from "../../components/offline-course/offlineCourseForm";
import { OfflineNutriTrainingCourseData } from "../../components/offline-course/OfflineCourseDataLoader";
import OwlCarousel from "react-owl-carousel";
import OurOfflineStudents from "../../components/course/ourOfflineStudents";
import { Helmet } from "react-helmet";
import CourseReviews from "../../components/fgiit/courseReviews";

function CourseOfDietician() {
  const canonicalUrl = window.location.href;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [showMore, setShowMore] = useState(Array(5).fill(false));

  const toggleReadMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  const [showMorev, setShowMorev] = useState(false);

  const toggleReadMorev = () => {
    setShowMorev(!showMorev);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };
  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse the currently active item
    } else {
      setActiveIndex(index); // Set the clicked item as active
    }
  };

  const faqItems = [
    {
      question: "What is the  Nutri Trainer Course by FGIIT?",
      answer:
        "The Nutri Trainer Course by FGIIT is a comprehensive 6-month program designed to certify individuals as personal trainers. It includes offline and live Zoom classes, recorded video lectures, e-books, and practical projects to equip students with the necessary skills. Graduates receive a government-approved and internationally accredited certification.",
    },
    {
      question:
        "What are the benefits of enrolling in this course at FGIIT? Students benefit from:",
      answer:
        "Government-approved and internationally accredited certification Expert faculties with over 5 years of industry experience 100% placement support and a mandatory internship at top firms Bilingual learning materials (English and Hindi) Lifetime support, including access to demo lectures and chat support",
    },
    {
      question: "Is there an internship included in the Nutri Trainer Course?",
      answer:
        "Yes, a mandatory internship at top firms is a key component, giving students hands-on experience in real-world settings to prepare them for successful careers.",
    },
    {
      question: "How is the course delivered?",
      answer:
        "The course combines offline classroom sessions, live Zoom classes, and recorded video lectures. E-books and other study materials are provided for additional support.",
    },
    {
      question: "What kind of support do students receive during the course?",
      answer:
        "FGIIT offers team chat support, access to recorded sessions, and lifetime student support, ensuring learners receive guidance even after completing the course.",
    },
    {
      question: "Are there any exams or assessments in the course?",
      answer:
        "Yes, the course includes MCQ-based exams and a case study-based project to assess understanding and practical application of personal training concepts.",
    },
    {
      question: "What certification do I receive after completing the course?",
      answer:
        "Graduates receive a government-approved and internationally accredited certification, recognized across the fitness industry.",
    },
    {
      question: "Does FGIIT offer job placement support?",
      answer:
        "Yes, FGIIT provides 100% placement support, assisting students in securing employment with top firms in the fitness industry.",
    },
    {
      question: "Is this course available in both English and Hindi?",
      answer:
        "Yes, FGIIT offers bilingual learning materials in both English and Hindi to ensure accessibility for a broader audience.",
    },
    {
      question:
        "Can I access the course materials after completing the course?",
      answer:
        "Yes, students have lifetime access to recorded video lectures and lifetime support for their ongoing personal training careers.",
    },
    {
      question: "How is FGIIT's course different from other academies?",
      answer:
        "FGIIT's course includes unique topics such as group instructor training, anabolics and androgenic steroids, powerlifting, and injury rehabilitation. This makes FGIIT the most knowledgeable and value-for-money course in the industry.",
    },
    {
      question: "Do I have to pay the full fees at once?",
      answer:
        "No, while you can pay in full, FGIIT also offers scholarships to deserving students and EMI options for fee payments.",
    },
    {
      question: "How can I enroll in the course?",
      answer:
        "To enroll, simply send a WhatsApp message to the provided contact number (+91 88668 42520) or visit the FGIIT website for more information on the application process.",
    },
  ];

  const reviewImages = [
    "/assets/images/fwg/sanjeev.webp",
    "/assets/images/fwg/shailesh.webp",
    "/assets/images/fwg/pankaj.webp",
    "/assets/images/fwg/ramiz.webp",
  ];

  const reviewses = [
    {
      name: "Shailesh Athawale",
      stars: 5,
      review:
        "Best Place to learn. The video lectures were really helpful. The way Gautam Sir explained each topic was really great. It was so easy to understand. Overall, I can say is that this institute is one of the best and one can surely rely on.",
      image: reviewImages[1], // Use images for reviews
    },
    {
      name: "Pankaj Dey",
      stars: 5,
      review:
        "Best Place to learn. The video lectures were really helpful. The way Gautam Sir explained each topic was really great. It was so easy to understand. Overall, I can say is that this institute is one of the best and one can surely rely on.",
      image: reviewImages[2], // Use images for reviews
    },
    {
      name: "Ramish Parvez",
      stars: 5,
      review:
        "FGIIT is very good institute, the trainers and lecturer taught us in very easy language and gave us knowledgable information, and also which is helpful in fitness trainer line in future. All team members of FGIIT are good in nature.",
      image: reviewImages[3], // Use images for reviews
    },
  ];

  const options = {
    loop: true,
    margin: 20,
    dots: false,
    autoplay: true,
    // nav: true,
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
      name: "Divya Chauhan",
      description:
        "Divya review describes her journey in the FGIIT Nutri Trainer course. She discusses how the course transformed her understanding of fitness and exercise science, emphasizing the supportive instructors and in-depth curriculum that covered strength training, anatomy, and client assessments.",
      videoUrl: "OAvT2XECZq8",
      imageUrl: "/assets/images/fgiit/student-review/divya-chauhan.webp",
      date: "13 March 2023",
    },
    {
      name: "Bhargavraj Parmar",
      description:
        "Bhargavraj describes the Diploma in Nutrition as life-changing. In her video, she discusses how the program improved her knowledge of healthy eating habits and the role of nutrition in disease management. Bhargavraj highlights the professionalism of the instructors and the value of the course material.",
      videoUrl: "a17jKkAjQB4",
      imageUrl: "/assets/images/fgiit/student-review/bhargvaraj.webp",
      date: "13 March 2023",
    },
    {
      name: "Kaushik Parmar",
      description:
        "Kaushik talks about how FGIIT's Personal Training course helped him switch careers. In his review, he praises the hands-on training and detailed instruction on exercise physiology. He also shares how the course enhanced his ability to design effective fitness programs tailored to individual goals.",
      videoUrl: "IIG46Av6HQc",
      imageUrl: "/assets/images/fgiit/student-review/kp-dpt.webp",
      date: "13 March 2023",
    },
    {
      name: "Mohsina",
      description:
        "Mohsina shares her positive experience with FGIIT's course, mentioning how it covered everything from beginner fitness levels to advanced strength training techniques. She enjoyed the balance between classroom learning and practical application, which helped her understand client needs better.",
      videoUrl: "vbQgsE_1Fcc",
      imageUrl: "/assets/images/fgiit/student-review/mohsina.webp",
      date: "13 March 2023",
    },
    {
      name: "Satish Nishad",
      description:
        "In Satish review, he highlights how the Nutri trainer at FGIIT expanded his knowledge beyond basic training techniques. He found the modules on injury prevention and rehabilitation particularly useful for working with a variety of clients safely and effectively.",
      videoUrl: "NN8TOL_pwOk",
      imageUrl: "/assets/images/fgiit/student-review/satish-dpt.webp",
      date: "13 March 2023",
    },
  ];

  const batchData = {
    weekend: [
      {
        title: "March to September",
        duration: "6-month duration",
        timing: "11:00 AM to 5:00 PM",
        days: "Every Sunday",
      },
      {
        title: "October to March",
        duration: "6-month duration",
        timing: "11:00 AM to 5:00 PM",
        days: "Every Sunday",
      },
    ],
    weekday: [
      {
        title: "January to June",
        duration: "6-month duration",
        timing: "12:30 PM to 2:30 PM",
        days: "Monday to Friday",
      },
      {
        title: "July to December",
        duration: "6-month duration",
        timing: "12:30 PM to 2:30 PM",
        days: "Monday to Friday",
      },
    ],
  };
  const [selectedTab, setSelectedTab] = useState("weekend");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };
  return (
    <>
      <Helmet>
        <title>Best Course of Dietician - Get Certified Today!</title>
        <meta
          name="description"
          content="Boost your career with the best fitness and nutrition courses. Gain expertise, get certified, and enroll today for success!"
        />
        <meta
          name="keyword"
          content="nutrition courses in india, course of nutritionist, Offline Nutri Trainer Course, dietician course, fitness and nutrition courses, nutrition certification, sports nutrition courses, fitness nutrition course, nutrition courses near me, health and nutrition courses, food and nutrition course, nutritionist diploma, dietician and nutritionist course, courses in nutrition and dietetics, diploma in nutrition and dietetics, clinical nutrition certification, best nutritionist course, certified nutritionist program, advanced nutrition diploma, weight management nutrition course, sports nutrition diploma, dietitian training program, holistic nutrition certification, diploma in clinical nutrition, weight loss nutrition course, certified sports nutritionist course, functional nutrition certification, nutrition coach certification, dietitian diploma course, professional nutritionist course, best offline dietician course, fitness diet and nutrition course, exercise nutrition certification, best sports nutrition certification, accredited dietetics course, best nutrition diploma, sports science and nutrition course, professional fitness nutrition diploma, diploma in holistic nutrition, gym nutrition certification, certified holistic nutritionist course, fitness and dietetics training, short-term nutrition certification, sports dietitian certification, advanced sports nutrition training, offline sports nutrition course, international sports nutrition course, best fitness and nutrition certification, certified diet and nutrition course, offline nutrition diploma course"
        />
        <meta
          property="og:title"
          content="Best Course of Dietician - Get Certified Today!"
        />
        <meta
          property="og:description"
          content="Boost your career with the best fitness and nutrition courses. Gain expertise, get certified, and enroll today for success!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fgiit/course-of-dietician"
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
        nutrition courses in india, course of nutritionist, Offline Nutri
        Trainer Course, dietician course, fitness and nutrition courses,
        nutrition certification, sports nutrition courses, fitness nutrition
        course, nutrition courses near me, health and nutrition courses, food
        and nutrition course, nutritionist diploma, dietician and nutritionist
        course, courses in nutrition and dietetics, diploma in nutrition and
        dietetics, clinical nutrition certification, best nutritionist course,
        certified nutritionist program, advanced nutrition diploma, weight
        management nutrition course, sports nutrition diploma, dietitian
        training program, holistic nutrition certification, diploma in clinical
        nutrition, weight loss nutrition course, certified sports nutritionist
        course, functional nutrition certification, nutrition coach
        certification, dietitian diploma course, professional nutritionist
        course, best offline dietician course, fitness diet and nutrition
        course, exercise nutrition certification, best sports nutrition
        certification, accredited dietetics course, best nutrition diploma,
        sports science and nutrition course, professional fitness nutrition
        diploma, diploma in holistic nutrition, gym nutrition certification,
        certified holistic nutritionist course, fitness and dietetics training,
        short-term nutrition certification, sports dietitian certification,
        advanced sports nutrition training, offline sports nutrition course,
        international sports nutrition course, best fitness and nutrition
        certification, certified diet and nutrition course, offline nutrition
        diploma course
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
              <div className="col-lg-7">
                <div className="course-card-page-design mr-md-4 black-before">
                  <div className="course-scroll">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        width="100%"
                        alt="Fg Group"
                        style={{ borderRadius: "10px" }}
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/nutri-trainer-banner.webp"
                        }
                      />
                      <div className="video-btn play-btn">
                        <a
                          aria-label="Fg Group"
                          onClick={() => openVideoModal("xnuCqgppc4U")}
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
                          {OfflineNutriTrainingCourseData?.info ? (
                            <>
                              <li className="fs-1">
                                <i className="fas fa-clock"></i>
                                {OfflineNutriTrainingCourseData.info[0]}
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {OfflineNutriTrainingCourseData.info[1]}
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {OfflineNutriTrainingCourseData.info[2]}
                              </li>
                              <li>
                                <i className="fas fa-file-signature"></i>
                                {OfflineNutriTrainingCourseData.info[3]}
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <i className="fas fa-clock"></i>
                                {OfflineNutriTrainingCourseData.secondInfo[0]}
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {OfflineNutriTrainingCourseData.secondInfo[1]}
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {OfflineNutriTrainingCourseData.secondInfo[2]}
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
                  courseData={OfflineNutriTrainingCourseData}
                  whatsappMessage="Hello, I wanted to know more about the Offline Nutri Trainer Course."
                />
                {/* <div className="upcoming-batch-segment">
                  <div className="p-6 max-w-4xl mx-auto">
                    <h1>Upcoming Batch</h1>
                    <div className="tabs">
                      <button
                        onClick={() => setSelectedTab("weekend")}
                        className={`tab-trigger ${selectedTab === "weekend" ? "active" : ""
                          }`}
                      >
                        Weekend Batch
                      </button>
                      <button
                        onClick={() => setSelectedTab("weekday")}
                        className={`tab-trigger ${selectedTab === "weekday" ? "active" : ""
                          }`}
                      >
                        Weekday Batch
                      </button>
                    </div>
                    <div className="tab-content">
                      {batchData[selectedTab].map((batch, index) => (
                        <div key={index} className="mb-4">
                          <h2>{batch.title}</h2>
                          <p>Duration: {batch.duration}</p>
                          <p>Timing: {batch.timing}</p>
                          <p>Days: {batch.days}</p>
                        </div>
                      ))}
                    </div>
                    <div className="checkbox-options">
                      <h2>Select Duration:</h2>
                      <label>
                        <input
                          type="checkbox"
                          value="March to September"
                          checked={selectedOptions.includes(
                            "March to September"
                          )}
                          onChange={() =>
                            handleCheckboxChange("March to September")
                          }
                        />
                        March to September
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="October to March"
                          checked={selectedOptions.includes("October to March")}
                          onChange={() =>
                            handleCheckboxChange("October to March")
                          }
                        />
                        October to March
                      </label>
                    </div>
                    <div className="btn-group">
                      <button
                        className="btn-discount"
                        onClick={() => window.open("https://wa.me/", "_blank")}
                      >
                        1 to 10 Students 20% Discount
                      </button>
                      <button
                        className="btn-discount"
                        onClick={() => window.open("https://wa.me/", "_blank")}
                      >
                        11 to 20 Students 10% Discount
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-2 new-content-add">
        <div className="container">
          <div className="border-0">
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
                          Module 1: Understanding the Human body
                        </h2>
                        <p className="text-muted">
                          Students will explore the fundamentals of human
                          anatomy and physiology, focusing on how the body's
                          systems and muscles respond to exercise. This
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
                        systems and muscles respond to exercise. This foundation
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
                          src="/assets/images/course-img/walkouts.webp"
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
                        src="/assets/images/course-img/walkouts.webp"
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
                          Meal planning ensures balanced nutrition by
                          incorporating all essential food groups: proteins,
                          grains, fruits, vegetables, and dairy. It saves time,
                          reduces waste, and promotes healthier eating habits. A
                          well-structured plan supports dietary goals, prevents
                          impulsive eating, and maintains variety in meals for
                          overall well-being and sustained energy throughout the
                          day.
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
                        Meal planning ensures balanced nutrition by
                        incorporating all essential food groups: proteins,
                        grains, fruits, vegetables, and dairy. It saves time,{" "}
                        {/* {showMore[3] ? (
                          <> */}
                        reduces waste, and promotes healthier eating habits. A
                        well-structured plan supports dietary goals, prevents
                        impulsive eating, and maintains variety in meals for
                        overall well-being and sustained energy throughout the
                        day.
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
                          src="/assets/images/course-img/strength.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 4: Strength Training and Fitness Components
                        </h2>
                        <p className="text-muted">
                          Strength training enhances muscle endurance, power,
                          and overall fitness by targeting key components like
                          strength, flexibility, and balance. It boosts
                          metabolism, improves bone density, and reduces injury
                          risks. A well-rounded routine incorporating resistance
                          exercises supports functional movement, promoting
                          long-term health, mobility, and physical performance
                          in daily activities.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>Strength Training and Fitness Components</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Strength training exercises for</b>
                                <ul>
                                  <li className="list-unstyled list-style-none">
                                    <b>Legs</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Back</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Chest</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Biceps</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Triceps</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Abs</b>
                                  </li>
                                  <li className="list-unstyled list-style-none">
                                    <b>Shoulders</b>
                                  </li>
                                </ul>
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
                        src="/assets/images/course-img/strength.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 4: Strength Training and Fitness Components
                      </h2>
                      <p className="text-muted">
                        Strength training enhances muscle endurance, power, and
                        overall fitness by targeting key components like
                        strength, flexibility, and balance. It boosts
                        metabolism,{" "}
                        {/* {showMore[4] ? (
                          <> */}
                        improves bone density, and reduces injury risks. A
                        well-rounded routine incorporating resistance exercises
                        supports functional movement, promoting long-term
                        health, mobility, and physical performance in daily
                        activities.
                        <div className="row">
                          <ul className="mt-2 pl-3">
                            <li className="list-unstyled text-dark">
                              <b>Strength Training and Fitness Components</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Strength training exercises for</b>
                              <div className="d-flex justify-content-between mt-1">
                                <ul>
                                  <li className="">
                                    <b>Legs</b>
                                  </li>
                                  <li className="">
                                    <b>Back</b>
                                  </li>
                                  <li className="">
                                    <b>Chest</b>
                                  </li>
                                  <li className="">
                                    <b>Biceps</b>
                                  </li>
                                </ul>
                                <ul className="mr-4">
                                  <li className="">
                                    <b>Triceps</b>
                                  </li>
                                  <li className="">
                                    <b>Abs</b>
                                  </li>
                                  <li className="">
                                    <b>Shoulders</b>
                                  </li>
                                </ul>
                              </div>
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
                          Module 5: Exercise Science Theory & Principles
                        </h2>
                        <p className="text-muted">
                          Focusing on ethical and physiological aspects, this
                          module examines the impact of anabolic androgenic
                          steroids and alternative training practices. Students
                          learn to guide clients responsibly while tailoring
                          programs across different life stages.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Exercise Science and Programming</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Types of grips</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Scheduling of exercises</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Principles of exercises</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Periodization and programming</b>
                              </li>
                              <li className="list-unstyled list-style-none">
                                <b>Creating a workout routine</b>
                              </li>
                              <li className="list-unstyled mt-2 text-dark">
                                <b>Components of fitness</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Sports specific training</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Theory of planning</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/nutrition.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/nutrition.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 5: Exercise Science Theory & Principles
                      </h2>
                      <p className="text-muted">
                        Focusing on ethical and physiological aspects, this
                        module examines the impact of anabolic androgenic{" "}
                        {/* {showMore[5] ? (
                          <> */}
                        steroids and alternative training practices. Students
                        learn to guide clients responsibly while tailoring
                        programs across different life stages.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Exercise Science and Programming</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Types of grips</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Scheduling of exercises</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Principles of exercises</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Periodization and programming</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Creating a workout routine</b>
                            </li>
                            <li className="list-unstyled mt-2 text-dark">
                              <b>Components of fitness</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Sports specific training</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Theory of planning</b>
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
                          src="/assets/images/course-img/anabolic.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 6: Therapeutic Nutrition
                        </h2>
                        <p className="text-muted">
                          Therapeutic nutrition focuses on using diet to manage
                          and prevent diseases. It involves personalized meal
                          plans rich in essential nutrients to support recovery,
                          improve health conditions, and boost immunity. Proper
                          nutrition therapy helps regulate diabetes, heart
                          disease, and digestive disorders, promoting overall
                          well-being and optimal body function.
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
                        Module 6: Therapeutic Nutrition
                      </h2>
                      <p className="text-muted">
                        Therapeutic nutrition focuses on using diet to manage
                        and prevent diseases. It involves personalized meal
                        plans rich in essential nutrients to support recovery,{" "}
                        {/* {showMore[6] ? (
                          <> */}
                        improve health conditions, and boost immunity. Proper
                        nutrition therapy helps regulate diabetes, heart
                        disease, and digestive disorders, promoting overall
                        well-being and optimal body function.
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
                            <li className="list-unstyled list-style-none ml-1 d-flex">
                              <span className="mr-1">-</span>
                              <b>
                                Hernia, Diarrhoea, Conspaon, Pepc Ulcer, Ulcerve
                                Colis, Crohns Diseases, Dumping Syndrome,
                                Dysphagia
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>Metabolic Disorders</b>
                            </li>
                            <li className="list-unstyled list-style-none ml-1 d-flex">
                              <span className="mr-1">-</span>
                              <b>
                                Diabetes, Gout, Hypothyroidism, Hperthyroidism,
                                Menopause, PCOS, PMS
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>CardiovaScular Disorders</b>
                            </li>
                            <li className="list-unstyled list-style-none ml-1 d-flex">
                              <span className="mr-1">-</span>
                              <b>
                                Hypertension, Atherosclerosis, Myocardial
                                infacon
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>Liver Disorders</b>
                            </li>
                            <li className="list-unstyled list-style-none ml-1 d-flex">
                              <span className="mr-1">-</span>
                              <b>
                                Jaundice, Hepatitis, Diseases of gallbladder
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>Feblife Disorders</b>
                            </li>
                            <li className="list-unstyled list-style-none ml-1 d-flex">
                              <span className="mr-1">-</span>
                              <b>Typhoids, Tuberculosis</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Musculoskeletal Disorders</b>
                            </li>
                            <li className="list-unstyled list-style-none ml-1 d-flex">
                              <span className="mr-1">-</span>
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
                          Module 7: Injury Rehabilitation and Prevention
                        </h2>
                        <p className="text-muted">
                          Injury rehabilitation and prevention focus on
                          restoring strength, mobility, and function while
                          reducing future risks. Proper recovery includes
                          physical therapy, strength training, and flexibility
                          exercises. Preventive measures like warm-ups, proper
                          technique, and balanced training help maintain joint
                          stability and muscle health, ensuring long-term
                          physical performance and injury resilience.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled">
                                <b>Introduction to Injury Rehabilitation</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Assessment and Diagnosis</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Cupping Therapy</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Principles of Exercise Prescription</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Therapeutic Modalities</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Manual Therapy Techniques</b>
                              </li>
                              <li className="list-unstyled">
                                <b>
                                  Pain Management in Injury Specific
                                  Rehabilitation
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>Special Populations in Rehabilitation</b>
                              </li>
                              <li className="list-unstyled">
                                <b>
                                  CPR, Dry Needling, IASTM, Rigid Taping,
                                  Mobility, Electro Therapy, Exercise Therapy
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/new-injury.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/new-injury.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 7: Injury Rehabilitation and Prevention
                      </h2>
                      <p className="text-muted">
                        Injury rehabilitation and prevention focus on restoring
                        strength, mobility, and function while reducing future
                        risks. Proper recovery includes physical therapy,{" "}
                        {/* {showMore[7] ? (
                          <> */}
                        strength training, and flexibility exercises. Preventive
                        measures like warm-ups, proper technique, and balanced
                        training help maintain joint stability and muscle
                        health, ensuring long-term physical performance and
                        injury resilience.
                        <div className="row">
                          <ul className="mt-2 pl-3">
                            <li className="list-unstyled">
                              <b>Introduction to Injury Rehabilitation</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Assessment and Diagnosis</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Cupping Therapy</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Principles of Exercise Prescription</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Therapeutic Modalities</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Manual Therapy Techniques</b>
                            </li>
                            <li className="list-unstyled">
                              <b>
                                Pain Management in Injury Specific
                                Rehabilitation
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>Special Populations in Rehabilitation</b>
                            </li>
                            <li className="list-unstyled">
                              <b>
                                CPR, Dry Needling, IASTM, Rigid Taping,
                                Mobility, Electro Therapy, Exercise Therapy
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
                          src="/assets/images/course-img/online-2.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 8: Weight Management Nutrition
                        </h2>
                        <p className="text-muted">
                          Weight management nutrition emphasizes balanced eating
                          habits to achieve and maintain a healthy weight. It
                          includes portion control, nutrient-dense foods, and
                          mindful eating. A well-planned diet supports
                          metabolism, prevents overeating, and promotes
                          sustainable weight loss or gain, ensuring overall
                          health, energy balance, and long-term wellness.
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
                        Module 8: Weight Management Nutrition
                      </h2>
                      <p className="text-muted">
                        Weight management nutrition emphasizes balanced eating
                        habits to achieve and maintain a healthy weight. It
                        includes portion control, nutrient-dense foods,{" "}
                        {/* {showMore[8] ? (
                          <> */}
                        and mindful eating. A well-planned diet supports
                        metabolism, prevents overeating, and promotes
                        sustainable weight loss or gain, ensuring overall
                        health, energy balance, and long-term wellness.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3 px-1">
                            <li className="list-unstyled text-dark">
                              <b>Specialized Nutrition Topics</b>
                            </li>
                            <li className="list-unstyled ml-2">
                              <b>Diet For Healthy Skin, Hair & Nails</b>
                            </li>
                            <li className="list-unstyled ml-2">
                              <b>Nutrition For Night Shift Workers</b>
                            </li>
                            <li className="list-unstyled ml-2">
                              <b>Food Allergies & Food Intolerance</b>
                            </li>
                            <li className="list-unstyled ml-2">
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
                          Module 9: Nutrition During Lifespan
                        </h2>
                        <p className="text-muted">
                          Nutrition is a critical part of health and
                          development. Better nutrition is related to improved
                          infant, child, and maternal health, stronger immune
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
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/img/nutrition-during-lifespan.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
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
                        Module 9: Nutrition During Lifespan
                      </h2>
                      <p className="text-muted">
                        Nutrition is a critical part of health and development.
                        Better nutrition is related to improved infant,{" "}
                        {/* {showMore[9] ? (
                          <> */}
                        child, and maternal health, stronger immune systems,
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
                          src="/assets/images/course-img/anabolic-new.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 10: Anabolic Androgenic Steroids
                        </h2>
                        <p className="text-muted">
                          Anabolic androgenic steroids (AAS) are synthetic
                          hormones that enhance muscle growth and athletic
                          performance. However, their misuse can lead to serious
                          health risks, including heart disease, liver damage,
                          and hormonal imbalances. Responsible use under medical
                          supervision is crucial to avoid harmful side effects
                          and long-term complications.
                          <div className="row">
                            <ul className="col-6 mt-2 p-3">
                              <li className="list-unstyled">
                                <b>
                                  Anabolics, Androgenic, Peptides, SARMs
                                  Compounds
                                </b>
                              </li>
                              <li className="list-unstyled">
                                <b>Peak weak- Cutting/Bulking</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Managing Gyno</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Pct (Post Cycle Therapy)</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Blood test</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Diuretic</b>
                              </li>
                            </ul>
                            <ul className="col-6 mt-2 p-3">
                              <li className="list-unstyled">
                                <b>Bikini</b>
                              </li>
                              <li className="list-unstyled">
                                <b>How to study reports</b>
                              </li>
                              <li className="list-unstyled">
                                <b>How physiology works</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Cycle Designing</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Bodybuilding</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Men physique</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Powerlifting</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Women cycle</b>
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
                        src="/assets/images/course-img/anabolic-new.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 10: Anabolic Androgenic Steroids
                      </h2>
                      <p className="text-muted">
                        Anabolic androgenic steroids (AAS) are synthetic
                        hormones that enhance muscle growth and athletic
                        performance. However, their misuse can lead to serious{" "}
                        {/* {showMore[10] ? (
                          <> */}
                        health risks, including heart disease, liver damage, and
                        hormonal imbalances. Responsible use under medical
                        supervision is crucial to avoid harmful side effects and
                        long-term complications.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled">
                              <b>
                                Anabolics, Androgenic, Peptides, SARMs Compounds
                              </b>
                            </li>
                            <li className="list-unstyled">
                              <b>Peak weak- Cutting/Bulking</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Managing Gyno</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Pct (Post Cycle Therapy)</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Blood test</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Diuretic</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Bikini</b>
                            </li>
                            <li className="list-unstyled">
                              <b>How to study reports</b>
                            </li>
                            <li className="list-unstyled">
                              <b>How physiology works</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Cycle Designing</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Bodybuilding</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Men physique</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Powerlifting</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Women cycle</b>
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
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 11: Powerlifting Masterclass
                        </h2>
                        <p className="text-muted">
                          Covering the essentials of disease management and
                          powerlifting, this module focuses on therapeutic diets
                          and techniques for key strength-building exercises.
                          Students are trained to support clients in achieving
                          both wellness and performance goals.
                          <div className="row">
                            <ul className="col-6 mt-2 p-3">
                              <li className="list-unstyled">
                                <b>Biomechanics and Technique</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Strength Training Principles</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Programming and Training Plans</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Equipment and Gear</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Rules and Regulations</b>
                              </li>
                            </ul>
                            <ul className="col-6 mt-2 p-3">
                              <li className="list-unstyled">
                                <b>Injury Prevention and Rehabilitation</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Coaching and Communication</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Practical Training</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Legal Aspects of Coaching</b>
                              </li>
                              <li className="list-unstyled">
                                <b>Powerlifting Plan</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/fgiit/fgiit-webinar-batch-3.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/fgiit/fgiit-webinar-batch-3.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 11 Powerlifting Masterclass
                      </h2>
                      <p className="text-muted">
                        Covering the essentials of disease management and
                        powerlifting, this module focuses on therapeutic diets{" "}
                        {/* {showMore[11] ? (
                          <> */}
                        and techniques for key strength - building exercises.
                        Students are trained to support clients in achieving
                        both wellness and performance goals.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled">
                              <b>Biomechanics and Technique</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Strength Training Principles</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Programming and Training Plans</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Equipment and Gear</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Rules and Regulations</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Injury Prevention and Rehabilitation</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Coaching and Communication</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Practical Training</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Legal Aspects of Coaching</b>
                            </li>
                            <li className="list-unstyled">
                              <b>Powerlifting Plan</b>
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
                      onClick={() => toggleReadMore(11)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[11] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/offline-one.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 12: Counselling Techniques
                        </h2>
                        <p className="text-muted">
                          Counseling techniques involve active listening,
                          empathy, and effective communication to support
                          clients in overcoming challenges. Methods like
                          cognitive-behavioral therapy, motivational
                          interviewing, and solution-focused strategies help
                          individuals develop coping skills, enhance
                          self-awareness, and achieve personal growth. A
                          tailored approach ensures meaningful guidance and
                          long-term emotional well-being.
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
                        Module 12: Counselling Techniques
                      </h2>
                      <p className="text-muted">
                        Counseling techniques involve active listening, empathy,
                        and effective communication to support clients in
                        overcoming challenges. Methods like cognitive-behavioral{" "}
                        {/* {showMore[12] ? (
                          <> */}
                        therapy, motivational interviewing, and solution-focused
                        strategies help individuals develop coping skills,
                        enhance self-awareness, and achieve personal growth. A
                        tailored approach ensures meaningful guidance and
                        long-term emotional well-being.
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
                      onClick={() => toggleReadMore(12)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[12] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 13: Group Instructor Masterclass
                        </h2>
                        <p className="text-muted">
                          A Group Instructor Masterclass enhances coaching
                          skills, leadership, and class engagement techniques.
                          It covers workout structuring, motivation strategies,
                          and safety protocols to deliver dynamic sessions.
                          Instructors learn to adapt to diverse fitness levels,
                          fostering an inclusive, high-energy environment that
                          maximizes participant results and overall group
                          training effectiveness.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>TRX Band Training</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Functional Training</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Tabata Training</b>
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
                          src="/assets/images/course-img/online-5.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/online-5.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 13: Group Instructor Masterclass
                      </h2>
                      <p className="text-muted">
                        A Group Instructor Masterclass enhances coaching skills,
                        leadership, and class engagement techniques. It covers
                        workout structuring, motivation strategies,{" "}
                        {/* {showMore[13] ? (
                          <> */}
                        and safety protocols to deliver dynamic sessions.
                        Instructors learn to adapt to diverse fitness levels,
                        fostering an inclusive, high-energy environment that
                        maximizes participant results and overall group training
                        effectiveness.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>TRX Band Training</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Functional Training</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Tabata Training</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Group Fitness Class Design and Teaching</b>
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
                      onClick={() => toggleReadMore(13)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[13] ? "Read less" : "Read more"}
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
                          Module 14: Sports Nutrition
                        </h2>
                        <p className="text-muted">
                          Sports nutrition focuses on fueling athletic
                          performance through balanced diets rich in proteins,
                          carbohydrates, and essential nutrients. It optimizes
                          energy levels, enhances recovery, and supports muscle
                          growth. Proper hydration and meal timing play crucial
                          roles in endurance, strength, and overall physical
                          performance for athletes at all levels.
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
                        Module 14: Sports Nutrition
                      </h2>
                      <p className="text-muted">
                        Sports nutrition focuses on fueling athletic performance
                        through balanced diets rich in proteins, carbohydrates,
                        and essential nutrients. It optimizes energy levels{" "}
                        {/* {showMore[14] ? (
                          <> */}
                        , enhances recovery, and supports muscle growth. Proper
                        hydration and meal timing play crucial roles in
                        endurance, strength, and overall physical performance
                        for athletes at all levels.
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
                      onClick={() => toggleReadMore(14)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[14] ? "Read less" : "Read more"}
                    </span> */}
                  </blockquote>
                </div>
                <div className="col-lg-12 order-2 order-lg-1">
                  <blockquote className="blockquote d-md-block d-none mb-4">
                    <div className="mb-4 d-flex align-items-center justify-content-center flex-column flex-md-row">
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 15: Practical Application & Client Management,
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
                        Module 14: Practical Application & Client Management,
                        Behavior Change
                      </h2>
                      <p className="text-muted">
                        In this hands-on module, students master behavior change
                        techniques and client management strategies. By{" "}
                        {/* {showMore[15] ? (
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
                      onClick={() => toggleReadMore(15)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[15] ? "Read less" : "Read more"}
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
                          Module 16: How to Design Diet Plan
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
                        Module 16: How to Design Diet Plan
                      </h2>
                      <p className="text-muted">
                        Focusing on tailored nutrition, this module equips
                        students to create diet plans that align with{" "}
                        {/* {showMore[16] ? (
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
                      onClick={() => toggleReadMore(16)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[16] ? "Read less" : "Read more"}
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
      <section className="mt-5">
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
      <section className="mt-md-5 mt-3">
        <div className="container-fluid">
          <div className="container blog2">
            <div className="row mt-4">
              <div className="col-lg-6 certi text-center">
                <h2 className="mt-md-4 mb-md-4 mt-0 mb-3">Demo lecture</h2>
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/online-course-dpt.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="fggroup"
                  />
                  <div className="video-btn play-btn">
                    <a
                      aria-label="Fg Group"
                      onClick={() => openVideoModal("ZYoKVIfbJzY")}
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
                <h2 className="h2-fs mt-2 d-none d-md-block">
                  Demo Certificates
                </h2>
                <h2 className="h2-fs mt-5 d-block d-md-none">
                  Demo Certificates
                </h2>
                <OwlCarousel
                  loop
                  autoPlay
                  dots={false}
                  id="owl-diploma"
                  className="owl-carousel owl-theme"
                  responsive={{
                    0: {
                      items: 1,
                      dots: false,
                    },
                    600: {
                      items: 1,
                    },
                    1000: {
                      items: 2,
                    },
                  }}
                >
                  <div className="item mx-2">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/cpt_demo.webp"
                      }
                      alt="Certificates"
                      width="100%"
                      className="lazy"
                    />
                    <div className="text-center mt-3">
                      <h2 className="h4-fs">Diploma In Personal Training</h2>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/cnc_demo.webp"
                      }
                      alt="Certificates"
                      width="100%"
                      className="lazy"
                    />
                    <div className="text-center mt-3">
                      <h2 className="h4-fs">Diploma In Nutrition</h2>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/group-instructor-masterclass.webp"
                      }
                      alt="Certificates"
                      width="100%"
                      className="lazy"
                    />
                    <div className="text-center mt-3">
                      <h2 className="h4-fs">Group Instructor Masterclass</h2>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/Powerlifting-Coach-Workshop-certificate.webp"
                      }
                      alt="Certificates"
                      width="100%"
                      className="lazy"
                    />
                    <div className="text-center mt-3">
                      <h2 className="h4-fs">Powerlifting Coach Workshop</h2>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/aas_demo.webp"
                      }
                      alt="Certificates"
                      width="100%"
                      className="lazy"
                    />
                    <div className="text-center mt-3">
                      <h2 className="h4-fs">Anabolic Androgenic Steroids</h2>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/recorded-session-certificate-5.webp"
                      }
                      alt="Certificates"
                      width="100%"
                      className="lazy"
                    />
                    <div className="text-center mt-3">
                      <h2 className="h4-fs">Injury Rehabilitation Workshop</h2>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/recorded-session-certificate-6.webp"
                      }
                      alt="Certificates"
                      width="100%"
                      className="lazy"
                    />
                    <div className="text-center mt-3">
                      <h2 className="h4-fs">
                        Advance Clinical Nutrition Workshop
                      </h2>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section >
      <OurOfflineStudents />
      {/* <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 py-5 text-center">
            <div className="covid text-center">
              <h2 className="mt-2 h2-fs">
                Credentials by{" "}
                <span className="m-0 text-blue-color">
                  the fitness future Of India
                </span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-0"></div>
            <div className="row">
              <div className="col-md-4 mt-4">
                <CredentialsFutureFitness
                  imgUrl={"/assets/images/img/lecture_reviews1.webp"}
                  videoUrl={"VzriO8WZVkM"}
                />
              </div>
              <div className="col-md-4 mt-4">
                <CredentialsFutureFitness
                  imgUrl={"/assets/images/img/lecture_reviews2.webp"}
                  videoUrl={"MBTps76dKLs"}
                />
              </div>
              <div className="col-md-4 mt-4">
                <CredentialsFutureFitness
                  imgUrl={"/assets/images/img/lecture_reviews3.webp"}
                  videoUrl={"u6VPK9uTt9g"}
                />
              </div>
              <div className="col-md-4 mt-4">
                <CredentialsFutureFitness
                  imgUrl={"/assets/images/img/lecture_reviews4.webp"}
                  videoUrl={"uxkhaMgAeAw"}
                />
              </div>
              <div className="col-md-4 mt-4">
                <CredentialsFutureFitness
                  imgUrl={"/assets/images/img/lecture_reviews5.webp"}
                  videoUrl={"4TCopSUPn_w"}
                />
              </div>
              <div className="col-md-4 mt-4">
                <CredentialsFutureFitness
                  imgUrl={"/assets/images/img/lecture_reviews6.webp"}
                  videoUrl={"4gr009F6XBk"}
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <StudentTestimonial testimonials={testimonials} /> */}
      {/* <section className="margintop student-space">
        <div className="container-fluid">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs d-md-none d-block">
                <span className="m-0 text-blue-color">Testimonials</span>
              </h2>
              <h2 className="h2-fs d-md-block d-none">
                The course in our{" "}
                <span className="m-0 text-blue-color">Student Words</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-4"></div>
            <div className="row justify-content-center">
              <div className="col-lg-11">
                <div
                  className="blog2 p-5 p-md-3 p-lg-5 d-none d-md-block"
                  style={{ borderRadius: "40px" }}
                >
                  <OwlCarousel
                    loop
                    dots={false}
                    // autoplay
                    id="owl-review"
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
                    {testimonials.map((testimonial) => {
                      return (
                        <div className="item">
                          <div className="slider-box">
                            <div className="row align-items-center">
                              <div className="col-lg-4">
                                <div className="review-box">
                                  <div>
                                    <img
                                      src={testimonial.imageUrl}
                                      className="img-fluid"
                                      alt={`${testimonial.name} testimonial`}
                                    />
                                    <div className="video-btn play-btn">
                                      <a
                                        onClick={() =>
                                          openVideoModal(testimonial.videoUrl)
                                        }
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
                              </div>
                              <div className="col-lg-8 mb-5">
                                <div className="review-box-text ml-4">
                                  <span>{testimonial.date}</span>
                                  <h2 className="h2-fs">{testimonial.name}</h2>
                                  <p>{testimonial.description}</p>
                                  <div className="review-box-btn">
                                    <a
                                      onClick={() =>
                                        openVideoModal(testimonial.videoUrl)
                                      }
                                      className="custom clickof"
                                    >
                                      <i className="fas fa-play"></i> Watch
                                      Video
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </OwlCarousel>
                </div>
                <div className="blog2 d-block d-md-none">
                  <OwlCarousel
                    loop
                    autoplay
                    dots={false}
                    id="owl-review"
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
                    {testimonials.map((testimonial) => {
                      return (
                        <div className="item">
                          <div className="slider-box">
                            <div className="row align-items-center">
                              <div className="col-lg-4">
                                <div className="review-box">
                                  <div>
                                    <img
                                      src={testimonial.imageUrl}
                                      className="img-fluid"
                                      alt={`${testimonial.name} testimonial`}
                                    />
                                    <div className="video-btn play-btn">
                                      <a
                                        onClick={() =>
                                          openVideoModal(testimonial.videoUrl)
                                        }
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
                              </div>
                              <div className="col-lg-8">
                                <div className="review-box-text ml-4">
                                  <span>{testimonial.date}</span>
                                  <h2 className="h2-fs">{testimonial.name}</h2>
                                  <p>{testimonial.description}</p>
                                  <div className="review-box-btn">
                                    <a
                                      onClick={() =>
                                        openVideoModal(testimonial.videoUrl)
                                      }
                                      className="custom clickof"
                                    >
                                      <i className="fas fa-play"></i> Watch
                                      Video
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="studentsreview mb-2">
          <div className="google-reviews-carousel">
            <div className="covid text-center d-md-block d-none">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">Testimonial</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-4 d-md-block d-none"></div>
            <OwlCarousel className="owl-theme" {...options}>
              {reviewses.map((review, index) => (
                <div key={index} className="item">
                  <div className="review-card mt-0">
                    <img
                      className="review-image"
                      src={review.image}
                      alt={review.name}
                    />
                    <div className="review-content">
                      <h2 className="h3-fs">{review.name}</h2>
                      <div className="stars">
                        {"★".repeat(review.stars)}
                        {"☆".repeat(5 - review.stars)}
                      </div>
                      <p className="review-text">{review.review}</p>
                      <div className="google-icon">
                        <i className="fab fa-google"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section> */}
      <section>
        <div className="container-fluid margintop">
          <div className="container blog2 pb-5">
            <div className="">
              <div className="covid text-center">
                <h2 className="mt-2 h2-fs">
                  Master Your Skills with an{" "}
                  <span className="m-0 text-blue-color">
                    Offline Nutri Trainer Course
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe d-md-block d-none">
                    <p>
                      If you want to build a successful career in the health and
                      wellness industry, enrolling in an offline Nutri Trainer
                      Course is the perfect choice. Unlike online programs,
                      offline training provides hands-on learning, real-time
                      interaction with experts, and practical exposure, ensuring
                      you gain in-depth knowledge in the field of nutrition.
                    </p>
                    <p>
                      A course of dietician focuses on understanding human
                      nutrition, meal planning, and dietary management. It
                      equips you with the expertise to guide individuals in
                      achieving their health goals through balanced nutrition.
                      Similarly, a course of nutritionist dives deeper into food
                      science, nutrient analysis, and diet therapy, preparing
                      you to work in hospitals, wellness centers, or as an
                      independent consultant.
                    </p>
                    <p>
                      With an offline Nutri Trainer Course, you benefit from
                      face-to-face mentorship, interactive workshops, and
                      practical case studies that enhance your problem-solving
                      skills. These courses also include live demonstrations on
                      meal preparation, body composition analysis, and
                      personalized diet planning, ensuring you gain practical
                      expertise.
                    </p>
                    <p>
                      By enrolling in a certified course of dietician or course
                      of nutritionist, you open doors to endless career
                      opportunities in fitness centers, healthcare institutions,
                      and sports nutrition. Start your journey today and become
                      a certified expert in the field of nutrition and
                      dietetics!
                    </p>
                  </div>
                  <div className="describe d-md-none d-block">
                    <p>
                      If you want to build a successful career in the health and
                      wellness industry, enrolling in an offline Nutri Trainer
                      Course is the perfect choice. Unlike online programs,
                      offline training provides hands-on learning, real-time
                      interaction with experts, and practical exposure, ensuring
                      you gain in-depth knowledge in the field of nutrition.
                    </p>
                    {showMorev ? (
                      <span className="m-0">
                        <p>
                          A course of dietician focuses on understanding human
                          nutrition, meal planning, and dietary management. It
                          equips you with the expertise to guide individuals in
                          achieving their health goals through balanced
                          nutrition. Similarly, a course of nutritionist dives
                          deeper into food science, nutrient analysis, and diet
                          therapy, preparing you to work in hospitals, wellness
                          centers, or as an independent consultant.
                        </p>
                        <p>
                          With an offline Nutri Trainer Course, you benefit from
                          face-to-face mentorship, interactive workshops, and
                          practical case studies that enhance your
                          problem-solving skills. These courses also include
                          live demonstrations on meal preparation, body
                          composition analysis, and personalized diet planning,
                          ensuring you gain practical expertise.
                        </p>
                        <p>
                          By enrolling in a certified course of dietician or
                          course of nutritionist, you open doors to endless
                          career opportunities in fitness centers, healthcare
                          institutions, and sports nutrition. Start your journey
                          today and become a certified expert in the field of
                          nutrition and dietetics!
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
      <section className="mt-4 mb-5 d-block d-md-none">
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
      <CourseReviewSection course_id="600e5b2099180b31447a0ef9" />
      <FgiitFooter />
    </>
  );
}

export default CourseOfDietician;
