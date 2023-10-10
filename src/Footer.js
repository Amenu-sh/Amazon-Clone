import React from "react";
import "./Footer.css";
import { Link, Navigate } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_area">
      <div className="footarea_top">
        <Link to="/login">Back to Top</Link>
      </div>
      <div className="footerarea_links">
        <div className="footerarea_linkarea">
          <div>
            <h4>Get to Know Us</h4>
            <p>Careers</p>
            <p>Amazon Newsletter</p>
            <p>About Amazon</p>
            <p>Accessibility</p>
            <p>Sustainability</p>
            <p>Press Center</p>
            <p>Investor Relations</p>
            <p>Amazon Devices</p>
            <p>Amazon Science</p>
          </div>
        </div>
        <div className="footerarea_linkarea">
          <div>
            <h4>Make Money with Us</h4>
            <p>Sell products on Amazon </p>
            <p>Sell apps on Amazon</p>
            <p>Supply to Amazon </p>
            <p>Protect & Build Your Brand</p>
            <p>Become an Affiliate</p>
            <p>Become a Delivery Driver</p>
            <p>Start a Package Delivery Business</p>
            <p>Advertise Your Products</p>
            <p>Self-Publish with Us</p>
            <p>Host an Amazon Hub</p>
            <p>›See More Ways to Make Money</p>
          </div>
        </div>
        <div className="footerarea_linkarea">
          <h4>Amazon Payment Products</h4>
          <p>Sell products on Amazon </p>
          <p>Sell apps on Amazon</p>
          <p>Supply to Amazon </p>
          <p>Protect & Build Your Brand</p>
          <p>Become an Affiliate</p>
          <p>Become a Delivery Driver</p>
          <p>Start a Package Delivery Business</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish with Us</p>
        </div>
        <div className="footerarea_linkarea">
          <h4>Let Us Help You</h4>
          <p>Sell products on Amazon </p>
          <p>Sell apps on Amazon</p>
          <p>Supply to Amazon </p>
          <p>Protect & Build Your Brand</p>
          <p>Become an Affiliate</p>
          <p>Become a Delivery Driver</p>
          <p>Start a Package Delivery Business</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish with Us</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
