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

function OrangeCarrotSmoothie() {
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
        <title>Orange And Carrot Smoothie Recipe | FG Meals</title>
        <meta name="description" content="Nourished with the taste of vegetables this smoothie is just right for the fitness people out there. Try it out and fulfill your cravings for a smoothie right now." />
        <meta name="keyword" content="carrot smoothie recipes, carrot smoothie for weight loss, carrot smoothie benefits, carrot smoothie for skin" />
        <meta property="og:title" content="Orange And Carrot Smoothie Recipe | FG Meals" />
        <meta property="og:description" content="Nourished with the taste of vegetables this smoothie is just right for the fitness people out there. Try it out and fulfill your cravings for a smoothie right now." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/recipe/orange-carrot-smoothie" />
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
                        "/assets/images/img/orange-carrot-smoothie.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="ply3">
                      <a aria-label="Fg Group"
                        className="custom"
                        onClick={() => openVideoModal("ny7XIbIarJI")}
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
                  <h1>Orange Carrot Smoothie</h1>
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
                <div className="Info">
                  <h2 className="h2-fs">About Orange Carrot Smoothie</h2>
                </div>
                <p>
                  Nourished with the taste of vegetables this smoothie is just
                  right for the fitness people out there. Try it out and fulfill
                  your cravings of a smoothie right now with this easy to make
                  orange carrot smoothie.
                </p>
                <div className="Info">
                  <h2 className="h2-fs">Nutrition Info. (per serving)</h2>
                </div>
                <div className="row">
                  <div className="col-lg-9 calc">
                    <ul>
                      <li>
                        <div>
                          <LazyLoadImage
                            effect="blur"
                            className="lazy mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/blue.webp"
                            }
                            alt="fggroup"
                          />
                          <p>10 grm</p>
                          <span>Protein</span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <LazyLoadImage
                            effect="blur"
                            className="lazy mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/yellow.webp"
                            }
                            alt="fggroup"
                          />
                          <p>40 grm</p>
                          <span>Carbohydrates</span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <LazyLoadImage
                            effect="blur"
                            className="lazy mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/pink.webp"
                            }
                            alt="fggroup"
                          />
                          <p>02 grm</p>
                          <span>Fat</span>
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
                          "/assets/images/img/carrort.webp"
                        }
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Chopped carrot</h2>
                        <h2 className="h6-fs">1/2</h2>
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
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Greek yogurt</h2>
                        <h2 className="h6-fs">2 tablespoon</h2>
                      </div>
                    </li>
                    <li>
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/mangoyogurt.webp"
                        }
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Mango yogurt</h2>
                        <h2 className="h6-fs">3 tablespoon</h2>
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
                          "/assets/images/img/orangepulp.webp"
                        }
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">orange squash</h2>
                        <h2 className="h6-fs">1/2 tablespoon</h2>
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
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">milk</h2>
                        <h2 className="h6-fs">200 ml</h2>
                      </div>
                    </li>
                    <li>
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/cinnamon.webp"
                        }
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">cinnamon powder</h2>
                        <h2 className="h6-fs">1 teaspoon</h2>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="Info">
                  <h2 className="h2-fs">Directions</h2>
                </div>
                <div className="Grocery2 float-left">
                  <ol>
                    <li>Chop 1/2 carrot first</li>
                    <li>Secondly add 2 tabsp greek yogurt</li>
                    <li>
                      Now is the time to add some flavor in the smoothie so add
                      3 tabsp mango yogurt
                    </li>
                    <li>
                      Time to add Orange Squash in the smoothie so use 1/2 tabsp
                    </li>
                    <li>
                      Add milk and blend it well once it is done add 1 Tea Spoon
                      of cinnamon powder
                    </li>
                    <li>
                      And Here is Your orange carrot smoothie ready to be
                      consumed
                    </li>
                  </ol>
                </div>
                <div className="Info">
                  <h2 className="h2-fs">Benefits of orange carrot smoothie</h2>
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
      </section>

      <FgmealsFooter />
    </>
  );
}

export default OrangeCarrotSmoothie;
