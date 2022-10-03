import React from "react";
import { Search, ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="left">
            <span>EN</span>
            <div className="searchContainer">
              <input type="text" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </div>
          </div>
          <div className="center">
            <h1>TIB.</h1>
          </div>
          <div className="right">
            <div className="menuItem">REGISTER</div>
            <div className="menuItem">SIGN IN</div>
            <div className="menuItem">
              <Badge badgeContent={4} color="primary">
                <ShoppingCart />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
