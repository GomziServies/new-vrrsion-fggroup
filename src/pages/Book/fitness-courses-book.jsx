import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import LoginModal from "../../assets/js/popup/login";
import {
  minusQuantity,
  plusQuantity,
  createPaymentBook,
} from "../../assets/js/utils/book";
import ReviewSection from "../../components/partials/review/review";
import "react-lazy-load-image-component/src/effects/blur.css";
import BookForm from "../../components/book/bookForm";
import SingleBookPhotoSection from "../../components/fwg/SingleBookPhotoSection";
import TotalBookCount from "../../components/book/TotalBookCount";
import { FitnessCoursesAllBookData } from "../../components/book/AllBookData";
import DeliveredBook from "../../components/book/DeliveredBook";
import { Helmet } from "react-helmet";
import FitnessBookFooter from "../../components/partials/Footer/fitnessbookfooter";

function FitnessCoursesBook() {
  const canonicalUrl = window.location.href;
  const [showModal, setShowModal] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showAddressForm, setShowAddressForm] = useState(true);
  const [showEBook, setShowEBook] = useState(false);
  const [currentBookLang, setCurrentBookLang] = useState("english");
  const [menuOpen, setMenuOpen] = useState(false);
  const [books, setBooks] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState(
    "64340c3f207a1775b981b7ff"
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("fg_group_user_authorization")
  );

  useEffect(() => {
    const storedAddress =
      JSON.parse(localStorage.getItem("tmp_BookPurchasePayload")) || {};

    if (storedAddress && storedAddress.address_line_1) {
      if (storedAddress.book_id) {
        handleOrder(storedAddress.book_id);
      }
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

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Helmet>
        <title>Top Fitness Courses Books for Better Health & Fitness</title>
        <meta name="description" content="Explore top fitness courses books to enhance your health and fitness knowledge. Start learning today and improve your workouts!" />
        <meta name="keyword" content="weight loss program, weight management program, clinical diet, health and wellness program, best weight loss program, meal plan for weight loss, diet plan for weight loss, weight loss plan, diet programs, employee wellness programs, weight loss clinics, corporate wellness, best diet plan for weight loss, health coaching, diet meal plans for weight loss, weight loss diet plan for men, top weight loss programs, healthy weight loss, workplace wellness, weight loss exercise plan, weight management clinic, healthy meal plans for weight loss, weight loss workout plan, Nutrition Coaching, Weight Loss Supplements, Personalized Diet Plan, Fat Loss Program, Best Meal Plan for Weight Loss, Online Weight Loss Program, Personal Training for Weight Loss, Natural Weight Loss Program, Healthy Eating Plan, Online Fitness Coaching, Health and Nutrition Coaching, Virtual Weight Loss Program, Body Transformation Program, High Protein Diet for Weight Loss, Online Wellness Coaching, Best Online Weight Loss Program, Affordable Weight Loss Program, Medical Weight Loss Program, Nutrition Plan for Weight Loss, Sustainable Weight Loss Plan, Weight Management Training, Lifestyle Coaching for Weight Loss, Effective Weight Loss Strategies, Online Nutrition Programs, Long-Term Weight Management" />
        <meta property="og:title" content="Top Fitness Courses Books for Better Health & Fitness" />
        <meta property="og:description" content="Explore top fitness courses books to enhance your health and fitness knowledge. Start learning today and improve your workouts!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/book/fitness-courses-book" />
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
      <p className="d-none">
      weight loss program, weight management program, clinical diet, health and wellness program, best weight loss program, meal plan for weight loss, diet plan for weight loss, weight loss plan, diet programs, employee wellness programs, weight loss clinics, corporate wellness, best diet plan for weight loss, health coaching, diet meal plans for weight loss, weight loss diet plan for men, top weight loss programs, healthy weight loss, workplace wellness, weight loss exercise plan, weight management clinic, healthy meal plans for weight loss, weight loss workout plan, Nutrition Coaching, Weight Loss Supplements, Personalized Diet Plan, Fat Loss Program, Best Meal Plan for Weight Loss, Online Weight Loss Program, Personal Training for Weight Loss, Natural Weight Loss Program, Healthy Eating Plan, Online Fitness Coaching, Health and Nutrition Coaching, Virtual Weight Loss Program, Body Transformation Program, High Protein Diet for Weight Loss, Online Wellness Coaching, Best Online Weight Loss Program, Affordable Weight Loss Program, Medical Weight Loss Program, Nutrition Plan for Weight Loss, Sustainable Weight Loss Plan, Weight Management Training, Lifestyle Coaching for Weight Loss, Effective Weight Loss Strategies, Online Nutrition Programs, Long-Term Weight Management
      </p>
      <SimpleHeader />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <SingleBookPhotoSection
                activeImageIndex={activeImageIndex}
                setActiveImageIndex={setActiveImageIndex}
                englishbook={FitnessCoursesAllBookData.englishbookImg}
              />
              <div className="col-lg-6 w" id="upforebook">
                <BookForm
                  booksData={FitnessCoursesAllBookData}
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
                  // handleEbookOrder={handleEbookOrder}
                  showEBook={showEBook}
                  setCurrentBookLang={setCurrentBookLang}
                  removeHindiButton={true}
                  prizes={2999}
                  BuyButton={FitnessCoursesAllBookData.BuyButton}
                />
              </div>
              <div className="col-lg-12 mt-4">
                <div className="Info">
                  <h2 className="h2-fs">Book Info</h2>
                </div>
                <p>
                  RTP 5 is an excellent guidebook written by experienced
                  dietitians and personal trainers to help individuals prepare
                  for their bodybuilding journey. The book provides a
                  comprehensive overview of the preparation coaching process,
                  offering invaluable insights into the dietary and exercise
                  regimes that are vital for achieving success.
                </p>
                <p>
                  The authors of RTP 5 have shared their expert knowledge and
                  advice on various diets, exercises, and injectables that
                  should be used in the right manner to optimize bodybuilding
                  performance. The book emphasizes the importance of following a
                  balanced and nutritious diet, tailored to individual needs,
                  and offers a range of effective training techniques to build
                  strength, endurance, and muscle mass.
                </p>
                <p>
                  Whether you are an experienced bodybuilder or just starting
                  out, RTP 5 provides a wealth of practical information and
                  guidance to help you achieve your goals. With its clear and
                  concise writing style and easy-to-follow instructions, this
                  book is an essential resource for anyone looking to enhance
                  their bodybuilding journey.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="p-0 new-li">
                      <li>
                        <i className="fas fa-check-circle"></i> Introduction
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> What is Prep
                        Coaching
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Importance of
                        Prep Coaching in Bodybuilding
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Science Behind
                        Muscle Building
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Difference
                        Between Steroid and Natural Bodybuilding
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Types Of
                        Bodybuilding Competition
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="p-0 new-li">
                      <li>
                        <i className="fas fa-check-circle"></i> Importance Of
                        Nutrition For Muscle-building Diet
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Importance Of
                        Anabolic Androgenic Steroids
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Types of Reports
                        important in prep coaching
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Side Effects
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Diet During Prep
                        Coaching
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Exercises During
                        Prep Coaching
                      </li>
                    </ul>
                  </div>
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
      <DeliveredBook />
      {/* <section className="margintop">
        <div className="container-fluid">
          <div className="container tabata">
            <div className="covid text-center">
              <h2 className="mt-2 h2-fs">
              Order your book and get it delivered to{" "}
                <span className="m-0 text-blue-color">
                your home
                </span>
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
                    "/assets/images/img/rtp-2.0-img-2.webp"
                  }
                  alt="Rapid Transformation Program Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/rtp-2.0-img.webp"
                  }
                  alt="Rapid Transformation Program Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/rtp-book-4.webp"
                  }
                  alt="Rapid Transformation Program Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/rtp-book-1.webp"
                  }
                  alt="Rapid Transformation Program Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/rtp-book-2.webp"
                  }
                  alt="Rapid Transformation Program Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/rtp-book-3.webp"
                  }
                  alt="Rapid Transformation Program Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/rtp-book-5.webp"
                  }
                  alt="Rapid Transformation Program Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section> */}
      <ReviewSection book_id="64340c3f207a1775b981b7ff" />
      <section>
        <div className="container-fluid">
          <div className="container blog2">
            <OwlCarousel
              loop
              autoPlay
              dots={false}
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
      <FitnessBookFooter />
    </>
  );
}

export default FitnessCoursesBook;
