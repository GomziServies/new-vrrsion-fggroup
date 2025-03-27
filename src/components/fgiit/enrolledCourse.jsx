import React from "react";
import CountUp from "react-countup";
import AddIcon from "@mui/icons-material/Add";

const TotalCourseEnrolled = () => {
  return (
    <>
      <section className="margintop">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#f9f3f3", padding: "50px 0px" }}
        >
          <div className="container">
            <div className="covid text-center">
              <h2 className="mt-2 h2-fs">
                Total{" "}
                <span className="m-0 text-blue-color">courses enrolled</span>
              </h2>
            </div>
            <div className="thm-bg-clr dector mb-3"></div>
            <div className="row">
              <div className="col"></div>
              <div className="col-lg-2 text-center mt-5">
                <CountUp
                  end={800}
                  duration={3}
                  separator=","
                  className="counter countertext fw-bold fs-40 text-dark"
                />
                <AddIcon className="fs-40 text-dark fw-bold" />
                <div className="tabata">
                  <p
                    style={{ color: "black", fontweight: "bold" }}
                    className="mt-4"
                  >
                    DPT Course
                  </p>
                </div>
              </div>
              <div className="col-lg-2 text-center mt-5">
                <CountUp
                  end={1000}
                  duration={3}
                  separator=","
                  className="counter countertext fw-bold fs-40 text-dark"
                />
                <AddIcon className="fs-40 text-dark fw-bold" />
                <div className="tabata">
                  <p
                    style={{ color: "black", fontweight: "bold" }}
                    className="mt-4"
                  >
                    DNC Course
                  </p>
                </div>
              </div>
              <div className="col-lg-2 text-center mt-5">
                <CountUp
                  end={300}
                  duration={3}
                  separator=","
                  className="counter countertext fw-bold fs-40 text-dark"
                />
                <AddIcon className="fs-40 text-dark fw-bold" />
                <div className="tabata">
                  <p
                    style={{ color: "black", fontweight: "bold" }}
                    className="mt-4"
                  >
                    AAS Masterclass
                  </p>
                </div>
              </div>
              <div className="col-lg-2 text-center mt-5">
                <CountUp
                  end={50}
                  duration={3}
                  separator=","
                  className="counter countertext fw-bold fs-40 text-dark"
                />
                <AddIcon className="fs-40 text-dark fw-bold" />
                <div className="tabata">
                  <p
                    style={{ color: "black", fontweight: "bold" }}
                    className="mt-4"
                  >
                    Injury Masterclass
                  </p>
                </div>
              </div>
              <div className="col-lg-2 text-center mt-5">
                <CountUp
                  end={50}
                  duration={3}
                  separator=","
                  className="counter countertext fw-bold fs-40 text-dark"
                />
                <AddIcon className="fs-40 text-dark fw-bold" />
                <div className="tabata">
                  <p
                    style={{ color: "black", fontweight: "bold" }}
                    className="mt-4"
                  >
                    Group Instructor Masterclass
                  </p>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TotalCourseEnrolled;
