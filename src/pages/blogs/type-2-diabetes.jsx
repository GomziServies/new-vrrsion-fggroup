import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import FwgFooter from "../../components/partials/Footer/fwgfooter";
import { Link } from "react-router-dom";
import BlogsGuides from "../../components/blogs/guides";
import { Helmet } from "react-helmet";

function Type2Diabetes() {
  const canonicalUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Type 2 Diabetes - Symptoms, Causes and Treatment - FG Group</title>
        <meta name="description" content="Type 2 diabetes is an impairment in the way the body handles and utilizes sugar (glucose) as energy. Learn everything about type 2 diabetes in this blog." />
        <meta name="keyword" content="Diabetes, what are diabetes symptoms, diabetes type two" />
        <meta property="og:title" content="Type 2 Diabetes - Symptoms, Causes and Treatment - FG Group" />
        <meta property="og:description" content="Type 2 diabetes is an impairment in the way the body handles and utilizes sugar (glucose) as energy. Learn everything about type 2 diabetes in this blog." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/blogs/type-2-diabetes" />
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
              Type-2 <span className="m-0 text-blue-color"> Diabetes</span>
            </h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <img
                  className="lazy mb-3"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/diabetes.webp"
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
                  <h2 className="h2-fs">What Is Type-2 Diabetes?</h2>
                  <p className="mt-3">
                    Diabetes type two may be a lifelong condition that impacts
                    how your body processes insulin, a hormone that regulates
                    blood sugar. This form of Diabetes is commonly associated
                    with insulin resistance, meaning the body cannot use insulin
                    efficiently. While diabetes type two often develops later in
                    life, it's becoming more prevalent in younger populations
                    due to factors like childhood obesity and poor diet.
                    <br />
                    <br />
                    Diabetes type two was once known as non-insulin-dependent
                    diabetes mellitus (NIDDM). Today, with rising cases among
                    younger people, it is more frequently diagnosed in children
                    and teenagers. Still, older adults, particularly those over
                    45, remain the most affected group by Diabetes type two.
                    <br />
                    <br />
                    In the U.S. alone, approximately 29 million people have
                    diabetes type two, while another 84 million have
                    prediabetes—a condition in which blood sugar is higher than
                    normal but not yet in the diabetic range. Addressing this
                    stage early could prevent the onset of diabetes type two.
                  </p>
                  <br />
                  <br />
                  <p>
                    What are diabetes symptoms? Often, diabetes symptoms can be
                    mild and easy to overlook. It's not uncommon for people to
                    live with diabetes type two for years before it's diagnosed.
                    Below are some of the most common indicators of Diabetes:
                  </p>
                </div>
                <div className="tabata-one mt-5">
                  <h2 className="h2-fs">Signs and Symptoms of sort two polygenic disease</h2>
                  <p className="mt-3">

                    The symptoms of sort two polygenic disease may be thus
                    gentle that you just do not notice them. concerning eight
                    million folks that have it do not know it. Symptoms
                    include:

                  </p>
                  <p className="mt-3">
                    <ul>
                      <li>Being terribly thirsty</li>
                      <li>Peeing heaps</li>
                      <li>Blurry vision</li>
                      <li>Being cranky</li>
                      <li>Tingling or symptom in your hands or feet</li>
                      <li>Fatigue/feeling drained</li>
                      <li>Wounds that do not heal</li>
                      <li>Yeast infections that keep returning</li>
                      <li>Feeling hungry</li>
                      <li>Weight loss while not attempting</li>
                      <li>Getting additional infections</li>
                    </ul>
                  </p>
                  <p className="mt-3">
                    If you notice any dark patches of skin around your neck or
                    armpits, you may be developing insulin resistance, a
                    precursor to Diabetes type two. It's crucial to know what
                    are diabetes symptoms to catch the disease early.
                  </p>
                </div>
                <div className="tabata-one mt-5">
                  <h2 className="h2-fs">Causes of sort two polygenic disease</h2>
                  <p className="mt-3">
                    The main issue behind Diabetes type two is insulin
                    resistance. Insulin, produced by the pancreas, helps your
                    cells convert glucose (sugar) into energy. With diabetes
                    type two, your body produces insulin, but your cells don't
                    use it as they should. This forces your pancreas to make
                    extra insulin to compensate. Over time, it may struggle to
                    keep up, leading to elevated blood sugar levels, a hallmark
                    of Diabetes.
                  </p>
                  <p className="mt-3">
                    The causes of diabetes type two are multifactorial and may
                    include:
                  </p>
                  <p className="mt-3">
                    <ul>
                      <li>
                        <b>Genetics. </b>Specific genes affect insulin
                        production and how your body responds to it.
                      </li>
                      <li>
                        <b>Weight. </b>Being overweight, particularly if you
                        carry excess weight around your abdomen, can increase
                        the risk of Diabetes type two.
                      </li>
                      <li>
                        <b>Metabolic syndrome. </b>A group of conditions
                        including high blood pressure, high cholesterol, and
                        insulin resistance, often accompanies diabetes type two.
                      </li>
                      <li>
                        <b>Liver Glucose: . </b>Your liver might release extra
                        glucose when your blood sugar levels drop, even when it
                        isn't necessary, contributing to Diabetes.
                      </li>
                      <li>
                        <b>Cell Miscommunication. </b>Sometimes, cells send
                        incorrect signals, which can affect how insulin is used
                        or produced.
                      </li>
                      <li>
                        <b>Beta Cell Dysfunction. </b>These cells in the
                        pancreas are responsible for producing insulin, and
                        their malfunction can lead to diabetes type two.
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="tabata-one mt-5">
                  <h2 className="h2-fs">Risk Factors for Diabetes Type Two</h2>
                  <p className="mt-3">
                    Several risk factors increase the likelihood of developing
                    diabetes type two. The more risk factors you have, the
                    higher your chances. These include:
                  </p>
                  <p className="mt-3">
                    <ul>
                      <li>Age: Individuals over 45 are more susceptible.</li>
                      <li>
                        Family History: A parent or sibling with Diabetes
                        increases your risk.
                      </li>
                      <li>
                        Ethnicity: Certain groups, including African Americans,
                        Native Americans, Hispanics, and Pacific Islanders, are
                        more prone to diabetes type two.
                      </li>
                      <li>
                        Prediabetes: Elevated blood sugar levels that are not
                        yet at diabetic levels can eventually lead to diabetes
                        type two.
                      </li>
                      <li>
                        Heart Disease: Having a history of heart disease or
                        vascular problems raises your risk.
                      </li>
                      <li>
                        Overweight: Being overweight or obese is one of the most
                        significant risk factors.
                      </li>
                      <li>
                        Gestational Diabetes: Women who had diabetes during
                        pregnancy are more likely to develop diabetes type two
                        later in life.
                      </li>
                      <li>
                        PCOS: Women with polycystic ovary syndrome are at
                        increased risk
                      </li>
                      <li>
                        Depression: Mental health conditions like depression can
                        also elevate your risk for Diabetes.
                      </li>
                    </ul>
                  </p>
                  <h2 className="h6-fs mt-3">
                    Diagnosis and Testing for Diabetes Type Two
                  </h2>
                  <p className="mt-3">
                    To confirm if you have diabetes type two, your doctor will
                    perform several tests. One of the most common is the A1c
                    test, which gives an average of your blood sugar levels over
                    the past two to three months. Another option is the fasting
                    blood glucose test, where you must fast for at least eight
                    hours before having your blood sugar checked.
                  </p>
                  <p className="mt-3">
                    In some cases, an oral glucose tolerance test (OGTT) may be
                    performed. This test measures how well your body handles
                    glucose after consuming a sweet drink. These tests are
                    crucial in determining whether you have diabetes type two or
                    another form of Diabetes.
                  </p>
                  <h2 className="h6-fs mt-3">
                    Managing and Treating Diabetes Type Two
                  </h2>
                  <p className="mt-3">
                    Living with Diabetes type two requires ongoing management,
                    combining lifestyle changes and medications. The first line
                    of treatment often involves lifestyle adjustments, including
                    a healthy diet, weight loss, and regular exercise.
                  </p>
                  <p className="mt-3">
                    Losing just 5-7% of your body weight can improve your body's
                    ability to use insulin and help lower blood sugar levels.
                    Consulting with a registered dietitian can also help you
                    create a balanced eating plan that fits your needs.
                  </p>
                  <p className="mt-3">
                    For those who can't manage their Diabetes with lifestyle
                    changes alone, medications like Metformin, sulfonylureas,
                    and insulin may be necessary. Each case of diabetes type two
                    is unique, so it's essential to work closely with your
                    healthcare provider to find the best treatment plan for you.
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

export default Type2Diabetes;
