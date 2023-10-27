// import { BallCanvas } from './canvas';
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-10 lg:mt-20 lg:mb-20 mb-10 mx-[10vw] lg:mx-[15vw]">
      {technologies.map((technology: any) => (
        <div className="w-28 h-28" key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <div className="flex justify-center items-center mx-auto">
            <img className="cursor-pointer" src={technology.icon} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
