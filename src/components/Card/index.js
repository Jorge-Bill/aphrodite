import React from "react";
import PropTypes from "prop-types";

import { Panel } from "rsuite";
import * as S from "./styled";

const Card = ({ title, children, ...props }) => (
  <S.Wrapper {...props}>
    <Panel header={title} shaded>
      {children}
    </Panel>
  </S.Wrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
