import React from 'react'
import Link from 'next/link';


//#region Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
//#endregion

//#region Icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { ImFacebook, ImInstagram, ImLinkedin, ImLinkedin2, ImYoutube } from "react-icons/im";
import { CgChevronRight } from 'react-icons/cg';
//#endregion

const HeroSection = ({ SliderData }) => {
    const ScrollDown = () => {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
    return (
        <section className="text-gray-600 h-[90vh] relative body-font">

            <div className="scroll-down absolute z-10 bottom-0 p-1 left-10 text-lg animate-bounce">
                <button className='flex items-center justify-center relative' onClick={ScrollDown}>
                    <span className='text-cyan-500 inline-block w-max -rotate-90 -top-20 absolute'>SCROLL DOWN</span>
                    <span className='w-0.5 h-32 bg-cyan-500 mt-5'></span>
                </button>
            </div>
            <Swiper
                pagination={{
                    el: ".swiper-pagination",
                    type: "progressbar",
                }}
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: true
                }}
                loop
                navigation={{ nextEl: ".hero-next-btn", prevEl: ".hero-prev-btn" }}
                modules={[Pagination, Navigation, Autoplay]}
                speed={800}
                className="mySwiper"
            >
                {
                    SliderData && SliderData.map((data, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-[80vh] bg-green-300 flex items-center">

                                <img src={data.imgURL} className="absolute w-full h-full object-cover" alt="sliderbg" />
                                <div className="container mx-auto">
                                    <div className="relative z-10 text-center max-w-lg  flex flex-col gap-3 items-center text-white">
                                        <span className='uppercase text-2xl font-light'>DECOVİTA'YA HOŞGELDİNİZ</span>
                                        <h3 className=" text-6xl leading-snug">Her Kıtaya Ayrı Bir Renk Katıyoruz</h3>
                                        <Link href={"/"} className="flex gap-3 items-center">
                                            <span className='p-3 border rounded-full'><CgChevronRight /></span>
                                            Kategorileri İncele
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className="bg-[#533333] h-[10vh] relative flex">
                <div className="social w-4/6 md:w-2/6 bg-white h-full flex items-center justify-center" >
                    <ul className="flex items-center gap-2 text-[#533333]">
                        <li>
                            <a href="#">
                                <ImInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <ImFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <ImYoutube />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <ImLinkedin2 />
                            </a>
                        </li>
                        <li>
                            <p className="border-l px-2 font-medium">@decovita</p>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex items-center gap-3 h-full md:w-4/6 px-8">

                    <div className='w-3/6 relative'>
                        <div className='swiper-pagination rounded-lg overflow-hidden h-1'>

                        </div>
                    </div>

                    <div className='flex gap-3 text-white h-full items-center px-12'>
                        <button className='hero-prev-btn rounded-full p-1 border'>
                            <BiChevronLeft size={40} />
                        </button>
                        <button className='hero-next-btn rounded-full p-1 border'>
                            <BiChevronRight size={40} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection