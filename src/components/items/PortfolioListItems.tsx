import { Sticky, StickyContainer } from "react-sticky";
import { PortfolioListItem } from "../../constants";
import { ServiceList, TechnologyList } from "../list";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PortfolioListItems: React.FC<PortfolioListItem> = ({
  images,
  title,
  year,
  startYear,
  description,
  services,
  techologies,
  subSystems,
  isLast = false,
  isSubSystem = false,
  logo,
  logoName,
  titleFont,
  isHomePage = false,
}) => {
  return (
    <div
      className={`xl:flex-1 ${
        !isLast && !isSubSystem ? "xl:mb-40" : ""
      } lg:mb-8 `}
    >
      {!isSubSystem && (
        <h2
          className={`${
            titleFont || "text-10vw"
          } font-serif text-[5vw] text-right text-black -mb-[4vw] -mr-2 font-bold xl:relative z-100 xl:pt-0 pb-0`}
        >
          {title}
        </h2>
      )}
      <StickyContainer
        className={`flex ${!isSubSystem ? "bg-white" : ""} ${
          !isHomePage && !isSubSystem ? "p-8" : ""
        } `}
      >
        {!isSubSystem && !isHomePage && (
          <div
            className="hidden lg:flex h-auto sm:h-auto bg-white pr-8 overflow-hidden lg:relative"
            style={{ width: "calc(300px + 2rem)" }}
          >
            <Sticky topOffset={20} bottomOffset={-100}>
              {({ style }) => (
                <div
                  style={{ ...style, width: 300 }}
                  className="h-full flex flex-col"
                >
                  {logo && (
                    <div className="text-gray-900 flex items-center justify-center">
                      <img src={logo} className="w-9 h-9 mb-8 mt-2" />
                      <div className="-mt-6 font-semibold text-[2vw]">
                        {logoName}
                      </div>
                    </div>
                  )}
                  <div className="w-full">
                    <h4 className="xl:text-xl text-gray-900 text-xs font-semibold xl:font-normal font-serif">
                      {startYear ? "Partnered Since" : "Year"}
                    </h4>
                    <h3 className="text-4vw text-gray-900 font-mono font-black mb-8 border-2 border-gray-900">
                      {startYear || year}
                    </h3>
                  </div>
                  <TechnologyList technologies={techologies} />
                  <ServiceList services={services} />
                </div>
              )}
            </Sticky>
          </div>
        )}
        <div className="protfolio-slider cursor-pointer flex-1 h-full relative">
          <Carousel
            showIndicators={false}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            autoPlay
            infiniteLoop
            interval={6000}
            stopOnHover={false}
            className="shadow-lg"
          >
            {images.map((image, index) => (
              <>
                {!image.title ? (
                  <img
                    key={index}
                    className={`w-full z-10 object-contain object-center h-full ${
                      isSubSystem && "h-full lg:h-60 lg:object-cover"
                    }`}
                    src={image.url}
                  />
                ) : (
                  <div className="grid grid-cols-3 gap-5">
                    <img
                      key={index}
                      className={`m-2 overflow-hidden rounded-2xl w-auto object-contain object-center h-full lg:h-60 lg:object-cover ${
                        isSubSystem ? "max-h-80" : ""
                      }`}
                      style={{ border: "8px solid #3f4048" }}
                      src={image.url}
                    />
                    <h6 className="text-xl md:text-2xl lg:text-4xl font-serif font-black text-left flex items-center col-span-2">
                      {image.title}
                    </h6>
                  </div>
                )}
              </>
            ))}
          </Carousel>
          {!isHomePage && <div style={{ clear: "both" }}>&nbsp;</div>}
          {isSubSystem && (
            <h2 className="text-lg text-gray-900 tracking-wider lg:text-[2vw] font-bold">
              {title}
            </h2>
          )}
          {!isHomePage && (
            <div
              className=" text-md md:text-lg leading-[6vw] text-justify lg:leading-[2vw] tracking-wider lg:text-[1.5vw] font-mono lg:text-left overflow-hidden w-full h-auto left-0 bottom-0 z-10 p-4 pl-0"
              style={{
                background: `rgba(255,255,255,0.9)`,
                // lineHeight: '2vw',
              }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
          {subSystems && (
            <>
              <div className="text-[3vw] text-gray-900 lg:text-6vw font-bold drop-shadow-lg mb-4 mt-5 lg:mt-16">
                Subsystems
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {subSystems.map((subSystem) => (
                  <PortfolioListItems {...subSystem} isSubSystem />
                ))}
              </div>
            </>
          )}
        </div>
      </StickyContainer>
      {!isSubSystem && !isHomePage && (
        <div className="h-full flex flex-col bg-white px-5 lg:hidden mb-8 pb-3">
          {/* <div className="flex gap-x-4"> */}
          <div className="flex flex-col w-full mt-5">
            {logo && (
              <div className="text-gray-900 flex items-center justify-center">
                <img src={logo} className="w-9 h-9 mb-8 " />
                <div className="-mt-6 font-semibold text-[4vw]">{logoName}</div>
              </div>
            )}
            <div className="w-full mt-2">
              <h4 className=" text-sm text-gray-900 font-semibold xl:font-normal font-serif">
                {startYear ? "Partnered Since" : "Year"}
              </h4>
              <h3 className="text-4vw text-gray-900 font-mono font-black mb-4 mt-2 border-2 border-gray-900">
                {startYear || year}
              </h3>
            </div>
          </div>
          {/* </div> */}
          <div className="mt-3">
            <TechnologyList technologies={techologies} />
          </div>
          <ServiceList services={services} />
        </div>
      )}
    </div>
  );
};

export default PortfolioListItems;
