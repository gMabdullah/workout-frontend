import React from "react";

export const NavSearch = () => {
  return (
    <div className="relative">
      <input
        type="search"
        id="default-search"
        className="block ps-5 pe-10 w-full h-[55px] md:w-[300px] lg:w-[300px] xl:w-[391px] text-sm text-white border border-none rounded-lg bg-[#181E38] focus:ring-[#181E38] focus:border-[#181E38] focus-visible:outline-none "
        placeholder="Search Mockups, Logos..."
        required
      />
      <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
    </div>
  );
};
