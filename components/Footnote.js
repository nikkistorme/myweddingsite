import React from 'react';
import styled from 'styled-components';

const FootnoteContainer = styled.div`
  margin: 1vh 7vw;
  font-size: 3.5vw;
  font-style: italic;
  color: #4F5454;
  text-align: right;
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