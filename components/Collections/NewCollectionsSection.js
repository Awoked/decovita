import Link from 'next/link'
import React from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'

const NewCollectionsSection = () => {
    return (
        <section className='py-14'>
            <div className="container mx-auto">
                <div className='section-title flex justify-between items-center'>
                    <h1 className='text-4xl font-medium'>Yeni Koleksiyonlar</h1>
                    <div className='flex gap-3'>
                        <button className="newCollections-prev-btn rounded-full border border-black w-14 md:w-20 h-14 md:h-20 flex items-center justify-center" >
                            <BiChevronLeft />
                        </button>
                        <button className="newCollections-next-btn rounded-full border border-black w-14 md:w-20 h-14 md:h-20 flex items-center justify-center" >
                            <BiChevronRight />
                        </button>
                    </div>
                </div>
                <article className='py-8'>
                    <Swiper
                        navigation={{ nextEl: ".newCollections-next-btn", prevEl: ".newCollections-prev-btn" }}

                        slidesPerView={1}
                        breakpoints={
                            {
                                992: {
                                    slidesPerView: 2
                                },
                                1200:{
                                    slidesPerView: 3
                                }
                            }
                        }
                    spaceBetween={40}
                    speed={800}
                    className="newcollections"
                    modules={[Pagination, Navigation, Autoplay]}
                    >
                    <SwiperSlide>
                        <div className='h-[600px] group relative text-white before:bg-black before:bg-opacity-30 before:absolute before:w-full before:h-full'>
                            <h3 className='text-3xl absolute top-10 left-10 flex gap-3 items-center'><span className='group-hover:w-12 duration-300 ease-in-out w-0 h-[3px] rounded-full bg-white transition-all'></span> Lorem, ipsum.</h3>
                            <img src="https://picsum.photos/600/800" alt="" className='h-full w-full object-cover' />

                            <Link href={"/"} className="pb-3 border-b-2 group-hover:opacity-100 opacity-0 transition-opacity font-medium text-xl absolute bottom-10 left-10">Ürünü İncele</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[600px] group relative text-white before:bg-black before:bg-opacity-30 before:absolute before:w-full before:h-full'>
                            <h3 className='text-3xl absolute top-10 left-10 flex gap-3 items-center'><span className='group-hover:w-12 duration-300 ease-in-out w-0 h-[3px] rounded-full bg-white transition-all'></span> Lorem, ipsum.</h3>
                            <img src="https://picsum.photos/600/800" alt="" className='h-full w-full object-cover' />

                            <Link href={"/"} className="pb-3 border-b-2 group-hover:opacity-100 opacity-0 transition-opacity font-medium text-xl absolute bottom-10 left-10">Ürünü İncele</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[600px] group relative text-white before:bg-black before:bg-opacity-30 before:absolute before:w-full before:h-full'>
                            <h3 className='text-3xl absolute top-10 left-10 flex gap-3 items-center'><span className='group-hover:w-12 duration-300 ease-in-out w-0 h-[3px] rounded-full bg-white transition-all'></span> Lorem, ipsum.</h3>
                            <img src="https://picsum.photos/600/800" alt="" className='h-full w-full object-cover' />

                            <Link href={"/"} className="pb-3 border-b-2 group-hover:opacity-100 opacity-0 transition-opacity font-medium text-xl absolute bottom-10 left-10">Ürünü İncele</Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[600px] group relative text-white before:bg-black before:bg-opacity-30 before:absolute before:w-full before:h-full'>
                            <h3 className='text-3xl absolute top-10 left-10 flex gap-3 items-center'><span className='group-hover:w-12 duration-300 ease-in-out w-0 h-[3px] rounded-full bg-white transition-all'></span> Lorem, ipsum.</h3>
                            <img src="https://picsum.photos/600/800" alt="" className='h-full w-full object-cover' />

                            <Link href={"/"} className="pb-3 border-b-2 group-hover:opacity-100 opacity-0 transition-opacity font-medium text-xl absolute bottom-10 left-10">Ürünü İncele</Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </article>
        </div>
        </section >
    )
}

export default NewCollectionsSection
