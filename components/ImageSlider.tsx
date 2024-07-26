"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/image-slider";

export function ImagesSliderDemo() {
  const images = [
    "/banner1.png",
    "/banner2.png",
    "/banner3.png",
  ];
  return (
    <ImagesSlider className="h-[30vh] md:h-[104vh]" images={images}>
      <motion.div
        initial={{
          opacity: 100,
          y: -80,
        }}
        animate={{
          opacity: 100,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="flex flex-col justify-center items-center"
      >
      </motion.div>
    </ImagesSlider>
  );
}
