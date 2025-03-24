import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const FitnessGoals = () => {
  
  return (
    <>
      <section className="margintop" style={{ backgroundColor: "#f9f4f1" }}>
        <div className="container-fluid">
          <div className=" p-0">
            <div className="demoo text-left mb-4 pt-4 d-block d-md-none">
              <h2 className="fs-32">
                How we help you to reach your fitness goals ?
              </h2>
            </div>
            {/* <div className="thm-bg-clr dector mb-5"></div> */}
            <div className="d-none d-md-block">
              <div className="main-bar">
                <div className="proggres-holder" style={{ width: "5px" }}>
                  <div className="proggres-bar"></div>
                </div>
                <div className="bar-item">
                  <div className="text-start blog2">
                    <div className="bar-stike">
                      <div className="forh">
                        <h2 className="h3-fs">
                          <i
                            className="fas fa-hand-holding-medical"
                            style={{ color: "#3b5cff" }}
                          ></i>
                          Consultation :-
                        </h2>
                      </div>
                      <div className="describe">
                        <p className="my-0 ml-0">
                          Your professional nutritionist and fitness trainer
                          collaborates to assess your personality, habits,
                          environment, lifestyle, and motivations. This aids in
                          their comprehension of the factors in your life that
                          affect your pursuit of fitness.
                        </p>
                      </div>
                      <div className="timeline-right d-block d-md-none mt-3">
                        <LazyLoadImage
                          effect="blur"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/Step-1.webp"
                          }
                          alt="Consultation"
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          className="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="arrow-responce">
                    <div
                      className="bar-arrow special-fat"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fwg/step-22.webp)`,
                      }}
                    ></div>
                  </div>
                  <div className="timeline-right blog2 d-md-block d-none">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/Step-1.webp"
                      }
                      alt="Consultation"
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      className="lazy"
                    />
                  </div>
                </div>
                <div className="bar-item">
                  <div className="timeline-right blog2">
                    <div className="bar-stike">
                      <div className="forh describe">
                        <h2 className="h3-fs">
                          <i
                            className="fas fa-notes-medical"
                            style={{ color: "#3b5cff" }}
                          ></i>{" "}
                          Body Analysis :-
                        </h2>
                      </div>
                      <div className="describe">
                        <p className="my-0 ml-0">
                          With our cutting-edge body analysis technology, which
                          allows you to calculate everything happening in your
                          body, you can get a clear picture of how your eating
                          habits and lifestyle choices affect your body.
                        </p>
                      </div>
                      <div className="bar-left d-block d-md-none mt-3">
                        <LazyLoadImage
                          effect="blur"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/Step-2.webp"
                          }
                          alt="Body Analysis"
                          width="100%"
                          style={{ borderRadius: "10px" }}
                          className="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="arrow-responce">
                    <div
                      className="bar-arrow p-md-4"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fwg/step-11.webp)`,
                      }}
                    ></div>
                  </div>
                  <div className="bar-left blog2 d-md-block d-none">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/Step-2.webp"
                      }
                      alt="Body Analysis"
                      width="100%"
                      style={{ borderRadius: "10px" }}
                      className="lazy"
                    />
                  </div>
                </div>
                <div className="bar-item">
                  <div className="timeline-right blog2">
                    <div className="bar-stike">
                      <div className="forh describe">
                        <h2 className="h3-fs">
                          <i
                            className="fas fa-heartbeat"
                            style={{ color: " #3b5cff" }}
                          ></i>{" "}
                          Customized Fitness Plan
                        </h2>
                      </div>
                      <div className="describe">
                        <p className="my-0 ml-0">
                          Thanks to quantifiable data and insights.You and your
                          coaches may now :-{" "}
                        </p>
                        <ul className="pl-2 pl-md-3">
                          <li className="pt-3">
                            Tailor your diet to what works for you{" "}
                          </li>
                          <li>Optimize your exercise regimen </li>
                          <li> Maximize your metabolic health </li>
                        </ul>
                      </div>
                      <div className="bar-left d-md-none d-block mt-3">
                        <LazyLoadImage
                          effect="blur"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/Step-3.webp"
                          }
                          alt="Customized Fitness Plan"
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          className="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="arrow-responce">
                    <div
                      className="bar-arrow p-md-4"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fwg/step-44.webp)`,
                      }}
                    ></div>
                  </div>
                  <div className="bar-left blog2 d-md-block d-none">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/Step-3.webp"
                      }
                      alt="Customized Fitness Plan"
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      className="lazy"
                    />
                  </div>
                </div>
                <div className="bar-item">
                  <div className="timeline-right blog2">
                    <div className="bar-stike">
                      <div className="forh describe">
                        <h2 className="h3-fs">
                          <i
                            className="fas fa-edit"
                            style={{ color: "#3b5cff" }}
                          ></i>{" "}
                          Daily Diets & Exercise Updates
                        </h2>
                      </div>
                      <div className="describe">
                        <p className="my-0 ml-0">
                          Our team will regularly take diets & exercise updates
                          to track your growth in your fitness journey.
                          According to your requirements, diet & exercise can be
                          changed to meet required results.
                        </p>
                      </div>
                      <div className="bar-left d-md-none d-block mt-3">
                        <LazyLoadImage
                          effect="blur"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/Step-6.webp"
                          }
                          alt="Daily Diets & Exercise Updates"
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          className="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="arrow-responce">
                    <div
                      className="bar-arrow p-md-4 special-report"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fwg/step-55.webp)`,
                      }}
                    ></div>
                  </div>
                  <div className="bar-left d-none d-md-block blog2">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/Step-6.webp"
                      }
                      alt="Daily Diets & Exercise Updates"
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      className="lazy"
                    />
                  </div>
                </div>
                <div className="bar-item">
                  <div className="timeline-right blog2">
                    <div className="bar-stike">
                      <div className="forh describe">
                        <h2 className="h3-fs">
                          <i
                            className="fas fa-bullseye"
                            style={{ color: "#3b5cff" }}
                          ></i>{" "}
                          Meet Your Goals
                        </h2>
                      </div>
                      <div className="describe">
                        <p className="my-0 ml-0">
                          Working with quantitative data, in-the-moment
                          insights, and professional coaching will help you
                          create long-lasting and sustainable achievements with
                          a 5x greater effect. We have transformed 8000+ people
                          across the globe towards a healthier and happier of
                          themselves!
                        </p>
                      </div>
                      <div className="bar-left d-block d-md-none mt-3">
                        <LazyLoadImage
                          effect="blur"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/fwg/Step-5.webp"
                          }
                          alt="Meet Your Goals"
                          style={{ borderRadius: "10px" }}
                          width="100%"
                          className="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="arrow-responce">
                    <div
                      className="bar-arrow p-md-4 special-report"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/bodybuilder.webp)`,
                      }}
                    ></div>
                  </div>
                  <div className="bar-left blog2 d-none d-md-block">
                    <LazyLoadImage
                      effect="blur"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/fwg/Step-5.webp"
                      }
                      alt="Meet Your Goals"
                      style={{ borderRadius: "10px" }}
                      width="100%"
                      className="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="main-bar d-block d-md-none">
              <div className="proggres-holder">
                <div className="proggres-bar"></div>
              </div>
              <div className="bar-item">
                <div className="text-start">
                  <div className="bar-stike">
                    <div className="forh">
                      <h2 className="fs-18"> Consultation</h2>
                    </div>
                    <div className="describe">
                      <p className="my-0 ml-0">
                        Your professional nutritionist and fitness trainer
                        collaborates to assess your personality, habits,
                        environment, lifestyle, and motivations. This aids in
                        their comprehension of the factors in your life that
                        affect your pursuit of fitness.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="arrow-responce">
                  <div
                    className="bar-arrow special-fat"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/lineicon.png)`,
                      width: "25px",
                      height: "25px",
                      marginLeft: "-9px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="bar-item">
                <div className="timeline-right ">
                  <div className="bar-stike">
                    <div className="forh describe">
                      <h2 className=" fs-18"> Body Analysis</h2>
                    </div>
                    <div className="describe">
                      <p className="my-0 ml-0">
                        With our cutting-edge body analysis technology, which
                        allows you to calculate everything happening in your
                        body, you can get a clear picture of how your eating
                        habits and lifestyle choices affect your body.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="arrow-responce">
                  <div
                    className="bar-arrow p-md-4"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/lineicon.png)`,
                      width: "25px",
                      height: "25px",
                      marginLeft: "-9px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="bar-item">
                <div className="timeline-right ">
                  <div className="bar-stike">
                    <div className="forh describe">
                      <h2 className=" fs-18">
                        {" "}
                        Customized Fitness Plan
                      </h2>
                    </div>
                    <div className="describe">
                      <p className="my-0 ml-0">
                        Thanks to quantifiable data and insights.You and your
                        coaches may now :-{" "}
                      </p>
                      <ul className="pl-2 pl-md-3">
                        <li className="pt-3">
                          Tailor your diet to what works for you{" "}
                        </li>
                        <li>Optimize your exercise regimen </li>
                        <li> Maximize your metabolic health </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="arrow-responce">
                  <div
                    className="bar-arrow p-md-4"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/lineicon.png)`,
                      width: "25px",
                      height: "25px",
                      marginLeft: "-9px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="bar-item">
                <div className="timeline-right ">
                  <div className="bar-stike">
                    <div className="forh describe">
                      <h2 className=" fs-18">
                        {" "}
                        Daily Diets & Exercise Updates
                      </h2>
                    </div>
                    <div className="describe">
                      <p className="my-0 ml-0">
                        Our team will regularly take diets & exercise updates to
                        track your growth in your fitness journey. According to
                        your requirements, diet & exercise can be changed to
                        meet required results.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="arrow-responce">
                  <div
                    className="bar-arrow p-md-4 special-report"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/lineicon.png)`,
                      width: "25px",
                      height: "25px",
                      marginLeft: "-9px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="bar-item">
                <div className="timeline-right">
                  <div className="bar-stike">
                    <div className="forh describe">
                      <h2 className=" fs-18">Meet Your Goals</h2>
                    </div>
                    <div className="describe">
                      <p className="my-0 ml-0">
                        Working with quantitative data, in-the-moment insights,
                        and professional coaching will help you create
                        long-lasting and sustainable achievements with a 5x
                        greater effect. We have transformed 8000+ people across
                        the globe towards a healthier and happier of themselves!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="arrow-responce">
                  <div
                    className="bar-arrow p-md-4 special-report"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/img/lineicon.png)`,
                      width: "25px",
                      height: "25px",
                      marginLeft: "-9px",
                    }}
                  ></div>
                </div>
              </div>
              <div className="screens mt-2 text-center">
                <LazyLoadImage
                  effect="blur"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/appmokup.png"
                  }
                  width="195px"
                  className="img-fluid"
                  alt="How it Works"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default FitnessGoals;
