import React, { useEffect, useState } from "react";
import FwgHeader from "../../components/partials/Header/fwgheader";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import ContactButtonFWG from "../../assets/js/utils/contactUsFwg";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";
import FitnessBookFooter from "../../components/partials/Footer/fitnessbookfooter";

function HealthAndFitnessBooks() {
  const canonicalUrl = window.location.href;
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const $ = window.$;
    $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fas fa-arrow-right"></i>');
  }, []);
  return (
    <>
      <Helmet>
        <title>Best Health Book for Improving Your Overall Well-being</title>
        <meta name="description" content="Discover the best health book to improve your well-being. Learn essential tips for a healthier lifestyle and overall wellness." />
        <meta name="keyword" content="Fitness books & Transformation Kit, Fitness books, Transformation Kit, Health and Fitness Book, Health Book, workout book, best fitness books, best workout books, best book on physical fitness, book fitness, book of fitness, book workout, books for working out, exercise workout book, good exercise books, good workout books, great fitness books, Strength training books, Best exercise books, Fitness transformation books, Health and wellness books, Nutrition and fitness books, Home workout books, Sports fitness books, Physical fitness books, Best weight loss books, Fitness training books, Best books for personal trainers, Diet and fitness books, Self-improvement fitness books, Muscle building books, Strength and conditioning books, Bodybuilding workout books, Cardio training books, Functional fitness books, Flexibility training books, Fat loss books, Fitness program books, Athletic performance books, Best sports performance books, Training and nutrition books, Exercise physiology books, Best calisthenics books, Personal development fitness books, HIIT workout books, Best fitness books for beginners, Workout guide books" />
        <meta property="og:title" content="Best Health Book for Improving Your Overall Well-being" />
        <meta property="og:description" content="Discover the best health book to improve your well-being. Learn essential tips for a healthier lifestyle and overall wellness." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/book/health-books" />
        <link rel="canonical" href={{ canonicalUrl }} />
        <meta name="google-site-verification" content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K2X4NWNEP1');`}
        </script>
      </Helmet>
      <p className="d-none"> 
      Fitness books & Transformation Kit, Fitness books, Transformation Kit, Health and Fitness Book, Health Book, workout book, best fitness books, best workout books, best book on physical fitness, book fitness, book of fitness, book workout, books for working out, exercise workout book, good exercise books, good workout books, great fitness books, Strength training books, Best exercise books, Fitness transformation books, Health and wellness books, Nutrition and fitness books, Home workout books, Sports fitness books, Physical fitness books, Best weight loss books, Fitness training books, Best books for personal trainers, Diet and fitness books, Self-improvement fitness books, Muscle building books, Strength and conditioning books, Bodybuilding workout books, Cardio training books, Functional fitness books, Flexibility training books, Fat loss books, Fitness program books, Athletic performance books, Best sports performance books, Training and nutrition books, Exercise physiology books, Best calisthenics books, Personal development fitness books, HIIT workout books, Best fitness books for beginners, Workout guide books
      </p>
      <WhatsappHeaderApp
        message={"Hello, I wanted to know more about Fitness Books details. "}
        options={{ pageRef: true }}
      />

      <FwgHeader />
      <section style={{ marginTop: "70px" }}>
        <div className="container-fluid p-0">
          <img
            effect="blur"
            src={process.env.PUBLIC_URL + "/assets/images/img/banner20.webp"}
            className="d-none d-md-block w-100 lazy"
            alt="Create a fit culture at your place"
          />
          <img
            effect="blur"
            src={
              process.env.PUBLIC_URL + "/assets/images/img/banner-mobile20.webp"
            }
            className="d-block d-md-none w-100 lazy"
            alt="Create a fit culture at your place"
          />
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="describe text-center mb-4">
              <h1 className="text-center">
                Fitness books &{" "}
                <span className="m-0 text-blue-color"> Transformation Kit</span>
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
                  <Link to="/book/weight-reduction-programs" className="book">
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
                    <Link to="/book/weight-reduction-programs">
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
                    <Link to="/book/weight-reduction-programs">
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
                      <h2 className="h2-fs">RTP 2.0 - Weight Management Program</h2>
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
                    to="/book/heart-healthy-diet"
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
                    <Link to="/book/heart-healthy-diet">
                      <h2 className="h2-fs">RTP 3.0 - Clinical Diets Part : 1</h2>
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
                    <Link to="/book/heart-healthy-diet">
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
                    to="/book/clinical-illness-diets-exercise"
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
                    <Link to="/book/clinical-illness-diets-exercise">
                      <h2 className="h2-fs">RTP 3.0 - Clinical Diets Part : 2</h2>
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
                    <Link to="/book/clinical-illness-diets-exercise">
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
                    to="/book/corporate-wellness"
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
                    <Link to="/book/corporate-wellness">
                      <h2 className="h2-fs">RTP 4.0 - Health And Wellness Program</h2>
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
                    <Link to="/book/corporate-wellness">
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
                  <Link to="/book/muscle-building" className="book">
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
                    <Link to="/book/muscle-building">
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
                    <Link to="/book/muscle-building">
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
      </div>
      <div className="d-md-none d-block">
        <div className="container">
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
                  <p className="mt-2 fs-30">
                    ₹599/-
                  </p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                    <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/weight-reduction-programs"
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
                  <p className="mt-2 fs-30">
                    ₹599/-
                  </p>
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
                  <p className="mt-2 fs-30">
                    ₹599/-
                  </p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                    <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/heart-healthy-diet"
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
                  <p className="mt-2 fs-30">
                    ₹599/-
                  </p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                    <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/clinical-illness-diets-exercise"
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
                <h2 className="h2-fs ">RTP 4.0 - Health And Wellness Program</h2>
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
                  <p className="mt-2 fs-30">
                    ₹599/-
                  </p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                    <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/corporate-wellness"
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
                  <p className="mt-2 fs-30">
                    ₹599/-
                  </p>
                  {/* <span className="fs-20"><del>₹11,799/-</del></span>
                                    <span className="p1 mx-2 fs-20"><b>90% OFF</b></span> */}
                </div>
                <div className="meal mb-3">
                  <Link
                    to="/book/muscle-building"
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
                  <p className="mt-2 fs-30">
                    ₹2,999/-
                  </p>
                  <span className="fs-20">
                    <del>₹3,599/-</del>
                  </span>
                  <span
                    className="p1 mx-2 fs-20"
                  >
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
        <div className="container-fluid p-0">
          <div
            className="bg-full-bd height-respo"
            style={{
              padding: "30px 0px",
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fwg/dispatch-main.webp)`,
              backgroundAttachment: "inherit",
            }}
          >
            <div className="container">
              <div className="col-12">
                <div className="demoo mb-4 text-center">
                  <h2 className='h2-fs' style={{ color: "#fff" }}>
                    total books and Kit dispatch
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-sm-6 text-center">
                  <span
                    className="counter"
                    style={{
                      fontWeight: "bold",
                      lineHeight: "1.42857143",
                      color: "#fff",
                      fontSize: "40px",
                      fontFamily: "Nunito,sans-serif",
                    }}
                  >
                    400
                  </span>
                  <i
                    className="fas fa-plus"
                    style={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: "33px",
                    }}
                  ></i>
                  <div className="tabata">
                    <p
                      style={{ color: "#fff", fontWeight: "bold" }}
                      className="mt-3"
                    >
                      RTP-1.0 - Weight Loss
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 text-center">
                  <span
                    className="counter"
                    style={{
                      fontWeight: "bold",
                      lineHeight: "1.42857143",
                      color: "#fff",
                      fontSize: "40px",
                      fontFamily: "Nunito,sans-serif",
                    }}
                  >
                    450
                  </span>
                  <i
                    className="fas fa-plus"
                    style={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: "33px",
                    }}
                  ></i>
                  <div className="tabata">
                    <p
                      style={{ color: "#fff", fontWeight: "bold" }}
                      className="mt-3"
                    >
                      RTP-2.0 - Weight Management program
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 text-center">
                  <span
                    className="counter"
                    style={{
                      fontWeight: "bold",
                      lineHeight: "1.42857143",
                      color: "#fff",
                      fontSize: "40px",
                      fontFamily: "Nunito,sans-serif",
                    }}
                  >
                    50
                  </span>
                  <i
                    className="fas fa-plus"
                    style={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: "33px",
                    }}
                  ></i>
                  <div className="tabata">
                    <p
                      style={{ color: "#fff", fontWeight: "bold" }}
                      className="mt-3"
                    >
                      RTP-3.0 - Clinical Diets
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 text-center">
                  <span
                    className="counter"
                    style={{
                      fontWeight: "bold",
                      lineHeight: "1.42857143",
                      color: "#fff",
                      fontSize: "40px",
                      fontFamily: "Nunito,sans-serif",
                    }}
                  >
                    400
                  </span>
                  <i
                    className="fas fa-plus"
                    style={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: "33px",
                    }}
                  ></i>
                  <div className="tabata">
                    <p
                      style={{ color: "#fff", fontWeight: "bold" }}
                      className="mt-3"
                    >
                      RTP-4.0 - Health And Wellness Program
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 text-center">
                  <span
                    className="counter"
                    style={{
                      fontWeight: "bold",
                      lineHeight: "1.42857143",
                      color: "#fff",
                      fontSize: "40px",
                      fontFamily: "Nunito,sans-serif",
                    }}
                  >
                    450
                  </span>
                  <i
                    className="fas fa-plus"
                    style={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: "33px",
                    }}
                  ></i>
                  <div className="tabata">
                    <p
                      style={{ color: "#fff", fontWeight: "bold" }}
                      className="mt-3"
                    >
                      RTP-5.0 - Prep Coaching
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 text-center">
                  <span
                    className="counter"
                    style={{
                      fontWeight: "bold",
                      lineHeight: "1.42857143",
                      color: "#fff",
                      fontSize: "40px",
                      fontFamily: "Nunito,sans-serif",
                    }}
                  >
                    50
                  </span>
                  <i
                    className="fas fa-plus"
                    style={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: "33px",
                    }}
                  ></i>
                  <div className="tabata">
                    <p
                      style={{ color: "#fff", fontWeight: "bold" }}
                      className="mt-3"
                    >
                      Transformation Kit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 p-md-5">
            <div className="covid text-center">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">
                  The introduction of{" "}
                </span>{" "}
                fitness and nutrition books
              </h2>
              <div className="thm-bg-clr dector mb-md-5 mb-4"></div>
            </div>
            <div className="row">
              <div className="col-md-6 order-2 order-md-1">
                <div className="describe mt-3 mt-md-0">
                  <p className="m-0">
                    Fitness with Gomzi offers three powerful resources to help
                    you achieve your health and fitness goals: RTP 1.0, RTP 2.0,
                    and the Transformation Kit. RTP 1.0 is a comprehensive guide
                    to weight loss that includes effective workouts,
                    easy-to-follow meal plans, and tips for maintaining a
                    healthy lifestyle. RTP 2.0 is a home-based weight
                    maintenance program that includes tailored meal plans and
                    workouts designed to keep you fit and healthy without
                    {showMore ? (
                      <p className="ml-0 mt-0">
                        leaving your house. The Transformation Kit combines the
                        power of RTP 1.0 and RTP 2.0 with additional resources,
                        such as a journal and motivational guide, to help you
                        transform your entire lifestyle. Whether you're looking
                        to lose weight, maintain your weight, or completely
                        transform your health and fitness, Fitness with Gomzi
                        has the perfect solution for you.
                      </p>
                    ) : (
                      <span id="dotsx">...</span>
                    )}
                  </p>
                  <p onClick={toggleReadMore} className="text-info m-0">
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
      <FitnessBookFooter />
      <ContactButtonFWG />
    </>
  );
}

export default HealthAndFitnessBooks;
