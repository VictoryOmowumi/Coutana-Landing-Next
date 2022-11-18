import Image from "next/image";
export const Partner = () => {
  return (
    <div className="h-[60vh] w-full flex justify-center items-center bg-[url('../assets/banner-2.jpg')]  bg-cover bg-no-repeat bg-fixed bg-left-bottom sm:bg-contain  " >
      <div className=" mx-auto p-4" id="partner" >
        <div className=" col-span-1 text-center " id="partner-header">
          <p className=" text-6xl text-coutana-gray-200 ">
            Grow your brand today with{" "}
            <span className="text-[#fff]">Coutana</span>{" "}
          </p>
          <p className="text-coutana-gray-200 text-2xl ">
            With our platform, you can reach millions of customers and grow your
            business. <br /> <span className="text-[#ffffff]">Partner with us.</span>
            
          </p>
          
        </div>

        
          {/* <form action="" method="post">
            <div className="">
              <div className="">
                <div className="flex flex-col leading-8 ">
                  <label htmlFor="" className="ml-4 text-coutana-gray-100">
                    First Name:
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id=""
                    className="py-2 px-5 rounded shadow-slate-600 focus:outline-none focus-border-[#ab4fd3]"
                    required
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col leading-8">
                  <label htmlFor="" className="ml-4 text-coutana-gray-100">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id=""
                    className="py-2 px-5 rounded shadow-gray-300 focus:outline-none focus-border-[#ab4fd3]"
                    required
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col leading-8">
                  <label htmlFor="" className="ml-4 text-coutana-gray-100">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    className="py-2 px-5 rounded shadow-gray-300 focus:outline-none focus-border-[#ab4fd3]"
                    required
                    data-validation-required-message="Please enter your phone number"
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col leading-8">
                  <label htmlFor="" className="ml-4 text-coutana-gray-100">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="py-2 px-5 rounded shadow-gray-300 focus:outline-none focus-border-[#ab4fd3]"
                    required
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col leading-8">
                  <label htmlFor="" className="ml-4 text-coutana-gray-100">
                    Message:
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols=""
                    rows=""
                    className="w-full h-40 py-3 px-5 rounded-sm resize-none focus:outline-none focus-border-[#ab4fd3]"
                    placeholder="message. . ."
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
            </div>
            <div className="mt-8"></div>
            <button
              type="submit"
              className="py-4 px-10 rounded-sm text-[#fff] border border-[#fff] min-w-[5rem] bg-[#19063d]"
            >
              Send Message
            </button>
          </form> */}
       
      
        
      </div>
    </div>
  );
};
