import React from 'react'
import Nav from '../../../Component/nav';
import About from '../about';
import HeroSection from '../hero';
import Services from '../services';

const Home = () => {
  return (
    <div className='heading--primary u-center-text'>
      <Nav />
      <HeroSection />
      <About />
      <Services />
    
      
    </div>
  )
}
const home = {
  routeProps: {
    path: "/",
    element: <Home/>,
  },
  name: "home",
};
export default home