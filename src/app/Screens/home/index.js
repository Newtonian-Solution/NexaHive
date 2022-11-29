import React from 'react'
import Nav from '../../../Component/nav';
import About from '../about';
import Faqs from '../faqs';
import Footer from '../footer';
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
      <Faqs />
      <Footer />

    
      
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