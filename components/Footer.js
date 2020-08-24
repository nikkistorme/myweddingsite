import React from 'react';
import styled from 'styled-components';

import Footnote from './Footnote.js';

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  @media (max-width: 679px) {
    display: none;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Footnote />
    </FooterContainer>
  )
}
