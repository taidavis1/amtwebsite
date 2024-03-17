import React from "react";
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './test.css'
import {Pagination} from "swiper/modules";
import Data from "./Data";

export default function SwiperPos(){
    return (
        <>
            <Swiper className=""
                loop = {true}
                breakpoints={{
                    340: {
                        slidesPerView:1,
                    },
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    }
                }}
                modules={[]}
            >
                {Data.SwiperData.map((d) => (
                    <SwiperSlide key={d.id} className="">
                        <div className="cursor-pointer border-2 rounded-lg hover:border-main-color transition-colors duration-200 delay-100 ease-in-out p-4">
                            <div className=" sticky lg:h-[500px]">
                                <img alt="#" className="rounded-lg h-full" src={d.img} />
                                <div onClick={() => {
                                    window.open(`${d.link}` , '_blank');
                                }} className=" absolute p-8 inset-0 z-10 bg-black flex flex-col justify-center opacity-0 hover:opacity-100 ease-linear duration-500 transition-all bg-opacity-50">                                                            
                                    <div className=" bg-black/20 p-1 lg:p-4">
                                        <div className=" flex justify-center text-lg text-white font-thin space-x-1">
                                            <span className="">View Demo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
};
