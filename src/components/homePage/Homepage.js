import React from 'react'
import Home from './Home'
import Banner from './Banner'
import Cards from './Cards'
import Inspiration from './Inspiration'
import Footer from './Footer'
import Shop from './Shop'
import Hosting from './Hosting'


const Homepage = () => {
  return (
    <div>
        <Banner/>
        <Home/>
        <Cards/>
        <Shop/>
        <Hosting/>
        <Inspiration/>
        <Footer/>
    </div>
  )
}

export default Homepage