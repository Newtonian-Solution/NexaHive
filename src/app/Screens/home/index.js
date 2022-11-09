import React from 'react'
import Nav from '../../../Component/nav';
import HeroSection from '../hero';

const Home = () => {
  return (
    <div className='heading--primary u-center-text'>
      <Nav />
      <HeroSection />
    
      
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