import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


const OnlineWeightLossRtpOne = () => {
    const [showMore, setShowMore] = useState(true);
    const [showMore1, setShowMore1] = useState(true);
    const toggleReadMore = () => {
      setShowMore(!showMore);
    };
    const toggleReadMore1 = () => {
      setShowMore1(!showMore1);
    };
    const [showMore2, setShowMore2] = useState(true);
    const toggleReadMore2 = () => {
      setShowMore2(!showMore2);
    };
    const [showMore3, setShowMore3] = useState(true);
    const toggleReadMore3 = () => {
      setShowMore3(!showMore3);
    };
 
  return (
    <>
    
    <section className="mt-md-5 mt-3">
        <div className="container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-2">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/mix-img/online-dietitian-consultation.webp"
                  }
                  width="100%"
                  alt="FG Group"
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="col-md-6 order-lg-2">
                <div className="design-h1">
                  <h1 style={{ color: "#333" }} className="m-0 pt-1 pt-md-3">
                    Online Dietitian Consultation for
                    <span className="m-0 text-blue-color">
                      {" "}
                      Weight Loss and Weight Gain{" "}
                    </span>
                  </h1>
                </div>
                <div className="design-describe mt-2">
                  <div className="logo-program-1">
                    <div>
                      <ul className="p-0 new-li news-li">
                        <li className="fs-15">
                          Welcome to FitnessWithGomzi's online dietitian
                          consultation service, where we provide expert guidance
                          and personalized diet plans for weight loss and weight
                          gain. Our qualified dietitians understand the
                          importance of a balanced diet and lifestyle choices in
                          achieving your fitness goals. Whether you're looking
                          for weight loss tips at home, weight gain exercises
                          for females at home, or weight loss diet plans in
                          Hindi, our online consultation will provide you with
                          the necessary support and guidance.
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- <div className="Digital mt-3 d-block d-md-none">
                                            <div className="d-flex align-items-center">
                                                <h2 className="h4-fs m-0" style="color:#00afef; font-size: 24px;">Book Appointment</h2>
                                            </div>
                                        </div> --> */}
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mt-5">
                  <div className="featured-block d-flex justify-content-center align-items-center">
                    <a className="d-block" aria-label="Fg Group">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/mix-img/consultation-weight-loss.webp"
                        }
                        className="featured-block-image img-fluid"
                        width="150px"
                      alt="FG Group"
                      />
                      <p className="featured-block-head">
                        Weight Loss Dietitian Consultation
                      </p>

                      {showMore ? (
                        <p className="featured-block-text m-0">
                          If you're aiming to lose weight, our experienced
                          dietitians will create a customized...
                        </p>
                      ) : (
                        <span id="dotsx">
                          weight loss diet plan tailored to your specific needs
                          and preferences. Our plans include nutritious and
                          delicious options, such as weight loss breakfast
                          ideas, weight loss oats recipes, and weight loss
                          snacks [1]. We also offer weight loss tips in Hindi
                          and provide guidance on natural weight loss methods
                          and home remedies for weight loss [1]. Our dietitians
                          will support you throughout your weight loss journey,
                          offering regular consultations to track your progress
                          and make necessary adjustments to ensure effective
                          results.
                        </span>
                      )}
                      <div className="swap mt-3">
                        <button
                          className="moreless-button"
                          style={{ backgroundColor: "#00bbff" }}
                          onClick={toggleReadMore}
                        >
                          {showMore ? "Read more" : "Read less"}
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4 mt-5">
                  <div className="featured-block d-flex justify-content-center align-items-center">
                    <a className="d-block" aria-label="Fg Group">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/mix-img/consultation-weight-gain.webp"
                        }
                        className="featured-block-image img-fluid"
                        width="197px"
                      alt="FG Group"
                      />
                      <p className="featured-block-head">
                        Weight Gain Dietitian Consultation
                      </p>

                      {showMore1 ? (
                        <p className="featured-block-text m-0">
                          For those looking to gain weight, our dietitians will
                          develop a personalized...
                        </p>
                      ) : (
                        <span id="dotsx">
                          weight gain diet chart in Hindi to help you achieve
                          your weight gain goals. We will provide guidance on
                          calorie-dense foods, weight gain protein powders, and
                          weight gain exercises for females at home [1]. Our
                          dietitians will work closely with you to create a diet
                          plan that fits your lifestyle and preferences,
                          ensuring healthy weight gain and muscle development.
                        </span>
                      )}
                      <div className="swap mt-3">
                        <button
                          className="moreless-button1"
                          style={{ backgroundColor: "#00bbff" }}
                          onClick={toggleReadMore1}
                        >
                          {showMore1 ? "Read more" : "Read less"}
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4 mt-5">
                  <div className="featured-block d-flex justify-content-center align-items-center">
                    <a className="d-block" aria-label="Fg Group">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/mix-img/expert-guidance.webp"
                        }
                        width="200px"
                        className="featured-block-image img-fluid mt-4"
                      alt="FG Group"
                      />
                      <p className="featured-block-head">
                        Expert Guidance and <br /> Support
                      </p>

                      {showMore2 ? (
                        <p className="featured-block-text m-0 mt-3">
                          Our online dietitian consultation service offers the
                          convenience of virtual consultations virtual...{" "}
                        </p>
                      ) : (
                        <span id="dotsx">
                          allowing you to receive expert guidance from the
                          comfort of your home.Whether you're following a weight
                          loss diet plan, weight gain program, or seeking
                          general nutrition advice, our experienced dietitians
                          are here to assist you. We understand the challenges
                          of weight management and will provide you with the
                          necessary tools, resources, and motivation to achieve
                          your goals.
                        </span>
                      )}
                      <div className="swap mt-3">
                        <button
                          className="moreless-button1"
                          style={{ backgroundColor: "#00bbff" }}
                          onClick={toggleReadMore2}
                        >
                          {showMore2 ? "Read more" : "Read less"}
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0"
                  style={{ marginTop: "50px" }}
                >
                  <div className="featured-block d-flex justify-content-center align-items-center">
                    <a className="d-block" aria-label="Fg Group">
                      <LazyLoadImage
                        effect="blur"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/mix-img/online-dietitian-consultation-icon.webp"
                        }
                        className="mt-4 featured-block-image img-fluid"
                        width="200px"
                      alt="FG Group"
                      />
                      <p className="featured-block-head">How to Get Started</p>

                      {showMore3 ? (
                        <p className="featured-block-text m-0">
                          Getting started with our online dietitian consultation
                          is easy. Simply visit our website [1] and book a
                          consultation with...
                        </p>
                      ) : (
                        <span id="dotsx">
                          will assess your specific requirements, understand
                          your lifestyle, and develop a personalized diet plan
                          tailored to your needs. We will consider factors such
                          as weight loss during pregnancy, weight loss
                          calculator, and weight loss diet in Hindi to ensure a
                          comprehensive approach to your wellness journey.
                        </span>
                      )}
                      <div className="swap mt-3">
                        <button
                          className="moreless-button3"
                          style={{ backgroundColor: "#00bbff" }}
                          onClick={toggleReadMore3}
                        >
                          {showMore3 ? "Read more" : "Read less"}
                        </button>
                      </div>
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

export default OnlineWeightLossRtpOne;
