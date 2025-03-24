import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import SingleBookPhotoSection from "../../components/fwg/SingleBookPhotoSection";
import BookForm from "../../components/book/bookForm";
import TotalBookCount from "../../components/book/TotalBookCount";
import { RapidTransformation2BookData } from "../../components/book/AllBookData";
import DeliveredBook from "../../components/book/DeliveredBook";
import FitnessBookFooter from "../../components/partials/Footer/fitnessbookfooter";

function ClinicalDietToRecoverYourHealthPart2() {
  const [showModal, setShowModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [showEBook, setShowEBook] = useState(false);
  const [currentBookLang, setCurrentBookLang] = useState("english");
  const canonicalUrl = window.location.href;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showAddressForm, setShowAddressForm] = useState(true);
  const [activeButton, setActiveButton] = useState("paper");
  const [menuOpen, setMenuOpen] = useState(false);
  const [books, setBooks] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState(
    "64356128207a1775b981c1af"
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
        <title>The Ultimate Guide to Managing Clinical Illnesses through Diet and Exercise</title>
        <meta name="description" content="the comprehensive guide authored by experienced dietitians and personal trainers, offering effective solutions to manage clinical illnesses through proper diets and exercise regimens. With reliable advice and extensive research, RTP 3 is an indispensable tool for anyone seeking a holistic approach to improve their health and well-being. Get your copy today and take the first step towards a healthier lifestyle." />
        <meta name="keyword" content="" />
        <meta property="og:title" content="The Ultimate Guide to Managing Clinical Illnesses through Diet and Exercise" />
        <meta property="og:description" content="the comprehensive guide authored by experienced dietitians and personal trainers, offering effective solutions to manage clinical illnesses through proper diets and exercise regimens. With reliable advice and extensive research, RTP 3 is an indispensable tool for anyone seeking a holistic approach to improve their health and well-being. Get your copy today and take the first step towards a healthier lifestyle." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/book/clinical-diet-to-recover-your-health-part-2" />
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
                englishbook={RapidTransformation2BookData.englishbookImg}
              />
              <div className="col-lg-6 w" id="upforebook">
                <BookForm
                  booksData={RapidTransformation2BookData}
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
                  BuyButton={RapidTransformation2BookData.BuyButton}
                />
              </div>
              <div className="col-lg-12 mt-4">
                <div className="Info">
                  <h2 className="h2-fs">Book Info</h2>
                </div>
                <p>
                  RTP 3 is an all-encompassing book authored by experienced
                  dietitians and personal trainers. The book provides a
                  comprehensive guide on Clinical Illness Diseases and offers
                  effective solutions to overcome them through proper diets
                  and exercise regimens.
                </p>
                <p>
                  With its wealth of information, RTP 3 is a valuable resource
                  for individuals seeking to lead a healthy lifestyle and
                  manage their health conditions. The book is an outcome of
                  extensive research and years of experience in the field,
                  ensuring that the advice and guidance offered is reliable
                  and effective
                </p>
                <p>
                  Overall, RTP 3 is an indispensable tool for anyone looking
                  to improve their health and well-being, and it is highly
                  recommended for individuals seeking a holistic approach to
                  managing their health conditions.
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
                        <i className="fas fa-check-circle"></i> PCOD
                        (Polycystic Ovary Disease) and PCOS
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Hypertension
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Jaundice
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Gall Bladders
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Typhoid
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Gout
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Premenstrual
                        Syndrome
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Acute Diarrhea
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Hernia
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="p-0 new-li">
                      <li>
                        <i className="fas fa-check-circle"></i>SGPT & SGOT
                        Tests
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Knee-pain
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Back-pain
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Shoulder-pain
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Kidney Stone
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Acidity
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Erectile
                        Dysfunction
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Exercises To
                        Overcome Your Clinical Illness
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  If want to buy first part then{" "}
                  <Link to="/book/clinical-diet-to-recover-your-health-part-1">
                    Click Here
                  </Link>
                </p>
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
      <ReviewSection book_id="64356128207a1775b981c1af" />
      <section>
        <div className="container-fluid">
          <div className="container blog2">
            <OwlCarousel
              loop
              autoPlay
              id="owl-demo2"
              className="owl-carousel owl-theme"
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

export default ClinicalDietToRecoverYourHealthPart2;
