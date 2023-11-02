import { Route, Routes } from "react-router-dom";

import {
  About,
  Contact,
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
import { ProjectsShowCase, AboutMe, ContactMe } from "./pages";
import AddProject from "./components/projects/AddProject";


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
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg> */}
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
        <Route path="/projects" element={<ProjectsShowCase />} />
        <Route path="/addproject" element={<AddProject />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
