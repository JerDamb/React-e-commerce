import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";

const Product = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <div className="wrapper">
        <div className="imgContainer">
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
        </div>
        <div className="infoContainer">
          <h1 className="title">Lets title.</h1>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            eligendi nobis natus qui aliquid quas, eveniet nihil ipsam ab unde
            nam? Fugit odit delectus vero dolorem tenetur soluta sed id!
          </div>
          <div className="price">$ 20</div>
          <div className="filterContainer">
            <div className="filter">
              <div className="filterTitle">Color</div>
              <div className="colors">
                <div className="filterColor" color="black"></div>
                <div className="filterColor" color="darkblue"></div>
                <div className="filterColor" color="gray"></div>
              </div>
            </div>
            <div className="filter">
              <div className="filterTitle"></div>
              <select className="filterSize">
                <option className="filterSizeOption">XS</option>
                <option className="filterSizeOption">S</option>
                <option className="filterSizeOption">M</option>
                <option className="filterSizeOption">L</option>
                <option className="filterSizeOption">XL</option>
                <option className="filterSizeOption">XXL</option>
              </select>
            </div>
            <div className="addContainer">
              <div className="amountContainer">
                <div className="remove">
                  <div className="amount">1</div>
                  <div className="add"></div>
                  <button>ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;
