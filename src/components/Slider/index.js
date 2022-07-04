import React from "react";
import { Carousel } from "rsuite";

import image01 from "assets/images/image01.jpg";
import image02 from "assets/images/image02.jpg";
import image03 from "assets/images/image03.jpg";
import image04 from "assets/images/image04.jpg";
import image05 from "assets/images/image05.jpg";

import * as S from "./styled";

const Slider = ({ ...props }) => (
  <S.Wrapper {...props}>
    <Carousel
      key="right.bar"
      placement="right"
      shape="bar"
      className="custom-slider"
    >
      <img src={image01} alt="" height="300" />
      <img src={image02} alt="" height="300" />
      <img src={image03} alt="" height="300" />
      <img src={image04} alt="" height="300" />
      <img src={image05} alt="" height="300" />
    </Carousel>
  </S.Wrapper>
);

export default Slider;
