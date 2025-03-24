import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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
import { BechelorNutritionBookData } from "../../components/book/AllBookData";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";

function BachelorOfNutrition() {
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
    "66e40d8e2101d8d273e9faf4"
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
        <title>The Complete Book of Food Nutrition by Dr.Gautam Jani</title>
        <meta name="description" content="Buy the complete book of Food Nutrition at the lowest price in India. The complete guide for Nutrition and Dietetics to make a diet for clinically ill patients." />
        <meta name="keyword" content="" />
        <meta property="og:title" content="The Complete Book of Food Nutrition by Dr.Gautam Jani" />
        <meta property="og:description" content="Buy the complete book of Food Nutrition at the lowest price in India. The complete guide for Nutrition and Dietetics to make a diet for clinically ill patients." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/book/bachelor-nutrition" />
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
                englishbook={BechelorNutritionBookData.englishbookImg}
                hindibook={BechelorNutritionBookData.hindibookImg}
                currentBookLang={currentBookLang}
              />
              <div className="col-lg-6 w" id="upforebook">
                <BookForm
                  booksData={BechelorNutritionBookData}
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
                  prizes={2999}
                  BuyButton={BechelorNutritionBookData.BuyButton}
                />
              </div>
              <div className="col-lg-12">
                <div className="Info">
                  <h2 className="h2-fs">Book Info</h2>
                </div>
                <div className="Grocery1">
                  <p>
                    Bachelor of Nutrition course diverse course where we are
                    teaching our nutritionist students that how to make a diet
                    for clinically ill patients for fat loss and muscle building
                    or first aid kit. in this course, we are also teaching a
                    diverse subject which is given below in syllabus segments.
                    <br />
                    <br /> We take care that meanwhile pursuing your course with
                    us you know how to consult with the clients, how to make a
                    diet for clients, customize a diet, and how to get success
                    in your field. so from basic to advance we are covering all
                    the subjects and your soft skills which help you to archive
                    great success in your career.
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
                      <ul>
                        <li>Carbohydrates</li>
                        <li>Proteins</li>
                        <li>Lipids</li>
                        <li>Water - most forgotten nutrient</li>
                        <li>Energy metabolism</li>
                        <li>Vitamin</li>
                        <li>Minerals</li>
                        <li>Liver disorders</li>
                        <li>Feblife disorders</li>
                        <li>Fundamentals of meal planning</li>
                        <li>Food groups</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li>Food exchange list</li>
                        <li>Nutrition in the life cycle</li>
                        <li>Therapeutic adaptations of normal diet</li>
                        <li>Metabolic disorders</li>
                        <li>Cardiovascular disorders</li>
                        <li>Introduction to living beings: physiology</li>
                        <li>Anatomy of our human body</li>
                        <li>Musculoskeletal disorders</li>
                        <li>Weight management & obesity</li>
                        <li>Sports nutrition</li>
                        <li>supplement</li>
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
                    "/assets/images/img/dnc-book-1.webp"
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
                    "/assets/images/img/dnc-book-2.webp"
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
                    "/assets/images/img/mix-book-1.webp"
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
                    "/assets/images/img/mix-book-2.webp"
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
                    "/assets/images/img/dnc-book-6.webp"
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
                    "/assets/images/img/dnc-book-4.webp"
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
                    "/assets/images/img/dnc-book-5.webp"
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
                    "/assets/images/img/dnc-book-3.webp"
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
      <ReviewSection book_id="61e9e457e0abd8059477f657" />
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

export default BachelorOfNutrition;
