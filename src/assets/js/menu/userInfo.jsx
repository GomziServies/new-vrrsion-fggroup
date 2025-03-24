import React, { useEffect, useState } from "react";
import LoginModal from "../popup/login";
import { axiosInstance } from "../config/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const UserInfo = () => {
  const auth = localStorage.getItem("fg_group_user_authorization");
  const [userInfo, setUserInfo] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const logout = () => {
    localStorage.clear();
    setUserInfo(null);
    toast.success("Successfully Logout!");
  };

  const goToStudentPortal = () => {
    showStudentPortalLoginModal();
  };

  const showStudentPortalLoginModal = () => {
    Swal.fire({
      title: "Login to Student Portal",
      html: `<a href="https://play.google.com/store/apps/details?id=com.fgiit" style="margin-top: 1rem!important;color: white; background-color: #B8405E; font-family: Montserrat, sans-serif; font-weight: 500; letter-spacing: .2em; text-transform: uppercase; font-size: 13px; padding: 10px 15px; margin-top: 5px; display: inline-block; border-radius: 5px;">Login To Android App</a>
                <br>
                <a href="https://apps.apple.com/us/app/fgiit-academy/id6468647053" style="margin-top: 1rem!important;color: white; background-color: #B8405E; font-family: Montserrat, sans-serif; font-weight: 500; letter-spacing: .2em; text-transform: uppercase; font-size: 13px; padding: 10px 15px; margin-top: 5px; display: inline-block; border-radius: 5px;">Login To iPhone App</a>`,
    });
  };

  const toggleUserMenu = () => {
    setIsUserMenuVisible(!isUserMenuVisible);
  };

  const http_getProfile = async () => {
    try {
      const response = await axiosInstance.get("/account/profile");
      setUserInfo(response.data.data);
      localStorage.setItem("user_info", JSON.stringify(response.data.data));
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    const user_info = localStorage.getItem("user_info");
    if (auth && !user_info) {
      const fetchProfile = async () => {
        try {
          await http_getProfile();
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };
      fetchProfile();
    } else {
      setUserInfo(JSON.parse(user_info));
    }
  }, [auth]);

  return (
    <div>
      {userInfo ? (
        <>
          <ul>
            <li
              className="mx-0"
              onClick={toggleUserMenu}
              style={{ cursor: "pointer" }}
            >
              Hi, {userInfo?.user?.first_name} <i className="far fa-user"></i>
            </li>
            <li className="mx-0">
              <a href="/user/order" aria-label="Fg Group">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/cart-img.webp"
                  }
                  width="21px"
                  alt="Cart"
                  className="mb-1"
                />
              </a>
            </li>
          </ul>

          {isUserMenuVisible && (
            <ul className="login-popup">
              <li>
                <a href={`/user/profile`}>
                  <i className="far fa-user"></i> Profile
                </a>
              </li>
              {/* <li className="mr-0">
                <a href={`/user/order`}>
                  <i
                    className="fas fa-book-open mr-3 fs-18"
                  ></i>
                  Book Orders
                </a>
              </li> */}
              {userInfo.active_services &&
                userInfo.active_services.includes("FGIIT") &&
                userInfo.purchasedCourse && (
                  <li>
                    <a href="#0" onClick={goToStudentPortal}>
                      <i className="fas fa-user-graduate"></i> Student Portal
                    </a>
                  </li>
                )}
              <li onClick={logout}>
                <a href="#0">
                  <i className="fas fa-sign-out-alt"></i> Log Out
                </a>
              </li>
            </ul>
          )}
        </>
      ) : (
        <ul>
          <li>
            <a onClick={openModal} style={{ cursor: "pointer" }}>
              {" "}
              Login <i className="far fa-user ml-1"></i>
            </a>
            {showModal && <LoginModal onClose={closeModal} />}
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserInfo;
