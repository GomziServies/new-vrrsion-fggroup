import React, { useEffect, useState } from "react";
import "../../assets/css/home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SimpleHeader from "../../components/partials/Header/simpleheader.jsx";
import "react-lazy-load-image-component/src/effects/blur.css";
import OnlineProgramCheckOutDocument from "../../components/online-fwg/online-program-check-out-documents.jsx";
import OnlineProgramCheckOutFinal from "../../components/online-fwg/online-program-check-out-final.jsx";
import OnlineProgramCheckOutThank from "../../components/online-fwg/online-program-check-out-thank.jsx";
import OnlineProgramCheckOutUser from "../../components/online-fwg/online-program-check-out-user.jsx";
import { Helmet } from "react-helmet";

function OnlineProgramCheckOut() {
  const canonicalUrl = window.location.href;
  const checkOutData = localStorage.getItem("FWGCheckOut");
  const [activeData, setActiveData] = useState("");
  const [checkData, setCheckData] = useState("");

  useEffect(() => {
    if (checkData || checkOutData) {
      setActiveData(checkOutData);
    }
  }, [checkData, checkOutData]);

  return (
    <>
      <Helmet>
        <title>Check Out FgGroup</title>
        <meta name="description" content="" />
        <meta name="keyword" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/fitnesswithgomzi/check-out"
        />
        <link rel="canonical" href={{ canonicalUrl }} />
        <meta name="google-site-verification" content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K2X4NWNEP1');`}
        </script>
      </Helmet>
      <SimpleHeader />

      <div className="main-content margintop100 checkout-page-main">
        <div className="col-12">
          <div className="col-12 p-0 mt-4 meal">
            <p className="mt-5 mb-3 text-center fs-20">EMI Check Out :-</p>
          </div>
          <div className="row meal">
            <div
              className={`order-tracking-1 ${
                // activeData === "document" ||
                activeData === "final" ||
                activeData === "checkOut"
                  ? "completed"
                  : ""
              }`}
            >
              <span className="is-complete"></span>
              <p>Basic Information</p>
            </div>
            {/* <div
              className={`order-tracking-1 ${
                activeData === "final" || activeData === "checkOut"
                  ? "completed"
                  : ""
              }`}
            >
              <span className="is-complete"></span>
              <p>Document</p>
            </div> */}
            <div
              className={`order-tracking-1 ${
                activeData === "checkOut" ? "completed" : ""
              }`}
            >
              <span className="is-complete"></span>
              <p>Check Out</p>
            </div>
          </div>
        </div>

        {
          //   activeData == "document" ? (
          //   <OnlineProgramCheckOutDocument setCheckData={setCheckData} />
          // ) :
          activeData === "final" ? (
            <OnlineProgramCheckOutFinal setCheckData={setCheckData} />
          ) : activeData === "checkOut" ? (
            <OnlineProgramCheckOutThank setCheckData={setCheckData} />
          ) : (
            <OnlineProgramCheckOutUser setCheckData={setCheckData} />
          )
        }
      </div>
    </>
  );
}

export default OnlineProgramCheckOut;
