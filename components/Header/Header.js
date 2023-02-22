import React from 'react'
import { BiArrowToRight } from 'react-icons/bi'
import { CgArrowRight } from 'react-icons/cg'
import { ImArrowRight } from 'react-icons/im'

const Header = () => {
    return (
        <header className="text-gray-600 body-font h-24 bg-[#533333]">
            <div
                className="h-full flex w-full items-center"
            >
                <div className="logo h-full bg-white flex justify-center">
                    <a
                        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 h-full"
                    >
                        <img src="/logo.png" alt="decovita" className="h-full" />
                    </a>
                </div>
                <nav
                    className="px-8 hidden lg:flex flex-wrap items-center lg:text-xs xl:text-sm justify-center text-white font-bold"
                >
                    <a href="#" className="mr-5 hover:opacity-60 transition-opacity">KURUMSAL</a>
                    <a href="#" className="mr-5 hover:opacity-60 transition-opacity">ÜRÜNLER</a>
                    <a href="#" className="mr-5 hover:opacity-60 transition-opacity">SATIŞ NOKTALARI</a>
                    <a href="#" className="mr-5 hover:opacity-60 transition-opacity">MEDYA MERKEZİ</a>
                    <a href="#" className="mr-5 hover:opacity-60 transition-opacity">BLOG</a>
                    <a href="#" className="mr-5 hover:opacity-60 transition-opacity">TEKNİK BİLGİLER</a>
                    <a href="#" className="mr-5 hover:opacity-60 transition-opacity">İLETİŞİM</a>
                    <a href='#' className="inline-flex gap-1 items-center ml-auto bg-white text-[#533333] border-0 py-0.5 px-3 hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0" >
                        Bayi Girişi
                        <CgArrowRight className='mt-0.5' />
                    </a>
                </nav>

            </div>
        </header>
    )
}

export default Header

