import React from 'react';
import styled from 'styled-components';

import Footnote from './Footnote.js';
import Nav from './Nav.js';

const HeaderContainer = styled.header`
  margin-bottom: 5vw;
`

const HeaderNames = styled.h1`
  font-family: 'Braggadocio';
  font-size: 9vw;
  line-height: 0.8;
  color: #d95c46;
  margin: 45px 0 0 0;
  position: relative;
  @media (min-width: 889px) {
    font-size: 8rem;
  }
`

const BigOlAsterisk = styled.span`
  font-family: 'Nunito';
  font-size: 9vw;
  color: #87898b;
  position: absolute;
  top: -25%;
  @media (min-width: 667px) {
    font-size: 6rem;
  }
`

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderNames>
        nikki & alison
        <BigOlAsterisk>*</BigOlAsterisk>
      </HeaderNames>
      <div className="mobile-only">
        <Footnote />
      </div>
      <div className="desktop-only">
        <Nav />
      </div>
    </HeaderContainer>
  )
}
