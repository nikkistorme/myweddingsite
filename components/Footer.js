import React from 'react';
import styled from 'styled-components';

import Footnote from './Footnote.js';

const FooterContainer = styled.footer`
  position: absolute;
  bottom: -16px;
  right: 0;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Footnote />
    </FooterContainer>
  )
}
