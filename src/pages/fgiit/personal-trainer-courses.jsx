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
import { OfflineDiplomaPersonalTrainingCourseData } from "../../components/offline-course/OfflineCourseDataLoader";
import OurOfflineStudents from "../../components/course/ourOfflineStudents";
import { Helmet } from "react-helmet";
import CourseReviews from "../../components/fgiit/courseReviews";

function PersonalTrainerCourses() {
  const canonicalUrl = window.location.href;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
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
      question: "What is the  Diploma in Personal Training Course by FGIIT?",
      answer:
        "The Diploma in Personal Training Course by FGIIT is a comprehensive 3-month program designed to certify individuals as personal trainers. It includes offline and live Zoom classes, recorded video lectures, e-books, and practical projects to equip students with the necessary skills. Graduates receive a government-approved and internationally accredited certification.",
    },
    {
      question:
        "What are the benefits of enrolling in this course at FGIIT? Students benefit from:",
      answer:
        "Government-approved and internationally accredited certification Expert faculties with over 5 years of industry experience 100% placement support and a mandatory internship at top firms Bilingual learning materials (English and Hindi) Lifetime support, including access to demo lectures and chat support",
    },
    {
      question:
        "Is there an internship included in the Diploma in Personal Training Course?",
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
        "Divya review describes her journey in the FGIIT Diploma in Personal Training course. She discusses how the course transformed her understanding of fitness and exercise science, emphasizing the supportive instructors and in-depth curriculum that covered strength training, anatomy, and client assessments.",
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
        "In Satish review, he highlights how the Diploma in Personal Training at FGIIT expanded his knowledge beyond basic training techniques. He found the modules on injury prevention and rehabilitation particularly useful for working with a variety of clients safely and effectively.",
      videoUrl: "NN8TOL_pwOk",
      imageUrl: "/assets/images/fgiit/student-review/satish-dpt.webp",
      date: "13 March 2023",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Best Personal Trainer Courses - Get started Now!</title>
        <meta name="description" content="Become a certified fitness expert with the best personal trainer courses. Gain skills, get certified, and start your journey now!" />
        <meta name="keyword" content="Offline Diploma In Personal Training Course, Offline Personal Training Course, Personal Training Course, Diploma In Personal Training Course, fitness trainer course, personal trainer certification, best personal trainer certification, fitness trainer certification, personal trainer course near me, personal training, certified fitness trainer course, certified personal trainer course, personal training near me, pt training course, personal trainer classes, certified personal trainer certification, personal fitness trainer certification, personal trainer training, physical trainer course, physical trainer certification, trainer near me, physical trainer near me, certificate in personal training, best personal training courses, personal trainer classes near me, personal trainer training course, gym with personal trainer, personal training gym, Advanced Personal Training Course, Professional Personal Trainer Certification, Sports Personal Training Certification, Functional Personal Training Course, Strength and Conditioning Certification, Accredited Personal Trainer Course, Gym Trainer Certification, Certified Strength Coach Course, Advanced Fitness Coaching Certification, Nutrition and Personal Training Course, Weightlifting and Personal Training Course, Holistic Personal Training Certification, Best PT Certification, Offline Personal Trainer Course, Personal Trainer Career Certification, Diploma in Fitness and Personal Training, Gym and Personal Trainer Certification, Exercise Science and Personal Training Course, Professional PT Certification, Certified Gym Trainer Course, Diploma in Personal Fitness Training" />
        <meta property="og:title" content="Best Personal Trainer Courses - Get started Now!" />
        <meta property="og:description" content="Become a certified fitness expert with the best personal trainer courses. Gain skills, get certified, and start your journey now!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgiit/personal-trainer-courses" />
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
        Offline Diploma In Personal Training Course, Offline Personal Training Course, Personal Training Course, Diploma In Personal Training Course, fitness trainer course, personal trainer certification, best personal trainer certification, fitness trainer certification, personal trainer course near me, personal training, certified fitness trainer course, certified personal trainer course, personal training near me, pt training course, personal trainer classes, certified personal trainer certification, personal fitness trainer certification, personal trainer training, physical trainer course, physical trainer certification, trainer near me, physical trainer near me, certificate in personal training, best personal training courses, personal trainer classes near me, personal trainer training course, gym with personal trainer, personal training gym, Advanced Personal Training Course, Professional Personal Trainer Certification, Sports Personal Training Certification, Functional Personal Training Course, Strength and Conditioning Certification, Accredited Personal Trainer Course, Gym Trainer Certification, Certified Strength Coach Course, Advanced Fitness Coaching Certification, Nutrition and Personal Training Course, Weightlifting and Personal Training Course, Holistic Personal Training Certification, Best PT Certification, Offline Personal Trainer Course, Personal Trainer Career Certification, Diploma in Fitness and Personal Training, Gym and Personal Trainer Certification, Exercise Science and Personal Training Course, Professional PT Certification, Certified Gym Trainer Course, Diploma in Personal Fitness Training
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
                          "/assets/images/fgiit/dpt-new.jpg"
                        }
                      />
                      <div className="video-btn play-btn">
                        <a
                          aria-label="Fg Group"
                          onClick={() => openVideoModal("w-NICMzjpfw")}
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
                          {OfflineDiplomaPersonalTrainingCourseData?.info ? (
                            <>
                              <li className="fs-1">
                                <i className="fas fa-clock"></i>
                                {
                                  OfflineDiplomaPersonalTrainingCourseData
                                    .info[0]
                                }
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {
                                  OfflineDiplomaPersonalTrainingCourseData
                                    .info[1]
                                }
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {
                                  OfflineDiplomaPersonalTrainingCourseData
                                    .info[2]
                                }
                              </li>
                              <li>
                                <i className="fas fa-file-signature"></i>
                                {
                                  OfflineDiplomaPersonalTrainingCourseData
                                    .info[3]
                                }
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <i className="fas fa-clock"></i>
                                {
                                  OfflineDiplomaPersonalTrainingCourseData
                                    .secondInfo[0]
                                }
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {
                                  OfflineDiplomaPersonalTrainingCourseData
                                    .secondInfo[1]
                                }
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {
                                  OfflineDiplomaPersonalTrainingCourseData
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
                  courseData={OfflineDiplomaPersonalTrainingCourseData}
                  whatsappMessage="Hello, I wanted to know more about the Offline Diploma In Personal Training Course."
                />
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
                        and physiology, focusing on how the body's {' '}
                        {/* {showMore[1] ? (
                          <> */}
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
                              <b>
                                Introduction To Living Beings: Physiology
                              </b>
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
                        weight management, emphasizing dietary planning {' '}
                        {/* {showMore[2] ? (
                          <> */}
                        and metabolism.It highlights the synergy between
                        diet and exercise, equipping students to craft
                        sustainable, goal - oriented diet plans for clients,
                        fostering long - term health and fitness.
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
                          Module 3: Strength Training and Fitness Components
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
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/strength.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
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
                        Module 3: Strength Training and Fitness Components
                      </h2>
                      <p className="text-muted">
                        Combining nutrition and fitness, this module emphasizes
                        injury prevention and management through {' '}
                        {/* {showMore[3] ? (
                          <> */}
                        tailored meal plans and strength - training
                        principles.It prepares students to enhance
                        performance while minimizing injury risks through
                        informed dietary and fitness strategies.
                        <div className="row">
                          <ul className="mt-2 pl-3">
                            <li className="list-unstyled text-dark">
                              <b>
                                Strength Training and Fitness Components
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Strength training exercises for</b>
                              <ul>
                                <li className="list-unstyled ml-2">
                                  <b>Legs</b>
                                </li>
                                <li className="list-unstyled ml-2">
                                  <b>Back</b>
                                </li>
                                <li className="list-unstyled ml-2">
                                  <b>Chest</b>
                                </li>
                                <li className="list-unstyled ml-2">
                                  <b>Biceps</b>
                                </li>
                                <li className="list-unstyled ml-2">
                                  <b>Triceps</b>
                                </li>
                                <li className="list-unstyled ml-2">
                                  <b>Abs</b>
                                </li>
                                <li className="list-unstyled ml-2">
                                  <b>Shoulders</b>
                                </li>
                              </ul>
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
                          src="/assets/images/course-img/nutrition.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 4: Exercise Science Theory & Principles
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
                        Module 4: Exercise Science Theory & Principles
                      </h2>
                      <p className="text-muted">
                        Focusing on ethical and physiological aspects, this
                        module examines the impact of anabolic androgenic {' '}
                        {/* {showMore[4] ? (
                          <> */}
                        steroids and alternative training practices.
                        Students learn to guide clients responsibly while
                        tailoring programs across different life stages.
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
                          Module 5: Injury Rehabilitation and Prevention
                        </h2>
                        <p className="text-muted">
                          This module introduces the role of therapeutic
                          nutrition in recovery, alongside injury prevention and
                          rehabilitation techniques. Students gain expertise in
                          safe recovery protocols and exercises that reduce the
                          risk of future injuries.
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
                        Module 5: Injury Rehabilitation and Prevention
                      </h2>
                      <p className="text-muted">
                        This module introduces the role of therapeutic nutrition
                        in recovery, alongside injury prevention and {' '}
                        {/* {showMore[5] ? (
                          <> */}
                        rehabilitation techniques.Students gain expertise in
                        safe recovery protocols and exercises that reduce
                        the risk of future injuries.
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
                          src="/assets/images/course-img/anabolic-new.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 6: Anabolic Androgenic Steroids
                        </h2>
                        <p className="text-muted">
                          This module addresses advanced nutritional strategies
                          and the implications of steroid use in fitness.
                          Students learn to evaluate risks and benefits while
                          guiding clients toward healthier, sustainable
                          performance enhancement methods.
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
                        Module 6: Anabolic Androgenic Steroids
                      </h2>
                      <p className="text-muted">
                        This module addresses advanced nutritional strategies
                        and the implications of steroid use in fitness. {' '}
                        {/* {showMore[6] ? (
                          <> */}
                        Students learn to evaluate risks and benefits while
                        guiding clients toward healthier, sustainable
                        performance enhancement methods.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
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
                          Module 7: Powerlifting Masterclass
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
                        Module 7 Powerlifting Masterclass
                      </h2>
                      <p className="text-muted">
                        Covering the essentials of disease management and
                        powerlifting, this module focuses on therapeutic diets {' '}
                        {/* {showMore[7] ? (
                          <> */}
                        and techniques for key strength - building
                        exercises. Students are trained to support clients
                        in achieving both wellness and performance goals.
                        <div className="row">
                          <ul className="col-12 mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Biomechanics and Technique</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Strength Training Principles</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Programming and Training Plans</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Equipment and Gear</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Rules and Regulations</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Injury Prevention and Rehabilitation</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Coaching and Communication</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Practical Training</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Legal Aspects of Coaching</b>
                            </li>
                            <li className="list-unstyled text-dark">
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
                          src="/assets/images/course-img/offline-one.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 8: Counselling Techniques
                        </h2>
                        <p className="text-muted">
                          Counseling techniques include active listening, empathy, and goal-setting to help individuals navigate challenges. Methods like cognitive-behavioral therapy, mindfulness, and solution-focused approaches empower clients to develop coping strategies. Effective counseling fosters self-awareness, emotional resilience, and personal growth, promoting mental well-being and long-term positive change.
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
                        Module 8: Counselling Techniques
                      </h2>
                      <p className="text-muted">
                        Counseling techniques include active listening, empathy, and goal-setting to help individuals navigate challenges. Methods like cognitive-behavioral therapy, {' '}
                        {/* {showMore[8] ? (
                          <> */}
                        mindfulness, and solution-focused approaches empower clients to develop coping strategies. Effective counseling fosters self-awareness, emotional resilience, and personal growth, promoting mental well-being and long-term positive change.
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
                          Module 9: Group Instructor Masterclass
                        </h2>
                        <p className="text-muted">
                          A Group Instructor Masterclass is designed to refine teaching skills, elevate class management, and improve participant engagement. It covers techniques for motivating diverse groups, structuring effective workouts, and fostering a positive environment. Instructors gain the confidence and expertise to lead dynamic, inclusive fitness sessions that inspire results.
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
                        Module 9: Group Instructor Masterclass
                      </h2>
                      <p className="text-muted">
                        A Group Instructor Masterclass is designed to refine teaching skills, elevate class management, and improve participant engagement. It covers techniques {' '}
                        {/* {showMore[9] ? (
                          <> */}
                        for motivating diverse groups, structuring effective workouts, and fostering a positive environment. Instructors gain the confidence and expertise to lead dynamic, inclusive fitness sessions that inspire results.
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
                          src="/assets/images/course-img/powerlifting-course.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 10: Practical Application & Client Management,
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
                        Module 10: Practical Application & Client Management,
                        Behavior Change
                      </h2>
                      <p className="text-muted">
                        In this hands-on module, students master behavior change
                        techniques and client management strategies. By {' '}
                        {/* {showMore[10] ? (
                          <> */}
                        applying theoretical knowledge in practical
                        settings, they develop skills to motivate and guide
                        clients effectively.
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
              process.env.PUBLIC_URL + "/assets/images/img/what-does-this-courses-include-offline.webp"
            }
            className="img-fluid mt-2 d-none d-md-block"
          />
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL + "/assets/images/img/what-does-this-courses-include-offline-mobile.webp"
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
                    <h2 className="ml-0 h3-fs fs-34">
                      Why FGIIT?
                    </h2>
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
                <p className="mt-md-4 mb-md-4 mt-0 mb-3">demo lecture</p>
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
                <p className="mt-4 mb-md-4 mb-3">DPT demo Certificate</p>
                <LazyLoadImage
                  effect="blur"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/cpt_demo.webp"
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
                  Boost Your Fitness Career with{" "}
                  <span className="m-0 text-blue-color">Personal Trainer Courses</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      Enrolling in personal trainer courses is the first step toward building a successful career in the fitness industry. These courses provide essential knowledge and hands-on training to help you become a certified fitness professional. Whether you want to work at a gym, start your own business, or train clients online, the right certification can open endless opportunities.
                    </p>
                    <p>
                      A high-quality personal trainer course covers various aspects of fitness, including exercise science, anatomy, strength training, and client assessment. You will also learn about injury prevention, workout programming, and nutrition fundamentals, ensuring you can design safe and effective fitness plans for diverse clients.
                    </p>
                    <p>
                      Many personal trainer courses offer flexible learning options, including in-person training, online classes, and hybrid programs. Choosing an accredited course from a reputable institution enhances your credibility and increases job prospects.
                    </p>
                    <p>
                      By completing a personal trainer course, you gain the expertise needed to help others achieve their fitness goals while advancing your career. Start your journey today, get certified, and make a positive impact in the fitness world!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop d-none d-md-block">
        <div className="container-fluid p-0">
          <div>
            <Link to="/fgiit/fitness-training-and-placement">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/img/tpcell-d.webp"}
                width="100%"
                className="lazy"
                alt="fggroup"
              />
            </Link>
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
                <div className="faq-answer active" style={{ maxHeight: "none" }}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CourseReviewSection course_id="600e698486d2eb34f0796e20" />

      <FgiitFooter />
    </>
  );
}

export default PersonalTrainerCourses;
