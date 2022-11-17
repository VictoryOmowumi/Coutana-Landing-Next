import Image from "next/image"
import aboutImg from "../assets/about.png"
export const About = () => {
  return (
    <div className="grid grid-cols-2 items-center m-10 mx-auto p-20 bg-[url('../assets/bg-image.svg')] bg-cover bg-no-repeat bg-left-bottom md " id="about" >
        <div className="col-span-1 flex justify-end items-end about-img" width={500} height={500}>
            <Image src={aboutImg} alt="about"   />
        </div>
        
        <div className=" col-span-1 flex flex-col items-center p-10">
        <h2 className="font-normal text-coutana-gray-100 text-center">About Us</h2>
            <h1 className="font-bold text-4xl text-[#ab4fd3] ">COUTANA</h1>
            <hr className="my-2 mb-6 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />

            <p className="text-coutana-gray-100 text-sm ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, suscipit libero, vitae atque inventore eligendi 
              reiciendis nihil quasi ullam eius qui, cum recusandae hic voluptate unde dolore soluta ex minima?
            </p>
            
            <p className="text-coutana-gray-100 text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi non, 
                reprehenderit officiis neque soluta molestias voluptatibus quam sapiente. A, fugit!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, libero.
            </p>
           
            
        </div>
    </div>
  )
}
6