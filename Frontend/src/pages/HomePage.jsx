import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturedListings from "../components/home/FeaturedListings";
import CategoriesSection from "../components/home/CategoriesSection";
import ListingsPreview from "../components/home/ListingsPreview";
import TrustSection from "../components/home/TrustSection";
import HostCTASection from "../components/home/HostCTASection";

const HomePage = () => {
  return (
    <main className="home-page">
      <HeroSection />
      <FeaturedListings />
      <CategoriesSection />
      <ListingsPreview />
      <TrustSection />
      <HostCTASection />
    </main>
  );
};

export default HomePage;
