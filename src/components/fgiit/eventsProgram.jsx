import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const EventsProgramFgiit = () => {
  
 
  return (
    <>
    <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="col-12 mt-5">
              <div className="demoo text-center mb-4">
                <h2 style={{ color: "#333" }} className="m-0 h2-fs">
                  Events and{" "}
                  <span className="m-0 text-blue-color">
                    Training Program
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3 mb-md-5"></div>
            </div>
            <OwlCarousel
              loop
              autoplay
              dots={true}
              id="owl-demo"
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
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/books-7.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/gym-mang-mobile-4.webp"
                  }
                  alt="FGIITAN"
                  className="lazy"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/books-2.webp"
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
                      process.env.PUBLIC_URL + "/assets/images/img/books-6.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/fgiit/member.webp"
                  }
                  alt="FGIITAN"
                  className="lazy"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/gym-mang-mobile-6.webp"
                  }
                  alt="FGIITAN"
                  className="lazy"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/books-4.webp"
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
                      process.env.PUBLIC_URL + "/assets/images/img/books-1.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fgiit/member-2.webp"
                  }
                  alt="FGIITAN"
                  className="lazy"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/books-3.webp"
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
                      process.env.PUBLIC_URL + "/assets/images/img/books-5.webp"
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
      </section>
     
    </>
  );
};

export default EventsProgramFgiit;
