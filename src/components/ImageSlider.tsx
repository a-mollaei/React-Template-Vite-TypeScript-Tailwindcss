import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';  // این وارد کردن سبک‌ها به طور کلی در Swiper 6 و بالاتر است

// Import required modules
import { Autoplay, Pagination, Navigation, Swiper as SwiperType } from "swiper/modules";

const ImageSlider: React.FC = () => {
  const progressCircle = useRef<SVGCircleElement>(null);  // تغییر به SVGCircleElement
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (swiper: SwiperType, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", String(1 - progress));
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full h-[500px] bg-gray-200"
      >
        <SwiperSlide className="flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/800x400")' }}>
          <div className="text-white text-2xl font-semibold">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/800x400")' }}>
          <div className="text-white text-2xl font-semibold">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/800x400")' }}>
          <div className="text-white text-2xl font-semibold">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/800x400")' }}>
          <div className="text-white text-2xl font-semibold">Slide 4</div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center">
        <svg viewBox="0 0 48 48" className="w-16 h-16 text-gray-400">
          <circle cx="24" cy="24" r="20" ref={progressCircle} className="stroke-current stroke-2 fill-none"></circle>
        </svg>
        <span ref={progressContent} className="ml-2 text-white text-xl"></span>
      </div>
    </div>
  );
};

export default ImageSlider;
