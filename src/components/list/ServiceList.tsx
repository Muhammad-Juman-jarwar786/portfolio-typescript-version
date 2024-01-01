import React from "react";
import { ServiceList as list } from "../../constants";

const ServiceList: React.FC<{ services: string[] }> = ({ services }) => {
  return (
    <div className="w-full">
      <h4 className="xl:text-xl text-gray-900 text-lg font-semibold xl:font-normal font-serif my-2 md:my-4">
        Services Used
      </h4>
      {list
        .filter((service) => services.indexOf(service.id) >= 0)
        .map((service, idx) => (
          <button
            key={idx}
            className={`flex w-full overflow-hidden rounded xl:rounded-none relative text-md bg-gray-900 text-white h-12 items-center ${
              idx < list.length - 1 ? "mb-2" : ""
            }
              `}
          >
            <i className={`w-16 fa-regular fa-sharp ${service.icon}`}></i>
            <div className="text-sm pr-4">{service.title}</div>
          </button>
        ))}
    </div>
  );
};

export default ServiceList;
