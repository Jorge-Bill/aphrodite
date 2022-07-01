import React from "react";
import * as S from "./styled";

const InstaPosts = ({ title, ...props }) => (
  <S.Wrapper
    {...props}
    loading="lazy"
    data-mc-src="3a9f4f31-cf1a-4c80-9910-0681a1033505#instagram"
  ></S.Wrapper>
);

//woxo api

export default InstaPosts;
