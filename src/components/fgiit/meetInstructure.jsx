/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const MeetOurInstructure = () => {
  const [showMore, setShowMore] = useState(true);

  const toggleReadMoreiii = () => {
    setShowMore(!showMore);
  };

  // const [showMore, setShowMore] = useState(Array(5).fill(false));

  // const toggleReadMore = (index) => {
  //   const updatedShowMore = [...showMore];
  //   updatedShowMore[index] = !updatedShowMore[index];
  //   setShowMore(updatedShowMore);
  // };
  return (
    <>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="col-md-12">
              <div className="covid mb-4 text-center">
                <h2 className="h2-fs">
                  <span className="m-0 text-blue-color">Meet your </span>{" "}
                  Instructors
                </h2>
                <div className="thm-bg-clr dector mb-4"></div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-4 mt-md-0 mt-4">
                <div className="reviews">
                  <div className="reviews-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/coaches-1.webp"
                      }
                      alt="FG Group"
                      className="lazy img-fluid"
                    />
                  </div>
                  <div className="reviews-text text-center">
                    <h2 className="h6-fs">
                      <a
                        href="http://gcsconsultant.fggroup.in/gautam_jani_official"
                        style={{ color: "black", textDecoration: "underline" }}
                      >
                        Dr. Gautam Jani
                      </a>
                    </h2>
                    <p className="text-muted">
                      <b>
                        Founder & CEO of FG Group / CEO GCS PVT LTD / Core
                        member of INPTA{" "}
                      </b>
                    </p>
                    <p className="text-muted mb-0">
                      {" "}
                      He finished his Civil Engineer and turned fitness
                      enthusiast in 2014 began his personal training journey in
                      Gujarat, India, in 2016. Certified by ACSM, ISSA, and
                      VLCC. he specializes in Clinical and weight loss{" "}
                      {showMore ? (
                        <span id="morey" className="m-0">
                          nutrition, Strength Training, Exercise Science, and
                          Performance Enhancement Drugs. In 2019 finished his
                          MBA for better training and placement services for
                          their student of FGIIT. In 2024, he earned his Ph.D.
                          in Health & Fitness from Thames university. As the
                          Founder of FGIIT, Gautam is dedicated to promoting
                          holistic well-being through personalized training and
                          nutritional guidance.{" "}
                        </span>
                      ) : (
                        <span id="dotsx">
                          nutrition, Strength Training, Exercise Science, and
                          Performance Enhancement Drugs. In 2019 finished his
                          MBA for better training and placement services for
                          their student of FGIIT. In 2024, he earned his Ph.D.
                          in Health & Fitness from Thames university. As the
                          Founder of FGIIT, Gautam is dedicated to promoting
                          holistic well-being through personalized training and
                          nutritional guidance.{" "}
                        </span>
                      )}
                    </p>
                    <a
                      onClick={toggleReadMoreiii}
                      id="myBtnry"
                      aria-label="Fg Group"
                    >
                      {showMore ? "Read More" : "Read Less"}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
                <div className="reviews">
                  <div className="reviews-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/coaches-2.webp"
                      }
                      alt="FG Group"
                      className="lazy img-fluid"
                    />
                  </div>
                  <div className="reviews-text text-center">
                    <h2 className="h6-fs">Dt. Foram Desai</h2>
                    <p className="text-muted mb-0">
                      {" "}
                      Best Dietician & Founder at FGIIT Ms. Foram Desai is a
                      sport dietitian trainer and Taekwondo 4 Dan Black Belt
                      holder. She has an experience of 10 years coaching
                      Taekwondo and Head faculty in Ryan International School
                      .She has achieved certificates from ACSM, ISSA and VLCC.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-md-0 mt-4">
                <div className="reviews">
                  <div className="reviews-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fgiit/chirag-pandey.webp"
                      }
                      alt="FG Group"
                      className="lazy img-fluid"
                    />
                  </div>
                  <div className="reviews-text text-center">
                    <h2 className="h6-fs">PT. Chirag Pandey</h2>
                    <p className="text-muted my-0">
                      Master Trainer & Faculty at FGIIT{" "}
                    </p>
                    <p className="text-muted mb-0">
                      {" "}
                      Mr. Chirag is a Mechanical engineer. By passion he is a
                      Power Lifter, Bodybuilder, and Nutritionist and had
                      started practicing it in the year 2017. He is Senior
                      Faculty of FGIIT firm established in 2018. He has achieved
                      Certification from FGIIT, NSDC, SPEFl-SC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row mt-5">
              <OwlCarousel
                loop
                autoplay
                dots={false}
                id="carouselExampleControls"
                className="owl-carousel owl-theme"
                data-ride="carousel"
                responsive={{
                  0: {
                    items: 1,
                  },
                  600: {
                    items: 1,
                  },
                  1000: {
                    items: 3,
                  },
                }}
              >
                <div className="gap-1 m-2 mt-md-0 mt-4">
                  <div className="reviews">
                    <div className="reviews-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fwg/coaches-1.webp"
                        }
                        alt="FG Group"
                        className="lazy img-fluid"
                      />
                    </div>
                    <div className="reviews-text text-center">
                      <h2 className="h6-fs"><a href="http://gcsconsultant.fggroup.in/gautam_jani_official" style={{ color: 'black', textDecoration: 'underline' }}>Dr. Gautam Jani</a></h2>
                      <p className="text-muted">
                        <b>
                          Founder & CEO of FG Group / CEO GCS PVT LTD / Core
                          member of INPTA{" "}
                        </b>
                      </p>
                      <p className="text-muted mb-0">
                        He earned his Ph.D. in Health & Fitness from Thames
                        university. As the Founder of FGIIT, Gautam is
                        dedicated to promoting holistic well-being through
                        personalized training and nutritional guidance.
                        {showMore[1] ? (
                          <p className="m-0 text-muted">
                            He finished his Civil Engineer and turned fitness
                            enthusiast in 2014 began his personal training
                            journey in Gujarat, India, in 2016. Certified by
                            ACSM, ISSA, and VLCC. he specializes in Clinical
                            and weight loss nutrition, Strength Training,
                            Exercise Science, and Performance Enhancement
                            Drugs. In 2019 finished his MBA for better
                            training and placement services for their student
                            of FGIIT. In 2024.
                          </p>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                      <a onClick={() => toggleReadMore(1)} id="myBtnry">
                        {showMore[1] ? "Read less" : "Read more"}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="gap-1 m-2 mt-md-0 mt-4">
                  <div className="reviews">
                    <div className="reviews-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fwg/coaches-2.webp"
                        }
                        alt="FG Group"
                        className="lazy img-fluid"
                      />
                    </div>
                    <div className="reviews-text text-center">
                      <h2 className="h6-fs">Dt. Foram Desai</h2>
                      <p className="text-muted mb-0">
                        {" "}
                        Best Dietician & Founder at FGIIT Ms. Foram Desai is a
                        sport dietitian trainer and Taekwondo 4 Dan Black Belt
                        holder. She has an experience of 10 years coaching
                        Taekwondo and Head faculty in Ryan International School
                        .She has achieved certificates from ACSM, ISSA and VLCC.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="gap-1 m-2 mt-md-0 mt-4">
                  <div className="reviews">
                    <div className="reviews-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fgiit/chirag-pandey.webp"
                        }
                        alt="FG Group"
                        className="lazy img-fluid"
                      />
                    </div>
                    <div className="reviews-text text-center">
                      <h2 className="h6-fs">PT. Chirag Pandey</h2>
                      <p className="text-muted my-0">
                        Master Trainer & Faculty at FGIIT{" "}
                      </p>
                      <p className="text-muted mb-0">
                        {" "}
                        Mr. Chirag is a Mechanical engineer. By passion he is a
                        Power Lifter, Bodybuilder, and Nutritionist and had
                        started practicing it in the year 2017. He is Senior
                        Faculty of FGIIT firm established in 2018. He has
                        achieved Certification from FGIIT, NSDC, SPEFl-SC.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="gap-1 m-2 mt-md-0 mt-4">
                  <div className="reviews">
                    <div className="reviews-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/fwg/coaches-4.webp"
                        }
                        alt="FG Group"
                        className="lazy img-fluid"
                      />
                    </div>
                    <div className="reviews-text text-center">
                      <h2 className="h6-fs">Dr. Waqaar Qureshi</h2>
                      <p className="text-muted my-0">
                        Chairman of the All India Institute of Certified
                        Professionals (AIICP).{" "}
                      </p>
                      <p className="text-muted mb-0">
                        Dr. Waqaar Qureshi is known as the Chairman of the All
                        India Institute of Certified Professionals (AIICP). He
                        is involved in professional training and has been
                        featured in fitness seminars, indicating his
                        {showMore[2] ? (
                          <p className="m-0 text-muted">
                            Continuous Professional Development Opportunities
                            where he engages with followers on platforms like
                            Instagram, where he shares insights into his
                            professional activities. Additionally, Dr. Qureshi's
                            contributions are recognized in professional
                            circles, such as his involvement as an Independent
                            Hospital & Health Care Professional.
                          </p>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </p>
                      <a onClick={() => toggleReadMore(2)} id="myBtnry">
                        {showMore[2] ? "Read less" : "Read more"}
                      </a>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetOurInstructure;
