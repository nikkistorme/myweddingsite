import styled from 'styled-components';
import Carousel from 'nuka-carousel';

const HoneymoonHeader = styled.h2`
  margin-left: 2vw;
  text-align: left;
  @media (min-width: 982px) {
    margin-right: auto;
  }
`;

const RegistryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap-reverse;
  width: 100%;
`;

const RegistryDescription = styled.div`
  max-width: 432px;
  margin: 5vw 2vw;
  @media (min-width: 982px) {
    margin: 0 2vw;
  }
  p {
    text-align: left;
    &.payment {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
    }
  }
  a {
    color: #4F5454;
    text-decoration: underline;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  max-height: 333px;
  p {
    position: absolute;
    bottom: 0;
    right: 5px;
    margin: 0;
    font-size: 1rem;
    color: white;
  }
`;

const controlsConfig = ({
  nextButtonText: ">",
  prevButtonText: "<",
  pagingDotsStyle: {
    fill: "#3E5656",
    stroke: "black"
  }
})

export default function Registry() {
  return (
    <React.Fragment>
      <HoneymoonHeader>Honeymoon Plans</HoneymoonHeader>
      <RegistryContainer>
        <RegistryDescription>
          <p>Some day in the future, when we are both pumped full of Covid vaccines, we plan to honeymoon in Portugal! Since we both have more than enough stuff filling our apartment (many things we’re still trying to convince the other to get rid of), we’re kindly requesting donations to our honeymoon fund in lieu of gifts from a traditional registry.</p>
          <p>Our dream is to spend a little over a week exploring as much of the country as we can, splitting our time between the capital city of Lisbon and relaxing in the northern city of Porto. We’re excited to take in the incredible architecture, the vibrant city life, and eat more seafood and pastéis de nata than is medically advisable. We've included here a slideshow of what we imagine our trip might look like, brought to life through the photo-editing skills of our dear friend.</p>
          {/* <p>Our dream is to spend a little over a week exploring as much of the country as we can, splitting our time between the capital city of Lisbon and relaxing in the northern city of Porto. We’re excited to take in the incredible architecture, the vibrant city life, and eat more seafood and pastéis de nata than is advisable. Since our intended trip is still a way away—we’re crossing our fingers to go in May of 2022—we don’t have a firm itinerary yet. However, here are some things we are thinking of partaking in, and that your gift would go towards:</p> */}
          {/* <ol>
            <li>Visit the Mosteiro dos Jeronimos</li>
            <li>Go canoeing at Furnas Lake</li>
            <li>Dine in the Ribeira District</li>
            <li>Drink some wine at Porto Calem</li>
            <li>Go on a food tour of Lisbon</li>
          </ol> */}
          <p>Of course, we feel so immensely blessed to have the people that we do in our lives, and being a part of our love story is the best gift you all could have given us. We can’t wait for the opportunity to see you all again!</p>
          <p className="payment">Paypal: <a href="https://paypal.me/pools/c/8saHrteiGW">Nikki & Alison Honeymoon Fund</a></p>
          <p className="payment">Venmo: <span>@Alison-Stoos</span><span>@nikkistorme</span></p>
        </RegistryDescription>
        <CarouselContainer>
          <Carousel
            autoplay={true}
            wrapAround={true}
            defaultControlsConfig={controlsConfig}>
            <img src="goof2crop.png" alt="what the happy couple would look like in Portugal 1" />
            <img src="goof3crop.png" alt="what the happy couple would look like in Portugal 2" />
            <img src="goof4crop.png" alt="what the happy couple would look like in Portugal 3" />
            <img src="megagoof.png" alt="what the happy couple would look like in Portugal 4" />
            <img src="cavegoof.png" alt="what the happy couple would look like in Portugal 5" />
          </Carousel>
          <p>Photo art by Jon Henson</p>
        </CarouselContainer>
      </RegistryContainer>
    </React.Fragment>
  )
}