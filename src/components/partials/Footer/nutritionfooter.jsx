import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import nutritionSendWhatsappMsg from "../../../assets/js/utils/nutritionSendWhatsappMsg";

function NutritionFooter() {
  return (
    <>
      <footer>
        <div
          className="container-fluid pt-5 pb-3"
          style={{ backgroundColor: "black" }}
        >
          <div className="container ">
            <div className="row ">
              <div className="col-md-3 f1 f2">
                <h2 className="mb-0 h4-fs">Gomzi Lifesciences LLP</h2>
                <p>
                  Transform your physique with Gomzi Nutrition's premium
                  supplements.
                </p>
                <div className="f2">
                  <p className="mb-2 mt-2">
                    <Link to="tel:+916354051487">
                      Gautam Jani - +91 63540 51487
                    </Link>
                  </p>
                  <p className="mb-4">
                    <Link to="mailto:sales@gomzilifesciences.in">
                      sales@gomzilifesciences.in
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-md-2 f2">
                <h2 className="h4-fs">FG Brands</h2>
                <p className="mb-4">
                  <Link to="https://fggroup.in/fitnesswithgomzi/weight-loss-programs" target="_blank">
                    Fitness With Gomzi
                  </Link>
                </p>
                <p className="mb-4">
                  <Link to="https://fggroup.in/fgiit/fitness-and-nutrition-courses" target="_blank">FGIIT</Link>
                </p>
                <p className="mb-4">
                  <Link to="https://fggroup.in/fgdigital/online-digital-marketing-training" target="_blank">
                    FGDIGITAL
                  </Link>
                </p>
                <p className="mb-4">
                  <Link to="/">
                    Nutrition
                  </Link>
                </p>
              </div>
              <div className="col-md-2 f2">
                <h2 className="h4-fs">Links</h2>
                <p className="mb-4">
                  <Link to="https://fggroup.in/blogs/benefits-of-protein" target="_blank">BLOG</Link>
                </p>
                <p className="mb-4">
                  <Link to="https://fggroup.in/fitness-brand-franchise" target="_blank">FRANCHISE</Link>
                </p>
                {/* <p className="mb-4">
                  <Link to="/career">CAREERS</Link>
                </p> */}
              </div>
              <div className="col-md-2 f2">
                <h2 className="h4-fs">Information</h2>
                <p className="mb-4">
                  <Link to="/nutrition/terms-condition-customer">
                    Terms & Condition
                  </Link>
                </p>
                <p className="mb-4">
                  <Link to="/nutrition/terms-condition-customer">
                    Return & Refund
                  </Link>
                </p>
                <p className="mb-4">
                  <Link to="/nutrition/terms-condition-customer">
                    Privacy Policy
                  </Link>
                </p>
                <p className="mb-4">
                  <Link to="/nutrition/terms-condition-customer">
                    Cancellation Policy
                  </Link>
                </p>
              </div>
              <div className="col-md-3 f2">
                <div className="f3 p-0">
                  <h2 className="h4-fs">Follow Us</h2>
                  <Link to="https://www.facebook.com/gajani2/" aria-label="Fg Group" className="fb">
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link
                    to="https://www.instagram.com/gomzi_nutrition?igsh=NTc4MTIwNjQ2YQ=="
                    className="insta"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link
                    to="https://www.youtube.com/channel/UCLyvtq55YZORdV-SN8OQSzQ"
                    className="you"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/dt-gautam-jani-561a50161/"
                    className="in"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </div>
                <div className="f2 mt-3">
                  <h2 className="mb-4 h4-fs">Partner With Us</h2>
                  <p className="mb-3">
                    <Link
                      onClick={() =>
                        nutritionSendWhatsappMsg(
                          "Hello, I'm interested in becoming a distributor of Gomzi Nutrition.",
                          { pageRef: true }
                        )
                      }
                    >
                      become a distributor
                    </Link>
                  </p>
                  <p className="mb-3">
                    <Link
                      onClick={() =>
                        nutritionSendWhatsappMsg(
                          "Hello, I'm interested in becoming an affiliate of Gomzi Nutrition.",
                          { pageRef: true }
                        )
                      }
                    >
                      become an affiliate
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="row ft">
              <div className="col-sm-12 p-0 mb-3">
                <h2 className="h4-fs">RELATED SEARCHES</h2>
              </div>
              <div className="col-lg-4 col-md-6 c p-0">
                <div>
                  <Link to="/">
                    Optimum Nutrition
                  </Link>
                </div>
                <div>
                  <Link to="/">Nutrition</Link>
                </div>
                <div>
                  <Link to="/nutrition/gomzi-nutrition-ignite-fat-burner">
                    Pre Gym Supplements
                  </Link>
                </div>
                <div>
                  <Link to="/nutrition/gomzi-nutrition-whey-protein-chocolate">
                    Supplements Weight Gainer
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 c p-0">
                <div>
                  <Link to="/nutrition/gomzi-nutrition-whey-protein-isolate">
                    Weight Gainer For Man
                  </Link>
                </div>
                <div>
                  <Link to="/nutrition/gomzi-nutrition-mass-gainer-powder">
                    Protein For Mass Gainer
                  </Link>
                </div>
                <div>
                  <Link to="/nutrition/gomzi-nutrition-whey-protein-chocolate">
                    Whey On Protein Powder
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 c p-0">
                <div>
                  <Link to="/nutrition/gomzi-nutrition-ignite-fat-burner">
                    Fat Burner
                  </Link>
                </div>
                <div>
                  <Link to="/nutrition/gomzi-nutrition-ignite-fat-burner">
                    Pre Workout Supplements
                  </Link>
                </div>
                <div>
                  <Link to="/nutrition/gomzi-nutrition-whey-protein-chocolate">
                    Best Indian Whey Protein
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default NutritionFooter;
