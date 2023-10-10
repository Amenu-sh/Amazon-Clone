import React from "react";
import "./Navlinks.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Navlinks() {
  return (
    <div className="navkinks">
      <div className="navlinks_outer">
        <div className="navlinks_inner">
          <Link className="menu">
            <MenuIcon /> All
          </Link>
          <Link> Best Sellers</Link>
          <Link> Medicare</Link>
          <Link> Amazon Basics</Link>
          <Link> Prime</Link>
          <Link> Customer Support</Link>
          <Link> New Releases</Link>
          <Link> Prime Big Deal</Link>
        </div>
      </div>
    </div>
  );
}

export default Navlinks;
