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
        {/* <div className="grid grid-cols-3 gap-5 justify-items-center pt-32 items-center">
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
        </div> */}
        <div className="h-[100vh] p-24">
          <Swiper />
        </div>
      </section>
      <section id="collections" className="text-white pt-36">
        <div className="grid grid-cols-3 mx-24 items-center gap-16">
          <BackgroundGradient className="col-span-1">
            <div className="px-10 rounded-3xl bg-zinc-900 pt-12 pb-8">
              <Image
                src="/jordans.webp"
                alt="Vercel Logo"
                className="col-span-1 rounded-full"
                width={400}
                height={200}
              />
              <h4 className="text-xl pt-6">Air Jordan 4 Retro Reimagined</h4>
              <p className="text-sm text-zinc-400 pt-4">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.
              </p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient className="col-span-1">
            <div className="px-10 rounded-3xl bg-zinc-900 pt-12 pb-8">
              <Image
                src="/jordans.webp"
                alt="Vercel Logo"
                className="col-span-1 rounded-full"
                width={400}
                height={200}
              />
              <h4 className="text-xl pt-6">Air Jordan 4 Retro Reimagined</h4>
              <p className="text-sm text-zinc-400 pt-4">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.
              </p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient className="col-span-1">
            <div className="px-10 rounded-3xl bg-zinc-900 pt-12 pb-8">
              <Image
                src="/jordans.webp"
                alt="Vercel Logo"
                className="col-span-1 rounded-full"
                width={400}
                height={200}
              />
              <h4 className="text-xl pt-6">Air Jordan 4 Retro Reimagined</h4>
              <p className="text-sm text-zinc-400 pt-4">
                The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.
              </p>
            </div>
          </BackgroundGradient>
        </div>
      </section>
      <section id="contact" className="h-[100vh] text-white">contact</section>
    </div>
  );
}
