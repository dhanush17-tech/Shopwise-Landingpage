"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export const ContainerScroll = ({
  rotate,
  translate,
  isInView,
}: {
  rotate: any;
  translate: any;
  isInView: any;
}) => {
  // ... existing code ...

  const [canAutoplay, setCanAutoplay] = useState(false);
  const [autoplayFailed, setAutoplayFailed] = useState(false);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "./video.mp4";
    video.muted = false;
    video.onplay = () => {
      setCanAutoplay(true);
      setAutoplayFailed(false);
    };
    video.onerror = () => setAutoplayFailed(true);
    video.play().catch(() => {
      setCanAutoplay(false);
      setAutoplayFailed(true);
    });

    return () => {
      video.pause();
      video.src = "";
    };
  }, []);

  return (
    <div
      className="py-40 w-screen h-screen top-0"
      style={{ perspective: "1000px" }}
    >
      <Card
        rotate={rotate}
        translate={translate}
        isInView={isInView}
        canAutoplay={canAutoplay}
        autoplayFailed={autoplayFailed}
      />
      <div className="h-[25%] md:h-[25%]"></div>
    </div>
  );
};

export const Card = ({
  rotate,
  translate,
  isInView,
  canAutoplay,
  autoplayFailed,
}: {
  rotate: any;
  translate: any;
  isInView: any;
  canAutoplay: any;
  autoplayFailed: any;
}) => {
  // Function to manually play the video
  const handlePlayVideo = () => {
    const videoElement = document.querySelector(
      ".video-element"
    ) as HTMLVideoElement;
    videoElement!.play();
  };
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  return (
    <motion.div
      style={{ rotateX: rotate, translateY: translate }}
      className="mt-20 transform z-[100] mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] aspect-ratio w-full max-w-[300px]"
    >
      {/* ... existing divs ... */}
      <div className="rounded-[2rem] overflow-hidden bg-white aspect-ratio w-full">
        {isInView ? (
          canAutoplay ? (
            <video
              src="./video.mp4"
              autoPlay
              className="block object-cover h-full aspect-ratio-[9/16] video-element"
            ></video>
          ) : (
            <div className="relative">
              <video
                src="./video.mp4"
                autoPlay
                className="block object-cover h-full aspect-ratio-[9/16] video-element"
              ></video>
              {autoplayFailed &&
                (isButtonVisible ? (
                  <button
                    onClick={() => {
                      handlePlayVideo();
                      setIsButtonVisible(false);
                    }}
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-500/50 p-2 flex items-center justify-center"
                  >
                    <FontAwesomeIcon
                      className="text-xl text-white"
                      icon={faPlay}
                    />
                  </button>
                ) : null)}
            </div>
          )
        ) : (
          <Image
            src="/shopwise.jpeg"
            width={300}
            height={500}
            className="block object-cover w-full h-full"
            alt="Mockup Image"
          />
        )}
      </div>
    </motion.div>
  );
};
