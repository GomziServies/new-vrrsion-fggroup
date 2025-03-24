import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const FgiitBlogs = () => {
  
 
  return (
    <>
      <section className="margintop">
        <div className="container-fluid py-5">
          <div className="container">
            <div className="tabata">
              <h2 className="h2-fs">Blogs</h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="blog">
                  <Link to="../blogs/choosing-the-right-fitness-certification-program-in-India">
                    <div className="row">
                      <div className="col-sm-4 align-items-center">
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/blog/counfused.webp"
                          }
                          width="100%"
                          alt="benefits of teas"
                        />
                      </div>
                      <div className="col-sm-8">
                        <h2 className="h3-fs mb-2">
                          How To Choose The Right Fitness Certification Program
                          In India For Your Career Goals
                        </h2>
                        <p>
                          As The Fitness Industry Continues To Boom In India,
                          More And More People Are Considering A Career As A
                          Fitness Professional. Whether You're...
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog">
                  <Link to="../blogs/the-importance-of-fitness-education-in-today's-world">
                    <div className="row align-items-center">
                      <div className="col-sm-4">
                        <LazyLoadImage
                          effect="blur"
                          className="lazy"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/blog/fitness-education.jpg"
                          }
                          width="100%"
                          alt="what is Keto Diet"
                        />
                      </div>
                      <div className="col-sm-8">
                        <h2 className="h3-fs mb-2">
                          The Importance Of Fitness Education In Today's World
                        </h2>
                        <p>
                          In Today's World Where Sedentary Lifestyles And
                          Unhealthy Habits Are Becoming Increasingly Common,
                          Fitness Education Has Become More Important Than Ever
                          Before! By Promoting Physical
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
     
    </>
  );
};

export default FgiitBlogs;
