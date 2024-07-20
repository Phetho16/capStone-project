import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='categories'>
        <h2 className='heading'> Inspiration for your next trip</h2>
        <div className='sliders'>
      <Link to='/accommodations'>  <div className='card'>
            <img src='https://a0.muscache.com/im/pictures/miso/Hosting-989209304846654831/original/e3c22fa1-1713-49a7-95d3-d0fd1e3ef881.jpeg?im_w=320'
            className='image' alt=''/>
            <div className='bottom'>
            <h3>New York</h3>
            <p>1,276 km away</p>
            </div>
        </div></Link>
        <div className='card'>
            <img src='https://a0.muscache.com/im/pictures/miso/Hosting-989209304846654831/original/e3c22fa1-1713-49a7-95d3-d0fd1e3ef881.jpeg?im_w=320'
             className='image' alt=''/>
            <div className='bottom'>
            <h3>Umhlanga</h3>
            <h3>Hotel</h3>
            <p>15 km away</p>
            </div>
        </div>
        <div className='card'>
            <img src='https://a0.muscache.com/im/pictures/miso/Hosting-989209304846654831/original/e3c22fa1-1713-49a7-95d3-d0fd1e3ef881.jpeg?im_w=320'
             className='image' alt=''/>
            <div className='bottom'>
            <h3>Singorpor</h3>
            <h3>Hotel</h3>
            <p>30 km away</p>
            </div>
        </div>
        <div className='card'>
            <img src='https://a0.muscache.com/im/pictures/miso/Hosting-989209304846654831/original/e3c22fa1-1713-49a7-95d3-d0fd1e3ef881.jpeg?im_w=320'
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