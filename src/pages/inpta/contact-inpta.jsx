import React, { useState } from "react";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import SimpleINPTAHeader from "../../components/partials/Header/simpleinptaheader";
import { sendInquiry } from "../../assets/js/utils/contact-us";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import InptaFooter from "../../components/partials/Footer/inptafooter";

const ContactINPTA = () => {
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
        "INPTA inquiry form",
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
      <WhatsappHeaderApp
        message={"Hello, I wanted to know more about INPTA Courses."}
        options={{ pageRef: true }}
      />
      <SimpleINPTAHeader />
      <section className="inpta-contact-cards">
        <div className="contact-cards">
          <div className="card">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>OUR MAIN OFFICE</h3>
            <p>
              2, Abhushan Bunglows, Near Alkapuri Char Rasta, Katargam, Surat -
              395004
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>PHONE NUMBER</h3>
            <p>+91 6354051487</p>
          </div>
          <div className="card">
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>EMAIL</h3>
            <p>inptaindia@gmail.com</p>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div className="container-fluid">
          <div className="container">
            <div className="covid mt-5">
              <h2 className="text-center text-333-color h2-fs">
                We're <span className="m-0 text-blue-color">Here To Help</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector"></div>
            <div className="row">
              <div className="col-lg-6">
                <LazyLoadImage
                  effect="blur"
                  className="lazy"
                  src="/assets/images/img/contact-inpta.webp"
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
                <p className="mb-0 mt-4">Write Your Message</p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control fr mt-2 text-dark"
                ></textarea>
                <button
                  type="button"
                  className="btn inpta-btn-inquiry mt-4"
                  onClick={handleApplyForInquiry}
                >
                  Apply For Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InptaFooter />
    </>
  );
};

export default ContactINPTA;
