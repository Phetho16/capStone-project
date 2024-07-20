import React from "react";
import { Button } from "@mui/material";
import NetherLandsResult from "./NetherLandsResult";
import "./NetherLandsPage.css";

const NetherLandsPage = () => {
  return (
    <div className="searchPage">
      <div className="serchPage_info">
        <p>62 Stays 26 august to 30 august 2 guest</p>
        <h1>stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <NetherLandsResult
        img="https://a0.muscache.com/im/pictures/INTERNAL/INTERNAL-ImageByPlaceId-ChIJvXv7qr-ZtSQRiWKVgeEJRUE-large_background/original/2d084f8e-8743-4095-aefa-30474ffbaec6.jpeg?im_w=960"
        location="Entire cabin in Athuruga Island, Maldives"
        title="Stylish Water Bungalow"
        description="3guests 2bedroom 2bed 2bath"
        star={4.3}
        price="1,708 ZAR / night"
        total="R10,468.93 ZAR / total"
      />
      <NetherLandsResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-696847375839509250/original/74c47993-1eda-4726-b9ee-d485bc53bc4d.jpeg?im_w=320"
        location="Private room in resort in Fenfushi, Maldives"
        title="Water Bungalow Over Stilt"
        description="6guests 3bedroom 5bed 3bath"
        star={4.93}
        price=" R1,014.71 ZAR / night"
        total="R7,264.71 ZAR / total"
      />
      <NetherLandsResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-894949439085363605/original/a70d6696-1ae2-42d0-83e8-aa742fdc93a1.jpeg?im_w=320"
        location="Entire rental unit in Cape Town, South Africa"
        title="Beautiful 1 Bedroom flat with Solar installation"
        description="2guests 1bedroom 1bed 1bath"
        star={4.94}
        price="R626 ZAR / night"
        total="R3,638.16 ZAR/ total"
      />
      <NetherLandsResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-940984175243609278/original/5e10fb2f-a459-4fd6-ba47-1681cf528e97.jpeg?im_w=320"
        location="Water Villa with Private Pool & Floating Breakfast"
        title="Private room in resort in Island Hideaway at Dhonakulhi, Maldives"
        description="2guests Studio 1bed 1bath"
        star={4.93}
        price="R430 ZAR / night"
        total="R2,847.76 ZAR / total"
      />
      <NetherLandsResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-964577283039581384/original/89948277-b0d1-4d0c-a62f-1df8f06db1b5.png?im_w=320"
        location="Chic Water Bungalow Over Stilt"
        title="Entire cabin in Fenfushi, Maldives"
        description="2 guests 1 bedroom 1 bed 1 bath"
        star={4.94}
        price="R950 ZAR / night"
        total="R6,102.36 ZAR / total"
      />
    </div>
  );
};

export default NetherLandsPage;
