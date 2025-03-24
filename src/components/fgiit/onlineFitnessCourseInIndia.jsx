import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import DownloadPdf from "../../pdf/FGIIT-online-fitness-courses.pdf";

const OnlineFitnessCourse = () => {
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
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  const toggleReadMorei = () => {
    setShowMore(!showMore);
  };

  const toggleReadMoreii = () => {
    setShowMore(!showMore);
  };

  const toggleReadMoreiii = () => {
    setShowMore(!showMore);
  };

  const toggleReadMoreiv = () => {
    setShowMore(!showMore);
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
          <div className="container py-0">
            <div className="covid text-center">
              <h2 style={{ color: "#333" }} className='h2-fs'>
                Online {" "}
                <span className="m-0 text-blue-color">Fitness Courses</span> in
                India
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row pt-3">
              <div className="col-lg-6">
                <div className="blog p-0" style={{ borderRadius: "10px" }}>
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      alt="Fg Group"
                      className="lazy mb-md"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/course-photo/nutri-course.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="fly-tag">
                      <span>Advanced</span>
                    </div>
                    <div className="video-btn play-btn">
                      <a
                        onClick={() => openVideoModal("hxQoFHOFyPM")}
                        className="custom clickof"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="main-rtp">
                    <ul
                      className="line-li d-flex pl-0"
                      style={{ listStyle: "none" }}
                    >
                      <li className="ml-0">
                        <i className="fas fa-clock"></i> 6 Months
                      </li>
                      <li>
                        <i className="fas fa-chalkboard-teacher"></i> Live Zoom Classes
                      </li>
                      <li>
                        <i className="fas fa-comments"></i> Talk With Coach
                      </li>
                    </ul>
                    <h2 className="h4-fs">
                      Nutri Trainer Course
                    </h2>
                    <div className="mt-lg-2 mb-lg-2 rating-start">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span>(4.7 / 3,748 Rating)</span>
                    </div>
                    <p>
                      Study Hours: <b>2 hour per session</b>
                    </p>
                    <p>
                      Course Language: <b>Hindi</b>
                    </p>
                    <p>
                      Days: <b>Weeks/Weekend</b>
                    </p>
                    <div className="pb-1"></div>
                    <Link
                      to="/fgiit/online-fitness-and-nutrition-courses"
                      target="_blank"
                      className="btn mb-lg-2"
                    >
                      View More
                    </Link>
                    <a className="mb-1 ml-3 btn-whats btn btn-success btn-english"
                      href={DownloadPdf} download>
                      <span class="button__text">Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog p-0" style={{ borderRadius: "10px" }}>
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      alt="Fg Group"
                      className="lazy mb-md"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/course-photo/cpt_course.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="fly-tag">
                      <span>Advanced</span>
                    </div>
                    <div className="video-btn play-btn">
                      <a
                        onClick={() => openVideoModal("1SEoO-6Jg_4")}
                        className="custom clickof"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="main-rtp">
                    <ul
                      className="line-li d-flex pl-0"
                      style={{ listStyle: "none" }}
                    >
                      <li className="ml-0">
                        <i className="fas fa-clock"></i> 6 Months
                      </li>
                      <li>
                        <i className="fas fa-chalkboard-teacher"></i> Live Zoom Classes
                      </li>
                      <li>
                        <i className="fas fa-comments"></i> Talk With Coach
                      </li>
                    </ul>
                    <h2 className="h4-fs">
                      Diploma In Personal Training Course
                    </h2>
                    <div className="mt-lg-2 mb-lg-2 rating-start">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span>(4.9 / 3,040 Rating)</span>
                    </div>
                    <p>
                      Study Hours: <b>2 hour per session</b>
                    </p>
                    <p>
                      Course Language: <b>Hindi</b>
                    </p>
                    <p>
                      Days: <b>Weeks/Weekend</b>
                    </p>
                    <div className="pb-1"></div>
                    <Link
                      to="/fgiit/online-personal-training-course"
                      target="_blank"
                      className="btn mb-lg-2"
                    >
                      View More
                    </Link>
                    <a className="mb-1 ml-3 btn-whats btn btn-success btn-english"
                      href={DownloadPdf} download>
                      <span class="button__text">Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog p-0" style={{ borderRadius: "10px" }}>
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy mb-md"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/course-photo/cnc_course.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="fly-tag">
                      <span>Advanced</span>
                    </div>
                    <div className="video-btn play-btn">
                      <a
                        onClick={() => openVideoModal("O5yxDzKXZm0")}
                        className="custom clickof"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="main-rtp">
                    <ul
                      className="line-li d-flex pl-0"
                      style={{ listStyle: "none" }}
                    >
                      <li className="ml-0">
                        <i className="fas fa-clock"></i> 6 Months
                      </li>
                      <li>
                        <i className="fas fa-chalkboard-teacher"></i> Live Zoom Classes
                      </li>
                      <li>
                        <i className="fas fa-comments"></i> Talk With Coach
                      </li>
                    </ul>
                    <h2 className="h4-fs">
                      Diploma In Nutrition Course
                    </h2>
                    <div className="mt-lg-2 mb-lg-2 rating-start">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span>(4.6 / 2,440 Rating)</span>
                    </div>
                    <p>
                      Study Hours: <b>2 hour per session</b>
                    </p>
                    <p>
                      Course Language: <b>Hindi</b>
                    </p>
                    <p>
                      Days: <b>Weeks/Weekend</b>
                    </p>
                    <div className="pb-1"></div>
                    <Link
                      to="/fgiit/food-and-nutrition-course"
                      target="_blank"
                      className="btn mb-lg-2"
                    >
                      View More
                    </Link>
                    <a className="mb-1 ml-3 btn-whats btn btn-success btn-english"
                      href={DownloadPdf} download>
                      <span class="button__text">Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog p-0" style={{ borderRadius: "10px" }}>
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/course-photo/aas-course.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="fly-tag">
                      <span>Advanced</span>
                    </div>
                    <div className="video-btn play-btn">
                      <a
                        onClick={() => openVideoModal("6gpp4-8PWPs")}
                        className="custom clickof"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="main-rtp">
                    <ul
                      className="line-li d-flex pl-0"
                      style={{ listStyle: "none" }}
                    >
                      <li className="ml-0">
                        <i className="fas fa-clock"></i> 1 Month
                      </li>
                      <li>
                        <i className="fas fa-chalkboard-teacher"></i> Live Zoom Classes
                      </li>
                      <li>
                        <i className="fas fa-comments"></i> Talk With Coach
                      </li>
                    </ul>
                    <h2 className="h4-fs">
                      Anabolic Androgenic Steroids
                    </h2>
                    <div className="mt-lg-2 mb-lg-2 rating-start">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span>(4.5 / 1,830 Rating)</span>
                    </div>
                    <p>
                      Study Hours: <b>2 hours Per session</b>
                    </p>
                    <p>
                      Course Language: <b>Hindi</b>
                    </p>
                    <p>
                      Days: <b>Weeks</b>
                    </p>
                    <div className="pb-1"></div>
                    <Link
                      to="/fgiit/anabolic-steroid-testosterone"
                      target="_blank"
                      className="btn mb-lg-2"
                    >
                      View More
                    </Link>
                    <a className="mb-1 ml-3 btn-whats btn btn-success btn-english"
                      href={DownloadPdf} download>
                      <span class="button__text">Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog p-0" style={{ borderRadius: "10px" }}>
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/course-img/group-instructer.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="fly-tag">
                      <span>Advanced</span>
                    </div>
                    <div className="video-btn play-btn">
                      <a
                        onClick={() => openVideoModal("7LEFrtgo09M")}
                        className="custom clickof"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="main-rtp">
                    <ul
                      className="line-li d-flex pl-0"
                      style={{ listStyle: "none" }}
                    >
                      <li className="ml-0">
                        <i className="fas fa-clock"></i> 1 Day
                      </li>
                      <li>
                        <i className="fas fa-chalkboard-teacher"></i> Live Zoom Classes
                      </li>
                      <li>
                        <i className="fas fa-comments"></i> Talk With Coach
                      </li>
                    </ul>
                    <h2 className="h4-fs">
                      Group Instructor Masterclass
                    </h2>
                    <div className="mt-lg-2 mb-lg-2 rating-start">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span>(4.8 / 3,040 Rating)</span>
                    </div>
                    <p>
                      Study Hours: <b>6 hours</b>
                    </p>
                    <p>
                      Course Language: <b>Hindi</b>
                    </p>
                    <p>
                      Days: <b>1</b>
                    </p>
                    <div className="pb-1"></div>
                    <Link
                      to="/fgiit/online-fitness-instructor-course"
                      target="_blank"
                      className="btn mb-lg-2"
                    >
                      View More
                    </Link>
                    <a className="mb-1 ml-3 btn-whats btn btn-success btn-english"
                      href={DownloadPdf} download>
                      <span class="button__text">Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog p-0" style={{ borderRadius: "10px" }}>
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/course-photo/online-powerlifting-coach-workshop.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="fly-tag">
                      <span>Advanced</span>
                    </div>
                    <div className="video-btn play-btn">
                      <a
                        onClick={() => openVideoModal("p3-OhJ9hLGQ")}
                        className="custom clickof"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="main-rtp">
                    <ul
                      className="line-li d-flex pl-0"
                      style={{ listStyle: "none" }}
                    >
                      <li className="ml-0">
                        <i className="fas fa-clock"></i> 1 Day
                      </li>
                      <li>
                        <i className="fas fa-chalkboard-teacher"></i> Live Zoom Classes
                      </li>
                      <li>
                        <i className="fas fa-comments"></i> Talk With Coach
                      </li>
                    </ul>
                    <h2 className="h4-fs">
                      Powerlifting Coach Workshop
                    </h2>
                    <div className="mt-lg-2 mb-lg-2 rating-start">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span>(4.6 / 3,989 Rating)</span>
                    </div>
                    <p>
                      Study Hours: <b>6 hours</b>
                    </p>
                    <p>
                      Course Language: <b>Hindi</b>
                    </p>
                    <p>
                      Days: <b>Weeks/Weekend</b>
                    </p>
                    <div className="pb-1"></div>
                    <Link
                      to="/fgiit/online-powerlifting-course"
                      target="_blank"
                      className="btn mb-lg-2"
                    >
                      View More
                    </Link>
                    <a className="mb-1 ml-3 btn-whats btn btn-success btn-english"
                      href={DownloadPdf} download>
                      <span class="button__text">Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog p-0" style={{ borderRadius: "10px" }}>
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/course-photo/advance.webp"
                      }
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      alt="fggroup"
                    />
                    <div className="fly-tag">
                      <span>Advanced</span>
                    </div>
                    {/* <div className="video-btn play-btn">
                      <a
                        onClick={() => openVideoModal("p3-OhJ9hLGQ")}
                        className="custom clickof"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div> */}
                  </div>
                  <div className="main-rtp">
                    <ul
                      className="line-li d-flex pl-0"
                      style={{ listStyle: "none" }}
                    >
                      <li className="ml-0">
                        <i className="fas fa-clock"></i> 45 Days
                      </li>
                      <li>
                        <i className="fas fa-chalkboard-teacher"></i> Live Zoom Classes
                      </li>
                      <li>
                        <i className="fas fa-comments"></i> Talk With Coach
                      </li>
                    </ul>
                    <h2 className="h4-fs">
                      Advance Clinical Nutrition
                    </h2>
                    <div className="mt-lg-2 mb-lg-2 rating-start">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span>(4.3 / 1,540 Rating)</span>
                    </div>
                    <p>
                      Study Hours: <b>6 hour</b>
                    </p>
                    <p>
                      Course Language: <b>Hindi</b>
                    </p>
                    <p>
                      Days: <b>Weeks/Weekend</b>
                    </p>
                    <div className="pb-1"></div>
                    <Link
                      to="/fgiit/clinical-diets-for-health-and-wellness"
                      target="_blank"
                      className="btn mb-lg-2"
                    >
                      View More
                    </Link>
                    <a className="mb-1 ml-3 btn-whats btn btn-success btn-english"
                      href={DownloadPdf} download>
                      <span class="button__text">Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog p-0" style={{ borderRadius: "10px" }}>
                  <div className="ply1">
                    <LazyLoadImage
                      effect="blur"
                      className="lazy"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/course-photo/injury.webp"
                      }
                      alt="fggroup"
                      width="100%"
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="fly-tag">
                      <span>Advanced</span>
                    </div>
                    <div className="video-btn play-btn">
                      <a
                        onClick={() => openVideoModal("95SVQ5yhLYE")}
                        className="custom clickof"
                        aria-label="Fg Group"
                      >
                        <span className="newthing">
                          <i className="fas fa-play"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="main-rtp">
                    <ul
                      className="line-li d-flex pl-0"
                      style={{ listStyle: "none" }}
                    >
                      <li className="ml-0">
                        <i className="fas fa-clock"></i> 1 Day
                      </li>
                      <li>
                        <i className="fas fa-chalkboard-teacher"></i> Live Zoom Classes
                      </li>
                      <li>
                        <i className="fas fa-comments"></i> Talk With Coach
                      </li>
                    </ul>
                    <h2 className="h4-fs">
                      Injury Rehabilitation Workshop
                    </h2>
                    <div className="mt-lg-2 mb-lg-2 rating-start">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span>(4.5 / 1,400 Rating)</span>
                    </div>
                    <p>
                      Study Hours: <b>6 Hours</b>
                    </p>
                    <p>
                      Course Language: <b>Hindi</b>
                    </p>
                    <p>
                      Days: <b>Saturday, Sunday</b>
                    </p>
                    <div className="pb-1"></div>
                    <Link
                      to="/fgiit/course-of-physiotherapy"
                      target="_blank"
                      className="btn mb-lg-2"
                    >
                      View More
                    </Link>
                    <a className="mb-1 ml-3 btn-whats btn btn-success btn-english"
                      href={DownloadPdf} download>
                      <span class="button__text">Download PDF</span>
                    </a>
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

export default OnlineFitnessCourse;
