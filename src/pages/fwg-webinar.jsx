import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/css/webinar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeightScale } from "@fortawesome/free-solid-svg-icons";

function FwgWebinar() {
  return (
    <body className="bg-webinar-dark text-white">
      <section className="hero-section d-flex align-items-end justify-content-center">
        <div className="text-center">
          <h1 className="display-4">STAY FIT NOT STILL</h1>
          <p className="lead">Core-Fit Gym Center</p>
          <Button variant="success" size="lg">
            Join Now
          </Button>
        </div>
      </section>

      <section className="green-bar d-flex align-items-end justify-content-center">
        <h4 className="text-center mb-0">Expert Trainer</h4>
        <h4 className="text-center mb-0">Deverse Class Option</h4>
        <h4 className="text-center mb-0">Flexible Membership Plans</h4>
        <h4 className="text-center mb-0">Expert Trainer</h4>
        <h4 className="text-center mb-0">Deverse Class Option</h4>
        <h4 className="text-center mb-0">Flexible Membership Plans</h4>
      </section>
      <section className="container-fluid">
        <div className="container my-5">
          <Row className="">
            <Col className="heading" md={6}>
              <h2>Our Programs</h2>
            </Col>
            <Col className="heading" md={6}>
              <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </Col>
          </Row>

          <Row className="text-center text-start d-flex align-items-center justify-content-center">
            <Col md={4}>
              <div className="program-card text-light">
                <div>
                  <div className="icon-wrapper">
                    <FontAwesomeIcon
                      icon={faWeightScale}
                      className="card-icon"
                    />
                  </div>
                  <h5>Rtp 1.0 - Weight Loss</h5>
                  <p>
                    A targeted program designed to help you shed excess weight
                    through personalized diet plans, exercise routines, and
                    lifestyle modifications tailored to your individual needs
                    and goals.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="program-card text-light">
                <div>
                  <div className="icon-wrapper">
                    <FontAwesomeIcon
                      icon={faWeightScale}
                      className="card-icon"
                    />
                  </div>
                  <h5>RTP-2.0 Weight Management Program</h5>
                  <p>
                    A sustainable approach to maintaining your ideal weight with
                    balanced nutrition, regular physical activity, and expert
                    guidance to ensure long-term success without compromising
                    your health.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="program-card text-light">
                <div>
                  <div className="icon-wrapper">
                    <FontAwesomeIcon
                      icon={faWeightScale}
                      className="card-icon"
                    />
                  </div>
                  <h5>RTP-3.0 Clinical Diets</h5>
                  <p>
                    Specialized diet plans crafted for individuals with specific
                    medical conditions, offering tailored nutrition strategies
                    that support treatment and promote overall well-being.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="program-card text-light">
                <div>
                  <div className="icon-wrapper">
                    <FontAwesomeIcon
                      icon={faWeightScale}
                      className="card-icon"
                    />
                  </div>
                  <h5>RTP-4.0 Health And Wellness Program</h5>
                  <p>
                    A holistic approach to enhancing your overall health,
                    focusing on balanced nutrition, fitness, mental well-being,
                    and lifestyle habits to help you achieve optimal health.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="program-card text-light">
                <div>
                  <div className="icon-wrapper">
                    <FontAwesomeIcon
                      icon={faWeightScale}
                      className="card-icon"
                    />
                  </div>
                  <h5>RTP-5.0 Prp-Coaching</h5>
                  <p>
                    Personalized coaching sessions with professional guidance to
                    empower you on your fitness journey, providing the
                    motivation, accountability, and support you need to reach
                    your health and fitness goals.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="container-fluid">
        <div className="container my-5">
          <Row className="">
            <Col className="heading" md={6}>
              <h2>Our Programs</h2>
            </Col>
            <Col className="heading" md={6}>
              <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={3}>
              <div>
                <img
                  alt="demo"
                  className="image-border-radius"
                  src="../assets/images/webinar/journey-1.webp"
                />
                <p className="image-text-heading">Lorem Ipsum</p>
                <p className="image-text-sub-heading">Lorem Ipsum</p>
              </div>
            </Col>
            <Col md={3} className="mt-5">
              <div>
                <img
                  alt="demo"
                  className="image-border-radius"
                  src="../assets/images/webinar/journey-3.webp"
                />
                <p className="image-text-heading">Lorem Ipsum</p>
                <p className="image-text-sub-heading">Lorem Ipsum</p>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <img
                  alt="demo"
                  className="image-border-radius"
                  src="../assets/images/webinar/journey-2.webp"
                />
                <p className="image-text-heading">Lorem Ipsum</p>
                <p className="image-text-sub-heading">Lorem Ipsum</p>
              </div>
            </Col>
            <Col md={3} className="mt-5">
              <div>
                <img
                  alt="demo"
                  className="image-border-radius"
                  src="../assets/images/webinar/journey-4.webp"
                />
                <p className="image-text-heading">Lorem Ipsum</p>
                <p className="image-text-sub-heading">Lorem Ipsum</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="container-fluid mt-5">
        <div className="container my-5">
          <Row className="">
            <Col md={6}>
              <div className="feature-card image-border-radius py-5 px-3">
                <div>
                  <h2>Best Training Plan For You</h2>
                  <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </div>
                <div>
                  <h2>Best Training Plan For You</h2>
                  <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </div>
                <div>
                  <h2>Best Training Plan For You</h2>
                  <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </div>
                <div>
                  <h2>Best Training Plan For You</h2>
                  <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="heading">
                <h2>Best Training Plan For You</h2>
                <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
              </div>
              <div className="feature-card image-border-radius py-5 mt-2 px-3">
                <div>
                  <h2>Best Training Plan For You</h2>
                  <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </div>
              </div>
              <div className="feature-card image-border-radius py-5 mt-2 px-3">
                <div>
                  <h2>Best Training Plan For You</h2>
                  <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="container-fluid mt-5">
        <div className="container my-5">
          <Row className="">
            <Col className="mb-4" md={12}>
              <div className="heading">
                <h2>Best Training Plan For You</h2>
                <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
              </div>
            </Col>
            <Col md={4}>
              <img
                alt="demo"
                className="image-border-radius"
                src="../assets/images/fwg/harshal-v1.webp"
              />
            </Col>
            <Col md={8}>
              <div className="feature-card image-border-radius py-5 px-3">
                <div>
                  <h2>Best Training Plan For You</h2>
                  <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                  <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                  <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                  <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                  <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing </p>
                </div>
              </div>
            </Col>
            <Col className="mt-4" md={4}>
              <img
                alt="demo"
                className="image-border-radius"
                src="../assets/images/fwg/harshal-v1.webp"
              />
            </Col>
            <Col className="mt-4" md={4}>
              <img
                alt="demo"
                className="image-border-radius"
                src="../assets/images/fwg/harshal-v1.webp"
              />
            </Col>
            <Col className="mt-4" md={4}>
              <div className="feature-card image-border-radius py-5 px-3">
                <div>
                  <h2>Best Training Plan For You</h2>
                  <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                  <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

    </body>
  );
}

export default FwgWebinar;
