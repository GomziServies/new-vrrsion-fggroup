import React, { useEffect, useState } from "react";
import "../../assets/css/home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { axiosInstance } from "../../assets/js/config/api.js";
import dayjs from "dayjs";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { createCourseSubscriptionOrder } from "../../assets/js/utils/fitness-course-subscription.js";

function OnlineProgramCheckOutFinal({ setCheckData }) {
  const utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);
  let ProgramData = localStorage.getItem("ProgramData");
  ProgramData = JSON.parse(ProgramData);
  const [userData, setUserData] = useState({});
  const [selectedOption, setSelectedOption] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  const handleClose = () => {
    setShowModal(false);
    setIsConfirmed(false);
  };

  const handleRadioChange = (e) => {
    setIsConfirmed(e.target.checked);
  };

  const getUserData = async () => {
    try {
      const response = await axiosInstance.get("/account/profile");
      const userData = response.data.data;
      if (userData) {
        setUserData(userData.user);
      }
      const prices3 = ProgramData?.prices3 || 0;
      const prices6 = ProgramData?.prices6 || 0;
      const prices12 = ProgramData?.prices12 || 0;
      // const currentProgramMode =
      //   ProgramData?.currentProgramMode === "online"
      //     ? {
      //       month: 12,
      //       additional: {
      //         percent: 0,
      //         amount: 0,
      //       },
      //       price: ProgramData.onlinePrices.toFixed(0),
      //       additionalPrice: ProgramData.onlinePrices.toFixed(0),
      //       perMonth: (ProgramData.onlinePrices / 12).toFixed(0),
      //       paidId: ProgramData?.online_purchase_id,
      //     }
      //     : ProgramData?.currentProgramMode === "offline"
      //       ? {
      //         month: 12,
      //         additional: {
      //           percent: 0,
      //           amount: 0,
      //         },
      //         price: prices.toFixed(0),
      //         additionalPrice: prices.toFixed(0),
      //         perMonth: (prices / 12).toFixed(0),
      //         paidId: ProgramData?.offline_purchase_id,
      //       }
      //       : null;

      const currentProgramMode =
        ProgramData?.selectedEmiOption === "3month"
          ? {
              month: 3,
              additional: {
                percent: 0,
                amount: 0,
              },
              price: prices3.toFixed(0),
              additionalPrice: prices3.toFixed(0),
              perMonth: (prices3 / 3).toFixed(0),
              paidId: ProgramData?.planId?.three,
            }
          : ProgramData?.selectedEmiOption === "6month"
          ? {
              month: 6,
              additional: {
                percent: 0,
                amount: 0,
              },
              price: prices6.toFixed(0),
              additionalPrice: prices6.toFixed(0),
              perMonth: (prices6 / 6).toFixed(0),
              paidId: ProgramData?.planId?.six,
            }
          : ProgramData?.selectedEmiOption === "12month"
          ? {
              month: 12,
              additional: {
                percent: 0,
                amount: 0,
              },
              price: prices12.toFixed(0),
              additionalPrice: prices12.toFixed(0),
              perMonth: (prices12 / 12).toFixed(0),
              paidId: ProgramData?.planId?.twelve,
            }
          : null;

      setSelectedOption(currentProgramMode);
    } catch (error) {
      console.error("Error in getUserData:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedCourseData = {
        plan_id: selectedOption?.paidId,
        total_count: selectedOption?.month,
        quantity: 1,
        // start_at: dayjs().utc().format("YYYY-MM-DDTHH:mm:ss[Z]"),
        // expire_by: dayjs().utc().add(3, "day").format("YYYY-MM-DDTHH:mm:ss[Z]"),
        customer_notify: 1,
      };
      try {
        setShowModal(false);
        localStorage.setItem("IsCoursePurchase", "FWG_Course");
        const result = await createCourseSubscriptionOrder(updatedCourseData);
        if (result.success) {
          console.log("Order success");
          localStorage.removeItem("tmp_CourseSubscriptionPurchasePayload");
          // localStorage.removeItem("offlineCourseClick")
        }
      } catch (error) {
        console.error("Error during order:", error);
      }
      window.Razorpay && window.Razorpay.close && window.Razorpay.close();
      window.scrollTo(0, 0);

      // await axiosInstance.post("/subscription/create", updatedCourseData);
      // const response = await axiosInstance
      //   .post("/subscription/create", updatedCourseData)
      //   .then((res) => {
      //     setShowModal(false);
      //     setIsConfirmed(false);

      //     // setTimeout(() => {
      //     //   localStorage.setItem("FWGCheckOut", "checkOut");
      //     //   setCheckData("checkOut");
      //     // }, 5000);

      //     // window.location.href = res?.data?.data?.short_url;
      //   })
      //   .catch((error) => {
      //     toast.error(error.response.data.message);
      //   });
      // localStorage.removeItem("FWGCheckOut");
    } catch (error) {
      console.error("Error in handleFormSubmit:", error);
    }
  };

  const handleBackPage = () => {
    // localStorage.setItem("FWGCheckOut", "document");
    // setCheckData("document");
    localStorage.setItem("FWGCheckOut", "");
    setCheckData("");
    // window.location.reload();
  };
  return (
    <>
      <div className="main-content margintop20 checkout-page-main">
        <section className="checkout-main checkout-page-detail p-lg-4">
          <div className="container-fluid w-100 checkout-padding">
            <div className="row justify-content-center">
              {/* <div className="col-12 mb-3">
                <h2 className="f-rob-bol h2-fs text-center f-30 text-black text-uppercase">
                  User Data
                </h2>
              </div> */}
              <div className="d-md-none d-block col-md-10 px-0 px-md-3 mb-2">
                <button
                  className="f-rob-bol f-16 text-uppercase bg-white border-0"
                  onClick={handleBackPage}
                >
                  <i class="fa-solid fa-chevron-left mr-2"></i>
                  Back
                </button>
              </div>
              {/* <div className="col-12 mx-0 px-0"> */}
              {/* <div className="row justify-content-center align-items-center flex-column-reverse flex-md-row mx-0 px-0"> */}
              <div className="col-12 d-md-block d-none mb-3 pl-5">
                <button
                  className="f-rob-bol f-16 text-uppercase bg-white border-0"
                  onClick={handleBackPage}
                >
                  <i class="fa-solid fa-chevron-left mr-2"></i>
                  Back
                </button>
              </div>

              <div className="course-section-wrapper check-final col-12 col-md-7 promo-code-sticky mb-2 mt-2 mt-md-0">
                <div className="section-card px-4 pt-3 pb-1">
                  <div className="section-content mb-4">
                    <div className="section-header pb-1 mb-3 border-bottom">
                      <h2 className="h4-fs section-title">User Information</h2>
                    </div>
                    <div className="section-content">
                      <div className="detail-item">
                        <div>
                          <b className="me-2">Name: </b>
                          <input
                            type="text"
                            value={
                              userData.first_name + " " + userData.last_name
                            }
                            className="form-control inputfield-bg"
                            disabled
                          />
                        </div>
                        {/* <span>
                            {userData.first_name + " " + userData.last_name}
                          </span> */}
                      </div>
                      <div className="detail-item">
                        <div>
                          <b>Email: </b>
                          <input
                            type="text"
                            value={userData.email}
                            className="form-control inputfield-bg"
                            disabled
                          />
                        </div>
                        {/* <span>{userData.email}</span> */}
                      </div>
                      <div className="detail-item">
                        <div>
                          <b>Mobile No.: </b>
                          <input
                            type="text"
                            value={
                              userData.country_code + " " + userData.mobile
                            }
                            className="form-control inputfield-bg"
                            disabled
                          />
                        </div>
                        {/* <span>
                          {userData.country_code + " " + userData.mobile}
                        </span> */}
                      </div>
                    </div>

                    <div className="section-header pb-1 mb-3 border-bottom">
                      <h2 className="h4-fs section-title">Program Details</h2>
                    </div>

                    <div className="detail-item">
                      <b>Program Name: </b>
                      <span>{ProgramData?.name}</span>
                    </div>
                    <div className="detail-item">
                      <b>Description: </b>
                      <span>
                        {ProgramData?.description}
                        {showMore ? (
                          <span className="new-span">
                            {" " + ProgramData?.showMoreDesc}
                          </span>
                        ) : (
                          <span id="dotsx">...</span>
                        )}
                      </span>

                      <span
                        onClick={toggleReadMore}
                        id="myBtnn"
                        style={{
                          color: "#00afef",
                          fontWeight: "500",
                          cursor: "pointer",
                        }}
                      >
                        {showMore ? " Read less" : " Read more"}
                      </span>
                    </div>

                    <div>
                      <ul className="p-0 new-li">
                        {ProgramData?.info1?.map((info) => (
                          <li>
                            <i className={info.icon}></i>
                            {info.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 px-0 px-md-3 promo-code-sticky mb-2 mt-2 mt-md-0">
                {/* ----- Mobile ------ */}
                <div className="col-12 mb-3 border bg-white p-3 br-15 d-block d-md-none price-mb">
                  <div
                    // className={`ReactCollapse--collapse ${
                    //   isOpen ? "open" : ""
                    // }`}
                    // aria-hidden={!isOpen}
                    // style={{
                    //   height: isOpen ? "auto" : "0px",
                    //   overflow: "hidden",
                    // }}
                    id="opendata"
                  >
                    <div className="ReactCollapse--content">
                      <div className="col-12 mb-3 bg-white py-2 px-3 d-block d-md-none border-bottom">
                        <div className="col-12 p-0">
                          <p className="f-pop-sembol f-16 mb-0 text-center pb-3 mb-2 border-bottom">
                            <b className="text-center">
                              {selectedOption?.month} Month EMI Plan
                            </b>
                          </p>
                          <p className="f-pop-sembol f-16 mb-2">
                            Price Details:
                          </p>
                        </div>
                        <div className="col-12 p-0">
                          <ul className="list-unstyled mb-0 amount-payee-list">
                            <li className="d-block mb-3">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d-inline-block p-0 text-left">
                                  <p className="m-0 f-rob-reg f-16 text-secondary">
                                    Order Total
                                  </p>
                                </div>
                                <div className="d-inline-block p-0 text-right">
                                  <p className="m-0 f-rob-med f-16">
                                    ₹ {selectedOption?.price || 0} /-
                                  </p>
                                </div>
                              </div>
                            </li>
                            {/* {totalDiscount !== 0 && ( */}
                            <li className="d-block mb-3">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d-inline-block p-0 text-left">
                                  <p className="m-0 f-rob-reg f-16 text-secondary">
                                    Extra ({selectedOption?.additional?.percent}
                                    %)
                                  </p>
                                </div>
                                <div className="d-inline-block p-0 text-success text-right">
                                  <p className="m-0 f-rob-med f-16">
                                    ₹ {selectedOption?.additional?.amount || 0}{" "}
                                    /-
                                  </p>
                                </div>
                              </div>
                            </li>
                            {/* )} */}

                            <li className="d-block mb-3">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d-inline-block p-0 text-left">
                                  <p className="m-0 f-rob-reg f-16 text-secondary">
                                    Payable Amount
                                  </p>
                                </div>
                                <div className="d-inline-block p-0 text-right">
                                  <p className="m-0 f-rob-med f-16">
                                    <span className="f-rob-med f-16 text-green text-uppercase ml-1">
                                      ₹ {selectedOption?.additionalPrice || 0}{" "}
                                      /-
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 px-3 d-flex justify-content-between align-items-center"
                    id="clickonthis"
                    // onClick={toggleCollapse}
                  >
                    <p className="m-0 f-rob-med f-16">Per Month</p>
                    <p className="m-0 f-rob-med f-16">
                      ₹ {selectedOption?.perMonth || 0} /-
                      <i
                        // className={`cp fa fa-chevron-${
                        //   isOpen ? "down" : "up"
                        // } f-18 text-yellow ml-2`}
                        aria-hidden="true"
                      ></i>
                    </p>
                  </div>
                </div>

                {/* ----- Desktop ------ */}
                <div className="col-12 mb-3 border bg-white p-3 br-15 d-none d-md-block">
                  <div className="col-12 p-0">
                    <p className="f-pop-sembol f-16 mb-0 text-center pb-3 mb-2 border-bottom">
                      <b className="text-center">
                        {selectedOption?.month} Month EMI Plan
                      </b>
                    </p>
                    <p className="f-pop-sembol f-16 mb-0">Price Details:</p>
                  </div>
                  <div className="col-12 p-0 mt-2">
                    <ul className="list-unstyled border-bottom">
                      <li className="d-block mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-inline-block p-0 text-left">
                            <p className="m-0 f-rob-reg f-16 text-secondary">
                              Order Total
                            </p>
                          </div>
                          <div className="d-inline-block p-0 text-right">
                            <p className="m-0 f-rob-med f-16">
                              ₹ {selectedOption?.price || 0} /-
                            </p>
                          </div>
                        </div>
                      </li>

                      {/* {totalDiscount !== 0 && ( */}
                      <li className="d-block mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-inline-block p-0 text-left">
                            <p className="m-0 f-rob-reg f-16 text-secondary">
                              Extra ({selectedOption?.additional?.percent}%)
                            </p>
                          </div>
                          <div className="d-inline-block p-0 text-success text-right">
                            <p className="m-0 f-rob-med f-16 text-red">
                              ₹ {selectedOption?.additional?.amount || 0} /-
                            </p>
                          </div>
                        </div>
                      </li>
                      {/* )} */}
                      <li className="d-block mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-inline-block p-0 text-left">
                            <p className="m-0 f-rob-reg f-16 text-secondary">
                              Payable Amount
                            </p>
                          </div>
                          <div className="d-inline-block p-0 text-right">
                            <p className="m-0 f-rob-med f-16">
                              <span className="f-rob-med f-16 text-green text-uppercase ml-1">
                                ₹ {selectedOption?.additionalPrice || 0} /-
                              </span>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 p-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-inline-block">
                        <p className="m-0 f-rob-med f-16">Per Month</p>
                      </div>
                      <div className="d-inline-block">
                        <p className="m-0 f-rob-med f-16">
                          ₹ {selectedOption?.perMonth || 0} /-
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-12 mt-7">
                  <div className="common-button">
                    <button
                      type="button"
                      className="bg-blue my-2 py-2 text-uppercase text-white f-16 f-rob-bol checkout-add-edit-address"
                      onClick={() => setShowModal(true)}
                    >
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </section>
      </div>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header className="border-0 justify-content-center">
          <Modal.Title>
            <div className="text-center">
              <img
                src={
                  process.env.PUBLIC_URL + "../assets/images/logo/fg_group.webp"
                }
                width="50px"
                alt="Fg Group"
                className="logo"
              />
              <header className="mt-2 fw-bold fs-24">Terms & Conditions</header>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="terms-body">
            <p>
              <strong>1. Eligibility for EMI:</strong>
            </p>
            <p>
              EMI options are available to customers with valid credit or debit
              cards, UPI, and QR from our partner financial institutions. The
              eligibility for EMI is subject to approval by the respective
              financial institutions.
            </p>

            <p>
              <strong>2. EMI Tenure and Interest:</strong>
            </p>
            <p>
              The EMI tenure will be chosen at the time of purchase, with
              options typically ranging from 3 to 12 months. Interest rates and
              other charges, if applicable, will be communicated during the
              checkout process.
            </p>

            <p>
              <strong>3. Payment Schedule:</strong>
            </p>
            <p>
              EMI payments must be made as per the schedule provided by your
              financial institution. The full program fee will be split into
              equal monthly installments over the selected tenure.
            </p>

            <p>
              <strong>4. Timely Payment Warning:</strong>
            </p>
            <p>
              <strong>
                It is your responsibility to ensure that EMI payments are made
                on time.
              </strong>{" "}
              Failure to pay EMI installments by the due date may result in late
              payment fees, interest penalties, or additional charges imposed by
              the financial institution. Missing payments may also negatively
              impact your credit score.
            </p>

            <p>
              <strong>5. Program Access:</strong>
            </p>
            <p>
              You will be granted full access to the program upon successful
              payment of the first EMI installment. Continued access to the
              program is not contingent on the completion of all EMI payments,
              provided that the installment schedule is followed.
            </p>

            <p>
              <strong>6. Late Payment and Program Cancellation:</strong>
            </p>
            <p>
              If payments are not made on time and any penalties remain unpaid
              after notification,{" "}
              <strong>
                we reserve the right to suspend or cancel your access to the
                program.
              </strong>{" "}
              If you fail to respond or address penalties within 3 days of the
              due date, your program access will be{" "}
              <strong>permanently canceled</strong> without further notice. In
              the event of cancellation due to non-payment, no refund will be
              provided for any amount already paid.
            </p>

            <p>
              <strong>7. Cancellation and Refund:</strong>
            </p>
            <p>
              <strong>
                If the program has already started, no refund will be provided.
              </strong>
              However, if the program has not yet started,{" "}
              <strong>50% of the payment will be refunded.</strong>
              The refund will be processed through the same method as the
              original payment, and the EMI plan may be adjusted or canceled
              accordingly.
            </p>

            <p>
              <strong>8. Liability for Late or Failed Payments:</strong>
            </p>
            <p>
              We are not responsible for any charges or penalties incurred due
              to late or failed payments on your EMI plan. It is advised to
              regularly check with your financial institution to ensure that
              payments are processed correctly and on time.
            </p>

            <p>
              <strong>9. Legal Compliance:</strong>
            </p>
            <p>
              <strong>We operate under the laws of Gujarat, India.</strong> All
              legal matters will be handled in compliance with the state's
              regulations.
            </p>

            <p>
              <strong>10. CIBIL Score and Legal Action:</strong>
            </p>
            <p>
              In case of missed EMI payments, we reserve the right to report the
              issue to CIBIL, which may negatively affect your credit score.
              Additionally,{" "}
              <strong>
                legal action may be taken once the EMI certificate is in hand.
              </strong>
            </p>

            <p>
              <strong>11. Modification of Terms:</strong>
            </p>
            <p>
              We reserve the right to modify these terms and conditions at any
            </p>
            <p>
              <strong>12. Support:</strong>
            </p>
            <p>
              For any issues regarding EMI payments or program access, please
              contact our support team.
            </p>
            <div>
              <strong>Mobile:</strong> +91-8866842520
            </div>
            <div>
              <strong>Email:</strong> fitnesswithgomzi@gmail.com
            </div>
          </div>

          <div className="confirmation-section">
            <input
              type="checkbox"
              id="confirmRead"
              name="confirmRead"
              onChange={handleRadioChange}
            />
            <label htmlFor="confirmRead" className="ml-1 mb-0">
              I have read and agree to the terms
            </label>
          </div>
        </Modal.Body>

        <Modal.Footer className="justify-content-center">
          <button
            className="submit-button"
            disabled={!isConfirmed}
            onClick={handleFormSubmit}
          >
            I Agree
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OnlineProgramCheckOutFinal;
