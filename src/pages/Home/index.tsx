import React from 'react'
import LatestReleasesSection from './components/LatestReleasesSection'
import ShopSection from './components/ShopSection'
import StreamingPlatformsSection from './components/StreamingPlatformsSection'

const HomePage: React.FC = () => {
    return (
        <div>
            <div className='bg-banner-home w-full h-screen bg-cover bg-center bg-no-repeat  md:h-screen'></div>
            <LatestReleasesSection />
            <ShopSection />
            <StreamingPlatformsSection />
        </div>
    )

}

export default HomePage