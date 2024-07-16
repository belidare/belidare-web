"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperC = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img className='rounded-3xl h-[600px] w-[1400px]' src="/1920.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='rounded-3xl h-[600px] w-[1400px]' src="https://images.unsplash.com/photo-1709884732297-4b3c1a3f725b?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='rounded-3xl h-[600px] w-[1400px]' src="https://images.unsplash.com/photo-1633989464081-16ccd31287a1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='rounded-3xl h-[600px] w-[1400px]' src="https://images.unsplash.com/photo-1494871262121-49703fd34e2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

SwiperC.displayName = 'SwiperC'
export default SwiperC;