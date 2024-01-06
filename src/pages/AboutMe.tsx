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
        <div className="  lg:mx-60 mx-10 md:mx-36 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-10 lg:mt-20 text-yellow-500 text-center">
            What I do ?
          </h1>
          <div className="text-md lg:text-xl font-sans mt-3 lg:mt-10 text-gray-300 text-justify">
            <p>
              As a MERN stack and front-end developer, I am responsible for
              creating dynamic and interactive web applications using MongoDB,
              ExpressJs, ReactJs, and NodeJs. I use{" "}
              <span className="text-yellow-400 text-bold">MongoDB</span> as my
              database to store and retrieve data in JSON format,{" "}
              <span className="text-yellow-400 text-bold">Express</span> as my
              web framework to handle server-side logic and routing,{" "}
              <span className="text-yellow-400 text-bold">React</span> as my UI
              library to build user interfaces with components and state
              management, and{" "}
              <span className="text-yellow-400 text-bold">Node.js</span> as my
              runtime environment to execute JavaScript code on the server. I
              also use various tools and libraries to enhance my development
              process, such as Webpack, Babel,{" "}
              <span className="text-yellow-400 text-bold">Redux</span>,{" "}
              <span className="text-yellow-400 text-bold">Axios</span>,{" "}
              <span className="text-yellow-400 text-bold">Mongoose</span>,{" "}
              <span className="text-yellow-400 text-bold">Jest</span>, and more.
              I write clean, modular, and testable code that follows best
              practices and industry standards. I collaborate with other
              developers, designers, and stakeholders to deliver high-quality
              products that meet the client’s needs and expectations. I am
              always learning new skills and technologies to keep up with the
              latest trends and innovations in web development. and I am always
              Open to help{" "}
              <span className="text-yellow-400 text-bold">Entrepreneurs</span>{" "}
              and Startups to build their products.
            </p>
          </div>
        </div>
        {/* <div> */}
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-10 lg:mt-20 text-yellow-500 text-center">
          Way I do It
        </h1>
        <div className="w-full flex flex-col  mt-5 lg:mt-10 overflow-hidden">
          <HowWeDo />
        </div>
        {/* </div> */}
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-10 lg:mt-20 xl:-mt-10 2xl:mt-10 text-yellow-500 text-center">
          Who am I ?
        </h1>
        <div className="grid lg:grid-cols-3 gap-0 h-[77dvh] bg-[#050816] sm:h-[50vh] md:h-[50dvh] xl:h-[30dvh] mt-2 lg:mt-5">
          <motion.div
            variants={textVariant(1000)}
            className="lg:col-span-1 bg-[#050816]"
          >
            <div className="flex justify-center ">
              <img
                className="w-28 h-28 lg:w-64 lg:h-64 mt-5 lg:mb-8 mb-3 lg:mt-10 border-8 object-cover lg:border-spacing-7 border-[#ffffff] rounded-full"
                src={MyPic}
                alt=""
              />
            </div>
          </motion.div>
          <div className="w-full flex justify-center bg-[#050816] lg:col-span-2">
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
