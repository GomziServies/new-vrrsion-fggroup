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

function VegetablePulav() {
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
        <title>Best Lunch Recipe For Weightloss | Veg Pulav Recipe | FG Meals</title>
        <meta name="description" content="Have this tasty veg pulao during lunch, this recipe will fill your stomach and also will help you lose weight faster. Best weight loss recipe." />
        <meta name="keyword" content="matter pulav, pulav kaise banate hain, pulav calories, pulav recipes in hindi, how to make pulav in hindi, pulav vs biryani" />
        <meta property="og:title" content="Best Lunch Recipe For Weightloss | Veg Pulav Recipe | FG Meals" />
        <meta property="og:description" content="Have this tasty veg pulao during lunch, this recipe will fill your stomach and also will help you lose weight faster. Best weight loss recipe." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/recipe/vegetable-pulav" />
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
                        "/assets/images/img/veg-pulav-recipe.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="ply3">
                      <a aria-label="Fg Group"
                        className="custom"
                        onClick={() => openVideoModal("gnj56jaMidI")}
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
                  <h1>broccoli almond soup</h1>
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
                    <img
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
                      <b>30 Min</b>
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
                  Serves as the best source of carbs if you are bulking. Easy to
                  make and can replace your dinner or lunch easily in a healthy
                  way. so, here we are providing you indian recipes veg pulao
                  video / biryani recipe videos
                </p>
                <p>
                  I love blended vegetable matter pulav, so does my family. It's
                  one of my go-to plans for our regular suppers, ends of the
                  week, and potlucks too. I have straightforward pulav recipes
                  on my videos and a couple of different ones that are useful
                  for weight loss vegetables recipe of pulav. I will interface
                  them down beneath.
                </p>
                <p>
                  All of you know the amount I love flavors and zest powders.
                  Each time I go to food, I invest some energy in the zest
                  segment to see what's going on and check the instant masalas
                  and fixings. At the point when I saw the veg pulao masala, I
                  moved captivated and got it immediately to attempt. Its entire
                  flavors ground coarsely. Then, at that point, I took a stab at
                  making a comparable masala, and I should say I prevailed in
                  that.
                </p>
                <p>Natively constructed veg pulao masala</p>
                <p>
                  This veg pulao is with my basic custom-made pulao masala. It's
                  anything but a muddled one. We should simply cook the flavors
                  rapidly and grind them coarsely. You can utilize it for
                  different curries and sauces rather than garam masala that are
                  low in pulav calories.
                </p>
                <p>Instructions to make vegetable pulao in Instant Pot</p>
                <p>
                  <b>Set up the pulao masala-</b>
                </p>
                <p>
                  Heat a container and when the skillet is hot, add the green
                  cardamom, cloves, star anise, peppercorns, cinnamon piece, and
                  dry meal for 30 to 45 seconds. We don't have to boil for quite
                  a while. We are cooking here drawing out the flavor. Allow it
                  just a little and drudgery it coarsely and put it away. You
                  can make it well ahead and store it in an impermeable holder
                  too.
                </p>
                <p>
                  Set the Instant Pot in saute mode and when the showcase shows
                  hot, add the oil. Hang tight for 20 seconds and afterward add
                  the shah jeera-Fry for 20 seconds. Then, at that point, add
                  the green chilies and slashed onions. Saute until the onions
                  turn delicate for 3 to 4 minutes.
                </p>
                <p>
                  Then, at that point, add the slashed tomatoes and mint
                  leaves-Cook for two minutes.
                </p>
                <p>
                  Presently add the blended vegetables, ground pulao masala, and
                  salt.
                </p>
                <div className="Info">
                  <h2 className="h2-fs">Nutrition Info. (per serving)</h2>
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
                          <p>05 grm</p>
                          <span>Protein</span>
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
                          <p>35 grm</p>
                          <span>Carbohydrates</span>
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
                            alt="fggroup"
                          />
                          <p>06 grm</p>
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
                          "/assets/images/img/rice.webp"
                        }
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Boiled rice</h2>
                        <h2 className="h6-fs">50 grm</h2>
                      </div>
                    </li>
                    <li>
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/onion.webp"
                        }
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Onion</h2>
                        <h2 className="h6-fs">1</h2>
                      </div>
                    </li>
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
                        <h2 className="h5-fs">Carrot</h2>
                        <h2 className="h6-fs">1</h2>
                      </div>
                    </li>
                    <li>
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/cabbage.webp"
                        }
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Cabbage</h2>
                        <h2 className="h6-fs">30 grm</h2>
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
                          "/assets/images/img/cauliflower.webp"
                        }
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">cauliflower</h2>
                        <h2 className="h6-fs">30 grm</h2>
                      </div>
                    </li>
                    <li>
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/peas.webp"
                        }
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Peas</h2>
                        <h2 className="h6-fs">30 grm</h2>
                      </div>
                    </li>
                    <li>
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/chillipaste.webp"
                        }
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Green chili paste</h2>
                        <h2 className="h6-fs">1 tbsp</h2>
                      </div>
                    </li>
                    <li>
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/img/oil.webp"
                        }
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Oil</h2>
                        <h2 className="h6-fs">3 tbsp</h2>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="Info">
                  <h2 className="h2-fs">Directions</h2>
                </div>
                <div className="Grocery2 float-left">
                  <ol>
                    <li>Boil vegetables for 10-15 mins</li>
                    <li>Add 2-3 spoon of oil</li>
                    <li>
                      Add onion and chilli paste in the oil and mix it well
                    </li>
                    <li>Add all the vegetables and mix them well</li>
                    <li>Add boiled rice in the saute pan</li>
                    <li>And your pulav is ready to eat</li>
                  </ol>
                </div>
                <div className="Info">
                  <h2 className="h2-fs">Benefits of Vegetable Pulav</h2>
                </div>
                <div className="Grocery2 float-left">
                  <ol>
                    <li>Easy to be prepared with indian recipes veg video</li>
                    <li>Less Time Consuming takes approximately 30 Mins</li>
                    <li>Healthy for all</li>
                    <li>Works universally</li>
                    <li>Healthy supplement for your body</li>
                    <li>Handy ingredients</li>
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

export default VegetablePulav;
