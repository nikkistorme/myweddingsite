import React from 'react';
import styled from 'styled-components';

import Footnote from './Footnote.js';
import Nav from './Nav.js';

const HeaderContainer = styled.header`
  margin-bottom: 5vw;
`

const HeaderNames = styled.h1`
  display: inline-block;
  position: relative;
  max-width: 752px;
  margin: 45px auto 25px auto;
  font-family: 'Braggadocio';
  line-height: 0.8;
  font-size: 9vw;
  color: #d95c46;
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

const SubHeader = styled.span`
  font-family: 'Nunito';
  font-size: 3.5vw;
  font-weight: initial;
  color: #87898b;
  position: absolute;
  right: 0;
  bottom: -15px;
  @media (min-width: 458px) {
    font-size: 1.6rem;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderNames>
        nikki & alison
        {/* <BigOlAsterisk>*</BigOlAsterisk> */}
        <SubHeader>are getting hitched*</SubHeader>
      </HeaderNames>
      <div className="desktop-only">
        <Nav />
      </div>
    </HeaderContainer>
  )
}
