import { Route, Routes } from "react-router-dom";

import {
  About,
  // Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import FAQs from "./components/faqs/FAQs";
import Login from "./components/login/Login";
import { ProjectsShowCase } from "./pages";
import AddProject from "./components/projects/AddProject";
import { AboutMe } from "./pages";
import { ContactMe } from "./pages";
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import { PortfolioItems } from "./constants";
import PortfolioListItem from "./components/items/PortfolioListItems";
>>>>>>> Stashed changes
=======
import { PortfolioItems } from "./constants";
import PortfolioListItem from "./components/items/PortfolioListItems";
import { useState } from "react";
>>>>>>> d769d5aa976a1883e9374035fbefd6f646be1075

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <div className="relative z-0">
                {/* <Contact /> */}
                <FAQs />
                <StarsCanvas />
              </div>
            </div>
          }
        />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route
          path="/projects"
          element={
            <>
              <ProjectsShowCase />
              <div className="flex flex-col">
                <div className="flex xl:flex-row flex-col h-full">
                  <div className="flex flex-col">
                    {PortfolioItems.map((item, idx) => (
                      <PortfolioListItem
                        key={idx}
                        title={item.title}
                        description={item.description}
                        services={item.services}
                        techologies={item.techologies}
                        images={item.images}
                        isLast={idx >= PortfolioItems.length - 1}
                        year={item.year}
                        startYear={item.startYear}
                        subSystems={item.subSystems}
                        logo={item.logo}
                        titleFont={item.titleFont}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route path="/addproject" element={<AddProject />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
