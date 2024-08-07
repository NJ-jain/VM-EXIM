import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import ImageTabs from "./components/tab";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
console.log(landingPageData, "landingPageData.categorize")
  return (
    <Router>
      <div style={{ overflowX: "hidden", position: "relative", width: "100vw", height: "100vh" }}>
        <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        {/* <Gallery data={landingPageData.Gallery} /> */}
        <ImageTabs imageObject ={landingPageData.categorize}/>
        <Contact data={landingPageData.Contact} />
      </div>
    </Router>
  );
};

export default App;
