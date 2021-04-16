import tw, { styled } from 'twin.macro';
import { getAllPosts } from '../lib/api';
import { format, parseISO } from 'date-fns';
import Link from 'next/link'

const Main = tw.main`
  mb-auto
`
const MainContainer = tw.div`
  divide-y
  divide-gray-700
`
const HeadingSection = tw.div`
  pt-6
  pb-8
  space-y-2
  md:space-y-5
`
const Posts = tw.ul`
  divide-y
  divide-gray-700
`
const PostItem = tw.li`
  py-12
`

const PostArticle = styled.article``

const PostGrid = tw.div`
  space-y-2
  xl:grid
  xl:grid-cols-4
  xl:space-y-0
  xl:items-baseline
`

const PostInfo = tw.div`
  space-y-5
  xl:col-span-3
`
const PostInfoDetails = tw.div`
  space-y-6
`

const PostInfoHeader = styled.div``

const PostHeader = tw.h2`
  text-2xl
  font-bold
  leading-8
  tracking-tight
`
const PostHeaderLink = tw.a`
  text-gray-100
`
const PostInfoTags = tw.div`
  flex
  flex-wrap
`

const PostTag = tw.a`
  mr-3
  text-sm
  font-medium
  text-blue-500
  uppercase
  hover:text-blue-400
`

const PostSummary = tw.div`
  prose
  text-gray-400
  max-w-none
`

const PostReadMore = tw.div`
  text-base
  font-medium
  leading-6
`
const ReadMoreLink = tw.a`
  text-blue-500
  hover:text-blue-400
`

const Heading = tw.h1`
  text-3xl
  font-extrabold
  leading-9 
  tracking-tight 
  text-gray-100
  sm:text-4xl 
  sm:leading-10 
  md:text-6xl 
  md:leading-loose
`

const SubHeading = tw.p`
  text-lg
  leading-8
  text-gray-400
`

const DescList = styled.dl``

const DescTerm = styled.dt`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border-width: 0;
`

const DescDetail = tw.dd`
  text-base
  font-medium
  leading-6
  text-gray-400
`

function DateFormatter({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}

export default function Home({ allPosts }) {
  console.log(allPosts);
  return (
    <Main>
      <MainContainer>
        <HeadingSection>
          <Heading>Latest</Heading>
          <SubHeading>Thoughts on how to live the life you want</SubHeading>
        </HeadingSection>
        <Posts>
          {allPosts.map(post => {
            return (
              <PostItem>
                <PostArticle>
                  <PostGrid>
                    <DescList>
                      <DescTerm>
                        Published On
                      </DescTerm>
                      <DescDetail>
                        <DateFormatter dateString={post.date} />
                      </DescDetail>
                    </DescList>
                    <PostInfo>
                      <PostInfoDetails>
                        <PostInfoHeader>
                          <PostHeader>
                            <PostHeaderLink>{post.title}</PostHeaderLink>
                          </PostHeader>
                          <PostInfoTags>
                            {post.tags.map(tag => (
                              <PostTag>{tag}</PostTag>
                            ))}
                          </PostInfoTags>
                        </PostInfoHeader>
                        <PostSummary>{post.excerpt}</PostSummary>
                      </PostInfoDetails>
                      <PostReadMore>
                        <Link href={"/posts/${post.slug}"} >
                          <ReadMoreLink>
                            Read More -&gt;
                          </ReadMoreLink>
                        </Link>
                      </PostReadMore>
                    </PostInfo>
                  </PostGrid>
                </PostArticle>
              </PostItem>
            )

          })}
        </Posts>
      </MainContainer>
    </Main>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags'
  ])

  return {
    props: { allPosts },
  }
}
