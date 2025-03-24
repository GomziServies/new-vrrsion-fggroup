/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const CourseButton = ({ courseData, toggleMenu }) => {
  return (
    <>
      <button
        onClick={(e) => toggleMenu(courseData, e)}
        style={{ display: courseData?.name ? "block" : "none" }}
        className="bg-blue text-uppercase  text-white f-16 f-rob-bol rate-btn-blue"
      >
        Add to Cart
      </button>
    </>
  );
};

export default CourseButton;
