import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CoursesInclude = () => {
  return (
    <section>
      <div className="container-fluid p-0">
        {/* <div className="container">
            <div className="covid text-center">
              <h2 className="h2-fs mb-3 mt-2">
                What does this{" "}
                <span className="m-0 text-blue-color"> Courses include ?</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="blog2 text-center">
                  <div className="include">
                    <LazyLoadImage
                      effect="blur"
                      className="mt-3"
                      alt="online training"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/learning.webp"
                      }
                    />
                  </div>
                  <h2 className="h5-fs mt-3 mb-4 pb-1 mb-md-0 pb-md-2">
                    Live Classes On Zoom
                  </h2>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="blog2 text-center">
                  <div className="include">
                    <LazyLoadImage
                      effect="blur"
                      className="mt-3 lazy"
                      alt="recorded session"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/online-class.webp"
                      }
                    />
                  </div>
                  <h2 className="h5-fs mt-3">Recorded Sessions Are Included</h2>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="blog2 text-center">
                  <div className="include">
                    <LazyLoadImage
                      effect="blur"
                      className="mt-3 lazy"
                      alt="job placement"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/job.webp"
                      }
                    />
                  </div>
                  <h2 className="h5-fs mt-3">100% Job Placement Guarantee</h2>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="blog2 text-center">
                  <div className="include">
                    <LazyLoadImage
                      effect="blur"
                      className="mt-3 lazy"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/book.webp"
                      }
                      alt="book"
                    />
                  </div>
                  <h2 className="h5-fs mt-3 mt-md-3 mb-md-2">
                    Book Delivered To Your Home
                  </h2>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="blog2 text-center">
                  <div className="include">
                    <LazyLoadImage
                      effect="blur"
                      className="mt-3 lazy"
                      alt="course certification"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/certificate.webp"
                      }
                    />
                  </div>
                  <h2 className="h5-fs mt-3">4 Different Certification</h2>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="blog2 text-center">
                  <div className="include">
                    <LazyLoadImage
                      effect="blur"
                      className="mt-3 lazy"
                      alt="FG Group"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/img/score.webp"
                      }
                    />
                  </div>
                  <h2 className="h5-fs mt-3">Case Study Based Project</h2>
                </div>
              </div>
            </div>
          </div> */}
        <LazyLoadImage
          effect="blur"
          alt="FG Group"
          src={
            process.env.PUBLIC_URL + "/assets/images/img/what-does-this-courses-include.webp"
          }
          className="img-fluid mt-2 d-none d-md-block"
        />
        <LazyLoadImage
          effect="blur"
          alt="FG Group"
          src={
            process.env.PUBLIC_URL + "/assets/images/img/what-does-this-courses-include-mobile.webp"
          }
          className="img-fluid mt-2 d-block d-md-none"
        />
      </div>
    </section>
  );
};

export default CoursesInclude;
