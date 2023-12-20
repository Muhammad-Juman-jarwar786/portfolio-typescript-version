import { AboutUsFirstSliderCard } from "../constants";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef, useState } from "react";

// const SliderImages: React.FC<{ image: string; title: string }> = ({
//   image,
//   title,
// }) => {
//   return (
//     <img
//       src={image}
//       alt={title}
//       className="w-full object-contain object-center"
//     />
//   );
// };

// const HowWeDo: React.FC = () => {
//   const imageSliderRef = useRef<Slider | null>(null);
//   const indexSliderRef = useRef<Slider | null>(null);
//   const [tracker, setTracker] = useState<number>(0);
//   const updateTracker = (id: number) => {
//     if (imageSliderRef.current && indexSliderRef.current) {
//       indexSliderRef.current.slickGoTo(id);
//       imageSliderRef.current.slickGoTo(id);
//       setTracker(id);
//     }
//   };
//   const imageSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     swipe: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//     autoplay: true,
//     autoplaySpeed: 6000,
//     pauseOnHover: false,
//     arrows: false,
//     cssEase: "ease-in-out",
//   };
//   // const indexSettings = {
//   //   dots: false,
//   //   fade: true,
//   //   infinite: true,
//   //   speed: 500,
//   //   slidesToShow: 1,
//   //   slidesToScroll: 1,
//   //   arrows: false,
//   //   autoplay: true,
//   //   autoplaySpeed: 6000,
//   //   swipe: false,
//   //   pauseOnHover: false,
//   //   cssEase: "ease-in-out",
//   // };
//   return (
//     <div className="h-[80vh] w-full min-h-[850px] relative overflow-hidden text-gray-900 text-9xl xl:text-[12vw]">
//       <Slider
//         {...imageSettings}
//         className="w-[100dvw] md:w-[75dvw] lg:w-[60dvw] xl:w-[43dvw]"
//         ref={imageSliderRef}
//       >
//         {AboutUsFirstSliderCard.map((item, idx) => (
//           <div key={idx}>
//             <SliderImages image={item.image} title={item.title} />
//           </div>
//         ))}
//       </Slider>
//       <div className="absolute bottom-0 right-2.5 md:bottom-10 md:right-10 lg:bottom-[12rem] xl:bottom-[22%] lg:right-20 xl:right-[18%] 2xl:right-[20%] bg-[#2C2C2B] text-white w-[95dvw] md:w-[28rem] lg:w-[25rem] xl:lg:w-[30rem] 2xl:w-[769px] h-[21rem] md:h-[15rem] lg:h-[20rem] xl:h-[25rem] 2xl:h-[31.5rem] rounded-lg lg:rounded-none">
//         <Carousel
//           className=""
//           selectedItem={tracker}
//           showIndicators={false}
//           showThumbs={false}
//           showArrows={false}
//           showStatus={false}
//           swipeable={false}
//           autoPlay
//           infiniteLoop
//           interval={6000}
//           stopOnHover={false}
//         >
//           {AboutUsFirstSliderCard.map((item, idx) => (
//             <div
//               key={idx}
//               className="text-left flex flex-col gap-5 lg:gap-8 xl:gap-12 2xl:gap-[95px] px-2.5 lg:px-5 xl:px-8 2xl:px-[49px] pt-4 lg:pt-8 xl:pt-12 2xl:pt-[90px]"
//             >
//               <div className="text-gray-600 text-sm lg:text-xs xl:text-sm 2xl:text-[20px] font-medium flex gap-5">
//                 <p
//                   className={`cursor-pointer ${
//                     item.title === "Overview" && "text-white font-semibold"
//                   }`}
//                   onClick={() => {
//                     updateTracker(0);
//                   }}
//                 >
//                   01 overview
//                 </p>
//                 <p
//                   className={`cursor-pointer ${
//                     item.title === "Specialties" && "text-white font-semibold"
//                   }`}
//                   onClick={() => {
//                     updateTracker(1);
//                   }}
//                 >
//                   02 specialties
//                 </p>
//                 <p
//                   className={`cursor-pointer ${
//                     item.title === "Locations" && "text-white font-semibold"
//                   }`}
//                 >
//                   03 locations
//                 </p>
//               </div>
//               <div className="flex flex-col gap-2 lg:gap-4 2xl:gap-[26px]">
//                 <h1 className="text-lg md:text-xl xl:text-3xl 2xl:text-[32px] font-medium tracking-wide">
//                   {item.title}
//                 </h1>
//                 <div className="text-sm md:text-xs xl:text-sm 2xl:text-[18px] flex flex-col gap-1 lg:gap-3 2xl:gap-5 tracking-wide 2xl:w-[586px] 2xl:h-[212px]">
//                   <p>{item.paragraphs[0]}</p>
//                   {item.paragraphs[1] && <p>{item.paragraphs[1]}</p>}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default HowWeDo;
const SliderImages: React.FC<{ image: string; title: string }> = ({
  image,
  title,
}) => {
  return (
    <img
      src={image}
      alt={title}
      className="w-full object-contain object-center"
    />
  );
};

const HowWeDo: React.FC = () => {
  const imageSliderRef = useRef<Slider | null>(null);
  const indexSliderRef = useRef<Slider | null>(null);
  const [tracker, setTracker] = useState<number>(0);
  const updateTracker = (id: number) => {
    if (imageSliderRef.current && indexSliderRef.current) {
      indexSliderRef.current.slickGoTo(id);
      imageSliderRef.current.slickGoTo(id);
      setTracker(id);
    }
  };
  const imageSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipe: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    arrows: false,
    cssEase: "ease-in-out",
  };
  // const indexSettings = {
  //   dots: false,
  //   fade: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   autoplay: true,
  //   autoplaySpeed: 6000,
  //   swipe: false,
  //   pauseOnHover: false,
  //   cssEase: "ease-in-out",
  // };
  return (
    <div className="h-[80vh] w-full min-h-[850px] relative overflow-hidden text-gray-900 text-9xl xl:text-[12vw]">
      <Slider
        {...imageSettings}
        className="w-[100dvw] md:w-[75dvw] lg:w-[60dvw] xl:w-[43dvw]"
        ref={imageSliderRef}
      >
        {AboutUsFirstSliderCard.map((item, idx) => (
          <div key={idx}>
            <SliderImages image={item.image} title={item.title} />
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-0 right-2.5 md:bottom-10 md:right-10 lg:bottom-[12rem] xl:bottom-[22%] lg:right-20 xl:right-[18%] 2xl:right-[20%] bg-[#2C2C2B] text-white w-[95dvw] md:w-[28rem] lg:w-[25rem] xl:lg:w-[30rem] 2xl:w-[769px] h-[21rem] md:h-[15rem] lg:h-[20rem] xl:h-[25rem] 2xl:h-[31.5rem] rounded-lg lg:rounded-none">
        <Carousel
          className=""
          selectedItem={tracker}
          showIndicators={false}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          swipeable={false}
          autoPlay
          infiniteLoop
          interval={6000}
          stopOnHover={false}
        >
          {AboutUsFirstSliderCard.map((item, idx) => (
            <div
              key={idx}
              className="text-left flex flex-col gap-5 lg:gap-8 xl:gap-12 2xl:gap-[95px] px-2.5 lg:px-5 xl:px-8 2xl:px-[49px] pt-4 lg:pt-8 xl:pt-12 2xl:pt-[90px]"
            >
              <div className="text-gray-600 text-sm lg:text-xs xl:text-sm 2xl:text-[20px] font-medium flex gap-5">
                <p
                  className={`cursor-pointer ${
                    item.title === "Overview" && "text-white font-semibold"
                  }`}
                  onClick={() => {
                    updateTracker(0);
                  }}
                >
                  01 overview
                </p>
                <p
                  className={`cursor-pointer ${
                    item.title === "Specialties" && "text-white font-semibold"
                  }`}
                  onClick={() => {
                    updateTracker(1);
                  }}
                >
                  02 specialties
                </p>
                <p
                  className={`cursor-pointer ${
                    item.title === "Locations" && "text-white font-semibold"
                  }`}
                >
                  03 locations
                </p>
              </div>
              <div className="flex flex-col gap-2 lg:gap-4 2xl:gap-[26px]">
                <h1 className="text-lg md:text-xl xl:text-3xl 2xl:text-[32px] font-medium tracking-wide">
                  {item.title}
                </h1>
                <div className="text-sm md:text-xs xl:text-sm 2xl:text-[18px] flex flex-col gap-1 lg:gap-3 2xl:gap-5 tracking-wide 2xl:w-[586px] 2xl:h-[212px]">
                  <p>{item.paragraphs[0]}</p>
                  {item.paragraphs[1] && <p>{item.paragraphs[1]}</p>}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HowWeDo;
