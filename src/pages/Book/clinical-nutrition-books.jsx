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
import EmailModal from "../../assets/js/popup/email-popup";
import ReviewSection from "../../components/partials/review/review";
import "react-lazy-load-image-component/src/effects/blur.css";
import BookPhotoSection from "../../components/fwg/BookPhotoSection";
import BookForm from "../../components/book/bookForm";
import TotalBookCount from "../../components/book/TotalBookCount";
import { AdvanceClinicalNutritionBookData } from "../../components/book/AllBookData";
import { Helmet } from "react-helmet";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";

function ClinicalNutritionBooks() {
  const canonicalUrl = window.location.href;
  const [showModal, setShowModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [currentBookLang, setCurrentBookLang] = useState("english");
  const [activeButton, setActiveButton] = useState("paper");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showAddressForm, setShowAddressForm] = useState(true);
  const [showEBook, setShowEBook] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [books, setBooks] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState(
    "627eaf826c033c16f2d5bc14"
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
    document.querySelector(".prices").innerText = "₹1050/-";
    document.querySelector(".m-prices").innerText = "₹1050/-";

    // Hide/show the buttons based on the selected language
    if (currentBookLang === "english") {
      document.getElementById("btn_ebook").style.display = "inline-block";
      document.getElementById("btn_ebook_hindi").style.display = "none";
    } else if (currentBookLang === "hindi") {
      document.getElementById("btn_ebook").style.display = "none";
      document.getElementById("btn_ebook_hindi").style.display = "inline-block";
    }

    // Update the activeButton state
    setActiveButton("ebook");
  };

  return (
    <>
      <Helmet>
        <title>Advance Clinical Nutrition: Study Material & Best Nutrition Books</title>
        <meta name="description" content="Elevate your nutrition expertise with our advanced clinical nutrition study materials and top-rated nutrition books. Learn more!" />
        <meta name="keyword" content="Advance Clinical Nutrition,Advance Clinical Nutrition Book,Advance Clinical Nutrition Study Material,Clinical Nutrition Study material,study material,course material,nutrition book,diet books,best nutrition books,best diet book,clinical nutrition books,good nutrition books,great nutrition books,best book keto diet,healthy diet book,health books,study material,fitness books,books,best fitness books,fitness ebook,ebook,online books,e book,best books,Health and Wellness Books,Strength Training Books,Nutrition Books,Diet and Nutrition Books,Weight Loss Books,Diet Books,Best Diet Books,Advanced Fitness Books,Sports Nutrition Books,Health Coaching Books,Weight Loss Nutrition Course,Online Advanced Dietetics Course,Certified Nutrition Specialist Online,Clinical Nutrition Degree Online,Best Online Clinical Nutrition Program,Nutrition and Wellness Coaching Certification,Integrative and Functional Nutrition Course,Sports and Clinical Nutrition Course,Certified Clinical Dietitian Online" />
        <meta property="og:title" content="Advance Clinical Nutrition: Study Material & Best Nutrition Books" />
        <meta property="og:description" content="Elevate your nutrition expertise with our advanced clinical nutrition study materials and top-rated nutrition books. Learn more!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/book/clinical-nutrition-books" />
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
                englishbook={AdvanceClinicalNutritionBookData.englishbookImg}
                hindibook={AdvanceClinicalNutritionBookData.hindibookImg}
                currentBookLang={currentBookLang}
              />
              <div className="col-lg-6 w" id="upforebook">
                <BookForm
                  booksData={AdvanceClinicalNutritionBookData}
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
                  prizes={399}
                  BuyButton={AdvanceClinicalNutritionBookData.BuyButton}
                />
              </div>
              <div className="col-lg-12">
                <div className="Info">
                  <h2 className="h2-fs">Book Info</h2>
                </div>
                <div className="Grocery1">
                  <p>
                    Wellness Consultant Is A Course Where You Learn How To Fight
                    Diseases Like Diabetes, Thyroid, PCOS, And Cancer. These Are
                    The Diseases Is Can Not Be Controlled By Medicine Only, You
                    Need To Have The Support Of Nutrition, Exercises, Recovery,
                    And Rehab Parts Also. There Are Many modern Research That
                    Suggests That Intermittent Fasting, Low Carb Diet, Keto
                    Diet, And Many Caloric Deficit Diets And Exercise Approaches
                    Are More Helpful Than Medicine Also, So This Course Will
                    Help You To Achieve And Gain Knowledge About Those Kinds Of
                    Therapies Which Are Alternative Medicine Therapy.
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
                    <br />
                    <br /> Syllabus :-
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <ul>
                        <li>Human physiology and function of cell</li>
                        <li>Definition of health</li>
                        <li>What is life style diseases?</li>
                        <li>Food macro and micro elements</li>
                        <li>Food digestion system</li>
                        <li>Weight management</li>
                        <li>Blood sugar control</li>
                        <li>Important hormones of the body</li>
                        <li>Worst food elements</li>
                        <li>Essential food element</li>
                        <li>Anti-aging process</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li>Bone health</li>
                        <li>Stress control</li>
                        <li>Important blood test which ensure sound health</li>
                        <li>High uric acid and gout</li>
                        <li>Auto immune diseases</li>
                        <li>Perfect plan to achieve best health</li>
                        <li>Exercise plan</li>
                        <li>
                          How to protect heart diseases, control blood pressure,
                          and high cholesterol
                        </li>
                        <li>
                          Role of health and wellness consultant and how to
                          prepare health plan
                        </li>
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
          style={{ backgroundColor: "#f9f3f3", padding: "50px 0px" }}
        >
          <TotalBookCount />
        </div>
      </section>
      <ReviewSection book_id="627eaf826c033c16f2d5bc14" />
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

export default ClinicalNutritionBooks;
