import styled from 'styled-components';

import { FunkyBorderTopLeft, FunkyBorderRightBottom } from '../components/styles/FunkyBorders.js';

const OurStoryHeader = styled.h2`
  margin-left: 2vw;
  text-align: left;
  @media (min-width: 680px) {
    display: none;
  }
`;

const StoryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 750px;
  padding: 1em;
  @media (min-width: 700px) {
    flex-direction: row
  }
`;

const Story = styled.div`
  text-align: left;
  @media (min-width: 700px) {
    max-width: 350px;
  }
`;

export default function OurStory() {
  return (
    <React.Fragment>
      <OurStoryHeader>Our Story</OurStoryHeader>
      <StoryContainer>
        <FunkyBorderTopLeft />
        <FunkyBorderRightBottom />
        <Story>
          <h2>Nikki's version:</h2>
          <p>"Alison and I met as coworkers at Houndstooth Coffee in Austin. At the time I was only working there on the weekends, but even in those limited windows we managed to get along well. During our shifts we were always laughing and having way too much fun. I was determined not to fall in love with a coworker, but she was just too charming and broke my resolve. I eventually confessed my love, and she confessed in turn that it was reciprocated (thank goodness). Our first real date was a resounding success. We went on an 18-hour marathon date, driving from Austin to Dallas to have a day together. I vividly remember being at the Perot Museum of Nature and Science and laughing so hard that we had to be silent for a few minutes so as not to hurt ourselves. After that we continued to laugh, support each other, and love each other more and more over the next three years. She was with me as I worked in my free time to change careers, and I was with her when she got into an MFA program that took us across the country. It’s about time we sealed the deal and made it official."</p>
        </Story>
        <Story>
          <h2>Alison's version:</h2>
          <p>"Nikki and I hit it off immediately as coworkers while working as baristas at Houndstooth. So much so, I think we were a little bit of a pain to work with, always goofing off and giggling and getting distracted from the task on hand. It was obvious to everyone else how easily he and I got along, but it took us a few months to figure out how we felt about each other. What sealed the deal was a trip we took together to Dallas, where we spent twelve nonstop hours just talking, laughing, and hanging out. In fact, we laughed so much on that trip that we started to feel sick, and we imposed a five minute “no talking” rule in order for us to catch our breath. I think we’re lucky to say that over the past three years together, not much has changed in our relationship. Even though we’ve both changed careers, moved across the country, and faced the ever-shifting reality of 2020 together, we’re still just two people who enjoy each other’s company. I feel so blessed to be marrying such a kind, generous, funny person, and I’m excited to goof off together forever & ever."</p>
        </Story>
      </StoryContainer>
    </React.Fragment>
  )
}
