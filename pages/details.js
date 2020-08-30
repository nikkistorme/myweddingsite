import styled from 'styled-components';

import { FunkyBorderBottomLeft, FunkyBorderTopRight } from '../components/styles/FunkyBorders.js';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 750px;
  min-height: 300px;
  padding: 1em;
  position: relative;
`;

const DetailsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  &:last-child {
    margin-bottom: 0;
    * {
      @media (min-width: 1000px) {
        margin-top: 30px;
      }
    }
  }
  * {
    font-size: 4.3vw;
    text-align: left;
    margin: 0;
    width: 100%;
    @media (min-width: 396px) {
      font-size: 1.7rem;
    }
  }
  h3 {
    flex: 1;
    font-weight: 900;
  }
  p {
    flex: 4;
    text-align: right;
  }
`;

export default function Details() {
  return (
    <DetailsContainer>
      <FunkyBorderBottomLeft />
      <FunkyBorderTopRight />
      <DetailsRow>
        <h3>Who:</h3>
        <p>Nikki & Alison (and all of you!)</p>
      </DetailsRow>
      <DetailsRow>
        <h3>What:</h3>
        <p>Their virtual wedding ceremony</p>
      </DetailsRow>
      <DetailsRow>
        <h3>Where:</h3>
        <p>Travis County Courthouse / your computer screen</p>
      </DetailsRow>
      <DetailsRow>
        <h3>When:</h3>
        <p>November 21st 2020, 4pm CST</p>
      </DetailsRow>
      <DetailsRow>
        <h3>How:</h3>
        <p>A link to the livestream will be posted here closer to the date.</p>
      </DetailsRow>
    </DetailsContainer>
  )
}