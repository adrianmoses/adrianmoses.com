import Image from 'next/image';
import styled from 'styled-components';

const HeroDiv = styled.div`
  width: 60%;
  display: inline-flex;
  justify-content: space-evenly;
`

const HeroMessage = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Hero() {
  return (
    <HeroDiv>
      <Image 
        src="/wes-hicks-nature.jpg"
        width={200}
        height={300}
      />
      <HeroMessage>
        <h3>Find Your Center.</h3>
        <span>Unlock Your Potential</span>
      </HeroMessage>
    </HeroDiv>
  )
}