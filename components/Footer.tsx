import styled from 'styled-components';

const FooterDiv = styled.div`
  border-top: 0.5px solid #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Footer() {
  return (
    <FooterDiv>
      Built By <a href="//adrianmoses.com">Adrian</a>
    </FooterDiv>
  )
}