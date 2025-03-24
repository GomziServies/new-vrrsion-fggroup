import React, { useState, useEffect, useRef } from "react";
import { axiosInstance } from "../../assets/js/config/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
// import * as imageConversion from "image-conversion";
import heic2any from "heic2any";
import LoginModal from "../../assets/js/popup/login";

function ChatBotFGIIT() {
  const [botMessages, setBotMessages] = useState([]);
  const [loading, setLoading] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [loadingMessages, setLoadingMessages] = useState([]);
  const chatBoxRef = useRef(null);
  const [otherMessage, setOtherMessage] = useState("");
  const [userData, setUserData] = useState("");

  const [formInputs, setFormInputs] = useState({
    name: "",
    mobile: "",
    email: "",
    issue: "",
  });
  const [thankYouMessageVisible, setThankYouMessageVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(true);

  let chatbot = sessionStorage.getItem("chatbot_url");

  //

  const auth = localStorage.getItem("fg_group_user_authorization");

  const [userInfo, setUserInfo] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  const http_getProfile = async () => {
    try {
      const response = await axiosInstance.get("/account/profile");
      setUserInfo(response.data.data);
      localStorage.setItem("user_info", JSON.stringify(response.data.data));
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    const user_info = localStorage.getItem("user_info");

    if (auth && !user_info) {
      const fetchProfile = async () => {
        try {
          await http_getProfile();
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };
      fetchProfile();
    } else {
      setUserInfo(JSON.parse(user_info));
    }
  }, [auth]);

  //

  const ChatBotReturnMenu = () => {
    if (chatbot) {
      sessionStorage.removeItem("chatbot_url");
      window.location.href = chatbot;
    } else {
      window.location.href = "/";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFileChange = async (event) => {
    setLoading(true);
    const file = event.target.files[0];
    if (!file) {
      toast.error("No file selected.");
      return;
    }

    let uploadFile = file;
    let previewUrl = URL.createObjectURL(file);

    if (
      file.type === "image/heic" ||
      file.name.toLowerCase().endsWith(".heic")
    ) {
      try {
        const jpgBlob = await heic2any({ blob: file, toType: "image/jpeg" });
        const jpgName = file.name.replace(/\.heic$/i, ".jpg");
        uploadFile = new File([jpgBlob], jpgName, { type: "image/jpeg" });
        previewUrl = URL.createObjectURL(uploadFile);
      } catch (conversionError) {
        console.error("Failed to convert HEIC to JPG", conversionError);
        toast.error("Failed to convert HEIC to JPG.");
        return;
      }
    } else if (
      file.type === "image/webp" ||
      file.name.toLowerCase().endsWith(".webp")
    ) {
      try {
        const canvas = document.createElement("canvas");
        const img = new Image();
        img.src = URL.createObjectURL(file);

        await new Promise((resolve) => (img.onload = resolve));

        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        const jpgBlob = await new Promise((resolve) =>
          canvas.toBlob(resolve, "image/jpeg", 0.8)
        );

        const jpgName = file.name.replace(/\.webp$/i, ".jpg");
        uploadFile = new File([jpgBlob], jpgName, { type: "image/jpeg" });
        previewUrl = URL.createObjectURL(uploadFile);
      } catch (conversionError) {
        console.error("Failed to convert WEBP to JPG", conversionError);
        toast.error("Failed to convert WEBP to JPG.");
        return;
      }
    }

    const formDataForUpload = new FormData();
    formDataForUpload.append("files", uploadFile);

    const imagePreviewElement = document.getElementById("image-preview");
    if (imagePreviewElement) {
      imagePreviewElement.src = previewUrl;
    }

    try {
      const response = await axiosInstance.post(
        "/file-upload",
        formDataForUpload
      );
      const photoUrl = response.data.data.fileURLs[0];

      setFormInputs((prevData) => ({
        ...prevData,
        complaint_media: "https://files.fggroup.in/" + photoUrl,
      }));
    } catch (error) {
      console.error("Upload failed", error);
      toast.error("Upload failed: " + error?.response?.data?.message);
    }
    setLoading(false);
  };

  const otherInputRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      setThankYouMessageVisible(false);
      startBot();
      getUserData();
      isFirstRender.current = false;
    }
  }, []);

  const getUserData = async () => {
    const response = await axiosInstance.get("/account/profile");
    const responseData = response.data.data.user._id;

    setUserData(responseData);
    setFormInputs({
      first_name: response.data.data.user.first_name,
      last_name: response.data.data.user.last_name,
      mobile: response.data.data.user.mobile,
      email: response.data.data.user.email,
    });
  };

  const startBot = () => {
    setLoadingMessages([true]);
    setTimeout(() => {
      setBotMessages([{ content: "Hi, welcome to FGIIT! 👋" }]);
      setLoadingMessages([false]);
    }, 1500);

    setLoadingMessages((prev) => [...prev, true]);
    setTimeout(() => {
      setBotMessages((prevMessages) => [
        ...prevMessages,
        { content: "We are the Health and wellness experts." },
      ]);
      setLoadingMessages((prev) => [...prev, false]);
    }, 2500);

    setTimeout(() => {
      setBotMessages((prevMessages) => [
        ...prevMessages,
        {
          content: "",
          action: {
            type: "button",
            options: [
              {
                text: "Course content Issue.",
                value: "issue1",
                marginTop: "0px",
              },
            ],
          },
        },
      ]);
      setLoadingMessages((prev) => [...prev, false]);
    }, 4000);
    setTimeout(() => {
      setBotMessages((prevMessages) => [
        ...prevMessages,
        {
          content: "",
          action: {
            type: "button",
            options: [
              {
                text: "Faculty Issue.",
                value: "issue2",
              },
            ],
          },
        },
      ]);
      setLoadingMessages((prev) => [...prev, false]);
    }, 4500);
    setTimeout(() => {
      setBotMessages((prevMessages) => [
        ...prevMessages,
        {
          content: "",
          action: {
            type: "button",
            options: [
              {
                text: "Payment issues.",
                value: "issue3",
              },
            ],
          },
        },
      ]);
      setLoadingMessages((prev) => [...prev, false]);
    }, 5000);
    setTimeout(() => {
      setBotMessages((prevMessages) => [
        ...prevMessages,
        {
          content: "",
          action: {
            type: "button",
            options: [
              {
                text: "Technical glitches in Application.",
                value: "issue4",
              },
            ],
          },
        },
      ]);
      setLoadingMessages((prev) => [...prev, false]);
    }, 5500);
    setTimeout(() => {
      setBotMessages((prevMessages) => [
        ...prevMessages,
        {
          content: "",
          action: {
            type: "button",
            options: [
              {
                text: "Exam Issue.",
                value: "issue5",
              },
            ],
          },
        },
      ]);
      setLoadingMessages((prev) => [...prev, false]);
    }, 6000);
    setTimeout(() => {
      setBotMessages((prevMessages) => [
        ...prevMessages,
        {
          content: "",
          action: {
            type: "button",
            options: [
              {
                text: "Project Submission Issue.",
                value: "issue6",
              },
            ],
          },
        },
      ]);
      setLoadingMessages((prev) => [...prev, false]);
    }, 6500);
    setTimeout(() => {
      setBotMessages((prevMessages) => [
        ...prevMessages,
        {
          content: "",
          action: {
            type: "button",
            options: [
              {
                text: "Certificate Issues.",
                value: "issue7",
              },
            ],
          },
        },
      ]);
      setLoadingMessages((prev) => [...prev, false]);
    }, 7000);
    setTimeout(() => {
      setBotMessages((prevMessages) => [
        ...prevMessages,
        {
          content: "",
          action: {
            type: "button",
            options: [
              {
                text: "Other...",
                value: "other",
              },
            ],
          },
        },
      ]);
      setLoadingMessages((prev) => [...prev, false]);
    }, 7500);
  };

  const handleUserChoice = async (choice) => {
    if (choice === "other") {
      setOtherMessage("");
      setTimeout(() => {
        otherInputRef.current?.scrollIntoView({ behavior: "smooth" });
        otherInputRef.current?.focus();
      }, 0);
    } else {
      const selectChoice =
        choice === "issue1"
          ? "Course content Issue."
          : choice === "issue2"
          ? "Faculty Issue."
          : choice === "issue3"
          ? "Payment issues."
          : choice === "issue4"
          ? "Technical glitches in Application."
          : choice === "issue5"
          ? "Exam Issue."
          : choice === "issue6"
          ? "Project Submission Issue."
          : choice === "issue7"
          ? "Certificate Issues."
          : choice === "other"
          ? "Other..."
          : choice;

      setBotMessages((prevMessages) =>
        prevMessages
          .filter((message) => !message.action)
          .concat({ content: selectChoice, isUser: true })
      );

      // handleCreateComplaint(selectChoice);

      setTimeout(() => {
        setBotMessages((prevMessages) => [
          ...prevMessages,
          {
            content: "Fill the below details. Describe your issue.",
          },
        ]);
      }, 1000);

      setTimeout(() => {
        setUserChoice(choice);
      }, 1500);
    }
  };

  const handleCreateComplaint = async (selectChoice) => {
    const selectChoiceData =
      selectChoice === "issue1"
        ? "Course content Issue."
        : selectChoice === "issue2"
        ? "Faculty Issue."
        : selectChoice === "issue3"
        ? "Payment issues."
        : selectChoice === "issue4"
        ? "Technical glitches in Application."
        : selectChoice === "issue5"
        ? "Exam Issue."
        : selectChoice === "issue6"
        ? "Project Submission Issue."
        : selectChoice === "issue7"
        ? "Certificate Issues."
        : selectChoice === "other"
        ? "Other..."
        : selectChoice;

    let payload = {
      complaint: selectChoiceData,
      message: formInputs.issue,
      company_name: "fgiit",
      user_id: userData,
      complaint_media: formInputs.complaint_media,
    };

    const result = await axiosInstance.post(
      "/complaint-chatbot/create",
      payload
    );

    if (result && result.data) {
      setFormSubmitted(false);
      setThankYouMessageVisible(true);

      setTimeout(() => {
        if (chatbot) {
          sessionStorage.removeItem("chatbot_url");
          window.location.href = chatbot;
        } else {
          window.location.href = "/";
        }
      }, 2000);
    }
  };

  const TypingLoader = () => (
    <div style={{ display: "flex", marginLeft: "10px" }}>
      <div className="dot" style={dotStyle}></div>
      <div className="dot" style={dotStyle}></div>
      <div className="dot" style={dotStyle}></div>
    </div>
  );

  const dotStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    margin: "0 2px",
    animation: "dot-blink 1.5s infinite",
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `@keyframes dot-blink { 0% { opacity: 0.3; } 50% { opacity: 1; } 100% { opacity: 0.3; } }`;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [botMessages, userChoice]);

  useEffect(() => {
    if (thankYouMessageVisible && chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [thankYouMessageVisible]);

  return (
    <>
      {userInfo ? (
        <div className="w-100 d-flex justify-content-center">
          <div className="chatbot-box chatboxes">
            <div className="handle chatbot-header">
              <h4 className="chatbot-h4">
                Resolve Your Concerns here
                <FontAwesomeIcon
                  icon={faClose}
                  onClick={ChatBotReturnMenu}
                  className="close-icon"
                />
              </h4>

              {/* <p style={{ marginTop: '10px' }}>Our automated complaint system ensures quick and efficient resolutions for all your queries and concerns.</p> */}
            </div>

            <div
              className="chat-box"
              style={{ overflowY: "auto", height: "100%", padding: "0px 20px" }}
              ref={chatBoxRef}
            >
              {botMessages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "10px",
                    padding:
                      message?.action?.type === "button" ? "" : "7px 13px",
                    borderRadius: "15px",
                    marginLeft: message.isUser ? "68px" : "0px",
                    width: message.isUser ? "80%" : "80%",
                    color: message.isUser ? "#fff" : "#595a5a",
                    backgroundColor: message.isUser
                      ? ""
                      : message?.action?.type === "button"
                      ? ""
                      : "#ebebeb",
                    textAlign: message.isUser ? "left" : "left",
                    display: message.isUser ? "flex" : "flex",
                    justifyContent: message.isUser ? "end" : "start",
                  }}
                >
                  {message.isUser ? (
                    <p className="chat-message-content">{message.content}</p>
                  ) : (
                    <p className="chat-message">{message.content}</p>
                  )}
                  {loadingMessages[index] && <TypingLoader />}
                  {message.action && (
                    <div>
                      {message.action.options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleUserChoice(option.value)}
                          className="option-button complaint-action-message"
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {userChoice && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleCreateComplaint(userChoice);
                  }}
                  className="chatbot-form"
                >
                  <div className="d-flex">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="first_name"
                      value={formInputs.first_name}
                      onChange={handleInputChange}
                      required
                      className="form-control py-2 chatbot-input-placeholder"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="last_name"
                      value={formInputs.last_name}
                      onChange={handleInputChange}
                      required
                      className="form-control py-2"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Mobile"
                      name="mobile"
                      value={formInputs.mobile}
                      onChange={handleInputChange}
                      required
                      className="form-control my-3 py-2"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formInputs.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                      className="form-control my-3 py-2"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Describe your issue in detail"
                      name="issue"
                      value={formInputs.issue}
                      onChange={handleInputChange}
                      disabled={formSubmitted ? false : true}
                      required
                      className="form-control mt-3 py-2"
                    />
                  </div>
                  <div className="mt-2">
                    <label>Complaint Image: (optional)</label>
                    <input
                      type="file"
                      name="complaint_media"
                      onChange={handleInputFileChange}
                      placeholder="Complaint Image"
                      className="form-control mb-3 py-2"
                    />
                  </div>
                  {formSubmitted && (
                    <button
                      type="submit"
                      className={`${
                        loading
                          ? "chatbot-submit-btn-load"
                          : "chatbot-submit-btn"
                      }`}
                      disabled={loading ? true : false}
                    >
                      Submit
                    </button>
                  )}
                </form>
              )}
              {thankYouMessageVisible && (
                <div className="chatbot-thanks-message">
                  <div className="chatbot-margin-right">
                    <p>
                      Thank you, your complaint will be resolved in under 24-48
                      hours.
                    </p>
                  </div>
                </div>
              )}

              {loading && (
                <div className="loader-background">
                  <div class="spinner-box">
                    <div class="three-quarter-spinner"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        showModal && <LoginModal onClose={closeModal} />
      )}
    </>
  );
}

export default ChatBotFGIIT;
