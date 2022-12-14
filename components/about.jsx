import Image from "next/image"
import aboutImg from "../assets/about.png"
export const About = () => {
  return (
    <div className="container grid grid-cols-2 items-center m-10 mx-auto p-20 bg-[url('../assets/bg-image.svg')] bg-cover bg-no-repeat bg-left-bottom " >
        <div className="col-span-1">
            <Image src={aboutImg} alt="about" width={500} height={500} />
        </div>
        <div className=" col-span-1 flex flex-col items-center">
            <h1 className="font-bold text-2xl text-[#ab4fd3] ">COUTANA</h1>
            <h2 className="font-normal text-coutana-gray-100 text-center">
            Our Goal
            <hr className="my-2 mb-6 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
            </h2>
            <p className="text-coutana-gray-100 text-sm text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, suscipit libero, vitae atque inventore eligendi 
              reiciendis nihil quasi ullam eius qui, cum recusandae hic voluptate unde dolore soluta ex minima?
            </p>
            <br />
            <p className="text-coutana-gray-100 text-sm text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi non, 
                reprehenderit officiis neque soluta molestias voluptatibus quam sapiente. A, fugit!
            </p>
           
            
        </div>
    </div>
  )
}
