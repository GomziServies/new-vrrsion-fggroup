import React from "react";

const HowItWork = () => {
  return (
    <section className="mt-md-5 mt-3">
      <div className="container-fluid px-0 px-md-3">
        <div className="container px-0 px-md-3">
          <div className="covid text-center">
            <h2 className="h2-fs nunito-font" style={{ color: "#333" }}>
              How it <span className="m-0 text-blue-color">Work</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-md-4 mb-2"></div>
          <div className="full-img-app">
            <div className="d-none d-md-block">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/fwg/app-screens.webp"
                }
                className="img-fluid"
                alt="How it Works"
              />
            </div>
            <div className="d-block d-md-none">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/fwg/app-screens-mobile.webp"
                }
                className="img-fluid"
                alt="How it Works"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
