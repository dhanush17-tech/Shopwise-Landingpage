import React from "react";

export function Mockup() {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] aspect-ratio w-full max-w-[300px]">
      {/* Decorative elements to simulate phone speaker, camera, etc. */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden bg-white aspect-ratio w-full">
        {/* Screenshots for light and dark mode */}
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
          className="dark:hidden object-cover w-full h-full"
          alt="Mockup Light"
        />
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
          className="hidden dark:block object-cover w-full h-full"
          alt="Mockup Dark"
        />
      </div>
    </div>
  );
}
