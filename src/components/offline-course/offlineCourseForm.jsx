/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import "react-lazy-load-image-component/src/effects/blur.css"
import PaymentOptions from "../fgiit/OfflinePaymentOptions"
import OfflinePaymentOptions from "../fgiit/OfflinePaymentOptions"

const OfflineCourseForm = ({
	courseData,
	openForm,
	removeReferButton,
	whatsappMessage,
}) => {
	const [showMore, setShowMore] = useState(false)

	const toggleReadMore = () => {
		setShowMore(!showMore)
	}

	return (
		<>
			<div>
				<div className="new-h3">
					<h1 className="ml-0">{courseData.name}</h1>
				</div>
				<div className="mb-3 d-none d-xl-block read-more-span">
					<span className="d-none d-xl-block mb-0 new-span">
						{courseData.description}
						{showMore ? (
							<span className="new-span">{courseData.showMoreDesc}</span>
						) : (
							<span id="dotsx">...</span>
						)}
					</span>
					<span
						onClick={toggleReadMore}
						id="myBtnn"
						style={{ color: "#6eb500", fontWeight: "500", cursor: "pointer" }}
					>
						{showMore ? "Read less" : "Read more"}
					</span>
				</div>
				<div className="d-md-none d-block">
					{courseData?.info ? (
						<ul className="p-0 new-li">
							<li>
								<i className="fas fa-clock"></i>
								{courseData.info[0]}
							</li>
							<li>
								<i className="fas fa-chalkboard-teacher"></i>
								{courseData.info[1]}
							</li>
							<li>
								<i className="fas fa-video"></i>
								{courseData.info[2]}
							</li>
							<li>
								<i className="fas fa-file-signature"></i>
								{courseData.info[3]}
							</li>
						</ul>
					) : (
						<ul className="p-0 new-li">
							<li>
								<i className="fas fa-clock"></i>
								{courseData.secondInfo[0]}
							</li>
							<li>
								<i className="fas fa-chalkboard-teacher"></i>
								{courseData.secondInfo[1]}
							</li>
							<li>
								<i className="fas fa-video"></i>
								{courseData.secondInfo[2]}
							</li>
						</ul>
					)}
				</div>
				<div>
					{courseData?.original_price ? (
						<p className="new-price">
							₹ {courseData.prices}/-{" "}
							<span>
								<del style={{ color: "rgb(254, 51, 51)" }}>
									₹ {courseData.original_price}/-
								</del>{" "}
								GST included
							</span>
						</p>
					) : (
						<p className="new-price">
							₹ {courseData.prices}/- <span>GST included</span>
						</p>
					)}
				</div>
				<OfflinePaymentOptions
					courseData={courseData}
					basePrice={courseData.prices}
				/>
				{/* <Button
          className="btn btn-started mt-2 mr-3"
          onClick={() => handleOrder(courseData.course_id)}
          id={`btn_purchase_${courseData.course_id}`}
        >
          Enroll Now
        </Button>
        <Button
          className="btn btn-started mt-2 mr-3 bg-dark"
          onClick={handleOpenModal}
          
        >
          Free Demo
        </Button>
        <WhatsAppAnchor
          message={whatsappMessage}
          options={{ pageRef: true }}
        />
        </Button> */}
				<a
					className="btn btn-success mt-3 d-none mr-2"
					onclick="goToStudentPortal()"
					id={`btn_student_portal_${courseData.course_id}`}
				>
					Go to Course
				</a>
			</div>
		</>
	)
}

export default OfflineCourseForm
