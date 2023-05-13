import { Button } from "@/components/Button";
import Image from "next/image";

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
            <Button>Start Investing</Button>
          </div>
        </div>

        {/* COLUMN-2 */}

        <div className="hidden lg:block">
          <Image
            src="/images/banner/banner.svg"
            alt="hero-image"
            width={800}
            height={642}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
