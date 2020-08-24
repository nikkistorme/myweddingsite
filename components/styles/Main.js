import styled from 'styled-components';

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 7vw 10vw 7vw;
  max-width: 1000px;
  @media (min-width: 900px) {
    flex-direction: row;
    margin: auto;
  }
`;

export {MainSection};