import React, { useEffect, useRef, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import {
  minusQuantity,
  plusQuantity,
  createPaymentBook,
} from "../../assets/js/utils/book";
import LoginModal from "../../assets/js/popup/login";
import ReviewSection from "../../components/partials/review/review";
import "react-lazy-load-image-component/src/effects/blur.css";
import BookForm from "../../components/book/bookForm";
import SingleBookPhotoSection from "../../components/fwg/SingleBookPhotoSection";
import TotalBookCount from "../../components/book/TotalBookCount";
import { FGIITAllCoursesBookData } from "../../components/book/AllBookData";
import { Helmet } from "react-helmet";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";


function FitnessBooks() {
  const canonicalUrl = window.location.href;
  const [showModal, setShowModal] = useState(false);
  const [currentBookLang, setCurrentBookLang] = useState("english");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showAddressForm, setShowAddressForm] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [prevIndex, setPrevIndex] = useState(activeImageIndex);
  const imageRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [books, setBooks] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState(
    "62b37790313eebcfe6f3d58a"
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

  useEffect(() => {
    if (imageRef.current) {
      setOpacity(0.5);
      const fadeOutTimer = setTimeout(() => {
        setPrevIndex(activeImageIndex);
        setOpacity(1);
      }, 300);

      return () => clearTimeout(fadeOutTimer);
    }
  }, [activeImageIndex]);

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
        <title>Explore FGIIT All Courses Books: Comprehensive Resources</title>
        <meta name="description" content="Explore FGIIT's comprehensive course books for all subjects. Enhance your learning with top-notch resources today!" />
        <meta name="keyword" content="FGIIT All Courses Books Combo, All Courses Books Combo, All Courses Books, FGIIT All Courses Books, study material, course material, books combo, fitness books, fitness courses, fitness trainer course, personal training, workout book, Health and Fitness books, Courses books, Courses Study Material, Fgiit Health and fitness Book, Fgiit Health and fitness Material, health books, study material, books, personal training books, book personal trainer, best fitness books, fitness ebook, best health and fitness books, books about exercise, book of workouts, fitness trainer books, exercise workout book, ebook, online books, e book, best books, Gym Trainer Books, Health and Wellness Books, Strength Training Books, Nutrition Books, Diet and Nutrition Books, Weight Loss Books, Diet Books, Sports Science Books, Best Diet Books, Sports Training Books, Certified Trainer Study Guide, Sports Coaching Books, Advanced Fitness Books, Exercise Science Books, Physiotherapy Books, Anatomy and Physiology Books, Sports Nutrition Books, Gym Workout Books, Bodybuilding Books, Weight Training Books, Best Personal Trainer Books, Health Coaching Books, Certification Study Material, Sports Medicine Books" />
        <meta property="og:title" content="Explore FGIIT All Courses Books: Comprehensive Resources" />
        <meta property="og:description" content="Explore FGIIT's comprehensive course books for all subjects. Enhance your learning with top-notch resources today!" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/book/fitness-books" />
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
      <SimpleHeader />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <SingleBookPhotoSection
                activeImageIndex={activeImageIndex}
                setActiveImageIndex={setActiveImageIndex}
                englishbook={FGIITAllCoursesBookData.englishbookImg}
              />
              <div className="col-lg-6 w" id="upforebook">
                <BookForm
                  booksData={FGIITAllCoursesBookData}
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
                  // showEBook={showEBook}
                  setCurrentBookLang={setCurrentBookLang}
                  removeHindiButton={true}
                  prizes={3090}
                  BuyButton={FGIITAllCoursesBookData.BuyButton}
                />
              </div>
              <div className="col-lg-12">
                <div className="Info">
                  <h2 className="h2-fs">Books Info</h2>
                </div>
                <div className="Grocery1">
                  <p>
                    FGIIT Is Here With The Perfect Blend Of All The Major
                    Courses Like Personal Training, Dietician, Group Instructor,
                    Performance-Enhancing Drugs, And Supplementation. Yes, The
                    Nutri Trainer Course Is Here To Save Your Precious Time And
                    Give You A Wide Scope Of Getting An International Job, Help
                    People To Avoid Injuries, And Come Out Of Medical Illness,
                    And Ofcourse The Knowledge Of Proper Diet And Exercise Plan
                    Will Be Provided By Us.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <ul>
                        <li>Basics Of Dietetics</li>
                        <li>Therapeutic Nutrition</li>
                        <li>Sports Nutrition</li>
                        <li>Weight Management</li>
                        <li>Weight Training</li>
                        <li>Advance Techniques</li>
                        <li>Basic Of Nutrition</li>
                        <li>Anatomical Terminology & Kinesiology</li>
                        <li>Consultation Training</li>
                        <li>Internship</li>
                        <li>Different Exercise Patterns</li>
                        <li>supplement (Natural & Ergogenic Aids)</li>
                        <li>Planning & Executive</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li>Sport Specific Training</li>
                        <li>TRX Band Training</li>
                        <li>Tabata Workout</li>
                        <li>Functional Workout</li>
                        <li>Anabolic Androgenic Steroids</li>
                        <li>Practical diet marking</li>
                        <li>Behavior And Sports Phycology</li>
                        <li>TRX Workout</li>
                        <li>science of fat loss</li>
                        <li>exercise routine</li>
                        <li>diet chart</li>
                        <li>palatable appetizing recipes</li>
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
      <ReviewSection book_id="62b37790313eebcfe6f3d58a" />
      <section className="">
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
      <FlexibleFooter />
    </>
  );
}

export default FitnessBooks;
