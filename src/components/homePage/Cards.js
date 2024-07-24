import React from 'react'
import './Cards.css'

const Cards = () => {
  return (
    <div className='experience'>
    <h2 className='heading'>Discover Airbnb Experiences</h2>
    <div className='slider'>
        <div className='card'>
            <img src='https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/c92634d0-4964-439a-905d-b9129af14d34.jpeg?im_w=1440&im_q=highq' className='cards-img' alt='' />
            <h3>Things to do on your trip</h3>
            <button type='button' className='btn'>Experience</button>
        </div>
        <div className='card'>
            <img src='https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NzY0ODgzNzUzNjQzNw%3D%3D/original/cda19e4c-ae11-47b1-831b-a29f94ab76dc.png?im_w=1440&im_q=highq' className='cards-img' alt='' />
            <h3>Things to do at home</h3>
            <button type='button' className='btn'>Online Experience</button>
        </div>
    </div>

</div>
  )
}

export default Cards

