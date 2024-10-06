import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Model from "../components/3Dmodel";
import Insigt from "../components/Insigt";
import InnerSight from "../components/InnerSight";
import Footer from "../components/Footer";
import Features from "../components/feature";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Model />
      <Insigt />
      <InnerSight />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
