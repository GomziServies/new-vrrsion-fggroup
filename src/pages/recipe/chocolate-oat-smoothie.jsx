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

function ChocolateOatSmoothie() {
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
        <title>Chocolate Oats Smoothie Recipe | FG Meals</title>
        <meta name="description" content="With the taste of chocolate, this oatmeal smoothie becomes the best choice as a breakfast or post-workout drink. Try this tasty chocolate oats smoothie." />
        <meta name="keyword" content="weight loss from smoothies, recipe smoothies for weight loss, healthy smoothie breakfast, smoothie for gain weight, weight lose smoothie recipes" />
        <meta property="og:title" content="Chocolate Oats Smoothie Recipe | FG Meals" />
        <meta property="og:description" content="With the taste of chocolate, this oatmeal smoothie becomes the best choice as a breakfast or post-workout drink. Try this tasty chocolate oats smoothie." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/recipe/chocolate-oat-smoothie" />
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
                        "/assets/images/img/chocolate-oats-smoothie.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="ply3">
                      <a
                        className="custom"
                        onClick={() => openVideoModal("82wi3aJST_U")} aria-label="Fg Group"
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
                  <h1>Chocolate Oats Protein Smoothie</h1>
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
                  <h2 className="h2-fs">About Chocolate Oats Protein Smoothie</h2>
                </div>
                <p>
                  Who does not love chocolate? additionally, once it involves
                  supermolecule here is that the best combination for your
                  breakfast, here is the recipe smoothies for weight loss.
                </p>
                <p>
                  {" "}
                  This easy, healthy breakfast chocolate overnight oats smoothie
                  is formed with banana, almond butter, oatmeal, flaxseed, and a
                  scoop of chocolate supermolecule powder. It's such a
                  straightforward, healthy smoothie breakfast or snack plan. The
                  formula is vegetarian, gluten-free, delicious, and prepared in
                  five minutes, and best for Weight loss from smoothies.
                </p>
                <p>
                  This easy, healthy chocolate long oats smoothie is formed with
                  banana, almond butter, oatmeal, flaxseed, and a scoop of
                  chocolate supermolecule powder. It's such a straightforward,
                  healthy breakfast smoothie or snack plan. The formula is
                  vegetarian, gluten-free, delicious, and prepared in five
                  minutes.
                </p>
                <p>
                  {" "}
                  The main factor that this smoothie is just about forever has
                  these ingredients reachable & promotes weight loss from
                  smoothies. I keep an enormous stash of frozen, sliced bananas
                  in my Deepfreeze and almond butter, flax seeds, and vegetarian
                  supermolecule powder area unit larder staples on behalf of me.
                  The frozen bananas area unit is thus key! they create
                  smoothies super frothy, thick, and creamy.
                </p>
                <p>
                  This smoothie will simply be created nut-free! merely use oat
                  or soy-based milk, and swap in spread or pumpkin seed butter
                  for the almond. Also, if you wish this smoothie, I bet you'll
                  even be into my spread Vanilla inexperienced Shake, another
                  delicious breakfast smoothie option!
                </p>
                <p></p>
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
                          <p>30 grm</p>
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
                          <p>35 grm</p>
                          <span>Carbs</span>
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
                          "/assets/images/img/darkchocolarte.webp"
                        }
                        width="90px"
                        height="90px"
                        alt="fggroup"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Dark Chocolate</h2>
                        <h2 className="h6-fs">2 pies</h2>
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
                        <h2 className="h5-fs">Chocolate Whey Protein</h2>
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
                          "/assets/images/img/oats.webp"
                        }
                        width="90px"
                        height="90px"
                        alt="fggroup"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Oats</h2>
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
                  </ul>
                </div>
                <div className="Info">
                  <h2 className="h2-fs">Directions</h2>
                </div>
                <div className="Grocery1 float-left">
                  <ul>
                    <li>Grind the dark chocolate for smaller pieces</li>
                    <li>
                      Add that in the mixing jar along with Chocolate whey
                      protein
                    </li>
                    <li>Add oats in the chocolaty mixing jar</li>
                    <li>And finally, add 250 ml of milk</li>
                    <li>
                      Blend it well and here is your smoothie ready to be
                      consumed
                    </li>
                  </ul>
                </div>
                <div className="Info">
                  <h2 className="h2-fs">Benefits of Chocolate Oats Protein Smoothie</h2>
                </div>
                <div className="Grocery2 float-left">
                  <ol>
                    <li>Easy to be prepared</li>
                    <li>Less Time Consuming takes approximately 5 Mins</li>
                    <li>Healthy for all</li>
                    <li>best Oats Recipes For Weight Loss.</li>
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
      </section>
      <FgmealsFooter />
    </>
  );
}

export default ChocolateOatSmoothie;
