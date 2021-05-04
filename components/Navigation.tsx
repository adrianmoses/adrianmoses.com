import tw, { styled } from 'twin.macro';
import Link from 'next/link'

const NavigationBar = tw.div`
  flex
  items-center
  justify-between
  py-10
`;

const Brand = tw.div`
  text-2xl
  font-semibold
  h-6
`

const NavigationLinks = tw.ul`
  flex
  items-center
  leading-5
  text-base
`
const NavigationLink = tw.li`
  p-1
  font-medium
  text-gray-100
  sm:p-4
`

export default function Navigation() {

  return (
    <NavigationBar>
      <Brand>
        <Link href="/">
          Virtus
        </Link>
      </Brand>
      <NavigationLinks>
        <>
          <NavigationLink>
            {/* <Link href="/how-to-start">
              How To Start
            </Link> */}
          </NavigationLink>
        </>
      </NavigationLinks>
    </NavigationBar>
  );
}