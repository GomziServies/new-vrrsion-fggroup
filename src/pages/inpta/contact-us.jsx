/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../assets/css/home.css";
import "../../assets/css/inpta.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FgiitFooter from "../../components/partials/Footer/fgiitfooter";
import "react-lazy-load-image-component/src/effects/blur.css";
import WhatsappHeaderApp from "../../components/whatsappHeaderBtn";
import SimpleINPTAHeader from "../../components/partials/Header/simpleinptaheader";
import { Helmet } from "react-helmet";

function ContactInpta() {
  const canonicalUrl = window.location.href;
  return (
    <body classNameName="bg-gray">
      <Helmet>
        <title>Indian Nutritionist and Personal Trainer Association | INPTA</title>
        <meta name="description" content="INPTA is the entity that unites trained and certified nutritionists & personal trainers together and combining their knowledge and creating a better place to uplift the career scope of nutritionists and personal trainers in the field of health and fitness." />
        <meta name="keyword" content="fitness club, nutrition club, wellness club activities, wellness club" />
        <meta property="og:title" content="Indian Nutritionist and Personal Trainer Association | INPTA" />
        <meta property="og:description" content="INPTA is the entity that unites trained and certified nutritionists & personal trainers together and combining their knowledge and creating a better place to uplift the career scope of nutritionists and personal trainers in the field of health and fitness." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/inpta/contact-us" />
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
      <section className="inptajob imanet" style={{ marginTop: "70px" }}>
        <div className="rich-text-editor row bg-primary-blue col-lg-12 mx-auto my-auto mb-5 pt-3 pb-3 text-center">
          <h1 className="h2 fmaa-header-color">Contact IMA</h1>
        </div>
        <div className="hero-banner">
          <div className="hero-banner-carousel">
            <div className="hero-banner--variant-2 hero-banner-slide row w-100 d-inline-block">
              <div className="hero-banner__image-area">
                <img
                  src="https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/IMA-Certifications/FMAA-Certification/HeroBanner-FMAA-Oveview.ashx?h=1080&amp;iar=0&amp;w=1620&amp;rev=5dca857d183c48b4a4b9dc98fcc05770&amp;hash=62862D725FFEA431D581E95BE76DF01F"
                  alt="Students studying for FMAA certification exam"
                  width="100%"
                />
              </div>
              <div className="hero-banner__title-area">
                <div className="hero-banner__title-area-wrapper">
                  <h2 className="h2-fs h1 hero-banner__titlealign-left">
                    Open the door to your future
                  </h2>
                  <p className="body-1">
                    Gain the confidence to speak the global language of business
                    and demonstrate your proficiency in the fundamentals of
                    financial and managerial accounting.
                    <br className="t-last-br" />
                  </p>
                  <div className="align-left">
                    <a
                      className="cta-button cta-button--arrow primary-light"
                      href="#0"
                      target="_blank"
                    >
                      <i className="cta-button__icon bi bi-chevron-right ltr"></i>
                      <i className="cta-button__icon bi bi-chevron-left rtl"></i>
                      <span className="cta-button__text">Enroll Now</span>
                      <span className="cta-button__spinner spinner-border spinner-border-sm"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="hero-banner__description--mobile">
                <div className="hero-banner__description__wrapper--mobile">
                  <p className="body-1">
                    Gain the confidence to speak the global language of business
                    and demonstrate your proficiency in the fundamentals of
                    financial and managerial accounting.
                    <br className="t-last-br" />
                  </p>
                  <div className="align-left">
                    <a
                      className="cta-button cta-button--arrow primary-light"
                      href="#0"
                      target="_blank"
                      aria-label="Navigate to content"
                    >
                      <i className="cta-button__icon bi bi-chevron-right ltr"></i>
                      <i className="cta-button__icon bi bi-chevron-left rtl"></i>
                      <span className="cta-button__text">Enroll Now</span>
                      <span className="cta-button__spinner spinner-border spinner-border-sm"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="imanet">
        <div className="container pt-5">
          <div className="row">
            <div className="col-12">
              <form
                className="sticky-form-component__form row g-0 ima-form"
                method="post"
              >
                <div className="col-12 border border-white-60 p-2">
                  <div className="row g-0">
                    <div className="col-12 px-0">
                      <div className="text-form-input text-form-input--no-box row g-0">
                        <input
                          className="text-form-input__box col-12"
                          type="text"
                          maxlength="255"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 px-0">
                      <div className="text-form-input text-form-input--no-box row g-0">
                        <input
                          className="text-form-input__box col-12"
                          type="email"
                          maxlength="255"
                          placeholder="Email"
                        />
                        <span className="field-validation-valid"></span>
                      </div>
                    </div>
                    <div className="col-12 px-0">
                      <div className="text-form-input text-form-input--no-box row g-0">
                        <input
                          className="text-form-input__box col-12"
                          type="text"
                          maxlength="255"
                          placeholder="Member ID"
                        />
                        <span className="field-validation-valid"></span>
                      </div>
                    </div>
                    <div className="col-12 px-0">
                      <div className="select-input text-form-input--no-box row g-0">
                        <label className="select-input__label col-12 caption visually-hidden">
                          Region
                        </label>
                        <select
                          className="text-form-input__box col-12"
                          required
                        >
                          <option value="" disabled selected>
                            Select a Region
                          </option>
                          <option value="Americas">Americas</option>
                          <option value="China">China</option>
                          <option value="Asia-Pacific">Asia-Pacific</option>
                          <option value="Southeast Asia">Southeast Asia</option>
                          <option value="Middle East/Africa">
                            Middle East/Africa
                          </option>
                          <option value="India">India</option>
                          <option value="Europe">Europe</option>
                        </select>
                        <span className="field-validation-valid"></span>
                      </div>
                    </div>
                    <div className="col-12 px-0">
                      <div className="select-input text-form-input--no-box row g-0">
                        <label
                          for="reasonValue"
                          className="select-input__label col-12 caption visually-hidden"
                        >
                          Reason for Contacting
                        </label>
                        <select
                          id="reasonValue"
                          name="fxb.Fields[].Value"
                          className="text-form-input__box col-12"
                          required
                        >
                          <option value="" disabled selected>
                            Reason for Contacting
                          </option>
                          <option value="CMA Information">
                            CMA Information
                          </option>
                          <option value="Membership">Membership</option>
                          <option value="Chapter Change Request">
                            Chapter Change Request
                          </option>
                          <option value="Publications">Publications</option>
                          <option value="CPE">CPE</option>
                          <option value="CSCA">CSCA</option>
                          <option value="Other">Other</option>
                        </select>
                        <span className="field-validation-valid"></span>
                      </div>
                    </div>
                    <div className="col-12 px-0 checkbox-input checkbox-input--dark  row g-0 align-items-center">
                      <div className="sticky-form-component__checkbox col-12 col-sm-8 col-md-12 px-0 py-md-1">
                        <textarea
                          id="commentsValue"
                          name="fxb.Fields[].Value"
                          className="text-form-input__box col-12"
                          placeholder="Comments"
                          maxlength="1024"
                          rows="4"
                          required
                        ></textarea>
                        <span className="field-validation-valid"></span>
                      </div>
                    </div>
                    <div className="col-auto align-items-center d-flex px-2 py-md-2 order-2 order-md-1">
                      <div className="cta-button cta-button--input cta-button--icon cta-button--arrow cta-button--orange">
                        <input
                          value="Submit Now"
                          type="submit"
                          className="cta-button__text primary-light"
                          name="fxb"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="addressinpta">
        <div className="container pt-5">
          <div className="row">
            <div className="col-12">
              <div className="rich-text-editor row">
                <div className="col-md-6">
                  <h2 className="h3-fs">
                    <span className="secondary-blue">
                      <span className="primary-blue">
                        IMA Global Headquarters
                      </span>
                    </span>
                  </h2>
                  <p>
                    Monday through Friday 8 a.m. - 5:30 p.m. Eastern Time
                    <br />
                    Phone: (800) 638-4427 or +1 (201) 573-9000
                    <br />
                    Fax: +1 (201) 474-1600
                  </p>
                </div>
                <div className="col-md-6">
                  <h2 className="h3-fs">
                    <span className="primary-blue">IMA China</span>
                  </h2>
                  <p>
                    Monday through Friday 8:30 a.m. - 6 p.m. GMT +8
                    <br />
                    Office: +86-10-8553-4600
                    <br />
                    Toll-free (in China):+ 86-4000-ima-cma (4000-462-262)
                    <br />
                    Fax: +86-10-8591-0819
                  </p>
                </div>
                <div className="col-md-6">
                  <h2 className="h3-fs">
                    <span className="primary-blue">IMA Middle East/Africa</span>
                  </h2>
                  <p>
                    Sunday through Thursday 9 a.m. - 4 p.m. GMT +4
                    <br />
                    Phone: +971 4 429 6017
                    <br />
                    Toll-free Phone: +971 800 IMA MEA (462 632)
                    <br />
                    Fax: + 971 4 429 6018
                  </p>
                </div>
                <div className="col-md-6">
                  <h2 className="h3-fs">
                    <span className="primary-blue">IMA India</span>
                  </h2>
                  <p>
                    Monday through Friday 9:00 a.m. - 5:30 p.m. IST (India
                    Standard Time)
                    <br />
                    Phone: +91 97390 71919
                  </p>
                </div>
                <div className="col-md-6">
                  <h2 className="h3-fs">
                    <span className="primary-blue">IMA Europe</span>
                  </h2>
                  <p>
                    Monday through Friday 9:00 a.m. - 5:30 p.m. GMT +1 (Winter)
                    / GMT +2 (Summer)
                    <br />
                    Phone: +31(0)20-237 9370 (Amsterdam office)
                  </p>
                </div>
                <div className="col-md-6">
                  <h2 className="h3-fs">
                    <span className="primary-blue">
                      IMA Asia Pacific (Singapore)
                    </span>
                  </h2>
                  <p>
                    Monday through Friday 9:00 a.m. - 5:30 p.m. GMT+8
                    <br />
                    Phone: +65 6493 3113 (Mon to Wed) | +65 6909 5647 (Thu to
                    Fri)
                  </p>
                </div>
                <div className="col-md-6">
                  <h2 className="h3-fs">
                    <span className="primary-blue">Member Address Changes</span>
                  </h2>
                  <p>
                    Update your profile online via the{" "}
                    <a href="#0">Membership Site</a>
                    .<br />
                    Email us: <a href="#0">IMA@IMAnet.org</a>
                  </p>
                </div>
                <div className="col-md-6">
                  <h2 className="h3-fs">
                    <span className="primary-blue">Publications</span>
                  </h2>
                  <p>
                    For information about magazine or journal article copies,
                    back issues, reprint permissions, or subscriptions, please
                    contact&nbsp;
                    <a href="#0">sfmag@imanet.org</a>
                  </p>
                </div>
                <div className="col-md-6">
                  <h2 className="h3-fs">
                    <span className="primary-blue">IMA Website Support</span>
                  </h2>
                  <p>
                    For questions or comments about IMA's website, contact{" "}
                    <a href="#0">webmaster@imanet.org</a>
                  </p>
                  <p>
                    For technical support with online services and tools,
                    contact Member Services at <a href="#0">ima@imanet.org</a>
                  </p>
                </div>
                <div className="col-md-6">
                  <h2 className="h3-fs">
                    <span className="primary-blue">Mailing Address</span>
                  </h2>
                  <p>
                    IMA (Institute of Management Accountants)
                    <br />
                    10 Paragon Drive, Suite 1
                    <br />
                    Montvale, NJ 07645-1760
                    <br />
                    USA
                    <br />
                    (800) 638-4427
                  </p>
                  <p>Outside North America: +201 573-9000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FgiitFooter />
    </body>
  );
}

export default ContactInpta;
