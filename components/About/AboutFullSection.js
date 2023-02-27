import Link from 'next/link'
import React from 'react'
import { CgChevronRight } from 'react-icons/cg'
import { ImLeaf } from 'react-icons/im'

const AboutFullSection = () => {
    return (
        <section className='py-14 min-h-[40vh]'>
            <article className='max-h-[600px] relative flex items-center overflow-hidden'>
                <div className='w-full about-full-bg'>
                    <img src="https://picsum.photos/1920/1080" className='w-full object-cover' alt="" />
                </div>
                <div className='absolute right-0 lg:w-1/2 h-full z-10 text-white flex justify-center items-center gap-3 flex-col'>
                    <h3 className='text-2xl'>SÜRDÜRÜLEBİLİR DECOVİTA</h3>
                    <h1 className='text-6xl font-medium lg:w-1/2 text-center'>Yaşamınızı Güzelleştiriyoruz.</h1>
                    <Link href={"/"} className="flex gap-3 items-center">
                        <span className='p-3 border-2 border-white rounded-full'><CgChevronRight /></span>
                        Detaylı Oku
                    </Link>
                </div>
            </article>
            <article className='bg-[#f2ecdc] py-8 text-[#333]'>
                <div className="container mx-auto flex flex-col">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16">
                        <div className='flex gap-8 items-center p-3'>
                            <ImLeaf className='text-[#4a8934]' size={120} />
                            <div>
                                <h6 className='font-medium text-lg'>Doğadan evinize gelen dekorasyon.</h6>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa cumque ratione molestias reprehenderit sequi, ullam autem quae! Reprehenderit sunt veritatis, magni est nemo voluptates quaerat!</p>
                            </div>
                        </div>
                        <div className='flex gap-8 items-center p-3'>
                            <ImLeaf className='text-[#4a8934]' size={120} />
                            <div>
                                <h6 className='font-medium text-lg'>Doğadan evinize gelen dekorasyon.</h6>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa cumque ratione molestias reprehenderit sequi, ullam autem quae! Reprehenderit sunt veritatis, magni est nemo voluptates quaerat!</p>
                            </div>
                        </div>
                        <div className='flex gap-8 items-center p-3'>
                            <ImLeaf className='text-[#4a8934]' size={120} />
                            <div>
                                <h6 className='font-medium text-lg'>Doğadan evinize gelen dekorasyon.</h6>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa cumque ratione molestias reprehenderit sequi, ullam autem quae! Reprehenderit sunt veritatis, magni est nemo voluptates quaerat!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

        </section>
    )
}

export default AboutFullSection
