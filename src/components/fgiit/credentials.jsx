import React, { useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const CredentialsFutureFitness = ({ imgUrl, videoUrl }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrlPopUp, setvideoUrlPopUp] = useState("");
  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setvideoUrlPopUp(url);
  };
  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setvideoUrlPopUp("");
  };
  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <div className="ply1">
        <LazyLoadImage
          effect="blur"
          className="lazy"
          src={process.env.PUBLIC_URL + imgUrl}
          width="100%"
          style={{ borderRadius: "10px" }}
          alt="online fitness courses review"
        />
        <div className="ply3">
          <a onClick={() => openVideoModal({videoUrl})} className="custom" aria-label="Fg Group">
            <i
              className="far fa-play-circle text-white fs-35"
            ></i>
          </a>
          {/* <Link
        className="custom"
        data-flashy-type="video"
        to={videoUrl}
      >
       
      </Link> */}
        </div>
      </div>
    </>
  );
};

export default CredentialsFutureFitness;
