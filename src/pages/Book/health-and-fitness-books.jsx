/* eslint-disable no-script-url */

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
import { DiplomainHealthBookData } from "../../components/book/AllBookData";
import { Helmet } from "react-helmet";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";

function ManagementBook() {
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
    "637f51591897aa74293a55cb"
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
        <title>Health Books for Fitness, Nutrition & Well-Being</title>
        <meta name="description" content="Discover the best health books on fitness, nutrition, and well-being to improve your lifestyle and achieve your wellness goals!" />
        <meta name="keyword" content="Diploma in Health & fitness business management, Diploma in Health & fitness business management Book, Health & fitness business management Book, Health & fitness business management Study Material, Diploma in Health & fitness business management Study Material, study material, course material, health & fitness, health & fitness books, health and fitness, fitness books, best fitness books, good fitness, fit and health, good fitness books, health for fitness, books fitness, health fitness book, fitness fitness exercises, GYM MANAGEMENT COURSE, great fitness books, books, best fitness books, fitness ebook, ebook, online books, e book, best books, Health and Wellness Books, Fgiit Health and fitness Book, Fgiit Health and fitness Material, Online Business Management Diploma, Gym Business Course, Gym Business Management, Fitness Business Course, Fitness Management Course, Personal Trainer Business Course, Gym Owner Course, Gym Management Training, Fitness Business Management, Health Club Management Course, Sports Management Course, Fitness Club Management, Certified Gym Manager, Gym Business Plan" />
        <meta property="og:title" content="Health Books for Fitness, Nutrition & Well-Being" />
        <meta property="og:description" content="Discover the best health books on fitness, nutrition, and well-being to improve your lifestyle and achieve your wellness goals!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/alumini-fgiit" />
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
                englishbook={DiplomainHealthBookData.englishbookImg}
                hindibook={DiplomainHealthBookData.hindibookImg}
                currentBookLang={currentBookLang}
              />
              <div className="col-lg-6 w" id="upforebook">
                <BookForm
                  booksData={DiplomainHealthBookData}
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
                  BuyButton={DiplomainHealthBookData.BuyButton}
                />
              </div>
              <div className="col-lg-12">
                <div className="Info">
                  <h2 className="h2-fs">Book Info</h2>
                </div>
                <div className="Grocery1">
                  <p>
                    If businesses or individuals want greater success, then the
                    answer resides within the ability to improve motivation,
                    improve the use of energy and to improve talent. Yet, almost
                    every time, the emphasis is on talent or the hard skills
                    with little or no focus on developing one's own personality.
                    <br />
                    <br />
                    GYM MANAGEMENT COURSE that is designed to help emerging
                    leaders create a more dynamic, loyal and energized
                    personality and replicate it in their workplace. <br />
                    <br />
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
                    <div className="col-lg-6">
                      <p>Syllabus,</p>
                      <ul>
                        <li>Introduction Of Management</li>
                        <li>Management Skills</li>
                        <li>Introduction Of Marketing Management</li>
                        <li>Introduction Of Finance Management</li>
                        <li>Human Resource Management</li>
                        <li>Organization Behavior</li>
                        <li>Service Model Management</li>
                        <li>Strategic Management</li>
                        <li>Personality Development</li>
                        <li>Organization Ethics</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <p>training methodology,</p>
                      <ul>
                        <li>Lecture-cum-discussion</li>
                        <li>Powerpoint Presentation</li>
                        <li>Group Discussion Management</li>
                        <li>Case Studies</li>
                        <li>Different Management Tools</li>
                      </ul>
                    </div>
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
          style={{ backgroundColor: "#f9f3f3", padding: "50px 0px 0px" }}
        >
          <TotalBookCount />
        </div>
      </section>
      <ReviewSection book_id="637f51591897aa74293a55cb" />
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

export default ManagementBook;
