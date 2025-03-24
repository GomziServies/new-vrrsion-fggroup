import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import OwlCarousel from "react-owl-carousel";

const StudentResponse = () => {
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
      <section className="margnitop">
        <div className="container-fluid">
          <div className="container pt-md-5">
            <div className="col-md-12">
              <div className="covid text-center mt-3">
                <h2 className='h2-fs'>
                  Outstanding{" "}
                  <span className="m-0 text-blue-color">
                    Training & Placement
                  </span>
                </h2>
              </div>
              <div className="thm-bg-clr dector mb-md-4 mb-3"></div>
              <OwlCarousel
                loop
                autoplay
                dots={false}
                id="owl-demo123"
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
                <div className="item mx-2">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-6.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      alt="fggroup"
                    />

                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("IB3r7I7Z2zY")}
                        aria-label="Fg Group"
                        className="custom"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-2">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-8.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      alt="fggroup"
                    />

                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("S9hVA3w8z8E")}
                        aria-label="Fg Group"
                        className="custom"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-2">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-5.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      alt="fggroup"
                    />

                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("xAMczxGyrbc")}
                        aria-label="Fg Group"
                        className="custom"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-2">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-1.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      alt="fggroup"
                    />

                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("XQuXwYE31zc")}
                        aria-label="Fg Group"
                        className="custom"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-2">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-7.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      alt="fggroup"
                    />

                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("aI4wdD47mqk")}
                        aria-label="Fg Group"
                        className="custom"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="item mx-2">
                  <div className="ply1">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/t&p-review-3.webp"
                      }
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      alt="fggroup"
                    />

                    <div className="video-btn">
                      <a
                        onClick={() => openVideoModal("298VUNwuJuM")}
                        aria-label="Fg Group"
                        className="custom"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
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

export default StudentResponse;
