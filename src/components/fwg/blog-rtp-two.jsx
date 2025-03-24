import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

const BlogsRtpTwo = () => {
  return (
    <>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="covid nunito-font text-center">
              <h2 className="h2-fs">Blogs</h2>
            </div>
            <div className="thm-bg-clr dector mb-3 mb-md-5"></div>
            <div className="d-none d-lg-block">
              <div className="row">
                <div className="col-md-4">
                  <div className="item-box">
                    <LazyLoadImage
                      effect="blur"
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/133517439.webp"
                      }
                      alt="Snowy Mountains"
                    />
                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                        7 Most Effective Exercises At Home
                      </h2>
                      <p className="card__text">
                        Extending the elbow and forearm. Explain that chair dips
                        are the foremost effective workout for this muscle. The
                        triceps are important in an everyday...
                      </p>
                      <Link
                        to="/blogs/7-most-effective-exercises"
                        className="card__btn"
                      >
                        Explore
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="item-box">
                    <LazyLoadImage
                      effect="blur"
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/blog/hate-gym.webp"
                      }
                      alt="difference between fat loss abd weight loss"
                    />
                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                        10 Undeniable Reasons People Hate Gym
                      </h2>
                      <p className="card__text">
                        The Reason Is Simple: Gym Is A Place That Makes Us Feel
                        Like We're Not In Control. It's A Place Where We Don't
                        Feel Comfortable With Who We Are Or What We Look Like.
                      </p>
                      <Link
                        to="/blogs/why-people-hate-gym"
                        className="card__btn mt-2"
                      >
                        Explore
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="item-box">
                    <LazyLoadImage
                      effect="blur"
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/blog1-1.webp"
                      }
                      alt="Shed Pounds with Ease"
                    />
                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                        Home Workout Plan Without Equipment
                      </h2>
                      <p className="card__text">
                        Numerous people love to workout at the gym but at the
                        current time, life gets busy with a lot of works and
                        that's why have to sweat out at home.
                      </p>
                      <Link
                        to="/blogs/how-to-get-flexible-body"
                        className="card__btn"
                      >
                        Explore
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block d-lg-none paddingbottom60 studentsreview-1">
              <OwlCarousel
                loop
                autoplay
                id="owl-demo111"
                items={1}
                nav={true}
                dots={false}
                className="owl-carousel owl-theme"
                navText={[
                  '<i class="fas fa-arrow-left"></i>',
                  '<i class="fas fa-arrow-right"></i>',
                ]}
                responsive={{
                  0: {
                    items: 1,
                    nav: false,
                  },
                  600: {
                    items: 2,
                  },
                  1000: {
                    items: 3,
                  },
                }}
              >
                <div className="item m-3">
                  <div className="item-box">
                    <img
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/133517439.webp"
                      }
                      alt="Snowy Mountains"
                    />

                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                        7 Most Effective Exercises At Home
                      </h2>
                      <p className="card__text mb-0">
                        Extending the elbow and forearm. Explain that chair dips
                        are the foremost effective workout for this muscle. The
                        triceps are important in an everyday movement that
                        involves.
                      </p>
                      <Link
                        to="/blogs/7-most-effective-exercises"
                        className="card__btn mt-3"
                      >
                        Explore
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item m-3">
                  <div className="item-box">
                    <img
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/blog/hate-gym.webp"
                      }
                      alt="difference between fat loss abd weight loss"
                    />

                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                        10 Undeniable Reasons People Hate Gym
                      </h2>
                      <p className="card__text mb-0">
                        The Reason Is Simple: Gym Is A Place That Makes Us Feel
                        Like We're Not In Control. It's A Place Where We Don't
                        Feel Comfortable With Who We Are Or What We Look Like.
                      </p>
                      <Link
                        to="/blogs/why-people-hate-gym"
                        className="card__btn mt-3"
                      >
                        Explore
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item m-3">
                  <div className="item-box">
                    <img
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/img/blog1-1.webp"
                      }
                      alt="Shed Pounds with Ease"
                    />

                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                        Home Workout Plan Without Equipment
                      </h2>
                      <p className="card__text mb-0">
                        Numerous people love to workout at the gym but at the
                        current time, life gets busy with a lot of works and
                        that's why have to sweat out at home.
                      </p>
                      <Link
                        to="/blogs/healthy-eating-habits"
                        className="card__btn mt-3"
                      >
                        Explore
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsRtpTwo;
