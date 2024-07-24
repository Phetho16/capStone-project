import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from 'axios';
import './Listings.css';

const Listings = ({ locations }) => {
  const [residencies, setResidencies] = useState([]);
  const [currentListing, setCurrentListing] = useState(0); // State to track the current listing index

  useEffect(() => {
    const fetchResidencies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/residency/allresd');
        setResidencies(response.data); // Assuming response.data is an array of residencies
      } catch (error) {
        console.error('Error fetching residencies:', error);
      }
    };

    fetchResidencies();
  }, []);

  const nextListing = () => {
    setCurrentListing((prevIndex) => (prevIndex + 1) % residencies.length);
  };

  const previousListing = () => {
    setCurrentListing((prevIndex) => (prevIndex - 1 + residencies.length) % residencies.length);
  };

  return (
    <div className="residentPage">
      <div className="residentPage_info">
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <div>
        
        <div className="residencies-list">
          {residencies.length > 0 && (
            <div key={residencies[currentListing]._id} className="residency-item">
              <img src={residencies[currentListing].image} alt={residencies[currentListing].title} className="residency-image" />
              <div className="residency-details">
                <FavoriteBorderIcon className='icon' />
                <h2>{residencies[currentListing].title}</h2>
                <p>{residencies[currentListing].description}</p>
                <h2>Price: ${residencies[currentListing].price}</h2>
                <p>Address: {residencies[currentListing].address}, {residencies[currentListing].city}, {residencies[currentListing].country}</p>
                <p>
                  Location:{" "}
                  <a href={`#${residencies[currentListing].city.toLowerCase()}`}>
                    {residencies[currentListing].city}
                  </a>
                </p>
              </div>
            </div>
          )}
          <div className="listing-navigation">
            <Button variant="outlined" onClick={previousListing}>Previous</Button>
            <Button variant="outlined" onClick={nextListing}>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
