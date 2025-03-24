import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "react-toastify/dist/ReactToastify.css";
import { axiosInstance } from "../config/api";
import "../../css/popup-form-style.css";
import Swal from "sweetalert2";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CustomModal from "../../../assets/js/popup/login";
import { createCourseOrder } from "../apis/fitness-course";

const ScholarshipModal = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState();
  const [showResultModal, setShowResultModal] = useState(false);
  const [result, setResult] = useState("");
  const [clock, setClock] = useState("");
  const [showQandAModal, setShowQandAModal] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const questionsPerPage = 4;
  let timeDifference, ticker, scholarshipResult, whatsappMsg;

  useEffect(() => {
    const userAuthorization = localStorage.getItem("fg_group_user_authorization");

    if (userAuthorization === null) {
      Swal.fire({
        icon: "info",
        title: "Give Scholarship Exam & Get Discount",
        text: "Please login to your account and give your exam",
        confirmButtonText: "Login",
        showCloseButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          setShowModalLogin(true);
          localStorage.setItem("scholarshipExamClick", JSON.stringify(true))
        }
      });
    } else {
      setShowModal(true);
    }

    if (result) {
      const remainTime = moment(result.result?.createdAt).add(24, "hours").diff(moment(), "seconds");
      startTimer(remainTime);
    }
    getUserData();
  }, [questions]);

  const showReview = () => {
    setShowQandAModal(true);
  };

  function startTimer(secs) {
    timeDifference = parseInt(secs);
    ticker = setInterval(() => tick(timeDifference), 1000);
  }

  function tick(remainTime) {
    if (remainTime > 0) {
      timeDifference--;
    } else {
      displayResult(scholarshipResult);
      clearInterval(ticker);
      return;
    }

    var h, m, s;
    s = Math.floor(timeDifference);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;

    var paddingZero = (n) => {
      return ("0" + n).slice(-2);
    };

    const countdown = paddingZero(h) + ":" + paddingZero(m) + ":" + paddingZero(s);
    setClock("Offer Expires in " + countdown);
  }

  const handleResultModalClose = () => {
    setShowResultModal(false);
  };

  const handleQandAModalClose = () => {
    setShowQandAModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const getUserData = async () => {
    try {
      const response = await axiosInstance.get("/account/profile");
      localStorage.setItem("user_info", JSON.stringify(response.data.data));
    } catch (error) {
      console.error("Error in handleAgreeAndConfirm:", error);
    }
  };

  const handleNextButtonClick = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + questionsPerPage);
    }
  };

  const handleNextBtnQandA = () => {
    setShowModal(false);
    showReview();
  };

  const getQuestion = async (selectedCourseID, event) => {
    setSelectedCourse(selectedCourseID);
    setLoading(true); // Set loading to true when starting the request

    if (!selectedCourseID) {
      setLoading(false); // Set loading to false if validation fails
      return Swal.fire({
        title: "Please select a course",
        type: "error",
        confirmButtonText: "Ok",
      });
    }

    try {
      const response = await axiosInstance.get(`/scholarship/get-question?course_id=${selectedCourseID}`);
      setQuestions(response.data.data);
    } catch (error) {
      if (error.response && error.response.status === 403) {
        if (error.response.data && error.response.data.result) {
          scholarshipResult = error.response.data.data;
          displayResult(scholarshipResult);
        }
      }

      displayResult(error.response.data.data);
    } finally {
      setLoading(false); // Set loading to false when the request is complete
    }
  };

  const displayResult = (result) => {
    setShowModal(false);
    setResult(result);
    setShowResultModal(true);
  };

  const askForPurchase = async (submission_id, element) => {
    Swal.fire({
      title: "Do you want to purchase the online course?",
      text: "You can purchase this course later based on the result within 24 hours only.",
      showCancelButton: true,
      confirmButtonText: "Yes, I'm sure",
      cancelButtonText: "No, I'll do it later",
    }).then((result) => {
      if (result.isConfirmed) {
        createCourseOrder(selectedCourse, submission_id)
      } else {
        Swal.close();
        setShowModal(false);
        setShowResultModal(false);
      }
    });
  };

  let discountMessage = "";
  let discountString = "";
  let buttonText = "";

  if (result && result.result && result.result?.scholarship_applied) {
    discountMessage = `You got ${result.result.discount_rate}% Scholarship`;
    discountString = `<p><span style="font-size:22px">Rs. ${result.result.discount_amount} </span><span style="font-size:14px"><del> (Rs. ${result.result.course_amount}) </del></span></p>`;
    buttonText = `Available your discount`;

    const hoursDifference = moment(moment.now()).diff(result.result?.createdAt, "hours");

    if (hoursDifference >= 24) {
      whatsappMsg = (
        <a
          className="btn btn-success"
          href="https://api.whatsapp.com/send?phone=6354051487&text=Hey, I missed scholarship discount. I am interested in purchase course."
        >
          <i className="fab fa-whatsapp mr-2"></i>Chat With Us..
        </a>
      );
      discountMessage = `You missed ${result.result.discount_rate}% Scholarship`;
      discountString = `<p><span style="font-size:22px">Rs. ${result.result.course_amount}</span></p>`;
      buttonText = `Buy Course Now`;
    }
  } else {
    discountMessage = "You are not eligible to get a scholarship";
    discountString = "";
    buttonText = "Buy Course";
  }

  const handlePrevButtonClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - questionsPerPage);
    }
  };

  const handleOptionChange = (questionId, selectedOption) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: selectedOption,
    }));
  };

  const renderQuestions = () => {
    const visibleQuestions = questions.slice(currentQuestion, currentQuestion + questionsPerPage);

    return visibleQuestions.map((question, index) => (
      <div key={index} className="field_modal mt-5">
        <div className="label">
          {question.question_no}. {question.question}
        </div>
        <div className="options-container d-flex mt-2">
          {question.option &&
            question.option.map((option, optionIndex) => (
              <div key={optionIndex} className="option ml-4">
                <input
                  type="radio"
                  name={`option_${question._id}`}
                  value={option}
                  className="radio1 mr-2"
                  checked={selectedOptions[question._id] === option}
                  onChange={() => handleOptionChange(question._id, option)}
                />
                {option}
              </div>
            ))}
        </div>
      </div>
    ));
  };

  const submitQuiz = async () => {
    if (!selectedOptions) {
      return Swal.fire({
        title: "Error",
        text: "Selected options are not initialized",
        icon: "error",
      });
    }

    const selectedOptionsList = Object.entries(selectedOptions).map(([questionId, answer]) => ({
      question_id: questionId,
      answer: answer,
    }));

    if (selectedOptionsList.length === 0) {
      return Swal.fire({
        title: "Answer Required",
        text: "Please select at least one answer",
        type: "error",
        confirmButtonText: "Ok",
      });
    }

    setLoading(true);

    try {
      const response = await axiosInstance.post("/scholarship/submission", {
        course_id: selectedCourse,
        submission_data: selectedOptionsList,
      });

      displayResult(response.data.data);
      handleQandAModalClose()
    } catch (error) {
      console.error("Error in submitQuiz:", error);
      Swal.fire({
        title: "Error",
        text: error.response?.data?.message || "Something went wrong while submitting the quiz",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const showModalLoginHandler = () => {
    setShowModalLogin(true);
  };

  return (
    <>
      {/* {createCourseOrder && (
        <Modal show={showdddModal} onHide={handleClose} centered size="lg">
          <CreateCourseOrder course_id={selectedCourse} submission_id={submissionId} />
        </Modal>
      )} */}

      {showModalLogin && (
        <CustomModal
          show={showModalLogin}
          onHide={() => setShowModalLogin(false)}
          size="md"
          centered={true}
        />
      )}

      {/* Scholarship Popup  */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header className="border-0 justify-content-center">
          <Modal.Title>
            <div className="text-center">
              <img
                src={
                  process.env.PUBLIC_URL + "../assets/images/logo/fg_group.webp"
                }
                width="50px"
                alt="Fg Group"
              />
              <header className="mt-2 fs-20">
                Please choose your course and start your{" "}
                <span
                  className="clr1 fs-20 text-blue-color"
                >
                  scholarship exam
                </span>
              </header>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="popup_form_modal">
            <div className="container_modal">
              <div className="form-outer-modal">
                <Form onSubmit={(e) => e.preventDefault()}>
                  <div className="page_modal slide-page_modal">
                    <Form.Group
                      className="field_modal"
                      style={{ margin: "5px 0px" }}
                    >
                      <Form.Control
                        type="radio"
                        name="radio_course_choice"
                        onChange={(event) =>
                          getQuestion("6010e781eb38ac0a706af296", event)
                        }
                        className="radio1"
                        style={{ marginRight: "5px" }}
                      />
                      <b>Nutri Trainer Course</b>
                    </Form.Group>
                    <Form.Group
                      className="field_modal"
                      style={{ margin: "5px 0px" }}
                    >
                      <Form.Control
                        type="radio"
                        name="radio_course_choice"
                        onChange={(event) =>
                          getQuestion("6010e9f3eb38ac0a706af298", event)
                        }
                        className="radio1"
                        style={{ marginRight: "5px" }}
                      />
                      <b>Diploma In Personal Training Course</b>
                    </Form.Group>
                    <Form.Group
                      className="field_modal"
                      style={{ margin: "5px 0px" }}
                    >
                      <Form.Control
                        type="radio"
                        name="radio_course_choice"
                        onChange={(event) =>
                          getQuestion("6010e899eb38ac0a706af297", event)
                        }
                        className="radio1"
                        style={{ marginRight: "5px" }}
                      />
                      <b>Diploma In Nutrition Course</b>
                    </Form.Group>
                    <Form.Group
                      className="field_modal"
                      style={{ margin: "5px 0px" }}
                    >
                      <Form.Control
                        type="radio"
                        name="radio_course_choice"
                        onChange={(event) =>
                          getQuestion("6010f26149f0473b9c50792d", event)
                        }
                        className="radio1"
                        style={{ marginRight: "5px" }}
                      />
                      <b>Anabolic Androgenic Steroids Workshop</b>
                    </Form.Group>
                    <Form.Group
                      className="field_modal"
                      style={{ margin: "5px 0px" }}
                    >
                      <Form.Control
                        type="radio"
                        name="radio_course_choice"
                        onChange={(event) =>
                          getQuestion("6010f018d332f6324c6bbd68", event)
                        }
                        className="radio1"
                        style={{ marginRight: "5px" }}
                      />
                      <b>Tabata & Functional Trainer Certification</b>
                    </Form.Group>
                    <Form.Group className="field_modal">
                      {selectedCourse && (
                        <button
                          className="firstNext next"
                          onClick={handleNextBtnQandA}
                          style={{ display: "block" }}
                        >
                          Next
                        </button>
                      )}
                    </Form.Group>
                    {loading && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "rgba(255, 255, 255, 0.8)", // Adjust opacity as needed
                        }}
                      >
                        <CircularProgress />
                      </Box>
                    )}
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Scholarship Q&A Popup  */}
      <Modal
        show={showQandAModal}
        onHide={handleQandAModalClose}
        centered
        size="lg"
      >
        <Modal.Header className="border-0 justify-content-center">
          <Modal.Title>
            <div className="text-center">
              <img
                src={
                  process.env.PUBLIC_URL + "../assets/images/logo/fg_group.webp"
                }
                width="50px"
                alt="Fg Group"
              />
              <header className="mt-2 fs-20">
                Start Your{" "}
                <span
                  className="clr1 fs-20 text-blue-color"
                >
                  Scholarship Exam
                </span>
              </header>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="divQuiz">
            {loading && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.8)", // Adjust opacity as needed
                }}
              >
                <CircularProgress />
              </Box>
            )}
            {questions.length > 0 && renderQuestions()}
            <div className="field_modal mt-5">
              <button
                type="button"
                className="firstNext next btn btn-outline-info"
                onClick={handlePrevButtonClick}
              >
                Previous
              </button>
              {currentQuestion < questions.length - questionsPerPage ? (
                <button
                  type="button"
                  className="ml-2 firstNext next btn btn-primary"
                  onClick={handleNextButtonClick}
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  className="ml-2 btn btn-outline-primary firstNext next"
                  onClick={submitQuiz}
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {/* Scholarship Result Popup  */}
      <Modal
        show={showResultModal}
        onHide={handleResultModalClose}
        centered
        size="lg"
      >
        <Modal.Header className="border-0 justify-content-center">
          <Modal.Title>
            <div className="text-center">
              <img
                src={
                  process.env.PUBLIC_URL + "../assets/images/logo/fg_group.webp"
                }
                width="50px"
                alt="Fg Group"
              />
              <header className="mt-2 fs-20">
                You Already Give Exam here is{" "}
                <span
                  className="clr1 fs-20 text-blue-color"
                >
                  Your Result
                </span>
              </header>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {result && (
            <form>
              <div className="page_modal">
                <div className="field_modal mb-4">
                  <div className="label">Submission ID:</div>
                  <p>{result.submission_id}</p>
                </div>
                <div className="field_modal mb-4">
                  <div className="label">Submission Time:</div>
                  <p>
                    {moment(result.result?.createdAt).format(
                      "DD/MM/YYYY hh:mm A"
                    )}
                  </p>
                </div>
                <div className="field_modal mb-4">
                  <div className="label">Scholarship Applied:</div>
                  <p>{result.result?.scholarship_applied ? "Yes" : "No"}</p>
                </div>
                <div className="field_modal text-center my-2">
                  <span
                    id="countdown"
                     className="fs-24 fw-bold"
                  >
                    {clock}
                  </span>
                </div>
                <div className="field_modal text-center">{whatsappMsg}</div>
                <div className="field_modal text-center">
                  <div
                    className="label fs-24"
                    style={{ color: "red" }}
                  >
                    {discountMessage}
                  </div>
                  <p className=" fs-24"
                    dangerouslySetInnerHTML={{ __html: discountString }}
                  ></p>
                </div>
                <div
                  className="field_modal"
                  style={{ marginTop: "3%", textAlign: "center" }}
                >
                  <button
                    type="button"
                    style={{
                      width: "100%",
                      margin: "0px",
                      padding: "10px 0px",
                    }}
                    className="btn"
                    onClick={(event) =>
                      askForPurchase(result.submission_id, event)
                    }
                  >
                    {buttonText}
                  </button>
                  <p>
                    <span className="fs-14" style={{ color: "red" }}>
                      Discount is valid until 24 hours from the quiz submission
                      and for one time only.
                    </span>
                  </p>
                </div>
              </div>
            </form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ScholarshipModal;
