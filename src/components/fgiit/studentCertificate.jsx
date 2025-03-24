import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import ModalVideo from "react-modal-video";

const StudentCertificate = () => {
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
      <section className="margintop">
        <div className="container-fluid">
          <div className="container pb-4 pb-md-5">
            <div className="covid text-center">
              <h2 className="h2-fs">
                Students{" "}
                <span className="m-0 text-blue-color">
                  certification
                </span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-md-5 mb-3"></div>
            <OwlCarousel
              loop
              autoPlay
              dots={false}
              id="owl-demon"
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
              }}>
              <div className="item mx-3">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/fgiit/new-1.2.webp"
                  }
                  alt="certi"
                  className="lazy"
                  width="100%"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/fgiit/new-1.webp"
                  }
                  alt="certi"
                  className="lazy"
                  width="100%"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/cpt-certi-7.webp"
                  }
                  alt="certi"
                  className="lazy"
                  width="100%"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/cpt-certi-8.webp"
                  }
                  alt="certi"
                  className="lazy"
                  width="100%"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="item mx-3">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/img/cpt-certi-6.webp"
                  }
                  alt="certi"
                  className="lazy"
                  width="100%"
                  style={{ borderRadius: "5px" }}
                />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentCertificate;
