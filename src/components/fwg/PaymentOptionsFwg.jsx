import React, { useState, useEffect } from "react";
import { createCourseOrder } from "../../assets/js/utils/fitness-course";
import LoginModal from "../../assets/js/popup/login";
import WhatsAppAnchor from "../sendtowhatsapp";
import Swal from "sweetalert2";
import { createPlanOrder } from "../../assets/js/utils/fitness-plan";

const PaymentsOptionFwg = ({ programData, basePrice, whatsappMessage }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedEmiOption, setSelectedEmiOption] = useState("");
  const [finalPrice, setFinalPrice] = useState(basePrice);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentProgramMode, setCurrentProgramMode] = useState("offline");
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("fg_group_user_authorization")
  );

  const handleOnlineClick = () => setCurrentProgramMode("online");
  const handleOfflineClick = () => setCurrentProgramMode("offline");

  const closeModal = () => {
    setShowLoginModal(false);
  };

  useEffect(() => {
    calculatePrice(selectedOption, selectedEmiOption);
  }, [basePrice, selectedOption, selectedEmiOption]);

  const handlePaymentSelect = (option) => {
    if (selectedOption === option) {
      setSelectedOption("");
    } else {
      setSelectedOption(option);
      setSelectedEmiOption(null);
    }
  };

  const handleEmiSelect = (emiOption) => {
    if (selectedEmiOption === emiOption) {
      setSelectedEmiOption(null);
      setSelectedOption("");
    } else {
      setSelectedOption("emi");
      setSelectedEmiOption(emiOption);
      calculatePrice("emi", emiOption);
    }
  };

  const calculatePrice = (option, emiOption) => {
    let discount = 0;
    if (option === "prepaid") {
      discount = 20;
    } else if (option === "emi" && emiOption === "3month") {
      discount = 10;
    }
    const discountedPrice = basePrice - (basePrice * discount) / 100;
    setFinalPrice(discountedPrice);
  };

  const handleOrder = async () => {
    if (!isAuthenticated) {
      localStorage.setItem("ProgramClick", "true");
      localStorage.setItem("currentProgramMode", currentProgramMode);
      setShowLoginModal(true);
    } else {
      if (selectedOption === "") {
        Swal.fire({
          title: "Error!",
          text: "Please Select Payment Option",
          icon: "error",
        });
      } else {
        if (selectedOption === "") {
          Swal.fire({
            title: "Error!",
            text: "Please Select Payment Option",
            icon: "error",
          });
        } else {
          if (selectedOption === "prepaid") {
            try {
              const result = await createPlanOrder(programData.program_id);
              if (result?.showLoginModal) {
                setShowLoginModal(true);
                localStorage.setItem("ProgramClick", JSON.stringify(true));
              } else if (result.success) {
                console.log("Order success");
                localStorage.removeItem("tmp_ProgramPurchasePayload");
                localStorage.removeItem("ProgramClick");
              }
            } catch (error) {
              console.error("Error during order:", error);
            }
            window.Razorpay && window.Razorpay.close && window.Razorpay.close();
            window.scrollTo(0, 0);
          } else {
            localStorage.setItem(
              "ProgramData",
              JSON.stringify({
                ...programData,
                currentProgramMode,
                selectedEmiOption: selectedEmiOption,
              })
            );
            localStorage.setItem("FWGCheckOut", "");
            window.location.href = "/fitnesswithgomzi/check-out";
          }
        }
      }
    }
  };

  useEffect(() => {
    const itemCart = JSON.parse(localStorage.getItem("ProgramClick")) === true;
    const currentLocalProgramMode = localStorage.getItem("currentProgramMode");
    if (itemCart) {
      localStorage.setItem(
        "ProgramData",
        JSON.stringify({
          ...programData,
          currentProgramMode: currentLocalProgramMode,
        })
      );
      localStorage.setItem("FWGCheckOut", "");
      window.location.href = "/fitnesswithgomzi/check-out";
      localStorage.removeItem("ProgramClick");
      localStorage.removeItem("currentProgramMode");
    }
  }, []);

  return (
    <>
      {showLoginModal && <LoginModal onClose={closeModal} />}
      <div className="row" style={{ marginLeft: "15px !important" }}>
        <div className="col-md-12 d-md-block">
          <p className="mb-2">Available Modes</p>
          <div className="d-flex">
            <button
              className={`btn ${
                currentProgramMode === "offline" ? "forjq" : ""
              }`}
              onClick={handleOfflineClick}
              style={{ marginRight: "14px" }}
            >
              Offline / Online
            </button>
            {/* <button
							className={`btn ${
								currentProgramMode === "online" ? "forjq" : ""
							}`}
							onClick={handleOnlineClick}
						>
							Online
						</button> */}
          </div>
        </div>
      </div>
      <h2 className="h5-fs mb-2 mt-3 payment-title">Payment Option</h2>
      <div className="payment-option-group" style={{ gap: "5px" }}>
        {/* One-Time Purchase */}
        <label
          className={`payment-option ${
            selectedOption === "prepaid" ? "active" : ""
          }`}
          htmlFor="prepaid"
        >
          <input
            type="radio"
            id="prepaid"
            name="payment"
            value="prepaid"
            className="payment-option-input"
            checked={selectedOption === "prepaid"}
            onClick={() => handlePaymentSelect("prepaid")}
          />
          <span>
            <div>
              <span>One-Time Pay</span>
              <span>
                <div className="prepaid-prices">
                  <strong>₹24000</strong>
                  {/* <strong>₹{programData.prices12.toFixed(0)}</strong> */}
                  <sup>per year</sup>
                </div>
                <div className="sub-prepaid-prices justify-content-end">
                  <strong>
                    ₹
                    {(2000).toFixed(0)}
                  </strong>
                  <sup>per month</sup>
                  {/* <span>15% Discount</span> */}
                </div>
              </span>
            </div>
            {selectedOption === "prepaid" && (
              <p className="mt-2">
                <p className="d-md-block d-none">One-time payment</p>
                <p>No Extra Charges</p>
                <p className="emi-price">
                  <strong>
                    ₹
                    {(24000).toFixed(0)}
                  </strong>{" "}
                </p>
              </p>
            )}
          </span>
        </label>
        {/* EMI Options */}
        <label
          className={`payment-option ${
            selectedOption === "emi" && selectedEmiOption === "12month"
              ? "active"
              : ""
          }`}
          htmlFor="emi-12month"
        >
          <input
            type="radio"
            id="emi-12month"
            name="payment"
            value="emi-12month"
            className="payment-option-input"
            checked={
              selectedOption === "emi" && selectedEmiOption === "12month"
            }
            onClick={() => handleEmiSelect("12month")}
          />
          <span>
            <div>
              <span>12 Month EMI Plan</span>
              <span className="w-85">
                <div className="prepaid-prices">
                  <strong>₹{programData.prices12}</strong>
                  <sup>per year</sup>
                </div>
                <div className="sub-prepaid-prices justify-content-end">
                  <strong>
                    ₹
                    {(
                      (currentProgramMode === "online"
                        ? programData.onlinePrices
                        : programData.prices12) / 12
                    ).toFixed(0)}
                  </strong>
                  <sup>per month</sup>
                </div>
              </span>
              {/* <div className="emi-prices">
                <strong>
                  ₹
                  {(
                    (currentProgramMode === "online"
                      ? programData.onlinePrices
                      : programData.prices12) / 12
                  ).toFixed(0)}
                </strong>
                <span>per month</span>
              </div> */}
            </div>
            {selectedOption === "emi" && selectedEmiOption === "12month" && (
              <p className="mt-2">
                <p className="d-md-block d-none">EMI for 12 months</p>
                <p>
                  ₹
                  {(
                    (currentProgramMode === "online"
                      ? programData.onlinePrices
                      : programData.prices12) / 12
                  ).toFixed(0)}{" "}
                  per month
                </p>
                <p>No Extra Charges</p>
                {/* <p className="emi-price">
                  <strong>₹{programData.prices12.toFixed(0)}</strong>{" "}
                </p> */}
              </p>
            )}
          </span>
        </label>
        <label
          className={`payment-option ${
            selectedOption === "emi" && selectedEmiOption === "6month"
              ? "active"
              : ""
          }`}
          htmlFor="emi-6month"
        >
          <input
            type="radio"
            id="emi-6month"
            name="payment"
            value="emi-6month"
            className="payment-option-input"
            checked={selectedOption === "emi" && selectedEmiOption === "6month"}
            onClick={() => handleEmiSelect("6month")}
          />
          <span>
            <div>
              <span>6 Month EMI Plan</span>
              <span>
                <div className="prepaid-prices">
                  <strong>₹{programData.prices6}</strong>
                  <sup>per year</sup>
                </div>
                <div className="sub-prepaid-prices justify-content-end">
                  <strong>₹{(programData.prices6 / 6).toFixed(0)}</strong>
                  <sup>per month</sup>
                </div>
              </span>
              {/* <div className="emi-prices">
                <strong>₹{(programData.prices6 / 6).toFixed(0)}</strong>
                <span>per month</span>
              </div> */}
            </div>
            {selectedOption === "emi" && selectedEmiOption === "6month" && (
              <p className="mt-2">
                <p className="d-md-block d-none">EMI for 6 months</p>
                <p>₹{(programData.prices6 / 6).toFixed(0)} per month</p>
                <p>No Extra Charges</p>
                {/* <p className="emi-price">
                  <strong>₹{programData.prices6.toFixed(0)}</strong>{" "}
                </p> */}
              </p>
            )}
          </span>
        </label>
        <label
          className={`payment-option ${
            selectedOption === "emi" && selectedEmiOption === "3month"
              ? "active"
              : ""
          }`}
          htmlFor="emi-3month"
        >
          <input
            type="radio"
            id="emi-3month"
            name="payment"
            value="emi-3month"
            className="payment-option-input"
            checked={selectedOption === "emi" && selectedEmiOption === "3month"}
            onClick={() => handleEmiSelect("3month")}
          />
          <span>
            <div>
              <span>3 Month EMI Plan</span>
              <span>
                <div className="prepaid-prices">
                  <strong>₹{programData.prices3}</strong>
                  <sup>per year</sup>
                </div>
                <div className="sub-prepaid-prices justify-content-end">
                <strong>₹{(programData.prices3 / 3).toFixed(0)}</strong>
                  <sup>per month</sup>
                </div>
              </span>
              {/* <div className="emi-prices">
                <strong>₹{(programData.prices3 / 3).toFixed(0)}</strong>
                <span>per month</span>
              </div> */}
            </div>
            {selectedOption === "emi" && selectedEmiOption === "3month" && (
              <p className="mt-2">
                <p>₹{(programData.prices3 / 3).toFixed(0)} per month</p>
                <p>No Extra Charges</p>
                <p className="d-md-block d-none">EMI for 3 months</p>
                {/* <p className="emi-price">
                  <strong>₹{programData.prices3.toFixed(0)}</strong>{" "}
                </p> */}
              </p>
            )}
          </span>
        </label>
      </div>

      <div className="row justify-content-center align-items-center">
        <div className="col-6 mt-3 px-2">
          <button
            className="custom-button enroll w-100"
            onClick={handleOrder}
            id={`btn_purchase_${
              currentProgramMode === "online"
                ? programData.online_purchase_id
                : programData.offline_purchase_id
            }`}
          >
            Enroll Now
          </button>
        </div>
        <div className="col-6 px-2 d-flex align-items-center mt-2">
          <WhatsAppAnchor
            message={whatsappMessage}
            options={{ pageRef: true }}
          />
        </div>
      </div>
    </>
  );
};

export default PaymentsOptionFwg;
