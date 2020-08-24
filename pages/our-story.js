import styled from 'styled-components';

import { MainSection } from '../components/styles/Main.js';
import { FunkyBorderTopLeft, FunkyBorderRightBottom } from '../components/styles/FunkyBorders.js';

const StoryContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin: 0 6em;
  padding: 1em;
  @media (min-width: 700px) {
    flex-direction: row
  }
`;

const Story = styled.div`
  text-align: left;
  @media (min-width: 700px) {
    max-width: 275px;
  }
`;

export default function OurStory() {
  return (
    <MainSection>
      <StoryContainer>
        <FunkyBorderTopLeft />
        <FunkyBorderRightBottom />
        <Story>
          <h2>Nikki's version:</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </Story>
        {/* <span className="story-divider"></span> */}
        <Story>
          <h2>Alison's version:</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </Story>
      </StoryContainer>
    </MainSection>
  )
}