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

function VegetableSoup() {
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
        <title>Easy Homemade Vegetable Soup Recipe | FG Meals</title>
        <meta
          name="description"
          content="This healthy homemade vegetable soup recipe is full of veggies. It's easy to make and good for you, too! Vegan, vegetarian and gluten-free."
        />
        <meta name="keyword" content="" />
        <meta
          property="og:title"
          content="Easy Homemade Vegetable Soup Recipe | FG Meals"
        />
        <meta
          property="og:description"
          content="This healthy homemade vegetable soup recipe is full of veggies. It's easy to make and good for you, too! Vegan, vegetarian and gluten-free."
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta property="og:url" content="https://fggroup.in/recipe/vegetable-soup" />
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
                        "/assets/images/img/vegetable-soup.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="ply3">
                      <a
                        aria-label="Fg Group"
                        className="custom"
                        onClick={() => openVideoModal("efc8F7mMMt8")}
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
                  <h1>Vegetable soup</h1>
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
                    <h2 className="h2-fs">About Vegetable soup</h2>
                  </div>
                  <p>
                    A healthy intake that can substitute your meal when you are
                    in a hurry. Go for it helps in winters the most.
                  </p>
                  <p>
                    We're currently well and actually into the winter season,
                    the temperature has born, the times square measure shorter
                    associate degreed suddenly dish doesn't look like such an
                    appealing lunch choice which soup is best for cold. It's
                    time to motivate some soup! it should surprise you to listen
                    to that not solely square measure soups are an excellent
                    choice nutritionally however bound styles of soup have
                    additionally been proved to assist some recipes for
                    vegetable soup that support weight loss.
                  </p>
                  <p>
                    In specific, mixed vegetable soup squares measure an
                    excellent choice nutritionally as they mix a high nutrient
                    density with a coffee energy density - this suggests that we
                    tend to get innumerable key nutrients as well as vitamins
                    and minerals for comparatively few calories. At a time
                    wherever foods with a high-energy density and low-nutrient
                    density like breadstuff, snack foods, sugar-based drinks,
                    and high-fat quick foods dominate our intake, a low-calorie
                    choice that fills may be a far better choice for optimum
                    health and vegetarian weight loss soup are in the trend.
                  </p>
                  <p>
                    Studies have repeatedly shown that once diners consume a
                    low-calorie vegetable-based soup before their main meal,
                    they consume up to twenty fewer calories at a meal. the
                    rationale is easy. the majority of the, therefore, helps to
                    fill the tummy and tend to eat less. Nutritionally this is
                    often additionally useful because the nutrients found in
                    vegetables as well as several soluble vitamins like
                    B-complex vitamin, C, K furthermore as dietary fiber and a
                    variety of minerals, additionally facilitate to manage the
                    channel and make sure that we tend to get the number of key
                    nutrients we'd like daily.
                  </p>
                  <p>
                    <b>The benefits of minestrone square measure as follows</b>
                  </p>
                  <div className="Grocery1">
                    <ul>
                      <li>Aids In Weight Loss</li>
                      <li>Promotes Digestion</li>
                      <li>The rich supply of Fluids</li>
                      <li>Powerhouse Of Antioxidants</li>
                      <li>Strengthens Bones</li>
                      <li>Preserves Nutrition Of Veggies</li>
                      <li>Promotes viscus Functioning</li>
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
                            <p>3 grm</p>
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
                            <p>10 grm</p>
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
                            <p>01 grm</p>
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
                            "/assets/images/img/carrort.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">Carrot</h2>
                          <h2 className="h6-fs">1 small size</h2>
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
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">Cabbage</h2>
                          <h2 className="h6-fs">1/4</h2>
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
                            "/assets/images/img/peas.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">Peas</h2>
                          <h2 className="h6-fs">1 small cup</h2>
                        </div>
                      </li>
                      <li>
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/herbs.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">Indian Herbs</h2>
                          <h2 className="h6-fs">As per test</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="Info">
                    <h2 className="h2-fs">Directions</h2>
                  </div>
                  <div className="Grocery1 float-left">
                    <ul>
                      <li>Blend the vegetables</li>
                      <li>Boil Vegetables 10-15 mins</li>
                      <li>Add some Indian Herbs</li>
                      <li>
                        And Here is Your Vegetable soup ready to be consumed
                      </li>
                    </ul>
                  </div>
                  <div className="Info">
                    <h2 className="h2-fs">Benefits of Vegetable soup</h2>
                  </div>
                  <div className="Grocery2 float-left">
                    <ol>
                      <li>Easy to be prepared</li>
                      <li>Less Time Consuming takes approximately 25 Mins</li>
                      <li>Healthy for all</li>
                      <li>Works universally</li>
                      <li>Healthy supplement for your body</li>
                      <li>Handy ingredients</li>
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

export default VegetableSoup;
