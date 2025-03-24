import React from "react";
import { Link } from "react-router-dom";

function InptaFooter() {
  return (
    <>
      <footer>
        <div
          className="container-fluid"
          style={{ backgroundColor: "black", padding: "50px 0px 25px 0px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3 f1 f2 mt-2">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "../assets/images/img/inpta-logo.webp"
                  }
                  alt="Fg Group"
                />
                <p>
                  Get expert support to start and grow your gym or fitness business with the right guidance, resources, and strategies!
                </p>
              </div>
              <div className="col-md-3 f2">
                <h2 className="h4-fs">INPTA Services</h2>
                <p className="mb-4">
                  <Link to="/inpta/training-and-placement-inpta">
                    Training & Placement
                  </Link>
                </p>
                <p className="mb-4">
                  <Link to="http://gcsconsultant.fggroup.in/fitit/digital-marketing-agency">FITIT</Link>
                </p>
                <p className="mb-4">
                  <Link to="/fgiit/fitness-and-nutrition-courses">
                    Become a Fgiitian
                  </Link>
                </p>
              </div>
              <div className="col-md-3 f2">
                <h2 className="h4-fs">Links</h2>

                <p className="mb-4">
                  <Link to="/inpta/contact-inpta">Contact Us</Link>
                </p>
                <p className="mb-4">
                  <Link to="/inpta/event">INPTA Events</Link>
                </p>
                <p className="mb-4">
                  <Link to="https://business.fggroup.in/">
                    Connect with a Local Chapter
                  </Link>
                </p>
                <p className="mb-4">
                  <Link to="/inpta/local-partner">Local Partners</Link>
                </p>
              </div>
              <div className="col-md-3 f2 pl-2">
                {/* <div>
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
                </div> */}
                <div>
                  <h2 className="h4-fs">Location</h2>
                  {/* <h2 className="mb-3 h4-fs">Location</h2> */}
                  <iframe
                    title="Fg Group"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2860707432683!2d72.83842927353027!3d21.220501781168633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ee63ed3cc6b%3A0x6328012d841aebd!2sAbhushan%20Bunglows!5e0!3m2!1sen!2sin!4v1736146352383!5m2!1sen!2sin"
                    style={{ border: "0", borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3 f2">
                <h2 className="mb-2 h4-fs">Name</h2>
                <p>
                  <Link>
                    Indian Nutritionist and Personal Trainer Association
                  </Link>
                </p>
              </div>
              <div className="col-md-5 f2">
                <h2 className="mb-2 h4-fs">Address</h2>
                <p>
                  <Link>
                    2, Abhushan Bunglows, Near Alkapuri Char Rasta, Katargam,
                    Surat - 395004
                  </Link>
                </p>
              </div>
              <div className="col-md-4 f2">
                <h2 className="mb-2 h4-fs">phone no.</h2>
                <p>
                  <Link to="#">+91-6354051487</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default InptaFooter;
