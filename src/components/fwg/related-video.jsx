import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const RelatedVideos = () => {
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
     
     <div className="Info">
                  <h2 className="h2-fs">Related Videos</h2>
                </div>
                <div className="Grocery2 float-left mt-3 w-100">
                  <div className="relet">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        alt="fggroup"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/heavy6.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px" }}
                      />
                      <div className="ply3">
                        <div
                          className="custom"
                          onClick={() => openVideoModal("GPG2nBoWvqI")}
                        >
                          <i
                            className="far fa-play-circle"
                            style={{ color: "white" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relet1">
                    <span className="min text-left">
                      <b>Get Healthy Carbs</b>
                    </span>
                    <span className="time text-left">
                      Healthy food is a necessity for your transformation.
                    </span>
                  </div>
                </div>
                <div className="Grocery2 float-left mt-3 w-100">
                  <div className="relet">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        alt="fggroup"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/heavy5.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px" }}
                      />
                      <div className="ply3">
                        <div
                          className="custom"
                          onClick={() => openVideoModal("h22a-j_0QYE")}
                        >
                          <i
                            className="far fa-play-circle"
                            style={{ color: "white" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relet1">
                    <span className="min text-left">
                      <b>Design your split</b>
                    </span>
                    <span className="time text-left">
                      Create your own Workout split as per your convenient way.
                    </span>
                  </div>
                </div>
                <div className="Grocery2 float-left mt-3 w-100">
                  <div className="relet">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        alt="fggroup"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/heavy2.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px" }}
                      />
                      <div className="ply3">
                        <div
                          className="custom"
                          onClick={() => openVideoModal("3H8QmbhvFpA")}
                        >
                          <i
                            className="far fa-play-circle"
                            style={{ color: "white" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relet1">
                    <span className="min text-left">
                      <b>Calculate your macros </b>
                    </span>
                    <span className="time text-left">
                      Calculate how much your body intakes in a day.
                    </span>
                  </div>
                </div>
                <div className="Grocery2 float-left mt-3 w-100">
                  <div className="relet">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        alt="fggroup"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/heavy3.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px" }}
                      />
                      <div className="ply3">
                        <div
                          className="custom"
                          onClick={() => openVideoModal("Lm2LSsMR1zA")}
                        >
                          <i
                            className="far fa-play-circle"
                            style={{ color: "white" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relet1">
                    <span className="min text-left">
                      <b>Vegan diet pros and cons </b>
                    </span>
                    <span className="time text-left">
                      Busting myths on Vegan Diet.
                    </span>
                  </div>
                </div>
                <div className="Grocery2 float-left mt-3 w-100">
                  <div className="relet">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        alt="fggroup"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/heavy1.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px" }}
                      />
                      <div className="ply3">
                        <div
                          className="custom"
                          onClick={() => openVideoModal("P6tJa39XajA")}
                        >
                          <i
                            className="far fa-play-circle"
                            style={{ color: "white" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relet1">
                    <span className="min text-left">
                      <b>Sprouts for your health </b>
                    </span>
                    <span className="time text-left">
                      Healthy Intake for your body.
                    </span>
                  </div>
                </div>
                <div className="Grocery2 float-left mt-3 w-100">
                  <div className="relet">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        alt="fggroup"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/heavy7.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px" }}
                      />
                      <div className="ply3">
                        <div
                          className="custom"
                          onClick={() => openVideoModal("sZfxg5zeKFg")}
                        >
                          <i
                            className="far fa-play-circle"
                            style={{ color: "white" }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relet1">
                    <span className="min text-left">
                      <b>Deadlift checklist</b>
                    </span>
                    <span className="time text-left">
                      Strength check of how much you lift.
                    </span>
                  </div>
                </div>
                <div className="Grocery2 float-left mt-3 w-100">
                  <div className="relet">
                    <div className="ply1">
                      <LazyLoadImage
                        effect="blur"
                        className="lazy"
                        alt="fggroup"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/img/heavy4.webp"
                        }
                        width="100%"
                        style={{ borderRadius: "10px" }}
                      />
                      <div className="ply3">
                        <Link
                          className="custom"
                          data-flashy-type="video"
                          to="https://youtu.be/uSVXE0n5TBA"
                        >
                          <i
                            className="far fa-play-circle"
                            style={{ color: "white" }}
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="relet1">
                    <span className="min text-left">
                      <b>Warm-up Your Body</b>
                    </span>
                    <span className="time text-left">
                      Activate those muscles before working on them.
                    </span>
                  </div>
                </div>
    </>
  );
};

export default RelatedVideos;
