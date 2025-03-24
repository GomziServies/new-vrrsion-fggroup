import React from "react";
import UserInfo from "../../../assets/js/menu/userInfo";
import MobileUserInfo from "../../../assets/js/menu/mobileUserInfo";
import { Link } from "react-router-dom";

function NutritionHeader() {
  // const [showBackToTop, setShowBackToTop] = useState(false);

  function openside() {
    document.getElementById("demo").style.width = "100%";
  }

  function sideclose() {
    console.log("Closing side");
    document.getElementById("demo").style.width = "0px";
  }

  // useEffect(() => {
  //     const handleScroll = () => {
  //         if (window.scrollY > 500) {
  //             setShowBackToTop(true);
  //         } else {
  //             setShowBackToTop(false);
  //         }
  //     };

  //     window.addEventListener('scroll', handleScroll);

  //     return () => {
  //         window.removeEventListener('scroll', handleScroll);
  //     };
  // }, []);

  // const scrollToTop = () => {
  //     $("html, body").animate({
  //         scrollTop: 0
  //     }, 1500);
  // };
  return (
    <>
      {/* <a className={`scroll_top ${showBackToTop ? 'visible' : 'hidden'}`} onClick={scrollToTop}>
                <ArrowCircleUpIcon  className="fs-50" />
            </a> */}
      <div className="my-auto">
        <section className="header-main">
          <div className="px-1 py-2 bg-yellow text-center">
            <div className="item">
              <p className="text-white m-0 f-rob-reg f-14 lp-2">
                Free shipping on prepaid orders above ₹499
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="container-fluid main p-0 m-0" style={{ top: "37px" }}>
        <div className="d-lg-block d-none log-new">
          <Link to="/">
            <div>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "../assets/images/logo/nutrition-logo.webp"
                }
                width="100%"
                alt="Fg Group"
              />
            </div>
          </Link>
        </div>
        <div className="d-lg-none d-sm-block t0 log1-new">
          <Link to="/">
            <div>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "../assets/images/logo/nutrition-logo.webp"
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
        <div className="side" id="demo">
          <span className="closebtn" onClick={sideclose}>
            ×
          </span>
          <Link
            to="/nutrition"
            style={{ marginTop: "50px", marginBottom: "30px" }}
          >
            <img
              className="lazy"
              src={
                process.env.PUBLIC_URL +
                "../assets/images/logo/nutrition-logo.webp"
              }
              width="40%"
              alt="Fg Group"
            />
          </Link>
          {/* <Link to="#">Nutrition</Link>
                    <Link to="#">Gym Equipments</Link> */}
          <ul className="mobileUserInfo aa">
            {/* <li>
                            <Link to="#">
                                Offers
                                <i className="fas fa-percent ml-2"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                Cart
                                <i className="fas fa-shopping-bag ml-2"></i>
                            </Link>
                        </li> */}
            <li>
              <Link to="#">
                Help
                <i className="far fa-life-ring ml-2"></i>
              </Link>
            </li>
            <MobileUserInfo />
          </ul>
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
            {/* <li className="ddmenu userInfo fs-16">
              <Link
                to="/nutrition/add-to-cart"
                style={{ marginTop: "50px", marginBottom: "30px" }}
              >
                <img
                  className="lazy"
                  src={
                    process.env.PUBLIC_URL +
                    "../assets/images/nutrition/shopping-and-commerce.png"
                  }
                  width="36px"
                  alt="Fg Group"
                />
              </Link>
            </li> */}
            {/* <li className="ddmenu userInfo fs-16"> */}
            <UserInfo /> {/* </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default NutritionHeader;
