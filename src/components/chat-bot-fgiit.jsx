import React, { useState, useEffect, useRef } from "react";
import { axiosInstance } from "../assets/js/config/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import heic2any from "heic2any";
import LoginModal from "../assets/js/popup/login";

function ChatBotFgiitComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(null);
  const [botMessages, setBotMessages] = useState([]);
  const [userChoice, setUserChoice] = useState(null);
  const [loadingMessages, setLoadingMessages] = useState([]);
  const chatBoxRef = useRef(null);
  const [userData, setUserData] = useState("");

  const [formInputs, setFormInputs] = useState({
    name: "",
    mobile: "",
    email: "",
    issue: "",
  });
  const [thankYouMessageVisible, setThankYouMessageVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(true);
  const auth = localStorage.getItem("fg_group_user_authorization");
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (auth) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [auth]);

  const closeModal = () => {
    setShowModal(false);
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

  const openChatBot = () => {
    if (!isLogin) {
      setShowModal(true);
    } else {
      setIsOpen(true);
      setUserChoice(null);
      setThankYouMessageVisible(false);
      setFormSubmitted(true);
    }
  };

  const openChatBotMobile = () => {
    sessionStorage.setItem("chatbot_url", window.location.href);
    window.location.href = "/fgiit/chatbot";
  };

  const closeChatBot = () => setIsOpen(false);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axiosInstance.get("/account/profile");
      const responseData = response.data.data.user._id;
      setUserData(responseData);
      setFormInputs({
        first_name: response.data.data.user.first_name,
        last_name: response.data.data.user.last_name,
        mobile: response.data.data.user.mobile,
        email: response.data.data.user.email,
      });
    } catch (error) {
      console.error(error);
    }
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

  useEffect(() => {
    if (isOpen) {
      startBot();
    }
  }, [isOpen]);

  const handleUserChoice = async (choice) => {
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
        .concat({
          content:
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
              : choice,
          isUser: true,
        })
    );

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

    const payload = {
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
    <div>
      <>
        {isOpen ? (
          <button
            onClick={closeChatBot}
            className="chat-bot down-icon"
            aria-label="Close ChatBot"
          >
            <i className="fa fa-chevron-down"></i>
          </button>
        ) : (
          <>
            <button
              onClick={openChatBot}
              className="chat-bot d-none d-md-block"
              aria-label="Open ChatBot"
            >
              <i className="fa fa-headset"></i>
            </button>
            <button
              onClick={openChatBotMobile}
              className="chat-bot d-block d-md-none"
              aria-label="Open ChatBot"
            >
              <i className="fa fa-headset"></i>
            </button>
          </>
        )}

        <>
          {isOpen && (
            <div className="chat-bot-main">
              <div className="handle chatbot-header">
                <h4 className="chatbot-h4">
                  Resolve Your Concerns here
                  <FontAwesomeIcon
                    icon={faClose}
                    onClick={closeChatBot}
                    className="close-icon"
                  />
                </h4>
              </div>
              <div
                style={{
                  overflowY: "auto",
                  height: "80%",
                  padding: "0px 20px",
                }}
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
                            className="complaint-action-message option-button"
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
                        className="form-control my-3 py-2"
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
                        Thank you, your complaint will be resolved in under
                        24-48 hours.
                      </p>
                    </div>
                  </div>
                )}
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
        </>
        
        {showModal && <LoginModal onClose={closeModal} />}
      </>
    </div>
  );
}

export default ChatBotFgiitComponent;
