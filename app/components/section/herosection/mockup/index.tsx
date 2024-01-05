// import React from "react";

// export function Mockup() {
//   return (
//     <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] aspect-ratio w-full max-w-[300px]">
//       {/* Decorative elements to simulate phone speaker, camera, etc. */}
//       <div className="h-[32px] w-[2px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
//       <div className="h-[46px] w-[2px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
//       <div className="h-[46px] w-[2px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
//       <div className="h-[64px] w-[2px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
//       <div className="rounded-[2rem] overflow-hidden bg-white aspect-ratio w-full">
//         {/* Screenshots for light and dark mode */}

//         <img
//           src="https://drive.google.com/uc?export=download&id=1WTsqszPBQESs9LCwGDLUelj69ivIFyN8"
//           className=" block object-cover w-full h-full"
//           alt="Mockup Dark"
//         />
//       </div>
//     </div>
//   );
// }
 "use client";
 import React, { useEffect, useRef, useState } from "react";
 import {
   useScroll,
   useTransform,
   motion,
   useMotionValue,
 } from "framer-motion";

 export const ContainerScroll = ({
   rotate,
   translate,
 }: {
   rotate: any;
   translate: any;
 }) => {
   return (
     <div
       className="py-40 w-screen h-screen  top-0  "
       style={{ perspective: "1000px" }}
     >
       <Card rotate={rotate} translate={translate} />
       <div style={{ height: "10% md:45%" }}></div>
     </div>
   );
 };

 export const Card = ({
   rotate,
   translate,
 }: {
   rotate: any;
   translate: any;
 }) => {
   return (
     <motion.div
       style={{
         rotateX: rotate,
         translateY: translate,
         boxShadow:
           "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
       }}
       className="mt-20 transform z-[-1]   mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] aspect-ratio w-full max-w-[300px]"
     >
       <div className="h-[32px] w-[2px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>

       <div className="h-[46px] w-[2px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>

       <div className="h-[46px] w-[2px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>

       <div className="h-[64px] w-[2px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

       <div className="rounded-[2rem] overflow-hidden bg-white aspect-ratio w-full">
         {/* Screenshots for light and dark mode */}
         <img
           src="https://drive.google.com/uc?export=download&id=1WTsqszPBQESs9LCwGDLUelj69ivIFyN8"
           className=" block object-cover w-full h-full"
           alt="Mockup Dark"
         />
       </div>
     </motion.div>
   );
 };