import { ImagesSliderDemo } from "@/components/ImageSlider";
import { Navbar } from "@/components/Navbar";
import Swiper from "@/components/SwiperC";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="home" className="h-[100vh] z-10 text-white">
        <ImagesSliderDemo />
      </section>
      <section id="story" className="h-[100vh] text-white ">
        <div className="grid grid-cols-3 gap-5 justify-items-center pt-32 items-center">
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
        <div className="pt-10">
          <Swiper />
        </div>
      </section>
      <section id="collections" className="h-[100vh] text-white">collections</section>
      <section id="contact" className="h-[100vh] text-white">contact</section>
    </div>
  );
}
