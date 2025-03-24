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

function BlueberryProteinSmoothie() {
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
        <title>Blueberries Spinach Banana Smoothie | Best Refreshing Smoothie</title>
        <meta name="description" content="This plant-based blueberry spinach banana smoothie is the perfect blend of nutritions and gives a gently sweet and creamy taste. Try this amazing and refreshing smoothie." />
        <meta name="keyword" content="blueberry smoothie to lose weight, recipe for blueberry smoothie, blueberry smoothie benefits, benefits of smoothie, blueberries smoothie" />
        <meta property="og:title" content="Blueberries Spinach Banana Smoothie | Best Refreshing Smoothie" />
        <meta property="og:description" content="This plant-based blueberry spinach banana smoothie is the perfect blend of nutritions and gives a gently sweet and creamy taste. Try this amazing and refreshing smoothie." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/recipe/blueberry-protein-smoothie" />
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
                        "/assets/images/img/bluerberries-spinach-banana-smoothie.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="ply3">
                      <a
                        className="custom"
                        onClick={() => openVideoModal("Yo0YkV_b7jA")} aria-label="Fg Group"
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
                  <h1>Blueberry Smoothie</h1>
                </div>
                <div className="d-inline-block float-right resi">
                  <a
                    className="mr-2"
                    onclick="recipeLike('600f7a0ab6868e387407a8c9',this)" aria-label="Fg Group"
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
                  <h2 className="h2-fs">About Blueberry Spinach Smoothie</h2>
                </div>
                <p>
                  Blueberry spinach smoothie is best known for its taste and
                  richness in protein. Therefore, it is the perfect blend of
                  greens and berries. Give it a shot and you are good to go.
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
                          <p>17 grm</p>
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
                          <p>25 grm</p>
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
                          <p>05 grm</p>
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
                          "/assets/images/img/banana.webp"
                        }
                        width="90px"
                        height="90px"
                        alt="fggroup"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Banana</h2>
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
                        width="90px"
                        height="90px"
                        alt="fggroup"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Greek yogurt</h2>
                        <h2 className="h6-fs">2 tbsp</h2>
                      </div>
                    </li>
                    <li>
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/beeryyougurt.webp"
                        }
                        width="90px"
                        height="90px"
                        alt="fggroup"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Blueberry yogurt</h2>
                        <h2 className="h6-fs">As per test</h2>
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
                          "/assets/images/img/spinach.webp"
                        }
                        width="90px"
                        height="90px"
                        alt="fggroup"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Spinach</h2>
                        <h2 className="h6-fs">50 grm</h2>
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
                        <h2 className="h6-fs">2 tbsp</h2>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="Info">
                  <h2 className="h2-fs">Directions</h2>
                </div>
                <div className="Grocery2 float-left">
                  <ol>
                    <li>
                      Add 1/2 banana to start with the better option in the jar
                    </li>
                    <li>2 tbsp of Greek yogurt over banana</li>
                    <li>
                      Blueberry yogurt to give the taste in a healthy way for
                      your health
                    </li>
                    <li>
                      Add 50 grm of Spinach to the above jar because it is all
                      about the greens
                    </li>
                    <li>To neutralize the taste add 2 tbsp of honey</li>
                    <li>
                      Now add 250 ml milk to make your smoothie & blend it well
                    </li>
                    <li>
                      And Here is Your Blueberry Spinach Smoothie ready to be
                      consumed
                    </li>
                  </ol>
                </div>
                <div className="Info">
                  <h2 className="h2-fs">Benefits of Blueberry Spinach Smoothie</h2>
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

export default BlueberryProteinSmoothie;
