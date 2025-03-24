import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import UserInfo from "../../../assets/js/menu/userInfo";
import MobileUserInfo from "../../../assets/js/menu/mobileUserInfo";

function NutritionHeader() {
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
      <Link
        className={`scroll_top ${showBackToTop ? "visible" : "hidden"}`}
        onClick={scrollToTop}
      >
        <ArrowCircleUpIcon className="fs-50" />
      </Link>
      <div className="container-fluid main p-0 m-0">
        <div className="d-lg-block d-none log-new">
          <Link to="/equipments/equipments">
            <div>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "../assets/images/logo/equipment-logo.webp"
                }
                width="100%"
                alt="Fg Group"
              />
            </div>
          </Link>
        </div>
        <div className="d-lg-none d-sm-block t0 log1-new">
          <Link to="/equipments/equipments">
            <div>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "../assets/images/logo/equipment-logo.webp"
                }
                width="100%"
                alt="Fg Group"
              />
            </div>
          </Link>
        </div>
        {/* <div className="lang">
                    <ul>
                        <li>
                            <Link to="#">
                                <p className="m-0">Nutrition</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <p className="m-0">Gym Equipments</p>
                            </Link>
                        </li>
                    </ul>
                </div> */}
        {/* <div className="side" id="demo">
          <span className="closebtn" onClick={sideclose}>
            ×
          </span>
          <Link to="/" style={{ marginTop: "50px", marginBottom: "30px" }}>
            <img
              className="lazy"
              src={
                process.env.PUBLIC_URL +
                "../assets/images/logo/equipment-logo.webp"
              }
              width="40%"
              alt="Fg Group"
            />
          </Link>
          <Link to="#">Nutrition</Link>
                    <Link to="#">Gym Equipments</Link>
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
            <li className="ddmenu userInfo fs-18">
              <UserInfo />{" "}
            </li>
            <UserInfo />
          </ul>
        </div> */}
      </div>
    </>
  );
}

export default NutritionHeader;
