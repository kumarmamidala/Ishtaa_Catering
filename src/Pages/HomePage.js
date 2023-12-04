import React from "react";
import Foodistan from "../Components/Foodistan/Foodistan";

import Footer from "../Components/Footer/Footer";
import TopBar from "../Components/Header/TopBar";
import Hero from "../Components/Hero/Hero";

import PopUp from "../Components/PopUp/PopUp";

function HomePage() {
  return (
    <div>
      <TopBar />
      <Foodistan />
      <Footer />
    </div>
  );
}

export default HomePage;
