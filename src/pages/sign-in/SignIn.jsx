import React from "react";
import signInChairImg from "../../assets/images/chair.png";
import AuthenticationBtn from "../../components/buttons/AuthenticationBtn";
import companyLogo from "../../assets/images/company-logo.png";

const SignIn = () => {
  return (
    <div className="signup-div">
      <div className="signup-left-div">
        <div className="logo-div">
          <img src={companyLogo} alt="company-logo" />
        </div>
        <img className="signup-img-left" src={signInChairImg} />
      </div>
      <div className="signup-right-div">
        <div className="signup-right-container">
          <h4 className="signup-title">Sign in</h4>
          <p className="signup-text">
            Don’t have an accout yet?{" "}
            <span className="sign-in-text">Sign Up</span>
          </p>
          <div className="signup-form">
            <div className="signup-input-div">
              <input className="signup-input" type="text" />
              <p className="sign-up-label">Your usernam or email address</p>
            </div>

            <div className="signup-input-div password-field">
              <input className="signup-input" type="password" />
              <p className="sign-up-label">Password</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.1303 9.8531C22.2899 11.0732 22.2899 12.9268 21.1303 14.1469C19.1745 16.2047 15.8155 19 12 19C8.18448 19 4.82549 16.2047 2.86971 14.1469C1.7101 12.9268 1.7101 11.0732 2.86971 9.8531C4.82549 7.79533 8.18448 5 12 5C15.8155 5 19.1745 7.79533 21.1303 9.8531Z"
                  stroke="#6C7275"
                  strokeWidth="1.5"
                />
                <path
                  d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                  stroke="#6C7275"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
          <div className="remember-me-fg-pswrd-div">
            <input className="signu-checkbox" type="checkbox" />
            <div className="rm-pswrd-parent-div">
              <p className="remember-me">Remember me</p>
              <p className="forget-password">Forgot password?</p>
            </div>
          </div>
          <AuthenticationBtn text={"Sign in"} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
