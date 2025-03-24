import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import FwgFooter from "../../components/partials/Footer/fwgfooter";
import { Link } from "react-router-dom";
import BlogsGuides from "../../components/blogs/guides";
import { Helmet } from "react-helmet";

function GreenTeaBenefitsAndSideEffects() {
  const canonicalUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Green Tea: Health Benefits and Side Effects - Fg Group</title>
        <meta name="description" content="This is a detailed blog on green tea including the best time to drink, dosage, health benefits, possible side effects and more. Learn more about green tea here." />
        <meta name="keyword" content="" />
        <meta property="og:title" content="Green Tea: Health Benefits and Side Effects - Fg Group" />
        <meta property="og:description" content="This is a detailed blog on green tea including the best time to drink, dosage, health benefits, possible side effects and more. Learn more about green tea here." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/blogs/green-tea-benefits-and-side-effects" />
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
      <section
        className="blog-ul-li"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <div className="container-fluid">
          <div className="describe mt-5">
            <h1 style={{ color: "#333" }} className="text-center mb-5">
              Green Tea:{" "}
              <span className="m-0 text-blue-color">
                {" "}
                Benefits & Side Effects
              </span>
            </h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: "0",
                    overflow: "hidden",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/YttyTD5luho?si=dUR1N__zFLyrmteH"
                    title="FG Group Video"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="mt-3">
                  <div className="bg1 d-inline-block">
                    <i
                      className="far fa-calendar-alt mr-2 text-blue-color fs-18"
                    ></i>
                    <span>19/01/2021</span>
                  </div>
                  <div className="bg1 float-right d-inline-block">
                    <i
                      className="fas fa-user mr-2 text-blue-color fs-17"
                    ></i>
                    <i></i>
                    <span>
                      <Link
                        to="http://gcsconsultant.fggroup.in/gautam_jani_official"
                        style={{ color: "#000" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Dr.Gautam Jani
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="tabata-one mt-5">
                  <h2 className="h2-fs">Green Tea Benefits & Side Effects</h2>
                  <p className="mt-3">
                    Green tea, like other genuine teas such as dark, white, and
                    oolong, is produced from the Camellia sinensis plant. It is
                    one of the few genuine teas that hasn't been excessively
                    processed. Green tea, similar to other real teas, contains
                    caffeine. It has been used in Ayurveda (Indian medicine) and
                    traditional Chinese medicine for centuries to treat various
                    conditions, ranging from fever to heart issues. <br />
                    <br />
                    Green Tea Benefits are widely acknowledged, including aiding
                    in weight loss, disease prevention, and blood pressure
                    reduction. It has also been linked to the prevention of
                    neurological diseases like Alzheimer's and Parkinson's.
                    Studies have shown that green tea helps reduce the risk of
                    cardiovascular disease by lowering LDL cholesterol and
                    improving blood flow. Green tea is a popular weight loss
                    supplement that helps you shed pounds by accelerating fat
                    oxidation. When green tea is added to your keto diet chart,
                    its effectiveness for weight loss increases significantly.
                    <br />
                    <br />
                    While green tea is generally considered safe for adults,
                    there are a few Green Tea Side Effects to be aware of. Most
                    adverse effects of green tea can be avoided by consuming it
                    in moderation.{" "}
                    <Link to="../blogs/keto-diet">keto diet chart,</Link> its
                    effectiveness to lose weight increases drastically.
                    <br />
                    <br />
                    <img
                      className="lazy mb-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/green-tea.webp"
                      }
                      width="100%"
                      style={{ borderRadius: " 10px" }}
                      alt="fggroup"
                    />
                    <br />
                    <ul>
                      <li>Green Tea Components</li>
                      <li>Catechins (Astringency part in tea)</li>
                      <li>Lowers cholesterol levels in the blood</li>
                      <li>Reduces body fat</li>
                      <li>Impact on cancer prevention</li>
                      <li>Antioxidant properties</li>
                      <li>
                        Prevents tooth decay and has an antimicrobial effect
                      </li>
                      <li>Flu prevention effect</li>
                      <li>Helps in preventing high blood pressure</li>
                      <li>Anti-hyperglycemic impact</li>
                      <li>Prevents bad breath</li>
                    </ul>
                    <br />
                    <br />
                  </p>
                  <p>
                    <b>Caffeine (Bitterness part in tea):-</b>
                    <br />
                    <ul>
                      <li>Enhances alertness (reduces sleepiness)</li>
                      <li>Boosts endurance</li>
                      <li>Prevents headaches</li>
                      <li>Acts as a mild diuretic</li>
                    </ul>
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>Theanine (Full-bodied flavor part in tea):-</b>
                    <ul>
                      <li>Protects neuronal cells</li>
                      <li>
                        Provides relaxation and promotes alpha-wave production
                      </li>
                      <li>Reduces blood pressure</li>
                    </ul>
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>Nutrient C:-</b>
                    <br />
                    <ul>
                      <li>
                        Maintains skin and mucous membrane health (collagen
                        formation)
                      </li>
                      <li>Acts as an antioxidant</li>
                    </ul>
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>Nutrient B2:-</b>
                    <br />
                    <ul>
                      <li>Maintains skin and mucous membrane health</li>
                    </ul>
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>Folic corrosive:-</b>
                    <br />
                    <ul>
                      <li>Prevents neural tube defects in embryos</li>
                      <li>Prevents arterial sclerosis</li>
                    </ul>
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>Β-carotene:-</b>
                    <br />
                    <ul>
                      <li>Supports night vision</li>
                    </ul>
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>Nutrient E:-</b>
                    <ul>
                      <li>Antioxidant properties</li>
                    </ul>
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>Saponins:-</b>
                    <ul>
                      <li>Reduces blood pressure</li>
                      <li>Flu prevention effect</li>
                    </ul>
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>Fluorine:-</b>
                    <ul>
                      <li>Prevents tooth decay</li>
                    </ul>
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>Y-Aminobutyric Corrosive:-</b>
                    <ul>
                      <li>Reduces blood pressure</li>
                    </ul>
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>
                      Minerals (Potassium, calcium, phosphorus, manganese, and
                      so forth):-
                    </b>
                    <ul>
                      <li>Acts as natural regulators</li>
                    </ul>
                  </p>
                  <br />
                  <br />
                  <p>
                    <b>Chlorophyll:-</b>
                    <ul>
                      <li>Deodorizing effect</li>
                    </ul>
                  </p>
                  <p>
                    ( For Making Your Career in fitness industry{" "}
                    <Link to="/">Here...</Link> )
                  </p>
                </div>
                <div className="tabata-one mt-5">
                  <h2 className="h2-fs">Green Tea Benefits for Health</h2>
                  <p className="mt-3">
                    Numerous studies have shown multiple Green Tea Benefits for
                    individuals. Consuming green tea has been shown to improve
                    skin health, aid in weight loss, and reduce the risk of
                    cardiovascular diseases. According to the International
                    Institute of Sustainable Development, green tea is the
                    second most consumed beverage in the world after water.
                  </p>
                  <p>
                    ( For Making Your Career in fitness industry{" "}
                    <Link to="/">Here...</Link> )
                  </p>
                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Green Tea Benefits on Health
                  </h2>
                  <p className="mt-3">
                    Green tea was utilized to control draining and recuperate
                    wounds, help assimilation, advance heart and mind wellbeing,
                    and direct internal heat level in conventional Chinese and
                    Indian medication. Green tea has been displayed in
                    examinations to assist with weight decrease, liver
                    infections, type 2 diabetes, Alzheimer's illness, and
                    different conditions.
                  </p>
                  <p>
                    ( For Making Your Career in fitness industry{" "}
                    <Link to="/">Here...</Link> )
                  </p>
                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Green Tea Benefits on Cancer avoidance
                  </h2>
                  <p className="mt-3">
                    Some disease rates are diminished in countries where green
                    tea use is high. Then again, human investigations have not
                    observed reliable proof that drinking green tea diminishes
                    the general danger of malignant growth.
                  </p>
                  <p>
                    ( For Making Your Career in fitness industry{" "}
                    <Link to="/">Here...</Link> )
                  </p>
                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Green Tea Benefits in Weight Loss
                  </h2>
                  <p className="mt-3">
                    As indicated by an investigation of different examinations,
                    catechins and caffeine in green tea might further develop
                    energy digestion, which may add to weight decrease. A
                    meta-investigation of different separate tea
                    polyphenol-incited weight decrease processes observed that
                    catechins and caffeine cooperated to cause weight reduction
                    benefits, rather than caffeine acting alone.
                  </p>

                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Green Tea Benefits on Inflammatory Skin Conditions
                  </h2>
                  <p className="mt-3">
                    Mitigating impacts are found in green tea. As per an audit
                    of human clinical exploration and cell and creature tests,
                    green tea and its fundamental part,
                    epigallocatechin-3-gallate (EGCG), have mitigating
                    properties. Green tea polyphenols have additionally been
                    demonstrated to bring down circulatory strain, decrease
                    irritation, and upgrade epithelial capacity, all of which
                    can assist with diminishing coronary illness hazard in
                    people who are overweight or hefty, as indicated by 2017
                    exploration.
                  </p>
                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Green Tea Benefits on Cholesterol
                  </h2>
                  <p className="mt-3">
                    Green tea use, regardless of whether as a drink or in
                    container structure, was associated with huge however little
                    reductions in complete low-thickness lipoprotein
                    cholesterol, as per a 2011 examination.
                  </p>
                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Green Tea Benefits on Stroke
                  </h2>
                  <p className="mt-3">
                    Drinking green tea or espresso consistently seems to bring
                    down the danger of stroke. As per one review, remembering
                    green tea for one's ordinary eating routine is connected to
                    a slight but critical decrease in the danger of stroke.
                  </p>
                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Other Miracles of Green Tea
                  </h2>
                  <p className="mt-3">
                    Green tea has likewise been connected to a decrease in
                    irritation, which might assist with keeping away from dental
                    pits, stress, and persistent sleepiness, fixing skin
                    infections, and easing joint pain. More human clinical
                    examinations, in any case, are needed to affirm these
                    convictions.
                  </p>
                </div>
                <div className="tabata-one mt-5">
                  <h2 className="h2-fs">Green Tea Side Effects</h2>
                  <p className="mt-3">
                    Beneath referenced are a portion of the green tea
                    disservices that you ought to keep yourself from:-
                    <br />
                    <br /> Stomach Health When fermented too emphatically or on
                    a vacant stomach, green tea may incite gastrointestinal
                    misery. Green tea incorporates tannins, which may make your
                    stomach corrosive ascent. Blockage, indigestion, and
                    queasiness are on the whole side effects of a lot of
                    corrosive in the stomach. At the point when smashed in high
                    amounts, green tea can likewise prompt looseness of the
                    bowels.
                  </p>
                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Cerebral pain
                  </h2>
                  <p className="mt-3">
                    Green tea incorporates caffeine, which can incite migraines
                    in specific individuals. Headache victims should drink green
                    tea routinely. On the off chance that you get regular
                    cerebral pains, in any case, you ought to try not to drink
                    green tea consistently. Green tea ought to be kept away from
                    assuming you are caffeine delicate.
                  </p>
                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Dozing Issues
                  </h2>
                  <p className="mt-3">
                    Green tea incorporates caffeine, which is an enemy of rest
                    substances. Green tea has next to no caffeine, yet it can in
                    any case cause rest issues in caffeine-touchy people. This
                    is because the synthetic fixings in green tea restrain the
                    development of rest-instigating chemicals like melatonin.
                  </p>
                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Retching
                  </h2>
                  <p className="mt-3">
                    Green tea use in abundance may cause sickness and spew. On
                    account of how proteins tie in the digestion tracts, green
                    tea incorporates tannins, which have been related to
                    queasiness and stoppage. Assuming you're a normal tea
                    consumer, don't devour multiple cups of green tea
                    consistently.
                  </p>
                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Unsteadiness
                  </h2>
                  <p className="mt-3">
                    At the point when plastered in high sums, the caffeine in
                    green tea may cause you to feel tipsy or discombobulated.
                    Caffeine causes movement disorder by diminishing blood
                    supply to the mind and focal sensory system. Green tea
                    drinking may cause seizures or confusion in uncommon
                    conditions.
                  </p>
                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Draining Issues
                  </h2>
                  <p className="mt-3">
                    Green tea may cause draining issues in specific individuals.
                    Green tea contains intensifies that lower fibrinogen levels,
                    a protein that guides in blood thickening. Green tea
                    likewise represses the oxidation of unsaturated fats, which
                    can make blood more slender. Green tea ought to be kept away
                    from assuming you have a blood thickening condition.
                  </p>
                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Liver Health
                  </h2>
                  <p className="mt-3">
                    Green tea supplements and inordinate green tea use may cause
                    liver harm and ailment. This, authorities on the matter
                    agree, is because of the development of caffeine, which can
                    pressure the liver. Try not to drink more than 4 to 5 cups
                    of green tea every day to stay away from this unfriendly
                    impact.
                  </p>
                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Bone Health
                  </h2>
                  <p className="mt-3">
                    In touchy people, the inordinate utilization of green tea
                    raises the danger of bone illness like osteoporosis. Green
                    tea compounds keep calcium from being assimilated, making
                    bone wellbeing decay.
                  </p>
                </div>
                <div className="tabata-one mt-5">
                  <h2 className="h2-fs">When To Drink Green Tea?</h2>
                  <p className="mt-3">
                    Green tea is likewise high in minerals and nutrients, has
                    mitigating characteristics, and brings down the danger of
                    coronary illness and a few tumors. All the time individuals
                    pose our specialists this inquiry - When to drink green tea?
                    Or on the other hand, Is there an ideal opportunity to drink
                    green tea? This part gives the subtleties to such perusers
                    who are paying special attention to a response to these
                    inquiries.
                  </p>
                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                      textTransform: "Fcapitalize!important",
                    }}
                  >
                    Try not to devour green tea too soon in the first part of
                    the day
                  </h2>
                  <p className="mt-3">
                    In light of its high catechin focus, drinking green tea on a
                    vacant stomach toward the beginning of the day may effects
                    affect the liver. Since catechins are remembered for green
                    tea, the amount ingested should be limited. Catechins at
                    inordinate fixations can hurt the liver. Green tea ought to
                    be burned-through in the first part of the day, somewhere in
                    the range of 10:00 and 11:00 p.m., or ahead of schedule
                    around evening time.
                  </p>
                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                      textTransform: "Fcapitalize!important",
                    }}
                  >
                    You can have green tea between the dinners
                  </h2>
                  <p className="mt-3">
                    To increment healthful admission and iron assimilation,
                    drink some green tea between suppers, for instance, two
                    hours prior or later. Green tea ought not to be overcome
                    with dinners assuming you have pallor.
                  </p>
                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                      textTransform: "Fcapitalize!important",
                    }}
                  >
                    You can have green tea before your exercise
                  </h2>
                  <p className="mt-3">
                    As a result of the caffeine in green tea, it can assist you
                    with consuming more fat. It can help your energy levels,
                    permitting you to turn out for longer timeframes.
                  </p>
                  <h2 className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                      textTransform: "Fcapitalize!important",
                    }}
                  >
                    2 hours preceding sleep time
                  </h2>
                  <p className="mt-3">
                    Green tea ought not to be devoured before night since it
                    contains caffeine, which can cause rest aggravations. It
                    contains the amino corrosive L-Theanine, which assists you
                    with remaining ready and centered. The ideal opportunity to
                    devour green tea is two hours before night since this is the
                    point at which your digestion is at its most minimal, and
                    green tea can assist you with supporting it.
                  </p>
                </div>
                <div className="tabata-one mt-5">
                  <h2 className="h2-fs">Green Tea Recipes</h2>
                  <p className="mt-3">
                    This part has expounded on the bit by bit cycle to make a
                    sound and delightful green tea.
                    <br />
                    <ul>
                      <li>
                        To start, heat 2 cups of water in a medium pan over
                        medium-high hotness.
                      </li>
                      <li>
                        4 tablespoons crude sugar (or one more sugar of
                        decision) This delivers a better green tea, so overlook
                        this progression assuming that you need a more natural
                        and unsweet tea. Assuming you're utilizing some other
                        flavors or flavorings, right now is an ideal opportunity
                        to add them to the water.
                      </li>
                      <li>
                        Carry the water to a lethargic stew, blending routinely,
                        until the sugar has disintegrated.
                      </li>
                      <li>
                        Switch off the hotness in the pot. Place it on the
                        counter of your kitchen. 2 tsp free leaf green tea
                        leaves Continue perusing for more data on the best way
                        to utilize whole tea packs.
                      </li>
                      <li>
                        From that point onward, cover the tea and steep it for 2
                        to 3 minutes. If you leave
                      </li>
                      <p>
                        ( For Making Your Career in fitness industry{" "}
                        <Link to="/">Here...</Link> )
                      </p>
                    </ul>
                  </p>
                </div>
              </div>
              <BlogsGuides />
            </div>
          </div>
        </div>
      </section>
      <FwgFooter />
    </>
  );
}

export default GreenTeaBenefitsAndSideEffects;
