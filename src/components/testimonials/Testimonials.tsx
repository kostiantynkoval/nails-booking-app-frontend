import React from 'react';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiStar } from "react-icons/hi";
import avatar from '../../assets/images/avatar_400x400.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

export const Testimonials = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{clickable: true}}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }}
      >
        {
          [1,2,3,4,5].map(key => (
            <SwiperSlide key={key}>
              <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px] max-w-[72px] max-h-[72px]">
                  <img className="block w-full h-full" src={avatar} alt=""/>
                  <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                      Mrs. Universe
                    </h4>
                    <div className="flex items-center gap-[2px]">
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                      <HiStar className="text-yellowColor w-[18px] h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus alias aliquid blanditiis eligendi esse fugiat hic incidunt.
                </p>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};