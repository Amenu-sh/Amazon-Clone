import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  console.log(basket);
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://d3vlhkqyz4y38a.cloudfront.net/skin/frontend/cedcom/default/images/amazon_affiliate/amazon-logo.png"
          alt=""
        />
      </Link>
      <div className="header_option">
        <div className="location">
          <LocationOnOutlinedIcon /> Deliver to...
        </div>
      </div>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"} className="header_clearLink">
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello {!user ? "Guest" : user?.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/Orders" className="header_clearLink">
          <div className="header_option">
            <span className="header_optionLineOne">Returns Guest</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Your Guest</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="checkout" className="header_clearLink">
          <div className="header_optionBasket">
            <ShoppingBasketOutlinedIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
