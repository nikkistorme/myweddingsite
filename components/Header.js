import React from 'react';
import styled from 'styled-components';

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

const SubHeader = styled.span`
  font-family: 'Nunito';
  font-size: 3.5vw;
  color: #4F5454;
  position: absolute;
  right: 0;
  bottom: -15px;
  @media (min-width: 486px) {
    font-size: 1.7rem;
  }
`;

export default function Header(props) {
  return (
    <HeaderContainer>
      <HeaderNames>
        nikki & alison
        <SubHeader>are getting hitched!*</SubHeader>
      </HeaderNames>
      <div className="desktop-only">
        <Nav />
      </div>
    </HeaderContainer>
  )
}
