import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import modules from './app-module';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AppRoutes = () => {

    useEffect(() => {
        AOS.init()
    },[])
    return (
        <>
            <Router>
                <Routes>
                    {modules.map(module =><Route {...module.routeProps} key={module.name} ></Route> )}
                </Routes>
            </Router>
        </>
    )
}