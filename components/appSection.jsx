import Image from "next/image"
import { AppMockup, AppStore1, AppStore2 } from "../assets"
export const AppSection = () => {
  return (
    <div className=" mx-auto grid grid-cols-2 justify-start items-center bg-white">
        <div className="flex flex-col items-center col-span-1 ">
            <h1 className="text-7xl text-coutana-gray-200 font-semibold mb-2"><span className="">Coutana</span> App</h1>
            <p className=" text-2xl text-[#ab4fd3]">Available on the Google and Apple app store  </p>

            <div className=" flex mt-8 ">
            <button>
                <Image src={AppStore1} alt="app store" width={200} height={60} />
            </button>
            <button className="ml-4">
                <Image src={AppStore2} alt="app store" width={200} height={60} />
            </button>
              
            </div>
        </div>

        <div className="flex justify-center lg:col-span-1 lg:w-auto " >
            <Image src={AppMockup} alt="" width={500} className="justify-center"/>
        </div>
    </div>
  )
}

