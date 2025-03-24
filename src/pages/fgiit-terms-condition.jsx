import React from "react";
import FgiitHeader from "../components/partials/Header/fgiitheader";
import FgiitFooter from "../components/partials/Footer/fgiitfooter";
import { Helmet } from "react-helmet";

function FgiitTermsCondition() {
  const canonicalUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Terms & Condition | FG Group</title>
        <meta
          name="description"
          content="What makes these books the best health and fitness books? If you're interested in learning about nutrition and personal training then it includes all topics."
        />
        <meta
          name="keyword"
          content="dietitian and nutritionists, dietitian and nutritionist course, courses for fitness trainer, certification for fitness trainer"
        />
        <meta property="og:title" content="Terms & Condition | FG Group" />
        <meta
          property="og:description"
          content="What makes these books the best health and fitness books? If you're interested in learning about nutrition and personal training then it includes all topics."
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta property="og:url" content="https://fggroup.in/terms-condition" />
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
      <FgiitHeader />
      <section style={{ marginTop: "100px" }}>
        <div className="container-fluid">
          <div className="container">
            <div className="describe text-center">
              <h1>FGIIT terms & conditions</h1>
              <div className="thm-bg-clr dector mb-0"></div>
            </div>
            <div className="Grocery1 mb-5">
              <ul className="pl-3">
                <li>
                  <b>18% GST will be applied externally on the courses.</b>
                </li>
                <li>
                  The Program You Choose Is An INTERNATIONAL CERTIFIED
                  NUTRITIONIST COURSE Of 4 Months At Fees Of Rs.22,300/- The
                  Actual Fees For This Course Is 35100/-(Offline).
                </li>
                <li>
                  You, Will, Be Provided With Proper Material For The Course
                  (Both High Definition Video Lectures And Pdf Format Notes)
                  Through Which You Can Study For Your Course.
                </li>
                <li>
                  Certification Will Be Provided After A 150 Marks Exam
                  Consisting Of 100 Marks Of MCQ, 2 Projects of 25 marks each.
                  You, Will, Be Given 2 Attempts For The Exam Only If You Fail
                  The Exam. In Case If You Have Not Completed The Course Or Are
                  Left With Studying Or Didn't Appear For The Exam For The Same,
                  You Have To Inform The Mentor's Priory And Extend Your Time By
                  1 Month After Paying <b style={{ color: "red" }}>2700/-</b> As
                  Plan-Extension Fee.
                  <ol>
                    <li>
                      Failing In Both Attempts Will Make You Take The Course
                      Again If You Want To Continue.
                    </li>
                    <li>
                      Doubts and Queries will be solved via WhatsApp.
                    </li>
                    <li>Fees Paid is Non-Refundable and Not Transferable.</li>
                    <li>
                      If the candidate is getting an extension for their due fee
                      payment then they have to take the extension time
                      seriously or it may end up in these stated consequences.
                    </li>
                    <li>
                      If you appeared a month delay then you need to start the
                      course again followed by paying full fees.
                    </li>
                    <li>
                      If the faculty gives you the extension for payment then it
                      should be valued or the results will be the same as above.
                    </li>
                  </ol>
                </li>
                <li>
                  <b>
                    You need to submit the project before 5 days of the exam
                    without it you will not be allowed to give the exam.
                  </b>
                </li>
                <li>
                  <b>
                    Failing not to submit the project will result in delaying
                    your examination.
                  </b>
                </li>
                <li>
                  <b>
                    You have to pay <b style={{ color: "red" }}>2700/-</b> as
                    exam reschedule charges and still will be liable to submit
                    your project prior 5 days of the examination.
                  </b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FgiitFooter />
    </>
  );
}

export default FgiitTermsCondition;
