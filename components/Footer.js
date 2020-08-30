import React from 'react';
import styled from 'styled-components';

import Footnote from './Footnote.js';

const FooterContainer = styled.footer`
  width: 100%;
  p {
    font-size: 1.2rem;
  }
  a {
    color: #d95c46;
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Footnote />
      <p>Development by <a href="https://nikkibright.com" target="_blank" rel="noreferrer" rel="noopener">Nikki Bright</a>, Design by Alison Stoos</p>
    </FooterContainer>
  )
}
