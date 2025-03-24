import React, { useState } from "react";
import { sendInquiry } from "../../assets/js/utils/contact-us";

const ContactInquiryForm = ({ note }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  const handleApplyForInquiry = async () => {
    try {
      let modifiedMessage = `${message}\n\nCourse: ${course}`;
      await sendInquiry(
        name,
        email,
        phoneNumber,
        note,
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
    <>
      <section className="margintop40">
        <div className="container-fluid contact-form">
          <div
            className="container blog2 contact-form-card"
          >
            <div className="covid mt-5">
              <h2 className="h2-fs text-center text-333-color">
                We're <span className="m-0 text-blue-color">Here To Help</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row">
              <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/contact.webp"
                  }
                  width="60%"
                  alt="Contact"
                />
              </div>
              <div className="col-lg-6 d-flex flex-wrap">
                <div className="col-md-6">
                  <p className="mb-0 mt-4 contact-label">Full Name</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control fr mt-2"
                    placeholder="Enter Full Name"
                  />
                </div>
                <div className="col-md-6">
                  <p className="mb-0 mt-4 contact-label">Email Address</p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control fr mt-2"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className="col-md-6">
                  <p className="mb-0 mt-4 contact-label">Phone Number</p>
                  <input
                    type="number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="form-control fr mt-2"
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div className="col-md-6">
                  <p className="mb-0 mt-4 contact-label">Select Course</p>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="mt-2 form-control px-2"
                    style={{ height: "auto", padding: "13px 0px" }}
                  >
                    <option value="" hidden>
                      Select Course
                    </option>
                    <option value="Nutri Trainer Course">
                      Nutri Trainer Course
                    </option>
                    <option value="Diploma In Personal Training course">
                      Diploma In Personal Training course
                    </option>
                    <option value="Diploma In Nutrition course">
                      Diploma In Nutrition course
                    </option>
                    <option value="Anabolic Androgenic Steroids">
                      Anabolic Androgenic Steroids
                    </option>
                    <option value="Group Instructor Workshop">
                      Group Instructor Workshop
                    </option>
                    <option value="Powerlifting Coach Workshop">
                      Powerlifting Coach Workshop
                    </option>
                    <option value="Injury Rehabilitation Workshop">
                      Injury Rehabilitation Workshop
                    </option>
                  </select>
                </div>
                <div className="col-md-12">
                  <p className="mb-0 mt-4 contact-label">Write Your Message</p>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-control fr mt-2"
                    placeholder="Write Your Message"
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <button
                    type="button"
                    className="btn contact-btn mt-4"
                    onClick={handleApplyForInquiry}
                  >
                    Apply For Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInquiryForm;
