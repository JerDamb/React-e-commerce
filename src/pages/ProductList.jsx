import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="title-productList">Dresses</div>
      <div className="filterContainer-productList">
        <div className="filter-productList">
          <div className="filterText">Filter product:</div>
          <select>
            <option disabled selection>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          &nbsp;
          <select>
            <option disabled selection>
              SIZE
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>
        <div className="filter-productList">
          <div className="filterText">Sort product:</div>
          <select>
            <option selected>newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
