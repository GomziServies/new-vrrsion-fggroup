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

function BananaChocolateSmoothie() {
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
        <title>Banana Chocolate Smoothie | Best Weight Loss Breakfast Recipe</title>
        <meta name="description" content="Banana Chocolate Smoothie is easy to prepare and can be the best breakfast meal alternative for weight loss. This smoothie is rich in macro-nutrients." />
        <meta name="keyword" content="" />
        <meta property="og:title" content="Banana Chocolate Smoothie | Best Weight Loss Breakfast Recipe" />
        <meta property="og:description" content="Banana Chocolate Smoothie is easy to prepare and can be the best breakfast meal alternative for weight loss. This smoothie is rich in macro-nutrients." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/recipe/banana-chocolate-smoothie" />
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
                        "/assets/images/img/banana-chocolate-smoothie.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="ply3">
                      <a
                        className="custom"
                        onClick={() => openVideoModal("TGmVURDt5Ck")} aria-label="Fg Group"
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
                  <h1>Banana Chocolate Smoothie</h1>
                </div>
                <div className="d-inline-block float-right resi">
                  <a
                    className="mr-2"
                    onclick="recipeLike('600e5b2099180b31447a0ef9',this)"
                    id="a_likeRef" aria-label="Fg Group"
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
                  <h2 className="h2-fs">About Banana Chocolate Smoothie</h2>
                </div>
                <p>
                  This smoothie is easy to prepare and one can have the rich
                  taste of chocolate here within so try it, it is one of our
                  special taste list{" "}
                </p>
                <p>
                  Who doesn't love chocolate smoothie for weight loss? also when
                  it comes to protein here is the best combination for your
                  breakfast, here is the recipe for chocolate smoothie
                </p>
                <p>
                  This easy, healthy ecipe for banana smoothie breakfast is made
                  with banana, almond butter, rolled oats, flaxseed, and a scoop
                  of chocolate protein powder. It's such an easy, healthy
                  breakfast smoothie or snack idea. The recipe is vegan,
                  gluten-free, delicious, and ready in 5 minutes, and best for
                  Weight loss from smoothies.{" "}
                </p>
                <p>
                  This easy, healthy chocolate overnight oats smoothie is made
                  with banana, almond butter, rolled oats, flaxseed, and a scoop
                  of chocolate protein powder. It's such an easy, healthy
                  breakfast smoothie or snack idea. The recipe is vegan,
                  gluten-free, delicious, and ready in 5 minutes.
                </p>
                <p>
                  The main thing that this smoothie is pretty much always has
                  these ingredients on hand. I keep a big stash of frozen,
                  chopped bananas in my freezer, and almond butter, flax seeds,
                  and vegan protein powder are pantry staples for me. The frozen
                  bananas are so key! They make smoothies super frothy, thick,
                  and creamy.
                </p>
                <p>
                  This smoothie can easily be made nut-free! Simply use oat or
                  soy-based milk, and swap in tahini or pumpkin seed butter for
                  the almond. Also, if you like this smoothie, I bet you'll also
                  be into my Peanut Butter Vanilla Green Shake, another
                  delicious breakfast smoothie option!
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
                          <p>15 grm</p>
                          <span>Protein</span>
                        </div>
                      </li>
                      <li>
                        <div>
                          <LazyLoadImage
                            className="lazy mr-3"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/yellow.webp"
                            }
                            alt="fggroup"
                          />
                          <p>75 grm</p>
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
                          <p>08 grm</p>
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
                          "/assets/images/img/darkchocolarte.webp"
                        }
                        width="90px"
                        height="90px"
                        alt="fggroup"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Dark Chocolate</h2>
                        <h2 className="h6-fs">1/2 tablespoon</h2>
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
                </div>
                <div className="Info">
                  <h2 className="h2-fs">Directions</h2>
                </div>
                <div className="Grocery2 float-left">
                  <ol>
                    <li>
                      Add 1/2 banana to start with the better option in the jar
                    </li>
                    <li>1/2 tabsp of Dark chocolate</li>
                    <li>Add milk 250 ml and mix it up</li>
                    <li>
                      And Here is Your banana chocolate smoothie ready to be
                      consumed
                    </li>
                  </ol>
                </div>
                <div className="Info">
                  <h2 className="h2-fs">Benefits of Banana Chocolate Smoothie</h2>
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

export default BananaChocolateSmoothie;
