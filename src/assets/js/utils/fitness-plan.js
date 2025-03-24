import Swal from "sweetalert2";
import { axiosInstance } from "../config/api";

export const createPlanOrder = async (program_id) => {
  try {
    let payload = { plan_id: program_id };

    localStorage.setItem(
      "tmp_ProgramPurchasePayload",
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
      "/fitness-plan/create-order",
      payload
    );

    if (result && result.data) {
      result.data.data.handler = () => {
        window.location.href = "/fitnesswithgomzi/thank-you-fwg";
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
