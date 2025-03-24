import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgDigitalHeader from "../../components/partials/Header/fgdigitalheader";
import FgDigitalFooter from "../../components/partials/Footer/fgdigitalfooter";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function OnlineDigitalMarketingTraining() {
  const canonicalUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Online Digital Marketing & Python Programming Courses at FG Digital</title>
        <meta name="description" content="Learn Digital Marketing and Python Programming online from FGIIT with globally recognized certificates approved by government and valid in 194 countries. Enhance your skills and career today." />
        <meta name="keyword" content="python , python programming course, python programming, python programming course online, best digital marketing course, digital marketing course in surat, digital marketing course near me, digital marketing course duration, digital marketing course syllabus, fee for digital marketing course, best digital marketing course online, best digital marketing course india" />
        <meta property="og:title" content="Online Digital Marketing & Python Programming Courses at FG Digital" />
        <meta property="og:description" content="Learn Digital Marketing and Python Programming online from FGIIT with globally recognized certificates approved by government and valid in 194 countries. Enhance your skills and career today." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgdigital/online-digital-marketing-training" />
        <link rel="canonical" href={{ canonicalUrl }} />
      </Helmet>
      <FgDigitalHeader />
      <section style={{ marginTop: "70px" }}>
        <div className="container-fluid p-0 m-0">
          <OwlCarousel
            dots={false}
            id="carouselExampleControls"
            className="owl-carousel owl-theme"
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
              <a href="#nutritrainer" aria-label="Fg Group">
                <img
                  className="d-none d-md-block w-100"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/banner7.webp"
                  }
                  alt="FGIIT academy certificates are accredited by ISO and ISO"
                />
              </a>
              <a href="#nutritrainer" aria-label="Fg Group">
                <img
                  className="d-block d-md-none w-100"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/banner-mobile7.webp"
                  }
                  alt="FGIIT academy certificates are accredited by ISO and ISO"
                />
              </a>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="describe">
              <h1 style={{ color: "#333" }} className="text-center">
                <span className="m-0 text-blue-color"></span>Boost Your Career
                with Our Programming & Marketing Courses
              </h1>
              <div className="thm-bg-clr dector mb-2 mb-md-3"></div>
              <div className="row align-items-center">
                <div className="col-lg-6 order-2 order-md-1">
                  <p className="mt-0">
                    Our comprehensive courses provide in-depth coverage of the
                    latest digital marketing techniques and strategies, as well
                    as the fundamentals of Python programming. Our certificates
                    are recognized and approved by governments in 194 countries,
                    providing you with a highly valued accreditation for your
                    future career in digital marketing and programming.
                  </p>
                </div>
                <div className="col-lg-6 order-md-2 order-1">
                  <div className="ply1">
                    <img
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/mix-img/digital-python.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="Digital Freedom Program"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container blog2 py-md-5 py-3">
            <div className="covid text-center">
              <h2 style={{ color: "#333" }} className='h2-fs'>
                <span className="m-0 text-blue-color">FG Digital </span>
                Courses features
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <div className="row pt-3 pt-md-4">
              <div className="col-lg-6">
                <div className="ply1 black-before">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/web-python.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="fggroup"
                  />
                  <div className="video-btn play-btn">
                    <Link
                      to="https://youtu.be/mLNg3w0JGho"
                      data-flashy-type="video"
                      className="custom clickof"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-3 pb-md-5">
                <h2 className="mt-2 h4-fs fs-24">
                  Python Programming Course
                </h2>
                <h2 className="h4-fs text-dark">Syllabus (Duration : 2 month)</h2>
                <h2 className="h4-fs text-dark">Mode :- Online</h2>
                <div className="row">
                  <div className="col-sm-6">
                    <ul style={{ paddingLeft: "15px" }}>
                      <li>Introduction/Installation</li>
                      <li>Overview</li>
                      <li>Operators</li>
                      <li>Conditional Statements</li>
                      <li>Control Statements</li>
                      <li>Lists (Collection Of Data)</li>
                      <li>Tuples</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul style={{ paddingLeft: "15px" }}>
                      <li>Dictionary</li>
                      <li>Sets</li>
                      <li>Strings</li>
                      <li>Functions</li>
                      <li>Module</li>
                      <li>Exception Handling</li>
                      <li>File Handling</li>
                    </ul>
                  </div>
                </div>
                <div className="price">
                  <h2 className="h2-fs mt-2 mb-1 fs-20">
                    Course Fees -{" "}
                    <b style={{ color: "#153fc7" }}>15,300 + 18% GST</b>
                  </h2>
                </div>
                <Link
                  to="/fgiit/python-programing"
                  target="_blank"
                  className="btn mt-2 btn-primary"
                  style={{ backgroundColor: "#0055ff" }}
                >
                  View More
                </Link>
                <a
                  href="/pdf/Python-Programming.pdf"
                  download
                  className="btn-danger btn-whats btn-whatss btn mt-2"
                >
                  Download PDF
                </a>
              </div>
            </div>
            <div className="row pt-3 pt-md-2">
              <div className="col-lg-6">
                <div className="ply1 black-before">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/mix-img/digital-marketing-course.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="fggroup"
                  />
                  <div className="video-btn play-btn">
                    <Link
                      to="https://youtu.be/9BZqtav_88Y"
                      data-flashy-type="video"
                      className="custom clickof"
                    >
                      <span className="newthing">
                        <i className="fas fa-play"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 on1 mt-0 pb-3 pb-md-5">
                <h2 className="mt-2 h4-fs fs-24">
                  Digital Marketing Course
                </h2>
                <h2 className="h4-fs text-dark">Syllabus (Duration : 3 month)</h2>
                <h2 className="h4-fs text-dark">Mode :- Online</h2>
                <div className="row">
                  <div className="col-sm-6">
                    <ul style={{ paddingLeft: "15px" }}>
                      <li>Social Media Marketing</li>
                      <li>Content Creation</li>
                      <li>Web Design & Development</li>
                      <li>Video Editing & Graphic Designing</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul style={{ paddingLeft: "15px" }}>
                      <li>Facebook Paid Ads</li>
                      <li>Google Ads</li>
                      <li>SEO</li>
                    </ul>
                  </div>
                </div>
                <div className="price">
                  <h2 className="h2-fs mt-2 mb-1 fs-20">
                    Course Fees -{" "}
                    <b style={{ color: "#07b324" }}>15,300 + 18% GST</b>
                  </h2>
                </div>
                <button
                  href="#;"
                  className="btn mt-2 btn-primary"
                  style={{ backgroundColor: "#0055ff" }}
                  onclick="createDigitalPlanOrder('62b0e3644e1924484035a0c9')"
                >
                  Click here to Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs">
                Valuable Reviews{" "}
                <span className="m-0 text-blue-color"> By Students</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="col-md-12">
              <OwlCarousel
                loop
                autoPlay
                dots={false}
                id="owl-demo7"
                className="owl-carousel owl-theme"
              >
                <div className="item m-3">
                  <div className="reviews">
                    <div className="reviews-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/mix-img/divyesh-patel.webp"
                        }
                        alt="FG Group"
                        className="lazy img-fluid"
                      />
                    </div>
                    <div className="reviews-text text-center">
                      <h2 className="h6-fs">Divyesh Patel</h2>
                      <ul className="d-flex p-0 justify-content-center">
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                      <p className="text-muted mb-0">
                        It is I Divyesh Patel who started the journey of digital
                        marketing at the time of covid-19 because I didn't get
                        enough clients due to the lockdown. I was from the
                        non-technical field so initially capturing all this
                        information<span id="dots">...</span>{" "}
                      </p>
                      <div className="d-block d-md-block">
                        <span id="more">
                          <p className="m-0 text-muted">
                            {" "}
                            was very difficult. Now I got 3-4 clients each week
                            from google location, and 2-3 from Instagram and I
                            also set an online appointment segment so anyone can
                            book my appointment as per my preferred time and
                            place. I recommend this course to each and every
                            person who wants to grow in his career and
                            especially belongs to the health and fitness
                            industry.
                          </p>
                        </span>
                        <div className="swap mt-2">
                          <button onclick="myFunction()" id="myBtn">
                            Read more
                          </button>
                          <Link
                            to="https://youtu.be/6pOsSMlzPdM"
                            className="custom"
                            data-flashy-type="video"
                          >
                            Watch Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item m-3">
                  <div className="reviews">
                    <div className="reviews-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/debug-review.webp"
                        }
                        alt="FG Group"
                        className="lazy img-fluid"
                      />
                    </div>
                    <div className="reviews-text text-center">
                      <h2 className="h6-fs">Desai Shubham</h2>
                      <ul className="d-flex p-0 justify-content-center">
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                      <p className="text-muted">
                        Helpful guidance I would like to thank you for the
                        helpful guidance provided by the Anirudh sir. I am happy
                        with my tutor who is very efficient and shared his
                        knowledge and experience with me.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item m-3">
                  <div className="reviews">
                    <div className="reviews-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/debug-review-2.webp"
                        }
                        alt="FG Group"
                        className="lazy img-fluid"
                      />
                    </div>
                    <div className="reviews-text text-center">
                      <h2 className="h6-fs">Aditya Jaiswal</h2>
                      <ul className="d-flex p-0 justify-content-center">
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                      <p className="text-muted">
                        Best place to upgrade and learn new skills to excel in
                        Software Industry. Highly recommended for exponential
                        growth. 💯
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item m-3">
                  <div className="reviews">
                    <div className="reviews-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/debug-review-1.webp"
                        }
                        alt="FG Group"
                        className="lazy img-fluid"
                      />
                    </div>
                    <div className="reviews-text text-center">
                      <h2 className="h6-fs">chahat syal</h2>
                      <ul className="d-flex p-0 justify-content-center">
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                      <p className="text-muted">
                        One of the BEST institute. Lots to learn from the
                        professional coach ANIRUDH KHURANA. This place offers
                        more than expected. Totally recommended place to get
                        educated more about coding with executive guidance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item m-3">
                  <div className="reviews">
                    <div className="reviews-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/debug-review-3.webp"
                        }
                        alt="FG Group"
                        className="lazy img-fluid"
                      />
                    </div>
                    <div className="reviews-text text-center">
                      <h2 className="h6-fs">Harsh Bhootra</h2>
                      <ul className="d-flex p-0 justify-content-center">
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                      <p className="text-muted">
                        Highly recommended. 1 on 1 attention given by sir.
                      </p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid margintop">
          <div className="container">
            <div className="tabata">
              <h2 className="h2-fs">Blogs</h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="blog">
                  <Link to="/blogs/what-is-digital-marketing">
                    <div className="row">
                      <div className="col-sm-4">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/blog9.webp"
                          }
                          width="100%"
                          alt="what is Online Marketing"
                        />
                      </div>
                      <div className="col-sm-8">
                        <h2 className="h3-fs">What Is Digital Marketing ?</h2>
                        <p>
                          The industry today is brimming with numerous services
                          and products where you as a consumer can easily lose
                          track of what you wanted in the first place.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog">
                  <Link to="../blogs/free-tools-for-beginner-youtubers.html">
                    <div className="row">
                      <div className="col-sm-4">
                        <img
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/blog10.webp"
                          }
                          width="100%"
                          alt="best YouTube SEO tools"
                        />
                      </div>
                      <div className="col-sm-8">
                        <h2 className="h3-fs">Best Free Tools For Beginner You Tubers</h2>
                        <p>
                          Most people think about YouTube as a social media
                          platform. It also additionally behaves as plenty of
                          sort of an ancient program.{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid margintop">
          <div className="container faq">
            <div className="mb-5">
              <h2 className="h2-fs">FAQ'S</h2>
            </div>
            <div id="accordion">
              <div className="card border mt-3">
                <div className="card-header" id="headingOne">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          What is this course about?
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapseOne"
                  className="coll"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    This course is about how can you grow your business with the
                    help of the internet.
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingTwo">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn collapsed"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          How can you be benefitted from this course?
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapseTwo"
                  className="coll"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    This course will give you the knowledge of marketing your
                    business on social platforms without spending money or
                    hiring anyone.
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingThree">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn collapsed"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          How can this course give us freedom?
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapseThree"
                  className="cose"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    This course gives you freedom from spending high cost on
                    digital marketing companies.
                  </div>
                </div>
              </div>
              <div className="card border mt-3">
                <div className="card-header" id="headingfour">
                  <ul>
                    <li>
                      <h2 className="h5-fs mb-0">
                        <button
                          className="btn btn-link btnnn collapsed"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          Will this course help us guiding in creating a
                          business model?
                          <i
                            className="fas fa-chevron-down arrow fs-16"
                          ></i>
                        </button>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div
                  id="collapsefour"
                  className="cole"
                  aria-labelledby="headingfour"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Yes, this will guide you on how to create a business model
                    and run your business online.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="covid text-center">
              <h2 style={{ color: "#333" }} className='h2-fs'>
                <span className="m-0 text-blue-color">Meet The Team</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-0"></div>
            <div className="row">
              <div className="col-lg-6 mt-5">
                <div
                  className="blog2 px-0 pt-0 pb-4"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/crm-gautam.webp"
                    }
                    width="100%"
                    alt="food nutrition and personal training certification ceremony"
                  />
                  <div className="Digital text-center mt-4 px-3">
                    <h2 className="h2-fs m-0"><a href="http://gcsconsultant.fggroup.in/gautam_jani_official" style={{ color: 'black', textDecoration: 'underline' }}>Dr. Gautam Jani</a></h2>
                  </div>
                  <div className="describe text-center px-3">
                    <p className="mt-2 mb-0 mx-0">
                      Dr. Gautam Jani Is A Civil Engineer. By Passion He Is A
                      Dietitian And Had Started Practicing It In The Year 2016.
                      He Is The Founder Of Fitnesswithgomzi Firm Established In
                      2018.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5">
                <div
                  className="blog2 px-0 pt-0 pb-4"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/crm-foram.webp"
                    }
                    width="100%"
                    alt="food nutrition and personal training certification ceremony"
                  />
                  <div className="Digital text-center mt-4 px-3">
                    <h2 className="h2-fs m-0">Foram Desai</h2>
                  </div>
                  <div className="describe text-center px-3">
                    <p className="mt-2 mb-0 mx-0">
                      Ms. Foram is the founder of Fitnesswithgomzi established
                      in 2018. She is An International coach and National
                      referee. She has an experience of 10 years coaching
                      Taekwondo at S.D. Jain School.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-5">
                <div
                  className="blog2 px-0 pt-0 pb-4"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/crm-smit.webp"
                    }
                    width="100%"
                    alt="food nutrition and personal training certification ceremony"
                  />
                  <div className="Digital text-center mt-4 px-3">
                    <h2 className="h2-fs m-0">Smit luvani</h2>
                  </div>
                  <div className="describe text-center px-3">
                    <p className="mt-2 mb-0 mx-0">
                      Mr. Smit Luvani is a Full Stack Developer and had started
                      Practicing it in the year 2019. He is Full stack Developer
                      of FG Group.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-5">
                <div
                  className="blog2 px-0 pt-0 pb-4"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/crm-jenil.webp"
                    }
                    width="100%"
                    alt="food nutrition and personal training certification ceremony"
                  />
                  <div className="Digital text-center mt-4 px-3">
                    <h2 className="h2-fs m-0">Jenil narola</h2>
                  </div>
                  <div className="describe text-center px-3">
                    <p className="mt-2 mb-0 mx-0">
                      Mr. Jenil Narola is a Full Stack Developer and had started
                      Practicing it in the year 2020. He is Full stack Developer
                      of FG Group.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-5">
                <div
                  className="blog2 px-0 pt-0 pb-4"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/crm-yash.webp"
                    }
                    width="100%"
                    alt="food nutrition and personal training certification ceremony"
                  />
                  <div className="Digital text-center mt-4 px-3">
                    <h2 className="h2-fs m-0">Yash Sutariya</h2>
                  </div>
                  <div className="describe text-center px-3">
                    <p className="mt-2 mb-0 mx-0">
                      Mr. yash sutariya is a Full Stack Developer and had
                      started Practicing it in the year 2020. He is Full stack
                      Developer of FG Group.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FgDigitalFooter />
    </>
  );
}

export default OnlineDigitalMarketingTraining;
