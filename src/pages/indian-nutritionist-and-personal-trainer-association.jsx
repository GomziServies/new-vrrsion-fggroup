import React, { useState } from "react";
import SimpleHeader from "../components/partials/Header/simpleheader";
import FgDigitalFooter from "../components/partials/Footer/fgdigitalfooter";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import OwlCarousel from "react-owl-carousel";
import { sendInquiry } from "../assets/js/utils/contact-us";
import WhatsappHeaderApp from "../components/whatsappHeaderBtn";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function INPTPage() {
  const canonicalUrl = window.location.href;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const handleApplyForInquiry = async () => {
    try {
      let modifiedMessage = `${message}\n\nProgram: ${course}`;
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "FWG Main Page Inquiry",
        modifiedMessage,
        window.location.href,
        null,
        null,
        null
      );
      setName("");
      setEmail("");
      setPhoneNumber("");
      setCourse("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };
  const [showMore, setShowMore] = useState(false);
  const toggleReadMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <Helmet>
        <title>Indian Nutritionist and Personal Trainer Association | INPTA</title>
        <meta name="description" content="INPTA is the entity that unites trained and certified nutritionists & personal trainers together and combining their knowledge and creating a better place to uplift the career scope of nutritionists and personal trainers in the field of health and fitness." />
        <meta name="keyword" content="fitness club, nutrition club, wellness club activities, wellness club" />
        <meta property="og:title" content="Indian Nutritionist and Personal Trainer Association | INPTA" />
        <meta property="og:description" content="INPTA is the entity that unites trained and certified nutritionists & personal trainers together and combining their knowledge and creating a better place to uplift the career scope of nutritionists and personal trainers in the field of health and fitness." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/indian-nutritionist-and-personal-trainer-association" />
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
      <WhatsappHeaderApp
        message={"Hello, I wanted to know more about FGIIT Courses. "}
        options={{ pageRef: true }}
      />
      <SimpleHeader />
      <section style={{ marginTop: "70px" }}>
        <div className="container-fluid p-0">
          <OwlCarousel
            loop
            autoplay
            dots={false}
            id="carouselExampleControls"
            className="owl-carousel owl-theme"
            data-ride="carousel"
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 1,
              },
              1000: {
                items: 1,
              },
            }}
          >
            <div className="item active">
              <img
                className="d-none d-md-block w-100 lazy"
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/banner12.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
              <img
                className="d-block d-md-none w-100 lazy"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/banner-mobile12.webp"
                }
                alt="FGIIT academy certificates are accredited by ISO and ISO"
              />
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="describe">
                <h1 style={{ color: "#333" }}>
                  What Is <span className="m-0 text-blue-color">INPTA?</span>
                </h1>
                <p>
                  INPTA Is The Entity That Unites Trained And Certified
                  Nutritionists & Personal Trainers Together And Combining Their
                  Knowledge And Creating A Better Place To Uplift The Career
                  Scope Of Nutritionist And Personal Trainers In The Field Of
                  Health And Fitness. <br /> <br /> Here, These Trained
                  Nutritionists & Personal Trainers Meets Their Potential
                  Customers Who Are Looking For Their Transformation Which
                  Allows The Personal Trainer & Nutritionist To Grow And At The
                  Same Time Allows The Client To Transform Their Body Of Their
                  Will And Wish. The Creation Of This Association Is To Maintain
                  A Positive Environment Where People Get Fit And Bringing This
                  Field To The Front Lines For INDIA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="col-md-12">
              <div className="covid mb-4 text-center">
                <h2 className="h2-fs">
                  <span className="m-0 text-blue-color">Founders </span>
                </h2>
                <div className="thm-bg-clr dector mb-4"></div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-4 mt-md-0 mt-4">
                <Link
                  to="http://gcsconsultant.fggroup.in/gautam_jani_official"
                  style={{ color: "#000" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="reviews">
                    <div className="reviews-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fwg/coaches-1.webp"
                        }
                        alt="FG Group"
                        className="lazy img-fluid"
                      />
                    </div>
                    <div className="reviews-text text-center">
                      <h2 className="h6-fs"><a href="http://gcsconsultant.fggroup.in/gautam_jani_official" style={{ color: 'black', textDecoration: 'underline' }}>Dr. Gautam Jani</a></h2>
                      <p className="text-muted">
                        <b>
                          Founder & CEO of FG Group / CEO GCS PVT LTD / Core
                          member of INPTA{" "}
                        </b>
                      </p>
                      <p className="text-muted mb-0">
                        {" "}
                        He finished his Civil Engineer and turned fitness
                        enthusiast in 2014 began his personal training journey
                        in Gujarat, India, in 2016. Certified by ACSM, ISSA, and
                        VLCC. he specializes in Clinical and weight loss
                      </p>
                      {showMore ? (
                        <span id="morey" className="m-0">
                          nutrition, Strength Training, Exercise Science, and
                          Performance Enhancement Drugs. In 2019 finished his
                          MBA for better training and placement services for
                          their student of FGIIT. In 2024, he earned his Ph.D.
                          in Health & Fitness from Thames university. As the
                          Founder of FGIIT, Gautam is dedicated to promoting
                          holistic well-being through personalized training and
                          nutritional guidance.
                        </span>
                      ) : (
                        <span id="dotsx">...</span>
                      )}
                      <span
                        onClick={toggleReadMore}
                        id="myBtnn"
                        style={{ color: "#00afef", fontWeight: "500" }}
                      >
                        {showMore ? "Read less" : "Read more"}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
                <div className="reviews">
                  <div className="reviews-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/coaches-2.webp"
                      }
                      alt="FG Group"
                      className="lazy img-fluid"
                    />
                  </div>
                  <div className="reviews-text text-center">
                    <h2 className="h6-fs">Dt. Foram Desai</h2>
                    <p className="text-muted mb-0">
                      {" "}
                      Best Dietician & Founder at FGIIT Ms. Foram Desai is a
                      sport dietitian trainer and Taekwondo 4 Dan Black Belt
                      holder. She has an experience of 10 years coaching
                      Taekwondo and Head faculty in Ryan International School
                      .She has achieved certificates from ACSM, ISSA and VLCC.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
                <div className="reviews">
                  <div className="reviews-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/chirag-pandey.webp"
                      }
                      alt="FG Group"
                      className="lazy img-fluid"
                    />
                  </div>
                  <div className="reviews-text text-center">
                    <h2 className="h6-fs">PT. Chirag Pandey</h2>
                    <p className="text-muted my-0">
                      Master Trainer & Faculty at FGIIT{" "}
                    </p>
                    <p className="text-muted mb-0">
                      {" "}
                      Mr. Chirag is a Mechanical engineer. By passion he is a
                      Power Lifter, Bodybuilder, and Nutritionist and had
                      started practicing it in the year 2017. He is Senior
                      Faculty of FGIIT firm established in 2018. He has achieved
                      Certification from FGIIT, NSDC, SPEFl-SC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6 mt-4">
                <div className="covid">
                  <h2 className="h2-fs">
                    <span className="m-0 text-blue-color">Vision </span>
                  </h2>
                </div>
                <div className="row">
                  <div className="col-sm-12 Digital">
                    {" "}
                    <span>
                      <b>
                        To Bring The Field Of Nutrition In The Spotlight So That
                        People Can Choose It As Their Long Time Career And
                        Allowing It To Make Its Strong Community.
                      </b>
                    </span>{" "}
                    <span>
                      <b>
                        We Believe That Nutrition Should Be The Front Line
                        Career Choice Like Other Careers Therefore, This
                        Community Will Help Us To Grow And Spread The
                        Information About This Field So That It Can Get Enough
                        Recognition About.
                      </b>
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  className="lazy"
                  width={"90%"}
                  style={{ borderRadius: "10px" }}
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/vision.webp"
                  }
                  alt="fggroup"
                />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <img
                  className="lazy"
                  width={"100%"}
                  style={{ borderRadius: "10px" }}
                  src={
                    process.env.PUBLIC_URL + "/assets/images/fgiit/event-4.webp"
                  }
                  alt="fggroup"
                />
              </div>
              <div className="col-md-6 mt-4 p-4">
                <div className="covid">
                  <h2 className="h4-fs">
                    <span
                      style={{
                        fontSize: "30px",
                        color: "#00afef",
                        margin: "0px",
                      }}
                    >
                      Events{" "}
                    </span>
                  </h2>
                </div>
                <div className="row">
                  <div className="tabata col-sm-12 Digital">
                    <h2 className="h5-fs"
                      style={{
                        fontWeight: "900",
                        fontSize: "20px",
                        margin: "0",
                      }}
                    >
                      Training sessions like,
                    </h2>
                  </div>
                  <div className="col-sm-6 tabata mt-2">
                    <b>
                      <ul>
                        <li style={{ listStyle: "circle" }}>
                          Nutrition Education Workshops
                        </li>
                        <li style={{ listStyle: "circle" }}>
                          Digital marketing training
                        </li>
                        <li style={{ listStyle: "circle" }}>
                          Healthy Cooking Contest
                        </li>
                        <li style={{ listStyle: "circle" }}>Yoga Challenge</li>
                        <li style={{ listStyle: "circle" }}>
                          Weight Lifting Contest
                        </li>
                      </ul>
                    </b>
                  </div>
                  <div className="col-sm-6 tabata mt-2">
                    <b>
                      <ul>
                        <li style={{ listStyle: "circle" }}>
                          Nutrition Information Sessions
                        </li>
                        <li style={{ listStyle: "circle" }}>
                          Annually Member Meet Up
                        </li>
                        <li style={{ listStyle: "circle" }}>
                          Quarterly Member Meet Up
                        </li>
                        <li style={{ listStyle: "circle" }}>
                          Myth Busting Workshops
                        </li>
                      </ul>
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6 mt-4">
                <div className="covid">
                  <h2 className="h4-fs">
                    <span
                      style={{
                        fontSize: "30px",
                        color: "#00afef",
                        margin: "0px",
                      }}
                    >
                      Structure{" "}
                    </span>
                  </h2>
                </div>
                <div className="row">
                  <div className="tabata col-sm-12 Digital">
                    <h2 className="h5-fs"
                      style={{
                        fontWeight: "900",
                        fontSize: "20px",
                        margin: "0",
                      }}
                    >
                      Training sessions like,
                    </h2>
                  </div>
                  <div className="row Digital">
                    <div className="col-sm-12">
                      {" "}
                      <span>
                        <b>- 10 Founding Members</b>
                      </span>{" "}
                    </div>
                    <div className="tabata col-sm-12">
                      <h2 className="h5-fs fs-20" style={{ fontWeight: "900" }}>
                        Active Members
                      </h2>
                    </div>
                    <div className="col-sm-12">
                      {" "}
                      <span>
                        <b>
                          - Active Members Are The Main Workforce ( The Group Of
                          A Nutritionist Who Will Be Assisting The Clients)
                        </b>
                      </span>{" "}
                    </div>
                    <div className="tabata col-sm-12">
                      <h2 className="h5-fs fs-20" style={{ fontWeight: "900" }}>
                        Passive Members
                      </h2>
                    </div>
                    <div className="col-sm-12">
                      {" "}
                      <span>
                        <b>
                          - Passive Members Who Want To Engage In Different
                          Activities
                        </b>
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  className="lazy"
                  width={"100%"}
                  style={{ borderRadius: "10px" }}
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/structure.webp"
                  }
                  alt="fggroup"
                />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <img
                  className="lazy"
                  width={"100%"}
                  style={{ borderRadius: "10px" }}
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/active_member.webp"
                  }
                  alt="fggroup"
                />
              </div>
              <div className="col-md-6">
                <div className="covid p-3">
                  <h2 className="h4-fs">
                    <span
                      style={{
                        fontSize: "30px",
                        color: "#00afef",
                        margin: "0px",
                      }}
                    >
                      Active Members List{" "}
                    </span>
                  </h2>
                </div>
                <div className="row Digital p-3">
                  <div className="row">
                    <div className="tabata col-sm-12">
                      <h2 className="h5-fs fs-20" style={{ fontWeight: "900" }}>
                        Active Members Is The Main Workforce (The Group Of
                        Nutritionist Who Will Be Assisting The Clients)
                      </h2>
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <span>
                        <b>- Chirag</b>
                      </span>{" "}
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <span>
                        <b>- Kunal</b>
                      </span>{" "}
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <span>
                        <b>- Pragnesh</b>
                      </span>{" "}
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <span>
                        <b>- Sandeep</b>
                      </span>{" "}
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <span>
                        <b>- Darshika</b>
                      </span>{" "}
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <span>
                        <b>- Het</b>
                      </span>{" "}
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <span>
                        <b>- Hetal</b>
                      </span>{" "}
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <span>
                        <b>- Hetvi</b>
                      </span>{" "}
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <span>
                        <b>- Imran</b>
                      </span>{" "}
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <span>
                        <b>- Janki</b>
                      </span>{" "}
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <span>
                        <b>- Kishor</b>
                      </span>{" "}
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <span>
                        <b>- Nisha</b>
                      </span>{" "}
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <span>
                        <b>- Nitin</b>
                      </span>{" "}
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <span>
                        <b>- Rinky</b>
                      </span>{" "}
                    </div>
                    <div className="col-sm-4">
                      {" "}
                      <span>
                        <b>- Rizwana</b>
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="covid">
                  <h2 className="h4-fs">
                    <span
                      style={{
                        fontSize: "30px",
                        color: "#00afef",
                        margin: "0px",
                      }}
                    >
                      Membership
                    </span>
                  </h2>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control fr mt-2"
                      placeholder="Enter Full Name"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control fr mt-2"
                      placeholder="Enter Email Address"
                    />
                    <input
                      type="number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="form-control fr mt-2"
                      placeholder="Enter Phone Number"
                    />
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="mt-2 form-control fr"
                    >
                      <option value="" hidden>
                        Select Course
                      </option>
                      <option value="Diploma In Personal Training course">
                        Diploma In Personal Training course
                      </option>
                      <option value="Diploma In Nutrition course">
                        Diploma In Nutrition course
                      </option>
                      <option value="Group Instructor Workshop">
                        Group Instructor Workshop
                      </option>
                      <option value="Injury Rehabilitation Workshop">
                        Injury Rehabilitation Workshop
                      </option>
                      <option value="Advance Clinical Nutrition Workshop">
                        Advance Clinical Nutrition Workshop
                      </option>
                    </select>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="form-control fr mt-2 text-dark"
                    ></textarea>
                    <button
                      type="button"
                      className="btn btn-success mt-4"
                      onClick={handleApplyForInquiry}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  className="lazy"
                  width={"100%"}
                  style={{ borderRadius: "10px" }}
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/membership.webp"
                  }
                  alt="fggroup"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="covid mb-4 text-center">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">Events</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-4"></div>
            <div className="row">
              <div className="col-md-6">
                <div className="text-center">
                  <img
                    alt="Events"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/event-1.webp"
                    }
                    className="img-fluid"
                    style={{ borderRadius: "10px", margin: "10px" }}
                  />
                  <h2 className="h4-fs">Fitness Education Seminar</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-center">
                  <img
                    alt="Events"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/event-2.webp"
                    }
                    className="img-fluid"
                    style={{ borderRadius: "10px", margin: "10px" }}
                  />
                  <h2 className="h4-fs">Motivational Seminar</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-center">
                  <img
                    alt="Events"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/event-3.webp"
                    }
                    className="img-fluid"
                    style={{ borderRadius: "10px", margin: "10px" }}
                  />
                  <h2 className="h4-fs">Alumni Event</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-center">
                  <img
                    alt="Events"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/fgiit/event-4.webp"
                    }
                    className="img-fluid"
                    style={{ borderRadius: "10px", margin: "10px" }}
                  />
                  <h2 className="h4-fs">Fitness Awareness in stallon gym</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2">
            <div className="covid mt-5">
              <h2 className="h2-fs text-center text-333-color">
                We're <span className="m-0 text-blue-color">Here To Help</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row">
              <div className="col-lg-6">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/contact.webp"
                  }
                  width="100%"
                  alt="Contact"
                />
              </div>
              <div className="col-lg-6">
                <p className="mb-0 mt-4">Full Name</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control fr mt-2"
                  placeholder="Enter Full Name"
                />
                <p className="mb-0 mt-4">Email Address</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control fr mt-2"
                  placeholder="Enter Email Address"
                />
                <p className="mb-0 mt-4">Phone Number</p>
                <input
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="form-control fr mt-2"
                  placeholder="Enter Phone Number"
                />
                <p className="mb-0 mt-4">Write Your Message</p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control fr mt-2 text-dark"
                ></textarea>
                <button
                  type="button"
                  className="btn btn-success mt-4"
                  onClick={handleApplyForInquiry}
                >
                  Apply For Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FgDigitalFooter />
    </>
  );
}

export default INPTPage;
