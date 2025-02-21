import React from "react";
import SecondaryBtn from "../../buttons/SecondaryBtn";
import ticketPercentImg from "../../../assets/images/ticket-percent.png";
import "./HomePageHeader.css";

const HomePageHeader = ({ bgColor, textColor, ntfText }) => {
  return (
    <header
      className="home-page-header"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="notification-container">
        <img src={ticketPercentImg} alt="ticket-percent" />
        <p style={{ color: textColor }} className="ntf-text text-14-semi-bold">
          {ntfText}
        </p>
        <div className="secondary-btn-div">
          <SecondaryBtn btnText={"Shop Now"} arrowColor={"#377DFF"} />
        </div>
      </div>
      <div className="ntf-cross-icon-div">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.4419 5.44194C15.686 5.19786 15.686 4.80214 15.4419 4.55806C15.1979 4.31398 14.8021 4.31398 14.5581 4.55806L10 9.11612L5.44194 4.55806C5.19786 4.31398 4.80214 4.31398 4.55806 4.55806C4.31398 4.80214 4.31398 5.19786 4.55806 5.44194L9.11612 10L4.55806 14.5581C4.31398 14.8021 4.31398 15.1979 4.55806 15.4419C4.80214 15.686 5.19786 15.686 5.44194 15.4419L10 10.8839L14.5581 15.4419C14.8021 15.686 15.1979 15.686 15.4419 15.4419C15.686 15.1979 15.686 14.8021 15.4419 14.5581L10.8839 10L15.4419 5.44194Z"
            fill="#343839"
          />
        </svg>
      </div>
    </header>
  );
};

export default HomePageHeader;
