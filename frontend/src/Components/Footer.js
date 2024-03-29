import {React} from "react"
import Logo from "../img/Logo.png";

export default function Footer(){
    return(
        <footer className="bg-gray-300 cursor-pointer">
            <div className="mx-auto max-w-screen-xl px-6 pb-6 pt-16 lg:px-8 lg:pt-24">
                <div className="grid lg:space-x-12 grid-cols-1 gap-12 lg:grid-cols-3">
                    <div className="grid justify-items-center">
                        <div>
                            <div className=" flex items-center flex-col">
                                <h2 className="flex md:hidden text-2xl font-Lora italic tracking-wider font-bold text-main-color">AMT </h2>
                                <h2 className="flex md:hidden text-xl font-Lora italic font-thin tracking-wider text-main-color">Digital Marketing</h2>
                            </div>
                            <img alt ="#" className="md:w-28 hidden md:flex" src={Logo} />
                        </div> 
                        <p className="mt-6 max-w-md tracking-wide leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                            A trailblazing marketing firm dedicated to elevating brands in the beauty industry. 
                            Specializing in innovative solutions and personalized strategies, we are your go-to partner for transforming your 
                            nail salon into a destination for pampering and self-care.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">About Us</p>
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a href="/" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Home
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">Services</p> 
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a target="_blank" href="/Services" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Website development
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="/Services" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Digital Marketing
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="/Services" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Booking App
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" href="/Services" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Search Engine Optimize
                                    </a>
                                </li>
                                
                               
                                <li>
                                    <a target="_blank" href="/Services" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Graphic Design
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">Business Hours</p>
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Mon: 9:00 am - 7:30 pm
                                    </a>
                                </li>
                                <li>
                                    <a className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Tues: 9:00 am - 7:30 pm
                                    </a>
                                </li>
                                <li>
                                    <a className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Wed: 9:00 am - 7:30 pm
                                    </a>
                                </li>
                                <li>
                                    <a className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Thu: 9:00 am - 7:30 pm
                                    </a>
                                </li>
                                <li>
                                    <a className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Fri: 9:00 am - 7:30 pm
                                    </a>
                                </li>
                                <li>
                                    <a className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Sat: 9:00 am - 7:30 pm
                                    </a>
                                </li>
                                <li>
                                    <a className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Sun: 9:00 am - 7:30 pm
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">Contact Us</p>
                            <ul className="mt-8 space-y-5 text-sm">
                                <li>
                                    <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 shrink-0 text-gray-900"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <a href="mailto:tmstart4@gmail.com" className="flex-1 text-gray-700">tmstart4@gmail.com</a>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="tel:4255200692">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 shrink-0 text-gray-900"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
      
                                        <span className="flex-1 text-gray-700">(425) 520-0692</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
      
                <div className="mt-12 border-t border-gray-100 pt-6">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="text-sm text-gray-500">
                            <span className="block sm:inline">All rights reserved.</span>
                        </p>  
        
                        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                            &copy; 2024 Amt digital Marketing
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};