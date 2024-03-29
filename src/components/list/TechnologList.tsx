import React from "react";
import { TechnologyItems as list } from "../../constants";

const TechnologyList: React.FC<{ technologies: string[] }> = ({
  technologies,
}) => {
  return (
    <div className="w-full">
      <h4 className="xl:text-xl text-white text-lg font-semibold xl:font-normal font-serif my-2 md:my-4">
        Technical Details
      </h4>
      <div className="grid grid-cols-3 gap-1 mb-8 flex-wrap">
        {list
          .filter((technology) => technologies.indexOf(technology.icon) >= 0)
          .map((techology, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-gray-950 text-white p-[2px] lg:p-2 mr-2 mb-2 shadow-lg"
            >
              {techology.svg ? (
                <img
                  src={`${techology.svg}`}
                  className="h-[30px] object-contain"
                />
              ) : (
                <i className={`text-2xl fa-brands fa-${techology.icon}`}></i>
              )}
              <span className="text-sm text-yellow-400 ">
                {techology.title}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TechnologyList;
