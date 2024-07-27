"use client";
import { AnimatedModalDemo } from "@/components/AnimatedModal";
import { AnimatedModal1 } from "@/components/AnimatedModal1";
import { ImagesSliderDemo } from "@/components/ImageSlider";
import { Navbar } from "@/components/Navbar";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import { AnimatedModal2 } from "@/components/AnimatedModal2";
import { AnimatedModal3 } from "@/components/AnimatedModal3";
import { AnimatedModal4 } from "@/components/AnimatedModal4";
import { useState } from "react";

export default function Home() {
  const [is06BW, setIs06BW] = useState(false);
  const [is04BW, setIs04BW] = useState(false);
  return (
    <div>
      <Navbar />
      <section id="home" className="z-10 text-white pt-20 md:pt-0">
        <ImagesSliderDemo />
      </section>
      <div className="grid md:grid-cols-3 grid-cols-3 gap-5 justify-items-center pt-20 md:pt-36 px-6 md:px-0 items-center">
            <Image
              src="/identity1.png"
              alt="Vercel Logo"
              className="col-span-1 rounded-full"
              width={200}
              height={200}
            />
            <Image
              src="/identity2.png"
              alt="Vercel Logo"
              className="col-span-1 rounded-full"
              width={200}
              height={200}
            />
            <Image
              src="/identity3.png"
              alt="Vercel Logo"
              className="col-span-1 rounded-full"
              width={200}
              height={200}
            />
      </div>
      <section id="story" className="h-[100vh] text-white pt-12 md:pt-0">
        <div className="h-[100vh] flex flex-col-reverse justify-center md:grid md:grid-cols-2 md:items-center md:gap-16 px-5 md:px-24 pt-20">
          <div className="col-span-1 text-left md:text-left mt-10 md:mt-0">
              <div>
                <span className="text-3xl">About Us - Belidare</span>
                <div className="mt-5">
                  Welcome to Belidare, where tradition meets innovation in men&apos;s leather fashion accessories. Sourcing the finest pure leather from Kanpur, the &quot;Manchester of the East,&quot; we ensure unmatched quality and durability in every piece.
                  Our commitment to excellence is reflected in our meticulously crafted products, designed to blend classic appeal with modern aesthetics. Each accessory embodies elegance and sophistication, making Belidare a symbol of style and functionality.
                  Choosing Belidare means embracing sustainable fashion, as our leather is an eco-friendly by-product of the meat industry. Thank you for supporting Belidare—we are honored to be part of your style journey.
                  <br /> #EleganceInEveryStitch
                </div>
              </div>
          </div>
          <div className="col-span-1">
            <iframe className="border border-zinc-900 rounded-xl md:w-[630px] md:h-[400px] w-[90vw] h-[30vh] py-0"
              src="https://www.youtube.com/embed/EtQm2flRD8E">
            </iframe>
          </div>
        </div>
      </section>
      <section id="collections" className="text-white md:pt-40 pt-32">
        <div className="md:grid md:grid-cols-3 md:mx-24 items-center gap-16 mx-5">
          <BackgroundGradient className="md:col-span-1 col-span-3">
              <div className="px-10 rounded-3xl bg-zinc-900 pt-4 pb-8">
                <div className="flex justify-center">
                  <Image
                    src={`${is06BW ? "/jsb0006BW/jsb0006-1.jpg" : "/jsb0006BK/jsb0006-1.jpg"}`}
                    alt="Vercel Logo"
                    className="rounded-xl"
                    width={310}
                    height={120}
                  />
                </div>
                <h4 className="text-xl pt-6">Luxury Classic belt with Monaco Edition</h4>
                <p className="mt-2">₹1,099 <s className="text-gray-400">₹2,999</s> <span className="text-green-500">63% off</span></p>
                <div className="flex gap-3 pt-6">
                  <button onClick={()=> setIs06BW(false)} className={`px-3 py-2 text-center ${is06BW ? "" : "border-2 border-gray-600"} hover:border-2 hover:border-gray-600 rounded-lg`}>
                    <Image
                      src="/jsb0006BK/jsb0006-1.jpg"
                      alt="Vercel Logo"
                      className="rounded-sm"
                      width={40}
                      height={40}
                    />
                    <small className="text-zinc-400 ">Black</small>
                  </button>
                  <button onClick={()=> setIs06BW(true)} className={`px-3 py-2 ${is06BW ? "border-2 border-gray-600" : ""} hover:border-2 hover:border-gray-600 text-center rounded-lg`}>
                    <Image
                      src="/jsb0006BW/jsb0006-1.jpg"
                      alt="Vercel Logo"
                      className="rounded-sm"
                      width={40}
                      height={40}
                    />
                    <small className="text-zinc-400 ">Brown</small>
                  </button>
                </div>
                {/* <p className="text-sm text-zinc-400 pt-4">
                  The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.
                </p> */}
                <AnimatedModal4 is06BW={is06BW} />
              </div>
          </BackgroundGradient>
          <div className="my-5 md:my-0">
          <BackgroundGradient className="md:col-span-1 col-span-3">
            <div className="px-10 rounded-3xl bg-zinc-900 pt-4 pb-8">
              <div className="flex justify-center">
                <Image
                  src="/jsb0001/jsb0001-1.jpg"
                  alt="Vercel Logo"
                  className="rounded-xl"
                  width={310}
                  height={120}
                />
              </div>
              <h4 className="text-xl pt-12">Casual belt with Mexico Edition</h4>
              <p className="mt-2">₹899 <s className="text-gray-400">₹1,999</s> <span className="text-green-500">55% off</span></p>
              <div className="flex gap-3 pt-6">
                <div className="px-3 py-2 text-center border-2 border-gray-600 rounded-lg">
                  <Image
                    src="/jsb0001/jsb0001-1.jpg"
                    alt="Vercel Logo"
                    className="rounded-sm"
                    width={40}
                    height={40}
                  />
                  <small className="text-zinc-400 ">Black</small>
                </div>
                {/* <div className="px-3 py-2 text-center rounded-lg">
                  <Image
                    src="/jordans.webp"
                    alt="Vercel Logo"
                    className="rounded-full"
                    width={40}
                    height={40}
                  />
                  <small className="text-zinc-400 ">Brown</small>
                </div> */}
              </div>
              {/* <p className="text-sm text-zinc-400 pt-4">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.
              </p> */}
              <AnimatedModalDemo />
            </div>
          </BackgroundGradient>
          </div>
          <BackgroundGradient className="md:col-span-1 col-span-3">
            <div className="px-10 rounded-3xl bg-zinc-900 pt-4 pb-8">
              <div className="flex justify-center">
                <Image
                  src="/jsb0005/jsb0005-1.jpg"
                  alt="Vercel Logo"
                  className="rounded-xl"
                  width={310}
                  height={120}
                />
              </div>
              <h4 className="text-xl pt-6">Reversible party belt with Spain Edition</h4>
              <p className="mt-2">₹979 <s className="text-gray-400">₹2,499</s> <span className="text-green-500">61% off</span></p>
              <div className="flex gap-3 pt-6">
                <div className="px-3 py-2 text-center border-2 border-gray-600 rounded-lg">
                  <Image
                    src="/jsb0005/jsb0005-1.jpg"
                    alt="Vercel Logo"
                    className="rounded-sm"
                    width={40}
                    height={40}
                  />
                  <small className="text-zinc-400 ">Fusion</small>
                </div>
                {/* <div className="px-3 py-2 text-center rounded-lg">
                  <Image
                    src="/jordans.webp"
                    alt="Vercel Logo"
                    className="rounded-full"
                    width={40}
                    height={40}
                  />
                  <small className="text-zinc-400 ">Brown</small>
                </div> */}
              </div>
              {/* <p className="text-sm text-zinc-400 pt-4">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.
              </p> */}
              <AnimatedModal3 />
            </div>
          </BackgroundGradient>
          <div className="my-5 md:my-0">
          <BackgroundGradient className="md:col-span-1 col-span-3">
            <div className="px-10 rounded-3xl bg-zinc-900 pt-4 pb-8">
              <div className="flex justify-center">
                <Image
                  src={`${is04BW ? "/jsb0004brw/jsb0004-3.jpg" : "/jsb0004BK/jsb0004-3.jpg"}`}
                  alt="Vercel Logo"
                  className="rounded-xl"
                  width={310}
                  height={120}
                />
              </div>
              <h4 className="text-xl pt-6">Formal belt with Japan Edition</h4>
              <p className="mt-2">₹949 <s className="text-gray-400">₹2,499</s> <span className="text-green-500">62% off</span></p>
              <div className="flex gap-3 pt-6">
                <button onClick={()=> setIs04BW(false)} className={`px-3 py-2 text-center ${is04BW ? "" : "border-2 border-gray-600"} rounded-lg`}>
                  <Image
                    src="/jsb0004BK/jsb0004-3.jpg"
                    alt="Vercel Logo"
                    className="rounded-sm"
                    width={40}
                    height={40}
                  />
                  <small className="text-zinc-400 ">Black</small>
                </button>
                  <button onClick={()=> setIs04BW(true)} className={`px-3 py-2 ${is04BW ? "border-2 border-gray-600" : ""} hover:border-2 hover:border-gray-600 text-center rounded-lg`}>
                    <Image
                      src="/jsb0004brw/jsb0004-3.jpg"
                      alt="Vercel Logo"
                      className="rounded-sm"
                      width={40}
                      height={40}
                    />
                    <small className="text-zinc-400 ">Brown</small>
                  </button>
              </div>
              {/* <p className="text-sm text-zinc-400 pt-4">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.
              </p> */}
              <AnimatedModal2 is04BW={is04BW} />
            </div>
          </BackgroundGradient>
          </div>
          <BackgroundGradient className="md:col-span-1 col-span-3">
            <div className="px-10 rounded-3xl bg-zinc-900 pt-4 pb-8">
              <div className="flex justify-center">
                <Image
                  src="/jsb0003/jsb0003-4.jpg"
                  alt="Vercel Logo"
                  className="rounded-xl"
                  width={310}
                  height={200}
                />
              </div>
              <h4 className="text-xl pt-6">Reversible belt with Italy Edition</h4>
              <p className="mt-2">₹979 <s className="text-gray-400">₹2,499</s> <span className="text-green-500">61% off</span></p>
              <div className="flex gap-3 pt-6">
                <div className="px-3 py-2 text-center border-2 border-gray-600 rounded-lg">
                  <Image
                    src="/jsb0003/jsb0003-4.jpg"
                    alt="Vercel Logo"
                    className="rounded-sm"
                    width={40}
                    height={40}
                  />
                  <small className="text-zinc-400 ">Fusion</small>
                </div>
                {/* <div className="px-3 py-2 text-center rounded-lg">
                  <Image
                    src="/jordans.webp"
                    alt="Vercel Logo"
                    className="rounded-full"
                    width={40}
                    height={40}
                  />
                  <small className="text-zinc-400 ">Brown</small>
                </div> */}
              </div>
              {/* <p className="text-sm text-zinc-400 pt-4">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.
              </p> */}
              <AnimatedModal1 />
            </div>
          </BackgroundGradient>
        </div>
      </section>
      <section id="contact" className="h-[70vh] md:pt-32 pt-40">
        <div className="md:text-center pl-6 md:pl-0">
          <h1 className="text-zinc-500 font-semibold text-4xl">Get in touch</h1>
          <div className="grid md:grid-cols-3 grid-cols-3 gap-5 md:justify-items-center pt-8 md:pt-12 md:px-0 items-center">
            <a href="tel:+919236308787" className="text-zinc-500 cursor-pointer flex md:flex-col flex-row items-center col-span-3 md:col-span-1 rounded-full font-semibold text-xl pt-4 pb-3">
              <IoIosCall className="md:text-8xl text-4xl mr-1" />
              <p className="md:pt-4">
                 +91 9236308787
              </p>
            </a>
            <a href="mailto:belidare0@gmail.com" className="text-zinc-500 cursor-pointer flex md:flex-col flex-row items-center col-span-3 md:col-span-1 rounded-full font-semibold text-xl pt-4 pb-3">
              <IoIosMail className="md:text-8xl text-4xl mr-1" />
              <p className="md:pt-4">
                belidare0@gmail.com
              </p>
            </a>
            <a href="https://wa.me/919236308787" className="text-zinc-500 cursor-pointer flex md:flex-col flex-row items-center col-span-3 md:col-span-1 rounded-full font-semibold text-xl pt-4 pb-3">
              <FaWhatsapp className="md:text-8xl text-4xl mr-1" />
              <p className="md:pt-4" >
                +91 9236308787
              </p>
            </a>
          </div>
        </div>
        <footer className="bg-zinc-900 md:px-24 px-6 pt-8 mt-32">
          <div className="grid grid-cols-3 md:justify-items-center gap-10">
            <Image
              src="/Logo-Full-White-Transparent.svg"
              alt="Vercel Logo"
              className="rounded-full md:col-span-1 col-span-3 md:justify-self-start"
              width={100}
              height={100}
            />
            <div className="md:col-span-1 col-span-3 mt-3 md:text-center">
              <h4 className="text-zinc-500 font-semibold text-lg">Follow us on</h4>
              <div className="text-zinc-500 flex gap-6 mt-4 items-center">
                  <a href="https://www.instagram.com/belidare.official/" target="_blank">
                    <BsInstagram className="text-4xl cursor-pointer" />
                  </a>
                  <a href="https://www.facebook.com/belidare.official/" target="_blank">
                    <FaFacebook className="text-4xl cursor-pointer" />
                  </a>
                  <a href="https://www.youtube.com/@belidare.officials/" target="_blank">
                    <FaYoutube className="text-4xl cursor-pointer" />
                  </a>
                  {/* <a href="https://www.instagram.com/belidare.official/" target="_blank">
                    <FaXTwitter className="text-4xl cursor-pointer" />
                  </a> */}
                  <a href="https://www.linkedin.com/company/belidareofficial/" target="_blank">
                    <FaLinkedin className="text-4xl cursor-pointer" />
                  </a>
              </div>
             {/* <h4 className="text-zinc-500 font-semibold text-sm">For Gifting & Corporate orders <br /> WhatsApp us at <a href="whatsapp://send?abid=+919236308787&text=We've%received%your%request.">+91 9236308787</a></h4> */}
            </div>
            <div className="md:col-span-1 col-span-3 md:justify-self-end mt-3">
              <h4 className="text-zinc-500 font-semibold text-sm">Reach out to us</h4>
              <h4 className="text-zinc-500 font-semibold text-sm mt-2">For Bulk Orders & Corporate Giftings</h4>
              <div className="flex items-center text-zinc-500 font-semibold text-sm mt-2">
              <FaWhatsapp className="mr-1 text-xl"/> <a href="https://wa.me/919236308787"> +91 9236308787</a>
              </div>
            </div>
          </div>
            <p className="text-sm text-zinc-500 mt-6 pb-4">
            © 2024, Belidare, All rights reserved.
            </p>
        </footer>
      </section>
    </div>
  );
}
