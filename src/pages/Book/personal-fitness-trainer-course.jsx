/* eslint-disable no-script-url */

import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import {
  createPaymentBook,
  createEBookPaymentBook,
} from "../../assets/js/utils/book";
import LoginModal from "../../assets/js/popup/login";
import ReviewSection from "../../components/partials/review/review";
import EmailModal from "../../assets/js/popup/email-popup";
import "react-lazy-load-image-component/src/effects/blur.css";
import BookPhotoSection from "../../components/fwg/BookPhotoSection";
import BookForm from "../../components/book/bookForm";
import TotalBookCount from "../../components/book/TotalBookCount";
import { PersonalTrainingBookData } from "../../components/book/AllBookData";
import { Helmet } from "react-helmet";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";

function PersonalTrainingBook() {
  const canonicalUrl = window.location.href;
  const [showModal, setShowModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [currentBookLang, setCurrentBookLang] = useState("english");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showAddressForm, setShowAddressForm] = useState(true);
  const [showEBook, setShowEBook] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [books, setBooks] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState(
    "61e9e0855043184f0c080396"
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("fg_group_user_authorization")
  );

  const [showMore, setShowMore] = useState(Array(5).fill(false));

  const toggleReadMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  useEffect(() => {
    const storedAddress =
      JSON.parse(localStorage.getItem("tmp_BookPurchasePayload")) || {};

    if (storedAddress && storedAddress.address_line_1) {
      if (storedAddress.book_id) {
        handleOrder(storedAddress.book_id);
      }
    } else if (storedAddress && storedAddress.ebook_id) {
      handleEbookOrder(storedAddress.ebook_id);
    } else {
      console.log("No stored address data found.");
    }
  }, []);

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };

  const handleOrder = async (book_id) => {
    try {
      const result = await createPaymentBook(book_id);
      if (result.showLoginModal) {
        setShowModal(true);
      } else if (result.success) {
        console.log("Order success");
        localStorage.removeItem("tmp_BookPurchasePayload");
      }
    } catch (error) {
      console.error("Error during order:", error);
    }
    window.Razorpay && window.Razorpay.close && window.Razorpay.close();
    window.scrollTo(0, 0);
  };

  const handleEbookOrder = async (ebook_id) => {
    try {
      const result = await createEBookPaymentBook(ebook_id);
      if (result.showLoginModal) {
        setShowModal(true);
      } else if (result.emailModal) {
        setEmailModal(true);
      } else if (result.success) {
        console.log("Order success");
        localStorage.removeItem("tmp_BookPurchasePayload");
      }
    } catch (error) {
      console.error("Error during order:", error);
    }
    window.Razorpay && window.Razorpay.close && window.Razorpay.close();
    window.scrollTo(0, 0);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeEmailModal = () => {
    setEmailModal(false);
  };

  const purchaseEbook = () => {
    // Change the price to 199

    setShowAddressForm(false);
    setShowEBook(true);
    document.querySelector(".prices").innerText = "₹299/-";
    document.querySelector(".m-prices").innerText = "₹299/-";

    // Hide/show the buttons based on the selected language
    if (currentBookLang === "english") {
      document.getElementById("btn_ebook").style.display = "inline-block";
      document.getElementById("btn_ebook_hindi").style.display = "none";
    } else if (currentBookLang === "hindi") {
      document.getElementById("btn_ebook").style.display = "none";
      document.getElementById("btn_ebook_hindi").style.display = "inline-block";
    }
  };

  return (
    <>
      <Helmet>
        <title>Top Personal Training Books & Courses for Future Trainers</title>
        <meta
          name="description"
          content="Unlock your potential with the top personal training books and courses designed for aspiring trainers. Start your journey!"
        />
        <meta name="keyword" content="Diploma In Personal Training Course, Diploma In Personal Training Course Book, Personal Training Course Book, Diploma In Personal Training Course Study Material, Personal Training Course Study Material, Personal Training Book, study material, books, personal training course, personal training, personal trainer certification, fitness ebook, personal training near me, becoming a personal trainer, personal trainer training, personal training at home, personal trainer training course, personal fitness trainer course, trainer course, workout book, physical trainer courses, book a personal trainer, Personal Training Course Online, Personal Training Course, Diploma In Personal Training Course, training course, personal training, course, training program, online pt courses, pt course, pt training, personal trainer course near me, gym trainer course, pt training course, personal trainer certificate, personal training books, book personal trainer, best fitness books, workout book, fitness ebook, best health and fitness books" />
        <meta
          property="og:title"
          content="Top Personal Training Books & Courses for Future Trainers"
        />
        <meta
          property="og:description"
          content="Unlock your potential with the top personal training books and courses designed for aspiring trainers. Start your journey!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/book/personal-fitness-trainer-course"
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
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '284658493540181');
          fbq('track', 'PageView');`}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=284658493540181&ev=PageView&noscript=1"
          />`}
        </noscript>
      </Helmet>
      {showModal && <LoginModal onClose={closeModal} />}
      {emailModal && <EmailModal onClose={closeEmailModal} />}

      <SimpleHeader />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <BookPhotoSection
                activeImageIndex={activeImageIndex}
                setActiveImageIndex={setActiveImageIndex}
                englishbook={PersonalTrainingBookData.englishbookImg}
                hindibook={PersonalTrainingBookData.hindibookImg}
                currentBookLang={currentBookLang}
              />
              <div className="col-lg-6" id="upforebook">
                <BookForm
                  booksData={PersonalTrainingBookData}
                  isAuthenticated={isAuthenticated}
                  setShowModal={setShowModal}
                  setBooks={setBooks}
                  books={books}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  setSelectedBookId={setSelectedBookId}
                  selectedBookId={selectedBookId}
                  currentBookLang={currentBookLang}
                  handleEbookOrder={handleEbookOrder}
                  showEBook={showEBook}
                  setCurrentBookLang={setCurrentBookLang}
                  removeHindiButton={false}
                  BuyButton={PersonalTrainingBookData.BuyButton}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-2 mt-5 new-content-add">
        <div className="container">
          <div className="border-0">
            <div className="covid mb-4 mt-3 text-center">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">Syllabus </span>
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
                        and physiology, focusing on how the body's
                        {showMore[1] ? (
                          <>
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
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
                    <span
                      onClick={() => toggleReadMore(1)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[1] ? "Read less" : "Read more"}
                    </span>
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
                        weight management, emphasizing dietary planning
                        {showMore[2] ? (
                          <>
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
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
                    <span
                      onClick={() => toggleReadMore(2)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[2] ? "Read less" : "Read more"}
                    </span>
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
                        injury prevention and management through
                        {showMore[3] ? (
                          <>
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
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
                    <span
                      onClick={() => toggleReadMore(3)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[3] ? "Read less" : "Read more"}
                    </span>
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
                        module examines the impact of anabolic androgenic
                        {showMore[4] ? (
                          <>
                            steroids and alternative training practices.
                            Students learn to guide clients responsibly while
                            tailoring programs across different life stages.
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
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
                    <span
                      onClick={() => toggleReadMore(4)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[4] ? "Read less" : "Read more"}
                    </span>
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
                        in recovery, alongside injury prevention and
                        {showMore[5] ? (
                          <>
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
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>

                    <span
                      onClick={() => toggleReadMore(5)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[5] ? "Read less" : "Read more"}
                    </span>
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
                        and the implications of steroid use in fitness.
                        {showMore[6] ? (
                          <>
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
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
                    <span
                      onClick={() => toggleReadMore(6)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[6] ? "Read less" : "Read more"}
                    </span>
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
                        powerlifting, this module focuses on therapeutic diets
                        {showMore[7] ? (
                          <>
                            and techniques for key strength - building
                            exercises. Students are trained to support clients
                            in achieving both wellness and performance goals.
                            <div className="row">
                              <ul className="col-6 mt-2 p-3">
                                <li className="list-unstyled">
                                  <b>Biomechanics and Technique</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Strength Training Principles</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Programming and Training Plans</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Equipment and Gear</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Rules and Regulations</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Injury Prevention and Rehabilitation</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Coaching and Communication</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Practical Training</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Legal Aspects of Coaching</b>
                                </li>
                                <li className="list-unstyled list-style-none">
                                  <b>Powerlifting Plan</b>
                                </li>
                              </ul>
                            </div>
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
                    <span
                      onClick={() => toggleReadMore(7)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[7] ? "Read less" : "Read more"}
                    </span>
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
                          Counseling techniques include active listening,
                          empathy, and goal-setting to help individuals navigate
                          challenges. Methods like cognitive-behavioral therapy,
                          mindfulness, and solution-focused approaches empower
                          clients to develop coping strategies. Effective
                          counseling fosters self-awareness, emotional
                          resilience, and personal growth, promoting mental
                          well-being and long-term positive change.
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
                        Counseling techniques include active listening, empathy,
                        and goal-setting to help individuals navigate
                        challenges. Methods like cognitive-behavioral therapy,
                        {showMore[8] ? (
                          <>
                            mindfulness, and solution-focused approaches empower
                            clients to develop coping strategies. Effective
                            counseling fosters self-awareness, emotional
                            resilience, and personal growth, promoting mental
                            well-being and long-term positive change.
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
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
                    <span
                      onClick={() => toggleReadMore(8)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[8] ? "Read less" : "Read more"}
                    </span>
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
                          A Group Instructor Masterclass is designed to refine
                          teaching skills, elevate class management, and improve
                          participant engagement. It covers techniques for
                          motivating diverse groups, structuring effective
                          workouts, and fostering a positive environment.
                          Instructors gain the confidence and expertise to lead
                          dynamic, inclusive fitness sessions that inspire
                          results.
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
                        A Group Instructor Masterclass is designed to refine
                        teaching skills, elevate class management, and improve
                        participant engagement. It covers techniques
                        {showMore[9] ? (
                          <>
                            for motivating diverse groups, structuring effective
                            workouts, and fostering a positive environment.
                            Instructors gain the confidence and expertise to
                            lead dynamic, inclusive fitness sessions that
                            inspire results.
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
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
                    <span
                      onClick={() => toggleReadMore(9)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[9] ? "Read less" : "Read more"}
                    </span>
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
                        techniques and client management strategies. By
                        {showMore[10] ? (
                          <>
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
                          </>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                    </div>
                    <span
                      onClick={() => toggleReadMore(10)}
                      id="myBtnrb"
                      className="readMore text-primary fs-1 m-0 my-sm-2 mb-md-1"
                    >
                      {showMore[10] ? "Read less" : "Read more"}
                    </span>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <CounterComponent countNumber={7000} /> */}
      <section className="margintop">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#f9f3f3", padding: "50px 0px" }}
        >
          <TotalBookCount />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="tabata margintop">
            <div className="covid text-center">
              <h2 className="mt-2 h2-fs">
                Order your book and get it delivered to{" "}
                <span className="m-0 text-blue-color">your home</span>
              </h2>
            </div>
            <OwlCarousel
              loop
              autoPlay
              id="owl-demo1"
              className="owl-carousel owl-theme"
              responsive={{
                0: {
                  items: 1,
                  dots: false,
                  nav: true,
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
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/dpt-book-1.webp"
                  }
                  alt="Courses Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/dpt-book-2.webp"
                  }
                  alt="Courses Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/dpt-book-3.webp"
                  }
                  alt="Courses Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/dpt-book-4.webp"
                  }
                  alt="Courses Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/dpt-book-5.webp"
                  }
                  alt="Courses Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/mix-book-1.webp"
                  }
                  alt="Courses Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/mix-book-2.webp"
                  }
                  alt="Courses Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <ReviewSection book_id="61e9e0855043184f0c080396" />
      <section className="">
        <div className="container-fluid">
          <div className="container blog2">
            <OwlCarousel
              loop
              autoPlay
              id="owl-demo2"
              className="owl-carousel owl-theme"
              responsive={{
                0: {
                  items: 1,
                },
                600: {
                  items: 2,
                },
                1000: {
                  items: 4,
                },
              }}
            >
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/book-review-1.webp"
                  }
                  alt="Book Reviews"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/book-review-2.webp"
                  }
                  alt="Book Reviews"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/book-review-3.webp"
                  }
                  alt="Book Reviews"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/book-review-4.webp"
                  }
                  alt="Book Reviews"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/book-review-5.webp"
                  }
                  alt="Book Reviews"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/book-review-6.webp"
                  }
                  alt="Book Reviews"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/book-review-7.webp"
                  }
                  alt="Book Reviews"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <FlexibleFooter />
    </>
  );
}

export default PersonalTrainingBook;
