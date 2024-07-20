import React, { useState } from "react";
import { Button } from "@mui/material";
import MaldivesResult from "./MaldivesResult";
import axios from 'axios';

const MaldivesPage = () => {
  const [searchData] = useState({
    startDate: '2024-08-26',
    endDate: '2024-08-30',
    guests: 2
  });

  const handleSearch = async () => {
    try {
   
      const response = await axios.post('http://localhost:4000/search', searchData);
      console.log('Backend response:', response.data);
    
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 Stays 26 august to 30 august 2 guest</p>
        <h1>stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
        <Button variant="outlined" onClick={handleSearch}>Search</Button>
      </div>
      <MaldivesResult
        img="https://a0.muscache.com/im/pictures/airflow/Hosting-917399392486993319/original/fc5e0a18-c6d3-4f0b-839c-2dfdf11f858e.jpg?im_w=320"
        location="Wellness cottage with sauna on the outskirts of the woods"
        title="Entire home in Leersum, Netherlands"
        description="2guests 1bedroom 1bed 1bath"
        star={4.3}
        price="1,708 ZAR / night"
        total="R10,468.93 ZAR / total"
      />
    </div>
  );
};

export default MaldivesPage;
