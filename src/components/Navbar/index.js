import React from 'react'
import PropTypes from 'prop-types'
import { StickyNav } from 'react-js-stickynav'

import 'react-js-stickynav/dist/index.css'
import * as S from './styled'

const Navbar = ({ title, ...props }) => {
   return (
    <S.Wrapper {...props}>
      <StickyNav length='40'>
        <h1>{title}</h1>
      </StickyNav>
    </S.Wrapper>
  )
}

Navbar.propTypes = { title: PropTypes.string }
Navbar.defaultProps = { title: 'Navbar' }

export default Navbar
