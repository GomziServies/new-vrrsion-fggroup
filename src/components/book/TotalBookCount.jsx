import React from "react";
import CounterComponent from "./CounterComponent";

const TotalBookCount = () => {
  return (
    <div className="container">
      <div>
        <div className="covid">
          <h2 className="h2-fs text-center mt-2" style={{ color: "#333" }}>
            <span className="m-0 text-blue-color">Total books </span> dispatch
          </h2>
        </div>
        <div className="thm-bg-clr dector"></div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-6 text-center mt-5">
          <CounterComponent countNumber={5000} />
          <i
            className="fas fa-plus fs-33 fw-bold"
            style={{
              color: "#333",
            }}
          ></i>
          <div className="tabata">
            <p style={{ color: "black", fontWeight: "bold" }} className="mt-4">
              CPT book
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-6 text-center mt-5">
          <CounterComponent countNumber={2500} />
          <i
            className="fas fa-plus fs-33 fw-bold"
            style={{
              color: "#333",
            }}
          ></i>
          <div className="tabata">
            <p style={{ color: "black", fontWeight: "bold" }} className="mt-4">
              CNC Book
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-6 text-center mt-5">
          <CounterComponent countNumber={1000} />
          <i
            className="fas fa-plus fs-33 fw-bold"
            style={{
              color: "#333",
            }}
          ></i>
          <div className="tabata">
            <p style={{ color: "black", fontWeight: "bold" }} className="mt-4">
              AAS Book
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-6 text-center mt-5">
          <CounterComponent countNumber={500} />
          <i
            className="fas fa-plus fs-33 fw-bold"
            style={{
              color: "#333",
            }}
          ></i>
          <div className="tabata">
            <p style={{ color: "black", fontWeight: "bold" }} className="mt-4">
              Injury Book
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-6 text-center mt-5">
          <CounterComponent countNumber={250} />
          <i
            className="fas fa-plus fs-33 fw-bold"
            style={{
              color: "#333",
            }}
          ></i>
          <div className="tabata">
            <p style={{ color: "black", fontWeight: "bold" }} className="mt-4">
              RTP Exercise
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-6 text-center mt-5">
          <CounterComponent countNumber={150} />
          <i
            className="fas fa-plus fs-33 fw-bold"
            style={{
              color: "#333",
            }}
          ></i>
          <div className="tabata">
            <p style={{ color: "black", fontWeight: "bold" }} className="mt-4">
              Wellness Consultant
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 col-6 text-center mt-5">
          <CounterComponent countNumber={400} />
          <i
            className="fas fa-plus fs-33 fw-bold"
            style={{
              color: "#333",
            }}
          ></i>
          <div className="tabata">
            <p style={{ color: "black", fontWeight: "bold" }} className="mt-4">
              RTP-1.0 - Weight Loss
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-6 text-center mt-5">
          <CounterComponent countNumber={450} />
          <i
            className="fas fa-plus fs-33 fw-bold"
            style={{
              color: "#333",
            }}
          ></i>
          <div className="tabata">
            <p style={{ color: "black", fontWeight: "bold" }} className="mt-4">
              RTP-2.0 - Weight Management program
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-6 text-center mt-5">
          <CounterComponent countNumber={50} />
          <i
            className="fas fa-plus fs-33 fw-bold"
            style={{
              color: "#333",
            }}
          ></i>
          <div className="tabata">
            <p style={{ color: "black", fontWeight: "bold" }} className="mt-4">
              RTP-3.0 - Clinical Diets
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-6 text-center mt-5">
          <CounterComponent countNumber={400} />
          <i
            className="fas fa-plus fs-33 fw-bold"
            style={{
              color: "#333",
            }}
          ></i>
          <div className="tabata">
            <p style={{ color: "black", fontWeight: "bold" }} className="mt-4">
              RTP-4.0 - Health And Wellness Program
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-6 text-center mt-5">
          <CounterComponent countNumber={450} />
          <i
            className="fas fa-plus fs-33 fw-bold"
            style={{
              color: "#333",
            }}
          ></i>
          <div className="tabata">
            <p style={{ color: "black", fontWeight: "bold" }} className="mt-4">
              RTP-5.0 - Prep Coaching
            </p>
          </div>
        </div>
        <div className="col-lg-2 col-6 text-center mt-5">
          <CounterComponent countNumber={50} />
          <i
            className="fas fa-plus fs-33 fw-bold"
            style={{
              color: "#333",
            }}
          ></i>
          <div className="tabata">
            <p style={{ color: "black", fontWeight: "bold" }} className="mt-4">
              Transformation Kit
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalBookCount;
