import { useState } from "react";
import { EarthCanvas } from "..";

export interface WantedListInterface {
  id: number;
  Title?: string;
  subHeading: string;
  details: { companyName: string; CEO: string; Established: string };
}

export const WantedList: WantedListInterface[] = [
  {
    id: 1,
    Title: "Construction manager",
    subHeading: "Some Text",
    details: {
      companyName: "BitsPro",
      CEO: "Rizwan Ali",
      Established: "2010",
    },
  },
  {
    id: 2,
    Title: "Manager",
    subHeading: "Some Text",
    details: {
      companyName: "BitsPro",
      CEO: "Rizwan Ali",
      Established: "2010",
    },
  },
  {
    id: 3,
    Title: "Chief planner",
    subHeading: "Some Text",
    details: {
      companyName: "BitsPro",
      CEO: "Rizwan Ali",
      Established: "2010",
    },
  },
  {
    id: 4,
    Title: "Planner",
    subHeading: "Some Text",
    details: {
      companyName: "BitsPro",
      CEO: "Rizwan Ali",
      Established: "2010",
    },
  },
  {
    id: 5,
    Title: "Planner",
    subHeading: "Some Text",
    details: {
      companyName: "BitsPro",
      CEO: "Rizwan Ali",
      Established: "2010",
    },
  },
  {
    id: 6,
    Title: "Planner",
    subHeading: "Some Text",
    details: {
      companyName: "BitsPro",
      CEO: "Rizwan Ali",
      Established: "2010",
    },
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
    <div className="grid md:flex w-full ">
      <div className="flex flex-col w-[95vw] md:w-[50vw] lg:mt-20 mt-10">
        {WantedList.map((item: any, idx: number) => (
          <div key={idx} className="group">
            <div
              key={item.id}
              className={`bg-tertiary text-white relative group-hover:bg-yellow-400 group-hover:text-gray-900 mb-1 mx-3 md:mx-8 p-5 cursor-pointer transition-all duration-500 ease-linear ${
                showDetails[item.id]
                  ? "bg-white h-[550px]"
                  : "bg-tertiary h-[150px]"
              }`}
              onClick={() => handleShowDetails(item.id)}
            >
              <div className="flex mx-5 justify-between items-center p-5">
                <div>
                  <div
                    className={`text-xl lg:text-2xl 2xl:text-3xl font-bold ${
                      showDetails[item.id] ? "text-gray-900" : ""
                    }`}
                  >
                    {item.Title && item.Title}
                  </div>
                  <div
                    className={`text-sm lg:text-lg 2xl:text-xl ${
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
                <div className={`col-span-5 lg:col-span-4 mt-10 mb-10`}>
                  <div
                    className={`grid grid-cols-3 gap-5 md:gap-7 lg:gap-10 xl:gap-14 2xl:gap-20 mx-5`}
                  >
                    <div
                      className={`${
                        showDetails[item.id] ? "text-gray-900" : ""
                      } col-span-1 border-t-2 py-3 md:py-5 lg:py-7 xl:py-10 2xl:py-10 border-gray-600 `}
                    >
                      Company Name
                    </div>
                    <div
                      className={`${
                        showDetails[item.id] ? "text-gray-900" : ""
                      } col-span-2 border-t-2 py-3 md:py-5 lg:py-7 xl:py-10 2xl:py-10 border-gray-600 `}
                    >
                      {item.details.companyName}
                    </div>
                  </div>
                  <div
                    className={`grid grid-cols-3 gap-5 md:gap-7 lg:gap-10 xl:gap-14 2xl:gap-20 mx-5`}
                  >
                    <div
                      className={`${
                        showDetails[item.id] ? "text-gray-900" : ""
                      } col-span-1 border-t-2 py-3 md:py-5 lg:py-7 xl:py-10 2xl:py-10 border-gray-600 `}
                    >
                      CEO
                    </div>
                    <div
                      className={`${
                        showDetails[item.id] ? "text-gray-900" : ""
                      } col-span-2 border-t-2 py-3 md:py-5 lg:py-7 xl:py-10 2xl:py-10 border-gray-600 `}
                    >
                      {item.details.CEO}
                    </div>
                  </div>
                  <div
                    className={`grid grid-cols-3 gap-5 md:gap-7 lg:gap-10 xl:gap-14 2xl:gap-20 mx-5`}
                  >
                    <div
                      className={`${
                        showDetails[item.id] ? "text-gray-900" : ""
                      } col-span-1 border-t-2 py-3 md:py-5 lg:py-7 xl:py-10 2xl:py-10 border-gray-600 border-b-2`}
                    >
                      Established
                    </div>
                    <div
                      className={`${
                        showDetails[item.id] ? "text-gray-900" : ""
                      } col-span-2 border-t-2 py-3 md:py-5 lg:py-7 xl:py-10 2xl:py-10 border-gray-600 border-b-2`}
                    >
                      {item.details.Established}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="w-[95vw] h-[80vw] md:w-[50vw] md:h-[40vw] md:mt-40">
        <EarthCanvas />
      </div>
    </div>
  );
};

export default FAQs;
