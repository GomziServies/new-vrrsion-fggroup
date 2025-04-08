import React, { useState } from "react";
import "../../assets/css/home.css";
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
import { OfflineAnabolicAndrogenicCourseData } from "../../components/offline-course/OfflineCourseDataLoader";
import OwlCarousel from "react-owl-carousel";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CourseReviews from "../../components/fgiit/courseReviews";
import OurOfflineStudents from "../../components/course/ourOfflineStudents";

function AnabolicSteroidsCourse() {
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
  const faqItems = [
    {
      question: "What is the duration of the course?",
      answer:
        "The course lasts for one month and includes both offline classes and live Zoom sessions, with recorded video lectures available for review.",
    },
    {
      question: "Do I receive any course materials?",
      answer:
        "Yes, participants will receive an E-book and access to recorded sessions, ensuring that all learning materials are available for review.",
    },
    {
      question: "Is there support available during the course?",
      answer:
        "Absolutely! We provide team chat support for all students to address course-related queries and concerns promptly.",
    },
    {
      question: "Will there be an exam at the end of the course?",
      answer:
        "Yes, the course includes a multiple-choice exam (MCQs) and a case study-based project to assess your understanding of the material.",
    },
    {
      question: "What kind of certification will I receive?",
      answer:
        "Upon successful completion of the course, you will be awarded a Government-approved and internationally accredited certificate.",
    },
    {
      question: "Are there any internship opportunities available?",
      answer:
        "Yes, our program offers mandatory internships at top firms to help you gain practical experience in the industry.",
    },
    {
      question: "Is the course content available in multiple languages?",
      answer:
        "Yes, our learning materials are available in both English and Hindi, ensuring accessibility for a wider audience.",
    },
    {
      question: "Can I access the course materials after completion?",
      answer:
        "Yes, you will have lifetime access to recorded video lectures and ongoing support to help you reinforce your learning.",
    },
    {
      question: "How much does the course cost?",
      answer:
        "The total cost of the course is ₹18,054, which includes all materials and support services, with GST included.",
    },
    {
      question:
        "What career opportunities are available after completing this course?",
      answer:
        "Graduates receive 100% placement support, and the certification can open doors to various roles in fitness, bodybuilding, and health sectors.",
    },
    {
      question: "Are there any prerequisites for enrolling in the course?",
      answer:
        "There are no specific prerequisites, but a basic understanding of fitness and nutrition will be beneficial.",
    },
    {
      question: "Can beginners benefit from this course?",
      answer:
        "Yes, the course is designed to cater to all levels, including beginners, and provides a comprehensive foundation for understanding anabolic steroids and their use.",
    },
    {
      question: "How do I enroll in the course?",
      answer:
        "To enroll, please send a WhatsApp message to our provided contact number for further instructions and registration details.",
    },
  ];
  const reviewImages = [
    "/assets/images/img/aname.webp",
    "/assets/images/img/sname.webp",
    "/assets/images/img/raj.webp",
    "/assets/images/img/vname.webp",
  ];

  const reviewses = [
    {
      name: "Arjun Verma",
      stars: 5,
      review:
        "Excellent course for bodybuilding! The instructors provide clear guidance on both workout routines and nutrition. I saw great progress within a short time.",
      image: reviewImages[0], // Use images for reviews
    },
    {
      name: "Sneha Patel",
      stars: 5,
      review:
        "FGIIT's bodybuilding course exceeded my expectations. The lessons were easy to follow, and the personalized support made all the difference!",
      image: reviewImages[1], // Use images for reviews
    },
    {
      name: "Raj Yadav",
      stars: 5,
      review:
        "Great course for all fitness enthusiasts. The practical tips and detailed workouts helped me reach my goals faster than I imagined.",
      image: reviewImages[2], // Use images for reviews
    },
    {
      name: "Vinal Joshi",
      stars: 5,
      review:
        "Highly recommended! The instructors at FGIIT make everything easy to understand, and their fitness tips were a game-changer for me.",
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
  return (
    <>
      <Helmet>
        <title>Anabolic Steroids Course for Bodybuilding & Fitness</title>
        <meta name="description" content="Learn safe and effective use of anabolic steroids for bodybuilding and fitness. Enroll in our expert-led course today!" />
        <meta name="keyword" content="Offline Anabolic-Androgenic Steroids Masterclass, bodybuilding course, Offline bodybuilding course, bodybuilding course Offline, Anabolic-Androgenic Steroids Masterclass Offline, Fgiit Offline Anabolic-Androgenic Steroids Masterclass, anabolic course, bodybuilding certification, body building course, bodybuilding coach course, personal training bodybuilding, bodybuilding coach , bodybuilding coach certification, Anabolic Steroid Course, Advanced Bodybuilding Course, Bodybuilding and Nutrition Course, Bodybuilding Training Program, Steroids and Bodybuilding Certification, Strength and Conditioning Course, Personal Trainer Bodybuilding, Steroid Education Masterclass, Performance Enhancement Course, Bodybuilding and Supplements Course, Certified Bodybuilding Coach Course, Fitness and Bodybuilding Course, Anabolic Steroid Masterclass, Muscle Building and Steroids Course, Strength Training Bodybuilding Course, Best Bodybuilding Course, Steroid Use and Bodybuilding Course, Certified Anabolic Steroid Coach, Fitness Coaching for Bodybuilders, Bodybuilding Techniques Course, Professional Bodybuilding Course, Anabolic Nutrition and Bodybuilding, Anabolic Coaching Program, Certified Strength and Bodybuilding Coach, Muscle Growth and Steroid Education, Online Personal Trainer and Bodybuilding, Advanced Steroids in Bodybuilding, Bodybuilding Diet and Supplements, Bodybuilding and Steroid Use Masterclass, Fitness and Bodybuilding Training, Bodybuilding Coaching and Mentorship, Steroids Education and Bodybuilding Course, Bodybuilding Lifestyle and Nutrition Course, Bodybuilding Masterclass, Bodybuilding Supplements Course, Steroid Use and Fitness Course, Bodybuilding Coach Certification Program" />
        <meta property="og:title" content="Anabolic Steroids Course for Bodybuilding & Fitness" />
        <meta property="og:description" content="Learn safe and effective use of anabolic steroids for bodybuilding and fitness. Enroll in our expert-led course today!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgiit/anabolic-steroids-course" />
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
        Offline Anabolic-Androgenic Steroids Masterclass, bodybuilding course, Offline bodybuilding course, bodybuilding course Offline, Anabolic-Androgenic Steroids Masterclass Offline, Fgiit Offline Anabolic-Androgenic Steroids Masterclass, anabolic course, bodybuilding certification, body building course, bodybuilding coach course, personal training bodybuilding, bodybuilding coach , bodybuilding coach certification, Anabolic Steroid Course, Advanced Bodybuilding Course, Bodybuilding and Nutrition Course, Bodybuilding Training Program, Steroids and Bodybuilding Certification, Strength and Conditioning Course, Personal Trainer Bodybuilding, Steroid Education Masterclass, Performance Enhancement Course, Bodybuilding and Supplements Course, Certified Bodybuilding Coach Course, Fitness and Bodybuilding Course, Anabolic Steroid Masterclass, Muscle Building and Steroids Course, Strength Training Bodybuilding Course, Best Bodybuilding Course, Steroid Use and Bodybuilding Course, Certified Anabolic Steroid Coach, Fitness Coaching for Bodybuilders, Bodybuilding Techniques Course, Professional Bodybuilding Course, Anabolic Nutrition and Bodybuilding, Anabolic Coaching Program, Certified Strength and Bodybuilding Coach, Muscle Growth and Steroid Education, Online Personal Trainer and Bodybuilding, Advanced Steroids in Bodybuilding, Bodybuilding Diet and Supplements, Bodybuilding and Steroid Use Masterclass, Fitness and Bodybuilding Training, Bodybuilding Coaching and Mentorship, Steroids Education and Bodybuilding Course, Bodybuilding Lifestyle and Nutrition Course, Bodybuilding Masterclass, Bodybuilding Supplements Course, Steroid Use and Fitness Course, Bodybuilding Coach Certification Program
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
                          "/assets/images/fgiit/aas-new.webp"
                        }
                      />
                      <div className="video-btn play-btn">
                        <a
                          onClick={() => openVideoModal("677aZl2Hqhs")}
                          className="custom clickof"
                          aria-label="Fg Group"
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
                          {OfflineAnabolicAndrogenicCourseData?.info ? (
                            <>
                              <li className="fs-1">
                                <i className="fas fa-clock"></i>
                                {OfflineAnabolicAndrogenicCourseData.info[0]}
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {OfflineAnabolicAndrogenicCourseData.info[1]}
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {OfflineAnabolicAndrogenicCourseData.info[2]}
                              </li>
                              <li>
                                <i className="fas fa-file-signature"></i>
                                {OfflineAnabolicAndrogenicCourseData.info[3]}
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <i className="fas fa-clock"></i>
                                {
                                  OfflineAnabolicAndrogenicCourseData
                                    .secondInfo[0]
                                }
                              </li>
                              <li>
                                <i className="fas fa-chalkboard-teacher"></i>
                                {
                                  OfflineAnabolicAndrogenicCourseData
                                    .secondInfo[1]
                                }
                              </li>
                              <li>
                                <i className="fas fa-video"></i>
                                {
                                  OfflineAnabolicAndrogenicCourseData
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
                  courseData={OfflineAnabolicAndrogenicCourseData}
                  whatsappMessage="Hello, I wanted to know more about the Offline Anabolic-Androgenic Steroids Masterclass for bodybuilding."
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
                          Module 1: Introduction to Anabolic Androgenic Steroids
                        </h2>
                        <p className="text-muted">
                          This module offers a comprehensive overview of
                          Selective Androgen Receptor Modulators (SARMs) and
                          peptides, exploring their roles in muscle growth,
                          recovery, and competition preparation. Key topics
                          include "peak week" protocols, Post Cycle Therapy
                          (PCT) for post-steroid recovery, the importance of
                          regular blood tests to monitor health markers, and the
                          use of diuretics to enhance conditioning for
                          competitive events.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>
                                  Anabolics, Androgenic, Peptides, Sarms
                                  compounds Study
                                </b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>Overview of steroid use in bodybuilding</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container order-1 mt-2">
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
                        Module 1: Introduction to Anabolic Androgenic Steroids
                      </h2>
                      <p className="text-muted">
                        This module offers a comprehensive overview of Selective
                        Androgen Receptor Modulators (SARMs) and {' '}
                        {/* {showMore[1] ? (
                          <> */}
                        peptides, exploring their roles in muscle growth,
                        recovery, and competition preparation. Key topics
                        include "peak week" protocols, Post Cycle Therapy
                        (PCT) for post-steroid recovery, the importance of
                        regular blood tests to monitor health markers, and
                        the use of diuretics to enhance conditioning for
                        competitive events.
                        <div className="row">
                          <ul className="mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>
                                Anabolics, Androgenic, Peptides, Sarms
                                compounds Study
                              </b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>Overview of steroid use in bodybuilding</b>
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
                          src="/assets/images/course-img/side-effects-and-precautions.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 2: Managing Side Effects and Precautions
                        </h2>
                        <p className="text-muted">
                          Addressing the risks of anabolic steroid use, this
                          module delves into common side effects like hair loss,
                          acne, mood swings, aggression, and changes in sexual
                          function. Students will learn how to identify, manage,
                          and mitigate these effects through harm-reduction
                          strategies while understanding the psychological and
                          physiological implications of steroid use.
                          <div className="row">
                            <ul className="p-3 mt-2">
                              <li className="list-unstyled text-dark">
                                <b>Managing Gyno</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Side effects/Precautions:</b>
                                <ol className="pt-0">
                                  <li className="list-unstyled">
                                    <b>Hair loss</b>
                                  </li>
                                  <li className="list-unstyled">
                                    <b>Acne</b>
                                  </li>
                                  <li className="list-unstyled">
                                    <b>Mood Swings</b>
                                  </li>
                                  <li className="list-unstyled">
                                    <b>Insomnia</b>
                                  </li>
                                  <li className="list-unstyled">
                                    <b>Angerness</b>
                                  </li>
                                  <li className="list-unstyled">
                                    <b>Sexual activity</b>
                                  </li>
                                  <li className="list-unstyled">
                                    <b>Many more</b>
                                  </li>
                                </ol>
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
                        src="/assets/images/course-img/side-effects-and-precautions.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 2: Managing Side Effects and Precautions
                      </h2>
                      <p className="text-muted">
                        Addressing the risks of anabolic steroid use, this
                        module delves into common side effects like hair loss, {' '}
                        {/* {showMore[2] ? (
                          <> */}
                        acne, mood swings, aggression, and changes in sexual
                        function. Students will learn how to identify,
                        manage, and mitigate these effects through
                        harm-reduction strategies while understanding the
                        psychological and physiological implications of
                        steroid use.
                        <div className="row">
                          <ul className="p-3 mt-2">
                            <li className="list-unstyled text-dark">
                              <b>Managing Gyno</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Side effects/Precautions:</b>
                              <ol className="pt-0">
                                <li className="list-unstyled">
                                  <b>Hair loss</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Acne</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Mood Swings</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Insomnia</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Angerness</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Sexual activity</b>
                                </li>
                                <li className="list-unstyled">
                                  <b>Many more</b>
                                </li>
                              </ol>
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
                          Module 3: Post Cycle Therapy and Blood Tests
                        </h2>
                        <p className="text-muted">
                          This module highlights the critical elements of Post
                          Cycle Therapy (PCT) and the importance of blood tests
                          to monitor health during and after steroid cycles.
                          Students will gain insights into managing hormone
                          recovery and maintaining overall health while ensuring
                          the safety and effectiveness of steroid protocols.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Pct (Post Cycle Therapy)</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Oct (On Cycle Therapy)</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Blood test</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container order-1 mt-2">
                        <img
                          src="/assets/images/course-img/online-3.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/online-3.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 3: Post Cycle Therapy and Blood Tests
                      </h2>
                      <p className="text-muted">
                        This module highlights the critical elements of Post
                        Cycle Therapy (PCT) and the importance of blood tests {' '}
                        {/* {showMore[3] ? (
                          <> */}
                        to monitor health during and after steroid cycles.
                        Students will gain insights into managing hormone
                        recovery and maintaining overall health while
                        ensuring the safety and effectiveness of steroid
                        protocols.
                        <div className="row">
                          <ul className="mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>Pct (Post Cycle Therapy)</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Oct (On Cycle Therapy)</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Blood test</b>
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
                          src="/assets/images/course-img/online-2.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 4: Cycle Designing and Bodybuilding
                        </h2>
                        <p className="text-muted">
                          Students will learn the art of designing steroid
                          cycles tailored to various fitness goals, including
                          bodybuilding, men's physique competitions, and
                          powerlifting. Special attention is given to tailoring
                          cycles for female clients, adapting protocols to meet
                          their unique physiological needs while ensuring safety
                          and effectiveness.
                          <div className="row">
                            <ul className="p-3 mt-2">
                              <li className="list-unstyled text-dark">
                                <b>Cycle Designing</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Bodybuilding Cycle</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Men physique Cycle</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Powerlifting Cycle</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Women Cycle</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Bikni Cycle</b>
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
                        Module 4: Cycle Designing and Bodybuilding
                      </h2>
                      <p className="text-muted">
                        Students will learn the art of designing steroid cycles
                        tailored to various fitness goals, including {' '}
                        {/* {showMore[4] ? (
                          <> */}
                        bodybuilding, men's physique competitions, and
                        powerlifting. Special attention is given to
                        tailoring cycles for female clients, adapting
                        protocols to meet their unique physiological needs
                        while ensuring safety and effectiveness.
                        <div className="row">
                          <ul className="p-3 mt-2">
                            <li className="list-unstyled text-dark">
                              <b>Cycle Designing</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Bodybuilding Cycle</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Men physique Cycle</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Powerlifting Cycle</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Women Cycle</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Bikni Cycle</b>
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
                          Module 5: Interpreting Reports and Physiology
                        </h2>
                        <p className="text-muted">
                          Focusing on the scientific aspects of fitness
                          transformation, this module teaches students to
                          interpret health reports and physiological changes
                          related to anabolic steroid use. Emphasis is placed on
                          understanding how the body responds to these
                          substances, equipping students to make informed
                          decisions for their client's health and fitness
                          journeys.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>How to Study reports</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>How Physiology Work</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Which Blood Test have to do in Pre/Post Prep
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container order-1 mt-2">
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
                        Module 5: Interpreting Reports and Physiology
                      </h2>
                      <p className="text-muted">
                        Focusing on the scientific aspects of fitness
                        transformation, this module teaches students to {' '}
                        {/* {showMore[5] ? (
                          <> */}
                        interpret health reports and physiological changes
                        related to anabolic steroid use. Emphasis is placed
                        on understanding how the body responds to these
                        substances, equipping students to make informed
                        decisions for their client's health and fitness
                        journeys.
                        <div className="row">
                          <ul className="mt-2 p-3">
                            <li className="list-unstyled text-dark">
                              <b>How to Study reports</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>How Physiology Work</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Which Blood Test have to do in Pre/Post
                                Prep
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
                          src="/assets/images/course-img/diet-manage.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 6: Peak Week Preparation
                        </h2>
                        <p className="text-muted">
                          This module prepares students to guide clients through
                          the critical final stages of competition preparation,
                          known as "peak week." Topics include monitoring
                          physiological changes, interpreting health reports,
                          and optimizing client readiness for bikini and
                          physique competitions, ensuring a science-backed
                          approach to achieving peak physical conditioning.
                          <div className="row">
                            <ul className="p-3 mt-2">
                              <li className="list-unstyled text-dark">
                                <b>Meal planning for peak week</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>Carbohydrate loading strategies</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>Dietary manipulations for peak week</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Water loading and manipulation</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Sodium and electrolyte management</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Mental preparation and mindset strategies</b>
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
                        src="/assets/images/course-img/diet-manage.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 6: Peak Week Preparation
                      </h2>
                      <p className="text-muted">
                        This module prepares students to guide clients through
                        the critical final stages of competition preparation, {' '}
                        {/* {showMore[6] ? (
                          <> */}
                        known as "peak week." Topics include monitoring
                        physiological changes, interpreting health reports,
                        and optimizing client readiness for bikini and
                        physique competitions, ensuring a science-backed
                        approach to achieving peak physical conditioning.
                        <div className="row">
                          <ul className="p-3 mt-2">
                            <li className="list-unstyled text-dark">
                              <b>Meal planning for peak week</b>
                            </li>

                            <li className="list-unstyled text-dark">
                              <b>Carbohydrate loading strategies</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Dietary manipulations for peak week</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Water loading and manipulation</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>Sodium and electrolyte management</b>
                            </li>
                            <li className="list-unstyled text-dark">
                              <b>
                                Mental preparation and mindset strategies
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
                      onClick={() => toggleReadMore(6)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[6] ? "Read less" : "Read more"}
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
                      "/assets/images/img/anabolic_cycle.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="fggroup"
                  />
                  <div className="video-btn play-btn">
                    <a
                      aria-label="Fg Group"
                      onClick={() => openVideoModal("TKn2FwMOHak")}
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
                <p className="mt-4 mb-md-4 mb-3">AAS Demo Certificate</p>
                <LazyLoadImage
                  effect="blur"
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/aas_demo.webp"
                  }
                  width="90%"
                  alt="Anabolic Androganic Steroid course certificate"
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
                  Enhance Your Knowledge with an{" "}
                  <span className="m-0 text-blue-color">Anabolic Steroids Course</span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="describe">
                    <p>
                      If you're serious about bodybuilding and muscle growth, enrolling in an anabolic steroids course can provide essential knowledge on safe and effective usage. Understanding the science behind anabolic steroids, their effects on the body, and proper dosage protocols is crucial for athletes and fitness enthusiasts looking to maximize performance while minimizing risks.
                    </p>
                    <p>
                      A well-structured anabolic steroids course covers key topics such as steroid types, benefits, side effects, legal regulations, and post-cycle therapy (PCT). This ensures that individuals make informed decisions and use these substances responsibly under expert guidance.
                    </p>
                    <p>
                      For those looking for a more comprehensive approach to fitness, a bodybuilding course is an excellent choice. It includes training techniques, nutrition strategies, supplement guidance, and muscle-building principles to help you achieve your desired physique naturally or with enhancements. Combining a bodybuilding course with an anabolic steroids course allows athletes to optimize their training while maintaining overall health.
                    </p>
                    <p>
                      Whether you're an aspiring bodybuilder or a fitness professional, gaining proper education through certified courses ensures long-term success. Choose the right course today and build a stronger, well-informed fitness journey while prioritizing safety and effectiveness.
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
                src={process.env.PUBLIC_URL + "/assets/images/img/tpcell-d.webp"}
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
                <div className="faq-answer active" style={{ maxHeight: "none" }}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CourseReviewSection course_id="6297dead33971335bde5e247" />

      <FgiitFooter />
    </>
  );
}

export default AnabolicSteroidsCourse;
