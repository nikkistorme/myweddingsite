import React from 'react';
import styled from 'styled-components';

const FootnoteContainer = styled.div`
  text-align: right;
  margin: 1vh 7vw;
  color: #87898b;
  font-size: 3.5vw;
  @media (min-width: 458px) {
    font-size: 1.6rem;
    max-width: 1200px;
  }
`;

export default function Footnote() {
  return (
    <FootnoteContainer>
      <span>*virtually</span>
    </FootnoteContainer>
  )
}