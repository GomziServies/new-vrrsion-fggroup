import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";


const CoursesInclude = () => {

  return (
    <>
      <section className="margintop">
        <div className="container-fluid p-0">
          {/* <div className="container">
            <div className="covid mb-4 text-center">
              <h2 className="h2-fs">
                <span className="m-0 text-blue-color">Course </span>
                include
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="d-none d-md-block">
              <div className="row">
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <LazyLoadImage
                    effect="blur"
                    className="lazy"
                      alt="fg img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/responsive-design.webp"
                      }
                  />
                    <h2 className="h5-fs mt-3">Recorded Lecture Videos</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <LazyLoadImage
                    effect="blur"
                    className="lazy"
                      alt="fg img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/open-book.webp"
                      }
                  />
                    <h2 className="h5-fs mt-3">Course E-Book</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <LazyLoadImage
                    effect="blur"
                    className="lazy"
                      alt="fg img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/group-chat.webp"
                      }
                  />
                    <h2 className="h5-fs mt-3">Team Chat Support</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <LazyLoadImage
                    effect="blur"
                    className="lazy"
                      alt="fg img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/online-test.webp"
                      }
                  />
                    <h2 className="h5-fs mt-3">MCQs Based Exam</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <LazyLoadImage
                    effect="blur"
                    className="lazy"
                      alt="fg img"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/score.webp"
                      }
                  />
                    <h2 className="h5-fs mt-3">Case Study Based Project</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 position-relative">
                  <div className="tabata blog2 py-5 imgty text-center">
                    <LazyLoadImage
                    effect="blur"
                    className="lazy"
                      alt="fg img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/certificate.webp"
                      }
                  />
                    <h2 className="h5-fs mt-3">Certification</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="d-block d-md-none">
                <div id="owl-demo22" >
                  <div className="item mx-2">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <LazyLoadImage
                    effect="blur"
                    className="lazy"
                        alt="fg img"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/responsive-design.webp"
                        }
                  />
                      <h2 className="h5-fs mt-3">Recorded Lecture Videos</h2>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <img
                        className="lazy"
                        alt="fg img"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/open-book.webp"
                        }
                      />
                      <h2 className="h5-fs mt-3">Course E-Book</h2>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <img
                        className="lazy"
                        alt="fg img"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/group-chat.webp"
                        }
                      />
                      <h2 className="h5-fs mt-3">Team Chat Support</h2>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <img
                        className="lazy"
                        alt="fg img"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/online-test.webp"
                        }
                      />
                      <h2 className="h5-fs mt-3">MCQs Based Exam</h2>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <img
                        className="lazy"
                        alt="fg img"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/score.webp"
                        }
                      />
                      <h2 className="h5-fs mt-3">Case Study Based Project</h2>
                    </div>
                  </div>
                  <div className="item mx-2">
                    <div className="tabata blog2 py-5 imgty text-center">
                      <img
                        className="lazy"
                        alt="fg img"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/certificate.webp"
                        }
                      />
                      <h2 className="h5-fs mt-3">Certification</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL + "/assets/images/img/course-include-flexible.webp"
            }
            className="img-fluid mt-2 d-none d-md-block"
          />
          <LazyLoadImage
            effect="blur"
            alt="FG Group"
            src={
              process.env.PUBLIC_URL + "/assets/images/img/course-include-flexible-mobile.webp"
            }
            className="img-fluid mt-2 d-block d-md-none"
          />
        </div>
      </section>
    </>
  );
};

export default CoursesInclude;
