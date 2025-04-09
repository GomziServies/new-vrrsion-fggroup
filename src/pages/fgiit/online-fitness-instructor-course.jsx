import React, { useState } from "react";
import "../../assets/css/home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Form } from "react-bootstrap";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import ModalVideo from "react-modal-video";
import { sendInquiry } from "../../assets/js/utils/contact-us";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import CourseReviewSection from "../../components/partials/review/course-review";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MeetOurInstructure from "../../components/fgiit/meetInstructure";
import OnlineCourseForm from "../../components/online-course/onlineCourseForm";
import { OnlineGroupInstructorMasterClass } from "../../components/online-course/OnlineCourseDataLoader";
import StudentTestimonial from "../../components/fgiit/studentsvideoreview";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import OurOfflineStudents from "../../components/course/ourOfflineStudents";
import OnlineCourseReviews from "../../components/fgiit/onlineCourseReviews";

function OnlineFitnessInstructorCourse() {
  const canonicalUrl = window.location.href;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    modalRefname: "",
    modalRefnumber: "",
    modalSelectedCourse: "",
  });

  const handlePopupClose = () => {
    setShowModal(false);
  };

  const actionReferAndEarnSubmit = async () => {
    try {
      const name = formData.modalRefname;
      const phoneNumber = formData.modalRefnumber;
      const courses = formData.modalSelectedCourse;
      let modifiedMessage = `${name}\n\nCourse: ${courses}`;
      await sendInquiry(
        name,
        phoneNumber,
        courses,
        modifiedMessage,
        window.location.href,
        null,
        null,
        null
      );
      setFormData({
        modalRefname: "",
        modalRefnumber: "",
        modalSelectedCourse: "",
      });
      handlePopupClose();
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your form has been submitted successfully!",
      });
    } catch (error) {
      console.error(error);
      // Show SweetAlert popup for error
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "An error occurred while submitting the form. Please try again later.",
      });
    }
  };

  const openForm = () => {
    setShowModal(true);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
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
      question: "What is the duration of the workshop?",
      answer:
        "The workshop spans 2 full days, held on Saturday and Sunday from 11:30 AM to 05:00 PM.",
    },
    {
      question: "Do I need a TRX band to participate in the workshop?",
      answer:
        "Yes, you will need a TRX band for the practical exercises in the workshop. If you do not have one, you can purchase a TRX band before starting the course.",
    },
    {
      question: "Is the workshop suitable for beginners?",
      answer:
        "Yes, the workshop is designed for all fitness levels, including beginners. Modifications and progressions are provided for each exercise to ensure that everyone can participate and benefit.",
    },

    {
      question: "Will I receive a certificate after completing the workshop?",
      answer:
        "Yes, participants will receive a certificate of completion from FGIIT after successfully finishing the workshop.",
    },
    {
      question: "What happens if I miss a live session?",
      answer:
        "All sessions are recorded, and participants will have access to the recordings so they can catch up at their convenience.",
    },
    {
      question: "Will I learn how to create TRX workout programs?",
      answer:
        "Yes, the workshop includes modules on how to structure TRX workouts for different goals,such as fat loss and muscle building, helping you design effective training programs.",
    },
    {
      question: "Is there support available during the course?",
      answer:
        "Yes, you will have access to live support and mentorship throughout the workshop to assist with any questions or challenges.",
    },
    {
      question: "Can TRX be used for injury rehabilitation?",
      answer:
        "While the primary focus is on strength and fitness, the TRX band can also be used for flexibility and rehabilitation exercises. However, it is recommended to consult a healthcare professional for injury-specific guidance",
    },
  ];
  const [showMore, setShowMore] = useState(Array(5).fill(false));

  const toggleReadMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };
  const reviewImages = [
    "/assets/images/img/geeta.webp",
    "/assets/images/img/rohit.webp",
    "/assets/images/img/sname.webp",
    "/assets/images/img/aname.webp",
  ];

  const reviewses = [
    {
      name: "Geeta Deshmukh",
      stars: 5,
      review:
        "The TRX Band Workshop was amazing! The online format was easy to follow, and the exercises were perfectly demonstrated. Highly recommend it!",
      image: reviewImages[0], // Use images for reviews
    },
    {
      name: "Rohit Mehta",
      stars: 5,
      review:
        "FGIIT's TRX workshop helped me improve my strength and flexibility. The instructors provided clear instructions, and I could do everything from home!",
      image: reviewImages[1], // Use images for reviews
    },
    {
      name: "Snehal Kaur",
      stars: 5,
      review:
        "Great workshop for beginners and advanced learners alike. The online sessions were very engaging, and I felt stronger after each session!",
      image: reviewImages[2], // Use images for reviews
    },
    {
      name: "Aditya Kulkarni",
      stars: 5,
      review:
        "Really enjoyed the TRX band exercises. The trainers were professional and made it easy to learn. Perfect for an at-home workout routine.",
      image: reviewImages[3], // Use images for reviews
    },
  ];

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
  const testimonials = [
    {
      name: "Ajit",
      description:
        "Ajit talks about how the Group Instructor course at FGIIT gave him the skills to lead diverse group classes with confidence. He shares how the course taught him different group training styles, including HIIT and aerobics, and how to keep participants motivated.",
      videoUrl: "j5eVOSH4hNU",
      imageUrl: "/assets/images/fgiit/student-review/ajit-gi.webp",
      date: "13 March 2023",
    },
    {
      name: "Nitesh",
      description:
        "Nitesh explains how the FGIIT course helped him shift from personal training to group instruction. He emphasizes the importance of communication and leadership skills taught in the course, which have made him a more effective and engaging instructor for large fitness classes.",
      videoUrl: "nZLvea-KY3s",
      imageUrl: "/assets/images/fgiit/student-review/nitesh-gi.webp",
      date: "13 March 2023",
    },
    {
      name: "Sayali",
      description:
        "Sayali shares her journey of becoming a certified Group Fitness Instructor through FGIIT. She highlights the practical knowledge gained during the course, especially in choreography and designing dynamic group workouts that cater to various fitness levels.",
      videoUrl: "E9kQOMJCnIk",
      imageUrl: "/assets/images/fgiit/student-review/sayali.webp",
      date: "13 March 2023",
    },
  ];

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  return (
    <>
      <Helmet>
        <title>Best Online Fitness Instructor Course</title>
        <meta
          name="description"
          content="Get certified with the best online fitness instructor course. Learn expert training techniques and start your fitness career today!"
        />
        <meta
          name="keyword"
          content="Online Group Instructor Master Class, Group Instructor Master Class Online, Group Instructor Master Class, Online Instructor Master Class, Fgiit Online Group Instructor Master Class, instructor, master class online, master class, master course online, master course, fitness trainer course, fitness instructor course, fitness trainer certification, group, group instructor, certified personal trainer, gym instructor course, fitness instructor certification, fitness trainer, personal trainer training, personal fitness trainer, online fitness instructor course, fitness instructor certification online, fitness instructor training, gym instructor course online, best fitness instructor certification, fitness instructor certification, fitness trainer, personal fitness certification, fitness instructor training, personal fitness trainer course, pt instructor course, fitness instructor course near me, Group Instructor Certification, Certified Group Instructor, Fitness Group Instructor Course, Group Fitness Instructor Course, Certified Fitness Instructor, Personal Trainer and Group Instructor Course, Best Group Fitness Instructor Course, Group Trainer Certification, Fitness Instructor Certification, Certified Fitness Trainer, Fitness Coach Training Course"
        />
        <meta
          property="og:title"
          content="Best Online Fitness Instructor Course"
        />
        <meta
          property="og:description"
          content="Get certified with the best online fitness instructor course. Learn expert training techniques and start your fitness career today!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fgiit/online-fitness-instructor-course"
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
            fbq('init', '134961498656274');
            fbq('track', 'PageView');
      `}
        </script>
        <noscript>
          {
            '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=134961498656274&ev=PageView&noscript=1" />'
          }
        </noscript>
      </Helmet>
      <p className="d-none">
        Online Group Instructor Master Class, Group Instructor Master Class Online, Group Instructor Master Class, Online Instructor Master Class, Fgiit Online Group Instructor Master Class, instructor, master class online, master class, master course online, master course, fitness trainer course, fitness instructor course, fitness trainer certification, group, group instructor, certified personal trainer, gym instructor course, fitness instructor certification, fitness trainer, personal trainer training, personal fitness trainer, online fitness instructor course, fitness instructor certification online, fitness instructor training, gym instructor course online, best fitness instructor certification, fitness instructor certification, fitness trainer, personal fitness certification, fitness instructor training, personal fitness trainer course, pt instructor course, fitness instructor course near me, Group Instructor Certification, Certified Group Instructor, Fitness Group Instructor Course, Group Fitness Instructor Course, Certified Fitness Instructor, Personal Trainer and Group Instructor Course, Best Group Fitness Instructor Course, Group Trainer Certification, Fitness Instructor Certification, Certified Fitness Trainer, Fitness Coach Training Course
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
                          "/assets/images/course-img/group-masterclass.webp"
                        }
                      />
                      <div className="video-btn play-btn">
                        <a
                          aria-label="Fg Group"
                          onClick={() => openVideoModal("7LEFrtgo09M")}
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
                          {OnlineGroupInstructorMasterClass?.info ? (
                            <>
                              <li>
                                <i className="fas fa-clock"></i>
                                {OnlineGroupInstructorMasterClass.info[0]}
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {OnlineGroupInstructorMasterClass.info[1]}
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {OnlineGroupInstructorMasterClass.info[2]}
                              </li>
                              <li>
                                <i className="fas fa-file-signature"></i>
                                {OnlineGroupInstructorMasterClass.info[3]}
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <i className="fas fa-clock"></i>
                                {OnlineGroupInstructorMasterClass.secondInfo[0]}
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {OnlineGroupInstructorMasterClass.secondInfo[1]}
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {OnlineGroupInstructorMasterClass.secondInfo[2]}
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
                <OnlineCourseForm
                  courseData={OnlineGroupInstructorMasterClass}
                  openForm={openForm}
                  whatsappMessage="Hello, I wanted to know more about the Online TRX Band Workshop."
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
                          Module 1: Tabata Workout Fundamentals
                        </h2>

                        <p className="text-muted">
                          This module dives into the high-intensity interval
                          training (HIIT) style of Tabata workouts, focusing on
                          their structure, benefits, and application in group
                          fitness settings. Participants will learn how to
                          design and lead effective Tabata sessions, blending
                          cardio and strength exercises to maximize calorie
                          burn, improve endurance, and engage diverse fitness
                          levels.
                          <ul className="row">
                            <div className="p-3 mt-2">
                              <li className="list-unstyled text-dark">
                                <b>Introduction to Tabata workout</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Science behind Tabata: benefits, physiology
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  How to create Tabata exercises and circuits
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Upper body Tabata exercises: chest, back,
                                  shoulders, arms
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Lower body Tabata exercises: legs, glutes,
                                  calves
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Warm-up and stretching exercises for Tabata
                                </b>
                              </li>
                            </div>
                          </ul>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container order-1 mt-2">
                        <img
                          src="/assets/images/blog/walkouts.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
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
                        Module 1: Tabata Workout Fundamentals
                      </h2>
                      <p className="text-muted">
                        This module dives into the high-intensity interval
                        training (HIIT) style of Tabata workouts, focusing on {' '}
                        {/* {showMore[1] ? (
                          <> */}
                        their structure, benefits, and application in group
                        fitness settings. Participants will learn how to
                        design and lead effective Tabata sessions, blending
                        cardio and strength exercises to maximize calorie
                        burn, improve endurance, and engage diverse fitness
                        levels.
                        <ul className="row">
                          <div className="p-2 mt-2">
                            <li className="list-unstyled text-dark">
                              <b>Introduction to Tabata workout</b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                Science behind Tabata: benefits, physiology
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                How to create Tabata exercises and circuits
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Upper body Tabata exercises: chest, back,
                                shoulders, arms
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                Lower body Tabata exercises: legs, glutes,
                                calves
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                Warm-up and stretching exercises for Tabata
                              </b>
                            </li>
                          </div>
                        </ul>
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
                          src="/assets/images/blog/squats.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 2: Functional Training Fundamentals
                        </h2>

                        <p className="text-muted">
                          Exploring the core principles of functional training,
                          this module emphasizes exercises that mimic real-life
                          movements, enhancing strength, balance, and
                          coordination. Participants will learn to structure
                          group workouts that cater to varied fitness levels,
                          focusing on building foundational strength and
                          improving daily functionality through dynamic
                          exercises.
                          <ul className="row">
                            <div className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Introduction to functional training</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Science behind functional training: benefits,
                                  physiology
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  How to create functional training exercises
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Upper body functional training exercises:
                                  chest, back, shoulders, arms
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Lower body functional training exercises:
                                  legs, glutes, calves
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Warm-up and stretching exercises for
                                  functional training
                                </b>
                              </li>
                            </div>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/blog/squats.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 2: Functional Training Fundamentals
                      </h2>
                      <p className="text-muted">
                        Exploring the core principles of functional training,
                        this module emphasizes exercises that mimic real-life {' '}
                        {/* {showMore[2] ? (
                          <> */}
                        movements, enhancing strength, balance, and
                        coordination. Participants will learn to structure
                        group workouts that cater to varied fitness levels,
                        focusing on building foundational strength and
                        improving daily functionality through dynamic
                        exercises.
                        <ul className="row">
                          <div className="p-2 mt-2">
                            <li className="list-unstyled text-dark">
                              <b>Introduction to functional training</b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                Science behind functional training:
                                benefits, physiology
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                How to create functional training exercises
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Upper body functional training exercises:
                                chest, back, shoulders, arms
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                Lower body functional training exercises:
                                legs, glutes, calves
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                Warm-up and stretching exercises for
                                functional training
                              </b>
                            </li>
                          </div>
                        </ul>
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
                          Module 3: TRX Band Workout Fundamentals
                        </h2>

                        <p className="text-muted">
                          This module introduces participants to TRX suspension
                          training, including its history, techniques, and
                          benefits. Designed to provide full-body engagement,
                          TRX workouts leverage body weight and gravity to build
                          strength, improve flexibility, and enhance core
                          stability. Participants will learn how to create and
                          lead TRX band sessions suitable for all fitness
                          levels, from beginners to advanced athletes.
                          <ul className="row">
                            <div className="p-3 mt-2">
                              <li className="list-unstyled text-dark">
                                <b> Introduction to TRX band workout </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>History and benefits of TRX training</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  How to use TRX bands: setup, safety, and
                                  basics
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Upper body TRX exercises: chest, back,
                                  shoulders, arms
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Lower body TRX exercises: legs, glutes, calves
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Warm-up and stretching exercises using TRX
                                  bands
                                </b>
                              </li>
                            </div>
                          </ul>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container order-1 mt-2">
                        <img
                          src="/assets/images/blog/step-up_onto_chair.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/blog/step-up_onto_chair.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 3: TRX Band Workout Fundamentals
                      </h2>
                      <p className="text-muted">
                        This module introduces participants to TRX suspension
                        training, including its history, techniques, and {' '}
                        {/* {showMore[3] ? (
                          <> */}
                        benefits. Designed to provide full-body engagement,
                        TRX workouts leverage body weight and gravity to
                        build strength, improve flexibility, and enhance
                        core stability. Participants will learn how to
                        create and lead TRX band sessions suitable for all
                        fitness levels, from beginners to advanced athletes.
                        <ul className="row">
                          <div className="p-2 mt-2">
                            <li className="list-unstyled text-dark">
                              <b> Introduction to TRX band workout </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>History and benefits of TRX training</b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                How to use TRX bands: setup, safety, and
                                basics
                              </b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Upper body TRX exercises: chest, back,
                                shoulders, arms
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                Lower body TRX exercises: legs, glutes,
                                calves
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>
                                Warm-up and stretching exercises using TRX
                                bands
                              </b>
                            </li>
                          </div>
                        </ul>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <OnlineCourseReviews />
      <section className="margintop">
        <div className="container-fluid p-0">
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/img/course-include-online.webp"
            }
            className="img-fluid mt-2 d-none d-md-block"
          />
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL +
              "/assets/images/img/course-include-online-mobile.webp"
            }
            className="img-fluid mt-2 d-block d-md-none"
          />
        </div>
      </section>
      <section className="mt-5">
        <div className="container-fluid">
          <div className="container">
            <div className="row mt-4 align-items-center">
              <div className="col-md-6">
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
                      <li>
                        <i className="fas fa-check"></i> Globally Recognized
                        Certifications
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Comprehensive
                        Curriculum Covering Latest Trends
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Interactive Live
                        Sessions with Trainers and Peers
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Regular Assessments &
                        Feedback
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Access to Exclusive
                        Study Groups
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Updated Study Material
                        and Case Studies
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Affordable Fees with
                        EMI Options
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Collaborations with Top
                        Fitness Brands
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Personalized Student
                        Support Team
                      </li>
                      <li>
                        <i className="fas fa-check"></i> Continuous Professional
                        Development Opportunities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-center">
                  <p className="mb-0 taks-p">Demo Certificate</p>
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/group-instructor-masterclass.webp"
                    }
                    width="100%"
                    alt="Course Certificate"
                  />
                </div>
                <div>
                  <span
                    className="taks-p d-none d-md-block text-center"
                    style={{ fontWeight: "500" }}
                  >
                    our Certificate is valid in 192 country
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MeetOurInstructure />
      {/* <OurStudentsWords /> */}
      <OurOfflineStudents />
      <section>
        <div className="container-fluid margintop">
          <div className="container blog2 pb-5">
            <div className="">
              <div className="covid text-center">
                <h2 className="mt-2 h2-fs">
                  Become a Certified{" "}
                  <span className="m-0 text-blue-color">
                    Fitness Instructor with Master Courses
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      If you're passionate about fitness and aspire to become a
                      professional, enrolling in a fitness instructor course
                      online can set you on the right path. Whether you're
                      aiming for a group instructor role or a personal fitness
                      trainer position, these courses provide comprehensive
                      training to develop your skills in exercise science,
                      client assessment, and fitness programming.
                    </p>
                    <p>
                      A master course online is a great way to gain in-depth
                      knowledge and expertise in fitness instruction. With an
                      online master class, you can learn at your own pace from
                      industry experts. The flexibility of master course online
                      programs ensures you get the best education while managing
                      your personal schedule.
                    </p>
                    <p>
                      For those pursuing a gym instructor course, there are
                      programs designed to teach the fundamentals of gym
                      operations, equipment usage, and client management. A
                      fitness instructor certification online offers the
                      convenience of gaining a recognized qualification from
                      home.
                    </p>
                    <p>
                      An accredited fitness instructor certification ensures you
                      are well-prepared to work with clients in various
                      settings. With fitness instructor training that includes
                      both practical and theoretical components, you will be
                      able to design safe and effective fitness plans. Start
                      your journey to becoming a professional with the best
                      fitness instructor certification today!
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

      <CourseReviewSection course_id="6509b66d1cdc4887d6951e74" />

      {/* Modal  */}
      <Modal show={showModal} onHide={handlePopupClose} centered>
        <div className="modal-content">
          <div className="modal-content form-design form-bg">
            <div className="modal-header justify-content-center p-0 border-bottom-0">
              <div className="text-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/descount-img.webp"
                  }
                  className="mb-1 img-media"
                  alt="FG Group"
                  width="250px"
                />
                <h2 className="h2-fs popuphading">Refer and Earn</h2>
              </div>
              <button
                type="button"
                className="closess close-btn closse-mobile p-0 bg-transparent border-0"
                onClick={handlePopupClose}
              >
                <span aria-hidden="true" className="p-0">
                  <i className="fas fa-times"></i>
                </span>
              </button>
            </div>
            <div className="modal-body mb-0 p-0">
              <div className="text-center d-block formmi" id="hid">
                <div className="row justify-content-center">
                  <div className="col-md-11 pl-0">
                    <Form>
                      <div className="input-group align-items-center">
                        <span>
                          <i className="far fa-user"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control fr"
                          placeholder="Enter referral name"
                          required
                          name="modalRefname"
                        />
                      </div>
                      <div className="input-group align-items-center mb-3">
                        <span>
                          <i className="fas fa-phone-alt"></i>
                        </span>
                        <input
                          type="number"
                          className="form-control fr"
                          placeholder="Enter Referral contact Number"
                          required
                          name="modalRefnumber"
                        />
                      </div>
                      <div className="input-group align-items-center mb-3">
                        <span className="pr-1">
                          <i className="fas fa-chalkboard-teacher"></i>
                        </span>
                        <select
                          className="num-employ pl-0"
                          required
                          name="modalSelectedCourse"
                        >
                          <option value="" hidden>
                            Select which course you interested
                          </option>
                          <option
                            className="field"
                            value="Diploma In Personal Training course"
                          >
                            Diploma In Personal Training course
                          </option>
                          <option
                            className="field"
                            value="Diploma In Nutrition course"
                          >
                            Diploma In Nutrition course
                          </option>
                          <option
                            className="field"
                            value="Diploma In Health & Fitness Business Management"
                          >
                            Diploma In Health & Fitness Business Management
                          </option>
                          <option
                            className="field"
                            value="Anabolic Androgenic Steroids"
                          >
                            Anabolic Androgenic Steroids
                          </option>
                          <option
                            className="field"
                            value="Group Instructor Workshop"
                          >
                            Group Instructor Workshop
                          </option>
                          <option
                            className="field"
                            value="Injury Rehabilitation Workshop"
                          >
                            Injury Rehabilitation Workshop
                          </option>
                          {/* <option
                            className="field"
                            value="Advance Clinical Nutrition Workshop"
                          >
                            Advance Clinical Nutrition Workshop
                          </option> */}
                        </select>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="text-center Referr-btn mt-md-3">
                <button
                  className="btn p-2 px-5"
                  onClick={actionReferAndEarnSubmit}
                >
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <FgiitFooter />
    </>
  );
}

export default OnlineFitnessInstructorCourse;
