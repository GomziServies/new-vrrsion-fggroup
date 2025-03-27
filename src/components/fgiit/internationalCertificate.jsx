import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const InternationalCertificates = () => {
  return (
    <>
      <section className="mt-3">
        <div className="container-fluid">
          <div className="container tabata">
            <div className="covid text-center">
              <h2 className="mt-2 h2-fs">
                Internationally{" "}
                <span className="m-0 text-blue-color">
                  Accredited Certification
                </span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-5"></div>
            <OwlCarousel
              loop
              autoplay
              dots={false}
              id="owl-review"
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
              }}
            >
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/aas-certi-9.webp"
                  }
                  alt="Pass out Student"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/aas-certi-7.webp"
                  }
                  alt="Pass out Student"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/aas-certi-8.webp"
                  }
                  alt="Pass out Student"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/aas-certi-6.webp"
                  }
                  alt="Pass out Student"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/aas-certi-1.webp"
                  }
                  alt="Pass out Student"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/aas-certi-2.webp"
                  }
                  alt="Pass out Student"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/aas-certi-3.webp"
                  }
                  alt="Pass out Student"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/aas-certi-4.webp"
                  }
                  alt="Pass out Student"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/aas-certi-5.webp"
                  }
                  alt="Pass out Student"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default InternationalCertificates;
