import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserInfo from "../../../assets/js/menu/userInfo";
import MobileUserInfo from "../../../assets/js/menu/mobileUserInfo";
import ChatBotFgiitComponent from "../../chat-bot-fgiit";

function BookFreeDemoHeader() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  function openside() {
    document.getElementById("demo").style.width = "100%";
  }

  function sideclose() {
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

  return (
    <>
      <div className="main2">
        <div
          className="text-center pt-2 d-block d-md-none"
          style={{ background: "#8aac00" }}
        >
          <Link to="/fgiit/lead-form">
            <div className="container">
              <h2 className=" h2-fs pb-2 text-white text-center fs-18">Book Free Demo</h2>
            </div>
          </Link>
        </div>
        <div className="container-fluid free-demo-header p-0 m-0">
          <div className="d-lg-block d-none log">
            <Link to="/">
              <div>
                <img
                  src={
                    process.env.PUBLIC_URL + "../assets/images/img/fgiit.webp"
                  }
                  width="100%"
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
                    process.env.PUBLIC_URL + "../assets/images/img/fgiit.webp"
                  }
                  width="100%"
                  alt="Fg Group"
                />
              </div>
            </Link>
          </div>
          <div className="lang">
            <ul>
              <li>
                <Link to="/fgiit/fitness-courses">
                  <p className="m-0">FGIIT</p>
                </Link>
              </li>
              <li>
                <Link to="/fgiit/fitness-and-nutrition-courses">
                  <p className="m-0">Offline Courses</p>
                </Link>
              </li>
              <li>
                <Link to="/fgiit/online-fitness-courses">
                  <p className="m-0">Online Courses</p>
                </Link>
              </li>
              {/* <li>
                <Link to="/fgiit/international-course">
                  <p className="m-0">International Courses</p>
                </Link>
              </li> */}
              <li>
                <Link to="/fgiit/flexible-fitness-courses">
                  <p className="m-0">Flexible Learning</p>
                </Link>
              </li>
              <li>
                <Link to="/book/health-books">
                  <p className="m-0">Study Material</p>
                </Link>
              </li>
              {/* <li className="study-material">
                <Link to="#">
                  <p className="m-0">Study Material</p>
                </Link>
                <div className="submenu">
                  <ul>
                    <li className="mr-0 text-left">
                      <Link to="/book/health-books">
                        Education Books
                      </Link>
                    </li>
                    <hr className="m-0 mt-1" />
                    <li className="mr-0 text-left">
                      <Link to="/book/health-books">
                        Fitness Books
                      </Link>
                    </li>
                  </ul>
                </div>
              </li> */}
              <li>
                <a href="/student-corner">
                  <p className="m-0">Student Corner</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="side" id="demo">
            <span className="closebtn" onClick={sideclose}>
              ×
            </span>
            <a href="/" style={{ marginTop: 50 }} aria-label="Fg Group">
              <img
                className="lazy"
                src={
                  process.env.PUBLIC_URL + "../assets/images/logo/fg_group.webp"
                }
                width="17%"
                alt="Fg Group"
              />
            </a>
            <a href="/fgiit/fitness-courses">FGIIT</a>
            <a href="/fgiit/fitness-and-nutrition-courses">Offline Courses</a>
            <a href="/fgiit/online-fitness-courses">Online Courses</a>
            {/* <a href="/fgiit/international-course">International Courses</a> */}
            <a href="/fgiit/flexible-fitness-courses">Flexible Learning</a>
            <a href="/book/health-books">Study Material</a>
            {/* <div className="study-material">
              <a href="#0">
                <p className="m-0">Study Material</p>
              </a>
              <div className="submenu justify-content-center">
                <ul className="mt-0">
                  <li className="mr-0 text-left">
                    <a href="/book/health-books">Education Books</a>
                  </li>
                  <hr className="m-0" />
                  <li className="mr-0 text-left">
                    <a href="/book/health-books">
                      Fitness Books
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
            <a href="/student-corner">Student Corner</a>
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
            <ul>
              {/* <li className="ddmenu userInfo fs-18">
                <UserInfo />{" "}
              </li> */}
              <UserInfo />
            </ul>
          </div>
        </div>
      </div>
      <ChatBotFgiitComponent />
    </>
  );
}

export default BookFreeDemoHeader;
