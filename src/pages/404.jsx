import React from "react";
import { Helmet } from "react-helmet";
import HomeFooter from "../components/partials/Footer/footer";
import HomeHeader from "../components/partials/Header/header";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 error page</title>
      </Helmet>
      <HomeHeader />
      <section className="margintop mb-5">
        <div className="container-fluid">
          <div className="container px-0 px-md-3">
            <div className="col-md-12 text-center error px-0 px-md-3">
              <div className="">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/img/404-error.webp"
                  }
                  className="img-fluid"
                  alt="404 Error"
                />
              </div>
              <p className="mt-0">Maybe You Can Find What You Need Here ?</p>
              <div className="row justify-content-center">
                <div className="mb-5">
                  <a href="/" className="btn" target="_blank">
                    Go To Homepage
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeFooter />
    </>
  );
};

export default NotFoundPage;
