import React from "react";
import PropTypes from "prop-types";

import { Card } from "components";
import { PanelGroup } from "rsuite";

import * as S from "./styled";

const Faq = ({ title, ...props }) => (
  <S.Wrapper {...props}>
    <PanelGroup accordion bordered>
      <Card title="Seu Zé">{title}</Card>
      <Card title="Padilha">teste 02</Card>
      <Card title="Padilha">teste 03</Card>
      <Card title="Padilha">teste 04</Card>
      <Card title="Padilha">teste 05</Card>
    </PanelGroup>
  </S.Wrapper>
);

Faq.propTypes = { title: PropTypes.string };
Faq.defaultProps = { title: "Questions" };

export default Faq;
