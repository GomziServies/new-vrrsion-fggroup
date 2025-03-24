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

function HealthyKhichdi() {
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
        <title>Healthy & Simple Vegetable Khichdi Recipe | FG Meals</title>
        <meta name="description" content="Khichdi is a delicious one-pot healthy meal of rice and lentils. It's nutritious and light on the tummy. Try this healthy khichdi." />
        <meta name="keyword" content="dal khichdi recipes, recipe for khichdi, recipe for vegetable khichdi, recipe of masala khichdi, how to make a khichdi" />
        <meta property="og:title" content="Healthy & Simple Vegetable Khichdi Recipe | FG Meals" />
        <meta property="og:description" content="Khichdi is a delicious one-pot healthy meal of rice and lentils. It's nutritious and light on the tummy. Try this healthy khichdi." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/recipe/healthy-khichdi" />
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
                        "/assets/images/img/diet-khichdi.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="ply3">
                      <a aria-label="Fg Group"
                        className="custom"
                        onClick={() => openVideoModal("iVQlUU7c7lQ")}
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
                  <h1>healthy khichdi</h1>
                </div>
                <div className="d-inline-block float-right resi">
                  <a aria-label="Fg Group"
                    className="mr-2"
                    onclick="recipeLike('60767c6ee21c04105040dd9d',this)"
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
                      <b>20 Min</b>
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
                  <h2 className="h2-fs">About healthy khichdi</h2>
                </div>
                <p>
                  Make your diet more tasteful and healthy with this amazing
                  alternative. If you want to have something light, tasty, and
                  Nutritious then here is the catch the indian recipe for
                  dinner.
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
                          <p>04 grm</p>
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
                          "/assets/images/img/ghee.webp"
                        }
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">ghee</h2>
                        <h2 className="h6-fs">1 tablespoon</h2>
                      </div>
                    </li>
                    <li>
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/cumminseeds.webp"
                        }
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Cummin Seeds</h2>
                        <h2 className="h6-fs">1 teaspoon</h2>
                      </div>
                    </li>
                    <li>
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/cloves.webp"
                        }
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">cloves</h2>
                        <h2 className="h6-fs">2 to 3 pies</h2>
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
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">broccoli</h2>
                        <h2 className="h6-fs">1 cup</h2>
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
                          "/assets/images/img/cinnamon.webp"
                        }
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Cinnamon</h2>
                        <h2 className="h6-fs">1 pies</h2>
                      </div>
                    </li>
                    <li>
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/babycorn.webp"
                        }
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Baby Corn</h2>
                        <h2 className="h6-fs">1 cup</h2>
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
                        alt="fggroup"
                        width="90px"
                        height="90px"
                      />
                      <div className="d-inline-block ml-2">
                        <h2 className="h5-fs">Bell Pepper</h2>
                        <h2 className="h6-fs">2 cup</h2>
                      </div>
                    </li>
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
                        <h2 className="h5-fs">Moong Daal & rise</h2>
                        <h2 className="h6-fs">1 cup</h2>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="Info">
                  <h2 className="h2-fs">Directions</h2>
                </div>
                <div className="Grocery2 float-left">
                  <ol>
                    <li>Add 1 tablespoon ghee to the Pressure Cooker.</li>
                    <li>
                      Add 1 Tablespoon cloves, Cinnamon, and Cummin Seeds.
                    </li>
                    <li>Add broccoli in the ghee and other ingredients.</li>
                    <li>Followed by baby corn in the same pressure cooker.</li>
                    <li>Add bell pepper for the same.</li>
                    <li>And One bowl of moong daal & rise.</li>
                    <li>Add the spices according to the flavor you want.</li>
                    <li>And Here is your Diet Khichdi ready to be consumed.</li>
                  </ol>
                </div>
                <div className="Info">
                  <h2 className="h2-fs">Benefits of Vegetable Pulav</h2>
                </div>
                <div className="Grocery2 float-left">
                  <ol>
                    <li>Very Nutritional</li>
                    <li>Less headache of making food</li>
                    <li>Works universally as a light healthy dinner</li>
                    <li>Healthy indian recipe for dinner</li>
                    <li>Handy and Healthy ingredients</li>
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

export default HealthyKhichdi;
