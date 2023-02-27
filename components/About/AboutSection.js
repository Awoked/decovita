import Link from 'next/link'
import React from 'react'
import { CgChevronRight } from 'react-icons/cg'

const AboutSection = () => {
    return (
        <section className='py-14'>
            <div className='w-full min-h-[40vh] flex flex-col md:flex-row gap-20'>
                <article className='md:w-1/2 overflow-hidden flex items-center justify-center'>
                    <img src="https://picsum.photos/1920/1080" className=' h-full object-cover' alt="" />
                </article>
                <article className='md:w-1/2 flex items-center'>
                    <div className='md:w-1/2 flex flex-col gap-2 text-xl'>
                        <div className='pb-4'>
                            <h1 className='uppercase text-[#5bcbf5] text-xl'>NEDEN DECOVİTA?</h1>
                            <h3 className='text-4xl font-semibold text-[#333333]'>Üstün Teknoloji, <br /> Eşsiz Tasarımlar</h3>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <p>
                                Decovita Seramik olarak 2015 yılında kurduğumuz fabrikamızla, kaliteli ürünleri ulaşılabilir
                                fiyatlarla müşterilerimize sunmak için yola çıktık.
                            </p>
                            <p>
                                Üstün tasarım ve kalite anlayışımızla gelenekselliği ve modernliği harmanlayarak, 2.500'ün üzerinde
                                farklı desenimizle hayatınızı zenginleştirmek için çalışıyoruz.
                            </p>
                            <p>
                                En son teknolojiyle yüksek standartlarda ürettiğimiz
                            </p>
                        </div>
                        <Link href={"/"} className="flex gap-3 items-center">
                            <span className='p-3 border-2 border-[#333] rounded-full'><CgChevronRight /></span>
                            Devamını Oku
                        </Link>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default AboutSection
