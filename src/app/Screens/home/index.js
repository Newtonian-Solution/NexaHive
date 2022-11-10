import React from 'react'
import Nav from '../../../Component/nav';
import About from '../about';
import HeroSection from '../hero';

const Home = () => {
  return (
    <div className='heading--primary u-center-text'>
      <Nav />
      <HeroSection />
      <About />
    
      
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