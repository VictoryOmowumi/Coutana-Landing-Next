import { useState } from "react";
import { Icon } from "@iconify/react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <div>
      <div class="bg-gray-100">
        <div class="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
          <div class="p-5 sm:w-4/12">
            <h3 class="font-bold text-2xl text-indigo-600 mb-4">COUTANA</h3>

            <div class="md:flex grid grid-cols-2 text-gray-500 uppercase text-sm">
              <a href="#" class="mr-2 hover:text-indigo-600">
                Home
              </a>
              <a href="#" class="mr-2 hover:text-indigo-600">
                About Us
              </a>
              <a href="#" class="mr-2 hover:text-indigo-600">
                Contact Us
              </a>
              <a href="#" class="mr-2 hover:text-indigo-600">
                Support Us
              </a>
            </div>
          </div>
          <div class="p-5 sm:w-4/12">
            <h3 class="font-medium text-lg text-indigo-600 mb-4">
              Join wait list
            </h3>
            <form class="mt-4">
              <input
                class="border bg-[#3a3a50] rounded w-full px-4 py-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="username@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </form>
          </div>
          <div class="p-5 sm:w-4/12">
            <h3 class="font-medium text-lg text-indigo-600 mb-4">
              Follow Us On
            </h3>
            <div class="md:flex grid grid-cols-2 gap-2 text-gray-500 uppercase text-sm">
              <a
                href="#"
                class="mr-2 hover:text-indigo-600 shadow-md p-2 rounded-md"
              >
                <Icon icon="ri:instagram-fill" width="30" color="#19063d" />
              </a>
              <a
                href="#"
                class="mr-2 hover:text-indigo-600 shadow-md p-2 rounded-md"
              >
                <Icon icon="ri:facebook-fill" width="30" color="#19063d" />
              </a>
              <a
                href="#"
                class="mr-2 hover:text-indigo-600 shadow-md p-2 rounded-md"
              >
                <Icon icon="ri:twitter-fill" width="30" color="#19063d" />
              </a>
            </div>
          </div>
        </div>
        <div class="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
          <p>© Copyright 2020. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};
