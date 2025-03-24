import React, { useState } from "react";

import { sendInquiry } from "../../assets/js/utils/contact-us";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const InquiryForm = ({ imgURL }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  const handleApplyForInquiry = async () => {
    try {
      let modifiedMessage = `${message}\n\nProgram: ${course}`;
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "FWG Main Page Inquiry",
        modifiedMessage,
        window.location.href,
        null,
        null,
        null
      );
      setName("");
      setEmail("");
      setPhoneNumber("");
      setCourse("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="margintop">
      <div className="container-fluid">
        <div className="container blog2">
          <div className="covid mt-5">
            <h2 className="text-center text-333-color h2-fs">
              We're{" "}
              <span className="m-0 text-blue-color">
                Here To Help
              </span>
            </h2>
          </div>
          <div className="thm-bg-clr dector"></div>
          <div className="row">
            <div className="col-lg-6">
              <LazyLoadImage
                effect="blur"
                className="lazy"
                src={
                  imgURL
                    ? process.env.PUBLIC_URL + imgURL
                    : process.env.PUBLIC_URL + "/assets/images/img/contact.webp"
                }
                width="100%"
                alt="Contact"
              />
            </div>
            <div className="col-lg-6">
              <p className="mb-0 mt-4">Full Name</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control fr mt-2"
                placeholder="Enter Full Name"
              />
              <p className="mb-0 mt-4">Email Address</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control fr mt-2"
                placeholder="Enter Email Address"
              />
              <p className="mb-0 mt-4">Phone Number</p>
              <input
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="form-control fr mt-2"
                placeholder="Enter Phone Number"
              />
              <p className="mb-0 mt-4">Program Name</p>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="mt-2 form-control fr">
                <option value="" hidden>
                  Select Program
                </option>
                <option value="RTP-1.0-Fat-Loss Program">
                  RTP-1.0-Fat-Loss Program
                </option>
                <option value="RTP-2.0 - Weight Management">
                  RTP-2.0 - Weight Management
                </option>
                <option value="RTP-3.0 Clinical illness">
                  RTP-3.0 Clinical illness
                </option>
                <option value="RTP-4.0 Corporate Wellness">
                  RTP-4.0 Corporate Wellness
                </option>
                <option value="RTP-5.0 Prep Coaching">
                  RTP-5.0 Prep Coaching
                </option>
              </select>
              <p className="mb-0 mt-4">Write Your Message</p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-control fr mt-2 text-dark"></textarea>
              <button
                type="button"
                className="btn btn-success mt-4"
                onClick={handleApplyForInquiry}>
                Apply For Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
