import React, { useEffect, useState } from "react";
import "../../assets/css/home.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import SimpleINPTAHeader from "../../components/partials/Header/simpleinptaheader";
import { useLocation } from "react-router";
import { publicAxiosInstance } from "../../assets/js/config/api";
import { Helmet } from "react-helmet";
import InptaFooter from "../../components/partials/Footer/inptafooter";

function InptaCertificate() {
  const canonicalUrl = window.location.href;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const certificate_id = searchParams.get("certificate");
  const [certificateData, setCertificateData] = useState({
    certificate: "",
  });
  const [loading, setLoading] = useState(false);
  const [certificate, setCertificate] = useState(false);
  const [dataNotFound, setDataNotFound] = useState(false);

  const getCertificateData = async () => {
    try {
      const response = await publicAxiosInstance.get(
        `/verify-certificate?certificate_id=${certificate_id}`
      );
      const certificateData = response.data.data;
      setCertificateData(certificateData);

      handleVerify(certificateData);
    } catch (error) {
      handleVerify();
      console.error("Error in getCertificateData:", error);
    }
  };

  useEffect(() => {
    getCertificateData();
  }, []);

  const handleVerify = (certificateData) => {
    if (certificateData) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setCertificate(true);
      }, 2000);
    } else {
      setLoading(false);
      setDataNotFound(true);
    }
  };
  return (
    <body className="bg-gray">
      <Helmet>
        <title>
          Indian Nutritionist and Personal Trainer Association | INPTA
        </title>
        <meta
          name="description"
          content="INPTA is the entity that unites trained and certified nutritionists & personal trainers together and combining their knowledge and creating a better place to uplift the career scope of nutritionists and personal trainers in the field of health and fitness."
        />
        <meta
          name="keyword"
          content="fitness club, nutrition club, wellness club activities, wellness club"
        />
        <meta
          property="og:title"
          content="Indian Nutritionist and Personal Trainer Association | INPTA"
        />
        <meta
          property="og:description"
          content="INPTA is the entity that unites trained and certified nutritionists & personal trainers together and combining their knowledge and creating a better place to uplift the career scope of nutritionists and personal trainers in the field of health and fitness."
        />
        <meta
          property="og:image"
          content="https://fggroup.in/assets/images/logo/fg_group.webp"
        />
        <meta
          property="og:url"
          content="https://fggroup.in/inpta/inpta-certificate"
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
      <WhatsappHeaderApp
        message={"Hello, I wanted to know more about FGIIT Courses. "}
        options={{ pageRef: true }}
      />
      <SimpleINPTAHeader />
      <section className="imanet home" style={{ marginTop: "70px" }}>
        <div className="rich-text-editor row bg-primary-blue col-lg-12 mx-auto my-auto mb-5 pt-3 pb-3 text-center">
          <h1 className="h2 fmaa-header-color">Certificate Details</h1>
        </div>
      </section>
      {loading && (
        <section style={{ marginTop: "90px", marginBottom: "90px" }}>
          <div className="container-fluid pt-md-5">
            <div className="container">
              <div className="row">
                <div className="wrapper-1">
                  <div className="wrapper-2">
                    <div className="success-checkmark">
                      <div className="check-icon">
                        <span className="icon-line line-tip"></span>
                        <span className="icon-line line-long"></span>
                        <div className="icon-circle"></div>
                        <div className="icon-fix"></div>
                      </div>
                    </div>
                    <h2 className="h1-fs">Verified Certificate</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {certificate && (
        <section className="certificate-photo-section py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="certificate-photo-card text-center">
                  <div className="certificate-photo-image">
                    <img
                      src={
                        "https://files.fggroup.in/" + certificateData.file_url
                      }
                      alt="INPTA Certificate"
                      className="img-fluid rounded shadow"
                    />
                  </div>
                  {/* <div className="text-center mt-4">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        handleDownload(
                          "https://files.fggroup.in/" +
                            certificateData.file_url,
                          "name"
                        );
                      }}
                    >
                      Download Certificate
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {dataNotFound && (
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/no-data.webp"
                  }
                  alt="INPTA Certificate"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <InptaFooter />
    </body>
  );
}

export default InptaCertificate;
