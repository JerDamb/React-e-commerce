import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
// import { mobile } from "../responsive";

const Arrow = styled.div`
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  background-color: #${(props) => props.bg};
`;

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
    <div className="container">
      <Arrow
        className="arrows"
        direction="left"
        onClick={() => handleClick("left")}
      >
        <ArrowBackIosNewIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide className="slide" bg={item.bg} key={item.id}>
            <div className="imgContainer">
              <img src={item.img} alt="" />
            </div>
            <div className="infoContainer">
              <div className="title">{item.title}</div>
              <div className="description">{item.desc}</div>
              <button>SHOW NOW</button>
            </div>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        className="arrows"
        direction="right"
        onClick={() => handleClick("right")}
      >
        <ArrowForwardIosIcon />
      </Arrow>
    </div>
  );
};

export default Slider;
