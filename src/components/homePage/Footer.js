import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="top">
        <div className="col">
          <h2>Support</h2>
          <span className="text ">Help Center</span>
          <span className="text ">Safety Information</span>
          <span className=" text">Cancellation Options</span>
          <span className=" text">Our COVID-19 Response</span>
          <span className="text ">Support people with disabilities</span>
          <span className="text ">Report a neighbourhood concern</span>
        </div>
        <div className="col">
          <h2>Community</h2>
          <span className="text ">Airbnb.org disaster relief</span>
          <span className="text ">Support Afghanistan refugees</span>
          <span className=" text">Celebrating diversity & belonging</span>
          <span className=" text">Combating discrimination</span>
          <span className="text ">Support people with disabilities</span>
          <span className="text ">Report a neighbourhood concern</span>
        </div>
        <div className="col">
          <h2>Hosting</h2>
          <span className="text ">Try Hosting</span>
          <span className="text ">Aircover: protection for hosts</span>
          <span className=" text">Explore hosting resources</span>
          <span className=" text">Combating discrimination</span>
          <span className="text ">Support people with disabilities</span>
          <span className="text ">Report a neighbourhood concern</span>
          <span className="text ">How to host responsibly</span>
        </div>
        <div className="col">
          <h2>About</h2>
          <span className="text ">Newsroom</span>
          <span className="text ">Learn about new features</span>
          <span className=" text">Letter from our founders</span>
          <span className=" text">Careers</span>
          <span className="text ">Investor</span>
          <span className="text ">Airbnb Luxe</span>
        </div>
      </div>

      <div className="bottom">
        <p>@2024 Airbnb-Clone-Zaio, Inc</p>
        <span className="bottom_text">Privacy</span>
        <span className="bottom_text">Terms & Conditions</span>
        <span className="bottom_text">Sitemap</span>
      </div>
    </>
  );
};

export default Footer;
