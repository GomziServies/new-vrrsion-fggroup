import React from "react";

function CallBtn({ phoneNumber }) {
  const handleClick = () => {
    if (!phoneNumber) {
      phoneNumber = "+916354051487"; // Default phone number if none is provided
    }
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section className="call-buton">
      <a onClick={handleClick} className="cc-calto-action-ripple" aria-label="Fg Group">
        <i className="fa fa-phone"></i>
        {/* <span className="num">Call Our Expert</span> */}
      </a>
    </section>
  );
}

export default CallBtn;
