import React from 'react'

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
                </nav>
                <button
                    className="inline-flex items-center ml-auto bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                >
                    Button
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Header

