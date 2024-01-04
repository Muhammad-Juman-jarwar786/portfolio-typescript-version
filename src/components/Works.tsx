import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, world } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

import { ProjectShowCase } from "../constants";

// import { SectionWrapper } from '../hoc';
// import { projects } from '../constants';
// import { useState, useEffect } from "react";
// import DataBase from "../config/firebase";
// import { ref, get } from "firebase/database";

// const fetchProjectData = async () => {
//   try {
//     const dbRef = ref(DataBase, "projects");
//     const snapshot = await get(dbRef);
// const fetchProjectData = async () => {
//   try {
//     const dbRef = ref(DataBase, "projects");
//     const snapshot = await get(dbRef);

//     if (snapshot.exists()) {
//       return Object.values(snapshot.val());
//     } else {
//       console.log("No data available");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null;
//   }
// };
//     if (snapshot.exists()) {
//       return Object.values(snapshot.val());
//     } else {
//       console.log("No data available");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null;
//   }
// };

export const ProjectCard = ({
  index,
  name,
  description,
  tagname1,
  tagname2,
  tagname3,
  imageUrl,
  githubLink,
  websiteLink,
}: any) => {
  const TagColor1 = "blue-text-gradient";
  const TagColor2 = "green-text-gradient";
  const TagColor3 = "pink-text-gradient";

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={imageUrl}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute top-0 left-0 h-fit w-fit m-3">
            <div
              onClick={() => window.open(websiteLink, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={world}
                alt="preview"
                className="w-1/2 h-1/2 object-contain cursor-pointer"
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 h-fit w-fit m-3">
            <div
              onClick={() => window.open(githubLink, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <p className={`text-[14px] ${TagColor1}`}>#{tagname1}</p>
          <p className={`text-[14px] ${TagColor2}`}>#{tagname2}</p>
          <p className={`text-[14px] ${TagColor3}`}>#{tagname3}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  // const [projectsData, setProjectsData] = useState(ProjectShowCase);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data: any = await fetchProjectData();
  //     if (data) {
  //       setProjectsData(data);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <motion.div variants={textVariant(1000)}>
        {/* <p className={`${styles.sectionSubText} `}>My work</p> */}
        <h2 className={`${styles.sectionHeadText} mt-20`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 items-center justify-center">
        {Array.isArray(ProjectShowCase) && ProjectShowCase.length > 0 ? (
          ProjectShowCase.slice(0, 6).map((project: any, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </div>

      <div className="text-center sm-text-right mt-10 lg-mr-[12rem]">
        <Link to="/projects">
          <button className=" text-2xl text-yellow-400 transition-all duration-500 hover:scale-110 hover:text-yellow-500">
            View All <i className="ml-2 fa-light fa-arrow-right"></i>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Works;
