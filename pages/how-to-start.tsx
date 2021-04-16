import tw from 'twin.macro'

const Main = tw.div`
  flex
  flex-col
  items-center
  flex-1
`

const Header = tw.div`
  text-4xl
`

export default function HowToStart() {
  return (
    <Main>
      <Header>How To Start</Header>
    </Main>
  )
}