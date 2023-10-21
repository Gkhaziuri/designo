import React from 'react'
import App from '../App';
import About from '../Pages/About'
import Location from '../Pages/Location'
import Contact from '../Pages/Contact'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter ([
    {
        path:"/",
        element: <App />
    },
    {
        path:"/about",
        element: <About />
    },
    {
        path:"/locations",
        element: <Location />
    },
    {
        path:"/contact",
        element: <Contact />
    },
]);
