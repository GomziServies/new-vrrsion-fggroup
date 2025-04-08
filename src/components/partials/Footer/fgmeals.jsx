import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function FgmealsFooter() {
  return (
    <>
      <footer>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "black",
            padding: "50px 0px 25px 0px",
            position: "relative",
            zIndex: "999999",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3 f1">
                <div>
                  <img
                    className="lazy"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/img/fg-group1.webp"
                    }
                    alt="fg group"
                  />
                </div>
                <p>
                  From Diet And Exercise Plans To Provide Digital Marketing
                  Knowledge, We Give You The Best Knowledge Overall.
                </p>
              </div>
              <div className="col-md-3 f2">
                <h2 className="h4-fs">FG Brands</h2>
                <p className="mb-4">
                  <Link to="/fitnesswithgomzi/weight-loss-programs">
                    Fitness With Gomzi
                  </Link>
                </p>
                <p className="mb-4">
                  <Link to="/fgiit/fitness-and-nutrition-courses">FGIIT</Link>
                </p>
                <p className="mb-4">
                  <Link to="/fgdigital/online-digital-marketing-training">
                    FGDIGITAL
                  </Link>
                </p>
                <p className="mb-4">
                  <Link to="/recipe/free-weight-loss-recipe-videos">
                    FGMEALS
                  </Link>
                </p>
              </div>
              <div className="col-md-3 f2">
                <h2 className="h4-fs">Links</h2>
                <p className="mb-4">
                  <Link to="/contact">CONTACT US</Link>
                </p>
                <p className="mb-4">
                  <Link to="/blogs/benefits-of-protein">BLOG</Link>
                </p>
                <p className="mb-4">
                  <Link to="/fitness-brand-franchise">FRANCHISE</Link>
                </p>
                <p className="mb-4">
                  <Link to="/career">CAREERS</Link>
                </p>
              </div>
              <div className="col-md-3 f3 pl-2">
                <div>
                  <h2 className="h4-fs">Follow Us</h2>
                  <Link to="https://www.facebook.com/gajani2/" aria-label="Fg Group" className="fb">
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link
                    to="https://www.instagram.com/fitnesswithgomzi/"
                    className="insta"
                    aria-label="Fg Group"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link
                    to="https://www.youtube.com/channel/UCLyvtq55YZORdV-SN8OQSzQ"
                    className="you"
                    aria-label="Fg Group"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/dt-gautam-jani-561a50161/"
                    className="in"
                    aria-label="Fg Group"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </div>
                <div className="mt-4">
                  <h2 className="mb-3 h4-fs">Location</h2>
                  <iframe
                    title="Fg Group"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3152737271894!2d72.770764!3d21.139848000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0530a562711f1%3A0x3f5ec296b19e2f33!2sFGIIT%20-%20Nutrition%20%26%20Dietitian%20Courses%20In%20Surat%2C%20Personal%20Trainer%20Courses%20In%20Surat%2C%20Diploma%20Courses%20In%20Surat!5e0!3m2!1sen!2sin!4v1711457729537!5m2!1sen!2sin"
                    style={{ border: "0", borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="row ft">
              <div className="col-sm-12 p-0 mb-3">
                <h2 className="h4-fs">RELATED SEARCHES</h2>
              </div>
              <div className="col-lg-4 col-md-6 c p-0">
                <div>
                  <Link>oats recipes for weight loss</Link>
                </div>
                <div>
                  <Link>breakfast weight loss recipe</Link>
                </div>
                <div>
                  <Link>recipe videos in hindi</Link>
                </div>
                <div>
                  <Link>oats weight loss recipe</Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 c p-0">
                <div>
                  <Link>indian recipes veg</Link>
                </div>
                <div>
                  <Link>biryani recipe videos</Link>
                </div>
                <div>
                  <Link>indian recipes breakfast</Link>
                </div>
                <div>
                  <Link>vegan indian recipe</Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 c p-0">
                <div>
                  <Link>indian recipe for dinner</Link>
                </div>
                <div>
                  <Link>healthy meal weight loss</Link>
                </div>
                <div>
                  <Link>weight loss diet for vegetarians</Link>
                </div>
                <div>
                  <Link>breakfast weight loss recipe</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FgmealsFooter;
