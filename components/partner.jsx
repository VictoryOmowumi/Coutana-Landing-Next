import Image from "next/image";
export const Partner = () => {
  return (
    <div className="h-[60vh] w-full flex justify-center items-center bg-[url('../assets/banner-2.jpg')]  bg-cover bg-no-repeat bg-center   " >
      <div className=" mx-auto p-4" id="partner" >
        <div className=" col-span-1 text-center " id="partner-header">
          <p className=" text-6xl text-coutana-gray-200 ">
            Grow your brand today with{" "}
            <span className="text-[#fff]">Coutana</span>{" "}
          </p>
          <p className="text-coutana-gray-200 text-2xl ">
            With our platform, you can reach millions of customers and grow your
            business. 
            
          </p>
          <p className="mt-4"><span className="text-[#ffffff]">Partner with us.</span></p>
        </div>

        
        
      </div>
    </div>
  );
};
