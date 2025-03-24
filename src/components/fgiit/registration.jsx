import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";


const RegistrationProcess = () => {

  return (
    <>
      <div className="d-none d-md-block">
        {/* <div className="row">
          <div className="col-sm-12 text-center">
            <div className="Info">
              <h2 className="h2-fs">registration process</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-3 ">
            <div className="tabata blog2 py-5 imgty text-center">
              <LazyLoadImage
                effect="blur"
                className="lazy"
                alt="fg img"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/cashless-payment.webp"
                }
              />
              <h2 className="h5-fs mt-3">Pay Via The Link</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-3 position-relative">
            <div className="tabata blog2 py-5 imgty text-center">
              <LazyLoadImage
                effect="blur"
                className="lazy"
                alt="fg img"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/sending.webp"
                }
              />
              <h2 className="h5-fs mt-3">Get Receipt & App Id Password</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-3 position-relative">
            <div className="tabata blog2 py-5 imgty text-center">
              <LazyLoadImage
                effect="blur"
                className="lazy"
                alt="fg img"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/responsive-design.webp"
                }
              />
              <h2 className="h5-fs mt-3">Watch Recorded Session</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-3 position-relative">
            <div className="tabata blog2 py-5 imgty text-center">
              <LazyLoadImage
                effect="blur"
                className="lazy"
                alt="fg img"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/open-book.webp"
                }
              />
              <h2 className="h5-fs mt-3">Enjoy Book Material</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-3 position-relative">
            <div className="tabata blog2 py-5 imgty text-center">
              <LazyLoadImage
                effect="blur"
                className="lazy"
                alt="fg img"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/online-test.webp"
                }
              />
              <h2 className="h5-fs mt-3">Give Exam & Project Over App</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-3 position-relative">
            <div className="tabata blog2 py-5 imgty text-center">
              <LazyLoadImage
                effect="blur"
                className="lazy"
                alt="fg img"
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/img/certificate.webp"
                }
              />
              <h2 className="h5-fs mt-3">Receive Your E-certificate</h2>
            </div>
          </div>
        </div> */}
        <LazyLoadImage
          effect="blur"
          alt="FG Group"
          src={
            process.env.PUBLIC_URL + "/assets/images/img/registration-process-flexible.webp"
          }
          className="img-fluid mt-5"
        />
      </div>
      <div className="d-block d-md-none">
        {/* <div className="col-lg-12">
          <div className="Info text-center">
            <h2 className="h2-fs">registration process</h2>
          </div>
          <div>
            <div className="item mx-2">
              <div className="col-lg-4 col-md-6 mt-3 ">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    alt="fg img"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/cashless-payment.webp"
                    }
                    style={{
                      width: "64px!important",
                      margin: "auto!important",
                    }}
                  />
                  <h2 className="h5-fs mt-3">Pay Via The Link</h2>
                </div>
              </div>
            </div>
            <div className="item mx-2">
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    alt="fg img"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/sending.webp"
                    }
                    style={{
                      width: "64px!important",
                      margin: "auto!important",
                    }}
                  />
                  <h2 className="h5-fs mt-3">
                    Get Receipt & App Id Password
                  </h2>
                </div>
              </div>
            </div>
            <div className="item mx-2">
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    alt="fg img"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/responsive-design.webp"
                    }
                    style={{
                      width: "64px!important",
                      margin: "auto!important",
                    }}
                  />
                  <h2 className="h5-fs mt-3">Watch Recorded Session</h2>
                </div>
              </div>
            </div>
            <div className="item mx-2">
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    alt="fg img"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/open-book.webp"
                    }
                    style={{
                      width: "64px!important",
                      margin: "auto!important",
                    }}
                  />
                  <h2 className="h5-fs mt-3">Enjoy Book Material</h2>
                </div>
              </div>
            </div>
            <div className="item mx-2">
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    alt="fg img"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/online-test.webp"
                    }
                    style={{
                      width: "64px!important",
                      margin: "auto!important",
                    }}
                  />
                  <h2 className="h5-fs mt-3">Give Exam & Project Over App</h2>
                </div>
              </div>
            </div>
            <div className="item mx-2">
              <div className="col-lg-4 col-md-6 mt-3 position-relative">
                <div className="tabata blog2 py-5 imgty text-center">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    alt="fg img"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/certificate.webp"
                    }
                    style={{
                      width: "64px!important",
                      margin: "auto!important",
                    }}
                  />
                  <h2 className="h5-fs mt-3">Receive Your E-certificate</h2>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <LazyLoadImage
          effect="blur"
          alt="FG Group"
          src={
            process.env.PUBLIC_URL + "/assets/images/img/registration-process-flexible-mobile.webp"
          }
          className="img-fluid mt-5"
        />
      </div>
    </>
  );
};

export default RegistrationProcess;
