import React from 'react'

const Home = () => {
  return (
      <div className='heading--primary u-center-text'>
          Coming Soon
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