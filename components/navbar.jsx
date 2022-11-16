export const Navbar = () => {
  return (
    <header className="md:h-20">
      <nav className="flex flex-wrap items-center justify-between w-full h-full md:w-11/12 py-6 px-4 mx-auto text-lg text-gray-700">
        <div>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="17"
              viewBox="0 0 120 17"
              fill="none"
            >
              <path
                d="M8.954 16.242C7.766 16.242 6.666 16.044 5.654 15.648C4.642 15.2373 3.75467 14.6727 2.992 13.954C2.244 13.2207 1.65733 12.3627 1.232 11.38C0.821333 10.3973 0.616 9.334 0.616 8.19C0.616 7.03133 0.821333 5.968 1.232 5C1.65733 4.01733 2.244 3.16667 2.992 2.448C3.75467 1.72933 4.63467 1.16467 5.632 0.754C6.644 0.343333 7.73667 0.138 8.91 0.138C10.142 0.138 11.2493 0.336 12.232 0.732C13.2147 1.11333 14.08 1.64867 14.828 2.338L12.188 4.978C11.8213 4.56733 11.3667 4.24467 10.824 4.01C10.2813 3.77533 9.64333 3.658 8.91 3.658C8.27933 3.658 7.7 3.76067 7.172 3.966C6.65867 4.17133 6.21133 4.47933 5.83 4.89C5.44867 5.286 5.148 5.76267 4.928 6.32C4.72267 6.87733 4.62 7.50067 4.62 8.19C4.62 8.87933 4.72267 9.50267 4.928 10.06C5.148 10.6173 5.44867 11.1013 5.83 11.512C6.21133 11.908 6.65867 12.216 7.172 12.436C7.7 12.6413 8.27933 12.744 8.91 12.744C9.64333 12.744 10.2887 12.634 10.846 12.414C11.4033 12.1793 11.88 11.8493 12.276 11.424L14.916 14.064C14.1533 14.7533 13.288 15.2887 12.32 15.67C11.3667 16.0513 10.2447 16.242 8.954 16.242ZM25.3454 16.286C24.1427 16.286 23.0354 16.0807 22.0234 15.67C21.0114 15.2593 20.124 14.6873 19.3614 13.954C18.6134 13.2207 18.0267 12.3627 17.6014 11.38C17.176 10.3827 16.9634 9.312 16.9634 8.168C16.9634 7.024 17.1687 5.968 17.5794 5C18.0047 4.01733 18.5914 3.15933 19.3394 2.426C20.0874 1.69267 20.9674 1.128 21.9794 0.732C22.9914 0.321332 24.0987 0.115999 25.3014 0.115999C26.504 0.115999 27.6114 0.321332 28.6234 0.732C29.6354 1.128 30.5154 1.69267 31.2634 2.426C32.0114 3.15933 32.5907 4.01733 33.0014 5C33.4267 5.98267 33.6394 7.046 33.6394 8.19C33.6394 9.334 33.4267 10.3973 33.0014 11.38C32.5907 12.3627 32.0114 13.228 31.2634 13.976C30.5154 14.7093 29.6354 15.2813 28.6234 15.692C27.626 16.088 26.5334 16.286 25.3454 16.286ZM25.3014 12.766C26.1814 12.766 26.944 12.5753 27.5894 12.194C28.2347 11.8127 28.7334 11.2773 29.0854 10.588C29.4374 9.89867 29.6134 9.092 29.6134 8.168C29.6134 7.49333 29.5107 6.87733 29.3054 6.32C29.1147 5.76267 28.8287 5.286 28.4474 4.89C28.066 4.47933 27.6114 4.164 27.0834 3.944C26.5554 3.724 25.9614 3.614 25.3014 3.614C24.4214 3.614 23.6587 3.80467 23.0134 4.186C22.368 4.55267 21.8694 5.08067 21.5174 5.77C21.1654 6.45933 20.9894 7.25867 20.9894 8.168C20.9894 8.872 21.0847 9.51 21.2754 10.082C21.4807 10.6393 21.774 11.1233 22.1554 11.534C22.5367 11.93 22.9914 12.238 23.5194 12.458C24.0474 12.6633 24.6414 12.766 25.3014 12.766ZM43.7929 16.242C42.4729 16.242 41.3069 15.9707 40.2949 15.428C39.2976 14.8707 38.5202 14.1007 37.9629 13.118C37.4056 12.1353 37.1269 11.0207 37.1269 9.774V0.401999H41.0429V10.06C41.0429 10.6173 41.1602 11.1013 41.3949 11.512C41.6442 11.908 41.9742 12.216 42.3849 12.436C42.8102 12.6413 43.2796 12.744 43.7929 12.744C44.3209 12.744 44.7829 12.6413 45.1789 12.436C45.5749 12.216 45.8902 11.908 46.1249 11.512C46.3596 11.116 46.4769 10.6393 46.4769 10.082V0.401999H50.4369V9.796C50.4369 11.0427 50.1582 12.1573 49.6009 13.14C49.0436 14.108 48.2662 14.8707 47.2689 15.428C46.2862 15.9707 45.1276 16.242 43.7929 16.242ZM58.4461 16V0.511999H62.3841V16H58.4461ZM53.6721 3.79V0.401999H67.1581V3.79H53.6721ZM67.739 16L73.789 0.401999H77.595L83.579 16H79.465L74.955 2.888H76.385L71.765 16H67.739ZM71.413 13.272V10.148H80.015V13.272H71.413ZM86.7993 16V0.401999H89.5493L90.7373 3.592V16H86.7993ZM97.5573 16L88.4493 4.428L89.5493 0.401999L98.6793 11.974L97.5573 16ZM97.5573 16L96.5453 12.722V0.401999H100.483V16H97.5573ZM103.872 16L109.922 0.401999H113.728L119.712 16H115.598L111.088 2.888H112.518L107.898 16H103.872ZM107.546 13.272V10.148H116.148V13.272H107.546Z"
                fill="url(#paint0_linear_19_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_19_5"
                  x1="60"
                  y1="-6"
                  x2="60"
                  y2="22"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D96690" />
                  <stop offset="1" stop-color="#A2013B" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className="hidden w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <ul className="pt-4 text-base text-coutana-gray-100 font-semibold md:flex space-x-4 md:justify-between md:pt-0">
            <li>
              <a className="md:p-4 py-2 block hover:text-[#E572B8]" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-[#E572B8]" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-[#E572B8]" href="#">
                Customers
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-[#E572B8]" href="#">
                Blog
              </a>
            </li>
            <li>
              <a
                className="shadow-md md:p-4 py-2 md:px-8 block hover:text-[#E572B8] text-purple-500 bg-white rounded-full text-sm"
                href="#"
              >
                Download App
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
