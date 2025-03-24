import React, { useEffect, useState } from "react";
import FgiitHeader from "../../components/partials/Header/fgiitheader";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TotalBookCount from "../../components/book/TotalBookCount";
import { Helmet } from "react-helmet";
import FlexibleFooter from "../../components/partials/Footer/flexiblefooter";

function HealthBooks() {
  const [showMore, setShowMore] = useState(false);
  const canonicalUrl = window.location.href;

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    // Import jQuery
    const $ = window.$;

    // Replace default navigation icons with Font Awesome icon
    $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fas fa-arrow-right"></i>');
  }, []);
  return (
    <>
      <Helmet>
        <title>Explore FGIIT Health & Fitness Books and Course Materials</title>
        <meta
          name="description"
          content="Discover FGIIT's comprehensive health and fitness books and course materials to enhance your knowledge and skills!"
        />
        <meta
          name="keyword"
          content="dietitian and nutritionists, dietitian and nutritionist course, courses for fitness
                 trainer, certification for fitness trainer"
        />
        <meta
          property="og:title"
          content="Explore FGIIT Health & Fitness Books and Course Materials"
        />
        <meta
          property="og:description"
          content="Discover FGIIT's comprehensive health and fitness books and course materials to enhance your knowledge and skills!"
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/book/health-books"
        />
        <link rel="canonical" href={{ canonicalUrl }} />
        <meta
          name="google-site-verification"
          content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"
        ></script>
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
      <FgiitHeader />
      <section style={{ marginTop: "70px" }}>
        <div className="container-fluid p-0">
          <img
            effect="blur"
            className="d-none d-md-block"
            src={process.env.PUBLIC_URL + "/assets/images/img/banner20.webp"}
            width="100%"
            alt="fggroup"
          />
          <img
            effect="blur"
            className="d-block d-md-none w-100"
            src={
              process.env.PUBLIC_URL + "/assets/images/img/banner-mobile20.webp"
            }
            alt="fggroup"
          />
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="describe text-center mb-4">
              <h1 className="text-center">
                Courses
                <span className="m-0 text-blue-color"> books</span>
              </h1>
            </div>
            <div className="thm-bg-clr dector"></div>
          </div>
        </div>
      </section>
      <div className="d-none d-md-block">
        <section style={{ marginTop: "40px" }}>
          <div className="container-fluid border-bottom pb-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Link
                    to="/book/personal-fitness-trainer-course"
                    className="book"
                  >
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/cpt-1.webp"
                      }
                      alt="fggroup"
                    />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/book/personal-fitness-trainer-course">
                      <h2 className="h2-fs">
                        Diploma In Personal Training Book
                      </h2>
                    </Link>
                    <p>
                      Dr. Gautam Jani, Dt. Foram Desai, Dt. Nitin Patel | 1
                      december 2019
                    </p>
                  </div>
                  <div className="mt-2 mb-2 meal">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                  </div>
                  <div className="price">
                    <p className="my-3">₹3,000/-</p>
                  </div>
                  <div className="tabata mt-3">
                    <p className="mt-0">
                      Book Also available in Hindi Language
                    </p>
                    <p className="mt-2">free book delivery with in 7 days</p>
                  </div>
                  <div className="meal mt-4 pt-3">
                    <Link to="/book/personal-fitness-trainer-course">
                      <img
                        className="lazy mr-2"
                        alt="fggroup"
                        src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                      />{" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid border-bottom py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Link
                    to="/book/nutrition-and-dietetics-course"
                    className="book"
                  >
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/book/Dnc.webp"
                      }
                      alt="fggroup"
                    />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/book/nutrition-and-dietetics-course">
                      <h2 className="h2-fs">Diploma In Nutrition Book</h2>
                    </Link>
                    <p>
                      Dr. Gautam Jani, Dt. Foram Desai, Dt. Nitin Patel | 1
                      december 2019
                    </p>
                  </div>
                  <div className="mt-2 mb-2 meal">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                  </div>
                  <div className="price">
                    <p className="my-3">₹3,000/-</p>
                  </div>
                  <div className="tabata mt-3">
                    <p className="mt-0">
                      Book Also available in Hindi Language
                    </p>
                    <p className="mt-2">free book delivery with in 7 days</p>
                  </div>
                  <div className="meal mt-4 pt-3">
                    <Link to="/book/nutrition-and-dietetics-course">
                      <img
                        className="lazy mr-2"
                        alt="fggroup"
                        src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                      />{" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid border-bottom py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Link to="/book/steroids-book" className="book">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/aas-1.webp"
                      }
                      alt="fggroup"
                    />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/book/steroids-book">
                      <h2 className="h2-fs">Anabolic Androgenic Steroids</h2>
                    </Link>
                    <p>Dr. Gautam Jani, Dt. Foram Desai | 1 december 2019</p>
                  </div>
                  <div className="mt-2 mb-2 meal">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                  </div>
                  <div className="price">
                    <p className="my-3">₹2,100/-</p>
                  </div>
                  <div className="tabata mt-3">
                    <p className="mt-0">
                      Book Also available in Hindi Language
                    </p>
                    <p className="mt-2">free book delivery with in 7 days</p>
                  </div>
                  <div className="meal mt-4 pt-3">
                    <Link to="/book/steroids-book">
                      <img
                        className="lazy mr-2"
                        alt="fggroup"
                        src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                      />{" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid border-bottom py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Link
                    to="/book/fitness-instructor-course-book"
                    className="book"
                  >
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/book/group-front.webp"
                      }
                      alt="fggroup"
                    />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/book/fitness-instructor-course-book">
                      <h2 className="h2-fs">Group Instructor Masterclass</h2>
                    </Link>
                    <p>
                      Dr. Gautam Jani, Dt. Foram Desai, DT. Chirag Pandey | 01
                      Jan 2023
                    </p>
                  </div>
                  <div className="mt-2 mb-2 meal">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                  </div>
                  <div className="price">
                    <p className="my-3">₹2,100/-</p>
                  </div>
                  <div className="tabata mt-3">
                    <p className="mt-0">
                      Book Also available in Hindi Language
                    </p>
                    <p className="mt-2">free book delivery with in 7 days</p>
                  </div>
                  <div className="meal mt-5">
                    <Link to="/book/fitness-instructor-course-book">
                      <img
                        className="lazy mr-2"
                        alt="fggroup"
                        src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                      />{" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid border-bottom py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Link to="/book/injury-rehab" className="book">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/injury-rehab-2.webp"
                      }
                      alt="fggroup"
                    />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/book/injury-rehab">
                      <h2 className="h2-fs">Injury Rehab</h2>
                    </Link>
                    <p>
                      Dr. Gautam Jani, Dt. Foram Desai, Dr. Asha Jiyani | 1
                      december 2019
                    </p>
                  </div>
                  <div className="mt-2 mb-2 meal">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                  </div>
                  <div className="price">
                    <p className="my-3">₹2,100/-</p>
                  </div>
                  <div className="tabata mt-3">
                    <p className="mt-0">
                      {" "}
                      Book Also available in Hindi Language
                    </p>
                    <p className="mt-2">free book delivery with in 7 days</p>
                  </div>
                  <div className="meal mt-4 pt-3">
                    <Link to="/book/injury-rehab">
                      <img
                        className="lazy mr-2"
                        alt="fggroup"
                        src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                      />{" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid border-bottom py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Link to="/book/clinical-nutrition-books" className="book">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/health-wellness-1.webp"
                      }
                      alt="fggroup"
                    />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/book/clinical-nutrition-books">
                      <h2 className="h2-fs">Advance Clinical Nutritionist</h2>
                    </Link>
                    <p>
                      Dr. Gautam Jani, Dt. Foram Desai, Dr. Ishaver Patel | 1
                      december 2021
                    </p>
                  </div>
                  <div className="mt-2 mb-2 meal">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                  </div>
                  <div className="price">
                    <p className="my-3">₹2,100/-</p>
                  </div>
                  <div className="tabata mt-3">
                    <p className="mt-0">
                      Book Also available in Hindi Language
                    </p>
                    <p className="mt-2">free book delivery with in 7 days</p>
                  </div>
                  <div className="meal mt-4 pt-3">
                    <Link to="/book/clinical-nutrition-books">
                      <img
                        className="lazy mr-2"
                        alt="fggroup"
                        src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                      />{" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid border-bottom py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Link to="/book/health-and-fitness-books" className="book">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/management-3.webp"
                      }
                      alt="fggroup"
                    />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/book/health-and-fitness-books">
                      <h2 className="h2-fs">
                        Health & fitness business management book
                      </h2>
                    </Link>
                    <p>
                      Dr. Gautam Jani, Dt. Foram Desai, Dr. Chintan Shinde | 1
                      May 2021
                    </p>
                  </div>
                  <div className="mt-2 mb-2 meal">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                  </div>
                  <div className="price">
                    <p className="my-3">₹2,100/-</p>
                  </div>
                  <div className="tabata mt-3">
                    <p className="mt-0">
                      Book Also available in Hindi Language
                    </p>
                    <p className="mt-2">free book delivery with in 7 days</p>
                  </div>
                  <div className="meal mt-4 pt-3">
                    <Link to="/book/health-and-fitness-books">
                      <img
                        className="lazy mr-2"
                        alt="fggroup"
                        src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                      />{" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid border-bottom py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Link to="/book/best-books-for-powerlifting" className="book">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/book/Power-lifting-front.webp"
                      }
                      alt="fggroup"
                    />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/book/best-books-for-powerlifting">
                      <h2 className="h2-fs">
                        Powerlifting - a Comprehensive guide to theory and
                        practice
                      </h2>
                    </Link>
                    <p>Dt.Gautam Jani, Dt.Chirag Pandey | 1 Jan 2024</p>
                  </div>
                  <div className="mt-2 mb-3 meal">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                  </div>
                  <div className="price">
                    <p className="my-3">₹2,100/-</p>
                  </div>
                  <div className="tabata mt-3">
                    <p className="mt-0">
                      Book Also available in Hindi Language
                    </p>
                    <p className="mt-2">free book delivery with in 7 days</p>
                  </div>
                  <div className="meal mt-4 pt-3">
                    <Link to="/book/best-books-for-powerlifting">
                      <img
                        className="lazy mr-2"
                        alt="fggroup"
                        src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                      />{" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Link to="/book/fitness-books" className="book">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/book/FGIIT-boook-combo.webp"
                      }
                      alt="fggroup"
                    />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/book/fitness-books">
                      <h2 className="h2-fs">FGIIT All Courses Books Combo</h2>
                    </Link>
                    <p>
                      Dr. Gautam Jani, Dt. Foram Desai, Dt. Nitin Patel, Dr.
                      Asha Jiyani, Dr. Ishaver Patel | 1 december 2019
                    </p>
                  </div>
                  <div className="mt-2 mb-2 meal">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                  </div>
                  <div className="price">
                    <p className="my-3">₹15,600/-</p>
                    {/* <span>
                      ₹<del>3,393/-</del>
                    </span> */}
                    {/* <span className="p1">10% OFF</span> */}
                  </div>
                  <div className="tabata mt-3">
                    {/* <p className="mt-0">
                      Book Also available in Hindi Language
                    </p> */}
                    <p className="mt-0">free book delivery with in 7 days</p>
                  </div>
                  <div className="meal mt-4 pt-3">
                    <Link to="/book/fitness-books">
                      <img
                        className="lazy mr-2"
                        alt="fggroup"
                        src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                      />{" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Fitness Book */}
        <section style={{ marginTop: "40px" }}>
          <div className="container-fluid border-bottom pb-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Link to="/book/weight-loss-programme" className="book">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/rtp-1.webp"
                      }
                      alt="fggroup"
                    />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/book/weight-loss-programme">
                      <h2 className="h2-fs">
                        Rapid Transformation Program - Weight Loss Programme
                      </h2>
                    </Link>
                    <p>Dr.Gautam Jani, Dt. Foram Desai</p>
                  </div>
                  <div className="mt-2 mb-3 meal">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                  </div>
                  <div className="price">
                    <p className="my-3">₹599/-</p>
                    {/* <!-- <span><i className="fas fa-rupee-sign"></i>3099</span>
                                            <span className="p1">15% OFF</span> --> */}
                  </div>
                  <div className="tabata">
                    <p>free book delivery with in 7 days</p>
                  </div>
                  <div className="meal mt-5">
                    <Link to="/book/weight-loss-programme">
                      <img
                        src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                        className="mr-2 lazy"
                        alt="fggroup"
                      />{" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid border-bottom py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Link to="/book/weight-management-program" className="book">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/rtp-2.0-book.webp"
                      }
                      alt="fggroup"
                    />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/book/weight-management-program">
                      <h2 className="h2-fs">
                        RTP 2.0 - Weight Management Program
                      </h2>
                    </Link>
                    <p>
                      Dr.Gautam Jani, Dt. Foram Desai, Dt. Nitin Patel | 1
                      december 2019
                    </p>
                  </div>
                  <div className="mt-2 mb-3 meal">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                  </div>
                  <div className="price">
                    <p className="my-3">₹599/-</p>
                    {/* <!-- <span><i className="fas fa-rupee-sign"></i>3099</span>
                                            <span className="p1">15% OFF</span> --> */}
                  </div>
                  <div className="tabata">
                    <p>free book delivery with in 7 days</p>
                  </div>
                  <div className="meal mt-5">
                    <Link to="/book/Weight-Management-program">
                      <img
                        src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                        className="mr-2"
                        alt="fggroup"
                      />{" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid border-bottom py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Link
                    to="/book/clinical-diet-to-recover-your-health-part-1"
                    className="book"
                  >
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/book/rtp-3.0-p-1.webp"
                      }
                      alt="fggroup"
                    />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/book/clinical-diet-to-recover-your-health-part-1">
                      <h2 className="h2-fs">
                        RTP 3.0 - Clinical Diets Part : 1
                      </h2>
                    </Link>
                    <p>Dr.Gautam Jani, Dt. Foram Desai</p>
                  </div>
                  <div className="mt-2 mb-3 meal">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                  </div>
                  <div className="price">
                    <p className="my-3">₹599/-</p>
                    {/* <!-- <span><i className="fas fa-rupee-sign"></i>3099</span>
                                            <span className="p1">15% OFF</span> --> */}
                  </div>
                  <div className="tabata">
                    <p>free book delivery with in 7 days</p>
                  </div>
                  <div className="meal mt-5">
                    <Link to="/book/clinical-diet-to-recover-your-health-part-1">
                      <img
                        src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                        className="mr-2"
                        alt="fggroup"
                      />{" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid border-bottom py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Link
                    to="/book/clinical-diet-to-recover-your-health-part-2"
                    className="book"
                  >
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/book/rtp-3.0-p-2.webp"
                      }
                      alt="fggroup"
                    />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/book/clinical-diet-to-recover-your-health-part-2">
                      <h2 className="h2-fs">
                        RTP 3.0 - Clinical Diets Part : 2
                      </h2>
                    </Link>
                    <p>Dr.Gautam Jani, Dt. Foram Desai</p>
                  </div>
                  <div className="mt-2 mb-3 meal">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                  </div>
                  <div className="price">
                    <p className="my-3">₹599/-</p>
                  </div>
                  <div className="tabata">
                    <p>free book delivery with in 7 days</p>
                  </div>
                  <div className="meal mt-5">
                    <Link to="/book/clinical-diet-to-recover-your-health-part-2">
                      <img
                        src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                        className="mr-2"
                        alt="fggroup"
                      />{" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid border-bottom py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Link
                    to="/book/health-and-wellness-program-book"
                    className="book"
                  >
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/book/rtp-4.0-book.webp"
                      }
                      alt="fggroup"
                    />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/book/health-and-wellness-program-book">
                      <h2 className="h2-fs">
                        RTP 4.0 - Health And Wellness Program
                      </h2>
                    </Link>
                    <p>Dr.Gautam Jani, Dt. Foram Desai</p>
                  </div>
                  <div className="mt-2 mb-3 meal">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                  </div>
                  <div className="price">
                    <p className="my-3">₹599/-</p>
                    {/* <!-- <span><i className="fas fa-rupee-sign"></i>3099</span>
                                            <span className="p1">15% OFF</span> --> */}
                  </div>
                  <div className="tabata">
                    <p>free book delivery with in 7 days</p>
                  </div>
                  <div className="meal mt-5">
                    <Link to="/book/health-and-wellness-program-book">
                      <img
                        src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                        className="mr-2"
                        alt="fggroup"
                      />{" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid border-bottom py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Link to="/book/prep-coaching-program-book" className="book">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/book/rtp-5.0-book.webp"
                      }
                      alt="fggroup"
                    />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/book/prep-coaching-program-book">
                      <h2 className="h2-fs">RTP 5.0 - Prep Coaching Program</h2>
                    </Link>
                    <p>Dr.Gautam Jani, Dt. Foram Desai</p>
                  </div>
                  <div className="mt-2 mb-3 meal">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                  </div>
                  <div className="price">
                    <p className="my-3">₹599/-</p>
                    {/* <!-- <span><i className="fas fa-rupee-sign"></i>3099</span>
                                            <span className="p1">15% OFF</span> --> */}
                  </div>
                  <div className="tabata">
                    <p>free book delivery with in 7 days</p>
                  </div>
                  <div className="meal mt-5">
                    <Link to="/book/prep-coaching-program-book">
                      <img
                        src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                        className="mr-2"
                        alt="fggroup"
                      />{" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Link to="/book/fitness-courses-book" className="book">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/book/FWG-all-book.webp"
                      }
                      alt="fggroup"
                    />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/book/fitness-courses-book">
                      <h2 className="h2-fs">FWG All Books Combo</h2>
                    </Link>
                    <p>Dr.Gautam Jani, Dt. Foram Desai</p>
                  </div>
                  <div className="mt-2 mb-3 meal">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                  </div>
                  <div className="price">
                    <p className="my-3">₹2,999/-</p>
                    <span>
                      ₹<del>3,599/-</del>
                    </span>
                    <span className="p1">20% OFF</span>
                  </div>
                  <div className="tabata">
                    <p>free book delivery with in 7 days</p>
                  </div>
                  <div className="meal mt-5">
                    <Link to="/book/fitness-courses-book">
                      <img
                        src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                        className="mr-2"
                        alt="fggroup"
                      />{" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div className="container-fluid py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <Link to="/book/nutrition-and-dietetics-course" className="book">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/b-nutrition.jpeg"
                      }
                      alt="fggroup"
                    />
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="tabata">
                    <Link to="/book/bachelor-nutrition">
                      <h2 className="h2-fs">Bachelor of Nutrition</h2>
                    </Link>
                    <p>
                      Dr. Gautam Jani, Dt. Foram Desai, Dt. Nitin Patel | 1
                      december 2019
                    </p>
                  </div>
                  <div className="mt-2 mb-2 meal">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                  </div>
                  <div className="price">
                    <p className="my-3">₹3899/-</p>
                  </div>
                  <div className="tabata mt-3">
                    <p className="mt-0">
                      {" "}
                      Book available English and Hindi Language
                    </p>
                    <p className="mt-2">free book delivery with in 7 days</p>
                  </div>
                  <div className="meal mt-4 pt-3">
                    <Link to="/book/bachelor-nutrition">
                      <img
                        className="lazy mr-2"
                        alt="fggroup"
                        src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                      />{" "}
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      <div className="d-md-none d-block">
        <div className="container">
          <div className="item mx-md-3 mb-5 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <LazyLoadImage
                  effect="blur"
                  src={process.env.PUBLIC_URL + "/assets/images/img/cpt-1.webp"}
                  width="100%"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  alt="fggroup"
                />
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fas fa-users"></i> Dr. Gautam Jani, Dt. Foram
                    Desai, Dt. Nitin Patel | 1 december 2019
                  </li>
                </ul>
                <h2 className="h2-fs ">Diploma In Personal Training Book</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.5)</span>
                </div>
                <p>Book Also available in Hindi Language</p>
                <p>free book delivery with in 7 days</p>
                <div className="price pb-3">
                  <p className="mt-2 fs-30">₹3,000/-</p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                    <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/personal-fitness-trainer-course"
                    className="px-3 py-2"
                    style={{ backgroundColor: "#1f1f1f" }}
                  >
                    <img
                      className="lazy mr-2"
                      alt="fggroup"
                      src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                    />{" "}
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-5 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <LazyLoadImage
                  effect="blur"
                  src={process.env.PUBLIC_URL + "/assets/images/book/Dnc.webp"}
                  width="100%"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  alt="fggroup"
                />
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fas fa-users"></i> Dr. Gautam Jani, Dt. Foram
                    Desai, Dt. Nitin Patel | 1 december 2019
                  </li>
                </ul>
                <h2 className="h2-fs ">Diploma In Nutrition Book</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.5)</span>
                </div>
                <p>Book Also available in Hindi Language</p>
                <p>free book delivery with in 7 days</p>
                <div className="price pb-3">
                  <p className="mt-2 fs-30">₹3,000/-</p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                    <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/nutrition-and-dietetics-course"
                    className="px-3 py-2"
                    style={{ backgroundColor: "#1f1f1f" }}
                  >
                    <img
                      className="lazy mr-2"
                      alt="fggroup"
                      src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                    />{" "}
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-5 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <LazyLoadImage
                  effect="blur"
                  src={process.env.PUBLIC_URL + "/assets/images/img/aas-1.webp"}
                  width="100%"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  alt="fggroup"
                />
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fas fa-users"></i> Dr. Gautam Jani, Dt. Foram
                    Desai, Dt. Nitin Patel | 1 december 2019
                  </li>
                </ul>
                <h2 className="h2-fs ">Anabolic Androgenic Steroids</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.5)</span>
                </div>
                <p>Book Also available in Hindi Language</p>
                <p>free book delivery with in 7 days</p>
                <div className="price pb-3">
                  <p className="mt-2 fs-30">₹2,100/-</p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                    <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/steroids-book"
                    className="px-3 py-2"
                    style={{ backgroundColor: "#1f1f1f" }}
                  >
                    <img
                      className="lazy mr-2"
                      alt="fggroup"
                      src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                    />{" "}
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-5 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/book/group-front.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  alt="fggroup"
                />
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fas fa-users"></i> Dr. Gautam Jani, Dt. Foram
                    Desai, Dt. Nitin Patel | 1 december 2019
                  </li>
                </ul>
                <h2 className="h2-fs ">Group Instructor Masterclass</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.5)</span>
                </div>
                <p>Book Also available in Hindi Language</p>
                <p>free book delivery with in 7 days</p>
                <div className="price pb-3">
                  <p className="mt-2 fs-30">₹2,100/-</p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                    <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/fitness-instructor-course-book"
                    className="px-3 py-2"
                    style={{ backgroundColor: "#1f1f1f" }}
                  >
                    <img
                      className="lazy mr-2"
                      alt="fggroup"
                      src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                    />{" "}
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-5 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/injury-rehab-2.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  alt="fggroup"
                />
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fas fa-users"></i> Dr. Gautam Jani, Dt. Foram
                    Desai, Dt. Nitin Patel | 1 december 2019
                  </li>
                </ul>
                <h2 className="h2-fs ">Injury Rehab</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.5)</span>
                </div>
                <p>Book Also available in Hindi Language</p>
                <p>free book delivery with in 7 days</p>
                <div className="price pb-3">
                  <p className="mt-2 fs-30">₹2,100/-</p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                    <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/injury-rehab"
                    className="px-3 py-2"
                    style={{ backgroundColor: "#1f1f1f" }}
                  >
                    <img
                      className="lazy mr-2"
                      alt="fggroup"
                      src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                    />{" "}
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-5 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/health-wellness-1.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  alt="fggroup"
                />
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fas fa-users"></i> Dr. Gautam Jani, Dt. Foram
                    Desai, Dt. Nitin Patel | 1 december 2019
                  </li>
                </ul>
                <h2 className="h2-fs ">Advance Clinical Nutritionist</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.5)</span>
                </div>
                <p>Book Also available in Hindi Language</p>
                <p>free book delivery with in 7 days</p>
                <div className="price pb-3">
                  <p className="mt-2 fs-30">₹2,100/-</p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                    <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/clinical-nutrition-books"
                    className="px-3 py-2"
                    style={{ backgroundColor: "#1f1f1f" }}
                  >
                    <img
                      className="lazy mr-2"
                      alt="fggroup"
                      src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                    />{" "}
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-5 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/management-3.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  alt="fggroup"
                />
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fas fa-users"></i> Dr. Gautam Jani, Dt. Foram
                    Desai, Dt. Nitin Patel | 1 december 2019
                  </li>
                </ul>
                <h2 className="h2-fs ">
                  Diploma in Health & fitness business management book
                </h2>
                <div className="mt-lg-2 mb-lg-2 rating-start mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.5)</span>
                </div>
                <p>Book Also available in Hindi Language</p>
                <p>free book delivery with in 7 days</p>
                <div className="price pb-3">
                  <p className="mt-2 fs-30">₹2,100/-</p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                    <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/health-and-fitness-books"
                    className="px-3 py-2"
                    style={{ backgroundColor: "#1f1f1f" }}
                  >
                    <img
                      className="lazy mr-2"
                      alt="fggroup"
                      src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                    />{" "}
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-5 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/book/Power-lifting-front.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  alt="fggroup"
                />
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fas fa-users"></i> Dr. Gautam Jani, Dt. Foram
                    Desai, Dt. Nitin Patel | 1 december 2019
                  </li>
                </ul>
                <h2 className="h2-fs ">
                  Powerlifting - a Comprehensive guide to theory and practice
                </h2>
                <div className="mt-lg-2 mb-lg-2 rating-start mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.5)</span>
                </div>
                <p>Book Also available in Hindi Language</p>
                <p>free book delivery with in 7 days</p>
                <div className="price pb-3">
                  <p className="mt-2 fs-30">₹2,100/-</p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                    <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/best-books-for-powerlifting"
                    className="px-3 py-2"
                    style={{ backgroundColor: "#1f1f1f" }}
                  >
                    <img
                      className="lazy mr-2"
                      alt="fggroup"
                      src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                    />{" "}
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-5 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/book/FGIIT-boook-combo.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  alt="fggroup"
                />
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fas fa-users"></i> Dr. Gautam Jani, Dt. Foram
                    Desai, Dt. Nitin Patel | 1 december 2019
                  </li>
                </ul>
                <h2 className="h2-fs ">FGIIT All Courses Books Combo</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.5)</span>
                </div>
                <p>free book delivery with in 7 days</p>
                <div className="price pb-3">
                  <p className="mt-2 fs-30">₹15,600/-</p>
                  {/* <span className="fs-20">
                    <del>₹3,393/-</del>
                  </span>
                  <span className="p1 mx-2 fs-20">
                    <b>10% OFF</b>
                  </span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/fitness-books"
                    className="px-3 py-2"
                    style={{ backgroundColor: "#1f1f1f" }}
                  >
                    <img
                      className="lazy mr-2"
                      alt="fggroup"
                      src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                    />{" "}
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Fitness Book */}
          <div className="item mx-md-3 mb-5 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <LazyLoadImage
                  effect="blur"
                  src={process.env.PUBLIC_URL + "/assets/images/img/rtp-1.webp"}
                  width="100%"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  alt="fggroup"
                />
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fas fa-users"></i> Dr.Gautam Jani, Dt. Foram
                    Desai
                  </li>
                </ul>
                <h2 className="h2-fs ">
                  Rapid Transformation Program - Weight Loss Programme
                </h2>
                <div className="mt-lg-2 mb-lg-2 rating-start mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.5)</span>
                </div>
                <p>free book delivery with in 7 days</p>
                <div className="price pb-3">
                  <p className="mt-2 fs-30">₹599/-</p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                              <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/weight-loss-programme"
                    className="px-3 py-2"
                    style={{ backgroundColor: "#1f1f1f" }}
                  >
                    <img
                      className="lazy mr-2"
                      alt="fggroup"
                      src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                    />{" "}
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-5 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/rtp-2.0-book.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  alt="fggroup"
                />
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fas fa-users"></i> Dr.Gautam Jani, Dt. Foram
                    Desai, Dt. Nitin Patel | 1 december 2019
                  </li>
                </ul>
                <h2 className="h2-fs ">RTP 2.0 - Weight Management Program</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.5)</span>
                </div>
                <p>free book delivery with in 7 days</p>
                <div className="price pb-3">
                  <p className="mt-2 fs-30">₹599/-</p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                              <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/weight-management-program"
                    className="px-3 py-2"
                    style={{ backgroundColor: "#1f1f1f" }}
                  >
                    <img
                      className="lazy mr-2"
                      alt="fggroup"
                      src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                    />{" "}
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-5 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/book/rtp-3.0-p-1.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  alt="fggroup"
                />
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fas fa-users"></i> Dr.Gautam Jani, Dt. Foram
                    Desai
                  </li>
                </ul>
                <h2 className="h2-fs ">RTP 3.0 - Clinical Diets Part : 1</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.5)</span>
                </div>
                <p>free book delivery with in 7 days</p>
                <div className="price pb-3">
                  <p className="mt-2 fs-30">₹599/-</p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                              <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/clinical-diet-to-recover-your-health-part-1"
                    className="px-3 py-2"
                    style={{ backgroundColor: "#1f1f1f" }}
                  >
                    <img
                      className="lazy mr-2"
                      alt="fggroup"
                      src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                    />{" "}
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-5 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/book/rtp-3.0-p-2.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  alt="fggroup"
                />
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fas fa-users"></i> Dr.Gautam Jani, Dt. Foram
                    Desai
                  </li>
                </ul>
                <h2 className="h2-fs ">RTP 3.0 - Clinical Diets Part : 2</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.5)</span>
                </div>
                <p>free book delivery with in 7 days</p>
                <div className="price pb-3">
                  <p className="mt-2 fs-30">₹599/-</p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                              <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/clinical-diet-to-recover-your-health-part-2"
                    className="px-3 py-2"
                    style={{ backgroundColor: "#1f1f1f" }}
                  >
                    <img
                      className="lazy mr-2"
                      alt="fggroup"
                      src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                    />{" "}
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-5 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/book/rtp-4.0-book.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  alt="fggroup"
                />
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fas fa-users"></i> Dr.Gautam Jani, Dt. Foram
                    Desai
                  </li>
                </ul>
                <h2 className="h2-fs ">
                  RTP 4.0 - Health And Wellness Program
                </h2>
                <div className="mt-lg-2 mb-lg-2 rating-start mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.5)</span>
                </div>
                <p>free book delivery with in 7 days</p>
                <div className="price pb-3">
                  <p className="mt-2 fs-30">₹599/-</p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                              <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/health-and-wellness-program-book"
                    className="px-3 py-2"
                    style={{ backgroundColor: "#1f1f1f" }}
                  >
                    <img
                      className="lazy mr-2"
                      alt="fggroup"
                      src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                    />{" "}
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-5 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/book/rtp-5.0-book.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  alt="fggroup"
                />
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fas fa-users"></i> Dr.Gautam Jani, Dt. Foram
                    Desai
                  </li>
                </ul>
                <h2 className="h2-fs ">RTP 5.0 - Prep Coaching Program</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.5)</span>
                </div>
                <p>free book delivery with in 7 days</p>
                <div className="price pb-3">
                  <p className="mt-2 fs-30">₹599/-</p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                              <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/prep-coaching-program-book"
                    className="px-3 py-2"
                    style={{ backgroundColor: "#1f1f1f" }}
                  >
                    <img
                      className="lazy mr-2"
                      alt="fggroup"
                      src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                    />{" "}
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item mx-md-3 mb-5 mx-2">
            <div className="blog p-0" style={{ borderRadius: "10px" }}>
              <div className="ply position-relative">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/book/FWG-all-book.webp"
                  }
                  width="100%"
                  style={{ borderRadius: "10px 10px 0px 0px" }}
                  alt="fggroup"
                />
              </div>
              <div className="main-rtp">
                <ul
                  className="line-li d-flex pl-0"
                  style={{ listStyle: "none" }}
                >
                  <li>
                    <i className="fas fa-users"></i> Dr.Gautam Jani, Dt. Foram
                    Desai
                  </li>
                </ul>
                <h2 className="h2-fs ">FWG All Books Combo</h2>
                <div className="mt-lg-2 mb-lg-2 rating-start mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>(4.5)</span>
                </div>
                <p>free book delivery with in 7 days</p>
                <div className="price pb-3">
                  <p className="mt-2 fs-30">₹2,999/-</p>
                  <span className="fs-20">
                    <del>₹3,599/-</del>
                  </span>
                  <span className="p1 mx-2 fs-20">
                    <b>20% OFF</b>
                  </span>
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/fitness-courses-book"
                    className="px-3 py-2"
                    style={{ backgroundColor: "#1f1f1f" }}
                  >
                    <img
                      className="lazy mr-2"
                      alt="fggroup"
                      src="https://img10.hkrtcdn.com/mb/static/media/icons/shopping-cart.svg"
                    />{" "}
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="margintop">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#f9f3f3", padding: " 50px 0px" }}
        >
          <TotalBookCount />
        </div>
      </section>
      <section className="margintop d-md-none d-block">
        <div className="container-fluid">
          <div className="p-md-5 pb-2" style={{ paddingBottom: "50px" }}>
            <div>
              <div className="covid">
                <h2
                  className="h2-fs text-center mt-2"
                  style={{ color: "#333" }}
                >
                  <span className="m-0 text-blue-color">Order your book</span>{" "}
                  and get it delivered to your home
                </h2>
              </div>
              <div className="thm-bg-clr dector"></div>
            </div>
            <div className="row">
              {/* <OwlCarousel
                  loop
                  nav
                  autoPlay
                  dots={false}
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
                > */}
              <div className="col-6 px-1">
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
              <div className="col-6 px-1">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/dpt-book-1.webp"
                  }
                  alt="Courses Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-6 px-1 mt-2">
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
              <div className="col-6 px-1 mt-2">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/rtp-book-1.webp"
                  }
                  alt="Courses Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-6 px-1 mt-2">
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
              <div className="col-6 px-1 mt-2">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/dpt-book-2.webp"
                  }
                  alt="Courses Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-6 px-1 mt-2">
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
              <div className="col-6 px-1 mt-2">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/rtp-book-2.webp"
                  }
                  alt="Courses Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-6 px-1 mt-2">
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
              <div className="col-6 px-1 mt-2">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/dpt-book-3.webp"
                  }
                  alt="Courses Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-6 px-1 mt-2">
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
              <div className="col-6 px-1 mt-2">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/rtp-book-3.webp"
                  }
                  alt="Courses Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              {/* </OwlCarousel> */}
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div
            className="container blog2 p-md-5"
            style={{ paddingBottom: "50px" }}
          >
            <div className="tabata d-md-block d-none">
              <div>
                <div className="covid">
                  <h2
                    className="h2-fs text-center mt-2"
                    style={{ color: "#333" }}
                  >
                    <span className="m-0 text-blue-color">Order your book</span>{" "}
                    and get it delivered to your home
                  </h2>
                </div>
                <div className="thm-bg-clr dector"></div>
              </div>
              <div>
                <OwlCarousel
                  loop
                  nav
                  autoPlay
                  dots={false}
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
                        "/assets/images/img/dpt-book-1.webp"
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
                        "/assets/images/img/rtp-book-1.webp"
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
                        "/assets/images/img/dpt-book-2.webp"
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
                        "/assets/images/img/rtp-book-2.webp"
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
                  <div className="item mx-3">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/dpt-book-3.webp"
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
                        "/assets/images/img/rtp-book-3.webp"
                      }
                      alt="Courses Book"
                      width="100%"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                </OwlCarousel>
              </div>
            </div>
            <div className="row margintop">
              <div className="covid text-center">
                <h2 className="h2-fs">
                  <span className="m-0 text-blue-color">
                    The introduction of{" "}
                  </span>{" "}
                  fitness and nutrition books
                </h2>
                <div className="thm-bg-clr dector mb-md-5 mb-4"></div>
              </div>
              <div className="col-md-6 order-2 order-md-1">
                <div className="describe mt-3 mt-md-0">
                  <p className="m-0">
                    Welcome to Fitness With Gomzi International Institute of
                    Teaching! We are proud to offer a wide range of fitness
                    books that cater to various subjects. Our books, written by
                    qualified experts, provide valuable insights into health,
                    fitness, and personal development. They are an excellent
                    resource for anyone looking to enhance their knowledge in
                    these areas.
                    {showMore ? (
                      <p className="m-0">
                        {" "}
                        FGIIT books serve as a comprehensive tool for tracking
                        different types of exercises, body weight, body
                        measurements, dietary preferences, diet plans,
                        supplements taken, and much more. They also include
                        pages for setting goals and deadlines, helping you stay
                        accountable and motivated on your fitness journey. Our
                        fitness books are highly recommended for health and
                        fitness instructors, fitness club owners, health
                        operators, personal trainers, and gym trainers. They
                        serve as a valuable reference guide, providing essential
                        information and guidance in the field of health and
                        fitness. At Fitness With Gomzi International Institute
                        of Teaching, we understand the importance of continuous
                        learning and professional development. That's why our
                        books are widely read by influential trainers who are
                        passionate about expanding their knowledge and staying
                        up-to-date with the latest industry trends. To explore
                        our extensive collection of fitness books and embark on
                        a journey of knowledge and personal growth, please visit
                        our website or contact us for more information.
                      </p>
                    ) : (
                      <span id="dotsx">...</span>
                    )}
                  </p>
                  <p
                    onClick={toggleReadMore}
                    id="myBtnrx"
                    className="text-info m-0"
                  >
                    {showMore ? "Read less" : "Read more"}
                  </p>
                </div>
              </div>
              <div className="col-md-6 order-1 order-md-2">
                <div className="ply1 black-before">
                  <LazyLoadImage
                    effect="blur"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/all-book-img.webp"
                    }
                    style={{ borderRadius: "10px" }}
                    className="lazy"
                    width="100%"
                    alt="All Book"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="margintop mb-5">
        <div className="container-fluid">
          <div className="container" id="about_us">
            <div className="covid text-center">
              <h2 className="h2-fs">
                about
                <span className="m-0 text-blue-color"> us</span>
              </h2>
              <div className="thm-bg-clr dector mb-0"></div>
            </div>
            <div className="Info">
              <h2 className="mb-2 h2-fs">
                Diploma In Personal Training Course -
              </h2>
            </div>
            <div className="describe">
              <p>
                The Personal Training Book Is The Foundation Book In Exercise
                Science That Provides Comprehensive Theoretical And Practical
                Education, Equipping The Student With A Knowledge Base And Tools
                To Professional Practice As A Qualified, Certified Personal
                Trainer In The Fitness Industry.
              </p>
            </div>
            <div className="Info">
              <h2 className="mb-2 h2-fs">Diploma In Nutrition Course -</h2>
            </div>
            <div className="describe">
              <p>
                This Diploma in Nutrition book is Specially Designed To Help
                Qualified Nutritionists, Personal Trainer/Gym Instructor And
                Group Fitness Instructor Obtain The Knowledge Required To
                Prescribe Nutrition Plans For Active, Exercising Individuals &
                Even Competitive Athletes.
              </p>
            </div>
            <div className="Info">
              <h2 className="mb-2 h2-fs">Anabolic-Androgenic Steroids -</h2>
            </div>
            <div className="describe">
              <p>
                Anabolic steroids are man-made substances that have identical
                effects on a testosterone within the body. They speed up
                recovery between workouts, boost fat loss, and increase strength
                and muscle growth. While testosterone is that the foremost
                well-liked steroid, here are other often-used
                Anabolic-androgenic steroids that are the most important thing
                to know for athletes these days. In an era, where everyone is
                using performance-enhancing drugs to win, you should not be left
                out from the victory or make any decision that can harm your
                life. So our objective is to spread the knowledge of anabolic
                substances, doses, safety, and complications to every individual
                who is in sports.
              </p>
            </div>
            <div className="Info">
              <h2 className="mb-2 h2-fs">injury rehab -</h2>
            </div>
            <div className="describe">
              <p>
                The fundamentals of training and conditioning exercises that you
                have studied while studying for personal training and food
                nutrition also apply to therapeutic, rehabilitation, or
                reconditioning exercise techniques that are specifically aimed
                at restoring normal bodily function after injury. This book
                contains both therapeutic exercises used in a rehabilitation
                program and conditioning exercises that minimize the risk of
                injury while maximizing performance during a workout. This book
                includes the practical presentation of both therapeutic and
                conditioning activities that can be followed by anyone who has
                knowledge of the human body quickly.
              </p>
            </div>
            <div className="Info">
              <h2 className="mb-2 h2-fs">Certified Wellness Consultant -</h2>
            </div>
            <div className="describe">
              <p>
                Wellness Consultant Is A Course Where You Learn How To Fight
                Diseases Like Diabetes, Thyroid, PCOS, And Cancer. These Are The
                Diseases Is Can Not Be Controlled By Medicine Only, You Need To
                Have The Support Of Nutrition, Exercises, Recovery, And Rehab
                Parts Also. There Are Many modern Research That Suggests That
                Intermittent Fasting, Low Carb Diet, Keto Diet, And Many Caloric
                Deficit Diets And Exercise Approaches Are More Helpful Than
                Medicine Also, So This Course Will Help You To Achieve And Gain
                Knowledge About Those Kinds Of Therapies Which Are Alternative
                Medicine Therapy.
              </p>
            </div>
            <div className="Info">
              <h2 className="mb-2 h2-fs">Gym Management Course -</h2>
            </div>
            <div className="describe">
              <p>
                If businesses or individuals want greater success, then the
                answer resides within the ability to improve motivation, improve
                the use of energy and to improve talent. Yet, almost every time,
                the emphasis is on talent or the hard skills with little or no
                focus on developing one's own personality. GYM MANAGEMENT COURSE
                that is designed to help emerging leaders create a more dynamic,
                loyal and energized personality and replicate it in their
                workplace.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <FlexibleFooter />
    </>
  );
}

export default HealthBooks;
