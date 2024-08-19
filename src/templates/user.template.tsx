import React from 'react'
import { Footer, Header } from '@/components/template';
import { Outlet } from 'react-router-dom';

const UserTemplate: React.FC = () => {
    return (
        <div className=''>
            <Header />
            <Outlet />
            <Footer />
            {/* <div className='bg-banner-home w-full h-screen bg-cover bg-center bg-no-repeat mb-8 md:h-screen'></div>
            <div style={{ height: "100vh" }}></div> */}
        </div>
    )
}

export default UserTemplate