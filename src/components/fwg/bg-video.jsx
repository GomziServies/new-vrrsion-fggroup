import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ModalVideo from "react-modal-video";

const ExerciseVideo = () => {
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
      <section>
        <div className="container-fluid margintop p-0">
          <div className="ply1">
            <LazyLoadImage
              effect="blur"
              className="d-none d-md-block"
              src={process.env.PUBLIC_URL + "/assets/images/img/video1.webp"}
              width="100%"
              alt="personal training"
            />
            <LazyLoadImage
              effect="blur"
              className="d-block d-md-none"
              src={process.env.PUBLIC_URL + "/assets/images/img/video11.webp"}
              width="100%"
              alt="personal training"
            />
            <div className="ply2">
              <a
                onClick={() => openVideoModal("Zzaj8lVMFc8")}
                className="custom clickof" aria-label="Fg Group"
              >
                <span className="newthing">
                  <i className="fas fa-play"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExerciseVideo;
