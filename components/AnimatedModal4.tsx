"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { GoGoal } from "react-icons/go";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { HiBadgeCheck } from "react-icons/hi";
import { IoMdResize } from "react-icons/io";
import { LuPackageCheck } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
type propsType = {
  is06BW: Boolean
}

export function AnimatedModal4(props: propsType) {
  const [isImage, setIsImage] = useState(false);
  let images = [
    "/jsb0006BK/jsb0006-2.png",
    "/jsb0006BK/jsb0006-4.png",
    "/jsb0006BK/jsb0006-1.jpg",
    "/jsb0006BK/jsb0006-3.png",
    "/jsb0006BK/jsb0006-5.png"
  ];
  if(props.is06BW){
    images = [];
    images = [
      "/jsb0006BW/jsb0006-2.png",
      "/jsb0006BW/jsb0006-4.png",
      "/jsb0006BW/jsb0006-1.jpg",
      "/jsb0006BW/jsb0006-3.png",
      "/jsb0006BW/jsb0006-5.png"
    ];
  }else{
    images = [];
    images = [
      "/jsb0006BK/jsb0006-2.png",
      "/jsb0006BK/jsb0006-4.png",
      "/jsb0006BK/jsb0006-1.jpg",
      "/jsb0006BK/jsb0006-3.png",
      "/jsb0006BK/jsb0006-5.png"
    ];
  }
  
  return (
    <div className="pt-6 flex">
      <Modal>
        <div onClick={()=> setIsImage(false)}>
          <div className="bg-black px-5 py-2 rounded-md dark:bg-white dark:text-black text-white flex justify-center">
            Sold Out
          </div>
          <div className="hidden">
            <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
              <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                Order Now
              </span>
              <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                <Image
                    src="/amazon-logo.png"
                    alt="bali images"
                    width="30"
                    height="30"
                    className="rounded-lg pt-1"
                />
                <Image
                    src="/flipkart-logo.png"
                    alt="bali images"
                    width="40"
                    height="40"
                    className="rounded-lg"
                />
                {/* <Image
                    src="/myntra-logo.webp"
                    alt="bali images"
                    width="30"
                    height="30"
                    className="rounded-lg"
                /> */}
              </div>
            </ModalTrigger>
          </div>
        </div>
        <ModalBody>
          <div className={`${isImage ? "block" : "hidden"} md:w-[600px] w-[400px] md:h-[500px] h-[300px] rounded-lg pl-10 md:pt-16 pr-7 fixed z-50`}>
            <div className="fixed z-50 p-4 mt-20"><RxCross2 onClick={()=> setIsImage(false)} className="text-black text-xl cursor-pointer" /></div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-lg mt-20">
              <SwiperSlide>
                <Image
                  src={images[0]}
                  alt="Product Image"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={images[1]}
                  alt="Product Image"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={images[2]}
                  alt="Product Image"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={images[3]}
                  alt="Product Image"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={images[4]}
                  alt="Product Image"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center ">
            Belidare Premium Luxury Genuine Leather Textured Belt for Men
            </h4>
            <p className="mt-2 text-center mb-4">₹1099 <s className="text-gray-400">₹2,999</s> <span className="text-green-500">63% off</span></p>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 10,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 10,
                  }}
                  onClick={()=> setIsImage(true)}
                  className="rounded-xl -mr-4 mt-4 p-1 cursor-pointer bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-5 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <GoGoal className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  For Founders, CEOs, CXOs, and Legendary Family Business Owners
                </span>
              </div>
              <div className="flex items-center justify-center">
                <IoShieldCheckmarkSharp className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Longest Durability in the Entire Market
                </span>
              </div>
              <div className="flex items-center justify-center">
                <HiBadgeCheck className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  2 years of warranty
                </span>
              </div>
              <div className="flex  items-center justify-center">
                <IoMdResize className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  35 mm wide belt, suitable for size 28 - 46 waist
                </span>
              </div>
              <div className="flex items-center justify-center">
                <LuPackageCheck className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Comes with a Premium Wooden Gift Box
                </span>
              </div>
              {/* <div className="flex items-center justify-center">
                <ParachuteIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Paragliding
                </span>
              </div> */}
            </div>
          </ModalContent>
          <ModalFooter className="gap-4 items-center">
            <h5>Available On</h5>
            <a href={
              `
              ${props.is06BW ? 'https://www.flipkart.com/belidare-men-casual-evening-party-formal-brown-genuine-leather-belt/p/itm43057e4b12dd6?pid=BELH35RUHGBEZZWQ' : 'https://www.flipkart.com/belidare-men-formal-casual-evening-black-genuine-leather-belt/p/itm3905ebceab89c?pid=BELH3FHATAP3DHJY'}
              ` 
            }
            target="_blank" className="px-2 flex items-center bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
            <Image
                src="/flipkart-logo.png"
                alt="bali images"
                width="40"
                height="40"
                className="rounded-lg"
            /> Flipkart
            </a>
            <a href={`${props.is06BW ? "https://www.amazon.in/dp/B0DBM3FBRV" : "https://www.amazon.in/dp/B0DBM1VG11"}`} target="_blank" className="px-2 flex items-center dark:bg-white dark:text-black dark:border-black border border-gray-300 rounded-md text-sm w-28">
            <Image
                src="/amazon-logo.png"
                alt="bali images"
                width="30"
                height="30"
                className="rounded-lg py-1"
            /> <span className="font-semibold">Amazon</span>
            </a>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

const PlaneIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
    </svg>
  );
};

const VacationIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
      <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
      <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
      <path d="M15 9l-3 5.196" />
      <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
    </svg>
  );
};

const ElevatorIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
      <path d="M10 10l2 -2l2 2" />
      <path d="M10 14l2 2l2 -2" />
    </svg>
  );
};

const FoodIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
    </svg>
  );
};

const MicIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
      <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
    </svg>
  );
};

const ParachuteIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 12a10 10 0 1 0 -20 0" />
      <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
      <path d="M2 12l10 10l-3.5 -10" />
      <path d="M15.5 12l-3.5 10l10 -10" />
    </svg>
  );
};
