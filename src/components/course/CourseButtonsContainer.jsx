import React, { useState } from "react";
import CourseButton from "./CourseButtons.jsx";
import AddtoCartOffCourseCanvas from "./addtocartcoursecanvas.jsx";

const CourseButtonsContainer = ({
  courseData,
  courses,
  toggleMenu,
  menuOpen,
  setMenuOpen,
}) => {
  return (
    <div className="col-12 p-0">
      <div className="m-0 w-100 py-4 px-0 px-md-3">
        <div className="common-button mx-2">
          <CourseButton
            key={courseData.name}
            courseData={courseData}
            toggleMenu={toggleMenu}
          />
          {menuOpen ? (
            <>
              <AddtoCartOffCourseCanvas
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
                courses={courses}
              />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseButtonsContainer;
