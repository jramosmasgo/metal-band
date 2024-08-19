import { discImage } from '@/config'
import React from 'react'
import { useTranslation } from 'react-i18next'

const LatestReleasesSection: React.FC = () => {

    const [t] = useTranslation();

    return (
        <div className='bg-black p-10 md:p-20 flex flex-col items-center justify-center'>
            <div className='text-white text-center'>
                <h1 className='font-viking text-4xl md:text-6xl text-gradient'>{t("home.latestReleases.title")}</h1>
                <h2 className='text-white font-bold text-xl md:text-2xl my-4'>"READY FOR THE BATTLE"</h2>
            </div>
            <div className='w-full md:w-5/6 flex flex-col md:flex-row items-center justify-center'>
                <img className='w-3/4 md:w-2/3 mb-4 md:mb-0' src={discImage} alt="" />
                <div className='relative text-center md:text-end md:ml-4'>
                    <h1 className='font-viking text-3xl md:text-5xl text-gradient'>¡Reserva ya!</h1>
                    <h1 className='text-white text-lg md:text-xl font-semibold uppercase font-semibold'>Y obtén items exclusivos de la banda</h1>
                </div>
            </div>
            <h1 className='text-xl md:text-2xl text-gradient font-bold text-center mt-4'>NUESTRO ALBUM DEBUT "El PODER"</h1>
        </div>

    )
}

export default LatestReleasesSection