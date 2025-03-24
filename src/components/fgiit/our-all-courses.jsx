import React, { useState } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OurAllCourses = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);
  const [showMore5, setShowMore5] = useState(false);
  const [showMore6, setShowMore6] = useState(false);
  const [showMore7, setShowMore7] = useState(false);
  const [showMore8, setShowMore8] = useState(false);
  const [showMore9, setShowMore9] = useState(false);
  const [showMore10, setShowMore10] = useState(false);
  const [showMore11, setShowMore11] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  const CourseData = [
    {
      image: "/assets/images/fgiit/dpt-nocost.webp",
      title: "Diploma In Personal Training course",
      description:
        "This Course Helps You To Become Certified Personal Trainer Which Every Client Wants. A Personal Trainer Creates One-On-One...",
      full_desc:
        "This Course Helps You To Become Certified Personal Trainer Which Every Client Wants. A Personal Trainer Creates One-On-One Fitness Programs For Their Clients, Motivating, And Guiding Them To Achieve Their Goals. Clients May Wish To Lose Weight Or Gain Muscle, And As A Personal Trainer, You'll Instruct And Assist Them With Exercising Appropriately Utilizing Exercises And Explicit Plans.",
      links: [
        { label: "Online", url: "/fgiit/online-personal-training-course" },
        { label: "Offline", url: "/fgiit/personal-trainer-courses" },
        {
          label: "Self Learning",
          url: "/fgiit/personal-training-course",
        },
      ],
      rating: "4.7",
      rating_count: "2,306",
    },
    {
      image: "/assets/images/fgiit/dnc-nocost.webp",
      title: "Diploma In Nutrition course",
      description:
        "Diploma In A Nutritionist Course Diverse Course Where We Are Teaching Our Nutritionist Students That How To Make A Diet Fo...",
      full_desc:
        "Diploma In A Nutritionist Course Diverse Course Where We Are Teaching Our Nutritionist Students That How To Make A Diet For Clinically Ill Patients For Fat Loss And Muscle Building Motivating, And Guiding Them To Achieve Their Goals. Clients May Wish To Lose Weight Or Gain Muscle, And As A Personal Trainer, You'll Instruct And Assist Them With Exercising Appropriately Utilizing Exercises And Explicit Plans.",
      links: [
        { label: "Online", url: "/fgiit/food-and-nutrition-course" },
        { label: "Offline", url: "/fgiit/course-for-dietician" },
        { label: "Self Learning", url: "/fgiit/dietician-course-online" },
      ],
      rating: "4.4",
      rating_count: "1,209",
    },
    {
      image: "/assets/images/fgiit/aas-nocost.webp",
      title: "Anabolic Androgenic Steroids",
      description:
        "Anabolic-Androgenic Steroids Are The Most Important Thing To Know For Athletes These Days. In The Era, Where Everyone I...",
      full_desc:
        "Anabolic-Androgenic Steroids Are The Most Important Thing To Know For Athletes These Days. In The Era, Where Everyone Is Using Performance-Enhancing Drugs To Win, You Should Not Be Left Out From The Victory Or Make Any Decision That Can Harm Your Life. So Our Objective Is To Spread The Knowledge Anabolic Substance, Doses, Safety, And Complications To Every Individual Who Is In Sports - Course For Bodybuilding.",
      links: [
        { label: "Online", url: "/fgiit/anabolic-steroid-testosterone" },
        { label: "Offline", url: "/fgiit/anabolic-steroids-course" },
        {
          label: "Self Learning",
          url: "/fgiit/anabolic-androgenic-steroids",
        },
      ],
      rating: "4.3",
      rating_count: "1,052",
    },
    {
      image: "/assets/images/fgiit/fgiit-powerlifting-course.webp",
      title: "Powerlifting Coach Workshop",
      description:
        "Dive into the world of Powerlifting! Explore biomechanics, strength training principles, and effective programming ...",
      full_desc:
        "Dive into the world of Powerlifting! Explore biomechanics, strength training principles, and effective programming. Learn about essential equipment, rules, and injury prevention. Understand coaching, ethics, and legal aspects. Elevate your strength game with practical training insights.",
      links: [
        { label: "Online", url: "/fgiit/online-powerlifting-course" },
        { label: "Offline", url: "/fgiit/powerlifting-course" },
      ],
      rating: "4.3",
      rating_count: "2,004",
    },
    {
      image: "/assets/images/fgiit/inrehab-nocost.webp",
      title: "Injury Rehabilitation Workshop",
      description:
        "This Course Basically Aims At Preventing And Treating Injuries Through Several Means. Injuries That Are Connected To Sport...",
      full_desc:
        "This Course Basically Aims At Preventing And Treating Injuries Through Several Means. Injuries That Are Connected To Sports And Gym Can Cause Severe Pain Or Can Cause Impacts On Your Body For The Rest Of Your Life. The Knowledge Of Treating Them Is Equally Important For An Individual As To Train And Therefore, We Are Here With The Knowledge That You Need To Know About Each And Everything About Exercises Of Rehab, Reasons Of Rehab, Types Of Injuries, And Much More.",
      links: [
        { label: "Online", url: "/fgiit/course-of-physiotherapy" },
        { label: "Offline", url: "/fgiit/injury-rehabilitation-program" },
        {
          label: "Self Learning",
          url: "/fgiit/physiotherapy-course",
        },
      ],
      rating: "4.5",
      rating_count: "1,923",
    },
    {
      image: "/assets/images/fgiit/advance-clincal-nocost.webp",
      title: "Advance Clinical Nutrition Workshop",
      description:
        "Wellness Consultant Is A Course Where You Learn How To Fight Diseases Like Diabetes, Thyroid, PCOS, And Cancer. These Are ...",
      full_desc:
        "Wellness Consultant Is A Course Where You Learn How To Fight Diseases Like Diabetes, Thyroid, PCOS, And Cancer. These Are The Diseases Is Can Not Be Controlled By Medicine Only, You Need To Have The Support Of Nutrition, Exercises, Recovery, And Rehab Parts Also. There Are Many modern Research That Suggests That Intermittent Fasting, low carb Diet, Keto Diet, And Many Caloric Deficit Diets And Exercise Approaches Are More Helpful Than Medicine Also, So This Course Will Help You To Achieve And Gain Knowledge About Those Kinds Of Therapies Which Are Alternative Medicine Therapy.",
      links: [
        {
          label: "Online",
          url: "/fgiit/clinical-diets-for-health-and-wellness",
        },
        { label: "Offline", url: "/fgiit/clinical-dietitian" },
        {
          label: "Self Learning",
          url: "/fgiit/clinical-nutrition-course",
        },
      ],
      rating: "4.6",
      rating_count: "1,978",
    },
    {
      image: "/assets/images/fgiit/GIC-nocost.webp",
      title: "Group Instructor Workshop",
      description:
        "Each Exercise In A Given Tabata Workout Lasts Only Four Minutes, But It Is Likely To Be One Of The Longest Four Minutes You Have Ever Endured...",
      full_desc:
        "Each Exercise In A Given Tabata Workout Lasts Only Four Minutes, But It Is Likely To Be One Of The Longest Four Minutes You Have Ever Endured. The Doctor Designed A Training Where Participants Gave Their Maximum Effort For 20 Seconds, Then 10 Seconds For Rest. They Repeated This Cycle For Four Minutes - In Other Words, Eight 30-Second Cycles. That In A Nutshell Is A Tabata Exercise. Forget The Gym Membership And Fancy Fitness Accessories. Sometimes, All You Need Is 30 Minutes And Some Space.",
      links: [
        {
          label: "Online",
          url: "/fgiit/online-fitness-instructor-course",
        },
        { label: "Offline", url: "/fgiit/fitness-instructor-course" },
        {
          label: "Self Learning",
          url: "/fgiit/online-group-instructor-masterclass",
        },
      ],
      rating: "4.4",
      rating_count: "1,078",
    },
  ];

  const [showMoreList, setShowMoreList] = useState(
    new Array(CourseData.length).fill(false)
  );

  const toggleReadMore1 = (index) => {
    setShowMoreList((prevState) =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };

  const options = {
    loop: true,
    dots: false,
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
    <section className="bg-blues margintop pt-md-5 pt-xl-0" id="allcourse">
      <div className="container-fluid">
        <div className="container pb-4 pb-md-5 pt-md-5 pt-xl-0">
          <div className="describe text-center pt-md-5 pt-xl-0">
            <h1>
              Our All <span className="m-0 text-blue-color"> Courses</span>
            </h1>
            <div className="thm-bg-clr dector mb-4 mb-md-2"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="describe d-none d-md-block">
                <p className="ml-0">
                  FGIIT offers a variety of courses keeping in mind the talent
                  of the Indian youth and to develop more of those sectors which
                  are declared as under skill development and also to identify
                  new sectors for skill development. The main purpose is to
                  create opportunities, space and scope for the individuals who
                  were not able to get education after passing the 10th
                  className. The reasons can be financial constraints, family
                  problems, societal constraints or any other which forced them
                  to stay behind.
                </p>
                <h2 className="ml-0 h4-fs">The courses are listed below:</h2>
              </div>
              <div className="describe d-block d-md-none">
                <p className="m-0">
                  FGIIT offers a variety of courses keeping in mind the talent
                  of the Indian youth and to develop more of those sectors which
                  are declared as under skill development
                  {showMore ? (
                    <p className="m-0">
                      and also to identify new sectors for skill development.
                      The main purpose is to create opportunities, space and
                      scope for the individuals who were not able to get
                      education after passing the 10th className. The reasons
                      can be financial constraints, family problems, societal
                      constraints or any other which forced them to stay behind.
                    </p>
                  ) : (
                    <span id="dotsx">...</span>
                  )}
                </p>
                <p
                  onClick={toggleReadMore}
                  id="myBtnrx"
                  style={{ color: "#00afef", fontWeight: "500" }}
                >
                  {showMore ? "Read less" : "Read more"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <OwlCarousel
                id="owl-demo"
                className="owl-carousel owl-theme"
                key={showMoreList.join("")}
                {...options}
              >
                {CourseData.map((card, index) => (
                  <div className="item mx-md-3" key={index}>
                    <div className="blog p-0" style={{ borderRadius: "10px" }}>
                      <div className="ply position-relative">
                        <img
                          src={process.env.PUBLIC_URL + card.image}
                          width="100%"
                          style={{ borderRadius: "10px 10px 0px 0px" }}
                          className="lazy"
                          alt="fggroup"
                        />
                      </div>
                      <div className="cart-t course-card d-flex flex-column justify-content-between">
                        <div>
                          <h2 className="h4-fs">{card.title}</h2>
                          <div className="mt-2 mb-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <span>
                              {card.rating} ({card.rating_count})
                            </span>
                          </div>
                          <div className="mb-3 d-none d-md-block">
                            <span className="d-none d-md-block mb-0">
                              {showMoreList[index]
                                ? card.full_desc
                                : card.description}
                            </span>
                            <p
                              onClick={() => toggleReadMore1(index)}
                              className="text-info pe-auto"
                            >
                              {showMoreList[index] ? "Read less" : "Read more"}
                            </p>
                          </div>
                        </div>
                        <div>
                          {card.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn mt-2"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="item mx-md-3">
                  <div className="blog p-0" style={{ borderRadius: "10px" }}>
                    <div className="ply position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/dpt-nocost.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                        className="lazy"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <h2 className="h4-fs">
                        Diploma In Personal Training course
                      </h2>
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.5 (1,002)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="d-none d-md-block mb-0">
                          This Course Helps You To Become Certified Personal
                          Trainer Which Every Client Wants. A Personal Trainer
                          Creates One-On-One Fitness Programs For Their Clients,{" "}
                          {showMore[0] ? (
                            <span className="m-0">
                              Motivating, And Guiding Them To Achieve Their
                              Goals. Clients May Wish To Lose Weight Or Gain
                              Muscle, And As A Personal Trainer, You'll Instruct
                              And Assist Them With Exercising Appropriately
                              Utilizing Exercises And Explicit Plans.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={() => toggleReadMore(0)}
                          id="myBtnn"
                          className="text-info pe-auto"
                        >
                          {showMore[0] ? "Read less" : "Read more"}
                        </p>
                      </div>
                      <Link
                        to="/fgiit/gym-trainer-course"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Online
                      </Link>
                      <Link
                        to="/fgiit/personal-trainer-courses"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Offline
                      </Link>
                      <Link
                        to="/fgiit/online-diploma-in-personal-training"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Self Learning
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item mx-md-3">
                  <div className="blog p-0" style={{ borderRadius: "10px" }}>
                    <div className="ply position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/dnc-nocost.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                        className="lazy"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <h2 className="h4-fs">Diploma In Nutrition course</h2>
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.5 (1,002)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="d-none d-md-block mb-0">
                          Diploma In A Nutritionist Course Diverse Course Where
                          We Are Teaching Our Nutritionist Students That How To
                          Make A Diet For Clinically Ill Patients For Fat Loss
                          And Muscle Building Motivating, And Gui{" "}
                          {showMore2 ? (
                            <span className="m-0">
                              ding Them To Achieve Their Goals. Clients May Wish
                              To Lose Weight Or Gain Muscle, And As A Personal
                              Trainer, You'll Instruct And Assist Them With
                              Exercising Appropriately Utilizing Exercises And
                              Explicit Plans.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore2}
                          id="myBtnn"
                          className="text-info pe-auto"
                        >
                          {showMore2 ? "Read less" : "Read more"}
                        </p>
                      </div>
                      <Link
                        to="/fgiit/nutritionist-course-online"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Online
                      </Link>
                      <Link
                        to="/fgiit/course-for-dietitians"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Offline
                      </Link>
                      <Link
                        to="/fgiit/online-diploma-in-nutrition"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Self Learning
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item mx-md-3">
                  <div className="blog p-0" style={{ borderRadius: "10px" }}>
                    <div className="ply  position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/aas-nocost.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                        className="lazy"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <h2 className="h4-fs">Anabolic Androgenic Steroids</h2>
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.5 (1,002)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="d-none d-md-block mb-0">
                          Anabolic-Androgenic Steroids Are The Most Important
                          Thing To Know For Athletes These Days. In The Era,
                          Where Everyone Is Using Performance-Enhancing Drugs To
                          Win, You Should Not Be Left Out{" "}
                          {showMore3 ? (
                            <span className="m-0">
                              From The Victory Or Make Any Decision That Can
                              Harm Your Life. So Our Objective Is To Spread The
                              Knowledge Anabolic Substance, Doses, Safety, And
                              Complications To Every Individual Who Is In Sports
                              - Course For Bodybuilding
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore3}
                          id="myBtnn"
                          className="text-info pe-auto"
                        >
                          {showMore3 ? "Read less" : "Read more"}
                        </p>
                      </div>
                      <Link
                        to="/fgiit/course-for-bodybuilding"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Online
                      </Link>
                      <Link
                        to="/fgiit/bodybuilding-course"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Offline
                      </Link>
                      <Link
                        to="/fgiit/online-anabolic-steroid-masterclassName"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Self Learning
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item mx-md-3">
                  <div className="blog p-0" style={{ borderRadius: "10px" }}>
                    <div className="ply  position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-trx-band-workshop-course.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                        className="lazy"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <h2 className="h4-fs">TRX Band Workshop</h2>
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.5 (120)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="d-none d-md-block mb-0">
                          Discover the benefits of TRX band training for a
                          full-body workout! Learn how to use TRX bands
                          effectively for upper and lower body exercises,
                          stretching, and achieving fat loss and muscle-building{" "}
                          {showMore4 ? (
                            <span className="m-0">
                              goals. Explore the versatile world of resistance
                              training with TRX.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore4}
                          id="myBtnn"
                          className="text-info pe-auto"
                        >
                          {showMore4 ? "Read less" : "Read more"}
                        </p>
                      </div>
                      <Link
                        to="/fgiit/online-trx-band-workshop"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Online
                      </Link>
                      <Link
                        to="/fgiit/offline-trx-and-workshop"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Offline
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item mx-md-3">
                  <div className="blog p-0" style={{ borderRadius: "10px" }}>
                    <div className="ply  position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-tabata-workshop-course.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                        className="lazy"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <h2 className="h4-fs">Tabata Workshop</h2>
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.8 (125)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="d-none d-md-block mb-0">
                          Unlock the power of Tabata workouts! Discover the
                          science behind Tabata, create effective exercises and
                          circuits, target upper and lower body, warm up,
                          stretch, and optimize fat loss and muscle{" "}
                          {showMore5 ? (
                            <span className="m-0">
                              building with this comprehensive guide to Tabata
                              training.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore5}
                          id="myBtnn"
                          className="text-info pe-auto"
                        >
                          {showMore5 ? "Read less" : "Read more"}
                        </p>
                      </div>
                      <Link
                        to="/fgiit/online-tabata-workshop"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Online
                      </Link>
                      <Link
                        to="/fgiit/offline-tabata-workshop"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Offline
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item mx-md-3">
                  <div className="blog p-0" style={{ borderRadius: "10px" }}>
                    <div className="ply  position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-functional-training-workshop-course.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                        className="lazy"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <h2 className="h4-fs">Functional Training Workshop</h2>
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.8 (165)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="d-none d-md-block mb-0">
                          Embrace the world of Functional Training! Explore the
                          science behind it, learn to design effective
                          exercises, target upper and lower body, optimize
                          warm-up and stretching, and harness the{" "}
                          {showMore6 ? (
                            <span className="m-0">
                              principles of fat loss and muscle building for a
                              holistic fitness approach. Discover the exercise
                              cycles that make Functional Training a
                              game-changer.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore6}
                          id="myBtnn"
                          className="text-info pe-auto"
                        >
                          {showMore6 ? "Read less" : "Read more"}
                        </p>
                      </div>
                      <Link
                        to="/fgiit/online-functional-training-workshop"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Online
                      </Link>
                      <Link
                        to="/fgiit/offline-functional-training-workshop"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Offline
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item mx-md-3">
                  <div className="blog p-0" style={{ borderRadius: "10px" }}>
                    <div className="ply  position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-mix-martial-arts-course.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                        className="lazy"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <h2 className="h4-fs">Mix Martial Arts Workshop</h2>
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.8 (185)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="d-none d-md-block mb-0">
                          Enter the world of Martial Arts! Master basic stances,
                          footwork, hand, and kicking techniques. Learn vital
                          skills in blocking, self-defense, and grappling.
                          Discover the artistry in forms or katas{" "}
                          {showMore7 ? (
                            <span className="m-0">
                              and the intensity of sparring. Begin your journey
                              to martial prowess today!
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore7}
                          id="myBtnn"
                          className="text-info pe-auto"
                        >
                          {showMore7 ? "Read less" : "Read more"}
                        </p>
                      </div>
                      <Link
                        to="/fgiit/online-martial-arts-workshop"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Online
                      </Link>
                      <Link
                        to="/fgiit/offline-mix-martial-arts-workshop"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Offline
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item mx-md-3">
                  <div className="blog p-0" style={{ borderRadius: "10px" }}>
                    <div className="ply  position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/fgiit-powerlifting-course.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                        className="lazy"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <h2 className="h4-fs">Powerlifting Coach Workshop</h2>
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.9 (250)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="d-none d-md-block mb-0">
                          Dive into the world of Powerlifting! Explore
                          biomechanics, strength training principles, and
                          effective programming. Learn about essential
                          equipment, rules,and injury prevention. Understand
                          coaching,{" "}
                          {showMore8 ? (
                            <span className="m-0">
                              ethics, and legal aspects. Elevate your strength
                              game with practical training insights.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore8}
                          id="myBtnn"
                          className="text-info pe-auto"
                        >
                          {showMore8 ? "Read less" : "Read more"}
                        </p>
                      </div>
                      <Link
                        to="/fgiit/online-powerlifting-coach-workshop"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Online
                      </Link>
                      <Link
                        to="/fgiit/offline-powerlifting-coach-workshop"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Offline
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item mx-md-3">
                  <div className="blog p-0" style={{ borderRadius: " 10px" }}>
                    <div className="ply position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/inrehab-nocost.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                        className="lazy"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <h2 className="h4-fs">Injury Rehabilitation Workshop</h2>
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.5 (1,002)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="d-none d-md-block mb-0">
                          This Course Basically Aims At Preventing And Treating
                          Injuries Through Several Means. Injuries That Are
                          Connected To Sports And Gym Can Cause Severe Pain Or
                          Can Cause Impacts On Your Body For{" "}
                          {showMore9 ? (
                            <span className="m-0">
                              The Rest Of Your Life. The Knowledge Of Treating
                              Them Is Equally Important For An Individual As To
                              Train And Therefore, We Are Here With The
                              Knowledge That You Need To Know About Each And
                              Everything About Exercises Of Rehab, Reasons Of
                              Rehab, Types Of Injuries, And Much More.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore9}
                          id="myBtnn"
                          className="text-info pe-auto"
                        >
                          {showMore9 ? "Read less" : "Read more"}
                        </p>
                      </div>
                      <Link
                        to="/fgiit/cupping-therapy-course-near-me"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Online
                      </Link>
                      <Link
                        to="/fgiit/course-physiotherapy"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Offline
                      </Link>
                      <Link
                        to="/fgiit/online-injury-rehab-masterclassName"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Self Learning
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item mx-md-3">
                  <div className="blog p-0" style={{ borderRadius: "10px" }}>
                    <div className="ply position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/advance-clincal-nocost.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                        className="lazy"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <h2 className="h4-fs">Advance Clinical Nutrition Workshop</h2>
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.5 (1,002)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="d-none d-md-block mb-0">
                          Wellness Consultant Is A Course Where You Learn How To
                          Fight Diseases Like Diabetes, Thyroid, PCOS, And
                          Cancer. These Are The Diseases Is Can Not Be
                          Controlled By{" "}
                          {showMore10 ? (
                            <span className="m-0">
                              Medicine Only, You Need To Have The Support Of
                              Nutrition, Exercises, Recovery, And Rehab Parts
                              Also. There Are Many modern Research That Suggests
                              That Intermittent Fasting, low carb Diet, Keto
                              Diet, And Many Caloric Deficit Diets And Exercise
                              Approaches Are More Helpful Than Medicine Also, So
                              This Course Will Help You To Achieve And Gain
                              Knowledge About Those Kinds Of Therapies Which Are
                              Alternative Medicine Therapy.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore10}
                          id="myBtnn"
                          className="text-info pe-auto"
                        >
                          {showMore10 ? "Read less" : "Read more"}
                        </p>
                      </div>
                      <Link
                        to="/fgiit/clinical-diets-for-health-and-wellness"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Online
                      </Link>
                      <Link
                        to="/fgiit/clinical-dietitian"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Offline
                      </Link>
                      <Link
                        to="/fgiit/online-certified-health-wellness-consultant"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Self Learning
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item mx-md-3">
                  <div className="blog p-0" style={{ borderRadius: "10px" }}>
                    <div className="ply position-relative">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/GIC-nocost.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                        className="lazy"
                        alt="fggroup"
                      />
                    </div>
                    <div className="cart-t">
                      <h2 className="h4-fs">Group Instructor Workshop</h2>
                      <div className="mt-2 mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span>4.5 (1,002)</span>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <span className="d-none d-md-block mb-0">
                          Each Exercise In A Given Tabata Workout Lasts Only
                          Four Minutes, But It Is Likely To Be One Of The
                          Longest Four Minutes You Have Ever Endured. The Doctor
                          Designed A Training Where Participants Gave{" "}
                          {showMore11 ? (
                            <span className="m-0">
                              Their Maximum Effort For 20 Seconds, Then 10
                              Seconds For Rest. They Repeated This Cycle For
                              Four Minutes - In Other Words, Eight 30-Second
                              Cycles. That In A Nutshell Is A Tabata Exercise.
                              Forget The Gym Membership And Fancy Fitness
                              Accessories. Sometimes, All You Need Is 30 Minutes
                              And Some Space.
                            </span>
                          ) : (
                            <span id="dotsx">...</span>
                          )}
                        </span>
                        <p
                          onClick={toggleReadMore11}
                          id="myBtnn"
                          className="text-info pe-auto"
                        >
                          {showMore11 ? "Read less" : "Read more"}
                        </p>
                      </div>
                      <Link
                        to="/fgiit/online-group-instructor-masterclass"
                        target="_blank"
                        className="btn mt-2"
                      >
                        Self Learning
                      </Link>
                    </div>
                  </div>
                </div> */}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAllCourses;
