import styled from 'styled-components';

import { MainSection } from '../components/styles/Main.js';

const HomeImage = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 5vw;
  @media (min-width: 900px) {
    width: 40vw;
    height: 40vw;
    max-height: 400px;
    max-width: 400px;
    margin: 0 2vw 0 2vw;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`

const HomeMessage = styled.div`
  flex: 1;
  text-align: left;
  @media (min-width: 900px) {
    margin-right: 2vw;
  }
  p:nth-child(6) {
    margin-bottom: 0;
  }
  p:last-child {
    margin: 0;
  }
`

export default function Home() {
  return (
    <MainSection>
      <HomeImage>
        <img src="couple-4.jpeg" alt="the happy couple"/>
      </HomeImage>
      <HomeMessage>
        <p>To our dear friends & family,</p>
        <p>In an ideal world, we would have you all together, sweating collectively under a relentless Austin sun while we exchange vows forever declaring to have a flawless, fight-free marriage for the rest of our lives.</p>
        <p>However, considering the current state of the globe, we've decided to forgo a traditional wedding in an effort to keep everyone safe from Covid-19 (and to not have to delay getting married for an undetermined future date that is virus-free).</p>
        <p>This means, we're tying the knot soon! In person, our wedding will be extremely small, but we'd be honored to have your virtual attendance!</p>
        <p>We haven't given up hope to have an in-person celebration some time in the future-we just don't know when that will feasible. Until then, we're so excited to share our special day any way we can with the most important people in our lives.</p>
        <p>All our love,</p>
        <p>N & A</p>
      </HomeMessage>
    </MainSection>
  )
}