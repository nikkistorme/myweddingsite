import styled from 'styled-components';

const GuestbookHeader = styled.h2`
  margin-left: 2vw;
  text-align: left;
  @media (min-width: 680px) {
    display: none;
  }
`;

export default function OurStory() {
  return (
    <React.Fragment>
      <GuestbookHeader>Guestbook</GuestbookHeader>
      <div>
      </div>
    </React.Fragment>
  )
}
