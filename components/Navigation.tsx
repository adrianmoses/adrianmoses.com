import styled from 'styled-components';
import Link from 'next/link'
import userbase from 'userbase-js'
import { UserProps } from './types';

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
    cursor: pointer;
  }
`

export default function Navigation({ user }: UserProps) {

  const handleLogOut = async () => {
    await userbase.signOut();
  }

  return (
    <NavigationBar>
      <Brand>
        <Link href="/">
          Virtus
        </Link>
      </Brand>
      <NavigationLinks>
        { user ? (
          <>
            <li>
                <a onClick={handleLogOut}>Log Out</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/log-in">
                <a>
                  Log In
                </a>
              </Link>
            </li>
            <li>
              <Link href="/sign-up">
                Sign Up
              </Link>
            </li>
          </>
        )
      }
      </NavigationLinks>
    </NavigationBar>
  );
}