import React from "react";
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {
  return (
    <div className="containerNewsletter">
      <h1 className="title">Newsletter</h1>
      <div className="description">
        Get timely updates from your favorite products.
      </div>
      <div className="inputContainer">
        <input className="input" placeholder="Your email"></input>
        <button>
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
