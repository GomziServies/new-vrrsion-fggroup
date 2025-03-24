import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const AlumaniEventsPhotos = () => {
  return (
    <>
      <section className="">
        <div className="container">
          <div className="covid text-center mb-3 mt-5">
            <h2 className="h2-fs">
              Alumani <span className="m-0 text-blue-color">Events Photos</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-4"></div>
          <div>
            <div className="pb-5">
              <OwlCarousel
                loop
                autoplay
                dots={false}
                id="owl-books"
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
                }}
              >
                <div className="item mx-3">
                  <div className="">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/elumani22/image1.webp"
                      }
                      alt="FG Group"
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/elumani22/image2.webp"
                      }
                      alt="FG Group"
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/elumani22/image3.webp"
                      }
                      alt="FG Group"
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/elumani22/image4.webp"
                      }
                      alt="FG Group"
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/elumani22/image5.webp"
                      }
                      alt="FG Group"
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                </div>
                <div className="item mx-3">
                  <div className="">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/elumani22/image6.webp"
                      }
                      alt="FG Group"
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlumaniEventsPhotos;
