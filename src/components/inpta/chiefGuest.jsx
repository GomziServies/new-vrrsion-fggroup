import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ChiefGuestAlumni = () => {
  
 
  return (
    <>
      <section className="">
        <div className="covid text-center mb-1 mt-5">
            <h2 className="h2-fs">
            Honorable <span className="m-0 text-blue-color">chief guest</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-4"></div>
        <div className="container-fluid">
          <div className="">
            <OwlCarousel
              loop
              autoPlay
              dots={false}
              id="owl-guest"
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
              <div className="item mx-2 my-3">
                <div className="p-5">
                  <div className="ply1">
                    <img
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/1-chife.webp"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="item mx-2 my-3">
                <div className="p-5">
                  <div className="ply1">
                    <img
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/2-chife.webp"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="item mx-2 my-3">
                <div className="p-5">
                  <div className="ply1">
                    <img
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/3-chife.webp"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="item mx-2 my-3">
                <div className="p-5">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/4-chife.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                    />
                  </div>
                </div>
              </div>
              <div className="item mx-2 my-3">
                <div className="p-5">
                  <div className="ply1">
                    <img
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/5-chife.webp"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="item mx-2 my-3">
                <div className="p-5">
                  <div className="ply1">
                    <img
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/6-chife.webp"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="item mx-2 my-3">
                <div className="p-5">
                  <div className="ply1">
                    <img
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="client journey"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/7-chife.webp"
                      }
                    />
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default ChiefGuestAlumni;
