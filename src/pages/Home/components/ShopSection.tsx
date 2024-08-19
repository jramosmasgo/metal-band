import CardProduct from '@/components/shared/CardProduct'
import { capProductImage, tShirtProduct2Image, tShirtProductImage } from '@/config'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ShopSection: React.FC = () => {
    const [t] = useTranslation();

    return (
        <div className='bg-banner-products md:h-screen h-max flex flex-col items-center justify-center p-5 md:p-10'>
            <h1 className='my-10 md:my-0 font-viking text-yellow-400 text-4xl md:text-6xl text-center'>{t("home.featured.title")}</h1>
            <div className='w-full md:w-5/6 flex flex-col md:flex-row items-center gap-10 mt-10 md:mt-20'>
                <CardProduct img={tShirtProductImage} />
                <CardProduct img={tShirtProduct2Image} />
                <CardProduct img={capProductImage} />
            </div>
        </div>

    )
}

export default ShopSection