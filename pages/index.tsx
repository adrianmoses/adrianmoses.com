import styled from 'styled-components';
import Hero from '../components/Hero';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`


export default function Home() {
  return (
    <Main>
      <Hero />
    </Main>
  )
}
