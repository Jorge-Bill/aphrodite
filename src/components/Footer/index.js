import React from "react";
import { Footer as BaseFooter } from "rsuite";

import * as S from "./styled";

const Footer = () => (
  <BaseFooter>
    <S.FooterWrapper>
      <S.Container>
        <S.Text>Build with JS e ❤️</S.Text>
      </S.Container>
    </S.FooterWrapper>
  </BaseFooter>
);

export default Footer;
