import React from "react";

import OwlCarousel from "react-owl-carousel";

const StudentReview = () => {
  return (
    <section className="margintop">
      <div className="container-fluid pt-md-3">
        <div className="container">
          <div className="covid text-center">
            <h2 className="h2-fs">
              Our students{" "}
              <span className="m-0 text-blue-color"> Reviews</span>
            </h2>
          </div>
          <div className="thm-bg-clr dector"></div>
          <OwlCarousel
            loop
            autoPlay
            dots={false}
            id="owl-demo7"
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
            <div className="item m-1 m-md-3">
              <div className="reviews">
                <div className="reviews-img">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/nisha.webp"
                    }
                    alt="FG Group"
                    className="lazy img-fluid"
                  />
                </div>
                <div className="reviews-text text-center">
                  <h2 className="h6-fs">Nisha Jariwala</h2>
                  <ul className="d-flex p-0 justify-content-center">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-muted mb-0">
                    {" "}
                    "Its A Great Experience To Learn Nutrition With FGIIT. Easy
                    Teaching Patterns, Co-Operative Faculties, This Certified
                    Nutritionist Course Help Me Lots In My Career Graph.. Thnx
                    To FGIIT."
                  </p>
                </div>
              </div>
            </div>
            <div className="item m-1 m-md-3 mb-4">
              <div className="reviews">
                <div className="reviews-img">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/img/priti.webp"
                    }
                    alt="FG Group"
                    className="lazy img-fluid"
                  />
                </div>
                <div className="reviews-text text-center">
                  <h2 className="h6-fs">Priti Jani</h2>
                  <ul className="d-flex p-0 justify-content-center">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-muted mb-0">
                    "I Am So Much Happy That After 25 Years I Did Something New
                    And Good.At This Moment I Appreciate FGIIT For Provide Me
                    Best Coaching Best Support And Best Friends Also.Thanks
                    Gautam."
                  </p>
                  <div className="d-block d-md-block">
                    <span id="mores">
                      <p className="m-0 text-muted">"</p>
                    </span>
                    {/* <div className="swap mt-3">
                                                <button onclick="myBtnevent()" id="myBtnn">Read more</button>
                                            </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="item m-1 m-md-3">
              <div className="reviews">
                <div className="reviews-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/vipin-kumar.webp"
                    }
                    alt="FG Group"
                    className="lazy img-fluid"
                  />
                </div>
                <div className="reviews-text text-center">
                  <h2 className="h6-fs">Vipin Kumar</h2>
                  <ul className="d-flex p-0 justify-content-center">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-muted mb-0">
                    FGIIT is one of best institution in india. Just because of
                    there Training skill, individually Doubt Clearance and well
                    Knowledgeable teachers. If anyone is looking for Fitness
                    related course and Grow ur career in this field so this is
                    the best chance for u.
                  </p>
                </div>
              </div>
            </div>
            <div className="item m-1 m-md-3">
              <div className="reviews">
                <div className="reviews-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/pragnesh.webp"
                    }
                    alt="FG Group"
                    className="lazy img-fluid"
                  />
                </div>
                <div className="reviews-text text-center">
                  <h2 className="h6-fs">Maisuria Pragnesh</h2>
                  <ul className="d-flex p-0 justify-content-center">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-muted mb-0">
                    Without Your Guidance I Never Been A Good Nutritionist
                    Thanks A Lot For Sharing Knowledge With Us.
                  </p>
                </div>
              </div>
            </div>
            <div className="item m-1 m-md-3">
              <div className="reviews">
                <div className="reviews-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/grupreet.webp"
                    }
                    alt="FG Group"
                    className="lazy img-fluid"
                  />
                </div>
                <div className="reviews-text text-center">
                  <h2 className="h6-fs">Gurpreet Sidhu</h2>
                  <ul className="d-flex p-0 justify-content-center">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-muted mb-0">
                    Awesome excellent amazing study coordinator and study module
                    am happy for value for money return every single single Myth
                    clear
                  </p>
                </div>
              </div>
            </div>
            <div className="item m-1 m-md-3">
              <div className="reviews">
                <div className="reviews-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/ripul-gaba.webp"
                    }
                    alt="FG Group"
                    className="lazy img-fluid"
                  />
                </div>
                <div className="reviews-text text-center">
                  <h2 className="h6-fs">Ripul Gabba</h2>
                  <ul className="d-flex p-0 justify-content-center">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-muted mb-0">
                    Firstly I want to thank you Gautam sir and his team It's a
                    great time and I am happy to enrol myself in FGIIT institute
                    and I have been gained a lot of knowledge from them all
                    teachers specially Gautam sir gives us great knowledge
                  </p>
                </div>
              </div>
            </div>
            <div className="item m-1 m-md-3">
              <div className="reviews">
                <div className="reviews-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/abhijeet.webp"
                    }
                    alt="FG Group"
                    className="lazy img-fluid"
                  />
                </div>
                <div className="reviews-text text-center">
                  <h2 className="h6-fs">Abhijeet</h2>
                  <ul className="d-flex p-0 justify-content-center">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-muted mb-0">
                    knowledgeable n very informative course (AAS). Thank u so
                    much FGIIT Gautam sir n other facilities…🙏🏻🙏🏻
                  </p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default StudentReview;
