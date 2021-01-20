import React from "react";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Certifications from "./Components/Certifications";
import Footer from "./Components/Footer";
import Works from "./Components/Works";
import Contact from "./Components/Contact";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Works />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
