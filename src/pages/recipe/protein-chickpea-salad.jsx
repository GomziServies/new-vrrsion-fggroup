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

function ProteinChickpeaSalad() {
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
        <title>Chickpea Salad Recipe | Healthy Weight Loss Recipe | FG Meals</title>
        <meta name="description" content="Chickpea Salad Recipe combines fresh vegetables including tomatoes, onions, chole with an easy homemade lemon kissed dressing. The best recipe for weight loss." />
        <meta name="keyword" content="" />
        <meta property="og:title" content="Chickpea Salad Recipe | Healthy Weight Loss Recipe | FG Meals" />
        <meta property="og:description" content="Chickpea Salad Recipe combines fresh vegetables including tomatoes, onions, chole with an easy homemade lemon kissed dressing. The best recipe for weight loss." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/recipe/protein-chickpea-salad" />
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
                        "/assets/images/img/chickpea-salad.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="ply3">
                      <a aria-label="Fg Group"
                        className="custom"
                        onClick={() => openVideoModal("Q6nNEliyKrk")}
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
                  <h1>Chickpea salad</h1>
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
                    <h2 className="h2-fs">About Chickpea salad</h2>
                  </div>
                  <p>
                    A healthy intake that can substitute your snacks of the day
                    and great in taste that will give you the bliss of wonderful
                    taste.
                  </p>
                  <p>
                    Chickpea Salad to lose weight consolidates each of my
                    beloved new vegetables in a single delectable chomp.
                    Chickpeas are joined with succulent tomatoes, reviving
                    cucumbers, and rich avocados generally threw in a simple
                    natively constructed lemon kissed dressing.
                  </p>
                  <p>
                    Here are a vegetables salad recipe probably the most ideal
                    way is to incorporate chickpeas! chickpeas in salad is a
                    particularly heavenly and nutritious method for getting a
                    charge out of new summer veggies and is wonderful to make
                    ahead and appreciate for lunch!
                  </p>
                  <p>
                    I love new summery plates of mixed greens loaded up with an
                    immense assortment of items and this formula contains such
                    countless brilliant, new fixings! Invigorating cucumbers,
                    delicious diced tomatoes, fresh chime peppers, and smooth
                    rich avocados are the ideal supplement to chickpeas! Not
                    exclusively is the mix of tones and surfaces lovely, yet it
                    is likewise stacked with flavor for a powerful feast
                    prepared in not more than minutes.
                  </p>
                  <p>
                    Chickpeas are as old as beans and can be utilized
                    reciprocally in this formula.
                  </p>
                  <p>
                    Avocado: Choose a ready avocado (somewhat delicate yet not
                    very delicate). When the seed is eliminated, cut the tissue
                    into squares solidly in the skin and afterward utilize a
                    spoon to effortlessly scoop them out into a bowl. Press new
                    lemon juice over it, this adds flavor to the serving of
                    mixed greens as well as holds avocado back from becoming
                    brown.
                  </p>
                  <p>
                    New Herbs: In this chickpea salad you'll need to utilize new
                    parsley (dry parsley doesn't have a similar flavor for this
                    serving of mixed greens). You can substitute cilantro or
                    dill assuming that you'd like.
                  </p>
                  <p>
                    Veggies: Chop your veggies into scaled-down pieces and throw
                    them with the dressing. This will last days in the
                    refrigerator making for an extraordinary lunch dish!
                    Assuming you're making this early, you may run down to
                    forget about the avocado and add it not long before serving!
                  </p>
                  <p>
                    This formula is so flexible, you can substitute your beloved
                    vegetables; red pepper for green pepper, white or green
                    onion for the red onion. Adding feta cheddar makes a decent
                    variety, however since feta is very pungent itself start
                    with less salt when you add the flavors.
                  </p>
                  <p>
                    Chickpea Salad is a finished feast that is low in fat, high
                    in protein, and inconceivably delightful! A superpower salad
                    that is so fulfilling, and fun!
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
                            <p>05 grm</p>
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
                            <p>15 grm</p>
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
                            "/assets/images/img/chhole.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">Choley</h2>
                          <h2 className="h6-fs">50 grm</h2>
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
                          <h2 className="h5-fs">Onions</h2>
                          <h2 className="h6-fs">1</h2>
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
                            "/assets/images/img/tomato.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">tomato</h2>
                          <h2 className="h6-fs">1</h2>
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
                          <h2 className="h6-fs">1</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="Info">
                    <h2 className="h2-fs">Directions</h2>
                  </div>
                  <div className="Grocery1 float-left">
                    <ul>
                      <li>Use 1 cup chole and add it in the bowl</li>
                      <li>Add some Indian Herbs</li>
                      <li>Chop Onions and tomatoes</li>
                      <li>Add lemon in the bowl</li>
                      <li>mix it up well</li>
                      <li>
                        And Here is Your vegan indian recipe of chickpea salad
                        ready to be consumed
                      </li>
                    </ul>
                  </div>
                  <div className="Info">
                    <h2 className="h2-fs">Benefits of Chickpea salad</h2>
                  </div>
                  <div className="Grocery2 float-left">
                    <ol>
                      <li>Easy to be prepared</li>
                      <li>vegan indian recipe</li>
                      <li>Less Time Consuming takes approximately 20 Mins</li>
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
        </div>
      </section>
      <FgmealsFooter />
    </>
  );
}

export default ProteinChickpeaSalad;
