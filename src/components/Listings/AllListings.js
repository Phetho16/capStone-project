import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from 'axios';
import './AllListings.css'

const AllListings = () => {
  const [residencies, setResidencies] = useState([]);

  useEffect(() => {
    const fetchResidencies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/residency/allresd');
        setResidencies(response.data); 
      } catch (error) {
        console.error('Error fetching residencies:', error);
      }
    };

    fetchResidencies();
  }, []);

  return (
    <div className="residentPage">
    <div className="residentPage_info">
      <p>82 Stays 26 September to 10 October 2 guest</p>
      <h1>Stays Nearby</h1>
      <Button variant="outlined">Cancellation Flexibility</Button>
      <Button variant="outlined">Type of place</Button>
      <Button variant="outlined">Price</Button>
      <Button variant="outlined">Rooms and beds</Button>
      <Button variant="outlined">More filters</Button>
    </div>
    <div>
     
      <div className="residencies-list">
        {residencies.map(residency => (
          <div key={residency.id} className="residency-item">
            <img src={residency.image} alt={residency.title} className="residency-image"/>
               
            <div className="residency-details">
            <FavoriteBorderIcon className='icon'/> 
              <h2>{residency.title}</h2>
              <p>{residency.description}</p>
              <h2>Price: ${residency.price}</h2>
              <p>Address: {residency.address}, {residency.city}, {residency.country}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AllListings;