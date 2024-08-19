import HomePage from '@/pages/Home';
import UserTemplate from '@/templates/user.template';
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const UserRouter: React.FC = () => {
    const userRoute = createBrowserRouter([
        {
            path: "/",
            element: <UserTemplate />,
            children: [
                {
                    path: "home",
                    element: <HomePage />
                },
            ]
        },
    ]);


    return <RouterProvider router={userRoute} />

}

export default UserRouter
