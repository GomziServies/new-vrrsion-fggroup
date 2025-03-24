import Swal from "sweetalert2";
import { axiosInstance } from "../config/api";

// let httpCoachingMode;
let reservedSubmissionID = [];

export const createCourseOrder = async (course_id, submission_id) => {
  try {
    if (!submission_id) {
      submission_id = reservedSubmissionID.filter(
        (data) => data.course_id === course_id
      )[0]
        ? reservedSubmissionID.filter((data) => data.course_id === course_id)[0]
            .submission_id
        : null;
    }

    let payload = { course_id, submission_id };

    let coupon_id = localStorage.getItem("coupon_id");
    if (coupon_id) {
      payload.coupon_id = coupon_id;
    }

    // Will use after authentication
    localStorage.setItem(
      "tmp_CoursePurchasePayload",
      JSON.stringify({
        ...payload,
        expire: new Date().getTime() + 1000 * 60 * 60 * 5,
      })
    );

    // Check Authentication
    if (
      localStorage.getItem("fg_group_user_authorization") === null ||
      localStorage.getItem("user_info") === null
    ) {
      localStorage.removeItem("fg_group_user_authorization");
      localStorage.removeItem("user_info");

      // expire in 5h
      return { showLoginModal: true };
    }

    const result = await axiosInstance.post(
      "/fitness-course/create-order",
      payload
    );

    if (result && result.data) {
      // httpCoachingMode = result.data.data.description
      // clear coupon_id
      localStorage.removeItem("coupon_id");
      result.data.data.handler = () => {
        const CoursePurchasePage = localStorage.getItem(
          "coursePurchaseOrder"
        );
        if (CoursePurchasePage === "international") {
          setTimeout(() => {
            window.location.href = "/fgiit/thank-you-international";
            localStorage.removeItem("coursePurchaseOrder");
          }, 2000);
        } else if (CoursePurchasePage === "online") {
          setTimeout(() => {
            window.location.href = "/fgiit/thank-you-online";
            localStorage.removeItem("coursePurchaseOrder");
          }, 2000);
        } else if (CoursePurchasePage === "offline") {
          setTimeout(() => {
            window.location.href = "/fgiit/thank-you-offline";
            localStorage.removeItem("coursePurchaseOrder");
          }, 2000);
        }
      };

      result.data.data.hidden = {
        contact: false,
        email: false,
      };
      new window.Razorpay(result.data.data).open();
      return { showLoginModal: false, success: true };
    }
  } catch (error) {
    if (error.response && error.response.data.status === 401) {
      console.log("error response");
      return { showLoginModal: true };
    } else {
      Swal.fire({
        title: "Error",
        text: error.message || "An error occurred during the order creation.",
        icon: "error",
      });
    }
  }
};
