import styled from 'styled-components';

import { FunkyBorderBottomLeft, FunkyBorderTopRight } from '../components/styles/FunkyBorders.js';

const DetailsHeader = styled.h2`
  margin-left: 2vw;
  text-align: left;
  @media (min-width: 680px) {
    display: none;
  }
`;

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
  z-index: 2;
  &:last-child {
    margin-bottom: 0;
    h3,
    ul {
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
  ul {
    max-width: 500px;
    text-align: left;
  }
  p,
  li {
    flex: 4;
    text-align: right;
    margin-bottom: 5px;
  }
  a {
    font-weight: 600;
    color: #3E5656;
    text-decoration: underline;
  }
`;

export default function Details() {
  return (
    <React.Fragment>
      <DetailsHeader>Details</DetailsHeader>
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
          <ul>
            <li>Click <a href="https://kwri.zoom.us/j/97712613427?pwd=WWh4UXkxc2trYTBaWjdPaVNybUpnUT09" target="_blank">here</a> access the zoom call for the ceremony</li>
            <li>The call will be joinable starting at 3:30pm CST</li>
            <li>If prompted, the passcode is 112120</li>
            <li>Please keep your audio muted, but your cameras can be on!</li>
            <li>When the ceremony is about to begin, Nikki will join the call</li>
            <li>It's recommended to "pin" Nikki's video to see all the action!</li>
            <li>After the ceremony, the happy couple will stop by to say hi before going on their way!</li>
          </ul>
        </DetailsRow>
      </DetailsContainer>
    </React.Fragment>
  )
}