import React from 'react'
import Nav from '../../../Component/nav';

const Home = () => {
  return (
    <div className='heading--primary u-center-text'>
      <Nav />
    
      
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