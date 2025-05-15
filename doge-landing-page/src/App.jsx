import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import DogBreeds from "./components/DogBreeds";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Adoption from "./components/Adoption";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <Hero />
      <Benefits />
      <DogBreeds />
      <Gallery />
      <Testimonials />
      <Adoption />
      <Footer />
    </div>
  );
};

export default App;
