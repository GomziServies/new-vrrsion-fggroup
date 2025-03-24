import React from "react";
import OwlCarousel from "react-owl-carousel";

const DeliveredBook = () => { 
    return (
        <section className="margintop">
        <div className="container-fluid">
          <div className="container tabata">
          <div className="covid text-center">
              <h2 className="mt-2 h2-fs">
              Order your book and get it delivered to{" "}
                <span className="m-0 text-blue-color">
                your home
                </span>
              </h2>
            </div>
            <OwlCarousel
              loop
              autoPlay
              dots={false}
              id="owl-demo1"
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
                    "/assets/images/img/rtp-2.0-img-2.webp"
                  }
                  alt="Rapid Transformation Program Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/rtp-2.0-img.webp"
                  }
                  alt="Rapid Transformation Program Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/rtp-book-4.webp"
                  }
                  alt="Rapid Transformation Program Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/rtp-book-1.webp"
                  }
                  alt="Rapid Transformation Program Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/rtp-book-2.webp"
                  }
                  alt="Rapid Transformation Program Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/rtp-book-3.webp"
                  }
                  alt="Rapid Transformation Program Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/rtp-book-5.webp"
                  }
                  alt="Rapid Transformation Program Book"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    );
};

export default DeliveredBook;
