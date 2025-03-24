import React from "react";

import OwlCarousel from "react-owl-carousel";

const PlacementReview = () => {
  return (
    <section className="margintop convocation-section">
      <div className="container-fluid">
        <div className="container pb-4 pb-md-5 pt-3">
          <div className="covid text-center">
            <h2 className="h2-fs">
              Placement{" "}
              <span className="m-0 text-blue-color">Review</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-4"></div>
          <OwlCarousel
            loop
            autoPlay
            dots={false}
            id="owl-demo5"
            className="owl-carousel owl-theme"
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 2,
              },
              1000: {
                items: 3,
              },
            }}>
            <div className="item mx-3">
              <img
                className="lazy"
                width="100%"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/placeintern/job-10.webp"
                }
                alt="job placement by our academy"
              />
            </div>
            <div className="item mx-3">
              <img
                className="lazy"
                width="100%"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/placeintern/job-11.webp"
                }
                alt="job placement by our academy"
              />
            </div>
            <div className="item mx-3">
              <img
                className="lazy"
                width="100%"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/placeintern/job-12.webp"
                }
                alt="job placement by our academy"
              />
            </div>
            <div className="item mx-3">
              <img
                className="lazy"
                width="100%"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/placeintern/job-15.webp"
                }
                alt="job placement by our academy"
              />
            </div>
            <div className="item mx-3">
              <img
                className="lazy"
                width="100%"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/placeintern/job-14.webp"
                }
                alt="job placement by our academy"
              />
            </div>
            <div className="item mx-3">
              <img
                className="lazy"
                width="100%"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/placeintern/job-4.webp"
                }
                alt="job placement by our academy"
              />
            </div>
            <div className="item mx-3">
              <img
                className="lazy"
                width="100%"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/placeintern/job-2.webp"
                }
                alt="job placement by our academy"
              />
            </div>
            <div className="item mx-3">
              <img
                className="lazy"
                width="100%"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/placeintern/job-5.webp"
                }
                alt="job placement by our academy"
              />
            </div>
            <div className="item mx-3">
              <img
                className="lazy"
                width="100%"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/placeintern/job-8.webp"
                }
                alt="job placement by our academy"
              />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default PlacementReview;
