import Image from "next/image";
import { HeroImg, LoveIcon, GroupImg } from "../assets";


export const Hero = () => {
  return (
    <div className="bg-[url('../assets/bg-image.svg')]  md:flex justify-between items-center w-11/12 mx-auto md:my-6 px-6 my-5 md:h-[65vh]" id="hero">
      <div className="md:w-3/4 text-center md:text-left text-[#19063d]">
        <p>Trendy Collection's</p>
        <div className="relative">
          <h1 className="md:text-7xl text-4xl font-bold">
            Building <br className="hidden md:block" />a better you
          </h1>
          <div className="absolute md:top-4 md:left-72 top-10 right-16">
            <Image src={LoveIcon} alt="love icon" width={50} height={50} />
          </div>
        </div>

        <p className="my-3 font-medium">
          Anyone can beat you but no one can beat your outfit as long as you
          shop on Coutana
        </p>
        <div className="my-6 flex md:flex-row flex-col items-center gap-4">
          <button className="bg-gradient-to-r from-[#A766E1] via-[#CA6CCA] to-[#E572B8] py-4 px-10 rounded-full text-white min-w-[12rem]">
            Start shopping
          </button>
          <button className="py-4 px-10 rounded-full text-[#E572B8] border border-[#E572B8] min-w-[12rem]">
            See More
          </button>
        </div>
      </div>
      <div>
        <div className="relative">
          <Image src={HeroImg} alt="hero" width={1000} height={2500} />
        </div>
        <Image
          src={GroupImg}
          alt="hero"
          className="absolute md:w-56 w-32 mx-auto md:right-64 md:bottom-44"
        />
      </div>
    </div>
  );
};
