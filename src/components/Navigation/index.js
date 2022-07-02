import React from "react";
import PropTypes from "prop-types";

import { Navbar, Nav } from "rsuite";

import * as S from "./styled";

const Navigation = ({ title, ...props }) => {
  return (
    <S.Wrapper {...props}>
      <Navbar appearance="subtle">
        <Navbar.Brand href="#">{title}</Navbar.Brand>
        <Nav pullRight>
          <Nav.Item eventKey="1">Home</Nav.Item>
          <Nav.Item eventKey="2">Sobre mim</Nav.Item>
          <Nav.Menu title="Jogos">
            <Nav.Item eventKey="4">mandala</Nav.Item>
            <Nav.Item eventKey="5">padilha</Nav.Item>
          </Nav.Menu>
        </Nav>
      </Navbar>
    </S.Wrapper>
  );
};

Navbar.propTypes = { title: PropTypes.string.isRequired };

export default Navigation;
