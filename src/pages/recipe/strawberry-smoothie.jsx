import React, { useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import FgmealsFooter from "../../components/partials/Footer/fgmeals";
import ModalVideo from "react-modal-video";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

function StrawberrySmoothie() {
  const canonicalUrl = window.location.href;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  const handleShare = async () => {
    try {
      const pageUrl = window.location.href;

      let shareData = {
        url: pageUrl,
      };

      await navigator.share(shareData);
      console.log("Shared successfully");
    } catch (error) {
      console.log("Error sharing:", error);
      alert("Your device doesn't support sharing.");
    }
  };
  return (
    <>
      <Helmet>
        <title>Healthy Strawberry Smoothie Recipe - FG Meals</title>
        <meta name="description" content="Follow this simple and easy strawberry smoothie recipe. This refreshing smoothie recipe is a good choice as a morning drink." />
        <meta name="keyword" content="" />
        <meta property="og:title" content="Healthy Strawberry Smoothie Recipe - FG Meals" />
        <meta property="og:description" content="Follow this simple and easy strawberry smoothie recipe. This refreshing smoothie recipe is a good choice as a morning drink." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/recipe/strawberry-smoothie" />
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
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <SimpleHeader />
      <section style={{ marginTop: "100px", marginBottom: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="row resip">
              <div className="col-lg-6">
                <div className="stik">
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/strawberry-smoothie.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="ply3">
                      <a aria-label="Fg Group"
                        className="custom"
                        onClick={() => openVideoModal("hlZs1dOPoUY")}
                      >
                        <i
                          className="far fa-play-circle"
                          style={{ color: "black" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 w">
                <div className="tabata d-inline-block">
                  <h1>Strawberry smoothie</h1>
                </div>
                <div className="d-inline-block float-right resi">
                  <a aria-label="Fg Group"
                    className="mr-2"
                    onclick="recipeLike('600e5b2099180b31447a0ef9',this)"
                    id="a_likeRef"
                  >
                    {/* <img className="lazy" data-src="" width="20px" id="img_like"> */}
                  </a>
                  <a onClick={() => handleShare()} aria-label="Fg Group">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/share.svg"
                      }
                      width="20px"
                      alt="fggroup"
                    />
                  </a>
                </div>
                <div className="row mt-5">
                  <div className="col-sm-3">
                    <span className="time">Time</span>
                    <span className="min">
                      <b>5 Min</b>
                    </span>
                  </div>
                  <div className="col-sm-3">
                    <span className="time">Difficulty</span>
                    <span className="min">
                      <b>Easy</b>
                    </span>
                  </div>
                  <div className="col-sm-3">
                    <span className="time">Serves</span>
                    <span className="min">
                      <b>1</b>
                    </span>
                  </div>
                </div>
                <div>
                  <div className="Info">
                    <h2 className="h2-fs">About Strawberry smoothie</h2>
                  </div>
                  <p>
                    Looking for a healthy drink which your body needs after a
                    workout or as a Pre-workout? Pink Smoothie Serves right with
                    the best combination of Mango and pineapple to flavor up
                    your taste buds. It is prepared in Just 5 mins and serves
                    you the optimum amount of carbs and protein that your body
                    needs.{" "}
                  </p>
                  <div className="Info">
                    <h2 className="h2-fs">Nutrition Info. (per serving)</h2>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 calc">
                      <ul>
                        <li>
                          <div>
                            <img
                              className="lazy mr-3"
                              alt="fggroup"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/blue.webp"
                              }
                            />
                            <p>10 grm</p>
                            <span>Protein</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <img
                              className="lazy mr-3"
                              alt="fggroup"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/yellow.webp"
                              }
                            />
                            <p>25 grm</p>
                            <span>Carbohydrates</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <img
                              className="lazy mr-3"
                              alt="fggroup"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/pink.webp"
                              }
                            />
                            <p>04 grm</p>
                            <span>Fats</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="Info">
                    <h2 className="h2-fs">Ingredients</h2>
                  </div>
                  <div className="Grocery">
                    <ul>
                      <li>
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/banana.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">banana</h2>
                          <h2 className="h6-fs">1/2</h2>
                        </div>
                      </li>
                      <li>
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/ginger.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">ginger</h2>
                          <h2 className="h6-fs">1 teaspoon</h2>
                        </div>
                      </li>
                      <li>
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/yogurt.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">greek yogurt</h2>
                          <h2 className="h6-fs">2 teaspoons</h2>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/strawberryyougurt.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">Strawberry yogurt</h2>
                          <h2 className="h6-fs">2 teaspoons</h2>
                        </div>
                      </li>
                      <li>
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/milk.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">milk</h2>
                          <h2 className="h6-fs">250 ml</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="Info">
                    <h2 className="h2-fs">Directions</h2>
                  </div>
                  <div className="Grocery1 float-left">
                    <ul>
                      <li>
                        Peel off a banana and use 1/2 banana for your smoothie
                      </li>
                      <li>1 tbsp ginger to enhance the flavor</li>
                      <li>Add 2 tabsp of greek yogurt in the above mixture</li>
                      <li>
                        Add 2 tabsp strawberry yogurt in the bowl where you have
                        kept the above
                      </li>
                      <li>
                        Now add 250 ml milk and blend It well with those
                        mixtures
                      </li>
                      <li>
                        And Here is Your Strawberry smoothie ready to be
                        consumed
                      </li>
                    </ul>
                  </div>
                  <div className="Info">
                    <h2 className="h2-fs">Benefits of Strawberry smoothie</h2>
                  </div>
                  <div className="Grocery2 float-left">
                    <ol>
                      <li>Easy to be prepared</li>
                      <li>Less Time Consuming takes approximately 5 Mins</li>
                      <li>Handy smoothie</li>
                      <li>
                        Works universally as Breakfast, Post or Pre-workout as
                        well
                      </li>
                      <li>Healthy supplement for your body</li>
                      <li>Handy ingredients</li>
                      <li>300 ml Per serving for an Individual</li>
                      <li>breakfast weight loss recipe</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FgmealsFooter />
    </>
  );
}

export default StrawberrySmoothie;
