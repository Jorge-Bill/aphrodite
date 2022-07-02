import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "rsuite";
import { Card } from "components";

import * as S from "./styled";

const Games = ({ title, ...props }) => (
  <S.Wrapper {...props}>
    <Row>
      <Col md={6} sm={12}>
        <Card title="Padilha">teste 05</Card>
      </Col>
      <Col md={6} sm={12}>
        <Card title="Padilha">teste 02</Card>
      </Col>
      <Col md={6} sm={12}>
        <Card title="Padilha">teste 03</Card>
      </Col>
      <Col md={6} sm={12}>
        <Card title="Padilha">teste 04</Card>
      </Col>
    </Row>
  </S.Wrapper>
);

Games.propTypes = { title: PropTypes.string };
Games.defaultProps = { title: "Games" };

export default Games;
