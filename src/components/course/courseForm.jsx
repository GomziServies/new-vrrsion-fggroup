/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { axiosInstance } from "../../assets/js/config/api.js";
import CourseButtonsContainer from "./CourseButtonsContainer.jsx";

const CourseForm = ({
  courseData,
  courses,
  menuOpen,
  setMenuOpen,
  isAuthenticated,
  setShowModal,
  setCourses,
}) => {
  const toggleMenu = async (data, e) => {
    e.preventDefault();
    try {
      if (!isAuthenticated) {
        setMenuOpen(false);
        setShowModal(true);
        localStorage.setItem("addCourseInLocal", JSON.stringify(data));
        localStorage.setItem("courseCartAvailable", true);
      } else {
        const existingData = JSON.parse(
          localStorage.getItem("addItemInCart")
        ) || { products: [] };

        localStorage.setItem("addItemInCart", JSON.stringify(existingData));
        await axiosInstance.post("/order-cart/add-item", {
          item_id: data.BuyButton,
          item_type: "FITNESS_COURSE",
        });
        setCourses(data);
        setMenuOpen(!menuOpen);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const addCourseInCart = async (data) => {
    try {
      console.log(data);
      await axiosInstance.post("/order-cart/add-item", {
        item_id: data.BuyButton,
        item_type: "FITNESS_COURSE",
      });
      setCourses(data);
      setMenuOpen(!menuOpen);
      localStorage.removeItem("addCourseInLocal");
      localStorage.removeItem("courseCartAvailable");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const localCourseData = JSON.parse(
      localStorage.getItem("addCourseInLocal")
    );
    const courseAvailable = JSON.parse(
      localStorage.getItem("courseCartAvailable")
    );
    if (localCourseData && courseAvailable) {
      addCourseInCart(localCourseData);
    }
  }, []);

  return (
    <>
      <div className="tabata d-inline-block">
        <h1>{courseData?.name}</h1>
        <p className="my-1">
          <b>course duration : {courseData.duration}</b>
        </p>
      </div>
      <div className="mt-2 mb-3 meal">
        <i
          className="fas fa-star"
          id="overall_top_1"
          style={{ color: "orange" }}
        ></i>
        <i
          className="fas fa-star-half-alt"
          id="overall_top_half_1"
          style={{ display: "none" }}
        ></i>
        <i
          className="fas fa-star"
          id="overall_top_2"
          style={{ color: "orange" }}
        ></i>
        <i
          className="fas fa-star-half-alt"
          id="overall_top_half_2"
          style={{ display: "none" }}
        ></i>
        <i
          className="fas fa-star"
          id="overall_top_3"
          style={{ color: "orange" }}
        ></i>
        <i
          className="fas fa-star-half-alt"
          id="overall_top_half_3"
          style={{ display: "none" }}
        ></i>
        <i
          className="fas fa-star"
          id="overall_top_4"
          style={{ color: "orange" }}
        ></i>
        <i
          className="fas fa-star-half-alt"
          id="overall_top_half_4"
          style={{ display: "none" }}
        ></i>
        <i
          className="fas fa-star"
          id="overall_top_5"
          style={{ color: "orange" }}
        ></i>
        <i
          className="fas fa-star-half-alt"
          id="overall_top_half_5"
          style={{ display: "none" }}
        ></i>
        <span id="span_overall_rating">{courseData.rating}</span>
      </div>
      <div className="price">
        <h2 className="h2-fs">Mentors</h2>
      </div>
      <div className="row">
        <div className="col-lg-12 calc">
          <ul>
            {courseData.mentor.map((mentor, index) => {
              const color = ["blue", "yellow", "pink", "green", "purple"];
              return (
                <li>
                  <div>
                    <img
                      className="lazy mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        `/assets/images/img/${color[index]}.webp`
                      }
                      alt="FG Group"
                    />
                    <p> {mentor}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="price">
        <p className="mt-2 fs-30">
          ₹ {courseData.prices} GST included
        </p>
        {/* <span className="fs-20">
          ₹<del>{courseData.original_price}/-</del>
        </span>
        <span className="p1 mx-2 fs-20">
          <b>{courseData.percent_off} OFF</b>
        </span> */}
      </div>
      <CourseButtonsContainer
        courseData={courseData}
        courses={courses}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      {/* <div className="meal">
        <a
          className="btn btn-outline-info mt-3"
          onClick={() => handleOrder(courseData.BuyButton)}
        >
          Enroll Now
        </a>
      </div> */}
      <div className="tabata mt-3">
        {courseData.description.map((desc) => (
          <p className="mt-0">
            <b>{desc}</b>
          </p>
        ))}
      </div>
    </>
  );
};

export default CourseForm;
