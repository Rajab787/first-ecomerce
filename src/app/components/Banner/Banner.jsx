"use client"
import React, { useState } from 'react'
import { Search, ShoppingCart } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { BannerData } from './BannerData';


const Banner = () => {
  return (
    <div className="  text-white   pb-[1rem] ">

      <div className='max-w-[2000px] m-auto '>
          <div className='bg-[#88C8BC] lg:mt-20 w-full flex items-center justify-start lg:justify-center h-[5rem] text-center lg:h-[4rem]  ' >
          <h2 className='text-white text-[18px] lg:text-[20px] font-light px-3  tracking-[0.05em] uppercase'>Our biggest sale yet 50% off all summer shoes</h2>
        </div>
        {/* Image */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={false}
          pagination={{ clickable: true }}
          speed={800} >

          {BannerData.image.map((item, index) => (
            <SwiperSlide key={index}>
              
              <div className='shadow-2xl relative w-full h-[80vh] bg-white overflow-hidden '>
                <img
                  src={item.img}
                  alt={BannerData?.name}
                  className="absolute inset-0 w-full h-[100vh] lg:h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />

                {/* Content */}
                <div  data-aos="fade-up" className="relative z-10 flex flex-col items-center mb-2 justify-center h-full text-center text-white px-4">
                  <h2 className=" text-white lg:text-4xl text-2xl font-extrabold mb-2 uppercase font-serif">{item.title}</h2>
                  <h3 className="text-white lg:text-2xl text-xl tracking-widest mb-2 uppercase font-medium">{item.subtitle}</h3>
                  <p className="text-white lg:text-5xl text-3xl font-light font-serif uppercase mb-2 tracking-wide">{item.discount}</p>
                  <p className="text-white  text-base font-normal uppercase">{item.product}</p>

                  <button className="mt-6 px-6 py-3  rounded-3xl bg-black font-serif text-white font-light uppercase">
                    Shop Collection
                  </button>
                </div>
              </div>
             
            </SwiperSlide>
          ))}
        </Swiper>
  <div className='w-full shadow-2xl py-10 lg:mb-12 flex justify-center items-center text-center'>
          <h3 className='text-xl lg:text-3xl text-black font-light lg:font-semibold font-serif w-[90%] lg:w-[70%]'>It started with a simple idea: Create quality, well-designed products that I wanted myself.</h3>
        </div>




       
      </div>

    </div >
  )
}

export default Banner