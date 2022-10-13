import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Product = ({ item }) => {
  return (
    <>
      <div className="containerProduct">
        <div className="circle"></div>
        <img src={item.img} alt="" />
        <div className="infos">
          <div className="icon">
            <ShoppingCartOutlinedIcon />
          </div>
          <div className="icon">
            <SearchOutlinedIcon />
          </div>
          <div className="icon">
            <FavoriteBorderOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
