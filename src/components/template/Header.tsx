import { goldenLogo, whiteLogo } from '@/config';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [t, i18n] = useTranslation();

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`transition-all duration-300 fixed top-0 left-0 ${scrolled ? "bg-black" : "bg-transparent"} w-full text-white font-kanit font-semibold h-16 flex z-10`}>
            <div className={`w-full flex justify-between items-center ${scrolled ? "md:px-24 px-8" : "md:px-12 px-5 mt-10 "}`}>
                <div className={`${scrolled ? "w-32" : "w-64"}`}>
                    <img src={scrolled ? whiteLogo : goldenLogo} alt="" />
                </div>
                <nav className="hidden md:flex space-x-4 items-center uppercase">
                    <a href="#" className="hover:text-gray-400">{t("header.menu.home")}</a>
                    <a href="#" className="hover:text-gray-400">{t("header.menu.about")}</a>
                    <a href="#" className="hover:text-gray-400">{t("header.menu.gallery")}</a>
                    <a href="#" className="hover:text-gray-400">{t("header.menu.events")}</a>
                    <a href="#" className="hover:text-gray-400">{t("header.menu.shop")}</a>
                    <div className='flex gap-2 '>
                        <FaFacebookF />
                        <FaXTwitter />
                        <FaInstagram />
                        <FaYoutube onClick={() => { i18n.changeLanguage('en') }} />
                    </div>
                </nav>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className={`${scrolled ? "text-gray-500" : "text-white"} hover:text-white focus:outline-none focus:text-white`}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className={`md:hidden bg-black text-white text-center py-4 space-y-4 uppercase absolute ${scrolled ? "top-16" : "top-24"} left-0 w-full z-20`}>
                    <a href="#" className="block hover:text-gray-400">{t("header.menu.home")}</a>
                    <a href="#" className="block hover:text-gray-400">{t("header.menu.about")}</a>
                    <a href="#" className="block hover:text-gray-400">{t("header.menu.gallery")}</a>
                    <a href="#" className="block hover:text-gray-400">{t("header.menu.events")}</a>
                    <a href="#" className="block hover:text-gray-400">{t("header.menu.shop")}</a>
                    <div className='flex justify-center gap-4'>
                        <FaFacebookF />
                        <FaXTwitter />
                        <FaInstagram />
                        <FaYoutube onClick={() => { i18n.changeLanguage('en') }} />
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;