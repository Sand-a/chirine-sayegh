import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";

const Home = ({ introData }) => {
  return (
    <>
      <HeroSection introData={introData} />
    </>
  );
};

export default Home;
