import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

const Coaches = () => {
  return (
    <section className="py-3 studentsreview-1">
      <div className="container-fluid">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="covid text-center">
                <h2 className='h2-fs' style={{ color: "#333" }}>
                  Meet Our
                  <span style={{ color: "#00afef", margin: "0px" }}>
                    {" "}
                    Coaches
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-3"></div>
              <div className="col-md-12 text-center">
                <h2 className="h6-fs text-muted">
                  "Expert coaches, dieticians, and personal trainers are here to
                  help you with your health and fitness journey."
                </h2>
              </div>
            </div>
            <OwlCarousel
              loop
              id="owl-active"
              className="owl-carousel owl-theme mt-4"
              navText={[
                '<i class="fas fa-arrow-left"></i>',
                '<i class="fas fa-arrow-right"></i>',
              ]}
              dots={false}
              nav={true}
              responsive={{
                0: {
                  items: 1,
                  nav: false,
                },
                600: {
                  items: 2,
                },
                1000: {
                  items: 3,
                },
              }}
            >
              <div className="item mx-2 mx-md-4">
                <div className="box-coach shadow-sm p-4">
                  <div className="image-wrapper mb-3">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/coaches-1.webp"
                      }
                      alt="Dietitian"
                    />
                  </div>
                  <div className="box-desc">
                    <h2 className="h5-fs">
                      <Link
                        to="http://gcsconsultant.fggroup.in/gautam_jani_official"
                        style={{ color: "#000" }}
                      >
                        Dr.Gautam Jani
                      </Link>
                    </h2>
                    <p>Dietitian</p>
                  </div>
                </div>
              </div>
              <div className="item mx-2 mx-md-4">
                <div className="box-coach shadow-sm p-4">
                  <div className="image-wrapper mb-3">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/coaches-2.webp"
                      }
                      alt="Dietitian"
                    />
                  </div>
                  <div className="box-desc">
                    <h2 className="h5-fs">Foram Desai</h2>
                    <p>Dietitian</p>
                  </div>
                </div>
              </div>
              <div className="item mx-2 mx-md-4">
                <div className="box-coach shadow-sm p-4">
                  <div className="image-wrapper mb-3">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/coaches-6.webp"
                      }
                      alt="Trainer"
                    />
                  </div>
                  <div className="box-desc">
                    <h2 className="h5-fs">Satish</h2>
                    <p>Trainer</p>
                  </div>
                </div>
              </div>
              <div className="item mx-2 mx-md-4">
                <div className="box-coach shadow-sm p-4">
                  <div className="image-wrapper mb-3">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/coaches-5.webp"
                      }
                      alt="Trainer"
                    />
                  </div>
                  <div className="box-desc">
                    <h2 className="h5-fs">Kaushik</h2>
                    <p>Trainer</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
