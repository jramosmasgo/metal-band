import React from 'react'
import { useTranslation } from 'react-i18next'

const StreamingPlatformsSection: React.FC = () => {

    const [t] = useTranslation();

    return (
        <div className='bg-black flex flex-col items-center py-24' >
            <h1 className='text-white text-4xl font-bold font-kanit mb-20' >{t("home.streamingPlatform.title")}</h1>
            <div className="flex md:flex-row flex-col w-3/4 justify-between items-center gap-12 md:gap-0">
                <div className="md:w-1/3  w-full flex justify-center md:h-[50px] h-[35px]">
                    <img
                        src="https://freepnglogo.com/images/all_img/1701508608youtube-logo-transparent.png"
                        alt="YouTube Logo"
                        className="h-full object-contain"
                    />
                </div>
                <div className="md:w-1/3 w-full flex justify-center md:h-[50px] h-[40px] py-1">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png"
                        alt="Facebook Logo"
                        className="h-full object-contain"
                    />
                </div>
                <div className="md:w-1/3 w-full flex justify-center md:h-[55px] h-[45px]">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/6217cf055610e6271ee60850/7f1534c7-a3f6-4a77-b00d-94a37661c196/YouTube-Music-768x258+copy.png"
                        alt="YouTube Logo"
                        className="h-full object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default StreamingPlatformsSection