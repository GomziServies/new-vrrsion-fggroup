import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import FwgFooter from "../../components/partials/Footer/fwgfooter";
import { Link } from "react-router-dom";
import BlogsGuides from "../../components/blogs/guides";
import { Helmet } from "react-helmet";

function WhatAreMinerals() {
  const canonicalUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>What Are Minerals? - Food and Nutrition - FG Group</title>
        <meta name="description" content="Minerals can be found in a variety of foods, but some foods are especially abundant in these important nutrients. Here is the complete guide to minerals available in food" />
        <meta name="keyword" content="minerals, macro minerals, micro minerals" />
        <meta property="og:title" content="What Are Minerals? - Food and Nutrition - FG Group" />
        <meta property="og:description" content="Minerals can be found in a variety of foods, but some foods are especially abundant in these important nutrients. Here is the complete guide to minerals available in food" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/blogs/what-are-minerals" />
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
              What is <span className="m-0 text-blue-color">Minerals?</span>
            </h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <img
                  className="lazy mb-3"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/nutritional-minerals-market-pristine-premixes-800x321.webp"
                  }
                  width="100%"
                  style={{ borderRadius: " 10px" }}
                  alt="fggroup"
                />
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
                  <h2 className="h2-fs">What Is Minerals?</h2>
                  <p className="mt-3">
                    Minerals play a crucial role in the human body, ensuring
                    optimal functioning and overall health. There are two broad
                    categories of minerals – macro minerals and micro minerals.
                    While these minerals do not directly provide energy, they
                    contribute to energy generation through their metabolic
                    functions. Furthermore, minerals help in maintaining body
                    fluid balance, regulating the acid-base balance, and
                    supporting the formation of structural units like bones and
                    teeth. Minerals are also essential in the formation of
                    hemoglobin and thyroxine, as well as acting as cofactors in
                    enzymatic reactions.
                  </p>
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/lpluRoXFbvE"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  <h2 className="h6-fs">What Are Macro and Micro Minerals?</h2>
                  <p>
                    Minerals can be classified into macro minerals and micro
                    minerals depending on the amount present in the body and the
                    daily requirement. Macro minerals are the major minerals
                    found in the body and constitute at least 0.01% of total
                    body weight, or occur in quantities of at least 5 grams in a
                    60 kg body. Macro minerals are required in amounts greater
                    than 100 mg per day. On the other hand, micro minerals are
                    needed in smaller quantities, typically ranging from a few
                    milligrams to micrograms per day.
                  </p>
                  <br />
                  <p>
                    While both macro minerals and micro minerals are essential
                    for the body, their roles differ slightly. Macro minerals
                    largely perform structural functions. For example, 99% of
                    the body's calcium, 85% of its phosphorus, and about 50-60%
                    of magnesium is found in bones and calcified tissue. In
                    contrast, micro minerals are more involved in catalytic
                    roles, although some macro minerals also take part in
                    regulatory functions.
                  </p>
                  <br />
                  <br />
                  <h2 className="h6-fs">Functions of Macro and Micro Minerals</h2>
                  <br />
                  <p>
                    Macro minerals such as calcium, magnesium, and phosphorus
                    are essential for maintaining bone structure and strength.
                    Calcium, for instance, serves as a messenger in signal
                    transduction processes in nerve and muscle cells, while
                    phosphorus helps in enzyme regulation and forms a crucial
                    part of phospholipids and phosphoproteins in cell membranes.
                  </p>
                  <br />
                  <p>
                    Micro minerals, though required in smaller quantities, play
                    vital roles in catalytic processes. For example, magnesium,
                    a macro mineral, also exhibits catalytic properties in
                    various biochemical reactions. Despite the primary
                    structural role of macro minerals, there is an overlap, as
                    some macro minerals also perform regulatory functions, just
                    as micro minerals do.
                  </p>
                  <br />
                  <br />
                  <h2 className="h6-fs">Calcium: A Key Macro Mineral</h2>
                  <br />
                  <p>
                    Among the macro minerals, calcium (Ca) is the most abundant
                    in the human body, accounting for 52% of its mineral
                    content. Nearly 99% of the body's calcium is located in the
                    skeleton, while the remaining 1% is distributed between the
                    teeth, soft tissues, and extracellular fluid. Calcium plays
                    a crucial role in bone mineralization, acting as a component
                    of the skeleton and regulating muscle contractions.
                  </p>
                  <br />
                  <br />
                  <h2 className="h6-fs">Bone Mineralization</h2>
                  <br />
                  <p>
                    Bone, a living tissue, is unique in being rigid and strong,
                    yet light enough to be moved by muscle contractions.
                    Minerals, particularly macro minerals like calcium, make up
                    two-thirds of the bone's weight, while water and collagen
                    account for the remaining one-third. Bone is continuously
                    resorbed and formed throughout life, with the help of
                    various bone cells. Macro minerals like calcium are crucial
                    in this process, making bone formation one of the most
                    important functions of minerals in the body.
                  </p>

                  <br />
                  <br />
                  <h2 className="h6-fs">Dietary Sources of Calcium</h2>
                  <br />
                  <p>
                    Calcium-rich foods include dairy products, grains, pulses,
                    and millets like ragi. While calcium is a macro mineral, its
                    absorption in the body can vary depending on the source. For
                    instance, phytates in whole grains can inhibit calcium
                    absorption, but fermentation processes can reduce phytate
                    content and improve bioavailability.
                  </p>

                  <br />
                  <br />
                  <h2 className="h6-fs">Factors Affecting Calcium Absorption</h2>
                  <br />
                  <p>
                    The amount of calcium consumed is not necessarily the amount
                    that gets absorbed into the body. Several factors affect the
                    bioavailability of this macro mineral. The bioavailability
                    of calcium can be defined as the fraction of dietary calcium
                    that the intestine absorbs and uses for physiological
                    functions, especially bone mineralization. In situations
                    where calcium intake is low, the body adapts by absorbing a
                    higher percentage of this vital macro mineral.
                  </p>

                  <br />
                  <br />
                  <h2 className="h6-fs">Calcium Supplementation</h2>
                  <br />
                  <p>
                    For individuals who do not meet their calcium requirements
                    through diet, supplements may be recommended. Postmenopausal
                    women, in particular, are often advised to take calcium
                    supplements. However, it's important to note that
                    supplements should be taken with meals, and the body absorbs
                    calcium most efficiently when doses are 500 mg or less.
                  </p>

                  <br />
                  <br />
                  <h2 className="h6-fs">Deficiency of Calcium</h2>
                  <br />
                  <p>
                    A deficiency in calcium, one of the most essential macro
                    minerals, can lead to several health issues. Insufficient
                    calcium intake may cause increased bone resorption, slowed
                    skeletal growth, and even rickets in children. In
                    postmenopausal women, calcium deficiency is associated with
                    osteoporosis. To combat these effects, increasing dietary
                    intake of calcium or supplementing with this critical macro
                    mineral is often recommended.
                  </p>

                  <br />
                  <br />
                  <h2 className="h6-fs">Calcium Toxicity</h2>
                  <br />
                  <p>
                    Although calcium is necessary for health, excess intake of
                    this macro mineral can lead to toxicity. High levels of
                    calcium in the blood may cause symptoms such as
                    constipation, nausea, increased urination, and even kidney
                    failure. It's important to follow recommended daily intake
                    levels, with the upper limit being 3 grams of calcium per
                    day according to the FAO/WHO guidelines.
                  </p>

                  <br />
                  <br />
                  <h2 className="h6-fs">Daily Calcium Requirements</h2>
                  <br />
                  <p>
                    The daily requirement for calcium, one of the most vital
                    macro minerals, depends on several factors including growth,
                    pregnancy, and lactation. The RDA (Recommended Dietary
                    Allowance) for an adult male in India is approximately 700
                    mg per day. This calculation accounts for the calcium lost
                    through urine, stools, bile, and sweat. In adults, only
                    about 20-30% of dietary calcium is absorbed, with adequate
                    vitamin D playing an important role in the absorption of
                    this macro mineral.
                  </p>
                  <br />
                  <p>
                    In conclusion, both macro minerals and micro minerals are
                    essential for maintaining health and optimal body functions.
                    Macro minerals like calcium, magnesium, and phosphorus play
                    important structural roles, especially in bone and teeth
                    formation. Micro minerals have catalytic roles, assisting in
                    biochemical reactions that are critical to various metabolic
                    processes. Understanding the balance between these two
                    categories of minerals is key to achieving a healthy and
                    functional body.
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

export default WhatAreMinerals;
