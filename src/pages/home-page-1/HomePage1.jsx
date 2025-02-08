import React from "react";
import "./HomePage1.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import HomePageHeader from "../../components/home-pages/header/HomePageHeader";
import companyLogo from "../../assets/images/company-logo.png";
import searchIcon from "../../assets/images/search 02.png";
import profileIcon from "../../assets/images/user-circle.png";
import cartIcon from "../../assets/images/Cart Button.png";
import banner1 from "../../assets/images/carousel-slide-1.png";
import banner2 from "../../assets/images/carousel-slide-2.jpg";
import banner3 from "../../assets/images/carousel-slide-3.jpg";
import banner4 from "../../assets/images/carousel-slide-4.jpg";
import SecondaryBtn from "../../components/buttons/SecondaryBtn";

const HomePage1 = () => {
  return (
    <div>
      <HomePageHeader
        bgColor={"#F3F5F7"}
        textColor={"#343839"}
        ntfText={"30% off storewide — Limited time!"}
      />
      <div className="home-page-container">
        <div className="home-page-top-section">
          <img src={companyLogo} alt="company-logo" />
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
            <img className="cart-icon" src={cartIcon} alt="cart-icon" />
          </div>
        </div>
      </div>
      <div className="home-page-container">
        <div className="home-page-carousel">
          <CCarousel controls indicators>
            <CCarouselItem>
              <CImage
                className="carousel-img d-block w-100"
                src={banner1}
                alt="slide 1"
              />
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="carousel-img d-block w-100"
                src={banner2}
                alt="slide 2"
              />
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="carousel-img d-block w-100"
                src={banner3}
                alt="slide 3"
              />
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="carousel-img d-block w-100"
                src={banner4}
                alt="slide 3"
              />
            </CCarouselItem>
          </CCarousel>
        </div>
        <div className="carousel-content-div">
          <p className="left-carousel-content heading-72">
            Simply Unique<span className="carousel-content-left-span">/</span>{" "}
            Simply Better<span className="carousel-content-left-span">.</span>
          </p>
          <p className="right-carousel-content text-18-regular">
            <span className="carousel-content-right-span">3legant</span> is a
            gift & decorations store based in HCMC, Vietnam. Est since 2019.{" "}
          </p>
        </div>
      </div>
      <div className="home-page-container">
        <section className="home-page-products-section">
          <div className="left-product-div common-centered-img-properties">
            <p className="product-heading heading-34">Living Room</p>
            <SecondaryBtn btnText={"Shop Now"} arrowColor={"#121212"} />
          </div>
          <div className="right-product-div">
            <div className="right-product-sub-div1 common-centered-img-properties">
              {" "}
              <p className="product-heading heading-34">Bedroom</p>
              <SecondaryBtn btnText={"Shop Now"} arrowColor={"#121212"} />
            </div>
            <div className="right-product-sub-div2 common-centered-img-properties">
              {" "}
              <p className="product-heading heading-34">Kitchen</p>
              <SecondaryBtn btnText={"Shop Now"} arrowColor={"#121212"} />
            </div>
          </div>
        </section>
        <div className="home-page-container">
          <section className="new-arival-section">
            <div className="new-arival-title-section">
              <p className="new-arival-title">New Arrivals</p>
              <SecondaryBtn btnText={"More products"} arrowColor={"#121212"} />
            </div>
            <div className="new-arival-product-list-div">
              <div className="new-arival-product-card"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage1;
