import React, { useRef } from "react";
import "./ProductDetails.css";
import HomePageHeader from "../../components/home-pages/header/HomePageHeader";
import NavigationMenu from "../../components/home-pages/navigation-menu/NavigationMenu";
import ContactUs from "../../layouts/contact-us/ContactUs";
import Footer from "../../components/home-pages/footer/Footer";

const ProductDetails = () => {
  const targetFadedBgRef = useRef(null);
  return (
    <div
      ref={targetFadedBgRef}
      style={{
        position: "relative",
      }}
      className="product-details-page"
    >
      <HomePageHeader
        bgColor={"#F3F5F7"}
        textColor={"#343839"}
        ntfText={"30% off storewide — Limited time!"}
      />
      <div className="home-page-container">
        <NavigationMenu targetFadedBgRef={targetFadedBgRef} />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default ProductDetails;
