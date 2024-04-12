import React from "react";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import About from "./Components/about/About";
import Experience from "./Components/experience/Experience";
import Services from "./Components/services/Services";
import Portfolio from "./Components/portfolio/Portfolio";
import Testimonial from "./Components/testimonials/Testimonial";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
