import React, { useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Row } from "react-bootstrap";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

function InHomeExerciseMachine() {
  const canonicalUrl = window.location.href;
  const [currentBookLang, setCurrentBookLang] = useState("english");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const englishbook = [
    "/assets/images/img/kit-1.webp",
    "/assets/images/img/kit-2.webp",
    "/assets/images/img/kit-3.webp",
    "/assets/images/img/kit-4.webp",
    "/assets/images/img/kit-5.webp",
    "/assets/images/img/kit-6.webp",
  ];

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };

  return (
    <>
      <Helmet>
        <title>Best In Home Exercise Machine & Fitness Equipment Combo Set</title>
        <meta name="description" content="If you want to lose weight and you are serious enough then you just require in home exercise machine to transform yourself from fat to fit. Purchase our Fitness Kit." />
        <meta name="keyword" content="dietitian in India, best dietitian in surat, best nutritionist in India, online nutrition consultant, vegetarian diet plan for weight loss, best online dietitian, online dietician for weight loss, vegetarian diet chart for weight loss for female, online dietician consultation, best nutritionist for weight loss, dietician online" />
        <meta property="og:title" content="Best In Home Exercise Machine & Fitness Equipment Combo Set" />
        <meta property="og:description" content="If you want to lose weight and you are serious enough then you just require in home exercise machine to transform yourself from fat to fit. Purchase our Fitness Kit." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/book/in-home-exercise-machine" />
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
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row resip">
              <div className="col-lg-6">
                <div
                  className="product-imgs english-book singal-product-img"
                  style={{
                    display: currentBookLang === "english" ? "block" : "none",
                  }}
                >
                  <div className="row">
                    <div className="col-12">
                      <div className="main-image text-center mt-4">
                        <LazyLoadImage
                          effect="blur"
                          src={englishbook[activeImageIndex]}
                          alt="FG Group"
                          width="90%"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="thumbnail-images">
                        {englishbook.map((image, index) => (
                          <div
                            key={index}
                            className={`thumbnail-image ${index === activeImageIndex ? "active" : ""
                              }`}
                            onClick={() => handleThumbnailClick(index)}
                            style={{ marginLeft: "15px" }}
                          >
                            <Row>
                              <div className="col-12 mx-2 mt-4 text-center">
                                <div
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    cursor: "pointer",
                                  }}
                                >
                                  <img
                                    src={image}
                                    alt="FG Group"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "contain",
                                    }}
                                  />
                                </div>
                              </div>
                            </Row>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 w" id="upforebook">
                <div className="tabata d-inline-block">
                  <h1>RTP Program Kit (Home Exercise Machine)</h1>
                </div>
                <div className="mt-2 mb-3 meal">
                  <i
                    className="fas fa-star"
                    id="overall_top_1"
                    style={{ color: "gray" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_top_half_1"
                    style={{ display: "none" }}
                  ></i>
                  <i
                    className="fas fa-star"
                    id="overall_top_2"
                    style={{ color: "gray" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_top_half_2"
                    style={{ display: "none" }}
                  ></i>
                  <i
                    className="fas fa-star"
                    id="overall_top_3"
                    style={{ color: "gray" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_top_half_3"
                    style={{ display: "none" }}
                  ></i>
                  <i
                    className="fas fa-star"
                    id="overall_top_4"
                    style={{ color: "gray" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_top_half_4"
                    style={{ display: "none" }}
                  ></i>
                  <i
                    className="fas fa-star"
                    id="overall_top_5"
                    style={{ color: "gray" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_top_half_5"
                    style={{ display: "none" }}
                  ></i>
                  <span id="span_overall_rating">0</span>
                </div>
                <div className="price">
                  <h2 className="h2-fs">Mentors</h2>
                </div>
                <div className="row">
                  <div className="col-lg-9 calc">
                    <ul>
                      <li>
                        <div>
                          <img
                            className="lazy mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/blue.webp"
                            }
                            alt="fggroup"
                          />
                          <p>Dumbbell</p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            className="lazy mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/yellow.webp"
                            }
                            alt="fggroup"
                          />
                          <p>Gym Ladder</p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            className="lazy mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/pink.webp"
                            }
                            alt="FG Group"
                          />
                          <p>Gym Mat</p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            className="lazy mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/purple.webp"
                            }
                            alt="fggroup"
                          />
                          <p>Gym Bag</p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img
                            className="lazy mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/blue.webp"
                            }
                            alt="fggroup"
                          />
                          <p>Book</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="price">
                  <p className="my-3">₹4500/-</p>
                </div>
                <form>
                  <script
                    src="https://checkout.razorpay.com/v1/payment-button.js"
                    data-payment_button_id="pl_IduDPlL9pRSq5V"
                    async></script>
                </form>
              </div>
              <div className="col-lg-12">
                <div className="Info">
                  <h2 className="h2-fs">Details</h2>
                </div>
                <div className="Grocery1">
                  <div className="revi">
                    <h2 className="h3-fs fs-18">Dumbbells - </h2>
                  </div>
                  <p className="mt-0 ml-3">
                    Fitness 5 kg Dumbbells Twin-Pack - Black
                    <br /> The essential dumbbells are the perfect ally for
                    strengthening your body and are available in 6 weights to
                    suit your needs!. You'll love: You'll love the comfortable
                    grip and no-roll design. You'll be wild about: How versatile
                    they are: make all your squats, lunges and bicep curls more
                    intense.
                  </p>
                  <br />
                  <div className="revi">
                    <h2 className="h4-fs fs-18">Ladder - </h2>
                  </div>
                  <p className="mt-0 ml-3">
                    Agility Ladder - 4 metres
                    <br />
                    Designed to help coaches and trainers organizes training
                    drills, this 4-metre Kipsta Essential agility ladder is
                    perfect for footwork coordination exercises.. Designed to
                    help coaches and trainers organize training drills. Perfect
                    for footwork exercises Neon rungs ensure good visibility
                    Easy to store away.
                  </p>
                  <br />
                  <div className="revi">
                    <h2 className="h5-fs fs-18">gym mat - </h2>
                  </div>
                  <p className="mt-0 ml-3">
                    Essential Beginner Yoga Mat 6.5mm - Dark gray
                    <br />
                    we created this soft mat to help you ease into learning
                    yoga... Nature is present every time you step on the mat.
                    The comfortable thickness lets you reconnect to your senses.
                  </p>
                  <ul>
                    <li>
                      <b>Grip - </b>Excellent grip on the floor and traction
                      designed gentle yoga.
                    </li>
                    <li>
                      <b>User comfort - </b>6mm thick for extra softness
                    </li>
                    <li>
                      <b>Easy transport - </b>The soft strap is great for
                      carrying this mat to all your classes.
                    </li>
                    <li>
                      <b>Stability - </b>6mm, thin enough for balancing poses
                    </li>
                  </ul>
                  <br />
                  <div className="revi">
                    <h2 className="h6-fs fs-18">Gym bag - </h2>
                  </div>
                  <p className="mt-0 ml-3">
                    Fold-Down Fitness Bag 30L - Black
                    <br />
                    our passionate fitness team developed this fold-down sports
                    bag for carrying your fitness outfit and gear to and from
                    your workout.. This practical, foldable, ultra-light bag is
                    a must. You can take it anywhere as it takes up next to no
                    space and it is just what you need when playing sport.
                  </p>
                  <br />
                  <div className="revi">
                    <h2 className="h6-fs fs-18">Exercise Book - </h2>
                  </div>
                  <p className="mt-0 ml-3">
                    This book contain very special program for those who wants
                    to build overall fitness also it include exercise which
                    train your
                  </p>
                  <ul>
                    <li>Cardiovascular endurance</li>
                    <li>Muscular endurance</li>
                    <li>Strength</li>
                    <li>Flexibility</li>
                    <li>Agility</li>
                    <li>Balance</li>
                    <li>Co-ordination</li>
                  </ul>
                  <p className="mt-0 ml-3">
                    It will show you how to perform exercise in perfect posture
                    too.
                  </p>
                  <p className="mt-0 ml-3">
                    One step solution for fitness - in home exercise machine
                  </p>
                  <p>
                    If you are searching for a dietitian in India, best
                    dietitian in surat, best nutritionist in India, online
                    nutrition consultant, vegetarian diet plan for weight loss,
                    best online dietitian, online dietician for weight loss,
                    vegetarian diet chart for weight loss for female, online
                    dietician consultation, best nutritionist for weight loss,
                    dietician online you are on right page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop" id="review_segment">
        <div className="container-fluid">
          <div className="container">
            <div className="Info">
              <h2 className="h2-fs">Customer Reviews</h2>
            </div>
            <div className="row">
              <div className="col-md-3 revi">
                <h2 className="h6-fs">OVERALL RATING</h2>
                <h2 className="h5-fs" id="div_overall_rating">0.0</h2>
                <div className="mt-2 mb-3 mel">
                  <i
                    className="fas fa-star"
                    id="overall_1"
                    style={{ color: "gray" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_half_1"
                    style={{ display: "none" }}
                  ></i>
                  <i
                    className="fas fa-star"
                    id="overall_2"
                    style={{ color: "gray" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_half_2"
                    style={{ display: "none" }}
                  ></i>
                  <i
                    className="fas fa-star"
                    id="overall_3"
                    style={{ color: "gray" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_half_3"
                    style={{ display: "none" }}
                  ></i>
                  <i
                    className="fas fa-star"
                    id="overall_4"
                    style={{ color: "gray" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_half_4"
                    style={{ display: "none" }}
                  ></i>
                  <i
                    className="fas fa-star"
                    id="overall_5"
                    style={{ color: "gray" }}
                  ></i>
                  <i
                    className="fas fa-star-half-alt"
                    id="overall_half_5"
                    style={{ display: "none" }}
                  ></i>
                  <p id="div_total_review">0 reviews</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mt-2 mb-3 mel">
                  <i
                    className="fas fa-star"
                    data-star="1"
                    id="book_1"
                    onclick="setStar(this)"
                  ></i>
                  <i
                    className="fas fa-star"
                    data-star="2"
                    id="book_2"
                    onclick="setStar(this)"
                  ></i>
                  <i
                    className="fas fa-star"
                    style={{ color: "gray" }}
                    onclick="setStar(this)"
                    data-star="3"
                    id="book_3"
                  ></i>
                  <i
                    className="fas fa-star"
                    data-star="4"
                    id="book_4"
                    style={{ color: "gray" }}
                    onclick="setStar(this)"
                  ></i>
                  <i
                    className="fas fa-star"
                    data-star="5"
                    id="book_5"
                    style={{ color: "gray" }}
                    onclick="setStar(this)"
                  ></i>
                </div>
                <textarea
                  className="form-control fr mt-3"
                  id="txt_review"
                  placeholder="Please enter your reviews"
                  rows="5"
                ></textarea>
                <input type="hidden" id="txt_book_star" value="1" />
                <button
                  type="button"
                  className="btn btn-success mt-3"
                  onclick="submitFeedback('61e9f4db0c90317bf000396a')"
                >
                  Submit
                </button>
              </div>
              <div className="col-md-5">
                <div>
                  <div className="mell">
                    <p className="my-2" id="star_5">
                      100.00 %
                    </p>
                    <div className="d-inline-block my-2 float-right">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="progress" style={{ height: "2px" }}>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="mell">
                    <p className="my-2" id="star_4">
                      0.00 %
                    </p>
                    <div className="d-inline-block my-2 float-right">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="progress" style={{ height: "2px" }}>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="mell">
                    <p className="my-2" id="star_3">
                      0.00 %
                    </p>
                    <div className="d-inline-block my-2 float-right">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="progress" style={{ height: "2px" }}>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="mell">
                    <p className="my-2" id="star_2">
                      0.00 %
                    </p>
                    <div className="d-inline-block my-2 float-right">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="progress" style={{ height: "2px" }}>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="mell">
                    <p className="my-2" id="star_1">
                      0.00 %
                    </p>
                    <div className="d-inline-block my-2 float-right">
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="progress" style={{ height: "2px" }}>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <h2 className="h5-fs fs-25">Reviews</h2>
                <div className="revi" id="div_review_codeblock"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FgiitFooter />
    </>
  );
}

export default InHomeExerciseMachine;
