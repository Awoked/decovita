import Head from 'next/head'
import Image from 'next/image'

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


import { ImInstagram } from "react-icons/im";
import CollectionSection from '@/components/Collections/CollectionSection';

export default function Home({ SliderData, CategoryData }) {


  return (
    <>
      <Head>
        <title>Decovita</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <section className="text-gray-600 h-[80vh] body-font">

          <Swiper
            pagination={{
              el: ".swiper-pagination",
              type: "progressbar",
            }}
            navigation={{ nextEl: ".hero-next-btn", prevEl: ".hero-prev-btn" }}
            modules={[Pagination, Navigation]}
            speed={800}
            className="mySwiper"
          >
            {
              SliderData && SliderData.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-[70vh] bg-green-300 flex items-center">

                    <img src={data.imgURL} className="xl:w-full max-xl:h-full max-xl:max-w-max" alt="sliderbg" />
                    <div className="absolute text-center max-w-md">
                      <h3 className="text-white text-6xl">Lorem ipsum dolor sit amet</h3>
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
                    <ImInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ImInstagram />
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
                  <BiChevronLeft size={48} />
                </button>
                <button className='hero-next-btn rounded-full p-1 border'>
                  <BiChevronRight size={48} />
                </button>
              </div>

            </div>
          </div>
        </section>

        <CollectionSection CategoryData={CategoryData} />
      </main >
    </>
  )
}


export const getServerSideProps = async (context) => {

  const SliderRes = await fetch(process.env.URL + '/api/slider');
  const SliderData = await SliderRes.json();

  const CategoryRes = await fetch(process.env.URL + "/api/categories");
  const CategoryData = await CategoryRes.json();

  return {
    props: {
      SliderData,
      CategoryData
    }
  }
}