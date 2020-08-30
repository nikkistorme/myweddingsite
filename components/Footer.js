import React from 'react';
import styled from 'styled-components';

import Footnote from './Footnote.js';

const FooterContainer = styled.footer`
  width: 100%;
  p {
    margin-top: 5vh;
    font-size: 1.2rem;
    color: #b0afad;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Footnote />
      <p>Development by Nikki Bright, Design by Alison Stoos</p>
    </FooterContainer>
  )
}
