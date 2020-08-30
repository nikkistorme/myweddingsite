import styled from 'styled-components';

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 7vw 10vw 7vw;
  max-width: 1000px;
  @media (min-width: 900px) {
    padding: 0;
    margin: auto;
  }
`;

export {MainSection};