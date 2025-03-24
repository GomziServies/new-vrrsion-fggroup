import React from "react";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import FwgFooter from "../../components/partials/Footer/fwgfooter";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

function FreeWeightLossRecipeVideos() {
  const canonicalUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Weight Loss Diet Recipe | Free Recipe Videos | FG Meals</title>
        <meta name="description" content="Lose your weight/fat or build muscle faster with our free recipe videos specially designed for weight loss diet and muscle building diet." />
        <meta name="keyword" content="oats recipes for weight loss, breakfast weight loss recipe, smoothies for weight loss recipe, mangoes smoothie, recipe for banana smoothie" />
        <meta property="og:title" content="Weight Loss Diet Recipe | Free Recipe Videos | FG Meals" />
        <meta property="og:description" content="Lose your weight/fat or build muscle faster with our free recipe videos specially designed for weight loss diet and muscle building diet." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/recipe/free-weight-loss-recipe-videos" />
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
      <SimpleHeader />
      <section style={{ marginTop: "70px" }}>
        <div className="container-fluid p-0">
          <LazyLoadImage
            effect="blur"
            className="d-none d-md-block"
            src={process.env.PUBLIC_URL + "/assets/images/img/banner11.webp"}
            width="100%"
            alt="fggroup"
          />
          <LazyLoadImage
            effect="blur"
            className="d-block d-md-none w-100"
            src={
              process.env.PUBLIC_URL + "/assets/images/img/banner-mobile11.webp"
            }
            alt="fggroup"
          />
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="describe">
              <h1 className="text-center">Recipe Of Getting FIT</h1>
              <div className="thm-bg-clr dector mb-2"></div>
              <p>
                If you're embarking on a weight loss journey, an easy way to
                fill up and get added nutrients is to whip up your weight loss
                smoothies or shakes. Making your smoothies from home will not
                only be a flavor improvement on store-bought smoothies or
                shakes, it will also provide a major nutrition boost without any
                weird chemicals.{" "}
              </p>
              <p>
                Specifically, you should aim to get(breakfast for weight loss
                recipes) lots of protein. Protein, besides helping with satiety,
                is also essential to your body because it helps build and repair
                muscle. Include salads for weight loss recipes list along with
                smoothies.
              </p>
              <p>
                Fiber will also help you feel satiated."Try to boost the fiber
                content in a shake because that also makes it more filling. You
                can do this with vegetables, fruits, and seeds," Follow any of
                these smoothie weight loss recipes and see the results.
              </p>
              <p>
                However, there are certain ingredients you should try to
                minimize or stay away from. "You want to limit added sugars
                since they typically provide minimal nutrition with extra
                calories "For example, if including juice, make sure it's 100%
                fruit juice and not one with added sugar"
                <a
                  href="https://www.healthandbeautylistings.org/Weight-Loss/C21-1-0.html"
                  style={{ color: "#6e6d6d" }}
                >
                  {" "}
                  Weight Loss Directory.
                </a>
              </p>
              <p>
                Serving size is also important to pay attention to as well."When
                considering shakes, you should aim for one that is less than 300
                calories per serving. If you're drinking a meal replacement
                shake, aim for one that has 3-5 grams of fiber per serving,
                10-20 grams of carbs per serving and 15-30 grams of protein,"
                Pick your weight loss recipes smoothies and include that weight
                loss smoothie in your diet and see the result.
              </p>
            </div>
            <div className="row mb-5 pb-5">
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/banana-chocolate-smoothie" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/bananachocolatesmoothie.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 5 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="600e5b2099180b31447a0ef9"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/banana-vanilla-smoothie" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/bananavanillasmoothie.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 5 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="600e698486d2eb34f0796e20"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/chocolate-oat-smoothie" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/chocolateoatssmoothie.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 5 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="6010e770eb38ac0a706af295"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/mixed-berries-smoothie" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/mixedberriessmoothie.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 5 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="6010e781eb38ac0a706af296"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/blueberry-protein-smoothie" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/blueberry.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 5 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="600f7a0ab6868e387407a8c9"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/oats-banana-smoothie" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/oatsbananasmoothie.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 5 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="6010e899eb38ac0a706af297"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/orange-carrot-smoothie" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/orangecarrotsmoothie.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 5 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="6010e9f3eb38ac0a706af298"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/orange-protein-smoothie" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/orangesmoothie.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 5 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="6010ec72d332f6324c6bbd67"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/yellow-smoothie" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/yellowsmoothie.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 5 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="60767d72e21c04105040dd9f"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/sweet-potato-smoothie" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/sweetpotatosmoothie.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 10 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="602d2ce08d7b1405201d4866"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/strawberry-smoothie" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/strawberrysmoothie.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 5 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="602d2ce08d7b1405201d4865"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/strawberries-banana-smoothie" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/strawberrybananasmoothie.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 5 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="602d2ce08d7b1405201d4864"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/vegetable-soup" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/vegetablesoup.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 25 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="60767d73e21c04105040dda0"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/broccoli-almond-soup" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/broccolialmondsoup.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 35 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="60767d71e21c04105040dd9e"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/vegetable-pulav" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/vegpulav.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 30 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="60767d73e21c04105040dda0"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/healthy-khichdi" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/healthykhichdi.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 20 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="60767c6ee21c04105040dd9d"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/protein-chickpea-salad" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/chickpeasalad.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 20 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="600f9c0ad4f1bc2da414cdcb"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="protein-sprout-salad" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/sproutsalad.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 25 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="6010f26149f0473b9c50792d"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/protein-makhana-bhel" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/makhanabhel.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 10 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="6076798be21c04105040dd9b"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-5 col-lg-3 col-md-6">
                <div className="video">
                  <a href="/recipe/mixed-vegetable-salad" aria-label="Fg Group">
                    <div className="text-center">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/healthysalad.webp"
                        }
                        width="100%"
                        alt="fggroup"
                      />
                    </div>
                    <div className="mt-2">
                      <h2 className="h6-fs d-inline-block">Takes 20 mins</h2>
                      <a aria-label="Fg Group">
                        {" "}
                        <i
                          className="far fa-heart"
                          style={{ color: "purple" }}
                          id="60767c5ee21c04105040dd9c"
                        ></i>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FwgFooter />
    </>
  );
}

export default FreeWeightLossRecipeVideos;
