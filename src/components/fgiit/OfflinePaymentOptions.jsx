import React, { useState, useEffect } from "react"
import { createCourseOrder } from "../../assets/js/utils/fitness-course"
import LoginModal from "../../assets/js/popup/login"
import WhatsAppAnchor from "../sendtowhatsapp"
import Swal from "sweetalert2"

const OfflinePaymentOptions = ({ courseData, basePrice }) => {
	const [selectedOption, setSelectedOption] = useState("")
	const [selectedEmiOption, setSelectedEmiOption] = useState(null)
	const [finalPrice, setFinalPrice] = useState(basePrice)
	const [showLoginModal, setShowLoginModal] = useState(false)
	const [isAuthenticated, setIsAuthenticated] = useState(
		!!localStorage.getItem("fg_group_user_authorization")
	)

	const closeModal = () => {
		setShowLoginModal(false)
	}

	useEffect(() => {
		calculatePrice(selectedOption, selectedEmiOption)
	}, [basePrice, selectedOption, selectedEmiOption])

	const handlePaymentSelect = (option) => {
		if (selectedOption === option) {
			setSelectedOption("")
		} else {
			setSelectedOption(option)
			setSelectedEmiOption(null)
		}
	}

	const handleEmiSelect = (emiOption) => {
		if (selectedEmiOption === emiOption) {
			setSelectedEmiOption(null)
			setSelectedOption("")
		} else {
			setSelectedOption("emi")
			setSelectedEmiOption(emiOption)
			calculatePrice("emi", emiOption)
		}
	}

	const calculatePrice = (option, emiOption) => {
		let discount = 0

		if (option === "prepaid") {
			discount = 20
		} else if (option === "emi" && emiOption === "3month") {
			discount = 10
		}

		const discountedPrice = basePrice - (basePrice * discount) / 100
		setFinalPrice(discountedPrice)
	}

	const handleOrder = async () => {
		if (!isAuthenticated) {
			localStorage.setItem("itemCartAdded", "true")
			localStorage.setItem("selectedEmiOption", selectedEmiOption)
			setShowLoginModal(true)
		} else {
			if (selectedOption === "") {
				Swal.fire({
					title: "Error!",
					text: "Please Select Payment Option",
					icon: "error",
				})
			} else {
				if (selectedOption === "prepaid") {
					try {
						localStorage.setItem('coursePurchaseOrder', 'offline')
						const result = await createCourseOrder(courseData.course_id)
						if (result?.showLoginModal) {
							setShowLoginModal(true)
							localStorage.setItem("offlineCourseClick", JSON.stringify(true))
						} else if (result.success) {
							console.log("Order success")
							localStorage.removeItem("tmp_CoursePurchasePayload")
							localStorage.removeItem("offlineCourseClick")
						}
					} catch (error) {
						console.error("Error during order:", error)
					}
					window.Razorpay && window.Razorpay.close && window.Razorpay.close()
					window.scrollTo(0, 0)
				} else {
					localStorage.setItem(
						"offlineCourseData",
						JSON.stringify({ ...courseData, selectedEmiOption })
					)
					localStorage.setItem("offlineCheckOut", '')
					window.location.href = "/fgiit/offline-check-out"
				}
			}
		}
	}

	useEffect(() => {
		const itemCart = JSON.parse(localStorage.getItem("itemCartAdded")) === true
		const selectedLocalEmiOption = localStorage.getItem("selectedEmiOption")

		if (itemCart) {
			localStorage.setItem(
				"offlineCourseData",
				JSON.stringify({ ...courseData, selectedEmiOption: selectedLocalEmiOption })
			)
			localStorage.setItem("offlineCheckOut", '')
			window.location.href = "/fgiit/offline-check-out"
			localStorage.removeItem("itemCartAdded")
			localStorage.removeItem("selectedEmiOption")
		}
	}, [])

	return (
		<>
			{showLoginModal && <LoginModal onClose={closeModal} />}
			<h2 className="h5-fs mb-2 mt-3 payment-title">Payment Option</h2>
			<div className="payment-option-group" style={{ gap: "5px" }}>

				{/* EMI Options */}
				<label
					className={`payment-option ${selectedOption === "emi" && selectedEmiOption === "3month"
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
						checked={selectedOption === "emi" && selectedEmiOption === "3month"}
						onClick={() => handleEmiSelect("3month")}
					/>
					<span>
						<div>
							<span>3 Month EMI Plan</span>
							<div className="emi-prices">
								<strong>₹{((courseData.prices + courseData.prices * 0.06) / 3).toFixed(
									0
								)}{" "}</strong>
								<span>per month</span>
							</div>
						</div>
						{selectedOption === "emi" && selectedEmiOption === "3month" && (
							<p className="mt-2">
								<p className="d-md-block d-none">EMI for 3 months</p>
								<p>
									₹
									{((courseData.prices + courseData.prices * 0.06) / 3).toFixed(
										0
									)}{" "}
									per month
								</p>
								{/* <p>No Extra Charges</p> */}
								<p className="emi-price">
									<strong>
										{/* <strong>₹{courseData.prices.toFixed(0)}</strong>{" "} */}
										2% convenience Fees per month
									</strong>{" "}
								</p>
							</p>
						)}
					</span>
				</label>

				<label
					className={`payment-option ${selectedOption === "emi" && selectedEmiOption === "6month"
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
						checked={selectedOption === "emi" && selectedEmiOption === "6month"}
						onClick={() => handleEmiSelect("6month")}
					/>
					<span>
						<div>
							<span>6 Month EMI Plan</span>
							<div className="emi-prices">
								<strong>₹{((courseData.prices + courseData.prices * 0.12) / 6).toFixed(
									0
								)}{" "}</strong>
								<span>per month</span>
							</div>
						</div>
						{selectedOption === "emi" && selectedEmiOption === "6month" && (
							<p className="mt-2">
								<p className="d-md-block d-none">EMI for 6 months</p>
								<p>
									₹
									{((courseData.prices + courseData.prices * 0.12) / 6).toFixed(
										0
									)}{" "}
									per month
								</p>
								{/* <p>No Extra Charges</p> */}
								<p className="emi-price">
									<strong>
										{/* <strong>₹{courseData.prices.toFixed(0)}</strong>{" "} */}
										2% convenience Fees per month
									</strong>{" "}
								</p>
							</p>
						)}
					</span>
				</label>

				<label
					className={`payment-option ${selectedOption === "emi" && selectedEmiOption === "9month"
						? "active"
						: ""
						}`}
					htmlFor="emi-9month"
				>
					<input
						type="radio"
						id="emi-9month"
						name="payment"
						value="emi-9month"
						checked={selectedOption === "emi" && selectedEmiOption === "9month"}
						onClick={() => handleEmiSelect("9month")}
					/>
					<span>
						<div>
							<span>9 Month EMI Plan</span>
							<div className="emi-prices">
								<strong>
									₹
									{((courseData.prices + courseData.prices * 0.18) / 9).toFixed(
										0
									)}
								</strong>
								<span>per month</span>
							</div>
						</div>
						{selectedOption === "emi" && selectedEmiOption === "9month" && (
							<p className="mt-2">
								<p className="d-md-block d-none">EMI for 9 months</p>
								<p>
									₹
									{((courseData.prices + courseData.prices * 0.18) / 9).toFixed(
										0
									)}{" "}
									per month
								</p>
								<p className="emi-price">
									<strong>
										{/* ₹{(courseData.prices + courseData.prices * 0.1).toFixed(0)} */}
										2% convenience Fees per month
									</strong>{" "}
								</p>
							</p>
						)}
					</span>
				</label>

				<label
					className={`payment-option ${selectedOption === "emi" && selectedEmiOption === "12month"
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
						checked={
							selectedOption === "emi" && selectedEmiOption === "12month"
						}
						onClick={() => handleEmiSelect("12month")}
					/>
					<span>
						<div>
							<span>12 Month EMI Plan</span>
							<div className="emi-prices">
								<strong>
									₹
									{((courseData.prices + courseData.prices * 0.24) / 12).toFixed(
										0
									)}
								</strong>
								<span>per month</span>
							</div>
						</div>
						{selectedOption === "emi" && selectedEmiOption === "12month" && (
							<p className="mt-2">
								<p className="d-md-block d-none">EMI for 12 months</p>
								<p>
									₹
									{((courseData.prices + courseData.prices * 0.24) / 12).toFixed(
										0
									)}{" "}
									per month
								</p>
								{/* <p>20% Extra Charges</p> */}
								<p className="emi-price">
									<strong>
										{/* ₹{(courseData.prices + courseData.prices * 0.24).toFixed(0)} */}
										2% convenience Fees per month
									</strong>{" "}
								</p>
							</p>
						)}
					</span>
				</label>

				{/* One-Time Purchase */}
				<label
					className={`payment-option ${selectedOption === "prepaid" ? "active" : ""
						}`}
					htmlFor="prepaid"
				>
					<input
						type="radio"
						id="prepaid"
						name="payment"
						value="prepaid"
						checked={selectedOption === "prepaid"}
						onClick={() => handlePaymentSelect("prepaid")}
					/>
					<span>
						<div>
							<span>One-Time Pay</span>
							<div className="prepaid-prices">
								<strong>
									₹{(courseData.prices - courseData.prices * 0.1).toFixed(0)}
								</strong>
								<span>10% Discount</span>
							</div>
						</div>
						{selectedOption === "prepaid" && (
							<p className="mt-2">
								<p>
									<b>10% Discount</b> on Total Price
								</p>
								<p>No Extra Charges</p>
								<p className="d-md-block d-none">One-time payment</p>
								{/* <p >
									<strong>
										₹{().toFixed(0)}
									</strong>{" "}
									<del>₹{courseData.prices}</del>
								</p> */}
								<p className="emi-price">
									<strong>
										₹
										{((courseData.prices - courseData.prices * 0.1) / 12).toFixed(
											0
										)}{" "}
										per month
									</strong>{" "}
								</p>
							</p>
						)}
					</span>
				</label>
			</div>

			<div className="row justify-content-center align-items-center">
				<button
					className="custom-button enroll col-6 mt-3"
					onClick={handleOrder}
					id={`btn_purchase_${courseData?.course_id}`}
				>
					Enroll Now
				</button>
				<div className="col-6 px-2 d-flex align-items-center mt-2">
					<WhatsAppAnchor
						message="Hello, I wanted to know more about This Course details."
						options={{ pageRef: true }}
					/>
				</div>
			</div>
		</>
	)
}

export default OfflinePaymentOptions
