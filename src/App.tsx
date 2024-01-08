import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "./utils/motion";
import { styles } from "./styles";

import {
  About,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import FAQs from "./components/faqs/FAQs";
// import Login from "./components/login/Login";
// import { ProjectsShowCase } from "./pages";
// import AddProject from "./components/projects/AddProject";
import { AboutMe } from "./pages";
import { ContactMe } from "./pages";
import { PortfolioItems } from "./constants";
import PortfolioListItem from "./components/items/PortfolioListItems";

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
              {/* <Feedbacks /> */}
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
            <div className="bg-[#050816]">
              <motion.div variants={textVariant(1000)}>
                <h2
                  className={`${styles.sectionHeadText} pt-20 text-[#915EFF]`}
                >
                  Projects
                </h2>
              </motion.div>

              <div className="w-full flex ">
                <motion.p
                  variants={fadeIn("", "", 0.1, 1)}
                  className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
                >
                  Dive into a world of innovation and expertise through my
                  showcased projects, where real-world applications meet
                  technological mastery. This portfolio encapsulates the essence
                  of my skillset, highlighting the breadth of my problem-solving
                  capabilities and seamless integration of diverse technologies.
                  Each project is a testament to my proficiency in project
                  management and my passion for crafting solutions that matter.
                </motion.p>
              </div>
              {/* <ProjectsShowCase /> */}
              <div className="flex flex-col mt-20 lg:mt-28 overflow-x-hidden bg-[#050816]">
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
                        logoName={item.logoName}
                        titleFont={item.titleFont}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          }
        />
        {/* <Route path="/addproject" element={<AddProject />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
};

export default App;
