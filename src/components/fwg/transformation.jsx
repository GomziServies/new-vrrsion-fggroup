import React from "react";
import OwlCarousel from "react-owl-carousel";

const Transformation = () => {
  return (
    // className="bg-fwg-blue"
    <section className="studentsreview-1">
      <div className="container-fluid">
        <div className="container py-5 d-none d-md-block">
          <div className="covid text-center">
            <h2 className="h2-fs">
              <span style={{ color: "#00afef", margin: "0px" }}>
                How We works on{" "}
              </span>{" "}
              your transformation
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-3"></div>
          <div className="slider-container">
            <OwlCarousel
              loop
              autoPlay
              dots={false}
              nav={true}
              id="owl-demo12"
              className="owl-carousel owl-theme"
              navText={[
                '<i class="fas fa-arrow-left"></i>',
                '<i class="fas fa-arrow-right"></i>',
              ]}
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
              }}
            >
              <div className="item mx-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/program-step-1.webp"
                  }
                  style={{ borderRadius: "10px" }}
                  className="img-fluid"
                  alt="Fg Group"
                />
              </div>
              {/* <div className="item mx-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/program-step-2.webp"
                  }
                  style={{ borderRadius: "10px" }}
                  className="img-fluid"
                  alt="Fg Group"
                />
              </div> */}
              <div className="item mx-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/program-step-3.webp"
                  }
                  style={{ borderRadius: "10px" }}
                  className="img-fluid"
                  alt="Fg Group"
                />
              </div>
              <div className="item mx-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/program-step-4.webp"
                  }
                  style={{ borderRadius: "10px" }}
                  className="img-fluid"
                  alt="Fg Group"
                />
              </div>
              <div className="item mx-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/program-step-5.webp"
                  }
                  style={{ borderRadius: "10px" }}
                  className="img-fluid"
                  alt="Fg Group"
                />
              </div>
              <div className="item mx-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/program-step-6.webp"
                  }
                  style={{ borderRadius: "10px" }}
                  className="img-fluid"
                  alt="Fg Group"
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="container py-2 d-block d-md-none">
        <div className="covid text-center">
            <h2 className="h2-fs">
              <span style={{ color: "#00afef", margin: "0px" }}>
                How We work on{" "}
              </span>{" "}
              your transformation
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-3"></div>
          <div className="row">
            <div className="col-6 mb-3">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fwg/program-step-1.webp"
                }
                style={{ borderRadius: "10px" }}
                className="img-fluid"
                alt="Fg Group"
              />
            </div>
            <div className="col-6 mb-3">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fwg/program-step-3.webp"
                }
                style={{ borderRadius: "10px" }}
                className="img-fluid"
                alt="Fg Group"
              />
            </div>
            <div className="col-6 mb-3">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fwg/program-step-4.webp"
                }
                style={{ borderRadius: "10px" }}
                className="img-fluid"
                alt="Fg Group"
              />
            </div>
            <div className="col-6 mb-3">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fwg/program-step-5.webp"
                }
                style={{ borderRadius: "10px" }}
                className="img-fluid"
                alt="Fg Group"
              />
            </div>
            {/* <div className="col-6 mb-3">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fwg/program-step-6.webp"
                }
                style={{ borderRadius: "10px" }}
                className="img-fluid"
                alt="Fg Group"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
