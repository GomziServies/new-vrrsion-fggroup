import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import FwgFooter from "../../components/partials/Footer/fwgfooter";
import { Link } from "react-router-dom";
import BlogsGuides from "../../components/blogs/guides";
import { Helmet } from "react-helmet";

function WriteProfessionalResume() {
  const canonicalUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>How to Write Eye-Grabbing Resume in 2022 | Beginner's Guide</title>
        <meta name="description" content="Write your professional resume from scratch. This guide includes all the tactics and points you require to write a professional-looking resume." />
        <meta name="keyword" content="" />
        <meta property="og:title" content="How to Write Eye-Grabbing Resume in 2022 | Beginner's Guide" />
        <meta property="og:description" content="Write your professional resume from scratch. This guide includes all the tactics and points you require to write a professional-looking resume." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/blogs/write-professional-resume" />
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
              how to{" "}
              <span className="m-0 text-blue-color">
                {" "}
                write eye-grabbing resume
              </span>{" "}
              as a fresher
            </h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <img
                  className="lazy mb-3"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/resume-1.webp"
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
                  <h2 className="h2-fs">How to Make a Resume - Step by step guide</h2>
                  <p className="mt-3">
                    Well have you ever think of making a resume well if you did
                    here are top 5 common mistakes people do while making a
                    resume, which you should not do next time you make one
                    resume.
                    <br />
                    <br /> First thing first what is resume: "Well it is a
                    representation of your personal information, Qualification,
                    expertise and skills"
                  </p>
                </div>
                <div className="tabata-one mt-5">
                  <p className="mt-3">
                    <b>Resume follow simple rules too like, </b>
                  </p>
                  <p className="mt-3">
                    <ul>
                      <li>It Should be short.</li>
                      <li>
                        It should have a preview of your personal and
                        educational information.
                      </li>
                      <li>
                        It should pass the clear message of your character or
                        nature.
                      </li>
                      <li>
                        It should have attachments or proof of your written
                        information.
                      </li>
                      <li>It should be graphically represented.</li>
                    </ul>
                  </p>
                </div>
                <div className="tabata-one mt-5">
                  <h2 className="h2-fs">How to Make Resume Attractive</h2>
                  <p className="mt-3">
                    <b>A Good resume can represent you, </b>
                  </p>
                  <p>
                    <ul>
                      <li>Organized</li>
                      <li>Confident</li>
                      <li>Qualified</li>
                      <li>Trustworthy</li>
                    </ul>
                  </p>
                  <div className="d-none d-md-block">
                    <div className="row">
                      <div className="col-lg-6 mt-4">
                        <img
                          className="lazy mb-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/organized.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          alt="Organized"
                        />
                        <p className="mt-3 text-center">
                          <b>Organized</b>
                        </p>
                      </div>
                      <div className="col-lg-6 mt-4">
                        <img
                          className="lazy mb-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/confident.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          alt="Confident"
                        />
                        <p className="mt-3 text-center">
                          <b>Confident</b>
                        </p>
                      </div>
                      <div className="col-lg-6 mt-4">
                        <img
                          className="lazy mb-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/qualified.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          alt="Qualified"
                        />
                        <p className="mt-3 text-center">
                          <b>Qualified</b>
                        </p>
                      </div>
                      <div className="col-lg-6 mt-4">
                        <img
                          className="lazy mb-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/img/trustworthy.webp"
                          }
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          alt="Trustworthy"
                        />
                        <p className="mt-3 text-center">
                          <b>Trustworthy</b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    id="owl-demo11"
                    className="text-center d-block d-md-none"
                  >
                    <div className="item mx-3">
                      <img
                        className="lazy mb-3"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/organized.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="Organized"
                      />
                      <p className="mt-3 text-center">
                        <b>Organized</b>
                      </p>
                    </div>
                    <div className="item mx-3">
                      <img
                        className="lazy mb-3"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/confident.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="Confident"
                      />
                      <p className="mt-3 text-center">
                        <b>Confident</b>
                      </p>
                    </div>
                    <div className="item mx-3">
                      <img
                        className="lazy mb-3"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/qualified.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="Qualified"
                      />
                      <p className="mt-3 text-center">
                        <b>Qualified</b>
                      </p>
                    </div>
                    <div className="item mx-3">
                      <img
                        className="lazy mb-3"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/trustworthy.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px" }}
                        alt="Trustworthy"
                      />
                      <p className="mt-3 text-center">
                        <b>Trustworthy</b>
                      </p>
                    </div>
                  </div>
                  <p>
                    ( For Making Your Career in fitness industry{" "}
                    <Link to="/">Here...</Link> )
                  </p>
                </div>
                <div className="tabata-one mt-5">
                  <h2 className="h2-fs">Top 5 Mistakes to Avoid While Creating a Resume</h2>
                  <p className="mt-3">
                    <b>
                      Next we are coming to Top 5 mistakes most of the job
                      seekers do is as below
                    </b>
                  </p>
                  <h2
                    className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    1-Make resume too long -
                  </h2>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/long-resume-example.webp"
                    }
                    width="100%"
                    className="lazy mt-2"
                    style={{ borderRadius: "10px" }}
                    alt="fggroup"
                  />
                  <p className="mt-3">
                    Making a resume long will through away the interest of the
                    Employer to read the full resume and that is never good it
                    will create less impact of you and once you actually go for
                    interview he don't know you at all.
                  </p>
                  <p className="mt-3">
                    So Employer ask you a same old boring personal question
                    which frustrate you both.
                  </p>
                  <p>
                    ( For Making Your Career in fitness industry{" "}
                    <Link to="/">Here...</Link> )
                  </p>
                  <h2
                    className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    2-Write wrong information on resume -
                  </h2>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/wrong-information-on-resume.webp"
                    }
                    width="100%"
                    className="lazy mt-2"
                    style={{ borderRadius: "10px" }}
                    alt="fggroup"
                  />
                  <p className="mt-3">
                    It is neither ethical nor useful in terms of making resumes.
                    It can lower your chances of getting hired and also straight
                    away big no for final round of interview.
                  </p>
                  <p className="mt-3">
                    For ex you have lied about a salary and your interviewer is
                    an friend of your last employer he can double check and you
                    can lose your job too.
                  </p>
                  <p className="mt-3">
                    Even the last employer also doesn't take you back due to
                    this.
                  </p>
                  <p className="mt-3">
                    After all this if you get the job then also you will have a
                    constant hanging knife on your neck they anyone would have
                    find out.
                  </p>
                  <p>
                    ( For Making Your Career in fitness industry{" "}
                    <Link to="/">Here...</Link> )
                  </p>
                  <h2
                    className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    3-Forget to attach all necessary information with resume -
                  </h2>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/attach-information.webp"
                    }
                    width="100%"
                    className="lazy mt-2"
                    style={{ borderRadius: "10px" }}
                    alt="fggroup"
                  />
                  <p className="mt-3">
                    You need to attach your Certification, Degree, NOC of last
                    job, Adhar card things like this to the resume otherwise it
                    does not look professional.
                  </p>
                  <p className="mt-3">
                    You will shock due to this reasons also many of candidates
                    does not get the job.
                  </p>
                  <p className="mt-3">
                    Carry all this document attach with a pin and get them into
                    a good file so you can submit it once it needed at the
                    company you are going to interview.
                  </p>
                  <p className="mt-3">
                    It should be a photocopy and not the original once also
                    every paper should have a sign of yours at below which can
                    testify that you your self only submitted those records.
                  </p>
                  <p>
                    ( For Making Your Career in fitness industry{" "}
                    <Link to="/">Here...</Link> )
                  </p>
                  <h2
                    className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    4-Show you're self-boring -
                  </h2>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/self-boring.webp"
                    }
                    width="100%"
                    className="lazy mt-2"
                    style={{ borderRadius: "10px" }}
                    alt="fggroup"
                  />
                  <p className="mt-3">
                    Personally as a employer when I see someone have a passion
                    or hobby other then music, reading and singing it excite me
                    more.
                  </p>
                  <p className="mt-3">
                    I mean to say your hobby shows your personality, which is
                    very important to have in life, hobby keeps you going and
                    make sure that you don't get discourage in difficult
                    situation.
                  </p>
                  <p className="mt-3">
                    For example If I go to any interview I write my hobbies are:
                    <ul>
                      <li>Bodybuilding</li>
                      <li>
                        Learning new skills each day (Coding, Designing, Digital
                        marketing, AI)
                      </li>
                      <li>Listening to podcast</li>
                      <li>Making videos on YouTube</li>
                      <li>Speaking and taking seminars</li>
                    </ul>
                  </p>
                  <p className="mt-3">
                    Like this your hobby also show your additional skills which
                    is very attractive to interview.
                  </p>
                  <p>
                    ( For Making Your Career in fitness industry{" "}
                    <Link to="/">Here...</Link> )
                  </p>
                  <h2
                    className="mt-5 h5-fs"
                    style={{
                      fontFamily: "Nunito sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    5-Answer the same thing written in resume to interviewer -
                  </h2>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/same-thing.webp"
                    }
                    width="100%"
                    className="lazy mt-2"
                    style={{ borderRadius: "10px" }}
                    alt="fggroup"
                  />
                  <p className="mt-3">
                    This is little bit after you make your resume I would like
                    to explain this with one small example.
                  </p>
                  <p className="mt-3">
                    Interviewer: Tell me something about your self.
                  </p>
                  <p className="mt-3">
                    Candidate: Well everything is already written in resume I
                    will tell you what is not written on the resume “I Love Modi
                    and not Rahul Gandhi”
                  </p>
                  <p className="mt-3">Interviewer laughed a lot.</p>
                  <p className="mt-3">
                    Well you can sense the hint that nobody likes to repeat
                    which is already known.
                  </p>
                  <p className="mt-3">
                    So don't talk much talk less & act more.
                  </p>
                </div>
                <div className="tabata-one mt-5">
                  <h2 className="h2-fs">Steps to Create a Professional Resume</h2>
                  <p className="mt-3">
                    <ul>
                      <li>
                        Select a right format of resume, which is, accepted
                        universal.
                      </li>
                      <li>Don't miss your contact information part.</li>
                      <li>
                        Write down your personal and professional summary.
                      </li>
                      <li>Mention your achievement and qualification.</li>
                      <li>Write down your skills.</li>
                      <li>Customized your information as per job role.</li>
                      <li>How can you be useful resource to the company.</li>
                      <li>Double check your resume.</li>
                    </ul>
                  </p>
                </div>
                <div className="tabata-one mt-5">
                  <img
                    className="lazy mb-3"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/good-cv-bad-cv.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="Good CV / Bed CV"
                  />
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

export default WriteProfessionalResume;
