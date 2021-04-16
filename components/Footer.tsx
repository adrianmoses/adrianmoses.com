import tw, { styled } from 'twin.macro';

/*
  border-top: 0.5px solid #e5e5e5;
  height: 150px;
*/
const FooterDiv = tw.div`
  flex
  justify-center
  items-center
  h-16
`

export default function Footer() {
  return (
    <FooterDiv>
      Built By&nbsp; <a href="https://ko-fi.com/adrianm">Adrian</a>
    </FooterDiv>
  )
}