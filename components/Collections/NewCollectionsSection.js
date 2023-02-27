import React from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'

const NewCollectionsSection = () => {
    return (
        <section className='py-14'>
            <div className="container mx-auto">
                <div className='section-title flex justify-between'>
                    <h1 className='text-4xl font-medium'>Yeni Koleksiyonlar</h1>
                    <div>   
                        <button className="newCollections-prev-btn rounded-full border border-black w-12 h-24 flex items-center justify-center" >
                            <BiChevronLeft />
                        </button>
                        <button className="newCollections rounded-full border border-black w-24 h-24 flex items-center justify-center" >
                            <BiChevronRight />
                        </button>
                    </div>
                </div>
                <article>
                    <Swiper
                        navigation={{ nextEl: ".newCollections", prevEl: ".newCollections-prev-btn" }}
                        modules={[Pagination, Navigation, Autoplay]}
                        speed={800}
                        className="newcollections"
                    >
                        <SwiperSlide>

                        </SwiperSlide>
                    </Swiper>
                </article>
            </div>
        </section>
    )
}

export default NewCollectionsSection
