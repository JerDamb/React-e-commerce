import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slider = () => {
  return (
    <>
      <div className="sliderContainer">
        <div className="arrowLeft">
          <ArrowBackIosNewIcon />
        </div>
        <div className="wrapperSlider">
          <div className="slideSlider">
            <div className="imgContainerSlider">
              <img
                src="https://media.ezibuy.com/productimages/133296/Pink/SuperZoom/Together_Woman_Crinkled_Lace_Dress_SuperZoom_1.jpg"
                alt=""
              />
            </div>
            <div className="infoContainerSlider">
              <div className="titleSlider">Titre du slider</div>
              <div className="desc">Description</div>
              <button>BUTTON</button>
            </div>
          </div>
        </div>
        <div className="arrowRight">
          <ArrowForwardIosIcon />
        </div>
      </div>
    </>
  );
};

export default Slider;
