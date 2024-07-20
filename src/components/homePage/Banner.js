import React from 'react'
import Search from '../layout/Search'
import './Banner.css'

const Banner = () => {
  return (
    <>
    <Search/>
      <div className='hero-bar'>
        <div className='banner'>
            <h1>Not sure where to go? Perfect</h1>
            <button className='btn_secondary' type='button'>I'm flexible</button>
        </div>
      </div>
      </>
  )
}

export default Banner