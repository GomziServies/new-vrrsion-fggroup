/* eslint-disable no-script-url */

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
import SingleBookPhotoSection from "../../components/fwg/SingleBookPhotoSection";
import BookForm from "../../components/book/bookForm";
import TotalBookCount from "../../components/book/TotalBookCount";
import { RTP2BookData } from "../../components/book/AllBookData";
import DeliveredBook from "../../components/book/DeliveredBook";
import { Helmet } from "react-helmet";
import FitnessBookFooter from "../../components/partials/Footer/fitnessbookfooter";

function WeightManagementProgram() {
  const canonicalUrl = window.location.href;
  const [showModal, setShowModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [currentBookLang, setCurrentBookLang] = useState("english");
  const [showEBook, setShowEBook] = useState(false);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showAddressForm, setShowAddressForm] = useState(true);
  const [activeButton, setActiveButton] = useState("paper");
  const [menuOpen, setMenuOpen] = useState(false);
  const [books, setBooks] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState(
    "631ce9de560daa3f48aea88b"
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
        <title>Achieve Your Goals with a Weight Management Program</title>
        <meta name="description" content="Take control of your health with a proven weight management program. Achieve your goals and maintain a balanced lifestyle today!" />
        <meta name="keyword" content="weight management program, weight management, weight loss, fat loss, weight loss programmes, muscle building, weight gain, exercise routine, diet charts, fitness, keto diet plan, noom diet, lose weight fast, weight loss programs, mass gainer, best weight loss program, fat burner, weight loss supplements, best way to lose weight, meal plan for weight loss, best weight loss supplements, gyms, saxenda weight loss, fastest way to lose weight, best diet to lose weight, noom weight loss, best fat burner for men, found weight loss, workout routine, best way to lose belly fat, fasting for weight loss, weight loss shots, diet plan for weight loss, healthy meals for weight loss, Weight Loss Program, rapid, transformation, program, weight loss program, weight loss, books, fast weight loss" />
        <meta property="og:title" content="Achieve Your Goals with a Weight Management Program" />
        <meta property="og:description" content="Take control of your health with a proven weight management program. Achieve your goals and maintain a balanced lifestyle today!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/book/weight-management-program" />
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
      <p className="d-none">
      weight management program, weight management, weight loss, fat loss, weight loss programmes, muscle building, weight gain, exercise routine, diet charts, fitness, keto diet plan, noom diet, lose weight fast, weight loss programs, mass gainer, best weight loss program, fat burner, weight loss supplements, best way to lose weight, meal plan for weight loss, best weight loss supplements, gyms, saxenda weight loss, fastest way to lose weight, best diet to lose weight, noom weight loss, best fat burner for men, found weight loss, workout routine, best way to lose belly fat, fasting for weight loss, weight loss shots, diet plan for weight loss, healthy meals for weight loss, Weight Loss Program, rapid, transformation, program, weight loss program, weight loss, books, fast weight loss
      </p>
      <SimpleHeader />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <SingleBookPhotoSection
                activeImageIndex={activeImageIndex}
                setActiveImageIndex={setActiveImageIndex}
                englishbook={RTP2BookData.englishbookImg}
              />
              <div className="col-lg-6 w" id="upforebook">
                <BookForm
                  booksData={RTP2BookData}
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
                  BuyButton={RTP2BookData.BuyButton}
                />
              </div>
              <div className="col-lg-12 mt-4">
                <div className="Info">
                  <h2 className="h2-fs">Book Info</h2>
                </div>
                <div className="Grocery1">
                  <p>
                    Weight management is a special program which focuses on
                    weight management of people. Weight-loss, fat loss, muscle
                    building and weight-gain are very common and but nobody
                    talks about weight management on this day. Managing a weight
                    is very important 100% of people who loss weight among them
                    90% of people gain weight in 1 year only that is a static
                    data from an American college of sports medicine. Let's
                    focus together on weight management.
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
                </div>
              </div>
              <div className="col-lg-12">
                <div className="Grocery1">
                  <p>
                    This book contain very special program for those who wants
                    to build overall fitness also it include exercise which
                    train your
                  </p>
                  <ul className="p-0 new-li">
                    <li><i className="fas fa-check-circle"></i> science of weight management</li>
                    <li><i className="fas fa-check-circle"></i> exercise routine</li>
                    <li><i className="fas fa-check-circle"></i> diet charts</li>
                    <li><i className="fas fa-check-circle"></i> palatable appetizing Recipes</li>
                  </ul>
                  <p>
                    It will show you how to perform exercise in perfect posture
                    too.
                  </p>
                  <p>One step solution for fitness</p>
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
      <ReviewSection book_id="631ce9de560daa3f48aea88b" />
      {/* <section>
                <div className="container-fluid">
                    <div className="container blog2">
                        <OwlCarousel loop autoPlay id="owl-demo2" className="owl-carousel owl-theme">
                            <div className="item mx-3">
                                <img className="lazy" src={process.env.PUBLIC_URL + '/assets/images/img/book-review-1.webp'} alt="Book Reviews" width="100%"
                                    style={{ borderRadius: '10px' }} />
                            </div>
                            <div className="item mx-3">
                                <img className="lazy" src={process.env.PUBLIC_URL + '/assets/images/img/book-review-2.webp'} alt="Book Reviews" width="100%"
                                    style={{ borderRadius: '10px' }} />
                            </div>
                            <div className="item mx-3">
                                <img className="lazy" src={process.env.PUBLIC_URL + '/assets/images/img/book-review-3.webp'} alt="Book Reviews" width="100%"
                                    style={{ borderRadius: '10px' }} />
                            </div>
                            <div className="item mx-3">
                                <img className="lazy" src={process.env.PUBLIC_URL + '/assets/images/img/book-review-4.webp'} alt="Book Reviews" width="100%"
                                    style={{ borderRadius: '10px' }} />
                            </div>
                            <div className="item mx-3">
                                <img className="lazy" src={process.env.PUBLIC_URL + '/assets/images/img/book-review-5.webp'} alt="Book Reviews" width="100%"
                                    style={{ borderRadius: '10px' }} />
                            </div>
                            <div className="item mx-3">
                                <img className="lazy" src={process.env.PUBLIC_URL + '/assets/images/img/book-review-6.webp'} alt="Book Reviews" width="100%"
                                    style={{ borderRadius: '10px' }} />
                            </div>
                            <div className="item mx-3">
                                <img className="lazy" src={process.env.PUBLIC_URL + '/assets/images/img/book-review-7.webp'} alt="Book Reviews" width="100%"
                                    style={{ borderRadius: '10px' }} />
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section> */}
      <FitnessBookFooter />
    </>
  );
}

export default WeightManagementProgram;
