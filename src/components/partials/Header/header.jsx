import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import UserInfo from "../../../assets/js/menu/userInfo";
import MobileUserInfo from "../../../assets/js/menu/mobileUserInfo";

function HomeHeader() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [userAuthorization, setUserAuthorization] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = (authorization) => {
    setUserAuthorization(authorization);
    setIsAuthenticated(true);
  };

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
      <a href="#0"
        className={`scroll_top ${showBackToTop ? "visible" : "hidden"}`}
        onClick={scrollToTop}
      >
        <ArrowCircleUpIcon className="fs-50" />
      </a>
      <div className="container-fluid main p-0 m-0">
        <div className="d-lg-block d-none log">
          <Link to="/">
            <div>
              <img
                src={
                  process.env.PUBLIC_URL + "../assets/images/logo/fg_group.webp"
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
                  process.env.PUBLIC_URL + "../assets/images/logo/fg_group.webp"
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
              <Link to="/fitnesswithgomzi/fitness-programs">
                <img
                  alt="Fg Group"
                  style={{ width: "25px" }}
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/icon/report-icon.png"
                  }
                />
                <p className="m-0">FWG</p>
              </Link>
            </li>
            <li>
              <Link to="/fgiit/fitness-courses">
                <img
                  alt="Fg Group"
                  style={{ width: "25px" }}
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/icon/graduated-icon.png"
                  }
                />
                <p className="m-0">FGIIT</p>
              </Link>
            </li>
            <li>
              <Link to="/equipments/equipments">
                <img
                  alt="Fg Group"
                  style={{ width: "25px" }}
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/icon/equipments-icon.png"
                  }
                />
                <p className="m-0">Equipments</p>
              </Link>
            </li>
            <li>
              <Link target="_blank" to="https://www.gomzilifesciences.in/">
                <img
                  alt="Fg Group"
                  style={{ width: "25px" }}
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/icon/nutrition-plan-icon.png"
                  }
                />
                <p className="m-0">Nutrition</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="side" id="demo">
          <span className="closebtn" onClick={sideclose}>
            ×
          </span>
          <Link to="/" style={{ marginTop: 50 }}>
            <img
              className="lazy"
              src={
                process.env.PUBLIC_URL + "../assets/images/logo/fg_group.webp"
              }
              width="17%"
              alt="Fg Group"
            />
          </Link>
          <Link to="/fitnesswithgomzi/fitness-programs">FWG</Link>
          <Link to="/fgiit/fitness-courses">FGIIT</Link>
          <Link to="/equipments/equipments">Equipments</Link>
          <Link to="https://www.gomzilifesciences.in/" target="_blank">
            Nutrition
          </Link>
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
        <div className="d-lg-none d-sm-block mt-4">
          <Link to="/user/order">
            <div className="cart-btnn">
              <img
                src={
                  process.env.PUBLIC_URL + "../assets/images/img/cart-img.webp"
                }
                width="21px"
                alt="Fg Group"
              />
            </div>
          </Link>
        </div>
        <div className="login d-lg-block d-none">
          {/* <li className="ddmenu userInfo fs-18">
              {isAuthenticated ? (
                <div style={{ display: "none!important" }}>
                  <UserInfo userAuthorization={userAuthorization} />
                </div>
              ) : (
                <UserInfo />
              )}
            </li> */}
          {isAuthenticated ? (
            <div style={{ display: "none!important" }}>
              <UserInfo userAuthorization={userAuthorization} />
            </div>
          ) : (
            <UserInfo />
          )}
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
