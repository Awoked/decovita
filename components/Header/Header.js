import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { BiArrowToRight } from 'react-icons/bi'
import { CgArrowRight } from 'react-icons/cg'
import { ImArrowRight } from 'react-icons/im'

const Header = () => {

    const [mobileActive, setMobileActive] = useState(false);

    const [headerHeight, setHeaderHeight] = useState(0);
    const [headerSticky, setHeaderSticky] = useState(false);
    const [headerEffect, setHeaderEffect] = useState(false);
    const headerEl = useRef('');
    const HeaderSticykEffectHandler = (setState, duration, callback) => {
        setState
        setTimeout(() => {
            callback();
        }, duration);
    }



    const NavLinks = [
        "KURUMSAL",
        "ÜRÜNLER",
        "SATIŞ NOKTALARI",
        "MEDYA MERKEZİ",
        "BLOG",
        "TEKNİK BİLGİLER",
        "İLETİŞİM"
    ]

    useEffect(() => {
        setHeaderHeight(headerEl.current.clientHeight);
    }, []);


    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    
    useEffect(() => {
        if (scrollPosition > headerHeight + 100) {
            !headerSticky && setHeaderSticky(true)
            !headerSticky && HeaderSticykEffectHandler(setHeaderEffect(true), 500, () => setHeaderEffect(false))
        } else {
            headerSticky && setHeaderSticky(false)
        }
    }, [scrollPosition])
 
    return (
        <>
            <header ref={headerEl} className={`text-gray-600 body-font h-24 bg-[#533333] w-full z-50  opacity-0 ${headerSticky ? "fixed " : "relative"} ${!headerEffect ? "opacity-100 transition-all duration-500 translate-y-0" : "-translate-y-20"} `}>
                <div
                    className="h-full flex w-full items-center"
                >
                    <div className="logo h-full bg-white flex justify-center">
                        <a
                            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 h-full"
                        >
                            <img src="/logo.png" alt="decovita" className="w-full max-w-[300px]" />
                        </a>
                    </div>
                    <nav
                        className="px-8 flex flex-wrap items-center lg:text-xs xl:text-sm max-lg:justify-end max-lg:w-full max-lg:gap-3 text-white font-bold"
                    >
                        <ul className='hidden lg:flex'>
                            {
                                NavLinks.map((item, index) => (
                                    <li key={index}>

                                        <Link href="#" className="mr-5 hover:opacity-60 transition-opacity">{item}</Link>

                                    </li>
                                ))
                            }
                        </ul>
                        <Link href='#' className="inline-flex gap-1 items-center bg-white text-[#533333] border-0 py-0.5 px-3 hover:bg-gray-200 rounded-full text-base" >
                            Bayi Girişi
                            <CgArrowRight className='mt-0.5' />
                        </Link>
                        <div className="mobile-menu">
                            <button onClick={() => mobileActive ? setMobileActive(false) : setMobileActive(true)} className='flex overflow-hidden items-center justify-center gap-1.5 flex-col lg:hidden'>
                                <span className='bg-white h-[3px] w-8 rounded-full'></span>
                                <span className={`bg-white h-[3px] w-8 rounded-full transition-transform duration-300 ${mobileActive && "translate-x-1/2"}`}></span>
                                <span className={`bg-white h-[3px] w-8 rounded-full transition-transform duration-300 ${mobileActive && "translate-x-[90%]"}`}></span>
                            </button>
                        </div>
                    </nav>
                </div>
                <div className={`fixed w-full bg-white lg:hidden z-50 duration-500 transition-transform ${mobileActive ? "tanslate-x-0" : "translate-x-full"}`} style={{ height: `calc(100svh - ${headerHeight}px)` }}>
                    <ul className='flex py-8 text-xl font-medium gap-4 items-center flex-col'>

                        {
                            NavLinks.map((item, index) => (
                                <li key={index}>
                                    <Link href="#" className="mr-5 hover:opacity-60 transition-opacity">{item}</Link>

                                </li>
                            ))
                        }
                    </ul>
                </div>
            </header>
            {
                headerSticky && <div className={`cutter w-full`} style={{ height: `${headerHeight}px` }}></div>
            }

        </>
    )
}

export default Header

