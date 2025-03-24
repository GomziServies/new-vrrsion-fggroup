import Swal from "sweetalert2";
import { axiosInstance } from "../config/api";

// let httpCoachingMode;
let reservedSubmissionID = [];

export const createCourseSubscriptionOrder = async (updatedCourseData) => {
  try {
    let payload = updatedCourseData;

    // Will use after authentication
    localStorage.setItem(
      "tmp_CourseSubscriptionPurchasePayload",
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

    const result = await axiosInstance.post("/subscription/create", payload);

    if (result && result.data) {
        const razorpayConfig = {
          ...result.data.data.razorpay,
          handler: () => {
            const CoursePurchaseMethod = localStorage.getItem("IsCoursePurchase")
            if(CoursePurchaseMethod === "Online") {
              setTimeout(() => {
                window.location.href = "/fgiit/thank-you-online";
                localStorage.removeItem("IsCoursePurchase");
              }, 2000);
            }
            else if(CoursePurchaseMethod === "Offline") {
              setTimeout(() => {
                window.location.href = "/fgiit/thank-you-offline";
                localStorage.removeItem("IsCoursePurchase");
              }, 2000);
            }
            else if(CoursePurchaseMethod === "FWG_Course") {
              setTimeout(() => {
                window.location.href = "/fitnesswithgomzi/thank-you-fwg";
                localStorage.removeItem("IsCoursePurchase");
              }, 2000);
            }
          },
          hidden: {
            contact: false,
            email: false,
          },
        };

        const razorpayInstance = new window.Razorpay(razorpayConfig);
        razorpayInstance.open();

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
