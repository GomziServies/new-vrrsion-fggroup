import React, { useEffect, useState } from "react";
import "../../assets/css/home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import "react-lazy-load-image-component/src/effects/blur.css";
import OfflineCheckOutUser from "../../components/offline-course/offline-check-out-user.jsx";
import OfflineCheckOutDocument from "../../components/offline-course/offline-check-out-document.jsx";
import OfflineCheckOutFinal from "../../components/offline-course/offline-check-out-final.jsx";
import OfflineCheckOutThank from "../../components/offline-course/offline-check-out-thank.jsx";
import { Helmet } from "react-helmet";

function OfflineCheckOut() {
  const canonicalUrl = window.location.href;
  const checkOutData = localStorage.getItem("offlineCheckOut");
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
        <meta property="og:title" content="Check Out FgGroup" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/fgiit/offline-check-out" />
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
            <p className="mt-5 mb-3 text-center fs-20">
              EMI Check Out :-
            </p>
          </div>
          <div className="row meal">
            <div
              className={`order-tracking ${
                activeData === "document" || activeData === "final" || activeData === "checkOut"
                  ? "completed"
                  : ""
              }`}
            >
              <span className="is-complete"></span>
              <p>Basic Information</p>
            </div>
            <div
              className={`order-tracking ${
                activeData === "final" || activeData === "checkOut" ? "completed" : ""
              }`}
            >
              <span className="is-complete"></span>
              <p>Document</p>
            </div>
            <div className={`order-tracking ${
                activeData === "checkOut" ? "completed" : ""
              }`}>
              <span className="is-complete"></span>
              <p>Check Out</p>
            </div>
          </div>
        </div>

        {activeData == "document" ? (
          <OfflineCheckOutDocument setCheckData={setCheckData} />
        ) : activeData == "final" ? (
          <OfflineCheckOutFinal setCheckData={setCheckData} />
        ) : activeData == "checkOut" ? (
          <OfflineCheckOutThank setCheckData={setCheckData} />
        ) : (
          <OfflineCheckOutUser setCheckData={setCheckData} />
        )}
      </div>
    </>
  );
}

export default OfflineCheckOut;
