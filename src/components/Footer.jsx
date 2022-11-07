import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Instagram, Twitter } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="left">
        <h1 className="logo">TIB.</h1>
        <h3 className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nisi
          repellendus ducimus praesentium? Quod qui obcaecati, quaerat quasi
          placeat soluta optio voluptatem nemo consequuntur blanditiis at
          molestiae nobis natus non.
        </h3>
        <div className="socialContainer" style-color="3B5999">
          <icon className="socialIcon">
            <FacebookIcon />
          </icon>
          <icon className="socialIcon">
            <Instagram />
          </icon>
          <icon className="socialIcon">
            <Twitter />
          </icon>
        </div>
      </div>
      <div className="center">
        <div className="title">Useful link</div>
        <div className="list">
          <h3 className="listItems">Home</h3>
          <h3 className="listItems">Cart</h3>
          <h3 className="listItems">Man Fashion</h3>
          <h3 className="listItems">Woman Fashion</h3>
          <h3 className="listItems">Accessories</h3>
          <h3 className="listItems">My Account</h3>
          <h3 className="listItems">Order Tracking</h3>
          <h3 className="listItems">Wishlist</h3>
          <h3 className="listItems">Other</h3>
          <h3 className="listItems">Terms</h3>
        </div>
      </div>
      <div className="right">
        <h1 className="title">Contact</h1>
        <h3 className="contactItem">
          <LocationOnIcon />
          12 rue de Versailles, 78560, New-York
        </h3>
        <h3 className="contactItem">
          <LocalPhoneIcon />
          +33 6 12 84 35 10
        </h3>
        <h3 className="contactItem">
          <EmailIcon />
          contactNom@tib.com
        </h3>
        <img
          className="payment"
          src="http://i.ibb.co/Qfvn4z6/payment.png"
        ></img>
      </div>
    </div>
  );
};

export default Footer;
