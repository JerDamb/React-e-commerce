import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { sliderItems } from "../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <>
      <div className="sliderContainer">
        <div className="arrowLeft" onClick={() => handleClick("left")}>
          <ArrowBackIosNewIcon />
        </div>
        <div className="wrapperSlider">
          {sliderItems.map((item) => (
            <div className="slideSlider">
              <div className="imgContainerSlider">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="infoContainerSlider">
                <h1>{item.title}</h1>
                <div className="descriptionSlider">{item.desc}</div>
                <button>SHOW NOW.</button>
              </div>
            </div>
          ))}
        </div>
        <div className="arrowRight" onClick={() => handleClick("right")}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </>
  );
};

export default Slider;
