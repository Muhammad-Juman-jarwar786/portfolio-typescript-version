// import { BallCanvas } from './canvas';
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  // slidesToScroll: ,
  autoplay: true,
  DelayNode: 0,
  pauseOnHover: false,
  pauseOnFocus: false,
  swipeToSlide: true,
  speed: 1000,
  autoplaySpeed: 1000,
  cssEase: "linear",
};

const Tech = () => {
  return (
    <div className="mt-10 overflow-x-hidden">
      <Slider {...settings}>
        {technologies.map((technology: any) => (
          <div className="w-28 h-28" key={technology.name}>
            {/* <BallCanvas icon={technology.icon} /> */}
            <div className="flex justify-center items-center mx-auto">
              <img
                className="cursor-pointer w-10 h-auto md:w-28 "
                src={technology.icon}
                alt=""
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SectionWrapper(Tech, "");
