export const Partner = () => {
  return (
    <div className="">
      <div className="container grid grid-cols-2 justify-center items-center mx-auto max-w-screen-sm:grid-cols-1 " id="partner" >
        <div className=" col-span-1 " id="partner-header">
          <p className=" text-6xl  ">
            Grow your brand today with{" "}
            <span className="text-[#ab4fd3]">Coutana</span>{" "}
          </p>
          <p className="text-coutana-gray-100 text-md">
            With our platform, you can reach millions of customers and grow your
            business. <br /> <span className="text-[#ab4fd3]">Partner with us today</span>
            
          </p>
          
        </div>

        <div className=" col-span-1 p-4 ">
          <form action="" method="post">
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
          </form>
        </div>
      </div>
    </div>
  );
};
