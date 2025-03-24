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
import { AnabolicAndrogenicSteroidsBookData } from "../../components/book/AllBookData";
import { Helmet } from "react-helmet";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";

function SteriodsBook() {
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
    "61e9f4c00c90317bf0003960"
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
        <title>Top Bodybuilding Books: Anabolic Androgenic Steroids Guide</title>
        <meta name="description" content="Explore top bodybuilding books featuring a comprehensive guide to anabolic androgenic steroids for serious athletes!" />
        <meta name="keyword" content="" />
        <meta property="og:title" content="Top Bodybuilding Books: Anabolic Androgenic Steroids Guide" />
        <meta property="og:description" content="Explore top bodybuilding books featuring a comprehensive guide to anabolic androgenic steroids for serious athletes!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/book/steroids-book" />
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
                englishbook={AnabolicAndrogenicSteroidsBookData.englishbookImg}
                hindibook={AnabolicAndrogenicSteroidsBookData.hindibookImg}
                currentBookLang={currentBookLang}
              />
              <div className="col-lg-6 w" id="upforebook">
                <BookForm
                  booksData={AnabolicAndrogenicSteroidsBookData}
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
                  BuyButton={AnabolicAndrogenicSteroidsBookData.BuyButton}
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
                        Androgen Receptor Modulators (SARMs) and
                        {showMore[1] ? (
                          <>
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
                          src="/assets/images/course-img/nutrition.webp"
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
                        src="/assets/images/course-img/nutrition.webp"
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
                        module delves into common side effects like hair loss,
                        {showMore[2] ? (
                          <>
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
                        Cycle Therapy (PCT) and the importance of blood tests
                        {showMore[3] ? (
                          <>
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
                        tailored to various fitness goals, including
                        {showMore[4] ? (
                          <>
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
                        transformation, this module teaches students to
                        {showMore[5] ? (
                          <>
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
                        the critical final stages of competition preparation,
                        {showMore[6] ? (
                          <>
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
      <section>
        <div className="container">
          <div className="tabata margintop">
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
            >
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/aas-book-1.webp"
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
                    "/assets/images/img/aas-book-7.webp"
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
                    "/assets/images/img/aas-book-8.webp"
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
                    "/assets/images/img/aas-book-2.webp"
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
                    "/assets/images/img/aas-book-3.webp"
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
                    "/assets/images/img/aas-book-4.webp"
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
                    "/assets/images/img/aas-book-5.webp"
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
                    "/assets/images/img/aas-book-6.webp"
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
      <ReviewSection book_id="61e9f4c00c90317bf0003960" />
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

export default SteriodsBook;
