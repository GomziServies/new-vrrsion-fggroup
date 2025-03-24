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

function SweetPotatoSmoothie() {
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
        <title>Healthy Sweet Potato Smoothie Recipe | Fg Meals</title>
        <meta name="description" content="This sweet potato smoothie is easy to make, and tastes like healthy sweet potato pie! It's the ultimate Fall recipe for effective weight loss and can help you get glowing skin." />
        <meta name="keyword" content="" />
        <meta
          property="og:title"
          content="Healthy Sweet Potato Smoothie Recipe | Fg Meals"
        />
        <meta property="og:description" content="This sweet potato smoothie is easy to make, and tastes like healthy sweet potato pie! It's the ultimate Fall recipe for effective weight loss and can help you get glowing skin." />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta property="og:url" content="https://fggroup.in/recipe/sweet-potato-smoothie" />
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
                        "/assets/images/img/sweet-potato-smoothie.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="ply3">
                      <a
                        aria-label="Fg Group"
                        className="custom"
                        onClick={() => openVideoModal("lHg-noqFaZE")}
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
                  <h1>Sweet Potato Smoothie</h1>
                </div>
                <div className="d-inline-block float-right resi">
                  <a
                    aria-label="Fg Group"
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
                    <h2 className="h2-fs">About Sweet Potato Smoothie</h2>
                  </div>
                  <p>
                    A Perfect Thing To Have On Your Fast And Dinner So That You
                    Can Get All The Necessary Nutrients In Your Diet, here is a
                    recipe videos in hindi.
                  </p>
                  <p>
                    This Sweet Potato smoothie recipies is a sound breakfast
                    choice, made with a cooked smoothie for weightloss and
                    mitigating turmeric, and ginger. It suggests a flavor like a
                    pumpkin pie in a glass!
                  </p>
                  <p>
                    In the wake of testing such countless Instant Pot Sweet
                    Potatoes, my cooler has been loaded up with extras! Cooked
                    sweet potato smoothie for weight gain adds a velvety
                    richness to the last smoothie, in addition to a dash of
                    normally sweet flavor, so you don't require as much organic
                    product or one more sugar to get a pie-like flavor.
                  </p>
                  <p>
                    Adding a yam smoothie for weight gain adds additional
                    nourishment to your morning! Here is a portion of my
                    cherished things about them.
                  </p>
                  <p>
                    They're stacked with beta-carotene, a cancer prevention
                    agent that is thought to advance eye wellbeing.
                  </p>
                  <p>
                    They might assist with helping invulnerability, on account
                    of that beta-carotene being changed over to Vitamin A, which
                    is basic to a sound safe framework.
                  </p>
                  <p>
                    They contain both dissolvable and insoluble fiber.
                    Fiber-rich eating regimens might assist with bringing down
                    the danger of colon malignant growth and obstruction, and
                    may likewise assist with advancing generally stomach
                    wellbeing.
                  </p>
                  <p>
                    What I particularly love about cooked yam is that it mixes
                    effectively into a smoothie, regardless of whether you have
                    a high-velocity blender. My youngsters can't determine
                    whether I add a piece to my go-to smoothie formula for
                    youngsters.
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
                            <p>35 grm</p>
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
                            <p>45 grm</p>
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
                            <p>13 grm</p>
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
                            "/assets/images/img/sweetpotato.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">Boiled Sweet Potato</h2>
                          <h2 className="h6-fs">50 grm</h2>
                        </div>
                      </li>
                      <li>
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/peanut.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">peanut butter</h2>
                          <h2 className="h6-fs">2 tablespoon</h2>
                        </div>
                      </li>
                      <li>
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/wheychocolate.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">Chocolate Whey</h2>
                          <h2 className="h6-fs">1 scoop</h2>
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
                            "/assets/images/img/honey.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">honey</h2>
                          <h2 className="h6-fs">1 teaspoon</h2>
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
                          <h2 className="h5-fs">Milk</h2>
                          <h2 className="h6-fs">300 ml</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="Info">
                    <h2 className="h2-fs">Directions</h2>
                  </div>
                  <div className="Grocery1 float-left">
                    <ul>
                      <li>Add Sweet Potato To The Mixing Jar</li>
                      <li>Add One Scoop Of Whey Protein To The Same Jar</li>
                      <li>Add 2 Tabsp peanut butter In The Jar</li>
                      <li>Add 300 Ml Milk Blend It Well</li>
                      <li>Add 1 tbsp honey</li>
                    </ul>
                  </div>
                  <div className="Info">
                    <h2 className="h2-fs">Benefits of Sweet Potato Smoothie</h2>
                  </div>
                  <div className="Grocery2 float-left">
                    <ol>
                      <li>Easy to be prepared</li>
                      <li>Less Time Consuming takes approximately 5 Mins</li>
                      <li>Handy smoothie</li>
                      <li>best breakfast weight loss recipe</li>
                      <li>
                        Works universally as Breakfast, Post or Pre-workout as
                        well
                      </li>
                      <li>Healthy supplement for your body</li>
                      <li>Handy ingredients</li>
                      <li>300 ml Per serving for an Individual</li>
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

export default SweetPotatoSmoothie;
