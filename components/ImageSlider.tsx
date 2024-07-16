"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/image-slider";

export function ImagesSliderDemo() {
  const images = [
    "/1920.jpg",
    "https://images.unsplash.com/photo-1534126511673-b6899657816a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1664286074176-5206ee5dc878?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <ImagesSlider className="h-[100vh]" images={images}>
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
