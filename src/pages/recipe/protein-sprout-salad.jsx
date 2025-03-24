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

function ProteinSproutSalad() {
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
        <title>Sprout Salad Recipe | Best Protein Pack Salad | FG Meals</title>
        <meta name="description" content="This sprout salad recipe is quite easy to prepare and can be served as a side dish with your lunch or dinner meal. Best meal if your goal is weight loss." />
        <meta name="keyword" content="" />
        <meta property="og:title" content="Sprout Salad Recipe | Best Protein Pack Salad | FG Meals" />
        <meta property="og:description" content="This sprout salad recipe is quite easy to prepare and can be served as a side dish with your lunch or dinner meal. Best meal if your goal is weight loss." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/recipe/protein-sprout-salad" />
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
                        "/assets/images/img/sprout-salad.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="ply3">
                      <a aria-label="Fg Group"
                        className="custom"
                        onClick={() => openVideoModal("X4QwBjS7NwY")}
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
                  <h1>Sprout Salad</h1>
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
                    <h2 className="h2-fs">About Sprout Salad</h2>
                  </div>
                  <p>
                    The best source of protein as well as green vegetables
                    serves for the perfect start of your morning routine. here
                    is kick start of best indian recipes breakfast.
                  </p>
                  <p>
                    Sprouts have become progressively glorious as sprout moong
                    nutrition powerhouse. With extremely targeted biological
                    process advantages compared to consumption mature
                    vegetables, sprouts will be simply more to your table, by
                    adding them to salads, soups, sandwiches, stir-fries, cooked
                    vegetables, pasta, and smoothies. The foremost common
                    sprouts embrace broccoli, peas, watercress, mung bean,
                    grass, and alfalfa.
                  </p>
                  <p>
                    Sprouts square measure low in calories and wealthy in fiber,
                    enzymes, protein, and alternative micro-nutrients. Not many
                    folks eat them though they'll simply be bought or mature
                    reception while not requiring advanced agriculture skills.
                  </p>
                  <div className="Info">
                    <h2 className="h2-fs">Health benefits of sprout:</h2>
                  </div>
                  <div className="Grocery1">
                    <ul>
                      <li>
                        One of the best sprouts eating benefits square measure
                        simple and low-cost to grow and, as domestically mature
                        vegetables, supply extra environmental advantages by
                        avoiding pesticides, food additives, and pollution from
                        transportation.
                      </li>
                      <li>
                        they provide a strong supply of vitamins, minerals
                        antioxidants, enzymes that fight free radicals as growth
                        will increase their efficiency by twenty times or
                        additional.
                      </li>
                      <li>
                        As a result of their atomic number 8 dense, they defend
                        the body against the bacterium, virus, and abnormal cell
                        growth.
                      </li>
                      <li>
                        Soaking and growing well will increase the fiber content
                        in sprouts that facilitates weight loss because the
                        fiber binds to fat and toxins to get rid of them from
                        the body.
                      </li>
                      <li>
                        Vitamin, such as A, B, C, and E, and essential
                        carboxylic acid nutrients increase in growth and
                        minerals bind to a macromolecule, creating them
                        additional simply absorbed.
                      </li>
                      <li>
                        Sprouts basify the body and defend it from malady as
                        well as cancer.
                      </li>
                    </ul>
                  </div>
                  <p>
                    thanks to their richness in dietary fiber and low-calorie
                    content, sprouts supply a considerable facilitate in your
                    weight loss goals.
                  </p>
                  <p>
                    Sprouts Salad recipe is a solid Indian Salad where crunchy
                    sprouts are blended in with other new fixings and brightened
                    up with lemon juice and chaat masala. This is wonderful to
                    fill in as a side with your suppers or simply eat it as a
                    tidbit. This is the way to make it.
                  </p>
                  <p>
                    Protein in sprout salad is one of the most well-known Indian
                    Salads that is prominently had as a bite or served alongside
                    regular dinners, all you need to do is adding sprouts in
                    salad. It is a basic Indian Salad that is made with a blend
                    of fledglings, onions, tomatoes, cucumber, green chilies,
                    and pomegranate seeds.
                  </p>
                  <p>
                    Every one of the fixings is blended and afterward seasoned
                    with lemon and a variety of flavors to make it fiery and
                    tart.
                  </p>
                  <p>
                    Straightforward and essential, this Indian Sprouts Salad can
                    be ready in a jiffy. The main thing that requires some
                    investment is the growing of moong which should be possible
                    ahead of time and kept.
                  </p>
                  <p>
                    When you have the fledglings prepared, it will require a
                    simple 5 minutes to prepare this plate of mixed greens. You
                    can likewise pack this serving of mixed greens in your
                    Office nibble enclose and appreciate it between the dinners
                    or at whatever point the craving strikes.
                  </p>
                  <p>
                    Sprouts are stacked with supplements and in this manner, it
                    is great to remember them for your regular dinners. It is
                    additionally incredible for weight reduction, as it is
                    wealthy in protein and will keep you occupied for quite a
                    while.
                  </p>
                  <p>
                    <b>This Sprouts Salad is,</b>
                  </p>
                  <div className="Grocery1">
                    <ul>
                      <li>Solid</li>
                      <li>Fast</li>
                      <li>Low Fat</li>
                      <li>High in Protein and Fiber</li>
                      <li>Vegetarian</li>
                      <li>Gluten-Free</li>
                      <li>Ideal for a solid eating</li>
                      <li>An extraordinary side dish for ordinary suppers</li>
                      <li>Fixings</li>
                    </ul>
                  </div>
                  <p>
                    Moong Sprouts(recipe of moong sprouts) - Packed with
                    Protein, Carbs, and Fiber, this fixing is stacked with solid
                    goodness. Furthermore remembering them for servings of mixed
                    greens is the most effective way to burn through them. Aside
                    from growing moong beans, you can likewise grow different
                    vegetables to include this serving of mixed greens as well.
                  </p>
                  <p>
                    Vegetables - Along with Moong Sprouts, I have added a few
                    vegetables that add to the nourishment of this serving of
                    mixed greens. I have utilized onion, tomato, green chilies,
                    and cucumber, and the best part about is amount of protein
                    in salad, and it makes this salad stand out from other
                    salads.
                  </p>
                  <p>
                    On the off chance that you need, you can include more
                    vegetables like Carrot, Avocado, Spinach, Kale, Radish,
                    Corn, and so forth in this Bean Sprout Salad, to make it
                    filling and nutritious.
                  </p>
                  <p>
                    Pomegranate - This is discretionary, yet it adds a decent
                    sweet flavor and shading in this serving of mixed greens.
                  </p>
                  <p>
                    You can take out the pomegranate bits ahead of time and
                    store them in the cooler in a water/airproof compartment, as
                    they stay useful for 3 to 4 days. Assuming they are put
                    away, they prove to be useful in such a plate of mixed
                    greens plans.
                  </p>
                  <p>
                    Different Ingredients - Other than the previously mentioned
                    fixings, we will require lemon juice, salt, chaat masala
                    powder, dark salt, and cooked cumin powder. These fixings
                    add a tart pungent flavor to this serving of mixed greens,
                    which makes it considerably yummier.
                  </p>
                  <p>
                    You can change how much chaat masala and lemon juice
                    according as you would prefer.
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
                            <p>03 grm</p>
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
                            "/assets/images/img/moonghaal.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">Moong</h2>
                          <h2 className="h6-fs">1 cup</h2>
                        </div>
                      </li>
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
                          <h2 className="h6-fs">1/2</h2>
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
                          <h2 className="h5-fs">Onion</h2>
                          <h2 className="h6-fs">1/2</h2>
                        </div>
                      </li>
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
                          <h2 className="h5-fs">Chhole</h2>
                          <h2 className="h6-fs">1 small cup</h2>
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
                            "/assets/images/img/corriender.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">Coriander</h2>
                          <h2 className="h6-fs">30 grm</h2>
                        </div>
                      </li>
                      <li>
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/pomegranate.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">Pomegranate</h2>
                          <h2 className="h6-fs">1 small cup</h2>
                        </div>
                      </li>
                      <li>
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/peanutbowl.webp"
                          }
                          width="90px"
                          height="90px"
                          alt="fggroup"
                        />
                        <div className="d-inline-block ml-2">
                          <h2 className="h5-fs">peanut</h2>
                          <h2 className="h6-fs">1 hand full</h2>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="Info">
                    <h2 className="h2-fs">Directions</h2>
                  </div>
                  <div className="Grocery1 float-left">
                    <ul>
                      <li>Take all the ingredients in a bowl</li>
                      <li>Mix them well</li>
                      <li>Add spices and herbs on the top</li>
                      <li>Here is your sprout Salad ready to eat</li>
                    </ul>
                  </div>
                  <div className="Info">
                    <h2 className="h2-fs">Benefits of Sprout Salad</h2>
                  </div>
                  <div className="Grocery2 float-left">
                    <ol>
                      <li>Easy to be prepared</li>
                      <li>Less Time Consuming takes approximately 25 Mins</li>
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

export default ProteinSproutSalad;
