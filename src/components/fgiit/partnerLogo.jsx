import React from "react";

import OwlCarousel from "react-owl-carousel";

const PartnerLogo = () => {
  return (
    <section className="margintop">
      <div className="container-fluid">
        <div className="container">
          <div className="covid text-center">
            <h2 className="h2-fs">
              Partner Brands for
              <span style={{ color: "#6eb500", margin: "0px" }}>
                {" "}
                Job Placement
              </span>
            </h2>
            <div className="thm-bg-clr dector"></div>
          </div>
        </div>
        <OwlCarousel
          loop
          autoplay
          dots={false}
          id="owl-demo11"
          className="owl-carousel owl-theme d-none d-md-block"
          responsive={{
            0: {
              items: 2,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 6,
            },
          }}
        >
          <div className="item mx-3">
            <div className="tabata imgty text-center">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/img/stallon.webp"}
                className="gomzi lazy"
                width="100%"
                alt="fggroup"
              />
              <p className="mt-4 text-black fw-bold">Stallone Gym</p>
            </div>
          </div>
          <div className="item mx-3">
            <div className="tabata imgty text-center">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/mahaveer.webp"
                }
                className="gomzi lazy"
                width="100%"
                alt="fggroup"
              />
              <p className="mt-4 text-black fw-bold">Mahavir Hospital</p>
            </div>
          </div>
          <div className="item mx-3">
            <div className="tabata imgty text-center">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/img/gomzi1.webp"}
                className="gomzi lazy"
                width="100%"
                alt="fggroup"
              />
              <p className="mt-4 text-black fw-bold">Fitness With Gomzi</p>
            </div>
          </div>
          <div className="item mx-3">
            <div className="tabata imgty text-center">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/img/js.webp"}
                className="gomzi lazy"
                width="100%"
                alt="fggroup"
              />
              <p className="mt-4 text-black fw-bold">JS Fitness</p>
            </div>
          </div>
          <div className="item mx-3">
            <div className="tabata imgty text-center">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/spartena.webp"
                }
                className="gomzi lazy"
                width="100%"
                alt="fggroup"
              />
              <p className="mt-4 text-black fw-bold">Sportina Gym</p>
            </div>
          </div>
          <div className="item mx-3">
            <div className="tabata imgty text-center">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/img/shapers.webp"}
                className="gomzi lazy"
                width="100%"
                alt="fggroup"
              />
              <p className="mt-4 text-black fw-bold">Shapers Gym</p>
            </div>
          </div>
          <div className="item mx-3">
            <div className="tabata imgty text-center">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/beastin-gym.webp"
                }
                className="gomzi lazy"
                width="100%"
                alt="fggroup"
              />
              <p className="mt-4 text-black fw-bold">Beastin Gym</p>
            </div>
          </div>
          <div className="item mx-3">
            <div className="tabata imgty text-center">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/titan-fitness.webp"
                }
                className="gomzi lazy"
                width="100%"
                alt="fggroup"
              />
              <p className="mt-4 text-black fw-bold">Titan Fitness</p>
            </div>
          </div>
          <div className="item mx-3">
            <div className="tabata imgty text-center">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/b-natural.webp"
                }
                className="gomzi lazy"
                width="100%"
                alt="fggroup"
              />
              <p className="mt-4 text-black fw-bold">B Natural Gym</p>
            </div>
          </div>
          <div className="item mx-3">
            <div className="tabata imgty text-center">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/muscle-mind.webp"
                }
                className="gomzi lazy"
                width="100%"
                alt="fggroup"
              />
              <p className="mt-4 text-black fw-bold">Muscle And Mind</p>
            </div>
          </div>
          <div className="item mx-3">
            <div className="tabata imgty text-center">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/av-fitness.webp"
                }
                className="gomzi lazy"
                width="100%"
                alt="fggroup"
              />
              <p className="mt-4 text-black fw-bold">AV Fitness</p>
            </div>
          </div>
          <div className="item mx-3">
            <div className="tabata imgty text-center">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/fgdigital-1.webp"
                }
                className="gomzi lazy"
                width="100%"
                alt="fggroup"
              />
              <p className="mt-4 text-black fw-bold">FG Digital</p>
            </div>
          </div>
          <div className="item mx-3">
            <div className="tabata imgty text-center">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/img/sahyog.webp"}
                className="gomzi lazy"
                width="100%"
                alt="fggroup"
              />
              <p className="mt-4 text-black fw-bold">Sahyog clinic</p>
            </div>
          </div>
          <div className="item mx-3">
            <div className="tabata imgty text-center">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/img/w8.webp"}
                className="gomzi lazy"
                width="100%"
                alt="fggroup"
              />
              <p className="mt-4 text-black fw-bold">W8 Fitness</p>
            </div>
          </div>
          <div className="item mx-3">
            <div className="tabata imgty text-center">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/green-leaf.webp"
                }
                className="gomzi lazy"
                width="100%"
                alt="fggroup"
              />
              <p className="mt-4 text-black fw-bold">green leaf hospital</p>
            </div>
          </div>
          <div className="item mx-3">
            <div className="tabata imgty text-center">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/hercules.webp"
                }
                className="gomzi lazy"
                width="100%"
                alt="fggroup"
              />
              <p className="mt-4 text-black fw-bold">hercules fitness</p>
            </div>
          </div>
          <div className="item mx-3">
            <div className="tabata imgty text-center">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/country-side.webp"
                }
                className="gomzi lazy"
                width="100%"
                alt="fggroup"
              />
              <p className="mt-4 text-black fw-bold">
                Countryside International School
              </p>
            </div>
          </div>
        </OwlCarousel>
        <div className="d-md-none d-block">
          <div className="row">
            <div className="col-6 item">
              <div className="tabata imgty text-center">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/stallon.webp"
                  }
                  className="gomzi lazy"
                  width="100%"
                  alt="fggroup"
                />
                <p className="mt-4 text-black fw-bold">Stallone Gym</p>
              </div>
            </div>
            <div className="col-6 item">
              <div className="tabata imgty text-center">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/mahaveer.webp"
                  }
                  className="gomzi lazy"
                  width="100%"
                  alt="fggroup"
                />
                <p className="mt-4 text-black fw-bold">Mahavir Hospital</p>
              </div>
            </div>
            <div className="col-6 item">
              <div className="tabata imgty text-center">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/gomzi1.webp"
                  }
                  className="gomzi lazy"
                  width="100%"
                  alt="fggroup"
                />
                <p className="mt-4 text-black fw-bold">Fitness With Gomzi</p>
              </div>
            </div>
            <div className="col-6 item">
              <div className="tabata imgty text-center">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/img/js.webp"}
                  className="gomzi lazy"
                  width="100%"
                  alt="fggroup"
                />
                <p className="mt-4 text-black fw-bold">JS Fitness</p>
              </div>
            </div>
            <div className="col-6 item">
              <div className="tabata imgty text-center">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/img/w8.webp"}
                  className="gomzi lazy"
                  width="100%"
                  alt="fggroup"
                />
                <p className="mt-4 text-black fw-bold">W8 Fitness</p>
              </div>
            </div>
            <div className="col-6 item">
              <div className="tabata imgty text-center">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/shapers.webp"
                  }
                  className="gomzi lazy"
                  width="100%"
                  alt="fggroup"
                />
                <p className="mt-4 text-black fw-bold">Shapers Gym</p>
              </div>
            </div>
            <div className="col-6 item">
              <div className="tabata imgty text-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/beastin-gym.webp"
                  }
                  className="gomzi lazy"
                  width="100%"
                  alt="fggroup"
                />
                <p className="mt-4 text-black fw-bold">Beastin Gym</p>
              </div>
            </div>
            <div className="col-6 item">
              <div className="tabata imgty text-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/titan-fitness.webp"
                  }
                  className="gomzi lazy"
                  width="100%"
                  alt="fggroup"
                />
                <p className="mt-4 text-black fw-bold">Titan Fitness</p>
              </div>
            </div>
            <div className="col-6 item">
              <div className="tabata imgty text-center">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/b-natural.webp"
                  }
                  className="gomzi lazy"
                  width="100%"
                  alt="fggroup"
                />
                <p className="mt-4 text-black fw-bold">B Natural Gym</p>
              </div>
            </div>
            <div className="col-6 item">
              <div className="tabata imgty text-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/muscle-mind.webp"
                  }
                  className="gomzi lazy"
                  width="100%"
                  alt="fggroup"
                />
                <p className="mt-4 text-black fw-bold">Muscle And Mind</p>
              </div>
            </div>
            <div className="col-6 item">
              <div className="tabata imgty text-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/av-fitness.webp"
                  }
                  className="gomzi lazy"
                  width="100%"
                  alt="fggroup"
                />
                <p className="mt-4 text-black fw-bold">AV Fitness</p>
              </div>
            </div>
            <div className="col-6 item">
              <div className="tabata imgty text-center">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/sahyog.webp"
                  }
                  className="gomzi lazy"
                  width="100%"
                  alt="fggroup"
                />
                <p className="mt-4 text-black fw-bold">Sahyog clinic</p>
              </div>
            </div>
            {/* <div className="col-6 item">
              <div className="tabata imgty text-center">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/spartena.webp"
                  }
                  className="gomzi lazy"
                  width="100%"
                  alt="fggroup"
                />
                <p className="mt-4 text-black fw-bold">Sportina Gym</p>
              </div>
            </div>
            <div className="col-6 item">
              <div className="tabata imgty text-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/green-leaf.webp"
                  }
                  className="gomzi lazy"
                  width="100%"
                  alt="fggroup"
                />
                <p className="mt-4 text-black fw-bold">green leaf hospital</p>
              </div>
            </div>
            <div className="col-6 item">
              <div className="tabata imgty text-center">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/hercules.webp"
                  }
                  className="gomzi lazy"
                  width="100%"
                  alt="fggroup"
                />
                <p className="mt-4 text-black fw-bold">hercules fitness</p>
              </div>
            </div>
            <div className="col-6 item">
              <div className="tabata imgty text-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/country-side.webp"
                  }
                  className="gomzi lazy"
                  width="100%"
                  alt="fggroup"
                />
                <p className="mt-4 text-black fw-bold">
                  Countryside International School
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogo;
