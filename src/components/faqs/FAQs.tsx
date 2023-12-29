import { useState } from "react";
import { EarthCanvas } from "..";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

export interface WantedListInterface {
  id: number;
  Title?: string;
  subHeading: string;
  details: string;
}

export const WantedList: WantedListInterface[] = [
  {
    id: 1,
    Title: "Front-End Development",
    subHeading: "Q: What is your expertise in front-end development?",
    details:
      "A: I specialize in HTML, CSS, SASS, SCSS, JavaScript, and have a strong understanding of libraries like Bootstrap and Tailwind. I also have experience with creating animations for web interfaces.",
  },
  {
    id: 2,
    Title: "React Development",
    subHeading: "Q: What experience do you have with React?",
    details:
      "A: I have developed multiple projects using React, focusing on creating efficient and user-friendly interfaces. I am proficient in using hooks, context API, and other advanced React concepts.",
  },
  {
    id: 3,
    Title: "Versatility in JavaScript",
    subHeading:
      "Q: Can you work with other JavaScript frameworks or libraries?",
    details:
      "A: While my primary expertise lies in React, I am always open to learning and working with other JavaScript frameworks and libraries as per project requirements.",
  },
  {
    id: 4,
    Title: "Responsive Design",
    subHeading: "Q: How do you approach responsive design?",
    details:
      "A: I use a mobile-first approach for responsive design, utilizing CSS media queries and libraries like Bootstrap and Tailwind to ensure optimal viewing across various devices.",
  },
  {
    id: 5,
    Title: "Browser Compatibility",
    subHeading: "Q: How do you handle browser compatibility issues?",
    details:
      "A: I use tools like Babel and PostCSS to ensure my code is compatible with different browsers. I also test my applications on multiple browsers to ensure consistent performance.",
  },
  {
    id: 6,
    Title: "Testing and Debugging",
    subHeading: "Q: What is your process for testing and debugging code?",
    details:
      "A: I use a combination of unit testing, integration testing, and manual testing to ensure my code is robust and bug-free. I also use debugging tools within development environments to identify and resolve issues.",
  },
];

const FAQs = () => {
  const [showDetails, setShowDetails] = useState<any>({});
  const handleShowDetails = (userId: any) => {
    setShowDetails((prevState: any) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };
  return (
    <div className="grid lg:flex w-full ">
      <div className="flex flex-col mx-auto w-[95vw] lg:w-[50vw] mt-10 lg:mt-20">
        <motion.div variants={textVariant(1000)}>
          <h2 className={styles.sectionHeadText}>FAQs</h2>
        </motion.div>
        {WantedList.map((item: any, idx: number) => (
          <div key={idx} className="group">
            <div
              key={item.id}
              className={`bg-tertiary text-white relative group-hover:bg-yellow-400 group-hover:text-gray-900 mb-1 md:mx-8 p-5 cursor-pointer transition-all duration-500 ease-linear ${
                showDetails[item.id]
                  ? "bg-white h-auto"
                  : "bg-tertiary h-[110px] md:h-[110px] lg:h-[160px]"
              }`}
              onClick={() => handleShowDetails(item.id)}
            >
              <div className="flex lg:mx-5 justify-between items-center lg:p-5">
                <div>
                  <div
                    className={`text-xl lg:text-2xl 2xl:text-3xl font-bold ${
                      showDetails[item.id] ? "text-gray-900" : ""
                    }`}
                  >
                    {item.Title && item.Title}
                  </div>
                  <div
                    className={`text-sm lg:text-lg 2xl:text-xl mt-2 ${
                      showDetails[item.id] ? "text-gray-900" : ""
                    }`}
                  >
                    {item.subHeading}
                  </div>
                </div>
                <div className="">
                  <div
                    className={`${
                      showDetails[item.id]
                        ? "rotate-180 bg-gray-900 "
                        : "bg-white"
                    } w-5 h-[1px] transition-all duration-500 ease-in-out group-hover:bg-gray-900`}
                  />
                  <div
                    className={`${
                      showDetails[item.id]
                        ? "rotate-180 bg-gray-900"
                        : "rotate-90 bg-white"
                    } w-5 h-[1px] transition-all duration-500 ease-in-out mt-[-1px] group-hover:bg-gray-900`}
                  />
                </div>
              </div>
              {showDetails[item.id] && (
                <div
                  className={`${
                    showDetails[item.id] ? "text-gray-900" : ""
                  } mt-3 lg:ml-10 text-justify border-gray-600 co`}
                >
                  {item.details}
                </div>
                // <div className={`col-span-5 lg:col-span-4 mt-10 mb-10`}>
                //   <div
                //     className={`grid grid-cols-3 gap-5 md:gap-7 lg:gap-10 xl:gap-14 2xl:gap-20 mx-5`}
                //   >
                //     <div
                //       className={`${
                //         showDetails[item.id] ? "text-gray-900" : ""
                //       } col-span-1 border-t-2 py-3 md:py-5 lg:py-7 xl:py-10 2xl:py-10 border-gray-600 `}
                //     >
                //       Company Name
                //     </div>
                //     <div
                //       className={`${
                //         showDetails[item.id] ? "text-gray-900" : ""
                //       } col-span-2 border-t-2 py-3 md:py-5 lg:py-7 xl:py-10 2xl:py-10 border-gray-600 `}
                //     >
                //       {item.details.companyName}
                //     </div>
                //   </div>
                //   <div
                //     className={`grid grid-cols-3 gap-5 md:gap-7 lg:gap-10 xl:gap-14 2xl:gap-20 mx-5`}
                //   >
                //     <div
                //       className={`${
                //         showDetails[item.id] ? "text-gray-900" : ""
                //       } col-span-1 border-t-2 py-3 md:py-5 lg:py-7 xl:py-10 2xl:py-10 border-gray-600 `}
                //     >
                //       CEO
                //     </div>
                //     <div
                //       className={`${
                //         showDetails[item.id] ? "text-gray-900" : ""
                //       } col-span-2 border-t-2 py-3 md:py-5 lg:py-7 xl:py-10 2xl:py-10 border-gray-600 `}
                //     >
                //       {item.details.CEO}
                //     </div>
                //   </div>
                //   <div
                //     className={`grid grid-cols-3 gap-5 md:gap-7 lg:gap-10 xl:gap-14 2xl:gap-20 mx-5`}
                //   >
                //     <div
                //       className={`${
                //         showDetails[item.id] ? "text-gray-900" : ""
                //       } col-span-1 border-t-2 py-3 md:py-5 lg:py-7 xl:py-10 2xl:py-10 border-gray-600 border-b-2`}
                //     >
                //       Established
                //     </div>
                //     <div
                //       className={`${
                //         showDetails[item.id] ? "text-gray-900" : ""
                //       } col-span-2 border-t-2 py-3 md:py-5 lg:py-7 xl:py-10 2xl:py-10 border-gray-600 border-b-2`}
                //     >
                //       {item.details.Established}
                //     </div>
                //   </div>
                // </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="w-[95vw] mx-auto h-[80vw] md:w-[50vw] md:h-auto md:mt-20">
        <EarthCanvas />
      </div>
    </div>
  );
};

export default FAQs;
