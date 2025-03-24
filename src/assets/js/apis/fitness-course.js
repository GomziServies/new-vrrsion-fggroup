import Swal from "sweetalert2";
import { axiosInstance } from "../config/api";

let httpCoachingMode;
let reservedSubmissionID = []; // To check if user has already valid submission 

export const createCourseOrder = async (course_id, submission_id) => {
    // Get submission_id if not provided
    if (!submission_id) {
        submission_id = reservedSubmissionID.find(data => data.course_id === course_id)?.submission_id || null;
    }

    const payload = { course_id, submission_id };

    const coupon_id = localStorage.getItem('coupon_id');
    if (coupon_id) {
        payload.coupon_id = coupon_id;
    }

    try {
        const result = await axiosInstance.post('/fitness-course/create-order', payload);

        if (result && result.data) {
            httpCoachingMode = result.data.description;

            // Clear coupon_id
            localStorage.removeItem('coupon_id');

            result.data.data.handler = () => Swal.fire({
                title: 'Success',
                text: 'Please check your email for invoice.',
                icon: 'success',
            }).then(() => {
                http_getProfile();

                // Uncomment if you want to redirect to the Student Portal for VIRTUAL COURSE
                // if (httpCoachingMode === 'VIRTUAL COURSE') {
                //     goToStudentPortal();
                // }
            });
            result.data.hidden = {
                contact: false,
                email: false
            };

            // Assuming you want to initiate Razorpay payment here
            new window.Razorpay(result.data.data).open();
        }
    } catch (error) {
        console.error("Error creating course order:", error);
        // Handle error appropriately, e.g., show an error message
        Swal.fire({
            title: 'Error',
            text: 'There was an issue creating your order. Please try again.',
            icon: 'error',
        });
    }
};

export const getEnrolledCourse = async () => {
    try {
        const response = await axiosInstance.post(`/fitness-course/get-enrolled-course`, {
            coaching_mode: "VIRTUAL"
        });

        response.data.forEach(data => {
            try {
                // Here you would handle UI updates if needed, or return the data
                // Example: return data or set state in a component
                console.log(`Enrolled course: ${data.course_id}`); // Placeholder for actual implementation
            } catch (error) {
                console.log(error);
            }
        });
    } catch (error) {
        console.error("Error fetching enrolled courses:", error);
    }
};

const http_getProfile = async () => {
    try {
        const response = await axiosInstance.get("/account/profile");
        localStorage.setItem("user_info", JSON.stringify(response.data.data));
    } catch (error) {
        console.error("Error fetching user profile:", error);
    }
};
