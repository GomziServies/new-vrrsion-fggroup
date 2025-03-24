import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import LoginModal from "../../assets/js/popup/login";
import {
  minusQuantity,
  plusQuantity,
  createPaymentBook,
  createEBookPaymentBook,
} from "../../assets/js/utils/book";
import ReviewSection from "../../components/partials/review/review";
import EmailModal from "../../assets/js/popup/email-popup";
import "react-lazy-load-image-component/src/effects/blur.css";
import SingleBookPhotoSection from "../../components/fwg/SingleBookPhotoSection";
import BookForm from "../../components/book/bookForm";
import TotalBookCount from "../../components/book/TotalBookCount";
import { RapidTransformationPrepBookData } from "../../components/book/AllBookData";
import DeliveredBook from "../../components/book/DeliveredBook";
import { Helmet } from "react-helmet";
import FitnessBookFooter from "../../components/partials/Footer/fitnessbookfooter";

function PrepCoachingProgramBook() {
  const canonicalUrl = window.location.href;
  const [showModal, setShowModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [showEBook, setShowEBook] = useState(false);
  const [currentBookLang, setCurrentBookLang] = useState("english");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showAddressForm, setShowAddressForm] = useState(true);
  const [activeButton, setActiveButton] = useState("paper");
  const [menuOpen, setMenuOpen] = useState(false);
  const [books, setBooks] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState(
    "643406e0207a1775b981b749"
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
    setShowAddressForm(false);
    setActiveButton("ebook");

    setShowEBook(true);
    document.querySelector(".prices").innerText = "₹299/-";

    if (activeButton === "paper") {
      document.getElementById("btn_ebook").style.display = "inline-block";
    } else if (activeButton === "ebook") {
      document.getElementById("btn_ebook").style.display = "none";
    }
  };

  return (
    <>
      <Helmet>
        <title>RTP 5: The Ultimate Guidebook for Bodybuilding Preparation and Coaching</title>
        <meta name="description" content="Discover RTP 5, the comprehensive guidebook written by experienced dietitians and personal trainers to help individuals prepare for their bodybuilding journey. Get invaluable insights into dietary and exercise regimes to optimize bodybuilding performance, with expert advice on various diets, exercises, and injectables. Whether you're an experienced bodybuilder or just starting out, RTP 5 provides practical information and guidance to help you achieve your goals. Enhance your bodybuilding journey today with RTP 5." />
        <meta name="keyword" content="" />
        <meta property="og:title" content="RTP 5: The Ultimate Guidebook for Bodybuilding Preparation and Coaching" />
        <meta property="og:description" content="Discover RTP 5, the comprehensive guidebook written by experienced dietitians and personal trainers to help individuals prepare for their bodybuilding journey. Get invaluable insights into dietary and exercise regimes to optimize bodybuilding performance, with expert advice on various diets, exercises, and injectables. Whether you're an experienced bodybuilder or just starting out, RTP 5 provides practical information and guidance to help you achieve your goals. Enhance your bodybuilding journey today with RTP 5." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/book/prep-coaching-program-book" />
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
              <SingleBookPhotoSection
                activeImageIndex={activeImageIndex}
                setActiveImageIndex={setActiveImageIndex}
                englishbook={RapidTransformationPrepBookData.englishbookImg}
              />
              <div className="col-lg-6 w" id="upforebook">
                <BookForm
                  booksData={RapidTransformationPrepBookData}
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
                  removeHindiButton={true}
                  prizes={599}
                  BuyButton={RapidTransformationPrepBookData.BuyButton}
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
                  performance. The book emphasizes the importance of following
                  a balanced and nutritious diet, tailored to individual
                  needs, and offers a range of effective training techniques
                  to build strength, endurance, and muscle mass.
                </p>
                <p>
                  Whether you are an experienced bodybuilder or just starting
                  out, RTP 5 provides a wealth of practical information and
                  guidance to help you achieve your goals. With its clear and
                  concise writing style and easy-to-follow instructions, this
                  book is an essential resource for anyone looking to enhance
                  their bodybuilding journey.
                  <b>
                    Our book is also available in e-book format if you want to
                    buy it.
                    <a
                      href="#0"
                      className="e-book link"
                      onClick={purchaseEbook}
                    >
                      {" "}
                      Click Here
                    </a>
                  </b>
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
                        <i className="fas fa-check-circle"></i> Types of
                        Reports important in prep coaching
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Side Effects
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Diet During
                        Prep Coaching
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Exercises
                        During Prep Coaching
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
      <ReviewSection book_id="643406e0207a1775b981b749" />
      <section>
        <div className="container-fluid">
          <div className="container blog2">
            <OwlCarousel
              loop
              autoPlay
              id="owl-demo2"
              dots={false}
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

export default PrepCoachingProgramBook;
