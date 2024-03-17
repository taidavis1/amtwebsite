import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Components/Button";
import Data from "../Components/Data";
import SwiperPor from "../Components/SwiperPor";
import {Fade , Slide} from "react-awesome-reveal";


export default function Home(){
    return(
        <>
            <section className="relative overflow-x-hidden">
                <div className="w-screen bg-pagel bg-no-repeat bg-center bg-cover h-screen relative">
                    {/* <div className=" w-screen h-screen bg-black bg-opacity-40"></div> */}
                    <div className="w-screen absolute bg-black bg-opacity-50 flex justify-center items-center flex-col h-screen text-center px-3 py-5 space-y-5 lg:py-8 md:space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-5xl capitalize ml-4 text-white md:text-8xl tracking-widest font-extrabold">
                               AMT 
                            </h1>
                            <h1 className="text-3xl capitalize ml-4 text-white md:text-5xl tracking-widest">Digital Marketing</h1>
                        </div>
                        <div className="p-2">
                            <div className="italic">
                                <ul className=" text-gold space-y-2 font-light capitalize">
                                    <li>
                                        <h2 className="text-xl md:text-2xl tracking-wide">Marketing is no longer about the stuff</h2>
                                    </li>
                                    <li>
                                        <h2 className="text-xl md:text-2xl tracking-wide italic">you make, but </h2>
                                    </li>
                                    <li>
                                        <h2 className="text-xl md:text-2xl tracking-wide"> about the stories you tell.</h2>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-testbg rounded-3xl bg-cover bg-center pt-14 pb-8">
                    <div className="lg:p-8 p-4 mx-auto space-y-6 lg:space-y-12 max-w-screen-xl">
                        <div className="flex flex-col items-center space-y-4">
                            <span className = "text-center text-2xl lg:text-5xl text-main-color/80 capitalize">what we offer?</span>
                            <div className=" text-center flex flex-col">
                                <span className = "text-lg lg:text-xl text-white">
                                    Where Creativity Joins Forces with Technology. 
                                </span>
                                <span className = "text-lg lg:text-xl text-white">
                                    Embark on Your Journey to Triumph with MarketPioneers.
                                </span>
                            </div>
                        </div>
                        <Fade delay={100}>
                            <div className="grid gap-4 text-white lg:gap-8 lg:grid-cols-3">
                                {Data.Data.map((d) => (
                                    <div key={d.id} className=" rounded-xl cursor-pointer hover:border-main-color transition-all duration-200 delay-75 border-[1px] p-3 lg:p-4 ">
                                        <div className="lg:p-4 p-2 bg-black shadow-lg rounded-xl">
                                            <div className=" mx-2 flex space-y-14 flex-col">
                                                <div className=" flex flex-col space-y-6">
                                                    <div className=" text-4xl text-main-color">
                                                        <FontAwesomeIcon icon={d.font} />
                                                    </div>
                                                    <h1 className=" text-2xl">{d.name}</h1>
                                                    <span>
                                                        {d.desc}
                                                    </span>
                                                </div>
                                                <div className=" pb-2">
                                                    <Button />
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                ))}
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className=" bg-test2 bg-center bg-cover pt-14 pb-4">
                    <div className="lg:p-8 p-4 mx-auto space-y-6 lg:space-y-12 max-w-screen-2xl">
                        <div className="flex flex-col items-center space-y-4">
                            <span className = "text-center text-2xl lg:text-5xl text-main-color/80 capitalize">Our Website Demos</span>
                            <div className=" text-center flex flex-col">
                                <span className = "text-lg lg:text-xl text-white">
                                    Where Innovation Meets Excellence
                                </span>
                                <span className = "text-lg lg:text-xl text-white">
                                    Unleash Your Potential with VisionCrafters.
                                </span>
                            </div>
                        </div>
                        <Slide delay={100}>
                            <div className="">
                                <SwiperPor />
                            </div>
                        </Slide>
                    </div>
                </div>
                <div className=" bg-gray-600/60 text-white rounded-3xl bg-cover pt-14 pb-4">
                    <div className="lg:p-8 p-4 mx-auto max-w-screen-xl">
                        <Fade delay={200}>
                            <div className=" grid gap-12  lg:gap-24 place-items-center lg:grid-cols-3">
                                <div className=" cursor-pointer flex text-center justify-center items-center space-y-5 flex-col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
                                        <defs>
                                            <linearGradient id="paint0_linear_2027_8420" x1="-6.34238" y1="26.8146" x2="37.4261" y2="26.7774" gradientUnits="userSpaceOnUse"> 
                                            <stop stop-color="#D4AF37"></stop>
                                            <stop offset="1" stop-color="#e29945"></stop>
                                            </linearGradient>
                                        </defs>
                                        <path d="M21.707 20.293l-5.388-5.388A7.947 7.947 0 0 0 16 9c0-4.418-3.582-8-8-8S0 4.582 0 9s3.582 8 8 8c1.846 0 3.543-.63 4.905-1.681l5.388 5.388a.999.999 0 1 0 1.414-1.414zM2 9c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm6-3c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0 4c.552 0 1-.449 1-1s-.448-1-1-1-1 .449-1 1 .448 1 1 1z" fill="url(#paint0_linear_2027_8420)"/>
                                    </svg>
                                    <div className=" flex flex-col space-y-5">
                                        <div className=" space-y-2">
                                            <div>
                                                <h2 className=" text-2xl">Keyword Strategy</h2>
                                            </div>
                                            <div>
                                                <span className="">
                                                    A keyword strategy is a fundamental component of SEO and digital marketing that involves researching, analyzing, and selecting the most relevant and valuable keywords.                                            
                                                </span>
                                            </div>
                                        </div>
                                        <div className="">
                                            <Button />
                                        </div>
                                    </div>
                                </div>
                                <div className=" cursor-pointer flex text-center justify-center items-center space-y-5 flex-col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
                                        <defs>
                                            <linearGradient id="paint0_linear_2027_8420" x1="-6.34238" y1="26.8146" x2="37.4261" y2="26.7774" gradientUnits="userSpaceOnUse"> 
                                            <stop stop-color="#D4AF37"></stop>
                                            <stop offset="1" stop-color="#e29945"></stop>
                                            </linearGradient>
                                        </defs>
                                        <path d="M0 22h24v2H0v-2zm2-12h4v10H2V10zm6 6h4v4h-4v-4zm6-8h4v12h-4V8zm6-4v16h-4V4h4z" fill="url(#paint0_linear_2027_8420)"/>
                                    </svg>
                                    <div className=" flex flex-col space-y-5">
                                        <div className=" space-y-2">
                                            <div>
                                                <h2 className=" text-2xl">Analysis & Reports</h2>
                                            </div>
                                            <div>
                                                <span className="">
                                                    the systematic evaluation of your market competitors' strategies, strengths, weaknesses, and market positioning to gain a strategic advantage
                                                </span>
                                            </div>
                                        </div>
                                        <div className="">
                                            <Button />
                                        </div>
                                    </div>
                                </div>
                                <div className=" cursor-pointer flex text-center justify-center items-center space-y-5 flex-col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
                                        <defs>
                                            <linearGradient id="paint0_linear_2027_8420" x1="-6.34238" y1="26.8146" x2="37.4261" y2="26.7774" gradientUnits="userSpaceOnUse"> 
                                            <stop stop-color="#D4AF37"></stop>
                                            <stop offset="1" stop-color="#e29945"></stop>
                                            </linearGradient>
                                        </defs>
                                        <path d="M19 2H8C6.897 2 6 2.897 6 4v16c0 1.103.897 2 2 2h11c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 20V4h11l.002 16H8zM10 7h8v2h-8V7zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z" fill="url(#paint0_linear_2027_8420)"/>
                                    </svg>

                                    <div className=" flex flex-col space-y-5">
                                        <div className=" space-y-2">
                                            <div>
                                                <h2 className=" text-2xl">Techinical Audit</h2>
                                            </div>
                                            <div>
                                                <span className="">
                                                    a comprehensive examination of a website to identify issues affecting its performance, usability, and search engine rankings. 
                                                    This audit covers various elements.                                     
                                                </span>
                                            </div>
                                        </div>
                                        <div className="">
                                        <Button />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    )
}