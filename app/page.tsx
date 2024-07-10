import { AnimatedModalDemo } from "@/components/AnimatedModal";
import { ImagesSliderDemo } from "@/components/ImageSlider";
import { Navbar } from "@/components/Navbar";
import Swiper from "@/components/SwiperC";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="home" className="h-[100vh] z-10 text-white">
        <ImagesSliderDemo />
      </section>
      <section id="story" className="h-[100vh] text-white ">
        <div className="h-[100vh] p-24">
          <Swiper />
        </div>
      </section>
      <section id="collections" className="text-white pt-36">
        <div className="grid grid-cols-3 mx-24 items-center gap-16">
          <BackgroundGradient className="col-span-1">
            <div className="px-10 rounded-3xl bg-zinc-900 pt-4 pb-8">
              <Image
                src="/jordans.webp"
                alt="Vercel Logo"
                className="col-span-1 rounded-full"
                width={400}
                height={200}
              />
              <h4 className="text-xl pt-6">Air Jordan 4 Retro Reimagined</h4>
              <div className="flex gap-3 pt-6">
                <div className="px-3 py-2 text-center border-2 border-gray-600 rounded-lg">
                  <Image
                    src="/jordans.webp"
                    alt="Vercel Logo"
                    className="col-span-1 rounded-full"
                    width={40}
                    height={40}
                  />
                  <small className="text-zinc-400 ">Black</small>
                </div>
                <div className="px-3 py-2 text-center rounded-lg">
                  <Image
                    src="/jordans.webp"
                    alt="Vercel Logo"
                    className="col-span-1 rounded-full"
                    width={40}
                    height={40}
                  />
                  <small className="text-zinc-400 ">Brown</small>
                </div>
              </div>
              {/* <p className="text-sm text-zinc-400 pt-4">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.
              </p> */}
              <AnimatedModalDemo />
            </div>
          </BackgroundGradient>
          <BackgroundGradient className="col-span-1">
            <div className="px-10 rounded-3xl bg-zinc-900 pt-4 pb-8">
              <Image
                src="/jordans.webp"
                alt="Vercel Logo"
                className="col-span-1 rounded-full"
                width={400}
                height={200}
              />
              <h4 className="text-xl pt-6">Air Jordan 4 Retro Reimagined</h4>
              <div className="flex gap-3 pt-6">
                <div className="px-3 py-2 text-center border-2 border-gray-600 rounded-lg">
                  <Image
                    src="/jordans.webp"
                    alt="Vercel Logo"
                    className="col-span-1 rounded-full"
                    width={40}
                    height={40}
                  />
                  <small className="text-zinc-400 ">Black</small>
                </div>
                <div className="px-3 py-2 text-center rounded-lg">
                  <Image
                    src="/jordans.webp"
                    alt="Vercel Logo"
                    className="col-span-1 rounded-full"
                    width={40}
                    height={40}
                  />
                  <small className="text-zinc-400 ">Brown</small>
                </div>
              </div>
              {/* <p className="text-sm text-zinc-400 pt-4">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.
              </p> */}
              <AnimatedModalDemo />
            </div>
          </BackgroundGradient>
          <BackgroundGradient className="col-span-1">
            <div className="px-10 rounded-3xl bg-zinc-900 pt-4 pb-8">
              <Image
                src="/jordans.webp"
                alt="Vercel Logo"
                className="col-span-1 rounded-full"
                width={400}
                height={200}
              />
              <h4 className="text-xl pt-6">Air Jordan 4 Retro Reimagined</h4>
              <div className="flex gap-3 pt-6">
                <div className="px-3 py-2 text-center border-2 border-gray-600 rounded-lg">
                  <Image
                    src="/jordans.webp"
                    alt="Vercel Logo"
                    className="col-span-1 rounded-full"
                    width={40}
                    height={40}
                  />
                  <small className="text-zinc-400 ">Black</small>
                </div>
                <div className="px-3 py-2 text-center rounded-lg">
                  <Image
                    src="/jordans.webp"
                    alt="Vercel Logo"
                    className="col-span-1 rounded-full"
                    width={40}
                    height={40}
                  />
                  <small className="text-zinc-400 ">Brown</small>
                </div>
              </div>
              {/* <p className="text-sm text-zinc-400 pt-4">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.
              </p> */}
              <AnimatedModalDemo />
            </div>
          </BackgroundGradient>
        </div>
      </section>
      <section id="contact" className="h-[100vh]">
        <div className="grid grid-cols-3 gap-5 justify-items-center pt-40 items-center">
            <Image
              src="/leather.jpg"
              alt="Vercel Logo"
              className="col-span-1 rounded-full"
              width={200}
              height={200}
            />
            <Image
              src="/leather.jpg"
              alt="Vercel Logo"
              className="col-span-1 rounded-full"
              width={200}
              height={200}
            />
            <Image
              src="/leather.jpg"
              alt="Vercel Logo"
              className="col-span-1 rounded-full"
              width={200}
              height={200}
            />
        </div>
        <footer className="bg-zinc-900 px-24 mt-40 pt-12">
          <div className="grid grid-cols-3 justify-items-center gap-10">
            <Image
              src="/Logo-Full-White-Transparent.svg"
              alt="Vercel Logo"
              className="rounded-full col-span-1 justify-self-start"
              width={100}
              height={100}
            />
            <div className="col-span-1 mt-3">
             <h4 className="text-zinc-500 font-semibold text-sm">For Gifting & Corporate orders <br /> WhatsApp us at <a href="whatsapp://send?abid=+919236308787&text=We've%received%your%request.">+91 9236308787</a></h4>
            </div>
            <div className="col-span-1 justify-self-end mt-3">
              <h4 className="text-zinc-500 font-semibold text-sm">Reach out to us</h4>
              <p className="text-zinc-500 font-semibold text-sm pt-4 pb-3">Phone: <a href="tel:+919236308787">+91 9236308787</a></p>
              <p className="text-zinc-500 font-semibold text-sm">Email: <a href="mailto:belidare0@gmail.com">belidare0@gmail.com</a></p>
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
