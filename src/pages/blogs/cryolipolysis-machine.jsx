import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SimpleHeader from "../../components/partials/Header/simpleheader";
import FwgFooter from "../../components/partials/Footer/fwgfooter";
import { Link } from "react-router-dom";
import BlogsGuides from "../../components/blogs/guides";
import { Helmet } from "react-helmet";

function CryolipolysisMachine() {
    const canonicalUrl = window.location.href;
    return (
        <>
            <Helmet>
                <title>360° Cryolipolysis | Non-Invasive Fat Freezing Treatment</title>
                <meta name="description" content="Reduce stubborn fat with 360° cryolipolysis. Safe, non-invasive & effective fat freezing for body contouring with no downtime." />
                <meta name="keyword" content="protein rich food in veg , protein rich foods" />
                <meta property="og:title" content="360° Cryolipolysis | Non-Invasive Fat Freezing Treatment" />
                <meta property="og:description" content="Reduce stubborn fat with 360° cryolipolysis. Safe, non-invasive & effective fat freezing for body contouring with no downtime." />
                <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
                <meta property="og:url" content="https://fggroup.in/blogs/cryolipolysis-machine" />
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
            <section
                className="blog-ul-li"
                style={{ marginTop: "100px", marginBottom: "100px" }}
            >
                <div className="container-fluid">
                    <div className="describe mt-5">
                        <h1 style={{ color: "#333" }} className="text-center mb-5">
                            <span className="m-0 text-blue-color">360° Cryolipolysis</span> - Advanced Fat Freezing Technology
                        </h1>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <img
                                    className="lazy mb-3"
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/img/cryolipolysis-1.webp"
                                    }
                                    width="100%"
                                    style={{ borderRadius: " 10px" }}
                                    alt="fggroup"
                                />
                                <div className="mt-3">
                                    <div className="bg1 d-inline-block">
                                        <i
                                            className="far fa-calendar-alt mr-2 text-blue-color fs-18"
                                        ></i>
                                        <span>19/01/2024</span>
                                    </div>
                                    <div className="bg1 float-right d-inline-block">
                                        <i
                                            className="fas fa-user mr-2 text-blue-color fs-17"
                                        ></i>
                                        <i></i>
                                        <span>
                                            <Link
                                                to="http://gcsconsultant.fggroup.in/gautam_jani_official"
                                                style={{ color: "#000" }}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Dr.Gautam Jani
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                                <div className="tabata-one mt-5">
                                    <h2 className="h2-fs">What is 360° Cryolipolysis?</h2>
                                    <p className="mt-3">
                                        360° Cryolipolysis is an innovative fat-freezing technology designed to provide full-range cooling and heating for targeted fat reduction. Utilizing precise temperature control, it freezes fat cells at -10℃ and heats up to 45℃, ensuring effective and customizable body contouring.
                                    </p>
                                    <br />
                                    <p>
                                        <b>Key Features:</b>
                                    </p>
                                    <ul>
                                        <li>360° all-dimension cooling for effective fat reduction</li>
                                        <li>Temperature control from -10°C to 45°C</li>
                                        <li>Non-invasive and safe with no downtime</li>
                                        <li>Customizable settings for different body areas</li>
                                        <li>Real-time monitoring for enhanced safety</li>
                                    </ul>
                                    <br />
                                    <p>
                                        <b>Benefits of Cryolipolysis:</b>
                                    </p>
                                    <ul>
                                        <li>Targets stubborn fat areas like abdomen, thighs, arms</li>
                                        <li>No need for anesthesia or invasive procedures</li>
                                        <li>Clinically proven fat reduction technology</li>
                                        <li>Quick sessions with noticeable results</li>
                                    </ul>
                                    <br />
                                    <img
                                        className="lazy mb-3"
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/assets/images/img/cryolipolysis-2.webp"
                                        }
                                        width="100%"
                                        style={{ borderRadius: " 10px" }}
                                        alt="fggroup"
                                    />
                                    <p>
                                        <b>How It Works:</b>
                                        <br />
                                        360 Cryolipolysis works by freezing fat cells, causing them to break down and be naturally eliminated by the body over time. The process involves.
                                    </p>
                                    <ul>
                                        <li>Assessing the target area and applying a protective antifreeze membrane.</li>
                                        <li>Placing the 360-degree applicator on the skin.</li>
                                        <li>Controlled cooling to -10°C, effectively targeting fat cells.</li>
                                        <li>Gradual fat cell breakdown and removal through the lymphatic system.</li>
                                        <li>Visible fat reduction within 2-3 months.</li>
                                    </ul>
                                    <br />
                                    <p>
                                        <b>Technical Specifications:</b>
                                    </p>
                                    <ul>
                                        <li>Power Supply: AC220V ±10%, 50Hz / AC110V ±10%, 60Hz</li>
                                        <li>Rated Power: 800W</li>
                                        <li>Negative Pressure: 0-80Kpa</li>
                                        <li>Cooling Temperature: -10°C to 45°C</li>
                                        <li>Laser Power: 100mw/pcs</li>
                                        <li>Cavitation Frequency: 40KHz</li>
                                        <li>RF Frequency: 5MHz</li>
                                        <li>Cryo Handles: 5 pcs</li>
                                        <li>Touch Screen Display: 10.4 inches</li>
                                        <li>Machine Dimensions: 6246170cm</li>
                                        <li>Gross Weight: 56kg</li>
                                    </ul>
                                    <img
                                        className="lazy mb-3"
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/assets/images/img/cryolipolysis-3.webp"
                                        }
                                        width="100%"
                                        style={{ borderRadius: " 10px" }}
                                        alt="fggroup"
                                    />
                                    <h2 className="h2-fs">Frequently Asked Questions</h2>
                                    <p className="mt-3">
                                        <b>- Is Cryolipolysis Effective?</b>
                                        <br />
                                        Yes! This technology has been clinically tested and FDA-certified for non-invasive fat reduction.
                                    </p>
                                    <p className="mt-3">
                                        <b>- Will the Fat Return After Treatment?</b>
                                        <br />
                                        Cryolipolysis reduces the number of fat cells, minimizing the chances of regaining fat in treated areas.
                                    </p>
                                    <p className="mt-3">
                                        <b>- Is the Procedure Painful?</b>
                                        <br />
                                        Most users report a mild cooling sensation with no significant discomfort.
                                    </p>
                                    <p className="mt-3">
                                        <b>- Are There Any Side Effects?</b>
                                        <br />
                                        Temporary redness, numbness, or mild bruising may occur but typically resolve within a few weeks.
                                    </p>
                                    <p className="mt-3">
                                        <b>- Who Can Benefit from This Treatment?</b>
                                        <br />
                                        Anyone looking to reduce localized fat without undergoing surgery. Ideal for individuals who maintain a healthy lifestyle but struggle with stubborn fat deposits.
                                    </p>
                                    <img
                                        className="lazy mb-3"
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/assets/images/img/cryolipolysis-4.webp"
                                        }
                                        width="100%"
                                        style={{ borderRadius: " 10px" }}
                                        alt="fggroup"
                                    />
                                </div>
                            </div>
                            <BlogsGuides />
                        </div>
                    </div>
                </div>
            </section>
            <FwgFooter />
        </>
    );
}

export default CryolipolysisMachine;
