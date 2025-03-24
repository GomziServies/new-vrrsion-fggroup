import React from "react";

import OwlCarousel from "react-owl-carousel";

const OutstandingReview = () => {
  return (
    <section className="convocation-section">
      <div className="container-fluid">
        <div className="container pt-md-2">
          <div className="col-md-12 px-md-5 pb-md-5 pt-md-3">
            <div className="covid text-center mt-0">
              <h2 className="h2-fs">
                batch{" "}
                <span className="m-0 text-blue-color">convocation</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-md-4 mb-3"></div>
            <OwlCarousel
              loop
              autoPlay
              dots={false}
              id="owl-demo12"
              className="owl-carousel owl-theme"
              responsive={{
                0: {
                  items: 1,
                },
                600: {
                  items: 2,
                },
                1000: {
                  items: 2,
                },
              }}>
              <div className="item mx-2">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/batch-12.jpeg"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item mx-2">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/batch-11.jpeg"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item mx-2">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/batch-10.jpeg"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item mx-2">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/fgiit/batch-9.jpeg"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item mx-2">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/fgiit/batch-8.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
              <div className="item mx-2">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/fgiit/batch-7.webp"
                  }
                  width="100%"
                  alt="Offline Batch"
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutstandingReview;
