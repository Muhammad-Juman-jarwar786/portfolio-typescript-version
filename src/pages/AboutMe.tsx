import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { MyPic } from "../assets";
import HowWeDo from "../components/HowWeDo";

// Welcome to the world of a passionate front-end developer, on a journey to becoming a full-stack and MERN stack developer.

// Embarking on my professional journey as an intern at BitsPro, I have honed my skills and gained valuable experience in the dynamic field of software development. Over the course of three months, I was part of a team that delivered innovative solutions, tailored to meet unique client requirements and designed to streamline operations, increase efficiency, and maximize profits.

// As a front-end developer, I am adept at creating user-friendly interfaces with an emphasis on performance, responsiveness, and accessibility. I am proficient in a variety of technologies and tools, and I am always eager to learn and adapt to new ones.

// My journey towards becoming a full-stack and MERN stack developer is fueled by my passion for learning and my desire to create end-to-end solutions. I am currently expanding my skill set to include back-end technologies, database management, and cloud computing.

// Over the years, I have worked on a diverse range of projects, each providing me with new challenges and opportunities to learn. From creating interactive web applications to developing efficient algorithms, my goal is to deliver top-quality software solutions that help businesses achieve their goals.

// If you are looking for a dedicated and skilled developer who is constantly pushing the boundaries of technology to create innovative solutions, look no further. I am committed to excellence in everything I do and am eager to help your business achieve its goals. Contact me today to learn more about my services and how I can contribute to your success.

const AboutMe = () => {
  return (
    <>
      <div className=" pt-20 bg-[#050816]">
        <h2 className={`${styles.sectionHeadText} lg:text-8xl text-[#915EFF]`}>
          About Me
        </h2>
        <div className="ml-5 mr-5 md:ml-10 md:mr-60 lg:ml-20 lg:mr-[35rem]">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-10 lg:mt-20 text-yellow-500 text-left">
            What I do
          </h1>
          <div className="text-md lg:text-xl font-sans mt-3 lg:mt-10 text-gray-300 text-justify">
            <p>
              Welcome to my journey as a front-end developer, constantly
              evolving and transitioning towards becoming a full-stack and MERN
              stack developer.
            </p>
            <br />
            <p>
              <span className="text-yellow-500 text-lg lg:text-2xl">
                My Beginning:
              </span>{" "}
              My professional journey took off as an intern at BitsPro. This
              experience allowed me to dive deep into the world of software
              development, providing me with a strong foundation and a wealth of
              practical experience.
            </p>
            <br />
            <p>
              <span className="text-yellow-500 text-lg lg:text-2xl">
                My Expertise:
              </span>{" "}
              Specializing in creating user-friendly interfaces, I focus on
              performance, responsiveness, and accessibility. I am proficient in
              a variety of technologies and tools, always staying updated with
              the latest trends.
            </p>
            <br />
            <p>
              <span className="text-yellow-500 text-lg lg:text-2xl">
                My Transition:
              </span>{" "}
              Currently, I am expanding my horizons towards full-stack and MERN
              stack development. This includes mastering back-end technologies,
              database management, and cloud computing, enabling me to provide
              comprehensive solutions.
            </p>
            <br />
            <p>
              <span className="text-yellow-500 text-lg lg:text-2xl">
                My Projects:
              </span>{" "}
              I have had the opportunity to work on a diverse range of projects.
              Each project has been a new challenge, pushing me to learn and
              grow.
            </p>
            <br />
            <p>
              <span className="text-yellow-500 text-lg lg:text-2xl">
                My Commitment:
              </span>{" "}
              I am dedicated to delivering excellence in all my endeavors. If
              you’re seeking a passionate developer who is constantly pushing
              the boundaries of technology, feel free to reach out. Let’s create
              something amazing together!
            </p>
          </div>
        </div>
        {/* <div> */}
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-10 lg:mt-20 text-yellow-500 text-center">
          Way I do It
        </h1>
        <div className="w-full flex flex-col">
          <HowWeDo />
        </div>
        {/* </div> */}
        <h1>Who am I ?</h1>
        <div className="grid lg:grid-cols-3 gap-0 h-[77vh]">
          <motion.div variants={textVariant(1000)} className="lg:col-span-1">
            <div className="flex justify-center ">
              <img
                className="w-28 h-28 lg:w-64 lg:h-64 mt-5 lg:mb-8 mb-3 lg:mt-10 border-4 lg:border-8 border-[#915EFF] rounded-full"
                src={MyPic}
                alt=""
              />
            </div>
          </motion.div>
          <div className="w-full flex justify-center lg:col-span-2">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-secondary text-[17px] text-justify max-w-3xl leading-[30px]  mx-10"
            >
              Hello, I'm Muhammad Juman, a passionate software developer with a
              strong foundation in TypeScript and JavaScript. My expertise
              extends to leading-edge frameworks such as React, Node.js, and
              Three.js. With a proven track record of delivering innovative
              solutions, I thrive on tackling complex challenges and
              transforming them into efficient, scalable, and user-friendly
              applications.
              <br />
              <br />I take pride in my ability to adapt quickly to new
              technologies and my dedication to close collaboration with
              clients. Together, we can turn your ideas into tangible,
              real-world solutions that make a difference. Let's work hand in
              hand to bring your vision to life and achieve remarkable results.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
