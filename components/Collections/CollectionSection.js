import React, { useEffect, useState } from 'react'

//#region React-Icons
import { CgShapeHexagon } from "react-icons/cg";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
//#endregion

//#region Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

import 'swiper/css';
//#endregion

const CollectionSection = ({ CategoryData }) => {

    const [activeCategory, setActiveCategory] = useState(CategoryData[0].CategoryName);
    const [cattegoryEffect, setCategoryEffect] = useState(false);
    const CategorySlide = [
        {
            id: 0,
            CategoryName: "Artsy",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },
        {
            id: 0,
            CategoryName: "Artsy",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },
        {
            id: 0,
            CategoryName: "Artsy",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },
        {
            id: 0,
            CategoryName: "Artsy",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },
        {
            id: 1,
            CategoryName: "Essentials",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },
        {
            id: 1,
            CategoryName: "Essentials",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },
        {
            id: 1,
            CategoryName: "Essentials",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },

        {
            id: 2,
            CategoryName: "Modest Luxury",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },

        {
            id: 2,
            CategoryName: "Modest Luxury",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },

        {
            id: 2,
            CategoryName: "Modest Luxury",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },

        {
            id: 3,
            CategoryName: "Onyx",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },
        {
            id: 3,
            CategoryName: "Onyx",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },
        {
            id: 3,
            CategoryName: "Onyx",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },
        {
            id: 4,
            CategoryName: "Outdoor",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },

        {
            id: 4,
            CategoryName: "Outdoor",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },

        {
            id: 4,
            CategoryName: "Outdoor",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },

        {
            id: 5,
            CategoryName: "Stylish",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },
        {
            id: 5,
            CategoryName: "Stylish",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },
        {
            id: 5,
            CategoryName: "Stylish",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },
        {
            id: 6,
            CategoryName: "The Ultimate Black & White",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },
        {
            id: 6,
            CategoryName: "The Ultimate Black & White",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },
        {
            id: 7,
            CategoryName: "category 9",
            Paragraph: "Özgün tercihlerini yaşadığı mekanlarda da hissetmek isteyenlere...",
            leftImageURL: "https://picsum.photos/300/500",
            rightImageURL: "https://picsum.photos/800/400"
        },

    ]

    useEffect(() => {
        setCategoryEffect(true);
        setTimeout(() => {
            setCategoryEffect(false);
        }, 400);
    }, [activeCategory]);

    return (
        <section className="py-14">
            <div className="container mx-auto">
                <div className="section-title text-center py-8">
                    <h1 className="text-[#533333] font-bold text-3xl lg:text-6xl">
                        KOLEKSİYONLAR
                    </h1>
                </div>
                <div className='flex items-center'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={2}
                        breakpoints={
                            {
                                640: {
                                    slidesPerView: 3
                                },
                                1024: {
                                    slidesPerView: 4
                                },
                                1400: {
                                    slidesPerView: 5
                                },
                                1600: {
                                    slidesPerView: 6
                                },
                                1900: {
                                    slidesPerView: 7
                                }
                            }
                        }
                        navigation={{ nextEl: ".collection-slide-next", prevEl: ".collection-slide-prev" }}
                        modules={[Navigation]}
                    >
                        {
                            CategoryData && CategoryData.map((data, index) => (
                                <SwiperSlide key={index}>
                                    <div onClick={() => setActiveCategory(data.CategoryName)} className={`p-3 cursor-pointer py-16 flex text-xl font-medium text-center items-center flex-col gap-5 ${activeCategory === data.CategoryName ? "bg-[#533333] text-white" : "text-black"} transition-colors duration-500 rounded-[45px] `}>
                                        <CgShapeHexagon size={56} />
                                        <p>{data.CategoryName}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className='flex flex-col gap-2'>
                        <button className='collection-slide-next'><BiChevronRight size={32} /></button>
                        <button className='collection-slide-prev'><BiChevronLeft size={32} /></button>
                    </div>
                </div>
                <div className={`py-8 ${cattegoryEffect ? 'opacity-0' : 'opacity-100 transition-opacity ease-in-out duration-500'} `}>

                    {
                        CategoryData && CategoryData.map((data, index) => (
                            data.CategoryName === activeCategory &&
                            <>
                                <h3 className='py-8 text-6xl '>{data.CategoryName}</h3>
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    speed={1000}
                                    navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
                                    modules={[EffectFade, Navigation, Pagination]}
                                >
                                    {
                                        (CategorySlide.filter((e) => e.CategoryName == data.CategoryName)).map((slideData, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="flex justify-between ">
                                                    <div>
                                                        <img src={slideData.leftImageURL} alt="" />
                                                    </div>
                                                    <div className="flex flex-col gap-10 p-5 items-center text-5xl relative">
                                                        <button className="custom-prev rounded-full border border-black w-24 h-24 flex items-center justify-center" >
                                                            <BiChevronLeft />
                                                        </button>
                                                        <button className="custom-next rounded-full border border-black w-24 h-24 flex items-center justify-center" >
                                                            <BiChevronRight />
                                                        </button>
                                                        <div className="absolute p-5 -bottom-40 -left-60 z-30">
                                                            <span className="text-[6em] text-[#f2ecdc] overflow" >
                                                                {index}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col justify-between gap-y-8">
                                                        <p className="text-2xl">
                                                            {slideData.Paragraph}
                                                        </p>

                                                        <div className="bg-red-300 h-full w-full">
                                                            <img src={slideData.rightImageURL} className="h-full object-cover" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))

                                    }

                                </Swiper>
                            </>
                        ))
                    }

                </div>

            </div>
        </section>
    )
}

export default CollectionSection;


