import { whiteLogo } from '@/config';
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
    const [t, i18n] = useTranslation();

    const changeLanguage = () => {
        const newLanguage = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <footer className="bg-black text-gray-400 py-10 px-5 md:px-20">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold text-yellow-500 mb-4">
                        <img src={whiteLogo} alt="" className='w-[200px]' />
                    </h2>
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Damazor . {t("footer.rights")}.
                    </p>
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                    <nav className="flex space-x-6 text-sm">
                        <a href="#" className="hover:text-white">Home</a>
                        <a href="#" className="hover:text-white">About</a>
                        <a href="#" className="hover:text-white">Gallery</a>
                        <a href="#" className="hover:text-white">Shop</a>
                        <a href="#" className="hover:text-white">Contact</a>
                    </nav>
                </div>
                <div className="flex space-x-6 text-2xl">
                    <a href="#" className="hover:text-white">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="hover:text-white">
                        <FaInstagram />
                    </a>
                    <a href="#" className="hover:text-white">
                        <FaTwitter onClick={() => changeLanguage()} />
                    </a>
                    <a href="#" className="hover:text-white">
                        <FaYoutube />
                    </a>
                </div>
            </div>
            <div className="text-center mt-10 text-gray-500 text-sm">
                <p>{t('footer.author')} <a href="#" className="text-yellow-500 hover:underline">Jean Ramos Masgo</a></p>
            </div>
        </footer>
    )
}

export default Footer