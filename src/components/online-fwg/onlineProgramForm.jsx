/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Modal } from "react-bootstrap";
import { createCourseOrder } from "../../assets/js/utils/fitness-course";
import LoginModal from "../../assets/js/popup/login";
import { sendInquiry } from "../../assets/js/utils/contact-us";
import Swal from "sweetalert2";
import PaymentsOptionFwg from "../fwg/PaymentOptionsFwg";

const OnlineProgramFormFwg = ({
  programData,
  whatsappMessage,
  showPrice = 'true'
}) => {
  const [showMore, setShowMore] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  const closeModal = () => {
    setShowLoginModal(false);
  };

  const handleOrder = async (course_id) => {
    try {
      const result = await createCourseOrder(course_id);
      if (result.showLoginModal) {
        setShowLoginModal(true);
        localStorage.setItem("onlineCourseClick", JSON.stringify(true));
      } else if (result.success) {
        localStorage.removeItem("tmp_CoursePurchasePayload");
        localStorage.removeItem("onlineCourseClick");
      }
    } catch (error) {
      console.error("Error during order:", error);
    }
    window.Razorpay && window.Razorpay.close && window.Razorpay.close();
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const clickedOnlineCourse = JSON.parse(
      localStorage.getItem("onlineCourseClick")
    );
    const CourseData = JSON.parse(
      localStorage.getItem("tmp_CoursePurchasePayload")
    );
    if (clickedOnlineCourse && CourseData) {
      handleOrder(CourseData?.course_id);
    }
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    modalName: "",
    modalEmail: "",
    modalContactNumber: "",
    modalSelectedTime: "",
    modalSelectedDate: "",
    modalMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const handleOpenModal = () => {
    if (!formSubmitted) {
      setShowModal(true);
    }
  };

  const bookFreeAppointmentWithBestDietitianInquiry = async () => {
    try {
      const name = formData.modalName;
      const phoneNumber = formData.modalContactNumber;
      const email = formData.modalEmail;
      const date = formData.modalSelectedDate;
      const time = formData.modalSelectedTime;
      var message = `Hello, My name is ${name} and I want to book a free appointment with best dietitian on ${date} at ${time}.`;
      if (!name || !email || !phoneNumber) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please fill out all fields in the form.",
          confirmButtonText: "OK",
        });
        return;
      }
      await sendInquiry(
        name,
        email,
        phoneNumber,
        "Book Free Appointment with Best Dietitian",
        message,
        window.location.href,
        null,
        null,
        null
      );
      setFormData({
        modalName: "",
        modalEmail: "",
        modalContactNumber: "",
        modalSelectedDate: "",
        modalSelectedTime: "",
      });
      handleClose();
      // localStorage.setItem("formSubmitted", "true");
      setFormSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };
  // useEffect(() => {
  //   const isFormSubmitted = localStorage.getItem("formSubmitted");
  //   if (isFormSubmitted) {
  //     setFormSubmitted(true);
  //   }
  // }, []);
  return (
    <>
      {showLoginModal && <LoginModal onClose={closeModal} />}

      <div>
        <div className="new-h3">
          <h1 className="ml-0">{programData.name}</h1>
        </div>
        <div className="mb-3 d-none d-xl-block read-more-span">
          <span className="d-none d-xl-block mb-0 new-span">
            {programData.description}
            {showMore ? (
              <span className="new-span">{programData.showMoreDesc}</span>
            ) : (
              <span id="dotsx">...</span>
            )}
          </span>
          <span
            onClick={toggleReadMore}
            id="myBtnn"
            style={{ color: "#00afef", fontWeight: "500", cursor: "pointer" }}
          >
            {showMore ? "Read less" : "Read more"}
          </span>
        </div>
        <div className="d-md-none d-block">
          <ul className="p-0 new-li">
            {programData?.info1?.map((info) => (
              <li>
                <i className={info.icon}></i>
                {info.title}
              </li>
            ))}
          </ul>
          {/* {programData?.info ? (
            <ul className="p-0 new-li">
              <li>
                <i className="fas fa-clock"></i>
                {programData.info[0]}
              </li>
              <li>
                <i className="fas fa-chalkboard-teacher"></i>
                {programData.info[1]}
              </li>
              <li>
                <i className="fas fa-video"></i>
                {programData.info[2]}
              </li>
              <li>
                <i className="fas fa-file-signature"></i>
                {programData.info[3]}
              </li>
            </ul>
          ) : (
            <ul className="p-0 new-li">
              <li>
                <i className="fas fa-clock"></i>
                {programData.secondInfo[0]}
              </li>
              <li>
                <i className="fas fa-chalkboard-teacher"></i>
                {programData.secondInfo[1]}
              </li>
              <li>
                <i className="fas fa-video"></i>
                {programData.secondInfo[2]}
              </li>
            </ul>
          )} */}
        </div>
        {/* <div>
          {programData?.original_price ? (
            <p className="new-price">
              ₹ {programData.prices}/-{" "}
              <span>
                <del style={{ color: "rgb(254, 51, 51)" }}>
                  ₹ {programData.original_price}/-
                </del>{" "}
                GST included
              </span>
            </p>
          ) : (
            <p className="new-price">
              ₹ {programData.prices}/- <span>GST included</span>
            </p>
          )}
        </div> */}

        {showPrice === 'true' ? (<PaymentsOptionFwg
          programData={programData}
          basePrice={programData.prices}
          whatsappMessage={whatsappMessage}
        />) : ''}
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <div className="modal-dialog m-0" role="document">
          <div className="modal-content bg-changes bg-fwg-popup">
            <Modal.Header className="p-0 border-bottom-0">
              <div className="text-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/fwg/book-appointment.webp"
                  }
                  className="img-fluid mb-2 ml-2"
                  width="40%"
                  alt="Book Free Appointment"
                />
                <h2 className="text-white h2-fs">
                  Book Free Appointment with Best Dietitian
                </h2>
              </div>
              <button
                type="button"
                className="closess closse-mobile p-0 bg-transparent border-0"
                onClick={handleClose}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="p-0">
                  <i className="fas fa-times text-white"></i>
                </span>
              </button>
            </Modal.Header>
            <div className="modal-body mb-0 p-0">
              <div className="text-center d-block">
                <div className="row justify-content-center mb-4">
                  <div className="col-md-11 pl-0">
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="far fa-user"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control fr"
                        name="modalName"
                        value={formData.modalName}
                        onChange={handleChange}
                        placeholder="Enter Your name"
                      />
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="fas fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control fr"
                        name="modalEmail"
                        value={formData.modalEmail}
                        onChange={handleChange}
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="input-group align-items-center mb-3">
                      <span>
                        <i className="fas fa-phone-alt"></i>
                      </span>
                      <input
                        type="number"
                        className="form-control fr"
                        name="modalContactNumber"
                        value={formData.modalContactNumber}
                        onChange={handleChange}
                        placeholder="Enter Your contact Number"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={bookFreeAppointmentWithBestDietitianInquiry}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default OnlineProgramFormFwg;
