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
import { RapidTransformationBookData } from "../../components/book/AllBookData";
import DeliveredBook from "../../components/book/DeliveredBook";
import { Helmet } from "react-helmet";
import FitnessBookFooter from "../../components/partials/Footer/fitnessbookfooter";

function HealthAndWellnessProgramBook() {
  const [emailModal, setEmailModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showAddressForm, setShowAddressForm] = useState(true);
  const [activeButton, setActiveButton] = useState("paper");
  const [showEBook, setShowEBook] = useState(false);
  const [currentBookLang, setCurrentBookLang] = useState("english");
  const canonicalUrl = window.location.href;
  const [menuOpen, setMenuOpen] = useState(false);
  const [books, setBooks] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState(
    "643406ad207a1775b981b743"
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
        <title>Use Corporate Wellness to Improve Workplace Culture</title>
        <meta name="description" content="Boost workplace culture with corporate wellness programs. Enhance employee health, morale, and productivity. Start today!" />
        <meta name="keyword" content="transformation program, corporate wellness program, wellness program, corporate wellness, healthy lifestyle, health and wellness, wellness, employee wellness programs, health coaching, healthy life, health retreat, good health, workplace wellness programs, employee wellness, wellness coaching, company wellness programs, wellness clinic, health coach programs, best employee wellness programs, corporate fitness programs, health and wellbeing, health and wellness coaching, mental wellness, mental health wellness retreat, health & wellness, health and wellness companies, corporate fitness, health and wellness coaching programs, hormone health and wellness, mental health and wellbeing, mental wellbeing, Corporate Wellbeing Programs, Corporate Wellness Retreat, Workplace Health and Wellness, Best Corporate Wellness Programs, Online Wellness Coaching, Employee Health and Wellness, Worksite Wellness Programs, Corporate Stress Management Programs, Office Wellness Programs, Holistic Wellness Programs, Corporate Health Programs, Executive Wellness Programs, Employee Assistance Programs, Corporate Nutrition Programs, Workplace Wellness Trends, Health Promotion Programs, Corporate Employee Wellness, Best Workplace Wellness Programs" />
        <meta property="og:title" content="Use Corporate Wellness to Improve Workplace Culture" />
        <meta property="og:description" content="Boost workplace culture with corporate wellness programs. Enhance employee health, morale, and productivity. Start today!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/book/corporate-wellness" />
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
      <SimpleHeader />
      {showModal && <LoginModal onClose={closeModal} />}
      {emailModal && <EmailModal onClose={closeEmailModal} />}
      <p className="d-none">
      transformation program, corporate wellness program, wellness program, corporate wellness, healthy lifestyle, health and wellness, wellness, employee wellness programs, health coaching, healthy life, health retreat, good health, workplace wellness programs, employee wellness, wellness coaching, company wellness programs, wellness clinic, health coach programs, best employee wellness programs, corporate fitness programs, health and wellbeing, health and wellness coaching, mental wellness, mental health wellness retreat, health & wellness, health and wellness companies, corporate fitness, health and wellness coaching programs, hormone health and wellness, mental health and wellbeing, mental wellbeing, Corporate Wellbeing Programs, Corporate Wellness Retreat, Workplace Health and Wellness, Best Corporate Wellness Programs, Online Wellness Coaching, Employee Health and Wellness, Worksite Wellness Programs, Corporate Stress Management Programs, Office Wellness Programs, Holistic Wellness Programs, Corporate Health Programs, Executive Wellness Programs, Employee Assistance Programs, Corporate Nutrition Programs, Workplace Wellness Trends, Health Promotion Programs, Corporate Employee Wellness, Best Workplace Wellness Programs
      </p>

      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <SingleBookPhotoSection
                activeImageIndex={activeImageIndex}
                setActiveImageIndex={setActiveImageIndex}
                englishbook={RapidTransformationBookData.englishbookImg}
              />
              <div className="col-lg-6 w" id="upforebook">
                <BookForm
                  booksData={RapidTransformationBookData}
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
                  BuyButton={RapidTransformationBookData.BuyButton}
                />
              </div>
              <div className="col-lg-12 mt-4">
                <div className="Info">
                  <h2 className="h2-fs">Book Info</h2>
                </div>
                <p>
                  RTP 4 is an informative and practical book written by
                  experienced dietitians and personal trainers, specifically
                  tailored for busy corporate employees who are looking to
                  maintain a healthy lifestyle in high-pressure work
                  environments. The book offers a comprehensive corporate
                  wellness program that includes custom-designed diet and
                  exercise plans, with the goal of helping individuals achieve
                  optimal health and well-being while balancing the demands of
                  their work.
                </p>
                <p>
                  The program outlined in RTP 4 is designed to be easily
                  integrated into the daily routines of corporate employees,
                  with a focus on making healthy choices accessible and
                  sustainable. With its evidence-based approach and practical
                  tips, RTP 4 is an invaluable resource for anyone looking to
                  prioritize their health and wellness, while succeeding in
                  their professional lives.
                  <b>
                    Our book is also available in e-book format if you want to
                    buy it.
                    <a
                      href="#"
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
                        <i className="fas fa-check-circle"></i> Major Problems
                        Faced by Corporate Employees
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Solution
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Role of proper
                        nutrition in leading a healthy life
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> How to start
                        living a healthy lifestyle
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Overview of
                        Corporate Wellness Programs
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Benefits of
                        participating in a Corporate Wellness Program
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Exercises For
                        Corporate Wellness
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
      <ReviewSection book_id="643406ad207a1775b981b743" />
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

export default HealthAndWellnessProgramBook;
