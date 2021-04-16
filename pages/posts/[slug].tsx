import { useRouter } from 'next/router'
import Link from 'next/link'
import tw, { styled, css } from 'twin.macro';
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import { DateFormatter } from '../../components/DateFormatter';
import React from 'react';

const Main = tw.main`
  mb-auto
`
const MainContainer = tw.div`
  max-w-3xl
  px-4
  mx-auto
  sm:px-6
  xl:max-w-5xl
  xl:px-0
`

const ContentContainer = tw.div`
  xl:divide-y
  xl:divide-gray-700
`
const PostContentGridStyles = css`
 grid-template-rows: auto 1fr;
`
const PostContentContainer = tw.div`
  pb-8
  divide-y
  xl:divide-y-0
  divide-gray-700
  xl:grid
  xl:grid-cols-4
  xl:gap-x-6
`

const PostHeader = tw.header`
  pt-6
  xl:pb-6
`
const PostHeaderText = tw.div`
  space-y-1
  text-center
`
const DescList = tw.dl`
  space-y-10
`

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

const PostTitle = tw.h1`
  text-3xl
  font-extrabold
  leading-9
  tracking-tight
  text-gray-100
  sm:text-4xl
  sm:leading-10
  md:text-5xl
  md:leading-14
`

const PostDescList = tw.dl`
  pt-6
  pb-10
  xl:pt-11
  xl:border-b
  xl:border-gray-700
`

const PostDescTerm = styled.dt`
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

const PostDescDetail = tw.dd`
`

const AuthorList = tw.ul`
  flex 
  justify-center 
  space-x-8 
  xl:block 
  sm:space-x-12 
  xl:space-x-0 
  xl:space-y-8
`

const AuthorListItem = tw.li`
  flex
  items-center
  space-x-2
`

const AuthorImage = tw.img`
  w-10
  h-10
  rounded-full
`

const AuthorDescList = tw.dl`
  text-sm
  font-medium
  leading-5
  whitespace-nowrap
`

const AuthorDescDetail = tw.dd`
  text-gray-100
`

const AuthorTwitterLink = tw.a`
  text-blue-500 
  hover:text-blue-400
`

const PostContent = tw.div`
  divide-y
  divide-gray-700
  xl:pb-0
  xl:col-span-3
  xl:row-span-2
`

const PostContentProse = tw.div`
  pt-10
  pb-8
  prose
  text-gray-300
  max-w-none
`

const PostContentFooter = tw.div``

const PostFooter = tw.footer``


export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Main>
      <MainContainer>
        <article>
          <ContentContainer>
            <PostHeader>
              <PostHeaderText>
                <DescList>
                  <div>
                    <DescTerm>
                      Published On
                    </DescTerm>
                    <DescDetail>
                      <DateFormatter dateString={post.date} />
                    </DescDetail>
                  </div>
                </DescList>
                <div>
                  <PostTitle>{post.title}</PostTitle>
                </div>
              </PostHeaderText>
            </PostHeader>
            <PostContentContainer css={PostContentGridStyles}>
              <PostDescList>
                <PostDescTerm>Authors</PostDescTerm>
                <PostDescDetail>
                  <AuthorList>
                    <AuthorListItem>
                      {/* <AuthorImage 
                        src="/static/images/avatar.png" 
                        alt="avatar"
                      /> */}
                      <AuthorDescList>
                        <PostDescTerm>Name</PostDescTerm>
                        <AuthorDescDetail>Adrian Moses</AuthorDescDetail>
                        <PostDescTerm>Twitter</PostDescTerm>
                        <dd>
                          <Link
                            href="https://twitter.com/marsmoses"
                          >
                            <AuthorTwitterLink 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              >@marmoses
                            </AuthorTwitterLink>
                          </Link>
                        </dd>
                      </AuthorDescList>
                    </AuthorListItem>
                  </AuthorList>
                </PostDescDetail>
              </PostDescList>
              <PostContent>
                <PostContentProse
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                <PostContentFooter></PostContentFooter>
              </PostContent>
              <PostFooter></PostFooter>
            </PostContentContainer>
          </ContentContainer>
        </article>
      </MainContainer>
    </Main>
  )
}

export async function getStaticProps({ params }) {
  const post: any = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'tags',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}