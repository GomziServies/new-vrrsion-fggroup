import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import ChatBotFgiitComponent from "../../chat-bot-fgiit";

function FgiitFooter() {
  const [selectedAddress, setSelectedAddress] = useState("vesu");

  return (
    <>
      <footer>
        <div
          className="container-fluid"
          style={{ backgroundColor: "black", padding: "50px 0px 25px 0px" }}
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
                  Enhance your fitness knowledge with expert courses, learning resources, and study materials for a healthier lifestyle!
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
                  <Link to="./fgiit/fitness-and-nutrition-courses">FGIIT</Link>
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
                  <h2 className="mb-2 h4-fs">Follow Us</h2>
                  <Link
                    to="https://www.facebook.com/FGIIT.Surat/"
                    aria-label="Fg Group"
                    className="fb"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link
                    to="https://www.instagram.com/fgiit.surat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
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
                <div>
                  <h2 className="mb-2 text-white mt-3 h4-fs">Download App</h2>
                  <Link
                    className="mx-2 my-1"
                    to="https://play.google.com/store/apps/details?id=com.fgiit&pcampaignid=web_share"
                  >
                    <img
                      className="thestorelogos"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/googleplay.webp"
                      }
                      style={{ width: "120px" }}
                      alt="Download on the App Store"
                      border="0"
                    />
                  </Link>
                  <Link to="https://apps.apple.com/in/app/fgiit-academy/id6468647053"
                    className="mx-2 my-1">
                    <img
                      className="thestorelogos"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/appstore.webp"
                      }
                      style={{ width: "120px" }}
                      alt="Download on the App Store"
                      border="0"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 f2">
                <h2 className="mb-2 h4-fs">Name</h2>
                <p>
                  <Link>GOMZI CONSULTING SERVICES PRIVATE LIMITED</Link>
                </p>
              </div>
              <div className="col-md-6 f2">
                <h2 className="mb-2 h4-fs">phone no.</h2>
                <p>
                  <Link>+91-8866842520</Link>
                </p>
              </div>
              <div className="col-md-3 mt-4 f2">
                <h2 className="mb-2 h4-fs">Branches</h2>
                <p
                  className={
                    selectedAddress === "vesu"
                      ? "footer-white-s"
                      : "footer-white"
                  }
                  onClick={() => setSelectedAddress("vesu")}
                >
                  Vesu
                </p>
                {/* <p
                  className={
                    selectedAddress === "adajan"
                      ? "footer-white-s"
                      : "footer-white"
                  }
                  onClick={() => setSelectedAddress("adajan")}
                >
                  Adajan
                </p>
                <p
                  className={
                    selectedAddress === "katargam"
                      ? "footer-white-s"
                      : "footer-white"
                  }
                  onClick={() => setSelectedAddress("katargam")}
                >
                  Katargam
                </p> */}
              </div>
              <div className="col-md-6 mt-4 f2">
                <h2 className="mb-2 h4-fs">Address</h2>
                {/* {selectedAddress === "adajan" && (
                  <p>
                    <Link>
                      228-TIME SQUARE, GauravPath Road, TP 10 Main Rd, opp.
                      Shree Bharti Residency, Surat, Gujarat 394510
                    </Link>
                  </p>
                )}
                {selectedAddress === "katargam" && (
                  <p>
                    <Link>
                      328, laxmi enclave-1, Laxmi Circle, opposite Gajera School, Katargam, Surat, Gujarat 395004
                    </Link>
                  </p>
                )} */}
                {selectedAddress === "vesu" && (
                  <p>
                    <Link>
                      A- 301, Ambrosia Business Hub, VIP Road, beside SMC
                      Garden, Vesu, Surat, Gujarat 395007
                    </Link>
                  </p>
                )}
              </div>
              <div className="col-md-3 mt-4 f2">
                <h2 className="mb-3 h4-fs">Location</h2>
                {/* {selectedAddress === "adajan" && (
                  <iframe
                    title="Fg Group"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7969846182373!2d72.7696569!3d21.200222300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dc214d910a7%3A0x94149c2d93e524c4!2sFitness%20With%20Gomzi%20Adajan%20-%20Best%20Fitness%20Centre%20in%20Adajan%20%7C%20Best%20Weight%20Loss%20Centre%20in%20Adajan!5e0!3m2!1sen!2sin!4v1731922108719!5m2!1sen!2sin"
                    style={{ border: "0", borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                )}
                {selectedAddress === "katargam" && (
                  <iframe
                    title="Fg Group"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4614.830107999382!2d72.8359546!3d21.232575800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ec5b3b07867%3A0xe19d6dbe04ec5f3d!2sLaxmi%20Enclave!5e1!3m2!1sen!2sin!4v1743490743215!5m2!1sen!2sin"
                    style={{ border: "0", borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                )} */}
                {selectedAddress === "vesu" && (
                  <iframe
                    title="Fg Group"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3152737271894!2d72.770764!3d21.139848000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0530a562711f1%3A0x3f5ec296b19e2f33!2sFGIIT%20-%20Nutrition%20%26%20Dietitian%20Courses%20In%20Surat%2C%20Personal%20Trainer%20Courses%20In%20Surat%2C%20Diploma%20Courses%20In%20Surat!5e0!3m2!1sen!2sin!4v1743491511364!5m2!1sen!2sin"
                    style={{ border: "0", borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer >

      <ChatBotFgiitComponent />
    </>
  );
}

export default FgiitFooter;
