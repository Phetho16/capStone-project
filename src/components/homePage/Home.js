import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='categories'>
        <h2 className='heading'> Inspiration for your next trip</h2>
        <div className='sliders'>
      <div className='card'>
            <img src='https://a0.muscache.com/im/pictures/miso/Hosting-731050307050312405/original/adf30be8-484a-46e6-99da-293d29ea7b27.jpeg?im_w=720'
            className='image' alt=''/>
            <div className='bottom'>
            <h3>New York</h3>
            <p>1,276 km away</p>
            </div>
        </div>
        <div className='card'>
            <img src='https://a0.muscache.com/im/pictures/monet/Luxury-684763757047711680/original/48161af7-0e24-4d39-a187-b45ea277d49f?im_w=720'
             className='image' alt=''/>
            <div className='bottom'>
            <h3>Umhlanga</h3>
            <h3>Hotel</h3>
            <p>15 km away</p>
            </div>
        </div>
        <div className='card'>
            <img src='https://a0.muscache.com/im/pictures/7bd7bbaf-a58e-4822-8d53-6d4ed27c8e15.jpg?im_w=720'
             className='image' alt=''/>
            <div className='bottom'>
            <h3>Singorpor</h3>
            <h3>Hotel</h3>
            <p>30 km away</p>
            </div>
        </div>
        <div className='card'>
            <img src='https://a0.muscache.com/im/pictures/2aee3a51-fead-4432-8830-b389acfabcbe.jpg?im_w=720'
             className='image' alt=''/>
            <div className='bottom'>
            <h3>Maldives</h3>
            <h3>Hotel</h3>
            <p>165 km away</p>
            </div>
        </div>
        
    </div>
    </div>
    </>
  
  )
}

export default Home