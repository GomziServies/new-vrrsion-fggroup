import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FlexibleAllReviews = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };
  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <section className="mt-3">
        <div className="container-fluid">
            <div className="col-md-12">
              <div className="covid text-center mt-3">
                <h2 className="h2-fs">
                  {/* Outstanding{" "} */}
                  <span className="m-0 text-blue-color">Testimonials</span>
                </h2>
                <div className="thm-bg-clr dector mb-md-4 mb-3"></div>
              </div>
            </div>
          <div className="container d-md-block d-none">
            {/* Distance Learning Certificate */}
            <div className="row pt-4">
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
                      "/assets/images/img/flexible/aas-flexible-certificate.webp"
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
                      "/assets/images/img/flexible/dpt-flexible-certificate.webp"
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
                <div className="item mx-3">
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/flexible-aas-certificate.webp"
                    }
                    alt="Pass out Student"
                    width="100%"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </OwlCarousel>
            </div>
            {/* Video Reviews */}
            <div className="row pt-2 pb-2">
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews1.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("VzriO8WZVkM")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews2.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("MBTps76dKLs")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews3.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("u6VPK9uTt9g")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews4.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("uxkhaMgAeAw")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews5.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("4TCopSUPn_w")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews6.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("4gr009F6XBk")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Placement Review */}
            <div className="row pt-4">
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
                    items: 3,
                  },
                  1000: {
                    items: 3,
                  },
                }}
              >
                <div className="item px-3">
                  <img
                    className="lazy"
                    width="100%"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/placeintern/job-10.webp"
                    }
                    alt="job placement by our academy"
                  />
                </div>
                <div className="item px-3">
                  <img
                    className="lazy"
                    width="100%"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/placeintern/job-11.webp"
                    }
                    alt="job placement by our academy"
                  />
                </div>
                <div className="item px-3">
                  <img
                    className="lazy"
                    width="100%"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/placeintern/job-12.webp"
                    }
                    alt="job placement by our academy"
                  />
                </div>
                <div className="item px-3">
                  <img
                    className="lazy"
                    width="100%"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/placeintern/job-15.webp"
                    }
                    alt="job placement by our academy"
                  />
                </div>
                <div className="item px-3">
                  <img
                    className="lazy"
                    width="100%"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/placeintern/job-14.webp"
                    }
                    alt="job placement by our academy"
                  />
                </div>
                <div className="item px-3">
                  <img
                    className="lazy"
                    width="100%"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/placeintern/job-4.webp"
                    }
                    alt="job placement by our academy"
                  />
                </div>
                <div className="item px-3">
                  <img
                    className="lazy"
                    width="100%"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/placeintern/job-2.webp"
                    }
                    alt="job placement by our academy"
                  />
                </div>
                <div className="item px-3">
                  <img
                    className="lazy"
                    width="100%"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/placeintern/job-5.webp"
                    }
                    alt="job placement by our academy"
                  />
                </div>
                <div className="item px-3">
                  <img
                    className="lazy"
                    width="100%"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/placeintern/job-8.webp"
                    }
                    alt="job placement by our academy"
                  />
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="d-md-none d-block">
            {/* Distance Learning Certificate */}
            <div className="row pt-4">
              <div className="col-6 px-1">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/flexible/aas-flexible-certificate.webp"
                  }
                  alt="Pass out Student"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-6 px-1">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/flexible/dpt-flexible-certificate.webp"
                  }
                  alt="Pass out Student"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-6 pt-2 px-1">
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
              <div className="col-6 pt-2 px-1">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/flexible-aas-certificate.webp"
                  }
                  alt="Pass out Student"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
            {/* Video Reviews */}
            <div className="row pt-2 pb-2">
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews1.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("VzriO8WZVkM")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews2.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("MBTps76dKLs")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews3.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("u6VPK9uTt9g")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews4.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("uxkhaMgAeAw")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews5.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("4TCopSUPn_w")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="ply1">
                  <LazyLoadImage
                    effect="blur"
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/lecture_reviews6.webp"
                    }
                    width="100%"
                    style={{ borderRadius: "10px" }}
                    alt="online fitness courses review"
                  />
                  <div className="ply3">
                    <a
                      className="custom"
                      onClick={() => openVideoModal("4gr009F6XBk")}
                      aria-label="Fg Group"
                    >
                      <i className="far fa-play-circle fs-35 text-white"></i>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
            {/* Placement Review */}
            <div>
              <div className="row pt-2 mb-2">
                {/* <OwlCarousel
                    loop
                    nav
                    autoplay
                    dots={false}
                    className="owl-carousel owl-theme owl-nav-1"
                    navText={[
                      '<i class="fas fa-arrow-left owl-nav-arrow"></i>',
                      '<i class="fas fa-arrow-right owl-nav-arrow"></i>',
                    ]}
                    responsive={{
                      0: {
                        items: 1,
                      },
                      600: {
                        items: 1,
                      },
                      1000: {
                        items: 1,
                      },
                    }}
                  > */}
                <div className="col-6 px-1">
                  <img
                    className="lazy"
                    width="100%"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/placeintern/job-10.webp"
                    }
                    alt="job placement by our academy"
                  />
                </div>
                <div className="col-6 px-1">
                  <img
                    className="lazy"
                    width="100%"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/placeintern/job-11.webp"
                    }
                    alt="job placement by our academy"
                  />
                </div>
                <div className="col-6 pt-2 px-1">
                  <img
                    className="lazy"
                    width="100%"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/placeintern/job-12.webp"
                    }
                    alt="job placement by our academy"
                  />
                </div>
                <div className="col-6 pt-2 px-1">
                  <img
                    className="lazy"
                    width="100%"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/placeintern/job-15.webp"
                    }
                    alt="job placement by our academy"
                  />
                </div>
                {/* <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-14.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div>
                    <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-4.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div>
                    <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-2.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div>
                    <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-5.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div>
                    <div className="item px-3">
                      <img
                        className="lazy"
                        width="100%"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/placeintern/job-8.webp"
                        }
                        alt="job placement by our academy"
                      />
                    </div> */}
                {/* </OwlCarousel> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlexibleAllReviews;
