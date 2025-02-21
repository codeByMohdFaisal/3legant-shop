import React from "react";
import "./ProductDetails.css";
import HomePageHeader from "../../components/home-pages/header/HomePageHeader";
import companyLogo from "../../assets/images/company-logo.png";
import mobMenuIcon from "../../assets/images/mob-menu.svg";
import companyWhiteLogo from "../../assets/images/white-logo.svg";
import searchIcon from "../../assets/images/search 02.png";
import profileIcon from "../../assets/images/user-circle.png";
import cartIcon from "../../assets/images/Cart Button.png";

const ProductDetails = () => {
  return (
    <div className="product-details-page">
      <HomePageHeader
        bgColor={"#F3F5F7"}
        textColor={"#343839"}
        ntfText={"30% off storewide — Limited time!"}
      />
      <div className="home-page-container">
        <div className="home-page-top-section">
          <div className="mob-menu-parent">
            <img className="mob-menu-icon" src={mobMenuIcon} alt="mob-menu" />
            <img src={companyLogo} alt="company-logo" />
          </div>

          <nav className="home-page-nav">
            <ul className="navbar-parent">
              <li className="navbar-items selected-nav-items ">Home</li>
              <li className="navbar-items">Shop</li>
              <li className="navbar-items">Product</li>
              <li className="navbar-items">Contact Us</li>
            </ul>
          </nav>
          <div className="navbar-icons">
            <img className="navbar-icon" src={searchIcon} alt="search-icon" />
            <img className="navbar-icon" src={profileIcon} alt="profile-icon" />
            <img
              className="cart-icon"
              src={cartIcon}
              alt="cart-icon"
              // onClick={(e) => handleCartModal(e, !openCartModal)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
