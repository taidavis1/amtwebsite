import {React , useState} from "react";
import Logo1 from "../img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram , faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {faBarsStaggered ,faXmark , faPhone} from "@fortawesome/free-solid-svg-icons"

function Navbar(){
    const [Click , setClick] = useState(false);
    const [Scroll , SetScroll] = useState(false);
    const Change_color = () => {
        if(window.scrollY >= 10){
            SetScroll(true);
        }
        else{SetScroll(false);}
    };
    window.addEventListener('scroll' , Change_color)
    const Icon_Style = {fontSize: '22',};
    return (
        <div className="">
            <nav className= {Scroll?"bg-black transition ease-out duration-200 delay-100 flex justify-between lg:justify-around w-full fixed top-0 left-0 right-0 z-10 ":"flex text-white justify-between lg:justify-around bg-none w-full fixed top-0 left-0 right-0 z-10"}>
                <div className="flex items-center space-x-1 cursor-pointer group">
                    <img src={Logo1} alt="" className=" w-20 md:w-24 group-hover:opacity-70"/>
                </div>
                <div className={Scroll?"lg:hidden text-3xl cursor-pointer flex items-center text-black space-x-4": "lg:hidden space-x-4 blkock text-3xl cursor-pointer flex items-center text-[#3C6CA8]"}>
                    <div onClick={() => window.location.href = "tel:9729430322"} className={`${Scroll? "bg-green-400" : "border-0" } p-[6px] rounded-full`}>
                        <FontAwesomeIcon className= {`${Scroll? "text-white" : "text-green-400"} flex text-sm`} icon = {faPhone}/>
                    </div>

                    <div onClick={() => setClick(!Click)} className={Scroll?"lg:hidden transition text-3xl cursor-pointer flex items-center text-black space-x-4": "lg:hidden space-x-4 blkock text-3xl cursor-pointer flex items-center text-[#3C6CA8]"}>
                        {!Click? 
                            <FontAwesomeIcon className=" text-main-color" icon = {faBarsStaggered}/> : 
                            <FontAwesomeIcon className=" text-main-color" icon={faXmark} />
                        }
                    </div>
                </div>
                <div className= {Scroll? "lg:flex text-md hidden items-center space-x-12 text-xl capitalize text-white" : "lg:flex font-Lora text-md hidden items-center space-x-12 text-xl capitalize text-white" }>
                    <a className="flex hover:text-main-color transition ease-in-out delay-150 duration-200" href = "/">
                        Home
                    </a>
                    <a className="flex hover:text-main-color transition ease-in-out delay-150 duration-200" href = "/Contact">
                        Contact Us
                    </a>
                </div>
                <div className = {Scroll? "hidden lg:flex items-center space-x-12 text-white": "hidden lg:flex items-center space-x-12 text-white"}>
                    <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.instagram.com/mspabeautynails/">
                        <FontAwesomeIcon className="hover:text-rose-300 transition ease-in-out delay-150 duration-200" style={Icon_Style}  icon={faInstagram}></FontAwesomeIcon>
                    </a>
                    <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.yelp.com/biz/m-spa-and-beauty-nails-plano-3">
                        <FontAwesomeIcon className="hover:text-sky-400 transition ease-in-out delay-150 duration-200" style={Icon_Style}  icon={faFacebookF}></FontAwesomeIcon>
                    </a>
                </div>
            </nav>
            {Click?
                <nav className="overflow-hidden space-y-12 md:space-y-24 top-20 md:top-28 fixed p-6 w-screen h-screen bg-white transition duration-700 ease-out lg:hidden left-0 right-0 z-10  mx-auto  text-black">
                    <div className=" space-y-16 md:space-y-24 flex uppercase flex-col text-lg mt-12">
                        <a onClick={() => setClick(!Click)} className="" href="/">Home</a>
                        <a onClick={() => setClick(!Click)} className="" href="/Contact">Contact us</a>
                    </div>
                    <div className="flex space-x-10 text-2xl justify-center">
                        <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.instagram.com/mspabeautynails/">
                            <FontAwesomeIcon className="text-rose-300"  icon={faInstagram}></FontAwesomeIcon>
                        </a>
                        <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.yelp.com/biz/m-spa-and-beauty-nails-plano-3">
                            <FontAwesomeIcon className="text-sky-400" style={Icon_Style}  icon={faFacebookF}></FontAwesomeIcon>
                        </a>
                    </div>
                </nav>
                :null
            }
        </div>
    );
};

export default Navbar;