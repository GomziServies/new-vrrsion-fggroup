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

function ProteinMakhanaBhel() {
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
        <title>Healthy Snack for Weightloss - Makhana Bhel Recipe | FG Meals</title>
        <meta name="description" content="Makhana Bhel, an Indian snack that is sure to tantalize your taste buds! This low-calorie snack is light on the tummy and tastes delicious on your tongueThis sprout salad recipe is quite easy to prepare and can be served as a side dish with your lunch or dinner meal. Best meal if your goal is weight loss." />
        <meta name="keyword" content="" />
        <meta property="og:title" content="Healthy Snack for Weightloss - Makhana Bhel Recipe | FG Meals" />
        <meta property="og:description" content="Makhana Bhel, an Indian snack that is sure to tantalize your taste buds! This low-calorie snack is light on the tummy and tastes delicious on your tongueThis sprout salad recipe is quite easy to prepare and can be served as a side dish with your lunch or dinner meal. Best meal if your goal is weight loss." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/recipe/protein-makhana-bhel" />
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
                        "/assets/images/img/makhana-bhel.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="ply3">
                      <a aria-label="Fg Group"
                        className="custom"
                        onClick={() => openVideoModal("xXs2uLVyhV0")}
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
                  <h1>makhana bhel</h1>
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
                    <h2 className="h2-fs">About makhana bhel</h2>
                  </div>
                  <p>
                    Makhana bhel is the perfect one to make your cravings to eat
                    unhealthy junk food in a healthy way that is easy to make
                    and easily accessible with healthy meal weight loss.
                  </p>
                  <p>
                    Makhanas area unit popularly called PhoolMakhana, Lotus
                    Seeds, Fox Nuts, EuryaleFerox, and mythical creature barmy.
                    Makhana is an associate degree aquatic crop and is generally
                    cultivated in wet and muddy lands of Asian countries. The
                    Republic of India is that the sole country wherever makhana
                    is cultivated as a crop, primarily in the Northern state and
                    a few components of state and state. the state accounts for
                    over eighty-five percent of the makhana made within the
                    country.
                  </p>
                  <p>
                    The seeds grow on the leaf in an exceedingly lake or ideally
                    in stagnant water. Collected seeds area unit then washed and
                    preserved for some of the hours. when they dry up, they area
                    unit|they're cooked in an exceedingly pan at high flame and
                    so hit straightaway so the black shells are broken and white
                    puff pops out
                  </p>
                  <p>
                    MakhanaBhel, an associate degree Indian snack that's
                    absolute to twit your style buds! This low-calorie snack is
                    lightweight on the stomach and tastes delicious to your roof
                    of the mouth. Makhanas may be a super nourishing food to
                    include in your daily diet. MakhanaBhel is that an excellent
                    healthy snack to incorporate in your daily regime and
                    acquire the foremost like Makhanas. I prefer to take
                    pleasure in this as a dish for lunch rather than a snack,
                    then I will have an even bigger portion of this delicious
                    MakhanaBhel. poke into it with me!
                  </p>
                  <div className="Info">
                    <h2 className="h2-fs">Benefits of Makhana</h2>
                  </div>
                  <div className="Grocery1 float-left">
                    <ul>
                      <li>
                        Makhana is a good source of protein and fiber, along
                        with micronutrients like calcium, magnesium, iron, and
                        phosphorus.
                      </li>
                      <li>
                        Makhana is a good source of protein and fiber, along
                        with micronutrients like calcium, magnesium, iron, and
                        phosphorus.
                      </li>
                      <li>
                        Several animal studies show that makhana extract could
                        help improve blood sugar management, but more human
                        research is needed.
                      </li>
                      <li>
                        Makhana is rich in protein and fiber, which may be
                        beneficial for weight loss and fat loss.
                      </li>
                      <li>
                        Makhana is rich in antioxidants and contains several
                        amino acids that may have anti-aging properties, such as
                        helping promote skin elasticity and skin health.
                      </li>
                      <li>
                        Some animal studies have found that makhana extract
                        could reduce cholesterol and triglyceride levels to
                        improve heart health.
                      </li>
                    </ul>
                  </div>
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
                            <p>09 grm</p>
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
                            <p>02 grm</p>
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
                            "/assets/images/img/roastedmakhana.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">roasted makhana</h2>
                          <h2 className="h6-fs">30 grm</h2>
                        </div>
                      </li>
                      <li>
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/bellpepper.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">bell peppers</h2>
                          <h2 className="h6-fs">1 cup</h2>
                        </div>
                      </li>
                      <li>
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/lemon.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">lemon</h2>
                          <h2 className="h6-fs">as per test</h2>
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
                            "/assets/images/img/onion.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">onion</h2>
                          <h2 className="h6-fs">1 cup</h2>
                        </div>
                      </li>
                      <li>
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/chatmasala.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">Chat Masala</h2>
                          <h2 className="h6-fs">for flavoring</h2>
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
                        Take roasted makhanas prepared in butter, Chaat masala,
                        and black pepper in a bowl.
                      </li>
                      <li>Add chopped bell peppers to the same bowl.</li>
                      <li>Time to add chopped onions to the above mixture.</li>
                      <li>
                        Furthermore you can add chaat masala as per your taste
                        and quantity.
                      </li>
                    </ul>
                  </div>
                  <div className="Info">
                    <h2 className="h2-fs">Benefits of makhana bhel</h2>
                  </div>
                  <div className="Grocery2 float-left">
                    <ol>
                      <li>Easy to be prepared</li>
                      <li>healthy meal weight loss</li>
                      <li>Less Time Consuming takes approximately 10 Mins</li>
                      <li>Fewer ingredients and easily available material</li>
                      <li>Works as a healthy snacking for you</li>
                      <li>Healthy supplement for your body</li>
                      <li>Less in Fat Quantity</li>
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

export default ProteinMakhanaBhel;
