import Image from "next/image";
import ActionButton from "../ActionButton/ActionButton";

const Banner = () => {
  return (
    <div className="px-6 mx-auto my-10 max-w-7xl sm:py-10 lg:px-8">
      <div className="grid grid-cols-1 my-16 lg:grid-cols-2">

        {/* COLUMN-1 */}
        <div className="mx-auto sm:mx-0">
          <div className="py-8 text-center lg:text-start"></div>
          <div className="py-3 text-center lg:text-start">
            <h1 className="text-6xl font-bold lg:text-80xl text-darkpurple">
              Democratizing access to investment
            </h1>
          </div>
          <div className="text-sm font-semibold text-center md:text-xl my-7 lg:text-start">
            <ActionButton>Start Investing</ActionButton>
          </div>
        </div>

        {/* COLUMN-2 */}
        <div className="hidden lg:block blur-[2px]">
          <svg className="w-full h-full">
            <defs>
              <linearGradient
                id="logo-gradient"
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
              >
                <stop offset="0%" stop-color="#B373F2">
                  <animate
                    attributeName="stop-color"
                    values="#B373F2; #F1CBA2; #B373F2"
                    dur="4s"
                    repeatCount="indefinite"
                  >
                  </animate>
                </stop>

                <stop offset="100%" stop-color="#F1CBA2">

                  <animate
                    attributeName="stop-color"
                    values="#01FF89; #B373F2; #01FF89"
                    dur="4s"
                    repeatCount="indefinite"
                  >
                  </animate>
                </stop>
              </linearGradient>
            </defs>
            <circle cx="300" cy="230" r="180" fill="url('#logo-gradient')" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
