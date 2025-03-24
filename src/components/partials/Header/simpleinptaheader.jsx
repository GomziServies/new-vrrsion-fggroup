import React, { useEffect, useState } from "react";
import $ from "jquery";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import UserInfo from "../../../assets/js/menu/userInfo";
import MobileUserInfo from "../../../assets/js/menu/mobileUserInfo";
import { Link } from "react-router-dom";

function SimpleINPTAHeader() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  function openside() {
    document.getElementById("demo").style.width = "100%";
  }

  function sideclose() {
    console.log("Closing side");
    document.getElementById("demo").style.width = "0px";
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  };

  return (
    <>
      {/* <a className={`scroll_top ${showBackToTop ? 'visible' : 'hidden'}`} onClick={scrollToTop}>
                <ArrowCircleUpIcon  className="fs-50" />
            </a> */}
      <div className="main p-0 m-0">
        <div className="d-lg-block d-none log">
          <Link to="/">
            <div>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/inpta-logo.webp"
                }
                style={{ maxWidth: "180%" }}
                alt="Fg Group"
              />
            </div>
          </Link>
        </div>
        <div className="d-lg-none d-sm-block t0 log1">
          <Link to="/">
            <div>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/img/inpta-logo.webp"
                }
                style={{ maxWidth: "180%" }}
                alt="Fg Group"
              />
            </div>
          </Link>
        </div>
        <div className="side" id="demo">
          <span className="closebtn" onClick={sideclose}>
            ×
          </span>
          <Link to="/" style={{ marginTop: 50 }}>
            <img
              className="lazy"
              src={
                process.env.PUBLIC_URL + "../assets/images/img/inpta-logo.webp"
              }
              width="50%"
              alt="Fg Group"
            />
          </Link>
          <Link to="/fgiit/fitness-courses">FGIIT</Link>
          <Link to="/fgiit/fitness-and-nutrition-courses">Offline Courses</Link>
          <Link to="/fgiit/online-fitness-courses">Online Courses</Link>
          {/* <Link to="/fgiit/international-course">International Courses</Link> */}
          <Link to="/fgiit/flexible-fitness-courses">Flexible Learning</Link>
          <Link to="/book/health-books">Study Material</Link>
          {/* <div className="study-material">
            <Link to="#">
              <p className="m-0">Study Material</p>
            </Link>
            <div className="submenu justify-content-center">
              <ul className="mt-0">
                <li className="mr-0 text-left">
                  <Link to="/book/health-books">
                    Education Books
                  </Link>
                </li>
                <hr className="m-0" />
                <li className="mr-0 text-left">
                  <Link to="/book/health-books">
                    Fitness Books
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
          <Link to="/student-corner">Student Corner</Link>
          <div className="mobileUserInfo aa">
            <MobileUserInfo />
          </div>
        </div>
        <span
          className="d-lg-none d-sm-block btnn"
          style={{ cursor: "pointer", fontSize: 20, color: "black" }}
          onClick={openside}
        >
          ☰
        </span>
        <div className="login d-lg-block d-none">
          {/* <li className="ddmenu userInfo fs-18">
              <UserInfo />{" "}
            </li> */}
          <UserInfo />
        </div>
      </div>
    </>
  );
}

export default SimpleINPTAHeader;
