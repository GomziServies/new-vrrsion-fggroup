import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const WhatMakesUs = () => {
  return (
    <section>
      <div className="container-fluid p-0">
        <LazyLoadImage
          effect="blur"
          alt="FG Group"
          src={
            process.env.PUBLIC_URL + "/assets/images/img/what-makes-us-different.webp"
          }
          className="img-fluid d-none d-md-block mt-2"
        />
        <LazyLoadImage
          effect="blur"
          alt="FG Group"
          src={
            process.env.PUBLIC_URL + "/assets/images/img/what-makes-us-different-mobile.webp"
          }
          className="img-fluid d-block d-md-none mt-2"
        />
      </div>
    </section>

  );
};

export default WhatMakesUs;
