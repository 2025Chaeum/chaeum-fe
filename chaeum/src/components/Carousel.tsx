'use client'; // Next.js App Router에서 Swiper 사용 시 필요

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const slides = [
  { src: '/images/test-main.png', title: '채움', description: '공간을 채우는 특별한 감각' },
  { src: '/images/main/living-room.jpg', title: '거실', description: '아늑한 거실 공간' },
  { src: '/images/main/bed-room.jpg', title: '침실', description: '편안한 숙면을 위한 공간' },
  { src: '/images/main/kitchen.jpg', title: '주방', description: '모던한 주방 인테리어' },
  { src: '/images/main/office.jpg', title: '오피스', description: '집중할 수 있는 업무 공간' },
];

export default function Carousel() {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="overflow-hidden shadow-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-[9/4]">
              <Image src={slide.src} alt={slide.title} fill className="object-cover" />

              <div
                className="absolute top-1/2 left-[100px] transform -translate-y-1/2 
                text-black z-10"
              >
                <div className="text-5xl text-white font-bold mb-2 animate-slide-in-right">
                  {slide.title}
                </div>
                <div className="text-lg text-white font-medium animate-slide-in-left">
                  {slide.description}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
