import styled from 'styled-components';

const HeroDiv = styled.div`
  width: 60%;
  display: inline-flex;
  justify-content: space-evenly;
`

const Image = styled.img`
  width: 200px;
  height: 300px;
`

const HeroMessage = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Hero() {
  return (
    <HeroDiv>
      <Image src="/wes-hicks-nature.jpg"/>
      <HeroMessage>
        <h3>Find Your Center.</h3>
        <span>Unlock Your Potential</span>
      </HeroMessage>
    </HeroDiv>
  )
}