import Image from 'next/image';
import tw from 'twin.macro';

const HeroDiv = tw.div`
  w-7/12
  inline-flex
  justify-evenly
  items-center
  px-2
  py-8
  flex-1
`

const HeroMessage = tw.div`
  flex
  flex-col
  justify-start
`

export default function Hero() {
  return (
    <HeroDiv>
      <HeroMessage>
        <h3 tw={"text-xl font-semibold mb-6"}>Find Your Center</h3>
        <span>Unlock Your Potential</span>
      </HeroMessage>
    </HeroDiv>
  )
}