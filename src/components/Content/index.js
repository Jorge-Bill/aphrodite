import React from "react";
import { Content as Container } from "rsuite";
import PropTypes from "prop-types";

import * as S from "./styled";

const Content = ({ children, ...props }) => (
  <Container>
    <S.ContentWrapper {...props}>{children}</S.ContentWrapper>
  </Container>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
