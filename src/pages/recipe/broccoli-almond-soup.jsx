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

function BroccoliAlmondSoup() {
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
        <title>Broccoli Almond Soup Recipe | FG Meals</title>
        <meta name="description" content="The Broccoli spinach almond soup recipe is a wholesome soup packed with nutrients. Start your day with healthy Broccoli & Almond Soup." />
        <meta name="keyword" content="vegetable recipe soup, soup of broccoli, recipe for soup vegetarian, broccoli soup almond, recipes for broccoli soup" />
        <meta property="og:title" content="Broccoli Almond Soup Recipe | FG Meals" />
        <meta property="og:description" content="The Broccoli spinach almond soup recipe is a wholesome soup packed with nutrients. Start your day with healthy Broccoli & Almond Soup." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/recipe/broccoli-almond-soup" />
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
                        "/assets/images/img/broccoli-paneer-soup.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="ply3">
                      <a
                        className="custom"
                        onClick={() => openVideoModal("vrqx5D6h8xU")} aria-label="Fg Group"
                      >
                        <i
                          className="far fa-play-circle"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 w">
                <div className="tabata d-inline-block">
                  <h1>broccoli almond soup</h1>
                </div>
                <div className="d-inline-block float-right resi">
                  <a
                    className="mr-2"
                    onclick="recipeLike('60767d71e21c04105040dd9e',this)" aria-label="Fg Group"
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
                      <b>35 Min</b>
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
                  <h2 className="h2-fs">About broccoli almond soup</h2>
                </div>
                <p>
                  Make your diet more tasteful and healthy with this amazing
                  alternative. If you want to have something tasteful and
                  delighting while making your healthy lifestyle here is the
                  best option for weight loss diet for vegetarians.
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
                          <p>20 grm</p>
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
                          <p>10 grm</p>
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
                          <p>45 grm</p>
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
                          "/assets/images/img/butter.webp"
                        }
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">butter</h2>
                        <h2 className="h6-fs">2 tablespoon</h2>
                      </div>
                    </li>
                    <li>
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/ghee.webp"
                        }
                        width="90px"
                        height="90px"
                        alt="fggroup"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">ghee</h2>
                        <h2 className="h6-fs">2 tablespoon</h2>
                      </div>
                    </li>
                    <li>
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/broccoli.webp"
                        }
                        width="90px"
                        height="90px"
                        alt="fggroup"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">broccoli</h2>
                        <h2 className="h6-fs">50 gram</h2>
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
                          "/assets/images/img/paneer.webp"
                        }
                        width="90px"
                        height="90px"
                        alt="fggroup"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">paneer</h2>
                        <h2 className="h6-fs">50 gram</h2>
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
                        <h2 className="h5-fs">14 Almond Milk</h2>
                        <h2 className="h6-fs">100 ml</h2>
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
                        <h2 className="h6-fs">2 teaspoon</h2>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="Info">
                  <h2 className="h2-fs">Directions</h2>
                </div>
                <div className="Grocery2 float-left">
                  <ol>
                    <li>Add butter and ghee to the Pan.</li>
                    <li>add green chili-ginger pest 1 tabsp.</li>
                    <li>Add broccoli to the same pan and Saute it well.</li>
                    <li>
                      Add 50 grams Panner in the same pan and saute it well with
                      broccoli.
                    </li>
                    <li>Time to add 14 almonds milk.</li>
                    <li>Grind the mixture well.</li>
                    <li>
                      Boil the mixture and add cinnamon powder and salt as per
                      test.
                    </li>
                    <li>And Here is your broccoli paneer soup.</li>
                  </ol>
                </div>
                <div className="Info">
                  <h2 className="h2-fs">Benefits of broccoli almond soup</h2>
                </div>
                <div className="Grocery2 float-left">
                  <ol>
                    <li>Easy to be prepared</li>
                    <li>Less Time Consuming takes approximately 5 Mins</li>
                    <li>Healthy for all</li>
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

export default BroccoliAlmondSoup;
