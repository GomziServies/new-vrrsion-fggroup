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

function OrangeProteinSmoothie() {
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
        <title>Orange Smoothie Recipe | Best Stress Buster Smoothie | FG Meals</title>
        <meta name="description" content="A healthy snack and perfect starter drink for your busy schedule. Healthy Orange smoothie also works as the best stress buster." />
        <meta name="keyword" content="" />
        <meta property="og:title" content="Orange Smoothie Recipe | Best Stress Buster Smoothie | FG Meals" />
        <meta property="og:description" content="A healthy snack and perfect starter drink for your busy schedule. Healthy Orange smoothie also works as the best stress buster." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/recipe/orange-protein-smoothie" />
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
                        "/assets/images/img/orange-smoothie.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="ply3">
                      <a aria-label="Fg Group"
                        className="custom"
                        onClick={() => openVideoModal("6dQuWoMEezA")}
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
                  <h1>Orange Smoothie</h1>
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
                    <h2 className="h2-fs">About Orange Smoothie</h2>
                  </div>
                  <p>
                    Orange smoothie not only gives you the flavor of the fruit
                    but it gives you a punch of protein with the fruit. A
                    healthy snack and perfect starter drink for your busy
                    schedule.
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
                            <p>25 grm</p>
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
                            <p>20g</p>
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
                            <p>05g</p>
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
                            "/assets/images/img/orangepulp.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">Orange Pulp</h2>
                          <h2 className="h6-fs">1 tablespoon</h2>
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
                          <h2 className="h5-fs">Greek Yogurt</h2>
                          <h2 className="h6-fs">2 tablespoon</h2>
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
                          <h2 className="h6-fs">250 ml</h2>
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
                            "/assets/images/img/whey.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">vanilla protein</h2>
                          <h2 className="h6-fs">1 tablespoon</h2>
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
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">Cinnamon Powder</h2>
                          <h2 className="h6-fs">1 teaspoon</h2>
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
                        Add 1 tabsp orange pulp in the mixing jar to add the
                        pulpy flavor of orange
                      </li>
                      <li>
                        2 tabsp of greek yogurt to add the thickness in the
                        smoothie
                      </li>
                      <li>
                        250 ml of milk in the same jar to give it the shape of
                        the well defining look
                      </li>
                      <li>
                        1 tabsp vanilla protein for your taste buds and body
                      </li>
                      <li>
                        1 teaspoon of cinnamon powder to bring up that spiced up
                        little flavor.
                      </li>
                      <li>
                        And Here is Your orange smoothie ready to be consumed
                      </li>
                    </ul>
                  </div>
                  <div className="Info">
                    <h2 className="h2-fs">Benefits of Orange smoothie</h2>
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

export default OrangeProteinSmoothie;
