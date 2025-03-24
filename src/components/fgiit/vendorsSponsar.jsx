import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const VendorsAndSponsor = () => {
  
 
  return (
    <>
     <section style={{ marginTop: "20px" }}>
        <div className="container-fluid p-0">
          <div className="d-none d-md-block">
            <div className="container">
              <div className="col-12 mt-4">
                <div className="container">
                  <div className="demoo text-center mb-2 m-0 bodybuilding-image-1">
                    <h2 style={{ color: "#ffffff" }} className="m-0 h2-fs">
                      VENDOR AND SPONSOR
                    </h2>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-4">
                      <div
                        className="scheduling-card text-center p-4"
                        style={{ backgroundColor: "#000" }}
                      >
                        <div className="col-12 p-0">
                          <div className="tabata">
                            <LazyLoadImage
                              effect="blur"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/mix-img/fitit-mobile.jpg"
                              }
                              width="91%"
                              alt="FG Group"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div
                        className="scheduling-card text-center  p-4"
                        style={{ backgroundColor: "#000" }}
                      >
                        <div className="col-12 p-0">
                          <div className="tabata">
                            <LazyLoadImage
                              effect="blur"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/mix-img/atoz-logo.jpg"
                              }
                              width="86%"
                              alt="FG Group"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div
                        className="scheduling-card text-center p-4"
                        style={{ backgroundColor: "#000" }}
                      >
                        <div className="col-12 p-0">
                          <div className="tabata">
                            <LazyLoadImage
                              effect="blur"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/mix-img/takshak-logo.jpg"
                              }
                              width="100%"
                              alt="FG Group"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="scheduling-card text-center p-4">
                        <div className="col-12 p-0">
                          <div className="tabata">
                            <LazyLoadImage
                              effect="blur"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/mix-img/gcs-logo.png"
                              }
                              width="100%"
                              alt="FG Group"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="scheduling-card text-center p-4">
                        <div className="col-12 p-0">
                          <div className="tabata">
                            <LazyLoadImage
                              effect="blur"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/fgiit.webp"
                              }
                              width="54%"
                              alt="FG Group"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="scheduling-card text-center p-4">
                        <div className="col-12 p-0">
                          <div className="tabata">
                            <LazyLoadImage
                              effect="blur"
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/img/gomzi.webp"
                              }
                              width="100%"
                              alt="FG Group"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-block d-md-none">
            <div className="">
              <div className="col-12 mt-4">
                <div className="container">
                  <div className="demoo text-center mb-2 m-0 bodybuilding-image-1">
                    <h2 style={{ color: "#ffffff" }} className="m-0 h2-fs">
                      VENDOR AND SPONSOR
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-5 pb-3">
                <div id="owl-sponser" className="owl-carousel owl-theme">
                  <div className="item mx-3">
                    <div className="scheduling-card text-center">
                      <div className="col-12 p-0">
                        <div className="tabata">
                          <LazyLoadImage
                            effect="blur"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/mix-img/gcs-logo.png"
                            }
                            width="100%"
                            alt="FG Group"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-3">
                    <div
                      className="scheduling-card text-center  p-4"
                      style={{ backgroundColor: "#000" }}
                    >
                      <div className="col-12 p-0">
                        <div className="tabata">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/mix-img/atoz-logo.jpg"
                            }
                            width="80%"
                            alt="FG Group"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-3">
                    <div
                      className="scheduling-card text-center "
                      style={{ backgroundColor: "#000" }}
                    >
                      <div className="col-12 p-0">
                        <div className="tabata">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/mix-img/takshak-logo.jpg"
                            }
                            width="95%"
                            alt="FG Group"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-3">
                    <div className="scheduling-card text-center">
                      <div className="col-12 p-0">
                        <div className="tabata">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/fgiit.webp"
                            }
                            width="53%"
                            alt="FG Group"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-3">
                    <div className="scheduling-card text-center p-4">
                      <div className="col-12 p-0">
                        <div className="tabata">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/img/gomzi.webp"
                            }
                            width="90%"
                            alt="FG Group"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item mx-3">
                    <div
                      className="scheduling-card text-center p-4"
                      style={{ backgroundColor: "#000" }}
                    >
                      <div className="col-12 p-0">
                        <div className="tabata">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/mix-img/fitit-mobile.jpg"
                            }
                            width="80%"
                            alt="FG Group"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorsAndSponsor;
