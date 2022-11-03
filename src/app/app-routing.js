import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import modules from './app-module';

export const AppRoutes = () => {
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