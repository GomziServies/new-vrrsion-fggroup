import React, { useState } from "react";
import "../../assets/css/home.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import SimpleINPTAHeader from "../../components/partials/Header/simpleinptaheader";
import OwlCarousel from "react-owl-carousel";
import AlumaniEventsPhotos from "../../components/inpta/aluminiPhotos";
import CareerCounselling from "../../components/inpta/careerCounselling";
import ChiefGuestAlumni from "../../components/inpta/chiefGuest";
import { Helmet } from "react-helmet";
import ModalVideo from "react-modal-video";
import InptaFooter from "../../components/partials/Footer/inptafooter";

function InptaEvent() {
  const canonicalUrl = window.location.href;
  const blogs = [
    {
      img: "/assets/images/elumani23/image10.webp",
      title: "Lorem Ipsum, dizgi ve bask",
      date: "27.12.2017",
      description:
        "Lorem Ipsum, dizgi ve bask endüstrisinde kullanlan mgr metinlerdir. Lorem Ipsum, ad bilinmeyen bir matbaacnn bir hurufat numune kitab...",
    },
    {
      img: "/assets/images/elumani23/image15.webp",
      title: "Lorem Ipsum, dizgi ve bask",
      date: "27.12.2017",
      description:
        "Lorem Ipsum, dizgi ve bask endüstrisinde kullanlan mgr metinlerdir. Lorem Ipsum, ad bilinmeyen bir matbaacnn bir hurufat numune kitab...",
    },
  ];
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
    <div className="bg-light">
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoUrl}
        onClose={closeVideoModal}
      />
      <Helmet>
        <title>
          Indian Nutritionist and Personal Trainer Association | INPTA
        </title>
        <meta
          name="description"
          content="INPTA is the entity that unites trained and certified nutritionists & personal trainers together and combining their knowledge and creating a better place to uplift the career scope of nutritionists and personal trainers in the field of health and fitness."
        />
        <meta
          name="keyword"
          content="fitness club, nutrition club, wellness club activities, wellness club"
        />
        <meta
          property="og:title"
          content="Indian Nutritionist and Personal Trainer Association | INPTA"
        />
        <meta
          property="og:description"
          content="INPTA is the entity that unites trained and certified nutritionists & personal trainers together and combining their knowledge and creating a better place to uplift the career scope of nutritionists and personal trainers in the field of health and fitness."
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta property="og:url" content="https://fggroup.in/inpta/event" />
        <link rel="canonical" href={{ canonicalUrl }} />
        <meta name="google-site-verification" content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K2X4NWNEP1');`}
        </script>
      </Helmet>
      <WhatsappHeaderApp
        message={"Hello, I wanted to know more about FGIIT Courses. "}
        options={{ pageRef: true }}
      />
      <SimpleINPTAHeader />
      <section className="imanet home" style={{ marginTop: "90px" }}></section>

      <section className="event-section">
        <div>
          <div className="covid text-center mb-3">
            <h2 className="h2-fs">
              INPTA <span className="m-0 text-blue-color">Events</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-4"></div>
          <div>
            <div className="col-lg-11">
              <div
                className="p-5 p-md-3 p-lg-5 d-none d-md-block"
                style={{ borderRadius: "40px" }}
              >
                <div className="item">
                  <div>
                    <div className="row align-items-center">
                      <div className="col-lg-5">
                        <div className="review-box">
                          <div>
                            <img
                              src="/assets/images/img/teaser-img.webp"
                              className="img-fluid"
                              alt=""
                              width="100%"
                              height="100%"
                            />
                            <div className="video-btn play-btn">
                              <a
                                onClick={() => openVideoModal("mI4I7rpEtRA")}
                                className="custom clickof"
                                aria-label="Fg Group"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 mb-5">
                        <div className="review-box-text ml-4">
                          <h2 className="h2-fs">
                            Watch the program highlights
                          </h2>
                          <p>
                            It's our immense pleasure to share with you all that
                            FG Group organized the Alumni event 2022 for all our
                            Spartans (batch 2017-22). The purpose of the event
                            is a fun and learn approach. Furthermore, it's a
                            small gesture of appreciation from our side. We
                            strongly believe and follow that for any success and
                            achievement, two ingredients are required: guidance
                            & skill-based training. That's exactly what we have
                            done in the events.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block d-md-none">
                <div className="item">
                  <div className="slider-box">
                    <div className="row align-items-center">
                      <div className="col-lg-4">
                        <div className="review-box">
                          <div>
                            <img
                              src="/assets/images/img/teaser-img.webp"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="video-btn play-btn">
                              <a
                                onClick={() => openVideoModal("mI4I7rpEtRA")}
                                className="custom clickof"
                                aria-label="Fg Group"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="review-box-text">
                          <h2 className="h2-fs">
                            Watch the program highlights
                          </h2>
                          <p>
                            It's our immense pleasure to share with you all that
                            FG Group organized the Alumni event 2022 for all our
                            Spartans (batch 2017-22). The purpose of the event
                            is a fun and learn approach. Furthermore, it's a
                            small gesture of appreciation from our side. We
                            strongly believe and follow that for any success and
                            achievement, two ingredients are required: guidance
                            & skill-based training. That's exactly what we have
                            done in the events.
                          </p>
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
      <AlumaniEventsPhotos />
      <CareerCounselling />
      <section className="bg-default margintop">
        <div className="container">
          <div className="covid text-center">
            <h2 className="h2-fs">
              Surprise of the{" "}
              <span className="m-0 text-blue-color">Alumani Event</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-4"></div>
          <div className="item">
            <div className="blog p-0">
              <div className="ply position-relative video-container">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/img/surp.webp"}
                  width="100%"
                  className="border-radius-20 video-thumbnail"
                  alt="fggroup"
                />

                <div className="video-btn play-btn">
                  <a
                    onClick={() => openVideoModal("mI4I7rpEtRA")}
                    className="custom clickof"
                  >
                    <span className="newthing">
                      <i className="fas fa-play"></i>
                    </span>
                  </a>
                </div>

                <div className="bubble-container">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className={`bubble bubble-${i}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/img/all-logo.webp"}
              alt="FG Group"
              className="img-fluid d-none d-md-block"
            />
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/img/mobile-all-logo.webp"
              }
              alt="FG Group"
              className="img-fluid d-block d-md-none"
            />
          </div>
        </div>
      </section>
      <ChiefGuestAlumni />
      <section className="event-section">
        <div>
          <div className="covid text-center mb-3">
            <h2 className="h2-fs">
              Our Second{" "}
              <span className="m-0 text-blue-color">Alumina Event 2023</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-4"></div>
          <div className="">
            <div className="col-12">
              <div
                className="p-5 d-none d-md-block"
                style={{ borderRadius: "40px" }}
              >
                <div className="item">
                  <div>
                    <div className="row align-items-center">
                      <div className="col-lg-5">
                        <div className="review-box">
                          <div>
                            <img
                              src="/assets/images/img/alumani-2023.webp"
                              className="img-fluid"
                              alt=""
                              width="100%"
                              height="100%"
                            />
                            <div className="video-btn play-btn">
                              <a
                                onClick={() => openVideoModal("mI4I7rpEtRA")}
                                className="custom clickof"
                                aria-label="Fg Group"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-5">
                        <div className="review-box-text ml-4">
                          <h2 className="h2-fs">
                            Watch the our alumani 2023 program highlights
                          </h2>
                          <p>
                            It's our immense pleasure to share with you all that
                            FG Group organized the Alumni event 2022 for all our
                            Spartans (batch 2017-22). The purpose of the event
                            is a fun and learn approach. Furthermore, it's a
                            small gesture of appreciation from our side. We
                            strongly believe and follow that for any success and
                            achievement, two ingredients are required: guidance
                            & skill-based training. That's exactly what we have
                            done in the events.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block d-md-none">
                <div className="item">
                  <div className="slider-box">
                    <div className="row align-items-center">
                      <div className="col-lg-4">
                        <div className="review-box">
                          <div>
                            <img
                              src="/assets/images/img/alumani-2023.webp"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="video-btn play-btn">
                              <a
                                onClick={() => openVideoModal("mI4I7rpEtRA")}
                                className="custom clickof"
                                aria-label="Fg Group"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="review-box-text">
                          <h2 className="h2-fs">
                            Watch the our alumani 2023 program highlights
                          </h2>
                          <p>
                            It's our immense pleasure to share with you all that
                            FG Group organized the Alumni event 2022 for all our
                            Spartans (batch 2017-22). The purpose of the event
                            is a fun and learn approach. Furthermore, it's a
                            small gesture of appreciation from our side. We
                            strongly believe and follow that for any success and
                            achievement, two ingredients are required: guidance
                            & skill-based training. That's exactly what we have
                            done in the events.
                          </p>
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
      <section className="">
        <div className="covid text-center mb-3">
          <h2 className="h2-fs">
            Alumni Events{" "}
            <span className="m-0 text-blue-color">2023 Photos</span>
          </h2>
        </div>
        <div className="thm-bg-clr dector mb-4"></div>
        <div className="container-fluid">
          <div className="pb-5">
            <OwlCarousel
              loop
              autoplay
              dots={false}
              id="owl-books"
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
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/elumani23/image10.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/elumani23/image11.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/elumani23/image12.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/elumani23/image13.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/elumani23/image14.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/elumani23/image15.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/elumani23/image16.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="event-section">
        <div>
          <div className="covid text-center mb-3">
            <h2 className="h2-fs">
              Our Adajan{" "}
              <span className="m-0 text-blue-color">
                Convocation Event 2024
              </span>
            </h2>
          </div>
          <div className="thm-bg-clr dector mb-4"></div>
          <div className="">
            <div className="col-12">
              <div
                className="p-5 d-none d-md-block"
                style={{ borderRadius: "40px" }}
              >
                <div className="item">
                  <div>
                    <div className="row align-items-center">
                      <div className="col-lg-5">
                        <div className="review-box">
                          <div>
                            <img
                              src="/assets/images/elumani23/adajan-2024.webp"
                              className="img-fluid"
                              alt=""
                              width="100%"
                              height="100%"
                            />
                            <div className="video-btn play-btn">
                              <a
                                onClick={() => openVideoModal("Pfc5gZIKnv8")}
                                className="custom clickof"
                                aria-label="Fg Group"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-5">
                        <div className="review-box-text ml-4">
                          <h2 className="h2-fs">
                            Watch the our convocation 2024 program highlights
                          </h2>
                          <p>
                            We are thrilled to announce the Convocation Ceremony
                            2024 for our Adajan branch, celebrating the
                            incredible journey and achievements of the 2022-24
                            batch. This special event is a tribute to the hard
                            work, dedication, and talent of our students,
                            featuring inspiring speeches, award ceremonies, and
                            cultural performances. It's more than just a
                            ceremony—it's a moment to honor success, foster
                            connections, and create memories that will last a
                            lifetime. Let's come together to applaud the
                            Spartans of Adajan and celebrate their remarkable
                            accomplishments!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block d-md-none">
                <div className="item">
                  <div className="slider-box">
                    <div className="row align-items-center">
                      <div className="col-lg-4">
                        <div className="review-box">
                          <div>
                            <img
                              src="/assets/images/elumani23/adajan-2024.webp"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="video-btn play-btn">
                              <a
                                onClick={() => openVideoModal("Pfc5gZIKnv8")}
                                className="custom clickof"
                                aria-label="Fg Group"
                              >
                                <span className="newthing">
                                  <i className="fas fa-play"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="review-box-text">
                          <h2 className="h2-fs">
                            Watch the our convocation 2024 program highlights
                          </h2>
                          <p>
                            We are thrilled to announce the Convocation Ceremony
                            2024 for our Adajan branch, celebrating the
                            incredible journey and achievements of the 2022-24
                            batch. This special event is a tribute to the hard
                            work, dedication, and talent of our students,
                            featuring inspiring speeches, award ceremonies, and
                            cultural performances. It's more than just a
                            ceremony—it's a moment to honor success, foster
                            connections, and create memories that will last a
                            lifetime. Let's come together to applaud the
                            Spartans of Adajan and celebrate their remarkable
                            accomplishments!
                          </p>
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
      <section className="">
        <div className="covid text-center mb-3">
          <h2 className="h2-fs">
            Adajan Events{" "}
            <span className="m-0 text-blue-color">2024 Photos</span>
          </h2>
        </div>
        <div className="thm-bg-clr dector mb-4"></div>
        <div className="container-fluid">
          <div className="pb-5">
            <OwlCarousel
              loop
              autoplay
              dots={false}
              id="owl-books"
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
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/elumani23/adajan-1.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/elumani23/adajan-2.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/elumani23/adajan-3.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/elumani23/adajan-4.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/elumani23/adajan-5.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/elumani23/adajan-6.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/elumani23/adajan-7.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="item mx-3">
                <div className="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/elumani23/adajan-8.webp"
                    }
                    alt="FG Group"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <InptaFooter />
    </div>
  );
}

export default InptaEvent;
