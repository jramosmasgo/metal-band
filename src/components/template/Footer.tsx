import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
    const [_t, i18n] = useTranslation();

    const changeLanguage = () => {
        const newLanguage = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className='w-full bg-black p-4 text-center'>
            <p className='text-white' onClick={() => changeLanguage()} > Damazor - {new Date().getFullYear()}
            </p>
        </div>
    )
}

export default Footer