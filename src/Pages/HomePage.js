import React from "react";
import ContactCard from "../Components/ContactCard/ContactCard";
import ContactForm from "../Components/ContactForm/ContactForm";
import Footer from "../Components/Footer/Footer";
import TopBar from "../Components/Header/TopBar";
import HeroSection from "../Components/Hero/Hero";

function HomePage() {
  return (
    <div>
      <TopBar />
      <HeroSection />
      <ContactForm />
      <ContactCard />
      <Footer />
    </div>
  );
}

export default HomePage;
