import React from 'react'
import Nav from '../../../Component/nav';
import About from '../about';
import HeroSection from '../hero';
import Projects from '../projects';
import Services from '../services';
import Teams from '../teams';
import Testimonial from '../testimonials';


const Home = () => {
  return (
    <div className='heading--primary'>
      <Nav />
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Teams />
      <Testimonial />
    
      
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