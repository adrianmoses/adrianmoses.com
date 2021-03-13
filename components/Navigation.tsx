import styled from 'styled-components';

const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.div`
  font-size: 14px;
  text-transform: uppercase;
`

const NavigationLinks = styled.ul`
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;

  & > li {
    margin-left: 12px;
  }
`

export default function Navigation() {
  return (
    <NavigationBar>
      <Brand>Virtus</Brand>
      <NavigationLinks>
        <li>Sign In</li>
        <li>Sign Up</li>
      </NavigationLinks>
    </NavigationBar>
  );
}