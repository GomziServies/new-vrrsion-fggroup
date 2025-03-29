import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import {
  minusQuantity,
  plusQuantity,
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
import { PowerliftingBookData } from "../../components/book/AllBookData";
import { Helmet } from "react-helmet";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";

function BestBooksForPowerlifting() {
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
    "65969524d2a0ae9153ba5b40"
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
    document.querySelector(".prices").innerText = "₹199/-";
    document.querySelector(".m-prices").innerText = "₹199/-";

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
        <title>Powerlifting - A Complete Guide to Theory and Practice</title>
        <meta name="description" content="Master powerlifting with our complete guide covering essential theory and practical techniques for all levels!" />
        <meta name="keyword" content="Powerlifting - A Comprehensive Guide To Theory And Practice, Powerlifting - A Comprehensive Guide To Theory And Practice Book, Powerlifting - A Comprehensive Book To Theory And Practice, Powerlifting - A Comprehensive Study Material, Powerlifting - A Comprehensive Book, study material, course material, powerlifting book, comprehensive book, powerlifting, powerlifting coaching, powerlifting training for beginners, best books for powerlifting, books about powerlifting, power lifting exercises, health books, study material, fitness books, books, best fitness books, workout book, fitness ebook, best health and fitness books, books about exercise, book of workouts, fitness trainer books, exercise workout book, ebook, online books, e book, best books, Health and Wellness Books, Strength Training Books, Sports Science Books, Sports Training Books, Sports Coaching Books, Advanced Fitness Books, Exercise Science Books, Gym Workout Books, Bodybuilding Books, Certification Study Material" />
        <meta property="og:title" content="Powerlifting - A Complete Guide to Theory and Practice" />
        <meta property="og:description" content="Master powerlifting with our complete guide covering essential theory and practical techniques for all levels!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/book/best-books-for-powerlifting" />
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
                englishbook={PowerliftingBookData.englishbookImg}
                hindibook={PowerliftingBookData.hindibookImg}
                currentBookLang={currentBookLang}
              />
              <div className="col-lg-6 w" id="upforebook">
                <BookForm
                  booksData={PowerliftingBookData}
                  isAuthenticated={isAuthenticated}
                  setShowModal={setShowModal}
                  setBooks={setBooks}
                  books={books}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  setSelectedBookId={setSelectedBookId}
                  selectedBookId={selectedBookId}
                  showAddressForm={showAddressForm}
                  currentBookLang={currentBookLang}
                  minusQuantity={minusQuantity}
                  plusQuantity={plusQuantity}
                  handleOrder={handleOrder}
                  handleEbookOrder={handleEbookOrder}
                  showEBook={showEBook}
                  setCurrentBookLang={setCurrentBookLang}
                  removeHindiButton={false}
                  prizes={599}
                  BuyButton={PowerliftingBookData.BuyButton}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-5 mt-5 new-content-add">
        <div className="container">
          <div className="">
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
                          Module 1: Introduction to Injury Rehabilitation
                        </h2>
                        <p className="text-muted">
                          This module provides an overview of injury
                          rehabilitation, its significance in fitness and
                          sports, and the role of a rehabilitation specialist.
                          Participants will learn about the stages of recovery,
                          from acute care to functional rehabilitation,
                          emphasizing a client-centered approach.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Overview of injury rehabilitation</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Principles of rehabilitation</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Goals and outcomes of rehabilitation</b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/diet-manage.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
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
                        Module 1: Introduction to Injury Rehabilitation
                      </h2>
                      <p className="text-muted">
                        This module provides an overview of injury
                        rehabilitation, its significance in fitness and
                        {showMore[1] ? (
                          <>
                            sports, and the role of a rehabilitation specialist.
                            Participants will learn about the stages of
                            recovery, from acute care to functional
                            rehabilitation, emphasizing a client - centered
                            approach.
                            <div className="row">
                              <ul className="mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>Overview of injury rehabilitation</b>
                                </li>

                                <li className="list-unstyled text-dark">
                                  <b>Principles of rehabilitation</b>
                                </li>

                                <li className="list-unstyled text-dark">
                                  <b>Goals and outcomes of rehabilitation</b>
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
                          src="/assets/images/course-img/sir-new-one.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 2: Assessment and Diagnosis
                        </h2>
                        <p className="text-muted">
                          Participants will gain skills in conducting
                          comprehensive assessments, including injury history,
                          functional movement screening, and identifying
                          muscular imbalances.This module focuses on creating
                          accurate diagnoses to guide effective rehabilitation
                          plans.
                          <div className="row">
                            <ul className="mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Assessment techniques and tools</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>Diagnostic procedures and tests</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>Injury classification and staging</b>
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
                        src="/assets/images/course-img/sir-new-one.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 2: Assessment and Diagnosis
                      </h2>
                      <p className="text-muted">
                        Participants will gain skills in conducting
                        comprehensive assessments, including injury history,
                        {showMore[2] ? (
                          <>
                            functional movement screening, and identifying
                            muscular imbalances.This module focuses on creating
                            accurate diagnoses to guide effective rehabilitation
                            plans.
                            <div className="row">
                              <ul className="mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>Assessment techniques and tools</b>
                                </li>

                                <li className="list-unstyled text-dark">
                                  <b>Diagnostic procedures and tests</b>
                                </li>

                                <li className="list-unstyled text-dark">
                                  <b>Injury classification and staging</b>
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
                          Module 3: Manual Therapy Techniques
                        </h2>
                        <p className="text-muted">
                          This module introduces hands - on methods such as soft
                          tissue mobilization, stretching, and joint
                          manipulation.Students will learn when and how to apply
                          these techniques to enhance mobility, reduce pain, and
                          accelerate recovery.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>
                                  Cupping therapy principles and application
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Manual therapy techniques for soft tissue
                                  mobilization
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Joint mobilization and manipulation techniques
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/img/offline2.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/img/offline2.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 3: Manual Therapy Techniques
                      </h2>
                      <p className="text-muted">
                        This module introduces hands-on methods such as soft
                        tissue mobilization, stretching, and joint
                        {showMore[3] ? (
                          <>
                            manipulation.Students will learn when and how to
                            apply these techniques to enhance mobility, reduce
                            pain, and accelerate recovery.
                            <div className="row">
                              <ul className="mt-2 pl-3">
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Cupping therapy principles and application
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Manual therapy techniques for soft tissue
                                    mobilization
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Joint mobilization and manipulation
                                    techniques
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
                          src="/assets/images/course-img/anabolic-new.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 4: Principles of Exercise Prescription
                        </h2>
                        <p className="text-muted">
                          Participants will learn how to design exercise
                          programs tailored to the rehabilitation phase,
                          focusing on progressive loading, functional movements,
                          and restoring strength and stability.Special attention
                          is given to avoiding re - injury through proper
                          exercise progression.
                          <div className="row">
                            <ul className="col-6 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>
                                  Exercise prescription principles and
                                  guidelines
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Therapeutic exercise techniques and
                                  progressions
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Exercise program design and implementation
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
                        src="/assets/images/course-img/anabolic-new.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 4: Principles of Exercise Prescription
                      </h2>
                      <p className="text-muted">
                        Participants will learn how to design exercise programs
                        tailored to the rehabilitation phase,
                        {showMore[4] ? (
                          <>
                            focusing on progressive loading, functional
                            movements, and restoring strength and stability.
                            Special attention is given to avoiding re - injury
                            through proper exercise progression.
                            <div className="row">
                              <ul className="col-6 mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Exercise prescription principles and
                                    guidelines
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Therapeutic exercise techniques and
                                    progressions
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Exercise program design and implementation
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
                          Module 5: Therapeutic Modalities
                        </h2>
                        <p className="text-muted">
                          This module explores modalities such as ultrasound,
                          electrical stimulation, and cryotherapy.Students will
                          learn how to integrate these tools into rehabilitation
                          programs to optimize recovery and manage pain
                          effectively.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>
                                  Electrotherapy modalities (e.g. TENS, NMES)
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Thermal modalities (e.g. heat, cold)</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Mechanical modalities (e.g. ultrasound,
                                  traction)
                                </b>
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
                        Module 5: Therapeutic Modalities
                      </h2>
                      <p className="text-muted">
                        This module explores modalities such as ultrasound,
                        electrical stimulation, and cryotherapy. Students will
                        {showMore[5] ? (
                          <>
                            learn how to integrate these tools into
                            rehabilitation programs to optimize recovery and
                            manage pain effectively.
                            <div className="row">
                              <ul className="mt-2 pl-3">
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Electrotherapy modalities (e.g. TENS, NMES)
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Thermal modalities (e.g. heat, cold)</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Mechanical modalities (e.g. ultrasound,
                                    traction)
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
                          src="/assets/images/course-img/online-2.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 6: Pain Management
                        </h2>
                        <p className="text-muted">
                          Participants will study pain physiology and evidence -
                          based methods for managing acute and chronic
                          pain.Topics include medication - free approaches,
                          mindfulness, and cognitive - behavioral techniques to
                          support clients' mental and physical well-being.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Pain physiology and mechanisms</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>Pain assessment and measurement tools</b>
                              </li>

                              <li className="list-unstyled text-dark">
                                <b>
                                  Pain management techniques and interventions
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
                        src="/assets/images/course-img/online-2.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 6: Pain Management
                      </h2>
                      <p className="text-muted">
                        Participants will study pain physiology and
                        evidence-based methods for managing acute and chronic
                        {showMore[6] ? (
                          <>
                            pain.Topics include medication - free approaches,
                            mindfulness, and cognitive - behavioral techniques
                            to support clients' mental and physical well-being.
                            <div className="row">
                              <ul className="col-12 mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>Pain physiology and mechanisms</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Pain assessment and measurement tools</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Pain management techniques and interventions
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
                          Module 7: Injury Specific Rehabilitation
                        </h2>
                        <p className="text-muted">
                          This module delves into protocols for rehabilitating
                          common injuries, including ligament sprains, muscle
                          strains, tendonitis, and joint dislocations.
                          Participants will learn to customize plans based on
                          the type and severity of the injury.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>
                                  Rehabilitation protocols for common injuries
                                  (e.g. ACL, meniscus, rotator cuff)
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Injury specific exercise programs and
                                  progressions
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Return to play and sport specific
                                  rehabilitation
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/course-img/course-photo-new.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/course-img/course-photo-new.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 7: Injury Specific Rehabilitation
                      </h2>
                      <p className="text-muted">
                        This module delves into protocols for rehabilitating
                        common injuries, including ligament sprains, muscle
                        {showMore[7] ? (
                          <>
                            strains, tendonitis, and joint dislocations.
                            Participants will learn to customize plans based on
                            the type and severity of the injury.
                            <div className="row">
                              <ul className="mt-2 pl-3">
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Rehabilitation protocols for common injuries
                                    (e.g. ACL, meniscus, rotator cuff)
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Injury specific exercise programs and
                                    progressions
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Return to play and sport specific
                                    rehabilitation
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
                          src="/assets/images/course-img/online-3.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 8: Special Populations in Rehabilitation
                        </h2>
                        <p className="text-muted">
                          Rehabilitation needs vary by population.This module
                          covers considerations for seniors, children, athletes,
                          and individuals with chronic conditions, emphasizing
                          modifications and precautions for each group.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>
                                  Rehabilitation considerations for special
                                  populations (e.g. pediatric, geriatric,
                                  athletes)
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Modified exercise programs and interventions
                                  for special populations
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
                        src="/assets/images/course-img/online-3.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 8: Special Populations in Rehabilitation
                      </h2>
                      <p className="text-muted">
                        Rehabilitation needs vary by population. This module
                        covers considerations for seniors, children, athletes,
                        {showMore[8] ? (
                          <>
                            and individuals with chronic conditions, emphasizing
                            modifications and precautions for each group.
                            <div className="row">
                              <ul className="col-12 mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Rehabilitation considerations for special
                                    populations (e.g. pediatric, geriatric,
                                    athletes)
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Modified exercise programs and interventions
                                    for special populations
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
                          Module 9: Advanced Rehabilitation Techniques
                        </h2>
                        <p className="text-muted">
                          Students will explore advanced methods, including
                          proprioceptive training, prometric exercises, and
                          sport - specific drills.This module equips
                          participants to support high - performance athletes
                          and clients with complex rehabilitation needs.
                          <div className="row">
                            <ul className="mt-2 pl-3">
                              <li className="list-unstyled text-dark">
                                <b>CPR and first aid</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Dry needling and IASTM(instrument - assisted
                                  soft tissue mobilization)
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>Rigid tapping and mobility techniques</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Electrotherapy and exercise therapy
                                  applications
                                </b>
                              </li>
                            </ul>
                          </div>
                        </p>
                      </div>
                      <div className="col-md-6 blockquote-img-container mt-2">
                        <img
                          src="/assets/images/img/co2.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                    </div>
                  </blockquote>
                  <blockquote className="blockquote d-md-none d-block mb-4">
                    <div className="blockquote-img-container order-1 mt-2">
                      <img
                        src="/assets/images/img/co2.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 9: Advanced Rehabilitation Techniques
                      </h2>
                      <p className="text-muted">
                        Students will explore advanced methods, including
                        proprioceptive training, prometric exercises, and
                        {showMore[9] ? (
                          <>
                            sport - specific drills.This module equips
                            participants to support high - performance athletes
                            and clients with complex rehabilitation needs.
                            <div className="row">
                              <ul className="mt-2 pl-3">
                                <li className="list-unstyled text-dark">
                                  <b>CPR and first aid</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Dry needling and IASTM (instrument-assisted
                                    soft tissue mobilization)
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>Rigid tapping and mobility techniques</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Electrotherapy and exercise therapy
                                    applications
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
                          src="/assets/images/img/co1.webp"
                          alt="Fitness Industry"
                          className="blackquote-img"
                        />
                      </div>
                      <div className="col-md-6">
                        <h2 className="h5-fs text-primary font-weight-bold mt-3">
                          Module 10: Case Studies and Practical Application
                        </h2>
                        <p className="text-muted">
                          Participants will apply their knowledge through real -
                          life scenarios and role - play exercises.This module
                          emphasizes critical thinking, problem - solving, and
                          hands - on application of rehabilitation techniques to
                          prepare for real - world practice.
                          <div className="row">
                            <ul className="col-12 mt-2 p-3">
                              <li className="list-unstyled text-dark">
                                <b>Case studies and group discussions</b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Practical application and hands-on training
                                </b>
                              </li>
                              <li className="list-unstyled text-dark">
                                <b>
                                  Rehabilitation program design and
                                  implementation
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
                        src="/assets/images/img/co1.webp"
                        alt="Fitness Industry"
                        className="blackquote-img"
                      />
                    </div>
                    <div>
                      <h2 className="h5-fs text-primary font-weight-bold mt-3">
                        Module 10: Case Studies and Practical Application
                      </h2>
                      <p className="text-muted">
                        Participants will apply their knowledge through
                        real-life scenarios and role-play exercises. This
                        {showMore[10] ? (
                          <>
                            module emphasizes critical thinking, problem -
                            solving, and hands - on application of
                            rehabilitation techniques to prepare for real -
                            world practice.
                            <div className="row">
                              <ul className="col-12 mt-2 p-3">
                                <li className="list-unstyled text-dark">
                                  <b>Case studies and group discussions</b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Practical application and hands-on training
                                  </b>
                                </li>
                                <li className="list-unstyled text-dark">
                                  <b>
                                    Rehabilitation program design and
                                    implementation
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
      <section className="margintop">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#f9f3f3", padding: "50px 0px" }}
        >
          <TotalBookCount />
        </div>
      </section>
      <ReviewSection book_id="65969524d2a0ae9153ba5b40" />
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

export default BestBooksForPowerlifting;
