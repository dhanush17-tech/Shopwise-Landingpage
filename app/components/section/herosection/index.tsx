"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlay,
  faProductHunt,
} from "@fortawesome/free-brands-svg-icons";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import style from "./hero.module.css";
import Background from "./background";
import { cn } from "@/app/lib/utils";
import { Mockup } from "./mockup";

export default function HeroSection({ signedIn }: { signedIn: boolean }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref) as boolean;

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <div className="relative mx-auto w-full px-6 h-[100vh] flex flex-col justify-center lg:px-8">
      <div className="mx-auto max-w-full text-center">
        <motion.div
          initial="hidden"
          className="max-w-2xl"
          ref={ref}
          animate={isInView ? "show" : "hidden"}
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="space-x-4 font-headingAlt text-5xl font-bold tracking-tight sm:text-7xl"
          >
            <span>Shop the</span>
            <span className={cn(style.magicText, "inline")}>Right Deals</span>
            <span className="md:mx-1"></span> at the right time
          </motion.h1>
          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mt-6 text-lg leading-8 "
          >
            Set a price alert to your bucket list and get them at the right time
          </motion.p>

          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mt-10 flex items-center justify-center gap-x-10 "
          >
            <div className="btn bg-white font-bold text-blue-500 space-x-5">
              <FontAwesomeIcon className="mr-2" icon={faGooglePlay} />
              Download Now
            </div>

            <Link
              href="https://github.com/dhravya/dump.place"
              className="bg-transparent flex justify-center align-center gap-2 text-xl"
            >
        
                Upvote on
                <FontAwesomeIcon
                  className="text-xl mt-1 "
                  icon={faProductHunt}
                />
 
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div
        style={{ backgroundImage: "url('https://yashverma.me/grid.svg')" }}
        className="absolute top-0 left-0 z-[-2] h-screen w-full opacity-50 "
      >
        <div className="absolute top-0 left-0 z-10 h-screen w-full bg-radial-gradient"></div>
      </div>

      <div className="absolute md:bottom-[-50%] bottom-[-30%] left-1/2 transform -translate-x-1/2 z-[-1]">
        <Mockup />
      </div>

      <div className="mt-16 flow-root sm:mt-24">
        <motion.div
          className="rounded-md"
          initial={{ y: 100, opacity: 0 }} // Image starts from 100px below and fully transparent
          animate={{ y: 0, opacity: 1 }} // Image ends at its original position and fully opaque
          transition={{ type: "spring", stiffness: 50, damping: 20 }} // transition specifications
        >
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            ></motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
