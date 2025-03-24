import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

const BlogsRtpOne = () => {
  return (
    <>
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="covid text-center">
              <h2 className='h2-fs' style={{ color: "#333" }}>
                Blogs<span className="m-0 text-blue-color"></span>
              </h2>
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
                        "/assets/images/blog/Loss-weight.webp"
                      }
                      alt="Snowy Mountains"
                    />
                    <div className="card__content">
                      <h2 className="card__header h2-fs">Weight Loss VS Fat Loss</h2>
                      <p className="card__text">
                        Individuals Hoping To Shed A Couple Of Pounds; Generally
                        Guarantees They Need To Get More Fit. However, Would You
                        Like To Get More Fit?! It Is Quite Simple To Get
                        Thinner, In Opposition To Mainstream Thinking.
                      </p>
                      <Link
                        to="/blogs/fatloss-vs-weightloss"
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
                        "/assets/images/blog/blog-img.webp"
                      }
                      alt="difference between fat loss abd weight loss"
                    />
                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                        10 Tips For Starting Your Fitness Transformation Journey
                      </h2>
                      <p className="card__text">
                        We All Want To Be "Fit And Fine", But We All Also Love
                        To "Sit And Dine" on delicious foods, unable to resist
                        cravings when the smell of our favorite...
                      </p>
                      <Link
                        to="/blogs/start-your-fitness-transformation"
                        className="card__btn mt-2"
                      >
                        Explore <span>→</span>
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
                        "/assets/images/blog/1-blog-img.webp"
                      }
                      alt="Shed Pounds with Ease"
                    />
                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                        Shed Pounds with Ease: Vegetarian Diet Plan for Weight
                        Loss Revealed!
                      </h2>
                      <p className="card__text">
                        Are you tired of struggling with your weight and
                        searching for an effective way to shed those stubborn
                        pounds? Look no further! We, as...
                      </p>
                      <Link
                        to="/blogs/vegetarian-diet-plan-for-weight-loss"
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
            <div className="d-block d-lg-none">
              <OwlCarousel
                loop
                autoplay
                id="owl-demo111"
                items={1}
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
                <div className="item m-3">
                  <div className="item-box">
                    <img
                      className="card__img"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/blog/Loss-weight.webp"
                      }
                      alt="Snowy Mountains"
                    />
                    <div className="card__content">
                      <h2 className="card__header h2-fs">Weight Loss VS Fat Loss</h2>
                      <p className="card__text mb-0">
                        Individuals Hoping To Shed A Couple Of Pounds; Generally
                        Guarantees They Need To Get More Fit. However, Would You
                        Like To Get More Fit?
                      </p>

                      <Link
                        to="/blogs/fatloss-vs-weightloss"
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
                        "/assets/images/blog/blog-img.webp"
                      }
                      alt="difference between fat loss abd weight loss"
                    />
                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                        10 Tips For Starting Your Fitness Transformation Journey
                      </h2>
                      <p className="card__text mb-0">
                        We All Want To Be "Fit And Fine", But We All Also Love
                        To "Sit And Dine" All These
                      </p>
                      <Link
                        to="/blogs/start-your-fitness-transformation"
                        className="card__btn mt-3"
                      >
                        Explore <span>→</span>
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
                        "/assets/images/blog/1-blog-img.webp"
                      }
                      alt="Shed Pounds with Ease"
                    />
                    <div className="card__content">
                      <h2 className="card__header h2-fs">
                        Shed Pounds with Ease: Vegetarian Diet Plan for Weight
                        Loss Revealed!
                      </h2>
                      <p className="card__text">
                        Are you tired of struggling with your weight and
                        searching for an effective way to shed those...
                      </p>
                      <Link
                        to="/blogs/vegetarian-diet-plan-for-weight-loss"
                        className="card__btn"
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

export default BlogsRtpOne;
