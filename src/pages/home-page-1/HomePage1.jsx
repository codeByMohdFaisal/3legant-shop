import React from "react";
import "./HomePage1.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import HomePageHeader from "../../components/home-pages/header/HomePageHeader";
import companyLogo from "../../assets/images/company-logo.png";
import companyWhiteLogo from "../../assets/images/white-logo.svg";
import searchIcon from "../../assets/images/search 02.png";
import profileIcon from "../../assets/images/user-circle.png";
import cartIcon from "../../assets/images/Cart Button.png";
import banner1 from "../../assets/images/carousel-slide-1.png";
import banner2 from "../../assets/images/carousel-slide-2.jpg";
import banner3 from "../../assets/images/carousel-slide-3.jpg";
import banner4 from "../../assets/images/carousel-slide-4.jpg";
import newTag from "../../assets/images/newtag.png";
import ratings from "../../assets/images/ratings.png";
import wishlistIcon from "../../assets/images/wishlist.png";
import cardImg1 from "../../assets/images/new-arrival-sofa.png";
import cardImg2 from "../../assets/images/table-lamp.png";
import cardImg3 from "../../assets/images/beige-table-lamp.png";
import cardImg4 from "../../assets/images/bamboo-basket.png";
import featureIcon1 from "../../assets/images/fast-delivery.svg";
import featureIcon2 from "../../assets/images/money.svg";
import featureIcon3 from "../../assets/images/lock 01.svg";
import featureIcon4 from "../../assets/images/call.svg";
import bannerSofa from "../../assets/images/banner-sofa.png";
import articleImg1 from "../../assets/images/article-1.png";
import articleImg2 from "../../assets/images/article-2.png";
import articleImg3 from "../../assets/images/article-3.png";
import contactUsImg from "../../assets/images/banner-img-2.png";
import email from "../../assets/images/email.svg";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import youTube from "../../assets/images/youtube.svg";
import SecondaryBtn from "../../components/buttons/SecondaryBtn";
import AuthenticationBtn from "../../components/buttons/AuthenticationBtn";

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
              <p className="new-arival-title heading-40">New Arrivals</p>
              <SecondaryBtn btnText={"More products"} arrowColor={"#121212"} />
            </div>
            <div className="new-arival-product-list-div">
              <div className="new-arival-product-card-parent">
                <div
                  className="new-arival-product-card common-centered-img-properties"
                  style={{
                    backgroundImage: `url(${cardImg1})`,
                  }}
                >
                  <div className="card-header">
                    <img src={newTag} alt="50% off" />
                    <img src={wishlistIcon} alt="wishlist-icon" />
                  </div>
                  <div className="card-btn-div">
                    <AuthenticationBtn text={"Add to cart"} />
                  </div>
                </div>
                <div className="product-description-div">
                  <img src={ratings} alt="ratings" className="ratings-img" />
                  <p className="product-name text-16-semi-bold">
                    Loveseat Sofa
                  </p>
                  <div className="product-pricing-div">
                    <p className="actual-product-pricing text-16-semi-bold">
                      $199.00
                    </p>
                    <p className="old-product-pricing text-16-regular">
                      $400.00
                    </p>
                  </div>
                </div>
              </div>
              <div className="new-arival-product-card-parent">
                <div
                  className="new-arival-product-card common-centered-img-properties"
                  style={{
                    backgroundImage: `url(${cardImg2})`,
                  }}
                >
                  <div className="card-header">
                    <img src={newTag} alt="new tag" />
                  </div>
                </div>
                <div className="product-description-div">
                  <img src={ratings} alt="ratings" className="ratings-img" />
                  <p className="product-name text-16-semi-bold">Table Lamp</p>
                  <div className="product-pricing-div">
                    <p className="actual-product-pricing text-16-semi-bold">
                      $24.99
                    </p>
                  </div>
                </div>
              </div>
              <div className="new-arival-product-card-parent">
                <div
                  className="new-arival-product-card common-centered-img-properties"
                  style={{
                    backgroundImage: `url(${cardImg3})`,
                  }}
                >
                  <div className="card-header">
                    <img src={newTag} alt="new tag" />
                  </div>
                </div>
                <div className="product-description-div">
                  <img src={ratings} alt="ratings" className="ratings-img" />
                  <p className="product-name text-16-semi-bold">
                    Beige Table Lamp
                  </p>
                  <div className="product-pricing-div">
                    <p className="actual-product-pricing text-16-semi-bold">
                      $24.99
                    </p>
                  </div>
                </div>
              </div>
              <div className="new-arival-product-card-parent">
                <div
                  className="new-arival-product-card common-centered-img-properties"
                  style={{
                    backgroundImage: `url(${cardImg4})`,
                  }}
                >
                  <div className="card-header">
                    <img src={newTag} alt="new tag" />
                  </div>
                </div>
                <div className="product-description-div">
                  <img src={ratings} alt="ratings" className="ratings-img" />
                  <p className="product-name text-16-semi-bold">
                    Bamboo basket
                  </p>
                  <div className="product-pricing-div">
                    <p className="actual-product-pricing text-16-semi-bold">
                      $24.99
                    </p>
                  </div>
                </div>
              </div>
              <div className="new-arival-product-card-parent">
                <div
                  className="new-arival-product-card common-centered-img-properties"
                  style={{
                    backgroundImage: `url(${cardImg2})`,
                  }}
                >
                  <div className="card-header">
                    <img src={newTag} alt="new tag" />
                  </div>
                </div>
                <div className="product-description-div">
                  <img src={ratings} alt="ratings" className="ratings-img" />
                  <p className="product-name text-16-semi-bold">Table Lamp</p>
                  <div className="product-pricing-div">
                    <p className="actual-product-pricing text-16-semi-bold">
                      $24.99
                    </p>
                  </div>
                </div>
              </div>
              <div className="new-arival-product-card-parent">
                <div
                  className="new-arival-product-card common-centered-img-properties"
                  style={{
                    backgroundImage: `url(${cardImg4})`,
                  }}
                >
                  <div className="card-header">
                    <img src={newTag} alt="new tag" />
                  </div>
                </div>
                <div className="product-description-div">
                  <img src={ratings} alt="ratings" className="ratings-img" />
                  <p className="product-name text-16-semi-bold">
                    Bamboo basket
                  </p>
                  <div className="product-pricing-div">
                    <p className="actual-product-pricing text-16-semi-bold">
                      $24.99
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="features-section">
        <div className="home-page-container parent-features-div">
          <div className="feature-card">
            <div className="feature-card-inside-div">
              <img
                className="feature-card-img"
                src={featureIcon1}
                alt="feature-icon"
              />
              <p className="feature-card-title heading-20">Free Shipping</p>
              <p className="feature-card-description text-14-regular">
                orders over $100
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inside-div">
              <img
                className="feature-card-img"
                src={featureIcon2}
                alt="feature-icon"
              />
              <p className="feature-card-title heading-20">Money-back</p>
              <p className="feature-card-description text-14-regular">
                30 days guarantee
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inside-div">
              <img
                className="feature-card-img"
                src={featureIcon3}
                alt="feature-icon"
              />
              <p className="feature-card-title heading-20">Secure Payments</p>
              <p className="feature-card-description text-14-regular">
                Secured by Stripe
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inside-div">
              <img
                className="feature-card-img"
                src={featureIcon4}
                alt="feature-icon"
              />
              <p className="feature-card-title heading-20">24/7 Support</p>
              <p className="feature-card-description text-14-regular">
                Phone and Email support
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="banner-ad-section">
        <div className="banner-img-div">
          <img src={bannerSofa} alt="banner-ad" />
        </div>
        <div>
          <div className="banner-desc-div">
            <p className="banner-sale heading-20">SALE UP TO 35% OFF</p>
            <p className="banner-title heading-40">
              HUNDREDS of New lower prices!
            </p>
            <p className="banner-description text-18-regular">
              It’s more affordable than ever to give every room in your home a
              stylish makeover
            </p>
            <SecondaryBtn btnText="Shop Now" arrowColor="#141718" />
          </div>
        </div>
      </section>
      <section className="article-section">
        <div className="home-page-container">
          <div className="new-arival-title-section">
            <p className="new-arival-title heading-40">Articles</p>
            <SecondaryBtn btnText={"More products"} arrowColor={"#121212"} />
          </div>
          <div className="article-cards-parent">
            <div className="article-card">
              <img
                className="article-card-img"
                src={articleImg1}
                alt="article-card"
              />
              <p className="article-card-title heading-16">
                7 ways to decor your home
              </p>
              <SecondaryBtn btnText="Read more" arrowColor="#141718" />
            </div>
            <div className="article-card">
              <img
                className="article-card-img"
                src={articleImg2}
                alt="article-card"
              />
              <p className="article-card-title heading-16">
                Kitchen organization
              </p>
              <SecondaryBtn btnText="Read more" arrowColor="#141718" />
            </div>
            <div className="article-card">
              <img
                className="article-card-img"
                src={articleImg3}
                alt="article-card"
              />
              <p className="article-card-title heading-16">
                Decor your bedroom
              </p>
              <SecondaryBtn btnText="Read more" arrowColor="#141718" />
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us-section">
        <div
          className="contact-us-container common-centered-img-properties"
          style={{
            backgroundImage: `url(${contactUsImg})`,
          }}
        >
          <div className="contact-us-desc">
            <p className="ad-title heading-40">Join Our Newsletter</p>
            <p className="ad-desc text-18-regular">
              Sign up for deals, new products and promotions
            </p>
            <div className="cu-email-input-div">
              <input className="cu-email-input" type="text" />
              <div className="cu-sign-up-div">
                <div className="email-img-div">
                  <img src={email} alt="email" />

                  <p className="input-text text-16-regular">Email address</p>
                </div>
                <p className="input-text cu-sign-up-text text-16-regular">
                  Signup
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="home-page-footer">
        <div className="home-page-container">
          <div className="hp-footer-menu">
            <div className="hp-footer-menu-left-div">
              <img src={companyWhiteLogo} alt="company-logo" />
              <div className="hp-footer-center-line"></div>
              <p className="hp-footer-store-name">Gift & Decoration Store</p>
            </div>
            <ul className="hp-footer-menu-right-div">
              <li className="hp-menu-li text-14-semi-bold">Home</li>
              <li className="hp-menu-li text-14-semi-bold">Shop</li>
              <li className="hp-menu-li text-14-semi-bold">Product</li>
              <li className="hp-menu-li text-14-semi-bold">Blog</li>
              <li className="hp-menu-li text-14-semi-bold">Contact Us</li>
            </ul>
          </div>
          <div className="hp-copyright-div">
            <div className="hp-copyright-left-div">
              <p className="copyright-text">
                Copyright © 2023 3legant. All rights reserved
              </p>
              <p className="privacy-policy">Privacy Policy</p>
              <p className="privacy-policy">Terms of Use</p>
            </div>
            <div className="hp-copyright-right-div">
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={youTube} alt="you tube" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage1;
