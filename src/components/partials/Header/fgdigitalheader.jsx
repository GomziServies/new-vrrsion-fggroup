import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import $ from "jquery";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import UserInfo from "../../../assets/js/menu/userInfo";
import MobileUserInfo from "../../../assets/js/menu/mobileUserInfo";

function FgDigitalHeader() {
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
      <Button
        className={`scroll_top ${showBackToTop ? "visible" : "hidden"}`}
        onClick={scrollToTop}
      >
        <ArrowCircleUpIcon className=" fs-50" />
      </Button>
      <div className="container-fluid main p-0 m-0">
        <div className="d-lg-block d-none log">
          <Link to="/">
            <div>
              <img
                src={
                  process.env.PUBLIC_URL + "../assets/images/img/fgdigital.webp"
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
                  process.env.PUBLIC_URL + "../assets/images/img/fgdigital.webp"
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
                <p className="m-0">Digital Freedom</p>
              </Link>
            </li>
            <li>
              <Link to="/fgdigital/gym-management-software">
                <p className="m-0">CRM Software</p>
              </Link>
            </li>
            <li>
              <Link to="/fgiit/online-fitness-courses">
                <p className="m-0">Website Development</p>
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
          <Link to="/fgiit/fitness-courses">Digital Freedom</Link>
          <Link to="/fgdigital/gym-management-software">CRM Software</Link>
          <Link to="/fgiit/online-fitness-courses">Website Development</Link>
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
          {/* <li className="ddmenu userInfo fs-18"><UserInfo /> </li> */}
          <UserInfo />
        </div>
      </div>
    </>
  );
}

export default FgDigitalHeader;
