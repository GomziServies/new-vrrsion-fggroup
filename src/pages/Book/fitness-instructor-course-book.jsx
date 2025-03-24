import React, { useEffect, useState } from "react";
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
import { GroupInstructorMasterclassBookData } from "../../components/book/AllBookData";
import { Helmet } from "react-helmet";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";

function FitnessInstructorCourseBook() {
  const [showModal, setShowModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const canonicalUrl = window.location.href;
  const [currentBookLang, setCurrentBookLang] = useState("english");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showAddressForm, setShowAddressForm] = useState(true);
  const [showEBook, setShowEBook] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [books, setBooks] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState(
    "63e105ac7a3e9fcd8e427eb9"
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
        <title>Group Instructor Masterclass: Essential Study Material & Books</title>
        <meta name="description" content="Master group instruction with our essential study materials and books in the Group Instructor Masterclass. Enroll now!" />
        <meta name="keyword" content="" />
        <meta property="og:title" content="Group Instructor Masterclass: Essential Study Material & Books" />
        <meta property="og:description" content="Master group instruction with our essential study materials and books in the Group Instructor Masterclass. Enroll now!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/book/fitness-instructor-course-book" />
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
                englishbook={GroupInstructorMasterclassBookData.englishbookImg}
                hindibook={GroupInstructorMasterclassBookData.hindibookImg}
                currentBookLang={currentBookLang}
              />
              <div className="col-lg-6 w" id="upforebook">
                <BookForm
                  booksData={GroupInstructorMasterclassBookData}
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
                  prizes={399}
                  BuyButton={GroupInstructorMasterclassBookData.BuyButton}
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
                        training (HIIT) style of Tabata workouts, focusing on
                        {showMore[1] ? (
                          <>
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
                        this module emphasizes exercises that mimic real-life
                        {showMore[2] ? (
                          <>
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
                        training, including its history, techniques, and
                        {showMore[3] ? (
                          <>
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
      <ReviewSection book_id="63e105ac7a3e9fcd8e427eb9" />
      <FlexibleFooter />
    </>
  );
}

export default FitnessInstructorCourseBook;
