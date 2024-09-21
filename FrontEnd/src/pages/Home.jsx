import React from "react";

import HeroSection from "../Components/HeroSection.jsx";
import BrandLogo from "../Components/BrandLogo.jsx";
import Footer from "../Components/Footer.jsx";
import ShopCategory from "../Components/shopCategory.jsx";

function Home() {
  return (
    <div>
      <HeroSection />
      <BrandLogo />
      <ShopCategory />
      <Footer />
    </div>
  );
}

export default Home;
