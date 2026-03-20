import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import HeroMove from "./HeroMove";

const Breadcrumb = ({ path = [], heading = "" }) => {
  return (
    <>
      <div className="bg-[#0A0F1C] min-h-[200px] md:min-h-[220px] w-full flex flex-col justify-center items-center text-white text-sm px-4 border-b border-white/5 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-[#FF4FA3] opacity-10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#FF2D8D] opacity-5 rounded-full blur-[80px] pointer-events-none" />

        {heading && (
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 capitalize text-center relative z-10">
            {heading}
          </h1>
        )}

        <div className="flex items-center space-x-1 text-base relative z-10">
          {path.map((item, index) => (
            <div key={index} className="flex items-center">
              <Link
                to={item.href}
                className={`capitalize transition-colors duration-200 ${
                  index === path.length - 1 
                    ? "text-[#FF4FA3]" 
                    : "text-gray-400 hover:text-[#FF2D8D]"
                }`}
              >
                {item.label}
              </Link>
              {index < path.length - 1 && (
                <IoIosArrowForward className="text-gray-500 mx-2 text-base" />
              )}
            </div>
          ))}
        </div>
      </div>

      <HeroMove />
    </>
  );
};

export default Breadcrumb;
