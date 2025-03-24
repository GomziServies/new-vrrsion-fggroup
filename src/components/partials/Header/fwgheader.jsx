import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import UserInfo from "../../../assets/js/menu/userInfo";
import MobileUserInfo from "../../../assets/js/menu/mobileUserInfo";
import ChatBotFWGComponent from "../../chat-bot-fwg";

function FwgHeader() {
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
      <div className="container-fluid main p-0 m-0">
        <div className="d-lg-block d-none log">
          <Link to="/">
            <div>
              <img
                src={process.env.PUBLIC_URL + "../assets/images/img/gomzi.webp"}
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
                src={process.env.PUBLIC_URL + "../assets/images/img/gomzi.webp"}
                width="100%"
                alt="Fg Group"
              />
            </div>
          </Link>
        </div>
        <div className="lang">
          <ul>
            <li>
              <Link to="/fitnesswithgomzi/weight-loss-programs">
                <p className="m-0">FWG</p>
              </Link>
            </li>
            <li>
              <Link to="/fitnesswithgomzi/rapid-weight-loss">
                <p className="m-0">RTP 1.0</p>
              </Link>
            </li>
            {/* <li>
              <Link to="/fitnesswithgomzi/online-personal-training">
                <p className="m-0">RTP 2.0</p>
              </Link>
            </li> */}
            <li>
              <Link to="/community/dietitian-for-clinical-illness">
                <p className="m-0">RTP 3.0</p>
              </Link>
            </li>
            <li>
              <Link to="/corporate-fitness-programs">
                <p className="m-0">RTP 4.0</p>
              </Link>
            </li>
            <li>
              <Link to="/fitnesswithgomzi/prep-coaching-for-bodybuilding">
                <p className="m-0">RTP 5.0</p>
              </Link>
            </li>
            <li>
              <Link to="/book/health-books">
                <p className="m-0">Fitness Book</p>
              </Link>
            </li>
            <li>
              <Link to="/fitnesswithgomzi/flexible-fitness-plans">
                <p className="m-0">Fitness Plans</p>
              </Link>
            </li>
            <li>
              <Link to="https://gyms.fggroup.in/">
                <p className="m-0">Gyms</p>
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
          <Link to="/fitnesswithgomzi/weight-loss-programs">FWG</Link>
          <Link to="/fitnesswithgomzi/rapid-weight-loss">RTP 1.0</Link>
          {/* <Link to="/fitnesswithgomzi/online-personal-training">RTP 2.0</Link> */}
          <Link to="/community/dietitian-for-clinical-illness">RTP 3.0</Link>
          <Link to="/corporate-fitness-programs">RTP 4.0</Link>
          <Link to="/fitnesswithgomzi/prep-coaching-for-bodybuilding">
            RTP 5.0
          </Link>
          <Link to="/book/health-books">
            Fitness Book
          </Link>
          <Link to="/fitnesswithgomzi/flexible-fitness-plans">
            Fitness Plans
          </Link>
          <Link to="https://gyms.fggroup.in/">Gyms</Link>
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
        <div className=" d-lg-none d-sm-block mt-4">
          {/* <span className="ml-2">
            <a href={`/user/order`} style={{ color: "black" }}>
            <img
                src={process.env.PUBLIC_URL + "../assets/images/img/cart-img.webp"}
                width="8%"
                alt="Fg Group"
              />
            </a>
          </span> */}
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
              <UserInfo />{" "}
            </li> */}
          <UserInfo />
        </div>
      </div>

      <ChatBotFWGComponent />
    </>
  );
}

export default FwgHeader;
